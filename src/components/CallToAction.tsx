import React from 'react';

interface CallToActionProps {
  onStartAdventure: () => void;
  onExploreCards: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({
  onStartAdventure,
  onExploreCards,
}) => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-banner-card">
          {/* Decorative background glowing light blobs */}
          <div className="cta-decor-blob blob-1" aria-hidden="true" />
          <div className="cta-decor-blob blob-2" aria-hidden="true" />

          <div className="cta-content">
            <div className="cta-badge">
              <span>🌟 Langkah Pertamamu di Dunia Kimia SMA</span>
            </div>

            <h2 className="cta-title">
              Siap Mengarungi <br />
              <span className="cta-title-highlight">Petualangan Kimiamu?</span>
            </h2>

            <p className="cta-description">
              Dunia atom tak lagi rumit dan membosankan. Buka pintu keajaiban partikel materi bersama ChemBond dan temukan betapa asyiknya memahami ikatan kimia secara visual dan interaktif!
            </p>

            <div className="cta-buttons-row">
              <button
                type="button"
                className="btn btn-capsule-cta-main"
                onClick={onStartAdventure}
              >
                <span>Mulai Petualangan Sekarang</span>
                <span className="btn-icon">🚀</span>
              </button>
              <button
                type="button"
                className="btn btn-capsule-cta-sub"
                onClick={onExploreCards}
              >
                <span>Pelajari Konsep Dasar</span>
                <span className="btn-icon">⚛️</span>
              </button>
            </div>

            {/* Badges footer */}
            <div className="cta-benefits-row">
              <div className="benefit-item">
                <span className="benefit-icon">🎓</span>
                <span>Standar Kurikulum SMA</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">✨</span>
                <span>Visual Interaktif 100%</span>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">🧪</span>
                <span>Eksperimen Aman & Tanpa Risiko</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
