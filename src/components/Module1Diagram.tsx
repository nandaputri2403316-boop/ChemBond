import React from 'react';

export type DiagramType =
  // Bab 1
  | 'potential-energy-curve'
  | 'kossel-lewis-concept'
  // Bab 2
  | 'bohr-atom-shells'
  | 'orbital-filling-hund'
  // Bab 3
  | 'valence-electrons'
  | 'lewis-dot-symbols'
  // Bab 4
  | 'noble-gas-configuration'
  | 'stability-pathways'
  // Bab 5
  | 'octet-duplet-molecules'
  | 'octet-exceptions'
  // Bab 6
  | 'electron-transfer-ionic'
  | 'covalent-bond-types'
  | 'ionic-vs-covalent-lattice';

export interface Module1DiagramProps {
  type: DiagramType;
  title?: string;
  caption?: string;
  className?: string;
}

// ── 1. Diagram Kurva Energi Potensial H2 (Bab 1) ─────────────────────────────
const PotentialEnergyCurveDiagram: React.FC = () => (
  <svg viewBox="0 0 520 280" className="m1-svg-canvas" aria-hidden="true">
    <defs>
      <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#EF4444" />
        <stop offset="40%" stopColor="#F59E0B" />
        <stop offset="55%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#0284C7" />
      </linearGradient>
      <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 8 5 L 0 9 z" fill="#8B7B89" />
      </marker>
    </defs>

    {/* Background Grid Accent */}
    <rect x="50" y="25" width="440" height="210" fill="#FFFDFD" rx="12" stroke="#FCE7F3" strokeWidth="1" />

    {/* Sumbu X dan Y */}
    <line x1="75" y1="210" x2="480" y2="210" stroke="#8B7B89" strokeWidth="1.8" markerEnd="url(#arrow)" />
    <line x1="75" y1="210" x2="75" y2="35" stroke="#8B7B89" strokeWidth="1.8" markerEnd="url(#arrow)" />

    {/* Garis Energi Nol (Acuan) */}
    <line x1="75" y1="110" x2="470" y2="110" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 4" />
    <text x="65" y="114" textAnchor="end" fontSize="11" fill="#64748B" fontWeight="600">0 kJ/mol</text>

    {/* Label Sumbu */}
    <text x="470" y="235" textAnchor="end" fontSize="11" fill="#4A3E4D" fontWeight="700">Jarak Antar-inti (r)</text>
    <text x="65" y="32" textAnchor="start" fontSize="11" fill="#4A3E4D" fontWeight="700">Energi Potensial (V)</text>

    {/* Kurva Energi Lennard-Jones/Morse */}
    <path
      d="M 105,45 Q 125,185 165,195 T 260,115 Q 360,110 460,110"
      fill="none"
      stroke="url(#curveGradient)"
      strokeWidth="3.5"
      strokeLinecap="round"
    />

    {/* Titik Minimum Kesetimbangan */}
    <line x1="165" y1="110" x2="165" y2="195" stroke="#F43F5E" strokeWidth="1.5" strokeDasharray="3 3" />
    <circle cx="165" cy="195" r="5.5" fill="#F43F5E" stroke="#FFFFFF" strokeWidth="2" />

    {/* Label Titik Kesetimbangan (74 pm, -436 kJ/mol) */}
    <g transform="translate(175, 195)">
      <rect x="0" y="0" width="165" height="38" rx="8" fill="#FFF1F5" stroke="#FDA4AF" strokeWidth="1.2" />
      <text x="8" y="16" fontSize="10.5" fill="#9F1239" fontWeight="800">Jarak Kesetimbangan: 74 pm</text>
      <text x="8" y="30" fontSize="10" fill="#BE123C" fontWeight="700">Energi Ikatan: −436 kJ/mol</text>
    </g>

    {/* Zona Tolakan vs Tarikan */}
    <g transform="translate(90, 75)">
      <rect x="0" y="0" width="105" height="26" rx="6" fill="#FEE2E2" stroke="#FCA5A5" />
      <text x="52" y="17" textAnchor="middle" fontSize="10" fill="#991B1B" fontWeight="700">Gaya Tolak Dominan</text>
    </g>
    <g transform="translate(310, 70)">
      <rect x="0" y="0" width="125" height="26" rx="6" fill="#E0F2FE" stroke="#7DD3FC" />
      <text x="62" y="17" textAnchor="middle" fontSize="10" fill="#0369A1" fontWeight="700">Gaya Tarik Berkurang</text>
    </g>

    {/* Dua Atom H mendekat */}
    <g transform="translate(370, 140)">
      <circle cx="15" cy="15" r="11" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5" />
      <text x="15" y="19" textAnchor="middle" fontSize="10" fontWeight="800" fill="#334155">H</text>
      <circle cx="50" cy="15" r="11" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1.5" />
      <text x="50" y="19" textAnchor="middle" fontSize="10" fontWeight="800" fill="#334155">H</text>
      <text x="32" y="40" textAnchor="middle" fontSize="9" fill="#64748B" fontWeight="600">Atom terpisah (r jauh)</text>
    </g>
  </svg>
);

// ── 2. Diagram Peta Konsep Kossel vs Lewis (Bab 1) ───────────────────────────
const KosselLewisConceptDiagram: React.FC = () => (
  <svg viewBox="0 0 520 240" className="m1-svg-canvas" aria-hidden="true">
    {/* Kotak Pusat: Teori Ikatan Elektronik 1916 */}
    <rect x="160" y="15" width="200" height="42" rx="10" fill="#FDF2F8" stroke="#F472B6" strokeWidth="1.8" />
    <text x="260" y="33" textAnchor="middle" fontSize="11" fontWeight="800" fill="#9D174D">TEORI ELEKTRONIK (1916)</text>
    <text x="260" y="47" textAnchor="middle" fontSize="9.5" fill="#BE185D">Kossel &amp; Lewis: Peran Elektron</text>

    {/* Cabang Kiri: Walter Kossel */}
    <path d="M 210,57 L 210,95 L 130,95 L 130,115" fill="none" stroke="#F472B6" strokeWidth="2" />
    <rect x="35" y="115" width="190" height="105" rx="12" fill="#FFF7ED" stroke="#FDBA74" strokeWidth="1.5" />
    <text x="130" y="136" textAnchor="middle" fontSize="12" fontWeight="800" fill="#C2410C">Walter Kossel (Ikatan Ion)</text>
    <line x1="50" y1="145" x2="210" y2="145" stroke="#FFEDD5" strokeWidth="1.2" />
    <text x="48" y="162" fontSize="10" fill="#7C2D12" fontWeight="600">⚡ Terjadi perpindahan elektron</text>
    <text x="48" y="180" fontSize="10" fill="#7C2D12" fontWeight="600">➕ Logam melepas e⁻ → Kation</text>
    <text x="48" y="198" fontSize="10" fill="#7C2D12" fontWeight="600">➖ Nonlogam menerima e⁻ → Anion</text>
    <text x="48" y="213" fontSize="9.5" fill="#EA580C" fontWeight="700">Contoh: Na⁺ + Cl⁻ → Kisi Kristal NaCl</text>

    {/* Cabang Kanan: Gilbert N. Lewis */}
    <path d="M 310,57 L 310,95 L 390,95 L 390,115" fill="none" stroke="#F472B6" strokeWidth="2" />
    <rect x="295" y="115" width="190" height="105" rx="12" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="1.5" />
    <text x="390" y="136" textAnchor="middle" fontSize="12" fontWeight="800" fill="#15803D">Gilbert N. Lewis (Kovalen)</text>
    <line x1="310" y1="145" x2="470" y2="145" stroke="#DCFCE7" strokeWidth="1.2" />
    <text x="308" y="162" fontSize="10" fill="#14532D" fontWeight="600">🤝 Penggunaan bersama elektron</text>
    <text x="308" y="180" fontSize="10" fill="#14532D" fontWeight="600">🔗 Tumpang tindih orbital elektron</text>
    <text x="308" y="198" fontSize="10" fill="#14532D" fontWeight="600">✨ Mencapai aturan duplet/oktet</text>
    <text x="308" y="213" fontSize="9.5" fill="#16A34A" fontWeight="700">Contoh: H:H (H₂) &amp; H:Cl (HCl)</text>
  </svg>
);

