/**
 * src/services/quizService.ts
 * Layanan penyimpanan hasil kuis ChemBond ke Cloud Firestore (koleksi quiz_attempts/{attemptId}).
 * Sesuai ketentuan Tahap 3 dan Firestore Security Rules Tahap 2C.
 * 
 * Ketentuan:
 * 1. Hanya akun siswa terautentikasi yang disimpan ke Firestore.
 * 2. Akun guru ditolak dari pengiriman hasil siswa.
 * 3. Mode tamu (belum login) disimpan secara lokal tanpa dikirim ke cloud.
 * 4. studentName, kelas, nomorPresensi diambil dari data profil terverifikasi di Firestore users/{uid}.
 * 5. Skor divalidasi antara 0-100.
 * 6. Jika Firestore gagal (offline/error), data diamankan ke LocalStorage dengan status savedToCloud: false.
 */

import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db, isFirebaseConfigured } from './firebase';
import { saveQuizAttempt, loadQuizHistory, updateQuizAttemptStatus, type QuizAttemptRecord } from './localStore';
import type { UserProfile } from '../types/auth';

export interface SubmitQuizAttemptParams {
  attemptId: string;
  studentUid: string;
  moduleId: string;
  activityId: string;
  questionVersion: string;
  initialAnswers: Record<string, string>;
  score: number;
  totalCorrect: number;
  totalIncorrect: number;
  totalQuestions: number;
}

export interface QuizSubmissionResult {
  success: boolean;
  savedToCloud: boolean;
  savedLocally: boolean;
  data?: QuizAttemptRecord;
  error?: string;
  cloudMessage?: string;
}

export interface SyncResults {
  total: number;
  synced: number;
  alreadySynced: number;
  failed: number;
  errors: string[];
}

/**
 * Mengirim dan menyimpan hasil kuis siswa ke Cloud Firestore (quiz_attempts/{attemptId})
 * dengan cadangan lokal di LocalStorage.
 */
