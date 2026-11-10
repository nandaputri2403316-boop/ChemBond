import React, { useState } from 'react';
import type { RegisterFormData } from '../../types/auth';
import {
  registerWithEmail,
  isValidEmail,
  validatePasswordSecurity,
  type AuthOperationResult,
} from '../../services/authService';

interface RegisterPageProps {
  onSwitchToLogin: () => void;
  onSuccess?: () => void;
}

const AVAILABLE_CLASSES = [
  { value: 'X-1', label: 'Kelas X - 1' },
  { value: 'X-2', label: 'Kelas X - 2' },
  { value: 'X-3', label: 'Kelas X - 3' },
  { value: 'X-4', label: 'Kelas X - 4' },
  { value: 'XI', label: 'Kelas XI' },
  { value: 'XII', label: 'Kelas XII' },
];

export const RegisterPage: React.FC<RegisterPageProps> = ({ onSwitchToLogin }) => {
  const [formData, setFormData] = useState<RegisterFormData>({
    namaLengkap: '',
    kelas: 'X-1',
    nomorPresensi: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<AuthOperationResult | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof RegisterFormData, string>>>({});

  const handleInputChange = (field: keyof RegisterFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (fieldErrors[field]) {
      setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (statusMessage) {
      setStatusMessage(null);
    }
  };

  const validateForm = (): boolean => {
    const errors: Partial<Record<keyof RegisterFormData, string>> = {};

    if (!formData.namaLengkap.trim()) {
      errors.namaLengkap = 'Nama lengkap wajib diisi sesuai nama asli Anda.';
    } else if (formData.namaLengkap.trim().length < 3) {
      errors.namaLengkap = 'Nama lengkap minimal terdiri dari 3 karakter.';
    }

    if (!formData.kelas) {
      errors.kelas = 'Silakan pilih kelas Anda.';
    }

    if (!formData.nomorPresensi.trim()) {
      errors.nomorPresensi = 'Nomor presensi wajib diisi.';
    } else {
      const presensi = parseInt(formData.nomorPresensi, 10);
      if (isNaN(presensi) || presensi <= 0 || presensi > 99) {
        errors.nomorPresensi = 'Nomor presensi harus berupa angka 1 s.d. 99.';
      }
    }

    if (!formData.email.trim()) {
      errors.email = 'Alamat email wajib diisi.';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Format alamat email tidak valid (contoh: siswa@sekolah.sch.id).';
    }

    if (!formData.password) {
      errors.password = 'Kata sandi wajib diisi.';
    } else {
      const pwdVal = validatePasswordSecurity(formData.password);
      if (!pwdVal.isValid) {
        errors.password = pwdVal.message;
      }
    }

    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Konfirmasi kata sandi wajib diisi.';
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Konfirmasi kata sandi tidak sama dengan kata sandi di atas.';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setStatusMessage(null);

    try {
      const result = await registerWithEmail(formData);
      setStatusMessage(result);
    } catch {
      setStatusMessage({
        success: false,
        error: 'Terjadi kendala sistem saat proses pendaftaran. Silakan coba kembali.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register-page-content">
      {/* Header Halaman */}
      <div className="auth-header">
        <div className="auth-brand-badge">
          <svg width="18" height="18" viewBox="0 0 40 40" fill="none" aria-hidden="true">
            <circle cx="20" cy="20" r="19" fill="#FFFFFF" stroke="#F72F91" strokeWidth="2.5" />
            <ellipse cx="20" cy="20" rx="14" ry="5.5" stroke="#FF9B52" strokeWidth="2" transform="rotate(30 20 20)" />
            <ellipse cx="20" cy="20" rx="14" ry="5.5" stroke="#D91D78" strokeWidth="2" transform="rotate(-30 20 20)" />
            <circle cx="20" cy="20" r="5.5" fill="#F72F91" />
          </svg>
          <span>Pendaftaran Akun Baru</span>
        </div>

        <h1 className="auth-title">Daftar Akun Siswa ChemBond</h1>
        <p className="auth-subtitle">
          Lengkapi data identitas belajar Anda untuk memantau progres dan evaluasi kuis kimia.
        </p>
      </div>

      {/* Pesan Status Operasi / Informasi Firebase */}
      {statusMessage && (
        <div
          className={`auth-alert ${
            statusMessage.isBackendPending ? 'auth-alert-info' : 'auth-alert-error'
          }`}
          role="status"
          aria-live="polite"
        >
          <span className="auth-alert-icon">
            {statusMessage.isBackendPending ? 'ℹ️' : '⚠️'}
          </span>
          <div className="auth-alert-text">
            {statusMessage.isBackendPending && (
              <strong>Kesiapan Backend Firebase:</strong>
            )}
            <span>{statusMessage.error}</span>
          </div>
        </div>
      )}

      {/* Formulir Pendaftaran */}
      <form className="auth-form" onSubmit={handleSubmit} noValidate>
        {/* Kolom 1: Nama Lengkap */}
        <div className="form-group">
          <label htmlFor="reg-nama" className="form-label">
            <span>Nama Lengkap Siswa</span>
            <span className="required-asterisk">*</span>
          </label>
          <input
            id="reg-nama"
            type="text"
            name="namaLengkap"
            autoComplete="name"
            className={`form-input ${fieldErrors.namaLengkap ? 'input-has-error' : ''}`}
            placeholder="Masukkan nama lengkap sesuai presensi"
            value={formData.namaLengkap}
            onChange={(e) => handleInputChange('namaLengkap', e.target.value)}
            disabled={isLoading}
            aria-invalid={Boolean(fieldErrors.namaLengkap)}
            aria-describedby={fieldErrors.namaLengkap ? 'reg-nama-error' : undefined}
          />
          {fieldErrors.namaLengkap && (
            <span id="reg-nama-error" className="field-error-text" role="alert">
              {fieldErrors.namaLengkap}
            </span>
          )}
        </div>

        {/* Baris 2 Kolom: Kelas & Nomor Presensi */}
        <div className="form-row-2col">
          {/* Kolom 2: Kelas */}
          <div className="form-group">
            <label htmlFor="reg-kelas" className="form-label">
              <span>Kelas</span>
              <span className="required-asterisk">*</span>
            </label>
            <select
              id="reg-kelas"
              name="kelas"
              className={`form-select ${fieldErrors.kelas ? 'input-has-error' : ''}`}
              value={formData.kelas}
              onChange={(e) => handleInputChange('kelas', e.target.value)}
              disabled={isLoading}
              aria-invalid={Boolean(fieldErrors.kelas)}
              aria-describedby={fieldErrors.kelas ? 'reg-kelas-error' : undefined}
            >
              {AVAILABLE_CLASSES.map((cls) => (
                <option key={cls.value} value={cls.value}>
                  {cls.label}
                </option>
              ))}
            </select>
            {fieldErrors.kelas && (
              <span id="reg-kelas-error" className="field-error-text" role="alert">
                {fieldErrors.kelas}
              </span>
            )}
          </div>

          {/* Kolom 3: Nomor Presensi */}
          <div className="form-group">
            <label htmlFor="reg-presensi" className="form-label">
              <span>Nomor Presensi</span>
              <span className="required-asterisk">*</span>
            </label>
            <input
              id="reg-presensi"
              type="number"
              name="nomorPresensi"
              min="1"
              max="99"
              className={`form-input ${fieldErrors.nomorPresensi ? 'input-has-error' : ''}`}
              placeholder="Contoh: 14"
              value={formData.nomorPresensi}
              onChange={(e) => handleInputChange('nomorPresensi', e.target.value)}
              disabled={isLoading}
              aria-invalid={Boolean(fieldErrors.nomorPresensi)}
              aria-describedby={fieldErrors.nomorPresensi ? 'reg-presensi-error' : undefined}
            />
            {fieldErrors.nomorPresensi && (
              <span id="reg-presensi-error" className="field-error-text" role="alert">
                {fieldErrors.nomorPresensi}
              </span>
            )}
          </div>
        </div>

        {/* Kolom 4: Alamat Email */}
        <div className="form-group">
          <label htmlFor="reg-email" className="form-label">
            <span>Alamat Email Aktif</span>
            <span className="required-asterisk">*</span>
          </label>
          <input
            id="reg-email"
            type="email"
            name="email"
            autoComplete="email"
            className={`form-input ${fieldErrors.email ? 'input-has-error' : ''}`}
            placeholder="siswa@sekolah.sch.id"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            disabled={isLoading}
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? 'reg-email-error' : undefined}
          />
          {fieldErrors.email && (
            <span id="reg-email-error" className="field-error-text" role="alert">
              {fieldErrors.email}
            </span>
          )}
        </div>

        {/* Kolom 5: Kata Sandi */}
        <div className="form-group">
          <label htmlFor="reg-password" className="form-label">
            <span>Kata Sandi</span>
            <span className="required-asterisk">*</span>
          </label>
          <div className="form-input-wrapper">
            <input
              id="reg-password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              autoComplete="new-password"
              className={`form-input ${fieldErrors.password ? 'input-has-error' : ''}`}
              placeholder="Minimal 6 karakter"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              disabled={isLoading}
              aria-invalid={Boolean(fieldErrors.password)}
              aria-describedby={fieldErrors.password ? 'reg-password-error' : undefined}
            />
            <button
              type="button"
              className="btn-password-toggle"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
              title={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
            >
              {showPassword ? '👁️' : '🔒'}
            </button>
          </div>
          {fieldErrors.password ? (
            <span id="reg-password-error" className="field-error-text" role="alert">
              {fieldErrors.password}
            </span>
          ) : (
            <span className="field-hint-text">Gunakan minimal 6 karakter.</span>
          )}
        </div>

        {/* Kolom 6: Konfirmasi Kata Sandi */}
        <div className="form-group">
          <label htmlFor="reg-confirm-password" className="form-label">
            <span>Konfirmasi Kata Sandi</span>
            <span className="required-asterisk">*</span>
          </label>
          <div className="form-input-wrapper">
            <input
              id="reg-confirm-password"
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              autoComplete="new-password"
              className={`form-input ${fieldErrors.confirmPassword ? 'input-has-error' : ''}`}
              placeholder="Ulangi kata sandi Anda"
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
              disabled={isLoading}
              aria-invalid={Boolean(fieldErrors.confirmPassword)}
              aria-describedby={fieldErrors.confirmPassword ? 'reg-confirm-error' : undefined}
            />
            <button
              type="button"
              className="btn-password-toggle"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              aria-label={showConfirmPassword ? 'Sembunyikan konfirmasi kata sandi' : 'Tampilkan konfirmasi kata sandi'}
              title={showConfirmPassword ? 'Sembunyikan konfirmasi kata sandi' : 'Tampilkan konfirmasi kata sandi'}
            >
              {showConfirmPassword ? '👁️' : '🔒'}
            </button>
          </div>
          {fieldErrors.confirmPassword && (
            <span id="reg-confirm-error" className="field-error-text" role="alert">
              {fieldErrors.confirmPassword}
            </span>
          )}
        </div>

        {/* Catatan Keamanan Enkripsi */}
        <div className="auth-security-notice" role="note">
          <span className="notice-icon">🛡️</span>
          <span>
            <strong>Keamanan Data Siswa:</strong> Kata sandi Anda dikelola langsung oleh
            Firebase Authentication secara terenkripsi dan tidak pernah disimpan dalam bentuk teks biasa.
          </span>
        </div>

        {/* Tombol Submit Pendaftaran */}
        <button
          type="submit"
          className="btn-auth-submit"
          disabled={isLoading}
        >
          {isLoading && <span className="auth-spinner" aria-hidden="true" />}
          <span>{isLoading ? 'Memvalidasi Data...' : 'Daftar Akun Siswa'}</span>
        </button>
      </form>

      {/* Teks Pindah ke Login */}
      <div className="auth-switch-footer">
        <span>Sudah memiliki akun?</span>
        <button
          type="button"
          className="btn-switch-auth"
          onClick={onSwitchToLogin}
        >
          Masuk ke akun Anda
        </button>
      </div>
    </div>
  );
};

