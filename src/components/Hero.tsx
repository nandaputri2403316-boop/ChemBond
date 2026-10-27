import React, { useState } from 'react';
import { NaClMoleculeHero } from './NaClMoleculeHero';
import { AtomIllustration } from './AtomIllustration';

interface HeroProps {
  onScrollToSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToSection }) => {
  const [heroView, setHeroView] = useState<'nacl' | 'atom'>('nacl');

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Text & Call to Actions */}
        <div className="hero-content">
          {/* Tagline / Subtitle Badge */}
          <div className="hero-badge-pill">
            <span className="badge-sparkle">✨</span>
            <span className="badge-text">Jelajahi Atom, Temukan Ikatan!</span>
            <span className="badge-tag">ChemBond SMA</span>
          </div>

          {/* Big Bold Heading: White text with deep magenta / hot pink accent */}
          <h1 className="hero-title">
            Petualangan <br />
            Menjelajahi <span className="hero-title-accent">Dunia Atom</span>
          </h1>

          {/* Short Description */}
          <p className="hero-description">
            Kenali rahasia atom, jelajahi cara unsur berikatan, dan temukan keajaiban kimia melalui simulasi interaktif yang seru dan penuh warna!
          </p>

          {/* Capsule Shaped Action Buttons */}
          <div className="hero-actions">
            {/* Primary Capsule Button: White with Magenta Text and Soft Shadow */}
            <button
              type="button"
              className="btn btn-capsule-primary btn-hero"
              onClick={() => onScrollToSection('pengenalan')}
            >
              <span className="btn-icon">🚀</span>
              <span>Mulai Petualangan</span>
            </button>

            {/* Secondary Capsule Button: Translucent White Glass with White Text */}
            <button
              type="button"
              className="btn btn-capsule-secondary btn-hero"
              onClick={() => onScrollToSection('pengenalan')}
            >
              <span className="btn-icon">📖</span>
              <span>Jelajahi Materi</span>
            </button>
          </div>

          {/* Quick Highlight Feature Chips */}
          <div className="hero-highlights">
            <div className="highlight-item">
              <span className="highlight-icon">💎</span>
              <span className="highlight-text">Molekul NaCl Raksasa</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">⚛️</span>
              <span className="highlight-text">Model Atom 3D</span>
            </div>
            <div className="highlight-item">
              <span className="highlight-icon">🧪</span>
              <span className="highlight-text">Lab Virtual Interaktif</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual Showcase (NaCl Molecule as Primary, plus Atom view) */}
        <div className="hero-visual">
          {/* Visual Mode Switcher Tabs */}
          <div className="hero-visual-switcher" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={heroView === 'nacl'}
              className={`switcher-tab-btn ${heroView === 'nacl' ? 'active' : ''}`}
              onClick={() => setHeroView('nacl')}
            >
              <span className="tab-icon">💎</span>
              <span>Molekul NaCl (Utama)</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={heroView === 'atom'}
              className={`switcher-tab-btn ${heroView === 'atom' ? 'active' : ''}`}
              onClick={() => setHeroView('atom')}
            >
              <span className="tab-icon">⚛️</span>
              <span>Orbit Atom Interaktif</span>
            </button>
          </div>

          {/* Active Visual Component */}
          <div className="hero-visual-content">
            {heroView === 'nacl' ? (
              <NaClMoleculeHero />
            ) : (
              <AtomIllustration />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
