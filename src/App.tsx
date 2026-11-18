
import { useState, useEffect } from 'react';
import './App.css';

import { Navbar, type Page } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroCards } from './components/IntroCards';
import { QuickMoleculeViewer } from './components/QuickMoleculeViewer';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { MoleculeDecorations } from './components/MoleculeDecorations';
import { InteractiveDetailModal } from './components/InteractiveDetailModal';
import { MateriPage } from './components/MateriPage';
import { SimulasiPage } from './components/SimulasiPage';
import { QuizSection } from './components/QuizSection';
import { AuthLayout } from './components/auth/AuthLayout';

import type { UserProfile } from './types/auth';
import {
  subscribeToAuthChanges,
  logoutUser,
} from './services/authService';

export function App() {
  const [currentPage, setCurrentPage] = useState<Page>('Beranda');
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [modalTopic, setModalTopic] = useState<string | null>(null);

  // Pantau sesi autentikasi secara realtime
  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges((user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  // Notifikasi
  const showToast = (message: string) => {
    setToastMessage(message);

    setTimeout(() => {
      setToastMessage((prev) =>
        prev === message ? null : prev
      );
    }, 4500);
  };

  // Logout
  const handleLogout = async () => {
    try {
      await logoutUser();
      setCurrentUser(null);
      setCurrentPage('Beranda');

      showToast('Sesi akun ChemBond telah berhasil diakhiri.');
    } catch {
      showToast('Gagal mengakhiri sesi akun.');
    }
  };

  // Setelah login berhasil
  const handleAuthSuccess = () => {
    showToast('Berhasil masuk ke ChemBond! Selamat belajar.');

    setCurrentPage('Beranda');

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Navigasi halaman
  const handleNavigate = (page: Page) => {
    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Scroll ke bagian tertentu
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  // Membuka modal detail
  const handleCardAction = (cardTitle: string) => {
    setModalTopic(cardTitle);
  };

  return (
    <div className="chembond-app">

      {/* Background Molecules */}
      <MoleculeDecorations />

      {/* Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onShowToast={showToast}
        currentUser={currentUser}
        onLogout={handleLogout}
      />

      {/* Halaman Beranda */}
      {currentPage === 'Beranda' && (
        <main id="main-content">
          <Hero onScrollToSection={scrollToSection} />

          <IntroCards
            onCardAction={handleCardAction}
          />

          <QuickMoleculeViewer />

          <CallToAction
            onStartAdventure={() => handleNavigate('Materi')}
            onExploreCards={() => scrollToSection('pengenalan')}
          />
        </main>
      )}

      {/* Halaman Materi */}
      {currentPage === 'Materi' && (
        <MateriPage />
      )}

      {/* Halaman Kuis */}
      {currentPage === 'Kuis' && (
        <QuizSection onNavigate={handleNavigate} />
      )}

      {/* Halaman Login */}
      {currentPage === 'Masuk' && (
        <AuthLayout
          onNavigate={handleNavigate}
          initialView="login"
          onAuthSuccess={handleAuthSuccess}
        />
      )}

      {/* Halaman Simulasi */}
      {currentPage === 'Simulasi' && (
        <SimulasiPage onNavigate={handleNavigate} />
      )}

      {/* Halaman Progres */}
      {currentPage === 'Progres' && (
        <main
          id="main-content"
          className="page-placeholder-section"
        >
          <div className="container">
            <div className="placeholder-panel">

              <div className="placeholder-badge-pill">
                <span>
                  🔬 Halaman Progres • ChemBond SMA
                </span>
              </div>

              <h1 className="placeholder-heading">
                Progres dan Riwayat Belajar
              </h1>

              <p className="placeholder-subheading">
                Pemantauan status penyelesaian materi dan
                pencatatan riwayat skor kuis berbasis
                Local Storage tanpa perlu login.
              </p>

              <div className="placeholder-status-card">
                <div className="placeholder-status-icon">
                  🚀
                </div>

                <div className="placeholder-status-info">
                  <h4>Fondasi Navigasi Aktif</h4>

                  <p>
                    Navigasi halaman Progres telah terhubung
                    dengan state aplikasi. Komponen dan fitur
                    halaman ini sedang disiapkan untuk tahap
                    implementasi berikutnya.
                  </p>
                </div>
              </div>

              <div className="placeholder-actions">
                <button
                  type="button"
                  className="btn btn-capsule-cta-main"
                  onClick={() => handleNavigate('Beranda')}
                >
                  ← Kembali ke Beranda
                </button>
              </div>

            </div>
          </div>
        </main>
      )}

      {/* Footer */}
      <Footer
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Modal Detail */}
      <InteractiveDetailModal
        topic={modalTopic}
        onClose={() => setModalTopic(null)}
      />

      {/* Notifikasi */}
      {toastMessage && (
        <div
          className="toast-banner"
          role="status"
          aria-live="polite"
        >
          <p className="toast-message">
            {toastMessage}
          </p>

          <button
            type="button"
            className="toast-close-btn"
            onClick={() => setToastMessage(null)}
            aria-label="Tutup notifikasi"
          >
            ✕
          </button>
        </div>
      )}

    </div>
  );
}

export default App;