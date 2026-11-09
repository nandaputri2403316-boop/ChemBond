
import { useState } from 'react';
import { materiList } from '../data/materi';
import type { ModuleData, SubModule } from '../data/types';
import './MateriPage.css';

export function MateriPage() {
  const [selectedModule, setSelectedModule] = useState<ModuleData | null>(null);
  const [selectedSubmodule, setSelectedSubmodule] = useState<SubModule | null>(null);

  const handleBack = () => {
    if (selectedSubmodule) {
      setSelectedSubmodule(null);
    } else {
      setSelectedModule(null);
    }
  };

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
        )}

        {selectedModule && !selectedSubmodule && (
          <section className="materi-detail">
            <button type="button" className="materi-back" onClick={handleBack}>
              ← Kembali ke daftar modul
            </button>

            <h2>{selectedModule.title}</h2>
            <p>{selectedModule.subtitle}</p>

            <h3>Tujuan Pembelajaran</h3>
            <ul>
              {selectedModule.learningObjectives.map((objective, index) => (
                <li key={index}>{objective}</li>
              ))}
            </ul>

            <h3>Pilih Submateri</h3>
            <div className="materi-submodule-list">
              {selectedModule.submodules.map((submodule, index) => (
                <button
                  type="button"
                  className="materi-submodule-card"
                  key={submodule.id}
                  onClick={() => setSelectedSubmodule(submodule)}
                >
                  <span>{index + 1}</span>
                  {submodule.title}
                  <span>→</span>
                </button>
              ))}
            </div>
          </section>
        )}

        {selectedModule && selectedSubmodule && (
          <article className="materi-reading">
            <button type="button" className="materi-back" onClick={handleBack}>
              ← Kembali ke daftar submateri
            </button>

            <span className="materi-badge">{selectedModule.title}</span>
            <h2>{selectedSubmodule.title}</h2>

            {selectedSubmodule.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            {selectedSubmodule.keyPoints && (
              <>
                <h3>Hal Penting yang Perlu Diingat</h3>
                <ul>
                  {selectedSubmodule.keyPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </>
            )}

            {selectedSubmodule.examples && (
              <>
                <h3>Contoh dalam Kehidupan Sehari-hari</h3>
                <ul>
                  {selectedSubmodule.examples.map((example, index) => (
                    <li key={index}>{example}</li>
                  ))}
                </ul>
              </>
            )}
          </article>
        )}
      </div>
    </main>
  );
}

export default MateriPage;