// ── 3. Model Kulit Atom Bohr Na (Bab 2) ──────────────────────────────────────
const BohrAtomShellsDiagram: React.FC = () => (
  <svg viewBox="0 0 520 260" className="m1-svg-canvas" aria-hidden="true">
    {/* Lingkaran Pusat Atom Na (230, 130) */}
    <g transform="translate(190, 130)">
      {/* Kulit M (n=3, R=105) */}
      <circle cx="0" cy="0" r="105" fill="none" stroke="#F472B6" strokeWidth="1.5" strokeDasharray="4 4" />
      {/* Kulit L (n=2, R=75) */}
      <circle cx="0" cy="0" r="75" fill="none" stroke="#A78BFA" strokeWidth="1.5" strokeDasharray="4 4" />
      {/* Kulit K (n=1, R=45) */}
      <circle cx="0" cy="0" r="45" fill="none" stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="4 4" />

      {/* Inti Atom Na (11p, 12n) */}
      <circle cx="0" cy="0" r="24" fill="#FDF2F8" stroke="#DB2777" strokeWidth="2" />
      <text x="0" y="1" textAnchor="middle" fontSize="10.5" fontWeight="900" fill="#9D174D">₁₁Na</text>
      <text x="0" y="12" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#BE185D">11p⁺ 12n⁰</text>

      {/* Elektron Kulit K (2 elektron: 0°, 180°) */}
      <circle cx="0" cy="-45" r="4.5" fill="#0284C7" />
      <circle cx="0" cy="45" r="4.5" fill="#0284C7" />

      {/* Elektron Kulit L (8 elektron berpasangan di 4 kuadran) */}
      <circle cx="-25" cy="-70" r="4.5" fill="#7C3AED" />
      <circle cx="25" cy="-70" r="4.5" fill="#7C3AED" />
      <circle cx="70" cy="-25" r="4.5" fill="#7C3AED" />
      <circle cx="70" cy="25" r="4.5" fill="#7C3AED" />
      <circle cx="25" cy="70" r="4.5" fill="#7C3AED" />
      <circle cx="-25" cy="70" r="4.5" fill="#7C3AED" />
      <circle cx="-70" cy="25" r="4.5" fill="#7C3AED" />
      <circle cx="-70" cy="-25" r="4.5" fill="#7C3AED" />

      {/* Elektron Kulit M (1 elektron valensi di atas, berkedip pink) */}
      <circle cx="0" cy="-105" r="6" fill="#F43F5E" stroke="#FFFFFF" strokeWidth="1.5" />
      <circle cx="0" cy="-105" r="10" fill="none" stroke="#F43F5E" strokeWidth="1" strokeDasharray="2 2" opacity="0.6" />
    </g>

    {/* Keterangan di Sisi Kanan */}
    <g transform="translate(340, 35)">
      <rect x="0" y="0" width="165" height="190" rx="10" fill="#FFFDFD" stroke="#FBCFE8" strokeWidth="1.2" />
      <text x="12" y="22" fontSize="11.5" fontWeight="800" fill="#9D174D">Distribusi Kulit Bohr</text>
      <line x1="12" y1="30" x2="150" y2="30" stroke="#FCE7F3" strokeWidth="1.2" />

      <g transform="translate(12, 45)">
        <circle cx="6" cy="6" r="5" fill="#0284C7" />
        <text x="18" y="10" fontSize="10" fill="#334155" fontWeight="700">Kulit K (n=1) : 2 e⁻</text>
      </g>
      <g transform="translate(12, 75)">
        <circle cx="6" cy="6" r="5" fill="#7C3AED" />
        <text x="18" y="10" fontSize="10" fill="#334155" fontWeight="700">Kulit L (n=2) : 8 e⁻</text>
      </g>
      <g transform="translate(12, 105)">
        <circle cx="6" cy="6" r="5.5" fill="#F43F5E" />
        <text x="18" y="10" fontSize="10" fill="#BE123C" fontWeight="800">Kulit M (n=3) : 1 e⁻</text>
        <text x="18" y="24" fontSize="8.5" fill="#E11D48" fontWeight="600">(Elektron Valensi!)</text>
      </g>

      <line x1="12" y1="140" x2="150" y2="140" stroke="#FCE7F3" strokeWidth="1.2" />
      <text x="12" y="158" fontSize="9.5" fill="#64748B" fontWeight="600">Rumus Kapasitas: 2n²</text>
      <text x="12" y="174" fontSize="9.5" fill="#0F172A" fontWeight="800">Konfigurasi: 2, 8, 1</text>
    </g>
  </svg>
);

