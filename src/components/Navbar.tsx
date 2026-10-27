import React, { useState } from 'react';

interface NavbarProps {
  onShowToast: (message: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onShowToast }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('Beranda');

  const navItems = [
    { name: 'Beranda', isCurrent: true, href: '#home' },
    { name: 'Petualangan', isCurrent: false, hint: 'Jalur petualangan dunia atom (Segera Hadir)' },
    { name: 'Materi', isCurrent: false, hint: 'Kumpulan modul materi kimia SMA (Segera Hadir)' },
    { name: 'Laboratorium', isCurrent: false, hint: 'Simulasi lab virtual kimia (Segera Hadir)' },
    { name: 'Kuis', isCurrent: false, hint: 'Tantangan uji pemahaman atom & ikatan (Segera Hadir)' },
  ];

  const handleNavClick = (e: React.MouseEvent, item: typeof navItems[0]) => {
    e.preventDefault();
    if (item.name === 'Beranda') {
      setActiveMenu('Beranda');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setActiveMenu(item.name);
      onShowToast(`🧭 Menu "${item.name}": Fitur ini segera hadir! Silakan nikmati eksplorasi di beranda.`);
      // Scroll to intro section to show available preview
      const el = document.getElementById('pengenalan');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  const handleStartAdventure = () => {
    const el = document.getElementById('pengenalan');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#home" className="navbar-brand" onClick={(e) => handleNavClick(e, navItems[0])}>
          <div className="brand-logo-icon">
            <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="19" fill="#FFFFFF" stroke="#F72F91" strokeWidth="2.5" />
              {/* Orbits */}
              <ellipse cx="20" cy="20" rx="14" ry="5.5" stroke="#FF9B52" strokeWidth="2" transform="rotate(30 20 20)" />
              <ellipse cx="20" cy="20" rx="14" ry="5.5" stroke="#D91D78" strokeWidth="2" transform="rotate(-30 20 20)" />
              {/* Nucleus */}
              <circle cx="20" cy="20" r="5.5" fill="#F72F91" />
              <circle cx="18.5" cy="18.5" r="1.8" fill="#FFFFFF" />
              {/* Electrons */}
              <circle cx="9" cy="14" r="2.2" fill="#38E1FF" />
              <circle cx="31" cy="26" r="2.2" fill="#FFD152" />
            </svg>
          </div>
          <div className="brand-text">
            <span className="brand-name">ChemBond</span>
            <span className="brand-sub">SMA Kimia</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="navbar-nav desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navItems.map((item) => {
              const isActive = activeMenu === item.name;
              return (
                <li key={item.name} className="nav-item">
                  <a
                    href={item.href || '#'}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, item)}
                    title={item.hint || item.name}
                  >
                    {item.name}
                    {isActive && <span className="nav-active-pill" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop Header Action */}
        <div className="navbar-action desktop-action">
          <button
            type="button"
            className="btn btn-nav-cta"
            onClick={handleStartAdventure}
          >
            <span className="btn-icon">🚀</span>
            <span>Mulai Petualangan</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className={`hamburger-btn ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-inner">
          <ul className="mobile-nav-list">
            {navItems.map((item) => {
              const isActive = activeMenu === item.name;
              return (
                <li key={item.name} className="mobile-nav-item">
                  <button
                    type="button"
                    className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, item)}
                  >
                    <span>{item.name}</span>
                    {isActive ? (
                      <span className="badge-active">Aktif</span>
                    ) : (
                      <span className="badge-hint">Eksplor</span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="mobile-drawer-cta">
            <button
              type="button"
              className="btn btn-primary btn-block"
              onClick={handleStartAdventure}
            >
              🚀 Mulai Petualangan
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
