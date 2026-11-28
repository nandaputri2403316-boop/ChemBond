import React, { useState } from 'react';
import type { Page } from './Navbar';
import { NaClMoleculeHero } from './NaClMoleculeHero';
import './SimulasiPage.css';

interface SimulasiPageProps {
  onNavigate: (page: Page) => void;
}

interface SimPreset {
  id: string;
  name: string;
  url: string;
  description: string;
  author: string;
}

interface VseprShape {
  id: string;
  name: string;
  formula: string;
  domains: number;
  pei: number;
  peb: number;
  angle: string;
  example: string;
  description: string;
  phetTip: string;
}

interface VseprQuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface IonItem {
  symbol: string;
  name: string;
  charge: number;
  isPolyatomic?: boolean;
}

const PRESET_SIMULATIONS: SimPreset[] = [
  {
    id: 'molecule-shapes',
    name: 'Bentuk Geometri Molekul (PhET)',
    url: 'https://phet.colorado.edu/sims/html/molecule-shapes/latest/molecule-shapes_en.html',
    description: 'Eksplorasi bentuk 3D molekul, pengaruh pasangan elektron ikatan (PEI) dan bebas (PEB), serta sudut ikatan berdasarkan teori VSEPR.',
    author: 'PhET Interactive Simulations, University of Colorado Boulder',
  },
  {
    id: 'build-an-atom',
    name: 'Membangun Atom (PhET)',
    url: 'https://phet.colorado.edu/sims/html/build-an-atom/latest/build-an-atom_en.html',
    description: 'Menyusun proton, neutron, dan elektron pada kulit atom untuk memahami nomor atom, massa atom, muatan ion, dan kestabilan inti.',
    author: 'PhET Interactive Simulations, University of Colorado Boulder',
  },
  {
    id: 'molecule-polarity',
    name: 'Kepolaran Molekul (PhET)',
    url: 'https://phet.colorado.edu/sims/html/molecule-polarity/latest/molecule-polarity_en.html',
    description: 'Memahami bagaimana perbedaan keelektronegatifan atom dan bentuk geometri menghasilkan momen dipol dan kepolaran molekul.',
    author: 'PhET Interactive Simulations, University of Colorado Boulder',
  },
  {
    id: 'states-of-matter',
    name: 'Wujud Zat & Kisi Partikel (PhET)',
    url: 'https://phet.colorado.edu/sims/html/states-of-matter-basics/latest/states-of-matter-basics_en.html',
    description: 'Membandingkan susunan partikel pada fase padat kristal, lelehan cair, dan gas serta pengaruh suhu dan gaya tarik antarpartikel.',
    author: 'PhET Interactive Simulations, University of Colorado Boulder',
  },
  {
    id: 'reactants-products',
    name: 'Reaktan & Produk Reaksi (PhET)',
    url: 'https://phet.colorado.edu/sims/html/reactants-products-and-leftovers/latest/reactants-products-and-leftovers_en.html',
    description: 'Visualisasi kuantitatif reaksi kimia, pereaksi pembatas, serta hukum kekekalan massa partikel.',
    author: 'PhET Interactive Simulations, University of Colorado Boulder',
  },
];

