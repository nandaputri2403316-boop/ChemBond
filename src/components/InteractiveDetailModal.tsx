import React from 'react';

interface InteractiveDetailModalProps {
  topic: string | null;
  onClose: () => void;
}

export const InteractiveDetailModal: React.FC<InteractiveDetailModalProps> = ({
  topic,
  onClose,
}) => {
  if (!topic) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-wrap">
            <span className="modal-kicker">🔬 Eksplorasi Materi SMA</span>
            <h3 className="modal-title">{topic}</h3>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Tutup jendela"
          >
            ✕
          </button>
        </div>

        {/* Modal Content depending on topic */}
        <div className="modal-body">
          {topic === 'Kenali Atom' && (
            <div className="modal-topic-content">
              <div className="modal-highlight-box pink-bg">
                <h4>🎯 Apa itu Atom?</h4>
                <p>
                  Atom adalah unit terkecil dari suatu unsur kimia yang mempertahankan sifat kimia unsur tersebut. Terdiri dari <strong>inti atom (nukleus)</strong> yang padat dan <strong>awan elektron</strong> yang mengitarinya.
                </p>
              </div>

              <div className="modal-grid-2">
                <div className="info-card-mini">
                  <h5>🔴 Proton & Neutron (Inti Atom)</h5>
                  <p>
                    <strong>Proton:</strong> Bermuatan positif (+1), menentukan nomor atom ($Z$) dan identitas suatu unsur. <br />
                    <strong>Neutron:</strong> Bermuatan netral (0), bersama proton menentukan massa atom ($A$).
                  </p>
                </div>
                <div className="info-card-mini">
                  <h5>🔵 Elektron & Kulit Atom</h5>
                  <p>
                    <strong>Elektron:</strong> Bermuatan negatif (-1), berada di lintasan kulit energi (K, L, M, N). <br />
                    Elektron di kulit terluar disebut <strong>elektron valensi</strong> yang bertugas membentuk ikatan kimia!
                  </p>
                </div>
              </div>

              <div className="formula-box">
                <span className="formula-tag">Rumus Penting SMA:</span>
                <code>Jumlah Maksimum Elektron Kulit ke-n = 2n²</code> (Kulit K = 2, L = 8, M = 18, N = 32)
              </div>
            </div>
          )}

          {topic === 'Jelajahi Ikatan' && (
            <div className="modal-topic-content">
              <div className="modal-highlight-box peach-bg">
                <h4>🤝 Mengapa Atom Berikatan?</h4>
                <p>
                  Semua atom di alam berusaha mencapai kondisi paling stabil, yaitu menyerupai konfigurasi elektron gas mulia dengan <strong>8 elektron valensi (Kaidah Oktet)</strong> atau <strong>2 elektron valensi (Kaidah Duplet)</strong>.
                </p>
              </div>

              <div className="modal-grid-2">
                <div className="info-card-mini">
                  <h5>⚡ Ikatan Ionik</h5>
                  <p>
                    Terjadi antara <strong>unsur logam</strong> (melepas e⁻ membentuk kation +) dan <strong>nonlogam</strong> (menangkap e⁻ membentuk anion -). Contoh: NaCl, MgO, KCl.
                  </p>
                </div>
                <div className="info-card-mini">
                  <h5>🔗 Ikatan Kovalen</h5>
                  <p>
                    Terjadi antara sesama <strong>unsur nonlogam</strong> dengan cara memakai pasangan elektron bersama. Terbagi menjadi kovalen tunggal (H₂O), rangkap 2 (O₂), dan rangkap 3 (N₂).
                  </p>
                </div>
              </div>

              <div className="formula-box">
                <span className="formula-tag">Kunci Pemahaman:</span>
                <code>Ikatan Logam = Lautan elektron terdelokalisasi di antara kation logam (penghantar listrik yang baik!)</code>
              </div>
            </div>
          )}

          {topic === 'Eksperimen Kimia' && (
            <div className="modal-topic-content">
              <div className="modal-highlight-box blue-bg">
                <h4>🧪 Laboratorium Virtual Ramah Siswa</h4>
                <p>
                  Di ChemBond, siswa dapat mensimulasikan pencampuran unsur secara bebas untuk melihat pembentukan ikatan dan kestabilan molekul tanpa bahaya bahan kimia berbahaya.
                </p>
              </div>

              <div className="modal-grid-2">
                <div className="info-card-mini">
                  <h5>✨ Uji Reaksi Unsur</h5>
                  <p>
                    Tarik unsur dari tabel periodik interaktif dan dekatkan untuk melihat apakah terjadi ikatan kovalen atau ionik secara otomatis!
                  </p>
                </div>
                <div className="info-card-mini">
                  <h5>📊 Sensor Kestabilan Energi</h5>
                  <p>
                    Grafik potensial Lennard-Jones interaktif menunjukkan jarak ikatan optimum ketika energi sistem berada di titik terendah (paling stabil).
                  </p>
                </div>
              </div>

              <div className="formula-box">
                <span className="formula-tag">Tips Belajar:</span>
                <code>Kestabilan tercapai saat tolakan inti-inti dan elektron-elektron seimbang dengan tarikan inti-elektron!</code>
              </div>
            </div>
          )}

          {topic !== 'Kenali Atom' && topic !== 'Jelajahi Ikatan' && topic !== 'Eksperimen Kimia' && (
            <div className="modal-topic-content">
              <div className="modal-highlight-box purple-bg">
                <h4>🧭 Modul: {topic}</h4>
                <p>
                  Materi ini dirancang khusus untuk kurikulum kimia SMA. Silakan mulai eksplorasi melalui kartu pengenalan dan simulasi atom di halaman utama!
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-primary"
            onClick={onClose}
          >
            Mengerti & Lanjut Belajar 🚀
          </button>
        </div>
      </div>
    </div>
  );
};
