import React, { useState } from 'react';

interface MoleculeInfo {
  formula: string;
  name: string;
  bondType: string;
  badgeColor: string;
  atoms: string;
  description: string;
  shape: string;
}

const MOLECULES: MoleculeInfo[] = [
  {
    formula: 'NaCl',
    name: 'Garam Dapur',
    bondType: 'Ikatan Ionik (Elektrostatik)',
    badgeColor: 'badge-orange',
    atoms: '1 Kation Natrium (Na⁺) + 1 Anion Klorida (Cl⁻)',
    description: 'Natrium melepaskan 1 elektron valensinya ke Klorin. Terbentuk ion Na⁺ dan Cl⁻ yang saling tarik-menarik sangat kuat dalam kisi kristal garam.',
    shape: 'Kisi Kristal Kubus Berpusat Muka (fcc)',
  },
  {
    formula: 'H₂O',
    name: 'Air',
    bondType: 'Ikatan Kovalen Tunggal (Polar)',
    badgeColor: 'badge-hotpink',
    atoms: '1 Atom Oksigen (O) + 2 Atom Hidrogen (H)',
    description: 'Oksigen menarik pasangan elektron lebih kuat (elektronegatif), menciptakan kutub muatan positif parsial (δ+) pada H dan negatif (δ-) pada O. Berbentuk huruf V (bengkok).',
    shape: 'Bengkok / Huruf V (~104.5°)',
  },
  {
    formula: 'O₂',
    name: 'Gas Oksigen',
    bondType: 'Ikatan Kovalen Rangkap Dua',
    badgeColor: 'badge-coral',
    atoms: '2 Atom Oksigen (O = O)',
    description: 'Setiap atom Oksigen membutuhkan 2 elektron untuk mencapai kestabilan oktet (8). Keduanya saling berbagi 2 pasang elektron secara adil (nonpolar).',
    shape: 'Linear (180°)',
  },
  {
    formula: 'CH₄',
    name: 'Gas Metana',
    bondType: 'Ikatan Kovalen Tunggal (Nonpolar)',
    badgeColor: 'badge-magenta',
    atoms: '1 Atom Karbon (C) + 4 Atom Hidrogen (H)',
    description: 'Atom Karbon membentuk 4 ikatan kovalen tunggal simetris ke 4 atom Hidrogen, mencapai kaidah oktet stabil dengan susunan tetrahedral.',
    shape: 'Tetrahedral (109.5°)',
  },
];

