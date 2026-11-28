import React, { useState } from 'react';
import type { UserProfile } from '../../types/auth';
import './StudentProfile.css';

interface StudentProfileProps {
  user: UserProfile;
  onBack: () => void;
  onUpdateProfile: (data: {
    namaLengkap: string;
    kelas: string;
    nomorPresensi: number;
  }) => Promise<void>;
}

export const StudentProfile: React.FC<StudentProfileProps> = ({
  user,
  onBack,
  onUpdateProfile,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [namaLengkap, setNamaLengkap] = useState(user.namaLengkap || '');
  const [kelas, setKelas] = useState(user.kelas || '');
  const [nomorPresensi, setNomorPresensi] = useState(
    user.nomorPresensi?.toString() || ''
  );

  const [error, setError] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    setError('');

    const trimmedName = namaLengkap.trim();
    const trimmedClass = kelas.trim();
    const trimmedPresensi = nomorPresensi.trim();

    if (!trimmedName || !trimmedClass || !trimmedPresensi) {
      setError('Semua data profil (Nama, Kelas, dan Presensi) wajib diisi.');
      return;
    }

    const attendanceNumber = Number(trimmedPresensi);

    if (
      !Number.isInteger(attendanceNumber) ||
      attendanceNumber < 1 ||
      attendanceNumber > 99
    ) {
      setError('Nomor presensi harus berupa angka bulat antara 1–99.');
      return;
    }

    try {
      setIsSaving(true);
      await onUpdateProfile({
        namaLengkap: trimmedName,
        kelas: trimmedClass,
        nomorPresensi: attendanceNumber,
      });
      setIsEditing(false);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Profil gagal diperbarui. Silakan periksa koneksi internet Anda.'
      );
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setNamaLengkap(user.namaLengkap || '');
    setKelas(user.kelas || '');
    setNomorPresensi(user.nomorPresensi?.toString() || '');
    setError('');
    setIsEditing(false);
  };

  // Inisial avatar
  const avatarInitial = (user.namaLengkap?.trim().charAt(0) || 'S').toUpperCase();

  return (
    <main className="student-profile-page">
      {/* Tombol Navigasi Kembali */}
      <button
        type="button"
        className="student-profile-back"
        onClick={onBack}
        aria-label="Kembali ke Dashboard Siswa"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        <span>Kembali ke Dashboard</span>
      </button>

      {/* Hero Header Profil */}
      <section className="profile-hero-card" aria-label="Ringkasan Profil Siswa">
        <div className="profile-hero-content">
          <div className="profile-hero-main">
            <div className="profile-hero-avatar" aria-hidden="true">
              {avatarInitial}
            </div>

            <div className="profile-hero-text">
              <span className="profile-hero-eyebrow">Akun Siswa ChemBond</span>
              <h1 className="profile-hero-name">
                {user.namaLengkap || 'Nama Siswa'}
              </h1>
              <div className="profile-hero-subtitle-row">
                <span className="profile-hero-role">
                  {user.role === 'student' ? 'Siswa ChemBond' : user.role === 'teacher' ? 'Guru Berwenang' : user.role}
                </span>
                <span className="profile-status-badge">
                  <span className="profile-status-dot" aria-hidden="true" />
                  Siswa Aktif
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bagian Konten: Tampilan Informasi atau Formulir Edit */}
      {isEditing ? (
        <section className="profile-section-card profile-edit-container" aria-label="Formulir Edit Profil">
          <div className="profile-section-header">
            <h2 className="profile-section-title">Edit Informasi Profil</h2>
            <p className="profile-section-subtitle">
              Lengkapi identitas akun siswa Anda dengan benar untuk keperluan evaluasi belajar.
            </p>
          </div>

          {error && (
            <div className="profile-error-banner" role="alert">
              <span className="profile-error-icon" aria-hidden="true">⚠️</span>
              <span>{error}</span>
            </div>
          )}

          <div className="profile-edit-grid">
            <div className="profile-field-group">
              <label htmlFor="profile-name" className="profile-field-label">
                <span>Nama Lengkap</span>
                <span className="profile-field-required" aria-hidden="true">*</span>
              </label>
              <input
                id="profile-name"
                type="text"
                className="profile-field-input"
                value={namaLengkap}
                onChange={(e) => setNamaLengkap(e.target.value)}
                placeholder="Masukkan nama lengkap Anda"
                required
              />
            </div>

            <div className="profile-field-group">
              <label htmlFor="profile-email" className="profile-field-label">
                <span>Email</span>
              </label>
              <input
                id="profile-email"
                type="email"
                className="profile-field-input"
                value={user.email}
                disabled
                aria-describedby="email-hint"
              />
              <span id="email-hint" className="profile-field-hint">
                Email terdaftar di ChemBond dan tidak dapat diubah.
              </span>
            </div>

            <div className="profile-field-group">
              <label htmlFor="profile-class" className="profile-field-label">
                <span>Kelas</span>
                <span className="profile-field-required" aria-hidden="true">*</span>
              </label>
              <input
                id="profile-class"
                type="text"
                className="profile-field-input"
                value={kelas}
                onChange={(e) => setKelas(e.target.value)}
                placeholder="Contoh: X-1 atau XI MIPA 1"
                required
              />
            </div>

            <div className="profile-field-group">
              <label htmlFor="profile-attendance" className="profile-field-label">
                <span>Nomor Presensi</span>
                <span className="profile-field-required" aria-hidden="true">*</span>
              </label>
              <input
                id="profile-attendance"
                type="number"
                min="1"
                max="99"
                className="profile-field-input"
                value={nomorPresensi}
                onChange={(e) => setNomorPresensi(e.target.value)}
                placeholder="Nomor presensi (1–99)"
                required
              />
            </div>
          </div>

          <div className="profile-form-actions">
            <button
              type="button"
              className="btn-cancel-profile"
              onClick={handleCancel}
              disabled={isSaving}
            >
              Batal
            </button>

            <button
              type="button"
              className="btn-save-profile"
              onClick={handleSave}
              disabled={isSaving}
              aria-label="Simpan perubahan profil"
            >
              {isSaving ? (
                <>
                  <span className="profile-spinner" aria-hidden="true">🔄</span>
                  <span>Menyimpan...</span>
                </>
              ) : (
                <>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Simpan Perubahan</span>
                </>
              )}
            </button>
          </div>
        </section>
      ) : (
        <section className="profile-section-card" aria-label="Detail Informasi Akun">
          <div className="profile-section-header">
            <h2 className="profile-section-title">Informasi Akun</h2>
            <p className="profile-section-subtitle">
              Detail identitas siswa yang tersimpan pada sistem pembelajaran ChemBond.
            </p>
          </div>

          {/* Grid 4 Kartu Informasi Utama */}
          <div className="profile-info-grid">
            {/* Card 1: Nama Lengkap */}
            <div className="profile-info-item">
              <div className="info-item-top">
                <div className="info-icon-bubble icon-nama" aria-hidden="true">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="info-item-meta">
                  <span className="info-item-label">Nama Lengkap</span>
                </div>
              </div>
              <div className="info-item-value">
                {user.namaLengkap || <span className="info-item-empty">Belum diisi</span>}
              </div>
            </div>

            {/* Card 2: Email */}
            <div className="profile-info-item">
              <div className="info-item-top">
                <div className="info-icon-bubble icon-email" aria-hidden="true">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div className="info-item-meta">
                  <span className="info-item-label">Email</span>
                </div>
              </div>
              <div className="info-item-value">
                {user.email || <span className="info-item-empty">-</span>}
              </div>
            </div>

            {/* Card 3: Kelas */}
            <div className="profile-info-item">
              <div className="info-item-top">
                <div className="info-icon-bubble icon-kelas" aria-hidden="true">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                  </svg>
                </div>
                <div className="info-item-meta">
                  <span className="info-item-label">Kelas</span>
                </div>
              </div>
              <div className="info-item-value">
                {user.kelas ? (
                  user.kelas.toLowerCase().startsWith('kelas') ? user.kelas : `Kelas ${user.kelas}`
                ) : (
                  <span className="info-item-empty">Belum diisi</span>
                )}
              </div>
            </div>

            {/* Card 4: Nomor Presensi */}
            <div className="profile-info-item">
              <div className="info-item-top">
                <div className="info-icon-bubble icon-presensi" aria-hidden="true">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                    <path d="m9 14 2 2 4-4"></path>
                  </svg>
                </div>
                <div className="info-item-meta">
                  <span className="info-item-label">Nomor Presensi</span>
                </div>
              </div>
              <div className="info-item-value">
                {user.nomorPresensi !== undefined && user.nomorPresensi !== null && String(user.nomorPresensi).trim() !== '' ? (
                  `No. ${user.nomorPresensi}`
                ) : (
                  <span className="info-item-empty">Belum diisi</span>
                )}
              </div>
            </div>
          </div>

          {/* Tombol Edit Profil Sekunder di Bagian Bawah */}
          <div className="profile-view-actions">
            <button
              type="button"
              className="btn-edit-profile"
              onClick={() => setIsEditing(true)}
              aria-label="Edit informasi profil saya"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
              <span>Edit Profil</span>
            </button>
          </div>
        </section>
      )}
    </main>
  );
};

export default StudentProfile;
