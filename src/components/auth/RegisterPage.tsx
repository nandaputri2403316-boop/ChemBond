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

export const RegisterPage: React.FC<RegisterPageProps> = ({ onSwitchToLogin, onSuccess }) => {
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
      if (result.success) {
        onSuccess?.();
      }
    } catch {
      setStatusMessage({
        success: false,
        error: 'Terjadi kegagalan sistem saat mendaftarkan akun. Silakan coba kembali.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-form-container register-form-container">
      {/* Brand Header */}
      <div className="auth-brand-row">
        <div className="auth-brand-logo">
          <svg width="38" height="38" viewBox="0 0 40 40" fill="none" aria-hidden="true">
            <circle cx="20" cy="20" r="19" fill="#FFFFFF" stroke="#F72F91" strokeWidth="2.5" />
            <ellipse cx="20" cy="20" rx="14" ry="5.5" stroke="#FF9B52" strokeWidth="2" transform="rotate(30 20 20)" />
            <ellipse cx="20" cy="20" rx="14" ry="5.5" stroke="#D91D78" strokeWidth="2" transform="rotate(-30 20 20)" />
            <circle cx="20" cy="20" r="5.5" fill="#F72F91" />
            <circle cx="18.5" cy="18.5" r="1.8" fill="#FFFFFF" />
            <circle cx="9" cy="14" r="2.2" fill="#38E1FF" />
            <circle cx="31" cy="26" r="2.2" fill="#FFD152" />
          </svg>
          <div className="brand-text-block">
            <span className="brand-title">ChemBond</span>
            <span className="brand-badge-tag">Pendaftaran Siswa</span>
          </div>
        </div>
      </div>

      <div className="auth-heading-block">
        <h1 className="auth-welcome-title">Bergabung ke ChemBond</h1>
        <p className="auth-welcome-sub">
          Daftarkan akun siswamu untuk mencatat seluruh progres dan evaluasi belajar.
        </p>
      </div>

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
              <strong>Kesiapan Backend Firebase: </strong>
            )}
            <span>{statusMessage.error}</span>
          </div>
        </div>
      )}

      <form className="auth-core-form" onSubmit={handleSubmit} noValidate>
        {/* Nama Lengkap */}
        <div className="auth-field-group">
          <label htmlFor="reg-nama" className="auth-field-label">
            Nama Lengkap <span className="field-required">*</span>
          </label>
          <div className="input-affix-wrapper">
            <span className="input-leading-icon" aria-hidden="true">👤</span>
            <input
              id="reg-nama"
              type="text"
              name="namaLengkap"
              autoComplete="name"
              className={`auth-text-input ${fieldErrors.namaLengkap ? 'has-error' : ''}`}
              placeholder="Contoh: Farrel Athariq"
              value={formData.namaLengkap}
              onChange={(e) => handleInputChange('namaLengkap', e.target.value)}
              disabled={isLoading}
              aria-invalid={Boolean(fieldErrors.namaLengkap)}
              aria-describedby={fieldErrors.namaLengkap ? 'reg-nama-error' : undefined}
            />
          </div>
          {fieldErrors.namaLengkap && (
            <span id="reg-nama-error" className="auth-field-error" role="alert">
              {fieldErrors.namaLengkap}
            </span>
          )}
        </div>

        {/* Row: Kelas & Nomor Presensi */}
        <div className="auth-field-row">
          <div className="auth-field-group">
            <label htmlFor="reg-kelas" className="auth-field-label">
              Kelas <span className="field-required">*</span>
            </label>
            <div className="input-affix-wrapper">
              <span className="input-leading-icon" aria-hidden="true">🏫</span>
              <select
                id="reg-kelas"
                name="kelas"
                className={`auth-select-input ${fieldErrors.kelas ? 'has-error' : ''}`}
                value={formData.kelas}
                onChange={(e) => handleInputChange('kelas', e.target.value)}
                disabled={isLoading}
                aria-invalid={Boolean(fieldErrors.kelas)}
                aria-describedby={fieldErrors.kelas ? 'reg-kelas-error' : undefined}
              >
                {AVAILABLE_CLASSES.map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>
            </div>
            {fieldErrors.kelas && (
              <span id="reg-kelas-error" className="auth-field-error" role="alert">
                {fieldErrors.kelas}
              </span>
            )}
          </div>

          <div className="auth-field-group">
            <label htmlFor="reg-presensi" className="auth-field-label">
              No. Presensi <span className="field-required">*</span>
            </label>
            <div className="input-affix-wrapper">
              <span className="input-leading-icon" aria-hidden="true">🔢</span>
              <input
                id="reg-presensi"
                type="number"
                min="1"
                max="99"
                name="nomorPresensi"
                className={`auth-text-input ${fieldErrors.nomorPresensi ? 'has-error' : ''}`}
                placeholder="1–99"
                value={formData.nomorPresensi}
                onChange={(e) => handleInputChange('nomorPresensi', e.target.value)}
                disabled={isLoading}
                aria-invalid={Boolean(fieldErrors.nomorPresensi)}
                aria-describedby={fieldErrors.nomorPresensi ? 'reg-presensi-error' : undefined}
              />
            </div>
            {fieldErrors.nomorPresensi && (
              <span id="reg-presensi-error" className="auth-field-error" role="alert">
                {fieldErrors.nomorPresensi}
              </span>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="auth-field-group">
          <label htmlFor="reg-email" className="auth-field-label">
            Alamat Email Aktif <span className="field-required">*</span>
          </label>
          <div className="input-affix-wrapper">
            <span className="input-leading-icon" aria-hidden="true">✉️</span>
            <input
              id="reg-email"
              type="email"
              name="email"
              autoComplete="email"
              className={`auth-text-input ${fieldErrors.email ? 'has-error' : ''}`}
              placeholder="siswa@sekolah.sch.id"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              disabled={isLoading}
              aria-invalid={Boolean(fieldErrors.email)}
              aria-describedby={fieldErrors.email ? 'reg-email-error' : undefined}
            />
          </div>
          {fieldErrors.email && (
            <span id="reg-email-error" className="auth-field-error" role="alert">
              {fieldErrors.email}
            </span>
          )}
        </div>

        {/* Kata Sandi */}
        <div className="auth-field-group">
          <label htmlFor="reg-password" className="auth-field-label">
            Kata Sandi <span className="field-required">*</span>
          </label>
          <div className="input-affix-wrapper">
            <span className="input-leading-icon" aria-hidden="true">🔑</span>
            <input
              id="reg-password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              autoComplete="new-password"
              className={`auth-text-input ${fieldErrors.password ? 'has-error' : ''}`}
              placeholder="Minimal 6 karakter"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              disabled={isLoading}
              aria-invalid={Boolean(fieldErrors.password)}
              aria-describedby={fieldErrors.password ? 'reg-password-error' : undefined}
            />
            <button
              type="button"
              className="password-reveal-btn"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
            >
              {showPassword ? '👁️' : '🔒'}
            </button>
          </div>
          {fieldErrors.password && (
            <span id="reg-password-error" className="auth-field-error" role="alert">
              {fieldErrors.password}
            </span>
          )}
        </div>

        {/* Konfirmasi Kata Sandi */}
        <div className="auth-field-group">
          <label htmlFor="reg-confirm-password" className="auth-field-label">
            Konfirmasi Kata Sandi <span className="field-required">*</span>
          </label>
          <div className="input-affix-wrapper">
            <span className="input-leading-icon" aria-hidden="true">🛡️</span>
            <input
              id="reg-confirm-password"
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              autoComplete="new-password"
              className={`auth-text-input ${fieldErrors.confirmPassword ? 'has-error' : ''}`}
              placeholder="Ulangi kata sandi"
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
              disabled={isLoading}
              aria-invalid={Boolean(fieldErrors.confirmPassword)}
              aria-describedby={fieldErrors.confirmPassword ? 'reg-confirm-error' : undefined}
            />
            <button
              type="button"
              className="password-reveal-btn"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              aria-label={showConfirmPassword ? 'Sembunyikan konfirmasi' : 'Tampilkan konfirmasi'}
            >
              {showConfirmPassword ? '👁️' : '🔒'}
            </button>
          </div>
          {fieldErrors.confirmPassword && (
            <span id="reg-confirm-error" className="auth-field-error" role="alert">
              {fieldErrors.confirmPassword}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="btn-auth-primary-submit"
          disabled={isLoading}
        >
          {isLoading && <span className="auth-button-spinner" aria-hidden="true" />}
          <span>{isLoading ? 'Mendaftarkan Akun...' : 'Daftar Akun Siswa'}</span>
          <span className="btn-arrow-icon">→</span>
        </button>
      </form>

      <div className="auth-footer-prompt">
        <span>Sudah memiliki akun ChemBond?</span>
        <button
          type="button"
          className="btn-link-switch"
          onClick={onSwitchToLogin}
        >
          Masuk di sini
        </button>
      </div>
    </div>
  );
};