export async function submitQuizAttempt(
  params: SubmitQuizAttemptParams,
  currentUser?: UserProfile | null
): Promise<QuizSubmissionResult> {
  const completedAt = new Date().toISOString();
  // Validasi skor berada pada rentang 0-100 bulat
  const validatedScore = Math.min(100, Math.max(0, Math.round(params.score)));

  // 1. SKENARIO MODE TAMU / BELUM LOGIN
  if (!params.studentUid || params.studentUid === 'guest' || !currentUser) {
    const guestRecord: QuizAttemptRecord = {
      attemptId: params.attemptId,
      ownerId: 'guest',
      studentName: 'Siswa Mandiri (Tamu)',
      kelas: 'Tamu',
      nomorPresensi: 0,
      moduleId: params.moduleId,
      activityId: params.activityId,
      questionVersion: params.questionVersion,
      initialAnswers: { ...params.initialAnswers },
      score: validatedScore,
      totalCorrect: params.totalCorrect,
      totalIncorrect: params.totalIncorrect,
      totalQuestions: params.totalQuestions,
      completedAt,
      savedToCloud: false,
    };

    saveQuizAttempt(guestRecord);
    return {
      success: true,
      savedToCloud: false,
      savedLocally: true,
      data: guestRecord,
      cloudMessage: 'Kuis diselesaikan dalam mode Mandiri/Tamu. Hasil tersimpan di peramban lokal perangkat.',
    };
  }

  // 2. SKENARIO ROLE GURU (Dilarang Mengirim Hasil Siswa)
  if (currentUser.role === 'teacher') {
    const teacherRecord: QuizAttemptRecord = {
      attemptId: params.attemptId,
      ownerId: params.studentUid,
      studentName: currentUser.namaLengkap,
      kelas: 'Guru',
      nomorPresensi: 0,
      moduleId: params.moduleId,
      activityId: params.activityId,
      questionVersion: params.questionVersion,
      initialAnswers: { ...params.initialAnswers },
      score: validatedScore,
      totalCorrect: params.totalCorrect,
      totalIncorrect: params.totalIncorrect,
      totalQuestions: params.totalQuestions,
      completedAt,
      savedToCloud: false,
    };
    saveQuizAttempt(teacherRecord);
    return {
      success: false,
      savedToCloud: false,
      savedLocally: true,
      data: teacherRecord,
      error: 'Akun dengan peran Guru tidak diizinkan mengirim hasil evaluasi sebagai siswa ke server Cloud.',
    };
  }

  // 3. SKENARIO SISWA LOGIN (Role Student)
  const activeDb = db;
  const activeAuth = auth;

  // Jika konfigurasi Firebase belum aktif di peramban
  if (!isFirebaseConfigured || !activeDb || !activeAuth) {
    const offlineRecord: QuizAttemptRecord = {
      attemptId: params.attemptId,
      ownerId: params.studentUid,
      studentName: currentUser.namaLengkap,
      kelas: currentUser.kelas || 'X-1',
      nomorPresensi: currentUser.nomorPresensi || 1,
      moduleId: params.moduleId,
      activityId: params.activityId,
      questionVersion: params.questionVersion,
      initialAnswers: { ...params.initialAnswers },
      score: validatedScore,
      totalCorrect: params.totalCorrect,
      totalIncorrect: params.totalIncorrect,
      totalQuestions: params.totalQuestions,
      completedAt,
      savedToCloud: false,
      cloudError: 'Koneksi database Firebase belum terkonfigurasi di berkas lingkungan.',
    };
    saveQuizAttempt(offlineRecord);
    return {
      success: false,
      savedToCloud: false,
      savedLocally: true,
      data: offlineRecord,
      error: 'Konfigurasi Firebase belum aktif. Hasil kuis telah diamankan di penyimpanan lokal perangkat Anda.',
    };
  }

  // Verifikasi kesesuaian sesi login aktif Firebase Auth
  const currentAuthUser = activeAuth.currentUser;
  if (!currentAuthUser || currentAuthUser.uid !== params.studentUid) {
    const mismatchRecord: QuizAttemptRecord = {
      attemptId: params.attemptId,
      ownerId: params.studentUid,
      studentName: currentUser.namaLengkap,
      kelas: currentUser.kelas || 'X-1',
      nomorPresensi: currentUser.nomorPresensi || 1,
      moduleId: params.moduleId,
      activityId: params.activityId,
      questionVersion: params.questionVersion,
      initialAnswers: { ...params.initialAnswers },
      score: validatedScore,
      totalCorrect: params.totalCorrect,
      totalIncorrect: params.totalIncorrect,
      totalQuestions: params.totalQuestions,
      completedAt,
      savedToCloud: false,
      cloudError: 'Sesi akun autentikasi tidak cocok.',
    };
    saveQuizAttempt(mismatchRecord);
    return {
      success: false,
      savedToCloud: false,
      savedLocally: true,
      data: mismatchRecord,
      error: 'Sesi akun tidak cocok dengan data pengerjaan. Hasil telah disimpan pada penyimpanan lokal.',
    };
  }

  try {
    // Ambil data profil terverifikasi langsung dari dokumen Firestore users/{uid}
    // Hal ini menjamin kesesuaian studentName, kelas, nomorPresensi dengan aturan Firestore Security Rules Tahap 2C
    const userDocRef = doc(activeDb, 'users', params.studentUid);
    const userDocSnap = await getDoc(userDocRef);

    let verifiedName = currentUser.namaLengkap;
    let verifiedKelas = currentUser.kelas || 'X-1';
    let verifiedPresensi: number | string =
      currentUser.nomorPresensi !== undefined ? currentUser.nomorPresensi : 1;

    if (userDocSnap.exists()) {
      const verifiedData = userDocSnap.data();
      if (verifiedData.namaLengkap) verifiedName = verifiedData.namaLengkap;
      if (verifiedData.kelas) verifiedKelas = verifiedData.kelas;
      if (verifiedData.nomorPresensi !== undefined) verifiedPresensi = verifiedData.nomorPresensi;
    }

    // Dokumen hasil kuis untuk Cloud Firestore (quiz_attempts/{attemptId})
    const cloudDoc = {
      attemptId: params.attemptId,
      studentUid: params.studentUid,
      studentName: verifiedName,
      kelas: verifiedKelas,
      nomorPresensi: verifiedPresensi,
      moduleId: params.moduleId,
      activityId: params.activityId,
      questionVersion: params.questionVersion,
      initialAnswers: { ...params.initialAnswers },
      score: validatedScore,
      totalCorrect: params.totalCorrect,
      totalIncorrect: params.totalIncorrect,
      totalQuestions: params.totalQuestions,
      completedAt,
    };

    // Simpan ke Cloud Firestore
    const attemptDocRef = doc(activeDb, 'quiz_attempts', params.attemptId);
    await setDoc(attemptDocRef, cloudDoc);

    // Simpan salinan lokal ke LocalStorage dengan status savedToCloud: true
    const localRecord: QuizAttemptRecord = {
      ...cloudDoc,
      ownerId: params.studentUid,
      savedToCloud: true,
    };
    saveQuizAttempt(localRecord);

    return {
      success: true,
      savedToCloud: true,
      savedLocally: true,
      data: localRecord,
      cloudMessage: 'Hasil kuis berhasil disimpan ke server Cloud ChemBond.',
    };
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Terjadi kegagalan koneksi ke Firestore.';

    // Fallback penanganan kegagalan: simpan ke penyimpanan lokal perangkat
    const fallbackRecord: QuizAttemptRecord = {
      attemptId: params.attemptId,
      ownerId: params.studentUid,
      studentName: currentUser.namaLengkap,
      kelas: currentUser.kelas || 'X-1',
      nomorPresensi: currentUser.nomorPresensi || 1,
      moduleId: params.moduleId,
      activityId: params.activityId,
      questionVersion: params.questionVersion,
      initialAnswers: { ...params.initialAnswers },
      score: validatedScore,
      totalCorrect: params.totalCorrect,
      totalIncorrect: params.totalIncorrect,
      totalQuestions: params.totalQuestions,
      completedAt,
      savedToCloud: false,
      cloudError: errorMessage,
    };
    saveQuizAttempt(fallbackRecord);

    return {
      success: false,
      savedToCloud: false,
      savedLocally: true,
      data: fallbackRecord,
      error: `Penyimpanan ke server belum berhasil (${errorMessage}). Hasil pengerjaan Anda telah diamankan pada penyimpanan lokal perangkat ini.`,
    };
  }
}