// ── 4. Diagram Orbital & Aturan Hund (Bab 2) ─────────────────────────────────
const OrbitalFillingHundDiagram: React.FC = () => (
  <svg viewBox="0 0 520 230" className="m1-svg-canvas" aria-hidden="true">
    {/* Nitrogen (Z=7) */}
    <g transform="translate(30, 25)">
      <rect x="0" y="0" width="220" height="180" rx="10" fill="#F0F9FF" stroke="#BAE6FD" strokeWidth="1.2" />
      <text x="15" y="24" fontSize="11.5" fontWeight="800" fill="#0369A1">Nitrogen (₇N): 1s² 2s² 2p³</text>
      <text x="15" y="40" fontSize="9.5" fill="#0284C7">Aturan Hund: spin sejajar [↑] [↑] [↑]</text>

      {/* Kotak 1s */}
      <g transform="translate(20, 60)">
        <rect x="0" y="0" width="30" height="34" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.5" rx="4" />
        <text x="15" y="23" textAnchor="middle" fontSize="14" fontWeight="800" fill="#0369A1">⇅</text>
        <text x="15" y="48" textAnchor="middle" fontSize="10" fontWeight="700" fill="#64748B">1s</text>
      </g>

      {/* Kotak 2s */}
      <g transform="translate(65, 60)">
        <rect x="0" y="0" width="30" height="34" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.5" rx="4" />
        <text x="15" y="23" textAnchor="middle" fontSize="14" fontWeight="800" fill="#0369A1">⇅</text>
        <text x="15" y="48" textAnchor="middle" fontSize="10" fontWeight="700" fill="#64748B">2s</text>
      </g>

      {/* Kotak 2p (3 orbital degenerat) */}
      <g transform="translate(110, 60)">
        <rect x="0" y="0" width="30" height="34" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.5" rx="4" />
        <rect x="30" y="0" width="30" height="34" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.5" rx="4" />
        <rect x="60" y="0" width="30" height="34" fill="#FFFFFF" stroke="#0284C7" strokeWidth="1.5" rx="4" />
        <text x="15" y="23" textAnchor="middle" fontSize="14" fontWeight="800" fill="#D97706">↑</text>
        <text x="45" y="23" textAnchor="middle" fontSize="14" fontWeight="800" fill="#D97706">↑</text>
        <text x="75" y="23" textAnchor="middle" fontSize="14" fontWeight="800" fill="#D97706">↑</text>
        <text x="45" y="48" textAnchor="middle" fontSize="10" fontWeight="700" fill="#64748B">2p³</text>
      </g>

      <rect x="15" y="125" width="190" height="38" rx="6" fill="#E0F2FE" />
      <text x="25" y="142" fontSize="9.5" fill="#0369A1" fontWeight="700">✓ 3 elektron tidak berpasangan</text>
      <text x="25" y="155" fontSize="8.5" fill="#0284C7">Stabil karena tolakan elektron minimal</text>
    </g>

    {/* Oksigen (Z=8) */}
    <g transform="translate(270, 25)">
      <rect x="0" y="0" width="220" height="180" rx="10" fill="#FFF1F2" stroke="#FECDD3" strokeWidth="1.2" />
      <text x="15" y="24" fontSize="11.5" fontWeight="800" fill="#BE123C">Oksigen (₈O): 1s² 2s² 2p⁴</text>
      <text x="15" y="40" fontSize="9.5" fill="#E11D48">Elektron ke-4 mulai berpasangan</text>

      {/* Kotak 1s */}
      <g transform="translate(20, 60)">
        <rect x="0" y="0" width="30" height="34" fill="#FFFFFF" stroke="#E11D48" strokeWidth="1.5" rx="4" />
        <text x="15" y="23" textAnchor="middle" fontSize="14" fontWeight="800" fill="#BE123C">⇅</text>
        <text x="15" y="48" textAnchor="middle" fontSize="10" fontWeight="700" fill="#64748B">1s</text>
      </g>

      {/* Kotak 2s */}
      <g transform="translate(65, 60)">
        <rect x="0" y="0" width="30" height="34" fill="#FFFFFF" stroke="#E11D48" strokeWidth="1.5" rx="4" />
        <text x="15" y="23" textAnchor="middle" fontSize="14" fontWeight="800" fill="#BE123C">⇅</text>
        <text x="15" y="48" textAnchor="middle" fontSize="10" fontWeight="700" fill="#64748B">2s</text>
      </g>

      {/* Kotak 2p (1 pasang, 2 tunggal) */}
      <g transform="translate(110, 60)">
        <rect x="0" y="0" width="30" height="34" fill="#FFFFFF" stroke="#E11D48" strokeWidth="1.5" rx="4" />
        <rect x="30" y="0" width="30" height="34" fill="#FFFFFF" stroke="#E11D48" strokeWidth="1.5" rx="4" />
        <rect x="60" y="0" width="30" height="34" fill="#FFFFFF" stroke="#E11D48" strokeWidth="1.5" rx="4" />
        <text x="15" y="23" textAnchor="middle" fontSize="14" fontWeight="800" fill="#BE123C">⇅</text>
        <text x="45" y="23" textAnchor="middle" fontSize="14" fontWeight="800" fill="#D97706">↑</text>
        <text x="75" y="23" textAnchor="middle" fontSize="14" fontWeight="800" fill="#D97706">↑</text>
        <text x="45" y="48" textAnchor="middle" fontSize="10" fontWeight="700" fill="#64748B">2p⁴</text>
      </g>

      <rect x="15" y="125" width="190" height="38" rx="6" fill="#FFE4E6" />
      <text x="25" y="142" fontSize="9.5" fill="#9F1239" fontWeight="700">✓ 1 pasang + 2 elektron tunggal</text>
      <text x="25" y="155" fontSize="8.5" fill="#BE123C">Siap membentuk 2 ikatan kovalen</text>
    </g>
  </svg>
);

// ── 5. Elektron Valensi vs Elektron Dalam (Bab 3) ────────────────────────────
const ValenceElectronsDiagram: React.FC = () => (
  <svg viewBox="0 0 520 220" className="m1-svg-canvas" aria-hidden="true">
    {/* Atom Klorin (Z=17: 2, 8, 7) */}
    <g transform="translate(130, 110)">
      <circle cx="0" cy="0" r="85" fill="#FFF1F2" stroke="#F43F5E" strokeWidth="2" strokeDasharray="3 3" />
      <circle cx="0" cy="0" r="60" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
      <circle cx="0" cy="0" r="35" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1.5" />
      <circle cx="0" cy="0" r="18" fill="#FDF2F8" stroke="#DB2777" strokeWidth="2" />
      <text x="0" y="4" textAnchor="middle" fontSize="10" fontWeight="900" fill="#9D174D">₁₇Cl</text>

      {/* Elektron Kulit Terluar (7 Elektron Valensi) */}
      <circle cx="-25" cy="-80" r="5" fill="#E11D48" />
      <circle cx="25" cy="-80" r="5" fill="#E11D48" />
      <circle cx="80" cy="-25" r="5" fill="#E11D48" />
      <circle cx="80" cy="25" r="5" fill="#E11D48" />
      <circle cx="25" cy="80" r="5" fill="#E11D48" />
      <circle cx="-25" cy="80" r="5" fill="#E11D48" />
      <circle cx="-80" cy="0" r="5" fill="#E11D48" />
    </g>

    {/* Panah dan Box Keterangan */}
    <g transform="translate(260, 30)">
      <rect x="0" y="0" width="230" height="75" rx="8" fill="#FFF1F2" stroke="#FDA4AF" strokeWidth="1.2" />
      <text x="14" y="22" fontSize="11" fontWeight="800" fill="#BE123C">7 Elektron Valensi (Kulit M)</text>
      <text x="14" y="38" fontSize="9.5" fill="#4C0519">Kulit terluar atom Cl (3s² 3p⁵).</text>
      <text x="14" y="52" fontSize="9.5" fill="#9F1239" fontWeight="700">→ Sangat aktif terlibat pembentukan ikatan!</text>
      <text x="14" y="66" fontSize="9" fill="#E11D48">Kekurangan 1 elektron menuju oktet (8e⁻).</text>
    </g>

    <g transform="translate(260, 120)">
      <rect x="0" y="0" width="230" height="70" rx="8" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.2" />
      <text x="14" y="22" fontSize="11" fontWeight="800" fill="#475569">10 Elektron Bagian Dalam (Core)</text>
      <text x="14" y="38" fontSize="9.5" fill="#64748B">Kulit K (2e⁻) + Kulit L (8e⁻) = [Ne].</text>
      <text x="14" y="52" fontSize="9.5" fill="#334155" fontWeight="600">Terikat kuat oleh inti atom (+17).</text>
      <text x="14" y="64" fontSize="9" fill="#64748B">Tidak terlibat langsung dalam ikatan kimia biasa.</text>
    </g>
  </svg>
);

// ── 6. Simbol Titik Lewis Golongan Utama (Bab 3) ─────────────────────────────
const LewisDotSymbolsDiagram: React.FC = () => (
  <svg viewBox="0 0 520 200" className="m1-svg-canvas" aria-hidden="true">
    {/* Grid Unsur H, C, N, O, F, Ne */}
    {[
      { symbol: 'H', dots: 1, group: 'Gol 1', color: '#0284C7', desc: '1 titik' },
      { symbol: 'C', dots: 4, group: 'Gol 14', color: '#16A34A', desc: '4 titik tunggal' },
      { symbol: 'N', dots: 5, group: 'Gol 15', color: '#D97706', desc: '1 pasang, 3 tunggal' },
      { symbol: 'O', dots: 6, group: 'Gol 16', color: '#EA580C', desc: '2 pasang, 2 tunggal' },
      { symbol: 'F', dots: 7, group: 'Gol 17', color: '#E11D48', desc: '3 pasang, 1 tunggal' },
      { symbol: 'Ne', dots: 8, group: 'Gol 18', color: '#7C3AED', desc: '4 pasang (oktet)' },
    ].map((elem, i) => {
      const x = 20 + i * 82;
      return (
        <g key={elem.symbol} transform={`translate(${x}, 20)`}>
          <rect x="0" y="0" width="74" height="155" rx="10" fill="#FFFDFD" stroke="#F1E3EB" strokeWidth="1.2" />
          <text x="37" y="20" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#8B7B89">{elem.group}</text>
          
          {/* Simbol Lewis */}
          <g transform="translate(37, 70)">
            <text x="0" y="8" textAnchor="middle" fontSize="26" fontWeight="900" fill="#352B3D">{elem.symbol}</text>
            
            {/* Dots */}
            {elem.dots >= 1 && <circle cx="0" cy="-22" r="3.2" fill={elem.color} />}
            {elem.dots >= 2 && <circle cx="22" cy="0" r="3.2" fill={elem.color} />}
            {elem.dots >= 3 && <circle cx="0" cy="22" r="3.2" fill={elem.color} />}
            {elem.dots >= 4 && <circle cx="-22" cy="0" r="3.2" fill={elem.color} />}
            {elem.dots >= 5 && <circle cx="6" cy="-22" r="3.2" fill={elem.color} />}
            {elem.dots >= 6 && <circle cx="22" cy="6" r="3.2" fill={elem.color} />}
            {elem.dots >= 7 && <circle cx="6" cy="22" r="3.2" fill={elem.color} />}
            {elem.dots >= 8 && <circle cx="-22" cy="6" r="3.2" fill={elem.color} />}
          </g>

          <line x1="8" y1="115" x2="66" y2="115" stroke="#F1E3EB" strokeWidth="1" />
          <text x="37" y="132" textAnchor="middle" fontSize="9" fontWeight="700" fill={elem.color}>{elem.dots} e⁻ valensi</text>
          <text x="37" y="145" textAnchor="middle" fontSize="7.5" fill="#8B7B89">{elem.desc}</text>
        </g>
      );
    })}
  </svg>
);

