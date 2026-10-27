import React from 'react';

interface IntroCardsProps {
  onCardAction: (cardTitle: string) => void;
}

export const IntroCards: React.FC<IntroCardsProps> = ({ onCardAction }) => {
  return (
    <section id="pengenalan" className="intro-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge-pill">
            <span>🧭 Petualangan Belajar Kimia SMA</span>
          </div>
          <h2 className="section-title">
            Tiga Langkah Menjelajahi <span className="title-highlight">Keajaiban Kimia</span>
          </h2>
          <p className="section-subtitle">
            Pelajari konsep abstrak atom dan ikatan kimia melalui visualisasi memikat, intuitif, dan ramah untuk siswa SMA.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="cards-grid">
          {/* Card 1: Kenali Atom */}
          <div className="intro-card card-atom">
            <div className="card-top-bar">
              <span className="card-badge badge-hotpink">Langkah 1 • Dasar Atom</span>
            </div>

            {/* SVG Illustration: Bohr Shells & Subatomic Particles */}
            <div className="card-illustration-wrap">
              <svg viewBox="0 0 200 160" className="card-svg" aria-hidden="true">
                <defs>
                  <linearGradient id="cardPinkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F72F91" />
                    <stop offset="100%" stopColor="#D91D78" />
                  </linearGradient>
                </defs>
                {/* Concentric shell rings */}
                <circle cx="100" cy="80" r="66" fill="none" stroke="#FF6B79" strokeWidth="2" strokeDasharray="4 3" opacity="0.6" />
                <circle cx="100" cy="80" r="44" fill="none" stroke="#F72F91" strokeWidth="2" strokeDasharray="4 2" />
                <circle cx="100" cy="80" r="24" fill="none" stroke="#FF9B52" strokeWidth="2" />

                {/* Shell labels */}
                <text x="100" y="24" textAnchor="middle" fill="#8E4971" fontSize="9" fontWeight="700">Kulit M</text>
                <text x="100" y="44" textAnchor="middle" fill="#8E4971" fontSize="9" fontWeight="700">Kulit L</text>
                <text x="100" y="62" textAnchor="middle" fill="#8E4971" fontSize="9" fontWeight="700">Kulit K</text>

                {/* Central Nucleus with glow */}
                <circle cx="100" cy="80" r="16" fill="url(#cardPinkGrad)" className="pulse-slow" />
                <circle cx="97" cy="77" r="5" fill="#FFFFFF" opacity="0.8" />
                <text x="100" y="84" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">p⁺ n⁰</text>

                {/* Orbiting electrons */}
                <circle cx="100" cy="56" r="5" fill="#38E1FF" stroke="#FFFFFF" strokeWidth="1.5" className="float-electron-1" />
                <circle cx="100" cy="104" r="5" fill="#38E1FF" stroke="#FFFFFF" strokeWidth="1.5" className="float-electron-1" />

                <circle cx="68" cy="80" r="5" fill="#FFD152" stroke="#FFFFFF" strokeWidth="1.5" className="float-electron-2" />
                <circle cx="132" cy="80" r="5" fill="#FFD152" stroke="#FFFFFF" strokeWidth="1.5" className="float-electron-2" />
                <circle cx="77" cy="57" r="5" fill="#FF6B79" stroke="#FFFFFF" strokeWidth="1.5" className="float-electron-2" />
                <circle cx="123" cy="103" r="5" fill="#FF6B79" stroke="#FFFFFF" strokeWidth="1.5" className="float-electron-2" />
              </svg>
            </div>

            <div className="card-content">
              <h3 className="card-title">Kenali Atom</h3>
              <p className="card-desc">
                Bedah struktur partikel subatomik (proton, neutron, elektron), pahami nomor atom serta nomor massa, dan kuasai konfigurasi elektron kulit atom secara visual.
              </p>

              <ul className="card-features-list">
                <li><span className="bullet-icon">⚛️</span> Partikel Subatomik (p⁺, n⁰, e⁻)</li>
                <li><span className="bullet-icon">🪐</span> Model Kulit Atom Bohr (K, L, M)</li>
                <li><span className="bullet-icon">📊</span> Konfigurasi & Elektron Valensi</li>
              </ul>

              <button
                type="button"
                className="btn btn-card-action hotpink-btn"
                onClick={() => onCardAction('Kenali Atom')}
              >
                <span>Pelajari Struktur Atom</span>
                <span className="arrow-icon">→</span>
              </button>
            </div>
          </div>

          {/* Card 2: Jelajahi Ikatan */}
          <div className="intro-card card-bond">
            <div className="card-top-bar">
              <span className="card-badge badge-orange">Langkah 2 • Pembentukan Senyawa</span>
            </div>

            {/* SVG Illustration: Overlapping Covalent Electron Sharing */}
            <div className="card-illustration-wrap">
              <svg viewBox="0 0 200 160" className="card-svg" aria-hidden="true">
                {/* Two overlapping atomic clouds */}
                <circle cx="74" cy="80" r="46" fill="rgba(255, 107, 121, 0.2)" stroke="#FF6B79" strokeWidth="2.5" strokeDasharray="4 3" />
                <circle cx="126" cy="80" r="46" fill="rgba(255, 155, 82, 0.2)" stroke="#FF9B52" strokeWidth="2.5" strokeDasharray="4 3" />

                {/* Overlap glow zone */}
                <ellipse cx="100" cy="80" rx="18" ry="32" fill="rgba(255, 234, 219, 0.75)" stroke="#FFC078" strokeWidth="2" />

                {/* Nuclei */}
                <circle cx="60" cy="80" r="15" fill="#F72F91" />
                <text x="60" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">Atom A</text>

                <circle cx="140" cy="80" r="15" fill="#FF9B52" />
                <text x="140" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">Atom B</text>

                {/* Shared electron pair in overlap zone */}
                <g className="shared-electrons">
                  <circle cx="100" cy="70" r="5.5" fill="#38E1FF" stroke="#FFFFFF" strokeWidth="1.5" />
                  <text x="100" y="73" textAnchor="middle" fill="#2A0E1F" fontSize="7" fontWeight="bold">e⁻</text>
                  <circle cx="100" cy="90" r="5.5" fill="#38E1FF" stroke="#FFFFFF" strokeWidth="1.5" />
                  <text x="100" y="93" textAnchor="middle" fill="#2A0E1F" fontSize="7" fontWeight="bold">e⁻</text>
                </g>

                {/* Sparkles */}
                <text x="100" y="44" textAnchor="middle" fill="#D91D78" fontSize="11" fontWeight="800">Pasangan Elektron</text>
              </svg>
            </div>

            <div className="card-content">
              <h3 className="card-title">Jelajahi Ikatan</h3>
              <p className="card-desc">
                Pahami rahasia bagaimana atom saling berinteraksi mencapai kestabilan oktet (8) dan duplet (2). Pelajari ikatan kovalen, ionik, dan logam secara gamblang.
              </p>

              <ul className="card-features-list">
                <li><span className="bullet-icon">🤝</span> Ikatan Kovalen (Pemakaian Bersama)</li>
                <li><span className="bullet-icon">⚡</span> Ikatan Ionik (Serah Terima Elektron)</li>
                <li><span className="bullet-icon">🎯</span> Kaidah Oktet & Struktur Lewis</li>
              </ul>

              <button
                type="button"
                className="btn btn-card-action orange-btn"
                onClick={() => onCardAction('Jelajahi Ikatan')}
              >
                <span>Jelajahi Jenis Ikatan</span>
                <span className="arrow-icon">→</span>
              </button>
            </div>
          </div>

          {/* Card 3: Eksperimen Kimia */}
          <div className="intro-card card-experiment">
            <div className="card-top-bar">
              <span className="card-badge badge-coral">Langkah 3 • Simulasi Virtual</span>
            </div>

            {/* SVG Illustration: Erlenmeyer Flask with Bubbling Reactions */}
            <div className="card-illustration-wrap">
              <svg viewBox="0 0 200 160" className="card-svg" aria-hidden="true">
                <defs>
                  <linearGradient id="flaskVibrantGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFC078" />
                    <stop offset="50%" stopColor="#FF6B79" />
                    <stop offset="100%" stopColor="#D91D78" />
                  </linearGradient>
                </defs>

                {/* Flask Glass Outline */}
                <path
                  d="M90 28 L110 28 L110 56 L154 130 C158 136 154 144 146 144 L54 144 C46 144 42 136 46 130 L90 56 Z"
                  fill="none"
                  stroke="#D91D78"
                  strokeWidth="3.5"
                  strokeLinejoin="round"
                />
                {/* Flask Lip */}
                <rect x="86" y="24" width="28" height="6" rx="3" fill="#D91D78" />

                {/* Liquid inside flask */}
                <path
                  d="M74 94 Q88 90 100 94 T126 94 L146 134 C149 139 146 142 142 142 L58 142 C54 142 51 139 54 134 Z"
                  fill="url(#flaskVibrantGrad)"
                  opacity="0.9"
                />

                {/* Measurement tick marks */}
                <line x1="88" y1="104" x2="98" y2="104" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.8" />
                <line x1="84" y1="116" x2="98" y2="116" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.8" />
                <line x1="80" y1="128" x2="98" y2="128" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.8" />

                {/* Rising bubbles */}
                <circle cx="86" cy="120" r="4.5" fill="#FFFFFF" opacity="0.85" className="bubble-1" />
                <circle cx="114" cy="112" r="5.5" fill="#FFFFFF" opacity="0.8" className="bubble-2" />
                <circle cx="98" cy="80" r="4" fill="#FFD152" opacity="0.95" className="bubble-3" />
                <circle cx="106" cy="48" r="3.5" fill="#38E1FF" opacity="0.9" className="bubble-4" />
                <circle cx="92" cy="18" r="3" fill="#FFFFFF" opacity="0.95" className="bubble-5" />

                {/* Sparkles around flask */}
                <text x="148" y="60" fill="#FFD152" fontSize="16">✨</text>
                <text x="40" y="70" fill="#F72F91" fontSize="14">✨</text>
              </svg>
            </div>

            <div className="card-content">
              <h3 className="card-title">Eksperimen Kimia</h3>
              <p className="card-desc">
                Uji hipotesis dan lakukan simulasi penggabungan unsur-unsur kimia di lab virtual. Saksikan pembentukan molekul baru secara langsung tanpa rasa takut tumpah!
              </p>

              <ul className="card-features-list">
                <li><span className="bullet-icon">🧪</span> Simulasi Reaksi Tanpa Risiko</li>
                <li><span className="bullet-icon">🔬</span> Indikator Kestabilan Energi</li>
                <li><span className="bullet-icon">💡</span> Pembentukan Molekul Real-time</li>
              </ul>

              <button
                type="button"
                className="btn btn-card-action coral-btn"
                onClick={() => onCardAction('Eksperimen Kimia')}
              >
                <span>Coba Simulasi Lab</span>
                <span className="arrow-icon">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
