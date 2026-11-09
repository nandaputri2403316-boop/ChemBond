/**
 * src/data/materi/modul2.ts
 * Modul 2 — Jenis-Jenis Ikatan Kimia
 * Penanggung jawab:
 *   - Farrel Athariq Ramadhan : Ikatan Ion (sub-2-2)
 *   - Sonia Maharani Fitria   : Ikatan Kovalen & Logam (sub-2-3, sub-2-4, sub-2-5)
 * (sesuai TEAM.md)
 *
 * [PERLU VALIDASI TIM] Seluruh konten ilmiah pada file ini perlu diverifikasi
 * oleh anggota tim dengan sumber referensi yang memadai sebelum dipublikasikan.
 */

import type { ModuleData } from '../types';

export const modul2Data: ModuleData = {
  id: 'materi-2',
  order: 2,
  title: 'Jenis-Jenis Ikatan Kimia',
  subtitle: 'Ikatan ion, kovalen, dan logam — mekanisme dan sifat-sifatnya',
  description:
    'Setelah memahami mengapa atom berikatan, kini kita mempelajari bagaimana cara atom-atom berikatan. Ada tiga jenis ikatan kimia utama yang akan dibahas: ikatan ion (transfer elektron antara logam dan nonlogam), ikatan kovalen (pemakaian elektron bersama antara nonlogam), dan ikatan logam (lautan elektron di antara kation logam). Setiap jenis ikatan menghasilkan zat dengan sifat fisika dan kimia yang khas.',
  learningObjectives: [
    'Menjelaskan mekanisme terbentuknya ikatan ion melalui proses transfer elektron.',
    'Menggambarkan struktur Lewis senyawa ion sederhana.',
    'Menjelaskan mekanisme ikatan kovalen tunggal, rangkap dua, dan rangkap tiga melalui pemakaian pasangan elektron bersama.',
    'Menggambarkan struktur Lewis molekul kovalen sederhana.',
    'Menjelaskan mekanisme ikatan logam berdasarkan model lautan elektron.',
    'Membandingkan sifat fisika zat ion, kovalen, dan logam berdasarkan jenis ikatannya.',
  ],
  submodules: [
    {
      id: 'sub-2-1',
      title: 'Klasifikasi Ikatan Kimia',
      content: [
        'Berdasarkan cara atom-atom berbagi atau mentransfer elektron, ikatan kimia diklasifikasikan menjadi tiga jenis utama:',
        '1. Ikatan Ion: terjadi antara unsur logam dan nonlogam. Atom logam melepas elektron valensinya membentuk ion positif (kation), sementara atom nonlogam menerima elektron tersebut membentuk ion negatif (anion). Gaya tarik elektrostatis antara kation dan anion itulah yang disebut ikatan ion.',
        '2. Ikatan Kovalen: terjadi antara sesama unsur nonlogam. Alih-alih mentransfer elektron, kedua atom berbagi satu atau lebih pasangan elektron secara bersama-sama. Pasangan elektron yang dipakai bersama disebut Pasangan Elektron Ikatan (PEI), sedangkan pasangan yang tidak ikut dalam ikatan disebut Pasangan Elektron Bebas (PEB).',
        '3. Ikatan Logam: terjadi di antara atom-atom logam. Elektron valensi dilepas dari tiap atom dan bergerak bebas di seluruh struktur logam (model lautan elektron), sementara ion-ion logam positif tersusun teratur dalam kisi kristal.',
        'Perbedaan mendasar ketiga ikatan ini menentukan sifat fisik zat yang dihasilkan: titik lebur, kelarutan, kemampuan menghantarkan listrik, dan kekerasannya.',
      ],
      keyPoints: [
        'Ikatan ion: transfer elektron logam → nonlogam → gaya elektrostatis kation-anion.',
        'Ikatan kovalen: pemakaian pasangan elektron bersama antara nonlogam.',
        'Ikatan logam: lautan elektron bebas di antara kation logam.',
      ],
      illustrationType: 'atom',
    },
    {
      // Penanggung jawab: Farrel Athariq Ramadhan
      id: 'sub-2-2',
      title: 'Ikatan Ion',
      content: [
        'Ikatan ion terbentuk melalui proses transfer elektron dari atom dengan elektron valensi sedikit (logam) kepada atom yang hampir memenuhi kulit terluar (nonlogam). Hasilnya adalah dua ion bermuatan berlawanan yang saling tarik-menarik.',
        'Contoh klasik: pembentukan NaCl dari natrium (Na) dan klor (Cl).',
        '• Natrium (Na, Z=11): konfigurasi 2,8,1. Dengan 1 elektron valensi, Na sangat mudah melepas elektron tersebut. Na → Na⁺ + e⁻. Ion Na⁺ kini memiliki konfigurasi 2,8—sama dengan gas mulia Ne.',
        '• Klor (Cl, Z=17): konfigurasi 2,8,7. Dengan 7 elektron valensi, Cl hanya butuh 1 elektron lagi. Cl + e⁻ → Cl⁻. Ion Cl⁻ kini memiliki konfigurasi 2,8,8—sama dengan gas mulia Ar.',
        '• Ion Na⁺ dan Cl⁻ saling tarik-menarik secara elektrostatis membentuk kristal NaCl dengan susunan kisi tiga dimensi yang teratur.',
        'Sifat umum senyawa ion:',
        '• Titik leleh dan titik didih tinggi (diperlukan energi besar untuk memutus gaya elektrostatis yang kuat dalam kisi kristal).',
        '• Keras namun rapuh (bila dipukul kuat, lapisan ion bergeser sehingga ion sejenis saling berhadapan → gaya tolak → kristal pecah).',
        '• Tidak menghantarkan listrik dalam keadaan padat (ion terikat di kisi, tidak bebas bergerak).',
        '• Menghantarkan listrik dalam larutan atau lelehannya (ion bebas bergerak sebagai pembawa muatan).',
        '• Umumnya mudah larut dalam pelarut polar seperti air.',
      ],
      keyPoints: [
        'Ikatan ion = transfer elektron → kation (logam) + anion (nonlogam).',
        'Na → Na⁺ + e⁻ (konfigurasi seperti Ne); Cl + e⁻ → Cl⁻ (konfigurasi seperti Ar).',
        'Gaya elektrostatis kation-anion membentuk kisi kristal tiga dimensi.',
        'Sifat: titik leleh tinggi, keras-rapuh, isolator padat, konduktor larutan/leburan.',
      ],
      examples: [
        'NaCl: Na⁺ + Cl⁻ (garam dapur)',
        'MgO: Mg²⁺ + O²⁻ (magnesium oksida)',
        'CaCl₂: Ca²⁺ + 2 Cl⁻ (kalsium klorida)',
        'K₂S: 2 K⁺ + S²⁻ (kalium sulfida)',
      ],
      illustrationType: 'crystal',
    },
    {
      // Penanggung jawab: Sonia Maharani Fitria
      id: 'sub-2-3',
      title: 'Ikatan Kovalen',
      content: [
        'Ikatan kovalen terbentuk ketika dua atom nonlogam berbagi satu atau lebih pasangan elektron. Berbeda dengan ikatan ion, tidak ada transfer elektron yang terjadi—kedua atom "memiliki" bersama elektron-elektron ikatan tersebut.',
        'Jumlah pasangan elektron yang dibagi menentukan jenis ikatan kovalen:',
        '• Ikatan Kovalen Tunggal (–): satu pasangan elektron dipakai bersama. Contoh: H₂ (H–H), H₂O (O–H), HCl (H–Cl), CH₄ (C–H).',
        '• Ikatan Kovalen Rangkap Dua (=): dua pasangan elektron dipakai bersama. Contoh: O₂ (O=O), CO₂ (O=C=O).',
        '• Ikatan Kovalen Rangkap Tiga (≡): tiga pasangan elektron dipakai bersama. Contoh: N₂ (N≡N), C₂H₂ atau asetilena (H–C≡C–H).',
        'Struktur Lewis digunakan untuk menggambarkan distribusi elektron dalam molekul kovalen. Setiap pasangan elektron ikatan (PEI) digambarkan sebagai garis (–) atau titik-titik (::) antara dua simbol atom, sedangkan pasangan elektron bebas (PEB) digambarkan sebagai titik-titik di sekitar simbol atom.',
        'Contoh struktur Lewis H₂O: atom O di tengah berikatan dengan 2 atom H melalui 2 ikatan tunggal (2 PEI), dan O memiliki 2 PEB. Formula: H–Ö–H (dengan 2 pasangan titik pada O).',
        'Contoh struktur Lewis CO₂: C berikatan dengan 2 atom O, masing-masing dengan ikatan rangkap dua. Total: 4 PEI (dua ikatan rangkap = empat pasangan ikatan) dan 4 PEB (masing-masing O memiliki 2 PEB). Formula: :Ö=C=Ö: (dengan 2 pasang titik pada setiap O).',
        'Sifat umum senyawa kovalen (molekul sederhana seperti H₂O, CO₂, CH₄):',
        '• Titik leleh dan titik didih rendah (gaya antarmolekul lemah, mudah menguap).',
        '• Berwujud gas, cair, atau padat lunak pada suhu kamar.',
        '• Umumnya tidak menghantarkan listrik (tidak ada ion atau elektron bebas).',
        '• Larut dalam pelarut nonpolar; senyawa polar dapat larut dalam air.',
        'Penting: ada kelompok senyawa kovalen khusus yang disebut jaringan kovalen (covalent network/kovalen raksasa) seperti intan (C) dan silikon dioksida (SiO₂). Senyawa ini memiliki titik leleh sangat tinggi karena ikatan kovalen membentang ke seluruh struktur tiga dimensi, bukan antarmolekul. Jangan menyamakan sifat jaringan kovalen dengan molekul kovalen sederhana.',
      ],
      keyPoints: [
        'Ikatan kovalen: berbagi pasangan elektron antara nonlogam (tidak ada transfer).',
        'Tunggal (–): 1 PEI; Rangkap dua (=): 2 PEI; Rangkap tiga (≡): 3 PEI.',
        'PEI = Pasangan Elektron Ikatan; PEB = Pasangan Elektron Bebas.',
        'CO₂: O=C=O, terdapat 4 PEI total dan 4 PEB total (2 PEB per atom O).',
        'Molekul kovalen sederhana: titik leleh rendah, isolator listrik.',
        'Jaringan kovalen (intan, SiO₂): titik leleh sangat tinggi—berbeda dengan molekul kovalen biasa.',
      ],
      examples: [
        'H₂: H–H (1 PEI, 0 PEB)',
        'H₂O: H–O–H (2 PEI, 2 PEB pada O)',
        'NH₃: N dengan 3 ikatan H (3 PEI, 1 PEB pada N)',
        'CO₂: O=C=O (4 PEI total, 4 PEB total)',
        'N₂: N≡N (3 PEI, 2 PEB—1 PEB per atom N)',
        'Intan: jaringan kovalen → titik leleh 3.550 °C',
      ],
      illustrationType: 'lewis',
    },
    {
      // Penanggung jawab: Sonia Maharani Fitria
      id: 'sub-2-4',
      title: 'Ikatan Logam',
      content: [
        'Ikatan logam adalah ikatan yang terjadi di antara atom-atom logam. Setiap atom logam melepaskan elektron valensinya ke dalam kolam elektron bersama yang disebut "lautan elektron". Elektron-elektron ini bergerak bebas di seluruh struktur logam, sementara ion-ion logam positif yang tersisa tersusun teratur dalam kisi kristal.',
        'Model lautan elektron menjelaskan banyak sifat khas logam:',
        '• Konduktor listrik yang baik: elektron bebas dapat bergerak dan membawa muatan listrik di seluruh bahan. Ini sebabnya kabel listrik dibuat dari tembaga (Cu) atau aluminium (Al).',
        '• Konduktor panas yang baik: energi panas dipindahkan dengan cepat melalui pergerakan elektron bebas.',
        '• Mengkilap (kilap logam): elektron bebas menyerap dan memancarkan kembali cahaya tampak dari hampir semua panjang gelombang.',
        '• Dapat ditempa (maleabel) dan ditarik menjadi kawat (duktil): ketika logam dipukul, lapisan ion logam bergeser, tetapi lautan elektron tetap menghubungkan ion-ion tersebut sehingga logam tidak pecah.',
        '• Titik leleh bervariasi: bergantung pada kekuatan ikatan logam. Logam dengan banyak elektron valensi yang dilepas ke lautan (misal: W/Wolfram) memiliki titik leleh sangat tinggi, sementara logam alkali seperti Na relatif lunak dan mudah meleleh.',
        'Kekuatan ikatan logam dipengaruhi oleh jumlah elektron valensi yang dilepas dan ukuran ion logam. Semakin banyak elektron valensi dan semakin kecil ion logam, semakin kuat ikatan logamnya.',
      ],
      keyPoints: [
        'Ikatan logam: atom logam melepas EV → kation logam + lautan elektron bebas.',
        'Lautan elektron bertanggung jawab atas: konduktivitas listrik & panas, kilap, keuletan.',
        'Bersifat maleabel dan duktil karena lapisan ion dapat bergeser tanpa memutus ikatan.',
        'Kekuatan ikatan logam bergantung pada jumlah EV dan ukuran kation.',
      ],
      examples: [
        'Cu (tembaga): konduktor listrik → kabel',
        'Al (aluminium): ringan + kuat → badan pesawat',
        'Fe (besi): kuat → konstruksi bangunan, baja',
        'Au (emas): tidak reaktif + mudah dibentuk → perhiasan',
        'W (wolfram): titik leleh tertinggi (3.422 °C) → filamen lampu',
      ],
      illustrationType: 'crystal',
    },
    {
      // Penanggung jawab: Sonia Maharani Fitria
      id: 'sub-2-5',
      title: 'Perbandingan Sifat Fisik Ketiga Jenis Ikatan',
      content: [
        'Memahami perbedaan sifat fisik zat berdasarkan jenis ikatannya sangat penting untuk menjelaskan fenomena sehari-hari dan merancang material yang sesuai dengan kebutuhan.',
        'Titik Leleh dan Titik Didih:',
        '• Senyawa ion (NaCl, MgO): sangat tinggi. Kisi ion tiga dimensi memerlukan banyak energi untuk diputus.',
        '• Molekul kovalen sederhana (H₂O, CO₂, CH₄): rendah hingga sedang. Ikatan antarmolekul (van der Waals, ikatan hidrogen) jauh lebih lemah dari ikatan kovalen dalam molekul.',
        '• Jaringan kovalen (intan, SiO₂): sangat tinggi, bahkan melebihi banyak senyawa ion, karena ikatan kovalen membentang di seluruh struktur.',
        '• Logam: bervariasi (Na: 98 °C hingga W: 3.422 °C) tergantung kekuatan lautan elektron.',
        'Kekerasan dan Keuletan:',
        '• Senyawa ion: keras namun rapuh (mudah pecah bila dipukul kuat).',
        '• Molekul kovalen sederhana: lunak hingga cair/gas pada suhu kamar.',
        '• Jaringan kovalen: sangat keras (intan adalah zat alami paling keras).',
        '• Logam: dapat ditempa dan ditarik menjadi kawat (maleabel dan duktil).',
        'Konduktivitas Listrik:',
        '• Senyawa ion padat: tidak menghantarkan listrik (ion terikat). Larutan/lelehan: menghantarkan (ion bebas bergerak).',
        '• Molekul kovalen: umumnya tidak menghantarkan listrik dalam kondisi apapun (kecuali asam seperti HCl yang terionisasi dalam air).',
        '• Logam: konduktor listrik sangat baik dalam semua kondisi (elektron bebas).',
        'Kelarutan dalam Air:',
        '• Senyawa ion: umumnya larut (berinteraksi dengan dipol molekul air).',
        '• Molekul kovalen polar (H₂O, HCl, etanol): larut dalam air.',
        '• Molekul kovalen nonpolar (CCl₄, benzen): tidak larut dalam air, larut dalam pelarut organik.',
        '• Logam: umumnya tidak larut dalam air (kecuali logam alkali bereaksi dengan air).',
      ],
      keyPoints: [
        'Ion: titik leleh tinggi, keras-rapuh, isolator (padat), konduktor (larutan/lelehan).',
        'Kovalen sederhana: titik leleh rendah, lunak, isolator listrik.',
        'Jaringan kovalen: titik leleh sangat tinggi, sangat keras (intan, SiO₂).',
        'Logam: titik leleh bervariasi, maleabel-duktil, konduktor listrik & panas.',
        'Jangan menyamakan sifat senyawa kovalen sederhana dengan jaringan kovalen raksasa.',
      ],
      examples: [
        'NaCl: titik leleh 801 °C, keras-rapuh, larut air',
        'H₂O (es): titik leleh 0 °C, lunak, isolator',
        'Intan: titik leleh >3.500 °C, sangat keras, isolator',
        'Cu: titik leleh 1.085 °C, maleabel-duktil, konduktor',
      ],
      illustrationType: 'molecule',
    },
  ],
  summary: [
    'Ikatan ion terbentuk melalui transfer elektron antara logam dan nonlogam menghasilkan kation dan anion yang saling tarik-menarik dalam kisi kristal.',
    'Ikatan kovalen terbentuk melalui pemakaian pasangan elektron bersama antara nonlogam; dapat berupa ikatan tunggal, rangkap dua, atau rangkap tiga.',
    'Ikatan logam melibatkan lautan elektron bebas di antara kisi kation logam, memberikan sifat konduktif, maleabel, dan duktil.',
    'Senyawa ion: titik leleh tinggi, keras-rapuh, konduktor saat larut/meleleh.',
    'Molekul kovalen sederhana: titik leleh rendah, isolator; jaringan kovalen (intan, SiO₂) berbeda: titik leleh sangat tinggi.',
    'Logam: titik leleh bervariasi, konduktor listrik dan panas yang baik, dapat ditempa dan ditarik.',
  ],
  author: 'Farrel Athariq Ramadhan (Ikatan Ion) · Sonia Maharani Fitria (Kovalen & Logam)',
};