/**
 * Melakukan sinkronisasi riwayat kuis lokal yang belum tersimpan di Firestore (savedToCloud: false).
 * Sesuai panduan Tahap Perbaikan:
 * 1. Hanya sinkronkan data untuk akun siswa yang sedang login (currentUser.uid).
 * 2. Cek apakah dokumen sudah ada di Firestore untuk menghindari duplikasi.
 * 3. Kirim attempt yang belum ada dengan data profil siswa terverifikasi dari Firestore.
 * 4. Perbarui status rekaman lokal (savedToCloud: true) setelah berhasil tanpa menimpa data pengerjaan asli.
 * 5. Mengembalikan hasil rekap sinkronisasi tanpa me-refresh paksa atau merusak state.
 */
export async function syncUnsyncedAttempts(
  currentUser: UserProfile
): Promise<SyncResults> {
  const result: SyncResults = {
    total: 0,
    synced: 0,
    alreadySynced: 0,
    failed: 0,
    errors: [],
  };

  if (!currentUser || currentUser.role !== 'student' || !currentUser.uid) {
    result.errors.push('Sinkronisasi hanya dapat dilakukan oleh akun siswa yang telah terautentikasi.');
    return result;
  }

  const activeDb = db;
  const activeAuth = auth;

  if (!isFirebaseConfigured || !activeDb || !activeAuth) {
    result.errors.push('Koneksi Firebase belum terkonfigurasi pada berkas lingkungan.');
    return result;
  }

  const currentAuthUser = activeAuth.currentUser;
  if (!currentAuthUser || currentAuthUser.uid !== currentUser.uid) {
    result.errors.push('Sesi login autentikasi tidak sesuai dengan profil pengguna aktif.');
    return result;
  }

  // Ambil semua riwayat untuk UID ini yang belum tersimpan di cloud
  const userHistory = loadQuizHistory(currentUser.uid);
  const unsynced = userHistory.filter((att) => !att.savedToCloud);
  result.total = unsynced.length;

  if (unsynced.length === 0) {
    return result;
  }

  // Ambil data profil terverifikasi dari users/{uid} untuk memastikan kepatuhan aturan Firestore
  let verifiedName = currentUser.namaLengkap;
  let verifiedKelas = currentUser.kelas || 'X-1';
  let verifiedPresensi: number | string =
    currentUser.nomorPresensi !== undefined ? currentUser.nomorPresensi : 1;

  try {
    const userDocRef = doc(activeDb, 'users', currentUser.uid);
    const userDocSnap = await getDoc(userDocRef);
    if (userDocSnap.exists()) {
      const verifiedData = userDocSnap.data();
      if (verifiedData.namaLengkap) verifiedName = verifiedData.namaLengkap;
      if (verifiedData.kelas) verifiedKelas = verifiedData.kelas;
      if (verifiedData.nomorPresensi !== undefined) verifiedPresensi = verifiedData.nomorPresensi;
    }
  } catch (profileErr) {
    console.warn('Gagal membaca profil terverifikasi sebelum sinkronisasi:', profileErr);
  }

  for (const att of unsynced) {
    try {
      const attemptDocRef = doc(activeDb, 'quiz_attempts', att.attemptId);
      // Cek apakah dokumen kuis sudah ada di Firestore untuk mencegah duplikasi
      const existingDocSnap = await getDoc(attemptDocRef);

      if (existingDocSnap.exists()) {
        // Sudah ada di Firestore, cukup perbarui flag lokal
        updateQuizAttemptStatus(att.attemptId, { savedToCloud: true });
        result.alreadySynced += 1;
        continue;
      }

      // Validasi skor berada pada rentang 0-100 bulat
      const validatedScore = Math.min(100, Math.max(0, Math.round(att.score)));

      const cloudDoc = {
        attemptId: att.attemptId,
        studentUid: currentUser.uid,
        studentName: verifiedName,
        kelas: verifiedKelas,
        nomorPresensi: verifiedPresensi,
        moduleId: att.moduleId,
        activityId: att.activityId,
        questionVersion: att.questionVersion,
        initialAnswers: { ...att.initialAnswers },
        score: validatedScore,
        totalCorrect: att.totalCorrect,
        totalIncorrect: att.totalIncorrect,
        totalQuestions: att.totalQuestions,
        completedAt: att.completedAt || new Date().toISOString(),
      };

      await setDoc(attemptDocRef, cloudDoc);
      updateQuizAttemptStatus(att.attemptId, { savedToCloud: true });
      result.synced += 1;
    } catch (err: unknown) {
      result.failed += 1;
      const msg = err instanceof Error ? err.message : 'Kegagalan koneksi atau izin';
      updateQuizAttemptStatus(att.attemptId, { savedToCloud: false, cloudError: msg });
      result.errors.push(`Percobaan ${att.attemptId}: ${msg}`);
    }
  }

  return result;
}
