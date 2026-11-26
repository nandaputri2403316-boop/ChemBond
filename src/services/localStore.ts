/**
 * src/services/localStore.ts
 * Layanan penyimpanan lokal ChemBond berbasis LocalStorage.
 * Menangani penyimpanan draf pengerjaan, riwayat percobaan kuis,
 * isolasi antarakun berbasis UID dan versi bank soal (Tahap 3 Bagian E),
 * serta penanganan kesalahan (quota, corrupt data, storage disabled).
 */

export const CHEMBOND_QUIZ_DRAFT_KEY = 'chembond_modul1_quiz_draft';
export const CHEMBOND_QUIZ_HISTORY_KEY = 'chembond_modul1_quiz_history';

/**
 * Menghasilkan kunci penyimpanan LocalStorage untuk draf pengerjaan
 * yang terikat pada UID siswa yang login atau 'guest' untuk pengguna mandiri.
 */
export function getQuizDraftKey(ownerId: string = 'guest'): string {
  const safeOwner = (ownerId && ownerId.trim()) ? ownerId.trim() : 'guest';
  return `chembond_modul1_quiz_draft_${safeOwner}`;
}

/**
 * Interface draf kuis saat sedang dikerjakan siswa
 * Dilengkapi dengan ownerId (UID/guest) dan questionVersion untuk isolasi akun.
 */
export interface QuizDraft {
  attemptId: string;
  ownerId?: string; // UID siswa atau 'guest'
  questionVersion?: string; // misal 'v1'
  currentIndex: number;
  answers: Record<string, string>; // { [questionId]: 'A' | 'B' | 'C' | 'D' | 'E' }
  lastSaved?: string; // ISO 8601
}

/**
 * Interface rekaman riwayat percobaan kuis setelah submit
 */
export interface QuizAttemptRecord {
  attemptId: string;
  ownerId: string; // default 'guest' atau UID siswa
  studentName?: string;
  kelas?: string;
  nomorPresensi?: number | string;
  moduleId: string; // 'materi-1'
  activityId: string; // 'kuis-diagnostik-m1'
  questionVersion: string; // 'v1'
  initialAnswers: Record<string, string>; // Jawaban awal siswa sebelum pembahasan
  score: number; // 0 - 100
  totalCorrect: number;
  totalIncorrect: number;
  totalQuestions: number;
  completedAt?: string; // ISO 8601
  savedToCloud?: boolean; // Penanda apakah berhasil tersimpan di Firestore
  cloudError?: string; // Pesan kegagalan cloud jika fallback ke lokal
}

/**
 * Hasil operasi penyimpanan untuk transparansi status ke UI
 */
export interface StorageOperationResult<T = void> {
  success: boolean;
  data?: T;
  error?: string;
}

/**
 * Memeriksa ketersediaan dan fungsionalitas LocalStorage
 */
