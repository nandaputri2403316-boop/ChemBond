/**
 * src/services/authService.ts
 * Layanan Autentikasi Pengguna ChemBond terintegrasi dengan Firebase Authentication & Cloud Firestore.
 * Sesuai DATABASE.md, PRD.md, dan AGENTS.md.
 */

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';

import { auth, db, googleProvider, isFirebaseConfigured } from './firebase';
import type { LoginFormData, RegisterFormData, UserProfile } from '../types/auth';

export { isFirebaseConfigured };

/**
 * Hasil operasi autentikasi untuk antarmuka UI
 */
export interface AuthOperationResult {
  success: boolean;
  user?: UserProfile;
  error?: string;
  isBackendPending?: boolean;
}

/**
 * Menerjemahkan kode error Firebase Authentication menjadi pesan yang ramah dalam Bahasa Indonesia
 */
export function mapFirebaseAuthError(errorCode: string): string {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Format alamat email tidak valid.';
    case 'auth/user-not-found':
    case 'auth/wrong-password':
    case 'auth/invalid-credential':
      return 'Email atau kata sandi tidak cocok. Silakan periksa kembali.';
    case 'auth/email-already-in-use':
      return 'Alamat email ini sudah terdaftar. Silakan masuk atau gunakan email lain.';
    case 'auth/weak-password':
      return 'Kata sandi terlalu lemah. Gunakan minimal 6 karakter kombinasi.';
    case 'auth/popup-closed-by-user':
      return 'Jendela masuk Google ditutup sebelum proses verifikasi selesai.';
    case 'auth/popup-blocked':
      return 'Jendela popup Google diblokir oleh peramban. Harap izinkan popup di situs ini.';
    case 'auth/network-request-failed':
      return 'Koneksi jaringan terputus. Harap periksa koneksi internet Anda.';
    case 'auth/too-many-requests':
      return 'Terlalu banyak percobaan masuk yang gagal. Silakan tunggu beberapa saat lagi.';
    case 'auth/operation-not-allowed':
      return 'Metode autentikasi ini belum diaktifkan di Firebase Console. Harap aktifkan Email/Password atau Google Provider di menu Authentication > Sign-in method.';
    default:
      return `Gagal melakukan autentikasi (${errorCode}). Silakan coba kembali.`;
  }
}

/**
 * Validasi format email menggunakan regex standar
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

/**
 * Validasi kekuatan kata sandi (minimal 6 karakter)
 */
export function validatePasswordSecurity(password: string): { isValid: boolean; message?: string } {
  if (password.length < 6) {
    return {
      isValid: false,
      message: 'Kata sandi minimal harus terdiri dari 6 karakter.',
    };
  }
  return { isValid: true };
}

/**
 * Masuk menggunakan Email dan Kata Sandi melalui Firebase Authentication
 * serta membaca dokumen profil siswa dari Cloud Firestore
 */
