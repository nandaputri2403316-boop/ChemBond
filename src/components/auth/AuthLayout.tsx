import React, { useState } from 'react';
import './AuthPage.css';
import { LoginPage } from './LoginPage';
import { RegisterPage } from './RegisterPage';
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
    <main id="main-content" className="auth-wrapper" aria-label="Halaman Autentikasi ChemBond">
      {/* Tombol Navigasi Kembali */}
      <div className="auth-top-navigation">
        <button
          type="button"
          className="auth-back-btn"
          onClick={handleBackToHome}
          aria-label="Kembali ke Beranda ChemBond"
        >
          <span aria-hidden="true">←</span>
          <span>Kembali ke Beranda</span>
        </button>
      </div>

      {/* Kartu Formulir Autentikasi */}
      <div className="auth-card">
        {/* Dekorasi Visual Molekul Halus */}
        <div className="auth-card-decor" aria-hidden="true" />

        {currentView === 'login' ? (
          <LoginPage
            onSwitchToRegister={() => {
              setCurrentView('register');
              window.scrollTo({ top: 80, behavior: 'smooth' });
            }}
            onSuccess={handleSuccess}
          />
        ) : (
          <RegisterPage
            onSwitchToLogin={() => {
              setCurrentView('login');
              window.scrollTo({ top: 80, behavior: 'smooth' });
            }}
            onSuccess={handleSuccess}
          />
        )}
      </div>

      {/* Informasi Hak Akses Pengguna (Sesuai Konsep Akses ChemBond) */}
      <section className="auth-permissions-card" aria-label="Informasi Hak Akses ChemBond">
        <button
          type="button"
          className="permissions-toggle-btn"
          onClick={() => setShowPermissionsInfo(!showPermissionsInfo)}
          aria-expanded={showPermissionsInfo}
        >
          <span>📋 Panduan Hak Akses Pengguna ChemBond</span>
          <span>{showPermissionsInfo ? '▲ Tutup' : '▼ Lihat'}</span>
        </button>

        {showPermissionsInfo && (
          <div className="permissions-table-wrap">
            <table className="permissions-table">
              <thead>
                <tr>
                  <th>Jenis Pengguna</th>
                  <th>Belajar Lokal</th>
                  <th>Kirim/Baca Hasil Sendiri</th>
                  <th>Baca Hasil Kelas</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Tamu</strong>
                    <br />
                    <small>Tanpa akun</small>
                  </td>
                  <td><span className="perm-badge-yes">Bisa</span></td>
                  <td><span className="perm-badge-no">Ditolak</span></td>
                  <td><span className="perm-badge-no">Ditolak</span></td>
                </tr>
                <tr>
                  <td>
                    <strong>Akun di Luar Kelas</strong>
                    <br />
                    <small>Belum terverifikasi</small>
                  </td>
                  <td><span className="perm-badge-yes">Bisa</span></td>
                  <td><span className="perm-badge-no">Ditolak</span></td>
                  <td><span className="perm-badge-no">Ditolak</span></td>
                </tr>
                <tr>
                  <td>
                    <strong>Siswa Anggota Kelas</strong>
                    <br />
                    <small>Terdaftar resmi</small>
                  </td>
                  <td><span className="perm-badge-yes">Bisa</span></td>
                  <td><span className="perm-badge-yes">Bisa (Sendiri)</span></td>
                  <td><span className="perm-badge-no">Ditolak</span></td>
                </tr>
                <tr>
                  <td>
                    <strong>Guru Berwenang</strong>
                    <br />
                    <small>Satu akun resmi</small>
                  </td>
                  <td><span className="perm-badge-yes">Bisa</span></td>
                  <td><span className="perm-badge-yes">Baca Siswa</span></td>
                  <td><span className="perm-badge-yes">Bisa (Semua)</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
};