// ── 7. Kestabilan Gas Mulia: Duplet & Oktet (Bab 4) ──────────────────────────
const NobleGasConfigurationDiagram: React.FC = () => (
  <svg viewBox="0 0 520 220" className="m1-svg-canvas" aria-hidden="true">
    {/* Helium: Duplet (Z=2) */}
    <g transform="translate(45, 25)">
      <rect x="0" y="0" width="195" height="170" rx="12" fill="#FDF2F8" stroke="#F472B6" strokeWidth="1.5" />
      <text x="97" y="24" textAnchor="middle" fontSize="12" fontWeight="800" fill="#9D174D">Helium (₂He) — Duplet</text>
      <text x="97" y="40" textAnchor="middle" fontSize="10" fill="#BE185D">Konfigurasi: 1s² (Kulit K penuh)</text>

      <g transform="translate(97, 95)">
        <circle cx="0" cy="0" r="38" fill="none" stroke="#F472B6" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="0" cy="0" r="16" fill="#FFFFFF" stroke="#BE185D" strokeWidth="1.5" />
        <text x="0" y="4" textAnchor="middle" fontSize="9" fontWeight="900" fill="#9D174D">₂He</text>
        <circle cx="-25" cy="-25" r="4.5" fill="#DB2777" />
        <circle cx="25" cy="25" r="4.5" fill="#DB2777" />
      </g>

      <text x="97" y="152" textAnchor="middle" fontSize="9.5" fill="#831843" fontWeight="700">Maksimum 2 elektron di kulit 1</text>
    </g>

    {/* Neon: Oktet (Z=10) */}
    <g transform="translate(280, 25)">
      <rect x="0" y="0" width="195" height="170" rx="12" fill="#F5F3FF" stroke="#A78BFA" strokeWidth="1.5" />
      <text x="97" y="24" textAnchor="middle" fontSize="12" fontWeight="800" fill="#5B21B6">Neon (₁₀Ne) — Oktet</text>
      <text x="97" y="40" textAnchor="middle" fontSize="10" fill="#6D28D9">Konfigurasi: 2, 8 ([He] 2s² 2p⁶)</text>

      <g transform="translate(97, 95)">
        <circle cx="0" cy="0" r="44" fill="none" stroke="#A78BFA" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="0" cy="0" r="26" fill="none" stroke="#DDD6FE" strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="0" cy="0" r="16" fill="#FFFFFF" stroke="#6D28D9" strokeWidth="1.5" />
        <text x="0" y="4" textAnchor="middle" fontSize="9" fontWeight="900" fill="#5B21B6">₁₀Ne</text>
        {/* 8 Elektron Terluar */}
        <circle cx="-15" cy="-42" r="4" fill="#7C3AED" />
        <circle cx="15" cy="-42" r="4" fill="#7C3AED" />
        <circle cx="42" cy="-15" r="4" fill="#7C3AED" />
        <circle cx="42" cy="15" r="4" fill="#7C3AED" />
        <circle cx="15" cy="42" r="4" fill="#7C3AED" />
        <circle cx="-15" cy="42" r="4" fill="#7C3AED" />
        <circle cx="-42" cy="15" r="4" fill="#7C3AED" />
        <circle cx="-42" cy="-15" r="4" fill="#7C3AED" />
      </g>

      <text x="97" y="152" textAnchor="middle" fontSize="9.5" fill="#4C1D95" fontWeight="700">8 elektron valensi (ns² np⁶)</text>
    </g>
  </svg>
);

// ── 8. Tiga Jalur Atom Mencapai Kestabilan (Bab 4) ───────────────────────────
const StabilityPathwaysDiagram: React.FC = () => (
  <svg viewBox="0 0 520 220" className="m1-svg-canvas" aria-hidden="true">
    {/* Jalur A: Melepas Elektron */}
    <g transform="translate(20, 20)">
      <rect x="0" y="0" width="150" height="180" rx="10" fill="#FFF7ED" stroke="#FDBA74" strokeWidth="1.2" />
      <text x="75" y="24" textAnchor="middle" fontSize="11" fontWeight="800" fill="#C2410C">A. Melepas e⁻</text>
      <text x="75" y="40" textAnchor="middle" fontSize="8.5" fill="#9A3412">Membentuk Kation (+)</text>

      <g transform="translate(75, 80)">
        <circle cx="0" cy="0" r="24" fill="#FFEDD5" stroke="#EA580C" strokeWidth="1.5" />
        <text x="0" y="4" textAnchor="middle" fontSize="11" fontWeight="900" fill="#9A3412">Na⁺</text>
      </g>

      <text x="75" y="125" textAnchor="middle" fontSize="9.5" fill="#7C2D12" fontWeight="700">Na → Na⁺ + e⁻</text>
      <text x="75" y="145" textAnchor="middle" fontSize="8.5" fill="#9A3412">2, 8, 1 → 2, 8</text>
      <text x="75" y="165" textAnchor="middle" fontSize="8" fill="#C2410C">Logam (EI rendah)</text>
    </g>

    {/* Jalur B: Menerima Elektron */}
    <g transform="translate(185, 20)">
      <rect x="0" y="0" width="150" height="180" rx="10" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="1.2" />
      <text x="75" y="24" textAnchor="middle" fontSize="11" fontWeight="800" fill="#15803D">B. Menerima e⁻</text>
      <text x="75" y="40" textAnchor="middle" fontSize="8.5" fill="#166534">Membentuk Anion (−)</text>

      <g transform="translate(75, 80)">
        <circle cx="0" cy="0" r="24" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.5" />
        <text x="0" y="4" textAnchor="middle" fontSize="11" fontWeight="900" fill="#14532D">Cl⁻</text>
      </g>

      <text x="75" y="125" textAnchor="middle" fontSize="9.5" fill="#14532D" fontWeight="700">Cl + e⁻ → Cl⁻</text>
      <text x="75" y="145" textAnchor="middle" fontSize="8.5" fill="#166534">2, 8, 7 → 2, 8, 8</text>
      <text x="75" y="165" textAnchor="middle" fontSize="8" fill="#15803D">Nonlogam (AE negatif)</text>
    </g>

    {/* Jalur C: Berbagi Elektron */}
    <g transform="translate(350, 20)">
      <rect x="0" y="0" width="150" height="180" rx="10" fill="#F0F9FF" stroke="#7DD3FC" strokeWidth="1.2" />
      <text x="75" y="24" textAnchor="middle" fontSize="11" fontWeight="800" fill="#0369A1">C. Berbagi e⁻</text>
      <text x="75" y="40" textAnchor="middle" fontSize="8.5" fill="#075985">Ikatan Kovalen</text>

      <g transform="translate(75, 80)">
        <circle cx="-14" cy="0" r="20" fill="none" stroke="#0284C7" strokeWidth="1.5" />
        <circle cx="14" cy="0" r="20" fill="none" stroke="#0284C7" strokeWidth="1.5" />
        <text x="0" y="4" textAnchor="middle" fontSize="11" fontWeight="900" fill="#0369A1">H:H</text>
      </g>

      <text x="75" y="125" textAnchor="middle" fontSize="9.5" fill="#0C4A6E" fontWeight="700">H + H → H₂</text>
      <text x="75" y="145" textAnchor="middle" fontSize="8.5" fill="#075985">Masing-masing duplet (2e⁻)</text>
      <text x="75" y="165" textAnchor="middle" fontSize="8" fill="#0284C7">Nonlogam + Nonlogam</text>
    </g>
  </svg>
);

