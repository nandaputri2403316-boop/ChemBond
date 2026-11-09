/**
 * src/data/types.ts
 * Kontrak tipe data resmi ChemBond - Media Pembelajaran Ikatan Kimia SMA
 * Sesuai pedoman AGENTS.md, PRD.md, DESAIN_TEKNIS.md, dan DATABASE.md
 */

// ============================================================================
// 1. Identitas Modul dan Navigasi
// ============================================================================

/**
 * ID modul pembelajaran resmi (AGENTS.md Rule 5 & DESAIN_TEKNIS.md Bab 2):
 * - materi-1 : Pengenalan Ikatan Kimia
 * - materi-2 : Jenis-Jenis Ikatan Kimia
 * - materi-3 : Contoh Penerapan Ikatan Kimia
 */
export type ModuleId = 'materi-1' | 'materi-2' | 'materi-3';

/**
 * ID pemilik default untuk implementasi Pertemuan 3 (tanpa login/cloud DB).
 * Menyiapkan kompatibilitas migrasi ke akun siswa pada Pertemuan 4.
 */
export const GUEST_OWNER_ID = 'guest' as const;

// ============================================================================
// 2. Kontrak Data Materi Pembelajaran
// ============================================================================

export interface SubModule {
  id: string;                       // e.g. 'sub-1-1', 'sub-1-2'
  title: string;                    // Judul submateri
  content: string[];                // Kumpulan paragraf penjelasan konsep
  keyPoints?: string[];             // Poin ringkasan / rumus penting
  examples?: string[];              // Contoh senyawa atau fenomena kehidupan sehari-hari
  illustrationType?: 'atom' | 'lewis' | 'molecule' | 'crystal' | 'reaction';
}

export interface ModuleData {
  id: ModuleId;
  order: number;                    // 1, 2, atau 3
  title: string;                    // e.g. "Pengenalan Ikatan Kimia"
  subtitle: string;                 // Deskripsi ringkas topik
  description: string;              // Pengantar lengkap modul
  learningObjectives: string[];     // Tujuan pembelajaran modul
  submodules: SubModule[];          // Submateri terstruktur
  summary: string[];                // Rangkuman akhir modul
  author: string;                   // Penanggung jawab sesuai TEAM.md
}

// ============================================================================
// 3. Kontrak Data Soal dan Kuis Pilihan Ganda (Tepat 4 Pilihan: A, B, C, D)
// ============================================================================

export type OptionKey = 'A' | 'B' | 'C' | 'D';

export interface QuizOption {
  key: OptionKey;
  text: string;
}

/**
 * Tuple khusus yang memastikan setiap soal WAJIB memiliki tepat 4 pilihan
 * dengan urutan kunci: A, B, C, dan D.
 */
export type FourQuizOptions = [
  QuizOption & { key: 'A' },
  QuizOption & { key: 'B' },
  QuizOption & { key: 'C' },
  QuizOption & { key: 'D' }
];

export interface QuizQuestion {
  id: string;                       // ID unik butir soal (e.g. 'q-m1-01', 'q-m2-03')
  moduleId: ModuleId;               // Keterikatan butir soal dengan modul materi
  questionNumber: number;           // Nomor urut soal dalam kelompok kuis
  question: string;                 // Teks pertanyaan (mendukung notasi kimia)
  options: FourQuizOptions;         // Tepat empat pilihan jawaban: A, B, C, D
  correctAnswer: OptionKey;         // Kunci jawaban resmi
  explanation: string;              // Pembahasan ilmiah mengapa jawaban benar/salah
}

export interface QuizGroup {
  moduleId: ModuleId;
  title: string;
  questionVersion: string;          // Versi bank soal (e.g. '1.0') sesuai AGENTS.md Rule 5
  questions: QuizQuestion[];        // Minimal 5 butir soal pilihan ganda
}

// ============================================================================
// 4. Kontrak Riwayat Percobaan Kuis (Quiz Attempt)
// ============================================================================

export interface QuizAttempt {
  attemptId: string;                // ID unik percobaan (e.g. 'att-1731140000-xyz12')
  ownerId: typeof GUEST_OWNER_ID | string; // 'guest' pada Pertemuan 3; disiapkan untuk ID siswa di Pertemuan 4
  moduleId: ModuleId;               // ID modul kuis yang dikerjakan
  activityId: string;               // e.g. 'kuis-materi-1'
  questionVersion: string;          // e.g. '1.0'

  /**
   * Rekaman jawaban awal yang disimpan TEPAT saat tombol Submit ditekan,
   * SEBELUM kunci jawaban, skor, dan pembahasan ditampilkan kepada siswa (AGENTS.md Rule 6).
   * Format: Record<questionId, selectedOptionKey>
   */
  initialAnswers: Record<string, OptionKey>;

  score: number;                    // 0 - 100: (totalCorrect / totalQuestions) * 100
  totalCorrect: number;             // Jumlah jawaban benar
  totalQuestions: number;           // Jumlah seluruh butir soal
  submittedAt: string;              // ISO 8601 timestamp (e.g. '2026-11-09T12:00:00.000Z')
}

// ============================================================================
// 5. Kontrak Progres Belajar dan Skema LocalStorage (Pertemuan 3)
// ============================================================================

export interface ModuleProgress {
  moduleId: ModuleId;
  isCompleted: boolean;             // Dinyatakan selesai HANYA melalui tombol "Tandai Materi Selesai"
  completedAt: string | null;       // ISO 8601 timestamp saat tombol ditekan
}

export interface UserProgressData {
  schemaVersion: string;            // '1.0' untuk identitas skema penyimpanan
  modules: Record<ModuleId, ModuleProgress>;

  /**
   * Riwayat seluruh percobaan kuis yang tersimpan terpisah.
   * Setiap percobaan baru menghasilkan attemptId baru dan TIDAK menimpa riwayat sebelumnya.
   * Skor utama yang ditampilkan pada Progres diambil dari elemen terakhir (percobaan terbaru).
   */
  quizAttempts: QuizAttempt[];

  lastUpdated: string;              // ISO 8601 timestamp aktivitas terakhir
}

// ============================================================================
// 6. Tipe Data Ringkasan Pembacaan Progres (Helper UI)
// ============================================================================

export interface ModuleQuizSummary {
  moduleId: ModuleId;
  latestScore: number | null;       // Skor percobaan terakhir (sebagai skor utama)
  latestAttempt: QuizAttempt | null;
  totalAttempts: number;            // Jumlah seluruh percobaan yang pernah dilakukan
  attemptsHistory: QuizAttempt[];   // Riwayat lengkap untuk audit/evaluasi
}

