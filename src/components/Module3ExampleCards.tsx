import React from 'react';

export interface ExampleCardItem {
  id: string;
  title: string;
  formula?: string;
  bondType: string;
  description: string;
  relationship: string;
  svg: React.ReactNode;
}

// =============================================================================
// SUBMATERI 1: IKATAN KIMIA DI SEKITAR KITA (4 CONTOH)
// =============================================================================
const SUBMODULE_1_EXAMPLES: ExampleCardItem[] = [
  {
    id: 'sub1-nacl',
    title: 'Garam Dapur',
    formula: 'NaCl (Natrium Klorida)',
    bondType: 'Ikatan Ionik',
    description:
      'Garam dapur tersusun atas ion natrium (Na⁺) dan ion klorida (Cl⁻). Di dalam dapur, garam digunakan sebagai penyedap rasa sekaligus pengawet alami karena dapat menarik air dari mikroorganisme.',
    relationship:
      'Gaya tarik elektrostatik kation dan anion membentuk kisi kristal padat teratur bertitik leleh tinggi yang mudah larut dalam air membentuk ion-ion bebas.',
    svg: (
      <svg viewBox="0 0 260 160" className="m3-card-svg" aria-label="Garam Dapur dan Kristal NaCl">
        <defs>
          <linearGradient id="s1-shaker" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E2E8F0" />
          </linearGradient>
          <linearGradient id="s1-cap" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>
          <radialGradient id="s1-na" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#F472B6" />
            <stop offset="100%" stopColor="#DB2777" />
          </radialGradient>
          <radialGradient id="s1-cl" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="100%" stopColor="#059669" />
          </radialGradient>
        </defs>
        <rect width="260" height="160" fill="#FFF5F9" rx="14" />
        {/* Shaker */}
        <g transform="translate(15, 10)">
          <path d="M50,38 L85,38 L95,115 L40,115 Z" fill="url(#s1-shaker)" stroke="#94A3B8" strokeWidth="2" />
          <path d="M54,24 L81,24 L85,38 L50,38 Z" fill="url(#s1-cap)" stroke="#64748B" strokeWidth="2" />
          <circle cx="61" cy="30" r="2" fill="#475569" />
          <circle cx="68" cy="30" r="2" fill="#475569" />
          <circle cx="75" cy="30" r="2" fill="#475569" />
          {/* Salt heap */}
          <ellipse cx="105" cy="120" rx="35" ry="12" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1.5" />
          <path d="M80,120 Q105,102 130,120 Z" fill="#FFFFFF" />
          {/* Falling grains */}
          <rect x="70" y="55" width="4" height="4" fill="#94A3B8" rx="1" />
          <rect x="85" y="70" width="5" height="5" fill="#94A3B8" rx="1" />
          <rect x="75" y="88" width="4" height="4" fill="#94A3B8" rx="1" />
        </g>
        {/* Crystal Lattice Micro-Callout */}
        <g transform="translate(160, 20)">
          <rect x="0" y="0" width="85" height="118" rx="10" fill="#FFFFFF" stroke="#FCE7F3" strokeWidth="1.5" />
          <text x="42.5" y="16" fontSize="8" fill="#D91D78" textAnchor="middle" fontWeight="800">
            KISI KRISTAL ION
          </text>
          {/* Lattice lines */}
          <line x1="20" y1="40" x2="65" y2="40" stroke="#E2E8F0" strokeWidth="2" />
          <line x1="20" y1="85" x2="65" y2="85" stroke="#E2E8F0" strokeWidth="2" />
          <line x1="20" y1="40" x2="20" y2="85" stroke="#E2E8F0" strokeWidth="2" />
          <line x1="65" y1="40" x2="65" y2="85" stroke="#E2E8F0" strokeWidth="2" />
          {/* Ions */}
          <circle cx="20" cy="40" r="8" fill="url(#s1-na)" />
          <text x="20" y="43" fontSize="8" fill="#FFFFFF" textAnchor="middle" fontWeight="bold">Na⁺</text>
          <circle cx="65" cy="40" r="11" fill="url(#s1-cl)" />
          <text x="65" y="44" fontSize="9" fill="#FFFFFF" textAnchor="middle" fontWeight="bold">Cl⁻</text>
          <circle cx="20" cy="85" r="11" fill="url(#s1-cl)" />
          <text x="20" y="89" fontSize="9" fill="#FFFFFF" textAnchor="middle" fontWeight="bold">Cl⁻</text>
          <circle cx="65" cy="85" r="8" fill="url(#s1-na)" />
          <text x="65" y="88" fontSize="8" fill="#FFFFFF" textAnchor="middle" fontWeight="bold">Na⁺</text>
          <text x="42.5" y="108" fontSize="7.5" fill="#475569" textAnchor="middle">Gaya Elektrostatik</text>
        </g>
      </svg>
    ),
  },
  {
    id: 'sub1-h2o',
    title: 'Air Minum',
    formula: 'H₂O (Dihidrogen Monoksida)',
    bondType: 'Kovalen Polar',
    description:
      'Tersusun atas molekul-molekul dengan ikatan kovalen polar antara atom hidrogen dan oksigen. Pasangan elektron digunakan bersama secara asimetris sehingga molekul memiliki kutub muatan.',
    relationship:
      'Struktur bengkok (104.5°) dan ikatan hidrogen antarmolekul membuat air berbentuk cair pada suhu ruang dan menjadi pelarut universal bagi zat-zat polar.',
    svg: (
      <svg viewBox="0 0 260 160" className="m3-card-svg" aria-label="Gelas Air dan Molekul Polar H2O">
        <defs>
          <linearGradient id="s1-water" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E0F2FE" />
            <stop offset="100%" stopColor="#0284C7" stopOpacity="0.75" />
          </linearGradient>
          <radialGradient id="s1-o" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#F87171" />
            <stop offset="100%" stopColor="#DC2626" />
          </radialGradient>
        </defs>
        <rect width="260" height="160" fill="#F0F9FF" rx="14" />
        {/* Glass with Water */}
        <g transform="translate(20, 15)">
          <path d="M40,20 L95,20 L87,118 L48,118 Z" fill="#FFFFFF" stroke="#38BDF8" strokeWidth="2" opacity="0.9" />
          <path d="M42,45 Q67,40 93,45 L86,116 L49,116 Z" fill="url(#s1-water)" />
          <circle cx="65" cy="80" r="4" fill="#FFFFFF" opacity="0.6" />
          <circle cx="75" cy="65" r="3" fill="#FFFFFF" opacity="0.7" />
          <circle cx="58" cy="95" r="2.5" fill="#FFFFFF" opacity="0.5" />
        </g>
        {/* Polar Molecule Callout */}
        <g transform="translate(135, 18)">
          <rect x="0" y="0" width="112" height="122" rx="10" fill="#FFFFFF" stroke="#BAE6FD" strokeWidth="1.5" />
          <text x="56" y="16" fontSize="8" fill="#0284C7" textAnchor="middle" fontWeight="800">
            STRUKTUR BENGKOK (POLAR)
          </text>
          {/* Central Oxygen Atom */}
          <circle cx="56" cy="55" r="18" fill="url(#s1-o)" stroke="#B91C1C" strokeWidth="1.5" />
          <text x="56" y="60" fontSize="12" fill="#FFFFFF" textAnchor="middle" fontWeight="bold">O</text>
          <text x="56" y="30" fontSize="8.5" fill="#DC2626" textAnchor="middle" fontWeight="bold">δ⁻</text>
          {/* Bonds */}
          <line x1="43" y1="65" x2="25" y2="85" stroke="#64748B" strokeWidth="4" strokeLinecap="round" />
          <line x1="69" y1="65" x2="87" y2="85" stroke="#64748B" strokeWidth="4" strokeLinecap="round" />
          {/* Hydrogens */}
          <circle cx="22" cy="88" r="11" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="2" />
          <text x="22" y="92" fontSize="9" fill="#0F172A" textAnchor="middle" fontWeight="bold">H</text>
          <text x="14" y="108" fontSize="8" fill="#0284C7" fontWeight="bold">δ⁺</text>
          <circle cx="90" cy="88" r="11" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="2" />
          <text x="90" y="92" fontSize="9" fill="#0F172A" textAnchor="middle" fontWeight="bold">H</text>
          <text x="96" y="108" fontSize="8" fill="#0284C7" fontWeight="bold">δ⁺</text>
          <text x="56" y="112" fontSize="8" fill="#0369A1" textAnchor="middle" fontWeight="700">Sudut 104.5°</text>
        </g>
      </svg>
    ),
  },
  {
    id: 'sub1-cu',
    title: 'Kabel Tembaga',
    formula: 'Cu (Tembaga Murni)',
    bondType: 'Ikatan Logam',
    description:
      'Tembaga memiliki ikatan logam dengan model lautan elektron. Elektron-elektron valensi tidak terikat pada satu inti atom, melainkan bergerak bebas di antara kation-kation tembaga.',
    relationship:
      'Elektron yang bebas bergerak memungkinkan tembaga menghantarkan arus listrik dengan sangat baik serta mudah ditarik menjadi kawat kabel tipis tanpa putus.',
    svg: (
      <svg viewBox="0 0 260 160" className="m3-card-svg" aria-label="Kabel Listrik Tembaga dan Kawat Konduktor">
        <defs>
          <linearGradient id="s1-cu-wire" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FED7AA" />
            <stop offset="40%" stopColor="#F97316" />
            <stop offset="100%" stopColor="#9A3412" />
          </linearGradient>
          <linearGradient id="s1-sheath" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#334155" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
        </defs>
        <rect width="260" height="160" fill="#FFF7ED" rx="14" />
        {/* Cable Sheath */}
        <g transform="translate(15, 20)">
          <rect x="10" y="42" width="95" height="46" rx="8" fill="url(#s1-sheath)" stroke="#1E293B" strokeWidth="2" />
          <ellipse cx="10" cy="65" rx="8" ry="23" fill="#0F172A" />
          {/* Strands of shiny copper wires */}
          <path d="M105,48 C140,42 165,52 205,48" stroke="url(#s1-cu-wire)" strokeWidth="6.5" strokeLinecap="round" fill="none" />
          <path d="M105,59 C145,55 170,64 215,62" stroke="url(#s1-cu-wire)" strokeWidth="6.5" strokeLinecap="round" fill="none" />
          <path d="M105,71 C138,69 168,78 208,76" stroke="url(#s1-cu-wire)" strokeWidth="6.5" strokeLinecap="round" fill="none" />
          <path d="M105,82 C135,84 165,90 200,88" stroke="url(#s1-cu-wire)" strokeWidth="6.5" strokeLinecap="round" fill="none" />
          {/* Conduction sparkle */}
          <polygon points="215,42 220,48 226,42 222,50 230,54 221,56 220,64 216,55 208,54 214,49" fill="#F59E0B" />
          <polygon points="218,70 222,74 227,69 224,76 231,79 223,81 222,87 219,80 212,79 217,75" fill="#FBBF24" />
          {/* Callout pill */}
          <rect x="25" y="105" width="185" height="24" rx="12" fill="#FFFFFF" stroke="#FED7AA" strokeWidth="1.5" />
          <text x="117.5" y="121" fontSize="9.5" fill="#EA580C" textAnchor="middle" fontWeight="bold">
            ⚡ Lautan Elektron Valensi Bebas Mengalir
          </text>
        </g>
      </svg>
    ),
  },
  {
    id: 'sub1-plastic',
    title: 'Plastik Pelapis Kabel',
    formula: 'Polimer Kovalen (PVC / PE)',
    bondType: 'Kovalen Polimer',
    description:
      'Sebagian besar tersusun atas rantai panjang molekul yang disebut polimer dengan ikatan kovalen kuat. Plastik dimanfaatkan sebagai selubung luar kabel karena bersifat isolator.',
    relationship:
      'Seluruh elektron valensi terikat kokoh di dalam ikatan kovalen rantai karbon polimer sehingga tidak ada muatan bebas; aman disentuh dan mencegah sengatan listrik.',
    svg: (
      <svg viewBox="0 0 260 160" className="m3-card-svg" aria-label="Plastik Pelapis Isolator Kabel">
        <defs>
          <linearGradient id="s1-pvc-blue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
          <linearGradient id="s1-pvc-green" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FACC15" />
            <stop offset="100%" stopColor="#65A30D" />
          </linearGradient>
          <linearGradient id="s1-pvc-red" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FB7185" />
            <stop offset="100%" stopColor="#E11D48" />
          </linearGradient>
        </defs>
        <rect width="260" height="160" fill="#FDF2F8" rx="14" />
        <g transform="translate(18, 15)">
          {/* Blue Insulated Wire */}
          <rect x="20" y="16" width="140" height="22" rx="6" fill="url(#s1-pvc-blue)" stroke="#0369A1" strokeWidth="1.5" />
          <rect x="160" y="22" width="35" height="10" rx="2" fill="#EA580C" />
          <text x="80" y="31" fontSize="8" fill="#FFFFFF" fontWeight="bold">Netral (N)</text>
          {/* Green-Yellow Ground Wire */}
          <rect x="20" y="46" width="150" height="22" rx="6" fill="url(#s1-pvc-green)" stroke="#4D7C0F" strokeWidth="1.5" />
          <rect x="170" y="52" width="30" height="10" rx="2" fill="#EA580C" />
          <text x="80" y="61" fontSize="8" fill="#FFFFFF" fontWeight="bold">Arde / Ground (PE)</text>
          {/* Red Live Wire */}
          <rect x="20" y="76" width="160" height="22" rx="6" fill="url(#s1-pvc-red)" stroke="#9F1239" strokeWidth="1.5" />
          <rect x="180" y="82" width="25" height="10" rx="2" fill="#EA580C" />
          <text x="80" y="91" fontSize="8" fill="#FFFFFF" fontWeight="bold">Fasa / Live (L)</text>
          {/* Shield Badge */}
          <g transform="translate(30, 110)">
            <rect x="0" y="0" width="170" height="22" rx="11" fill="#FFFFFF" stroke="#FCE7F3" strokeWidth="1.5" />
            <text x="85" y="15" fontSize="8.5" fill="#BE185D" textAnchor="middle" fontWeight="bold">
              🛡️ Isolator Fleksibel (Anti-Sengatan Listrik)
            </text>
          </g>
        </g>
      </svg>
    ),
  },
];

