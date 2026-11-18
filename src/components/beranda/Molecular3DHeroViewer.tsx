import React, { useState } from 'react';

type MoleculeKey = 'H2O' | 'CH4' | 'NH3' | 'CO2';

interface MoleculeInfo {
  key: MoleculeKey;
  formula: string;
  name: string;
  geometry: string;
  angle: string;
  bondType: string;
  description: string;
}

const MOLECULES_DATA: Record<MoleculeKey, MoleculeInfo> = {
  H2O: {
    key: 'H2O',
    formula: 'H₂O',
    name: 'Air',
    geometry: 'Bengkok (Bent / V-Shaped)',
    angle: '104,5°',
    bondType: '2 Ikatan Kovalen Tunggal',
    description: 'Atom O (merah) sebagai pusat mengikat dua atom H (putih) dengan sudut 104,5° akibat dorongan 2 pasangan elektron bebas (PEB).',
  },
  CH4: {
    key: 'CH4',
    formula: 'CH₄',
    name: 'Metana',
    geometry: 'Tetrahedral 3D',
    angle: '109,5°',
    bondType: '4 Ikatan Kovalen Tunggal',
    description: 'Atom C (abu-abu gelap) di pusat berikatan tetrahedral dengan 4 atom H (putih) yang menyebar simetris di ruang 3D.',
  },
  NH3: {
    key: 'NH3',
    formula: 'NH₃',
    name: 'Amonia',
    geometry: 'Trigonal Piramida',
    angle: '107,0°',
    bondType: '3 Ikatan Kovalen Tunggal',
    description: 'Atom N (biru) di puncak piramida mengikat 3 atom H (putih) pada alas dengan sudut 107° akibat tolakan 1 PEB di atas N.',
  },
  CO2: {
    key: 'CO2',
    formula: 'CO₂',
    name: 'Karbon Dioksida',
    geometry: 'Linear 180°',
    angle: '180,0°',
    bondType: '2 Ikatan Kovalen Rangkap Dua (O=C=O)',
    description: 'Atom C (abu-abu gelap) di pusat diapit oleh 2 atom O (merah) secara lurus dan simetris dengan dua ikatan rangkap dua.',
  },
};

