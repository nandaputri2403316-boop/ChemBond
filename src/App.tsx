import { useState, useEffect } from 'react';
import './App.css';

import { Navbar, type Page } from './components/Navbar';
import { AppSidebar } from './components/navigation/AppSidebar';
import { BerandaPage } from './components/beranda/BerandaPage';
import { StudentDashboard } from './components/student/StudentDashboard';
import { TeacherDashboard } from './components/teacher/TeacherDashboard';
import StudentProfile from './components/student/StudentProfile';
import { MateriPage } from './components/MateriPage';
import { SimulasiPage } from './components/SimulasiPage';
import { QuizSection } from './components/QuizSection';
import { ProgresPage } from './components/ProgresPage';
import { AuthLayout } from './components/auth/AuthLayout';
import { Footer } from './components/Footer';
import { MoleculeDecorations } from './components/MoleculeDecorations';
import { InteractiveDetailModal } from './components/InteractiveDetailModal';
import type { UserProfile } from './types/auth';
import {
  subscribeToAuthChanges,
  logoutUser,
  updateUserProfileDoc,
} from './services/authService';

export function App() {
  const [currentPage, setCurrentPage] = useState<Page>('Beranda');
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  // Default terbuka di desktop (>900px), dan tertutup di mobile (<=900px)
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth > 900;
    }
    return true;
  });
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [modalTopic, setModalTopic] = useState<string | null>(null);

  // Pantau sesi autentikasi secara realtime
  useEffect(() => {
    const unsubscribe = subscribeToAuthChanges((user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  // Adaptasi state sidebar ketika menyeberangi breakpoint desktop/mobile
  useEffect(() => {
    let lastIsMobile = typeof window !== 'undefined' ? window.innerWidth <= 900 : false;
    const handleResize = () => {
      const isMobile = window.innerWidth <= 900;
      if (isMobile !== lastIsMobile) {
        lastIsMobile = isMobile;
        setIsSidebarOpen(!isMobile);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 4500);
  };

  const handleLogout = async () => {
    try {
      await logoutUser();
      setCurrentUser(null);
      setIsProfileOpen(false);
      setCurrentPage('Beranda');
      showToast('Sesi akun ChemBond telah berhasil diakhiri.');
    } catch {
      showToast('Gagal mengakhiri sesi akun.');
    }
  };

  const handleAuthSuccess = () => {
    showToast('Berhasil masuk ke ChemBond! Selamat belajar.');
    // Setelah login, arahkan pengguna ke Dashboard utama
    setCurrentPage('Dashboard');
    setIsProfileOpen(false);
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    setIsProfileOpen(false);
    setIsSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUpdateProfile = async (data: {
    namaLengkap: string;
    kelas: string;
    nomorPresensi: number;
  }) => {
    if (!currentUser) return;
    const updated: UserProfile = {
      ...currentUser,
      namaLengkap: data.namaLengkap,
      kelas: data.kelas,
      nomorPresensi: data.nomorPresensi,
      profileCompleted: true,
    };

    try {
      await updateUserProfileDoc(currentUser.uid, updated);
      setCurrentUser(updated);
      showToast('Profil pengguna berhasil diperbarui!');
    } catch {
      setCurrentUser(updated);
      showToast('Profil diperbarui pada sesi saat ini.');
    }
  };

  return (
    <div className="chembond-app">
      {/* Background Floating Molecules & Subtle Sparkles */}
      <MoleculeDecorations />

      {/* Main App Navbar (Navigasi horizontal atas telah dihapus sesuai instruksi) */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onShowToast={showToast}
        currentUser={currentUser}
        onLogout={handleLogout}
        onOpenProfile={() => setIsProfileOpen(true)}
        onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        isSidebarOpen={isSidebarOpen}
      />

      {/* App Body Layout: Unified Primary Sidebar + Content Viewport */}
      {currentPage === 'Masuk' ? (
        // Fullscreen clean split-screen for Login & Register
        <AuthLayout
          onNavigate={handleNavigate}
          initialView="login"
          onAuthSuccess={handleAuthSuccess}
        />
      ) : (
        <div className="app-core-layout">
          {/* Primary Unified Sidebar Navigation */}
          <AppSidebar
            currentPage={currentPage}
            onNavigate={handleNavigate}
            currentUser={currentUser}
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            onOpenProfile={() => setIsProfileOpen(true)}
            onLogout={handleLogout}
          />

          {/* Main Viewport Content */}
          <div className="app-content-viewport">
            {/* Tampilan Profil Pengguna (bila sedang dibuka) */}
            {isProfileOpen && currentUser ? (
              <StudentProfile
                user={currentUser}
                onBack={() => setIsProfileOpen(false)}
                onUpdateProfile={handleUpdateProfile}
              />
            ) : (
              <>
                {/* 1. HALAMAN DASHBOARD (Pusat aktivitas dan progres) */}
                {currentPage === 'Dashboard' && (
                  <>
                    {currentUser?.role === 'teacher' ? (
                      <TeacherDashboard
                        user={currentUser}
                        onNavigate={handleNavigate}
                        onOpenProfile={() => setIsProfileOpen(true)}
                      />
                    ) : currentUser?.role === 'student' ? (
                      <StudentDashboard
                        user={currentUser}
                        onNavigate={handleNavigate}
                        onOpenProfile={() => setIsProfileOpen(true)}
                      />
                    ) : (
                      // Unauthenticated Guest Prompt when clicking Dashboard
                      <main id="main-content" className="page-placeholder-section">
                        <div className="container">
                          <div className="placeholder-panel">
                            <div className="placeholder-badge-pill">
                              <span>≡ƒöÆ Akses Personal Dashboard ΓÇó ChemBond</span>
                            </div>

                            <h1 className="placeholder-heading">
                              Masuk untuk Mengakses Dashboard Pribadi
                            </h1>

                            <p className="placeholder-subheading">
                              Dashboard merupakan ruang belajar dan pemantauan progres personal Anda.
                              Silakan masuk atau daftar akun ChemBond untuk melihat capaian pembelajaran.
                            </p>

                            <div className="placeholder-actions">
                              <button
                                type="button"
                                className="btn btn-capsule-cta-main"
                                onClick={() => handleNavigate('Masuk')}
                              >
                                ≡ƒöæ Masuk ke Akun ChemBond
                              </button>
                              <button
                                type="button"
                                className="btn btn-capsule-secondary"
                                onClick={() => handleNavigate('Beranda')}
                              >
                                ≡ƒîƒ Kembali ke Beranda
                              </button>
                            </div>
                          </div>
                        </div>
                      </main>
                    )}
                  </>
                )}

                {/* 2. HALAMAN BERANDA (Interactive Chemistry Learning Landing Page) */}
                {currentPage === 'Beranda' && (
                  <BerandaPage
                    onNavigate={handleNavigate}
                    onExploreTopic={(topic) => setModalTopic(topic)}
                  />
                )}

                {/* 3. HALAMAN MATERI KIMIA */}
                {currentPage === 'Materi' && <MateriPage onNavigate={handleNavigate} />}

                {/* 4. HALAMAN KUIS & LATIHAN */}
                {currentPage === 'Kuis' && (
                  <QuizSection
                    key={currentUser?.uid || 'guest'}
                    onNavigate={handleNavigate}
                    currentUser={currentUser}
                  />
                )}

                {/* 5. HALAMAN SIMULASI */}
                {currentPage === 'Simulasi' && <SimulasiPage onNavigate={handleNavigate} />}

                {/* 6. HALAMAN PROGRES */}
                {currentPage === 'Progres' && (
                  <ProgresPage
                    onNavigate={handleNavigate}
                    currentUser={currentUser}
                  />
                )}
              </>
            )}

            {/* Footer */}
            <Footer
              currentPage={currentPage}
              onNavigate={handleNavigate}
            />
          </div>
        </div>
      )}

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
            Γ£ò
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
