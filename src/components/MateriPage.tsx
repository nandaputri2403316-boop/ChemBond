
import { useState } from 'react';
import type { Page } from './Navbar';
import { materiList } from '../data/materi';
import type { ModuleData, SubModule } from '../data/types';
import { HookMedia } from './HookMedia';
import './MateriPage.css';
import Modul1Interactive from './Modul1Interactive';

interface MateriPageProps {
    onNavigate?: (page: Page) => void;
}

// ── Peta aksen warna per submodul ────────────────────────────────────────────
const SUBMODULE_ACCENT: Record<string, { cls: string; label: string; icon: string }> = {
    'sub-2-1': { cls: 'accent-blue', label: 'Konsep Dasar', icon: '⚛️' },
    'sub-2-2': { cls: 'accent-orange', label: 'Pembentukan Ion', icon: '⚡' },
    'sub-2-3': { cls: 'accent-purple', label: 'Rumus & Lewis', icon: '🧪' },
    'sub-2-4': { cls: 'accent-teal', label: 'Kristal Ionik', icon: '💎' },
    'sub-2-5': { cls: 'accent-pink', label: 'Sifat Senyawa', icon: '🔬' },
    'sub-2-6': { cls: 'accent-green', label: 'Kehidupan Nyata', icon: '🌿' },
};

// ── Heuristik klasifikasi paragraf ───────────────────────────────────────────
type BlockType = 'heading' | 'intro' | 'soal' | 'pembahasan' | 'kesalahan' | 'kesimpulan' | 'normal';

function classifyBlock(text: string): BlockType {
    const t = text.trimStart();
    if (/^\d+\.\s/.test(t)) return 'heading';
    if (/^(Soal\s+\d+[:.])/i.test(t)) return 'soal';
    if (/^(Pembahasan[:.])/i.test(t)) return 'pembahasan';
    if (/^(Kesalahan\s+\d+[:.])/i.test(t)) return 'kesalahan';
    if (/^Kesimpulan$/i.test(t.replace(/[:\s]+$/, ''))) return 'kesimpulan';
    if (/^Pernahkah|^Bayangkan|^Coba|^Amati|^Ambil/i.test(t)) return 'intro';
    return 'normal';
}

const BLOCK_CLASS: Record<BlockType, string> = {
    heading: 'blok-heading',
    intro: 'blok-intro',
    soal: 'blok-soal',
    pembahasan: 'blok-pembahasan',
    kesalahan: 'blok-kesalahan',
    kesimpulan: 'blok-kesimpulan',
    normal: 'blok-normal',
};

