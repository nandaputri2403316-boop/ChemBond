import React, { useState, useMemo } from 'react';
import type { UserProfile } from '../../types/auth';
import type { Page } from '../Navbar';
import { loadQuizHistory, type QuizAttemptRecord } from '../../services/localStore';
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

  // Load actual quiz attempts recorded
  const [attempts] = useState<QuizAttemptRecord[]>(() => loadQuizHistory());

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

  // Filtered student attempts for table
  const filteredAttempts = useMemo(() => {
    return attempts.filter((att) => {
      const matchQuery =
        att.ownerId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        att.attemptId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        att.moduleId.toLowerCase().includes(searchQuery.toLowerCase());
      return matchQuery;
    });
  }, [attempts, searchQuery]);

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
            <div className="teacher-profile-chip" onClick={onOpenProfile} role="button" tabIndex={0}>
              <div className="chip-avatar teacher-chip-avatar">
                {user.namaLengkap ? user.namaLengkap.charAt(0).toUpperCase() : 'G'}
              </div>
              <div className="chip-text">
                <span className="chip-name">{user.namaLengkap || 'Guru'}</span>
                <span className="chip-role">Guru Berwenang</span>
              </div>
            </div>
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
                  <h3 className="t-section-title">Student Overview</h3>
                  <p className="t-section-sub">Pemantauan partisipasi dan hasil belajar siswa.</p>
                </div>

                <div className="t-filter-tools">
                  <div className="t-search-wrapper">
                    <span className="search-icon" aria-hidden="true">🔍</span>
                    <input
                      type="text"
                      className="t-search-input"
                      placeholder="Cari siswa / modul / ID..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>

                  <select
                    className="t-select-filter"
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                  >
                    <option value="all">Semua Kelas</option>
                    <option value="X-1">Kelas X - 1</option>
                    <option value="X-2">Kelas X - 2</option>
                    <option value="X-3">Kelas X - 3</option>
                  </select>
                </div>
              </div>

              {filteredAttempts.length > 0 ? (
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
                        return (
                          <tr key={att.attemptId}>
                            <td>
                              <div className="t-student-cell">
                                <div className="t-student-avatar">
                                  {att.ownerId.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                  <span className="t-student-name">
                                    {att.ownerId === 'guest' ? 'Siswa Mandiri (Tamu)' : att.ownerId}
                                  </span>
                                  <span className="t-student-id">ID: {att.attemptId.slice(0, 16)}...</span>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span className="t-module-tag">
                                {att.moduleId === 'materi-1' ? 'Modul 1: Pengenalan' : att.moduleId}
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
                  {attempts.slice(-4).reverse().map((rec) => (
                    <div key={rec.attemptId} className="t-activity-item">
                      <div className="t-act-icon">📝</div>
                      <div className="t-act-content">
                        <span className="t-act-title">
                          {rec.ownerId === 'guest' ? 'Siswa Tamu' : rec.ownerId} submit kuis
                        </span>
                        <span className="t-act-meta">
                          Skor {rec.score}% • {rec.totalCorrect}/{rec.totalQuestions} Benar
                        </span>
                      </div>
                    </div>
                  ))}
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

