import React, { useState, useRef } from 'react';

interface LearningVideoPlayerProps {
  videoSrc?: string;
  posterSrc?: string;
  youtubeId?: string;
  title?: string;
}

export const LearningVideoPlayer: React.FC<LearningVideoPlayerProps> = ({
  videoSrc,
  posterSrc,
  youtubeId,
  title = 'Proses Terbentuknya Ikatan Kimia: Ion, Kovalen, dan Logam',
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [activeChapter, setActiveChapter] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const chapters = [
    { title: 'Mengapa Atom Membentuk Ikatan?', time: '00:00' },
    { title: 'Transfer Elektron pada Ikatan Ion (NaCl)', time: '02:15' },
    { title: 'Pemakaian Bersama Pasangan Elektron (H₂O & CO₂)', time: '04:40' },
    { title: 'Lautan Elektron pada Logam', time: '06:50' },
  ];

  const handlePlayToggle = () => {
    if (videoSrc && videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {
          // Playback error handling
        });
        setIsPlaying(true);
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    const el = document.getElementById('chembond-video-frame');
    if (el) {
      if (!document.fullscreenElement) {
        el.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  return (
    <div className="learning-video-wrapper">
      <div id="chembond-video-frame" className="video-player-container">
        {/* Render actual YouTube Embed if a valid ID is provided */}
        {youtubeId && isPlaying ? (
          <iframe
            className="video-media-element"
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : videoSrc ? (
          /* Render HTML5 Video if local or remote MP4 is provided */
          <video
            ref={videoRef}
            className="video-media-element"
            src={videoSrc}
            poster={posterSrc}
            controls
            playsInline
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
        ) : (
          /* High-Definition Interactive Chemistry Video Visualizer (Default Safe Mode) */
          <div className="video-interactive-display">
            {/* Visual Background Poster */}
            <div className="video-poster-art" aria-hidden="true">
              <svg viewBox="0 0 800 450" className="poster-svg" fill="none">
                <rect width="800" height="450" fill="url(#vidBgGrad)" />

                {/* Subtle Grid Lines */}
                <g opacity="0.15">
                  <line x1="0" y1="112" x2="800" y2="112" stroke="#FFF" strokeWidth="1" />
                  <line x1="0" y1="225" x2="800" y2="225" stroke="#FFF" strokeWidth="1" />
                  <line x1="0" y1="337" x2="800" y2="337" stroke="#FFF" strokeWidth="1" />
                  <line x1="200" y1="0" x2="200" y2="450" stroke="#FFF" strokeWidth="1" />
                  <line x1="400" y1="0" x2="400" y2="450" stroke="#FFF" strokeWidth="1" />
                  <line x1="600" y1="0" x2="600" y2="450" stroke="#FFF" strokeWidth="1" />
                </g>

                {/* Central Molecular Interactive Demonstration */}
                <g className={isPlaying ? 'mol-anim-active' : ''}>
                  {/* Left Atom (Na / Metal) */}
                  <circle cx="280" cy="225" r="72" fill="url(#vidSphereCyan)" filter="url(#vidGlow)" />
                  <ellipse cx="260" cy="200" rx="24" ry="14" fill="#FFF" fillOpacity="0.75" transform="rotate(-30 260 200)" />
                  <circle cx="280" cy="225" r="72" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
                  <text x="280" y="235" textAnchor="middle" fill="#FFF" fontSize="24" fontWeight="900" fontFamily="sans-serif">
                    Na
                  </text>
                  <text x="280" y="260" textAnchor="middle" fill="#A8F5FF" fontSize="13" fontWeight="700" fontFamily="sans-serif">
                    [2, 8, 1]
                  </text>

                  {/* Electron Transfer Arc */}
                  <path
                    d="M 330,175 Q 400,90 470,175"
                    stroke="#FFD152"
                    strokeWidth="4"
                    strokeDasharray="6 6"
                    className="anim-transfer-flow"
                  />

                  {/* Traveling Electron */}
                  <circle cx="400" cy="132" r="8" fill="#FFF" filter="url(#vidGlow)" />
                  <circle cx="400" cy="132" r="5" fill="#FFD152" />

                  {/* Right Atom (Cl / Non-Metal) */}
                  <circle cx="520" cy="225" r="88" fill="url(#vidSphereLime)" filter="url(#vidGlow)" />
                  <ellipse cx="496" cy="195" rx="30" ry="18" fill="#FFF" fillOpacity="0.75" transform="rotate(-30 496 195)" />
                  <circle cx="520" cy="225" r="88" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
                  <text x="520" y="235" textAnchor="middle" fill="#FFF" fontSize="26" fontWeight="900" fontFamily="sans-serif">
                    Cl
                  </text>
                  <text x="520" y="262" textAnchor="middle" fill="#D2FF8C" fontSize="13" fontWeight="700" fontFamily="sans-serif">
                    [2, 8, 7]
                  </text>
                </g>

                {/* Gradients and Filters */}
                <defs>
                  <linearGradient id="vidBgGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#25122F" />
                    <stop offset="50%" stopColor="#3C1344" />
                    <stop offset="100%" stopColor="#53164D" />
                  </linearGradient>

                  <radialGradient id="vidSphereCyan" cx="35%" cy="30%" r="70%">
                    <stop offset="0%" stopColor="#A8F5FF" />
                    <stop offset="35%" stopColor="#38E1FF" />
                    <stop offset="75%" stopColor="#0092CE" />
                    <stop offset="100%" stopColor="#004D70" />
                  </radialGradient>

                  <radialGradient id="vidSphereLime" cx="35%" cy="30%" r="70%">
                    <stop offset="0%" stopColor="#D2FF8C" />
                    <stop offset="35%" stopColor="#78FF43" />
                    <stop offset="75%" stopColor="#1EAA24" />
                    <stop offset="100%" stopColor="#085A0E" />
                  </radialGradient>

                  <filter id="vidGlow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>
              </svg>
            </div>

            {/* Play Button Overlay */}
            <div className="video-overlay-content">
              <button
                type="button"
                className={`btn-video-play-huge ${isPlaying ? 'playing' : ''}`}
                onClick={handlePlayToggle}
                aria-label={isPlaying ? 'Jeda video pembelajaran' : 'Putar video pembelajaran'}
              >
                <span className="play-triangle" aria-hidden="true">
                  {isPlaying ? '❚❚' : '▶'}
                </span>
              </button>

              <div className="video-overlay-text">
                <span className="video-tag-pill">VIDEO PEMBELAJARAN INTERAKTIF</span>
                <h4 className="video-overlay-title">{title}</h4>
                <p className="video-overlay-sub">
                  {isPlaying
                    ? 'Simulasi visual animasi sedang berjalan. Klik jeda untuk berhenti.'
                    : 'Klik tombol putar untuk melihat visualisasi mikroskopis pembentukan ikatan kimia.'}
                </p>
              </div>
            </div>

            {/* Custom Control Bar */}
            <div className="video-bottom-controls">
              <button
                type="button"
                className="ctrl-btn"
                onClick={handlePlayToggle}
                title={isPlaying ? 'Jeda' : 'Putar'}
              >
                {isPlaying ? '⏸' : '▶'}
              </button>

              <span className="ctrl-time-label">
                {isPlaying ? '02:45 / 08:30' : '00:00 / 08:30'}
              </span>

              <div className="ctrl-timeline-bar">
                <div
                  className="ctrl-timeline-progress"
                  style={{ width: isPlaying ? '35%' : '0%' }}
                />
              </div>

              <button
                type="button"
                className="ctrl-btn"
                onClick={handleMuteToggle}
                title={isMuted ? 'Buka Suara' : 'Bisukan'}
              >
                {isMuted ? '🔇' : '🔊'}
              </button>

              <button
                type="button"
                className="ctrl-btn"
                onClick={handleFullscreen}
                title="Layar Penuh"
              >
                ⛶
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Chapters Breakdown Row */}
      <div className="video-chapters-row">
        <span className="chapters-title">Bab Video:</span>
        <div className="chapters-list">
          {chapters.map((ch, idx) => (
            <button
              key={ch.time}
              type="button"
              className={`chapter-pill ${activeChapter === idx ? 'active' : ''}`}
              onClick={() => setActiveChapter(idx)}
            >
              <span className="ch-time">{ch.time}</span>
              <span className="ch-text">{ch.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