const VSEPR_SHAPES_DATA: VseprShape[] = [
  {
    id: 'linear',
    name: 'Linear',
    formula: 'AX₂',
    domains: 2,
    pei: 2,
    peb: 0,
    angle: '180°',
    example: 'CO₂, BeCl₂, HCN',
    description: 'Dua domain elektron tersusun saling bertolak belakang 180° dari atom pusat untuk meminimalkan gaya tolak antar-elektron.',
    phetTip: 'Pada PhET: Tambahkan 2 ikatan tunggal atau 2 ikatan rangkap pada atom pusat tanpa menambahkan Lone Pair.',
  },
  {
    id: 'trigonal-planar',
    name: 'Trigonal Planar',
    formula: 'AX₃',
    domains: 3,
    pei: 3,
    peb: 0,
    angle: '120°',
    example: 'BF₃, SO₃, CO₃²⁻',
    description: 'Tiga domain elektron mengarah ke sudut-sudut segitiga sama sisi pada satu bidang datar dengan sudut ikatan 120° simetris.',
    phetTip: 'Pada PhET: Tambahkan 3 atom ikatan tanpa Lone Pair, lalu amati molekul berada pada satu bidang datar.',
  },
  {
    id: 'bent-3',
    name: 'Bengkok (Bentuk V)',
    formula: 'AX₂E',
    domains: 3,
    pei: 2,
    peb: 1,
    angle: '<120° (~119°)',
    example: 'SO₂, O₃, NO₂⁻',
    description: 'Tolakan satu Pasangan Elektron Bebas (PEB) lebih kuat daripada PEI sehingga mendesak kedua ikatan menjadi lebih sempit dari 120°.',
    phetTip: 'Pada PhET: Dari Trigonal Planar, ganti 1 ikatan dengan 1 Lone Pair dan perhatikan sudut ikatan menyusut.',
  },
  {
    id: 'tetrahedral',
    name: 'Tetrahedral',
    formula: 'AX₄',
    domains: 4,
    pei: 4,
    peb: 0,
    angle: '109.5°',
    example: 'CH₄, CCl₄, NH₄⁺',
    description: 'Empat domain ikatan simetris mengarah ke 4 titik sudut limas segitiga (tetrahedron) ruang tiga dimensi yang sangat stabil.',
    phetTip: 'Pada PhET: Tambahkan 4 ikatan tunggal, centang "Show Bond Angles" dan putar secara 3D.',
  },
  {
    id: 'trigonal-pyramidal',
    name: 'Trigonal Piramida',
    formula: 'AX₃E',
    domains: 4,
    pei: 3,
    peb: 1,
    angle: '107.3°',
    example: 'NH₃, PCl₃, H₃O⁺',
    description: 'Satu PEB di puncak tetrahedron mendesak ketiga ikatan N–H ke bawah sehingga sudut ikatan menyempit dari 109.5° menjadi 107.3°.',
    phetTip: 'Pada PhET: Buka tab "Real Molecules" dan pilih molekul Ammonia (NH₃) untuk melihat bentuk aslinya.',
  },
  {
    id: 'bent-4',
    name: 'Bengkok / Bentuk V (Air)',
    formula: 'AX₂E₂',
    domains: 4,
    pei: 2,
    peb: 2,
    angle: '104.5°',
    example: 'H₂O, H₂S, OF₂',
    description: 'Dua PEB pada atom Oksigen memberikan tolakan paling kuat (PEB–PEB > PEB–PEI > PEI–PEI), menekan sudut ikatan H–O–H menjadi 104.5°.',
    phetTip: 'Pada PhET: Buka tab "Real Molecules", pilih Water (H₂O), centang "Molecule Geometry" dan "Show Bond Angles".',
  },
  {
    id: 'trigonal-bipyramidal',
    name: 'Trigonal Bipiramida',
    formula: 'AX₅',
    domains: 5,
    pei: 5,
    peb: 0,
    angle: '90° & 120°',
    example: 'PCl₅, PF₅',
    description: 'Memiliki dua posisi berbeda: 3 ikatan ekuatorial (sudut 120°) dan 2 ikatan aksial tegak lurus (sudut 90°). Pengecualian kaidah oktet (10 elektron).',
    phetTip: 'Pada PhET: Tambahkan 5 ikatan pada atom pusat dan amati perbedaan posisi ekuatorial vs aksial.',
  },
  {
    id: 'seesaw',
    name: 'Jungkat-jungkit (Seesaw)',
    formula: 'AX₄E',
    domains: 5,
    pei: 4,
    peb: 1,
    angle: '<90° & <120°',
    example: 'SF₄, TeCl₄',
    description: 'Satu PEB menempati posisi ekuatorial untuk meminimalkan tolakan, menghasilkan geometri menyerupai papan jungkat-jungkit.',
    phetTip: 'Pada PhET: Tambahkan 4 ikatan dan 1 Lone Pair pada geometri 5 domain.',
  },
  {
    id: 't-shaped',
    name: 'Bentuk T',
    formula: 'AX₃E₂',
    domains: 5,
    pei: 3,
    peb: 2,
    angle: '<90° (~87.5°)',
    example: 'ClF₃, BrF₃',
    description: 'Dua PEB berada di posisi ekuatorial menghasilkan susunan tiga ikatan menyerupai huruf T.',
    phetTip: 'Pada PhET: Gunakan 3 ikatan dan 2 Lone Pair pada atom pusat.',
  },
  {
    id: 'octahedral',
    name: 'Oktahedral',
    formula: 'AX₆',
    domains: 6,
    pei: 6,
    peb: 0,
    angle: '90°',
    example: 'SF₆, [Fe(CN)₆]³⁻',
    description: 'Enam domain elektron simetris mengarah ke seluruh sumbu x, y, dan z dengan sudut 90° seragam di setiap ikatan.',
    phetTip: 'Pada PhET: Tambahkan 6 ikatan pada atom pusat dan perhatikan simetri oktahedron sempurna.',
  },
];

const VSEPR_QUIZ_QUESTIONS: VseprQuizQuestion[] = [
  {
    question: 'Molekul air (H₂O) memiliki 2 pasangan elektron ikatan (PEI) dan 2 pasangan elektron bebas (PEB) pada atom O. Berdasarkan teori VSEPR, bentuk geometri molekulnya adalah...',
    options: ['Linear (180°)', 'Tetrahedral (109.5°)', 'Bengkok / Bentuk V (104.5°)', 'Trigonal Planar (120°)'],
    correctIndex: 2,
    explanation: 'H₂O memiliki tipe VSEPR AX₂E₂. Adanya 2 PEB memberikan tolakan kuat sehingga menekan sudut ikatan dari tetrahedral 109.5° menjadi 104.5° (Bentuk V).',
  },
  {
    question: 'Molekul karbon dioksida (CO₂) memiliki 2 ikatan rangkap dua pada atom pusat C tanpa pasangan elektron bebas. Bentuk geometri molekulnya adalah...',
    options: ['Linear (180°)', 'Bengkok (119°)', 'Tetrahedral', 'Trigonal Piramida'],
    correctIndex: 0,
    explanation: 'Ikatan rangkap dua dihitung sebagai 1 domain elektron. Dengan 2 domain ikatan dan 0 PEB (AX₂), kedua ikatan bertolak maksimal pada sudut 180° membentuk Linear.',
  },
  {
    question: 'Pada molekul amonia (NH₃), mengapa sudut ikatan H–N–H (107.3°) lebih kecil dari sudut ikatan pada metana CH₄ (109.5°)?',
    options: [
      'Karena atom nitrogen lebih berat dari atom karbon',
      'Karena tolakan PEB–PEI lebih besar daripada tolakan PEI–PEI',
      'Karena ikatan N–H lebih panjang daripada ikatan C–H',
      'Karena amonia tidak mengikuti kaidah oktet',
    ],
    correctIndex: 1,
    explanation: 'Menurut teori VSEPR, pasangan elektron bebas (PEB) menempati ruang lebih besar sehingga gaya tolak PEB–PEI mendesak ikatan N–H merapat menjadi 107.3°.',
  },
  {
    question: 'Suatu molekul memiliki 4 pasangan elektron ikatan dan 0 pasangan elektron bebas (tipe AX₄, contohnya CH₄). Sudut ikatan ideal antaratomnya adalah...',
    options: ['90°', '120°', '109.5°', '180°'],
    correctIndex: 2,
    explanation: 'Geometri tetrahedral simetris AX₄ memiliki sudut ikatan ideal sebesar 109.5° dalam ruang tiga dimensi.',
  },
  {
    question: 'Molekul PCl₅ memiliki 5 domain elektron ikatan pada atom pusat P tanpa PEB (AX₅). Nama bentuk geometrinya adalah...',
    options: ['Oktahedral', 'Trigonal Bipiramida', 'Piramida Sisi Empat', 'Tetrahedral'],
    correctIndex: 1,
    explanation: 'Lima domain ikatan tanpa PEB membentuk geometri Trigonal Bipiramida dengan sudut 120° pada posisi ekuatorial dan 90° pada posisi aksial.',
  },
];

