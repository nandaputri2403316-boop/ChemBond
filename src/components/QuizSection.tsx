import React, { useState, useCallback, useId } from 'react';
import './QuizSection.css';
import { modul1Quiz } from '../data/kuis/modul1Quiz';
import type { QuizQuestion, QuizOption } from '../data/kuis/types';
import {
  generateAttemptId,
  saveQuizDraft,
  loadQuizDraft,
  clearQuizDraft,
  saveQuizAttempt,
  loadQuizHistory,
  isLocalStorageAvailable,
  type QuizDraft,
  type QuizAttemptRecord,
} from '../services/localStore';

interface QuizSectionProps {
  onNavigate?: (page: 'Beranda' | 'Materi' | 'Simulasi' | 'Kuis' | 'Progres') => void;
}

type QuizPhase = 'intro' | 'in_progress' | 'completed';

export const QuizSection: React.FC<QuizSectionProps> = ({ onNavigate }) => {
  // Inisialisasi state secara lazy dari LocalStorage untuk menghindari cascading render
  const [history, setHistory] = useState<QuizAttemptRecord[]>(() => loadQuizHistory());

  const [draftInfo, setDraftInfo] = useState<QuizDraft | null>(() => {
    const existingDraft = loadQuizDraft();
    if (existingDraft && Object.keys(existingDraft.answers).length > 0) {
      return existingDraft;
    }
    return null;
  });

  const [hasExistingDraft, setHasExistingDraft] = useState<boolean>(() => {
    const existingDraft = loadQuizDraft();
    return Boolean(existingDraft && Object.keys(existingDraft.answers).length > 0);
  });

  const [storageWarning, setStorageWarning] = useState<string | null>(() => {
    if (!isLocalStorageAvailable()) {
      return 'Penyimpanan lokal peramban (LocalStorage) tidak tersedia atau diblokir. Progres pengerjaan mungkin tidak tersimpan saat halaman dimuat ulang.';
    }
    return null;
  });

  const [phase, setPhase] = useState<QuizPhase>('intro');
  const [attemptId, setAttemptId] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  // Status notifikasi dan error handling
  const [storageStatusMessage, setStorageStatusMessage] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  // Hasil percobaan aktif
  const [completedRecord, setCompletedRecord] = useState<QuizAttemptRecord | null>(null);

  const legendId = useId();

  // Mulai kuis baru
  const handleStartNewQuiz = useCallback(() => {
    const newAttemptId = generateAttemptId();
    clearQuizDraft();
    setAttemptId(newAttemptId);
    setCurrentIndex(0);
    setAnswers({});
    setValidationError(null);
    setStorageStatusMessage(null);
    setHasExistingDraft(false);
    setDraftInfo(null);
    setCompletedRecord(null);
    setPhase('in_progress');

    // Buat dan simpan draf awal
    const initialDraft: QuizDraft = {
      attemptId: newAttemptId,
      currentIndex: 0,
      answers: {},
    };
    saveQuizDraft(initialDraft);
  }, []);

  // Lanjutkan kuis dari draf
  const handleResumeDraft = useCallback(() => {
    if (!draftInfo) return;
    setAttemptId(draftInfo.attemptId);
    setAnswers(draftInfo.answers);
    const validIndex =
      draftInfo.currentIndex >= 0 && draftInfo.currentIndex < modul1Quiz.length
        ? draftInfo.currentIndex
        : 0;
    setCurrentIndex(validIndex);
    setValidationError(null);
    setStorageStatusMessage('Draf pengerjaan berhasil dipulihkan.');
    setPhase('in_progress');

    setTimeout(() => {
      setStorageStatusMessage(null);
    }, 3000);
  }, [draftInfo]);

  // Memilih jawaban
  const handleSelectOption = (questionId: string, optionId: string) => {
    setValidationError(null);
    const updatedAnswers = {
      ...answers,
      [questionId]: optionId,
    };
    setAnswers(updatedAnswers);

    // Simpan otomatis ke draf
    const draft: QuizDraft = {
      attemptId,
      currentIndex,
      answers: updatedAnswers,
    };
    const res = saveQuizDraft(draft);
    if (!res.success) {
      setStorageWarning('Gagal menyimpan draf ke penyimpanan lokal.');
    } else {
      setStorageWarning(null);
    }
  };

  // Navigasi soal
  const handleNavigateQuestion = (newIndex: number) => {
    if (newIndex < 0 || newIndex >= modul1Quiz.length) return;
    setCurrentIndex(newIndex);
    setValidationError(null);

    // Perbarui nomor soal terakhir di draf
    const draft: QuizDraft = {
      attemptId,
      currentIndex: newIndex,
      answers,
    };
    saveQuizDraft(draft);
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  // Selesaikan kuis (Submit)
  const handleSubmitQuiz = () => {
    // 1. Validasi kelengkapan jawaban
    const unansweredIndexes: number[] = [];
    modul1Quiz.forEach((q, idx) => {
      if (!answers[q.id]) {
        unansweredIndexes.push(idx + 1);
      }
    });

    if (unansweredIndexes.length > 0) {
      setValidationError(
        `Masih ada ${unansweredIndexes.length} soal yang belum Anda jawab (Soal nomor: ${unansweredIndexes.join(', ')}). Mohon lengkapi seluruh soal sebelum menyelesaikan kuis.`
      );
      // Pindahkan fokus ke soal pertama yang belum dijawab
      handleNavigateQuestion(unansweredIndexes[0] - 1);
      return;
    }

    // 2. Hitung jumlah benar dan nilai akhir
    let totalCorrect = 0;
    modul1Quiz.forEach((q) => {
      if (answers[q.id] === q.jawabanBenar) {
        totalCorrect += 1;
      }
    });

    const totalQuestions = modul1Quiz.length;
    const totalIncorrect = totalQuestions - totalCorrect;
    const score = Math.round((totalCorrect / totalQuestions) * 100);

    // 3. Simpan jawaban awal sebelum pembahasan dibuka (AGENTS.md Rule 6)
    const newRecord: QuizAttemptRecord = {
      attemptId,
      ownerId: 'guest',
      moduleId: 'materi-1',
      activityId: 'kuis-diagnostik-m1',
      questionVersion: 'v1',
      initialAnswers: { ...answers },
      score,
      totalCorrect,
      totalIncorrect,
      totalQuestions,
    };

    const saveResult = saveQuizAttempt(newRecord);
    const persistedRecord = saveResult.data || newRecord;

    if (!saveResult.success) {
      setStorageWarning(
        'Pemberitahuan: Hasil pengerjaan tidak dapat disimpan permanen ke LocalStorage (kemungkinan kuota penuh atau dibatasi). Namun, pembahasan tetap dapat Anda pelajari saat ini.'
      );
    } else {
      setStorageWarning(null);
    }

    // 4. Bersihkan draf karena sudah selesai
    clearQuizDraft();
    setHasExistingDraft(false);
    setDraftInfo(null);

    // 5. Perbarui riwayat di state
    setHistory(loadQuizHistory());
    setCompletedRecord(persistedRecord);
    setPhase('completed');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Ulangi kuis dari awal
  const handleRestartQuiz = () => {
    handleStartNewQuiz();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Soal saat ini
  const currentQuestion: QuizQuestion = modul1Quiz[currentIndex];
  const isLastQuestion = currentIndex === modul1Quiz.length - 1;
  const answeredCount = Object.keys(answers).length;
  const progressPercent = Math.round((answeredCount / modul1Quiz.length) * 100);

  return (
    <main id="main-content" className="quiz-section-wrapper" aria-label="Kuis Diagnostik Ikatan Kimia">
      <div className="container">
        {/* Peringatan Storage jika ada */}
        {storageWarning && (
          <div className="quiz-alert-banner alert-warning" role="alert">
            <span className="alert-icon">⚠️</span>
            <p className="alert-text">{storageWarning}</p>
          </div>
        )}

        {/* Notifikasi penyimpanan draf */}
        {storageStatusMessage && (
          <div className="quiz-alert-banner alert-info" role="status">
            <span className="alert-icon">💾</span>
            <p className="alert-text">{storageStatusMessage}</p>
          </div>
        )}

        {/* =========================================================================
            FASE 1: HALAMAN AWAL (INTRO)
            ========================================================================= */}
        {phase === 'intro' && (
          <section className="quiz-intro-card" aria-labelledby="quiz-intro-title">
            <div className="quiz-badge-pill">
              <span>🔬 Evaluasi Pemahaman • Kuis Diagnostik</span>
            </div>

            <h1 id="quiz-intro-title" className="quiz-main-heading">
              Kuis Diagnostik Ikatan Kimia
            </h1>

            <p className="quiz-intro-subheading">
              Uji dan petakan pemahaman konsep Ikatan Kimia Anda melalui latihan soal
              bertingkat analisis (C4). Kuis ini menyajikan soal kontekstual yang menghubungkan
              teori kestabilan atom, struktur senyawa, dan sifat zat dalam kehidupan sehari-hari.
            </p>

            {/* Kotak Informasi Spesifikasi Kuis */}
            <div className="quiz-meta-grid" role="list" aria-label="Spesifikasi Kuis">
              <div className="quiz-meta-item" role="listitem">
                <div className="meta-icon">📋</div>
                <div className="meta-info">
                  <span className="meta-label">Jumlah Soal</span>
                  <strong className="meta-value">6 Pertanyaan</strong>
                </div>
              </div>

              <div className="quiz-meta-item" role="listitem">
                <div className="meta-icon">🧠</div>
                <div className="meta-info">
                  <span className="meta-label">Tingkat Kognitif</span>
                  <strong className="meta-value">C4 (Menganalisis)</strong>
                </div>
              </div>

              <div className="quiz-meta-item" role="listitem">
                <div className="meta-icon">🔠</div>
                <div className="meta-info">
                  <span className="meta-label">Bentuk Soal</span>
                  <strong className="meta-value">Pilihan Ganda (A–E)</strong>
                </div>
              </div>

              <div className="quiz-meta-item" role="listitem">
                <div className="meta-icon">💾</div>
                <div className="meta-info">
                  <span className="meta-label">Penyimpanan Draf</span>
                  <strong className="meta-value">Otomatis (Lokal)</strong>
                </div>
              </div>
            </div>

            {/* Rincian Cakupan Materi */}
            <div className="quiz-scope-box">
              <h2 className="quiz-scope-title">📚 Cakupan Materi Uji:</h2>
              <ul className="quiz-scope-list">
                <li>
                  <strong>Soal 1–2:</strong> Dasar pembentukan ikatan kimia melalui perpindahan elektron dan kestabilan duplet/oktet.
                </li>
                <li>
                  <strong>Soal 3–4:</strong> Karakteristik fisik senyawa ion, kovalen, dan logam (daya hantar listrik & titik leleh).
                </li>
                <li>
                  <strong>Soal 5–6:</strong> Penerapan konsep ikatan kimia dalam kehidupan nyata (kabel tembaga, intan, dan grafit).
                </li>
              </ul>
            </div>

            {/* Banner Draf Ditemukan jika ada */}
            {hasExistingDraft && draftInfo && (
              <div className="quiz-resume-banner" role="region" aria-label="Draf Tersimpan">
                <div className="resume-icon">📌</div>
                <div className="resume-content">
                  <h3 className="resume-title">Draf Pengerjaan Sebelumnya Ditemukan</h3>
                  <p className="resume-desc">
                    Anda memiliki pengerjaan yang belum diselesaikan (terjawab{' '}
                    <strong>{Object.keys(draftInfo.answers).length} dari 6 soal</strong>).
                    Anda dapat melanjutkan pengerjaan terakhir atau memulai dari awal.
                  </p>
                  <div className="resume-actions">
                    <button
                      type="button"
                      className="btn btn-primary btn-resume"
                      onClick={handleResumeDraft}
                    >
                      ▶ Lanjutkan Kuis (Soal {draftInfo.currentIndex + 1})
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary btn-restart-draft"
                      onClick={handleStartNewQuiz}
                    >
                      🔄 Mulai Baru
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Tombol Mulai Utama (jika tidak ada draf) */}
            {!hasExistingDraft && (
              <div className="quiz-intro-actions">
                <button
                  type="button"
                  className="btn btn-capsule-cta-main btn-start-quiz"
                  onClick={handleStartNewQuiz}
                >
                  🚀 Mulai Kuis Sekarang
                </button>
              </div>
            )}

            {/* Riwayat Percobaan Sebelumnya (jika ada) */}
            {history.length > 0 && (
              <div className="quiz-history-preview">
                <h3 className="history-preview-title">
                  📊 Riwayat Percobaan Anda ({history.length} kali)
                </h3>
                <div className="history-list">
                  {history.slice(-3).reverse().map((att, idx) => (
                    <div key={att.attemptId} className="history-item">
                      <div className="history-badge">
                        Percobaan #{history.length - idx}
                      </div>
                      <div className="history-score-display">
                        <span className="history-score-val">{att.score}</span>
                        <span className="history-score-max">/100</span>
                      </div>
                      <div className="history-meta">
                        <span>Benar: {att.totalCorrect} dari {att.totalQuestions}</span>
                        <span className="history-date">
                          {att.completedAt
                            ? new Date(att.completedAt).toLocaleDateString('id-ID', {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit',
                            })
                            : 'Baru saja'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {/* =========================================================================
            FASE 2: PENGERJAAN SOAL (IN PROGRESS)
            ========================================================================= */}
        {phase === 'in_progress' && (
          <section className="quiz-active-section" aria-label="Lembar Pengerjaan Soal">
            {/* Navigasi Header Kuis: Indikator & Progress */}
            <header className="quiz-top-bar">
              <div className="quiz-progress-meta">
                <span className="quiz-question-counter">
                  Soal <strong>{currentIndex + 1}</strong> dari <strong>{modul1Quiz.length}</strong>
                </span>
                <span className="quiz-answered-badge">
                  {answeredCount} Terjawab ({progressPercent}%)
                </span>
              </div>

              {/* Progress Bar Visual */}
              <div
                className="quiz-progress-track"
                role="progressbar"
                aria-valuenow={progressPercent}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Progres pengerjaan kuis"
              >
                <div
                  className="quiz-progress-fill"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              {/* Grid Penomoran Soal (Quick Jump) */}
              <nav className="quiz-number-nav" aria-label="Daftar nomor soal">
                <span className="sr-only">Navigasi langsung nomor soal</span>
                {modul1Quiz.map((q, idx) => {
                  const isCurrent = idx === currentIndex;
                  const isAnswered = Boolean(answers[q.id]);
                  return (
                    <button
                      key={q.id}
                      type="button"
                      className={`quiz-num-btn ${isCurrent ? 'current' : ''} ${isAnswered ? 'answered' : 'unanswered'
                        }`}
                      onClick={() => handleNavigateQuestion(idx)}
                      aria-current={isCurrent ? 'true' : undefined}
                      aria-label={`Soal nomor ${idx + 1}: ${isAnswered ? 'Sudah dijawab' : 'Belum dijawab'
                        }${isCurrent ? ' (sedang dibuka)' : ''}`}
                    >
                      <span>{idx + 1}</span>
                      {isAnswered && <span className="answered-dot" aria-hidden="true">✓</span>}
                    </button>
                  );
                })}
              </nav>
            </header>

            {/* Pesan Validasi jika Belum Selesai */}
            {validationError && (
              <div className="quiz-alert-banner alert-error" role="alert">
                <span className="alert-icon">⚠️</span>
                <p className="alert-text">{validationError}</p>
              </div>
            )}

            {/* Kartu Pertanyaan Aktif */}
            <article className="quiz-question-card">
              <header className="question-header">
                <div className="question-tag-group">
                  <span className="question-pill-number">Soal #{currentIndex + 1}</span>
                  <span className="question-pill-level">Tingkat C4</span>
                  <span className="question-pill-concept">
                    {currentQuestion.konsep === 'dasar-pembentukan-ikatan' && 'Pembentukan Ikatan Kimia'}
                    {currentQuestion.konsep === 'jenis-jenis-ikatan-kimia' && 'Karakteristik Ikatan Kimia'}
                    {currentQuestion.konsep === 'penerapan-ikatan-kimia' && 'Penerapan Ikatan Kimia'}
                  </span>
                </div>
                <div className="save-status-indicator" title="Penyimpanan otomatis aktif">
                  <span className="status-dot"></span>
                  <span className="status-label">Draf tersimpan</span>
                </div>
              </header>

              {/* Teks Pertanyaan */}
              <div className="question-body">
                <p className="question-text">
                  {currentQuestion.pertanyaan.split('\n\n').map((paragraph, pIdx) => (
                    <span key={pIdx} className="question-paragraph">
                      {paragraph}
                    </span>
                  ))}
                </p>
              </div>

              {/* Opsi Pilihan Jawaban A–E */}
              <fieldset className="options-fieldset">
                <legend id={legendId} className="sr-only">
                  Pilihlah salah satu jawaban yang paling tepat untuk soal nomor {currentIndex + 1}
                </legend>

                <div className="options-list" role="radiogroup" aria-labelledby={legendId}>
                  {currentQuestion.opsi.map((option: QuizOption) => {
                    const isSelected = answers[currentQuestion.id] === option.id;
                    const optionInputId = `opt-${currentQuestion.id}-${option.id}`;

                    return (
                      <label
                        key={option.id}
                        htmlFor={optionInputId}
                        className={`option-card ${isSelected ? 'selected' : ''}`}
                      >
                        <input
                          type="radio"
                          id={optionInputId}
                          name={`question-${currentQuestion.id}`}
                          value={option.id}
                          checked={isSelected}
                          onChange={() => handleSelectOption(currentQuestion.id, option.id)}
                          className="sr-only"
                        />
                        <div className="option-key-circle" aria-hidden="true">
                          {option.id}
                        </div>
                        <div className="option-text">
                          <span>{option.teks}</span>
                        </div>
                        <div className="option-check-circle" aria-hidden="true">
                          {isSelected && <span className="check-mark">✓</span>}
                        </div>
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              {/* Navigasi Bawah */}
              <footer className="question-footer-nav">
                <button
                  type="button"
                  className="btn btn-secondary btn-nav-prev"
                  onClick={() => handleNavigateQuestion(currentIndex - 1)}
                  disabled={currentIndex === 0}
                  aria-label="Ke soal sebelumnya"
                >
                  ← Sebelumnya
                </button>

                <div className="question-footer-status">
                  <span className="status-chip">
                    {answers[currentQuestion.id]
                      ? `Jawaban terpilih: ${answers[currentQuestion.id]}`
                      : 'Belum dijawab'}
                  </span>
                </div>

                {!isLastQuestion ? (
                  <button
                    type="button"
                    className="btn btn-primary btn-nav-next"
                    onClick={() => handleNavigateQuestion(currentIndex + 1)}
                    aria-label="Ke soal berikutnya"
                  >
                    Berikutnya →
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-capsule-cta-main btn-submit-quiz"
                    onClick={handleSubmitQuiz}
                    aria-label="Selesaikan Kuis dan Lihat Hasil"
                  >
                    ✓ Selesaikan Kuis
                  </button>
                )}
              </footer>
            </article>

            {/* Tombol kembali ke halaman pengantar */}
            <div className="quiz-bottom-actions">
              <button
                type="button"
                className="btn-text-link"
                onClick={() => setPhase('intro')}
              >
                ← Kembali ke Pengantar Kuis (Draf Anda Tetap Aman)
              </button>
            </div>
          </section>
        )}

        {/* =========================================================================
            FASE 3: HASIL KUIS DAN PEMBAHASAN MENDALAM (COMPLETED)
            ========================================================================= */}
        {phase === 'completed' && completedRecord && (
          <section className="quiz-result-section" aria-label="Hasil dan Pembahasan Kuis">
            {/* Kartu Skor Utama */}
            <div className="result-hero-card">
              <div className="result-badge-pill">
                <span>🎉 Hasil Kuis Diagnostik Selesai</span>
              </div>

              <h1 className="result-heading">Evaluasi Pemahaman Ikatan Kimia</h1>

              <div className="result-score-container">
                <div className="score-circle">
                  <span className="score-value">{completedRecord.score}</span>
                  <span className="score-label">Nilai Akhir</span>
                </div>

                <div className="score-feedback">
                  <h2 className="feedback-title">
                    {completedRecord.score === 100 && 'Luar Biasa! Pemahaman Sangat Mendalam'}
                    {completedRecord.score >= 80 && completedRecord.score < 100 && 'Sangat Baik! Pemahaman Konseptual Kuat'}
                    {completedRecord.score >= 60 && completedRecord.score < 80 && 'Cukup Baik! Pelajari Kembali Pembahasan'}
                    {completedRecord.score < 60 && 'Perlu Penguatan! Terus Belajar dan Jangan Menyerah'}
                  </h2>
                  <p className="feedback-desc">
                    {completedRecord.score >= 80
                      ? 'Anda telah menunjukkan analisis yang sangat baik mengenai pembentukan ikatan ion, kovalen, logam, serta karakteristik bahan kimia.'
                      : 'Cermati pembahasan ilmiah di bawah untuk memahami mengapa jawaban tersebut benar dan meluruskan konsep yang belum tepat.'}
                  </p>
                </div>
              </div>

              {/* Rangkuman Metrik */}
              <div className="result-stats-grid">
                <div className="stat-card stat-correct">
                  <span className="stat-number">{completedRecord.totalCorrect}</span>
                  <span className="stat-label">Jawaban Benar</span>
                </div>
                <div className="stat-card stat-incorrect">
                  <span className="stat-number">{completedRecord.totalIncorrect}</span>
                  <span className="stat-label">Jawaban Belum Tepat</span>
                </div>
                <div className="stat-card stat-total">
                  <span className="stat-number">{completedRecord.totalQuestions}</span>
                  <span className="stat-label">Total Soal</span>
                </div>
                <div className="stat-card stat-attempt">
                  <span className="stat-number-sm">{completedRecord.attemptId}</span>
                  <span className="stat-label">ID Percobaan</span>
                </div>
              </div>

              {/* Tombol Aksi Hasil */}
              <div className="result-actions-bar">
                <button
                  type="button"
                  className="btn btn-capsule-cta-main"
                  onClick={handleRestartQuiz}
                >
                  🔄 Ulangi Kuis (Percobaan Baru)
                </button>

                {onNavigate && (
                  <>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => onNavigate('Materi')}
                    >
                      📖 Buka Halaman Materi
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => onNavigate('Beranda')}
                    >
                      🏠 Kembali ke Beranda
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Bagian Pembahasan Setiap Soal */}
            <div className="explanations-wrapper">
              <header className="explanations-header">
                <h2 className="explanations-title">Pembahasan Ilmiah Setiap Soal</h2>
                <p className="explanations-subtitle">
                  Kunci jawaban dan alasan ilmiah ditampilkan secara transparan untuk
                  membantu Anda memahami konsep dasar dan memperbaiki miskonsepsi.
                </p>
              </header>

              <div className="explanations-list">
                {modul1Quiz.map((q, idx) => {
                  const userAnswer = completedRecord.initialAnswers[q.id];
                  const isCorrect = userAnswer === q.jawabanBenar;

                  return (
                    <article
                      key={q.id}
                      className={`explanation-card ${isCorrect ? 'is-correct' : 'is-wrong'}`}
                    >
                      <header className="explanation-card-header">
                        <div className="header-left">
                          <span className="q-number-pill">Soal #{idx + 1}</span>
                          <span className="q-concept-pill">
                            {q.konsep === 'dasar-pembentukan-ikatan' && 'Pembentukan Ikatan'}
                            {q.konsep === 'jenis-jenis-ikatan-kimia' && 'Karakteristik Ikatan'}
                            {q.konsep === 'penerapan-ikatan-kimia' && 'Penerapan Ikatan'}
                          </span>
                        </div>
                        <div className={`status-badge ${isCorrect ? 'status-correct' : 'status-incorrect'}`}>
                          {isCorrect ? '✓ Jawaban Anda Benar' : '✗ Jawaban Anda Belum Tepat'}
                        </div>
                      </header>

                      {/* Teks Soal */}
                      <div className="explanation-question-text">
                        {q.pertanyaan.split('\n\n').map((p, pIdx) => (
                          <p key={pIdx}>{p}</p>
                        ))}
                      </div>

                      {/* Rincian Pilihan Jawaban */}
                      <div className="explanation-options-review">
                        <span className="review-label">Pilihan Jawaban:</span>
                        <div className="review-options-list">
                          {q.opsi.map((opt) => {
                            const isUserChoice = userAnswer === opt.id;
                            const isCorrectAnswer = q.jawabanBenar === opt.id;

                            let optClass = 'review-option-item';
                            if (isCorrectAnswer) optClass += ' correct-target';
                            if (isUserChoice && !isCorrectAnswer) optClass += ' wrong-chosen';

                            return (
                              <div key={opt.id} className={optClass}>
                                <span className="review-opt-key">{opt.id}</span>
                                <span className="review-opt-text">{opt.teks}</span>
                                <div className="review-badges">
                                  {isCorrectAnswer && (
                                    <span className="badge-correct-key">★ Kunci Jawaban</span>
                                  )}
                                  {isUserChoice && (
                                    <span className="badge-user-choice">Jawaban Anda</span>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Kotak Pembahasan */}
                      <div className="explanation-box">
                        <div className="explanation-title-row">
                          <span className="bulb-icon">💡</span>
                          <h3 className="explanation-box-title">Pembahasan & Analisis Konsep</h3>
                        </div>
                        <p className="explanation-text">{q.pembahasan}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            {/* Riwayat Lengkap */}
            {history.length > 0 && (
              <div className="history-full-section">
                <h3 className="history-full-title">
                  📜 Riwayat Seluruh Percobaan Kuis Modul 1 ({history.length} Catatan)
                </h3>
                <div className="history-table-responsive">
                  <table className="history-table">
                    <thead>
                      <tr>
                        <th>Percobaan</th>
                        <th>ID Percobaan</th>
                        <th>Skor</th>
                        <th>Benar / Total</th>
                        <th>Waktu Penyelesaian</th>
                      </tr>
                    </thead>
                    <tbody>
                      {history.map((item, hIdx) => (
                        <tr key={item.attemptId} className={item.attemptId === completedRecord.attemptId ? 'current-row' : ''}>
                          <td>#{hIdx + 1}</td>
                          <td>
                            <code>{item.attemptId}</code>
                          </td>
                          <td>
                            <strong className="table-score">{item.score}</strong>
                          </td>
                          <td>
                            {item.totalCorrect} / {item.totalQuestions}
                          </td>
                          <td>
                            {item.completedAt
                              ? new Date(item.completedAt).toLocaleString('id-ID', {
                                day: 'numeric',
                                month: 'short',
                                year: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit',
                              })
                              : '-'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </section>
        )}
      </div>
    </main>
  );
};
