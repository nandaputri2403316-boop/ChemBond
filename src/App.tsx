
import { useState } from 'react';
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
import { QuizSection } from './components/QuizSection';
import { AuthLayout } from './components/auth/AuthLayout';
import type { UserProfile } from './types/auth';

export function App() {
  const [currentPage, setCurrentPage] = useState<Page>('Beranda');
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [modalTopic, setModalTopic] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 4500);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    showToast('Sesi akun ChemBond telah berhasil diakhiri.');
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCardAction = (cardTitle: string) => {
    setModalTopic(cardTitle);
  };

  return (
    <div className="chembond-app">
      {/* Background Floating Molecules & Subtle Sparkles */}
      <MoleculeDecorations />

      {/* Main Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onShowToast={showToast}
        currentUser={currentUser}
        onLogout={handleLogout}
      />

      {/* Page Content: Beranda */}
      {currentPage === 'Beranda' && (
        <main id="main-content">
          <Hero onScrollToSection={scrollToSection} />

          <IntroCards onCardAction={handleCardAction} />

          <QuickMoleculeViewer />

          <CallToAction
            onStartAdventure={() => handleNavigate('Materi')}
            onExploreCards={() => scrollToSection('pengenalan')}
          />
        </main>
      )}

      {/* Page Content: Materi */}
      {currentPage === 'Materi' && <MateriPage />}

      {/* Page Content: Kuis */}
      {currentPage === 'Kuis' && <QuizSection onNavigate={handleNavigate} />}

      {/* Page Content: Masuk / Registrasi Akun */}
      {currentPage === 'Masuk' && (
        <AuthLayout onNavigate={handleNavigate} initialView="login" />
      )}

      {/* Page Content: Simulasi dan Progres */}
      {(currentPage === 'Simulasi' || currentPage === 'Progres') && (
        <main id="main-content" className="page-placeholder-section">
          <div className="container">
            <div className="placeholder-panel">
              <div className="placeholder-badge-pill">
                <span>🔬 Halaman {currentPage} • ChemBond SMA</span>
              </div>

              <h1 className="placeholder-heading">
                {currentPage === 'Simulasi' &&
                  'Simulasi Interaktif Ikatan Kimia'}
                {currentPage === 'Progres' &&
                  'Progres dan Riwayat Belajar'}
              </h1>

              <p className="placeholder-subheading">
                {currentPage === 'Simulasi' &&
                  'Visualisasi interaktif perpindahan elektron pada ikatan ion dan pemakaian bersama pasangan elektron pada ikatan kovalen.'}
                {currentPage === 'Progres' &&
                  'Pemantauan status penyelesaian materi dan pencatatan riwayat skor kuis berbasis Local Storage tanpa perlu login.'}
              </p>

              <div className="placeholder-status-card">
                <div className="placeholder-status-icon">🚀</div>

                <div className="placeholder-status-info">
                  <h4>Fondasi Navigasi Aktif</h4>
                  <p>
                    Navigasi halaman {currentPage} telah terhubung dengan
                    state aplikasi. Komponen dan fitur halaman ini sedang
                    disiapkan untuk tahap implementasi berikutnya.
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

      {/* Interactive Detail Modal Popup */}
      <InteractiveDetailModal
        topic={modalTopic}
        onClose={() => setModalTopic(null)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-banner" role="status" aria-live="polite">
          <p className="toast-message">{toastMessage}</p>

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