export async function loginWithEmail(
  credentials: LoginFormData
): Promise<AuthOperationResult> {
  // 1. Validasi input lokal
  if (!credentials.email.trim() || !credentials.password) {
    return {
      success: false,
      error: 'Mohon isi alamat email dan kata sandi Anda.',
    };
  }

  if (!isValidEmail(credentials.email)) {
    return {
      success: false,
      error: 'Format alamat email tidak valid (contoh: siswa@sekolah.sch.id).',
    };
  }

  const activeAuth = auth;
  const activeDb = db;

  // 2. Pemeriksaan kesiapan Firebase SDK
  if (!isFirebaseConfigured || !activeAuth || !activeDb) {
    return {
      success: false,
      isBackendPending: true,
      error:
        'Konfigurasi Firebase belum terpasang di berkas .env.local. Silakan salin kredensial dari Firebase Console ke .env.local untuk mengaktifkan koneksi.',
    };
  }

  try {
    const userCredential = await signInWithEmailAndPassword(
      activeAuth,
      credentials.email.trim(),
      credentials.password
    );

    // Ambil dokumen profil siswa dari Cloud Firestore (users/{uid})
    const userDocRef = doc(activeDb, 'users', userCredential.user.uid);
    const userDocSnap = await getDoc(userDocRef);

    let profile: UserProfile;
    if (userDocSnap.exists()) {
      profile = userDocSnap.data() as UserProfile;
    } else {
      profile = {
        uid: userCredential.user.uid,
        namaLengkap: userCredential.user.displayName || credentials.email.split('@')[0],
        email: credentials.email.trim(),
        provider: 'password',
        role: 'student',
        createdAt: new Date().toISOString(),
        isClassMember: false,
        profileCompleted: false,
      };
      await setDoc(userDocRef, profile);
    }

    return {
      success: true,
      user: profile,
    };
  } catch (err: unknown) {
    const firebaseErr = err as { code?: string; message?: string };
    const errorMessage = firebaseErr.code
      ? mapFirebaseAuthError(firebaseErr.code)
      : firebaseErr.message || 'Gagal masuk ke akun.';
    return {
      success: false,
      error: errorMessage,
    };
  }
}

/**
 * Pendaftaran akun siswa baru menggunakan Email dan Kata Sandi pada Firebase Authentication
 * serta menyimpan profil ke Cloud Firestore (users/{uid})
 */
export async function registerWithEmail(
  data: RegisterFormData
): Promise<AuthOperationResult> {
  // 1. Validasi input lokal
  if (
    !data.namaLengkap.trim() ||
    !data.kelas ||
    !data.nomorPresensi.trim() ||
    !data.email.trim() ||
    !data.password ||
    !data.confirmPassword
  ) {
    return {
      success: false,
      error: 'Seluruh kolom pendaftaran wajib diisi.',
    };
  }

  if (!isValidEmail(data.email)) {
    return {
      success: false,
      error: 'Format email tidak valid. Gunakan alamat email aktif.',
    };
  }

  const presensiNum = parseInt(data.nomorPresensi, 10);
  if (isNaN(presensiNum) || presensiNum <= 0 || presensiNum > 99) {
    return {
      success: false,
      error: 'Nomor presensi harus berupa angka 1 sampai 99.',
    };
  }

  const passwordValidation = validatePasswordSecurity(data.password);
  if (!passwordValidation.isValid) {
    return {
      success: false,
      error: passwordValidation.message,
    };
  }

  if (data.password !== data.confirmPassword) {
    return {
      success: false,
      error: 'Konfirmasi kata sandi tidak cocok dengan kata sandi yang dimasukkan.',
    };
  }

  const activeAuth = auth;
  const activeDb = db;

  // 2. Pemeriksaan kesiapan Firebase SDK
  if (!isFirebaseConfigured || !activeAuth || !activeDb) {
    return {
      success: false,
      isBackendPending: true,
      error:
        'Konfigurasi Firebase belum terpasang di berkas .env.local. Silakan salin kredensial dari Firebase Console ke .env.local untuk mengaktifkan koneksi.',
    };
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(
      activeAuth,
      data.email.trim(),
      data.password
    );

    // Perbarui display name di Firebase Auth
    await updateProfile(userCredential.user, {
      displayName: data.namaLengkap.trim(),
    });

    // Simpan dokumen profil siswa ke Cloud Firestore (users/{uid})
    const profile: UserProfile = {
      uid: userCredential.user.uid,
      namaLengkap: data.namaLengkap.trim(),
      kelas: data.kelas,
      nomorPresensi: presensiNum,
      email: data.email.trim(),
      provider: 'password',
      role: 'student', // AGENTS.md: default role pendaftaran mandiri adalah siswa
      createdAt: new Date().toISOString(),
      isClassMember: false,
      profileCompleted: true,
    };

    const userDocRef = doc(activeDb, 'users', profile.uid);
    await setDoc(userDocRef, profile);

    return {
      success: true,
      user: profile,
    };
  } catch (err: unknown) {
    const firebaseErr = err as { code?: string; message?: string };
    const errorMessage = firebaseErr.code
      ? mapFirebaseAuthError(firebaseErr.code)
      : firebaseErr.message || 'Gagal mendaftarkan akun siswa.';
    return {
      success: false,
      error: errorMessage,
    };
  }
}