const CATIONS_LIST: IonItem[] = [
  { symbol: 'Na⁺', name: 'Natrium', charge: 1 },
  { symbol: 'K⁺', name: 'Kalium', charge: 1 },
  { symbol: 'Mg²⁺', name: 'Magnesium', charge: 2 },
  { symbol: 'Ca²⁺', name: 'Kalsium', charge: 2 },
  { symbol: 'Al³⁺', name: 'Aluminium', charge: 3 },
  { symbol: 'NH₄⁺', name: 'Amonium', charge: 1, isPolyatomic: true },
];

const ANIONS_LIST: IonItem[] = [
  { symbol: 'Cl⁻', name: 'Klorida', charge: -1 },
  { symbol: 'F⁻', name: 'Fluorida', charge: -1 },
  { symbol: 'O²⁻', name: 'Oksida', charge: -2 },
  { symbol: 'S²⁻', name: 'Sulfida', charge: -2 },
  { symbol: 'NO₃⁻', name: 'Nitrat', charge: -1, isPolyatomic: true },
  { symbol: 'SO₄²⁻', name: 'Sulfat', charge: -2, isPolyatomic: true },
  { symbol: 'CO₃²⁻', name: 'Karbonat', charge: -2, isPolyatomic: true },
  { symbol: 'PO₄³⁻', name: 'Fosfat', charge: -3, isPolyatomic: true },
];

