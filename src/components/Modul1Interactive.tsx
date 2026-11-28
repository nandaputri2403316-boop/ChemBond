import React from 'react';
import type { ModuleData, SubModule } from '../data/types';
import { Module1Callout } from './Module1Callout';
import { Module1Diagram, type DiagramType } from './Module1Diagram';
import { Module1Image } from './Module1Image';

interface Modul1InteractiveProps {
  module: ModuleData;
  submodule: SubModule;
  onBack: () => void;
  onSelectSubmodule?: (submodule: SubModule) => void;
}

interface SubmoduleVisualConfig {
  topCallout?: {
    variant: 'pemantik' | 'catatan' | 'contoh' | 'kesimpulan';
    title: string;
    text: string;
  };
  diagram?: {
    type: DiagramType;
    title?: string;
    caption?: string;
    position?: 'top' | 'middle' | 'bottom';
  };
  middleCallout?: {
    variant: 'pemantik' | 'catatan' | 'contoh' | 'kesimpulan';
    title: string;
    text: string;
  };
  bottomCallout?: {
    variant: 'pemantik' | 'catatan' | 'contoh' | 'kesimpulan';
    title: string;
    text: string;
  };
  image?: {
    alt: string;
    caption: string;
    source?: string;
    fallbackIcon?: string;
    src?: string;
  };
}

