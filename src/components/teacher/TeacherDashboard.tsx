import React, { useState, useMemo, useEffect } from 'react';
import type { UserProfile } from '../../types/auth';
import type { Page } from '../Navbar';
import { loadQuizHistory, type QuizAttemptRecord } from '../../services/localStore';
import { fetchTeacherQuizAttempts } from '../../services/quizService';
import { materiList } from '../../data/materi';
import { modul1Quiz } from '../../data/kuis/modul1Quiz';
import './TeacherDashboard.css';

interface TeacherDashboardProps {
  user: UserProfile;
  onNavigate: (page: Page) => void;
  onOpenProfile: () => void;
}

export const TeacherDashboard: React.FC<TeacherDashboardProps> = ({
  user,
  onNavigate,
  onOpenProfile,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedClass, setSelectedClass] = useState<string>('all');

  // Load actual quiz attempts recorded (TB-01: Membaca Firestore sebagai sumber utama dengan cadangan lokal)
  const [attempts, setAttempts] = useState<QuizAttemptRecord[]>(() => loadQuizHistory());
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [dataSource, setDataSource] = useState<'cloud' | 'local'>('local');

  // Sinkronisasi data saat komponen dimuat atau user berubah
  useEffect(() => {
    let ignore = false;

    async function loadData() {
      try {
        const res = await fetchTeacherQuizAttempts(user);
        if (!ignore) {
          setAttempts(res.attempts);
          setDataSource(res.fromCloud ? 'cloud' : 'local');
          if (!res.success && res.error) {
            setFetchError(res.error);
          }
        }
      } catch (err) {
        if (!ignore) {
          const msg = err instanceof Error ? err.message : 'Gagal memuat data hasil kuis.';
          setFetchError(msg);
          setAttempts(loadQuizHistory());
          setDataSource('local');
        }
      } finally {
        if (!ignore) {
          setIsLoading(false);
        }
      }
    }

    loadData();

    return () => {
      ignore = true;
    };
  }, [user]);

  // Handler tombol segarkan manual oleh guru
  const handleManualRefresh = async () => {
    setIsLoading(true);
    setFetchError(null);
    try {
      const res = await fetchTeacherQuizAttempts(user);
      setAttempts(res.attempts);
      setDataSource(res.fromCloud ? 'cloud' : 'local');
      if (!res.success && res.error) {
        setFetchError(res.error);
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Gagal memuat data hasil kuis.';
      setFetchError(msg);
      setAttempts(loadQuizHistory());
      setDataSource('local');
    } finally {
      setIsLoading(false);
    }
  };

  // Aggregate teacher statistics from real data
  const teacherStats = useMemo(() => {
    const totalModules = materiList.length; // 3
    const totalQuestions = modul1Quiz.length; // 6
    const totalAttempts = attempts.length;

    // Unique student ownerIds from attempts
    const uniqueStudentIds = Array.from(new Set(attempts.map((a) => a.ownerId)));
    const totalStudents = Math.max(uniqueStudentIds.length, attempts.length > 0 ? 1 : 0);

    const avgScore = attempts.length > 0
      ? Math.round(attempts.reduce((sum, a) => sum + a.score, 0) / attempts.length)
      : 0;

    // Score distribution
    const highScores = attempts.filter((a) => a.score >= 80).length;
    const midScores = attempts.filter((a) => a.score >= 60 && a.score < 80).length;
    const lowScores = attempts.filter((a) => a.score < 60).length;

    return {
      totalModules,
      totalQuestions,
      totalAttempts,
      totalStudents,
      avgScore,
      highScores,
      midScores,
      lowScores,
    };
  }, [attempts]);

  // Helper identitas siswa: memprioritaskan nama lengkap terverifikasi
  const getStudentDisplayName = (att: QuizAttemptRecord): string => {
    if (att.studentName && att.studentName.trim()) {
      return att.studentName.trim();
    }
    if (att.ownerId === 'guest') {
      return 'Siswa Mandiri (Tamu)';
    }
    return att.ownerId;
  };

  const getStudentInitial = (nameOrId: string): string => {
    const clean = nameOrId.trim();
    return clean ? clean.charAt(0).toUpperCase() : 'S';
  };

  // Daftar kelas unik murni dinamis dari riwayat pengerjaan aktual siswa
  const availableClasses = useMemo(() => {
    const classes = new Set<string>();
    attempts.forEach((att) => {
      const trimmedClass = att.kelas?.trim();
      // Mengabaikan nilai kosong, null, undefined, dan penanda role non-siswa (Tamu/Guru)
      if (trimmedClass && trimmedClass !== 'Tamu' && trimmedClass !== 'Guru') {
        classes.add(trimmedClass);
      }
    });
    return Array.from(classes).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  }, [attempts]);

  // Pastikan filter kelas aman jika kelas yang dipilih sudah tidak ada di data
  const effectiveClass =
    selectedClass === 'all' || availableClasses.includes(selectedClass)
      ? selectedClass
      : 'all';

  // Filtered student attempts for table (Pencarian multi-field & Filter Kelas)
  const filteredAttempts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return attempts.filter((att) => {
      // 1. Pencarian komprehensif: nama lengkap, UID, attemptId, modul, kelas, presensi
      const matchSearch =
        !query ||
        (Boolean(att.studentName) && att.studentName!.toLowerCase().includes(query)) ||
        att.ownerId.toLowerCase().includes(query) ||
        att.attemptId.toLowerCase().includes(query) ||
        att.moduleId.toLowerCase().includes(query) ||
        (Boolean(att.kelas) && att.kelas!.toLowerCase().includes(query)) ||
        (att.nomorPresensi !== undefined && String(att.nomorPresensi).includes(query));

      // 2. Filter kelas aktual murni berbasis data
      const matchClass =
        effectiveClass === 'all' ||
        (Boolean(att.kelas) && att.kelas!.trim().toLowerCase() === effectiveClass.trim().toLowerCase());

      return matchSearch && matchClass;
    });
  }, [attempts, searchQuery, effectiveClass]);

  return (
    <div className="teacher-workspace-layout">
      {/* =========================================================================
          MAIN WORKSPACE CONTENT
          ========================================================================= */}
      <main className="teacher-main-content">
        {/* Header Bar */}
        <header className="teacher-header-bar">
          <div className="teacher-header-text">
            <div className="teacher-badge-pill">
              <span>PORTAL GURU BERWENANG</span>
            </div>
            <h1 className="teacher-heading">Selamat Datang, Bapak/Ibu Guru!</h1>
            <p className="teacher-subheading">
              Pantau dan kelola perjalanan pembelajaran siswa melalui ChemBond.
            </p>
          </div>

          <div className="teacher-header-profile">
            <button
              type="button"
              className="teacher-profile-chip"
              onClick={onOpenProfile}
              aria-label="Buka profil guru"
            >
              <div className="chip-avatar teacher-chip-avatar">
                {user.namaLengkap ? user.namaLengkap.charAt(0).toUpperCase() : 'G'}
              </div>
              <div className="chip-text">
                <span className="chip-name">{user.namaLengkap || 'Guru'}</span>
                <span className="chip-role">Guru Berwenang</span>
              </div>
            </button>
          </div>
        </header>

        {/* 1. OVERVIEW STATISTICS CARDS (4 Cards) */}
        <section className="teacher-stats-grid" aria-label="Statistik Utama Guru">
          <div className="t-stat-card">
            <div className="t-stat-icon icon-students">👥</div>
            <div className="t-stat-body">
              <span className="t-stat-label">Total Siswa Aktif</span>
              <div className="t-stat-number-row">
                <span className="t-stat-number">{teacherStats.totalStudents}</span>
                <span className="t-stat-unit">Siswa</span>
              </div>
              <span className="t-stat-foot">Terdata pada sistem evaluasi</span>
            </div>
          </div>

          <div className="t-stat-card">
            <div className="t-stat-icon icon-modules">📚</div>
            <div className="t-stat-body">
              <span className="t-stat-label">Materi Pembelajaran</span>
              <div className="t-stat-number-row">
                <span className="t-stat-number">{teacherStats.totalModules}</span>
                <span className="t-stat-unit">Modul</span>
              </div>
              <span className="t-stat-foot">Pengenalan, Jenis, Penerapan</span>
            </div>
          </div>

          <div className="t-stat-card">
            <div className="t-stat-icon icon-attempts">📝</div>
            <div className="t-stat-body">
              <span className="t-stat-label">Aktivitas Kuis</span>
              <div className="t-stat-number-row">
                <span className="t-stat-number">{teacherStats.totalAttempts}</span>
                <span className="t-stat-unit">Pengerjaan</span>
              </div>
              <span className="t-stat-foot">Riwayat submit tersimpan</span>
            </div>
          </div>

          <div className="t-stat-card">
            <div className="t-stat-icon icon-average">🎯</div>
            <div className="t-stat-body">
              <span className="t-stat-label">Rata-rata Hasil Kuis</span>
              <div className="t-stat-number-row">
                <span className="t-stat-number">
                  {teacherStats.totalAttempts > 0 ? `${teacherStats.avgScore}%` : '0%'}
                </span>
                <span className="t-stat-unit">Skor</span>
              </div>
              <span className="t-stat-foot">
                {teacherStats.totalAttempts > 0 ? 'Berdasarkan evaluasi siswa' : 'Belum ada data nilai'}
              </span>
            </div>
          </div>
        </section>

        {/* 2. MAIN TEACHER DASHBOARD BODY */}
        <div className="teacher-panels-grid">
          {/* Left Column: Student Overview & Evaluation */}
          <div className="teacher-primary-column">
            {/* Student Overview Section */}
            <section className="t-card-section">
              <div className="t-section-header">
                <div>
                  <div className="t-section-title-row">
                    <h3 className="t-section-title">Student Overview</h3>
                    <span
                      className={`t-status-pill ${dataSource === 'cloud' ? 'status-pass' : 'status-review'}`}
                      title={dataSource === 'cloud' ? 'Data bersumber langsung dari Cloud Firestore' : 'Data bersumber dari penyimpanan lokal peramban'}
                    >
                      {dataSource === 'cloud' ? '☁️ Cloud Firestore' : '💾 Cadangan Lokal'}
                    </span>
                  </div>
                  <p className="t-section-sub">Pemantauan partisipasi dan hasil belajar siswa.</p>
                </div>

                <div className="t-filter-tools">
                  <button
                    type="button"
                    className="t-refresh-btn"
                    onClick={handleManualRefresh}
                    disabled={isLoading}
                    title="Segarkan data hasil kuis dari Cloud Firestore"
                    aria-label="Segarkan data hasil kuis"
                  >
                    <span aria-hidden="true" className={isLoading ? 'spin-icon' : ''}>🔄</span>
                    <span>{isLoading ? 'Memuat...' : 'Segarkan'}</span>
                  </button>

                  <div className="t-search-wrapper">
                    <span className="search-icon" aria-hidden="true">🔍</span>
                    <input
                      type="text"
                      className="t-search-input"
                      placeholder="Cari siswa / modul / ID..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      aria-label="Cari berdasarkan nama siswa, modul, atau ID pengerjaan"
                    />
                  </div>

                  <select
                    className="t-select-filter"
                    value={effectiveClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    aria-label="Filter berdasarkan kelas siswa"
                  >
                    <option value="all">Semua Kelas</option>
                    {availableClasses.map((cls) => (
                      <option key={cls} value={cls}>
                        Kelas {cls}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {fetchError && (
                <div className="t-notice-banner" role="alert">
                  <span aria-hidden="true">⚠️</span>
                  <span>{fetchError}</span>
                </div>
              )}

              {isLoading ? (
                <div className="t-loading-state">
                  <span className="t-empty-icon spin-icon" aria-hidden="true">🔄</span>
                  <h4 className="t-empty-title">Memperbarui Data Kuis...</h4>
                  <p className="t-empty-desc">
                    Mengambil data hasil evaluasi siswa terbaru dari server Cloud Firestore.
                  </p>
                </div>
              ) : filteredAttempts.length > 0 ? (
                <div className="t-table-container">
                  <table className="t-data-table">
                    <thead>
                      <tr>
                        <th>Identitas Siswa</th>
                        <th>Modul Kuis</th>
                        <th>Skor</th>
                        <th>Benar / Total</th>
                        <th>Waktu Pengerjaan</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredAttempts.slice(-8).reverse().map((att) => {
                        const isPass = att.score >= 70;
                        const displayName = getStudentDisplayName(att);
                        const initial = getStudentInitial(displayName);
                        return (
                          <tr key={att.attemptId}>
                            <td>
                              <div className="t-student-cell">
                                <div className="t-student-avatar" aria-hidden="true">
                                  {initial}
                                </div>
                                <div>
                                  <span className="t-student-name">
                                    {displayName}
                                  </span>
                                  <div className="t-student-sub-info">
                                    {att.kelas && att.kelas !== 'Tamu' && att.kelas !== 'Guru' && (
                                      <span className="t-student-class-badge">Kelas {att.kelas}</span>
                                    )}
                                    {att.nomorPresensi !== undefined && att.nomorPresensi !== 0 && (
                                      <span className="t-student-presensi">No. {att.nomorPresensi}</span>
                                    )}
                                    <span className="t-student-id">ID: {att.attemptId.slice(0, 16)}...</span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span className="t-module-tag">
                                {att.moduleId === 'materi-1' ? 'Quiz' : att.moduleId}
                              </span>
                            </td>
                            <td>
                              <span className={`t-score-badge ${isPass ? 'score-high' : 'score-low'}`}>
                                {att.score}%
                              </span>
                            </td>
                            <td>
                              <span className="t-correct-count">
                                {att.totalCorrect} / {att.totalQuestions} Soal
                              </span>
                            </td>
                            <td>
                              <span className="t-time-stamp">
                                {att.completedAt
                                  ? new Date(att.completedAt).toLocaleDateString('id-ID', {
                                      day: 'numeric',
                                      month: 'short',
                                      hour: '2-digit',
                                      minute: '2-digit',
                                    })
                                  : '-'}
                              </span>
                            </td>
                            <td>
                              <span className={`t-status-pill ${isPass ? 'status-pass' : 'status-review'}`}>
                                {isPass ? 'Tuntas' : 'Perlu Bimbingan'}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="t-empty-state">
                  <span className="t-empty-icon">📂</span>
                  <h4 className="t-empty-title">Belum Ada Catatan Pengerjaan</h4>
                  <p className="t-empty-desc">
                    Hasil pengerjaan kuis siswa akan secara otomatis tercatat dan dapat dipantau di sini.
                  </p>
                </div>
              )}
            </section>

            {/* Learning Analytics & Quiz Performance */}
            <section className="t-card-section">
              <div className="t-section-header">
                <div>
                  <h3 className="t-section-title">Quiz Performance & Konsep Soal</h3>
                  <p className="t-section-sub">Analisis pemahaman konsep kimia siswa berdasarkan bank soal aktif.</p>
                </div>
              </div>

              <div className="concept-breakdown-grid">
                {modul1Quiz.map((q, idx) => (
                  <div key={q.id} className="concept-card">
                    <div className="concept-header">
                      <span className="concept-num">Soal #{idx + 1}</span>
                      <span className="concept-badge">{q.konsep}</span>
                    </div>
                    <p className="concept-text">
                      {q.pertanyaan.slice(0, 110)}...
                    </p>
                    <div className="concept-footer">
                      <span className="concept-key">Kunci: <strong>{q.jawabanBenar}</strong></span>
                      <span className="concept-version">Versi: {q.questionVersion}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Analytics, Quick Shortcuts, Activity Stream */}
          <div className="teacher-secondary-column">
            {/* Score Distribution Widget */}
            <div className="t-widget-card">
              <h4 className="t-widget-title">Distribusi Nilai Evaluasi</h4>
              <p className="t-widget-sub">Kategori capaian hasil kuis.</p>

              <div className="score-bars-list">
                <div className="score-bar-item">
                  <div className="score-bar-label">
                    <span>Sangat Baik (≥ 80%)</span>
                    <strong>{teacherStats.highScores} siswa</strong>
                  </div>
                  <div className="score-bar-track">
                    <div
                      className="score-bar-fill fill-green"
                      style={{
                        width: `${teacherStats.totalAttempts > 0 ? (teacherStats.highScores / teacherStats.totalAttempts) * 100 : 0}%`,
                      }}
                    />
                  </div>
                </div>

                <div className="score-bar-item">
                  <div className="score-bar-label">
                    <span>Cukup / Sedang (60–79%)</span>
                    <strong>{teacherStats.midScores} siswa</strong>
                  </div>
                  <div className="score-bar-track">
                    <div
                      className="score-bar-fill fill-orange"
                      style={{
                        width: `${teacherStats.totalAttempts > 0 ? (teacherStats.midScores / teacherStats.totalAttempts) * 100 : 0}%`,
                      }}
                    />
                  </div>
                </div>

                <div className="score-bar-item">
                  <div className="score-bar-label">
                    <span>Perlu Bimbingan (&lt; 60%)</span>
                    <strong>{teacherStats.lowScores} siswa</strong>
                  </div>
                  <div className="score-bar-track">
                    <div
                      className="score-bar-fill fill-pink"
                      style={{
                        width: `${teacherStats.totalAttempts > 0 ? (teacherStats.lowScores / teacherStats.totalAttempts) * 100 : 0}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content Quick Access for Teacher */}
            <div className="t-widget-card">
              <h4 className="t-widget-title">Akses Cepat Materi ChemBond</h4>
              <p className="t-widget-sub">Tinjau konten yang sedang dipelajari siswa.</p>

              <div className="t-quick-list">
                <button
                  type="button"
                  className="t-quick-btn"
                  onClick={() => onNavigate('Materi')}
                >
                  <span className="t-quick-icon">📚</span>
                  <div className="t-quick-text">
                    <span className="t-quick-name">Tinjau 3 Modul Materi</span>
                    <span className="t-quick-sub">Bohr, Lewis, Jenis Ikatan</span>
                  </div>
                  <span className="t-quick-arrow">→</span>
                </button>

                <button
                  type="button"
                  className="t-quick-btn"
                  onClick={() => onNavigate('Simulasi')}
                >
                  <span className="t-quick-icon">🧪</span>
                  <div className="t-quick-text">
                    <span className="t-quick-name">Simulasi Interaktif</span>
                    <span className="t-quick-sub">Ikatan Ion & Kovalen</span>
                  </div>
                  <span className="t-quick-arrow">→</span>
                </button>

                <button
                  type="button"
                  className="t-quick-btn"
                  onClick={() => onNavigate('Kuis')}
                >
                  <span className="t-quick-icon">📝</span>
                  <div className="t-quick-text">
                    <span className="t-quick-name">Coba Kerjakan Kuis</span>
                    <span className="t-quick-sub">Evaluasi 6 Soal Modul 1</span>
                  </div>
                  <span className="t-quick-arrow">→</span>
                </button>
              </div>
            </div>

            {/* Recent Learning Activities */}
            <div className="t-widget-card">
              <h4 className="t-widget-title">Aktivitas Terkini Siswa</h4>
              <p className="t-widget-sub">Catatan masuk pengerjaan kuis.</p>

              {attempts.length > 0 ? (
                <div className="t-activity-stream">
                  {attempts.slice(-4).reverse().map((rec) => {
                    const displayName = getStudentDisplayName(rec);
                    const initial = getStudentInitial(displayName);
                    return (
                      <div key={rec.attemptId} className="t-activity-item">
                        <div className="t-act-avatar" aria-hidden="true">{initial}</div>
                        <div className="t-act-content">
                          <span className="t-act-title">
                            <strong>{displayName}</strong> submit kuis
                          </span>
                          <span className="t-act-meta">
                            Skor {rec.score}% • {rec.totalCorrect}/{rec.totalQuestions} Benar
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="t-empty-stream">
                  <span>Belum ada aktivitas siswa yang tercatat.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

