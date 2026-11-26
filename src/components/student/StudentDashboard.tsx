import React, { useState, useMemo } from 'react';
import type { UserProfile } from '../../types/auth';
import type { Page } from '../Navbar';
import { loadQuizHistory, type QuizAttemptRecord } from '../../services/localStore';
import { materiList } from '../../data/materi';
import './StudentDashboard.css';

interface StudentDashboardProps {
  user: UserProfile;
  onNavigate: (page: Page) => void;
  onOpenProfile: () => void;
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({
  user,
  onNavigate,
  onOpenProfile,
}) => {
  // Load real history terikat pada UID siswa yang sedang aktif
  const [history] = useState<QuizAttemptRecord[]>(() => loadQuizHistory(user.uid));
  const [activeTab, setActiveTab] = useState<'all' | 'weekly'>('all');

  const firstName = useMemo(() => {
    return user.namaLengkap?.trim().split(' ')[0] || 'Siswa';
  }, [user.namaLengkap]);

  // Aktivitas mingguan nyata dihitung dari timestamp pengerjaan (tanpa data fiktif)
  const weeklyData = useMemo(() => {
    const days = [
      { day: 'Sen', label: 'Sen', count: 0 },
      { day: 'Sel', label: 'Sel', count: 0 },
      { day: 'Rab', label: 'Rab', count: 0 },
      { day: 'Kam', label: 'Kam', count: 0 },
      { day: 'Jum', label: 'Jum', count: 0 },
      { day: 'Sab', label: 'Sab', count: 0 },
      { day: 'Min', label: 'Min', count: 0 },
    ];

    history.forEach((rec) => {
      if (rec.completedAt) {
        const date = new Date(rec.completedAt);
        const dayIdx = date.getDay(); // 0: Sun, 1: Mon ... 6: Sat
        const mappedIdx = dayIdx === 0 ? 6 : dayIdx - 1; // 0: Sen ... 6: Min
        if (days[mappedIdx]) {
          days[mappedIdx].count += 1;
        }
      }
    });

    const maxCount = Math.max(...days.map((d) => d.count), 1);
    return days.map((d) => ({
      ...d,
      val: d.count > 0 ? Math.round((d.count / maxCount) * 100) : 0,
    }));
  }, [history]);

  // Real statistics computation
  const stats = useMemo(() => {
    const totalModules = materiList.length; // 3
    const totalSimulations = 2; // Ikatan Ion & Kovalen
    const totalQuizzes = 1; // Modul 1 Kuis
    const quizAttemptsCount = history.length;
    const latestAttempt = history.length > 0 ? history[history.length - 1] : null;
    const latestScore = latestAttempt ? latestAttempt.score : null;

    // Calculate average score if history exists
    const avgScore = history.length > 0
      ? Math.round(history.reduce((acc, curr) => acc + curr.score, 0) / history.length)
      : null;

    // Calculate approximate completion percentage
    // e.g. based on quizzes attempted & modules explored
    let completionPct = 0;
    if (history.length > 0) {
      completionPct += 40; // quiz completed
      if (latestScore && latestScore >= 75) {
        completionPct += 30; // mastery achieved
      }
    }
    // Base engagement bonus for having an active profile
    if (user.profileCompleted) {
      completionPct += 15;
    }
    completionPct = Math.min(100, completionPct);

    return {
      totalModules,
      totalSimulations,
      totalQuizzes,
      quizAttemptsCount,
      latestScore,
      avgScore,
      completionPct,
    };
  }, [history, user.profileCompleted]);

  // Current date formatted nicely
  const [currentDateFormatted] = useState<string>(() => {
    return new Intl.DateTimeFormat('id-ID', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(Date.now());
  });

  return (
    <div className="learning-space-layout">
      {/* =========================================================================
          MAIN CONTENT AREA
          ========================================================================= */}
      <main className="student-main-content">
        {/* Top Header Bar */}
        <header className="student-header-bar">
          <div className="header-greeting-block">
            <h1 className="header-greeting-title">
              Ruang Belajar Siswa <span className="greeting-sparkle">✨</span>
            </h1>
            <p className="header-greeting-subtitle">{currentDateFormatted}</p>
          </div>

          <div className="header-actions-block">
            <div className="student-profile-chip" onClick={onOpenProfile} role="button" tabIndex={0}>
              <div className="chip-avatar">
                {user.namaLengkap ? user.namaLengkap.charAt(0).toUpperCase() : 'S'}
              </div>
              <div className="chip-text">
                <span className="chip-name">{firstName}</span>
                <span className="chip-role">Siswa</span>
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Dashboard Body */}
        <div className="dashboard-grid-container">
          {/* Main Column */}
          <div className="dashboard-primary-column">
            {/* 1. Welcome Card */}
            <section className="welcome-banner-card">
              <div className="welcome-banner-text">
                <div className="welcome-tag-pill">
                  <span>CHEMBOND EXPLORER</span>
                </div>
                <h2 className="welcome-title">Halo, {firstName}! 👋</h2>
                <p className="welcome-subtitle">
                  Yuk, lanjutkan petualangan belajar kimiamu hari ini.
                  Pahami konsep ikatan ion, kovalen, dan logam dengan visual interaktif.
                </p>
                <div className="welcome-cta-group">
                  <button
                    type="button"
                    className="btn-welcome-action"
                    onClick={() => onNavigate('Materi')}
                  >
                    <span>Continue Learning</span>
                    <span className="btn-arrow">→</span>
                  </button>
                </div>
              </div>

              {/* Decorative Molecule Visual inside Welcome Card */}
              <div className="welcome-banner-visual" aria-hidden="true">
                <svg viewBox="0 0 200 200" className="welcome-mol-svg">
                  <circle cx="100" cy="100" r="42" fill="rgba(255,255,255,0.25)" />
                  <circle cx="100" cy="100" r="30" fill="url(#welcomeGrad)" />
                  <line x1="100" y1="100" x2="160" y2="60" stroke="rgba(255,255,255,0.7)" strokeWidth="6" strokeLinecap="round" />
                  <circle cx="160" cy="60" r="18" fill="#FFF" />
                  <line x1="100" y1="100" x2="40" y2="140" stroke="rgba(255,255,255,0.7)" strokeWidth="6" strokeLinecap="round" />
                  <circle cx="40" cy="140" r="22" fill="#FFC078" />
                  <defs>
                    <linearGradient id="welcomeGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="100%" stopColor="#FFF1E8" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </section>

            {/* 2. Quick Overview Cards (4 Cards) */}
            <section className="overview-cards-grid" aria-label="Statistik Cepat Pembelajaran">
              {/* Card 1: Materi */}
              <div className="stat-card card-materi">
                <div className="stat-icon-wrapper icon-materi">📖</div>
                <div className="stat-details">
                  <span className="stat-label">Materi Pembelajaran</span>
                  <div className="stat-value-row">
                    <span className="stat-number">{stats.totalModules}</span>
                    <span className="stat-sub">Modul Tersedia</span>
                  </div>
                  <span className="stat-footer-text">Modul 1 s.d. 3 siap dipelajari</span>
                </div>
              </div>

              {/* Card 2: Simulasi */}
              <div className="stat-card card-simulasi">
                <div className="stat-icon-wrapper icon-simulasi">🔬</div>
                <div className="stat-details">
                  <span className="stat-label">Simulasi Interaktif</span>
                  <div className="stat-value-row">
                    <span className="stat-number">{stats.totalSimulations}</span>
                    <span className="stat-sub">Model Ikatan</span>
                  </div>
                  <span className="stat-footer-text">Ikatan Ion & Kovalen</span>
                </div>
              </div>

              {/* Card 3: Kuis */}
              <div className="stat-card card-kuis">
                <div className="stat-icon-wrapper icon-kuis">📝</div>
                <div className="stat-details">
                  <span className="stat-label">Kuis & Evaluasi</span>
                  <div className="stat-value-row">
                    <span className="stat-number">
                      {stats.latestScore !== null ? `${stats.latestScore}%` : '0%'}
                    </span>
                    <span className="stat-sub">Skor Terakhir</span>
                  </div>
                  <span className="stat-footer-text">
                    {stats.quizAttemptsCount > 0
                      ? `${stats.quizAttemptsCount} kali percobaan tersimpan`
                      : 'Belum ada pengerjaan kuis'}
                  </span>
                </div>
              </div>

              {/* Card 4: Progres */}
              <div className="stat-card card-progres">
                <div className="stat-icon-wrapper icon-progres">🎯</div>
                <div className="stat-details">
                  <span className="stat-label">Total Progres</span>
                  <div className="stat-value-row">
                    <span className="stat-number">{stats.completionPct}%</span>
                    <span className="stat-sub">Selesai</span>
                  </div>
                  <div className="stat-progress-bar-wrap">
                    <div
                      className="stat-progress-bar-fill"
                      style={{ width: `${stats.completionPct}%` }}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* 3. Continue Learning Card */}
            <section className="continue-learning-section">
              <div className="section-header-row">
                <h3 className="section-title">Continue Learning</h3>
                <button
                  type="button"
                  className="section-link-action"
                  onClick={() => onNavigate('Materi')}
                >
                  Lihat Semua Materi →
                </button>
              </div>

              <div className="continue-learning-card">
                <div className="continue-card-badge">MODUL REKOMENDASI</div>
                <div className="continue-card-content">
                  <div className="continue-icon-box">⚛️</div>
                  <div className="continue-info">
                    <h4 className="continue-title">
                      {history.length === 0 ? 'Modul 1: Pengenalan Ikatan Kimia' : 'Modul 2: Jenis-Jenis Ikatan Kimia'}
                    </h4>
                    <p className="continue-description">
                      {history.length === 0
                        ? 'Pahami kestabilan gas mulia, konfigurasi elektron model Bohr, dan aturan duplet-oktet.'
                        : 'Pelajari mekanisme transfer elektron pada ikatan ion dan pemakaian bersama elektron kovalen.'}
                    </p>
                    <div className="continue-meta-row">
                      <span className="meta-badge">SMA Kelas X</span>
                      <span className="meta-badge">4 Submateri</span>
                      <span className="meta-badge">Interaktif</span>
                    </div>
                  </div>
                </div>

                <div className="continue-card-footer">
                  <div className="progress-indicator-group">
                    <div className="progress-labels">
                      <span>Progres Topik</span>
                      <span>{stats.completionPct}%</span>
                    </div>
                    <div className="continue-progress-bar">
                      <div
                        className="continue-progress-fill"
                        style={{ width: `${Math.max(10, stats.completionPct)}%` }}
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn-continue-now"
                    onClick={() => onNavigate('Materi')}
                  >
                    Lanjutkan Belajar →
                  </button>
                </div>
              </div>
            </section>

            {/* 4. Learning Progress Chart */}
            <section className="learning-chart-section">
              <div className="section-header-row">
                <div>
                  <h3 className="section-title">Learning Progress</h3>
                  <p className="section-subtitle">Pantau perkembangan perjalanan belajarmu.</p>
                </div>

                <div className="chart-filter-toggle">
                  <button
                    type="button"
                    className={`filter-btn ${activeTab === 'all' ? 'active' : ''}`}
                    onClick={() => setActiveTab('all')}
                  >
                    Semua
                  </button>
                  <button
                    type="button"
                    className={`filter-btn ${activeTab === 'weekly' ? 'active' : ''}`}
                    onClick={() => setActiveTab('weekly')}
                  >
                    Mingguan
                  </button>
                </div>
              </div>

              {history.length > 0 ? (
                <div className="progress-chart-container">
                  <svg viewBox="0 0 600 220" className="progress-svg-chart" aria-label="Grafik Progres Belajar">
                    <defs>
                      <linearGradient id="chartAreaGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#F72F91" stopOpacity="0.32" />
                        <stop offset="100%" stopColor="#F72F91" stopOpacity="0.0" />
                      </linearGradient>
                      <linearGradient id="chartLineGrad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#F72F91" />
                        <stop offset="60%" stopColor="#FF6B79" />
                        <stop offset="100%" stopColor="#FF9B52" />
                      </linearGradient>
                    </defs>

                    {/* Horizontal Guide Lines */}
                    <line x1="40" y1="30" x2="570" y2="30" stroke="#F1E3EB" strokeDasharray="4 4" />
                    <text x="25" y="34" fill="#8B7B89" fontSize="11">100%</text>

                    <line x1="40" y1="80" x2="570" y2="80" stroke="#F1E3EB" strokeDasharray="4 4" />
                    <text x="25" y="84" fill="#8B7B89" fontSize="11">75%</text>

                    <line x1="40" y1="130" x2="570" y2="130" stroke="#F1E3EB" strokeDasharray="4 4" />
                    <text x="25" y="134" fill="#8B7B89" fontSize="11">50%</text>

                    <line x1="40" y1="180" x2="570" y2="180" stroke="#F1E3EB" />
                    <text x="25" y="184" fill="#8B7B89" fontSize="11">0%</text>

                    {/* Dynamic Path based on history */}
                    {(() => {
                      const points = history.slice(-6).map((item, idx, arr) => {
                        const step = arr.length > 1 ? (520 / (arr.length - 1)) : 260;
                        const x = 50 + idx * step;
                        // Score 0-100 maps to y 180 -> 30
                        const y = 180 - (item.score / 100) * 150;
                        return { x, y, score: item.score, id: item.attemptId };
                      });

                      if (points.length === 1) {
                        return (
                          <g>
                            <circle cx={points[0].x} cy={points[0].y} r="8" fill="#F72F91" />
                            <text x={points[0].x} y={points[0].y - 12} textAnchor="middle" fill="#D91D78" fontWeight="800" fontSize="12">
                              {points[0].score}%
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
                          <path d={areaD} fill="url(#chartAreaGrad)" />
                          <path d={pathD} fill="none" stroke="url(#chartLineGrad)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                          {points.map((pt, i) => (
                            <g key={pt.id || i}>
                              <circle cx={pt.x} cy={pt.y} r="6" fill="#FFFFFF" stroke="#F72F91" strokeWidth="3" />
                              <text x={pt.x} y={pt.y - 12} textAnchor="middle" fill="#352B3D" fontWeight="800" fontSize="11">
                                {pt.score}%
                              </text>
                            </g>
                          ))}
                        </g>
                      );
                    })()}
                  </svg>
                </div>
              ) : (
                <div className="chart-empty-state">
                  <div className="empty-state-icon">📈</div>
                  <h4 className="empty-state-title">Belum Ada Progres Tercatat</h4>
                  <p className="empty-state-desc">
                    Progres belajarmu akan muncul di sini setelah kamu mulai menjelajahi materi ChemBond dan mengerjakan kuis evaluasi.
                  </p>
                  <button
                    type="button"
                    className="btn-start-learning-sm"
                    onClick={() => onNavigate('Materi')}
                  >
                    Mulai Belajar Sekarang →
                  </button>
                </div>
              )}
            </section>

            {/* 5. Quick Access Shortcuts (4 Shortcuts) */}
            <section className="quick-access-section" aria-label="Explore ChemBond">
              <h3 className="section-title">Explore ChemBond</h3>
              <div className="quick-access-grid">
                <div
                  className="quick-shortcut-card"
                  onClick={() => onNavigate('Materi')}
                  role="button"
                  tabIndex={0}
                >
                  <div className="shortcut-icon-bubble bg-pink">📚</div>
                  <div className="shortcut-meta">
                    <h4 className="shortcut-title">Materi Pembelajaran</h4>
                    <p className="shortcut-sub">Pelajari konsep ikatan kimia.</p>
                  </div>
                  <span className="shortcut-arrow">→</span>
                </div>

                <div
                  className="quick-shortcut-card"
                  onClick={() => onNavigate('Simulasi')}
                  role="button"
                  tabIndex={0}
                >
                  <div className="shortcut-icon-bubble bg-orange">🧪</div>
                  <div className="shortcut-meta">
                    <h4 className="shortcut-title">Simulasi Interaktif</h4>
                    <p className="shortcut-sub">Jelajahi interaksi antaratom.</p>
                  </div>
                  <span className="shortcut-arrow">→</span>
                </div>

                <div
                  className="quick-shortcut-card"
                  onClick={() => onNavigate('Kuis')}
                  role="button"
                  tabIndex={0}
                >
                  <div className="shortcut-icon-bubble bg-coral">📝</div>
                  <div className="shortcut-meta">
                    <h4 className="shortcut-title">Kuis Kimia</h4>
                    <p className="shortcut-sub">Uji pemahamanmu.</p>
                  </div>
                  <span className="shortcut-arrow">→</span>
                </div>

                <div
                  className="quick-shortcut-card"
                  onClick={() => onNavigate('Progres')}
                  role="button"
                  tabIndex={0}
                >
                  <div className="shortcut-icon-bubble bg-peach">📊</div>
                  <div className="shortcut-meta">
                    <h4 className="shortcut-title">Riwayat & Progres</h4>
                    <p className="shortcut-sub">Pantau perjalanan belajarmu.</p>
                  </div>
                  <span className="shortcut-arrow">→</span>
                </div>
              </div>
            </section>
          </div>

          {/* =========================================================================
              SECONDARY COLUMN (Right Side Panel for Tasks, Weekly Activity, Activities)
              ========================================================================= */}
          <div className="dashboard-secondary-column">
            {/* Weekly Activity Widget */}
            <div className="side-widget-card">
              <h4 className="widget-title">Weekly Activity</h4>
              <p className="widget-subtitle">Aktivitas belajar mingguan.</p>

              <div className="weekly-bars-container">
                {weeklyData.map((item, idx) => (
                  <div key={item.day} className="weekly-bar-column">
                    <div className="bar-track">
                      <div
                        className={`bar-fill bar-shade-${(idx % 3) + 1}`}
                        style={{ height: `${item.val}%` }}
                        title={`${item.count} pengerjaan pada hari ${item.label}`}
                      />
                    </div>
                    <span className="bar-day-label">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Belajar / Tasks */}
            <div className="side-widget-card">
              <h4 className="widget-title">Target Pembelajaran</h4>
              <p className="widget-subtitle">Langkah mencapai pemahaman optimal.</p>

              <div className="tasks-list">
                <div className={`task-item ${stats.completionPct >= 30 ? 'completed' : ''}`}>
                  <span className="task-checkbox">
                    {stats.completionPct >= 30 ? '✓' : '○'}
                  </span>
                  <div className="task-info">
                    <span className="task-name">Pelajari Konfigurasi Elektron</span>
                    <span className="task-status">Modul 1 • Pengenalan</span>
                  </div>
                </div>

                <div className={`task-item ${history.length > 0 ? 'completed' : ''}`}>
                  <span className="task-checkbox">
                    {history.length > 0 ? '✓' : '○'}
                  </span>
                  <div className="task-info">
                    <span className="task-name">Kerjakan Kuis Evaluasi 1</span>
                    <span className="task-status">Kuis • 6 Soal Pilihan Ganda</span>
                  </div>
                </div>

                <div className="task-item">
                  <span className="task-checkbox">○</span>
                  <div className="task-info">
                    <span className="task-name">Eksplorasi Ikatan Kovalen</span>
                    <span className="task-status">Modul 2 • Jenis Ikatan</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="side-widget-card">
              <div className="widget-header-flex">
                <h4 className="widget-title">Recent Activities</h4>
                <span className="activity-count-badge">{history.length}</span>
              </div>

              {history.length > 0 ? (
                <div className="recent-activity-stream">
                  {history.slice(-3).reverse().map((rec) => (
                    <div key={rec.attemptId} className="activity-entry">
                      <div className="activity-icon-badge">📝</div>
                      <div className="activity-details">
                        <span className="activity-title">Kuis Modul 1 Selesai</span>
                        <div className="activity-submeta">
                          <span className="activity-score">Nilai: {rec.score}%</span>
                          <span className="activity-dot">•</span>
                          <span className="activity-time">
                            {rec.completedAt ? new Date(rec.completedAt).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }) : 'Hari ini'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="activity-empty-box">
                  <span className="empty-box-icon">⏳</span>
                  <p className="empty-box-text">Belum ada riwayat aktivitas pengerjaan kuis.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
