import React, { useState } from 'react';
import './AuthPage.css';
import { LoginPage } from './LoginPage';
import { RegisterPage } from './RegisterPage';
import { MolecularAuthVisual } from './MolecularAuthVisual';
import type { Page } from '../Navbar';

interface AuthLayoutProps {
  onNavigate: (page: Page) => void;
  initialView?: 'login' | 'register';
  onAuthSuccess?: () => void;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({
  onNavigate,
  initialView = 'login',
  onAuthSuccess,
}) => {
  const [currentView, setCurrentView] = useState<'login' | 'register'>(initialView);
  const [showPermissionsInfo, setShowPermissionsInfo] = useState<boolean>(false);

  const handleBackToHome = () => {
    onNavigate('Beranda');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSuccess = () => {
    if (onAuthSuccess) {
      onAuthSuccess();
    } else {
      handleBackToHome();
    }
  };

  return (
    <main id="main-content" className="auth-master-page" aria-label="Halaman Autentikasi ChemBond">
      {/* Top Floating Navigation */}
      <div className="auth-nav-strip">
        <button
          type="button"
          className="auth-return-button"
          onClick={handleBackToHome}
          aria-label="Kembali ke Beranda ChemBond"
        >
          <span className="return-arrow" aria-hidden="true">←</span>
          <span>Kembali ke Beranda</span>
        </button>

        <div className="auth-view-switcher" role="tablist" aria-label="Pilihan Autentikasi">
          <button
            type="button"
            role="tab"
            aria-selected={currentView === 'login'}
            className={`view-tab-btn ${currentView === 'login' ? 'active' : ''}`}
            onClick={() => setCurrentView('login')}
          >
            Masuk
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={currentView === 'register'}
            className={`view-tab-btn ${currentView === 'register' ? 'active' : ''}`}
            onClick={() => setCurrentView('register')}
          >
            Daftar Akun
          </button>
        </div>
      </div>

      {/* Split-Screen Auth Container */}
      <div className="auth-splitscreen-container">
        {/* Panel Kiri: Form Login / Registrasi */}
        <div className="auth-panel-form">
          <div className="auth-panel-inner">
            {currentView === 'login' ? (
              <LoginPage
                onSwitchToRegister={() => {
                  setCurrentView('register');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onSuccess={handleSuccess}
              />
            ) : (
              <RegisterPage
                onSwitchToLogin={() => {
                  setCurrentView('login');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onSuccess={handleSuccess}
              />
            )}
          </div>
        </div>

        {/* Panel Kanan: Visual Molekul 3D Glossy & Identitas ChemBond */}
        <div className="auth-panel-visual">
          <MolecularAuthVisual />
        </div>
      </div>

      {/* Information Drawer: Panduan Hak Akses Pengguna */}
      <aside className="auth-access-guide-container">
        <button
          type="button"
          className="access-guide-toggle"
          onClick={() => setShowPermissionsInfo(!showPermissionsInfo)}
          aria-expanded={showPermissionsInfo}
        >
          <span className="guide-icon">📋</span>
          <span className="guide-title">Panduan Hak Akses & Keamanan ChemBond</span>
          <span className="guide-arrow">{showPermissionsInfo ? '▲ Tutup' : '▼ Lihat Ringkasan'}</span>
        </button>

        {showPermissionsInfo && (
          <div className="access-guide-dropdown">
            <div className="guide-table-responsive">
              <table className="access-matrix-table">
                <thead>
                  <tr>
                    <th>Peran Pengguna</th>
                    <th>Belajar Mandiri</th>
                    <th>Kirim/Baca Skor Pribadi</th>
                    <th>Pantau Hasil Seluruh Kelas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="role-chip chip-guest">Tamu</span>
                      <div className="role-sub">Tanpa login (Local Only)</div>
                    </td>
                    <td><span className="status-badge badge-yes">Diizinkan</span></td>
                    <td><span className="status-badge badge-no">Ditolak</span></td>
                    <td><span className="status-badge badge-no">Ditolak</span></td>
                  </tr>
                  <tr>
                    <td>
                      <span className="role-chip chip-student">Siswa ChemBond</span>
                      <div className="role-sub">Akun siswa terdaftar</div>
                    </td>
                    <td><span className="status-badge badge-yes">Diizinkan</span></td>
                    <td><span className="status-badge badge-yes">Diizinkan (Milik Sendiri)</span></td>
                    <td><span className="status-badge badge-no">Ditolak</span></td>
                  </tr>
                  <tr>
                    <td>
                      <span className="role-chip chip-teacher">Guru Berwenang</span>
                      <div className="role-sub">Satu akun guru resmi</div>
                    </td>
                    <td><span className="status-badge badge-yes">Diizinkan</span></td>
                    <td><span className="status-badge badge-yes">Baca Hasil Siswa</span></td>
                    <td><span className="status-badge badge-yes">Diizinkan (Semua Siswa)</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </aside>
    </main>
  );
};