// ── 9. Molekul Kovalen Duplet & Oktet (Bab 5) ────────────────────────────────
const OctetDupletMoleculesDiagram: React.FC = () => (
  <svg viewBox="0 0 520 210" className="m1-svg-canvas" aria-hidden="true">
    {/* Molekul H2 (Duplet) */}
    <g transform="translate(35, 25)">
      <rect x="0" y="0" width="205" height="160" rx="10" fill="#FDF2F8" stroke="#F472B6" strokeWidth="1.2" />
      <text x="102" y="22" textAnchor="middle" fontSize="11" fontWeight="800" fill="#9D174D">Molekul H₂ (Aturan Duplet)</text>

      <g transform="translate(102, 75)">
        <circle cx="-25" cy="0" r="34" fill="none" stroke="#EC4899" strokeWidth="1.5" />
        <circle cx="25" cy="0" r="34" fill="none" stroke="#EC4899" strokeWidth="1.5" />
        <text x="-35" y="5" textAnchor="middle" fontSize="14" fontWeight="800" fill="#831843">H</text>
        <text x="35" y="5" textAnchor="middle" fontSize="14" fontWeight="800" fill="#831843">H</text>
        {/* Pasangan Elektron Bersama */}
        <circle cx="0" cy="-8" r="4" fill="#DB2777" />
        <circle cx="0" cy="8" r="4" fill="#DB2777" />
      </g>

      <text x="102" y="132" textAnchor="middle" fontSize="9.5" fill="#BE185D" fontWeight="700">Struktur: H — H</text>
      <text x="102" y="146" textAnchor="middle" fontSize="8.5" fill="#9D174D">Tiap atom H memiliki akses 2e⁻ (Duplet)</text>
    </g>

    {/* Molekul H2O (Oktet pada O, Duplet pada H) */}
    <g transform="translate(280, 25)">
      <rect x="0" y="0" width="205" height="160" rx="10" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="1.2" />
      <text x="102" y="22" textAnchor="middle" fontSize="11" fontWeight="800" fill="#15803D">Molekul H₂O (Oktet &amp; Duplet)</text>

      <g transform="translate(102, 75)">
        {/* Oksigen Pusat */}
        <circle cx="0" cy="-6" r="30" fill="#DCFCE7" stroke="#16A34A" strokeWidth="1.5" />
        <text x="0" y="0" textAnchor="middle" fontSize="16" fontWeight="900" fill="#14532D">O</text>
        {/* PEB Oksigen (atas) */}
        <circle cx="-10" cy="-26" r="3.2" fill="#15803D" />
        <circle cx="10" cy="-26" r="3.2" fill="#15803D" />
        <circle cx="-26" cy="-10" r="3.2" fill="#15803D" />
        <circle cx="-26" cy="6" r="3.2" fill="#15803D" />

        {/* Ikatan O-H Kiri */}
        <line x1="-18" y1="12" x2="-45" y2="35" stroke="#16A34A" strokeWidth="2.5" />
        <circle cx="-50" cy="40" r="12" fill="#F0FDF4" stroke="#16A34A" strokeWidth="1.2" />
        <text x="-50" y="44" textAnchor="middle" fontSize="10" fontWeight="800" fill="#14532D">H</text>

        {/* Ikatan O-H Kanan */}
        <line x1="18" y1="12" x2="45" y2="35" stroke="#16A34A" strokeWidth="2.5" />
        <circle cx="50" cy="40" r="12" fill="#F0FDF4" stroke="#16A34A" strokeWidth="1.2" />
        <text x="50" y="44" textAnchor="middle" fontSize="10" fontWeight="800" fill="#14532D">H</text>
      </g>

      <text x="102" y="132" textAnchor="middle" fontSize="9.5" fill="#15803D" fontWeight="700">O dikelilingi 8e⁻ (Oktet)</text>
      <text x="102" y="146" textAnchor="middle" fontSize="8.5" fill="#166534">Masing-masing H dikelilingi 2e⁻ (Duplet)</text>
    </g>
  </svg>
);