// ── Konfigurasi Visual Khusus Bab 1 sampai Bab 6 Modul 1 ────────────────────
const SUBMODULE_VISUALS: Record<string, SubmoduleVisualConfig> = {
  // ── BAB 1: Hakikat Ikatan Kimia & Energi ──
  'sub-1-1': {
    topCallout: {
      variant: 'pemantik',
      title: 'Mengapa Atom Saling Berikatan?',
      text: 'Pernahkah Anda bertanya mengapa dua atom hidrogen dapat bersatu membentuk molekul H₂, tetapi jika dipaksa terlalu dekat justru saling tolak-menolak? Jawabannya terletak pada kesetimbangan gaya tarik dan gaya tolak elektrostatik!',
    },
    diagram: {
      type: 'potential-energy-curve',
      title: 'Kurva Energi Potensial Pembentukan Ikatan H₂',
      caption: 'Ketika dua atom H saling mendekat, gaya tarik menurunkan energi potensial sistem hingga mencapai minimum di 74 pm (−436 kJ/mol). Bila dipaksa lebih dekat, gaya tolak antar-inti meningkat tajam.',
      position: 'middle',
    },
    bottomCallout: {
      variant: 'catatan',
      title: 'Prinsip Kunci Kestabilan',
      text: 'Pembentukan ikatan kimia tidak terjadi karena atom memiliki "keinginan" sadar, melainkan karena interaksi antarpartikel menghasilkan keadaan dengan energi potensial total yang lebih rendah dan lebih stabil.',
    },
  },
  'sub-1-4': {
    diagram: {
      type: 'kossel-lewis-concept',
      title: 'Peta Konsep Gagasan Kossel dan Lewis (1916)',
      caption: 'Walter Kossel menjelaskan ikatan ion melalui perpindahan elektron, sedangkan Gilbert N. Lewis menjelaskan ikatan kovalen melalui penggunaan bersama pasangan elektron.',
      position: 'top',
    },
    middleCallout: {
      variant: 'catatan',
      title: 'Fondasi Sejarah Ikatan Kimia Modern',
      text: 'Pada tahun 1916, Kossel dan Lewis secara terpisah merintis gagasan bahwa konfigurasi elektron gas mulia merupakan acuan kestabilan alami bagi unsur-unsur golongan utama.',
    },
  },
  'sub-1-5': {
    diagram: {
      type: 'noble-gas-configuration',
      title: 'Model Kestabilan Gas Mulia (Duplet & Oktet)',
      caption: 'Helium stabil dengan konfigurasi duplet 1s² pada kulit pertama. Gas mulia lainnya (Ne, Ar, Kr, Xe, Rn) stabil dengan 8 elektron valensi (ns² np⁶).',
      position: 'middle',
    },
    bottomCallout: {
      variant: 'contoh',
      title: 'Kestabilan Relatif Gas Mulia',
      text: 'Konfigurasi terluar penuh membuat gas mulia memiliki energi ionisasi tinggi dan kecenderungan menerima elektron sangat rendah. Namun, gas mulia berat seperti Xe tetap dapat membentuk senyawa nyata seperti XeF₄.',
    },
  },
  'sub-1-8': {
    bottomCallout: {
      variant: 'kesimpulan',
      title: 'Rangkuman & Refleksi Bab 1',
      text: 'Ikatan kimia adalah interaksi gaya elektrostatik yang menurunkan energi potensial sistem. Panjang ikatan H—H tercapai pada jarak 74 pm dengan energi disosiasi 436 kJ/mol.',
    },
  },

  // ── BAB 2: Konfigurasi Elektron & Mekanika Kuantum ──
  'sub-2-1': {
    topCallout: {
      variant: 'pemantik',
      title: 'Bagaimana Elektron Menempati Ruang Atom?',
      text: 'Atom natrium (Na) mempunyai 11 elektron. Mengapa elektron-elektron tersebut tersusun 2 di kulit K, 8 di kulit L, dan 1 di kulit M? Bagaimana mekanika kuantum menyempurnakan model kulit Bohr?',
    },
    diagram: {
      type: 'bohr-atom-shells',
      title: 'Model Kulit Atom Bohr dan Konfigurasi Natrium (₁₁Na)',
      caption: 'Distribusi elektron pada kulit K (n=1, maks 2e⁻), L (n=2, maks 8e⁻), dan M (n=3, 1e⁻ valensi). Kapasitas maksimum teoritis kulit dihitung melalui rumus 2n².',
      position: 'middle',
    },
    bottomCallout: {
      variant: 'catatan',
      title: 'Kapasitas Kulit vs Urutan Orbital',
      text: 'Rumus 2n² menyatakan kapasitas teoritis maksimum kulit atom, bukan kepastian urutan pengisian elektron. Urutan pengisian sebenarnya mengikuti tingkat energi subkulit (Aufbau).',
    },
  },
  'sub-2-4': {
    diagram: {
      type: 'orbital-filling-hund',
      title: 'Diagram Orbital dan Aturan Hund (Nitrogen vs Oksigen)',
      caption: 'Pada orbital 2p Nitrogen, ketiga elektron mengisi orbital secara tunggal dengan spin sejajar [↑] [↑] [↑]. Pada Oksigen, elektron ke-4 mulai berpasangan dengan spin berlawanan [⇅] [↑] [↑].',
      position: 'middle',
    },
    middleCallout: {
      variant: 'catatan',
      title: 'Tiga Kaidah Pengisian Orbital',
      text: 'Pengisian orbital wajib mematuhi Prinsip Aufbau (energi terendah lebih dahulu), Larangan Pauli (maksimal 2 elektron berlawanan spin per orbital), dan Aturan Hund (orbital degenerat diisi tunggal sejajar sebelum berpasangan).',
    },
    bottomCallout: {
      variant: 'contoh',
      title: 'Pengecualian Kromium dan Tembaga',
      text: 'Konfigurasi eksperimen Cr adalah [Ar] 3d⁵ 4s¹ (bukan 4s² 3d⁴), dan Cu adalah [Ar] 3d¹⁰ 4s¹ (bukan 4s² 3d⁹) karena keseimbangan energi total antar-elektron dan kesimetrisan orbital.',
    },
  },
  'sub-2-9': {
    middleCallout: {
      variant: 'contoh',
      title: 'Menentukan Letak Unsur dalam Tabel Periodik',
      text: 'Nilai bilangan kuantum utama (n) terbesar menunjukkan periode. Untuk golongan utama, jumlah elektron terluar pada subkulit ns dan np menentukan nomor golongan. Contoh: ₁₁Na (3s¹) berada pada Periode 3, Golongan 1.',
    },
  },
  'sub-2-11': {
    middleCallout: {
      variant: 'catatan',
      title: 'Orbit Bohr vs Orbital Mekanika Kuantum',
      text: 'Bohr mengasumsikan lintasan lingkaran kaku, sedangkan mekanika kuantum menyatakan orbital sebagai daerah ruang dengan probabilitas keberadaan elektron tertinggi (awan elektron).',
    },
  },
  'sub-2-12': {
    bottomCallout: {
      variant: 'kesimpulan',
      title: 'Rangkuman & Refleksi Bab 2',
      text: 'Konfigurasi elektron adalah kunci membaca posisi unsur dalam tabel periodik serta memprediksi jumlah elektron valensi yang siap membentuk ikatan kimia.',
    },
  },

  // ── BAB 3: Elektron Valensi & Simbol Lewis ──
  'sub-3-5': {
    topCallout: {
      variant: 'pemantik',
      title: 'Mengapa Hanya Elektron Terluar yang Bereaksi?',
      text: 'Klorin memiliki 17 elektron, namun mengapa hanya 7 elektron terluar yang menentukan sifat kimianya? Mengapa 10 elektron di bagian dalam tidak ikut serta dalam pembentukan garam NaCl?',
    },
    diagram: {
      type: 'valence-electrons',
      title: 'Elektron Valensi vs Elektron Kulit Dalam (Core Electrons)',
      caption: 'Pada atom klorin (₁₇Cl: 2, 8, 7), 10 elektron bagian dalam [Ne] terikat kuat oleh inti (+17), sedangkan 7 elektron valensi di kulit terluar sangat fleksibel berinteraksi membentuk ikatan.',
      position: 'middle',
    },
    bottomCallout: {
      variant: 'catatan',
      title: 'Peran Penentu Elektron Valensi',
      text: 'Elektron valensi menentukan apakah suatu atom cenderung membentuk kation (melepas elektron), anion (menerima elektron), atau menggunakan pasangan elektron bersama.',
    },
  },
  'sub-3-6': {
    diagram: {
      type: 'lewis-dot-symbols',
      title: 'Simbol Titik Lewis untuk Unsur Golongan Utama',
      caption: 'Titik Lewis ditempatkan pada 4 sisi lambang atom satu per satu sebelum dipasangkan. Jumlah titik netral tepat sama dengan jumlah elektron valensi unsur.',
      position: 'middle',
    },
    middleCallout: {
      variant: 'catatan',
      title: 'Aturan Menuliskan Titik Lewis',
      text: 'Tempatkan satu titik pada tiap sisi (atas, bawah, kiri, kanan) secara bergantian. Jangan langsung memasangkan titik sebelum keempat sisi terisi!',
    },
    bottomCallout: {
      variant: 'contoh',
      title: 'Miskonsepsi Umum Titik Lewis',
      text: 'Titik Lewis adalah representasi simbolis jumlah elektron valensi untuk memudahkan perhitungan ikatan, bukan foto letak elektron atau bentuk orbital yang sebenarnya di alam.',
    },
  },
  'sub-3-8': {
    bottomCallout: {
      variant: 'kesimpulan',
      title: 'Rangkuman & Refleksi Bab 3',
      text: 'Penguasaan elektron valensi dan simbol Lewis merupakan jembatan emas untuk memahami aturan oktet-duplet dan mekanisme ikatan kovalen maupun ionik.',
    },
  },

  // ── BAB 4: Kestabilan Atom & Gas Mulia ──
  'sub-4-1': {
    diagram: {
      type: 'noble-gas-configuration',
      title: 'Susunan Elektron Stabil Gas Mulia Golongan 18',
      caption: 'Semua gas mulia memiliki kulit terluar yang terisi penuh: He (duplet 2e⁻), Ne sampai Rn (oktet 8e⁻ berupa ns² np⁶).',
      position: 'top',
    },
    bottomCallout: {
      variant: 'catatan',
      title: 'Penyebab Kestabilan Gas Mulia',
      text: 'Subkulit s dan p yang terisi penuh menghasilkan kestabilan termodinamika yang tinggi sehingga gas mulia tidak mudah melepaskan maupun menarik elektron pada kondisi standar.',
    },
  },
  'sub-4-3': {
    topCallout: {
      variant: 'pemantik',
      title: 'Bagaimana Atom Mencapai Kestabilan?',
      text: 'Unsur selain gas mulia tidak memiliki konfigurasi elektron penuh. Untuk mencapai kestabilan energi, atom menempuh salah satu dari tiga jalur interaksi elektron.',
    },
    diagram: {
      type: 'stability-pathways',
      title: 'Tiga Jalur Atom Mencapai Kestabilan Elektron',
      caption: 'Jalur A: Melepas elektron membentuk kation (logam). Jalur B: Menerima elektron membentuk anion (nonlogam). Jalur C: Menggunakan bersama pasangan elektron (ikatan kovalen).',
      position: 'middle',
    },
    bottomCallout: {
      variant: 'catatan',
      title: 'Faktor Energi yang Menentukan Kestabilan',
      text: 'Kestabilan senyawa tidak hanya dipengaruhi konfigurasi elektron, tetapi juga oleh energi ionisasi, afinitas elektron, dan energi kisi pada kristal ionik.',
    },
  },
  'sub-4-6': {
    middleCallout: {
      variant: 'contoh',
      title: 'Reaktivitas Nyata Gas Mulia Berat',
      text: 'Gas mulia lebih berat seperti Xenon (Xe) dapat membentuk senyawa stabil seperti XeF₂, XeF₄, dan XeF₆ saat direaksikan dengan fluorin karena jari-jari atomnya besar dan mudah dipolarisasi.',
    },
  },
  'sub-4-8': {
    bottomCallout: {
      variant: 'kesimpulan',
      title: 'Rangkuman & Refleksi Bab 4',
      text: 'Konfigurasi gas mulia adalah model referensi kestabilan. Atom berinteraksi untuk mencapai kondisi energi sistem yang lebih rendah melalui transfer atau pemakaian bersama elektron.',
    },
  },

  // ── BAB 5: Aturan Duplet-Oktet & Pengecualian ──
  'sub-5-1': {
    topCallout: {
      variant: 'pemantik',
      title: 'Kapan Aturan Duplet vs Oktet Digunakan?',
      text: 'Mengapa hidrogen dalam H₂ stabil hanya dengan sepasang elektron (duplet), sedangkan atom pusat oksigen pada molekul H₂O dikelilingi oleh delapan elektron (oktet)?',
    },
    diagram: {
      type: 'octet-duplet-molecules',
      title: 'Pemenuhan Aturan Duplet dan Oktet dalam Molekul Kovalen',
      caption: 'Pada molekul H₂, kedua atom H memperoleh akses 2e⁻ (duplet seperti He). Pada H₂O, atom O dikelilingi 8e⁻ (oktet seperti Ne) dan masing-masing H memenuhi duplet.',
      position: 'middle',
    },
    bottomCallout: {
      variant: 'catatan',
      title: 'Duplet dan Oktet sebagai Model Tren',
      text: 'Aturan oktet sangat efektif menjelaskan struktur molekul golongan utama periode 2 (C, N, O, F), namun bukan merupakan hukum universal yang mutlak tanpa pengecualian.',
    },
  },
  'sub-5-4': {
    diagram: {
      type: 'octet-exceptions',
      title: 'Tiga Kategori Pengecualian Aturan Oktet',
      caption: '1. Oktet Tidak Lengkap (BF₃: B hanya 6e⁻). 2. Elektron Ganjil (NO: 11e⁻ dengan radikal bebas). 3. Oktet Diperluas (PCl₅: P dikelilingi 10e⁻).',
      position: 'top',
    },
    middleCallout: {
      variant: 'contoh',
      title: 'Mengapa Pengecualian Oktet Dapat Terjadi?',
      text: 'Unsur periode 3 ke atas seperti P dan S memiliki orbital 3d kosong berenergi rendah yang dapat berpartisipasi menampung pasangan elektron ikatan lebih dari delapan (oktet diperluas).',
    },
  },
  'sub-5-6': {
    middleCallout: {
      variant: 'catatan',
      title: 'Keterbatasan Aturan Oktet',
      text: 'Aturan oktet tidak menjelaskan geometri spasial 3D molekul dan kekuatan ikatan secara kuantitatif. Geometri molekul memerlukan konsep tambahan seperti teori VSEPR dan hibridisasi orbital.',
    },
  },
  'sub-5-8': {
    bottomCallout: {
      variant: 'kesimpulan',
      title: 'Rangkuman & Refleksi Bab 5',
      text: 'Gunakan aturan duplet dan oktet sebagai panduan prediksi cepat struktur Lewis, dengan selalu mengingat keberadaan molekul oktet tidak lengkap, elektron ganjil, dan oktet diperluas.',
    },
  },

  // ── BAB 6: Pembentukan Ikatan Ion & Kovalen ──
  'sub-6-1': {
    middleCallout: {
      variant: 'catatan',
      title: 'Faktor yang Memengaruhi Karakter Ikatan',
      text: 'Perbedaan keelektronegatifan antaratom menentukan karakter ikatan. Perbedaan besar menghasilkan ikatan dengan karakter ionik dominan, sedangkan perbedaan kecil menghasilkan ikatan kovalen.',
    },
  },
  'sub-6-3': {
    middleCallout: {
      variant: 'contoh',
      title: 'Pembentukan Kation dan Anion Sederhana',
      text: 'Kation terbentuk ketika atom logam melepas elektron (Na → Na⁺ + e⁻), sedangkan anion terbentuk ketika atom nonlogam menangkap elektron (Cl + e⁻ → Cl⁻).',
    },
  },
  'sub-6-4': {
    diagram: {
      type: 'electron-transfer-ionic',
      title: 'Proses Pembentukan Ikatan Ionik pada Natrium Klorida (NaCl)',
      caption: 'Atom Na (2, 8, 1) mentransfer satu elektron valensinya ke atom Cl (2, 8, 7). Terbentuk ion Na⁺ dan Cl⁻ yang saling tarik-menarik membentuk kisi kristal garam dapur.',
      position: 'top',
    },
    image: {
      alt: 'Kisi Kristal Garam Dapur (NaCl)',
      caption: 'Struktur kisi kristal ionik NaCl padat tersusun atas kation Na⁺ dan anion Cl⁻ berselang-seling secara teratur dalam ruang 3 dimensi.',
      source: 'Laboratorium Kimia ChemBond',
      fallbackIcon: '🧂',
    },
    bottomCallout: {
      variant: 'catatan',
      title: 'Sifat Satuan Rumus Kisi Kristal',
      text: 'Senyawa ion padat tidak terdiri dari molekul terpisah NaCl. Lambang "NaCl" merupakan satuan rumus yang menyatakan rasio perbandingan 1:1 antara ion natrium dan klorida dalam kisi kristal kontinu.',
    },
  },
  'sub-6-5': {
    diagram: {
      type: 'covalent-bond-types',
      title: 'Jenis Ikatan Kovalen: Tunggal, Rangkap Dua, dan Rangkap Tiga',
      caption: 'Ikatan tunggal (H₂) berbagi 1 pasang elektron (PEI), ikatan rangkap dua (O₂) berbagi 2 pasang elektron, dan ikatan rangkap tiga (N₂) berbagi 3 pasang elektron.',
      position: 'top',
    },
    middleCallout: {
      variant: 'catatan',
      title: 'Kekuatan dan Panjang Ikatan Kovalen',
      text: 'Semakin banyak pasangan elektron yang digunakan bersama (orde ikatan semakin tinggi), ikatan antaratom menjadi semakin pendek dan semakin kuat. Ikatan N≡N jauh lebih kuat dibanding O=O dan H—H.',
    },
  },
  'sub-6-7': {
    diagram: {
      type: 'ionic-vs-covalent-lattice',
      title: 'Perbandingan Struktur: Kisi Kristal Ionik vs Molekul Kovalen Diskret',
      caption: 'Kristal ionik (NaCl) memiliki gaya elektrostatik kuat di seluruh kisi sehingga bertitik leleh tinggi. Molekul kovalen sederhana (H₂O) memiliki ikatan intramolekul kuat namun gaya antarmolekul relatif lemah.',
      position: 'top',
    },
    middleCallout: {
      variant: 'catatan',
      title: 'Termodinamika Ikatan Kimia',
      text: 'Membentuk ikatan kimia SELALU melepaskan energi (proses eksoterm, ΔH < 0), sedangkan memutuskan ikatan kimia SELALU memerlukan penyerapan energi (proses endoterm, ΔH > 0).',
    },
  },
  'sub-6-9': {
    bottomCallout: {
      variant: 'kesimpulan',
      title: 'Selamat! Modul 1 Telah Selesai',
      text: 'Anda telah menuntaskan seluruh 6 Bab dalam Modul 1: Pengenalan Ikatan Kimia ChemBond! Mulai dari energi potensial, konfigurasi elektron, simbol Lewis, hingga ikatan ion dan kovalen. Anda kini siap melanjutkan ke latihan kuis evaluasi!',
    },
  },
};

