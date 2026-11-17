import { useState } from 'react';
import type { UserProfile } from '../../types/auth';
import './StudentDashboard.css';

interface CompleteProfileProps {
    user: UserProfile;
    onComplete: (
        data: {
            namaLengkap: string;
            kelas: string;
            nomorPresensi: number;
        }
    ) => Promise<void>;
}

const CompleteProfile = ({
    user,
    onComplete,
}: CompleteProfileProps) => {
    const [namaLengkap, setNamaLengkap] = useState(
        user.namaLengkap || ''
    );
    const [kelas, setKelas] = useState(user.kelas || '');
    const [nomorPresensi, setNomorPresensi] = useState(
        user.nomorPresensi?.toString() || ''
    );

    const [error, setError] = useState('');
    const [isSaving, setIsSaving] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError('');

        if (!namaLengkap.trim()) {
            setError('Nama lengkap wajib diisi.');
            return;
        }

        if (!kelas.trim()) {
            setError('Kelas wajib dipilih atau diisi.');
            return;
        }

        if (!nomorPresensi.trim()) {
            setError('Nomor presensi wajib diisi.');
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

            await onComplete({
                namaLengkap: namaLengkap.trim(),
                kelas: kelas.trim(),
                nomorPresensi: attendanceNumber,
            });
        } catch (err) {
            setError(
                err instanceof Error
                    ? err.message
                    : 'Profil gagal disimpan. Silakan coba kembali.'
            );
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <main className="student-form-page">
            <section className="student-form-card">
                <div className="student-form-heading">
                    <span className="section-eyebrow">
                        LANGKAH TERAKHIR
                    </span>

                    <h1>Lengkapi Profilmu</h1>

                    <p>
                        Selamat datang di ChemBond! Sebelum mulai belajar,
                        lengkapi identitas siswa agar aktivitas belajarmu
                        dapat tercatat dengan baik.
                    </p>
                </div>

                <div className="student-profile-detail">
                    <span>Email Akun</span>
                    <strong>{user.email}</strong>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="student-form-group">
                        <label htmlFor="complete-name">
                            Nama Lengkap
                        </label>

                        <input
                            id="complete-name"
                            type="text"
                            value={namaLengkap}
                            onChange={(event) =>
                                setNamaLengkap(event.target.value)
                            }
                            placeholder="Masukkan nama lengkap"
                            autoComplete="name"
                            required
                        />
                    </div>

                    <div className="student-form-group">
                        <label htmlFor="complete-class">
                            Kelas
                        </label>

                        <input
                            id="complete-class"
                            type="text"
                            value={kelas}
                            onChange={(event) =>
                                setKelas(event.target.value)
                            }
                            placeholder="Contoh: XI A"
                            required
                        />
                    </div>

                    <div className="student-form-group">
                        <label htmlFor="complete-attendance">
                            Nomor Presensi
                        </label>

                        <input
                            id="complete-attendance"
                            type="number"
                            min="1"
                            max="99"
                            value={nomorPresensi}
                            onChange={(event) =>
                                setNomorPresensi(event.target.value)
                            }
                            placeholder="Masukkan nomor presensi"
                            required
                        />
                    </div>

                    {error && (
                        <div className="student-form-error" role="alert">
                            {error}
                        </div>
                    )}

                    <div className="student-form-actions">
                        <button
                            type="submit"
                            className="student-save-button"
                            disabled={isSaving}
                        >
                            {isSaving
                                ? 'Menyimpan Profil...'
                                : 'Simpan dan Mulai Belajar'}
                        </button>
                    </div>
                </form>
            </section>
        </main>
    );
};

export default CompleteProfile;