import React from 'react';

/**
 * MoleculeDecorations
 * Enriched background decorations:
 * - Multi-colored ball-and-stick molecules (H2O, CO2, NH3, CH4, NaCl)
 * - Atom icons with orbiting electrons
 * - Floating chemical formula badges (H₂O, CO₂, NH₃, CH₄, NaCl)
 * - Benzene ring structure
 * - Periodic table element tiles (Na, Cl, C, O, H)
 * - Laboratory equipment (Erlenmeyer flask, test tubes, beaker)
 * - Twinkling sparkles, rising bubbles, and glowing particles
 */
export const MoleculeDecorations: React.FC = () => {
  return (
    <div className="molecule-bg-container" aria-hidden="true">
      {/* ====================================================================
          1. BALL-AND-STICK MOLECULES
          ==================================================================== */}
      {/* Water Molecule H2O - Top Left */}
      <div className="floating-molecule mol-water" style={{ top: '8%', left: '2%' }}>
        <svg width="100" height="74" viewBox="0 0 100 74" fill="none">
          <line x1="50" y1="28" x2="22" y2="54" stroke="#FFEAD4" strokeWidth="5" strokeLinecap="round" />
          <line x1="50" y1="28" x2="78" y2="54" stroke="#FFEAD4" strokeWidth="5" strokeLinecap="round" />
          {/* Oxygen Sphere - Hot Coral */}
          <circle cx="50" cy="28" r="20" fill="url(#bgCoralGrad)" filter="drop-shadow(0 4px 10px rgba(0,0,0,0.2))" />
          <text x="50" y="34" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">O</text>
          {/* Hydrogen 1 - Cyan */}
          <circle cx="20" cy="54" r="13" fill="url(#bgCyanGrad)" />
          <text x="20" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">H</text>
          {/* Hydrogen 2 - Cyan */}
          <circle cx="80" cy="54" r="13" fill="url(#bgCyanGrad)" />
          <text x="80" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="bold">H</text>
        </svg>
      </div>

      {/* Carbon Dioxide O=C=O - Linear Molecule - Mid Right */}
      <div className="floating-molecule mol-co2" style={{ top: '38%', right: '2%' }}>
        <svg width="120" height="48" viewBox="0 0 120 48" fill="none">
          <line x1="32" y1="20" x2="60" y2="20" stroke="#FFEAD4" strokeWidth="3.5" />
          <line x1="32" y1="28" x2="60" y2="28" stroke="#FFEAD4" strokeWidth="3.5" />
          <line x1="60" y1="20" x2="88" y2="20" stroke="#FFEAD4" strokeWidth="3.5" />
          <line x1="60" y1="28" x2="88" y2="28" stroke="#FFEAD4" strokeWidth="3.5" />
          {/* Central Carbon */}
          <circle cx="60" cy="24" r="17" fill="url(#bgMagentaGrad)" />
          <text x="60" y="29" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">C</text>
          {/* Oxygens */}
          <circle cx="24" cy="24" r="15" fill="url(#bgCoralGrad)" />
          <text x="24" y="29" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">O</text>
          <circle cx="96" cy="24" r="15" fill="url(#bgCoralGrad)" />
          <text x="96" y="29" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">O</text>
        </svg>
      </div>

      {/* Ammonia NH3 Molecule - Bottom Left */}
      <div className="floating-molecule mol-nh3" style={{ bottom: '26%', left: '3%' }}>
        <svg width="90" height="84" viewBox="0 0 90 84" fill="none">
          <line x1="45" y1="35" x2="22" y2="65" stroke="#FFEAD4" strokeWidth="4" strokeLinecap="round" />
          <line x1="45" y1="35" x2="45" y2="72" stroke="#FFEAD4" strokeWidth="4" strokeLinecap="round" />
          <line x1="45" y1="35" x2="68" y2="65" stroke="#FFEAD4" strokeWidth="4" strokeLinecap="round" />
          {/* Nitrogen Sphere */}
          <circle cx="45" cy="35" r="18" fill="url(#bgPinkGrad)" />
          <text x="45" y="40" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">N</text>
          {/* Hydrogens */}
          <circle cx="20" cy="65" r="11" fill="url(#bgYellowGrad)" />
          <text x="20" y="69" textAnchor="middle" fill="#2A0E1F" fontSize="9" fontWeight="bold">H</text>
          <circle cx="45" cy="72" r="11" fill="url(#bgYellowGrad)" />
          <text x="45" y="76" textAnchor="middle" fill="#2A0E1F" fontSize="9" fontWeight="bold">H</text>
          <circle cx="70" cy="65" r="11" fill="url(#bgYellowGrad)" />
          <text x="70" y="69" textAnchor="middle" fill="#2A0E1F" fontSize="9" fontWeight="bold">H</text>
        </svg>
      </div>

      {/* Methane CH4 Molecule - Top Right */}
      <div className="floating-molecule mol-methane" style={{ top: '15%', right: '3%' }}>
        <svg width="86" height="86" viewBox="0 0 86 86" fill="none">
          <line x1="43" y1="43" x2="43" y2="15" stroke="#FFEAD4" strokeWidth="3.5" />
          <line x1="43" y1="43" x2="71" y2="43" stroke="#FFEAD4" strokeWidth="3.5" />
          <line x1="43" y1="43" x2="43" y2="71" stroke="#FFEAD4" strokeWidth="3.5" />
          <line x1="43" y1="43" x2="15" y2="43" stroke="#FFEAD4" strokeWidth="3.5" />
          <circle cx="43" cy="43" r="17" fill="url(#bgMagentaGrad)" />
          <text x="43" y="48" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">C</text>
          <circle cx="43" cy="13" r="10" fill="url(#bgCyanGrad)" />
          <circle cx="73" cy="43" r="10" fill="url(#bgCyanGrad)" />
          <circle cx="43" cy="73" r="10" fill="url(#bgCyanGrad)" />
          <circle cx="13" cy="43" r="10" fill="url(#bgCyanGrad)" />
        </svg>
      </div>

      {/* Sodium Chloride Ionic Pair Na+ Cl- - Bottom Right */}
      <div className="floating-molecule mol-nacl-bg" style={{ bottom: '10%', right: '4%' }}>
        <svg width="104" height="60" viewBox="0 0 104 60" fill="none">
          <path d="M42 30 C52 24, 58 36, 68 30" stroke="#FFD152" strokeWidth="2.5" strokeDasharray="3 3" />
          <circle cx="28" cy="30" r="15" fill="url(#bgCyanGrad)" />
          <text x="28" y="35" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold">Na⁺</text>
          <circle cx="78" cy="30" r="20" fill="url(#bgLimeGrad)" />
          <text x="78" y="36" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold">Cl⁻</text>
        </svg>
      </div>

      {/* ====================================================================
          2. FLOATING CHEMICAL FORMULAS
          ==================================================================== */}
      <div className="floating-formula formula-h2o" style={{ top: '22%', left: '14%' }}>
        <span>H₂O</span>
      </div>
      <div className="floating-formula formula-co2" style={{ top: '65%', left: '6%' }}>
        <span>CO₂</span>
      </div>
      <div className="floating-formula formula-nh3" style={{ top: '30%', right: '14%' }}>
        <span>NH₃</span>
      </div>
      <div className="floating-formula formula-ch4" style={{ top: '78%', right: '12%' }}>
        <span>CH₄</span>
      </div>
      <div className="floating-formula formula-nacl" style={{ bottom: '38%', right: '5%' }}>
        <span>NaCl</span>
      </div>

      {/* ====================================================================
          3. BENZENE RING STRUCTURE
          ==================================================================== */}
      <div className="floating-molecule mol-benzene" style={{ top: '50%', left: '2%' }}>
        <svg width="80" height="90" viewBox="0 0 80 90" fill="none">
          <polygon
            points="40,8 72,26 72,64 40,82 8,64 8,26"
            stroke="#FFEAD4"
            strokeWidth="3.5"
            fill="rgba(247, 47, 145, 0.25)"
            strokeLinejoin="round"
          />
          {/* Alternating Resonance Circle */}
          <circle cx="40" cy="45" r="20" stroke="#FFD152" strokeWidth="2.5" strokeDasharray="6 4" fill="none" />
        </svg>
      </div>

      {/* ====================================================================
          4. PERIODIC TABLE TILES
          ==================================================================== */}
      {/* Sodium (Na) Tile */}
      <div className="element-tile tile-na" style={{ top: '32%', left: '7%' }}>
        <span className="tile-num">11</span>
        <span className="tile-sym">Na</span>
        <span className="tile-name">22.99</span>
      </div>

      {/* Chlorine (Cl) Tile */}
      <div className="element-tile tile-cl" style={{ top: '48%', right: '7%' }}>
        <span className="tile-num">17</span>
        <span className="tile-sym">Cl</span>
        <span className="tile-name">35.45</span>
      </div>

      {/* Carbon (C) Tile */}
      <div className="element-tile tile-c" style={{ bottom: '18%', left: '12%' }}>
        <span className="tile-num">6</span>
        <span className="tile-sym">C</span>
        <span className="tile-name">12.01</span>
      </div>

      {/* Oxygen (O) Tile */}
      <div className="element-tile tile-o" style={{ top: '8%', right: '22%' }}>
        <span className="tile-num">8</span>
        <span className="tile-sym">O</span>
        <span className="tile-name">16.00</span>
      </div>

      {/* ====================================================================
          5. LABORATORY EQUIPMENT
          ==================================================================== */}
      {/* Erlenmeyer Flask - Bottom Left */}
      <div className="lab-equipment flask-item" style={{ bottom: '5%', left: '2%' }}>
        <svg width="68" height="80" viewBox="0 0 68 80" fill="none">
          <path
            d="M28 10 L40 10 L40 24 L58 64 C60 68 57 72 52 72 L16 72 C11 72 8 68 10 64 L28 24 Z"
            stroke="#FFEAD4"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M18 48 Q34 44 50 48 L56 64 C57 66 55 69 52 69 L16 69 C13 69 11 66 12 64 Z"
            fill="url(#bgPinkGrad)"
            opacity="0.85"
          />
          <rect x="26" y="8" width="16" height="4" rx="2" fill="#FFEAD4" />
          <circle cx="28" cy="56" r="3" fill="#FFFFFF" opacity="0.8" />
          <circle cx="42" cy="52" r="3.5" fill="#FFFFFF" opacity="0.8" />
          <circle cx="34" cy="38" r="2.5" fill="#FFD152" />
        </svg>
      </div>

      {/* Laboratory Beaker (Gelas Kimia) - Mid Left */}
      <div className="lab-equipment beaker-item" style={{ top: '60%', right: '3%' }}>
        <svg width="60" height="70" viewBox="0 0 60 70" fill="none">
          <path d="M10 12 L10 60 C10 65 14 68 20 68 L42 68 C48 68 52 65 52 60 L52 12" stroke="#FFEAD4" strokeWidth="3" fill="none" />
          <path d="M6 12 L12 12" stroke="#FFEAD4" strokeWidth="3" strokeLinecap="round" />
          <path d="M12 36 L12 58 C12 62 15 65 20 65 L42 65 C47 65 50 62 50 58 L50 36 Z" fill="url(#bgOrangeGrad)" opacity="0.8" />
          <line x1="16" y1="42" x2="24" y2="42" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="16" y1="50" x2="28" y2="50" stroke="#FFFFFF" strokeWidth="2" />
        </svg>
      </div>

      {/* Test Tube (Tabung Reaksi) - Top Right */}
      <div className="lab-equipment testtube-item" style={{ top: '5%', right: '12%' }}>
        <svg width="34" height="76" viewBox="0 0 34 76" fill="none" transform="rotate(18 17 38)">
          <path d="M10 6 L10 60 C10 66 14 70 17 70 C20 70 24 66 24 60 L24 6" stroke="#FFEAD4" strokeWidth="3" fill="none" />
          <rect x="8" y="4" width="18" height="4" rx="2" fill="#FFEAD4" />
          <path d="M12 32 L12 60 C12 64 14 67 17 67 C20 67 22 64 22 60 L22 32 Z" fill="url(#bgCyanGrad)" opacity="0.85" />
          <circle cx="17" cy="42" r="2.5" fill="#FFFFFF" />
          <circle cx="17" cy="52" r="2.5" fill="#FFFFFF" />
        </svg>
      </div>

      {/* ====================================================================
          6. ATOM ICONS WITH SPHERES & ORBITS
          ==================================================================== */}
      <div className="floating-atom-icon atom-icon-1" style={{ top: '44%', left: '16%' }}>
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <ellipse cx="30" cy="30" rx="24" ry="8" stroke="#FFEAD4" strokeWidth="2" strokeDasharray="3 2" transform="rotate(30 30 30)" />
          <ellipse cx="30" cy="30" rx="24" ry="8" stroke="#FFD152" strokeWidth="2" transform="rotate(-30 30 30)" />
          <circle cx="30" cy="30" r="7" fill="url(#bgCoralGrad)" />
          <circle cx="48" cy="20" r="3.5" fill="#38E1FF" />
          <circle cx="12" cy="40" r="3.5" fill="#78FF43" />
        </svg>
      </div>

      <div className="floating-atom-icon atom-icon-2" style={{ bottom: '22%', right: '18%' }}>
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
          <ellipse cx="32" cy="32" rx="26" ry="9" stroke="#FFEAD4" strokeWidth="2" transform="rotate(45 32 32)" />
          <ellipse cx="32" cy="32" rx="26" ry="9" stroke="#FF6B79" strokeWidth="2" transform="rotate(-45 32 32)" />
          <circle cx="32" cy="32" r="8" fill="url(#bgPinkGrad)" />
          <circle cx="16" cy="16" r="3.5" fill="#FFD152" />
          <circle cx="48" cy="48" r="3.5" fill="#38E1FF" />
        </svg>
      </div>

      {/* ====================================================================
          7. SPARKLING LIGHTS, BUBBLES & PARTICLES
          ==================================================================== */}
      <div className="sparkle-particle sp-1" style={{ top: '14%', left: '28%' }}>✨</div>
      <div className="sparkle-particle sp-2" style={{ top: '35%', right: '28%' }}>✨</div>
      <div className="sparkle-particle sp-3" style={{ top: '68%', left: '24%' }}>✨</div>
      <div className="sparkle-particle sp-4" style={{ top: '82%', right: '32%' }}>✨</div>
      <div className="sparkle-particle sp-5" style={{ top: '2%', left: '46%' }}>✨</div>

      {/* Glowing Bubbles */}
      <div className="bubble-orb orb-1" style={{ top: '20%', left: '8%' }} />
      <div className="bubble-orb orb-2" style={{ top: '45%', right: '10%' }} />
      <div className="bubble-orb orb-3" style={{ bottom: '15%', left: '20%' }} />
      <div className="bubble-orb orb-4" style={{ bottom: '30%', right: '24%' }} />

      {/* SVG Shared Color Gradients */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="bgCoralGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFA68D" />
            <stop offset="100%" stopColor="#FF6B79" />
          </linearGradient>
          <linearGradient id="bgPinkGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF6BB5" />
            <stop offset="100%" stopColor="#F72F91" />
          </linearGradient>
          <linearGradient id="bgMagentaGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F72F91" />
            <stop offset="100%" stopColor="#D91D78" />
          </linearGradient>
          <linearGradient id="bgCyanGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#9EFAFF" />
            <stop offset="100%" stopColor="#00A8E8" />
          </linearGradient>
          <linearGradient id="bgYellowGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFF280" />
            <stop offset="100%" stopColor="#FFD152" />
          </linearGradient>
          <linearGradient id="bgLimeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#BAFF7A" />
            <stop offset="100%" stopColor="#1EAA24" />
          </linearGradient>
          <linearGradient id="bgOrangeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFC078" />
            <stop offset="100%" stopColor="#FF9B52" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
