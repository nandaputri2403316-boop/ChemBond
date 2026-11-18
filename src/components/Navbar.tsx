import React from 'react';
import type { UserProfile } from '../types/auth';

export type Page =
  | 'Dashboard'
  | 'Beranda'
  | 'Materi'
  | 'Simulasi'
  | 'Kuis'
  | 'Progres'
  | 'Masuk';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onShowToast?: (message: string) => void;
  currentUser?: UserProfile | null;
  onLogout?: () => void;
  onOpenProfile?: () => void;
  onToggleSidebar?: () => void;
  isSidebarOpen?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  currentUser,
  onLogout,
  onOpenProfile,
  onToggleSidebar,
  isSidebarOpen,
}) => {
  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        {/* Left Side: Sidebar Toggle & Brand Logo */}
        <div className="navbar-left-cluster">
          {onToggleSidebar && (
            <button
              type="button"
              className={`sidebar-toggle-btn ${isSidebarOpen ? 'active' : ''}`}
              onClick={onToggleSidebar}
              aria-label="Toggle navigasi utama"
              title="Buka Navigasi ChemBond"
            >
              <span className="toggle-bar" />
              <span className="toggle-bar" />
              <span className="toggle-bar" />
            </button>
          )}

          {/* Brand Logo */}
          <a
            href="#beranda"
            className="navbar-brand"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('Beranda');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            aria-label="Kembali ke Beranda ChemBond"
          >
            <div className="brand-logo-icon">
              <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="19" fill="#FFFFFF" stroke="#F72F91" strokeWidth="2.5" />
                <ellipse cx="20" cy="20" rx="14" ry="5.5" stroke="#FF9B52" strokeWidth="2" transform="rotate(30 20 20)" />
                <ellipse cx="20" cy="20" rx="14" ry="5.5" stroke="#D91D78" strokeWidth="2" transform="rotate(-30 20 20)" />
                <circle cx="20" cy="20" r="5.5" fill="#F72F91" />
                <circle cx="18.5" cy="18.5" r="1.8" fill="#FFFFFF" />
                <circle cx="9" cy="14" r="2.2" fill="#38E1FF" />
                <circle cx="31" cy="26" r="2.2" fill="#FFD152" />
              </svg>
            </div>
            <div className="brand-text">
              <span className="brand-name">ChemBond</span>
              <span className="brand-sub">SMA Kimia</span>
            </div>
          </a>
        </div>

        {/* 
          NOTE: Navigasi horizontal bagian atas yang tumpang tindih telah dihapus 
          sesuai aturan Aturan Khusus Navigasi — Hapus Navigasi Horizontal.
          Sidebar kini berfungsi sebagai navigasi utama tunggal.
        */}

        {/* Right Side: Account Actions & CTAs */}
        <div className="navbar-action desktop-action">
          {currentUser ? (
            <div className="navbar-user-logged">
              <button
                type="button"
                className="navbar-user-name-btn"
                onClick={onOpenProfile}
                title={`Profil ${currentUser.namaLengkap} (${currentUser.role === 'teacher' ? 'Guru' : 'Siswa'})`}
              >
                <span>{currentUser.role === 'teacher' ? '👨‍🏫 Guru' : '🎓'}</span>
                <span>{currentUser.namaLengkap.split(' ')[0]}</span>
              </button>

              {currentPage !== 'Dashboard' ? (
                <button
                  type="button"
                  className="btn btn-nav-cta btn-nav-dashboard-shortcut"
                  onClick={() => {
                    onNavigate('Dashboard');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  title="Buka Dashboard Pribadi"
                >
                  <span className="btn-icon">📊</span>
                  <span>Dashboard</span>
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-nav-cta btn-nav-beranda-shortcut"
                  onClick={() => {
                    onNavigate('Beranda');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  title="Buka Halaman Beranda"
                >
                  <span className="btn-icon">🌟</span>
                  <span>Beranda</span>
                </button>
              )}

              {onLogout && (
                <button
                  type="button"
                  className="btn btn-nav-auth btn-nav-logout"
                  onClick={onLogout}
                  title="Keluar dari akun"
                >
                  Keluar
                </button>
              )}
            </div>
          ) : (
            <div className="navbar-guest-actions">
              <button
                type="button"
                className={`btn btn-nav-auth ${currentPage === 'Masuk' ? 'active' : ''}`}
                onClick={() => {
                  onNavigate('Masuk');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                aria-label="Masuk ke Akun ChemBond"
                title="Masuk ke Akun ChemBond"
              >
                <span className="btn-icon">👤</span>
                <span>Masuk</span>
              </button>

              <button
                type="button"
                className="btn btn-nav-cta"
                onClick={() => {
                  onNavigate('Materi');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <span className="btn-icon">🚀</span>
                <span>Mulai Belajar</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
