import React from 'react';
import type { Page } from '../Navbar';
import type { UserProfile } from '../../types/auth';
import './AppSidebar.css';

interface AppSidebarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  currentUser: UserProfile | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenProfile: () => void;
  onLogout?: () => void;
}

export const AppSidebar: React.FC<AppSidebarProps> = ({
  currentPage,
  onNavigate,
  currentUser,
  isOpen,
  onClose,
  onOpenProfile,
  onLogout,
}) => {
  const handleItemClick = (page: Page) => {
    onNavigate(page);
    onClose();
  };

  const navMenuItems: { page: Page; label: string; icon: string; hint: string }[] = [
    {
      page: 'Dashboard',
      label: 'Dashboard',
      icon: '🏠',
      hint: 'Pusat informasi aktivitas dan progres pengguna',
    },
    {
      page: 'Beranda',
      label: 'Beranda',
      icon: '🌟',
      hint: 'Pengenalan ChemBond dan eksplorasi konsep ikatan kimia',
    },
    {
      page: 'Materi',
      label: 'Materi Kimia',
      icon: '📚',
      hint: 'Tiga modul pembelajaran Ikatan Kimia SMA Kelas X',
    },
    {
      page: 'Simulasi',
      label: 'Simulasi & Lab Virtual',
      icon: '🧪',
      hint: 'Simulasi 3D PhET, bentuk geometri VSEPR, & ion builder',
    },
    {
      page: 'Kuis',
      label: 'Kuis & Latihan',
      icon: '📝',
      hint: 'Latihan soal dan evaluasi pemahaman kimia',
    },
    {
      page: 'Progres',
      label: 'Progres Belajar',
      icon: '📊',
      hint: 'Pemantauan status penyelesaian materi dan riwayat skor',
    },
  ];

  return (
    <>
      {/* Backdrop for mobile drawer */}
      {isOpen && (
        <div
          className="sidebar-backdrop"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`app-primary-sidebar ${isOpen ? 'drawer-open' : 'sidebar-closed'}`}
        aria-label="Navigasi Utama ChemBond"
      >
        {/* Brand Header */}
        <div className="sidebar-brand-header">
          <div className="sidebar-brand-logo">
            <svg width="34" height="34" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <circle cx="20" cy="20" r="19" fill="#FFFFFF" stroke="#F72F91" strokeWidth="2.5" />
              <ellipse cx="20" cy="20" rx="14" ry="5.5" stroke="#FF9B52" strokeWidth="2" transform="rotate(30 20 20)" />
              <ellipse cx="20" cy="20" rx="14" ry="5.5" stroke="#D91D78" strokeWidth="2" transform="rotate(-30 20 20)" />
              <circle cx="20" cy="20" r="5.5" fill="#F72F91" />
              <circle cx="18.5" cy="18.5" r="1.8" fill="#FFFFFF" />
              <circle cx="9" cy="14" r="2.2" fill="#38E1FF" />
              <circle cx="31" cy="26" r="2.2" fill="#FFD152" />
            </svg>
            <div className="sidebar-brand-text">
              <span className="brand-main-title">ChemBond</span>
              <span className="brand-tag-line">
                {currentUser?.role === 'teacher' ? 'Teacher Workspace' : 'Learning Space'}
              </span>
            </div>
          </div>

          <button
            type="button"
            className="sidebar-close-btn"
            onClick={onClose}
            aria-label="Tutup navigasi"
          >
            ✕
          </button>
        </div>

        {/* Primary Navigation Menu */}
        <nav className="sidebar-nav-container">
          <div className="nav-section-label">NAVIGASI UTAMA</div>
          <ul className="sidebar-menu-list">
            {navMenuItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <li key={item.page}>
                  <button
                    type="button"
                    className={`sidebar-menu-button ${isActive ? 'active' : ''}`}
                    onClick={() => handleItemClick(item.page)}
                    title={item.hint}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span className="menu-icon">{item.icon}</span>
                    <span className="menu-text">{item.label}</span>
                    {isActive && <span className="active-dot" aria-hidden="true" />}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="nav-section-label">AKUN & PENGATURAN</div>
          <ul className="sidebar-menu-list">
            {currentUser ? (
              <>
                <li>
                  <button
                    type="button"
                    className="sidebar-menu-button"
                    onClick={() => {
                      onOpenProfile();
                      onClose();
                    }}
                  >
                    <span className="menu-icon">👤</span>
                    <span className="menu-text">Profil Saya</span>
                  </button>
                </li>
                {onLogout && (
                  <li>
                    <button
                      type="button"
                      className="sidebar-menu-button menu-logout"
                      onClick={() => {
                        onLogout();
                        onClose();
                      }}
                    >
                      <span className="menu-icon">🚪</span>
                      <span className="menu-text">Keluar Akun</span>
                    </button>
                  </li>
                )}
              </>
            ) : (
              <li>
                <button
                  type="button"
                  className={`sidebar-menu-button ${currentPage === 'Masuk' ? 'active' : ''}`}
                  onClick={() => handleItemClick('Masuk')}
                >
                  <span className="menu-icon">🔑</span>
                  <span className="menu-text">Masuk / Daftar</span>
                  {currentPage === 'Masuk' && <span className="active-dot" aria-hidden="true" />}
                </button>
              </li>
            )}
          </ul>
        </nav>

        {/* User Profile Mini Footer */}
        <div className="sidebar-account-footer">
          {currentUser ? (
            <div
              className="user-badge-card"
              onClick={() => {
                onOpenProfile();
                onClose();
              }}
              role="button"
              tabIndex={0}
              title="Klik untuk melihat profil"
            >
              <div className="user-avatar-circle">
                {currentUser.namaLengkap ? currentUser.namaLengkap.charAt(0).toUpperCase() : 'U'}
              </div>
              <div className="user-meta-info">
                <span className="user-full-name">{currentUser.namaLengkap}</span>
                <span className="user-role-label">
                  {currentUser.role === 'teacher'
                    ? 'Guru Berwenang'
                    : currentUser.kelas
                      ? `Siswa Kelas ${currentUser.kelas}`
                      : 'Siswa ChemBond'}
                </span>
              </div>
            </div>
          ) : (
            <div className="guest-badge-card">
              <div className="guest-icon">🧪</div>
              <div className="guest-meta">
                <span className="guest-title">Pengguna Tamu</span>
                <span className="guest-sub">Mode Belajar Lokal</span>
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