export const Molecular3DHeroViewer: React.FC = () => {
  const [selectedMolecule, setSelectedMolecule] = useState<MoleculeKey>('H2O');
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const current = MOLECULES_DATA[selectedMolecule];

  return (
    <div
      className="hero-3d-viewer-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Molecule Selector Switcher */}
      <div className="viewer-tabs-bar" role="tablist" aria-label="Pilih Model Molekul 3D">
        {(Object.keys(MOLECULES_DATA) as MoleculeKey[]).map((mKey) => (
          <button
            key={mKey}
            type="button"
            role="tab"
            aria-selected={selectedMolecule === mKey}
            className={`viewer-tab-btn ${selectedMolecule === mKey ? 'active' : ''}`}
            onClick={() => setSelectedMolecule(mKey)}
          >
            <span className="tab-formula">{MOLECULES_DATA[mKey].formula}</span>
            <span className="tab-name-sub">{MOLECULES_DATA[mKey].name}</span>
          </button>
        ))}
      </div>

      {/* 3D Ball-and-Stick Canvas */}
      <div className="viewer-canvas-stage">
        <svg
          viewBox="0 0 460 340"
          className={`viewer-svg-graphic ${isHovered ? 'viewer-hovered' : ''}`}
          aria-label={`Model 3D Molekul ${current.name} (${current.formula})`}
        >
          <defs>
            {/* CPK Color Standards Gradients */}
            {/* Hydrogen (H) - White / Very Pale Gray with 3D Depth */}
            <radialGradient id="cpkHydrogen" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="45%" stopColor="#F8FAFC" />
              <stop offset="75%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#CBD5E1" />
            </radialGradient>

            {/* Oxygen (O) - Radiant Vivid Red */}
            <radialGradient id="cpkOxygen" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FFA6A6" />
              <stop offset="25%" stopColor="#EF4444" />
              <stop offset="70%" stopColor="#DC2626" />
              <stop offset="100%" stopColor="#991B1B" />
            </radialGradient>

            {/* Nitrogen (N) - Radiant Vibrant Blue */}
            <radialGradient id="cpkNitrogen" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#93C5FD" />
              <stop offset="25%" stopColor="#3B82F6" />
              <stop offset="70%" stopColor="#1D4ED8" />
              <stop offset="100%" stopColor="#1E3A8A" />
            </radialGradient>

            {/* Carbon (C) - Dark Slate Charcoal / Black */}
            <radialGradient id="cpkCarbon" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#64748B" />
              <stop offset="25%" stopColor="#334155" />
              <stop offset="70%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0F172A" />
            </radialGradient>

            {/* Metallic Neutral Cylindrical Bond Gradients */}
            <linearGradient id="bondMetallic" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="35%" stopColor="#64748B" />
              <stop offset="70%" stopColor="#94A3B8" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>

            <linearGradient id="bondMetallicDbl" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="30%" stopColor="#64748B" />
              <stop offset="70%" stopColor="#94A3B8" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>

            {/* Soft Glow */}
            <filter id="molGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Ambient Orbital Rings (Bentuk Orbital Abu-abu Elegan di Belakang Atom) */}
          <g className="ambient-orbit">
            <ellipse
              cx="230"
              cy="165"
              rx="190"
              ry="70"
              stroke="#94A3B8"
              strokeWidth="1.8"
              strokeDasharray="6 8"
              transform="rotate(-15 230 165)"
              opacity="0.5"
            />
            <ellipse
              cx="230"
              cy="165"
              rx="180"
              ry="60"
              stroke="#CBD5E1"
              strokeWidth="1.8"
              transform="rotate(25 230 165)"
              opacity="0.55"
            />
          </g>

          {/* =================================================================
              1. H2O — AIR: Bent Geometry (104.5°)
              ================================================================= */}
          {selectedMolecule === 'H2O' && (
            <g className="mol-render-group anim-subtle-sway">
              {/* Single Covalent Metallic Bonds */}
              {/* O -> Left H */}
              <line x1="230" y1="125" x2="135" y2="235" stroke="url(#bondMetallic)" strokeWidth="11" strokeLinecap="round" />

              {/* O -> Right H */}
              <line x1="230" y1="125" x2="325" y2="235" stroke="url(#bondMetallic)" strokeWidth="11" strokeLinecap="round" />

              {/* Angle Arc Indicator (104.5°) */}
              <path d="M 185,175 A 65 65 0 0 1 275,175" fill="none" stroke="#F72F91" strokeWidth="2" strokeDasharray="3 3" />
              <rect x="206" y="185" width="48" height="20" rx="6" fill="#FFF0F7" stroke="#F1E3EB" />
              <text x="230" y="199" textAnchor="middle" fill="#D91D78" fontSize="11" fontWeight="800">104,5°</text>

              {/* Left Hydrogen Atom (White CPK) */}
              <g className="atom-node atom-h-left">
                <circle cx="135" cy="235" r="32" fill="url(#cpkHydrogen)" filter="url(#molGlow)" />
                <ellipse cx="125" cy="225" rx="10" ry="6" fill="#FFFFFF" fillOpacity="0.85" transform="rotate(-30 125 225)" />
                <text x="135" y="241" textAnchor="middle" fill="#1E293B" fontSize="17" fontWeight="900">H</text>
              </g>

              {/* Right Hydrogen Atom (White CPK) */}
              <g className="atom-node atom-h-right">
                <circle cx="325" cy="235" r="32" fill="url(#cpkHydrogen)" filter="url(#molGlow)" />
                <ellipse cx="315" cy="225" rx="10" ry="6" fill="#FFFFFF" fillOpacity="0.85" transform="rotate(-30 315 225)" />
                <text x="325" y="241" textAnchor="middle" fill="#1E293B" fontSize="17" fontWeight="900">H</text>
              </g>

              {/* Central Oxygen Atom (Vivid Red - CPK) */}
              <g className="atom-node atom-center-o">
                <circle cx="230" cy="125" r="54" fill="url(#cpkOxygen)" filter="url(#molGlow)" />
                <ellipse cx="212" cy="105" rx="18" ry="10" fill="#FFFFFF" fillOpacity="0.8" transform="rotate(-30 212 105)" />
                <circle cx="204" cy="98" r="4" fill="#FFFFFF" fillOpacity="0.95" />
                <text x="230" y="133" textAnchor="middle" fill="#FFFFFF" fontSize="24" fontWeight="900">O</text>
              </g>

              {/* 2 Lone Pairs (PEB) subtle visual lobes */}
              <g opacity="0.6">
                <ellipse cx="205" cy="65" rx="9" ry="14" fill="#FFC078" transform="rotate(-35 205 65)" />
                <ellipse cx="255" cy="65" rx="9" ry="14" fill="#FFC078" transform="rotate(35 255 65)" />
              </g>
            </g>
          )}

          {/* =================================================================
              2. CH4 — METANA: 3D Tetrahedral Geometry (109.5°)
              ================================================================= */}
          {selectedMolecule === 'CH4' && (
            <g className="mol-render-group anim-subtle-sway">
              {/* Back Hydrogen Bond (Projected backwards into screen - with perspective) */}
              <line x1="230" y1="165" x2="310" y2="120" stroke="#475569" strokeWidth="8" strokeDasharray="4 4" opacity="0.75" />
              {/* Back H Atom */}
              <circle cx="310" cy="120" r="22" fill="url(#cpkHydrogen)" opacity="0.9" />
              <text x="310" y="126" textAnchor="middle" fill="#1E293B" fontSize="13" fontWeight="900">H</text>

              {/* Top Hydrogen Bond */}
              <line x1="230" y1="165" x2="230" y2="55" stroke="url(#bondMetallic)" strokeWidth="11" strokeLinecap="round" />
              {/* Top H Atom */}
              <circle cx="230" cy="55" r="28" fill="url(#cpkHydrogen)" filter="url(#molGlow)" />
              <ellipse cx="222" cy="46" rx="8" ry="5" fill="#FFFFFF" fillOpacity="0.85" transform="rotate(-25 222 46)" />
              <text x="230" y="60" textAnchor="middle" fill="#1E293B" fontSize="15" fontWeight="900">H</text>

              {/* Left Front Hydrogen Bond (Projected forward) */}
              <line x1="230" y1="165" x2="120" y2="245" stroke="url(#bondMetallic)" strokeWidth="12" strokeLinecap="round" />
              {/* Left Front H Atom */}
              <circle cx="120" cy="245" r="32" fill="url(#cpkHydrogen)" filter="url(#molGlow)" />
              <ellipse cx="110" cy="235" rx="10" ry="6" fill="#FFFFFF" fillOpacity="0.85" transform="rotate(-25 110 235)" />
              <text x="120" y="251" textAnchor="middle" fill="#1E293B" fontSize="17" fontWeight="900">H</text>

              {/* Right Front Hydrogen Bond (Projected forward) */}
              <line x1="230" y1="165" x2="330" y2="255" stroke="url(#bondMetallic)" strokeWidth="12" strokeLinecap="round" />
              {/* Right Front H Atom */}
              <circle cx="330" cy="255" r="32" fill="url(#cpkHydrogen)" filter="url(#molGlow)" />
              <ellipse cx="320" cy="245" rx="10" ry="6" fill="#FFFFFF" fillOpacity="0.85" transform="rotate(-25 320 245)" />
              <text x="330" y="261" textAnchor="middle" fill="#1E293B" fontSize="17" fontWeight="900">H</text>

              {/* Angle Arc Indicator (109.5°) */}
              <path d="M 230,115 A 50 50 0 0 0 175,190" fill="none" stroke="#F72F91" strokeWidth="2" strokeDasharray="3 3" />
              <rect x="156" y="130" width="48" height="20" rx="6" fill="#FFF0F7" stroke="#F1E3EB" />
              <text x="180" y="144" textAnchor="middle" fill="#D91D78" fontSize="11" fontWeight="800">109,5°</text>

              {/* Central Carbon Atom (Dark Slate Charcoal / Black - CPK) */}
              <circle cx="230" cy="165" r="50" fill="url(#cpkCarbon)" filter="url(#molGlow)" />
              <ellipse cx="214" cy="148" rx="17" ry="9" fill="#FFFFFF" fillOpacity="0.6" transform="rotate(-30 214 148)" />
              <circle cx="206" cy="140" r="4" fill="#FFFFFF" fillOpacity="0.8" />
              <text x="230" y="173" textAnchor="middle" fill="#FFFFFF" fontSize="24" fontWeight="900">C</text>
            </g>
          )}

          {/* =================================================================
              3. NH3 — AMONIA: Trigonal Pyramidal (107°)
              ================================================================= */}
          {selectedMolecule === 'NH3' && (
            <g className="mol-render-group anim-subtle-sway">
              {/* Back Lone Pair Lobe above Apex */}
              <ellipse cx="230" cy="60" rx="12" ry="18" fill="#FFC078" opacity="0.65" />
              <circle cx="225" cy="58" r="3" fill="#FFF" />
              <circle cx="235" cy="58" r="3" fill="#FFF" />

              {/* 3 Single Covalent Metallic Bonds down to the 3-Legged Base */}
              {/* N -> Left H */}
              <line x1="230" y1="125" x2="125" y2="235" stroke="url(#bondMetallic)" strokeWidth="11" strokeLinecap="round" />

              {/* N -> Back-Right H */}
              <line x1="230" y1="125" x2="315" y2="195" stroke="url(#bondMetallic)" strokeWidth="9" strokeLinecap="round" />

              {/* N -> Front H */}
              <line x1="230" y1="125" x2="245" y2="265" stroke="url(#bondMetallic)" strokeWidth="12" strokeLinecap="round" />

              {/* Angle Arc Indicator (107°) */}
              <path d="M 180,175 A 60 60 0 0 1 240,200" fill="none" stroke="#F72F91" strokeWidth="2" strokeDasharray="3 3" />
              <rect x="195" y="195" width="44" height="20" rx="6" fill="#FFF0F7" stroke="#F1E3EB" />
              <text x="217" y="209" textAnchor="middle" fill="#D91D78" fontSize="11" fontWeight="800">107°</text>

              {/* Back-Right H */}
              <g className="atom-node">
                <circle cx="315" cy="195" r="26" fill="url(#cpkHydrogen)" filter="url(#molGlow)" />
                <ellipse cx="308" cy="188" rx="8" ry="5" fill="#FFFFFF" fillOpacity="0.85" transform="rotate(-25 308 188)" />
                <text x="315" y="200" textAnchor="middle" fill="#1E293B" fontSize="14" fontWeight="900">H</text>
              </g>

              {/* Left H */}
              <g className="atom-node">
                <circle cx="125" cy="235" r="30" fill="url(#cpkHydrogen)" filter="url(#molGlow)" />
                <ellipse cx="116" cy="225" rx="9" ry="6" fill="#FFFFFF" fillOpacity="0.85" transform="rotate(-25 116 225)" />
                <text x="125" y="241" textAnchor="middle" fill="#1E293B" fontSize="16" fontWeight="900">H</text>
              </g>

              {/* Front H (Slightly larger for 3D depth) */}
              <g className="atom-node">
                <circle cx="245" cy="265" r="33" fill="url(#cpkHydrogen)" filter="url(#molGlow)" />
                <ellipse cx="235" cy="254" rx="10" ry="6" fill="#FFFFFF" fillOpacity="0.85" transform="rotate(-25 235 254)" />
                <text x="245" y="271" textAnchor="middle" fill="#1E293B" fontSize="17" fontWeight="900">H</text>
              </g>

              {/* Nitrogen Atom at Apex (Vibrant Blue - CPK) */}
              <g className="atom-node atom-center-n">
                <circle cx="230" cy="125" r="50" fill="url(#cpkNitrogen)" filter="url(#molGlow)" />
                <ellipse cx="214" cy="108" rx="17" ry="10" fill="#FFFFFF" fillOpacity="0.8" transform="rotate(-30 214 108)" />
                <circle cx="206" cy="100" r="4" fill="#FFFFFF" fillOpacity="0.95" />
                <text x="230" y="133" textAnchor="middle" fill="#FFFFFF" fontSize="24" fontWeight="900">N</text>
              </g>
            </g>
          )}

          {/* =================================================================
              4. CO2 — KARBON DIOKSIDA: Linear 180° with Double Bonds (O=C=O)
              ================================================================= */}
          {selectedMolecule === 'CO2' && (
            <g className="mol-render-group anim-subtle-sway">
              {/* Double Metallic Bonds Left (O=C): 2 parallel cylinders */}
              <line x1="120" y1="157" x2="230" y2="157" stroke="url(#bondMetallicDbl)" strokeWidth="7" strokeLinecap="round" />
              <line x1="120" y1="173" x2="230" y2="173" stroke="url(#bondMetallicDbl)" strokeWidth="7" strokeLinecap="round" />

              {/* Double Metallic Bonds Right (C=O): 2 parallel cylinders */}
              <line x1="230" y1="157" x2="340" y2="157" stroke="url(#bondMetallicDbl)" strokeWidth="7" strokeLinecap="round" />
              <line x1="230" y1="173" x2="340" y2="173" stroke="url(#bondMetallicDbl)" strokeWidth="7" strokeLinecap="round" />

              {/* Linear Angle Arc Indicator (180°) */}
              <path d="M 170,140 A 60 60 0 0 1 290,140" fill="none" stroke="#F72F91" strokeWidth="2" strokeDasharray="3 3" />
              <rect x="208" y="105" width="44" height="20" rx="6" fill="#FFF0F7" stroke="#F1E3EB" />
              <text x="230" y="119" textAnchor="middle" fill="#D91D78" fontSize="11" fontWeight="800">180°</text>

              {/* Left Oxygen Atom (Red - CPK) */}
              <g className="atom-node atom-o-left">
                <circle cx="120" cy="165" r="46" fill="url(#cpkOxygen)" filter="url(#molGlow)" />
                <ellipse cx="106" cy="148" rx="15" ry="9" fill="#FFFFFF" fillOpacity="0.8" transform="rotate(-30 106 148)" />
                <text x="120" y="173" textAnchor="middle" fill="#FFFFFF" fontSize="20" fontWeight="900">O</text>
              </g>

              {/* Right Oxygen Atom (Red - CPK) */}
              <g className="atom-node atom-o-right">
                <circle cx="340" cy="165" r="46" fill="url(#cpkOxygen)" filter="url(#molGlow)" />
                <ellipse cx="326" cy="148" rx="15" ry="9" fill="#FFFFFF" fillOpacity="0.8" transform="rotate(-30 326 148)" />
                <text x="340" y="173" textAnchor="middle" fill="#FFFFFF" fontSize="20" fontWeight="900">O</text>
              </g>

              {/* Central Carbon Atom (Dark Slate Charcoal - CPK) */}
              <g className="atom-node atom-center-c">
                <circle cx="230" cy="165" r="50" fill="url(#cpkCarbon)" filter="url(#molGlow)" />
                <ellipse cx="214" cy="148" rx="17" ry="10" fill="#FFFFFF" fillOpacity="0.6" transform="rotate(-30 214 148)" />
                <circle cx="206" cy="140" r="4" fill="#FFFFFF" fillOpacity="0.8" />
                <text x="230" y="173" textAnchor="middle" fill="#FFFFFF" fontSize="24" fontWeight="900">C</text>
              </g>
            </g>
          )}
        </svg>
      </div>

      {/* Chemical Metadata Bar & CPK Legend */}
      <div className="viewer-meta-card">
        <div className="meta-left-col">
          <div className="meta-headline-row">
            <span className="meta-badge-formula">{current.formula}</span>
            <span className="meta-chem-name">{current.name}</span>
          </div>
          <p className="meta-geom-desc">{current.description}</p>
        </div>

        <div className="meta-right-specs">
          <div className="spec-badge">
            <span className="spec-label">Geometri:</span>
            <span className="spec-val">{current.geometry}</span>
          </div>
          <div className="spec-badge">
            <span className="spec-label">Sudut:</span>
            <span className="spec-val highlight-pink">{current.angle}</span>
          </div>
          <div className="spec-badge">
            <span className="spec-label">Ikatan:</span>
            <span className="spec-val">{current.bondType}</span>
          </div>
        </div>
      </div>

      {/* CPK Color Guide Legend */}
      <div className="cpk-legend-bar">
        <span className="legend-label">Standar Warna CPK:</span>
        <div className="legend-items-list">
          <span className="cpk-item"><span className="cpk-swatch cpk-white" /> H (Hidrogen)</span>
          <span className="cpk-item"><span className="cpk-swatch cpk-red" /> O (Oksigen)</span>
          <span className="cpk-item"><span className="cpk-swatch cpk-black" /> C (Karbon)</span>
          <span className="cpk-item"><span className="cpk-swatch cpk-blue" /> N (Nitrogen)</span>
        </div>
      </div>
    </div>
  );
};

