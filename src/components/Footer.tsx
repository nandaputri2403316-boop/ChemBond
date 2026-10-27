import React from 'react';

interface FooterProps {
  onNavClick: (menuName: string) => void;
}

const CURRENT_YEAR = new Date().getFullYear();

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        {/* Top footer row */}
        <div className="footer-grid">
          {/* Brand info */}
          <div className="footer-brand-col">
            <a href="#home" className="footer-logo" onClick={scrollToTop}>
              <div className="brand-logo-icon">
                <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="19" fill="#FFFFFF" stroke="#F72F91" strokeWidth="2.5" />
                  <ellipse cx="20" cy="20" rx="14" ry="5.5" stroke="#FF9B52" strokeWidth="2" transform="rotate(30 20 20)" />
                  <ellipse cx="20" cy="20" rx="14" ry="5.5" stroke="#D91D78" strokeWidth="2" transform="rotate(-30 20 20)" />
                  <circle cx="20" cy="20" r="5.5" fill="#F72F91" />
                  <circle cx="9" cy="14" r="2.2" fill="#38E1FF" />
                  <circle cx="31" cy="26" r="2.2" fill="#FFD152" />
                </svg>
              </div>
              <span className="footer-brand-title">ChemBond</span>
            </a>
            <p className="footer-tagline">“Jelajahi Atom, Temukan Ikatan!”</p>
            <p className="footer-bio">
              Platform pembelajaran kimia interaktif bertema petualangan dunia atom yang dirancang khusus untuk siswa SMA agar kimia terasa seru, visual, dan mudah dipahami.
            </p>
          </div>

          {/* Nav Links Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigasi Halaman</h4>
            <ul className="footer-links">
              <li>
                <a href="#home" onClick={scrollToTop}>Beranda</a>
              </li>
              <li>
                <a href="#pengenalan" onClick={() => onNavClick('Petualangan')}>Petualangan</a>
              </li>
              <li>
                <a href="#pengenalan" onClick={() => onNavClick('Materi')}>Materi Atom</a>
              </li>
              <li>
                <a href="#pengenalan" onClick={() => onNavClick('Laboratorium')}>Laboratorium Virtual</a>
              </li>
              <li>
                <a href="#pengenalan" onClick={() => onNavClick('Kuis')}>Kuis Kimia</a>
              </li>
            </ul>
          </div>

          {/* Topics Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Fokus Materi SMA</h4>
            <ul className="footer-links">
              <li><span>• Model Atom Bohr & Kuantum</span></li>
              <li><span>• Partikel Dasar (Proton, Elektron, Neutron)</span></li>
              <li><span>• Konfigurasi Kulit & Elektron Valensi</span></li>
              <li><span>• Ikatan Kovalen Tunggal & Rangkap</span></li>
              <li><span>• Ikatan Ionik & Gaya Elektrostatik</span></li>
            </ul>
          </div>

          {/* Quotes / Fun Fact Column */}
          <div className="footer-col footer-quote-col">
            <h4 className="footer-col-title">Pesan Kimia Hari Ini</h4>
            <div className="footer-quote-box">
              <p className="quote-text">
                “Segala sesuatu di alam semesta—dari air yang kita minum hingga bintang di angkasa—terbuat dari tarian atom yang saling berikatan.”
              </p>
              <span className="quote-author">✨ ChemBond Adventure</span>
            </div>
            <button
              type="button"
              className="btn-back-to-top"
              onClick={scrollToTop}
            >
              <span>Kembali ke Atas</span>
              <span>↑</span>
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="footer-bottom">
          <p>© {CURRENT_YEAR} ChemBond: Petualangan Menjelajahi Dunia Atom. Dibuat dengan keceriaan untuk pembelajaran kimia SMA.</p>
        </div>
      </div>
    </footer>
  );
};
