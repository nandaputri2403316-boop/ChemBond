import React, { useState } from 'react';
import type { Page } from '../Navbar';
import { Molecular3DHeroViewer } from './Molecular3DHeroViewer';
import './BerandaPage.css';

interface BerandaPageProps {
  onNavigate: (page: Page) => void;
  onExploreTopic?: (topic: string) => void;
}

export const BerandaPage: React.FC<BerandaPageProps> = ({
  onNavigate,
}) => {
  const [activeTabHook, setActiveTabHook] = useState<'kristal' | 'atom'>('kristal');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="beranda-master-page">
      {/* =========================================================================
          1. HERO SECTION — PERKENALAN CHEMBOND
          ========================================================================= */}
      <section className="beranda-hero-section" aria-label="Hero ChemBond">
        <div className="container beranda-hero-grid">
          {/* Left Column: Heading and CTAs */}
          <div className="hero-text-block">
            <div className="hero-pill-badge">
              <span className="sparkle-icon">✨</span>
              <span>MEDIA PEMBELAJARAN INTERAKTIF IKATAN KIMIA</span>
            </div>

            <h1 className="hero-primary-brand">
              ChemBond<span className="brand-dot">.</span>
            </h1>

            <h2 className="hero-tagline-title">
              Mengungkap Rahasia Ikatan Antaratom
            </h2>

            <p className="hero-editorial-desc">
              Selamat datang di dunia Ikatan Kimia! Kenali bagaimana atom saling berinteraksi,
              membentuk ikatan, dan menghasilkan berbagai zat yang kita temukan dalam kehidupan sehari-hari.
            </p>

            <div className="hero-cta-buttons">
              <button
                type="button"
                className="btn-hero-primary"
                onClick={() => scrollToSection('pemantik-nacl')}
              >
                <span>Jelajahi Ikatan Kimia</span>
                <span className="btn-icon-move">↓</span>
              </button>

              <button
                type="button"
                className="btn-hero-secondary"
                onClick={() => onNavigate('Materi')}
              >
                <span>Mulai Belajar</span>
                <span className="btn-icon-move">→</span>
              </button>
            </div>

            {/* Quick trust metrics */}
            <div className="hero-metrics-strip">
              <div className="metric-item">
                <span className="metric-val">3</span>
                <span className="metric-lbl">Modul Pembelajaran</span>
              </div>
              <div className="metric-divider" />
              <div className="metric-item">
                <span className="metric-val">100%</span>
                <span className="metric-lbl">Visualisasi Interaktif</span>
              </div>
              <div className="metric-divider" />
              <div className="metric-item">
                <span className="metric-val">Kelas X</span>
                <span className="metric-lbl">Kurikulum Merdeka</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Molecular Visualization Stage */}
          <div className="hero-visual-card">
            <Molecular3DHeroViewer />
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. PEMANTIK PEMBELAJARAN — IKATAN KIMIA DALAM KEHIDUPAN SEHARI-HARI
          ========================================================================= */}
      <section id="pemantik-nacl" className="pemantik-section" aria-label="Pemantik Pembelajaran Garam Dapur">
        <div className="container">
          <div className="pemantik-card-wrapper">
            <div className="pemantik-badge-row">
              <span className="pemantik-tag">FENOMENA KEHIDUPAN SEHARI-HARI</span>
              <span className="pemantik-chem-label">Natrium Klorida (NaCl)</span>
            </div>

            <div className="pemantik-content-grid">
              {/* Left Column: Narrative & Hook Questions */}
              <div className="pemantik-narrative-col">
                <h2 className="pemantik-headline">
                  Garam Dapur: Sesederhana NaCl, Semenarik Itu!
                </h2>

                <p className="pemantik-story-text">
                  Pernahkah kamu menggunakan garam dapur saat memasak? Garam yang sering kita jumpai ternyata terbentuk melalui interaksi antara atom natrium (Na) dan klorin (Cl). Keduanya membentuk senyawa natrium klorida (NaCl) melalui ikatan ion.
                </p>

                <div className="hook-questions-box">
                  <h3 className="hook-title">Pertanyaan Pemantik:</h3>
                  <ul className="hook-questions-list">
                    <li className="hook-item">
                      <span className="hook-num">1</span>
                      <span className="hook-question">Mengapa natrium dan klorin dapat membentuk ikatan?</span>
                    </li>
                    <li className="hook-item">
                      <span className="hook-num">2</span>
                      <span className="hook-question">Apa yang terjadi dengan elektron ketika kedua atom berinteraksi?</span>
                    </li>
                    <li className="hook-item">
                      <span className="hook-num">3</span>
                      <span className="hook-question">Mengapa terbentuk zat baru dengan sifat yang berbeda dari unsur penyusunnya?</span>
                    </li>
                  </ul>
                </div>

                <div className="pemantik-action-row">
                  <button
                    type="button"
                    className="btn-find-answers"
                    onClick={() => onNavigate('Materi')}
                  >
                    <span>Temukan Jawabannya!</span>
                    <span className="btn-arrow">→</span>
                  </button>
                  <span className="action-hint">Buka pembahasan materi Ikatan Ionik</span>
                </div>
              </div>

              {/* Right Column: Video Pemantik & 3D Interactive Visualizer */}
              <div className="pemantik-visual-col">
                {/* 1. Hook Video Block (Video Pemantik NaCl) */}
                <div className="hook-video-block">
                  <div className="hook-video-header">
                    <span className="hook-video-badge">🎬 Video Fenomena</span>
                    <span className="hook-video-subhead">Fenomena dalam Kehidupan Sehari-hari</span>
                  </div>

                  <div className="hook-video-frame">
                    <video
                      src="/videos/video-pemantik-nacl.mp4"
                      controls
                      preload="metadata"
                      playsInline
                      className="hook-native-video"
                    >
                      Browser Anda tidak mendukung pemutaran video HTML5.
                    </video>
                  </div>

                  <p className="hook-video-caption">
                    Bagaimana garam dapur yang kita gunakan setiap hari dapat terbentuk melalui interaksi antaratom?
                  </p>
                </div>

                {/* 2. Switcher Buttons */}
                <div className="visual-toggle-tabs" role="tablist">
                  <button
                    type="button"
                    className={`tab-btn ${activeTabHook === 'kristal' ? 'active' : ''}`}
                    onClick={() => setActiveTabHook('kristal')}
                  >
                    💎 Kisi Kristal NaCl
                  </button>
                  <button
                    type="button"
                    className={`tab-btn ${activeTabHook === 'atom' ? 'active' : ''}`}
                    onClick={() => setActiveTabHook('atom')}
                  >
                    ⚡ Transfer Elektron Na → Cl
                  </button>
                </div>

                {/* 3. Interactive Molecular / Lattice Simulation Stage */}
                <div className="visual-display-stage">
                  {activeTabHook === 'kristal' ? (
                    <div className="crystal-lattice-visual">
                      <svg viewBox="0 0 400 320" className="crystal-svg" aria-label="Struktur Kisi Kristal Tiga Dimensi NaCl">
                        <defs>
                          <radialGradient id="naIon" cx="35%" cy="30%" r="70%">
                            <stop offset="0%" stopColor="#A8F5FF" />
                            <stop offset="70%" stopColor="#0099D6" />
                            <stop offset="100%" stopColor="#004D70" />
                          </radialGradient>
                          <radialGradient id="clIon" cx="35%" cy="30%" r="70%">
                            <stop offset="0%" stopColor="#D2FF8C" />
                            <stop offset="70%" stopColor="#1EAA24" />
                            <stop offset="100%" stopColor="#085A0E" />
                          </radialGradient>
                        </defs>

                        {/* Crystal Lattice Lines */}
                        <g stroke="rgba(241, 227, 235, 0.8)" strokeWidth="3">
                          <line x1="120" y1="80" x2="280" y2="80" />
                          <line x1="280" y1="80" x2="280" y2="240" />
                          <line x1="280" y1="240" x2="120" y2="240" />
                          <line x1="120" y1="240" x2="120" y2="80" />

                          {/* 3D Depth Lines */}
                          <line x1="120" y1="80" x2="170" y2="40" />
                          <line x1="280" y1="80" x2="330" y2="40" />
                          <line x1="280" y1="240" x2="330" y2="200" />
                          <line x1="120" y1="240" x2="170" y2="200" />

                          <line x1="170" y1="40" x2="330" y2="40" />
                          <line x1="330" y1="40" x2="330" y2="200" />
                          <line x1="170" y1="40" x2="170" y2="200" />
                          <line x1="170" y1="200" x2="330" y2="200" />
                        </g>

                        {/* Alternating Na+ and Cl- Ions */}
                        {/* Front Face */}
                        <circle cx="120" cy="80" r="20" fill="url(#naIon)" />
                        <text x="120" y="85" textAnchor="middle" fill="#FFF" fontSize="11" fontWeight="800">Na⁺</text>

                        <circle cx="280" cy="80" r="28" fill="url(#clIon)" />
                        <text x="280" y="86" textAnchor="middle" fill="#FFF" fontSize="13" fontWeight="800">Cl⁻</text>

                        <circle cx="120" cy="240" r="28" fill="url(#clIon)" />
                        <text x="120" y="246" textAnchor="middle" fill="#FFF" fontSize="13" fontWeight="800">Cl⁻</text>

                        <circle cx="280" cy="240" r="20" fill="url(#naIon)" />
                        <text x="280" y="245" textAnchor="middle" fill="#FFF" fontSize="11" fontWeight="800">Na⁺</text>

                        {/* Back Face */}
                        <circle cx="170" cy="40" r="28" fill="url(#clIon)" opacity="0.9" />
                        <circle cx="330" cy="40" r="20" fill="url(#naIon)" opacity="0.9" />
                        <circle cx="170" cy="200" r="20" fill="url(#naIon)" opacity="0.9" />
                        <circle cx="330" cy="200" r="28" fill="url(#clIon)" opacity="0.9" />
                      </svg>
                      <div className="crystal-caption">
                        <span>Susunan teratur kation Na⁺ dan anion Cl⁻ dalam kisi kristal garam dapur</span>
                      </div>
                    </div>
                  ) : (
                    <div className="electron-transfer-visual">
                      <svg viewBox="0 0 400 320" className="transfer-svg" aria-label="Mekanisme Transfer Elektron Na ke Cl">
                        <defs>
                          <radialGradient id="naAtom" cx="35%" cy="30%" r="70%">
                            <stop offset="0%" stopColor="#A8F5FF" />
                            <stop offset="70%" stopColor="#0099D6" />
                            <stop offset="100%" stopColor="#004D70" />
                          </radialGradient>
                          <radialGradient id="clAtom" cx="35%" cy="30%" r="70%">
                            <stop offset="0%" stopColor="#D2FF8C" />
                            <stop offset="70%" stopColor="#1EAA24" />
                            <stop offset="100%" stopColor="#085A0E" />
                          </radialGradient>
                        </defs>

                        {/* Na Atom */}
                        <circle cx="110" cy="160" r="52" fill="url(#naAtom)" />
                        <text x="110" y="165" textAnchor="middle" fill="#FFF" fontSize="18" fontWeight="800">Na</text>
                        <text x="110" y="185" textAnchor="middle" fill="#E0F7FA" fontSize="11">2, 8, 1</text>

                        {/* Curved Transfer Arrow */}
                        <path
                          d="M 162,130 Q 200,60 238,130"
                          fill="none"
                          stroke="#FF9B52"
                          strokeWidth="3.5"
                          strokeDasharray="6 6"
                        />

                        {/* Transferred Electron */}
                        <circle cx="200" cy="92" r="8" fill="#FFD152" stroke="#FFF" strokeWidth="2" />
                        <text x="200" y="74" textAnchor="middle" fill="#D91D78" fontSize="11" fontWeight="800">1 e⁻ dilepas</text>

                        {/* Cl Atom */}
                        <circle cx="290" cy="160" r="62" fill="url(#clAtom)" />
                        <text x="290" y="165" textAnchor="middle" fill="#FFF" fontSize="20" fontWeight="800">Cl</text>
                        <text x="290" y="188" textAnchor="middle" fill="#DCFCE7" fontSize="11">2, 8, 7</text>

                        {/* Result Badge */}
                        <rect x="70" y="245" width="260" height="42" rx="12" fill="#FFF9FC" stroke="#F1E3EB" strokeWidth="1.5" />
                        <text x="200" y="271" textAnchor="middle" fill="#352B3D" fontSize="12" fontWeight="700">
                          Na⁺ [2, 8] + Cl⁻ [2, 8, 8] → NaCl Stabil
                        </text>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