export function isLocalStorageAvailable(): boolean {
  try {
    if (typeof window === 'undefined' || !window.localStorage) {
      return false;
    }
    const testKey = '__chembond_storage_test__';
    window.localStorage.setItem(testKey, '1');
    window.localStorage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
}

/**
 * Menghasilkan Attempt ID unik dan konsisten untuk setiap percobaan kuis
 * Contoh: att-1731234567890-a1b2c3
 */
export function generateAttemptId(): string {
  const timestamp = Date.now();
  const randomPart = Math.random().toString(36).substring(2, 8);
  return `att-${timestamp}-${randomPart}`;
}

/**
 * Menyimpan draf pengerjaan kuis sementara ke LocalStorage dengan isolasi UID pengguna.
 */
export function saveQuizDraft(draft: QuizDraft, ownerId?: string): StorageOperationResult {
  if (!isLocalStorageAvailable()) {
    return {
      success: false,
      error: 'LocalStorage tidak tersedia di browser ini atau sedang diblokir.',
    };
  }

  const targetOwner = (ownerId && ownerId.trim()) || (draft.ownerId && draft.ownerId.trim()) || 'guest';
  const targetKey = getQuizDraftKey(targetOwner);

  try {
    const payload = JSON.stringify({
      ...draft,
      ownerId: targetOwner,
      questionVersion: draft.questionVersion || 'v1',
      lastSaved: draft.lastSaved || new Date().toISOString(),
    });
    window.localStorage.setItem(targetKey, payload);
    return { success: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Gagal menyimpan draf kuis.';
    return {
      success: false,
      error: message,
    };
  }
}

/**
 * Membaca draf pengerjaan kuis yang tersimpan di LocalStorage berdasarkan UID pemilik.
 * Memvalidasi kesesuaian ownerId dan questionVersion:
 * - Jika akun berganti, draf akun lain tidak akan dimuat.
 * - Jika versi bank soal berubah, draf lama tidak dipulihkan sebagai draf aktif.
 * Mengembalikan null jika data tidak ditemukan, milik akun lain, usang, atau rusak.
 */
export function loadQuizDraft(
  ownerId: string = 'guest',
  expectedQuestionVersion?: string
): QuizDraft | null {
  if (!isLocalStorageAvailable()) {
    return null;
  }

  const safeOwner = (ownerId && ownerId.trim()) ? ownerId.trim() : 'guest';
  const targetKey = getQuizDraftKey(safeOwner);

  try {
    let raw = window.localStorage.getItem(targetKey);

    // Fallback migrasi untuk mode guest jika key lama masih tersisa
    if (!raw && safeOwner === 'guest') {
      raw = window.localStorage.getItem(CHEMBOND_QUIZ_DRAFT_KEY);
    }

    if (!raw) {
      return null;
    }

    const parsed = JSON.parse(raw);

    // Validasi struktur data agar aplikasi tidak crash jika data corrupt
    if (
      parsed &&
      typeof parsed === 'object' &&
      typeof parsed.attemptId === 'string' &&
      typeof parsed.currentIndex === 'number' &&
      parsed.answers &&
      typeof parsed.answers === 'object'
    ) {
      // Validasi versi bank soal: jika versi berubah, draft lama tidak boleh dipulihkan (Tahap 3 Bagian E)
      if (
        expectedQuestionVersion &&
        parsed.questionVersion &&
        parsed.questionVersion !== expectedQuestionVersion
      ) {
        return null;
      }

      return {
        attemptId: parsed.attemptId,
        ownerId: parsed.ownerId || safeOwner,
        questionVersion: parsed.questionVersion || 'v1',
        currentIndex: Math.max(0, parsed.currentIndex),
        answers: parsed.answers,
        lastSaved: typeof parsed.lastSaved === 'string' ? parsed.lastSaved : new Date().toISOString(),
      };
    }

    // Jika data tidak valid, bersihkan draf yang rusak
    window.localStorage.removeItem(targetKey);
    return null;
  } catch {
    return null;
  }
}

/**
 * Menghapus draf kuis setelah pengerjaan selesai atau saat dibatalkan untuk pemilik tertentu.
 */
export function clearQuizDraft(ownerId: string = 'guest'): boolean {
  if (!isLocalStorageAvailable()) {
    return false;
  }

  const safeOwner = (ownerId && ownerId.trim()) ? ownerId.trim() : 'guest';
  const targetKey = getQuizDraftKey(safeOwner);

  try {
    window.localStorage.removeItem(targetKey);
    if (safeOwner === 'guest') {
      window.localStorage.removeItem(CHEMBOND_QUIZ_DRAFT_KEY);
    }
    return true;
  } catch {
    return false;
  }
}

/**
 * Menyimpan hasil pengerjaan kuis ke riwayat LocalStorage.
 * Menyimpan data sebagai elemen baru tanpa menimpa riwayat sebelumnya (AGENTS.md Aturan 6).
 */
export function saveQuizAttempt(record: QuizAttemptRecord): StorageOperationResult<QuizAttemptRecord> {
  if (!isLocalStorageAvailable()) {
    return {
      success: false,
      error: 'LocalStorage tidak tersedia pada peramban ini.',
    };
  }

  try {
    const recordWithTimestamp: QuizAttemptRecord = {
      ...record,
      completedAt: record.completedAt || new Date().toISOString(),
    };
    const existingHistory = loadQuizHistory(); // Mengambil seluruh riwayat untuk disimpan
    // Tambahkan record baru ke riwayat tanpa menimpa data lama
    const updatedHistory = [...existingHistory, recordWithTimestamp];

    window.localStorage.setItem(CHEMBOND_QUIZ_HISTORY_KEY, JSON.stringify(updatedHistory));
    return {
      success: true,
      data: recordWithTimestamp,
    };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Gagal menyimpan riwayat kuis ke LocalStorage.';
    return {
      success: false,
      error: message,
    };
  }
}

/**
 * Membaca seluruh daftar riwayat percobaan kuis dari LocalStorage.
 * Jika parameter ownerId diberikan (dan bukan 'all'), hasil disaring untuk akun tersebut.
 * Mengembalikan array kosong jika belum ada atau jika data rusak.
 */
export function loadQuizHistory(ownerId?: string): QuizAttemptRecord[] {
  if (!isLocalStorageAvailable()) {
    return [];
  }

  try {
    const raw = window.localStorage.getItem(CHEMBOND_QUIZ_HISTORY_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return [];
    }

    // Filter item yang memiliki struktur valid
    const validList = parsed.filter((item): item is QuizAttemptRecord => {
      return (
        item &&
        typeof item === 'object' &&
        typeof item.attemptId === 'string' &&
        typeof item.score === 'number' &&
        typeof item.totalCorrect === 'number' &&
        typeof item.totalQuestions === 'number' &&
        item.initialAnswers &&
        typeof item.initialAnswers === 'object'
      );
    });

    if (ownerId && ownerId !== 'all') {
      return validList.filter((item) => item.ownerId === ownerId);
    }

    return validList;
  } catch {
    return [];
  }
}

/**
 * Mengambil percobaan kuis paling mutakhir (terbaru) dari riwayat akun tertentu
 */
export function getLatestQuizAttempt(ownerId?: string): QuizAttemptRecord | null {
  const history = loadQuizHistory(ownerId);
  if (history.length === 0) {
    return null;
  }
  return history[history.length - 1];
}

/**
 * Memperbarui status rekaman pengerjaan kuis di LocalStorage berdasarkan attemptId.
 * Digunakan untuk sinkronisasi rekaman lokal ke cloud tanpa membuat duplikasi data (Tahap Perbaikan Bagian C).
 */
export function updateQuizAttemptStatus(
  attemptId: string,
  updates: { savedToCloud?: boolean; cloudError?: string }
): boolean {
  if (!isLocalStorageAvailable()) return false;

  try {
    const raw = window.localStorage.getItem(CHEMBOND_QUIZ_HISTORY_KEY);
    if (!raw) return false;

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return false;

    let found = false;
    const updated = parsed.map((item) => {
      if (item && item.attemptId === attemptId) {
        found = true;
        return {
          ...item,
          ...updates,
          cloudError: updates.savedToCloud ? undefined : (updates.cloudError !== undefined ? updates.cloudError : item.cloudError),
        };
      }
      return item;
    });

    if (found) {
      window.localStorage.setItem(CHEMBOND_QUIZ_HISTORY_KEY, JSON.stringify(updated));
    }
    return found;
  } catch {
    return false;
  }
}
