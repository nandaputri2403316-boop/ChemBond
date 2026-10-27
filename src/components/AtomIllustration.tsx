import React, { useState } from 'react';

interface ElementData {
  symbol: string;
  name: string;
  protons: number;
  neutrons: number;
  electrons: number;
  electronConfig: string;
  valence: number;
  fact: string;
  color: string;
}

const ELEMENTS: ElementData[] = [
  {
    symbol: 'H',
    name: 'Hidrogen',
    protons: 1,
    neutrons: 0,
    electrons: 1,
    electronConfig: 'Kulit K: 1',
    valence: 1,
    fact: 'Unsur paling sederhana di alam semesta. Mengikuti kaidah duplet (2 elektron) untuk mencapai kestabilan!',
    color: '#38BDF8',
  },
  {
    symbol: 'C',
    name: 'Karbon',
    protons: 6,
    neutrons: 6,
    electrons: 6,
    electronConfig: 'Kulit K: 2 | L: 4',
    valence: 4,
    fact: 'Pondasi semua molekul kehidupan! Memiliki 4 elektron valensi yang fleksibel membentuk ikatan kovalen rantai panjang.',
    color: '#8B68F5',
  },
  {
    symbol: 'O',
    name: 'Oksigen',
    protons: 8,
    neutrons: 8,
    electrons: 8,
    electronConfig: 'Kulit K: 2 | L: 6',
    valence: 6,
    fact: 'Sangat elektronegatif! Membutuhkan 2 elektron tambahan untuk memenuhi kaidah oktet stabil (8 elektron).',
    color: '#FF7597',
  },
  {
    symbol: 'Na',
    name: 'Natrium',
    protons: 11,
    neutrons: 12,
    electrons: 11,
    electronConfig: 'Kulit K: 2 | L: 8 | M: 1',
    valence: 1,
    fact: 'Logam alkali yang sangat reaktif. Cenderung melepas 1 elektron valensi terluarnya membentuk kation Na⁺.',
    color: '#FF8F65',
  },
];