// =============================================================================
// SUBMATERI 2: PENERAPAN IKATAN ION (4 CONTOH)
// =============================================================================
const SUBMODULE_2_EXAMPLES: ExampleCardItem[] = [
  {
    id: 'sub2-nacl',
    title: 'A. Natrium Klorida (NaCl) — Garam Dapur',
    formula: 'NaCl',
    bondType: 'Ikatan Ionik',
    description:
      'NaCl dimanfaatkan sebagai penyedap makanan dan juga dalam proses pengawetan, misalnya pembuatan ikan asin. Dalam konsentrasi tinggi, garam dapat mengurangi ketersediaan air bagi mikroorganisme sehingga pertumbuhannya terhambat. NaCl memiliki struktur kristal dengan gaya tarik elektrostatik yang kuat antara ion Na⁺ dan Cl⁻, sehingga titik lelehnya relatif tinggi.',
    relationship:
      'Gaya tarik elektrostatik kation Na⁺ dan anion Cl⁻ membentuk kisi kristal kokoh bertitik leleh tinggi (801°C). Efek osmotik ionik menarik air dari mikroba sehingga menghambat pembusukan makanan.',
    svg: (
      <svg viewBox="0 0 260 160" className="m3-card-svg" aria-label="Garam Dapur dan Pengawetan Ikan Asin">
        <defs>
          <linearGradient id="s2-fish" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FDE68A" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
          <linearGradient id="s2-bowl" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F5D0C5" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
        </defs>
        <rect width="260" height="160" fill="#FFFBEB" rx="14" />
        {/* Bowl of Coarse Sea Salt */}
        <g transform="translate(15, 20)">
          <path d="M20,65 Q55,95 90,65 L85,45 Q55,35 25,45 Z" fill="#D97706" stroke="#B45309" strokeWidth="2" />
          <ellipse cx="55" cy="46" rx="32" ry="12" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
          {/* Salt mounds */}
          <circle cx="50" cy="42" r="3" fill="#94A3B8" />
          <circle cx="62" cy="44" r="3" fill="#94A3B8" />
          <circle cx="42" cy="48" r="2.5" fill="#94A3B8" />
          <circle cx="68" cy="48" r="2.5" fill="#94A3B8" />
          <text x="55" y="82" fontSize="8" fill="#FFFFFF" textAnchor="middle" fontWeight="bold">Garam Dapur</text>
        </g>
        {/* Preserved Fish (Ikan Asin) */}
        <g transform="translate(115, 25)">
          <path d="M20,50 Q60,20 100,50 Q60,80 20,50 Z" fill="url(#s2-fish)" stroke="#92400E" strokeWidth="2" />
          <polygon points="100,50 125,32 125,68" fill="#D97706" stroke="#92400E" strokeWidth="1.5" />
          <circle cx="35" cy="48" r="3" fill="#000000" />
          <path d="M45,45 Q65,42 75,50" stroke="#92400E" strokeWidth="1.5" fill="none" />
          <path d="M48,55 Q68,52 78,60" stroke="#92400E" strokeWidth="1.5" fill="none" />
          {/* Salt crystals on fish */}
          <rect x="52" y="38" width="4" height="4" fill="#FFFFFF" stroke="#94A3B8" rx="1" />
          <rect x="68" y="42" width="4" height="4" fill="#FFFFFF" stroke="#94A3B8" rx="1" />
          <rect x="85" y="52" width="4" height="4" fill="#FFFFFF" stroke="#94A3B8" rx="1" />
          <rect x="60" y="60" width="4" height="4" fill="#FFFFFF" stroke="#94A3B8" rx="1" />
        </g>
        <g transform="translate(45, 118)">
          <rect x="0" y="0" width="170" height="24" rx="12" fill="#FFFFFF" stroke="#FDE68A" strokeWidth="1.5" />
          <text x="85" y="16" fontSize="8.5" fill="#B45309" textAnchor="middle" fontWeight="bold">
            Tekanan Osmotik Menghambat Mikroba
          </text>
        </g>
      </svg>
    ),
  },
  {
    id: 'sub2-caco3',
    title: 'B. Kalsium Karbonat (CaCO₃) — Batu Kapur & Marmer',
    formula: 'CaCO₃',
    bondType: 'Ikatan Ionik & Kovalen Poliatomik',
    description:
      'CaCO₃ tersusun atas ion Ca²⁺ dan ion karbonat CO₃²⁻ (di dalam ion karbonat terdapat ikatan kovalen antara atom karbon dan oksigen). Kalsium karbonat dimanfaatkan sebagai bahan baku pembuatan semen, kapur, serta berbagai produk industri konstruksi.',
    relationship:
      'Ikatan ionik kuat antara Ca²⁺ dan anion CO₃²⁻ menghasilkan material mineral yang sangat kokoh, padat, tahan cuaca, serta tidak mudah larut dalam air netral.',
    svg: (
      <svg viewBox="0 0 260 160" className="m3-card-svg" aria-label="Batu Kapur, Marmer dan Konstruksi Semen">
        <defs>
          <linearGradient id="s2-marble" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#F1F5F9" />
            <stop offset="100%" stopColor="#CBD5E1" />
          </linearGradient>
        </defs>
        <rect width="260" height="160" fill="#F8FAFC" rx="14" />
        {/* Classical Marble Pillar */}
        <g transform="translate(25, 15)">
          <rect x="15" y="18" width="40" height="10" rx="2" fill="#94A3B8" />
          <rect x="18" y="28" width="34" height="80" fill="url(#s2-marble)" stroke="#94A3B8" strokeWidth="1.5" />
          <line x1="25" y1="28" x2="25" y2="108" stroke="#E2E8F0" strokeWidth="2" />
          <line x1="35" y1="28" x2="35" y2="108" stroke="#E2E8F0" strokeWidth="2" />
          <line x1="45" y1="28" x2="45" y2="108" stroke="#E2E8F0" strokeWidth="2" />
          <rect x="12" y="108" width="46" height="12" rx="2" fill="#94A3B8" />
          <text x="35" y="132" fontSize="7.5" fill="#475569" textAnchor="middle" fontWeight="bold">Pilar Marmer</text>
        </g>
        {/* Cement trowel and limestone rock */}
        <g transform="translate(105, 20)">
          {/* Limestone rock */}
          <polygon points="20,70 45,35 85,45 105,80 75,105 30,95" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
          <text x="60" y="70" fontSize="8.5" fill="#475569" textAnchor="middle" fontWeight="bold">Batu Kapur</text>
          {/* Trowel with cement */}
          <polygon points="90,40 135,25 120,65" fill="#CBD5E1" stroke="#64748B" strokeWidth="1.5" />
          <line x1="120" y1="50" x2="140" y2="70" stroke="#92400E" strokeWidth="3" strokeLinecap="round" />
          <text x="95" y="125" fontSize="8" fill="#059669" textAnchor="middle" fontWeight="bold">
            Bahan Baku Semen &amp; Konstruksi
          </text>
        </g>
      </svg>
    ),
  },
  {
    id: 'sub2-cacl2',
    title: 'C. Kalsium Klorida (CaCl₂) — Bahan Pengering',
    formula: 'CaCl₂',
    bondType: 'Ikatan Ionik Higroskopis',
    description:
      'Kalsium klorida dapat digunakan sebagai bahan pengering karena mampu menyerap uap air dari lingkungan. Senyawa ini bersifat higroskopis, bahkan dapat menyerap cukup banyak air hingga membentuk larutan, sehingga dimanfaatkan dalam produk penyerap kelembapan.',
    relationship:
      'Entalpi hidrasi ion Ca²⁺ yang sangat tinggi menarik molekul air dari udara lembap secara spontan, mencairkan butiran garam menjadi larutan air garam jenuh.',
    svg: (
      <svg viewBox="0 0 260 160" className="m3-card-svg" aria-label="Kotak Penyerap Kelembapan CaCl2">
        <defs>
          <linearGradient id="s2-box" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E0F2FE" />
            <stop offset="100%" stopColor="#BAE6FD" />
          </linearGradient>
        </defs>
        <rect width="260" height="160" fill="#F0F9FF" rx="14" />
        {/* Dehumidifier Box (Thirsty Hippo style) */}
        <g transform="translate(50, 15)">
          <rect x="15" y="20" width="130" height="95" rx="12" fill="url(#s2-box)" stroke="#0284C7" strokeWidth="2" />
          {/* Perforated top cover */}
          <rect x="10" y="15" width="140" height="15" rx="5" fill="#0284C7" />
          <circle cx="30" cy="22" r="2.5" fill="#FFFFFF" />
          <circle cx="50" cy="22" r="2.5" fill="#FFFFFF" />
          <circle cx="70" cy="22" r="2.5" fill="#FFFFFF" />
          <circle cx="90" cy="22" r="2.5" fill="#FFFFFF" />
          <circle cx="110" cy="22" r="2.5" fill="#FFFFFF" />
          <circle cx="130" cy="22" r="2.5" fill="#FFFFFF" />
          {/* Upper mesh plate */}
          <line x1="15" y1="65" x2="145" y2="65" stroke="#0284C7" strokeWidth="1.5" strokeDasharray="4,3" />
          {/* CaCl2 white pellets on mesh */}
          {[
            [30, 48], [42, 45], [55, 52], [68, 46], [82, 50], [95, 46], [108, 52], [122, 47],
            [36, 56], [50, 58], [64, 57], [78, 59], [92, 57], [106, 58], [118, 55]
          ].map(([x, y], idx) => (
            <circle key={idx} cx={x} cy={y} r="4.5" fill="#FFFFFF" stroke="#94A3B8" strokeWidth="1" />
          ))}
          {/* Trapped water collection below */}
          <path d="M16,85 Q80,80 144,85 L144,113 Q80,116 16,113 Z" fill="#38BDF8" opacity="0.65" />
          {/* Water drips */}
          <circle cx="65" cy="74" r="2" fill="#0284C7" />
          <circle cx="95" cy="77" r="2" fill="#0284C7" />
          <text x="80" y="103" fontSize="8" fill="#0369A1" textAnchor="middle" fontWeight="bold">
            Air Terperangkap (Larutan CaCl₂)
          </text>
        </g>
        <text x="130" y="142" fontSize="8.5" fill="#0369A1" textAnchor="middle" fontWeight="bold">
          📦 Produk Penyerap Lembap Higroskopis
        </text>
      </svg>
    ),
  },
  {
    id: 'sub2-nahco3',
    title: 'D. Natrium Bikarbonat (NaHCO₃) — Soda Kue',
    formula: 'NaHCO₃',
    bondType: 'Ikatan Ionik & Pengembang Roti',
    description:
      'Ketika bereaksi dengan bahan yang bersifat asam atau mengalami pemanasan, NaHCO₃ dapat menghasilkan gas karbon dioksida (CO₂). Gas tersebut membentuk gelembung yang membantu adonan mengembang.',
    relationship:
      'Penguraian termal ion hidrogen karbonat menghasilkan gelembung gas kovalen CO₂ yang terperangkap pada adonan kue, menciptakan tekstur empuk berserat.',
    svg: (
      <svg viewBox="0 0 260 160" className="m3-card-svg" aria-label="Soda Kue dan Adonan Roti Mengembang">
        <defs>
          <linearGradient id="s2-bread" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
        </defs>
        <rect width="260" height="160" fill="#FFFBEB" rx="14" />
        {/* Baking soda box */}
        <g transform="translate(20, 20)">
          <rect x="10" y="20" width="60" height="85" rx="6" fill="#F59E0B" stroke="#B45309" strokeWidth="2" />
          <rect x="15" y="30" width="50" height="30" fill="#FFFFFF" rx="4" />
          <text x="40" y="44" fontSize="8" fill="#D97706" textAnchor="middle" fontWeight="bold">SODA</text>
          <text x="40" y="54" fontSize="7.5" fill="#D97706" textAnchor="middle" fontWeight="bold">KUE</text>
          <text x="40" y="85" fontSize="7" fill="#FFFFFF" textAnchor="middle" fontWeight="bold">NaHCO₃</text>
        </g>
        {/* Fluffy rising bread / muffin */}
        <g transform="translate(105, 20)">
          {/* Muffin cup */}
          <path d="M40,75 L80,75 L90,110 L30,110 Z" fill="#FDE68A" stroke="#D97706" strokeWidth="1.5" />
          {/* Fluffy dome */}
          <path d="M25,75 Q15,40 60,35 Q105,40 95,75 Z" fill="url(#s2-bread)" stroke="#92400E" strokeWidth="2" />
          {/* Gas bubble pores */}
          <circle cx="45" cy="55" r="4" fill="#FEF3C7" opacity="0.8" />
          <circle cx="65" cy="48" r="5" fill="#FEF3C7" opacity="0.8" />
          <circle cx="78" cy="62" r="3.5" fill="#FEF3C7" opacity="0.8" />
          <circle cx="55" cy="68" r="4.5" fill="#FEF3C7" opacity="0.8" />
          {/* Rising CO2 bubbles */}
          <circle cx="50" cy="22" r="3.5" fill="#D97706" opacity="0.5" />
          <circle cx="70" cy="18" r="4.5" fill="#D97706" opacity="0.6" />
          <text x="82" y="20" fontSize="7" fill="#92400E" fontWeight="bold">CO₂ ↑</text>
        </g>
        <text x="130" y="142" fontSize="8.5" fill="#B45309" textAnchor="middle" fontWeight="bold">
          🧁 Gelembung Gas CO₂ Membantu Adonan Mengembang Empuk
        </text>
      </svg>
    ),
  },
];

