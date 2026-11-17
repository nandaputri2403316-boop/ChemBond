import { useState } from 'react';
import type { UserProfile } from '../../types/auth';
import './StudentDashboard.css';

interface StudentProfileProps {
    user: UserProfile;
    onBack: () => void;
    onUpdateProfile: (
        data: {
            namaLengkap: string;
            kelas: string;
            nomorPresensi: number;
        }
    ) => Promise<void>;
}

const StudentProfile = ({
    user,
    onBack,
    onUpdateProfile,
}: StudentProfileProps) => {
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

        if (!namaLengkap.trim() || !kelas || !nomorPresensi) {
            setError('Semua data profil wajib diisi.');
            return;
        }

        const attendanceNumber = Number(nomorPresensi);

        if (
            !Number.isInteger(attendanceNumber) ||
            attendanceNumber < 1 ||
            attendanceNumber > 99
        ) {
            setError('Nomor presensi harus berupa angka 1–99.');
            return;
        }

        try {
            setIsSaving(true);

            await onUpdateProfile({
                namaLengkap: namaLengkap.trim(),
                kelas,
                nomorPresensi: attendanceNumber,
            });

            setIsEditing(false);
        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : 'Profil gagal diperbarui. Silakan coba lagi.'
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

    return (
        <main className="student-form-page">
            <button className="student-back-button" onClick={onBack}>
                ← Kembali ke Dashboard
            </button>

            <section className="student-form-card">
                <div className="student-form-heading">
                    <h1>Profil Saya</h1>
                    <p>
                        Informasi akun dan identitas siswa yang terdaftar
                        di ChemBond.
                    </p>
                </div>

                <div className="student-profile-header">
                    <div className="student-avatar">
                        {user.namaLengkap?.charAt(0)?.toUpperCase() || 'S'}
                    </div>

                    <div>
                        <h2>{user.namaLengkap}</h2>
                        <p>
                            {user.role === 'student'
                                ? 'Siswa ChemBond'
                                : user.role}
                        </p>
                    </div>
                </div>

                {error && (
                    <div className="student-form-error" role="alert">
                        {error}
                    </div>
                )}

                {isEditing ? (
                    <>
                        <div className="student-form-group">
                            <label htmlFor="profile-name">
                                Nama Lengkap
                            </label>
                            <input
                                id="profile-name"
                                type="text"
                                value={namaLengkap}
                                onChange={(event) =>
                                    setNamaLengkap(event.target.value)
                                }
                                placeholder="Masukkan nama lengkap"
                            />
                        </div>

                        <div className="student-form-group">
                            <label htmlFor="profile-class">Kelas</label>
                            <input
                                id="profile-class"
                                type="text"
                                value={kelas}
                                onChange={(event) =>
                                    setKelas(event.target.value)
                                }
                                placeholder="Contoh: XI A"
                            />
                        </div>

                        <div className="student-form-group">
                            <label htmlFor="profile-attendance">
                                Nomor Presensi
                            </label>
                            <input
                                id="profile-attendance"
                                type="number"
                                min="1"
                                max="99"
                                value={nomorPresensi}
                                onChange={(event) =>
                                    setNomorPresensi(event.target.value)
                                }
                                placeholder="Masukkan nomor presensi"
                            />
                        </div>

                        <div className="student-form-group">
                            <label htmlFor="profile-email">Email</label>
                            <input
                                id="profile-email"
                                type="email"
                                value={user.email}
                                disabled
                            />
                        </div>

                        <div className="student-form-actions">
                            <button
                                className="student-save-button"
                                onClick={handleSave}
                                disabled={isSaving}
                            >
                                {isSaving ? 'Menyimpan...' : 'Simpan Perubahan'}
                            </button>

                            <button
                                className="student-cancel-button"
                                onClick={handleCancel}
                                disabled={isSaving}
                            >
                                Batal
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="student-profile-detail">
                            <span>Nama Lengkap</span>
                            <strong>{user.namaLengkap || '-'}</strong>
                        </div>

                        <div className="student-profile-detail">
                            <span>Email</span>
                            <strong>{user.email || '-'}</strong>
                        </div>

                        <div className="student-profile-detail">
                            <span>Kelas</span>
                            <strong>{user.kelas || 'Belum diisi'}</strong>
                        </div>

                        <div className="student-profile-detail">
                            <span>Nomor Presensi</span>
                            <strong>
                                {user.nomorPresensi ?? 'Belum diisi'}
                            </strong>
                        </div>

                        <div className="student-profile-detail">
                            <span>Metode Login</span>
                            <strong>
                                {user.provider === 'google'
                                    ? 'Google'
                                    : 'Email dan Kata Sandi'}
                            </strong>
                        </div>

                        <div className="student-profile-detail">
                            <span>Status Profil</span>
                            <strong>
                                {user.profileCompleted
                                    ? 'Profil Lengkap'
                                    : 'Belum Lengkap'}
                            </strong>
                        </div>

                        <div className="student-form-actions">
                            <button
                                className="student-save-button"
                                onClick={() => setIsEditing(true)}
                            >
                                Edit Profil
                            </button>
                        </div>
                    </>
                )}
            </section>
        </main>
    );
};

export default StudentProfile;