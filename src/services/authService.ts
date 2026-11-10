/**
 * src/services/authService.ts
 * Jembatan Layanan Autentikasi ChemBond.
 * Disiapkan khusus untuk integrasi Firebase Authentication dan Cloud Firestore.
 *
 * PENTING:
 * Sesuai aturan pengembangan ChemBond, fungsi-fungsi di bawah tidak membuat
 * sesi login palsu ke database cloud sebelum Firebase SDK dikonfigurasi secara resmi.
 */

import type { LoginFormData, RegisterFormData, UserProfile } from '../types/auth';

/**
 * Status koneksi Firebase SDK (akan bernilai true saat Firebase dikonfigurasi resmi)
 */
export const isFirebaseConfigured = false;

/**
 * Hasil operasi autentikasi
 */
export interface AuthOperationResult {
  success: boolean;
  user?: UserProfile;
  error?: string;
  isBackendPending?: boolean;
}

/**
 * Validasi format email menggunakan regex standar
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

/**
 * Validasi kekuatan kata sandi:
 * Minimal 6 karakter, memiliki huruf dan angka untuk keamanan dasar
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
 * Fungsi masuk dengan Email dan Kata Sandi.
 * Nantinya akan memanggil: `signInWithEmailAndPassword(auth, email, password)`
 * dan mengambil profil dari Firestore `getDoc(doc(db, "users", user.uid))`.
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

  // Simulasi latensi jaringan kecil untuk pengujian UI loading state
  await new Promise((resolve) => setTimeout(resolve, 600));

  // 2. Pemeriksaan status Firebase
  if (!isFirebaseConfigured) {
    return {
      success: false,
      isBackendPending: true,
      error:
        'Layanan Firebase Authentication belum dikonfigurasi pada proyek ini. Antarmuka dan validasi formulir telah siap untuk dihubungkan pada tahap integrasi backend berikutnya.',
    };
  }

  // Hook implementasi Firebase Authentication yang akan diaktifkan:
  // try {
  //   const userCredential = await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
  //   const userDoc = await getDoc(doc(db, "users", userCredential.user.uid));
  //   return { success: true, user: userDoc.data() as UserProfile };
  // } catch (err: any) {
  //   return { success: false, error: mapFirebaseAuthError(err.code) };
  // }

  return { success: false, error: 'Koneksi backend belum aktif.' };
}

/**
 * Fungsi pendaftaran akun siswa baru.
 * Nantinya akan memanggil: `createUserWithEmailAndPassword(auth, email, password)`
 * dan menyimpan dokumen profil ke Cloud Firestore: `setDoc(doc(db, "users", user.uid), profile)`.
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
      error: 'Nomor presensi harus berupa angka yang valid (antara 1 sampai 99).',
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

  // Simulasi latensi jaringan untuk pengujian UI loading state
  await new Promise((resolve) => setTimeout(resolve, 600));

  // 2. Pemeriksaan status Firebase
  if (!isFirebaseConfigured) {
    return {
      success: false,
      isBackendPending: true,
      error:
        'Pendaftaran berhasil divalidasi secara lokal! Integrasi Firebase Authentication & Cloud Firestore sedang disiapkan untuk tahap berikutnya, sehingga akun belum disimpan ke server cloud.',
    };
  }

  // Hook implementasi Firebase Authentication & Firestore yang akan diaktifkan:
  // try {
  //   const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
  //   const profile: UserProfile = {
  //     uid: userCredential.user.uid,
  //     namaLengkap: data.namaLengkap.trim(),
  //     kelas: data.kelas,
  //     nomorPresensi: presensiNum,
  //     email: data.email.trim(),
  //     provider: 'password',
  //     role: 'student', // Default pendaftaran mandiri adalah siswa
  //     createdAt: new Date().toISOString(),
  //     isClassMember: false,
  //     profileCompleted: true,
  //   };
  //   await setDoc(doc(db, "users", profile.uid), profile);
  //   return { success: true, user: profile };
  // } catch (err: any) {
  //   return { success: false, error: mapFirebaseAuthError(err.code) };
  // }

  return { success: false, error: 'Koneksi backend belum aktif.' };
}

/**
 * Fungsi masuk menggunakan Google Authentication.
 * Nantinya akan memanggil: `signInWithPopup(auth, googleProvider)`.
 */
export async function loginWithGoogle(): Promise<AuthOperationResult> {
  // Simulasi latensi
  await new Promise((resolve) => setTimeout(resolve, 600));

  if (!isFirebaseConfigured) {
    return {
      success: false,
      isBackendPending: true,
      error:
        'Metode masuk dengan Google telah disiapkan pada antarmuka. Integrasi Google Auth Provider dengan Firebase Console akan diaktifkan pada tahap konfigurasi backend berikutnya.',
    };
  }

  // Hook implementasi Firebase Google Auth:
  // try {
  //   const provider = new GoogleAuthProvider();
  //   const result = await signInWithPopup(auth, provider);
  //   // Periksa apakah profil sudah ada di Firestore
  //   // Jika belum ada, arahkan ke tahap lengkapi data profil siswa (kelas & nomor presensi)
  // } catch (err: any) {
  //   return { success: false, error: mapFirebaseAuthError(err.code) };
  // }

  return { success: false, error: 'Koneksi Google Provider belum aktif.' };
}

/**
 * Fungsi keluar dari sesi akun.
 * Nantinya akan memanggil: `signOut(auth)`.
 */
export async function logoutUser(): Promise<void> {
  // Hook signOut(auth)
  await new Promise((resolve) => setTimeout(resolve, 200));
}

