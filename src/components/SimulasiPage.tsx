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
];

export const SimulasiPage: React.FC<SimulasiPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'phet-shapes' | 'nacl-ionic' | 'generator'>('phet-shapes');

  // PhET Molecule Shapes State
  const [phetLoaded, setPhetLoaded] = useState(false);
  const [phetSimKey, setPhetSimKey] = useState(0);
  const [phetFullscreen, setPhetFullscreen] = useState(false);

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

  // Helper untuk mengekstrak URL dari tag iframe atau URL mentah
  const extractUrlFromInput = (input: string): string | null => {
    const trimmed = input.trim();
    if (!trimmed) return null;

    // Jika pengguna memasukkan kode <iframe src="...">
    const iframeSrcMatch = trimmed.match(/src=["'](https?:\/\/[^"']+)["']/i);
    if (iframeSrcMatch && iframeSrcMatch[1]) {
      return iframeSrcMatch[1];
    }

    // Jika pengguna memasukkan URL mentah
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
      setGeneratorError('Format tidak valid. Masukkan URL (https://...) atau tag <iframe> yang memuat atribut src.');
      return;
    }

    // Pastikan menggunakan HTTPS untuk keamanan
    if (!extracted.startsWith('https://')) {
      setGeneratorError('Untuk alasan keamanan website, URL simulasi wajib menggunakan protokol HTTPS (https://).');
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

  return (
    <main id="main-content" className="simulasi-page">
      <div className="container">
        {/* Header Section */}
        <header className="simulasi-header">
          <div className="simulasi-badge">
            <span>🔬 LABORATORIUM VIRTUAL CHEMBOND</span>
          </div>
          <h1 className="simulasi-title">Simulasi & Laboratorium Ikatan Kimia</h1>
          <p className="simulasi-subtitle">
            Eksplorasi pembentukan ikatan kimia, bentuk geometri molekul 3D, dan perpindahan elektron melalui media interaktif ramah siswa.
          </p>
        </header>

        {/* Tab Navigation Hub */}
        <nav className="simulasi-tabs-nav" aria-label="Menu Pilihan Simulasi">
          <button
            type="button"
            className={`simulasi-tab-btn ${activeTab === 'phet-shapes' ? 'active' : ''}`}
            onClick={() => setActiveTab('phet-shapes')}
          >
            <span>💎 Bentuk Geometri Molekul (PhET)</span>
            <span className="tab-badge-count">Utama</span>
          </button>

          <button
            type="button"
            className={`simulasi-tab-btn ${activeTab === 'nacl-ionic' ? 'active' : ''}`}
            onClick={() => setActiveTab('nacl-ionic')}
          >
            <span>⚡ Pembentukan Ikatan Ionik (NaCl)</span>
            <span className="tab-badge-count">Lokal</span>
          </button>

          <button
            type="button"
            className={`simulasi-tab-btn ${activeTab === 'generator' ? 'active' : ''}`}
            onClick={() => setActiveTab('generator')}
          >
            <span>🧪 Generator & Semat Simulasi Kustom</span>
            <span className="tab-badge-count">Embed</span>
          </button>
        </nav>

        {/* TAB 1: PHET MOLECULE SHAPES */}
        {activeTab === 'phet-shapes' && (
          <section className="simulasi-card-panel" aria-labelledby="phet-heading">
            <div className="simulasi-toolbar">
              <div className="simulasi-info-header">
                <h2 id="phet-heading">Simulasi Bentuk Geometri Molekul (Molecule Shapes)</h2>
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
                  ) dan didistribusikan di bawah lisensi Creative Commons Attribution 4.0 (CC-BY 4.0).
                </p>
                <p>
                  Jika simulasi terhalang oleh pembatasan koneksi sekolah, ekstensi peramban, atau mode luring, Anda dapat membukanya secara langsung melalui tombol <strong>Buka di Tab Baru</strong> atau membaca rangkuman geometri molekul statis di bawah ini.
                </p>
              </div>
            </aside>

            {/* Student Virtual Experiment Guide */}
            <article className="simulasi-guide-box">
              <div className="guide-box-header">
                <span style={{ fontSize: '24px' }}>📋</span>
                <h3>Panduan Aktivitas Pembelajaran Siswa (Teori VSEPR)</h3>
              </div>

              <div className="guide-steps-grid">
                <div className="guide-step-card">
                  <span className="guide-step-num">1</span>
                  <h4>Pilih Mode "Model"</h4>
                  <p>Mulai dari atom pusat tanpa ikatan. Tambahkan ikatan tunggal, rangkap, dan pasangan elektron bebas (PEB).</p>
                </div>

                <div className="guide-step-card">
                  <span className="guide-step-num">2</span>
                  <h4>Aktifkan Fitur Nama & Sudut</h4>
                  <p>Centang kotak <em>"Molecule Geometry"</em>, <em>"Electron Geometry"</em>, dan <em>"Show Bond Angles"</em> di sudut kanan.</p>
                </div>

                <div className="guide-step-card">
                  <span className="guide-step-num">3</span>
                  <h4>Amati Pengaruh PEB</h4>
                  <p>Perhatikan tolakan PEB–PEI yang lebih kuat dibandingkan PEI–PEI, sehingga mendesak sudut ikatan menjadi lebih sempit.</p>
                </div>

                <div className="guide-step-card">
                  <span className="guide-step-num">4</span>
                  <h4>Uji Pada "Real Molecules"</h4>
                  <p>Beralih ke tab <em>Real Molecules</em> dan telusuri geometri nyata senyawa $H_2O$ (bengkok, 104.5°), $CO_2$ (linear, 180°), dan $CH_4$ (tetrahedral, 109.5°).</p>
                </div>
              </div>
            </article>
          </section>
        )}

        {/* TAB 2: NATIVE NACL IONIC SIMULATION */}
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

            <article className="simulasi-guide-box" style={{ marginTop: '30px' }}>
              <div className="guide-box-header">
                <span style={{ fontSize: '24px' }}>⚡</span>
                <h3>Konsep Inti Ikatan Ionik</h3>
              </div>

              <div className="guide-steps-grid">
                <div className="guide-step-card">
                  <span className="guide-step-num">1</span>
                  <h4>Pelepasan Elektron (Kation)</h4>
                  <p>Atom Natrium ($Na$, nomor atom 11: 2, 8, 1) melepaskan 1 elektron valensi membentuk kation $Na^+$ (2, 8).</p>
                </div>

                <div className="guide-step-card">
                  <span className="guide-step-num">2</span>
                  <h4>Penerimaan Elektron (Anion)</h4>
                  <p>Atom Klorin ($Cl$, nomor atom 17: 2, 8, 7) menerima 1 elektron membentuk anion $Cl^-$ (2, 8, 8).</p>
                </div>

                <div className="guide-step-card">
                  <span className="guide-step-num">3</span>
                  <h4>Gaya Tarik Elektrostatik</h4>
                  <p>Kation $Na^+$ dan anion $Cl^-$ saling tarik-menarik dengan gaya elektrostatik Coulomb membentuk ikatan yang sangat kuat.</p>
                </div>

                <div className="guide-step-card">
                  <span className="guide-step-num">4</span>
                  <h4>Susunan Kisi Kristal</h4>
                  <p>Senyawa ionik tidak berupa molekul tunggal terisolasi, melainkan kisi kristal 3D dengan unit rumus $NaCl$.</p>
                </div>
              </div>
            </article>
          </section>
        )}

        {/* TAB 3: CUSTOM SIMULATION GENERATOR & EMBEDDER */}
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

                  <button type="submit" className="btn-sim-action primary" style={{ padding: '10px 24px' }}>
                    <span>🚀 Generate & Tampilkan Simulasi</span>
                  </button>
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

