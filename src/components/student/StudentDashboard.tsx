import type { UserProfile } from '../../types/auth';
import './StudentDashboard.css';

interface StudentDashboardProps {
    user: UserProfile;
    onNavigate: (page: string) => void;
    onOpenProfile: () => void;
}

const modules = [
    {
        id: 1,
        title: 'Pengenalan Ikatan Kimia',
        description:
            'Mengenal kestabilan atom, elektron valensi, dan dasar pembentukan ikatan kimia.',
        topics: 'Kestabilan atom dan simbol Lewis',
        icon: '⚛️',
        color: 'pink',
        page: 'Materi',
    },
    {
        id: 2,
        title: 'Jenis-Jenis Ikatan Kimia',
        description:
            'Memahami karakteristik ikatan ion, ikatan kovalen, dan ikatan logam.',
        topics: 'Ikatan ion, kovalen, dan logam',
        icon: '🧪',
        color: 'orange',
        page: 'Materi',
    },
    {
        id: 3,
        title: 'Penerapan Ikatan Kimia',
        description:
            'Menghubungkan konsep ikatan kimia dengan sifat zat dan fenomena sehari-hari.',
        topics: 'Ikatan kimia dalam kehidupan',
        icon: '🔬',
        color: 'coral',
        page: 'Materi',
    },
];

const StudentDashboard = ({
    user,
    onNavigate,
    onOpenProfile,
}: StudentDashboardProps) => {
    const firstName = user.namaLengkap?.trim().split(' ')[0] || 'Siswa';

    return (
        <main className="student-dashboard">
            <section className="dashboard-welcome">
                <div className="welcome-content">
                    <span className="welcome-label">
                        SELAMAT DATANG DI CHEMBOND
                    </span>

                    <h1>
                        Halo, {firstName}! <span>👋</span>
                    </h1>

                    <p>
                        Siap menjelajahi dunia ikatan kimia?
                        Mari lanjutkan perjalanan belajarmu hari ini.
                    </p>

                    <button
                        className="dashboard-primary-button"
                        onClick={() => onNavigate('Materi')}
                    >
                        Mulai Belajar
                        <span>→</span>
                    </button>
                </div>

                <div className="welcome-decoration" aria-hidden="true">
                    <div className="molecule molecule-one">H₂O</div>
                    <div className="molecule molecule-two">NaCl</div>
                    <div className="molecule molecule-three">CO₂</div>
                    <div className="atom-decoration">⚛</div>
                </div>
            </section>

            <section className="dashboard-student-info">
                <div className="student-avatar">
                    {user.namaLengkap?.charAt(0)?.toUpperCase() || 'S'}
                </div>

                <div className="student-info-text">
                    <span>AKUN SISWA</span>
                    <h2>{user.namaLengkap}</h2>
                    <p>
                        {user.kelas || 'Kelas belum diisi'}
                        {' • '}
                        {user.nomorPresensi
                            ? `Presensi ${user.nomorPresensi}`
                            : 'Nomor presensi belum diisi'}
                    </p>
                </div>

                <button
                    className="dashboard-outline-button"
                    onClick={onOpenProfile}
                >
                    Lihat Profil
                </button>
            </section>

            <section className="dashboard-section">
                <div className="dashboard-section-heading">
                    <div>
                        <span className="section-eyebrow">
                            PERJALANAN BELAJAR
                        </span>
                        <h2>Materi Pembelajaran</h2>
                        <p>
                            Pelajari ikatan kimia melalui tiga modul utama.
                        </p>
                    </div>

                    <button
                        className="dashboard-text-button"
                        onClick={() => onNavigate('Materi')}
                    >
                        Lihat semua →
                    </button>
                </div>

                <div className="dashboard-module-grid">
                    {modules.map((module) => (
                        <article
                            className="dashboard-module-card"
                            key={module.id}
                        >
                            <div
                                className={`module-icon ${module.color}`}
                            >
                                {module.icon}
                            </div>

                            <span className="module-number">
                                MODUL {module.id}
                            </span>

                            <h3>{module.title}</h3>

                            <p>{module.description}</p>

                            <div className="module-topic">
                                <span>📘</span>
                                {module.topics}
                            </div>

                            <button
                                className="module-button"
                                onClick={() => onNavigate(module.page)}
                            >
                                Pelajari Materi
                                <span>→</span>
                            </button>
                        </article>
                    ))}
                </div>
            </section>

            <section className="dashboard-activity">
                <div className="activity-card">
                    <div className="activity-icon">📝</div>
                    <div>
                        <h3>Latihan Kuis</h3>
                        <p>
                            Uji pemahamanmu setelah mempelajari materi.
                        </p>
                        <button onClick={() => onNavigate('Kuis')}>
                            Kerjakan Kuis →
                        </button>
                    </div>
                </div>

                <div className="activity-card">
                    <div className="activity-icon">📊</div>
                    <div>
                        <h3>Progres Belajar</h3>
                        <p>
                            Lihat perkembangan aktivitas pembelajaranmu.
                        </p>
                        <button onClick={() => onNavigate('Progres')}>
                            Lihat Progres →
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default StudentDashboard;