// ── 10. Tiga Pengecualian Aturan Oktet (Bab 5) ───────────────────────────────
const OctetExceptionsDiagram: React.FC = () => (
  <svg viewBox="0 0 520 220" className="m1-svg-canvas" aria-hidden="true">
    {/* 1. Oktet Tidak Lengkap: BF3 */}
    <g transform="translate(15, 20)">
      <rect x="0" y="0" width="155" height="180" rx="10" fill="#FFFBEB" stroke="#FCD34D" strokeWidth="1.2" />
      <text x="77" y="22" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#B45309">1. Oktet Tidak Lengkap</text>
      <text x="77" y="36" textAnchor="middle" fontSize="9" fill="#92400E">BF₃ (Boron Trifluorida)</text>

      <g transform="translate(77, 85)">
        <text x="0" y="6" textAnchor="middle" fontSize="16" fontWeight="900" fill="#B45309">B</text>
        {/* 3 Ikatan B-F */}
        <line x1="0" y1="-8" x2="0" y2="-30" stroke="#D97706" strokeWidth="2" />
        <text x="0" y="-35" textAnchor="middle" fontSize="11" fontWeight="800" fill="#78350F">F</text>
        <line x1="-8" y1="8" x2="-28" y2="24" stroke="#D97706" strokeWidth="2" />
        <text x="-36" y="32" textAnchor="middle" fontSize="11" fontWeight="800" fill="#78350F">F</text>
        <line x1="8" y1="8" x2="28" y2="24" stroke="#D97706" strokeWidth="2" />
        <text x="36" y="32" textAnchor="middle" fontSize="11" fontWeight="800" fill="#78350F">F</text>
      </g>

      <rect x="10" y="132" width="135" height="36" rx="6" fill="#FEF3C7" />
      <text x="77" y="147" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#92400E">Total: 6 elektron</text>
      <text x="77" y="160" textAnchor="middle" fontSize="8" fill="#78350F">Stabil meski belum 8e⁻</text>
    </g>

    {/* 2. Elektron Ganjil: NO */}
    <g transform="translate(182, 20)">
      <rect x="0" y="0" width="155" height="180" rx="10" fill="#FFF1F2" stroke="#FDA4AF" strokeWidth="1.2" />
      <text x="77" y="22" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#BE123C">2. Elektron Ganjil</text>
      <text x="77" y="36" textAnchor="middle" fontSize="9" fill="#9F1239">NO (Nitrogen Monoksida)</text>

      <g transform="translate(77, 85)">
        <text x="-20" y="6" textAnchor="middle" fontSize="16" fontWeight="900" fill="#BE123C">·N</text>
        <line x1="-8" y1="-2" x2="12" y2="-2" stroke="#E11D48" strokeWidth="2.5" />
        <line x1="-8" y1="6" x2="12" y2="6" stroke="#E11D48" strokeWidth="2.5" />
        <text x="26" y="6" textAnchor="middle" fontSize="16" fontWeight="900" fill="#BE123C">O</text>
        {/* Titik radikal di atas N */}
        <circle cx="-28" cy="-14" r="3" fill="#BE123C" />
      </g>

      <rect x="10" y="132" width="135" height="36" rx="6" fill="#FFE4E6" />
      <text x="77" y="147" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#9F1239">Total: 11 elektron</text>
      <text x="77" y="160" textAnchor="middle" fontSize="8" fill="#881337">Memiliki 1 e⁻ radikal bebas</text>
    </g>

    {/* 3. Oktet Diperluas: PCl5 */}
    <g transform="translate(350, 20)">
      <rect x="0" y="0" width="155" height="180" rx="10" fill="#F5F3FF" stroke="#C4B5FD" strokeWidth="1.2" />
      <text x="77" y="22" textAnchor="middle" fontSize="10.5" fontWeight="800" fill="#6D28D9">3. Oktet Diperluas</text>
      <text x="77" y="36" textAnchor="middle" fontSize="9" fill="#5B21B6">PCl₅ (Fosforus Pentaklorida)</text>

      <g transform="translate(77, 85)">
        <text x="0" y="6" textAnchor="middle" fontSize="16" fontWeight="900" fill="#6D28D9">P</text>
        {/* 5 Ikatan P-Cl */}
        <line x1="0" y1="-8" x2="0" y2="-30" stroke="#8B5CF6" strokeWidth="1.8" />
        <line x1="0" y1="10" x2="0" y2="30" stroke="#8B5CF6" strokeWidth="1.8" />
        <line x1="8" y1="0" x2="30" y2="0" stroke="#8B5CF6" strokeWidth="1.8" />
        <line x1="-8" y1="-4" x2="-26" y2="-18" stroke="#8B5CF6" strokeWidth="1.8" />
        <line x1="-8" y1="4" x2="-26" y2="18" stroke="#8B5CF6" strokeWidth="1.8" />
        <text x="0" y="-33" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#4C1D95">Cl</text>
        <text x="0" y="39" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#4C1D95">Cl</text>
        <text x="36" y="3" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#4C1D95">Cl</text>
        <text x="-32" y="-18" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#4C1D95">Cl</text>
        <text x="-32" y="23" textAnchor="middle" fontSize="8.5" fontWeight="700" fill="#4C1D95">Cl</text>
      </g>

      <rect x="10" y="132" width="135" height="36" rx="6" fill="#EDE9FE" />
      <text x="77" y="147" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#5B21B6">Total: 10 elektron di P</text>
      <text x="77" y="160" textAnchor="middle" fontSize="8" fill="#4C1D95">&gt; 8 elektron (kulit n=3)</text>
    </g>
  </svg>
);

// ── 11. Perpindahan Elektron Ikatan Ion NaCl (Bab 6) ─────────────────────────
const ElectronTransferIonicDiagram: React.FC = () => (
  <svg viewBox="0 0 520 220" className="m1-svg-canvas" aria-hidden="true">
    <defs>
      <marker id="transferArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 8 5 L 0 9 z" fill="#F43F5E" />
      </marker>
    </defs>

    {/* Atom Netral Na & Cl */}
    <g transform="translate(40, 25)">
      <rect x="0" y="0" width="195" height="170" rx="10" fill="#FFFDFD" stroke="#E2E8F0" strokeWidth="1.2" />
      <text x="97" y="20" textAnchor="middle" fontSize="11" fontWeight="800" fill="#334155">Atom Netral (Sebelum Ikatan)</text>

      {/* Na Netral */}
      <g transform="translate(45, 75)">
        <circle cx="0" cy="0" r="24" fill="#FEF3C7" stroke="#D97706" strokeWidth="1.5" />
        <text x="0" y="4" textAnchor="middle" fontSize="12" fontWeight="900" fill="#B45309">Na</text>
        {/* 1e- valensi siap pindah */}
        <circle cx="28" cy="0" r="5" fill="#F43F5E" stroke="#FFFFFF" strokeWidth="1" />
        <text x="0" y="42" textAnchor="middle" fontSize="9" fontWeight="700" fill="#78350F">2, 8, 1</text>
      </g>

      {/* Panah Perpindahan e- */}
      <path d="M 75,70 Q 100,35 125,65" fill="none" stroke="#F43F5E" strokeWidth="2.5" markerEnd="url(#transferArrow)" strokeDasharray="3 3" />
      <text x="100" y="32" textAnchor="middle" fontSize="8.5" fontWeight="800" fill="#BE123C">Lepas 1 e⁻</text>

      {/* Cl Netral */}
      <g transform="translate(145, 75)">
        <circle cx="0" cy="0" r="28" fill="#ECFDF5" stroke="#059669" strokeWidth="1.5" />
        <text x="0" y="4" textAnchor="middle" fontSize="12" fontWeight="900" fill="#047857">Cl</text>
        <text x="0" y="42" textAnchor="middle" fontSize="9" fontWeight="700" fill="#065F46">2, 8, 7</text>
      </g>

      <text x="97" y="152" textAnchor="middle" fontSize="8.5" fill="#64748B">Atom netral belum stabil oktet</text>
    </g>

    {/* Panah Transformasi */}
    <g transform="translate(245, 100)">
      <line x1="0" y1="10" x2="25" y2="10" stroke="#F472B6" strokeWidth="3" markerEnd="url(#arrow)" />
    </g>

    {/* Senyawa Ionik Na+ Cl- */}
    <g transform="translate(285, 25)">
      <rect x="0" y="0" width="200" height="170" rx="10" fill="#FDF2F8" stroke="#F472B6" strokeWidth="1.2" />
      <text x="100" y="20" textAnchor="middle" fontSize="11" fontWeight="800" fill="#9D174D">Pasangan Ionik [Na⁺][Cl⁻]</text>

      {/* Kation Na+ */}
      <g transform="translate(55, 75)">
        <circle cx="0" cy="0" r="20" fill="#FDE68A" stroke="#B45309" strokeWidth="2" />
        <text x="0" y="4" textAnchor="middle" fontSize="12" fontWeight="900" fill="#78350F">Na⁺</text>
        <text x="0" y="38" textAnchor="middle" fontSize="9" fontWeight="800" fill="#B45309">2, 8 (Oktet)</text>
      </g>

      {/* Garis Gaya Elektrostatik */}
      <g transform="translate(95, 75)">
        <line x1="-10" y1="0" x2="20" y2="0" stroke="#F43F5E" strokeWidth="2.5" strokeDasharray="2 3" />
        <text x="5" y="-10" textAnchor="middle" fontSize="8" fontWeight="800" fill="#E11D48">Tarik Elektrostatik</text>
      </g>

      {/* Anion Cl- */}
      <g transform="translate(145, 75)">
        <circle cx="0" cy="0" r="30" fill="#A7F3D0" stroke="#047857" strokeWidth="2" />
        <text x="0" y="4" textAnchor="middle" fontSize="13" fontWeight="900" fill="#064E3B">Cl⁻</text>
        <text x="0" y="44" textAnchor="middle" fontSize="9" fontWeight="800" fill="#047857">2, 8, 8 (Oktet)</text>
      </g>

      <rect x="15" y="132" width="170" height="26" rx="6" fill="#FCE7F3" />
      <text x="100" y="148" textAnchor="middle" fontSize="9" fontWeight="800" fill="#9D174D">Membentuk Kisi Kristal NaCl</text>
    </g>
  </svg>
);

