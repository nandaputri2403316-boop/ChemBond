/**
 * src/data/materi/modul1.ts
 * Modul 1 — Pengenalan Ikatan Kimia
 * Penanggung jawab: Nanda Putri Wardaningtyas (sesuai TEAM.md)
 *
 * [PERLU VALIDASI TIM] Seluruh konten ilmiah pada file ini perlu diverifikasi
 * oleh anggota tim dengan sumber referensi yang memadai sebelum dipublikasikan.
 */

import type { ModuleData } from '../types';

export const modul1Data: ModuleData = {
  id: 'materi-1',
  order: 1,
  title: 'Pengenalan Ikatan Kimia',
  subtitle: 'Memahami mengapa atom bergabung dan dasar-dasar kestabilan unsur',
  description:
    'Modul ini menjadi pintu masuk untuk memahami ikatan kimia. Kita akan menelusuri alasan mengapa atom-atom di alam cenderung tidak berdiri sendiri, melainkan saling berikatan membentuk molekul dan senyawa. Pemahaman tentang konfigurasi elektron, elektron valensi, serta kecenderungan atom mencapai keadaan energi lebih rendah menjadi pondasi utama sebelum mempelajari jenis-jenis ikatan kimia lebih lanjut.',
  learningObjectives: [
    'Menjelaskan alasan atom-atom cenderung membentuk ikatan kimia berdasarkan prinsip kestabilan energi.',
    'Menggambarkan konfigurasi elektron atom unsur golongan utama menggunakan model Bohr.',
    'Menentukan jumlah elektron valensi suatu unsur berdasarkan konfigurasi elektronnya.',
    'Menjelaskan kestabilan konfigurasi elektron gas mulia dan kecenderungan atom lain mencapai konfigurasi serupa.',
    'Membedakan kondisi penerapan kaidah duplet dan kaidah oktet serta keterbatasannya.',
  ],
  submodules: [
    {
      id: 'sub-1-1',
      title: 'Mengapa Atom Membentuk Ikatan Kimia?',
      content: [
        'Sebagian besar atom di alam tidak berada dalam keadaan bebas dan terisolasi. Atom-atom tersebut cenderung bergabung dengan atom lain membentuk molekul, senyawa, atau padatan karena keadaan bergabung itu lebih stabil—memiliki energi lebih rendah—dibandingkan keadaan atom bebas.',
        'Prinsip dasar kimia menyatakan bahwa sistem akan selalu cenderung menuju keadaan dengan energi yang lebih rendah. Ketika dua atom mendekati satu sama lain, pada jarak tertentu gaya tarik antara inti atom dengan elektron atom lain lebih dominan daripada gaya tolak antara sesama elektron atau sesama inti. Pada kondisi ini, ikatan kimia terbentuk dan energi sistem menurun.',
        'Sebagai contoh sederhana, dua atom hidrogen (H) secara terpisah memiliki energi total lebih tinggi daripada satu molekul H₂. Ketika ikatan H–H terbentuk, energi dilepaskan ke lingkungan sebesar ±436 kJ/mol, menandakan sistem menjadi lebih stabil.',
        'Inilah alasan mengapa unsur-unsur seperti oksigen ditemukan sebagai O₂, nitrogen sebagai N₂, dan garam dapur dalam bentuk kristal NaCl—bukan sebagai atom bebas Na dan Cl yang sangat reaktif.',
      ],
      keyPoints: [
        'Ikatan kimia terbentuk karena keadaan bergabung lebih rendah energinya (lebih stabil) dibanding keadaan atom bebas.',
        'Atom tidak selalu mencari "oktet penuh"—yang sesungguhnya dicari adalah keadaan energi lebih rendah.',
        'Pembentukan ikatan umumnya disertai pelepasan energi ke lingkungan.',
      ],
      examples: [
        'H + H → H₂ (lebih stabil, melepas ±436 kJ/mol)',
        'Na (logam reaktif) + Cl (gas beracun) → NaCl (kristal stabil)',
      ],
      illustrationType: 'atom',
    },
    {
      id: 'sub-1-2',
      title: 'Konfigurasi Elektron Model Bohr',
      content: [
        'Model atom Bohr (1913) menggambarkan elektron bergerak mengelilingi inti pada lintasan atau kulit dengan tingkat energi tertentu. Kulit-kulit tersebut diberi nomor dari dalam ke luar: K (n=1), L (n=2), M (n=3), N (n=4), dan seterusnya.',
        'Kapasitas maksimum setiap kulit dinyatakan dengan rumus 2n². Kulit K (n=1) menampung maksimum 2×1²=2 elektron; kulit L (n=2) menampung maksimum 2×2²=8 elektron; kulit M (n=3) menampung maksimum 2×3²=18 elektron.',
        'Penting untuk dipahami: kapasitas maksimum kulit tidak selalu sama dengan jumlah elektron yang sebenarnya terisi pada kulit tersebut. Dalam praktiknya, pengisian elektron mengikuti aturan yang lebih kompleks (seperti aturan Aufbau, Hund, dan larangan Pauli). Untuk unsur-unsur golongan utama pada tingkat SMA, kulit M pada baris ke-3 tabel periodik umumnya terisi paling banyak 8 elektron, meskipun kapasitas maksimumnya 18.',
        'Contoh konfigurasi elektron beberapa atom penting:',
        '• Hidrogen (H, Z=1): 1 (hanya 1 elektron di kulit K)',
        '• Karbon (C, Z=6): 2, 4 (2 di kulit K, 4 di kulit L)',
        '• Natrium (Na, Z=11): 2, 8, 1 (2 di K, 8 di L, 1 di M)',
        '• Klor (Cl, Z=17): 2, 8, 7 (2 di K, 8 di L, 7 di M)',
        '• Kalsium (Ca, Z=20): 2, 8, 8, 2 (2 di K, 8 di L, 8 di M, 2 di N)',
        'Cara menulis konfigurasi elektron: isi kulit dari dalam ke luar, perhatikan batas kapasitas per kulit untuk unsur golongan utama pada periode 1–4.',
      ],
      keyPoints: [
        'Kulit elektron Bohr: K, L, M, N, ... dengan kapasitas maksimum 2n².',
        'Kapasitas maksimum kulit BERBEDA dari jumlah elektron yang sebenarnya terisi.',
        'Untuk unsur golongan utama periode 1–3: kulit M terisi maksimum 8 (bukan 18).',
        'Urutan pengisian: dari kulit dengan energi terendah (terdalam) ke luar.',
      ],
      examples: [
        'Na (Z=11): K=2, L=8, M=1',
        'Cl (Z=17): K=2, L=8, M=7',
        'Ca (Z=20): K=2, L=8, M=8, N=2',
      ],
      illustrationType: 'atom',
    },
    {
      id: 'sub-1-3',
      title: 'Elektron Valensi',
      content: [
        'Elektron valensi adalah elektron yang berada di kulit terluar atom. Elektron inilah yang berperan langsung dalam pembentukan ikatan kimia karena paling mudah terlibat dalam interaksi antaratom.',
        'Jumlah elektron valensi dapat ditentukan dari konfigurasi elektron: lihat angka terakhir pada penulisan konfigurasi elektron model Bohr (untuk unsur golongan utama).',
        'Dalam tabel periodik, unsur-unsur dalam satu golongan memiliki jumlah elektron valensi yang sama, sehingga memiliki sifat kimia yang mirip. Golongan IA memiliki 1 elektron valensi; golongan IIA memiliki 2; golongan VIIA memiliki 7; dan golongan 0 (gas mulia) memiliki 8 elektron valensi (kecuali He yang hanya memiliki 2).',
        'Elektron valensi menentukan apakah suatu atom cenderung melepas elektron (menjadi ion positif), menerima elektron (menjadi ion negatif), atau berbagi elektron dengan atom lain.',
      ],
      keyPoints: [
        'Elektron valensi = elektron di kulit terluar, penentu sifat kimia dan jenis ikatan.',
        'Golongan IA → 1 EV; IIA → 2 EV; IIIA → 3 EV; IVA → 4 EV; VA → 5 EV; VIA → 6 EV; VIIA → 7 EV; 0/VIII A → 8 EV (kecuali He: 2).',
        'Unsur satu golongan = jumlah elektron valensi sama = sifat kimia mirip.',
      ],
      examples: [
        'Na (Z=11): 2,8,1 → elektron valensi = 1 (golongan IA)',
        'Mg (Z=12): 2,8,2 → elektron valensi = 2 (golongan IIA)',
        'O  (Z=8) : 2,6   → elektron valensi = 6 (golongan VIA)',
        'Cl (Z=17): 2,8,7 → elektron valensi = 7 (golongan VIIA)',
        'Ar (Z=18): 2,8,8 → elektron valensi = 8 (golongan 0)',
      ],
      illustrationType: 'atom',
    },
    {
      id: 'sub-1-4',
      title: 'Kestabilan Gas Mulia dan Kaidah Duplet–Oktet',
      content: [
        'Gas mulia (golongan 0/VIIIA: He, Ne, Ar, Kr, Xe, Rn) dikenal sangat stabil dan hampir tidak bereaksi dengan unsur lain. Konfigurasi elektron mereka—8 elektron valensi (atau 2 untuk He)—ternyata berkorelasi dengan keadaan energi yang rendah dan stabil.',
        'Bertolak dari kenyataan ini, G.N. Lewis dan W. Kossel (1916) mengusulkan bahwa atom-atom lain cenderung mencapai konfigurasi elektron serupa gas mulia (dengan 8 elektron valensi) ketika membentuk ikatan. Inilah yang disebut Kaidah Oktet.',
        'Untuk atom dengan Z rendah (terutama H dan Li) yang konfigurasi gas mulia terdekatnya adalah He (2 elektron), berlaku Kaidah Duplet—atom cukup memiliki 2 elektron valensi untuk dianggap stabil.',
        'Namun penting diingat: kaidah oktet adalah kecenderungan umum, BUKAN hukum mutlak. Yang sesungguhnya dicari atom adalah keadaan energi lebih rendah. Beberapa senyawa nyata menyimpang dari oktet:',
        '• Oktet tidak lengkap (hipooktet): BF₃—atom B hanya punya 6 elektron valensi, namun senyawa ini stabil.',
        '• Oktet diperluas (hipervalent): PCl₅ dan SF₆—atom P dan S punya lebih dari 8 elektron valensi. Ini dimungkinkan karena mereka berada di periode ke-3 atau lebih dan dapat menggunakan orbital d.',
        '• Radikal bebas: molekul dengan jumlah elektron ganjil seperti NO tidak dapat memenuhi oktet semua atomnya.',
        'Kesimpulan: gunakan kaidah oktet sebagai alat bantu perkiraan awal, tetapi selalu cek dengan data eksperimen dan pemahaman yang lebih mendalam.',
      ],
      keyPoints: [
        'Gas mulia stabil karena konfigurasi 8 EV (atau 2 untuk He) berkorelasi dengan energi rendah.',
        'Kaidah Oktet: atom cenderung membentuk ikatan hingga memiliki 8 elektron valensi.',
        'Kaidah Duplet khusus untuk H dan Li: cukup 2 elektron valensi.',
        'Oktet adalah KECENDERUNGAN, bukan aturan mutlak—ada pengecualian: BF₃ (hipooktet), PCl₅ (hipervalent), NO (radikal).',
        'Prinsip dasar sesungguhnya: atom mencari keadaan energi paling rendah (paling stabil).',
      ],
      examples: [
        'He: konfigurasi 2 → stabil, kaidah duplet',
        'Ne: konfigurasi 2,8 → stabil, kaidah oktet',
        'Na: 2,8,1 → melepas 1 EV → Na⁺ (konfigurasi seperti Ne)',
        'Cl: 2,8,7 → menerima 1 EV → Cl⁻ (konfigurasi seperti Ar)',
        'BF₃: B hanya 6 EV (hipooktet) namun senyawa stabil',
      ],
      illustrationType: 'atom',
    },
  ],
  summary: [
    'Atom membentuk ikatan kimia karena keadaan bergabung memiliki energi lebih rendah (lebih stabil) dibanding keadaan atom bebas.',
    'Model Bohr menggambarkan elektron pada kulit K, L, M, N, ... dengan kapasitas maksimum 2n²; kapasitas maksimum kulit berbeda dari jumlah elektron yang sebenarnya terisi.',
    'Elektron valensi adalah elektron di kulit terluar yang menentukan sifat kimia dan cara atom berikatan.',
    'Gas mulia sangat stabil; atom-atom lain cenderung mencapai konfigurasi serupa (kaidah oktet/duplet) sebagai pendekatan, namun prinsip sesungguhnya adalah pencapaian energi yang lebih rendah.',
    'Kaidah oktet memiliki pengecualian: hipooktet (BF₃), hipervalent (PCl₅, SF₆), dan radikal bebas (NO).',
  ],
  author: 'Nanda Putri Wardaningtyas',
};

