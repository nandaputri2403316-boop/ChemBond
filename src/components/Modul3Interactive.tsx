import React from 'react';
import type { ModuleData, SubModule } from '../data/types';
import type { Page } from './Navbar';
import {
  IonicCrystalDiagram,
  DiamondVsGraphiteDiagram,
  ElectronSeaDiagram,
  MaterialComparisonGallery,
} from './Module3Visuals';
import { SubmoduleExamplesVisualGrid } from './Module3ExampleCards';
import './Modul3Interactive.css';

interface Modul3InteractiveProps {
  module: ModuleData;
  submodule: SubModule;
  onBack: () => void;
  onSelectSubmodule?: (submodule: SubModule) => void;
  onNavigate?: (page: Page) => void;
}

const SUBMODULE_ICONS: Record<string, string> = {
  'sub-3-1': '🌍',
  'sub-3-2': '🧂',
  'sub-3-3': '💧',
  'sub-3-4': '⚡',
  'sub-3-5': '⚖️',
};

const SUBMODULE_SHORT_TITLES: Record<string, string> = {
  'sub-3-1': 'Di Sekitar Kita',
  'sub-3-2': 'Ikatan Ion',
  'sub-3-3': 'Ikatan Kovalen',
  'sub-3-4': 'Ikatan Logam',
  'sub-3-5': 'Hubungan Bahan',
};