// ── 12. Jenis Ikatan Kovalen: Tunggal, Rangkap 2, Rangkap 3 (Bab 6) ──────────
const CovalentBondTypesDiagram: React.FC = () => (
  <svg viewBox="0 0 520 210" className="m1-svg-canvas" aria-hidden="true">
    {/* Tunggal: H2 */}
    <g transform="translate(20, 20)">
      <rect x="0" y="0" width="150" height="170" rx="10" fill="#F0F9FF" stroke="#BAE6FD" strokeWidth="1.2" />
      <text x="75" y="22" textAnchor="middle" fontSize="11" fontWeight="800" fill="#0369A1">Ikatan Tunggal</text>
      <text x="75" y="36" textAnchor="middle" fontSize="9" fill="#0284C7">H₂ (1 Pasangan Bersama)</text>

      <g transform="translate(75, 80)">
        <circle cx="-20" cy="0" r="18" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.5" />
        <text x="-20" y="4" textAnchor="middle" fontSize="12" fontWeight="800" fill="#0369A1">H</text>
        <line x1="-2" y1="0" x2="2" y2="0" stroke="#0284C7" strokeWidth="3" />
        <circle cx="20" cy="0" r="18" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.5" />
        <text x="20" y="4" textAnchor="middle" fontSize="12" fontWeight="800" fill="#0369A1">H</text>
      </g>

      <text x="75" y="125" textAnchor="middle" fontSize="12" fontWeight="900" fill="#0284C7">H — H</text>
      <rect x="12" y="138" width="126" height="22" rx="4" fill="#E0F2FE" />
      <text x="75" y="152" textAnchor="middle" fontSize="8" fontWeight="700" fill="#0369A1">2 elektron ikatan (1 PEI)</text>
    </g>

    {/* Rangkap Dua: O2 */}
    <g transform="translate(185, 20)">
      <rect x="0" y="0" width="150" height="170" rx="10" fill="#FFF1F2" stroke="#FECDD3" strokeWidth="1.2" />
      <text x="75" y="22" textAnchor="middle" fontSize="11" fontWeight="800" fill="#BE123C">Ikatan Rangkap 2</text>
      <text x="75" y="36" textAnchor="middle" fontSize="9" fill="#E11D48">O₂ (2 Pasangan Bersama)</text>

      <g transform="translate(75, 80)">
        <circle cx="-22" cy="0" r="20" fill="#FFE4E6" stroke="#E11D48" strokeWidth="1.5" />
        <text x="-22" y="5" textAnchor="middle" fontSize="13" fontWeight="900" fill="#BE123C">O</text>
        <circle cx="22" cy="0" r="20" fill="#FFE4E6" stroke="#E11D48" strokeWidth="1.5" />
        <text x="22" y="5" textAnchor="middle" fontSize="13" fontWeight="900" fill="#BE123C">O</text>
      </g>

      <text x="75" y="125" textAnchor="middle" fontSize="13" fontWeight="900" fill="#BE123C">O ═ O</text>
      <rect x="12" y="138" width="126" height="22" rx="4" fill="#FFE4E6" />
      <text x="75" y="152" textAnchor="middle" fontSize="8" fontWeight="700" fill="#9F1239">4 elektron ikatan (2 PEI)</text>
    </g>

    {/* Rangkap Tiga: N2 */}
    <g transform="translate(350, 20)">
      <rect x="0" y="0" width="150" height="170" rx="10" fill="#FDF4FF" stroke="#F0ABFC" strokeWidth="1.2" />
      <text x="75" y="22" textAnchor="middle" fontSize="11" fontWeight="800" fill="#A21CAF">Ikatan Rangkap 3</text>
      <text x="75" y="36" textAnchor="middle" fontSize="9" fill="#C026D3">N₂ (3 Pasangan Bersama)</text>

      <g transform="translate(75, 80)">
        <circle cx="-22" cy="0" r="20" fill="#FAE8FF" stroke="#C026D3" strokeWidth="1.5" />
        <text x="-22" y="5" textAnchor="middle" fontSize="13" fontWeight="900" fill="#A21CAF">N</text>
        <circle cx="22" cy="0" r="20" fill="#FAE8FF" stroke="#C026D3" strokeWidth="1.5" />
        <text x="22" y="5" textAnchor="middle" fontSize="13" fontWeight="900" fill="#A21CAF">N</text>
      </g>

      <text x="75" y="125" textAnchor="middle" fontSize="13" fontWeight="900" fill="#A21CAF">N ≡ N</text>
      <rect x="12" y="138" width="126" height="22" rx="4" fill="#FAE8FF" />
      <text x="75" y="152" textAnchor="middle" fontSize="8" fontWeight="700" fill="#86198F">6 elektron ikatan (3 PEI)</text>
    </g>
  </svg>
);

// ── 13. Kisi Kristal Ionik vs Molekul Kovalen (Bab 6) ────────────────────────
const IonicVsCovalentLatticeDiagram: React.FC = () => (
  <svg viewBox="0 0 520 220" className="m1-svg-canvas" aria-hidden="true">
    {/* Senyawa Ionik: Kisi Kristal NaCl */}
    <g transform="translate(30, 20)">
      <rect x="0" y="0" width="210" height="180" rx="12" fill="#FFFDFD" stroke="#FDBA74" strokeWidth="1.2" />
      <text x="105" y="24" textAnchor="middle" fontSize="11.5" fontWeight="800" fill="#C2410C">Kisi Kristal Ionik (NaCl)</text>
      <text x="105" y="38" textAnchor="middle" fontSize="9" fill="#9A3412">Susunan 3D Berulang Tanpa Molekul Terpisah</text>

      {/* Grid 3x3 Ion Berselang-seling */}
      <g transform="translate(45, 60)">
        {[
          [1, 0, 1],
          [0, 1, 0],
          [1, 0, 1],
        ].map((row, rIdx) =>
          row.map((isNa, cIdx) => (
            <g key={`${rIdx}-${cIdx}`} transform={`translate(${cIdx * 35}, ${rIdx * 30})`}>
              <circle
                cx="25"
                cy="15"
                r={isNa ? 9 : 14}
                fill={isNa ? '#F59E0B' : '#10B981'}
                stroke="#FFFFFF"
                strokeWidth="1.5"
              />
              <text
                x="25"
                y={isNa ? 18 : 19}
                textAnchor="middle"
                fontSize={isNa ? 8 : 9}
                fontWeight="900"
                fill="#FFFFFF"
              >
                {isNa ? 'Na⁺' : 'Cl⁻'}
              </text>
            </g>
          ))
        )}
      </g>

      <text x="105" y="165" textAnchor="middle" fontSize="8.5" fill="#7C2D12" fontWeight="700">
        Rumus NaCl = Rasio 1:1, Titik Leleh Tinggi
      </text>
    </g>

    {/* Senyawa Kovalen: Molekul Diskret H2O */}
    <g transform="translate(280, 20)">
      <rect x="0" y="0" width="210" height="180" rx="12" fill="#F0FDF4" stroke="#86EFAC" strokeWidth="1.2" />
      <text x="105" y="24" textAnchor="middle" fontSize="11.5" fontWeight="800" fill="#15803D">Molekul Kovalen Diskret (H₂O)</text>
      <text x="105" y="38" textAnchor="middle" fontSize="9" fill="#166534">Unit Molekul Terpisah (Gaya Antarmolekul)</text>

      {/* Tiga Molekul H2O Terpisah */}
      <g transform="translate(30, 60)">
        {/* Molekul 1 */}
        <g transform="translate(35, 20)">
          <circle cx="0" cy="0" r="14" fill="#EF4444" />
          <circle cx="-12" cy="12" r="7" fill="#E2E8F0" />
          <circle cx="12" cy="12" r="7" fill="#E2E8F0" />
          <text x="0" y="4" textAnchor="middle" fontSize="9" fontWeight="800" fill="#FFF">O</text>
        </g>
        {/* Molekul 2 */}
        <g transform="translate(115, 30)">
          <circle cx="0" cy="0" r="14" fill="#EF4444" />
          <circle cx="-12" cy="12" r="7" fill="#E2E8F0" />
          <circle cx="12" cy="12" r="7" fill="#E2E8F0" />
          <text x="0" y="4" textAnchor="middle" fontSize="9" fontWeight="800" fill="#FFF">O</text>
        </g>
        {/* Molekul 3 */}
        <g transform="translate(75, 75)">
          <circle cx="0" cy="0" r="14" fill="#EF4444" />
          <circle cx="-12" cy="12" r="7" fill="#E2E8F0" />
          <circle cx="12" cy="12" r="7" fill="#E2E8F0" />
          <text x="0" y="4" textAnchor="middle" fontSize="9" fontWeight="800" fill="#FFF">O</text>
        </g>
      </g>

      <text x="105" y="165" textAnchor="middle" fontSize="8.5" fill="#14532D" fontWeight="700">
        Ikatan Kuat di Dalam Molekul, Lemah Antar Molekul
      </text>
    </g>
  </svg>
);

