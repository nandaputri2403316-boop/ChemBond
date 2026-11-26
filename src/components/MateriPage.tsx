
import { useState } from 'react';
import type { Page } from './Navbar';
import { materiList } from '../data/materi';
import type { ModuleData, SubModule } from '../data/types';
import './MateriPage.css';

interface MateriPageProps {
    onNavigate?: (page: Page) => void;
}

export function MateriPage({ onNavigate }: MateriPageProps = {}) {
    const [selectedModule, setSelectedModule] = useState<ModuleData | null>(null);
    const [selectedSubmodule, setSelectedSubmodule] = useState<SubModule | null>(null);
    const [showObjectives, setShowObjectives] = useState(false);
    const [expandedChapter, setExpandedChapter] = useState<string | null>(null);

    const handleBack = () => {
        if (selectedSubmodule) {
            setSelectedSubmodule(null);
        } else {
            setSelectedModule(null);
        }
    };
    const chapterGroups = selectedModule?.submodules.reduce<
        Record<string, SubModule[]>
    >((groups, submodule) => {
        const chapter = submodule.title.split(' · ')[0];

        if (!groups[chapter]) {
            groups[chapter] = [];
        }

        groups[chapter].push(submodule);
        return groups;
    }, {});

    return (
        <main className="materi-page">
            <div className="container">
                <header className="materi-header">
                    <span className="materi-badge">🔬 PETUALANGAN CHEMBOND</span>
                    <h1>Jelajahi Dunia Ikatan Kimia!</h1>
                    <p>
                        Pelajari konsep ikatan kimia melalui tiga modul pembelajaran
                        yang disusun secara bertahap.
                    </p>
                </header>

                {!selectedModule && (
                    <>
                        {onNavigate && (
                            <section className="materi-simulasi-callout">
                                <div className="materi-simulasi-header-row">
                                    <span className="materi-simulasi-pill">🧪 LABORATORIUM VIRTUAL INTERAKTIF</span>
                                    <span className="materi-simulasi-meta">PhET Colorado & Visualisasi 3D</span>
                                </div>
                                <div className="materi-simulasi-body">
                                    <div className="materi-simulasi-info">
                                        <h3>Eksplorasi Molekul & Ikatan Kimia Secara Nyata</h3>
                                        <p>
                                            Ingin langsung melihat visualisasi bentuk geometri molekul secara 3D atau menguji pembentukan ikatan ionik NaCl?
                                            Kunjungi Lab Simulasi Interaktif ChemBond lengkap dengan simulasi resmi PhET!
                                        </p>
                                    </div>
                                    <button
                                        type="button"
                                        className="btn-buka-simulasi"
                                        onClick={() => onNavigate('Simulasi')}
                                    >
                                        <span>Buka Lab Simulasi PhET</span>
                                        <span>→</span>
                                    </button>
                                </div>
                            </section>
                        )}

                        <section className="materi-module-grid">
                            {materiList.map((module) => (
                                <article className="materi-module-card" key={module.id}>
                                    <span className="materi-module-number">
                                        MODUL {module.order}
                                    </span>
                                    <h2>{module.title}</h2>
                                    <p>{module.description}</p>
                                    <button
                                        type="button"
                                        onClick={() => setSelectedModule(module)}
                                    >
                                        Jelajahi Modul →
                                    </button>
                                </article>
                            ))}
                        </section>
                    </>
                )}

                {selectedModule && !selectedSubmodule && (
                    <section className="materi-detail">
                        <button type="button" className="materi-back" onClick={handleBack}>
                            ← Kembali ke daftar modul
                        </button>

                        <h2>{selectedModule.title}</h2>
                        <p>{selectedModule.subtitle}</p>


                        <div className="materi-objectives">
                            <button
                                type="button"
                                onClick={() => setShowObjectives(!showObjectives)}
                            >
                                🎯 Tujuan Pembelajaran
                                <span>{showObjectives ? '−' : '+'}</span>
                            </button>

                            {showObjectives && (
                                <ul>
                                    {selectedModule.learningObjectives.map((objective, index) => (
                                        <li key={index}>{objective}</li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <h3>📚 Jelajahi Bab Pembelajaran</h3>

                        <div className="materi-chapter-list">
                            {Object.entries(chapterGroups ?? {}).map(([chapter, submodules]) => (
                                <section className="materi-chapter" key={chapter}>
                                    <button
                                        type="button"
                                        className="materi-chapter-toggle"
                                        onClick={() =>
                                            setExpandedChapter(
                                                expandedChapter === chapter ? null : chapter
                                            )
                                        }
                                    >
                                        <span>
                                            <strong>{chapter}</strong>
                                            <small>{submodules.length} submateri</small>
                                        </span>

                                        <span>
                                            {expandedChapter === chapter ? '−' : '+'}
                                        </span>
                                    </button>

                                    {expandedChapter === chapter && (
                                        <div className="materi-submodule-list">
                                            {submodules.map((submodule, index) => (
                                                <button
                                                    type="button"
                                                    className="materi-submodule-card"
                                                    key={submodule.id}
                                                    onClick={() => setSelectedSubmodule(submodule)}
                                                >
                                                    <span>{index + 1}</span>
                                                    {submodule.title.split(' · ')[1] ?? submodule.title}
                                                    <span>→</span>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </section>
                            ))}
                        </div>
                    </section>
                )}


                <article className="materi-reading">
                    <button
                        type="button"
                        className="materi-back"
                        onClick={handleBack}
                    >
                        ← Kembali ke daftar submateri
                    </button>

                    <span className="materi-badge">{selectedModule.title}</span>
                    <h2>{selectedSubmodule.title}</h2>

                    <div className="materi-content-list">
                        {selectedSubmodule.content.map((paragraph, index) => (
                            <section className="materi-content-card" key={index}>
                                <span className="materi-content-number">
                                    {index === 0 ? 'PENGANTAR' : `KONSEP ${index}`}
                                </span>
                                <p>{paragraph}</p>
                            </section>
                        ))}
                    </div>

                    {selectedSubmodule.keyPoints && (
                        <section className="materi-reading-section">
                            <h3>💡 Hal Penting yang Perlu Diingat</h3>
                            <ul>
                                {selectedSubmodule.keyPoints.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {selectedSubmodule.examples && (
                        <section className="materi-reading-section">
                            <h3>🌍 Contoh dalam Kehidupan Sehari-hari</h3>
                            <ul>
                                {selectedSubmodule.examples.map((example, index) => (
                                    <li key={index}>{example}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {onNavigate && (
                        <div className="materi-reading-simulasi-box">
                            <div className="reading-simulasi-badge">
                                🔬 PRAKTIKUM VIRTUAL
                            </div>
                            <h4>Ingin Mengamati Interaksi Molekul Secara Langsung?</h4>
                            <p>
                                Kombinasikan pemahaman konsep di modul ini dengan simulasi
                                3D PhET Colorado, visualisasi bentuk molekul VSEPR,
                                dan simulasi transfer elektron NaCl!
                            </p>
                            <button
                                type="button"
                                className="btn-buka-simulasi"
                                onClick={() => onNavigate('Simulasi')}
                            >
                                Buka Laboratorium Virtual ChemBond →
                            </button>
                        </div>
                    )}
                </article>
            </div>
        </main>
    );
}

export default MateriPage;