export const Modul3Interactive: React.FC<Modul3InteractiveProps> = ({
  module,
  submodule,
  onBack,
  onSelectSubmodule,
  onNavigate,
}) => {
  // Index submateri aktif (0 sampai 4)
  const currentIndex = module.submodules.findIndex((s) => s.id === submodule.id);
  const prevSubmodule = currentIndex > 0 ? module.submodules[currentIndex - 1] : null;
  const nextSubmodule =
    currentIndex < module.submodules.length - 1 ? module.submodules[currentIndex + 1] : null;
  const isLastSubmodule = currentIndex === module.submodules.length - 1;

  const currentIcon = SUBMODULE_ICONS[submodule.id] ?? '📖';

  const handleSubmoduleClick = (targetSub: SubModule) => {
    if (onSelectSubmodule) {
      onSelectSubmodule(targetSub);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="modul3-page-wrapper">
      <div className="modul3-layout">
        {/* =========================================================================
            MAIN READING AREA: NAVIGASI ATAS, ARTIKEL, VISUALISASI & KONTEN
            ========================================================================= */}
        <main className="m3-reading-area">
          {/* Top Bar: Tombol Kembali & Info Progres */}
          <div className="m3-top-nav-bar">
            <button
              type="button"
              className="m3-back-btn"
              onClick={onBack}
              aria-label="Kembali ke Daftar Modul"
            >
              <span aria-hidden="true">←</span> Kembali ke Daftar Modul
            </button>
            <div className="m3-top-progress-info">
              <span className="m3-progress-pill">
                Submateri {currentIndex + 1} dari {module.submodules.length}
              </span>
            </div>
          </div>

          {/* Stepper Horizontal Submateri (Pengganti Sidebar Kiri) */}
          <nav className="m3-top-stepper" aria-label="Navigasi Submateri Modul 3">
            <div className="m3-stepper-track">
              {module.submodules.map((sub, idx) => {
                const isActive = sub.id === submodule.id;
                const isPast = idx < currentIndex;
                const shortTitle = SUBMODULE_SHORT_TITLES[sub.id] ?? sub.title;
                return (
                  <button
                    key={sub.id}
                    type="button"
                    className={`m3-step-pill ${isActive ? 'active' : ''} ${isPast ? 'past' : ''}`}
                    onClick={() => handleSubmoduleClick(sub)}
                    aria-current={isActive ? 'step' : undefined}
                    aria-label={`Submateri ${idx + 1}: ${sub.title}`}
                  >
                    <span className="m3-step-pill-num">
                      {isPast ? '✓' : idx + 1}
                    </span>
                    <span className="m3-step-pill-title">{shortTitle}</span>
                  </button>
                );
              })}
            </div>
          </nav>

          <article className="m3-article-card">
            {/* Header Submateri Aktif */}
            <header className="m3-submodule-hero">
              <div className="m3-hero-icon-box" aria-hidden="true">
                {currentIcon}
              </div>
              <div className="m3-hero-meta">
                <span className="m3-hero-eyebrow">
                  {module.title} • Submateri {currentIndex + 1} dari {module.submodules.length}
                </span>
                <h1 className="m3-hero-title">{submodule.title}</h1>
              </div>
            </header>

            {/* ===================================================================
                KOMPONEN DIAGRAM UTAMA PER SUBMATERI (MODEL TEORITIS ILMIAH)
                =================================================================== */}
            <div className="m3-visual-wrap">
              {/* SUBMATERI 2: Penerapan Ikatan Ion (Kisi Kristal & 3 Fase Konduktivitas) */}
              {submodule.id === 'sub-3-2' && <IonicCrystalDiagram />}

              {/* SUBMATERI 3: Penerapan Ikatan Kovalen (Studi Kasus Intan vs Grafit) */}
              {submodule.id === 'sub-3-3' && <DiamondVsGraphiteDiagram />}

              {/* SUBMATERI 4: Penerapan Ikatan Logam (Model Lautan Elektron) */}
              {submodule.id === 'sub-3-4' && <ElectronSeaDiagram />}

              {/* SUBMATERI 5: Mengapa Setiap Bahan Memiliki Kegunaan Berbeda? */}
              {submodule.id === 'sub-3-5' && <MaterialComparisonGallery />}
            </div>

            {/* ===================================================================
                SELURUH ISI TEKS MATERI (100% UTUH DARI MODUL3DATA DENGAN TIPOGRAFI TEPAT)
                =================================================================== */}
            <section className="m3-text-content" aria-label="Isi Penjelasan Materi">
              {submodule.content.map((paragraph, pIdx) => {
                const trimmed = paragraph.trimStart();

                // 1. Heading bertombol nomor (misal "1. Mengapa...", "2. Mengenal...", "4. Senyawa...", "4. Eksplorasi Logam...")
                if (/^\d+\.\s/.test(trimmed)) {
                  return (
                    <h3 key={pIdx} className="m3-content-heading">
                      {paragraph}
                    </h3>
                  );
                }

                // 2. Butir penjelas A/B/C/D dengan label dan isi teks terpisah
                // (Label semibold/bold, teks penjelasan regular font weight 400 & warna gelap terbaca)
                const leadMatch = trimmed.match(/^([A-E]\.\s[^:]+:)\s*(.*)$/);
                if (leadMatch) {
                  return (
                    <div key={pIdx} className="m3-lead-item-card">
                      <strong className="m3-lead-label">{leadMatch[1]}</strong>
                      <span className="m3-lead-body"> {leadMatch[2]}</span>
                    </div>
                  );
                }

                // 3. Kalimat pemantik pertanyaan
                if (/^Pernahkah|^Bayangkan|^Coba|^Amati/i.test(trimmed)) {
                  return (
                    <p key={pIdx} className="blok-intro">
                      {paragraph}
                    </p>
                  );
                }

                // 4. Paragraf biasa (regular font weight 400, warna teks gelap terbaca #352B3D)
                return (
                  <p key={pIdx} className="blok-normal">
                    {paragraph}
                  </p>
                );
              })}
            </section>

            {/* ===================================================================
                HAL PENTING YANG PERLU DIINGAT (KEY POINTS)
                =================================================================== */}
            {submodule.keyPoints && submodule.keyPoints.length > 0 && (
              <section className="m3-keypoints-box" aria-label="Poin Penting Submateri">
                <h4>⭐ Hal Penting yang Perlu Diingat</h4>
                <ul>
                  {submodule.keyPoints.map((point, kIdx) => (
                    <li key={kIdx}>{point}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* ===================================================================
                CONTOH DALAM KEHIDUPAN SEHARI-HARI (GALERI KARTU VISUAL EDUKATIF)
                (Dilengkapi gambar SVG individual per contoh, formula, teks utuh,
                 serta hubungan ikatan, sifat & kegunaan. Dihilangkan pada Sub-3-5)
                =================================================================== */}
            {submodule.id !== 'sub-3-5' && submodule.examples && submodule.examples.length > 0 && (
              <section className="m3-examples-visual-section" aria-label="Contoh Penerapan dalam Kehidupan Sehari-hari">
                <div className="m3-examples-header-banner">
                  <div className="m3-examples-banner-badge">
                    <span>🔭 EKSPLORASI NYATA</span>
                  </div>
                  <h3 className="m3-examples-banner-title">Contoh dalam Kehidupan Sehari-hari</h3>
                  <p className="m3-examples-banner-sub">
                    Berikut adalah contoh nyata penerapan bahan dalam kehidupan sehari-hari lengkap dengan ilustrasi objek, struktur kimia, penjelasan ilmiah lengkap, serta hubungannya dengan sifat bahan:
                  </p>
                </div>

                <SubmoduleExamplesVisualGrid submoduleId={submodule.id} />
              </section>
            )}

            {/* ===================================================================
                FOOTER NAVIGASI ANTAR-SUBMATERI
                =================================================================== */}
            <footer className="m3-submodule-nav-footer">
              {prevSubmodule ? (
                <button
                  type="button"
                  className="m3-nav-btn prev"
                  onClick={() => handleSubmoduleClick(prevSubmodule)}
                  aria-label={`Menuju Submateri Sebelumnya: ${prevSubmodule.title}`}
                >
                  <span className="m3-nav-btn-hint">← Submateri Sebelumnya</span>
                  <span className="m3-nav-btn-title">{prevSubmodule.title}</span>
                </button>
              ) : (
                <div />
              )}

              {nextSubmodule ? (
                <button
                  type="button"
                  className="m3-nav-btn next"
                  onClick={() => handleSubmoduleClick(nextSubmodule)}
                  aria-label={`Menuju Submateri Selanjutnya: ${nextSubmodule.title}`}
                >
                  <span className="m3-nav-btn-hint">Submateri Selanjutnya →</span>
                  <span className="m3-nav-btn-title">{nextSubmodule.title}</span>
                </button>
              ) : null}
            </footer>

            {/* ===================================================================
                BAGIAN AKHIR: NAVIGASI PELAJARAN SELANJUTNYA
                =================================================================== */}
            {isLastSubmodule && (
              <section className="m3-next-lesson-card" aria-label="Pelajaran Selanjutnya">
                <div className="m3-next-badge">
                  <span>🎉 MODUL 3 SELESAI</span>
                </div>
                <h3 className="m3-next-title">Pelajaran Selanjutnya: Kuis Evaluasi ChemBond</h3>
                <p className="m3-next-desc">
                  Selamat! Kamu telah menyelesaikan seluruh rangkaian pembahasan Modul 3 mengenai penerapan ikatan ion, kovalen, dan logam dalam kehidupan nyata.
                  Sekarang, uji dan asah pemahaman konsep kimiamu melalui Kuis Evaluasi ChemBond!
                </p>

                <div className="m3-next-actions">
                  {onNavigate && (
                    <button
                      type="button"
                      className="m3-btn-primary"
                      onClick={() => onNavigate('Kuis')}
                    >
                      <span>Mulai Kuis Evaluasi Sekarang</span>
                      <span aria-hidden="true">→</span>
                    </button>
                  )}

                  {onNavigate && (
                    <button
                      type="button"
                      className="m3-btn-secondary"
                      onClick={() => onNavigate('Simulasi')}
                    >
                      <span>🧪 Coba Lab Simulasi Virtual</span>
                    </button>
                  )}
                </div>
              </section>
            )}
          </article>
        </main>
      </div>
    </div>
  );
};

export default Modul3Interactive;