export const Modul1Interactive: React.FC<Modul1InteractiveProps> = ({
  module,
  submodule,
  onBack,
  onSelectSubmodule,
}) => {
  const visualConfig = SUBMODULE_VISUALS[submodule.id] ?? {};

  // Cari index submateri saat ini untuk navigasi sebelumnya/selanjutnya
  const currentIndex = module.submodules.findIndex((s) => s.id === submodule.id);
  const prevSubmodule = currentIndex > 0 ? module.submodules[currentIndex - 1] : null;
  const nextSubmodule =
    currentIndex >= 0 && currentIndex < module.submodules.length - 1
      ? module.submodules[currentIndex + 1]
      : null;

  // Ekstrak nama Bab dan judul subbab dari judul berformat "Bab X · Judul Submateri"
  const hasChapterFormat = submodule.title.includes(' · ');
  const chapterName = hasChapterFormat ? submodule.title.split(' · ')[0] : module.title;
  const subTitle = hasChapterFormat ? submodule.title.split(' · ')[1] : submodule.title;

  return (
    <div className="modul1-page-wrapper">
      <article className="modul1-interactive" aria-label={`Submateri ${submodule.title}`}>
        {/* Tombol kembali ke daftar submateri */}
        <nav className="m1-nav-bar" aria-label="Navigasi materi">
          <button type="button" className="materi-back" onClick={onBack}>
            ← Kembali ke daftar submateri
          </button>
        </nav>

        {/* Header Submateri Modul 1 */}
        <header className="modul1-interactive__header">
          <div className="m1-header-badge-row">
            <span className="m1-badge-chapter">{chapterName}</span>
            <span className="m1-badge-modul">{module.title}</span>
          </div>
          <h2>{subTitle}</h2>
        </header>

        {/* Callout Pemantik Bagian Atas (Jika Ada) */}
        {visualConfig.topCallout && (
          <div className="m1-section-item">
            <Module1Callout
              variant={visualConfig.topCallout.variant}
              title={visualConfig.topCallout.title}
            >
              <p>{visualConfig.topCallout.text}</p>
            </Module1Callout>
          </div>
        )}

        {/* Diagram Posisi Atas (Jika Ada) */}
        {visualConfig.diagram && visualConfig.diagram.position === 'top' && (
          <div className="m1-section-item">
            <Module1Diagram
              type={visualConfig.diagram.type}
              title={visualConfig.diagram.title}
              caption={visualConfig.diagram.caption}
            />
          </div>
        )}

        {/* Konten Utama Paragraf Materi */}
        <section className="modul1-interactive__content">
          {submodule.content.map((paragraph, index) => {
            // Render Section Heading ##
            if (paragraph.startsWith('## ')) {
              return (
                <h3 key={index} className="m1-heading-main">
                  {paragraph.replace('## ', '')}
                </h3>
              );
            }

            // Render Sub-Heading ###
            if (paragraph.startsWith('### ')) {
              return (
                <h4 key={index} className="m1-heading-sub">
                  {paragraph.replace('### ', '')}
                </h4>
              );
            }

            // Render Paragraf Biasa
            return (
              <React.Fragment key={index}>
                <p className="m1-paragraph">{paragraph}</p>

                {/* Sisipkan Diagram di Tengah Paragraf (setelah paragraf kedua atau ketiga) */}
                {index === 2 && visualConfig.diagram && visualConfig.diagram.position === 'middle' && (
                  <div className="m1-section-item">
                    <Module1Diagram
                      type={visualConfig.diagram.type}
                      title={visualConfig.diagram.title}
                      caption={visualConfig.diagram.caption}
                    />
                  </div>
                )}

                {/* Sisipkan Callout di Tengah Paragraf */}
                {index === 3 && visualConfig.middleCallout && (
                  <div className="m1-section-item">
                    <Module1Callout
                      variant={visualConfig.middleCallout.variant}
                      title={visualConfig.middleCallout.title}
                    >
                      <p>{visualConfig.middleCallout.text}</p>
                    </Module1Callout>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </section>

        {/* Diagram Posisi Bawah (Jika Ada) */}
        {visualConfig.diagram && visualConfig.diagram.position === 'bottom' && (
          <div className="m1-section-item">
            <Module1Diagram
              type={visualConfig.diagram.type}
              title={visualConfig.diagram.title}
              caption={visualConfig.diagram.caption}
            />
          </div>
        )}

        {/* Ilustrasi Gambar (Jika Dikonfigurasi) */}
        {visualConfig.image && (
          <div className="m1-section-item">
            <Module1Image
              alt={visualConfig.image.alt}
              caption={visualConfig.image.caption}
              source={visualConfig.image.source}
              fallbackIcon={visualConfig.image.fallbackIcon}
              src={visualConfig.image.src}
            />
          </div>
        )}

        {/* Keypoints / Hal Penting */}
        {submodule.keyPoints && submodule.keyPoints.length > 0 && (
          <section className="submodule-keypoints" aria-label="Poin Penting Submateri">
            <h3>⭐ Hal Penting yang Perlu Diingat</h3>
            <ul>
              {submodule.keyPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Callout Refleksi / Rangkuman Bawah (Jika Ada) */}
        {visualConfig.bottomCallout && (
          <div className="m1-section-item">
            <Module1Callout
              variant={visualConfig.bottomCallout.variant}
              title={visualConfig.bottomCallout.title}
            >
              <p>{visualConfig.bottomCallout.text}</p>
            </Module1Callout>
          </div>
        )}

        {/* Footer Navigasi Antar-Submateri */}
        {onSelectSubmodule && (prevSubmodule || nextSubmodule) && (
          <footer className="m1-submodule-nav-footer">
            <div className="m1-nav-footer-col">
              {prevSubmodule ? (
                <button
                  type="button"
                  className="m1-nav-btn prev"
                  onClick={() => onSelectSubmodule(prevSubmodule)}
                >
                  <span className="m1-nav-btn-hint">← Submateri Sebelumnya</span>
                  <span className="m1-nav-btn-title">
                    {prevSubmodule.title.includes(' · ')
                      ? prevSubmodule.title.split(' · ')[1]
                      : prevSubmodule.title}
                  </span>
                </button>
              ) : (
                <div />
              )}
            </div>

            <div className="m1-nav-footer-col right">
              {nextSubmodule ? (
                <button
                  type="button"
                  className="m1-nav-btn next"
                  onClick={() => onSelectSubmodule(nextSubmodule)}
                >
                  <span className="m1-nav-btn-hint">Submateri Selanjutnya →</span>
                  <span className="m1-nav-btn-title">
                    {nextSubmodule.title.includes(' · ')
                      ? nextSubmodule.title.split(' · ')[1]
                      : nextSubmodule.title}
                  </span>
                </button>
              ) : (
                <div />
              )}
            </div>
          </footer>
        )}
      </article>
    </div>
  );
};

export default Modul1Interactive;
