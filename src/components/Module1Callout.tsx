import React from 'react';

export type CalloutVariant = 'pemantik' | 'catatan' | 'contoh' | 'kesimpulan';

export interface Module1CalloutProps {
  variant?: CalloutVariant;
  title?: string;
  children: React.ReactNode;
  icon?: string;
  className?: string;
}

const DEFAULT_METADATA: Record<
  CalloutVariant,
  { label: string; defaultIcon: string; badgeCls: string }
> = {
  pemantik: {
    label: 'Pertanyaan Pemantik',
    defaultIcon: '💡',
    badgeCls: 'm1-callout--pemantik',
  },
  catatan: {
    label: 'Catatan Penting',
    defaultIcon: '📌',
    badgeCls: 'm1-callout--catatan',
  },
  contoh: {
    label: 'Contoh & Penerapan',
    defaultIcon: '🧪',
    badgeCls: 'm1-callout--contoh',
  },
  kesimpulan: {
    label: 'Rangkuman & Refleksi',
    defaultIcon: '🎯',
    badgeCls: 'm1-callout--kesimpulan',
  },
};

/**
 * Module1Callout — Komponen kotak informasi terstruktur dengan nuansa pastel ChemBond.
 * Membantu siswa fokus pada poin kunci, fenomena pemantik, contoh, atau kesimpulan materi.
 */
export const Module1Callout: React.FC<Module1CalloutProps> = ({
  variant = 'catatan',
  title,
  children,
  icon,
  className = '',
}) => {
  const meta = DEFAULT_METADATA[variant] ?? DEFAULT_METADATA.catatan;
  const activeIcon = icon ?? meta.defaultIcon;

  return (
    <aside
      className={`m1-callout-box ${meta.badgeCls} ${className}`}
      role="note"
      aria-label={title || meta.label}
    >
      {title ? (
        <div className="m1-callout-header">
          <span className="m1-callout-icon" aria-hidden="true">
            {activeIcon}
          </span>
          <h4 className="m1-callout-title">{title}</h4>
        </div>
      ) : (
        <span className="m1-callout-inline-icon" aria-hidden="true">
          {activeIcon}
        </span>
      )}
      <div className="m1-callout-body">{children}</div>
    </aside>
  );
};

export default Module1Callout;
