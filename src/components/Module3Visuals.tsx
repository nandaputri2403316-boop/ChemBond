import React from 'react';

// =============================================================================
// SUBMATERI 1: IKATAN KIMIA DI SEKITAR KITA (4 FENOMENA UTAMA)
// =============================================================================
export const EverydayPhenomenaGallery: React.FC = () => {
  const items = [
    {
      id: 'garam',
      title: 'Garam Dapur',
      formula: 'NaCl (Natrium Klorida)',
      type: 'Ikatan Ion',
      badgeClass: 'badge-ion',
      description: 'Kristal putih rapuh yang tersusun atas ion Na⁺ dan Cl⁻. Berperan sebagai penyedap rasa dan pengawet makanan alami.',
      svg: (
        <svg viewBox="0 0 200 140" className="m3-visual-svg" aria-label="Ilustrasi Garam Dapur">
          <defs>
            <linearGradient id="saltShaker" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#E2E8F0" />
            </linearGradient>
            <linearGradient id="saltCap" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#CBD5E1" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>
          </defs>
          <rect width="200" height="140" fill="#F8FAFC" rx="16" />
          {/* Salt container */}
          <path d="M75,45 L125,45 L135,115 L65,115 Z" fill="url(#saltShaker)" stroke="#94A3B8" strokeWidth="2.5" />
          <path d="M80,30 L120,30 L125,45 L75,45 Z" fill="url(#saltCap)" stroke="#64748B" strokeWidth="2" />
          {/* Cap holes */}
          <circle cx="90" cy="37" r="2.5" fill="#475569" />
          <circle cx="100" cy="37" r="2.5" fill="#475569" />
          <circle cx="110" cy="37" r="2.5" fill="#475569" />
          {/* Salt crystals falling */}
          <rect x="98" y="55" width="4" height="4" fill="#64748B" opacity="0.3" rx="1" />
          <rect x="85" y="70" width="5" height="5" fill="#64748B" opacity="0.4" rx="1" />
          <rect x="110" y="75" width="4" height="4" fill="#64748B" opacity="0.4" rx="1" />
          <rect x="95" y="90" width="6" height="6" fill="#64748B" opacity="0.5" rx="1" />
          {/* Salt heap */}
          <ellipse cx="145" cy="118" rx="35" ry="12" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="1.5" />
          <path d="M120,118 Q145,100 170,118 Z" fill="#FFFFFF" />
          {/* Floating crystal representation */}
          <g transform="translate(150, 40)">
            <rect x="-14" y="-14" width="28" height="28" fill="#FCE7F3" stroke="#D91D78" strokeWidth="2" rx="4" />
            <circle cx="-5" cy="-5" r="5" fill="#D91D78" />
            <circle cx="6" cy="6" r="7" fill="#10B981" />
            <text x="-5" y="-3" fontSize="6" fill="#FFFFFF" textAnchor="middle" fontWeight="bold">+</text>
            <text x="6" y="8" fontSize="7" fill="#FFFFFF" textAnchor="middle" fontWeight="bold">−</text>
          </g>
        </svg>
      ),
    },
    {
      id: 'air',
      title: 'Air Minum',
      formula: 'H₂O (Dihidrogen Monoksida)',
      type: 'Ikatan Kovalen',
      badgeClass: 'badge-kovalen',
      description: 'Zat cair polar esensial bagi kehidupan. Tersusun atas dua atom hidrogen dan satu atom oksigen yang berbagi pasangan elektron.',
      svg: (
        <svg viewBox="0 0 200 140" className="m3-visual-svg" aria-label="Ilustrasi Air Minum">
          <defs>
            <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E0F2FE" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="glassGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#CBD5E1" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <rect width="200" height="140" fill="#F0F9FF" rx="16" />
          {/* Glass */}
          <path d="M70,30 L130,30 L122,120 L78,120 Z" fill="url(#glassGrad)" stroke="#38BDF8" strokeWidth="2.5" />
          {/* Water content */}
          <path d="M72,55 Q100,50 128,55 L120,118 L80,118 Z" fill="url(#waterGrad)" opacity="0.85" />
          {/* Bubbles */}
          <circle cx="95" cy="85" r="4" fill="#FFFFFF" opacity="0.6" />
          <circle cx="108" cy="70" r="3" fill="#FFFFFF" opacity="0.7" />
          <circle cx="88" cy="98" r="2.5" fill="#FFFFFF" opacity="0.5" />
          {/* H2O Molecule callout */}
          <g transform="translate(148, 48)">
            <circle cx="0" cy="0" r="14" fill="#EF4444" stroke="#B91C1C" strokeWidth="1.5" />
            <text x="0" y="4" fontSize="10" fill="#FFFFFF" textAnchor="middle" fontWeight="bold">O</text>
            <line x1="-8" y1="-8" x2="-18" y2="-16" stroke="#475569" strokeWidth="2" />
            <line x1="8" y1="-8" x2="18" y2="-16" stroke="#475569" strokeWidth="2" />
            <circle cx="-20" cy="-18" r="8" fill="#F1F5F9" stroke="#64748B" strokeWidth="1.5" />
            <text x="-20" y="-15" fontSize="8" fill="#0F172A" textAnchor="middle" fontWeight="bold">H</text>
            <circle cx="20" cy="-18" r="8" fill="#F1F5F9" stroke="#64748B" strokeWidth="1.5" />
            <text x="20" y="-15" fontSize="8" fill="#0F172A" textAnchor="middle" fontWeight="bold">H</text>
            <text x="0" y="24" fontSize="8" fill="#0369A1" textAnchor="middle" fontWeight="bold">104.5°</text>
          </g>
        </svg>
      ),
    },
    {
      id: 'tembaga',
      title: 'Kabel Tembaga',
      formula: 'Cu (Tembaga Murni)',
      type: 'Ikatan Logam',
      badgeClass: 'badge-logam',
      description: 'Inti kabel penghantar listrik. Memiliki lautan elektron valensi yang bergerak bebas sehingga listrik mengalir dengan sangat lancar.',
      svg: (
        <svg viewBox="0 0 200 140" className="m3-visual-svg" aria-label="Ilustrasi Kabel Tembaga">
          <defs>
            <linearGradient id="copperGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FDBA74" />
              <stop offset="50%" stopColor="#EA580C" />
              <stop offset="100%" stopColor="#9A3412" />
            </linearGradient>
            <linearGradient id="sheathGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
          </defs>
          <rect width="200" height="140" fill="#FFF7ED" rx="16" />
          {/* Black Outer Cable Sheath */}
          <rect x="25" y="48" width="70" height="44" rx="8" fill="url(#sheathGrad)" stroke="#334155" strokeWidth="2" />
          <ellipse cx="25" cy="70" rx="8" ry="22" fill="#0F172A" stroke="#334155" strokeWidth="1.5" />
          {/* Exposed Copper Strands */}
          <path d="M95,54 C120,50 145,58 175,54" stroke="url(#copperGrad)" strokeWidth="6" strokeLinecap="round" fill="none" />
          <path d="M95,64 C125,60 150,68 180,66" stroke="url(#copperGrad)" strokeWidth="6" strokeLinecap="round" fill="none" />
          <path d="M95,74 C120,72 145,82 175,80" stroke="url(#copperGrad)" strokeWidth="6" strokeLinecap="round" fill="none" />
          <path d="M95,84 C115,86 140,94 170,92" stroke="url(#copperGrad)" strokeWidth="6" strokeLinecap="round" fill="none" />
          {/* Spark effect on tip */}
          <polygon points="178,50 183,55 188,48 185,58 192,62 183,63 181,70 178,61 170,60 176,56" fill="#F59E0B" />
          <text x="100" y="125" fontSize="11" fill="#C2410C" textAnchor="middle" fontWeight="800">
            Inti Kawat Konduktor Cu
          </text>
        </svg>
      ),
    },
    {
      id: 'plastik',
      title: 'Plastik Pelapis',
      formula: 'Polivinil Klorida / Polietilena',
      type: 'Kovalen Polimer',
      badgeClass: 'badge-kovalen',
      description: 'Selubung pelindung luar kabel dari bahan polimer. Berfungsi sebagai isolator listrik yang aman disentuh tangan manusia.',
      svg: (
        <svg viewBox="0 0 200 140" className="m3-visual-svg" aria-label="Ilustrasi Plastik Pelapis">
          <defs>
            <linearGradient id="pvcBlue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="100%" stopColor="#0284C7" />
            </linearGradient>
            <linearGradient id="pvcRed" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FB7185" />
              <stop offset="100%" stopColor="#E11D48" />
            </linearGradient>
            <linearGradient id="pvcYellow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FDE047" />
              <stop offset="100%" stopColor="#CA8A04" />
            </linearGradient>
          </defs>
          <rect width="200" height="140" fill="#FDF2F8" rx="16" />
          {/* Stripped colored insulations */}
          <g transform="translate(10, 10)">
            {/* Blue wire */}
            <rect x="25" y="20" width="105" height="18" rx="6" fill="url(#pvcBlue)" stroke="#0369A1" strokeWidth="1.5" />
            <rect x="130" y="25" width="30" height="8" rx="2" fill="#EA580C" />
            {/* Yellow-Green ground wire */}
            <rect x="25" y="46" width="115" height="18" rx="6" fill="url(#pvcYellow)" stroke="#A16207" strokeWidth="1.5" />
            <rect x="140" y="51" width="25" height="8" rx="2" fill="#EA580C" />
            {/* Red wire */}
            <rect x="25" y="72" width="125" height="18" rx="6" fill="url(#pvcRed)" stroke="#BE123C" strokeWidth="1.5" />
            <rect x="150" y="77" width="20" height="8" rx="2" fill="#EA580C" />
          </g>
          {/* Shield badge */}
          <g transform="translate(45, 118)">
            <text x="55" y="0" fontSize="10" fill="#BE185D" textAnchor="middle" fontWeight="bold">
              🛡️ Isolator Aman (Anti-Sengatan Listrik)
            </text>
          </g>
        </svg>
      ),
    },
  ];

  return (
    <div className="m3-phenomena-container">
      <div className="m3-section-badge">
        <span>🔎 FENOMENA SEHARI-HARI</span>
      </div>
      <h3 className="m3-visual-title">Empat Benda Sehari-hari dengan Rahasia Ikatan Berbeda</h3>
      <p className="m3-visual-sub">
        Perhatikan bagaimana perbedaan jenis ikatan kimia menciptakan peran yang sangat berlawanan pada benda-benda di sekitar kita:
      </p>

      <div className="m3-phenomena-grid">
        {items.map((item) => (
          <div key={item.id} className="m3-phenomena-card">
            <div className="m3-card-img-wrap">{item.svg}</div>
            <div className="m3-card-body">
              <div className="m3-card-header-row">
                <h4 className="m3-card-title">{item.title}</h4>
                <span className={`m3-badge ${item.badgeClass}`}>{item.type}</span>
              </div>
              <span className="m3-card-formula">{item.formula}</span>
              <p className="m3-card-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// =============================================================================
// SUBMATERI 2: PENERAPAN IKATAN ION (NaCl, CaCO3, CaCl2, NaHCO3 & KISI KRISTAL)
// =============================================================================
export const IonicCrystalDiagram: React.FC = () => {
  return (
    <div className="m3-diagram-card">
      <div className="m3-diagram-header">
        <span className="m3-diagram-tag">DIAGRAM STRUKTUR KIMIA</span>
        <h4>Model Kisi Kristal 3D NaCl &amp; Konduktivitas Listrik</h4>
        <p>
          Mengapa senyawa ion padat tidak menghantarkan listrik, tetapi lelehan dan larutannya dapat menghantarkan listrik?
        </p>
      </div>

      <div className="m3-diagram-content-grid">
        {/* Left: 3D Lattice SVG */}
        <div className="m3-diagram-box">
          <h5 className="m3-box-label">Struktur Kisi Kristal Kubus Natrium Klorida (NaCl)</h5>
          <svg viewBox="0 0 280 220" className="m3-diagram-svg" aria-label="Kisi Kristal NaCl">
            <defs>
              <radialGradient id="naIon" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#F472B6" />
                <stop offset="100%" stopColor="#BE185D" />
              </radialGradient>
              <radialGradient id="clIon" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#6EE7B7" />
                <stop offset="100%" stopColor="#047857" />
              </radialGradient>
            </defs>

            {/* Connecting Lattice Grid Lines */}
            {/* Front square */}
            <line x1="50" y1="60" x2="150" y2="60" stroke="#CBD5E1" strokeWidth="2.5" />
            <line x1="150" y1="60" x2="150" y2="160" stroke="#CBD5E1" strokeWidth="2.5" />
            <line x1="150" y1="160" x2="50" y2="160" stroke="#CBD5E1" strokeWidth="2.5" />
            <line x1="50" y1="160" x2="50" y2="60" stroke="#CBD5E1" strokeWidth="2.5" />

            {/* Back square */}
            <line x1="110" y1="20" x2="210" y2="20" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="3,3" />
            <line x1="210" y1="20" x2="210" y2="120" stroke="#CBD5E1" strokeWidth="2" />
            <line x1="210" y1="120" x2="110" y2="120" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="3,3" />
            <line x1="110" y1="120" x2="110" y2="20" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="3,3" />

            {/* Connecting depth lines */}
            <line x1="50" y1="60" x2="110" y2="20" stroke="#E2E8F0" strokeWidth="2" strokeDasharray="3,3" />
            <line x1="150" y1="60" x2="210" y2="20" stroke="#CBD5E1" strokeWidth="2.5" />
            <line x1="150" y1="160" x2="210" y2="120" stroke="#CBD5E1" strokeWidth="2.5" />
            <line x1="50" y1="160" x2="110" y2="120" stroke="#CBD5E1" strokeWidth="2.5" />

            {/* Back Atoms */}
            <circle cx="110" cy="20" r="14" fill="url(#clIon)" opacity="0.6" />
            <circle cx="210" cy="20" r="9" fill="url(#naIon)" />
            <circle cx="110" cy="120" r="9" fill="url(#naIon)" opacity="0.6" />
            <circle cx="210" cy="120" r="14" fill="url(#clIon)" />

            {/* Center crossbars */}
            <line x1="100" y1="60" x2="160" y2="20" stroke="#CBD5E1" strokeWidth="1.5" />
            <line x1="150" y1="110" x2="210" y2="70" stroke="#CBD5E1" strokeWidth="1.5" />

            {/* Front Atoms */}
            <circle cx="50" cy="60" r="9" fill="url(#naIon)" />
            <text x="50" y="63" fontSize="8" fill="#FFF" textAnchor="middle" fontWeight="bold">Na⁺</text>

            <circle cx="150" cy="60" r="15" fill="url(#clIon)" />
            <text x="150" y="64" fontSize="10" fill="#FFF" textAnchor="middle" fontWeight="bold">Cl⁻</text>

            <circle cx="50" cy="160" r="15" fill="url(#clIon)" />
            <text x="50" y="164" fontSize="10" fill="#FFF" textAnchor="middle" fontWeight="bold">Cl⁻</text>

            <circle cx="150" cy="160" r="9" fill="url(#naIon)" />
            <text x="150" y="163" fontSize="8" fill="#FFF" textAnchor="middle" fontWeight="bold">Na⁺</text>

            {/* Middle Face Atom */}
            <circle cx="100" cy="110" r="12" fill="url(#naIon)" />
            <text x="100" y="113" fontSize="9" fill="#FFF" textAnchor="middle" fontWeight="bold">Na⁺</text>

            {/* Legend */}
            <g transform="translate(15, 195)">
              <circle cx="10" cy="5" r="7" fill="url(#naIon)" />
              <text x="24" y="9" fontSize="11" fill="#334155" fontWeight="600">Ion Na⁺ (Kecil)</text>
              <circle cx="140" cy="5" r="10" fill="url(#clIon)" />
              <text x="156" y="9" fontSize="11" fill="#334155" fontWeight="600">Ion Cl⁻ (Besar)</text>
            </g>
          </svg>
        </div>

        {/* Right: Conductivity States Comparison */}
        <div className="m3-diagram-box">
          <h5 className="m3-box-label">Perbandingan Daya Hantar Listrik</h5>
          <div className="m3-state-comparison-list">
            <div className="m3-state-item state-padat">
              <div className="m3-state-icon">🔒</div>
              <div className="m3-state-text">
                <strong>1. Fase Padatan (Kristal)</strong>
                <p>Ion terikat kaku dalam kisi kristal ➔ <em>Ion tidak dapat bergerak bebas</em> ➔ <strong>Isolator (Lampu Padam)</strong>.</p>
              </div>
            </div>

            <div className="m3-state-item state-lelehan">
              <div className="m3-state-icon">🔥</div>
              <div className="m3-state-text">
                <strong>2. Fase Lelehan (Cairan Murni)</strong>
                <p>Energi panas memutus kisi kristal ➔ <em>Ion dapat mengalir bebas</em> ➔ <strong>Konduktor (Lampu Nyala)</strong>.</p>
              </div>
            </div>

            <div className="m3-state-item state-larutan">
              <div className="m3-state-icon">💧</div>
              <div className="m3-state-text">
                <strong>3. Fase Larutan dalam Air</strong>
                <p>Molekul air mengelilingi dan memisahkan ion (hidrasi) ➔ <em>Ion bergerak bebas</em> ➔ <strong>Konduktor Kuat (Lampu Terang)</strong>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const IonicApplicationsGallery: React.FC = () => {
  const compounds = [
    {
      name: 'Natrium Klorida (NaCl)',
      role: 'Garam Dapur & Pengawet Ikan',
      desc: 'Memberikan rasa asin sedap dan menarik air dari mikroorganisme melalui tekanan osmotik sehingga bakteri tidak dapat berkembang biak.',
      icon: '🧂',
      accentColor: '#D91D78',
    },
    {
      name: 'Kalsium Karbonat (CaCO₃)',
      role: 'Batu Kapur, Marmer & Semen',
      desc: 'Bahan mineral kokoh penyusun cangkang kerang, batu kapur, dan marmer. Menjadi pilar utama industri bahan bangunan dan semen konstruksi.',
      icon: '🏛️',
      accentColor: '#059669',
    },
    {
      name: 'Kalsium Klorida (CaCl₂)',
      role: 'Bahan Pengering (Desiccant)',
      desc: 'Senyawa higroskopis aktif yang menyerap kelembapan uap air dari udara di lemari atau kotak penyimpanan hingga menjadi cairan bening.',
      icon: '📦',
      accentColor: '#0284C7',
    },
    {
      name: 'Natrium Bikarbonat (NaHCO₃)',
      role: 'Soda Kue Pengembang Roti',
      desc: 'Ketika dipanaskan atau bercampur zat asam saat membuat kue, senyawa ini melepaskan gelembung gas CO₂ yang membuat adonan mengembang empuk.',
      icon: '🧁',
      accentColor: '#D97706',
    },
  ];

  return (
    <div className="m3-gallery-wrap">
      <h4 className="m3-gallery-heading">Contoh Nyata Penerapan Senyawa Ionik</h4>
      <div className="m3-apps-grid">
        {compounds.map((c, idx) => (
          <div key={idx} className="m3-app-card" style={{ borderTopColor: c.accentColor }}>
            <div className="m3-app-icon-wrap" style={{ background: `${c.accentColor}18` }}>
              <span className="m3-app-icon">{c.icon}</span>
            </div>
            <h5 className="m3-app-title">{c.name}</h5>
            <span className="m3-app-role" style={{ color: c.accentColor }}>{c.role}</span>
            <p className="m3-app-desc">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// =============================================================================
// SUBMATERI 3: PENERAPAN IKATAN KOVALEN (H2O, CO2, CH4 & INTAN VS GRAFIT)
// =============================================================================
export const DiamondVsGraphiteDiagram: React.FC = () => {
  return (
    <div className="m3-diagram-card">
      <div className="m3-diagram-header">
        <span className="m3-diagram-tag">STUDI KASUS ALOTROP KARBON</span>
        <h4>Sama-Sama 100% Karbon: Mengapa Intan Keras dan Grafit Licin?</h4>
        <p>
          Intan dan grafit membuktikan bahwa cara atom saling berikatan kovalen menentukan sifat fisik zat secara ekstrem.
        </p>
      </div>

      <div className="m3-comparison-split-grid">
        {/* Left: Intan */}
        <div className="m3-comparison-col col-diamond">
          <div className="m3-col-header">
            <span className="m3-col-icon">💎</span>
            <div>
              <h5 className="m3-col-title">INTAN (Kovalen Jaringan 3D)</h5>
              <span className="m3-col-subtitle">Tetrahedral Kaku Tanpa Elektron Bebas</span>
            </div>
          </div>

          <svg viewBox="0 0 240 180" className="m3-structure-svg" aria-label="Struktur Intan 3D">
            <defs>
              <radialGradient id="diamondC" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#BAE6FD" />
                <stop offset="100%" stopColor="#0284C7" />
              </radialGradient>
            </defs>
            <rect width="240" height="180" fill="#F0F9FF" rx="12" />
            {/* Tetrahedral lattice lines */}
            <line x1="120" y1="90" x2="120" y2="40" stroke="#38BDF8" strokeWidth="3" />
            <line x1="120" y1="90" x2="65" y2="135" stroke="#38BDF8" strokeWidth="3" />
            <line x1="120" y1="90" x2="175" y2="135" stroke="#38BDF8" strokeWidth="3" />
            <line x1="120" y1="90" x2="140" y2="110" stroke="#38BDF8" strokeWidth="2" strokeDasharray="3,3" />

            <line x1="120" y1="40" x2="70" y2="25" stroke="#7DD3FC" strokeWidth="2.5" />
            <line x1="120" y1="40" x2="170" y2="25" stroke="#7DD3FC" strokeWidth="2.5" />
            <line x1="65" y1="135" x2="30" y2="160" stroke="#7DD3FC" strokeWidth="2.5" />
            <line x1="175" y1="135" x2="210" y2="160" stroke="#7DD3FC" strokeWidth="2.5" />

            {/* Carbon Atoms */}
            <circle cx="120" cy="40" r="10" fill="url(#diamondC)" />
            <circle cx="70" cy="25" r="8" fill="url(#diamondC)" />
            <circle cx="170" cy="25" r="8" fill="url(#diamondC)" />

            <circle cx="65" cy="135" r="10" fill="url(#diamondC)" />
            <circle cx="30" cy="160" r="8" fill="url(#diamondC)" />

            <circle cx="175" cy="135" r="10" fill="url(#diamondC)" />
            <circle cx="210" cy="160" r="8" fill="url(#diamondC)" />

            {/* Central C Atom */}
            <circle cx="120" cy="90" r="13" fill="url(#diamondC)" stroke="#0369A1" strokeWidth="2" />
            <text x="120" y="94" fontSize="10" fill="#FFFFFF" textAnchor="middle" fontWeight="bold">C</text>
          </svg>

          <ul className="m3-feature-list">
            <li><strong>Susunan:</strong> Setiap atom C mengikat 4 atom C lain secara tetrahedral kaku.</li>
            <li><strong>Kekuatan:</strong> Material alami paling keras di bumi (skala Mohs 10).</li>
            <li><strong>Listrik:</strong> Tidak menghantarkan listrik (semua 4 elektron valensi terikat).</li>
            <li><strong>Kegunaan:</strong> Perhiasan bernilai tinggi, mata bor sumur minyak, pemotong kaca.</li>
          </ul>
        </div>

        {/* Right: Grafit */}
        <div className="m3-comparison-col col-graphite">
          <div className="m3-col-header">
            <span className="m3-col-icon">✏️</span>
            <div>
              <h5 className="m3-col-title">GRAFIT (Kovalen Berlapis 2D)</h5>
              <span className="m3-col-subtitle">Cincin Heksagonal &amp; Elektron Bebas Bergerak</span>
            </div>
          </div>

          <svg viewBox="0 0 240 180" className="m3-structure-svg" aria-label="Struktur Grafit Berlapis">
            <defs>
              <radialGradient id="graphiteC" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#94A3B8" />
                <stop offset="100%" stopColor="#334155" />
              </radialGradient>
            </defs>
            <rect width="240" height="180" fill="#F8FAFC" rx="12" />

            {/* Layer 1 (Top Layer) */}
            <g transform="translate(10, 15)">
              <polygon points="50,20 80,10 110,20 110,45 80,55 50,45" fill="none" stroke="#64748B" strokeWidth="2.5" />
              <polygon points="110,20 140,10 170,20 170,45 140,55 110,45" fill="none" stroke="#64748B" strokeWidth="2.5" />
              <circle cx="50" cy="20" r="6" fill="url(#graphiteC)" />
              <circle cx="80" cy="10" r="6" fill="url(#graphiteC)" />
              <circle cx="110" cy="20" r="6" fill="url(#graphiteC)" />
              <circle cx="140" cy="10" r="6" fill="url(#graphiteC)" />
              <circle cx="170" cy="20" r="6" fill="url(#graphiteC)" />
              <circle cx="170" cy="45" r="6" fill="url(#graphiteC)" />
              <circle cx="140" cy="55" r="6" fill="url(#graphiteC)" />
              <circle cx="110" cy="45" r="6" fill="url(#graphiteC)" />
              <circle cx="80" cy="55" r="6" fill="url(#graphiteC)" />
              <circle cx="50" cy="45" r="6" fill="url(#graphiteC)" />
            </g>

            {/* Van der Waals dotted interaction */}
            <g stroke="#F43F5E" strokeWidth="1.5" strokeDasharray="3,3">
              <line x1="60" y1="65" x2="60" y2="105" />
              <line x1="90" y1="75" x2="90" y2="115" />
              <line x1="120" y1="65" x2="120" y2="105" />
              <line x1="150" y1="75" x2="150" y2="115" />
              <line x1="180" y1="65" x2="180" y2="105" />
            </g>
            <text x="120" y="90" fontSize="8" fill="#E11D48" textAnchor="middle" fontWeight="bold">
              Gaya Antar-Lapisan Lemah (Mudah Bergeser)
            </text>

            {/* Layer 2 (Bottom Layer) */}
            <g transform="translate(10, 85)">
              <polygon points="50,20 80,10 110,20 110,45 80,55 50,45" fill="none" stroke="#64748B" strokeWidth="2.5" />
              <polygon points="110,20 140,10 170,20 170,45 140,55 110,45" fill="none" stroke="#64748B" strokeWidth="2.5" />
              <circle cx="50" cy="20" r="6" fill="url(#graphiteC)" />
              <circle cx="80" cy="10" r="6" fill="url(#graphiteC)" />
              <circle cx="110" cy="20" r="6" fill="url(#graphiteC)" />
              <circle cx="140" cy="10" r="6" fill="url(#graphiteC)" />
              <circle cx="170" cy="20" r="6" fill="url(#graphiteC)" />
              <circle cx="170" cy="45" r="6" fill="url(#graphiteC)" />
              <circle cx="140" cy="55" r="6" fill="url(#graphiteC)" />
              <circle cx="110" cy="45" r="6" fill="url(#graphiteC)" />
              <circle cx="80" cy="55" r="6" fill="url(#graphiteC)" />
              <circle cx="50" cy="45" r="6" fill="url(#graphiteC)" />
            </g>
          </svg>

          <ul className="m3-feature-list">
            <li><strong>Susunan:</strong> Setiap atom C hanya mengikat 3 atom C lain dalam lapisan cincin 2D heksagonal.</li>
            <li><strong>Kekuatan:</strong> Lunak dan licin karena lapisan dapat meluncur lepas saat ditekan.</li>
            <li><strong>Listrik:</strong> <em>Dapat menghantarkan listrik</em> berkat elektron ke-4 yang terdelokalisasi.</li>
            <li><strong>Kegunaan:</strong> Isi pensil tulis, pelumas mesin kering, elektroda baterai lithium.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const CovalentApplicationsGallery: React.FC = () => {
  const items = [
    {
      title: 'Air (H₂O)',
      badge: 'Molekuler Polar',
      role: 'Pelarut Utama Kehidupan',
      desc: 'Bentuk molekul bengkok dengan ikatan hidrogen kuat antarmolekul. Menjadikannya pelarut berbagai zat gizi tubuh serta memiliki titik didih tinggi (100°C).',
      icon: '💧',
      color: '#0284C7',
    },
    {
      title: 'Karbon Dioksida (CO₂)',
      badge: 'Molekuler Nonpolar',
      role: 'Soda & Tabung APAR Pemadam',
      desc: 'Gas linier yang larut di bawah tekanan membentuk sensasi soda menggelitik di lidah, serta memadamkan api karena massa jenisnya lebih berat dari oksigen.',
      icon: '🫧',
      color: '#059669',
    },
    {
      title: 'Metana (CH₄)',
      badge: 'Molekuler Nonpolar',
      role: 'Bahan Bakar Gas Alam (LPG)',
      desc: 'Molekul tetrahedral sederhana yang mudah terbakar bersih menghasilkan energi kalor tinggi untuk memasak di dapur tanpa meninggalkan banyak jelaga.',
      icon: '🔥',
      color: '#D97706',
    },
    {
      title: 'Intan & Grafit',
      badge: 'Kovalen Jaringan',
      role: 'Perhiasan vs Isi Pensil',
      desc: 'Dua wajah alotrop karbon: intan yang memotong batuan keras dan grafit yang menggoreskan jejak karbon hitam di atas lembaran kertas bukumu.',
      icon: '💎',
      color: '#7C3AED',
    },
  ];

  return (
    <div className="m3-gallery-wrap">
      <h4 className="m3-gallery-heading">Ragam Penerapan Senyawa Kovalen</h4>
      <div className="m3-apps-grid">
        {items.map((item, idx) => (
          <div key={idx} className="m3-app-card" style={{ borderTopColor: item.color }}>
            <div className="m3-app-icon-wrap" style={{ background: `${item.color}15` }}>
              <span className="m3-app-icon">{item.icon}</span>
            </div>
            <h5 className="m3-app-title">{item.title}</h5>
            <span className="m3-app-role" style={{ color: item.color }}>{item.badge} • {item.role}</span>
            <p className="m3-app-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// =============================================================================
// SUBMATERI 4: PENERAPAN IKATAN LOGAM (TEMBAGA, ALUMINIUM, BAJA, KUNINGAN & LAUTAN ELEKTRON)
// =============================================================================
export const ElectronSeaDiagram: React.FC = () => {
  return (
    <div className="m3-diagram-card">
      <div className="m3-diagram-header">
        <span className="m3-diagram-tag">MODEL FISIKA-KIMIA LOGAM</span>
        <h4>Model Lautan Elektron (Electron Sea Model)</h4>
        <p>
          Kation-kation logam tersusun teratur dalam kisi kristal, direkatkan oleh awan elektron valensi yang bebas mengalir ke segala arah.
        </p>
      </div>

      <div className="m3-diagram-content-grid">
        {/* Left: Electron Sea Visual */}
        <div className="m3-diagram-box">
          <h5 className="m3-box-label">Ilustrasi Lautan Elektron Bebas Bergerak</h5>
          <svg viewBox="0 0 280 200" className="m3-diagram-svg" aria-label="Model Lautan Elektron">
            <defs>
              <radialGradient id="metalCation" cx="30%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#FDE047" />
                <stop offset="60%" stopColor="#EA580C" />
                <stop offset="100%" stopColor="#9A3412" />
              </radialGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Sea of electrons background */}
            <rect x="15" y="15" width="250" height="170" rx="14" fill="#FFF7ED" stroke="#FDBA74" strokeWidth="2" />
            <path d="M20,30 Q80,10 140,35 T260,25 L260,180 L20,180 Z" fill="#FFEDD5" opacity="0.6" />

            {/* Free Delocalized Electrons floating */}
            {[
              [40, 30], [80, 25], [120, 35], [170, 28], [210, 32], [240, 45],
              [35, 75], [95, 80], [135, 72], [185, 85], [235, 70],
              [45, 120], [85, 130], [130, 125], [175, 122], [225, 135],
              [40, 168], [90, 172], [140, 165], [195, 170], [240, 165]
            ].map(([x, y], idx) => (
              <g key={idx}>
                <circle cx={x} cy={y} r="4" fill="#3B82F6" filter="url(#glow)" />
                <text x={x} y={y + 2.5} fontSize="6" fill="#FFFFFF" textAnchor="middle" fontWeight="bold">e⁻</text>
              </g>
            ))}

            {/* Ordered Positive Cations (Grid 3x4) */}
            {[
              [60, 50], [115, 50], [170, 50], [225, 50],
              [60, 100], [115, 100], [170, 100], [225, 100],
              [60, 150], [115, 150], [170, 150], [225, 150]
            ].map(([cx, cy], idx) => (
              <g key={idx}>
                <circle cx={cx} cy={cy} r="16" fill="url(#metalCation)" stroke="#7C2D12" strokeWidth="1.5" />
                <text x={cx} y={cy + 5} fontSize="14" fill="#FFFFFF" textAnchor="middle" fontWeight="bold">+</text>
              </g>
            ))}
          </svg>
        </div>

        {/* Right: Key Properties Explained */}
        <div className="m3-diagram-box">
          <h5 className="m3-box-label">4 Sifat Unik yang Dijelaskan Lautan Elektron</h5>
          <div className="m3-property-cards">
            <div className="m3-prop-item">
              <span className="m3-prop-badge">⚡ Konduktor Listrik</span>
              <p>Elektron bebas bergerak terarah seketika saat ada beda potensial (kabel tembaga).</p>
            </div>
            <div className="m3-prop-item">
              <span className="m3-prop-badge">🍳 Konduktor Panas</span>
              <p>Energi kinetik partikel diteruskan kilat lewat tabrakan elektron bebas (panci aluminium).</p>
            </div>
            <div className="m3-prop-item">
              <span className="m3-prop-badge">🔨 Dapat Ditempa (Maleabel)</span>
              <p>Dipalu pipih tanpa retak; lautan elektron segera mengalir membungkus lapisan kation yang bergeser.</p>
            </div>
            <div className="m3-prop-item">
              <span className="m3-prop-badge">🧵 Dapat Ditarik Kawat (Duktil)</span>
              <p>Struktur logam lentur ditarik menjadi benang kawat ultra tipis tanpa putus.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const MetallicApplicationsGallery: React.FC = () => {
  const metals = [
    {
      title: 'Tembaga (Cu)',
      category: 'Logam Murni Konduktor',
      highlight: 'Kabel Listrik & Motor Listrik',
      desc: 'Konduktivitas listrik nomor dua tertinggi di bumi setelah perak, sangat duktil ditarik menjadi kawat kawat tipis kabel PLN.',
      icon: '🔌',
      color: '#EA580C',
    },
    {
      title: 'Aluminium (Al)',
      category: 'Logam Ringan & Tahan Karat',
      highlight: 'Wajan, Panci & Badan Pesawat',
      desc: 'Massa jenisnya hanya 2,7 g/cm³ (sepertiga besi), menghantarkan panas masakan secara merata dan membentuk lapisan pelindung anti-karat alami.',
      icon: '🍳',
      color: '#64748B',
    },
    {
      title: 'Baja (Paduan Fe + C)',
      category: 'Paduan Logam Super Kokoh',
      highlight: 'Rangka Gedung & Jembatan',
      desc: 'Atom karbon kecil menyusup ke sela kisi besi (larutan padat interstisial), mengunci pergeseran lapisan sehingga baja puluhan kali lebih kuat dari besi murni.',
      icon: '🏗️',
      color: '#334155',
    },
    {
      title: 'Kuningan (Paduan Cu + Zn)',
      category: 'Paduan Logam Akustik & Estetik',
      highlight: 'Alat Musik Tiup & Gagang Pintu',
      desc: 'Paduan tembaga dan seng berwarna kuning keemasan mewah, mudah dibentuk menjadi selongsong trompet bersuara merdu dan tahan gesekan.',
      icon: '🎺',
      color: '#CA8A04',
    },
  ];

  return (
    <div className="m3-gallery-wrap">
      <h4 className="m3-gallery-heading">Pemanfaatan Logam &amp; Paduannya di Sekitar Kita</h4>
      <div className="m3-apps-grid">
        {metals.map((m, idx) => (
          <div key={idx} className="m3-app-card" style={{ borderTopColor: m.color }}>
            <div className="m3-app-icon-wrap" style={{ background: `${m.color}15` }}>
              <span className="m3-app-icon">{m.icon}</span>
            </div>
            <h5 className="m3-app-title">{m.title}</h5>
            <span className="m3-app-role" style={{ color: m.color }}>{m.highlight}</span>
            <p className="m3-app-desc">{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// =============================================================================
// SUBMATERI 5: MENGAPA SETIAP BAHAN MEMILIKI KEGUNAAN BERBEDA? (DUEL MATERIAL)
// =============================================================================
export const MaterialComparisonGallery: React.FC = () => {
  return (
    <div className="m3-duel-section">
      <div className="m3-section-badge">
        <span>⚖️ KOMPARASI MATERIAL EDUKATIF</span>
      </div>
      <h4 className="m3-visual-title">3 Duel Material: Menghubungkan Struktur, Sifat &amp; Kegunaan</h4>
      <p className="m3-visual-sub">
        Setiap bahan dipilih manusia bukan karena kebetulan, melainkan karena kecocokan sifat mikroskopis partikelnya dengan fungsi yang dibutuhkan:
      </p>

      {/* Duel 1: Tembaga vs Plastik */}
      <div className="m3-duel-card">
        <div className="m3-duel-header">
          <span className="m3-duel-num">DUEL 1</span>
          <h5>Tembaga vs. Plastik (Satu Kabel, Dua Fungsi Vital)</h5>
        </div>
        <div className="m3-duel-body">
          <div className="m3-duel-side side-a">
            <div className="m3-side-tag tag-copper">⚡ Tembaga (Cu) — Logam</div>
            <p><strong>Struktur:</strong> Lautan elektron valensi bebas mengalir.</p>
            <p><strong>Sifat:</strong> Konduktor listrik dan panas yang luar biasa.</p>
            <p><strong>Kegunaan:</strong> Sebagai <em>inti penghantar</em> arus kabel listrik.</p>
          </div>
          <div className="m3-duel-vs">VS</div>
          <div className="m3-duel-side side-b">
            <div className="m3-side-tag tag-plastic">🛡️ Plastik (PVC) — Polimer Kovalen</div>
            <p><strong>Struktur:</strong> Rantai kovalen panjang; semua elektron terkunci dalam ikatan.</p>
            <p><strong>Sifat:</strong> Isolator listrik sejati (hambatan listrik sangat besar).</p>
            <p><strong>Kegunaan:</strong> Sebagai <em>selubung pelindung</em> agar aman dipegang manusia.</p>
          </div>
        </div>
      </div>

      {/* Duel 2: Intan vs Grafit */}
      <div className="m3-duel-card">
        <div className="m3-duel-header">
          <span className="m3-duel-num">DUEL 2</span>
          <h5>Intan vs. Grafit (Sama Karbon, Nasib Bertolak Belakang)</h5>
        </div>
        <div className="m3-duel-body">
          <div className="m3-duel-side side-a">
            <div className="m3-side-tag tag-diamond">💎 Intan — Kovalen Jaringan 3D</div>
            <p><strong>Struktur:</strong> Tiap atom C mengikat 4 atom C secara tetrahedral kaku.</p>
            <p><strong>Sifat:</strong> Sangat keras (skala 10 Mohs), titik leleh &gt; 3500°C, isolator.</p>
            <p><strong>Kegunaan:</strong> Permata mahkota berkilau dan mata bor pemotong beton.</p>
          </div>
          <div className="m3-duel-vs">VS</div>
          <div className="m3-duel-side side-b">
            <div className="m3-side-tag tag-graphite">✏️ Grafit — Kovalen Berlapis 2D</div>
            <p><strong>Struktur:</strong> Cincin heksagonal bertumpuk; antar-lapisan mudah menggelincir.</p>
            <p><strong>Sifat:</strong> Lunak dan licin, menghantarkan listrik (ada elektron terdelokalisasi).</p>
            <p><strong>Kegunaan:</strong> Isi pensil tulis, pelumas mesin, dan elektroda baterai.</p>
          </div>
        </div>
      </div>

      {/* Duel 3: Aluminium vs Baja */}
      <div className="m3-duel-card">
        <div className="m3-duel-header">
          <span className="m3-duel-num">DUEL 3</span>
          <h5>Aluminium vs. Baja (Pilihan Logam Ringan vs. Kekuatan Masif)</h5>
        </div>
        <div className="m3-duel-body">
          <div className="m3-duel-side side-a">
            <div className="m3-side-tag tag-al">🍳 Aluminium (Al) — Logam Ringan</div>
            <p><strong>Struktur:</strong> Kisi kristal logam berkepadatan rendah (2,7 g/cm³).</p>
            <p><strong>Sifat:</strong> Sangat ringan, konduktor panas cepat, tidak mudah berkarat.</p>
            <p><strong>Kegunaan:</strong> Wajan memasak, kaleng minuman, dan kerangka badan pesawat terbang.</p>
          </div>
          <div className="m3-duel-vs">VS</div>
          <div className="m3-duel-side side-b">
            <div className="m3-side-tag tag-steel">🏗️ Baja (Fe + C) — Paduan Besi Kuat</div>
            <p><strong>Struktur:</strong> Kisi besi yang dikunci oleh atom karbon interstisial.</p>
            <p><strong>Sifat:</strong> Sangat tangguh, daya tahan beban masif, tahan benturan keras.</p>
            <p><strong>Kegunaan:</strong> Rangka gedung pencakar langit, tiang jembatan, dan rel kereta api.</p>
          </div>
        </div>
      </div>

      {/* Alur Konsep Logika Kimia */}
      <div className="m3-flow-card">
        <h5>🧠 Rangkuman Alur Berpikir Kimia Material</h5>
        <div className="m3-flow-steps">
          <div className="m3-flow-step">
            <span className="m3-step-number">1</span>
            <strong>STRUKTUR &amp; IKATAN</strong>
            <small>Ion, kovalen, atau logam mengatur interaksi antaratom</small>
          </div>
          <div className="m3-flow-arrow">➔</div>
          <div className="m3-flow-step">
            <span className="m3-step-number">2</span>
            <strong>SIFAT FISIK</strong>
            <small>Keras/lunak, hantar listrik, hantar panas, titik didih</small>
          </div>
          <div className="m3-flow-arrow">➔</div>
          <div className="m3-flow-step">
            <span className="m3-step-number">3</span>
            <strong>KEGUNAAN BAHAN</strong>
            <small>Kabel, panci, perhiasan, obat, konstruksi bangunan</small>
          </div>
        </div>
      </div>
    </div>
  );
};