// ── Komponen pembaca submodul ────────────────────────────────────────────────
function SubmoduleReader({
    module,
    submodule,
    onNavigate,
    onBack,
}: {
    module: ModuleData;
    submodule: SubModule;
    onNavigate?: (page: Page) => void;
    onBack: () => void;
}) {
    const accent = SUBMODULE_ACCENT[submodule.id] ?? { cls: '', label: '', icon: '📖' };
    const [openPembahasan, setOpenPembahasan] = useState<number[]>([]);

    const togglePembahasan = (idx: number) =>
        setOpenPembahasan(prev =>
            prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
        );

    return (
        <article className={`materi-reading submodule-reader ${accent.cls}`}>
            <button type="button" className="materi-back" onClick={onBack}>
                ← Kembali ke daftar submateri
            </button>

            {/* Header submodul berwarna */}
            <div className={`submodule-hero ${accent.cls}`}>
                <span className="submodule-hero-icon" aria-hidden="true">{accent.icon}</span>
                <div>
                    <span className="submodule-modul-label">{module.title}</span>
                    <h2 className="submodule-title">{submodule.title}</h2>
                </div>
            </div>

            {/* Media pemantik (hook) */}
            {submodule.hook && (
                <HookMedia
                    hook={submodule.hook}
                    accentClass={`hook-${accent.cls}`}
                />
            )}

            {/* Konten paragraf dengan warna semantik */}
            <div className="submodule-content">
                {submodule.content.map((paragraph, idx) => {
                    const type = classifyBlock(paragraph);

                    if (type === 'pembahasan') {
                        const isOpen = openPembahasan.includes(idx);
                        return (
                            <div key={idx} className="blok-pembahasan-wrapper">
                                <button
                                    type="button"
                                    className="blok-pembahasan-toggle"
                                    onClick={() => togglePembahasan(idx)}
                                    aria-expanded={isOpen}
                                >
                                    <span>✅ {paragraph.replace(/^Pembahasan[:.]\s*/i, 'Pembahasan: ')}</span>
                                    <span aria-hidden="true">{isOpen ? '−' : '+'}</span>
                                </button>
                                {isOpen && (
                                    <p className="blok-pembahasan-body">
                                        {paragraph}
                                    </p>
                                )}
                            </div>
                        );
                    }

                    return (
                        <p
                            key={idx}
                            className={`blok ${BLOCK_CLASS[type]}`}
                            data-type={type}
                        >
                            {type === 'soal' && <span className="blok-icon" aria-hidden="true">❓</span>}
                            {type === 'kesalahan' && <span className="blok-icon" aria-hidden="true">❌</span>}
                            {type === 'kesimpulan' && <span className="blok-icon" aria-hidden="true">⭐</span>}
                            {type === 'intro' && <span className="blok-icon" aria-hidden="true">💡</span>}
                            {paragraph}
                        </p>
                    );
                })}
            </div>

            {/* Key Points */}
            {submodule.keyPoints && (
                <section className={`submodule-keypoints ${accent.cls}`}>
                    <h3>⭐ Hal Penting yang Perlu Diingat</h3>
                    <ul>
                        {submodule.keyPoints.map((point, idx) => (
                            <li key={idx}>{point}</li>
                        ))}
                    </ul>
                </section>
            )}

            {/* Examples */}
            {submodule.examples && (
                <section className="submodule-examples">
                    <h3>🔭 Contoh dalam Kehidupan Sehari-hari</h3>
                    <ul>
                        {submodule.examples.map((ex, idx) => (
                            <li key={idx}>{ex}</li>
                        ))}
                    </ul>
                </section>
            )}

            {/* Simulasi callout */}
            {onNavigate && (
                <div className="materi-reading-simulasi-box">
                    <div className="reading-simulasi-badge">🔬 PRAKTIKUM VIRTUAL</div>
                    <h4>Ingin Mengamati Interaksi Molekul Secara Langsung?</h4>
                    <p>
                        Kombinasikan pemahaman konsep di modul ini dengan simulasi 3D PhET Colorado,
                        visualisasi bentuk molekul VSEPR, dan simulasi transfer elektron NaCl!
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
    );
}

// ── Komponen utama MateriPage ────────────────────────────────────────────────
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
        // Format "Bab · Submateri" → gunakan bagian pertama sebagai chapter.
        // Jika tidak, kelompokkan semua di bawah judul modul.
        const hasBabFormat = submodule.title.includes(' · ');
        const chapter = hasBabFormat
            ? submodule.title.split(' · ')[0]
            : (selectedModule?.title ?? 'Submateri');

        if (!groups[chapter]) groups[chapter] = [];
        groups[chapter].push(submodule);
        return groups;
    }, {});

    return (
        <main className="materi-page">
            <div className="container">
                {!selectedSubmodule && (
                    <header className="materi-header">
                        <span className="materi-badge">🔬 PETUALANGAN CHEMBOND</span>
                        <h1>Jelajahi Dunia Ikatan Kimia!</h1>
                        <p>
                            Pelajari konsep ikatan kimia melalui tiga modul pembelajaran
                            yang disusun secara bertahap.
                        </p>
                    </header>
                )}

                {/* Daftar modul */}
                {!selectedModule && (
                    <>
                        {onNavigate && (
                            <section className="materi-simulasi-callout">
                                <div className="materi-simulasi-header-row">
                                    <span className="materi-simulasi-pill">🧪 LABORATORIUM VIRTUAL INTERAKTIF</span>
                                    <span className="materi-simulasi-meta">PhET Colorado &amp; Visualisasi 3D</span>
                                </div>
                                <div className="materi-simulasi-body">
                                    <div className="materi-simulasi-info">
                                        <h3>Eksplorasi Molekul &amp; Ikatan Kimia Secara Nyata</h3>
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

                {/* Daftar submodul */}
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
                                            {submodules.map((submodule, index) => {
                                                const acc = SUBMODULE_ACCENT[submodule.id];
                                                return (
                                                    <button
                                                        type="button"
                                                        className={`materi-submodule-card ${acc?.cls ?? ''}`}
                                                        key={submodule.id}
                                                        onClick={() => setSelectedSubmodule(submodule)}
                                                    >
                                                        <span className="submodule-num">{index + 1}</span>
                                                        <span className="submodule-icon-sm" aria-hidden="true">
                                                            {acc?.icon ?? '📖'}
                                                        </span>
                                                        {submodule.title.includes(' · ')
                                                            ? submodule.title.split(' · ')[1]
                                                            : submodule.title}
                                                        <span className="submodule-arrow">→</span>
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    )}
                                </section>
                            ))}
                        </div>
                    </section>
                )}

                {/* Pembaca submodul */}
                {selectedModule && selectedSubmodule && (
                    selectedModule.id === 'materi-1'
                        ? (
                            <Modul1Interactive
                                module={selectedModule}
                                submodule={selectedSubmodule}
                                onBack={handleBack}
                                onSelectSubmodule={(sub) => setSelectedSubmodule(sub)}
                            />
                        )
                        : (
                            <SubmoduleReader
                                module={selectedModule}
                                submodule={selectedSubmodule}
                                onNavigate={onNavigate}
                                onBack={handleBack}
                            />
                        )
                )}
            </div>
        </main>
    );
}

export default MateriPage;