export const QuickMoleculeViewer: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const curMol = MOLECULES[selectedIdx];

  return (
    <section className="molecule-viewer-section">
      <div className="container">
        <div className="molecule-viewer-card">
          <div className="viewer-header">
            <div className="header-left">
              <span className="viewer-kicker">🔬 Galeri Ikatan Kimia Nyata</span>
              <h3 className="viewer-title">Bagaimana Atom Berikatan di Alam?</h3>
              <p className="viewer-subtitle">
                Pilih senyawa di bawah untuk melihat visualisasi nyata ikatan kimia dan bagaimana atom bersatu membentuk molekul kehidupan.
              </p>
            </div>

            {/* Molecule Tabs */}
            <div className="molecule-tabs" role="tablist">
              {MOLECULES.map((m, idx) => (
                <button
                  key={m.formula}
                  type="button"
                  role="tab"
                  aria-selected={selectedIdx === idx}
                  className={`molecule-tab-btn ${selectedIdx === idx ? 'active' : ''}`}
                  onClick={() => setSelectedIdx(idx)}
                >
                  <span className="tab-formula">{m.formula}</span>
                  <span className="tab-name">{m.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="viewer-body-grid">
            {/* Visual preview of molecule */}
            <div className="viewer-visual-display">
              {curMol.formula === 'NaCl' && (
                <svg viewBox="0 0 260 200" className="molecule-live-svg" aria-label="Struktur NaCl">
                  {/* Attraction field waves */}
                  <circle cx="80" cy="100" r="45" fill="none" stroke="#38E1FF" strokeWidth="2" strokeDasharray="5 3" opacity="0.6" />
                  <circle cx="180" cy="100" r="58" fill="none" stroke="#78FF43" strokeWidth="2" strokeDasharray="5 3" opacity="0.6" />
                  {/* Ionic transfer arrow */}
                  <path d="M 85 75 Q 130 45 170 75" fill="none" stroke="#FFD152" strokeWidth="3" strokeDasharray="5 3" />
                  <polygon points="175,76 166,70 168,78" fill="#FFD152" />
                  <text x="130" y="40" textAnchor="middle" fill="#D91D78" fontSize="11" fontWeight="800">Transfer 1e⁻ ⚡</text>
                  {/* Na+ Cation */}
                  <circle cx="80" cy="100" r="28" fill="#38E1FF" stroke="#FFFFFF" strokeWidth="3" />
                  <text x="80" y="106" textAnchor="middle" fill="#005B85" fontSize="16" fontWeight="bold">Na⁺</text>
                  <text x="80" y="142" textAnchor="middle" fill="#5C2746" fontSize="10" fontWeight="700">Kation (+1)</text>
                  {/* Cl- Anion */}
                  <circle cx="180" cy="100" r="40" fill="#78FF43" stroke="#FFFFFF" strokeWidth="3" />
                  <text x="180" y="107" textAnchor="middle" fill="#0A6112" fontSize="19" fontWeight="bold">Cl⁻</text>
                  <text x="180" y="154" textAnchor="middle" fill="#5C2746" fontSize="10" fontWeight="700">Anion (-1)</text>
                </svg>
              )}

              {curMol.formula === 'H₂O' && (
                <svg viewBox="0 0 260 200" className="molecule-live-svg" aria-label="Struktur H2O">
                  {/* Bonds */}
                  <line x1="130" y1="80" x2="60" y2="140" stroke="#FF9B52" strokeWidth="6" strokeLinecap="round" />
                  <line x1="130" y1="80" x2="200" y2="140" stroke="#FF9B52" strokeWidth="6" strokeLinecap="round" />
                  {/* Shared electrons dots */}
                  <circle cx="95" cy="110" r="5" fill="#38E1FF" />
                  <circle cx="165" cy="110" r="5" fill="#38E1FF" />
                  {/* Central Oxygen */}
                  <circle cx="130" cy="80" r="32" fill="#F72F91" stroke="#FFFFFF" strokeWidth="3" />
                  <text x="130" y="87" textAnchor="middle" fill="#FFFFFF" fontSize="20" fontWeight="bold">O</text>
                  <text x="130" y="104" textAnchor="middle" fill="#FFE5EC" fontSize="9" fontWeight="700">δ⁻ (Parsial -)</text>
                  {/* Hydrogens */}
                  <circle cx="60" cy="140" r="22" fill="#38E1FF" stroke="#FFFFFF" strokeWidth="2.5" />
                  <text x="60" y="146" textAnchor="middle" fill="#005B85" fontSize="16" fontWeight="bold">H</text>
                  <text x="60" y="158" textAnchor="middle" fill="#005B85" fontSize="8" fontWeight="700">δ⁺</text>

                  <circle cx="200" cy="140" r="22" fill="#38E1FF" stroke="#FFFFFF" strokeWidth="2.5" />
                  <text x="200" y="146" textAnchor="middle" fill="#005B85" fontSize="16" fontWeight="bold">H</text>
                  <text x="200" y="158" textAnchor="middle" fill="#005B85" fontSize="8" fontWeight="700">δ⁺</text>
                  {/* Angle arc */}
                  <path d="M 105 105 A 35 35 0 0 0 155 105" fill="none" stroke="#FF6B79" strokeWidth="2" strokeDasharray="3 2" />
                  <text x="130" y="125" textAnchor="middle" fill="#D91D78" fontSize="11" fontWeight="bold">104.5°</text>
                </svg>
              )}

              {curMol.formula === 'O₂' && (
                <svg viewBox="0 0 260 200" className="molecule-live-svg" aria-label="Struktur O2">
                  {/* Double covalent bond */}
                  <line x1="85" y1="92" x2="175" y2="92" stroke="#FF6B79" strokeWidth="5" strokeLinecap="round" />
                  <line x1="85" y1="108" x2="175" y2="108" stroke="#FF6B79" strokeWidth="5" strokeLinecap="round" />
                  {/* 2 pairs of shared electrons */}
                  <circle cx="120" cy="92" r="4" fill="#FFD152" />
                  <circle cx="140" cy="92" r="4" fill="#FFD152" />
                  <circle cx="120" cy="108" r="4" fill="#FFD152" />
                  <circle cx="140" cy="108" r="4" fill="#FFD152" />
                  {/* Oxygen 1 */}
                  <circle cx="75" cy="100" r="30" fill="#F72F91" stroke="#FFFFFF" strokeWidth="3" />
                  <text x="75" y="107" textAnchor="middle" fill="#FFFFFF" fontSize="18" fontWeight="bold">O</text>
                  {/* Oxygen 2 */}
                  <circle cx="185" cy="100" r="30" fill="#FF6B79" stroke="#FFFFFF" strokeWidth="3" />
                  <text x="185" y="107" textAnchor="middle" fill="#FFFFFF" fontSize="18" fontWeight="bold">O</text>
                  <text x="130" y="65" textAnchor="middle" fill="#D91D78" fontSize="11" fontWeight="bold">Ikatan Rangkap Dua (O=O)</text>
                </svg>
              )}

              {curMol.formula === 'CH₄' && (
                <svg viewBox="0 0 260 200" className="molecule-live-svg" aria-label="Struktur CH4">
                  {/* 4 Covalent bonds */}
                  <line x1="130" y1="100" x2="130" y2="40" stroke="#FF9B52" strokeWidth="5" strokeLinecap="round" />
                  <line x1="130" y1="100" x2="200" y2="100" stroke="#FF9B52" strokeWidth="5" strokeLinecap="round" />
                  <line x1="130" y1="100" x2="130" y2="160" stroke="#FF9B52" strokeWidth="5" strokeLinecap="round" />
                  <line x1="130" y1="100" x2="60" y2="100" stroke="#FF9B52" strokeWidth="5" strokeLinecap="round" />
                  {/* Central Carbon */}
                  <circle cx="130" cy="100" r="28" fill="#D91D78" stroke="#FFFFFF" strokeWidth="3" />
                  <text x="130" y="107" textAnchor="middle" fill="#FFFFFF" fontSize="18" fontWeight="bold">C</text>
                  {/* 4 Hydrogens */}
                  <circle cx="130" cy="35" r="18" fill="#38E1FF" stroke="#FFFFFF" strokeWidth="2" />
                  <text x="130" y="41" textAnchor="middle" fill="#005B85" fontSize="14" fontWeight="bold">H</text>

                  <circle cx="205" cy="100" r="18" fill="#38E1FF" stroke="#FFFFFF" strokeWidth="2" />
                  <text x="205" y="106" textAnchor="middle" fill="#005B85" fontSize="14" fontWeight="bold">H</text>

                  <circle cx="130" cy="165" r="18" fill="#38E1FF" stroke="#FFFFFF" strokeWidth="2" />
                  <text x="130" y="171" textAnchor="middle" fill="#005B85" fontSize="14" fontWeight="bold">H</text>

                  <circle cx="55" cy="100" r="18" fill="#38E1FF" stroke="#FFFFFF" strokeWidth="2" />
                  <text x="55" y="106" textAnchor="middle" fill="#005B85" fontSize="14" fontWeight="bold">H</text>
                </svg>
              )}
            </div>

            {/* Molecule Details Text */}
            <div className="viewer-info-content">
              <div className="info-badge-row">
                <span className={`bond-type-badge ${curMol.badgeColor}`}>{curMol.bondType}</span>
                <span className="formula-pill">{curMol.formula} ({curMol.name})</span>
              </div>

              <div className="info-detail-block">
                <span className="detail-label">Komposisi Atom:</span>
                <p className="detail-value">{curMol.atoms}</p>
              </div>

              <div className="info-detail-block">
                <span className="detail-label">Bentuk Geometri:</span>
                <p className="detail-value">{curMol.shape}</p>
              </div>

              <div className="info-detail-block">
                <span className="detail-label">Penjelasan Ilmiah:</span>
                <p className="detail-value explanation">{curMol.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
