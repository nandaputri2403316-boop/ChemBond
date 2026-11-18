import React, { useState } from 'react';
import type { LoginFormData } from '../../types/auth';
import {
  loginWithEmail,
  loginWithGoogle,
  isValidEmail,
  type AuthOperationResult,
} from '../../services/authService';

interface LoginPageProps {
  onSwitchToRegister: () => void;
  onSuccess?: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onSwitchToRegister, onSuccess }) => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState<boolean>(false);
  const [statusMessage, setStatusMessage] = useState<AuthOperationResult | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ email?: string; password?: string }>({});

  const handleInputChange = (field: keyof LoginFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (fieldErrors[field]) {
      setFieldErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (statusMessage) {
      setStatusMessage(null);
    }
  };

  const validateForm = (): boolean => {
    const errors: { email?: string; password?: string } = {};

    if (!formData.email.trim()) {
      errors.email = 'Email wajib diisi.';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Format email tidak valid (contoh: nama@sekolah.sch.id).';
    }

    if (!formData.password) {
      errors.password = 'Kata sandi wajib diisi.';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setStatusMessage(null);

    try {
      const result = await loginWithEmail(formData);
      setStatusMessage(result);
      if (result.success) {
        onSuccess?.();
      }
    } catch {
      setStatusMessage({
        success: false,
        error: 'Terjadi kesalahan sistem saat mencoba masuk. Silakan coba kembali.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsGoogleLoading(true);
    setStatusMessage(null);

    try {
      const result = await loginWithGoogle();
      setStatusMessage(result);
      if (result.success) {
        onSuccess?.();
      }
    } catch {
      setStatusMessage({
        success: false,
        error: 'Gagal menghubungkan dengan penyedia akun Google.',
      });
    } finally {
      setIsGoogleLoading(false);
    }
  };

  return (
    <div className="login-form-container">
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
            <span className="brand-badge-tag">SMA Chemistry</span>
          </div>
        </div>
      </div>

      {/* Main Headings per requirement */}
      <div className="auth-heading-block">
        <h1 className="auth-welcome-title">Welcome Back, Explorer!</h1>
        <p className="auth-welcome-sub">
          Lanjutkan petualanganmu menjelajahi dunia ikatan kimia.
        </p>
      </div>

      {/* Status Alerts */}
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

      {/* Google Login Provider */}
      <div className="auth-oauth-block">
        <button
          type="button"
          className="btn-google-login"
          onClick={handleGoogleLogin}
          disabled={isLoading || isGoogleLoading}
          aria-label="Lanjutkan masuk dengan akun Google"
        >
          {isGoogleLoading ? (
            <span className="auth-button-spinner" aria-hidden="true" />
          ) : (
            <svg
              className="google-svg-icon"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              aria-hidden="true"
            >
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
          )}
          <span>{isGoogleLoading ? 'Menghubungkan...' : 'Lanjutkan dengan Google'}</span>
        </button>
      </div>

      <div className="auth-separator" aria-hidden="true">
        <span>atau masuk dengan email</span>
      </div>

      {/* Main Email/Password Form */}
      <form className="auth-core-form" onSubmit={handleEmailSubmit} noValidate>
        <div className="auth-field-group">
          <label htmlFor="login-email" className="auth-field-label">
            Alamat Email <span className="field-required">*</span>
          </label>
          <div className="input-affix-wrapper">
            <span className="input-leading-icon" aria-hidden="true">✉️</span>
            <input
              id="login-email"
              type="email"
              name="email"
              autoComplete="email"
              className={`auth-text-input ${fieldErrors.email ? 'has-error' : ''}`}
              placeholder="nama@sekolah.sch.id"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              disabled={isLoading || isGoogleLoading}
              aria-invalid={Boolean(fieldErrors.email)}
              aria-describedby={fieldErrors.email ? 'login-email-error' : undefined}
            />
          </div>
          {fieldErrors.email && (
            <span id="login-email-error" className="auth-field-error" role="alert">
              {fieldErrors.email}
            </span>
          )}
        </div>

        <div className="auth-field-group">
          <div className="label-with-hint">
            <label htmlFor="login-password" className="auth-field-label">
              Kata Sandi <span className="field-required">*</span>
            </label>
          </div>
          <div className="input-affix-wrapper">
            <span className="input-leading-icon" aria-hidden="true">🔑</span>
            <input
              id="login-password"
              type={showPassword ? 'text' : 'password'}
              name="password"
              autoComplete="current-password"
              className={`auth-text-input ${fieldErrors.password ? 'has-error' : ''}`}
              placeholder="Masukkan kata sandi akun"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              disabled={isLoading || isGoogleLoading}
              aria-invalid={Boolean(fieldErrors.password)}
              aria-describedby={fieldErrors.password ? 'login-password-error' : undefined}
            />
            <button
              type="button"
              className="password-reveal-btn"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
              title={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
            >
              {showPassword ? '👁️' : '🔒'}
            </button>
          </div>
          {fieldErrors.password && (
            <span id="login-password-error" className="auth-field-error" role="alert">
              {fieldErrors.password}
            </span>
          )}
        </div>

        {/* Primary Submit Button */}
        <button
          type="submit"
          className="btn-auth-primary-submit"
          disabled={isLoading || isGoogleLoading}
        >
          {isLoading && <span className="auth-button-spinner" aria-hidden="true" />}
          <span>{isLoading ? 'Memverifikasi Akun...' : 'Masuk ke ChemBond'}</span>
          <span className="btn-arrow-icon">→</span>
        </button>
      </form>

      {/* Switch to Register */}
      <div className="auth-footer-prompt">
        <span>Belum memiliki akun ChemBond?</span>
        <button
          type="button"
          className="btn-link-switch"
          onClick={onSwitchToRegister}
        >
          Daftar sekarang
        </button>
      </div>
    </div>
  );
};
