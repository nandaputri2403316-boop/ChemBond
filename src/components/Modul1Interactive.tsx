

import type { ModuleData, SubModule } from '../data/types';

interface Modul1InteractiveProps {
    module: ModuleData;
    submodule: SubModule;
    onBack: () => void;
}

export default function Modul1Interactive({
    module,
    submodule,
    onBack,
}: Modul1InteractiveProps) {
    return (
        <article className="modul1-interactive">
            <button
                type="button"
                className="materi-back"
                onClick={onBack}
            >
                ← Kembali ke daftar submateri
            </button>

            <header className="modul1-interactive__header">
                <p>{module.title}</p>
                <h2>{submodule.title}</h2>
            </header>


            <section className="modul1-interactive__content">
                {submodule.content.map((paragraph, index) => {
                    if (paragraph.startsWith('## ')) {
                        return <h3 key={index}>{paragraph.replace('## ', '')}</h3>;
                    }

                    if (paragraph.startsWith('### ')) {
                        return <h4 key={index}>{paragraph.replace('### ', '')}</h4>;
                    }

                    return <p key={index}>{paragraph}</p>;
                })}
            </section>


            {submodule.keyPoints && (
                <section className="submodule-keypoints">
                    <h3>⭐ Hal Penting yang Perlu Diingat</h3>
                    <ul>
                        {submodule.keyPoints.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </section>
            )}
        </article>
    );
}
