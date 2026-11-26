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

      {/* 3D Ball-and-Stick Canvas with Cyber-Chemical Glow */}
      <div className="viewer-canvas-stage">
        {/* Dynamic ambient backdrop lighting */}
        <div className="viewer-ambient-glow glow-stage-pink" />
        <div className="viewer-ambient-glow glow-stage-purple" />
        <div className="viewer-ambient-glow glow-stage-cyan" />

        <svg
          viewBox="0 0 460 340"
          className={`viewer-svg-graphic ${isHovered ? 'viewer-hovered' : ''}`}
          aria-label={`Model 3D Molekul ${current.name} (${current.formula})`}
        >
          <defs>
            {/* GLOSSY 3D SPHERE GRADIENTS (Referensial Halaman Login ChemBond) */}
            
            {/* 1. Pearl White Glossy Sphere (Hidrogen - H) */}
            <radialGradient id="glossHydrogen" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="35%" stopColor="#F8FAFC" />
              <stop offset="70%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#94A3B8" />
            </radialGradient>

            {/* 2. Radiant Crimson / Red-Magenta Glossy Sphere (Oksigen - O) */}
            <radialGradient id="glossOxygen" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="25%" stopColor="#FFA6A6" />
              <stop offset="65%" stopColor="#EF4444" />
              <stop offset="85%" stopColor="#B91C1C" />
              <stop offset="100%" stopColor="#660020" />
            </radialGradient>

            {/* 3. Radiant Vibrant Cyan/Blue Sphere (Nitrogen - N) */}
            <radialGradient id="glossNitrogen" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="25%" stopColor="#7DEBFF" />
              <stop offset="65%" stopColor="#18A5DB" />
              <stop offset="90%" stopColor="#0B5678" />
              <stop offset="100%" stopColor="#042C3E" />
            </radialGradient>

            {/* 4. Deep Charcoal / Plum-Slate Glossy Sphere (Karbon - C) */}
            <radialGradient id="glossCarbon" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#CBD5E1" stopOpacity="0.95" />
              <stop offset="25%" stopColor="#64748B" />
              <stop offset="65%" stopColor="#33243B" />
              <stop offset="90%" stopColor="#1A0D22" />
              <stop offset="100%" stopColor="#0A030F" />
            </radialGradient>

            {/* 5. Primary Pink-Magenta Sphere */}
            <radialGradient id="glossPinkPrimary" cx="35%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="25%" stopColor="#FF6B79" />
              <stop offset="70%" stopColor="#F72F91" />
              <stop offset="100%" stopColor="#A80757" />
            </radialGradient>

            {/* DIMENSIONAL CYLINDRICAL GLOSSY BOND GRADIENTS */}
            <linearGradient id="bondGradPinkCyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F72F91" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#C4B5FD" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#38E1FF" stopOpacity="0.9" />
            </linearGradient>

            <linearGradient id="bondGradRedWhite" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EF4444" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#FBCFE8" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#E2E8F0" stopOpacity="0.9" />
            </linearGradient>

            <linearGradient id="bondGradPlumWhite" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#64748B" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#CBD5E1" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#F8FAFC" stopOpacity="0.9" />
            </linearGradient>

            <linearGradient id="bondGradBlueWhite" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#18A5DB" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#BAE6FD" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#F8FAFC" stopOpacity="0.9" />
            </linearGradient>

            <linearGradient id="bondGradDoubleCO2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EF4444" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#FF6B79" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#EF4444" stopOpacity="0.95" />
            </linearGradient>

            {/* GLOW AND NEON FILTERS */}
            <filter id="softGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            <filter id="intenseGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="12" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* =================================================================
              1. H2O — AIR: Bent Geometry (104.5°)
              ================================================================= */}
          {selectedMolecule === 'H2O' && (
            <g className="mol-render-group anim-float-gentle mol-3d-h2o">
              {/* Double-layered Cylindrical Glossy Bonds */}
              {/* O -> Left H */}
              <line x1="230" y1="125" x2="135" y2="235" stroke="url(#bondGradRedWhite)" strokeWidth="14" strokeLinecap="round" filter="url(#neonGlow)" />
              <line x1="230" y1="125" x2="135" y2="235" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeOpacity="0.8" />

              {/* O -> Right H */}
              <line x1="230" y1="125" x2="325" y2="235" stroke="url(#bondGradRedWhite)" strokeWidth="14" strokeLinecap="round" filter="url(#neonGlow)" />
              <line x1="230" y1="125" x2="325" y2="235" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeOpacity="0.8" />

              {/* Angle Arc Indicator (104.5°) */}
              <path d="M 185,175 A 65 65 0 0 1 275,175" fill="none" stroke="#F72F91" strokeWidth="2.5" strokeDasharray="4 4" filter="url(#neonGlow)" />
              <rect x="206" y="185" width="48" height="20" rx="6" fill="#2D1138" stroke="rgba(247, 47, 145, 0.6)" />
              <text x="230" y="199" textAnchor="middle" fill="#FF6B79" fontSize="11" fontWeight="800">104,5°</text>

              {/* Left Hydrogen Atom (Glossy Pearl White) */}
              <g className="atom-node atom-h-left">
                <circle cx="135" cy="235" r="34" fill="url(#glossHydrogen)" filter="url(#softGlow)" />
                <ellipse cx="123" cy="223" rx="12" ry="7" fill="#FFFFFF" fillOpacity="0.85" transform="rotate(-30 123 223)" />
                <circle cx="118" cy="217" r="3.5" fill="#FFFFFF" fillOpacity="0.95" />
                <text x="135" y="242" textAnchor="middle" fill="#0F172A" fontSize="18" fontWeight="900" filter="drop-shadow(0 1px 2px rgba(255,255,255,0.4))">H</text>
              </g>

              {/* Right Hydrogen Atom (Glossy Pearl White) */}
              <g className="atom-node atom-h-right">
                <circle cx="325" cy="235" r="34" fill="url(#glossHydrogen)" filter="url(#softGlow)" />
                <ellipse cx="313" cy="223" rx="12" ry="7" fill="#FFFFFF" fillOpacity="0.85" transform="rotate(-30 313 223)" />
                <circle cx="308" cy="217" r="3.5" fill="#FFFFFF" fillOpacity="0.95" />
                <text x="325" y="242" textAnchor="middle" fill="#0F172A" fontSize="18" fontWeight="900" filter="drop-shadow(0 1px 2px rgba(255,255,255,0.4))">H</text>
              </g>

              {/* Central Oxygen Atom (Radiant Red-Magenta Glossy Sphere) */}
              <g className="atom-node atom-center-o">
                <circle cx="230" cy="125" r="56" fill="url(#glossOxygen)" filter="url(#intenseGlow)" />
                <ellipse cx="210" cy="103" rx="20" ry="11" fill="#FFFFFF" fillOpacity="0.85" transform="rotate(-30 210 103)" />
                <circle cx="201" cy="95" r="5" fill="#FFFFFF" fillOpacity="0.95" />
                <circle cx="255" cy="150" r="4" fill="#FFFFFF" fillOpacity="0.3" />
                <text x="230" y="134" textAnchor="middle" fill="#FFFFFF" fontSize="26" fontWeight="900" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.6))">O</text>
              </g>

              {/* 2 Lone Pairs (PEB) visual lobes */}
              <g opacity="0.65">
                <ellipse cx="205" cy="62" rx="10" ry="16" fill="#FFC078" filter="url(#softGlow)" transform="rotate(-35 205 62)" />
                <ellipse cx="255" cy="62" rx="10" ry="16" fill="#FFC078" filter="url(#softGlow)" transform="rotate(35 255 62)" />
              </g>
            </g>
          )}

          {/* =================================================================
              2. CH4 — METANA: 3D Tetrahedral Geometry (109.5°)
              ================================================================= */}
          {selectedMolecule === 'CH4' && (
            <g className="mol-render-group anim-float-gentle mol-3d-ch4">
              {/* Back Hydrogen Bond (Projected backwards into screen - with perspective) */}
              <line x1="230" y1="165" x2="310" y2="120" stroke="rgba(168, 85, 247, 0.7)" strokeWidth="9" strokeDasharray="5 5" />
              {/* Back H Atom */}
              <circle cx="310" cy="120" r="23" fill="url(#glossHydrogen)" opacity="0.85" filter="url(#softGlow)" />
              <text x="310" y="126" textAnchor="middle" fill="#0F172A" fontSize="13" fontWeight="900">H</text>

              {/* Top Hydrogen Bond */}
              <line x1="230" y1="165" x2="230" y2="55" stroke="url(#bondGradPlumWhite)" strokeWidth="13" strokeLinecap="round" filter="url(#neonGlow)" />
              <line x1="230" y1="165" x2="230" y2="55" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.75" />
              {/* Top H Atom */}
              <circle cx="230" cy="55" r="30" fill="url(#glossHydrogen)" filter="url(#softGlow)" />
              <ellipse cx="221" cy="45" rx="10" ry="6" fill="#FFFFFF" fillOpacity="0.85" transform="rotate(-25 221 45)" />
              <text x="230" y="61" textAnchor="middle" fill="#0F172A" fontSize="16" fontWeight="900">H</text>

              {/* Left Front Hydrogen Bond (Projected forward) */}
              <line x1="230" y1="165" x2="120" y2="245" stroke="url(#bondGradPlumWhite)" strokeWidth="15" strokeLinecap="round" filter="url(#neonGlow)" />
              <line x1="230" y1="165" x2="120" y2="245" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeOpacity="0.8" />
              {/* Left Front H Atom */}
              <circle cx="120" cy="245" r="35" fill="url(#glossHydrogen)" filter="url(#softGlow)" />
              <ellipse cx="108" cy="233" rx="12" ry="7" fill="#FFFFFF" fillOpacity="0.85" transform="rotate(-25 108 233)" />
              <circle cx="103" cy="227" r="3.5" fill="#FFFFFF" fillOpacity="0.95" />
              <text x="120" y="252" textAnchor="middle" fill="#0F172A" fontSize="18" fontWeight="900">H</text>

              {/* Right Front Hydrogen Bond (Projected forward) */}
              <line x1="230" y1="165" x2="330" y2="255" stroke="url(#bondGradPlumWhite)" strokeWidth="15" strokeLinecap="round" filter="url(#neonGlow)" />
              <line x1="230" y1="165" x2="330" y2="255" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeOpacity="0.8" />
              {/* Right Front H Atom */}
              <circle cx="330" cy="255" r="35" fill="url(#glossHydrogen)" filter="url(#softGlow)" />
              <ellipse cx="318" cy="243" rx="12" ry="7" fill="#FFFFFF" fillOpacity="0.85" transform="rotate(-25 318 243)" />
              <circle cx="313" cy="237" r="3.5" fill="#FFFFFF" fillOpacity="0.95" />
              <text x="330" y="262" textAnchor="middle" fill="#0F172A" fontSize="18" fontWeight="900">H</text>

              {/* Angle Arc Indicator (109.5°) */}
              <path d="M 230,115 A 50 50 0 0 0 175,190" fill="none" stroke="#F72F91" strokeWidth="2.5" strokeDasharray="3 3" filter="url(#neonGlow)" />
              <rect x="156" y="130" width="48" height="20" rx="6" fill="#2D1138" stroke="rgba(247, 47, 145, 0.6)" />
              <text x="180" y="144" textAnchor="middle" fill="#FF6B79" fontSize="11" fontWeight="800">109,5°</text>

              {/* Central Carbon Atom (Deep Slate Charcoal Glossy Sphere) */}
              <circle cx="230" cy="165" r="52" fill="url(#glossCarbon)" filter="url(#intenseGlow)" />
              <ellipse cx="212" cy="146" rx="19" ry="11" fill="#FFFFFF" fillOpacity="0.75" transform="rotate(-30 212 146)" />
              <circle cx="203" cy="138" r="4.5" fill="#FFFFFF" fillOpacity="0.9" />
              <circle cx="252" cy="188" r="3.5" fill="#FFFFFF" fillOpacity="0.25" />
              <text x="230" y="174" textAnchor="middle" fill="#FFFFFF" fontSize="26" fontWeight="900" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.7))">C</text>
            </g>
          )}

          {/* =================================================================
              3. NH3 — AMONIA: Trigonal Pyramidal (107°)
              ================================================================= */}
          {selectedMolecule === 'NH3' && (
            <g className="mol-render-group anim-float-gentle mol-3d-nh3">
              {/* Back Lone Pair Lobe above Apex */}
              <ellipse cx="230" cy="58" rx="14" ry="20" fill="#FFC078" opacity="0.75" filter="url(#softGlow)" />
              <circle cx="225" cy="56" r="3.5" fill="#FFF" />
              <circle cx="235" cy="56" r="3.5" fill="#FFF" />

              {/* 3 Single Covalent Metallic Bonds down to the 3-Legged Base */}
              {/* N -> Left H */}
              <line x1="230" y1="125" x2="125" y2="235" stroke="url(#bondGradBlueWhite)" strokeWidth="14" strokeLinecap="round" filter="url(#neonGlow)" />
              <line x1="230" y1="125" x2="125" y2="235" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.8" />

              {/* N -> Back-Right H */}
              <line x1="230" y1="125" x2="315" y2="195" stroke="url(#bondGradBlueWhite)" strokeWidth="10" strokeLinecap="round" filter="url(#neonGlow)" />
              <line x1="230" y1="125" x2="315" y2="195" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.7" />

              {/* N -> Front H */}
              <line x1="230" y1="125" x2="245" y2="265" stroke="url(#bondGradBlueWhite)" strokeWidth="15" strokeLinecap="round" filter="url(#neonGlow)" />
              <line x1="230" y1="125" x2="245" y2="265" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" strokeOpacity="0.8" />

              {/* Angle Arc Indicator (107°) */}
              <path d="M 180,175 A 60 60 0 0 1 240,200" fill="none" stroke="#F72F91" strokeWidth="2.5" strokeDasharray="3 3" filter="url(#neonGlow)" />
              <rect x="195" y="195" width="44" height="20" rx="6" fill="#2D1138" stroke="rgba(247, 47, 145, 0.6)" />
              <text x="217" y="209" textAnchor="middle" fill="#FF6B79" fontSize="11" fontWeight="800">107°</text>

              {/* Back-Right H */}
              <g className="atom-node">
                <circle cx="315" cy="195" r="28" fill="url(#glossHydrogen)" filter="url(#softGlow)" />
                <ellipse cx="307" cy="187" rx="9" ry="5" fill="#FFFFFF" fillOpacity="0.85" transform="rotate(-25 307 187)" />
                <text x="315" y="201" textAnchor="middle" fill="#0F172A" fontSize="15" fontWeight="900">H</text>
              </g>

              {/* Left H */}
              <g className="atom-node">
                <circle cx="125" cy="235" r="33" fill="url(#glossHydrogen)" filter="url(#softGlow)" />
                <ellipse cx="114" cy="224" rx="11" ry="6" fill="#FFFFFF" fillOpacity="0.85" transform="rotate(-25 114 224)" />
                <circle cx="109" cy="219" r="3" fill="#FFFFFF" fillOpacity="0.9" />
                <text x="125" y="242" textAnchor="middle" fill="#0F172A" fontSize="17" fontWeight="900">H</text>
              </g>

              {/* Front H (Slightly larger for 3D depth) */}
              <g className="atom-node">
                <circle cx="245" cy="265" r="36" fill="url(#glossHydrogen)" filter="url(#softGlow)" />
                <ellipse cx="233" cy="253" rx="12" ry="7" fill="#FFFFFF" fillOpacity="0.85" transform="rotate(-25 233 253)" />
                <circle cx="227" cy="247" r="3.5" fill="#FFFFFF" fillOpacity="0.95" />
                <text x="245" y="272" textAnchor="middle" fill="#0F172A" fontSize="18" fontWeight="900">H</text>
              </g>

              {/* Nitrogen Atom at Apex (Radiant Vibrant Cyan/Blue Sphere) */}
              <g className="atom-node atom-center-n">
                <circle cx="230" cy="125" r="54" fill="url(#glossNitrogen)" filter="url(#intenseGlow)" />
                <ellipse cx="212" cy="106" rx="18" ry="11" fill="#FFFFFF" fillOpacity="0.85" transform="rotate(-30 212 106)" />
                <circle cx="203" cy="98" r="5" fill="#FFFFFF" fillOpacity="0.95" />
                <circle cx="252" cy="148" r="4" fill="#FFFFFF" fillOpacity="0.3" />
                <text x="230" y="134" textAnchor="middle" fill="#FFFFFF" fontSize="26" fontWeight="900" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.6))">N</text>
              </g>
            </g>
          )}

          {/* =================================================================
              4. CO2 — KARBON DIOKSIDA: Linear 180° with Double Bonds (O=C=O)
              ================================================================= */}
          {selectedMolecule === 'CO2' && (
            <g className="mol-render-group anim-float-gentle mol-3d-co2">
              {/* Double Metallic Bonds Left (O=C): 2 parallel neon cylinders */}
              <line x1="120" y1="156" x2="230" y2="156" stroke="url(#bondGradDoubleCO2)" strokeWidth="8" strokeLinecap="round" filter="url(#neonGlow)" />
              <line x1="120" y1="156" x2="230" y2="156" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.8" />

              <line x1="120" y1="174" x2="230" y2="174" stroke="url(#bondGradDoubleCO2)" strokeWidth="8" strokeLinecap="round" filter="url(#neonGlow)" />
              <line x1="120" y1="174" x2="230" y2="174" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.8" />

              {/* Double Metallic Bonds Right (C=O): 2 parallel neon cylinders */}
              <line x1="230" y1="156" x2="340" y2="156" stroke="url(#bondGradDoubleCO2)" strokeWidth="8" strokeLinecap="round" filter="url(#neonGlow)" />
              <line x1="230" y1="156" x2="340" y2="156" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.8" />

              <line x1="230" y1="174" x2="340" y2="174" stroke="url(#bondGradDoubleCO2)" strokeWidth="8" strokeLinecap="round" filter="url(#neonGlow)" />
              <line x1="230" y1="174" x2="340" y2="174" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.8" />

              {/* Linear Angle Arc Indicator (180°) */}
              <path d="M 170,140 A 60 60 0 0 1 290,140" fill="none" stroke="#F72F91" strokeWidth="2.5" strokeDasharray="4 4" filter="url(#neonGlow)" />
              <rect x="208" y="105" width="44" height="20" rx="6" fill="#2D1138" stroke="rgba(247, 47, 145, 0.6)" />
              <text x="230" y="119" textAnchor="middle" fill="#FF6B79" fontSize="11" fontWeight="800">180°</text>

              {/* Left Oxygen Atom (Red-Magenta Glossy Sphere) */}
              <g className="atom-node atom-o-left">
                <circle cx="120" cy="165" r="48" fill="url(#glossOxygen)" filter="url(#intenseGlow)" />
                <ellipse cx="104" cy="147" rx="16" ry="10" fill="#FFFFFF" fillOpacity="0.85" transform="rotate(-30 104 147)" />
                <circle cx="97" cy="140" r="4.5" fill="#FFFFFF" fillOpacity="0.95" />
                <text x="120" y="174" textAnchor="middle" fill="#FFFFFF" fontSize="22" fontWeight="900" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.6))">O</text>
              </g>

              {/* Right Oxygen Atom (Red-Magenta Glossy Sphere) */}
              <g className="atom-node atom-o-right">
                <circle cx="340" cy="165" r="48" fill="url(#glossOxygen)" filter="url(#intenseGlow)" />
                <ellipse cx="324" cy="147" rx="16" ry="10" fill="#FFFFFF" fillOpacity="0.85" transform="rotate(-30 324 147)" />
                <circle cx="317" cy="140" r="4.5" fill="#FFFFFF" fillOpacity="0.95" />
                <text x="340" y="174" textAnchor="middle" fill="#FFFFFF" fontSize="22" fontWeight="900" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.6))">O</text>
              </g>

              {/* Central Carbon Atom (Deep Slate Charcoal Glossy Sphere) */}
              <g className="atom-node atom-center-c">
                <circle cx="230" cy="165" r="52" fill="url(#glossCarbon)" filter="url(#intenseGlow)" />
                <ellipse cx="212" cy="146" rx="19" ry="11" fill="#FFFFFF" fillOpacity="0.75" transform="rotate(-30 212 146)" />
                <circle cx="203" cy="138" r="4.5" fill="#FFFFFF" fillOpacity="0.9" />
                <circle cx="252" cy="188" r="3.5" fill="#FFFFFF" fillOpacity="0.25" />
                <text x="230" y="174" textAnchor="middle" fill="#FFFFFF" fontSize="26" fontWeight="900" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.7))">C</text>
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