export const SimulasiPage: React.FC<SimulasiPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'phet-shapes' | 'nacl-ionic' | 'generator'>('phet-shapes');

  // PhET Molecule Shapes State
  const [phetLoaded, setPhetLoaded] = useState(false);
  const [phetSimKey, setPhetSimKey] = useState(0);
  const [phetFullscreen, setPhetFullscreen] = useState(false);

  // VSEPR Explorer State
  const [domainFilter, setDomainFilter] = useState<number | 'all'>('all');
  const [selectedShape, setSelectedShape] = useState<VseprShape | null>(VSEPR_SHAPES_DATA[0]);

  // VSEPR Quiz Mini-game State
  const [quizIdx, setQuizIdx] = useState(0);
  const [userSelectedOpt, setUserSelectedOpt] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [streakCount, setStreakCount] = useState(0);

  // Ion Builder State (Modul 2 Support)
  const [selectedCation, setSelectedCation] = useState<IonItem>(CATIONS_LIST[0]);
  const [selectedAnion, setSelectedAnion] = useState<IonItem>(ANIONS_LIST[0]);

  // Generator & Custom Embed State
  const [inputCode, setInputCode] = useState<string>(
    '<iframe src="https://phet.colorado.edu/sims/html/molecule-shapes/latest/molecule-shapes_en.html" width="800" height="600" allowfullscreen></iframe>'
  );
  const [activeEmbedUrl, setActiveEmbedUrl] = useState<string>(
    'https://phet.colorado.edu/sims/html/molecule-shapes/latest/molecule-shapes_en.html'
  );
  const [activeEmbedTitle, setActiveEmbedTitle] = useState<string>('Bentuk Geometri Molekul');
  const [activeEmbedSource, setActiveEmbedSource] = useState<string>(
    'PhET Interactive Simulations, University of Colorado Boulder'
  );
  const [generatorLoaded, setGeneratorLoaded] = useState(false);
  const [generatorError, setGeneratorError] = useState<string | null>(null);
  const [generatorFullscreen, setGeneratorFullscreen] = useState(false);
  const [generatorSimKey, setGeneratorSimKey] = useState(0);
  const [copiedCodeToast, setCopiedCodeToast] = useState(false);

  // Helper FPB (GCD) untuk penyederhanaan rumus kimia
  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

  // Hitung perbandingan rumus empiris ion
  const calculateCompoundFormula = (cat: IonItem, an: IonItem) => {
    const catVal = cat.charge;
    const anVal = Math.abs(an.charge);
    const divisor = gcd(catVal, anVal);
    const catSub = anVal / divisor;
    const anSub = catVal / divisor;

    const catBase = cat.symbol.replace(/[⁺\d]/g, '');
    const anBase = an.symbol.replace(/[⁻\d]/g, '');

    // Format tampilan kation
    let catPart = catBase;
    if (cat.isPolyatomic && catSub > 1) {
      catPart = `(${catBase})${catSub}`;
    } else if (catSub > 1) {
      catPart = `${catBase}${catSub}`;
    }

    // Format tampilan anion
    let anPart = anBase;
    if (an.isPolyatomic && anSub > 1) {
      anPart = `(${anBase})${anSub}`;
    } else if (anSub > 1) {
      anPart = `${anBase}${anSub}`;
    }

    const formula = `${catPart}${anPart}`;
    const name = `${cat.name} ${an.name}`;
    const totalPos = catSub * catVal;
    const totalNeg = anSub * anVal;

    return { formula, name, catSub, anSub, totalPos, totalNeg };
  };

  const compoundResult = calculateCompoundFormula(selectedCation, selectedAnion);

  // Helper ekstrak URL dari iframe atau link
  const extractUrlFromInput = (input: string): string | null => {
    const trimmed = input.trim();
    if (!trimmed) return null;

    const iframeSrcMatch = trimmed.match(/src=["'](https?:\/\/[^"']+)["']/i);
    if (iframeSrcMatch && iframeSrcMatch[1]) {
      return iframeSrcMatch[1];
    }

    if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
      return trimmed;
    }

    return null;
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setGeneratorError(null);

    const extracted = extractUrlFromInput(inputCode);
    if (!extracted) {
      setGeneratorError('Format tidak valid. Masukkan tautan HTTPS atau tag <iframe> dengan atribut src.');
      return;
    }

    if (!extracted.startsWith('https://')) {
      setGeneratorError('Untuk alasan keamanan website, URL simulasi wajib menggunakan protokol HTTPS.');
      return;
    }

    setGeneratorLoaded(false);
    setActiveEmbedUrl(extracted);
    setActiveEmbedTitle('Simulasi Interaktif Kustom');
    setActiveEmbedSource('Sumber Eksternal Penyedia Simulasi');
    setGeneratorSimKey((k) => k + 1);
  };

  const handleSelectPreset = (preset: SimPreset) => {
    setInputCode(`<iframe src="${preset.url}" width="800" height="600" allowfullscreen></iframe>`);
    setActiveEmbedUrl(preset.url);
    setActiveEmbedTitle(preset.name);
    setActiveEmbedSource(preset.author);
    setGeneratorLoaded(false);
    setGeneratorError(null);
    setGeneratorSimKey((k) => k + 1);
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(inputCode);
      setCopiedCodeToast(true);
      setTimeout(() => setCopiedCodeToast(false), 2500);
    } catch {
      // Fallback
    }
  };

  // Handler kuis mini-game
  const handleAnswerQuiz = (optIndex: number) => {
    if (hasAnswered) return;
    setUserSelectedOpt(optIndex);
    setHasAnswered(true);

    const currentQ = VSEPR_QUIZ_QUESTIONS[quizIdx];
    if (optIndex === currentQ.correctIndex) {
      setQuizScore((s) => s + 20);
      setStreakCount((c) => c + 1);
    } else {
      setStreakCount(0);
    }
  };

  const handleNextQuiz = () => {
    setUserSelectedOpt(null);
    setHasAnswered(false);
    setQuizIdx((prev) => (prev + 1) % VSEPR_QUIZ_QUESTIONS.length);
  };

  const filteredShapes =
    domainFilter === 'all'
      ? VSEPR_SHAPES_DATA
      : VSEPR_SHAPES_DATA.filter((s) => s.domains === domainFilter);

  return (
    <main id="main-content" className="simulasi-page">
      <div className="container">
        {/* Header Section */}
        <header className="simulasi-header">
          <div className="simulasi-badge">
            <span>🔬 LABORATORIUM VIRTUAL CHEMBOND</span>
          </div>
          <h1 className="simulasi-title">Laboratorium & Simulasi Interaktif</h1>
          <p className="simulasi-subtitle">
            Eksplorasi pembentukan ikatan kimia, bentuk geometri molekul 3D VSEPR, dan simulasi transfer elektron dalam media visual interaktif.
          </p>
        </header>

        {/* Tab Navigation Hub */}
        <nav className="simulasi-tabs-nav" aria-label="Menu Pilihan Simulasi">
          <button
            type="button"
            className={`simulasi-tab-btn ${activeTab === 'phet-shapes' ? 'active' : ''}`}
            onClick={() => setActiveTab('phet-shapes')}
          >
            <span>💎 Geometri Molekul & VSEPR (PhET)</span>
            <span className="tab-badge-count">Utama</span>
          </button>

          <button
            type="button"
            className={`simulasi-tab-btn ${activeTab === 'nacl-ionic' ? 'active' : ''}`}
            onClick={() => setActiveTab('nacl-ionic')}
          >
            <span>⚡ Ikatan Ionik & Ion Builder</span>
            <span className="tab-badge-count">Modul 2</span>
          </button>

          <button
            type="button"
            className={`simulasi-tab-btn ${activeTab === 'generator' ? 'active' : ''}`}
            onClick={() => setActiveTab('generator')}
          >
            <span>🧪 Generator Embed Simulasi</span>
            <span className="tab-badge-count">Custom</span>
          </button>
        </nav>

        {/* ===================================================================
            TAB 1: PHET MOLECULE SHAPES & FITUR PENDUKUNG VSEPR
           =================================================================== */}
        {activeTab === 'phet-shapes' && (
          <section className="simulasi-card-panel" aria-labelledby="phet-heading">
            <div className="simulasi-toolbar">
              <div className="simulasi-info-header">
                <h2 id="phet-heading">Simulasi Bentuk Geometri Molekul (PhET Molecule Shapes)</h2>
                <p>
                  Visualisasi 3D Teori Tolakan Pasangan Elektron Kulit Valensi (VSEPR) & Sudut Ikatan Molekul.
                </p>
              </div>

              <div className="simulasi-actions-group">
                <button
                  type="button"
                  className="btn-sim-action outline"
                  onClick={() => {
                    setPhetLoaded(false);
                    setPhetSimKey((k) => k + 1);
                  }}
                  title="Muat ulang simulasi"
                >
                  <span>↻ Muat Ulang</span>
                </button>

                <button
                  type="button"
                  className="btn-sim-action outline"
                  onClick={() => setPhetFullscreen(!phetFullscreen)}
                  title={phetFullscreen ? 'Keluar layar penuh' : 'Tampilkan layar penuh'}
                >
                  <span>{phetFullscreen ? '🗗 Keluar Penuh' : '⛶ Layar Penuh'}</span>
                </button>

                <a
                  href="https://phet.colorado.edu/sims/html/molecule-shapes/latest/molecule-shapes_en.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-sim-action primary"
                >
                  <span>Buka di Tab Baru ↗</span>
                </a>
              </div>
            </div>

            {/* Embedded Iframe Container */}
            <div className={`embed-simulation-wrapper ${phetFullscreen ? 'fullscreen-mode' : ''}`}>
              {!phetLoaded && (
                <div className="embed-loading-overlay">
                  <div className="embed-spinner" />
                  <p>Memuat Simulasi Interaktif PhET Molecule Shapes...</p>
                </div>
              )}

              <div className="embed-aspect-ratio-box">
                <iframe
                  key={phetSimKey}
                  src="https://phet.colorado.edu/sims/html/molecule-shapes/latest/molecule-shapes_en.html"
                  title="Simulasi Interaktif Bentuk Molekul - PhET Interactive Simulations"
                  className="embed-simulation-iframe"
                  allow="fullscreen"
                  allowFullScreen
                  loading="lazy"
                  onLoad={() => setPhetLoaded(true)}
                />
              </div>
            </div>

            {/* Fallback & Attribution Banner (AGENTS.md Rule 12) */}
            <aside className="simulasi-fallback-banner" aria-label="Informasi Sumber dan Alternatif Akses">
              <span className="fallback-icon">💡</span>
              <div className="fallback-text">
                <h4>Sumber Resmi & Penanganan Kendala Teknis</h4>
                <p>
                  Simulasi ini dikembangkan oleh <strong>PhET Interactive Simulations, University of Colorado Boulder</strong> (
                  <a href="https://phet.colorado.edu" target="_blank" rel="noopener noreferrer" className="fallback-link-btn">
                    https://phet.colorado.edu
                  </a>
                  ) dan dilisensikan di bawah Creative Commons Attribution 4.0 (CC-BY 4.0).
                </p>
                <p>
                  Jika simulasi terhalang oleh pembatasan browser atau mode luring, Anda dapat membukanya melalui tombol <strong>Buka di Tab Baru</strong> atau mempelajari katalog interaktif di bawah.
                </p>
              </div>
            </aside>

            {/* Student Virtual Experiment Guide */}
            <article className="simulasi-guide-box">
              <div className="guide-box-header">
                <span style={{ fontSize: '24px' }}>📋</span>
                <h3>Panduan Praktikum Virtual (Eksplorasi VSEPR di PhET)</h3>
              </div>

              <div className="guide-steps-grid">
                <div className="guide-step-card">
                  <span className="guide-step-num">1</span>
                  <h4>Pilih Mode "Model"</h4>
                  <p>Mulai dari atom pusat. Tambahkan ikatan tunggal, rangkap dua, dan pasangan elektron bebas (PEB).</p>
                </div>

                <div className="guide-step-card">
                  <span className="guide-step-num">2</span>
                  <h4>Aktifkan Nama & Sudut</h4>
                  <p>Centang kotak <em>"Molecule Geometry"</em>, <em>"Electron Geometry"</em>, dan <em>"Show Bond Angles"</em>.</p>
                </div>

                <div className="guide-step-card">
                  <span className="guide-step-num">3</span>
                  <h4>Amati Kekuatan Tolakan</h4>
                  <p>Perhatikan bahwa tolakan PEB–PEI lebih besar daripada PEI–PEI, mendesak sudut ikatan menjadi lebih sempit.</p>
                </div>

                <div className="guide-step-card">
                  <span className="guide-step-num">4</span>
                  <h4>Uji di "Real Molecules"</h4>
                  <p>Beralih ke tab molekul nyata: telusuri H₂O (bengkok, 104.5°), CO₂ (linear, 180°), dan NH₃ (piramida, 107.3°).</p>
                </div>
              </div>
            </article>

            {/* ===============================================================
                FITUR PENDUKUNG 1: INTERACTIVE VSEPR SHAPE CATALOG & INSPECTOR
               =============================================================== */}
            <div className="vsepr-explorer-section">
              <div className="vsepr-header">
                <div>
                  <h3>📐 Inspektor Bentuk Geometri Molekul (VSEPR Hub)</h3>
                  <p>Pilih bentuk molekul di bawah ini untuk melihat detail rumus AXmEn, PEI/PEB, dan tips pengujian di PhET.</p>
                </div>

                {/* Domain Filter Chips */}
                <div className="domain-filters-row" role="group" aria-label="Filter Jumlah Domain Elektron">
                  <button
                    type="button"
                    className={`filter-chip-btn ${domainFilter === 'all' ? 'active' : ''}`}
                    onClick={() => setDomainFilter('all')}
                  >
                    Semua ({VSEPR_SHAPES_DATA.length})
                  </button>
                  {[2, 3, 4, 5, 6].map((d) => (
                    <button
                      key={d}
                      type="button"
                      className={`filter-chip-btn ${domainFilter === d ? 'active' : ''}`}
                      onClick={() => setDomainFilter(d)}
                    >
                      {d} Domain
                    </button>
                  ))}
                </div>
              </div>

              {/* Cards Grid */}
              <div className="vsepr-cards-grid">
                {filteredShapes.map((shape) => {
                  const isSelected = selectedShape?.id === shape.id;
                  return (
                    <article
                      key={shape.id}
                      className={`vsepr-shape-card ${isSelected ? 'selected' : ''}`}
                      onClick={() => setSelectedShape(shape)}
                      tabIndex={0}
                      role="button"
                      aria-pressed={isSelected}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setSelectedShape(shape);
                        }
                      }}
                    >
                      <div className="shape-card-top">
                        <span className="vsepr-formula-badge">{shape.formula}</span>
                        <span className="shape-domain-badge">{shape.domains} Domain</span>
                      </div>

                      <h4 className="shape-card-name">{shape.name}</h4>

                      <div className="shape-metrics">
                        <div className="metric-pill">
                          <span className="metric-label">PEI (Ikatan)</span>
                          <span className="metric-val">{shape.pei}</span>
                        </div>
                        <div className="metric-pill">
                          <span className="metric-label">PEB (Bebas)</span>
                          <span className="metric-val">{shape.peb}</span>
                        </div>
                        <div className="metric-pill">
                          <span className="metric-label">Sudut</span>
                          <span className="metric-val">{shape.angle}</span>
                        </div>
                      </div>

                      <div className="shape-example">
                        <strong>Contoh:</strong> {shape.example}
                      </div>
                    </article>
                  );
                })}
              </div>

              {/* Detailed Shape Inspector Drawer */}
              {selectedShape && (
                <div className="vsepr-detail-drawer" role="region" aria-live="polite">
                  <div className="detail-drawer-header">
                    <h4>🔍 Detail Bentuk: {selectedShape.name} ({selectedShape.formula})</h4>
                    <button
                      type="button"
                      className="detail-drawer-close"
                      onClick={() => setSelectedShape(null)}
                      aria-label="Tutup detail bentuk"
                    >
                      ✕
                    </button>
                  </div>

                  <p style={{ margin: 0, fontSize: '0.94rem', color: 'var(--text-dark)' }}>
                    {selectedShape.description}
                  </p>

                  <div className="detail-drawer-body">
                    <div className="detail-box-item">
                      <strong>📐 Sudut Ikatan Ideal</strong>
                      <p>{selectedShape.angle}</p>
                    </div>

                    <div className="detail-box-item">
                      <strong>🧪 Contoh Senyawa Nyata</strong>
                      <p>{selectedShape.example}</p>
                    </div>

                    <div className="detail-box-item" style={{ gridColumn: 'span 2' }}>
                      <strong>💡 Tips Pengamatan di Simulasi PhET</strong>
                      <p>{selectedShape.phetTip}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* ===============================================================
                FITUR PENDUKUNG 2: TANTANGAN KUIS KILAT TEBAK BENTUK (MINI-GAME)
               =============================================================== */}
            <div className="vsepr-game-card">
              <div className="game-header">
                <div className="game-title-group">
                  <span style={{ fontSize: '26px' }}>🎯</span>
                  <div>
                    <h3>Tantangan Kuis Kilat: Tebak Bentuk Geometri</h3>
                    <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-dark-secondary)' }}>
                      Uji pemahaman bentuk molekul dan teori tolakan elektron secara instan!
                    </p>
                  </div>
                </div>

                <div className="game-score-badge">
                  <span>Skor: {quizScore}</span>
                  {streakCount > 1 && <span>🔥 {streakCount}x Combo!</span>}
                </div>
              </div>

              <div className="game-question-box">
                <span className="game-question-num">
                  Pertanyaan {quizIdx + 1} dari {VSEPR_QUIZ_QUESTIONS.length}
                </span>
                <p className="game-question-text">
                  {VSEPR_QUIZ_QUESTIONS[quizIdx].question}
                </p>
              </div>

              <div className="game-options-grid">
                {VSEPR_QUIZ_QUESTIONS[quizIdx].options.map((opt, idx) => {
                  let optClass = 'game-opt-btn';
                  if (hasAnswered) {
                    if (idx === VSEPR_QUIZ_QUESTIONS[quizIdx].correctIndex) {
                      optClass += ' correct';
                    } else if (idx === userSelectedOpt) {
                      optClass += ' wrong';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      type="button"
                      className={optClass}
                      onClick={() => handleAnswerQuiz(idx)}
                      disabled={hasAnswered}
                    >
                      <span>{['A', 'B', 'C', 'D'][idx]}.</span> {opt}
                    </button>
                  );
                })}
              </div>

              {hasAnswered && (
                <div
                  className={`game-feedback-banner ${
                    userSelectedOpt === VSEPR_QUIZ_QUESTIONS[quizIdx].correctIndex
                      ? 'correct'
                      : 'wrong'
                  }`}
                >
                  <div className="game-feedback-text">
                    <strong>
                      {userSelectedOpt === VSEPR_QUIZ_QUESTIONS[quizIdx].correctIndex
                        ? '🎉 Benar sekali!'
                        : '💡 Belum tepat.'}
                    </strong>{' '}
                    {VSEPR_QUIZ_QUESTIONS[quizIdx].explanation}
                  </div>

                  <button
                    type="button"
                    className="btn-sim-action primary"
                    onClick={handleNextQuiz}
                  >
                    <span>Pertanyaan Berikutnya →</span>
                  </button>
                </div>
              )}
            </div>
          </section>
        )}

        {/* ===================================================================
            TAB 2: NATIVE IKATAN IONIK & ION BUILDER INTERAKTIF (MODUL 2)
           =================================================================== */}
        {activeTab === 'nacl-ionic' && (
          <section className="simulasi-card-panel" aria-labelledby="nacl-heading">
            <div className="simulasi-toolbar">
              <div className="simulasi-info-header">
                <h2 id="nacl-heading">Simulasi Pembentukan Ikatan Ionik (Natrium Klorida - NaCl)</h2>
                <p>
                  Model interaktif transfer elektron penuh dari atom logam Natrium ke atom nonlogam Klorin.
                </p>
              </div>

              <div className="simulasi-actions-group">
                <button
                  type="button"
                  className="btn-sim-action primary"
                  onClick={() => onNavigate('Materi')}
                >
                  <span>Baca Teori di Modul 2 →</span>
                </button>
              </div>
            </div>

            {/* Render NaClMoleculeHero component */}
            <NaClMoleculeHero />

            {/* ===============================================================
                FITUR PENDUKUNG 3: ION BUILDER & TIMBANGAN MUATAN NETRAL
               =============================================================== */}
            <div className="ion-builder-section">
              <div className="ion-builder-header">
                <h3>🧪 Ion Builder: Susun Senyawa Ionik & Seimbangkan Muatan</h3>
                <p>
                  Pilih kation (logam/positif) dan anion (nonlogam/negatif) di bawah ini untuk melihat bagaimana rumus kimia netral dan perbandingan rasio terbentuk secara otomatis!
                </p>
              </div>

              <div className="ion-selectors-container">
                {/* Cation Picker */}
                <div className="ion-picker-column">
                  <div className="ion-picker-title">
                    <span style={{ color: '#1890FF' }}>➕</span>
                    <span>Pilih Kation (+):</span>
                  </div>
                  <div className="ion-buttons-grid">
                    {CATIONS_LIST.map((cat) => (
                      <button
                        key={cat.symbol}
                        type="button"
                        className={`ion-select-btn cation ${
                          selectedCation.symbol === cat.symbol ? 'active' : ''
                        }`}
                        onClick={() => setSelectedCation(cat)}
                      >
                        <span>{cat.symbol}</span>
                        <span className="ion-name-hint">{cat.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Anion Picker */}
                <div className="ion-picker-column">
                  <div className="ion-picker-title">
                    <span style={{ color: '#52C41A' }}>➖</span>
                    <span>Pilih Anion (−):</span>
                  </div>
                  <div className="ion-buttons-grid">
                    {ANIONS_LIST.map((an) => (
                      <button
                        key={an.symbol}
                        type="button"
                        className={`ion-select-btn anion ${
                          selectedAnion.symbol === an.symbol ? 'active' : ''
                        }`}
                        onClick={() => setSelectedAnion(an)}
                      >
                        <span>{an.symbol}</span>
                        <span className="ion-name-hint">{an.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Charge Balance Card */}
              <div className="charge-balance-card">
                <div className="balance-formula-display">
                  <span className="reaction-math-equation">
                    {compoundResult.catSub > 1 ? compoundResult.catSub : ''}{selectedCation.symbol} +{' '}
                    {compoundResult.anSub > 1 ? compoundResult.anSub : ''}{selectedAnion.symbol} →{' '}
                    <strong style={{ color: 'var(--c-hot-pink)' }}>{compoundResult.formula}</strong>
                  </span>
                  <div className="compound-full-name">
                    Nama Senyawa: <strong>{compoundResult.name}</strong>
                  </div>
                </div>

                <div className="balance-scale-row">
                  <div className="balance-meter-box">
                    <div className="meter-title">Total Muatan Positif (+)</div>
                    <div className="meter-value pos">+{compoundResult.totalPos}</div>
                    <span style={{ fontSize: '11px', color: 'var(--text-dark-muted)' }}>
                      {compoundResult.catSub} × (+{selectedCation.charge})
                    </span>
                  </div>

                  <div className="balance-meter-box">
                    <div className="meter-title">Total Muatan Negatif (−)</div>
                    <div className="meter-value neg">−{compoundResult.totalNeg}</div>
                    <span style={{ fontSize: '11px', color: 'var(--text-dark-muted)' }}>
                      {compoundResult.anSub} × ({selectedAnion.charge})
                    </span>
                  </div>

                  <div className="balance-meter-box">
                    <div className="meter-title">Keseimbangan Listrik</div>
                    <div className="meter-value zero">
                      {compoundResult.totalPos - compoundResult.totalNeg === 0 ? '✓ Netral (0)' : 'Tidak Seimbang'}
                    </div>
                    <span style={{ fontSize: '11px', color: '#52C41A', fontWeight: 700 }}>
                      Kaidah Kenetralan Terpenuhi
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <article className="simulasi-guide-box" style={{ marginTop: '30px' }}>
              <div className="guide-box-header">
                <span style={{ fontSize: '24px' }}>⚡</span>
                <h3>Konsep Inti Ikatan Ionik (Modul 2)</h3>
              </div>

              <div className="guide-steps-grid">
                <div className="guide-step-card">
                  <span className="guide-step-num">1</span>
                  <h4>Pelepasan Elektron (Kation)</h4>
                  <p>Atom logam melepaskan elektron valensinya membentuk kation positif untuk mencapai konfigurasi gas mulia stabil.</p>
                </div>

                <div className="guide-step-card">
                  <span className="guide-step-num">2</span>
                  <h4>Penerimaan Elektron (Anion)</h4>
                  <p>Atom nonlogam menerima elektron membentuk anion negatif untuk memenuhi kaidah oktet stabil.</p>
                </div>

                <div className="guide-step-card">
                  <span className="guide-step-num">3</span>
                  <h4>Gaya Tarik Elektrostatik</h4>
                  <p>Kation dan anion saling tarik secara elektrostatik mengikuti hukum Coulomb membentuk ikatan yang sangat kuat.</p>
                </div>

                <div className="guide-step-card">
                  <span className="guide-step-num">4</span>
                  <h4>Kisi Kristal & Unit Rumus</h4>
                  <p>Senyawa ionik membentuk kisi kristal 3D yang keras namun rapuh, dan dinyatakan dalam unit rumus netral.</p>
                </div>
              </div>
            </article>
          </section>
        )}

        {/* ===================================================================
            TAB 3: CUSTOM SIMULATION GENERATOR & EMBEDDER
           =================================================================== */}
        {activeTab === 'generator' && (
          <section className="simulasi-card-panel" aria-labelledby="generator-heading">
            <div className="generator-section">
              <div className="generator-intro">
                <h3 id="generator-heading">🧪 Tempat Menggenerate & Menyematkan Fitur Interaktif</h3>
                <p>
                  Gunakan generator ini untuk memasukkan URL simulasi atau kode <code>&lt;iframe&gt;</code> eksternal (seperti PhET, ChemTube3D, GeoGebra, atau media interaktif kimia lainnya) ke dalam antarmuka ChemBond secara responsif dan aman.
                </p>
              </div>

              {/* Preset Simulations Bar */}
              <div className="generator-presets-bar">
                <span className="generator-presets-label">Pilih Contoh Preset Siap Pakai:</span>
                <div className="generator-presets-list">
                  {PRESET_SIMULATIONS.map((preset) => (
                    <button
                      key={preset.id}
                      type="button"
                      className={`preset-chip-btn ${activeEmbedUrl === preset.url ? 'active' : ''}`}
                      onClick={() => handleSelectPreset(preset)}
                    >
                      {preset.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Form */}
              <form onSubmit={handleGenerate} className="generator-input-form">
                <label htmlFor="sim-input-code">
                  Tempelkan Kode &lt;iframe&gt; atau Tautan URL Simulasi:
                </label>
                <textarea
                  id="sim-input-code"
                  className="generator-textarea"
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value)}
                  placeholder='Contoh: <iframe src="https://phet.colorado.edu/sims/html/molecule-shapes/latest/molecule-shapes_en.html" width="800" height="600" allowfullscreen></iframe>'
                />

                {generatorError && (
                  <div className="generator-error-msg" role="alert">
                    ⚠️ {generatorError}
                  </div>
                )}

                <div className="generator-controls-row">
                  <span className="generator-hint">
                    💡 Didukung: URL HTTPS langsung atau tag HTML &lt;iframe&gt; lengkap.
                  </span>

                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <button
                      type="button"
                      className="btn-sim-action outline"
                      onClick={handleCopyCode}
                    >
                      <span>📋 Salin Kode</span>
                    </button>
                    {copiedCodeToast && (
                      <span className="copy-toast-pill">✓ Tersalin!</span>
                    )}

                    <button type="submit" className="btn-sim-action primary" style={{ padding: '10px 24px' }}>
                      <span>🚀 Generate & Tampilkan Simulasi</span>
                    </button>
                  </div>
                </div>
              </form>

              {/* Live Preview Panel */}
              {activeEmbedUrl && (
                <div style={{ marginTop: '16px' }}>
                  <div className="simulasi-toolbar">
                    <div className="simulasi-info-header">
                      <h3>Pratinjau Hasil Generate: {activeEmbedTitle}</h3>
                      <p>URL Aktif: <code style={{ fontSize: '0.85rem' }}>{activeEmbedUrl}</code></p>
                    </div>

                    <div className="simulasi-actions-group">
                      <button
                        type="button"
                        className="btn-sim-action outline"
                        onClick={() => {
                          setGeneratorLoaded(false);
                          setGeneratorSimKey((k) => k + 1);
                        }}
                      >
                        <span>↻ Muat Ulang</span>
                      </button>

                      <button
                        type="button"
                        className="btn-sim-action outline"
                        onClick={() => setGeneratorFullscreen(!generatorFullscreen)}
                      >
                        <span>{generatorFullscreen ? '🗗 Keluar Penuh' : '⛶ Layar Penuh'}</span>
                      </button>

                      <a
                        href={activeEmbedUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-sim-action primary"
                      >
                        <span>Buka di Tab Baru ↗</span>
                      </a>
                    </div>
                  </div>

                  <div className={`embed-simulation-wrapper ${generatorFullscreen ? 'fullscreen-mode' : ''}`}>
                    {!generatorLoaded && (
                      <div className="embed-loading-overlay">
                        <div className="embed-spinner" />
                        <p>Memuat Media Interaktif...</p>
                      </div>
                    )}

                    <div className="embed-aspect-ratio-box">
                      <iframe
                        key={generatorSimKey}
                        src={activeEmbedUrl}
                        title={activeEmbedTitle}
                        className="embed-simulation-iframe"
                        allow="fullscreen"
                        allowFullScreen
                        loading="lazy"
                        onLoad={() => setGeneratorLoaded(true)}
                      />
                    </div>
                  </div>

                  <aside className="simulasi-fallback-banner">
                    <span className="fallback-icon">🛡️</span>
                    <div className="fallback-text">
                      <h4>Pemberitahuan Sumber & Hak Cipta</h4>
                      <p>
                        Simulasi yang disematkan disediakan oleh <strong>{activeEmbedSource}</strong>. Pastikan penggunaan materi mematuhi ketentuan lisensi masing-masing penyedia eksternal.
                      </p>
                    </div>
                  </aside>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Back to Home CTA */}
        <div className="simulasi-bottom-cta">
          <button
            type="button"
            className="btn btn-capsule-cta-main"
            onClick={() => onNavigate('Beranda')}
          >
            ← Kembali ke Beranda
          </button>
        </div>
      </div>
    </main>
  );
};

export default SimulasiPage;