const DIAGRAM_COMPONENTS: Record<DiagramType, React.FC> = {
  'potential-energy-curve': PotentialEnergyCurveDiagram,
  'kossel-lewis-concept': KosselLewisConceptDiagram,
  'bohr-atom-shells': BohrAtomShellsDiagram,
  'orbital-filling-hund': OrbitalFillingHundDiagram,
  'valence-electrons': ValenceElectronsDiagram,
  'lewis-dot-symbols': LewisDotSymbolsDiagram,
  'noble-gas-configuration': NobleGasConfigurationDiagram,
  'stability-pathways': StabilityPathwaysDiagram,
  'octet-duplet-molecules': OctetDupletMoleculesDiagram,
  'octet-exceptions': OctetExceptionsDiagram,
  'electron-transfer-ionic': ElectronTransferIonicDiagram,
  'covalent-bond-types': CovalentBondTypesDiagram,
  'ionic-vs-covalent-lattice': IonicVsCovalentLatticeDiagram,
};

const DIAGRAM_TITLES: Record<DiagramType, { title: string; caption: string }> = {
  'potential-energy-curve': {
    title: 'Kurva Energi Potensial Pembentukan Ikatan H₂',
    caption: 'Interaksi tarik-menarik dan tolak-menolak mencapai kesetimbangan energi minimum pada jarak 74 pm dengan energi disosiasi −436 kJ/mol.',
  },
  'kossel-lewis-concept': {
    title: 'Peta Konsep Gagasan Kossel dan Lewis (1916)',
    caption: 'Kossel menjelaskan perpindahan elektron pada ikatan ionik, sedangkan Lewis menjelaskan penggunaan bersama pasangan elektron pada ikatan kovalen.',
  },
  'bohr-atom-shells': {
    title: 'Model Kulit Atom Bohr dan Konfigurasi Natrium (₁₁Na)',
    caption: 'Elektron terdistribusi pada kulit K (2), L (8), dan M (1). Elektron tunggal pada kulit M merupakan elektron valensi.',
  },
  'orbital-filling-hund': {
    title: 'Diagram Orbital dan Aturan Hund (Nitrogen vs Oksigen)',
    caption: 'Elektron mengisi orbital degenerat satu per satu dengan spin sejajar sebelum berpasangan untuk meminimalkan gaya tolak antar-elektron.',
  },
  'valence-electrons': {
    title: 'Elektron Valensi vs Elektron Kulit Dalam (Core Electrons)',
    caption: 'Pada atom klorin (₁₇Cl: 2, 8, 7), tujuh elektron valensi pada kulit terluar sangat menentukan sifat kimia dan kecenderungan berikatan.',
  },
  'lewis-dot-symbols': {
    title: 'Simbol Titik Lewis untuk Unsur Golongan Utama',
    caption: 'Titik Lewis mewakili jumlah elektron valensi yang ditempatkan pada empat sisi lambang atom sebelum dipasangkan.',
  },
  'noble-gas-configuration': {
    title: 'Model Kestabilan Konfigurasi Gas Mulia (Duplet & Oktet)',
    caption: 'Helium stabil dengan 2 elektron (duplet kulit pertama), sedangkan gas mulia lainnya stabil dengan 8 elektron valensi (oktet).',
  },
  'stability-pathways': {
    title: 'Tiga Jalur Atom Mencapai Kestabilan Elektron',
    caption: 'Atom dapat melepaskan elektron (kation), menerima elektron (anion), atau menggunakan pasangan elektron bersama (kovalen).',
  },
  'octet-duplet-molecules': {
    title: 'Pemenuhan Aturan Duplet dan Oktet dalam Molekul Kovalen',
    caption: 'Atom H dalam H₂ memenuhi kecenderungan duplet, sedangkan atom O dalam H₂O dikelilingi 8 elektron dalam struktur Lewis.',
  },
  'octet-exceptions': {
    title: 'Tiga Kategori Pengecualian Aturan Oktet',
    caption: 'Pengecualian mencakup oktet tidak lengkap (BF₃), spesi berelektron ganjil (NO), dan oktet diperluas (PCl₅).',
  },
  'electron-transfer-ionic': {
    title: 'Proses Pembentukan Ikatan Ionik pada Natrium Klorida (NaCl)',
    caption: 'Perpindahan satu elektron valensi dari atom Na ke atom Cl menghasilkan kation Na⁺ dan anion Cl⁻ yang terikat oleh gaya elektrostatik.',
  },
  'covalent-bond-types': {
    title: 'Jenis Ikatan Kovalen: Tunggal, Rangkap Dua, dan Rangkap Tiga',
    caption: 'Jumlah pasangan elektron yang digunakan bersama menentukan orde ikatan kovalen antara dua atom nonlogam.',
  },
  'ionic-vs-covalent-lattice': {
    title: 'Perbandingan Struktur: Kisi Kristal Ionik vs Molekul Kovalen Diskret',
    caption: 'Senyawa ion membentuk kisi kristal 3D teratur dari kation-anion, sedangkan senyawa kovalen sederhana berupa molekul-molekul mandiri.',
  },
};

/**
 * Module1Diagram — Komponen visualisasi konsep kimia interaktif berbasis React, SVG, dan CSS.
 * Didesain khusus untuk Modul 1 ChemBond dengan presisi ilmiah dan estetika modern pastel.
 */
export const Module1Diagram: React.FC<Module1DiagramProps> = ({
  type,
  title,
  caption,
  className = '',
}) => {
  const SvgComponent = DIAGRAM_COMPONENTS[type];
  const meta = DIAGRAM_TITLES[type] ?? {
    title: 'Diagram Konsep Kimia',
    caption: 'Visualisasi konsep ikatan kimia ChemBond.',
  };

  const displayTitle = title ?? meta.title;
  const displayCaption = caption ?? meta.caption;

  if (!SvgComponent) {
    return null;
  }

  return (
    <figure className={`m1-diagram-wrapper ${className}`} role="figure" aria-label={displayTitle}>
      <div className="m1-diagram-header">
        <span className="m1-diagram-badge">DIAGRAM KIMIA INTERAKTIF</span>
        <h4 className="m1-diagram-title">{displayTitle}</h4>
      </div>

      <div className="m1-diagram-stage">
        <SvgComponent />
      </div>

      <figcaption className="m1-diagram-caption">
        <span className="m1-diagram-caption-icon" aria-hidden="true">💡</span>
        <span className="m1-diagram-caption-text">{displayCaption}</span>
      </figcaption>
    </figure>
  );
};

export default Module1Diagram;