export const AtomIllustration: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(1); // Default to Carbon
  const [isSpeedFast, setIsSpeedFast] = useState(false);
  const [hoveredPart, setHoveredPart] = useState<string | null>(null);

  const curElement = ELEMENTS[selectedIdx];
  const durBase = isSpeedFast ? 3 : 6;

  return (
    <div className="atom-card-showcase">
      {/* Element Selector Tabs */}
      <div className="atom-selector-tabs" role="tablist" aria-label="Pilih Unsur Kimia">
        <span className="selector-label">Contoh Unsur:</span>
        <div className="tabs-pill-group">
          {ELEMENTS.map((el, idx) => (
            <button
              key={el.symbol}
              type="button"
              role="tab"
              aria-selected={selectedIdx === idx}
              className={`element-tab-btn ${selectedIdx === idx ? 'active' : ''}`}
              onClick={() => setSelectedIdx(idx)}
            >
              <span className="el-sym">{el.symbol}</span>
              <span className="el-name">{el.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Atom Canvas */}
      <div className="atom-visual-wrapper">
        {/* Hover Info Badge */}
        <div className="atom-hover-badge" aria-live="polite">
          {hoveredPart ? (
            <span className="badge-highlight">{hoveredPart}</span>
          ) : (
            <span className="badge-default">Arahkan kursor ke atom untuk eksplorasi bagian</span>
          )}
        </div>

        {/* SVG Animated Atom Model */}
        <div className="atom-stage">
          <svg
            viewBox="0 0 380 340"
            className="atom-svg-canvas"
            aria-label={`Model visual atom ${curElement.name}`}
          >
            <defs>
              {/* Nucleus Glow */}
              <radialGradient id="nucleusGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#F72F91" stopOpacity="0.6" />
                <stop offset="60%" stopColor="#D91D78" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#D91D78" stopOpacity="0" />
              </radialGradient>

              {/* Orbit Paths for SVG animateMotion */}
              <path
                id="orbitPath1"
                d="M 45,170 a 145,48 0 1,0 290,0 a 145,48 0 1,0 -290,0"
                transform="rotate(35 190 170)"
              />
              <path
                id="orbitPath2"
                d="M 45,170 a 145,48 0 1,0 290,0 a 145,48 0 1,0 -290,0"
                transform="rotate(-35 190 170)"
              />
              <path
                id="orbitPath3"
                d="M 45,170 a 145,48 0 1,0 290,0 a 145,48 0 1,0 -290,0"
                transform="rotate(95 190 170)"
              />

              {/* Orbit Stroke Gradients */}
              <linearGradient id="orbitGradA" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F72F91" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#FF6B79" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#38E1FF" stopOpacity="0.95" />
              </linearGradient>

              <linearGradient id="orbitGradB" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#D91D78" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#FF9B52" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#FFD152" stopOpacity="0.95" />
              </linearGradient>

              <linearGradient id="orbitGradC" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#FF6B79" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#F72F91" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#38E1FF" stopOpacity="0.95" />
              </linearGradient>

              {/* Electron Glow Filter */}
              <filter id="electronGlow" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Background Halo */}
            <circle cx="190" cy="170" r="130" fill="url(#nucleusGlow)" />

            {/* Orbit 1 (+35deg) */}
            <g
              className="orbit-group"
              onMouseEnter={() => setHoveredPart('Lintasan Orbit Elektron 1 (Kulit Energi Dalam)')}
              onMouseLeave={() => setHoveredPart(null)}
            >
              <ellipse
                cx="190"
                cy="170"
                rx="145"
                ry="48"
                fill="none"
                stroke="url(#orbitGradA)"
                strokeWidth="2.5"
                strokeDasharray="4 2"
                transform="rotate(35 190 170)"
              />
              {/* Electron 1 on Orbit 1 */}
              <g filter="url(#electronGlow)">
                <circle cx="0" cy="0" r="7.5" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1.5" />
                <circle cx="0" cy="0" r="2.5" fill="#FFFFFF" />
                <animateMotion
                  dur={`${durBase}s`}
                  repeatCount="indefinite"
                  rotate="auto"
                >
                  <mpath href="#orbitPath1" />
                </animateMotion>
              </g>

              {/* Electron 2 on Orbit 1 (Opposite Phase) */}
              {curElement.electrons > 1 && (
                <g filter="url(#electronGlow)">
                  <circle cx="0" cy="0" r="7.5" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="1.5" />
                  <circle cx="0" cy="0" r="2.5" fill="#FFFFFF" />
                  <animateMotion
                    dur={`${durBase}s`}
                    repeatCount="indefinite"
                    begin={`-${durBase / 2}s`}
                    rotate="auto"
                  >
                    <mpath href="#orbitPath1" />
                  </animateMotion>
                </g>
              )}
            </g>

            {/* Orbit 2 (-35deg) */}
            {curElement.electrons > 1 && (
              <g
                className="orbit-group"
                onMouseEnter={() => setHoveredPart('Lintasan Orbit Elektron 2 (Kulit Energi Tengah)')}
                onMouseLeave={() => setHoveredPart(null)}
              >
                <ellipse
                  cx="190"
                  cy="170"
                  rx="145"
                  ry="48"
                  fill="none"
                  stroke="url(#orbitGradB)"
                  strokeWidth="2.5"
                  transform="rotate(-35 190 170)"
                />
                {/* Electron on Orbit 2 */}
                <g filter="url(#electronGlow)">
                  <circle cx="0" cy="0" r="7.5" fill="#FF7597" stroke="#FFFFFF" strokeWidth="1.5" />
                  <circle cx="0" cy="0" r="2.5" fill="#FFFFFF" />
                  <animateMotion
                    dur={`${durBase * 1.15}s`}
                    repeatCount="indefinite"
                    rotate="auto"
                  >
                    <mpath href="#orbitPath2" />
                  </animateMotion>
                </g>
                {curElement.electrons >= 6 && (
                  <g filter="url(#electronGlow)">
                    <circle cx="0" cy="0" r="7.5" fill="#FF7597" stroke="#FFFFFF" strokeWidth="1.5" />
                    <circle cx="0" cy="0" r="2.5" fill="#FFFFFF" />
                    <animateMotion
                      dur={`${durBase * 1.15}s`}
                      repeatCount="indefinite"
                      begin={`-${(durBase * 1.15) / 2}s`}
                      rotate="auto"
                    >
                      <mpath href="#orbitPath2" />
                    </animateMotion>
                  </g>
                )}
              </g>
            )}

            {/* Orbit 3 (+95deg Vertical) */}
            {curElement.electrons >= 6 && (
              <g
                className="orbit-group"
                onMouseEnter={() => setHoveredPart('Lintasan Orbit Elektron 3 (Kulit Valensi Terluar)')}
                onMouseLeave={() => setHoveredPart(null)}
              >
                <ellipse
                  cx="190"
                  cy="170"
                  rx="145"
                  ry="48"
                  fill="none"
                  stroke="url(#orbitGradC)"
                  strokeWidth="2.5"
                  strokeDasharray="6 3"
                  transform="rotate(95 190 170)"
                />
                {/* Electron on Orbit 3 */}
                <g filter="url(#electronGlow)">
                  <circle cx="0" cy="0" r="7.5" fill="#FDE047" stroke="#FFFFFF" strokeWidth="1.5" />
                  <circle cx="0" cy="0" r="2.5" fill="#FFFFFF" />
                  <animateMotion
                    dur={`${durBase * 0.9}s`}
                    repeatCount="indefinite"
                    rotate="auto"
                  >
                    <mpath href="#orbitPath3" />
                  </animateMotion>
                </g>
                {curElement.electrons >= 8 && (
                  <g filter="url(#electronGlow)">
                    <circle cx="0" cy="0" r="7.5" fill="#FDE047" stroke="#FFFFFF" strokeWidth="1.5" />
                    <circle cx="0" cy="0" r="2.5" fill="#FFFFFF" />
                    <animateMotion
                      dur={`${durBase * 0.9}s`}
                      repeatCount="indefinite"
                      begin={`-${(durBase * 0.9) / 2}s`}
                      rotate="auto"
                    >
                      <mpath href="#orbitPath3" />
                    </animateMotion>
                  </g>
                )}
              </g>
            )}

            {/* Central Nucleus Core */}
            <g
              className="nucleus-group"
              transform="translate(190, 170)"
              onMouseEnter={() =>
                setHoveredPart(`Inti Atom: ${curElement.protons} Proton (p⁺) & ${curElement.neutrons} Neutron (n⁰)`)
              }
              onMouseLeave={() => setHoveredPart(null)}
            >
              {/* Outer soft glow bubble */}
              <circle cx="0" cy="0" r="38" fill="rgba(255, 179, 198, 0.3)" className="pulse-glow" />
              <circle cx="0" cy="0" r="28" fill="rgba(139, 104, 245, 0.25)" />

              {/* Clustered Protons and Neutrons with 3D sphere look */}
              <circle cx="-7" cy="-7" r="9.5" fill="#FF7597" stroke="#FFFFFF" strokeWidth="1.5" />
              <text x="-7" y="-3.5" textAnchor="middle" fill="#FFFFFF" fontSize="9" fontWeight="bold">+</text>

              <circle cx="8" cy="-7" r="9" fill="#FF7597" stroke="#FFFFFF" strokeWidth="1.5" />
              <text x="8" y="-4" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">+</text>

              <circle cx="-8" cy="8" r="9" fill="#8B68F5" stroke="#FFFFFF" strokeWidth="1.5" />
              <text x="-8" y="11" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">n</text>

              <circle cx="8" cy="8" r="9" fill="#8B68F5" stroke="#FFFFFF" strokeWidth="1.5" />
              <text x="8" y="11" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">n</text>

              <circle cx="0" cy="-14" r="8" fill="#FF8F65" stroke="#FFFFFF" strokeWidth="1.5" />
              <text x="0" y="-11" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">+</text>

              {/* Core Symbol Overlay */}
              <rect x="-15" y="-9" width="30" height="18" rx="9" fill="rgba(37, 40, 59, 0.85)" />
              <text x="0" y="4" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="800">
                {curElement.symbol}
              </text>
            </g>
          </svg>
        </div>

        {/* Atom Speed Controller Pill */}
        <div className="atom-controls-bar">
          <div className="speed-toggle">
            <span className="control-label">Kecepatan Orbit:</span>
            <button
              type="button"
              className={`btn-toggle-pill ${!isSpeedFast ? 'active' : ''}`}
              onClick={() => setIsSpeedFast(false)}
            >
              Normal
            </button>
            <button
              type="button"
              className={`btn-toggle-pill ${isSpeedFast ? 'active' : ''}`}
              onClick={() => setIsSpeedFast(true)}
            >
              Cepat ⚡
            </button>
          </div>
          <div className="legend-pills">
            <span className="legend-item"><span className="legend-dot pink" /> Proton (p⁺)</span>
            <span className="legend-item"><span className="legend-dot purple" /> Neutron (n⁰)</span>
            <span className="legend-item"><span className="legend-dot blue" /> Elektron (e⁻)</span>
          </div>
        </div>
      </div>

      {/* Info Card Subatomic Counters */}
      <div className="subatomic-stats-grid">
        <div className="stat-pill pink-pill">
          <div className="stat-number">{curElement.protons}</div>
          <div className="stat-desc">
            <span className="stat-name">Proton (p⁺)</span>
            <span className="stat-sub">Nomor Atom Z</span>
          </div>
        </div>

        <div className="stat-pill purple-pill">
          <div className="stat-number">{curElement.neutrons}</div>
          <div className="stat-desc">
            <span className="stat-name">Neutron (n⁰)</span>
            <span className="stat-sub">Massa Inti</span>
          </div>
        </div>

        <div className="stat-pill blue-pill">
          <div className="stat-number">{curElement.electrons}</div>
          <div className="stat-desc">
            <span className="stat-name">Elektron (e⁻)</span>
            <span className="stat-sub">{curElement.electronConfig}</span>
          </div>
        </div>

        <div className="stat-pill yellow-pill">
          <div className="stat-number">{curElement.valence}</div>
          <div className="stat-desc">
            <span className="stat-name">Elektron Valensi</span>
            <span className="stat-sub">Kunci Ikatan Kimia</span>
          </div>
        </div>
      </div>

      {/* Fun educational high school fact box */}
      <div className="atom-fact-box">
        <div className="fact-icon">💡</div>
        <div className="fact-content">
          <strong className="fact-title">Fakta Kimia SMA ({curElement.name} - {curElement.symbol}):</strong>
          <p className="fact-text">{curElement.fact}</p>
        </div>
      </div>
    </div>
  );
};
