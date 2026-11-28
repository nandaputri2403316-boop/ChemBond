import React, { useState } from 'react';

export interface Module1ImageProps {
  src?: string;
  alt: string;
  caption?: string;
  source?: string;
  className?: string;
  fallbackIcon?: string;
}

/**
 * Module1Image — Komponen penampil ilustrasi visual pembelajaran Modul 1.
 * Mendukung gambar eksternal/internal dengan fallback anggun berbasis SVG
 * jika URL gambar belum disediakan atau gagal dimuat.
 */
export const Module1Image: React.FC<Module1ImageProps> = ({
  src,
  alt,
  caption,
  source,
  className = '',
  fallbackIcon = '🧪',
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <figure className={`m1-image-figure ${className}`}>
      <div className="m1-image-container">
        {src && !hasError ? (
          <img
            src={src}
            alt={alt}
            className="m1-image-img"
            loading="lazy"
            onError={() => setHasError(true)}
          />
        ) : (
          <div className="m1-image-fallback" role="img" aria-label={alt}>
            <div className="m1-fallback-icon" aria-hidden="true">
              {fallbackIcon}
            </div>
            <p className="m1-fallback-text">{alt}</p>
            <span className="m1-fallback-tag">Ilustrasi Kimia ChemBond</span>
          </div>
        )}
      </div>

      {(caption || source) && (
        <figcaption className="m1-image-caption">
          {caption && <span className="m1-caption-text">{caption}</span>}
          {source && (
            <span className="m1-source-text">
              <strong>Sumber:</strong> {source}
            </span>
          )}
        </figcaption>
      )}
    </figure>
  );
};

export default Module1Image;