// =============================================================================
// SUBMATERI 3: PENERAPAN IKATAN KOVALEN (5 CONTOH)
// =============================================================================
const SUBMODULE_3_EXAMPLES: ExampleCardItem[] = [
  {
    id: 'sub3-h2o',
    title: 'A. Air (H₂O) — Pelarut dalam Kehidupan Sehari-hari',
    formula: 'H₂O',
    bondType: 'Kovalen Polar',
    description:
      'Molekul air berbentuk bengkok dan bersifat polar karena distribusi muatan listrik tidak merata. Sifat polar membuat air dapat melarutkan banyak zat polar dan senyawa ion (seperti garam dan gula), tetapi tidak melarutkan minyak yang bersifat nonpolar.',
    relationship:
      'Momen dipol molekul air yang permanen berinteraksi elektrostatik dengan kation-anion garam (hidrasi ionik) dan membentuk ikatan hidrogen dengan molekul polar gula.',
    svg: (
      <svg viewBox="0 0 260 160" className="m3-card-svg" aria-label="Air Melarutkan Zat Polar">
        <defs>
          <linearGradient id="s3-sol" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#BAE6FD" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>
        </defs>
        <rect width="260" height="160" fill="#F0F9FF" rx="14" />
        {/* Beaker with dissolving crystals */}
        <g transform="translate(20, 15)">
          <path d="M35,20 L35,115 Q35,120 40,120 L85,120 Q90,120 90,115 L90,20" fill="none" stroke="#64748B" strokeWidth="2.5" />
          <path d="M37,45 Q62,42 88,45 L88,118 L37,118 Z" fill="url(#s3-sol)" opacity="0.8" />
          {/* Dissolving particles */}
          <circle cx="50" cy="100" r="3" fill="#D91D78" />
          <circle cx="65" cy="85" r="3" fill="#059669" />
          <circle cx="75" cy="105" r="3" fill="#D91D78" />
          <circle cx="60" cy="110" r="3" fill="#059669" />
        </g>
        {/* Polar molecule with dipoles */}
        <g transform="translate(130, 20)">
          <rect x="0" y="0" width="115" height="115" rx="10" fill="#FFFFFF" stroke="#BAE6FD" strokeWidth="1.5" />
          <text x="57.5" y="16" fontSize="8" fill="#0284C7" textAnchor="middle" fontWeight="bold">BENTUK BENGKOK (104.5°)</text>
          <circle cx="57.5" cy="50" r="16" fill="#EF4444" stroke="#B91C1C" strokeWidth="1.5" />
          <text x="57.5" y="55" fontSize="11" fill="#FFFFFF" textAnchor="middle" fontWeight="bold">O</text>
          <text x="57.5" y="28" fontSize="8.5" fill="#DC2626" textAnchor="middle" fontWeight="bold">δ⁻</text>
          <line x1="46" y1="60" x2="30" y2="80" stroke="#64748B" strokeWidth="3" />
          <line x1="69" y1="60" x2="85" y2="80" stroke="#64748B" strokeWidth="3" />
          <circle cx="28" cy="82" r="10" fill="#F1F5F9" stroke="#64748B" strokeWidth="1.5" />
          <text x="28" y="86" fontSize="8" fill="#0F172A" textAnchor="middle" fontWeight="bold">H</text>
          <text x="18" y="98" fontSize="8" fill="#0284C7" fontWeight="bold">δ⁺</text>
          <circle cx="87" cy="82" r="10" fill="#F1F5F9" stroke="#64748B" strokeWidth="1.5" />
          <text x="87" y="86" fontSize="8" fill="#0F172A" textAnchor="middle" fontWeight="bold">H</text>
          <text x="96" y="98" fontSize="8" fill="#0284C7" fontWeight="bold">δ⁺</text>
        </g>
        <text x="130" y="148" fontSize="8.5" fill="#0284C7" textAnchor="middle" fontWeight="bold">
          💧 Pelarut Polar Universal bagi Garam &amp; Gula
        </text>
      </svg>
    ),
  },
  {
    id: 'sub3-co2',
    title: 'B. Karbon Dioksida (CO₂) — Minuman Berkarbonasi & APAR',
    formula: 'CO₂',
    bondType: 'Kovalen Nonpolar Linier',
    description:
      'Tersusun atas satu atom karbon dan dua atom oksigen (O=C=O); menghasilkan gelembung pada minuman berkarbonasi serta mengurangi konsentrasi oksigen di sekitar sumber api pada alat pemadam api.',
    relationship:
      'Struktur linier simetris menghasilkan molekul nonpolar berwujud gas. CO₂ dapat larut di bawah tekanan (minuman soda) dan karena lebih berat dari udara, gasnya dapat menyelimuti dan memadamkan api.',
    svg: (
      <svg viewBox="0 0 260 160" className="m3-card-svg" aria-label="Minuman Soda dan Tabung Pemadam APAR CO2">
        <defs>
          <linearGradient id="s3-apar" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="50%" stopColor="#DC2626" />
            <stop offset="100%" stopColor="#991B1B" />
          </linearGradient>
        </defs>
        <rect width="260" height="160" fill="#FFF1F2" rx="14" />
        {/* Soda Glass */}
        <g transform="translate(20, 20)">
          <path d="M25,25 L65,25 L58,110 L32,110 Z" fill="#FEF2F2" stroke="#FDA4AF" strokeWidth="1.5" />
          <path d="M27,45 L63,45 L58,108 L32,108 Z" fill="#991B1B" opacity="0.75" />
          <circle cx="40" cy="90" r="2.5" fill="#FFFFFF" opacity="0.8" />
          <circle cx="50" cy="75" r="3" fill="#FFFFFF" opacity="0.8" />
          <circle cx="42" cy="60" r="2.5" fill="#FFFFFF" opacity="0.8" />
          <circle cx="48" cy="48" r="3.5" fill="#FFFFFF" opacity="0.8" />
          <text x="45" y="125" fontSize="7.5" fill="#BE123C" textAnchor="middle" fontWeight="bold">Minuman Soda</text>
        </g>
        {/* Fire Extinguisher (APAR) */}
        <g transform="translate(115, 15)">
          {/* Cylinder */}
          <rect x="40" y="30" width="36" height="75" rx="12" fill="url(#s3-apar)" stroke="#7F1D1D" strokeWidth="2" />
          {/* Neck & Valve */}
          <rect x="52" y="18" width="12" height="12" fill="#1E293B" />
          <path d="M46,16 L70,16 L65,10 L51,10 Z" fill="#475569" />
          {/* Horn Nozzle */}
          <path d="M40,24 C25,20 18,35 15,50" fill="none" stroke="#1E293B" strokeWidth="4" />
          <polygon points="12,45 5,42 10,65 18,60" fill="#1E293B" />
          {/* Extinguishing cloud */}
          <ellipse cx="10" cy="85" rx="14" ry="8" fill="#E2E8F0" opacity="0.75" />
          <text x="58" y="70" fontSize="8" fill="#FFFFFF" textAnchor="middle" fontWeight="bold">CO₂</text>
          <text x="58" y="125" fontSize="7.5" fill="#991B1B" textAnchor="middle" fontWeight="bold">Tabung APAR</text>
        </g>
        <text x="130" y="148" fontSize="8.5" fill="#BE123C" textAnchor="middle" fontWeight="bold">
          🫧 Gelembung Soda Menggelitik &amp; Selimut Pemadam Api
        </text>
      </svg>
    ),
  },
  {
    id: 'sub3-ch4',
    title: 'C. Metana (CH₄) — Komponen Gas Alam',
    formula: 'CH₄',
    bondType: 'Kovalen Nonpolar Tetrahedral',
    description:
      'Tersusun atas satu atom karbon dan empat atom hidrogen; digunakan sebagai bahan bakar memasak dan menghasilkan karbon dioksida, air, serta energi kalor saat dibakar sempurna.',
    relationship:
      'Empat ikatan kovalen tunggal C-H simetris nonpolar melepaskan energi pembakaran bersih yang sangat tinggi tanpa menyisakan banyak jelaga karbon pada panci memasak.',
    svg: (
      <svg viewBox="0 0 260 160" className="m3-card-svg" aria-label="Kompor Gas Api Biru dan Molekul Metana CH4">
        <defs>
          <radialGradient id="s3-flame" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </radialGradient>
        </defs>
        <rect width="260" height="160" fill="#F0FDF4" rx="14" />
        {/* Gas Burner with Blue Flame Ring */}
        <g transform="translate(15, 20)">
          <ellipse cx="55" cy="85" rx="42" ry="18" fill="#334155" stroke="#0F172A" strokeWidth="2" />
          <ellipse cx="55" cy="83" rx="30" ry="12" fill="#1E293B" />
          {/* Blue flames around ring */}
          {[15, 30, 45, 60, 75, 90].map((deg, i) => {
            const rad = (deg * Math.PI) / 180;
            const fx = 55 + 26 * Math.cos(rad);
            const fy = 80 - 10 * Math.sin(rad);
            return (
              <path
                key={i}
                d={`M${fx - 4},${fy} Q${fx},${fy - 24} ${fx + 4},${fy} Z`}
                fill="url(#s3-flame)"
              />
            );
          })}
          <text x="55" y="125" fontSize="7.5" fill="#047857" textAnchor="middle" fontWeight="bold">
            Api Biru Bersih (Gas Alam)
          </text>
        </g>
        {/* Tetrahedral CH4 Molecule */}
        <g transform="translate(130, 18)">
          <rect x="0" y="0" width="112" height="118" rx="10" fill="#FFFFFF" stroke="#BBF7D0" strokeWidth="1.5" />
          <text x="56" y="16" fontSize="7.5" fill="#047857" textAnchor="middle" fontWeight="bold">
            TETRAHEDRAL (CH₄)
          </text>
          {/* Central C */}
          <circle cx="56" cy="62" r="14" fill="#334155" stroke="#0F172A" strokeWidth="1.5" />
          <text x="56" y="66" fontSize="10" fill="#FFFFFF" textAnchor="middle" fontWeight="bold">C</text>
          {/* 4 H atoms */}
          <line x1="56" y1="48" x2="56" y2="30" stroke="#64748B" strokeWidth="2.5" />
          <circle cx="56" cy="26" r="8" fill="#F1F5F9" stroke="#64748B" strokeWidth="1.5" />
          <text x="56" y="29" fontSize="7" fill="#0F172A" textAnchor="middle" fontWeight="bold">H</text>

          <line x1="44" y1="68" x2="26" y2="86" stroke="#64748B" strokeWidth="2.5" />
          <circle cx="22" cy="90" r="8" fill="#F1F5F9" stroke="#64748B" strokeWidth="1.5" />
          <text x="22" y="93" fontSize="7" fill="#0F172A" textAnchor="middle" fontWeight="bold">H</text>

          <line x1="68" y1="68" x2="86" y2="86" stroke="#64748B" strokeWidth="2.5" />
          <circle cx="90" cy="90" r="8" fill="#F1F5F9" stroke="#64748B" strokeWidth="1.5" />
          <text x="90" y="93" fontSize="7" fill="#0F172A" textAnchor="middle" fontWeight="bold">H</text>

          <line x1="64" y1="56" x2="78" y2="48" stroke="#64748B" strokeWidth="2" strokeDasharray="2,2" />
          <circle cx="84" cy="45" r="7" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5" />
          <text x="84" y="48" fontSize="6.5" fill="#0F172A" textAnchor="middle" fontWeight="bold">H</text>
          <text x="56" y="110" fontSize="7" fill="#475569" textAnchor="middle">Sudut 109.5°</text>
        </g>
        <text x="130" y="148" fontSize="8.5" fill="#047857" textAnchor="middle" fontWeight="bold">
          🔥 Bahan Bakar Memasak Berenergi Tinggi
        </text>
      </svg>
    ),
  },
  {
    id: 'sub3-diamond',
    title: 'D. Intan — Struktur Jaringan 3D Sangat Keras',
    formula: 'C (Alotrop Karbon 3D)',
    bondType: 'Kovalen Jaringan 3D',
    description:
      'Struktur jaringan 3D sangat keras untuk perhiasan dan alat pemotong. Setiap atom karbon berikatan kovalen dengan empat atom karbon lainnya dalam susunan tetrahedral kaku tanpa elektron bebas, menghasilkan kekerasan tertinggi di alam.',
    relationship:
      'Ikatan kovalen tetrahedral 3D yang kontinu ke segala arah membuat intan tahan tekanan dahsyat (skala Mohs 10) dan memancarkan kilau indeks bias tinggi.',
    svg: (
      <svg viewBox="0 0 260 160" className="m3-card-svg" aria-label="Batu Intan Berkilau dan Kisi Tetrahedral 3D">
        <defs>
          <linearGradient id="s3-dia-gem" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="35%" stopColor="#E0F2FE" />
            <stop offset="70%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
        </defs>
        <rect width="260" height="160" fill="#F0F9FF" rx="14" />
        {/* Faceted Diamond Gemstone */}
        <g transform="translate(20, 20)">
          <polygon points="40,25 70,25 88,48 55,95 22,48" fill="url(#s3-dia-gem)" stroke="#0284C7" strokeWidth="2" />
          {/* Facet lines */}
          <polygon points="40,25 70,25 78,48 32,48" fill="#FFFFFF" opacity="0.6" />
          <line x1="32" y1="48" x2="55" y2="95" stroke="#0369A1" strokeWidth="1.5" />
          <line x1="78" y1="48" x2="55" y2="95" stroke="#0369A1" strokeWidth="1.5" />
          {/* Sparkles */}
          <polygon points="20,20 24,24 28,20 24,28 20,20" fill="#38BDF8" />
          <polygon points="85,30 88,34 92,30 88,38 85,30" fill="#38BDF8" />
          <text x="55" y="122" fontSize="7.5" fill="#0284C7" textAnchor="middle" fontWeight="bold">
            Permata &amp; Mata Bor
          </text>
        </g>
        {/* 3D Tetrahedral Atomic Lattice */}
        <g transform="translate(125, 18)">
          <rect x="0" y="0" width="120" height="118" rx="10" fill="#FFFFFF" stroke="#BAE6FD" strokeWidth="1.5" />
          <text x="60" y="15" fontSize="7.5" fill="#0284C7" textAnchor="middle" fontWeight="bold">
            JARINGAN TETRAHEDRAL 3D
          </text>
          {/* Bonds */}
          <line x1="60" y1="58" x2="60" y2="28" stroke="#38BDF8" strokeWidth="3" />
          <line x1="60" y1="58" x2="28" y2="85" stroke="#38BDF8" strokeWidth="3" />
          <line x1="60" y1="58" x2="92" y2="85" stroke="#38BDF8" strokeWidth="3" />
          <line x1="60" y1="58" x2="75" y2="70" stroke="#38BDF8" strokeWidth="2" strokeDasharray="2,2" />
          {/* Outer carbons */}
          <circle cx="60" cy="28" r="8" fill="#38BDF8" stroke="#0284C7" strokeWidth="1.5" />
          <circle cx="28" cy="85" r="8" fill="#38BDF8" stroke="#0284C7" strokeWidth="1.5" />
          <circle cx="92" cy="85" r="8" fill="#38BDF8" stroke="#0284C7" strokeWidth="1.5" />
          <circle cx="75" cy="70" r="6" fill="#7DD3FC" stroke="#0284C7" strokeWidth="1" />
          {/* Central Carbon */}
          <circle cx="60" cy="58" r="11" fill="#0284C7" stroke="#0369A1" strokeWidth="2" />
          <text x="60" y="62" fontSize="9" fill="#FFFFFF" textAnchor="middle" fontWeight="bold">C</text>
          <text x="60" y="108" fontSize="7" fill="#475569" textAnchor="middle">Semua 4 elektron terikat kaku</text>
        </g>
        <text x="130" y="148" fontSize="8.5" fill="#0369A1" textAnchor="middle" fontWeight="bold">
          💎 Material Terkeras di Alam (Skala Mohs 10)
        </text>
      </svg>
    ),
  },
  {
    id: 'sub3-graphite',
    title: 'E. Grafit — Struktur Berlapis Licin & Konduktor Listrik',
    formula: 'C (Alotrop Karbon 2D)',
    bondType: 'Kovalen Berlapis 2D',
    description:
      'Struktur berlapis yang licin dan menghantarkan listrik untuk isi pensil dan elektroda. Setiap atom karbon berikatan dengan tiga atom karbon lainnya dalam lapisan datar heksagonal; gaya antar-lapisan lemah membuatnya mudah terkelupas pada kertas, sementara elektron ke-4 bebas bergerak menghantarkan listrik.',
    relationship:
      'Gaya Van der Waals antar-lapisan yang lemah membuat grafit licin (lapisan bergeser pada kertas), sementara elektron terdelokalisasi pada orbital pi menjadikannya konduktor listrik.',
    svg: (
      <svg viewBox="0 0 260 160" className="m3-card-svg" aria-label="Isi Pensil Grafit dan Struktur Heksagonal Berlapis">
        <defs>
          <linearGradient id="s3-pencil" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </linearGradient>
        </defs>
        <rect width="260" height="160" fill="#F8FAFC" rx="14" />
        {/* Pencil sketching on paper */}
        <g transform="translate(15, 20)">
          {/* Wooden pencil body */}
          <polygon points="50,15 65,15 45,75 35,75" fill="url(#s3-pencil)" stroke="#B45309" strokeWidth="1.5" />
          {/* Wood sharpened cone */}
          <polygon points="45,75 35,75 30,95 35,95" fill="#FDE68A" stroke="#D97706" strokeWidth="1" />
          {/* Graphite Lead Tip */}
          <polygon points="32,90 35,90 30,98" fill="#1E293B" stroke="#000000" strokeWidth="1" />
          {/* Sketched line */}
          <path d="M30,98 Q45,102 70,95 T100,105" fill="none" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" />
          <text x="55" y="122" fontSize="7.5" fill="#334155" textAnchor="middle" fontWeight="bold">
            Isi Pensil &amp; Elektroda
          </text>
        </g>
        {/* 2D Layered Hexagonal Structure */}
        <g transform="translate(125, 18)">
          <rect x="0" y="0" width="120" height="118" rx="10" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
          <text x="60" y="15" fontSize="7.5" fill="#334155" textAnchor="middle" fontWeight="bold">
            LAPISAN 2D HEKSAGONAL
          </text>
          {/* Top Layer */}
          <polygon points="30,35 48,27 68,35 68,52 48,60 30,52" fill="none" stroke="#475569" strokeWidth="2" />
          <polygon points="68,35 86,27 104,35 104,52 86,60 68,52" fill="none" stroke="#475569" strokeWidth="2" />
          {/* Weak Van der Waals dashed arrows */}
          <line x1="48" y1="62" x2="48" y2="78" stroke="#F43F5E" strokeWidth="1.5" strokeDasharray="2,2" />
          <line x1="86" y1="62" x2="86" y2="78" stroke="#F43F5E" strokeWidth="1.5" strokeDasharray="2,2" />
          <text x="68" y="73" fontSize="6.5" fill="#E11D48" textAnchor="middle">Gaya Lemah</text>
          {/* Bottom Layer */}
          <polygon points="30,88 48,80 68,88 68,105 48,113 30,105" fill="none" stroke="#475569" strokeWidth="2" />
          <polygon points="68,88 86,80 104,88 104,105 86,113 68,105" fill="none" stroke="#475569" strokeWidth="2" />
        </g>
        <text x="130" y="148" fontSize="8.5" fill="#334155" textAnchor="middle" fontWeight="bold">
          ✏️ Lapisan Licin Bergeser &amp; Elektron Bebas Mengalir
        </text>
      </svg>
    ),
  },
];

