import { useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroCards } from './components/IntroCards';
import { QuickMoleculeViewer } from './components/QuickMoleculeViewer';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { MoleculeDecorations } from './components/MoleculeDecorations';
import { InteractiveDetailModal } from './components/InteractiveDetailModal';

export function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [modalTopic, setModalTopic] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 4500);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartAdventure = () => {
    scrollToSection('pengenalan');
    showToast('🚀 Selamat datang di petualangan ChemBond! Mulai eksplorasi dari tiga kartu di bawah.');
  };

  const handleCardAction = (cardTitle: string) => {
    setModalTopic(cardTitle);
  };

  return (
    <div className="chembond-app">
      {/* Background Floating Molecules & Subtle Sparkles */}
      <MoleculeDecorations />

      {/* Main Navbar */}
      <Navbar onShowToast={showToast} />

      <main>
        {/* Hero Section */}
        <Hero onScrollToSection={scrollToSection} />

        {/* Bagian Pengenalan: 3 Kartu (Kenali Atom, Jelajahi Ikatan, Eksperimen Kimia) */}
        <IntroCards onCardAction={handleCardAction} />

        {/* Galeri Ikatan Nyata: Edukasi Ikatan Kimia SMA */}
        <QuickMoleculeViewer />

        {/* Bagian Ajakan (Call to Action) */}
        <CallToAction
          onStartAdventure={handleStartAdventure}
          onExploreCards={() => scrollToSection('pengenalan')}
        />
      </main>

      {/* Footer */}
      <Footer onNavClick={(menuName) => showToast(`🧭 Menu "${menuName}" segera hadir!`)} />

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