/**
 * Masuk menggunakan Google Provider melalui Firebase Authentication
 * serta membuat atau mengambil dokumen profil dari Cloud Firestore
 */
export async function loginWithGoogle(): Promise<AuthOperationResult> {
  const activeAuth = auth;
  const activeDb = db;
  const activeProvider = googleProvider;

  if (!isFirebaseConfigured || !activeAuth || !activeDb || !activeProvider) {
    return {
      success: false,
      isBackendPending: true,
      error:
        'Konfigurasi Firebase belum terpasang di berkas .env.local. Silakan salin kredensial dari Firebase Console ke .env.local untuk mengaktifkan koneksi.',
    };
  }

  try {
    const result = await signInWithPopup(activeAuth, activeProvider);
    const userDocRef = doc(activeDb, 'users', result.user.uid);
    const userDocSnap = await getDoc(userDocRef);

    let profile: UserProfile;
    if (userDocSnap.exists()) {
      profile = userDocSnap.data() as UserProfile;
    } else {
      profile = {
        uid: result.user.uid,
        namaLengkap: result.user.displayName || 'Siswa ChemBond',
        email: result.user.email || '',
        provider: 'google',
        role: 'student',
        createdAt: new Date().toISOString(),
        isClassMember: false,
        profileCompleted: false, // Menandakan dapat melengkapi data kelas & nomor presensi
      };
      await setDoc(userDocRef, profile);
    }

    return {
      success: true,
      user: profile,
    };
  } catch (err: unknown) {
    const firebaseErr = err as { code?: string; message?: string };
    const errorMessage = firebaseErr.code
      ? mapFirebaseAuthError(firebaseErr.code)
      : firebaseErr.message || 'Gagal masuk dengan akun Google.';
    return {
      success: false,
      error: errorMessage,
    };
  }
}

/**
 * Mengakhiri sesi akun (Logout) melalui Firebase Authentication
 */
export async function logoutUser(): Promise<void> {
  const activeAuth = auth;
  if (activeAuth) {
    await signOut(activeAuth);
  }
}

/**
 * Mengamati perubahan status autentikasi pengguna secara realtime (Realtime Auth Listener)
 * Menjaga sesi login tetap aktif saat halaman di-refresh
 */
export function subscribeToAuthChanges(
  callback: (user: UserProfile | null) => void
): () => void {
  const activeAuth = auth;
  const activeDb = db;

  if (!isFirebaseConfigured || !activeAuth || !activeDb) {
    callback(null);
    return () => {};
  }

  return onAuthStateChanged(activeAuth, async (firebaseUser) => {
    if (!firebaseUser) {
      callback(null);
      return;
    }

    try {
      const userDocRef = doc(activeDb, 'users', firebaseUser.uid);
      const userDocSnap = await getDoc(userDocRef);
      if (userDocSnap.exists()) {
        callback(userDocSnap.data() as UserProfile);
      } else {
        const fallbackProfile: UserProfile = {
          uid: firebaseUser.uid,
          namaLengkap: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || 'Pengguna',
          email: firebaseUser.email || '',
          provider: firebaseUser.providerData[0]?.providerId === 'google.com' ? 'google' : 'password',
          role: 'student',
          createdAt: new Date().toISOString(),
          isClassMember: false,
          profileCompleted: false,
        };
        callback(fallbackProfile);
      }
    } catch (err) {
      console.error('Gagal menyinkronkan profil Firestore:', err);
      callback(null);
    }
  });
}
