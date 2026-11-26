/**
 * src/components/HookMedia.tsx
 * Komponen media pemantik (video YouTube atau gambar) untuk submodul.
 * Pola "klik thumbnail → muat iframe" agar halaman cepat & fallback mudah.
 */

import { useState } from 'react';
import type { SubModuleHook } from '../data/types';
import './HookMedia.css';

// ── Util: ekstrak YouTube video ID dari berbagai format URL ──────────────────
export function getYouTubeId(url: string): string | null {
  try {
    const u = new URL(url);
    // https://www.youtube.com/watch?v=ID
    if (u.searchParams.has('v')) return u.searchParams.get('v');
    // https://youtu.be/ID  |  https://youtube.com/shorts/ID  |  .../embed/ID
    const match = u.pathname.match(/(?:\/embed\/|\/shorts\/|\/)([A-Za-z0-9_-]{11})(?:[/?#]|$)/);
    if (match) return match[1];
  } catch {
    // URL relatif / bukan URL — abaikan
  }
  return null;
}

// ── Sub-komponen: Video ──────────────────────────────────────────────────────
function HookVideo({ hook, accentClass }: { hook: SubModuleHook; accentClass: string }) {
  const [playing, setPlaying] = useState(false);
  const [imgError, setImgError] = useState(false);

  const videoId = getYouTubeId(hook.url);
  const thumbnailUrl = videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : null;
  const embedUrl = videoId
    ? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`
    : null;

  // Tidak bisa parse ID → tampilkan fallback langsung
  if (!videoId || !embedUrl) {
    return (
      <div className={`hook-fallback ${accentClass}`}>
        <span className="hook-fallback-icon">🎬</span>
        <p>{hook.fallbackText ?? hook.caption ?? 'Video pemantik tersedia.'}</p>
        <a
          href={hook.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hook-yt-btn"
        >
          Tonton di YouTube ↗
        </a>
      </div>
    );
  }

  if (playing) {
    return (
      <div className="hook-video-wrapper">
        <iframe
          className="hook-iframe"
          src={embedUrl}
          title={hook.caption ?? 'Video pemantik'}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
        {hook.caption && (
          <p className="hook-caption">
            🎬 {hook.caption}
            {hook.credit && <span className="hook-credit"> — {hook.credit}</span>}
          </p>
        )}
      </div>
    );
  }

  // Tampilkan thumbnail; fallback ke kartu teks jika thumbnail gagal
  return (
    <div className={`hook-thumbnail-wrapper ${accentClass}`}>
      {thumbnailUrl && !imgError ? (
        <button
          type="button"
          className="hook-thumbnail-btn"
          onClick={() => setPlaying(true)}
          aria-label={`Putar video: ${hook.caption ?? 'video pemantik'}`}
        >
          <img
            src={thumbnailUrl}
            alt={hook.caption ?? 'Thumbnail video'}
            className="hook-thumbnail-img"
            loading="lazy"
            onError={() => setImgError(true)}
          />
          <span className="hook-play-btn" aria-hidden="true">▶</span>
        </button>
      ) : (
        <div className="hook-fallback-inner">
          <span className="hook-fallback-icon">🎬</span>
          <p>{hook.fallbackText ?? hook.caption ?? 'Video pemantik tersedia.'}</p>
        </div>
      )}

      <div className="hook-video-footer">
        {hook.caption && <p className="hook-caption">🎬 {hook.caption}</p>}
        <a
          href={hook.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hook-yt-btn"
        >
          Tonton di YouTube ↗
        </a>
      </div>
    </div>
  );
}

// ── Sub-komponen: Gambar ─────────────────────────────────────────────────────
function HookImage({ hook, accentClass }: { hook: SubModuleHook; accentClass: string }) {
  const [imgError, setImgError] = useState(false);

  return (
    <figure className={`hook-image-wrapper ${accentClass}`}>
      {!imgError ? (
        <img
          src={hook.url}
          alt={hook.caption ?? 'Gambar pemantik'}
          className="hook-image"
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="hook-image-placeholder">
          <span>🖼️</span>
          <p>{hook.caption ?? 'Gambar tidak dapat dimuat.'}</p>
        </div>
      )}
      {(hook.caption || hook.credit) && (
        <figcaption className="hook-caption">
          {hook.caption}
          {hook.credit && <span className="hook-credit"> — {hook.credit}</span>}
        </figcaption>
      )}
    </figure>
  );
}

// ── Komponen utama ───────────────────────────────────────────────────────────
interface HookMediaProps {
  hook: SubModuleHook;
  /** CSS class tambahan untuk aksen warna submodul, e.g. 'hook-accent-blue' */
  accentClass?: string;
}

export function HookMedia({ hook, accentClass = '' }: HookMediaProps) {
  if (hook.type === 'video') {
    return <HookVideo hook={hook} accentClass={accentClass} />;
  }
  return <HookImage hook={hook} accentClass={accentClass} />;
}

export default HookMedia;
