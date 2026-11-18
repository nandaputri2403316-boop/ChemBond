import React from 'react';

export const MolecularAuthVisual: React.FC = () => {
  return (
    <div className="auth-molecular-panel" aria-hidden="true">
      {/* Dynamic ambient backdrop lighting */}
      <div className="molecular-ambient-glow glow-pink" />
      <div className="molecular-ambient-glow glow-orange" />
      <div className="molecular-ambient-glow glow-purple" />

      {/* Floating orbital rings & particles */}
      <div className="molecular-scene-container">
        <svg
          className="molecular-hero-svg"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Glossy Spheres Gradients */}
            {/* Primary Pink Sphere (Central Atom) */}
            <radialGradient id="glossPink" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="25%" stopColor="#FF6B79" />
              <stop offset="70%" stopColor="#F72F91" />
              <stop offset="100%" stopColor="#A80757" />
            </radialGradient>

            {/* Magenta Deep Sphere */}
            <radialGradient id="glossMagenta" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
              <stop offset="30%" stopColor="#F72F91" />
              <stop offset="75%" stopColor="#D91D78" />
              <stop offset="100%" stopColor="#660032" />
            </radialGradient>

            {/* Orange Sphere */}
            <radialGradient id="glossOrange" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="25%" stopColor="#FFC078" />
              <stop offset="65%" stopColor="#FF9B52" />
              <stop offset="100%" stopColor="#D85E15" />
            </radialGradient>

            {/* Cyan/Blue Sphere (Accent) */}
            <radialGradient id="glossBlue" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="25%" stopColor="#7DEBFF" />
              <stop offset="70%" stopColor="#18A5DB" />
              <stop offset="100%" stopColor="#0B5678" />
            </radialGradient>

            {/* Lavender / Purple Sphere */}
            <radialGradient id="glossLavender" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
              <stop offset="30%" stopColor="#E9D5FF" />
              <stop offset="70%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#6B21A8" />
            </radialGradient>

            {/* Dimensional Bond Cylinders Gradients */}
            <linearGradient id="bondGradPinkOrange" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F72F91" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#FFB380" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#FF9B52" stopOpacity="0.85" />
            </linearGradient>

            <linearGradient id="bondGradPinkBlue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F72F91" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#C4B5FD" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#38E1FF" stopOpacity="0.85" />
            </linearGradient>

            <linearGradient id="bondGradPinkLavender" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F72F91" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#A855F7" stopOpacity="0.85" />
            </linearGradient>

            {/* Glow Filter */}
            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="10" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <filter id="intenseGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="18" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Ambient Orbital Rings */}
          <g className="anim-slow-spin-rev" style={{ transformOrigin: '300px 300px' }}>
            <ellipse
              cx="300"
              cy="300"
              rx="220"
              ry="85"
              stroke="rgba(255, 255, 255, 0.45)"
              strokeWidth="2"
              strokeDasharray="8 12"
              transform="rotate(-25 300 300)"
            />
            <circle cx="110" cy="210" r="5" fill="#FFC078" filter="url(#softGlow)" />
            <circle cx="490" cy="390" r="4" fill="#38E1FF" filter="url(#softGlow)" />
          </g>

          <g className="anim-slow-spin" style={{ transformOrigin: '300px 300px' }}>
            <ellipse
              cx="300"
              cy="300"
              rx="240"
              ry="95"
              stroke="rgba(247, 47, 145, 0.35)"
              strokeWidth="2"
              transform="rotate(40 300 300)"
            />
            <circle cx="480" cy="180" r="6" fill="#F72F91" filter="url(#softGlow)" />
            <circle cx="120" cy="420" r="5" fill="#FF9B52" filter="url(#softGlow)" />
          </g>

          {/* Molecular Bonds (Dimensional Cylinders) */}
          <g className="anim-float-gentle">
            {/* Bond 1: Central Pink to Top-Right Orange */}
            <line
              x1="300"
              y1="280"
              x2="430"
              y2="180"
              stroke="url(#bondGradPinkOrange)"
              strokeWidth="16"
              strokeLinecap="round"
              filter="url(#softGlow)"
            />
            <line
              x1="300"
              y1="280"
              x2="430"
              y2="180"
              stroke="#FFFFFF"
              strokeWidth="4"
              strokeLinecap="round"
              strokeOpacity="0.75"
            />

            {/* Bond 2: Central Pink to Bottom-Left Blue */}
            <line
              x1="300"
              y1="280"
              x2="170"
              y2="380"
              stroke="url(#bondGradPinkBlue)"
              strokeWidth="16"
              strokeLinecap="round"
              filter="url(#softGlow)"
            />
            <line
              x1="300"
              y1="280"
              x2="170"
              y2="380"
              stroke="#FFFFFF"
              strokeWidth="4"
              strokeLinecap="round"
              strokeOpacity="0.75"
            />

            {/* Bond 3: Central Pink to Bottom-Right Magenta */}
            <line
              x1="300"
              y1="280"
              x2="420"
              y2="410"
              stroke="url(#bondGradPinkOrange)"
              strokeWidth="14"
              strokeLinecap="round"
              filter="url(#softGlow)"
            />
            <line
              x1="300"
              y1="280"
              x2="420"
              y2="410"
              stroke="#FFFFFF"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeOpacity="0.7"
            />

            {/* Bond 4: Central Pink to Top-Left Lavender */}
            <line
              x1="300"
              y1="280"
              x2="180"
              y2="170"
              stroke="url(#bondGradPinkLavender)"
              strokeWidth="14"
              strokeLinecap="round"
              filter="url(#softGlow)"
            />
            <line
              x1="300"
              y1="280"
              x2="180"
              y2="170"
              stroke="#FFFFFF"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeOpacity="0.7"
            />

            {/* Satellite Bond: Orange to smaller Blue */}
            <line
              x1="430"
              y1="180"
              x2="505"
              y2="120"
              stroke="url(#bondGradPinkOrange)"
              strokeWidth="8"
              strokeLinecap="round"
            />

            {/* ATOM SPHERES WITH 3D SPECULAR HIGHLIGHTS */}

            {/* 1. Atom Top-Left: Lavender */}
            <g className="atom-node atom-lavender">
              <circle cx="180" cy="170" r="42" fill="url(#glossLavender)" filter="url(#softGlow)" />
              <ellipse cx="168" cy="154" rx="14" ry="8" fill="#FFFFFF" fillOpacity="0.75" transform="rotate(-25 168 154)" />
              <circle cx="162" cy="148" r="4" fill="#FFFFFF" fillOpacity="0.9" />
              <text x="180" y="176" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="800" fontFamily="sans-serif">
                O
              </text>
            </g>

            {/* 2. Atom Bottom-Left: Blue/Cyan */}
            <g className="atom-node atom-blue">
              <circle cx="170" cy="380" r="48" fill="url(#glossBlue)" filter="url(#softGlow)" />
              <ellipse cx="156" cy="362" rx="16" ry="10" fill="#FFFFFF" fillOpacity="0.8" transform="rotate(-25 156 362)" />
              <circle cx="148" cy="354" r="5" fill="#FFFFFF" fillOpacity="0.95" />
              <text x="170" y="386" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="800" fontFamily="sans-serif">
                Na⁺
              </text>
            </g>

            {/* 3. Atom Bottom-Right: Deep Magenta */}
            <g className="atom-node atom-magenta">
              <circle cx="420" cy="410" r="46" fill="url(#glossMagenta)" filter="url(#softGlow)" />
              <ellipse cx="406" cy="394" rx="15" ry="9" fill="#FFFFFF" fillOpacity="0.75" transform="rotate(-25 406 394)" />
              <circle cx="400" cy="388" r="4" fill="#FFFFFF" fillOpacity="0.9" />
              <text x="420" y="416" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="800" fontFamily="sans-serif">
                Cl⁻
              </text>
            </g>

            {/* 4. Atom Top-Right: Warm Orange */}
            <g className="atom-node atom-orange">
              <circle cx="430" cy="180" r="52" fill="url(#glossOrange)" filter="url(#softGlow)" />
              <ellipse cx="414" cy="162" rx="18" ry="11" fill="#FFFFFF" fillOpacity="0.8" transform="rotate(-25 414 162)" />
              <circle cx="405" cy="153" r="5" fill="#FFFFFF" fillOpacity="0.95" />
              <text x="430" y="187" textAnchor="middle" fill="#FFFFFF" fontSize="18" fontWeight="800" fontFamily="sans-serif">
                H
              </text>
            </g>

            {/* 4b. Tiny Satellite Atom */}
            <g className="atom-node atom-satellite">
              <circle cx="505" cy="120" r="22" fill="url(#glossBlue)" filter="url(#softGlow)" />
              <circle cx="498" cy="113" r="3" fill="#FFFFFF" fillOpacity="0.9" />
            </g>

            {/* 5. Central Major Atom: Primary Pink (Heart of ChemBond) */}
            <g className="atom-node atom-center">
              <circle cx="300" cy="280" r="68" fill="url(#glossPink)" filter="url(#intenseGlow)" />
              <ellipse cx="278" cy="254" rx="24" ry="14" fill="#FFFFFF" fillOpacity="0.85" transform="rotate(-30 278 254)" />
              <circle cx="266" cy="242" r="7" fill="#FFFFFF" fillOpacity="0.95" />
              <circle cx="330" cy="310" r="4" fill="#FFFFFF" fillOpacity="0.4" />
              <text x="300" y="288" textAnchor="middle" fill="#FFFFFF" fontSize="24" fontWeight="900" fontFamily="sans-serif">
                C
              </text>
            </g>
          </g>

          {/* Floating Atmospheric Sparkles */}
          <g className="ambient-sparkles">
            <circle cx="100" cy="100" r="3" fill="#FFC078" className="sparkle s1" />
            <circle cx="520" cy="280" r="4" fill="#FFF" className="sparkle s2" />
            <circle cx="240" cy="480" r="3" fill="#38E1FF" className="sparkle s3" />
            <circle cx="380" cy="90" r="2.5" fill="#FF6B79" className="sparkle s4" />
            <circle cx="120" cy="260" r="2" fill="#E9D5FF" className="sparkle s5" />
          </g>
        </svg>

        {/* Floating Molecule Badges */}
        <div className="molecular-float-badge badge-h2o">
          <span className="badge-formula">H₂O</span>
          <span className="badge-label">Kovalen Polar</span>
        </div>

        <div className="molecular-float-badge badge-nacl">
          <span className="badge-formula">NaCl</span>
          <span className="badge-label">Ikatan Ion</span>
        </div>

        <div className="molecular-float-badge badge-co2">
          <span className="badge-formula">CO₂</span>
          <span className="badge-label">Kovalen Rangkap</span>
        </div>
      </div>

      {/* Editorial Headline Content */}
      <div className="molecular-editorial-content">
        <div className="editorial-pill">
          <span className="pill-dot" />
          <span>Interactive Chemistry Learning</span>
        </div>

        <h1 className="editorial-title">
          ChemBond<span className="editorial-dot">.</span>
        </h1>

        <h2 className="editorial-subheading">
          Petualangan Menjelajahi Ikatan Kimia
        </h2>

        <p className="editorial-tagline">
          &ldquo;Every bond tells a story.&rdquo;
        </p>

        <p className="editorial-description">
          Discover the magic behind every chemical bond. Pelajari konfigurasi elektron,
          interaksi atomik, dan pembentukan senyawa melalui visualisasi interaktif modern.
        </p>

        <div className="editorial-highlights">
          <div className="highlight-item">
            <span className="highlight-icon">🔬</span>
            <span className="highlight-text">3 Modul Pembelajaran</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-icon">⚡</span>
            <span className="highlight-text">Simulasi Real-time</span>
          </div>
          <div className="highlight-item">
            <span className="highlight-icon">📊</span>
            <span className="highlight-text">Evaluasi Terstruktur</span>
          </div>
        </div>
      </div>
    </div>
  );
};

