import React, { useState } from 'react';

export const NaClMoleculeHero: React.FC = () => {
  const [activeIon, setActiveIon] = useState<'both' | 'na' | 'cl'>('both');
  const [showLattice, setShowLattice] = useState(false);

  return (
    <div className="nacl-hero-visual-card">
      {/* Top Banner Tag */}
      <div className="nacl-top-tag">
        <span className="nacl-tag-badge">💎 Senyawa Ionik Utama</span>
        <span className="nacl-tag-sub">Garam Dapur (NaCl)</span>
      </div>

      {/* Main Large Visual SVG of NaCl Molecule */}
      <div className="nacl-canvas-wrap">
        <svg
          viewBox="0 0 460 320"
          className="nacl-svg-canvas"
          aria-label="Model Visual Molekul Ikatan Ionik NaCl (Natrium Klorida)"
        >
          <defs>
            {/* 3D Sphere Gradients */}
            {/* Sodium Cation (Na+) - Radiant Cyan/Turquoise with 3D spherical depth */}
            <radialGradient id="naSphereGrad" cx="35%" cy="32%" r="65%">
              <stop offset="0%" stopColor="#A8F5FF" />
              <stop offset="25%" stopColor="#38E1FF" />
              <stop offset="65%" stopColor="#0099D6" />
              <stop offset="100%" stopColor="#005B85" />
            </radialGradient>

            {/* Chlorine Anion (Cl-) - Radiant Emerald Lime with 3D depth */}
            <radialGradient id="clSphereGrad" cx="35%" cy="32%" r="65%">
              <stop offset="0%" stopColor="#D2FF8C" />
              <stop offset="25%" stopColor="#78FF43" />
              <stop offset="60%" stopColor="#1EAA24" />
              <stop offset="100%" stopColor="#0A6112" />
            </radialGradient>

            {/* Halo Glows */}
            <radialGradient id="naGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#38E1FF" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#38E1FF" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#38E1FF" stopOpacity="0" />
            </radialGradient>

            <radialGradient id="clGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#78FF43" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#78FF43" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#78FF43" stopOpacity="0" />
            </radialGradient>

            {/* Electron Transfer Path */}
            <path
              id="electronTransferCurve"
              d="M 145,150 Q 230,65 315,150"
            />

            {/* Glow Filter */}
            <filter id="naclGlowFilter" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background Ambient Glow */}
          <circle cx="145" cy="160" r="85" fill="url(#naGlow)" opacity="0.65" />
          <circle cx="325" cy="160" r="110" fill="url(#clGlow)" opacity="0.65" />

          {/* Electrostatic Force Waves between Na+ and Cl- */}
          <g className="electrostatic-waves" opacity="0.9">
            {/* Magnetic/electrostatic attraction field arcs */}
            <path
              d="M 145,115 C 205,100 265,100 325,115"
              fill="none"
              stroke="#FFD152"
              strokeWidth="2.5"
              strokeDasharray="5 3"
              className="wave-line-1"
            />
            <path
              d="M 145,160 C 205,160 265,160 325,160"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="5"
              strokeLinecap="round"
              filter="url(#naclGlowFilter)"
            />
            <path
              d="M 145,160 C 205,160 265,160 325,160"
              fill="none"
              stroke="#FF6B79"
              strokeWidth="2.5"
              strokeDasharray="6 4"
            />
            <path
              d="M 145,205 C 205,220 265,220 325,205"
              fill="none"
              stroke="#FFD152"
              strokeWidth="2.5"
              strokeDasharray="5 3"
              className="wave-line-2"
            />

            {/* Central Attractive Sparkle Force Badge */}
            <rect x="200" y="145" width="70" height="30" rx="15" fill="#D91D78" stroke="#FFFFFF" strokeWidth="2" />
            <text x="235" y="165" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="800">
              Gaya Tarik
            </text>
          </g>

          {/* Crystal Lattice Preview Dots (Optional Mode) */}
          {showLattice && (
            <g className="lattice-overlay" opacity="0.75">
              {/* Surrounding Na+ and Cl- in 3D crystal lattice */}
              <circle cx="60" cy="80" r="22" fill="url(#clSphereGrad)" opacity="0.6" />
              <text x="60" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">Cl⁻</text>
              <line x1="82" y1="95" x2="115" y2="125" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="3 3" />

              <circle cx="235" cy="60" r="18" fill="url(#naSphereGrad)" opacity="0.6" />
              <text x="235" y="65" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">Na⁺</text>
              <line x1="235" y1="78" x2="235" y2="140" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="3 3" />

              <circle cx="400" cy="90" r="18" fill="url(#naSphereGrad)" opacity="0.6" />
              <text x="400" y="95" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">Na⁺</text>
              <line x1="382" y1="105" x2="355" y2="135" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="3 3" />

              <circle cx="145" cy="270" r="22" fill="url(#clSphereGrad)" opacity="0.6" />
              <text x="145" y="275" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">Cl⁻</text>
              <line x1="145" y1="205" x2="145" y2="248" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="3 3" />

              <circle cx="325" cy="275" r="18" fill="url(#naSphereGrad)" opacity="0.6" />
              <text x="325" y="280" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">Na⁺</text>
              <line x1="325" y1="225" x2="325" y2="257" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="3 3" />
            </g>
          )}

          {/* Animated Electron Transfer Path & Traveling Electron */}
          <path
            d="M 145,150 Q 235,50 325,150"
            fill="none"
            stroke="#FFD152"
            strokeWidth="3"
            strokeDasharray="6 4"
            opacity="0.85"
          />
          <g filter="url(#naclGlowFilter)">
            <circle cx="0" cy="0" r="8" fill="#FFD152" stroke="#FFFFFF" strokeWidth="2" />
            <circle cx="0" cy="0" r="3" fill="#FFFFFF" />
            <animateMotion dur="2.8s" repeatCount="indefinite">
              <mpath href="#electronTransferCurve" />
            </animateMotion>
          </g>
          {/* Label on Electron Transfer */}
          <rect x="195" y="68" width="80" height="22" rx="11" fill="rgba(42, 14, 31, 0.85)" stroke="#FFD152" strokeWidth="1.5" />
          <text x="235" y="83" textAnchor="middle" fill="#FFD152" fontSize="11" fontWeight="800">
            Transfer 1e⁻ ⚡
          </text>

          {/* SODIUM CATION SPHERE (Na+) */}
          <g
            className={`ion-group na-group ${activeIon === 'na' ? 'highlighted' : ''}`}
            onClick={() => setActiveIon(activeIon === 'na' ? 'both' : 'na')}
            style={{ cursor: 'pointer' }}
          >
            {/* Outer Orbit Rings of Na+ */}
            <circle cx="145" cy="160" r="54" fill="none" stroke="#38E1FF" strokeWidth="2" strokeDasharray="4 3" opacity="0.75" />
            <circle cx="145" cy="160" r="45" fill="url(#naSphereGrad)" filter="url(#naclGlowFilter)" />

            {/* Specular 3D highlight */}
            <ellipse cx="132" cy="144" rx="18" ry="10" fill="#FFFFFF" opacity="0.5" transform="rotate(-25 132 144)" />

            {/* Text labels inside Na+ */}
            <text x="145" y="166" textAnchor="middle" fill="#FFFFFF" fontSize="24" fontWeight="900" letterSpacing="-0.5px">
              Na⁺
            </text>
            <text x="145" y="184" textAnchor="middle" fill="#E6FAFF" fontSize="10" fontWeight="700">
              Kation (+1)
            </text>

            {/* Charge Badge */}
            <circle cx="180" cy="125" r="14" fill="#FFD152" stroke="#FFFFFF" strokeWidth="2" />
            <text x="180" y="130" textAnchor="middle" fill="#2A0E1F" fontSize="13" fontWeight="900">+</text>
          </g>

          {/* CHLORIDE ANION SPHERE (Cl-) */}
          <g
            className={`ion-group cl-group ${activeIon === 'cl' ? 'highlighted' : ''}`}
            onClick={() => setActiveIon(activeIon === 'cl' ? 'both' : 'cl')}
            style={{ cursor: 'pointer' }}
          >
            {/* Outer Octet Shell of Cl- (8 Valence Electrons) */}
            <circle cx="325" cy="160" r="76" fill="none" stroke="#78FF43" strokeWidth="2.5" strokeDasharray="4 2" opacity="0.8" />
            <circle cx="325" cy="160" r="65" fill="url(#clSphereGrad)" filter="url(#naclGlowFilter)" />

            {/* Specular 3D highlight */}
            <ellipse cx="308" cy="138" rx="24" ry="14" fill="#FFFFFF" opacity="0.5" transform="rotate(-25 308 138)" />

            {/* 8 Valence Electrons distributed on outer ring */}
            <g className="octet-electrons">
              <circle cx="325" cy="84" r="5" fill="#FFD152" stroke="#FFFFFF" strokeWidth="1.5" />
              <circle cx="325" cy="236" r="5" fill="#FFD152" stroke="#FFFFFF" strokeWidth="1.5" />
              <circle cx="249" cy="160" r="5" fill="#FFD152" stroke="#FFFFFF" strokeWidth="1.5" />
              <circle cx="401" cy="160" r="5" fill="#FFD152" stroke="#FFFFFF" strokeWidth="1.5" />

              <circle cx="271" cy="106" r="5" fill="#FFD152" stroke="#FFFFFF" strokeWidth="1.5" />
              <circle cx="379" cy="214" r="5" fill="#FFD152" stroke="#FFFFFF" strokeWidth="1.5" />
              <circle cx="271" cy="214" r="5" fill="#FFD152" stroke="#FFFFFF" strokeWidth="1.5" />
              <circle cx="379" cy="106" r="5" fill="#FFD152" stroke="#FFFFFF" strokeWidth="1.5" />
            </g>

            {/* Text labels inside Cl- */}
            <text x="325" y="167" textAnchor="middle" fill="#FFFFFF" fontSize="28" fontWeight="900" letterSpacing="-0.5px">
              Cl⁻
            </text>
            <text x="325" y="188" textAnchor="middle" fill="#F4FFE6" fontSize="11" fontWeight="700">
              Anion (-1)
            </text>

            {/* Charge Badge */}
            <circle cx="378" cy="115" r="14" fill="#FF6B79" stroke="#FFFFFF" strokeWidth="2" />
            <text x="378" y="120" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="900">−</text>
          </g>

          {/* Formula Floating Ribbon */}
          <g transform="translate(180, 260)">
            <rect width="110" height="34" rx="17" fill="#FFFFFF" stroke="#D91D78" strokeWidth="2.5" filter="url(#naclGlowFilter)" />
            <text x="55" y="23" textAnchor="middle" fill="#D91D78" fontSize="16" fontWeight="900">
              Na⁺ + Cl⁻
            </text>
          </g>
        </svg>
      </div>

      {/* Control Pill Bar */}
      <div className="nacl-controls-bar">
        <div className="nacl-pills-row">
          <button
            type="button"
            className={`btn-nacl-pill ${activeIon === 'both' ? 'active' : ''}`}
            onClick={() => setActiveIon('both')}
          >
            Semua Ion
          </button>
          <button
            type="button"
            className={`btn-nacl-pill cyan ${activeIon === 'na' ? 'active' : ''}`}
            onClick={() => setActiveIon('na')}
          >
            Ion Natrium (Na⁺)
          </button>
          <button
            type="button"
            className={`btn-nacl-pill green ${activeIon === 'cl' ? 'active' : ''}`}
            onClick={() => setActiveIon('cl')}
          >
            Ion Klorida (Cl⁻)
          </button>
          <button
            type="button"
            className={`btn-nacl-pill outline ${showLattice ? 'active' : ''}`}
            onClick={() => setShowLattice(!showLattice)}
          >
            {showLattice ? '✓ Kisi Kristal Aktif' : '+ Kisi Kristal'}
          </button>
        </div>
      </div>

      {/* Educational Explanation Box */}
      <div className="nacl-info-grid">
        <div className={`nacl-stat-box na-box ${activeIon === 'na' || activeIon === 'both' ? 'active' : ''}`}>
          <div className="box-badge cyan">11 Na (2, 8, 1)</div>
          <h4>Natrium Melepas 1e⁻</h4>
          <p>Natrium melepaskan 1 elektron valensi agar kulit terluarnya menjadi 8 (oktet stabil seperti Neon).</p>
        </div>
        <div className={`nacl-stat-box cl-box ${activeIon === 'cl' || activeIon === 'both' ? 'active' : ''}`}>
          <div className="box-badge green">17 Cl (2, 8, 7)</div>
          <h4>Klorin Menangkap 1e⁻</h4>
          <p>Klorin menangkap 1 elektron dari Natrium membentuk anion Cl⁻ dengan 8 elektron valensi (oktet stabil Argon).</p>
        </div>
      </div>
    </div>
  );
};
