import type { ModuleData } from '../types';

/**
 * ChemBond — Modul 1: Pengenalan Ikatan Kimia
 * Materi lengkap BAB 1–6 (53 subbab).
 * Tabel, diagram, dan persamaan disajikan sebagai teks terstruktur
 * agar kompatibel dengan MateriPage.tsx yang merender content sebagai paragraf.
 */

export const modul1Data: ModuleData = {
  "id": "materi-1",
  "order": 1,
  "title": "Pengenalan Ikatan Kimia",
  "subtitle": "Konfigurasi Elektron, Elektron Valensi, Kestabilan Atom, Aturan Duplet-Oktet, dan Pembentukan Ikatan Kimia",
  "description": "Mempelajari dasar pembentukan ikatan kimia melalui struktur elektron atom, konfigurasi elektron, elektron valensi, kestabilan, serta ikatan ion dan kovalen.",
  "learningObjectives": [
    "Menjelaskan hakikat ikatan kimia dan hubungannya dengan perubahan energi sistem.",
    "Menuliskan konfigurasi elektron berdasarkan kulit, subkulit, dan orbital.",
    "Menentukan elektron valensi serta menggambarkan simbol titik Lewis.",
    "Menjelaskan konfigurasi elektron gas mulia sebagai model sederhana kestabilan atom.",
    "Menganalisis aturan duplet dan oktet beserta pengecualiannya.",
    "Menjelaskan pembentukan ion, ikatan ion, dan ikatan kovalen berdasarkan interaksi elektron dan perubahan energi."
  ],
  "submodules": [
    {
      "id": "sub-1-1",
      "title": "Bab 1 · Hakikat dan Pengertian Ikatan Kimia",
      "content": [
        "Materi tersusun atas atom-atom yang dapat berinteraksi satu sama lain. Dari interaksi atom terbentuk berbagai zat, mulai dari molekul sederhana seperti H₂O dan O₂, senyawa ion seperti NaCl, hingga molekul biologis kompleks seperti DNA.",
        "Ikatan kimia adalah interaksi yang mempertahankan atom atau ion dalam suatu susunan kimia. Ikatan terutama berkaitan dengan gaya elektrostatik antara inti atom dan elektron, serta interaksi tolak-menolak antara inti-inti dan elektron-elektron.",
        "Suatu ikatan dapat terbentuk apabila interaksi antarpartikel menghasilkan keadaan dengan energi total lebih rendah dibandingkan keadaan partikel-partikel yang terpisah. Susunan elektron dalam ikatan dapat melibatkan perpindahan elektron, penggunaan pasangan elektron bersama, atau elektron yang terdelokalisasi pada logam.",
        "Secara sederhana, prosesnya dapat digambarkan sebagai: A + B (terpisah) → interaksi antaratom → A—B (berikatan, energi lebih rendah). Gas mulia umumnya berupa atom tunggal, tetapi gas mulia yang lebih berat seperti xenon dan kripton juga dapat membentuk senyawa pada kondisi tertentu."
      ],
      "keyPoints": [
        "Ikatan kimia merupakan interaksi, bukan tali fisik yang menghubungkan atom.",
        "Pembentukan ikatan berkaitan dengan penurunan energi sistem.",
        "Ikatan ion, kovalen, dan logam mempunyai cara interaksi elektron yang berbeda."
      ],
      "illustrationType": "molecule"
    },
    {
      "id": "sub-1-2",
      "title": "Bab 1 · Alasan Atom Membentuk Ikatan",
      "content": [
        "Atom dapat membentuk ikatan ketika interaksi antaratom menghasilkan keadaan energi yang lebih rendah. Namun, tidak semua atom harus berikatan. Atom yang terisolasi juga dapat stabil, seperti atom gas mulia dalam kondisi biasa.",
        "Ketika dua atom saling mendekat, terjadi gaya tarik antara inti suatu atom dan elektron atom lainnya. Pada saat yang sama, terdapat gaya tolak antara kedua inti dan antara elektron-elektron. Jarak tertentu menghasilkan keseimbangan interaksi sehingga energi sistem mencapai nilai minimum.",
        "Karena itu, pembentukan ikatan tidak cukup dijelaskan dengan pernyataan bahwa atom 'ingin' stabil. Ikatan merupakan hasil interaksi fisik dan perubahan energi. Tiga gagasan pentingnya adalah adanya gaya tarik dan gaya tolak, adanya jarak kesetimbangan, dan energi sistem yang lebih rendah pada keadaan berikatan."
      ],
      "keyPoints": [
        "Tidak semua atom harus membentuk ikatan.",
        "Gaya tarik dan gaya tolak bekerja secara bersamaan.",
        "Kestabilan berkaitan dengan energi total sistem."
      ]
    },
    {
      "id": "sub-1-3",
      "title": "Bab 1 · Energi dan Kurva Energi Potensial H₂",
      "content": [
        "Pembentukan molekul hidrogen dapat dituliskan H(g) + H(g) → H₂(g). Pada jarak antarnukleus yang sangat jauh, energi potensial didefinisikan sebagai acuan nol.",
        "Ketika dua atom H saling mendekat, gaya tarik membuat energi potensial menurun. Energi mencapai minimum pada jarak kesetimbangan sekitar 74 pm atau 0,74 Å. Jarak ini disebut panjang ikatan H—H.",
        "Jika kedua atom dipaksa terlalu dekat, gaya tolak meningkat tajam sehingga energi potensial naik. Kedalaman minimum kurva berkaitan dengan energi yang diperlukan untuk memisahkan atom-atom dalam molekul. Energi disosiasi ikatan H—H sekitar 436 kJ mol⁻¹.",
        "Empat keadaan pada kurva: (1) r → ∞, atom terpisah dan energi acuan mendekati nol; (2) r > r₀, atom mendekat dan energi menurun; (3) r = r₀, energi minimum dan jarak setimbang; (4) r < r₀, tolakan meningkat dan energi naik.",
        "Catatan: nilai minimum energi potensial dan energi disosiasi eksperimen tidak selalu identik secara numerik karena energi vibrasi molekul serta perbedaan definisi energi dan entalpi dapat diperhitungkan."
      ],
      "keyPoints": [
        "Panjang ikatan H—H sekitar 74 pm.",
        "Energi disosiasi H—H sekitar 436 kJ mol⁻¹.",
        "Jarak terlalu dekat meningkatkan gaya tolak."
      ],
      "illustrationType": "molecule"
    },
    {
      "id": "sub-1-4",
      "title": "Bab 1 · Sejarah Kossel–Lewis",
      "content": [
        "Pada tahun 1916, Walter Kossel dan Gilbert N. Lewis mengembangkan gagasan penting tentang peran elektron dalam pembentukan ikatan kimia.",
        "Kossel menjelaskan pembentukan ikatan ion melalui perpindahan elektron. Atom yang melepaskan elektron menjadi kation, sedangkan atom yang menerima elektron menjadi anion. Gaya tarik elektrostatik antara ion bermuatan berlawanan mempertahankan susunan senyawa ion.",
        "Lewis menjelaskan ikatan kovalen melalui penggunaan pasangan elektron bersama oleh dua atom. Kedua gagasan tersebut membantu menjelaskan bagaimana atom golongan utama membentuk susunan elektron yang relatif stabil.",
        "Peta konsep: Kossel → perpindahan elektron → kation dan anion → interaksi elektrostatik; Lewis → pasangan elektron bersama → ikatan kovalen."
      ],
      "keyPoints": [
        "Kossel: model perpindahan elektron untuk ikatan ion.",
        "Lewis: pasangan elektron bersama untuk ikatan kovalen."
      ]
    },
    {
      "id": "sub-1-5",
      "title": "Bab 1 · Konfigurasi Gas Mulia, Duplet, dan Oktet",
      "content": [
        "Gas mulia digunakan sebagai acuan sederhana kestabilan konfigurasi elektron. Helium memiliki dua elektron pada kulit pertama (duplet), sedangkan neon, argon, kripton, xenon, dan radon umumnya memiliki delapan elektron pada kulit terluarnya (oktet).",
        "Tabel konfigurasi kulit gas mulia: He (Z=2): 2; Ne (Z=10): 2,8; Ar (Z=18): 2,8,8; Kr (Z=36): 2,8,18,8; Xe (Z=54): 2,8,18,18,8; Rn (Z=86): 2,8,18,32,18,8.",
        "Helium memiliki konfigurasi 1s² sehingga kulit pertamanya penuh. Gas mulia lainnya umumnya mempunyai konfigurasi terluar ns²np⁶. Konfigurasi ini berkaitan dengan energi ionisasi yang relatif tinggi dan kecenderungan menerima elektron yang rendah pada kondisi biasa.",
        "Gas mulia bukan berarti mutlak tidak reaktif. Senyawa xenon dan kripton telah dikenal. Aturan duplet dan oktet merupakan model untuk menjelaskan banyak kecenderungan unsur golongan utama, bukan hukum universal."
      ],
      "keyPoints": [
        "He stabil dengan duplet; gas mulia lain umumnya oktet.",
        "Gas mulia memiliki reaktivitas rendah, bukan selalu nol.",
        "Duplet dan oktet adalah model sederhana."
      ],
      "illustrationType": "atom"
    },
    {
      "id": "sub-1-8",
      "title": "Bab 1 · Rangkuman dan Refleksi Bab 1",
      "content": [
        "Rangkuman: (1) Ikatan kimia adalah interaksi yang mempertahankan atom atau ion dalam susunan kimia. (2) Pembentukan ikatan berkaitan dengan energi sistem yang lebih rendah. (3) Gaya tarik dan gaya tolak bekerja bersamaan. (4) Kurva energi potensial menunjukkan jarak kesetimbangan. (5) Panjang ikatan H—H sekitar 74 pm dan energi disosiasinya sekitar 436 kJ mol⁻¹. (6) Kossel menjelaskan ikatan ion melalui perpindahan elektron. (7) Lewis menjelaskan ikatan kovalen melalui pasangan elektron bersama. (8) Duplet dan oktet merupakan model kestabilan yang berguna tetapi tidak universal.",
        "Pertanyaan refleksi: 1. Apa yang dimaksud dengan ikatan kimia? 2. Mengapa atom dapat membentuk ikatan? 3. Bagaimana kurva energi potensial menjelaskan panjang ikatan? 4. Apa perbedaan gagasan Kossel dan Lewis? 5. Mengapa aturan oktet tidak berlaku untuk semua atom dan senyawa?"
      ],
      "keyPoints": [
        "Ingat hubungan struktur elektron, gaya antarpartikel, dan energi.",
        "Gunakan aturan duplet-oktet sebagai model, bukan aturan mutlak."
      ]
    },
    {
      "id": "sub-2-1",
      "title": "Bab 2 · Pengertian Konfigurasi Elektron",
      "content": [
        "Konfigurasi elektron merupakan susunan atau distribusi elektron dalam atom berdasarkan tingkat energi, kulit, subkulit, dan orbital. Konfigurasi elektron membantu menjelaskan bagaimana elektron menempati ruang di sekitar inti dan bagaimana susunannya berkaitan dengan sifat kimia unsur.",
        "Pada atom netral, jumlah elektron sama dengan jumlah proton. Jumlah proton dalam inti disebut nomor atom (Z), sehingga jumlah elektron atom netral = Z. Contoh: natrium (Na) mempunyai Z=11, sehingga atom netralnya memiliki 11 proton dan 11 elektron.",
        "Konfigurasi elektron dapat dituliskan berdasarkan kulit (gambaran sederhana model Bohr) atau berdasarkan subkulit dan orbital (model mekanika kuantum) yang memberikan penjelasan lebih terperinci."
      ],
      "keyPoints": [
        "Atom netral: jumlah elektron = nomor atom.",
        "Dua cara penulisan utama: berdasarkan kulit dan subkulit/orbital."
      ]
    },
    {
      "id": "sub-2-2",
      "title": "Bab 2 · Konfigurasi Elektron Berdasarkan Kulit Atom (Model Bohr)",
      "content": [
        "Model Bohr menggambarkan elektron menempati tingkat energi tertentu yang disebut kulit. Lambang kulit dan bilangan kuantum utama: K (n=1), L (n=2), M (n=3), N (n=4), O (n=5), P (n=6), Q (n=7).",
        "Kapasitas maksimum teoritis kulit dinyatakan dengan 2n². Kulit K: 2(1)²=2; L: 2(2)²=8; M: 2(3)²=18; N: 2(4)²=32 elektron. Rumus ini menunjukkan kapasitas maksimum, bukan urutan pengisian yang harus selalu memenuhi satu kulit sampai penuh sebelum kulit berikutnya ditempati. Pengisian mengikuti energi orbital.",
        "Tabel konfigurasi kulit: H (Z=1): 1; He (2): 2; C (6): 2,4; O (8): 2,6; Na (11): 2,8,1; Cl (17): 2,8,7; Ca (20): 2,8,8,2; Br (35): 2,8,18,7; Ba (56): 2,8,18,18,8,2.",
        "Konfigurasi kulit berguna untuk mengenalkan distribusi elektron. Untuk memahami urutan pengisian, elektron valensi, dan pembentukan ikatan lebih mendalam, diperlukan model mekanika kuantum."
      ],
      "keyPoints": [
        "Kapasitas kulit: 2n².",
        "Kapasitas kulit bukan aturan urutan pengisian orbital."
      ]
    },
    {
      "id": "sub-2-3",
      "title": "Bab 2 · Model Mekanika Kuantum: Kulit, Subkulit, dan Orbital",
      "content": [
        "Model mekanika kuantum tidak menggambarkan elektron bergerak pada lintasan pasti seperti planet. Elektron dijelaskan melalui orbital, yaitu daerah di sekitar inti dengan peluang keberadaan elektron tertentu.",
        "Kulit menunjukkan tingkat energi utama dan dinyatakan dengan n. Subkulit dinyatakan dengan s, p, d, f dan berkaitan dengan bilangan kuantum azimut l. Orbital adalah daerah peluang keberadaan elektron dalam subkulit.",
        "Tabel subkulit: s memiliki l=0, 1 orbital, kapasitas 2 elektron; p memiliki l=1, 3 orbital, kapasitas 6; d memiliki l=2, 5 orbital, kapasitas 10; f memiliki l=3, 7 orbital, kapasitas 14.",
        "Setiap orbital maksimum ditempati dua elektron dengan spin berlawanan. Bentuk orbital: s mendekati bola; p memiliki dua lobus; d memiliki beberapa bentuk, sebagian menyerupai empat lobus; f lebih kompleks.",
        "Tabel kulit dan subkulit: n=1: 1s, 1 orbital, kapasitas 2; n=2: 2s dan 2p, 4 orbital, kapasitas 8; n=3: 3s, 3p, 3d, 9 orbital, kapasitas 18; n=4: 4s, 4p, 4d, 4f, 16 orbital, kapasitas 32. Jumlah orbital subkulit = 2l+1; kapasitas elektron = 2(2l+1)."
      ],
      "keyPoints": [
        "Kulit = tingkat energi utama; subkulit = bagian kulit; orbital = daerah peluang.",
        "Kapasitas s, p, d, f berturut-turut 2, 6, 10, 14."
      ],
      "illustrationType": "atom"
    },
    {
      "id": "sub-2-4",
      "title": "Bab 2 · Prinsip Pengisian Elektron dalam Orbital",
      "content": [
        "Prinsip Aufbau menyatakan elektron menempati orbital berenergi lebih rendah terlebih dahulu sebelum orbital berenergi lebih tinggi. Urutan umum: 1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p → 5s → 4d → 5p → 6s → 4f → 5d → 6p → 7s → 5f → 6d → 7p. Urutan ini merupakan pedoman umum dan mempunyai pengecualian.",
        "Prinsip larangan Pauli: tidak ada dua elektron dalam satu atom yang dapat memiliki keempat bilangan kuantum sama. Satu orbital maksimum berisi dua elektron dengan spin berlawanan. Simbol ↑ menunjukkan spin +½ dan ↓ menunjukkan spin −½; contoh 1s: [↑↓].",
        "Aturan Hund: pada orbital-orbital degenerat (energi sama), elektron mengisi orbital satu per satu dengan spin sejajar sebelum berpasangan. Untuk 2p³: [↑] [↑] [↑]. Untuk 2p⁴: [↑↓] [↑] [↑]."
      ],
      "keyPoints": [
        "Aufbau: energi rendah diisi lebih dahulu.",
        "Pauli: maksimum dua elektron per orbital dengan spin berlawanan.",
        "Hund: orbital setingkat diisi satu-satu dahulu."
      ],
      "illustrationType": "atom"
    },
    {
      "id": "sub-2-5",
      "title": "Bab 2 · Aturan n + l (Madelung) dan Urutan Energi Orbital",
      "content": [
        "Notasi gas mulia mempersingkat konfigurasi elektron dengan mengganti bagian konfigurasi yang sama dengan gas mulia sebelumnya menggunakan lambang gas mulia dalam tanda kurung siku.",
        "Contoh: Na = [Ne] 3s¹; Cl = [Ne] 3s² 3p⁵; Ca = [Ar] 4s²; Br = [Ar] 4s² 3d¹⁰ 4p⁵.",
        "Notasi ini memudahkan identifikasi elektron bagian dalam dan elektron terluar sehingga berguna untuk mempelajari elektron valensi dan kecenderungan pembentukan ikatan."
      ],
      "keyPoints": [
        "Gas mulia yang dipakai adalah gas mulia sebelumnya dalam tabel periodik."
      ]
    },
    {
      "id": "sub-2-8",
      "title": "Bab 2 · Pengecualian dalam Pengisian Konfigurasi Elektron",
      "content": [
        "Prinsip Aufbau merupakan pedoman umum, tetapi beberapa unsur memiliki konfigurasi keadaan dasar yang berbeda dari perkiraan sederhana karena keseimbangan energi keseluruhan atom, interaksi antar-elektron, dan susunan subkulit.",
        "Kromium (Cr, Z=24): perkiraan sederhana [Ar] 4s² 3d⁴; konfigurasi keadaan dasar teramati [Ar] 3d⁵ 4s¹.",
        "Tembaga (Cu, Z=29): perkiraan sederhana [Ar] 4s² 3d⁹; konfigurasi keadaan dasar teramati [Ar] 3d¹⁰ 4s¹.",
        "Pengecualian tidak cukup dijelaskan dengan anggapan bahwa subkulit setengah penuh atau penuh selalu lebih stabil dalam semua keadaan."
      ],
      "keyPoints": [
        "Cr: [Ar] 3d⁵ 4s¹.",
        "Cu: [Ar] 3d¹⁰ 4s¹."
      ]
    },
    {
      "id": "sub-2-9",
      "title": "Bab 2 · Hubungan Konfigurasi Elektron dengan Letak Unsur dalam Tabel Periodik",
      "content": [
        "Periode unsur umumnya ditentukan oleh nilai bilangan kuantum utama terbesar (n) pada konfigurasi elektron atom netral keadaan dasar. Contoh Na: 1s² 2s² 2p⁶ 3s¹; n terbesar 3, sehingga Na berada pada periode 3.",
        "Untuk unsur golongan utama, konfigurasi terluar membantu menentukan golongan: ns¹ → golongan 1; ns² → golongan 2; ns²np¹ → 13; ns²np² → 14; ns²np³ → 15; ns²np⁴ → 16; ns²np⁵ → 17; ns²np⁶ → 18. Helium 1s² merupakan pengecualian konfigurasi, tetapi berada di golongan 18 karena sifat kimianya menyerupai gas mulia.",
        "Pada unsur transisi, penentuan golongan berkaitan dengan elektron ns dan (n−1)d sehingga lebih kompleks dan dapat memiliki pengecualian.",
        "Blok unsur ditentukan oleh subkulit yang menerima elektron terakhir: blok s, p, d, atau f."
      ],
      "keyPoints": [
        "Periode: n terbesar.",
        "Golongan utama: pola ns dan np.",
        "Blok: subkulit tempat elektron terakhir masuk."
      ]
    },
    {
      "id": "sub-2-10",
      "title": "Bab 2 · Diagram Orbital dan Bilangan Kuantum",
      "content": [
        "Diagram orbital menggunakan kotak atau garis untuk menunjukkan orbital, sedangkan panah menunjukkan elektron dan arah spin.",
        "Nitrogen (N, Z=7): konfigurasi 1s² 2s² 2p³; diagram: 1s [↑↓], 2s [↑↓], 2p [↑] [↑] [↑]. Oksigen (O, Z=8): 1s² 2s² 2p⁴; diagram: 1s [↑↓], 2s [↑↓], 2p [↑↓] [↑] [↑]. Pengisian mengikuti Pauli dan Hund.",
        "Keadaan elektron dijelaskan dengan empat bilangan kuantum: utama n (kulit/tingkat energi); azimut l (jenis subkulit); magnetik mₗ (orientasi orbital); spin mₛ (arah spin). Nilai yang mungkin: n=1,2,3,...; l=0 sampai n−1; mₗ=−l sampai +l; mₛ=+½ atau −½. Nilai l=0 untuk s, 1 untuk p, 2 untuk d, 3 untuk f.",
        "Bromin (Br, Z=35) memiliki konfigurasi 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁵. Elektron terakhir berada pada 4p⁵. Dengan konvensi pengisian orbital p dari mₗ=−1, 0, +1 lalu pemasangan spin berlawanan, salah satu penetapan adalah n=4, l=1, mₗ=0, mₛ=−½. Nilai mₗ bergantung pada konvensi urutan orbital degenerat; n dan l menunjukkan subkulit 4p."
      ],
      "keyPoints": [
        "Empat bilangan kuantum: n, l, mₗ, mₛ.",
        "Diagram orbital harus mengikuti Pauli dan Hund."
      ],
      "illustrationType": "atom"
    },
    {
      "id": "sub-2-11",
      "title": "Bab 2 · Perbandingan Model Bohr dan Model Mekanika Kuantum",
      "content": [
        "Model Bohr menggambarkan elektron berada pada lintasan atau orbit dengan energi tertentu. Konsep utamanya adalah kulit elektron K, L, M, N dan seterusnya. Model ini berguna untuk memperkenalkan distribusi elektron secara sederhana.",
        "Model mekanika kuantum menjelaskan elektron melalui orbital dan peluang keberadaan. Konsepnya meliputi kulit, subkulit, orbital, dan bilangan kuantum. Model ini lebih terperinci untuk menjelaskan konfigurasi elektron dan sifat atom, tetapi perhitungan atom banyak elektron memerlukan pendekatan matematis.",
        "Bohr memperkenalkan gagasan energi elektron terkuantisasi, sedangkan model mekanika kuantum memberikan gambaran lebih lengkap mengenai perilaku elektron."
      ],
      "keyPoints": [
        "Bohr: orbit/kulit.",
        "Mekanika kuantum: orbital dan peluang keberadaan elektron."
      ]
    },
    {
      "id": "sub-2-12",
      "title": "Bab 2 · Contoh Soal, Rangkuman, dan Refleksi Bab 2",
      "content": [
        "Soal: Atom netral mempunyai nomor massa A=79 dan neutron=44. Tentukan nomor atom, nama unsur, jumlah elektron, konfigurasi subkulit dan kulit, periode, serta golongannya.",
        "Pembahasan: Z=A−neutron=79−44=35. Unsurnya bromin (Br). Karena netral, jumlah elektron=35. Konfigurasi subkulit: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁵ (jumlah 35). Konfigurasi kulit: 2, 8, 18, 7. n terbesar=4, sehingga periode 4. Elektron terluar 4s²4p⁵ berjumlah 7, sehingga golongan 17 (VIIA), termasuk halogen nonlogam.",
        "Rangkuman Bab 2: (1) Konfigurasi elektron adalah susunan elektron berdasarkan tingkat energi. (2) Atom netral memiliki elektron sebanyak nomor atom. (3) Bohr menjelaskan kulit, mekanika kuantum menjelaskan orbital. (4) Kapasitas kulit 2n². (5) Kapasitas s/p/d/f = 2/6/10/14. (6) Pengisian mengikuti Aufbau, Pauli, Hund. (7) Aturan n+l adalah pedoman dengan pengecualian. (8) Konfigurasi dapat ditulis lengkap atau singkat gas mulia. (9) Konfigurasi membantu menentukan periode, golongan utama, dan blok. (10) Keadaan elektron dijelaskan oleh n, l, mₗ, mₛ.",
        "Pertanyaan refleksi: 1. Mengapa kapasitas maksimum kulit mengikuti 2n²? 2. Apa perbedaan kulit, subkulit, dan orbital? 3. Mengapa orbital berenergi rendah diisi terlebih dahulu? 4. Bagaimana Aufbau, Pauli, dan Hund saling melengkapi? 5. Mengapa konfigurasi elektron dapat memperkirakan letak unsur dalam tabel periodik?"
      ],
    },
    {
      "id": "sub-3-5",
      "title": "Bab 3 · Pengaruh Elektron Valensi terhadap Sifat Kimia Unsur",
      "content": [
        "Elektron valensi memengaruhi kecenderungan atom membentuk ion, ikatan kimia, dan mengalami reaksi. Atom dapat melepaskan atau menerima elektron bergantung pada konfigurasi dan perubahan energi keseluruhan.",
        "Contoh pembentukan ion: Na memiliki satu elektron valensi dan dapat membentuk Na⁺; Mg memiliki dua dan dapat membentuk Mg²⁺; Cl memiliki tujuh dan dapat membentuk Cl⁻.",
        "Elektron valensi terlibat dalam ikatan ion (perpindahan elektron dan gaya tarik antarion), kovalen (pasangan elektron bersama), dan logam (interaksi kation logam dengan elektron terdelokalisasi).",
        "Jumlah elektron valensi membantu memperkirakan reaktivitas, misalnya logam alkali umumnya membentuk +1 dan halogen umumnya membentuk −1. Namun reaktivitas juga dipengaruhi ukuran atom, energi ionisasi, afinitas elektron, dan kondisi reaksi."
      ],
      "keyPoints": [
        "Elektron valensi penting tetapi bukan satu-satunya penentu reaktivitas."
      ]
    },
    {
      "id": "sub-3-6",
      "title": "Bab 3 · Simbol Titik Lewis",
      "content": [
        "Simbol titik Lewis menggambarkan elektron valensi dengan titik di sekitar lambang unsur. Lambang unsur menunjukkan atom, sedangkan jumlah titik menunjukkan jumlah elektron valensi.",
        "Contoh jumlah titik: H=1; Li=1; C=4; N=5; O=6; Cl=7; Ne=8.",
        "Aturan penulisan: tulis lambang unsur; tentukan elektron valensi; tempatkan titik pada empat sisi (atas, bawah, kiri, kanan); letakkan satu titik pada tiap sisi terlebih dahulu sebelum memasangkan titik; pastikan jumlah titik sama dengan elektron valensi.",
        "Contoh susunan: C mempunyai empat titik tunggal; N satu pasangan dan tiga titik tunggal; O dua pasangan dan dua titik tunggal; Cl tiga pasangan dan satu titik tunggal; Ne empat pasangan. Posisi titik merupakan representasi simbolis, bukan lintasan atau orientasi orbital yang sebenarnya."
      ],
      "keyPoints": [
        "Jumlah titik Lewis atom netral sesuai jumlah elektron valensi.",
        "Tempatkan satu titik di setiap sisi sebelum membentuk pasangan."
      ],
      "illustrationType": "lewis"
    },
    {
      "id": "sub-3-7",
      "title": "Bab 3 · Miskonsepsi Elektron Valensi dan Simbol Lewis",
      "content": [
        "Miskonsepsi 1: semua elektron atom adalah elektron valensi. Faktanya, elektron bagian dalam umumnya tidak terlibat langsung dalam ikatan kimia biasa.",
        "Miskonsepsi 2: jumlah elektron kulit terluar selalu sama dengan elektron valensi semua unsur. Faktanya, pada unsur transisi elektron d juga dapat berperan.",
        "Miskonsepsi 3: titik Lewis menunjukkan posisi elektron sebenarnya. Faktanya, titik Lewis hanya representasi jumlah elektron valensi.",
        "Miskonsepsi 4: semua atom harus memiliki delapan elektron. Faktanya, hidrogen cenderung duplet dan terdapat banyak pengecualian oktet.",
        "Miskonsepsi 5: unsur dengan elektron valensi sama mempunyai sifat sepenuhnya sama. Faktanya, unsur segolongan mirip tetapi ukuran atom, struktur elektron, dan faktor energi menyebabkan perbedaan."
      ],
      "keyPoints": [
        "Simbol Lewis adalah model representasi, bukan gambar posisi elektron."
      ]
    },
    {
      "id": "sub-3-8",
      "title": "Bab 3 · Contoh Soal, Rangkuman, dan Refleksi Bab 3",
      "content": [
        "Soal: Fosfor (P) memiliki Z=15 dan A=31. Tentukan proton, neutron, elektron atom netral, konfigurasi subkulit dan kulit, elektron valensi, simbol Lewis, serta jumlah elektron valensi ion P³⁻.",
        "Pembahasan: proton=Z=15; neutron=A−Z=31−15=16; elektron atom netral=15. Konfigurasi subkulit 1s² 2s² 2p⁶ 3s² 3p³; konfigurasi kulit 2,8,5. Elektron valensi pada kulit ketiga = 3s²+3p³=5. Simbol Lewis P memiliki lima titik: satu pasangan dan tiga titik tunggal.",
        "Ion P³⁻ menerima tiga elektron sehingga jumlah elektronnya 15+3=18. Konfigurasi subkulitnya 1s² 2s² 2p⁶ 3s² 3p⁶ dan konfigurasi kulit 2,8,8. Ion memiliki delapan elektron kulit terluar. Simbol ion ditulis dengan delapan titik di sekitar P, kurung siku, dan muatan 3−.",
        "Rangkuman Bab 3: (1) Elektron valensi berperan dalam interaksi dan ikatan. (2) Pada golongan utama umumnya berada di kulit terluar. (3) Jumlahnya dapat ditentukan dari konfigurasi atau golongan. (4) Pada transisi elektron ns dan (n−1)d dapat berperan. (5) Elektron valensi memengaruhi kecenderungan membentuk ion dan ikatan. (6) Simbol Lewis memakai titik. (7) Titik Lewis bukan posisi elektron nyata. (8) Jumlah titik atom netral sesuai elektron valensi. (9) Konsep ini menjadi dasar duplet-oktet dan ikatan kimia."
      ],
      "keyPoints": [
        "Periksa jumlah elektron ion P³⁻: 18.",
        "P memiliki lima elektron valensi dalam atom netral."
      ]
    },
    {
      "id": "sub-4-1",
      "title": "Bab 4 · Pengertian Gas Mulia",
      "content": [
        "Gas mulia berada pada golongan 18 tabel periodik: helium (He), neon (Ne), argon (Ar), kripton (Kr), xenon (Xe), dan radon (Rn). Oganeson (Og) juga berada pada golongan 18, tetapi sifat kimianya diperkirakan berbeda karena efek relativistik dan belum banyak diketahui secara eksperimen.",
        "Gas mulia mempunyai konfigurasi elektron relatif stabil. Helium memiliki dua elektron pada kulit pertama, sedangkan gas mulia lainnya mempunyai delapan elektron pada kulit terluar.",
        "Susunan ini berkaitan dengan kecenderungan reaksi yang rendah dalam kondisi biasa. Karena itu, konfigurasi gas mulia sering digunakan sebagai acuan sederhana untuk memahami kestabilan elektron."
      ],
      "keyPoints": [
        "Gas mulia berada pada golongan 18.",
        "Og termasuk golongan 18, tetapi sifatnya belum dipahami lengkap."
      ]
    },
    {
      "id": "sub-4-2",
      "title": "Bab 4 · Konfigurasi Elektron Unsur Gas Mulia",
      "content": [
        "Tabel konfigurasi gas mulia: He (Z=2): 1s²; kulit 2. Ne (Z=10): 1s² 2s² 2p⁶; kulit 2,8. Ar (Z=18): [Ne] 3s² 3p⁶; kulit 2,8,8.",
        "Kr (Z=36): [Ar] 3d¹⁰ 4s² 4p⁶; kulit 2,8,18,8. Xe (Z=54): [Kr] 4d¹⁰ 5s² 5p⁶; kulit 2,8,18,18,8. Rn (Z=86): [Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶; kulit 2,8,18,32,18,8.",
        "Oganeson (Og, Z=118) diperkirakan berakhir pada 7p⁶, tetapi sifat kimianya belum dipahami secara lengkap.",
        "He mencapai duplet; Ne, Ar, Kr, Xe, Rn umumnya memiliki delapan elektron terluar. Konfigurasi terluar gas mulia umumnya penuh sesuai subkulit s dan p."
      ],
      "keyPoints": [
        "He: duplet; gas mulia lainnya umumnya oktet."
      ]
    },
    {
      "id": "sub-4-3",
      "title": "Bab 4 · Hubungan Konfigurasi Gas Mulia dengan Kestabilan Atom",
      "content": [
        "Konfigurasi gas mulia sering menjadi gambaran susunan elektron relatif stabil. Atom golongan utama dapat membentuk ikatan sehingga menghasilkan ion atau susunan elektron yang menyerupai gas mulia terdekat.",
        "Contoh: Na dapat melepas satu elektron menjadi Na⁺; Cl dapat menerima satu elektron menjadi Cl⁻; Mg dapat melepas dua elektron menjadi Mg²⁺; O dapat menerima dua elektron menjadi O²⁻ dalam senyawa ion tertentu.",
        "Namun, atom tidak selalu membentuk ion hanya demi memperoleh konfigurasi gas mulia. Pembentukan senyawa ditentukan oleh perubahan energi keseluruhan, interaksi antarpartikel, dan kondisi lingkungan."
      ],
      "keyPoints": [
        "Konfigurasi gas mulia merupakan acuan sederhana, bukan satu-satunya penentu kestabilan."
      ]
    },
    {
      "id": "sub-4-4",
      "title": "Bab 4 · Energi dan Kestabilan Konfigurasi Elektron",
      "content": [
        "Kestabilan berkaitan dengan keadaan energi sistem. Energi ionisasi adalah energi minimum untuk melepaskan satu elektron dari atom atau ion fase gas: X(g) → X⁺(g) + e⁻. Contoh Na(g) → Na⁺(g) + e⁻. Pelepasan elektron membutuhkan energi sehingga energi ionisasi bernilai positif.",
        "Afinitas elektron berkaitan dengan perubahan energi ketika atom fase gas menerima elektron: X(g)+e⁻ → X⁻(g). Perubahan energinya dapat negatif atau positif, bergantung unsur dan tahap penerimaan elektron. Perhatikan konvensi tanda saat membandingkan sumber data.",
        "Energi kisi berkaitan dengan pembentukan susunan kristal ionik dari ion-ion. Pembentukan kisi dapat melepaskan energi; definisi tanda juga dapat berbeda jika energi dinyatakan sebagai energi pemisahan kristal menjadi ion gas. Besarnya dipengaruhi muatan ion dan jarak antarion.",
        "Kestabilan senyawa ion tidak hanya ditentukan konfigurasi gas mulia, tetapi juga energi yang menyertai pembentukan struktur kristal."
      ],
      "keyPoints": [
        "Energi ionisasi: energi untuk melepas elektron.",
        "Afinitas elektron: perubahan energi saat menerima elektron.",
        "Energi kisi berperan dalam kestabilan kristal ionik."
      ]
    },
    {
      "id": "sub-4-5",
      "title": "Bab 4 · Kecenderungan Atom Mencapai Konfigurasi Gas Mulia",
      "content": [
        "Atom golongan utama dapat mengalami perubahan elektron melalui tiga cara. A. Melepaskan elektron: logam dengan elektron valensi relatif sedikit dapat membentuk kation. Na: konfigurasi awal 2,8,1; melepas satu elektron menjadi Na⁺ dengan konfigurasi 2,8. Persamaan Na → Na⁺ + e⁻.",
        "B. Menerima elektron: nonlogam tertentu dapat membentuk anion. Cl: konfigurasi awal 2,8,7; menerima satu elektron menjadi Cl⁻ dengan konfigurasi 2,8,8. Persamaan Cl + e⁻ → Cl⁻.",
        "C. Menggunakan pasangan elektron bersama: pada ikatan kovalen dua atom menggunakan pasangan elektron bersama. Dalam H₂, tiap H memperoleh akses terhadap dua elektron (duplet). Dalam H₂O, O berbagi pasangan elektron dengan dua H; O dikelilingi delapan elektron dalam struktur Lewis dan tiap H memenuhi duplet.",
        "Ketiga mekanisme ini adalah gambaran sederhana. Proses sebenarnya berkaitan dengan perubahan energi dan interaksi elektron."
      ],
      "keyPoints": [
        "Pelepasan elektron membentuk kation.",
        "Penerimaan elektron membentuk anion.",
        "Penggunaan bersama pasangan elektron membentuk ikatan kovalen."
      ]
    },
    {
      "id": "sub-4-6",
      "title": "Bab 4 · Gas Mulia Tidak Sepenuhnya Inert",
      "content": [
        "Gas mulia mempunyai reaktivitas rendah dalam kondisi biasa, tetapi tidak berarti mustahil membentuk senyawa. Gas mulia lebih berat, terutama xenon dan kripton, diketahui membentuk senyawa dalam kondisi tertentu.",
        "Contoh senyawa: XeF₂, XeF₄, XeF₆, dan KrF₂. Gas mulia lebih berat lebih mudah dipolarisasi dibanding gas mulia ringan sehingga pada kondisi dan pasangan reaksi tertentu dapat terjadi interaksi kimia.",
        "Istilah gas mulia lebih tepat dipahami sebagai unsur dengan reaktivitas relatif rendah, bukan unsur yang mutlak tidak reaktif."
      ],
      "keyPoints": [
        "Xe dan Kr dapat membentuk senyawa dalam kondisi tertentu."
      ]
    },
    {
      "id": "sub-4-7",
      "title": "Bab 4 · Miskonsepsi Konfigurasi Elektron Gas Mulia",
      "content": [
        "Miskonsepsi 1: semua atom harus memiliki delapan elektron terluar. Faktanya, He stabil dengan dua elektron dan banyak senyawa memiliki pengecualian oktet.",
        "Miskonsepsi 2: gas mulia tidak dapat membentuk senyawa. Faktanya, Xe dan Kr dapat membentuk senyawa dalam kondisi tertentu.",
        "Miskonsepsi 3: atom selalu membentuk ion agar memiliki konfigurasi gas mulia. Faktanya, atom juga dapat membentuk ikatan kovalen dan beberapa senyawa tidak mengikuti oktet.",
        "Miskonsepsi 4: konfigurasi gas mulia adalah satu-satunya penyebab kestabilan. Faktanya, kestabilan ditentukan energi keseluruhan dan interaksi antarpartikel."
      ],
      "keyPoints": [
        "Konfigurasi gas mulia bukan hukum mutlak."
      ]
    },
    {
      "id": "sub-4-8",
      "title": "Bab 4 · Contoh Soal, Rangkuman, dan Refleksi Bab 4",
      "content": [
        "Soal: Na (Z=11), Mg (Z=12), O (Z=8), dan Cl (Z=17). Tentukan konfigurasi elektron, elektron valensi, kecenderungan ion, konfigurasi ion, dan gas mulia yang isoelektronik.",
        "Konfigurasi kulit: Na 2,8,1; Mg 2,8,2; O 2,6; Cl 2,8,7. Elektron valensi berturut-turut 1, 2, 6, 7. Kecenderungan: Na melepas 1 menjadi Na⁺; Mg melepas 2 menjadi Mg²⁺; O menerima 2 menjadi O²⁻ dalam senyawa ion tertentu; Cl menerima 1 menjadi Cl⁻.",
        "Tabel ion: Na⁺ memiliki 10 elektron, konfigurasi 2,8; Mg²⁺ memiliki 10, konfigurasi 2,8; O²⁻ memiliki 10, konfigurasi 2,8; Cl⁻ memiliki 18, konfigurasi 2,8,8. Na⁺, Mg²⁺, O²⁻ sama konfigurasi dengan Ne; Cl⁻ sama dengan Ar. Ion-ion tersebut memiliki jumlah proton dan sifat kimia berbeda meskipun konfigurasi elektronnya sama.",
        "Rangkuman Bab 4: (1) Gas mulia golongan 18 relatif stabil. (2) He duplet, lainnya umumnya oktet. (3) Konfigurasi gas mulia menjadi acuan sederhana. (4) Pembentukan ion melibatkan energi ionisasi dan afinitas elektron. (5) Energi kisi berperan pada kestabilan kristal ionik. (6) Atom dapat melepas, menerima, atau berbagi elektron. (7) Xe dan Kr dapat membentuk senyawa. (8) Kestabilan ditentukan energi keseluruhan sistem."
      ],
      "keyPoints": [
        "Na⁺, Mg²⁺, O²⁻ isoelektronik dengan Ne; Cl⁻ dengan Ar."
      ]
    },
    {
      "id": "sub-5-1",
      "title": "Bab 5 · Pengertian Aturan Duplet dan Oktet",
      "content": [
        "Aturan duplet dan oktet merupakan model sederhana untuk menjelaskan kecenderungan atom mencapai susunan elektron relatif stabil melalui pembentukan ikatan. Konsep ini berkembang dari gagasan Kossel dan Lewis mengenai peran elektron valensi.",
        "Aturan duplet: beberapa atom cenderung mencapai dua elektron pada kulit terluarnya, menyerupai helium. Hidrogen memiliki satu elektron; dalam H₂ dua atom H menggunakan satu pasangan elektron bersama sehingga masing-masing memperoleh akses terhadap dua elektron.",
        "Aturan oktet: banyak atom golongan utama cenderung membentuk ikatan sehingga memiliki delapan elektron di sekitar kulit valensi, menyerupai Ne atau Ar. Na dapat membentuk Na⁺ dengan melepas elektron; Cl membentuk Cl⁻ dengan menerima elektron.",
        "Aturan oktet bermanfaat untuk banyak senyawa golongan utama, tetapi bukan hukum universal karena terdapat senyawa stabil yang tidak memenuhi oktet."
      ],
      "keyPoints": [
        "Duplet: dua elektron; oktet: delapan elektron.",
        "Aturan ini model sederhana dan memiliki pengecualian."
      ]
    },
    {
      "id": "sub-5-2",
      "title": "Bab 5 · Perkembangan Konsep Kossel–Lewis",
      "content": [
        "Kossel menjelaskan ikatan ion melalui perpindahan elektron sehingga terbentuk ion positif dan negatif yang saling tarik-menarik.",
        "Contoh NaCl: Na → Na⁺ + e⁻; Cl + e⁻ → Cl⁻; ion Na⁺ dan Cl⁻ saling tarik-menarik secara elektrostatik. NaCl padat membentuk kisi kristal ionik dari banyak ion, bukan molekul NaCl diskret.",
        "Lewis menjelaskan ikatan kovalen melalui pasangan elektron bersama. Pada H₂, masing-masing H memiliki satu elektron dan menggunakan satu pasangan bersama. Ikatan dapat digambarkan H—H; tiap H memperoleh akses terhadap dua elektron sehingga memenuhi kecenderungan duplet."
      ],
      "keyPoints": [
        "Kossel: ikatan ion; Lewis: ikatan kovalen."
      ],
      "illustrationType": "lewis"
    },
    {
      "id": "sub-5-3",
      "title": "Bab 5 · Cara Atom Mencapai Konfigurasi Duplet dan Oktet",
      "content": [
        "Atom dapat mencapai susunan elektron yang menyerupai gas mulia melalui pelepasan, penerimaan, atau penggunaan bersama elektron.",
        "Pelepasan elektron: Na → Na⁺ + e⁻. Na berkonfigurasi 2,8,1; setelah melepas satu elektron, Na⁺ berkonfigurasi 2,8.",
        "Penerimaan elektron: Cl + e⁻ → Cl⁻. Cl berkonfigurasi 2,8,7; setelah menerima satu elektron, Cl⁻ berkonfigurasi 2,8,8.",
        "Penggunaan pasangan elektron bersama: H₂ membuat tiap H memenuhi duplet; H₂O membuat O dikelilingi delapan elektron dalam struktur Lewis dan setiap H memenuhi duplet; CH₄ membuat C dikelilingi delapan elektron melalui empat pasangan ikatan.",
        "Ketiga mekanisme merupakan gambaran sederhana. Proses sebenarnya berkaitan dengan perubahan energi dan interaksi elektron."
      ],
      "keyPoints": [
        "Pelepasan dan penerimaan elektron berhubungan dengan pembentukan ion.",
        "Berbagi pasangan elektron membentuk ikatan kovalen."
      ]
    },
    {
      "id": "sub-5-4",
      "title": "Bab 5 · Pengecualian terhadap Aturan Oktet",
      "content": [
        "Pengecualian aturan oktet meliputi tiga kelompok: oktet tidak lengkap, molekul dengan jumlah elektron valensi ganjil, dan oktet diperluas dalam struktur Lewis.",
        "Oktet tidak lengkap: BeCl₂ fase gas mempunyai atom Be dengan dua ikatan dan empat elektron ikatan di sekelilingnya. BF₃ mempunyai tiga ikatan B—F dan enam elektron di sekitar B. BH₃ juga mempunyai tiga ikatan B—H dan enam elektron di sekitar B.",
        "Elektron valensi ganjil: NO mempunyai 5+6=11 elektron valensi; NO₂ mempunyai 5+(2×6)=17. Karena jumlah total ganjil, struktur Lewis biasa menyisakan satu elektron tidak berpasangan. Spesies seperti ini disebut radikal; reaktivitas bergantung struktur elektronik dan kondisi.",
        "Oktet diperluas: struktur Lewis sederhana PCl₅ menggambarkan 10 elektron di sekitar P; SF₆ menggambarkan 12 elektron di sekitar S; XeF₄ menggambarkan empat ikatan Xe—F dan dua pasangan elektron bebas pada Xe sehingga lebih dari delapan elektron berada di sekitar atom pusat.",
        "Gambaran oktet diperluas adalah bagian dari model Lewis. Penjelasan ikatan senyawa tersebut memerlukan teori lebih lanjut; tidak tepat jika hanya menyatakan orbital d kosong dipakai untuk menampung elektron tambahan."
      ],
      "keyPoints": [
        "Oktet tidak lengkap: BeCl₂, BF₃, BH₃.",
        "Elektron ganjil: NO, NO₂.",
        "Oktet diperluas: PCl₅, SF₆, XeF₄."
      ],
      "illustrationType": "lewis"
    },
    {
      "id": "sub-5-5",
      "title": "Bab 5 · Perbandingan Struktur Duplet, Oktet, dan Pengecualiannya",
      "content": [
        "Tabel contoh: H₂ — duplet, setiap H memperoleh akses terhadap dua elektron; CH₄ — oktet pada C; H₂O — oktet pada O; BF₃ — oktet tidak lengkap, B dikelilingi enam elektron; NO — jumlah elektron valensi 11 (ganjil); PCl₅ — struktur Lewis menggambarkan 10 elektron di sekitar P; SF₆ — struktur Lewis menggambarkan 12 elektron di sekitar S.",
        "Contoh tersebut menunjukkan bahwa aturan duplet dan oktet merupakan pola umum untuk membantu memprediksi struktur Lewis, tetapi tidak dapat diterapkan secara mutlak pada seluruh senyawa."
      ],
      "keyPoints": [
        "Kenali jenis pengecualian dari jumlah elektron di sekitar atom pusat dan jumlah elektron total."
      ]
    },
    {
      "id": "sub-5-6",
      "title": "Bab 5 · Keterbatasan Aturan Duplet dan Oktet",
      "content": [
        "Aturan duplet dan oktet tidak berlaku untuk semua unsur dan senyawa. Aturan oktet terutama berguna untuk banyak senyawa golongan utama; senyawa dengan oktet tidak lengkap, elektron ganjil, atau oktet diperluas merupakan pengecualian.",
        "Aturan oktet tidak secara langsung menjelaskan bentuk tiga dimensi molekul. Bentuk molekul memerlukan konsep tambahan seperti teori tolakan pasangan elektron kulit valensi (VSEPR).",
        "Aturan oktet tidak menentukan panjang ikatan, energi ikatan, atau kekuatan ikatan secara kuantitatif. Besaran tersebut memerlukan teori ikatan dan data eksperimen.",
        "Senyawa unsur transisi dengan subkulit d dan berbagai keadaan oksidasi tidak selalu dapat dijelaskan menggunakan aturan oktet sederhana.",
        "Pemenuhan oktet tidak otomatis menjamin kestabilan. Kestabilan ditentukan energi keseluruhan sistem, interaksi antaratom, distribusi elektron, dan kondisi lingkungan."
      ],
      "keyPoints": [
        "Oktet tidak menjelaskan bentuk molekul atau energi ikatan secara kuantitatif.",
        "Kestabilan bukan sekadar menghitung elektron."
      ]
    },
    {
      "id": "sub-5-7",
      "title": "Bab 5 · Miskonsepsi Aturan Duplet dan Oktet",
      "content": [
        "Miskonsepsi 1: semua atom harus memenuhi oktet agar stabil. Faktanya, ada duplet, oktet tidak lengkap, dan oktet diperluas.",
        "Miskonsepsi 2: aturan oktet adalah hukum mutlak. Faktanya, aturan ini model sederhana dengan sejumlah pengecualian.",
        "Miskonsepsi 3: lebih dari delapan elektron selalu tidak stabil. Faktanya, senyawa seperti PCl₅ dan SF₆ dapat terbentuk dan digambarkan dengan oktet diperluas dalam model Lewis.",
        "Miskonsepsi 4: semua senyawa terbentuk melalui perpindahan elektron. Faktanya, ikatan kovalen terbentuk melalui pasangan elektron bersama.",
        "Miskonsepsi 5: pemenuhan oktet otomatis menjamin kestabilan. Faktanya, kestabilan bergantung pada energi keseluruhan dan interaksi antarpartikel."
      ],
      "keyPoints": [
        "Jangan menerapkan aturan oktet secara mutlak."
      ]
    },
    {
      "id": "sub-5-8",
      "title": "Bab 5 · Contoh Soal, Rangkuman, dan Refleksi Bab 5",
      "content": [
        "Soal: Klasifikasikan H₂, CH₄, BF₃, NO, dan PCl₅ berdasarkan susunan elektron dan tentukan yang menyimpang dari aturan oktet.",
        "H₂: tiap H menggunakan satu pasangan bersama dan memenuhi duplet. CH₄: C membentuk empat ikatan kovalen dan dikelilingi delapan elektron; tiap H memenuhi duplet. BF₃: B membentuk tiga ikatan dan dikelilingi enam elektron (oktet tidak lengkap). NO: total elektron valensi 5+6=11 (elektron ganjil). PCl₅: P membentuk lima ikatan dan digambarkan memiliki sepuluh elektron (oktet diperluas).",
        "Kesimpulan: H₂ memenuhi kecenderungan duplet; CH₄ memenuhi oktet pada C; BF₃, NO, dan PCl₅ merupakan contoh yang tidak mengikuti aturan oktet secara sederhana.",
        "Rangkuman Bab 5: (1) Duplet dan oktet adalah model kecenderungan susunan elektron. (2) Duplet dua elektron; oktet delapan. (3) Kossel menjelaskan ion melalui kation-anion. (4) Lewis menjelaskan pasangan elektron bersama. (5) Pengecualian meliputi oktet tidak lengkap, elektron ganjil, dan oktet diperluas. (6) Aturan oktet tidak menjelaskan semua bentuk molekul dan kekuatan ikatan. (7) Kestabilan ditentukan energi keseluruhan.",
        "Pertanyaan refleksi: 1. Apa perbedaan aturan duplet dan oktet? 2. Bagaimana gagasan Kossel dan Lewis menjelaskan ikatan? 3. Mengapa BF₃ mempunyai oktet tidak lengkap? 4. Mengapa NO memiliki elektron valensi ganjil? 5. Mengapa aturan oktet bukan hukum universal?"
      ],
      "keyPoints": [
        "BF₃: 6 elektron di sekitar B; NO: 11 elektron total; PCl₅: 10 elektron di sekitar P."
      ]
    },
    {
      "id": "sub-6-1",
      "title": "Bab 6 · Kecenderungan Atom Mencapai Kestabilan",
      "content": [
        "Atom dapat berinteraksi melalui pembentukan ikatan kimia. Salah satu faktor yang membantu menjelaskan kecenderungan tersebut adalah perubahan energi ketika atom-atom berinteraksi. Sistem cenderung menuju keadaan berenergi lebih rendah apabila tersedia jalur perubahan.",
        "Pada unsur golongan utama, pembentukan ikatan sering dikaitkan dengan susunan elektron yang menyerupai gas mulia, tetapi konfigurasi gas mulia bukan satu-satunya penentu kestabilan.",
        "Faktor yang berperan meliputi jumlah dan susunan elektron valensi, energi ionisasi, afinitas elektron, keelektronegatifan, gaya tarik elektrostatik, dan energi keseluruhan sistem."
      ],
      "keyPoints": [
        "Pembentukan ikatan terkait interaksi antaratom dan perubahan energi."
      ]
    },
    {
      "id": "sub-6-2",
      "title": "Bab 6 · Faktor-Faktor yang Memengaruhi Kecenderungan Atom Membentuk Ikatan",
      "content": [
        "Energi ionisasi adalah energi minimum untuk melepaskan elektron dari atom netral fase gas: X(g) → X⁺(g)+e⁻. Atom dengan energi ionisasi relatif rendah lebih mudah melepaskan elektron. Contoh Na dapat melepas satu elektron valensinya menjadi Na⁺.",
        "Afinitas elektron berkaitan dengan perubahan energi ketika atom netral fase gas menerima elektron: X(g)+e⁻ → X⁻(g). Perubahan energi bergantung unsur dan proses; penerimaan elektron tidak selalu melepaskan energi pada semua unsur atau setiap tahap.",
        "Keelektronegatifan adalah ukuran kemampuan relatif atom menarik pasangan elektron dalam ikatan. Perbedaan keelektronegatifan membantu memperkirakan karakter ikatan: perbedaan relatif besar sering berkaitan dengan karakter ionik lebih kuat; perbedaan kecil sering berkaitan dengan kovalen. Batasnya tidak mutlak karena karakter ionik-kovalen berada dalam suatu rentang.",
        "Energi kisi berkaitan dengan energi yang dilepaskan ketika ion gas membentuk kristal ionik, atau energi yang diperlukan untuk memisahkan kristal menjadi ion gas bergantung konvensi definisi. Besarnya dipengaruhi muatan ion dan jarak antarion."
      ],
      "keyPoints": ["Energi ionisasi, afinitas elektron, keelektronegatifan, dan energi kisi memengaruhi pembentukan ikatan."
      ]
    },
    {
      "id": "sub-6-3",
      "title": "Bab 6 · Pembentukan Ion melalui Pelepasan dan Penerimaan Elektron",
      "content": [
        "Ion adalah atom atau kelompok atom bermuatan listrik karena jumlah proton dan elektronnya tidak sama.",
        "Kation merupakan ion positif yang terbentuk ketika atom melepaskan elektron. Natrium: konfigurasi 1s² 2s² 2p⁶ 3s¹; Na → Na⁺ + e⁻. Setelah melepas satu elektron, Na⁺ berkonfigurasi 1s² 2s² 2p⁶, sama dengan Ne. Magnesium: Mg → Mg²⁺ + 2e⁻.",
        "Anion merupakan ion negatif yang terbentuk ketika atom menerima elektron. Klorin: 1s² 2s² 2p⁶ 3s² 3p⁵; Cl + e⁻ → Cl⁻. Ion Cl⁻ berkonfigurasi 1s² 2s² 2p⁶ 3s² 3p⁶, sama dengan Ar. Oksigen dapat menerima dua elektron: O + 2e⁻ → O²⁻ dalam senyawa ion tertentu."
      ],
      "keyPoints": [
        "Kation: melepas elektron; anion: menerima elektron."
      ]
    },
    {
      "id": "sub-6-4",
      "title": "Bab 6 · Pembentukan Ikatan Ion",
      "content": [
        "Ikatan ion berkaitan dengan gaya tarik elektrostatik antara ion-ion bermuatan berlawanan. Umumnya terbentuk antara logam dan nonlogam melalui proses yang melibatkan pelepasan dan penerimaan elektron.",
        "Pembentukan NaCl: Na → Na⁺+e⁻; Cl+e⁻→Cl⁻; Na⁺ dan Cl⁻ saling tarik-menarik. Reaksi keseluruhan: 2Na+Cl₂→2NaCl. NaCl padat membentuk kisi kristal ionik teratur dari banyak ion, sehingga NaCl disebut satuan rumus, bukan molekul diskret.",
        "MgO: Mg→Mg²⁺+2e⁻; O+2e⁻→O²⁻; ion Mg²⁺ dan O²⁻ membentuk MgO melalui gaya elektrostatik.",
        "CaCl₂: Ca→Ca²⁺+2e⁻; 2Cl+2e⁻→2Cl⁻; ion Ca²⁺ dan dua ion Cl⁻ membentuk satuan rumus CaCl₂."
      ],
      "keyPoints": [
        "Senyawa ion padat umumnya berupa kisi kristal, bukan molekul terpisah."
      ],
      "illustrationType": "crystal"
    },
    {
      "id": "sub-6-5",
      "title": "Bab 6 · Pembentukan Ikatan Kovalen",
      "content": [
        "Ikatan kovalen terbentuk ketika dua atom menggunakan satu atau lebih pasangan elektron bersama. Ikatan ini umumnya terbentuk antara atom nonlogam.",
        "Ikatan tunggal: satu pasangan elektron bersama. Contoh H₂ digambarkan H—H; tiap H memiliki akses terhadap dua elektron. H₂O memiliki dua ikatan kovalen tunggal antara O dan dua H.",
        "Ikatan rangkap dua: dua pasangan elektron bersama. Contoh O₂ digambarkan O=O.",
        "Ikatan rangkap tiga: tiga pasangan elektron bersama. Contoh N₂ digambarkan N≡N.",
        "Tabel: H₂—tunggal, 1 pasangan; Cl₂—tunggal, 1 pasangan; H₂O—dua ikatan tunggal (dua pasangan pada O); O₂—rangkap dua, 2 pasangan; N₂—rangkap tiga, 3 pasangan; CO₂—dua ikatan rangkap dua, total 4 pasangan elektron ikatan."
      ],
      "keyPoints": [
        "Tunggal: satu pasangan; rangkap dua: dua; rangkap tiga: tiga."
      ],
      "illustrationType": "molecule"
    },
    {
      "id": "sub-6-6",
      "title": "Bab 6 · Perbedaan Ikatan Ion dan Ikatan Kovalen",
      "content": [
        "Ikatan ion melibatkan pelepasan dan penerimaan elektron dalam model sederhana; umumnya melibatkan logam dan nonlogam; partikel penyusunnya kation dan anion; gaya utama adalah tarik-menarik elektrostatik antarion; contoh NaCl, MgO, CaCl₂; umumnya membentuk kisi kristal ionik.",
        "Ikatan kovalen melibatkan penggunaan pasangan elektron bersama; umumnya melibatkan nonlogam dan nonlogam; dapat membentuk molekul atau jaringan kovalen; ikatan berkaitan dengan interaksi elektron dan inti atom; contoh H₂O, CO₂, CH₄, N₂.",
        "Tabel ini menunjukkan pola umum. Sebagian senyawa mempunyai karakter ikatan campuran, sehingga ikatan tidak selalu dapat dikategorikan secara mutlak sebagai ionik atau kovalen."
      ], "keyPoints": [
        "Ion: interaksi elektrostatik antarion; kovalen: pasangan elektron bersama."
      ]
    },
    {
      "id": "sub-6-7",
      "title": "Bab 6 · Kestabilan Senyawa dan Perubahan Energi",
      "content": [
        "Pembentukan ikatan berkaitan dengan perubahan energi. Ketika atom mendekat, interaksi elektron dan inti dapat menurunkan energi sistem hingga jarak kesetimbangan. Pada jarak tersebut gaya tarik dan gaya tolak mencapai keseimbangan; jaraknya disebut panjang ikatan kesetimbangan.",
        "Pembentukan ikatan umumnya melepaskan energi karena sistem bergerak menuju keadaan berenergi lebih rendah. Pemutusan ikatan memerlukan energi untuk mengatasi interaksi yang mempertahankan ikatan.",
        "Perubahan entalpi reaksi secara pendekatan: ΔH reaksi ≈ Σ energi ikatan yang diputus − Σ energi ikatan yang terbentuk. Persamaan ini menggunakan energi ikatan rata-rata, umumnya untuk fase gas.",
        "Kestabilan senyawa tidak cukup dijelaskan dari jumlah elektron valensi atau pencapaian konfigurasi gas mulia. Energi keseluruhan sistem menjadi faktor penting."
      ],
      "keyPoints": [
        "Memutus ikatan menyerap energi; membentuk ikatan melepaskan energi."
      ]
    },
    {
      "id": "sub-6-8",
      "title": "Bab 6 · Miskonsepsi dalam Pembentukan Ikatan Kimia",
      "content": [
        "Miskonsepsi 1: atom membentuk ikatan hanya untuk mencapai konfigurasi gas mulia. Faktanya, konfigurasi gas mulia adalah model sederhana; pembentukan ikatan ditentukan energi keseluruhan.",
        "Miskonsepsi 2: ikatan ion terbentuk melalui perpindahan elektron langsung dan sederhana. Faktanya, perpindahan elektron adalah model pembukuan elektron; kestabilan juga dipengaruhi gaya elektrostatik dan energi kisi.",
        "Miskonsepsi 3: senyawa ion tersusun atas molekul kecil terpisah. Faktanya, padatan ionik umumnya membentuk kisi kristal tiga dimensi.",
        "Miskonsepsi 4: semua atom dengan sedikit elektron valensi selalu melepas elektron. Faktanya, kecenderungan bergantung energi ionisasi, keelektronegatifan, dan pasangan atom yang berinteraksi.",
        "Miskonsepsi 5: ikatan kovalen selalu membagi elektron sama rata. Faktanya, perbedaan keelektronegatifan dapat membuat pasangan elektron tertarik lebih kuat ke salah satu atom.",
        "Miskonsepsi 6: atom membentuk ikatan karena ingin memenuhi oktet. Faktanya, atom tidak mempunyai tujuan atau keinginan; ikatan merupakan hasil interaksi fisik dan perubahan energi."
      ],
      "keyPoints": [
        "Gunakan penjelasan fisika-kimia, bukan ungkapan bahwa atom 'ingin' berikatan."
      ]
    },
    {
      "id": "sub-6-9",
      "title": "Bab 6 · Contoh Soal, Rangkuman, dan Refleksi Bab 6",
      "content": [
        "Soal: Na (Z=11), Mg (Z=12), O (Z=8), Cl (Z=17), C (Z=6), H (Z=1). Tentukan konfigurasi, elektron valensi, ion yang mungkin terbentuk dari Na/Mg/O/Cl, jenis ikatan dalam NaCl/MgO/H₂O/CO₂, dan alasannya.",
        "Konfigurasi kulit: Na 2,8,1; Mg 2,8,2; O 2,6; Cl 2,8,7; C 2,4; H 1. Elektron valensi: Na=1; Mg=2; O=6; Cl=7; C=4; H=1.",
        "Ion yang mungkin: Na melepas satu elektron menjadi Na⁺; Mg melepas dua menjadi Mg²⁺; O menerima dua menjadi O²⁻; Cl menerima satu menjadi Cl⁻.",
        "Jenis ikatan: NaCl ionik, dari interaksi Na⁺ dan Cl⁻; MgO ionik, dari Mg²⁺ dan O²⁻; H₂O kovalen, O dan H menggunakan pasangan elektron bersama; CO₂ kovalen, C dan O berbagi pasangan elektron melalui dua ikatan rangkap dua.",
        "Rangkuman Bab 6: (1) Ikatan terbentuk melalui interaksi antaratom dan perubahan energi. (2) Faktor penting: energi ionisasi, afinitas elektron, keelektronegatifan, energi kisi. (3) Kation melepas elektron, anion menerima elektron. (4) Ikatan ion adalah tarik-menarik elektrostatik antarion. (5) Ikatan kovalen menggunakan pasangan elektron bersama. (6) Ikatan kovalen dapat tunggal, rangkap dua, rangkap tiga. (7) Senyawa ion umumnya kisi kristal; kovalen dapat berupa molekul atau jaringan. (8) Pembentukan ikatan umumnya melepas energi, pemutusan memerlukan energi. (9) Kestabilan ditentukan energi keseluruhan.",
        "Pertanyaan refleksi: 1. Mengapa energi ionisasi berpengaruh pada pembentukan kation? 2. Apa perbedaan pembentukan kation dan anion? 3. Mengapa NaCl ionik sedangkan H₂O kovalen? 4. Apa perbedaan ikatan tunggal, rangkap dua, dan rangkap tiga? 5. Mengapa kestabilan tidak cukup dijelaskan aturan oktet? 6. Bagaimana perubahan energi berperan dalam pembentukan dan pemutusan ikatan?"
      ],
      "keyPoints": [
        "NaCl dan MgO: ionik; H₂O dan CO₂: kovalen."
      ]
    }
  ],

  "summary": [
    "Modul ini membahas hakikat ikatan kimia, konfigurasi elektron, elektron valensi, kestabilan atom, aturan duplet dan oktet, pembentukan ion, ikatan ion, serta ikatan kovalen.",
    "Pembentukan ikatan kimia berkaitan dengan interaksi antarpartikel dan perubahan energi sistem."
  ],

  "author": "Nanda Putri Wardaningtyas"
};

export default modul1Data;