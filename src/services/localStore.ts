/**
 * src/services/localStore.ts
 * Layanan penyimpanan lokal ChemBond berbasis LocalStorage.
 * Menangani penyimpanan draf pengerjaan, riwayat percobaan kuis,
 * dan penanganan kesalahan (quota, corrupt data, storage disabled).
 */

export const CHEMBOND_QUIZ_DRAFT_KEY = 'chembond_modul1_quiz_draft';
export const CHEMBOND_QUIZ_HISTORY_KEY = 'chembond_modul1_quiz_history';

/**
 * Interface draf kuis saat sedang dikerjakan siswa
 */
export interface QuizDraft {
  attemptId: string;
  currentIndex: number;
  answers: Record<string, string>; // { [questionId]: 'A' | 'B' | 'C' | 'D' | 'E' }
  lastSaved?: string; // ISO 8601
}

/**
 * Interface rekaman riwayat percobaan kuis setelah submit
 */
export interface QuizAttemptRecord {
  attemptId: string;
  ownerId: string; // default 'guest'
  moduleId: string; // 'materi-1'
  activityId: string; // 'kuis-modul-1'
  questionVersion: string; // 'v1'
  initialAnswers: Record<string, string>; // Jawaban awal siswa sebelum pembahasan
  score: number; // 0 - 100
  totalCorrect: number;
  totalIncorrect: number;
  totalQuestions: number;
  completedAt?: string; // ISO 8601
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
 * Menyimpan draf pengerjaan kuis sementara ke LocalStorage
 */
export function saveQuizDraft(draft: QuizDraft): StorageOperationResult {
  if (!isLocalStorageAvailable()) {
    return {
      success: false,
      error: 'LocalStorage tidak tersedia di browser ini atau sedang diblokir.',
    };
  }

  try {
    const payload = JSON.stringify({
      ...draft,
      lastSaved: draft.lastSaved || new Date().toISOString(),
    });
    window.localStorage.setItem(CHEMBOND_QUIZ_DRAFT_KEY, payload);
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
 * Membaca draf pengerjaan kuis yang tersimpan di LocalStorage.
 * Mengembalikan null jika data tidak ditemukan atau rusak.
 */
export function loadQuizDraft(): QuizDraft | null {
  if (!isLocalStorageAvailable()) {
    return null;
  }

  try {
    const raw = window.localStorage.getItem(CHEMBOND_QUIZ_DRAFT_KEY);
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
      return {
        attemptId: parsed.attemptId,
        currentIndex: Math.max(0, parsed.currentIndex),
        answers: parsed.answers,
        lastSaved: typeof parsed.lastSaved === 'string' ? parsed.lastSaved : new Date().toISOString(),
      };
    }

    // Jika data tidak valid, bersihkan draf yang rusak
    window.localStorage.removeItem(CHEMBOND_QUIZ_DRAFT_KEY);
    return null;
  } catch {
    // Tangani error JSON parse
    try {
      window.localStorage.removeItem(CHEMBOND_QUIZ_DRAFT_KEY);
    } catch {
      // Abaikan jika pembersihan gagal
    }
    return null;
  }
}

/**
 * Menghapus draf kuis setelah pengerjaan selesai atau saat dibatalkan
 */
export function clearQuizDraft(): boolean {
  if (!isLocalStorageAvailable()) {
    return false;
  }

  try {
    window.localStorage.removeItem(CHEMBOND_QUIZ_DRAFT_KEY);
    return true;
  } catch {
    return false;
  }
}

/**
 * Menyimpan hasil pengerjaan kuis ke riwayat LocalStorage.
 * Menyimpan data sebagai elemen baru tanpa menimpa riwayat sebelumnya.
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
    const existingHistory = loadQuizHistory();
    // Tambahkan record baru ke riwayat
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
 * Mengembalikan array kosong jika belum ada atau jika data rusak.
 */
export function loadQuizHistory(): QuizAttemptRecord[] {
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
    return parsed.filter((item): item is QuizAttemptRecord => {
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
  } catch {
    return [];
  }
}

/**
 * Mengambil percobaan kuis paling mutakhir (terbaru) dari riwayat
 */
export function getLatestQuizAttempt(): QuizAttemptRecord | null {
  const history = loadQuizHistory();
  if (history.length === 0) {
    return null;
  }
  return history[history.length - 1];
}