// =============================================================================
// SUBMATERI 4: PENERAPAN IKATAN LOGAM (4 CONTOH)
// =============================================================================
const SUBMODULE_4_EXAMPLES: ExampleCardItem[] = [
  {
    id: 'sub4-cu',
    title: 'A. Tembaga (Cu) — Penghantar Listrik',
    formula: 'Cu',
    bondType: 'Ikatan Logam Konduktor',
    description:
      'Memiliki daya hantar listrik yang baik dan mudah ditarik menjadi kawat sehingga banyak digunakan sebagai bahan inti kabel listrik.',
    relationship:
      'Lautan elektron valensi yang bergerak cepat tanpa hambatan menghasilkan konduktivitas listrik luar biasa, dan susunan kation lentur ditarik menjadi kawat (duktil).',
    svg: (
      <svg viewBox="0 0 260 160" className="m3-card-svg" aria-label="Gulungan Kawat Tembaga dan Kabel Listrik">
        <defs>
          <linearGradient id="s4-cu" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FED7AA" />
            <stop offset="50%" stopColor="#EA580C" />
            <stop offset="100%" stopColor="#9A3412" />
          </linearGradient>
        </defs>
        <rect width="260" height="160" fill="#FFF7ED" rx="14" />
        {/* Wire spool */}
        <g transform="translate(25, 20)">
          <ellipse cx="45" cy="40" rx="30" ry="12" fill="#7C2D12" />
          <path d="M15,40 L15,80 Q45,95 75,80 L75,40 Z" fill="#9A3412" />
          {/* Copper winding coils */}
          <ellipse cx="45" cy="50" rx="28" ry="10" fill="url(#s4-cu)" />
          <ellipse cx="45" cy="62" rx="28" ry="10" fill="url(#s4-cu)" />
          <ellipse cx="45" cy="74" rx="28" ry="10" fill="url(#s4-cu)" />
          <ellipse cx="45" cy="40" rx="26" ry="9" fill="#EA580C" stroke="#7C2D12" strokeWidth="1" />
          <circle cx="45" cy="40" r="10" fill="#431407" />
          <text x="45" y="112" fontSize="7.5" fill="#C2410C" textAnchor="middle" fontWeight="bold">
            Gulungan Kawat Cu
          </text>
        </g>
        {/* Electrical cable cross section */}
        <g transform="translate(125, 22)">
          <rect x="0" y="0" width="112" height="96" rx="10" fill="#FFFFFF" stroke="#FED7AA" strokeWidth="1.5" />
          <text x="56" y="16" fontSize="7.5" fill="#C2410C" textAnchor="middle" fontWeight="bold">
            INTI SERABUT KABEL
          </text>
          {/* Black sheath */}
          <circle cx="56" cy="54" r="28" fill="#1E293B" stroke="#0F172A" strokeWidth="1.5" />
          {/* Copper strands */}
          {[
            [56, 44], [48, 50], [64, 50], [48, 60], [64, 60], [56, 66], [56, 54]
          ].map(([x, y], idx) => (
            <circle key={idx} cx={x} cy={y} r="4.5" fill="url(#s4-cu)" stroke="#7C2D12" strokeWidth="0.8" />
          ))}
          <text x="56" y="90" fontSize="7" fill="#475569" textAnchor="middle">Duktilitas Tinggi</text>
        </g>
        <text x="130" y="145" fontSize="8.5" fill="#C2410C" textAnchor="middle" fontWeight="bold">
          ⚡ Inti Kawat Kabel Penghantar Listrik PLN
        </text>
      </svg>
    ),
  },
  {
    id: 'sub4-al',
    title: 'B. Aluminium (Al) — Peralatan Rumah Tangga & Kendaraan',
    formula: 'Al',
    bondType: 'Ikatan Logam Ringan',
    description:
      'Memiliki massa jenis relatif rendah, cukup mudah dibentuk, dan dapat menghantarkan panas sehingga cocok untuk panci, wajan, bagian kendaraan, dan komponen pesawat.',
    relationship:
      'Hantaran panas kilat melalui getaran elektron dan kisi kristal dipadukan dengan massa jenis ringan (2,7 g/cm³) serta lapisan oksida pasivasi tahan karat alami.',
    svg: (
      <svg viewBox="0 0 260 160" className="m3-card-svg" aria-label="Panci Masak Aluminium dan Sayap Pesawat Terbang">
        <defs>
          <linearGradient id="s4-al-metal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>
        </defs>
        <rect width="260" height="160" fill="#F8FAFC" rx="14" />
        {/* Cooking Pot / Saucepan */}
        <g transform="translate(20, 25)">
          {/* Pot body */}
          <path d="M25,45 L85,45 L80,95 L30,95 Z" fill="url(#s4-al-metal)" stroke="#64748B" strokeWidth="2" />
          <ellipse cx="55" cy="45" rx="30" ry="8" fill="#CBD5E1" stroke="#64748B" strokeWidth="1.5" />
          {/* Lid handle */}
          <path d="M22,43 Q55,25 88,43 Z" fill="url(#s4-al-metal)" stroke="#64748B" strokeWidth="1.5" />
          <circle cx="55" cy="27" r="4.5" fill="#1E293B" />
          {/* Long handle */}
          <rect x="83" y="52" width="30" height="6" rx="2" fill="#1E293B" />
          <text x="55" y="115" fontSize="7.5" fill="#475569" textAnchor="middle" fontWeight="bold">
            Panci &amp; Wajan Masak
          </text>
        </g>
        {/* Airplane Fuselage / Wing */}
        <g transform="translate(130, 25)">
          <path d="M10,65 Q50,30 95,38 L105,48 L10,75 Z" fill="url(#s4-al-metal)" stroke="#475569" strokeWidth="1.5" />
          <circle cx="45" cy="50" r="3" fill="#38BDF8" />
          <circle cx="60" cy="48" r="3" fill="#38BDF8" />
          <circle cx="75" cy="46" r="3" fill="#38BDF8" />
          {/* Engine pod below wing */}
          <rect x="35" y="65" width="22" height="10" rx="4" fill="#64748B" />
          <text x="60" y="115" fontSize="7.5" fill="#0284C7" textAnchor="middle" fontWeight="bold">
            Komponen Pesawat Terbang
          </text>
        </g>
        <text x="130" y="145" fontSize="8.5" fill="#334155" textAnchor="middle" fontWeight="bold">
          🍳 Ringan, Konduktor Panas Cepat &amp; Tahan Karat
        </text>
      </svg>
    ),
  },
  {
    id: 'sub4-steel',
    title: 'C. Baja — Bahan Konstruksi',
    formula: 'Paduan Fe + C',
    bondType: 'Paduan Logam Interstisial',
    description:
      'Paduan besi dan karbon yang memiliki kekuatan baik sehingga banyak digunakan dalam konstruksi gedung, jembatan, dan rangka bangunan.',
    relationship:
      'Atom-atom karbon kecil menyusup ke sela-sela kisi kristal besi, mengunci pergeseran lapisan kation sehingga baja menjadi puluhan kali lebih kokoh dibanding besi murni.',
    svg: (
      <svg viewBox="0 0 260 160" className="m3-card-svg" aria-label="Balok Baja I-Beam dan Konstruksi Gedung">
        <defs>
          <linearGradient id="s4-steel-beam" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#94A3B8" />
            <stop offset="50%" stopColor="#475569" />
            <stop offset="100%" stopColor="#1E293B" />
          </linearGradient>
        </defs>
        <rect width="260" height="160" fill="#F1F5F9" rx="14" />
        {/* Steel I-Beams (Crossed) */}
        <g transform="translate(25, 20)">
          {/* I-beam front view */}
          <path
            d="M20,25 L65,25 L65,33 L47,33 L47,77 L65,77 L65,85 L20,85 L20,77 L37,77 L37,33 L20,33 Z"
            fill="url(#s4-steel-beam)"
            stroke="#0F172A"
            strokeWidth="2"
          />
          {/* 3D depth */}
          <path d="M65,25 L95,15 L95,23 L65,33 Z" fill="#64748B" />
          <path d="M65,77 L95,67 L95,75 L65,85 Z" fill="#64748B" />
          <text x="45" y="112" fontSize="7.5" fill="#334155" textAnchor="middle" fontWeight="bold">
            Balok Profil I-Beam
          </text>
        </g>
        {/* Bridge Truss / Building Frame */}
        <g transform="translate(125, 20)">
          <line x1="10" y1="85" x2="105" y2="85" stroke="#334155" strokeWidth="4" />
          <line x1="20" y1="35" x2="95" y2="35" stroke="#334155" strokeWidth="4" />
          {/* Diagonal braces */}
          <line x1="20" y1="85" x2="35" y2="35" stroke="#475569" strokeWidth="3" />
          <line x1="35" y1="35" x2="55" y2="85" stroke="#475569" strokeWidth="3" />
          <line x1="55" y1="85" x2="75" y2="35" stroke="#475569" strokeWidth="3" />
          <line x1="75" y1="35" x2="95" y2="85" stroke="#475569" strokeWidth="3" />
          {/* Rivets */}
          <circle cx="35" cy="35" r="3" fill="#F8FAFC" />
          <circle cx="55" cy="85" r="3" fill="#F8FAFC" />
          <circle cx="75" cy="35" r="3" fill="#F8FAFC" />
          <text x="58" y="112" fontSize="7.5" fill="#1E293B" textAnchor="middle" fontWeight="bold">
            Rangka Gedung &amp; Jembatan
          </text>
        </g>
        <text x="130" y="145" fontSize="8.5" fill="#1E293B" textAnchor="middle" fontWeight="bold">
          🏗️ Paduan Super Kokoh Penahan Beban Masif
        </text>
      </svg>
    ),
  },
  {
    id: 'sub4-brass',
    title: 'D. Kuningan (Cu dan Zn) — Perlengkapan & Alat Musik',
    formula: 'Paduan Cu + Zn',
    bondType: 'Paduan Logam Substitusional',
    description:
      'Paduan tembaga dan seng berwarna kuning keemasan yang dapat dibentuk menjadi gagang pintu, komponen alat musik, dan perlengkapan rumah tangga.',
    relationship:
      'Substitusi sebagian atom tembaga dengan seng menghasilkan warna kilau emas mewah, ketahanan gesekan mekanis tanpa berkarat, dan resonansi akustik merdu.',
    svg: (
      <svg viewBox="0 0 260 160" className="m3-card-svg" aria-label="Gagang Pintu Kuningan dan Terompet Musik">
        <defs>
          <linearGradient id="s4-brass" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FEF08A" />
            <stop offset="50%" stopColor="#EAB308" />
            <stop offset="100%" stopColor="#A16207" />
          </linearGradient>
        </defs>
        <rect width="260" height="160" fill="#FEFCE8" rx="14" />
        {/* Brass Door Handle */}
        <g transform="translate(20, 20)">
          {/* Escutcheon plate */}
          <rect x="35" y="15" width="22" height="75" rx="10" fill="url(#s4-brass)" stroke="#854D0E" strokeWidth="1.5" />
          {/* Keyhole */}
          <circle cx="46" cy="65" r="3" fill="#422006" />
          <polygon points="44,65 48,65 49,75 43,75" fill="#422006" />
          {/* Rotating lever handle */}
          <circle cx="46" cy="35" r="7" fill="#CA8A04" stroke="#854D0E" strokeWidth="1.5" />
          <path d="M46,32 L95,30 Q105,32 105,38 Q105,44 95,44 L46,40 Z" fill="url(#s4-brass)" stroke="#854D0E" strokeWidth="1.5" />
          <text x="55" y="112" fontSize="7.5" fill="#A16207" textAnchor="middle" fontWeight="bold">
            Gagang Pintu Estetik
          </text>
        </g>
        {/* Brass Trumpet */}
        <g transform="translate(125, 20)">
          {/* Tube */}
          <path d="M15,40 L70,40 L95,20 L95,60 L70,45 L15,45 Z" fill="url(#s4-brass)" stroke="#854D0E" strokeWidth="1.5" />
          {/* Valves */}
          <rect x="35" y="24" width="6" height="16" fill="#CA8A04" stroke="#854D0E" strokeWidth="1" />
          <rect x="45" y="24" width="6" height="16" fill="#CA8A04" stroke="#854D0E" strokeWidth="1" />
          <rect x="55" y="24" width="6" height="16" fill="#CA8A04" stroke="#854D0E" strokeWidth="1" />
          {/* Music notes */}
          <text x="80" y="22" fontSize="12" fill="#CA8A04">♪</text>
          <text x="96" y="32" fontSize="14" fill="#EAB308">♫</text>
          <text x="60" y="112" fontSize="7.5" fill="#854D0E" textAnchor="middle" fontWeight="bold">
            Alat Musik Tiup (Trompet)
          </text>
        </g>
        <text x="130" y="145" fontSize="8.5" fill="#854D0E" textAnchor="middle" fontWeight="bold">
          🎺 Paduan Tembaga-Seng Berwarna Emas &amp; Bersuara Merdu
        </text>
      </svg>
    ),
  },
];

