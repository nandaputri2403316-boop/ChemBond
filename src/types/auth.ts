/**
 * src/types/auth.ts
 * Kontrak tipe data autentikasi dan otorisasi profil pengguna ChemBond.
 * Disiapkan untuk integrasi Firebase Authentication dan Cloud Firestore.
 */

export type UserRole = 'student' | 'teacher' | 'guest';

export type AuthProviderType = 'google' | 'password';

/**
 * Struktur dokumen profil pengguna yang akan disimpan di Cloud Firestore.
 * Sesuai DATABASE.md dan PRD ChemBond.
 * Kata sandi TIDAK disimpan di dokumen Firestore ini (dikelola oleh Firebase Auth).
 */
export interface UserProfile {
  uid: string;
  namaLengkap: string;
  kelas?: string; // Wajib untuk siswa, opsional/ditambahkan kemudian jika login Google
  nomorPresensi?: number | string; // Wajib untuk siswa
  email: string;
  provider: AuthProviderType;
  role: UserRole;
  createdAt: string; // ISO 8601
  isClassMember?: boolean; // Menandakan apakah siswa terdaftar dalam daftar kelas resmi
  profileCompleted?: boolean; // Indikator apakah profil siswa sudah lengkap (terutama untuk login Google)
}

/**
 * Tipe data formulir masuk (Login)
 */
export interface LoginFormData {
  email: string;
  password: string;
}

/**
 * Tipe data formulir pendaftaran (Register)
 */
export interface RegisterFormData {
  namaLengkap: string;
  kelas: string;
  nomorPresensi: string;
  email: string;
  password: string;
  confirmPassword: string;
}

/**
 * Matriks Hak Akses Pengguna ChemBond
 */
export interface UserPermissions {
  canLearnLocally: boolean;
  canSubmitAndReadOwnResults: boolean;
  canReadClassResults: boolean;
  roleLabel: string;
  description: string;
}

/**
 * Evaluasi izin akses berdasarkan peran dan keanggotaan kelas
 */
export function evaluateUserPermissions(
  role: UserRole = 'guest',
  isClassMember: boolean = false
): UserPermissions {
  switch (role) {
    case 'teacher':
      return {
        canLearnLocally: true,
        canSubmitAndReadOwnResults: true,
        canReadClassResults: true,
        roleLabel: 'Guru Berwenang',
        description: 'Dapat mengakses seluruh materi lokal, membaca hasil belajar siswa, serta memantau hasil seluruh kelas.',
      };

    case 'student':
      if (isClassMember) {
        return {
          canLearnLocally: true,
          canSubmitAndReadOwnResults: true,
          canReadClassResults: false,
          roleLabel: 'Siswa Anggota Kelas',
          description: 'Dapat mengakses materi lokal, mengirim hasil kuis, dan membaca riwayat belajar miliknya sendiri.',
        };
      }
      return {
        canLearnLocally: true,
        canSubmitAndReadOwnResults: false,
        canReadClassResults: false,
        roleLabel: 'Akun di Luar Daftar Kelas',
        description: 'Dapat belajar secara lokal, namun pengiriman hasil ke cloud ditolak sampai terverifikasi di daftar kelas.',
      };

    case 'guest':
    default:
      return {
        canLearnLocally: true,
        canSubmitAndReadOwnResults: false,
        canReadClassResults: false,
        roleLabel: 'Tamu (Tanpa Login)',
        description: 'Dapat mempelajari materi dan mencoba kuis interaktif secara lokal tanpa sinkronisasi data cloud.',
      };
  }
}

