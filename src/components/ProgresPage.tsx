/**
 * src/components/ProgresPage.tsx
 * Halaman Progres dan Riwayat Belajar ChemBond.
 * Menyajikan capaian pembelajaran, riwayat pengerjaan kuis riil (tanpa angka fiktif),
 * isolasi data per UID siswa, dan penanganan mode tamu lokal.
 */

import React, { useMemo, useState } from 'react';
import type { Page } from './Navbar';
import type { UserProfile } from '../types/auth';
import { loadQuizHistory, type QuizAttemptRecord } from '../services/localStore';
import { syncUnsyncedAttempts, type SyncResults } from '../services/quizService';
import './ProgresPage.css';

interface ProgresPageProps {
  onNavigate: (page: Page) => void;
  currentUser?: UserProfile | null;
}

export const ProgresPage: React.FC<ProgresPageProps> = ({ onNavigate, currentUser }) => {
  // Ambil riwayat kuis nyata yang terikat pada UID pengguna atau mode tamu
  const currentOwnerId = currentUser?.uid || 'guest';
  const [syncRevision, setSyncRevision] = useState(0);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncFeedback, setSyncFeedback] = useState<{
    type: 'success' | 'error' | 'info';
    message: string;
  } | null>(null);

  const history: QuizAttemptRecord[] = useMemo(() => {
    // Membaca syncRevision agar memo terevaluasi ulang setelah sinkronisasi cloud
    if (syncRevision < 0) return [];
    return loadQuizHistory(currentOwnerId);
  }, [currentOwnerId, syncRevision]);

  const unsyncedAttempts = useMemo(() => {
    if (!currentUser || currentUser.role !== 'student') return [];
    return history.filter((h) => !h.savedToCloud);
  }, [history, currentUser]);

  const handleSyncAll = async () => {
    if (!currentUser || isSyncing) return;
    setIsSyncing(true);
    setSyncFeedback(null);
    try {
      const res: SyncResults = await syncUnsyncedAttempts(currentUser);
      setSyncRevision((prev) => prev + 1);
      if (res.synced > 0 || res.alreadySynced > 0) {
        setSyncFeedback({
          type: 'success',
          message: `Sinkronisasi berhasil! ${res.synced} percobaan tersimpan ke Cloud Firestore${res.alreadySynced > 0 ? ` (${res.alreadySynced} sudah sinkron sebelumnya)` : ''}.`,
        });
      } else if (res.failed > 0) {
        setSyncFeedback({
          type: 'error',
          message: `Gagal menyinkronkan ${res.failed} data. Pesan server: ${res.errors[0] || 'Izin ditolak.'}`,
        });
      } else {
        setSyncFeedback({
          type: 'info',
          message: 'Semua rekaman hasil kuis Anda sudah tersinkronisasi di Cloud Server.',
        });
      }
    } catch (err) {
      setSyncFeedback({
        type: 'error',
        message: err instanceof Error ? err.message : 'Terjadi kendala saat melakukan sinkronisasi.',
      });
    } finally {
      setIsSyncing(false);
    }
  };

  // Perhitungan statistik nyata berbasis riwayat pengerjaan
  const stats = useMemo(() => {
    const totalCompleted = history.length;
    const latestAttempt = totalCompleted > 0 ? history[totalCompleted - 1] : null;

    const highestScore =
      totalCompleted > 0 ? Math.max(...history.map((h) => h.score)) : null;

    const avgScore =
      totalCompleted > 0
        ? Math.round(history.reduce((sum, h) => sum + h.score, 0) / totalCompleted)
        : null;

    const totalCorrect = history.reduce((sum, h) => sum + h.totalCorrect, 0);
    const totalQuestions = history.reduce((sum, h) => sum + h.totalQuestions, 0);
    const overallAccuracy =
      totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : null;

    return {
      totalCompleted,
      latestAttempt,
      highestScore,
      avgScore,
      totalCorrect,
      totalQuestions,
      overallAccuracy,
    };
  }, [history]);

  // Format tanggal pengerjaan kuis
  const formatDateTime = (isoString?: string): string => {
    if (!isoString) return '-';
    try {
      return new Intl.DateTimeFormat('id-ID', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }).format(new Date(isoString));
    } catch {
      return isoString;
    }
  };

  return (
    <main id="main-content" className="progres-page-wrapper" aria-label="Halaman Progres Belajar">
      <div className="container">
        {/* Header Section */}
        <header className="progres-header-section">
          <div className="progres-badge-pill">
            <span>📊 Evaluasi & Capaian Belajar</span>
          </div>
          <h1 className="progres-main-title">Riwayat dan Progres Belajar</h1>
          <p className="progres-subtitle">
            Pantau hasil evaluasi kuis ikatan kimia, metrik akurasi jawaban, dan grafik perkembangan pemahaman konsep Anda secara nyata.
          </p>
        </header>

        {/* User Account / Guest Identity Banner */}
        <section className="progres-account-card" aria-label="Identitas Pembelajar">
          <div className="progres-account-left">
            <div className="progres-avatar-bubble" aria-hidden="true">
              {currentUser?.namaLengkap ? currentUser.namaLengkap.charAt(0).toUpperCase() : '👤'}
            </div>
            <div className="progres-user-details">
              <div className="progres-user-name-row">
                <span className="progres-user-name">
                  {currentUser?.namaLengkap || 'Siswa Mandiri (Tamu)'}
                </span>
                {currentUser ? (
                  <span className="progres-role-tag">Siswa Terverifikasi</span>
                ) : (
                  <span className="progres-role-tag guest">Mode Tamu / Lokal</span>
                )}
              </div>
              <div className="progres-user-submeta">
                {currentUser ? (
                  <>
                    <span>Kelas: <strong>{currentUser.kelas || '-'}</strong></span>
                    <span>•</span>
                    <span>No. Presensi: <strong>{currentUser.nomorPresensi || '-'}</strong></span>
                    <span>•</span>
                    <span>Email: <strong>{currentUser.email}</strong></span>
                  </>
                ) : (
                  <span>Data riwayat tersimpan secara lokal pada peramban perangkat ini.</span>
                )}
              </div>
            </div>
          </div>

          <div className="progres-account-right">
            {currentUser ? (
              <span className="progres-storage-pill cloud">
                <span>☁️ Tersinkronisasi Akun</span>
              </span>
            ) : (
              <button
                type="button"
                className="btn-progres-action secondary"
                onClick={() => onNavigate('Masuk')}
              >
                Masuk untuk Simpan ke Cloud →
              </button>
            )}
          </div>
        </section>

        {/* Sync Alert Banner (Jika terdapat kuis lokal yang belum disinkronkan ke Firestore) */}
        {currentUser && currentUser.role === 'student' && unsyncedAttempts.length > 0 && (
          <section className="progres-sync-banner" aria-label="Notifikasi Sinkronisasi Data">
            <div className="progres-sync-banner-content">
              <span className="progres-sync-banner-icon" aria-hidden="true">🔄</span>
              <div>
                <strong className="progres-sync-banner-title">
                  Terdapat {unsyncedAttempts.length} riwayat kuis tersimpan di penyimpanan lokal
                </strong>
                <p className="progres-sync-banner-desc">
                  Data ini tersimpan aman di peramban Anda. Klik tombol di samping untuk menyinkronkannya ke Cloud Server Firestore ChemBond.
                </p>
              </div>
            </div>
            <button
              type="button"
              className="btn-sync-cloud"
              onClick={handleSyncAll}
              disabled={isSyncing}
            >
              {isSyncing ? '⏳ Menyinkronkan...' : '☁️ Sinkronkan Sekarang'}
            </button>
          </section>
        )}

        {/* Sync Feedback Message */}
        {syncFeedback && (
          <div className={`progres-feedback-banner ${syncFeedback.type}`} role="status">
            <span>{syncFeedback.type === 'success' ? '✅' : syncFeedback.type === 'error' ? '❌' : 'ℹ️'}</span>
            <span>{syncFeedback.message}</span>
          </div>
        )}

        {/* 4 Overview Metric Cards */}
        <section className="progres-stats-grid" aria-label="Ringkasan Statistik">
          <div className="progres-metric-card">
            <div className="metric-icon-box pink">📝</div>
            <div className="metric-body">
              <span className="metric-label">Kuis Diselesaikan</span>
              <div className="metric-number-row">
                <span className="metric-number">{stats.totalCompleted}</span>
                <span className="metric-sub">Pengerjaan</span>
              </div>
            </div>
          </div>

          <div className="progres-metric-card">
            <div className="metric-icon-box coral">🎯</div>
            <div className="metric-body">
              <span className="metric-label">Rata-rata Nilai</span>
              <div className="metric-number-row">
                <span className="metric-number">
                  {stats.avgScore !== null ? `${stats.avgScore}%` : '-'}
                </span>
                <span className="metric-sub">Skor</span>
              </div>
            </div>
          </div>

          <div className="progres-metric-card">
            <div className="metric-icon-box green">🏆</div>
            <div className="metric-body">
              <span className="metric-label">Nilai Tertinggi</span>
              <div className="metric-number-row">
                <span className="metric-number">
                  {stats.highestScore !== null ? `${stats.highestScore}%` : '-'}
                </span>
                <span className="metric-sub">Skor Terbaik</span>
              </div>
            </div>
          </div>

          <div className="progres-metric-card">
            <div className="metric-icon-box purple">💡</div>
            <div className="metric-body">
              <span className="metric-label">Akurasi Jawaban</span>
              <div className="metric-number-row">
                <span className="metric-number">
                  {stats.overallAccuracy !== null ? `${stats.overallAccuracy}%` : '-'}
                </span>
                <span className="metric-sub">
                  {stats.totalQuestions > 0 ? `${stats.totalCorrect}/${stats.totalQuestions} Benar` : 'Soal'}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Perkembangan Hasil Belajar (Dynamic SVG Chart) */}
        <section className="progres-section-card" aria-label="Grafik Perkembangan Belajar">
          <div className="progres-section-header">
            <div>
              <h2 className="progres-section-title">Perkembangan Hasil Belajar</h2>
              <p className="progres-section-desc">Grafik tren nilai dari setiap pengerjaan kuis yang telah Anda selesaikan.</p>
            </div>
          </div>

          {history.length > 0 ? (
            <div className="progres-chart-wrapper">
              <svg viewBox="0 0 700 240" className="progres-svg-chart" aria-label="Grafik Tren Nilai Kuis">
                <defs>
                  <linearGradient id="progresChartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F72F91" stopOpacity="0.30" />
                    <stop offset="100%" stopColor="#F72F91" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="progresLineGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#F72F91" />
                    <stop offset="60%" stopColor="#FF6B79" />
                    <stop offset="100%" stopColor="#FF9B52" />
                  </linearGradient>
                </defs>

                {/* Horizontal Guide Lines */}
                <line x1="50" y1="30" x2="670" y2="30" stroke="#F1E3EB" strokeDasharray="4 4" />
                <text x="25" y="34" fill="#8B7B89" fontSize="11">100%</text>

                <line x1="50" y1="80" x2="670" y2="80" stroke="#F1E3EB" strokeDasharray="4 4" />
                <text x="25" y="84" fill="#8B7B89" fontSize="11">75%</text>

                <line x1="50" y1="130" x2="670" y2="130" stroke="#F1E3EB" strokeDasharray="4 4" />
                <text x="25" y="134" fill="#8B7B89" fontSize="11">50%</text>

                <line x1="50" y1="180" x2="670" y2="180" stroke="#F1E3EB" />
                <text x="25" y="184" fill="#8B7B89" fontSize="11">0%</text>

                {/* Dynamic Path based on real history */}
                {(() => {
                  const items = history.slice(-8);
                  const step = items.length > 1 ? (600 / (items.length - 1)) : 300;
                  const points = items.map((item, idx) => {
                    const x = 60 + idx * step;
                    const y = 180 - (item.score / 100) * 150;
                    return { x, y, score: item.score, id: item.attemptId, idx: idx + 1 };
                  });

                  if (points.length === 1) {
                    return (
                      <g>
                        <circle cx={points[0].x} cy={points[0].y} r="8" fill="#F72F91" />
                        <text x={points[0].x} y={points[0].y - 14} textAnchor="middle" fill="#D91D78" fontWeight="800" fontSize="13">
                          {points[0].score}% (Percobaan 1)
                        </text>
                      </g>
                    );
                  }

                  const pathD = points.reduce((acc, pt, i) => {
                    return i === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`;
                  }, '');

                  const areaD = `${pathD} L ${points[points.length - 1].x} 180 L ${points[0].x} 180 Z`;

                  return (
                    <g>
                      <path d={areaD} fill="url(#progresChartGrad)" />
                      <path d={pathD} fill="none" stroke="url(#progresLineGrad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                      {points.map((pt) => (
                        <g key={pt.id}>
                          <circle cx={pt.x} cy={pt.y} r="6" fill="#FFFFFF" stroke="#F72F91" strokeWidth="3" />
                          <text x={pt.x} y={pt.y - 12} textAnchor="middle" fill="#2A0E1F" fontWeight="800" fontSize="11">
                            {pt.score}%
                          </text>
                          <text x={pt.x} y="202" textAnchor="middle" fill="#7A4262" fontSize="10" fontWeight="600">
                            #{pt.idx}
                          </text>
                        </g>
                      ))}
                    </g>
                  );
                })()}
              </svg>
            </div>
          ) : (
            <div className="progres-empty-state">
              <div className="empty-state-emoji" aria-hidden="true">📈</div>
              <h3 className="empty-state-headline">Belum Ada Riwayat Kuis</h3>
              <p className="empty-state-info">
                Anda belum menyelesaikan kuis evaluasi Ikatan Kimia. Kerjakan kuis latihan sekarang untuk memantau grafik perkembangan pemahaman konsep Anda.
              </p>
              <button
                type="button"
                className="btn-cta-quiz"
                onClick={() => onNavigate('Kuis')}
              >
                Mulai Kerjakan Kuis Sekarang →
              </button>
            </div>
          )}
        </section>

        {/* Tabel Riwayat Pengerjaan Kuis */}
        <section className="progres-section-card" aria-label="Tabel Riwayat Pengerjaan Kuis">
          <div className="progres-section-header">
            <div>
              <h2 className="progres-section-title">Riwayat Pengerjaan Kuis</h2>
              <p className="progres-section-desc">Daftar lengkap seluruh percobaan evaluasi yang telah diselesaikan.</p>
            </div>
            <span className="progres-badge-count">{history.length} Catatan Tersimpan</span>
          </div>

          {history.length > 0 ? (
            <div className="progres-table-container">
              <table className="progres-data-table">
                <thead>
                  <tr>
                    <th>No & ID Percobaan</th>
                    <th>Modul Pembelajaran</th>
                    <th>Nilai Akhir</th>
                    <th>Jawaban Benar / Salah</th>
                    <th>Tanggal & Waktu</th>
                    <th>Status Penyimpanan</th>
                  </tr>
                </thead>
                <tbody>
                  {history
                    .slice()
                    .reverse()
                    .map((attempt, index) => {
                      const isPass = attempt.score >= 70;
                      return (
                        <tr key={attempt.attemptId}>
                          <td>
                            <strong>#{history.length - index}</strong>
                            <div style={{ fontSize: '0.78rem', color: '#888' }}>
                              ID: {attempt.attemptId.slice(0, 18)}...
                            </div>
                          </td>
                          <td>
                            <span>
                              {attempt.moduleId === 'materi-1'
                                ? 'Modul 1: Pengenalan Ikatan Kimia'
                                : attempt.moduleId}
                            </span>
                          </td>
                          <td>
                            <span className={`progres-score-badge ${isPass ? 'score-pass' : 'score-review'}`}>
                              {attempt.score}%
                            </span>
                          </td>
                          <td>
                            <span>
                              <strong>{attempt.totalCorrect}</strong> Benar /{' '}
                              <strong>{attempt.totalIncorrect}</strong> Salah (dari {attempt.totalQuestions} soal)
                            </span>
                          </td>
                          <td>
                            <span>{formatDateTime(attempt.completedAt)}</span>
                          </td>
                          <td>
                            {attempt.savedToCloud ? (
                              <span className="progres-sync-tag cloud">☁️ Cloud Server</span>
                            ) : (
                              <span className="progres-sync-tag local">💾 Lokal</span>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="progres-empty-state">
              <div className="empty-state-emoji" aria-hidden="true">📋</div>
              <h3 className="empty-state-headline">Belum Ada Percobaan yang Selesai</h3>
              <p className="empty-state-info">
                Setiap kali Anda menyelesaikan kuis dan menekan tombol selesai, riwayat nilai dan rincian evaluasi akan tercatat secara rapi di tabel ini.
              </p>
              <button
                type="button"
                className="btn-cta-quiz"
                onClick={() => onNavigate('Kuis')}
              >
                Buka Menu Kuis →
              </button>
            </div>
          )}
        </section>

        {/* Bottom Actions Bar */}
        <footer className="progres-bottom-actions">
          <button
            type="button"
            className="btn-progres-action secondary"
            onClick={() => onNavigate('Beranda')}
          >
            ← Kembali ke Beranda
          </button>
          <button
            type="button"
            className="btn-progres-action secondary"
            onClick={() => onNavigate('Materi')}
          >
            📖 Pelajari Materi
          </button>
          <button
            type="button"
            className="btn-progres-action secondary"
            onClick={() => onNavigate('Simulasi')}
          >
            🧪 Eksplorasi Simulasi
          </button>
          <button
            type="button"
            className="btn-progres-action primary"
            onClick={() => onNavigate('Kuis')}
          >
            📝 Kerjakan Kuis Baru
          </button>
        </footer>
      </div>
    </main>
  );
};