// =============================================================================
// MAIN COMPONENT EXPORT
// =============================================================================
export const SubmoduleExamplesVisualGrid: React.FC<{ submoduleId: string }> = ({
  submoduleId,
}) => {
  let items: ExampleCardItem[] = [];

  switch (submoduleId) {
    case 'sub-3-1':
      items = SUBMODULE_1_EXAMPLES;
      break;
    case 'sub-3-2':
      items = SUBMODULE_2_EXAMPLES;
      break;
    case 'sub-3-3':
      items = SUBMODULE_3_EXAMPLES;
      break;
    case 'sub-3-4':
      items = SUBMODULE_4_EXAMPLES;
      break;
    default:
      items = [];
      break;
  }

  if (items.length === 0) return null;

  return (
    <div className="m3-example-cards-grid">
      {items.map((item) => (
        <article key={item.id} className="m3-example-card">
          {/* Image container */}
          <div className="m3-card-media-wrap">{item.svg}</div>

          {/* Content info */}
          <div className="m3-card-inner-body">
            <div className="m3-card-meta-row">
              <span className="m3-card-bond-pill">{item.bondType}</span>
              {item.formula && <span className="m3-card-formula-badge">{item.formula}</span>}
            </div>

            <h4 className="m3-card-example-title">{item.title}</h4>

            <p className="m3-card-explanation-text">{item.description}</p>

            {/* Takeaway connection */}
            <div className="m3-card-takeaway-box">
              <div className="m3-takeaway-header">
                <span className="m3-takeaway-icon" aria-hidden="true">💡</span>
                <strong>Hubungan Ikatan, Sifat &amp; Kegunaan:</strong>
              </div>
              <p className="m3-takeaway-content">{item.relationship}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default SubmoduleExamplesVisualGrid;
