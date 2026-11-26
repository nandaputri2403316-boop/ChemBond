/**
 * src/data/materi/modul2.ts
 * Modul 2 — Ikatan Ionik (versi lengkap, khusus ikatan ionik)
 * Penanggung jawab: Farrel Firmansyah Handoko (sub-2-1)
 *
 * Catatan: konten disesuaikan dengan kurikulum kimia SMA dan kontrak data ChemBond (ModuleData).
 * Ikatan kovalen dan ikatan logam sengaja tidak dimasukkan.
 */

import type { ModuleData } from '../types';

export const modul2Data: ModuleData = {
  id: 'materi-2',
  order: 2,
  title: 'Ikatan Ionik',
  subtitle: 'Memahami bagaimana ion terbentuk, saling tarik, dan menghasilkan senyawa ionik beserta sifat-sifatnya',
  description:
    'Materi ini membahas ikatan ionik secara runtut dalam enam submateri: konsep dasar dan kestabilan atom, proses pembentukan ikatan ion, penulisan rumus kimia dan struktur Lewis, struktur kristal ionik, sifat-sifat senyawa ion, serta contoh dan peranan senyawa ionik dalam kehidupan sehari-hari.',

  learningObjectives: [
    'Menjelaskan struktur atom dan menuliskan konfigurasi elektron unsur nomor atom 1 sampai 20.',
    'Menentukan elektron valensi dan menjelaskan kestabilan gas mulia, aturan duplet, dan aturan oktet.',
    'Menjelaskan alasan atom melepas atau menerima elektron berdasarkan energi ionisasi, afinitas elektron, dan keelektronegatifan.',
    'Menjelaskan pengertian ion, kation, dan anion serta menegaskan bahwa hanya elektron yang berpindah.',
    'Menguraikan proses pembentukan kation dan anion beserta perubahan ukurannya.',
    'Menjelaskan pembentukan ikatan ionik pada NaCl, MgCl₂, MgO, dan Al₂O₃ melalui perpindahan elektron.',
    'Menggambarkan pembentukan ikatan ionik menggunakan struktur Lewis.',
    'Menentukan rumus senyawa ionik dengan metode silang muatan, termasuk yang mengandung ion poliatomik.',
    'Memberi nama senyawa ionik, termasuk logam bermuatan ganda dengan angka Romawi.',
    'Menjelaskan struktur kisi kristal ionik, unit rumus, bilangan koordinasi, dan energi kisi.',
    'Menganalisis hubungan ikatan ionik dengan sifat fisik senyawa ionik (titik leleh, kekerasan, kerapuhan, kelarutan, dan daya hantar listrik).',
    'Menyebutkan contoh dan peranan senyawa ionik dalam kehidupan sehari-hari serta dampaknya terhadap kesehatan dan lingkungan.'
  ],

  submodules: [
    {
      // Penanggung jawab: Farrel Firmansyah Handoko
      id: 'sub-2-1',
      title: 'Konsep Dasar & Kestabilan Atom',
      content: [
        // ===== PENDAHULUAN =====
        'Pernahkah kamu bertanya-tanya, mengapa gas mulia seperti helium, neon, dan argon hampir tidak pernah bereaksi dengan zat lain? Sebaliknya, natrium (Na) bereaksi hebat dengan air, dan klorin (Cl₂) adalah gas beracun. Anehnya, ketika keduanya bergabung, terbentuklah garam dapur yang aman kita makan setiap hari.',
        'Jawaban dari semua pertanyaan itu ada pada susunan elektron di dalam atom. Atom dengan susunan elektron tertentu sangat "mapan" dan enggan bereaksi, sedangkan atom lain cenderung berubah agar susunan elektronnya menyerupai atom yang mapan tadi.',
        'Pada submateri ini kamu akan mempelajari struktur atom, konfigurasi elektron, elektron valensi, kestabilan gas mulia, aturan duplet dan oktet, cara atom mencapai kestabilan, serta pengantar tentang ion. Semua ini adalah fondasi untuk memahami ikatan ionik.',

        // ===== 1 =====
        '1. Mengingat Kembali Struktur Atom',
        'Atom tersusun dari tiga partikel dasar. Proton bermuatan positif (+) dan neutron tidak bermuatan (netral); keduanya berada di inti atom. Elektron bermuatan negatif (−) dan bergerak mengelilingi inti pada kulit-kulit atom.',
        'Nomor atom (Z) adalah jumlah proton dalam inti atom. Nomor atom menentukan identitas unsur: semua atom dengan 11 proton adalah natrium, tidak peduli apa pun yang terjadi pada elektronnya.',
        'Atom netral memiliki jumlah proton yang sama dengan jumlah elektron, sehingga muatan positif dan negatifnya saling meniadakan. Contoh: Na bernomor atom 11, jadi atom Na netral memiliki 11 proton dan 11 elektron.',
        'Nomor massa (A) adalah jumlah proton ditambah jumlah neutron. Contoh: atom Na dengan 11 proton dan 12 neutron memiliki nomor massa 23.',
        'Elektron menempati kulit atom yang diberi nama K, L, M, N, dan seterusnya (kulit ke-1, ke-2, ke-3, ke-4). Jumlah maksimum elektron pada kulit ke-n adalah 2n². Jadi kulit K maksimal 2 elektron, kulit L maksimal 8, kulit M maksimal 18, dan kulit N maksimal 32.',
        'Untuk 20 unsur pertama, kulit M dianggap terisi sampai 8 elektron lebih dulu. Setelah itu elektron berikutnya (pada K dan Ca) mulai menempati kulit N. Aturan penyederhanaan ini cukup untuk tingkat SMA.',

        // ===== 2 =====
        '2. Konfigurasi Elektron',
        'Konfigurasi elektron adalah susunan elektron pada kulit-kulit atom. Cara menulisnya: isi kulit dari yang paling dalam (K) lebih dulu, sampai penuh sesuai kapasitas, baru lanjut ke kulit berikutnya.',
        'Langkah menulis konfigurasi elektron: (1) tentukan jumlah elektron atom netral, yaitu sama dengan nomor atom; (2) isi kulit K maksimal 2; (3) isi kulit L maksimal 8; (4) isi kulit M sampai 8 (untuk 20 unsur pertama); (5) sisanya ke kulit N.',
        'Contoh Na (nomor atom 11): kulit K diisi 2, kulit L diisi 8, sisa 1 elektron masuk kulit M. Konfigurasinya 2, 8, 1.',
        'Contoh unsur-unsur yang akan sering muncul pada materi ikatan ionik:',
        'Li (nomor atom 3): 2, 1.',
        'Na (nomor atom 11): 2, 8, 1.',
        'K (nomor atom 19): 2, 8, 8, 1.',
        'Mg (nomor atom 12): 2, 8, 2.',
        'Ca (nomor atom 20): 2, 8, 8, 2.',
        'Al (nomor atom 13): 2, 8, 3.',
        'O (nomor atom 8): 2, 6.',
        'S (nomor atom 16): 2, 8, 6.',
        'F (nomor atom 9): 2, 7.',
        'Cl (nomor atom 17): 2, 8, 7.',
        'Br (nomor atom 35): berada pada golongan VIIA, jadi memiliki 7 elektron valensi seperti F dan Cl. Konfigurasi lengkapnya tidak perlu kamu tulis pada tingkat ini.',
        'Daftar konfigurasi elektron nomor atom 1 sampai 20:',
        '1 H: 1',
        '2 He: 2',
        '3 Li: 2, 1',
        '4 Be: 2, 2',
        '5 B: 2, 3',
        '6 C: 2, 4',
        '7 N: 2, 5',
        '8 O: 2, 6',
        '9 F: 2, 7',
        '10 Ne: 2, 8',
        '11 Na: 2, 8, 1',
        '12 Mg: 2, 8, 2',
        '13 Al: 2, 8, 3',
        '14 Si: 2, 8, 4',
        '15 P: 2, 8, 5',
        '16 S: 2, 8, 6',
        '17 Cl: 2, 8, 7',
        '18 Ar: 2, 8, 8',
        '19 K: 2, 8, 8, 1',
        '20 Ca: 2, 8, 8, 2',

        // ===== 3 =====
        '3. Elektron Valensi',
        'Elektron valensi adalah elektron yang berada pada kulit terluar atom. Elektron inilah yang terlibat ketika atom berikatan dengan atom lain, sedangkan elektron di kulit dalam umumnya tidak ikut berubah.',
        'Cara pertama menentukan elektron valensi: lihat konfigurasi elektron, lalu ambil angka paling akhir (kulit terluar). Contoh: Mg berkonfigurasi 2, 8, 2, jadi elektron valensinya 2.',
        'Cara kedua: lihat golongan unsur utama. Golongan IA memiliki 1 elektron valensi, IIA = 2, IIIA = 3, IVA = 4, VA = 5, VIA = 6, VIIA = 7, dan VIIIA = 8 (kecuali He yang hanya 2).',
        'Contoh soal: tentukan elektron valensi Cl (nomor atom 17).',
        'Pembahasan: konfigurasi Cl adalah 2, 8, 7. Kulit terluar berisi 7 elektron, jadi Cl memiliki 7 elektron valensi. Hasil ini sesuai dengan letaknya pada golongan VIIA.',
        'Contoh soal: tentukan elektron valensi Ca (nomor atom 20).',
        'Pembahasan: konfigurasi Ca adalah 2, 8, 8, 2, jadi elektron valensinya 2 (golongan IIA).',

        // ===== 4 =====
        '4. Gas Mulia: Contoh Atom yang Paling Stabil',
        'Gas mulia adalah unsur golongan VIIIA. Gas mulia dikenal sangat stabil sehingga hampir tidak membentuk senyawa dengan unsur lain pada kondisi biasa.',
        'He (nomor atom 2): konfigurasi 2, elektron valensi 2.',
        'Ne (nomor atom 10): konfigurasi 2, 8, elektron valensi 8.',
        'Ar (nomor atom 18): konfigurasi 2, 8, 8, elektron valensi 8.',
        'Kr (nomor atom 36) dan Xe (nomor atom 54): juga memiliki 8 elektron valensi.',
        'Mengapa gas mulia stabil? Kulit terluarnya sudah terisi penuh (2 elektron untuk He, atau 8 elektron untuk gas mulia lainnya). Susunan seperti ini berenergi rendah dan "mapan", sehingga atom tidak perlu melepas, menerima, atau memakai bersama elektron untuk berubah.',
        'Perlu diingat, gas mulia tetap memiliki elektron valensi. Yang membuatnya istimewa adalah kulit valensinya sudah penuh.',

        // ===== 5 =====
        '5. Aturan Duplet dan Oktet',
        'Aturan duplet: atom cenderung memiliki 2 elektron pada kulit terluarnya, mengikuti konfigurasi helium. Atom yang mengikuti aturan duplet adalah atom-atom kecil seperti H, Li, dan Be.',
        'Aturan oktet: atom cenderung memiliki 8 elektron pada kulit terluarnya, mengikuti konfigurasi gas mulia selain helium (Ne, Ar, dan seterusnya).',
        'Contoh duplet: Li (2, 1) melepas 1 elektron menjadi Li⁺ (2), mirip He. Be (2, 2) melepas 2 elektron menjadi Be²⁺ (2), juga mirip He.',
        'Contoh oktet: Na (2, 8, 1) melepas 1 elektron menjadi Na⁺ (2, 8), mirip Ne. Cl (2, 8, 7) menerima 1 elektron menjadi Cl⁻ (2, 8, 8), mirip Ar.',
        'Inti kedua aturan ini sama: atom cenderung mencapai konfigurasi elektron gas mulia.',
        'Catatan penting: aturan oktet berlaku baik untuk banyak unsur periode 2 dan 3, tetapi bukan aturan mutlak. Ada pengecualian, dan logam transisi tidak selalu mengikuti aturan ini. Jadi anggap oktet sebagai pedoman, bukan hukum yang tidak pernah dilanggar.',

        // ===== 6 =====
        '6. Cara Atom Mencapai Kestabilan',
        'Secara umum ada tiga cara atom mencapai konfigurasi gas mulia: melepas elektron, menerima elektron, atau menggunakan elektron bersama dengan atom lain. Cara ketiga akan kamu pelajari pada materi lain, sehingga di sini kita fokus pada dua cara pertama sebagai dasar ikatan ionik.',
        'Cara 1, melepas elektron. Atom yang melepas elektron valensinya akan memiliki kulit terluar baru yang sudah penuh (kulit di bawahnya).',
        'Cara 2, menerima elektron. Atom yang menerima elektron akan melengkapi kulit terluarnya hingga penuh.',
        'Aturan praktis: atom dengan 1 sampai 3 elektron valensi cenderung melepas elektron (menjadi kation). Atom dengan 5 sampai 7 elektron valensi cenderung menerima elektron (menjadi anion). Atom dengan 4 elektron valensi, seperti C dan Si, umumnya menggunakan elektron bersama sehingga tidak dibahas di sini.',
        'Atom memilih jalan yang "lebih ringan". Contoh Na (2, 8, 1): melepas 1 elektron jauh lebih mudah daripada menerima 7 elektron, jadi Na melepas elektron.',
        'Contoh Cl (2, 8, 7): menerima 1 elektron jauh lebih mudah daripada melepas 7 elektron, jadi Cl menerima elektron.',
        'Contoh O (2, 6): menerima 2 elektron lebih mudah daripada melepas 6 elektron, jadi O menerima elektron.',
        'Contoh Mg (2, 8, 2): melepas 2 elektron lebih mudah daripada menerima 6 elektron, jadi Mg melepas elektron.',

        // ===== 7 =====
        '7. Mengapa Logam Melepas dan Nonlogam Menerima Elektron',
        'Energi ionisasi adalah energi yang diperlukan untuk melepaskan elektron dari atom. Semakin kecil energi ionisasi, semakin mudah atom melepas elektronnya. Logam, seperti Na, Mg, dan Al, memiliki energi ionisasi yang relatif rendah, sehingga mudah membentuk kation.',
        'Afinitas elektron menggambarkan kecenderungan atom menerima elektron. Keelektronegatifan menggambarkan seberapa kuat atom menarik elektron. Nonlogam, seperti F, Cl, O, dan S, memiliki afinitas elektron dan keelektronegatifan yang relatif tinggi, sehingga mudah membentuk anion.',
        'Analogi sederhana: bayangkan elektron valensi sebagai barang yang dijaga. Pada logam, "penjaganya" lemah sehingga barang mudah diambil. Pada nonlogam, "penariknya" kuat sehingga mudah menarik barang dari pihak lain. Ketika logam bertemu nonlogam, elektron berpindah dengan mudah.',
        'Perlu dicatat, atom tidak "ingin" atau "mau" sesuatu. Kecenderungan ini muncul karena susunan dengan kulit penuh memiliki energi lebih rendah, dan sistem alam cenderung menuju keadaan berenergi rendah.',

        // ===== 8 =====
        '8. Pengantar Ion: Hasil dari Atom yang Mencapai Kestabilan',
        'Ion adalah atom atau kelompok atom yang bermuatan listrik. Kation adalah ion bermuatan positif (atom yang melepas elektron). Anion adalah ion bermuatan negatif (atom yang menerima elektron).',
        'Yang berpindah hanya elektron. Jumlah proton di inti tidak berubah, sehingga identitas unsur tetap sama. Hanya jumlah elektronnya yang berubah, sehingga atom menjadi bermuatan.',
        'Contoh Na → Na⁺: Na memiliki 11 proton dan 11 elektron. Pada ion Na⁺, protonnya tetap 11, tetapi elektronnya tinggal 10. Muatannya (+11) + (−10) = +1.',
        'Contoh Cl → Cl⁻: Cl memiliki 17 proton dan 17 elektron. Pada ion Cl⁻, protonnya tetap 17, tetapi elektronnya menjadi 18. Muatannya (+17) + (−18) = −1.',
        'Ion monoatomik adalah ion yang terdiri atas satu atom, misalnya Na⁺ dan Cl⁻. Ion poliatomik adalah ion yang terdiri atas beberapa atom dan bermuatan secara keseluruhan, misalnya NH₄⁺ dan SO₄²⁻. Ion poliatomik dibahas lebih lanjut pada submateri lain.',
        'Proses pembentukan kation dan anion secara lengkap, perubahan ukuran ion, serta persamaan reaksinya akan dibahas pada submateri berikutnya (proses pembentukan ikatan ion).',

        // ===== 9 =====
        '9. Kesalahan Konsep yang Sering Terjadi',
        'Kesalahan 1: "Proton ikut berpindah saat terbentuk ion." Yang berpindah hanya elektron. Jumlah proton tetap, sehingga unsurnya tidak berubah.',
        'Kesalahan 2: "Atom berikatan karena ingin berbagi atau ingin bahagia." Atom tidak punya keinginan. Atom berubah karena susunan elektron yang penuh berenergi lebih rendah, sehingga lebih stabil.',
        'Kesalahan 3: "Semua atom harus memiliki 8 elektron valensi." Tidak benar. Atom kecil seperti H, Li, dan Be mengikuti duplet (2 elektron). Oktet juga memiliki pengecualian, dan logam transisi tidak selalu mengikutinya.',
        'Kesalahan 4: "Gas mulia tidak punya elektron valensi." Gas mulia punya elektron valensi (He = 2, lainnya = 8). Kulit valensinya hanya sudah penuh.',
        'Kesalahan 5: "Jumlah elektron valensi sama dengan nomor atom." Tidak benar. Elektron valensi hanya elektron pada kulit terluar, misalnya Na bernomor atom 11 tetapi elektron valensinya 1.',

        // ===== 10 =====
        '10. Latihan Singkat dan Pembahasan',
        'Soal 1: Tuliskan konfigurasi elektron atom Mg (nomor atom 12) dan tentukan elektron valensinya.',
        'Pembahasan: Mg memiliki 12 elektron. Kulit K = 2, kulit L = 8, sisa 2 pada kulit M. Konfigurasinya 2, 8, 2 dan elektron valensinya 2.',
        'Soal 2: Tentukan elektron valensi atom S (nomor atom 16) dan golongannya.',
        'Pembahasan: S berkonfigurasi 2, 8, 6, sehingga elektron valensinya 6. Dengan 6 elektron valensi, S berada pada golongan VIA.',
        'Soal 3: Apakah atom Al (nomor atom 13) cenderung melepas atau menerima elektron? Jelaskan.',
        'Pembahasan: Al berkonfigurasi 2, 8, 3 dengan 3 elektron valensi. Melepas 3 elektron lebih mudah daripada menerima 5 elektron, sehingga Al cenderung melepas elektron dan membentuk kation.',
        'Soal 4: Apakah atom O (nomor atom 8) cenderung melepas atau menerima elektron? Jelaskan.',
        'Pembahasan: O berkonfigurasi 2, 6 dengan 6 elektron valensi. Menerima 2 elektron lebih mudah daripada melepas 6 elektron, sehingga O cenderung menerima elektron dan membentuk anion.',
        'Soal 5: Mengapa He hanya memerlukan 2 elektron valensi agar stabil, sedangkan Ne memerlukan 8?',
        'Pembahasan: Kulit K (kulit pertama) hanya dapat menampung maksimal 2 elektron, sehingga He yang memiliki 2 elektron sudah penuh. Ne memiliki kulit terluar kulit L yang kapasitas stabilnya 8 elektron.',
        'Soal 6: Hitung jumlah proton dan elektron pada ion Na⁺ (nomor atom 11).',
        'Pembahasan: Jumlah proton sama dengan nomor atom, yaitu 11. Atom Na netral memiliki 11 elektron. Karena Na⁺ kehilangan 1 elektron, jumlah elektronnya 10.',
        'Soal 7: Hitung jumlah proton dan elektron pada ion Cl⁻ (nomor atom 17), lalu tentukan konfigurasi elektronnya.',
        'Pembahasan: Proton tetap 17. Atom Cl netral memiliki 17 elektron, dan Cl⁻ menerima 1 elektron sehingga elektronnya 18. Konfigurasinya 2, 8, 8, sama dengan argon.',

        // ===== KESIMPULAN =====
        'Kesimpulan',
        'Atom tersusun dari proton, neutron, dan elektron. Elektron tersusun pada kulit-kulit atom, dan elektron pada kulit terluar disebut elektron valensi. Gas mulia sangat stabil karena kulit terluarnya penuh (duplet untuk He, oktet untuk yang lain), dan atom-atom lain cenderung mencapai susunan seperti itu.',
        'Atom dengan elektron valensi sedikit (1 sampai 3) cenderung melepas elektron, sedangkan atom dengan elektron valensi banyak (5 sampai 7) cenderung menerima elektron. Atom yang melepas atau menerima elektron berubah menjadi ion, dengan jumlah proton yang tetap. Konsep inilah yang menjadi dasar terbentuknya ikatan ionik.'
      ],
      keyPoints: [
        'Atom terdiri atas proton (+), neutron (netral), dan elektron (−); proton dan neutron berada di inti atom.',
        'Nomor atom sama dengan jumlah proton, dan atom netral memiliki jumlah proton sama dengan jumlah elektron.',
        'Konfigurasi elektron adalah susunan elektron pada kulit atom, misalnya Na = 2, 8, 1.',
        'Elektron valensi adalah elektron pada kulit terluar yang berperan dalam pembentukan ikatan.',
        'Elektron valensi unsur golongan utama dapat ditentukan dari nomor golongannya (IA = 1, IIA = 2, VIA = 6, VIIA = 7).',
        'Gas mulia sangat stabil karena kulit terluarnya penuh (He = 2 elektron, lainnya = 8 elektron).',
        'Aturan duplet berlaku untuk atom kecil (H, Li, Be), sedangkan aturan oktet berlaku untuk banyak unsur periode 2 dan 3.',
        'Atom cenderung mencapai konfigurasi gas mulia, dan oktet bukan aturan mutlak.',
        'Atom dengan 1 sampai 3 elektron valensi cenderung melepas elektron, sedangkan atom dengan 5 sampai 7 elektron valensi cenderung menerima elektron.',
        'Logam memiliki energi ionisasi rendah, sedangkan nonlogam memiliki afinitas elektron dan keelektronegatifan tinggi.',
        'Kation terbentuk saat atom melepas elektron, sedangkan anion terbentuk saat atom menerima elektron.',
        'Saat ion terbentuk yang berpindah hanya elektron; jumlah proton tetap sehingga identitas unsur tidak berubah.'
      ],
      examples: [
        'Li (3): konfigurasi 2, 1; elektron valensi 1; cenderung melepas elektron; membentuk Li⁺.',
        'Na (11): konfigurasi 2, 8, 1; elektron valensi 1; cenderung melepas elektron; membentuk Na⁺.',
        'K (19): konfigurasi 2, 8, 8, 1; elektron valensi 1; cenderung melepas elektron; membentuk K⁺.',
        'Mg (12): konfigurasi 2, 8, 2; elektron valensi 2; cenderung melepas elektron; membentuk Mg²⁺.',
        'Ca (20): konfigurasi 2, 8, 8, 2; elektron valensi 2; cenderung melepas elektron; membentuk Ca²⁺.',
        'Al (13): konfigurasi 2, 8, 3; elektron valensi 3; cenderung melepas elektron; membentuk Al³⁺.',
        'O (8): konfigurasi 2, 6; elektron valensi 6; cenderung menerima elektron; membentuk O²⁻.',
        'S (16): konfigurasi 2, 8, 6; elektron valensi 6; cenderung menerima elektron; membentuk S²⁻.',
        'F (9): konfigurasi 2, 7; elektron valensi 7; cenderung menerima elektron; membentuk F⁻.',
        'Cl (17): konfigurasi 2, 8, 7; elektron valensi 7; cenderung menerima elektron; membentuk Cl⁻.'
      ],
      illustrationType: 'lewis'
    },{
      // Penanggung jawab: Farrel Firmansyah Handoko
      id: 'sub-2-2',
      title: 'Proses Pembentukan Ikatan Ion',
      content: [
        // ===== PEMANTIK =====
        // TODO: pasang gambar/video pemantik di sini (lihat saran media di catatan).
        // https://www.youtube.com/watch?v=oZdQJi-UwYs
        'Amati dulu demonstrasi berikut (video atau gambar pemantik): logam natrium yang lunak dan berbahaya dimasukkan ke dalam gas klorin yang beracun. Terjadi reaksi hebat dengan nyala terang, lalu hasilnya adalah serbuk putih yang tidak lain adalah garam dapur. Catatan keselamatan: percobaan ini hanya boleh dilakukan oleh ahli di laboratorium khusus, jangan pernah mencobanya sendiri.',
        'Pertanyaan pemantik: bagaimana dua zat yang sama-sama berbahaya bisa menghasilkan zat yang aman kita makan? Apa yang sebenarnya terjadi pada atom-atom natrium dan klorin selama reaksi itu?',
        'Jawabannya ada pada perpindahan elektron. Pada submateri sebelumnya kamu sudah tahu bahwa atom cenderung mencapai konfigurasi gas mulia. Sekarang kita lihat langkah demi langkah bagaimana hal itu menghasilkan ikatan ionik.',

        // ===== 1 =====
        '1. Gambaran Umum Pembentukan Ikatan Ionik',
        'Ikatan ionik adalah ikatan kimia yang terbentuk karena tarikan elektrostatik antara kation (ion positif) dan anion (ion negatif). Dalam model dasar, ikatan ini terbentuk ketika atom logam memberikan elektron kepada atom nonlogam.',
        'Pembentukannya dapat dipahami melalui empat tahap. Tahap 1: atom logam melepaskan elektron valensi dan menjadi kation. Tahap 2: atom nonlogam menerima elektron tersebut dan menjadi anion. Tahap 3: kation dan anion saling tarik secara elektrostatik. Tahap 4: ion-ion tersusun teratur membentuk kisi kristal.',
        'Jumlah elektron yang dilepas logam harus sama dengan jumlah elektron yang diterima nonlogam, karena elektron tidak hilang begitu saja.',

        // ===== 2 =====
        '2. Pembentukan Kation',
        'Kation terbentuk ketika atom kehilangan satu atau lebih elektron valensi. Jumlah proton tidak berubah, tetapi elektron berkurang sehingga muatannya menjadi positif.',
        'Pembentukan Na⁺: Na → Na⁺ + e⁻. Konfigurasi Na (2, 8, 1) menjadi Na⁺ (2, 8), sama dengan neon.',
        'Pembentukan Mg²⁺: Mg → Mg²⁺ + 2e⁻. Konfigurasi Mg (2, 8, 2) menjadi Mg²⁺ (2, 8), sama dengan neon.',
        'Pembentukan Al³⁺: Al → Al³⁺ + 3e⁻. Konfigurasi Al (2, 8, 3) menjadi Al³⁺ (2, 8), sama dengan neon.',
        'Pembentukan K⁺ dan Ca²⁺: K (2, 8, 8, 1) menjadi K⁺ (2, 8, 8), dan Ca (2, 8, 8, 2) menjadi Ca²⁺ (2, 8, 8). Keduanya sama dengan argon.',
        'Pola yang bisa kamu hafal: logam golongan IA membentuk kation 1+, golongan IIA membentuk kation 2+, dan aluminium (golongan IIIA) membentuk kation 3+. Muatan kation sama dengan jumlah elektron yang dilepas.',
        'Ukuran kation selalu lebih kecil daripada atom asalnya. Penyebabnya, elektron berkurang (pada Na dan Mg, seluruh kulit terluar hilang) sementara jumlah proton tetap, sehingga inti menarik elektron yang tersisa lebih kuat.',

        // ===== 3 =====
        '3. Pembentukan Anion',
        'Anion terbentuk ketika atom menerima satu atau lebih elektron. Jumlah proton tetap, tetapi elektron bertambah sehingga muatannya menjadi negatif. Nama anion dari unsur biasanya berakhiran "-ida".',
        'Pembentukan F⁻: F + e⁻ → F⁻. Konfigurasi F (2, 7) menjadi F⁻ (2, 8), sama dengan neon.',
        'Pembentukan Cl⁻: Cl + e⁻ → Cl⁻. Konfigurasi Cl (2, 8, 7) menjadi Cl⁻ (2, 8, 8), sama dengan argon.',
        'Pembentukan O²⁻: O + 2e⁻ → O²⁻. Konfigurasi O (2, 6) menjadi O²⁻ (2, 8), sama dengan neon.',
        'Pembentukan S²⁻: S + 2e⁻ → S²⁻. Konfigurasi S (2, 8, 6) menjadi S²⁻ (2, 8, 8), sama dengan argon.',
        'Pola yang bisa kamu hafal: golongan VIIA membentuk anion 1−, dan golongan VIA membentuk anion 2−. Muatan anion sama dengan 8 dikurangi jumlah elektron valensi.',
        'Ukuran anion selalu lebih besar daripada atom asalnya. Penyebabnya, elektron bertambah sementara jumlah proton tetap, sehingga tolakan antarelektron meningkat dan awan elektron mengembang.',

        // ===== 4 =====
        '4. Ion Isoelektronik',
        'Ion-ion atau atom yang memiliki jumlah dan susunan elektron yang sama disebut isoelektronik. Contohnya Na⁺, Mg²⁺, Al³⁺, F⁻, dan O²⁻. Semuanya memiliki 10 elektron dengan konfigurasi 2, 8, sama dengan atom neon.',
        'Meskipun elektronnya sama, ukuran ion-ion ini berbeda karena jumlah protonnya berbeda. Makin banyak proton, makin kuat inti menarik elektron, sehingga ion makin kecil. Urutan ukuran dari terbesar ke terkecil: O²⁻ > F⁻ > Na⁺ > Mg²⁺ > Al³⁺.',

        // ===== 5 =====
        '5. Pembentukan Natrium Klorida (NaCl)',
        'Natrium (2, 8, 1) memiliki 1 elektron valensi, sedangkan klorin (2, 8, 7) memiliki 7 elektron valensi.',
        'Langkah 1, natrium melepas 1 elektron: Na → Na⁺ + e⁻.',
        'Langkah 2, klorin menerima 1 elektron: Cl + e⁻ → Cl⁻.',
        'Langkah 3, kedua ion saling tarik: Na⁺ + Cl⁻ → NaCl. Perbandingan Na⁺ : Cl⁻ adalah 1 : 1 dan muatan totalnya nol.',
        'Persamaan reaksi dari unsurnya: 2Na + Cl₂ → 2NaCl. Gas klorin berupa molekul dua atom (Cl₂), sehingga persamaannya ditulis demikian. Reaksi ini melepaskan banyak energi dalam bentuk panas dan cahaya, sesuai nyala terang pada video pemantik.',

        // ===== 6 =====
        '6. Pembentukan Magnesium Klorida (MgCl₂)',
        'Magnesium (2, 8, 2) memiliki 2 elektron valensi, sedangkan setiap atom klorin hanya mampu menerima 1 elektron.',
        'Mg → Mg²⁺ + 2e⁻. Dua atom Cl masing-masing menerima 1 elektron: 2Cl + 2e⁻ → 2Cl⁻.',
        'Karena 1 atom Mg melepas 2 elektron dan tiap Cl hanya menerima 1, diperlukan 2 atom Cl. Hasilnya: Mg²⁺ + 2Cl⁻ → MgCl₂.',
        'Persamaan reaksi dari unsurnya: Mg + Cl₂ → MgCl₂. Muatan total netral karena (+2) + 2 × (−1) = 0.',

        // ===== 7 =====
        '7. Pembentukan Magnesium Oksida (MgO)',
        'Magnesium (2, 8, 2) melepas 2 elektron menjadi Mg²⁺, sedangkan oksigen (2, 6) menerima 2 elektron menjadi O²⁻. Jumlah elektron yang dilepas dan diterima sudah sama, sehingga perbandingannya 1 : 1.',
        'Mg → Mg²⁺ + 2e⁻ dan O + 2e⁻ → O²⁻, sehingga Mg²⁺ + O²⁻ → MgO.',
        'Persamaan reaksi dari unsurnya: 2Mg + O₂ → 2MgO. Pita magnesium yang terbakar dengan cahaya putih menyilaukan adalah contoh reaksi ini.',

        // ===== 8 =====
        '8. Pembentukan Aluminium Oksida (Al₂O₃)',
        'Aluminium (2, 8, 3) melepas 3 elektron, sedangkan oksigen (2, 6) menerima 2 elektron. Agar jumlah elektron yang dilepas sama dengan yang diterima, kita cari kelipatan persekutuan terkecil dari 3 dan 2, yaitu 6.',
        'Diperlukan 2 atom Al (melepas 6 elektron) dan 3 atom O (menerima 6 elektron). 2Al → 2Al³⁺ + 6e⁻ dan 3O + 6e⁻ → 3O²⁻.',
        'Hasilnya: 2Al³⁺ + 3O²⁻ → Al₂O₃. Muatan total netral karena 2 × (+3) + 3 × (−2) = 0.',
        'Persamaan reaksi dari unsurnya: 4Al + 3O₂ → 2Al₂O₃.',

        // ===== 9 =====
        '9. Aspek Energi dalam Pembentukan Ikatan Ionik',
        'Melepaskan elektron dari atom memerlukan energi (energi ionisasi). Menambahkan elektron pada atom nonlogam ada yang melepas energi dan ada yang memerlukan energi, bergantung pada jenis ionnya. Jadi, perpindahan elektron saja sebenarnya tidak selalu menguntungkan secara energi.',
        'Yang membuat pembentukan senyawa ionik berlangsung adalah pelepasan energi yang sangat besar ketika ion positif dan negatif saling tarik dan tersusun dalam kisi kristal. Energi ini disebut energi kisi dan dibahas pada submateri struktur kristal ionik.',
        'Dengan kata lain, senyawa ionik menjadi stabil bukan karena satu atom "puas", tetapi karena keseluruhan sistem ion dalam kisi memiliki energi yang lebih rendah daripada atom-atom yang terpisah.',

        // ===== 10 =====
        '10. Kesalahan Konsep yang Sering Terjadi',
        'Kesalahan 1: "Atom logam dan nonlogam berbagi elektron pada ikatan ionik." Pada ikatan ionik elektron berpindah, bukan dipakai bersama.',
        'Kesalahan 2: "Yang berpindah adalah proton atau neutron." Yang berpindah hanya elektron.',
        'Kesalahan 3: "Ikatan ionik hanya terjadi antara satu kation dan satu anion." Tarikan elektrostatik bekerja ke segala arah, sehingga terbentuk kisi kristal besar, bukan pasangan ion tunggal.',
        'Kesalahan 4: "Atom yang menerima elektron menjadi lebih kecil." Justru anion lebih besar daripada atom asalnya, sedangkan kation lebih kecil.',
        'Kesalahan 5: "Muatan kation selalu sama dengan nomor atom." Tidak benar. Muatan kation sama dengan jumlah elektron yang dilepas.',
        'Kesalahan 6: "Atom berpindah elektron karena atom itu ingin stabil." Atom tidak punya keinginan. Susunan ion dalam kisi berenergi lebih rendah, sehingga proses itu berlangsung.',

        // ===== 11 =====
        '11. Latihan Singkat dan Pembahasan',
        'Soal 1: Tuliskan proses pembentukan ion dari atom K (nomor atom 19) dan Br (golongan VIIA), lalu tentukan perbandingan ion dalam senyawanya.',
        'Pembahasan: K (2, 8, 8, 1) melepas 1 elektron menjadi K⁺. Br memiliki 7 elektron valensi sehingga menerima 1 elektron menjadi Br⁻. Perbandingan K⁺ : Br⁻ = 1 : 1, senyawanya KBr.',
        'Soal 2: Mengapa pembentukan MgCl₂ memerlukan 2 atom klorin untuk 1 atom magnesium?',
        'Pembahasan: Mg melepas 2 elektron, sedangkan tiap atom Cl hanya menerima 1 elektron. Agar semua elektron tertampung, diperlukan 2 atom Cl.',
        'Soal 3: Tuliskan pembentukan ion dari atom Ca (nomor atom 20) dan atom O (nomor atom 8), lalu tentukan perbandingan ionnya.',
        'Pembahasan: Ca melepas 2 elektron menjadi Ca²⁺ (2, 8, 8). O menerima 2 elektron menjadi O²⁻ (2, 8). Jumlah elektron sudah sama, perbandingannya 1 : 1, senyawanya CaO.',
        'Soal 4: Mengapa pembentukan Al₂O₃ memerlukan 2 atom Al dan 3 atom O?',
        'Pembahasan: Al melepas 3 elektron dan O menerima 2 elektron. Kelipatan persekutuan terkecilnya 6, sehingga diperlukan 2 atom Al (6 elektron dilepas) dan 3 atom O (6 elektron diterima).',
        'Soal 5: Urutkan ukuran ion O²⁻, F⁻, Na⁺, dan Mg²⁺ dari yang terbesar. Jelaskan.',
        'Pembahasan: Urutannya O²⁻ > F⁻ > Na⁺ > Mg²⁺. Keempatnya isoelektronik (10 elektron), tetapi jumlah proton makin banyak (8, 9, 11, 12), sehingga tarikan inti makin kuat dan ion makin kecil.',
        'Soal 6: Mengapa ukuran Na⁺ lebih kecil daripada atom Na, sedangkan Cl⁻ lebih besar daripada atom Cl?',
        'Pembahasan: Na melepas elektron, bahkan seluruh kulit terluarnya hilang, sedangkan protonnya tetap sehingga elektron tersisa tertarik lebih kuat. Cl menerima elektron sehingga tolakan antarelektron bertambah dan awan elektron mengembang.',

        // ===== KESIMPULAN =====
        'Kesimpulan',
        'Ikatan ionik terbentuk melalui perpindahan elektron dari atom logam ke atom nonlogam. Atom logam melepas elektron menjadi kation yang lebih kecil dari atom asalnya, sedangkan atom nonlogam menerima elektron menjadi anion yang lebih besar dari atom asalnya. Jumlah elektron yang dilepas harus sama dengan jumlah elektron yang diterima.',
        'Kation dan anion kemudian saling tarik secara elektrostatik dan tersusun dalam kisi kristal. Pembentukan kisi inilah yang melepaskan energi besar dan membuat senyawa ionik stabil.'
      ],
      keyPoints: [
        'Ikatan ionik terbentuk melalui perpindahan elektron dari atom logam ke atom nonlogam.',
        'Pembentukannya melalui empat tahap: pelepasan elektron, penerimaan elektron, tarik-menarik ion, dan penyusunan kisi kristal.',
        'Atom logam melepas elektron valensi dan membentuk kation; muatan kation sama dengan jumlah elektron yang dilepas.',
        'Atom nonlogam menerima elektron dan membentuk anion; muatan anion sama dengan jumlah elektron yang diterima.',
        'Jumlah elektron yang dilepas logam harus sama dengan jumlah elektron yang diterima nonlogam.',
        'Kation lebih kecil daripada atom asalnya, sedangkan anion lebih besar daripada atom asalnya.',
        'Na⁺, Mg²⁺, Al³⁺, F⁻, dan O²⁻ bersifat isoelektronik dengan neon (konfigurasi 2, 8).',
        'Pada ion isoelektronik, makin banyak proton, makin kecil ukuran ion.',
        'NaCl terbentuk dari Na⁺ dan Cl⁻ dengan perbandingan 1 : 1; MgCl₂ dari Mg²⁺ dan 2Cl⁻.',
        'Al₂O₃ terbentuk dari 2Al³⁺ dan 3O²⁻ karena kelipatan persekutuan terkecil elektron adalah 6.',
        'Perpindahan elektron saja tidak selalu melepas energi; yang menstabilkan senyawa ionik adalah energi kisi saat kristal terbentuk.',
        'Pada ikatan ionik elektron berpindah, bukan dipakai bersama.'
      ],
      examples: [
        'NaCl: Na melepas 1 elektron menjadi Na⁺, Cl menerima 1 elektron menjadi Cl⁻; perbandingan 1 : 1. Persamaan: 2Na + Cl₂ → 2NaCl.',
        'KBr: K melepas 1 elektron menjadi K⁺, Br menerima 1 elektron menjadi Br⁻; perbandingan 1 : 1.',
        'MgCl₂: Mg melepas 2 elektron menjadi Mg²⁺, 2 atom Cl masing-masing menerima 1 elektron. Persamaan: Mg + Cl₂ → MgCl₂.',
        'CaF₂: Ca melepas 2 elektron menjadi Ca²⁺, 2 atom F masing-masing menerima 1 elektron menjadi F⁻.',
        'MgO: Mg melepas 2 elektron menjadi Mg²⁺, O menerima 2 elektron menjadi O²⁻. Persamaan: 2Mg + O₂ → 2MgO.',
        'CaO: Ca melepas 2 elektron menjadi Ca²⁺, O menerima 2 elektron menjadi O²⁻; perbandingan 1 : 1.',
        'Na₂O: 2 atom Na masing-masing melepas 1 elektron, 1 atom O menerima 2 elektron.',
        'Al₂O₃: 2 atom Al melepas total 6 elektron, 3 atom O menerima total 6 elektron. Persamaan: 4Al + 3O₂ → 2Al₂O₃.',
        'AlCl₃: Al melepas 3 elektron menjadi Al³⁺, 3 atom Cl masing-masing menerima 1 elektron.',
        'K₂S: 2 atom K masing-masing melepas 1 elektron, 1 atom S menerima 2 elektron menjadi S²⁻.'
      ],
      illustrationType: 'lewis'
    },{
      // Penanggung jawab: Farrel Firmansyah Handoko
      id: 'sub-2-3',
      title: 'Penulisan Rumus Kimia & Struktur Lewis',
      content: [
        // ===== PENDAHULUAN =====
        'Para ahli kimia memakai "bahasa" khusus untuk menggambarkan zat: simbol, rumus, dan gambar titik elektron. Dengan bahasa ini, satu baris tulisan seperti Al₂O₃ langsung memberi tahu kita ion apa saja yang ada dan berapa perbandingannya.',
        'Pada submateri ini kamu akan belajar tiga keterampilan utama: menggambar struktur Lewis, menulis rumus senyawa ionik dengan metode silang muatan, dan memberi nama senyawa ionik.',

        // ===== 1 =====
        '1. Struktur Lewis Atom',
        'Struktur Lewis (lambang titik elektron) adalah cara menggambarkan elektron valensi menggunakan titik di sekitar lambang unsur. Setiap titik mewakili 1 elektron valensi.',
        'Aturan menggambarnya: letakkan titik di empat sisi lambang unsur (atas, bawah, kiri, kanan). Isi satu titik pada tiap sisi lebih dulu, baru setelah keempat sisi terisi, mulai memasangkan titik.',
        'Na memiliki 1 titik (1 elektron valensi).',
        'Mg memiliki 2 titik (2 elektron valensi).',
        'Al memiliki 3 titik (3 elektron valensi).',
        'O memiliki 6 titik: 2 pasang dan 2 titik tunggal.',
        'Cl memiliki 7 titik: 3 pasang dan 1 titik tunggal.',
        'Jumlah titik selalu sama dengan jumlah elektron valensi, yang dapat kamu lihat dari konfigurasi elektron atau nomor golongan.',

        // ===== 2 =====
        '2. Struktur Lewis Ion',
        'Kation (untuk logam golongan utama yang melepas seluruh elektron valensinya) ditulis tanpa titik elektron valensi, hanya lambang unsur dengan muatannya. Contoh: Na⁺, Mg²⁺, Al³⁺. Alasannya, kulit valensi yang lama sudah hilang dan kulit di bawahnya yang penuh menjadi kulit terluar.',
        'Anion ditulis dengan 8 titik (4 pasang) di sekeliling lambang unsur, diletakkan dalam tanda kurung siku, dan muatannya ditulis di pojok kanan atas kurung. Contoh: [ :Cl: ]⁻ untuk ion klorida dan [ :O: ]²⁻ untuk ion oksida, masing-masing dengan 8 titik di sekitarnya (4 pasang).',
        'Kurung siku menunjukkan bahwa seluruh elektron di dalamnya milik ion tersebut, termasuk elektron yang baru diterima.',

        // ===== 3 =====
        '3. Struktur Lewis Senyawa Ionik',
        'Pada senyawa ionik, struktur Lewis menunjukkan perpindahan elektron dari logam ke nonlogam, lalu ion-ion yang dihasilkan. Panah melengkung boleh dipakai untuk menunjukkan arah perpindahan elektron.',
        'Contoh NaCl: sebelum reaksi, Na memiliki 1 titik dan Cl memiliki 7 titik. Elektron milik Na berpindah ke Cl. Sesudah reaksi, terbentuk Na⁺ (tanpa titik) dan [ :Cl: ]⁻ (8 titik), sehingga NaCl dituliskan sebagai Na⁺ [ :Cl: ]⁻.',
        'Contoh MgCl₂: Mg memberikan 1 elektron kepada Cl pertama dan 1 elektron kepada Cl kedua. Hasilnya: Mg²⁺ dan dua buah [ :Cl: ]⁻, masing-masing dengan 8 titik.',
        'Contoh Na₂O: dua atom Na masing-masing memberikan 1 elektron kepada 1 atom O. Hasilnya: 2 Na⁺ dan [ :O: ]²⁻ dengan 8 titik.',
        'Contoh CaO: Ca memiliki 2 titik dan O memiliki 6 titik. Dua elektron Ca berpindah ke O, sehingga terbentuk Ca²⁺ dan [ :O: ]²⁻ dengan 8 titik.',
        'Catatan penting: pada ikatan ionik tidak digambar garis ikatan atau pasangan elektron yang dipakai bersama, karena tidak ada elektron yang dipakai bersama. Yang digambarkan adalah perpindahan elektron dan ion-ion yang dihasilkan.',

        // ===== 4 =====
        '4. Aturan Kenetralan Senyawa Ionik',
        'Prinsip utama dalam menulis rumus senyawa ionik adalah senyawa harus netral secara listrik. Artinya, jumlah muatan positif sama dengan jumlah muatan negatif.',
        'Contoh: pada NaCl, (+1) + (−1) = 0. Pada MgCl₂, (+2) + 2 × (−1) = 0. Pada Al₂O₃, 2 × (+3) + 3 × (−2) = 0.',
        'Rumus senyawa ionik menyatakan perbandingan ion terkecil yang membuat muatan total nol. Rumus ini disebut rumus empiris atau unit rumus, bukan rumus molekul.',

        // ===== 5 =====
        '5. Metode Silang Muatan',
        'Silang muatan adalah cara cepat menentukan rumus senyawa ionik dari muatan ion-ionnya.',
        'Langkah 1: tulis kation dan muatannya.',
        'Langkah 2: tulis anion dan muatannya.',
        'Langkah 3: silangkan angka muatan. Angka muatan kation menjadi indeks anion, dan angka muatan anion menjadi indeks kation (tanda plus dan minus dihilangkan).',
        'Langkah 4: sederhanakan jika perbandingan indeks dapat disederhanakan, lalu hilangkan angka 1.',
        'Langkah 5: cek kenetralan, muatan total harus nol.',
        'Contoh 1, natrium oksida: Na⁺ dan O²⁻. Na mendapat indeks 2 dan O mendapat indeks 1. Rumusnya Na₂O. Cek: 2(+1) + 1(−2) = 0.',
        'Contoh 2, kalsium klorida: Ca²⁺ dan Cl⁻. Ca mendapat indeks 1 dan Cl mendapat indeks 2. Rumusnya CaCl₂. Cek: (+2) + 2(−1) = 0.',
        'Contoh 3, aluminium klorida: Al³⁺ dan Cl⁻. Rumusnya AlCl₃. Cek: (+3) + 3(−1) = 0.',
        'Contoh 4, aluminium oksida: Al³⁺ dan O²⁻. Al mendapat indeks 2 dan O mendapat indeks 3. Rumusnya Al₂O₃. Cek: 2(+3) + 3(−2) = 0.',
        'Contoh 5, magnesium oksida: Mg²⁺ dan O²⁻. Silang muatan menghasilkan Mg₂O₂, lalu disederhanakan menjadi MgO. Cek: (+2) + (−2) = 0.',
        'Contoh 6, kalium sulfida: K⁺ dan S²⁻. Rumusnya K₂S. Cek: 2(+1) + (−2) = 0.',

        // ===== 6 =====
        '6. Ion Poliatomik',
        'Ion poliatomik adalah kelompok dua atom atau lebih yang terikat dan bermuatan secara keseluruhan, serta berperilaku seperti satu ion. Atom-atom di dalamnya terikat kuat satu sama lain, sedangkan ion poliatomik itu sendiri berikatan ionik dengan ion lawannya.',
        'Ion poliatomik yang perlu kamu hafal:',
        'NH₄⁺ : ion amonium (muatan +1).',
        'OH⁻ : ion hidroksida (muatan −1).',
        'NO₃⁻ : ion nitrat (muatan −1).',
        'CN⁻ : ion sianida (muatan −1).',
        'HCO₃⁻ : ion bikarbonat atau hidrogen karbonat (muatan −1).',
        'SO₄²⁻ : ion sulfat (muatan −2).',
        'CO₃²⁻ : ion karbonat (muatan −2).',
        'PO₄³⁻ : ion fosfat (muatan −3).',
        'Aturan penulisan: jika ion poliatomik jumlahnya lebih dari satu dalam rumus, tulis dalam tanda kurung, lalu indeksnya di luar kurung. Contoh: Ca₃(PO₄)₂ dan Al₂(SO₄)₃. Jika hanya satu, tanda kurung tidak diperlukan (misalnya CaCO₃, Na₂SO₄).',
        'Contoh 1, aluminium sulfat: Al³⁺ dan SO₄²⁻. Silang muatan menghasilkan Al₂(SO₄)₃. Cek: 2(+3) + 3(−2) = 0.',
        'Contoh 2, amonium fosfat: NH₄⁺ dan PO₄³⁻. Silang muatan menghasilkan (NH₄)₃PO₄. Cek: 3(+1) + (−3) = 0.',
        'Contoh 3, kalsium hidroksida: Ca²⁺ dan OH⁻. Silang muatan menghasilkan Ca(OH)₂. Cek: (+2) + 2(−1) = 0.',
        'Perhatikan bahwa NH₄Cl tidak mengandung atom logam, tetapi tetap senyawa ionik karena NH₄⁺ bertindak sebagai kation. Jadi, "ikatan ionik selalu antara logam dan nonlogam" adalah penyederhanaan untuk tingkat dasar.',

        // ===== 7 =====
        '7. Tata Nama Senyawa Ionik',
        'Aturan dasar: sebutkan nama kation terlebih dahulu, lalu nama anion. Angka indeks tidak disebutkan dalam nama senyawa ionik.',
        'Untuk anion monoatomik, nama unsur diberi akhiran "-ida". Contoh: klorin menjadi klorida, oksigen menjadi oksida, sulfur menjadi sulfida, fluor menjadi fluorida, bromin menjadi bromida.',
        'Senyawa ionik biner (dua jenis unsur): NaCl = natrium klorida; KBr = kalium bromida; MgO = magnesium oksida; CaF₂ = kalsium fluorida; Al₂O₃ = aluminium oksida; Na₂S = natrium sulfida.',
        'Senyawa dengan ion poliatomik (nama ion poliatomik dipakai apa adanya): Na₂SO₄ = natrium sulfat; CaCO₃ = kalsium karbonat; NH₄Cl = amonium klorida; KNO₃ = kalium nitrat; NaOH = natrium hidroksida; Ca₃(PO₄)₂ = kalsium fosfat.',

        // ===== 8 =====
        '8. Logam dengan Muatan Ganda',
        'Beberapa logam, terutama logam transisi, dapat membentuk lebih dari satu jenis kation. Pada kasus ini, muatan kation ditulis dengan angka Romawi dalam kurung setelah nama logam.',
        'FeCl₂ = besi(II) klorida (ion Fe²⁺). FeCl₃ = besi(III) klorida (ion Fe³⁺).',
        'Cu₂O = tembaga(I) oksida (ion Cu⁺). CuO = tembaga(II) oksida (ion Cu²⁺).',
        'Cara menentukan muatan logam dari rumus: gunakan prinsip kenetralan. Pada FeCl₃, ada 3 ion Cl⁻ (total −3), sehingga satu ion Fe harus bermuatan +3 agar netral. Namanya besi(III) klorida.',
        'Contoh lain: pada Fe₂O₃, ada 3 ion O²⁻ (total −6). Dua ion Fe harus menyumbang +6, sehingga tiap Fe bermuatan +3. Namanya besi(III) oksida.',
        'Catatan: ion logam transisi, seperti Fe²⁺, Fe³⁺, dan Cu²⁺, tidak selalu memiliki konfigurasi elektron seperti gas mulia. Kecenderungan mencapai konfigurasi gas mulia berlaku baik untuk logam golongan utama, tetapi tidak selalu untuk logam transisi.',

        // ===== 9 =====
        '9. Kesalahan Konsep yang Sering Terjadi',
        'Kesalahan 1: lupa menyederhanakan indeks, misalnya menulis Mg₂O₂ padahal seharusnya MgO.',
        'Kesalahan 2: mengubah indeks di dalam ion poliatomik. Indeks di dalam ion (misalnya 4 pada SO₄) tidak boleh diubah untuk menyeimbangkan muatan; yang boleh hanya indeks di luar kurung.',
        'Kesalahan 3: lupa tanda kurung pada ion poliatomik yang jumlahnya lebih dari satu, misalnya menulis Ca₃PO₄₂ padahal seharusnya Ca₃(PO₄)₂.',
        'Kesalahan 4: menyebut angka indeks dalam nama senyawa, misalnya "dikalsium diklorida". Pada senyawa ionik, indeks tidak disebut.',
        'Kesalahan 5: menggambar garis ikatan atau pasangan elektron bersama pada struktur Lewis ionik. Pada ikatan ionik, elektron berpindah, bukan dipakai bersama.',
        'Kesalahan 6: menggambar anion tanpa kurung siku dan muatannya, atau menggambar kation dengan titik elektron valensi lama.',

        // ===== 10 =====
        '10. Latihan Singkat dan Pembahasan',
        'Soal 1: Gambarkan struktur Lewis pembentukan KF dari atom K (nomor atom 19) dan F (nomor atom 9).',
        'Pembahasan: K memiliki 1 elektron valensi (1 titik) dan F memiliki 7 elektron valensi (7 titik). Elektron K berpindah ke F. Hasilnya K⁺ (tanpa titik) dan [ :F: ]⁻ (8 titik dalam kurung siku). Rumusnya KF.',
        'Soal 2: Tentukan rumus dan nama senyawa ionik dari Mg²⁺ dan Cl⁻.',
        'Pembahasan: silang muatan menghasilkan MgCl₂. Cek: (+2) + 2(−1) = 0. Namanya magnesium klorida.',
        'Soal 3: Tentukan rumus senyawa dari Al³⁺ dan OH⁻.',
        'Pembahasan: silang muatan menghasilkan Al(OH)₃. OH adalah ion poliatomik sehingga ditulis dalam kurung. Cek: (+3) + 3(−1) = 0. Namanya aluminium hidroksida.',
        'Soal 4: Tentukan rumus kalsium fosfat dan buktikan netral.',
        'Pembahasan: Ca²⁺ dan PO₄³⁻. Silang muatan menghasilkan Ca₃(PO₄)₂. Cek: 3(+2) + 2(−3) = +6 − 6 = 0.',
        'Soal 5: Berilah nama senyawa Fe₂O₃ dan tentukan muatan ion besinya.',
        'Pembahasan: ada 3 ion O²⁻ (total −6), sehingga 2 ion Fe harus +6 sehingga tiap Fe bermuatan +3. Namanya besi(III) oksida.',
        'Soal 6: Tuliskan rumus tembaga(II) sulfat.',
        'Pembahasan: tembaga(II) berarti Cu²⁺, dan sulfat adalah SO₄²⁻. Muatan sama besar sehingga perbandingan 1 : 1, rumusnya CuSO₄. Cek: (+2) + (−2) = 0.',

        // ===== KESIMPULAN =====
        'Kesimpulan',
        'Struktur Lewis menggambarkan elektron valensi dengan titik. Pada senyawa ionik, struktur Lewis menunjukkan perpindahan elektron: kation ditulis tanpa titik valensi, sedangkan anion ditulis dengan 8 titik dalam kurung siku beserta muatannya. Tidak ada garis ikatan karena tidak ada elektron yang dipakai bersama.',
        'Rumus senyawa ionik ditentukan dengan silang muatan dan harus netral secara listrik. Ion poliatomik ditulis dalam kurung bila jumlahnya lebih dari satu. Nama senyawa menyebut kation terlebih dahulu, lalu anion, tanpa menyebut indeks, dan logam bermuatan ganda diberi angka Romawi.'
      ],
      keyPoints: [
        'Struktur Lewis menggambarkan elektron valensi dengan titik di sekitar lambang unsur.',
        'Titik diletakkan pada empat sisi, satu per sisi lebih dulu, baru dipasangkan.',
        'Kation golongan utama ditulis tanpa titik valensi, hanya lambang dan muatannya.',
        'Anion ditulis dengan 8 titik dalam kurung siku disertai muatannya.',
        'Pada ikatan ionik tidak ada garis ikatan karena elektron berpindah, bukan dipakai bersama.',
        'Senyawa ionik harus netral: jumlah muatan positif sama dengan jumlah muatan negatif.',
        'Metode silang muatan: angka muatan kation menjadi indeks anion, dan sebaliknya.',
        'Indeks disederhanakan jika memungkinkan, misalnya Mg₂O₂ menjadi MgO.',
        'Ion poliatomik ditulis dalam kurung jika jumlahnya lebih dari satu, misalnya Ca₃(PO₄)₂.',
        'Indeks di dalam ion poliatomik tidak boleh diubah.',
        'Nama senyawa ionik: nama kation diikuti nama anion, tanpa menyebut indeks.',
        'Logam bermuatan ganda diberi angka Romawi, misalnya besi(III) klorida untuk FeCl₃.'
      ],
      examples: [
        'NaCl (natrium klorida): Na⁺ dan Cl⁻, perbandingan 1 : 1.',
        'Na₂O (natrium oksida): 2 ion Na⁺ dan 1 ion O²⁻.',
        'MgO (magnesium oksida): Mg²⁺ dan O²⁻ disederhanakan dari Mg₂O₂.',
        'CaCl₂ (kalsium klorida): 1 ion Ca²⁺ dan 2 ion Cl⁻.',
        'Al₂O₃ (aluminium oksida): 2 ion Al³⁺ dan 3 ion O²⁻.',
        'Ca(OH)₂ (kalsium hidroksida): 1 ion Ca²⁺ dan 2 ion OH⁻.',
        'Al₂(SO₄)₃ (aluminium sulfat): 2 ion Al³⁺ dan 3 ion SO₄²⁻.',
        '(NH₄)₃PO₄ (amonium fosfat): 3 ion NH₄⁺ dan 1 ion PO₄³⁻.',
        'FeCl₃ (besi(III) klorida): 1 ion Fe³⁺ dan 3 ion Cl⁻.',
        'Cu₂O (tembaga(I) oksida): 2 ion Cu⁺ dan 1 ion O²⁻.'
      ],
      illustrationType: 'lewis'
    },{
      // Penanggung jawab: Farrel Firmansyah Handoko
      id: 'sub-2-4',
      title: 'Struktur Kristal Ionik',
      content: [
        // ===== PENDAHULUAN =====
        // TODO (opsional): pasang gambar kristal garam dapur di bawah lup/mikroskop dan model kisi NaCl.
        // https://physicsopenlab.org/wp-content/uploads/2018/01/saltCrystal.jpg
        'Ambil sebutir garam dapur dan amati dengan lup. Kamu akan melihat bentuk kubus kecil yang rapi dengan sisi-sisi rata. Bentuk teratur itu bukan kebetulan: ia mencerminkan susunan ion-ion yang sangat teratur di dalamnya.',
        'Pertanyaan pemantik: mengapa garam berbentuk kubus, bukan bulat atau tidak beraturan? Dan apakah ada "molekul NaCl" di dalam butiran itu? Pada submateri ini kamu akan menemukan jawabannya melalui struktur kristal ionik.',

        // ===== 1 =====
        '1. Mengapa Senyawa Ionik Membentuk Kisi Kristal?',
        'Gaya elektrostatik adalah gaya tarik-menarik antara muatan yang berlawanan dan gaya tolak-menolak antara muatan yang sejenis. Gaya ini menjadi "perekat" ikatan ionik.',
        'Tarikan antara kation dan anion tidak hanya bekerja pada satu pasangan ion tertentu, tetapi ke segala arah. Satu ion positif menarik semua ion negatif di sekitarnya, dan sebaliknya.',
        'Karena itu, ion-ion tidak berpasangan satu-satu seperti molekul, melainkan tersusun dalam pola tiga dimensi yang berulang, yang disebut kisi kristal atau kisi ionik.',
        'Susunan teratur ini membuat tarikan antara ion yang berlawanan muatan maksimal, sedangkan tolakan antara ion yang sejenis diminimalkan (ion sejenis ditempatkan berjauhan).',

        // ===== 2 =====
        '2. Struktur Kristal Natrium Klorida (NaCl)',
        'Pada kristal NaCl, setiap ion Na⁺ dikelilingi 6 ion Cl⁻, dan setiap ion Cl⁻ dikelilingi 6 ion Na⁺. Ion-ion ini tersusun berselang-seling dalam tiga arah (kiri-kanan, depan-belakang, atas-bawah).',
        'Susunan inilah yang menghasilkan bentuk kubus pada kristal garam yang dapat kamu lihat dengan mata atau lup.',
        'Bilangan koordinasi adalah jumlah ion lawan jenis yang mengelilingi satu ion secara langsung. Pada NaCl, bilangan koordinasi Na⁺ adalah 6 dan bilangan koordinasi Cl⁻ juga 6.',
        'Perbandingan ion keseluruhan dalam kristal NaCl tetap 1 : 1, karena setiap ion Na⁺ "dibagi" dengan ion Cl⁻ di sekelilingnya. Jumlah muatan positif dan negatif seimbang sehingga kristal netral.',

        // ===== 3 =====
        '3. Struktur Kristal Lain: Pengaruh Ukuran Ion',
        'Tidak semua kristal ionik memiliki susunan seperti NaCl. Susunan kisi dipengaruhi oleh perbandingan ukuran kation dan anion serta perbandingan jumlah ion.',
        'Contoh: pada kristal cesium klorida (CsCl), ion Cs⁺ lebih besar daripada Na⁺ sehingga dapat dikelilingi 8 ion Cl⁻ (bilangan koordinasi 8 : 8). Bentuk kisi NaCl dan CsCl berbeda walaupun perbandingan ionnya sama-sama 1 : 1.',
        'Pada senyawa dengan perbandingan ion tidak sama, seperti CaF₂ (1 : 2), bilangan koordinasi kedua ion juga tidak sama: setiap Ca²⁺ dikelilingi 8 ion F⁻, sedangkan setiap F⁻ dikelilingi 4 ion Ca²⁺.',
        'Untuk tingkat SMA, cukup pahami bahwa jumlah ion yang mengelilingi ion lain bergantung pada ukuran ion dan perbandingannya dalam rumus senyawa.',

        // ===== 4 =====
        '4. Unit Rumus: Mengapa Bukan Molekul?',
        'Karena kristal ionik adalah kisi raksasa yang tersusun dari ion-ion yang tak terhitung banyaknya, tidak ada "molekul NaCl" yang berdiri sendiri. Satu kristal garam dapur tidak tersusun dari pasangan Na-Cl, melainkan dari kisi ion Na⁺ dan Cl⁻ yang saling terkait ke segala arah.',
        'Unit rumus adalah perbandingan ion terkecil dalam senyawa ionik yang membuat senyawa netral secara listrik. Rumus kimia senyawa ionik (NaCl, MgCl₂, Al₂O₃) menyatakan unit rumus ini, bukan molekul.',
        'Contoh unit rumus: NaCl (1 Na⁺ : 1 Cl⁻), MgCl₂ (1 Mg²⁺ : 2 Cl⁻), Al₂O₃ (2 Al³⁺ : 3 O²⁻), CaCO₃ (1 Ca²⁺ : 1 CO₃²⁻).',
        'Satu butir garam yang terlihat mata mengandung jumlah unit rumus yang luar biasa banyak, jauh di luar yang bisa dibayangkan.',

        // ===== 5 =====
        '5. Hukum Coulomb: Faktor Penentu Kekuatan Tarikan',
        'Besar gaya tarik elektrostatik antara dua ion mengikuti hukum Coulomb, yang secara kualitatif menyatakan dua hal: (1) semakin besar muatan ion, semakin kuat tarikannya; (2) semakin kecil jarak antara pusat kedua ion, semakin kuat tarikannya.',
        'Dalam bentuk sederhana, gaya tarik sebanding dengan hasil kali muatan kedua ion dan berkurang cepat ketika jarak antarion bertambah. Kamu tidak perlu menghitungnya, cukup pahami arah pengaruhnya.',
        'Contoh perbandingan muatan: MgO (Mg²⁺ dan O²⁻) memiliki tarikan jauh lebih kuat daripada NaCl (Na⁺ dan Cl⁻), karena muatan ionnya lebih besar (2+ dan 2− dibanding 1+ dan 1−).',
        'Contoh perbandingan ukuran: LiF memiliki tarikan lebih kuat daripada CsI karena Li⁺ dan F⁻ jauh lebih kecil daripada Cs⁺ dan I⁻, sehingga jarak antarionnya lebih pendek.',

        // ===== 6 =====
        '6. Energi Kisi',
        'Energi kisi adalah energi yang diperlukan untuk memisahkan 1 mol senyawa ionik padat menjadi ion-ion gasnya yang saling berjauhan. Sebaliknya, energi yang sama dilepaskan ketika ion-ion gas bergabung membentuk kristal.',
        'Energi kisi menjadi ukuran kekuatan ikatan ionik dalam kristal. Semakin besar energi kisi, semakin kuat tarikan antarion, semakin sulit kristal dihancurkan, dan semakin tinggi titik lelehnya.',
        'Energi kisi dipengaruhi dua hal utama: besar muatan ion dan jarak antarion (yang bergantung pada ukuran ion). Muatan lebih besar dan ion lebih kecil menghasilkan energi kisi lebih besar.',
        'Gambaran nilai (pendekatan): energi kisi NaCl sekitar 790 kJ/mol, sedangkan MgO sekitar 3.800 kJ/mol. Nilai MgO jauh lebih besar karena muatan ionnya dua kali lipat.',
        'Contoh 1, perbandingan muatan: MgO memiliki energi kisi lebih besar daripada NaCl karena muatannya 2+ dan 2− (dibanding 1+ dan 1−).',
        'Contoh 2, perbandingan ukuran: NaF memiliki energi kisi lebih besar daripada NaI (muatan sama) karena F⁻ jauh lebih kecil daripada I⁻, sehingga jarak antarion di NaF lebih pendek.',
        'Hubungan dengan titik leleh: NaCl meleleh pada sekitar 801 °C, sedangkan MgO pada sekitar 2.852 °C. Perbedaan besar ini terutama disebabkan oleh energi kisi MgO yang jauh lebih besar.',

        // ===== 7 =====
        '7. Energi Kisi dan Kestabilan Senyawa Ionik',
        'Seperti dibahas pada submateri pembentukan ikatan ion, perpindahan elektron saja tidak selalu menguntungkan secara energi. Yang membuat senyawa ionik stabil adalah pelepasan energi besar saat ion-ion tersusun menjadi kisi kristal, yaitu energi kisi.',
        'Dengan kata lain, makin besar energi yang dilepas saat kisi terbentuk, makin stabil senyawa ionik tersebut dibandingkan atom-atom yang terpisah.',
        'Inilah sebabnya senyawa ionik hampir selalu berupa padatan kristal, bukan molekul tunggal: pembentukan kisi memberikan penurunan energi yang jauh lebih besar daripada pembentukan pasangan ion saja.',

        // ===== 8 =====
        '8. Hubungan Struktur Kristal dengan Sifat Senyawa Ionik',
        'Struktur kisi menjelaskan banyak sifat senyawa ionik, yang akan dibahas lebih rinci pada submateri berikutnya.',
        'Padat dan keras: ion-ion tersusun rapat dan terikat kuat.',
        'Titik leleh tinggi: diperlukan energi besar untuk memutus tarikan antarion (energi kisi besar).',
        'Rapuh: pukulan menggeser satu lapisan ion sehingga ion sejenis berhadapan dan saling tolak, lalu kristal retak atau pecah.',
        'Tidak menghantarkan listrik saat padat: ion terkunci pada posisi tetap dalam kisi.',

        // ===== 9 =====
        '9. Kesalahan Konsep yang Sering Terjadi',
        'Kesalahan 1: "Satu molekul NaCl." Senyawa ionik tidak membentuk molekul tunggal. NaCl adalah kisi raksasa ion Na⁺ dan Cl⁻, sehingga istilah yang tepat adalah unit rumus.',
        'Kesalahan 2: "Satu ion Na⁺ hanya terikat pada satu ion Cl⁻." Satu ion Na⁺ dikelilingi 6 ion Cl⁻ dalam kristal NaCl. Tarikan bekerja ke segala arah.',
        'Kesalahan 3: "Semua kristal ionik memiliki susunan seperti NaCl." Tidak benar. Susunan kisi bergantung pada ukuran dan perbandingan ion, misalnya CsCl dan CaF₂ memiliki susunan berbeda.',
        'Kesalahan 4: "Energi kisi adalah energi yang dilepas saat atom natrium melepas elektron." Energi kisi berkaitan dengan pemisahan atau penyusunan ion-ion pada kristal, bukan dengan pelepasan elektron.',
        'Kesalahan 5: "Senyawa ionik rapuh karena ikatannya lemah." Justru ikatannya kuat; kerapuhan terjadi karena lapisan ion yang bergeser menyebabkan tolakan antarion sejenis.',

        // ===== 10 =====
        '10. Latihan Singkat dan Pembahasan',
        'Soal 1: Berapa ion Cl⁻ yang mengelilingi satu ion Na⁺ dalam kristal NaCl?',
        'Pembahasan: 6 ion Cl⁻. Bilangan koordinasi Na⁺ dalam NaCl adalah 6.',
        'Soal 2: Mengapa NaCl tidak disebut molekul?',
        'Pembahasan: NaCl tersusun dari kisi raksasa ion Na⁺ dan Cl⁻ yang saling terikat ke segala arah, bukan dari pasangan Na-Cl yang berdiri sendiri. Karena itu, NaCl dinyatakan dengan unit rumus.',
        'Soal 3: Tentukan jumlah ion dalam satu unit rumus Al₂O₃.',
        'Pembahasan: Al₂O₃ mengandung 2 ion Al³⁺ dan 3 ion O²⁻, jadi 5 ion seluruhnya.',
        'Soal 4: Mana yang memiliki energi kisi lebih besar, NaCl atau MgO? Jelaskan.',
        'Pembahasan: MgO. Muatan ion pada MgO (2+ dan 2−) lebih besar daripada NaCl (1+ dan 1−), sehingga tarikan elektrostatik antarion lebih kuat.',
        'Soal 5: Mana yang energi kisinya lebih besar, NaF atau NaI? Jelaskan.',
        'Pembahasan: NaF. Muatan ionnya sama, tetapi F⁻ jauh lebih kecil daripada I⁻, sehingga jarak antarion lebih pendek dan tarikannya lebih kuat.',
        'Soal 6: Mengapa titik leleh MgO jauh lebih tinggi daripada NaCl?',
        'Pembahasan: Energi kisi MgO jauh lebih besar karena muatan ionnya lebih besar. Untuk melelehkan MgO diperlukan energi lebih banyak untuk memutus tarikan antarion.',

        // ===== KESIMPULAN =====
        'Kesimpulan',
        'Senyawa ionik tersusun dalam kisi kristal tiga dimensi, bukan molekul tunggal. Tarikan elektrostatik bekerja ke segala arah sehingga setiap ion dikelilingi ion lawan jenis. Pada NaCl, setiap ion dikelilingi 6 ion lawan jenis. Susunan kisi dapat berbeda pada senyawa lain karena ukuran dan perbandingan ion berbeda.',
        'Senyawa ionik dinyatakan dengan unit rumus yang netral secara listrik. Energi kisi menunjukkan kekuatan ikatan ionik dalam kristal dan makin besar jika muatan ion besar dan ukuran ion kecil. Energi kisi yang besar menjelaskan titik leleh tinggi dan kestabilan senyawa ionik.'
      ],
      keyPoints: [
        'Senyawa ionik membentuk kisi kristal tiga dimensi, bukan molekul tunggal.',
        'Gaya elektrostatik bekerja ke segala arah sehingga tiap ion dikelilingi ion lawan jenis.',
        'Pada kristal NaCl, tiap Na⁺ dikelilingi 6 Cl⁻ dan tiap Cl⁻ dikelilingi 6 Na⁺.',
        'Bilangan koordinasi adalah jumlah ion lawan jenis yang mengelilingi satu ion.',
        'Susunan kisi bergantung pada ukuran dan perbandingan ion (misalnya NaCl berbeda dari CsCl).',
        'Unit rumus adalah perbandingan ion terkecil yang membuat senyawa netral secara listrik.',
        'Senyawa ionik dinyatakan dengan unit rumus, bukan molekul.',
        'Tarikan antarion makin kuat jika muatan ion makin besar dan jarak antarion makin kecil.',
        'Energi kisi adalah energi untuk memisahkan 1 mol senyawa ionik padat menjadi ion-ion gasnya.',
        'Makin besar energi kisi, makin kuat ikatan ionik dan makin tinggi titik leleh.',
        'Energi kisi MgO jauh lebih besar daripada NaCl karena muatan ionnya lebih besar.',
        'Pelepasan energi kisi saat kristal terbentuk menjadi penyebab utama kestabilan senyawa ionik.'
      ],
      examples: [
        'NaCl: kisi dengan bilangan koordinasi 6 : 6; perbandingan ion 1 : 1; titik leleh sekitar 801 °C.',
        'CsCl: bilangan koordinasi 8 : 8 karena Cs⁺ lebih besar; perbandingan ion 1 : 1.',
        'MgO: Mg²⁺ dan O²⁻ (muatan 2+ dan 2−); energi kisi jauh lebih besar daripada NaCl; titik leleh sekitar 2.852 °C.',
        'CaF₂: 1 ion Ca²⁺ dan 2 ion F⁻; bilangan koordinasi Ca²⁺ = 8 dan F⁻ = 4.',
        'LiF: ion kecil sehingga jarak antarion pendek dan energi kisi besar.',
        'CsI: ion besar sehingga jarak antarion panjang dan energi kisi relatif kecil.',
        'NaF dibanding NaI: muatan sama, tetapi NaF memiliki energi kisi lebih besar karena F⁻ lebih kecil.',
        'Al₂O₃: 2 ion Al³⁺ dan 3 ion O²⁻; satu unit rumus mengandung 5 ion.',
        'CaCO₃: 1 ion Ca²⁺ dan 1 ion CO₃²⁻; satu unit rumus mengandung 2 ion.'
      ],
      illustrationType: 'lewis'
    },{
      // Penanggung jawab: Farrel Firmansyah Handoko
      id: 'sub-2-5',
      title: 'Sifat-sifat Senyawa Ion',
      content: [
        // ===== PENDAHULUAN =====
        // TODO (opsional): pasang gambar/video uji daya hantar listrik: padatan garam vs larutan garam.
        'Bayangkan percobaan sederhana: sebuah rangkaian lampu dihubungkan dengan dua elektroda. Ketika elektroda dicelupkan ke butiran garam kering, lampu tidak menyala. Namun ketika elektroda yang sama dicelupkan ke dalam larutan garam, lampu menyala. Garam yang sama, hasil yang berbeda.',
        'Pertanyaan pemantik: mengapa garam padat tidak menghantarkan listrik, tetapi larutannya bisa? Mengapa garam sulit meleleh, tetapi bisa pecah hanya dengan satu pukulan? Semua jawabannya kembali pada dua hal: adanya ion bermuatan dan tarikan elektrostatik yang kuat dalam kisi kristal.',

        // ===== 1 =====
        '1. Ringkasan Sifat Senyawa Ionik',
        'Semua sifat senyawa ionik dapat dijelaskan dari dua hal: adanya ion bermuatan, dan tarikan elektrostatik yang kuat di antara ion-ion dalam kisi kristal.',
        'Sifat utama senyawa ionik: (1) berwujud padat kristal pada suhu kamar; (2) titik leleh dan titik didih tinggi; (3) keras tetapi rapuh; (4) banyak yang larut dalam air; (5) menghantarkan listrik dalam bentuk lelehan dan larutan, tetapi tidak dalam bentuk padat.',

        // ===== 2 =====
        '2. Wujud Padat Kristal pada Suhu Kamar',
        'Tarikan antarion yang kuat membuat ion-ion tersusun rapat dan teratur dalam kisi kristal. Karena itu, senyawa ionik pada suhu kamar umumnya berupa padatan keras berbentuk kristal, bukan cairan atau gas.',
        'Contoh: NaCl, KBr, MgO, dan CaCO₃ semuanya berupa padatan pada suhu kamar.',

        // ===== 3 =====
        '3. Titik Leleh dan Titik Didih Tinggi',
        'Untuk melelehkan atau mendidihkan senyawa ionik, kita harus memutus tarikan antarion yang sangat kuat. Hal ini memerlukan energi yang besar, sehingga titik leleh dan titik didihnya tinggi.',
        'Contoh: NaCl meleleh pada sekitar 801 °C dan mendidih pada sekitar 1.413 °C. MgO meleleh pada sekitar 2.852 °C.',
        'Perbedaan titik leleh antarsenyawa ionik dijelaskan oleh energi kisi. Makin besar muatan ion dan makin kecil ukuran ion, makin besar energi kisi, dan makin tinggi titik lelehnya. Itulah sebabnya MgO (muatan 2+ dan 2−) meleleh jauh lebih tinggi daripada NaCl (muatan 1+ dan 1−).',

        // ===== 4 =====
        '4. Keras tetapi Rapuh',
        'Senyawa ionik keras karena ion-ion terikat sangat kuat dalam kisi, sehingga sulit digores atau ditekan.',
        'Namun senyawa ionik juga rapuh. Ketika kristal dipukul, satu lapisan ion bergeser sedikit sehingga ion sejenis (positif dengan positif, negatif dengan negatif) saling berhadapan. Terjadi tolakan kuat dan kristal retak atau pecah.',
        'Inilah mengapa kristal garam mudah pecah jika dipukul, tidak melengkung seperti logam.',
        'Keras dan rapuh tidak bertentangan. Keras berarti sulit digores karena ikatan kuat, sedangkan rapuh berarti mudah pecah ketika lapisannya bergeser.',

        // ===== 5 =====
        '5. Kelarutan dalam Air',
        'Banyak senyawa ionik larut dalam air. Molekul air bersifat polar: ujung oksigennya bermuatan parsial negatif dan ujung hidrogennya bermuatan parsial positif.',
        'Ketika kristal garam dimasukkan ke air, ujung negatif air menarik kation dan ujung positif air menarik anion. Tarikan ini cukup kuat untuk melepaskan ion dari kisi, sehingga ion-ion terpisah dan dikelilingi molekul air. Proses pengelilingan ion oleh molekul air ini disebut hidrasi.',
        'Perlu diingat, tidak semua senyawa ionik larut dalam air. Contoh yang sukar larut: CaCO₃ (batu kapur) dan AgCl. Pada senyawa ini, tarikan antarion dalam kisi lebih kuat daripada tarikan air terhadap ion-ionnya.',
        'Senyawa ionik umumnya tidak larut dalam pelarut nonpolar seperti minyak, karena pelarut nonpolar tidak mampu menarik ion dari kisi.',

        // ===== 6 =====
        '6. Daya Hantar Listrik',
        'Daya hantar listrik memerlukan partikel bermuatan yang bebas bergerak. Pada senyawa ionik, partikel bermuatan itu adalah ion.',
        'Dalam bentuk padat: ion-ion terkunci pada posisi tetap dalam kisi dan tidak dapat bergerak, sehingga senyawa ionik padat tidak menghantarkan listrik.',
        'Dalam bentuk lelehan: kisi runtuh sehingga ion-ion bebas bergerak, sehingga lelehan menghantarkan listrik.',
        'Dalam bentuk larutan: ion-ion terpisah dan bebas bergerak dalam air, sehingga larutan menghantarkan listrik.',
        'Ringkasan untuk NaCl: padat tidak menghantarkan listrik (ion terkunci); lelehan dan larutan menghantarkan listrik (ion bebas bergerak).',
        'Pada percobaan lampu di awal materi, lampu menyala pada larutan garam karena ion Na⁺ dan Cl⁻ bebas bergerak membawa muatan. Pada garam padat, ion-ion tidak dapat bergerak sehingga lampu tetap padam.',

        // ===== 7 =====
        '7. Disosiasi dan Elektrolit',
        'Proses terpisahnya ion-ion saat senyawa ionik larut dalam air disebut disosiasi. Contoh disosiasi NaCl dalam air:',
        'NaCl(s) → Na⁺(aq) + Cl⁻(aq)',
        'Contoh disosiasi MgCl₂ dalam air:',
        'MgCl₂(s) → Mg²⁺(aq) + 2Cl⁻(aq)',
        'Contoh disosiasi Na₂SO₄ dalam air:',
        'Na₂SO₄(s) → 2Na⁺(aq) + SO₄²⁻(aq)',
        'Perhatikan bahwa ion poliatomik tetap utuh saat disosiasi (SO₄²⁻ tidak pecah menjadi S dan O).',
        'Zat yang larutannya dapat menghantarkan listrik karena mengandung ion disebut elektrolit. Banyak senyawa ionik yang larut adalah elektrolit kuat.',
        'Sebagai pembanding, larutan gula tidak menghantarkan listrik karena gula larut sebagai molekul utuh, bukan sebagai ion. Jadi, daya hantar larutan bergantung pada adanya ion bebas.',

        // ===== 8 =====
        '8. Menghubungkan Sifat dengan Struktur',
        'Sifat padat, keras, dan titik leleh tinggi: akibat tarikan elektrostatik yang kuat antar ion dalam kisi.',
        'Sifat rapuh: akibat lapisan ion yang bergeser sehingga ion sejenis berhadapan dan tolak-menolak.',
        'Sifat larut dalam air: akibat tarikan molekul air polar terhadap ion (hidrasi) yang melepas ion dari kisi.',
        'Sifat daya hantar listrik: akibat ion hanya bebas bergerak ketika senyawa dilelehkan atau dilarutkan.',

        // ===== 9 =====
        '9. Kesalahan Konsep yang Sering Terjadi',
        'Kesalahan 1: "Senyawa ionik padat bisa menghantarkan listrik." Tidak bisa, karena ion terkunci dalam kisi. Baru bisa menghantarkan listrik setelah melebur atau larut.',
        'Kesalahan 2: "Semua senyawa ionik larut dalam air." Tidak benar. CaCO₃ dan AgCl sukar larut.',
        'Kesalahan 3: "Senyawa ionik keras berarti tidak mudah pecah." Senyawa ionik keras tetapi rapuh, sehingga mudah pecah ketika dipukul.',
        'Kesalahan 4: "Larutan garam menghantarkan listrik karena elektron bergerak bebas seperti pada logam." Pada larutan, yang bergerak adalah ion, bukan elektron bebas.',
        'Kesalahan 5: "Ion dalam larutan terbentuk karena adanya arus listrik." Ion sudah ada dalam kisi kristal; air hanya memisahkannya (disosiasi). Arus listrik tidak diperlukan untuk membentuk ion.',

        // ===== 10 =====
        '10. Latihan Singkat dan Pembahasan',
        'Soal 1: Mengapa lelehan NaCl dapat menghantarkan listrik, sedangkan padatan NaCl tidak?',
        'Pembahasan: pada padatan, ion Na⁺ dan Cl⁻ terkunci pada kisi sehingga tidak bebas bergerak. Pada lelehan, kisi runtuh sehingga ion-ion bebas bergerak dan dapat membawa muatan listrik.',
        'Soal 2: Mana yang titik lelehnya lebih tinggi, NaCl atau MgO? Jelaskan.',
        'Pembahasan: MgO. Muatan ion pada MgO (2+ dan 2−) lebih besar daripada NaCl (1+ dan 1−), sehingga tarikan elektrostatik dan energi kisinya lebih besar, dan diperlukan energi lebih banyak untuk melelehkannya.',
        'Soal 3: Mengapa kristal garam pecah ketika dipukul, sedangkan kawat logam hanya melengkung?',
        'Pembahasan: pada kristal ionik, pukulan menggeser lapisan ion sehingga ion sejenis saling berhadapan dan tolak-menolak, akibatnya kristal pecah. Itulah sifat rapuh senyawa ionik.',
        'Soal 4: Tuliskan persamaan disosiasi Na₂SO₄ dalam air dan jelaskan mengapa larutannya menghantarkan listrik.',
        'Pembahasan: Na₂SO₄(s) → 2Na⁺(aq) + SO₄²⁻(aq). Larutan menghantarkan listrik karena ion Na⁺ dan SO₄²⁻ bebas bergerak.',
        'Soal 5: Jelaskan mengapa NaCl larut dalam air.',
        'Pembahasan: molekul air bersifat polar. Ujung negatif air menarik Na⁺ dan ujung positif air menarik Cl⁻. Tarikan ini melepaskan ion dari kisi, lalu ion dikelilingi molekul air (hidrasi).',
        'Soal 6: Padatan X menghantarkan listrik dalam bentuk lelehan dan larutan, tetapi tidak saat padat. Apa kesimpulan tentang jenis ikatan X?',
        'Pembahasan: sifat tersebut menunjukkan adanya ion yang hanya bebas bergerak ketika dilelehkan atau dilarutkan. X kemungkinan besar senyawa ionik.',

        // ===== KESIMPULAN =====
        'Kesimpulan',
        'Sifat senyawa ionik dijelaskan oleh dua hal: adanya ion bermuatan dan tarikan elektrostatik yang kuat dalam kisi kristal. Karena tarikannya kuat, senyawa ionik berupa padatan kristal, bertitik leleh dan titik didih tinggi, serta keras tetapi rapuh karena lapisan ion yang bergeser menimbulkan tolakan.',
        'Banyak senyawa ionik larut dalam air karena molekul air polar menarik ion dari kisi (hidrasi), tetapi ada yang sukar larut seperti CaCO₃ dan AgCl. Senyawa ionik tidak menghantarkan listrik saat padat karena ion terkunci, tetapi menghantarkan listrik saat lelehan dan larutan karena ion bebas bergerak.'
      ],
      keyPoints: [
        'Sifat senyawa ionik berasal dari ion bermuatan dan tarikan elektrostatik yang kuat dalam kisi.',
        'Senyawa ionik umumnya berwujud padat kristal pada suhu kamar.',
        'Titik leleh dan titik didih senyawa ionik tinggi karena energi besar diperlukan untuk memutus tarikan antarion.',
        'Makin besar muatan dan makin kecil ukuran ion, makin tinggi titik leleh (contoh: MgO lebih tinggi daripada NaCl).',
        'Senyawa ionik keras tetapi rapuh karena lapisan ion yang bergeser menimbulkan tolakan antarion sejenis.',
        'Banyak senyawa ionik larut dalam air karena molekul air polar menarik ion dari kisi (hidrasi).',
        'Tidak semua senyawa ionik larut dalam air; contohnya CaCO₃ dan AgCl.',
        'Senyawa ionik padat tidak menghantarkan listrik karena ion terkunci dalam kisi.',
        'Lelehan dan larutan senyawa ionik menghantarkan listrik karena ion bebas bergerak.',
        'Disosiasi adalah proses terpisahnya ion saat senyawa ionik larut, misalnya NaCl(s) → Na⁺(aq) + Cl⁻(aq).',
        'Ion poliatomik tetap utuh saat disosiasi.',
        'Zat yang larutannya menghantarkan listrik karena mengandung ion disebut elektrolit.'
      ],
      examples: [
        'NaCl: padat saat suhu kamar; meleleh sekitar 801 °C; larut dalam air; padat tidak menghantarkan listrik, lelehan dan larutan menghantarkan listrik.',
        'MgO: titik leleh sangat tinggi (sekitar 2.852 °C) karena muatan ion 2+ dan 2−.',
        'KBr: padatan kristal; larutannya menghantarkan listrik karena ion K⁺ dan Br⁻ bebas bergerak.',
        'MgCl₂: larut dalam air dan terdisosiasi menjadi Mg²⁺ dan 2Cl⁻.',
        'Na₂SO₄: larut dalam air dan terdisosiasi menjadi 2Na⁺ dan SO₄²⁻.',
        'CaCO₃: senyawa ionik yang sukar larut dalam air.',
        'AgCl: senyawa ionik yang sukar larut dalam air.',
        'NaOH: senyawa ionik yang larut dalam air dan menghasilkan ion Na⁺ dan OH⁻.',
        'KNO₃: senyawa ionik yang larut dalam air dan larutannya menghantarkan listrik.'
      ],
      illustrationType: 'lewis'
    },{
      // Penanggung jawab: Farrel Firmansyah Handoko
      id: 'sub-2-6',
      title: 'Contoh & Peranan Senyawa Ionik dalam Kehidupan Sehari-hari',
      content: [
        // ===== PENDAHULUAN =====
        // TODO (opsional): pasang gambar kolase produk sehari-hari: garam dapur, soda kue, kapur tulis/marmer, pupuk, antasida.
        // https://asset.kompas.com/crops/5sybDSHZo22MFQ3XFViwneEl4oY=/0x84:1200x884/1200x1200/data/photo/2022/08/22/630325dbdf19b.jpg
        'Coba lihat sekeliling dapur dan kamar mandimu: garam dapur, soda kue, pasta gigi, pupuk di taman, bahkan kapur tulis di sekolah. Hampir semuanya mengandung senyawa ionik.',
        'Pertanyaan pemantik: mengapa garam bisa mengawetkan makanan, mengapa soda kue membuat kue mengembang, dan mengapa tubuh kita memerlukan ion-ion tertentu agar saraf dan otot bekerja? Pada submateri ini kamu akan melihat bagaimana sifat senyawa ionik yang sudah kamu pelajari menentukan fungsi mereka dalam kehidupan.',

        // ===== 1 =====
        '1. Senyawa Ionik di Sekitar Kita',
        'Senyawa ionik ditemukan di rumah, tubuh, pertanian, dan industri. Fungsi suatu senyawa ionik berkaitan langsung dengan sifat yang dimilikinya: kelarutan dalam air, kekerasan, titik leleh tinggi, atau kemampuan menyediakan ion tertentu.',
        'Berikut contoh-contoh pentingnya, dikelompokkan menurut bidang penggunaannya.',

        // ===== 2 =====
        '2. Dalam Rumah Tangga dan Makanan',
        'Natrium klorida (NaCl): garam dapur untuk bumbu masakan dan pengawet makanan. Garam mengawetkan karena menyerap air dari makanan sehingga mikroorganisme sulit berkembang.',
        'Natrium bikarbonat (NaHCO₃): soda kue sebagai pengembang adonan. Ketika dipanaskan atau bereaksi dengan zat asam, soda kue menghasilkan gas karbon dioksida yang membuat adonan mengembang.',
        'Kalium iodat (KIO₃) atau kalium iodida (KI): ditambahkan ke garam beryodium untuk mencegah kekurangan yodium.',
        'Natrium hidroksida (NaOH): bahan pembuatan sabun dan pembersih saluran. NaOH bersifat korosif, sehingga harus ditangani dengan hati-hati.',
        'Kalsium karbonat (CaCO₃): penyusun batu kapur, marmer, serta cangkang kerang dan telur. Kapur tulis ada yang terbuat dari kalsium karbonat dan ada pula yang dari gipsum (kalsium sulfat, CaSO₄).',

        // ===== 3 =====
        '3. Dalam Tubuh Kita',
        'Ion-ion seperti Na⁺, K⁺, Ca²⁺, Mg²⁺, dan Cl⁻ sangat penting dalam tubuh. Ion Na⁺ dan K⁺ berperan dalam kerja saraf dan menjaga keseimbangan cairan. Ion Ca²⁺ berperan dalam kontraksi otot. Ion Mg²⁺ dibutuhkan banyak enzim. Ion Cl⁻ membantu menjaga keseimbangan cairan dan merupakan bagian dari asam lambung.',
        'Kalsium fosfat: komponen utama tulang dan gigi, dalam bentuk senyawa yang disebut hidroksiapatit. Karena itu kalsium dan fosfat penting untuk pertumbuhan tulang.',
        'Cairan infus dan larutan rehidrasi (oralit) mengandung ion-ion seperti Na⁺, K⁺, dan Cl⁻ untuk menggantikan ion yang hilang saat dehidrasi, misalnya karena diare atau berkeringat berlebihan.',
        'Natrium fluorida (NaF): sering ditambahkan ke pasta gigi untuk membantu memperkuat email gigi.',

        // ===== 4 =====
        '4. Dalam Kesehatan dan Obat-obatan',
        'Magnesium hidroksida, Mg(OH)₂, dan kalsium karbonat, CaCO₃: digunakan sebagai antasida untuk menetralkan kelebihan asam lambung.',
        'Magnesium sulfat (MgSO₄): dikenal sebagai garam Epsom, digunakan dalam beberapa keperluan kesehatan dan perawatan.',
        'Kalsium sulfat (CaSO₄): dalam bentuk plester gipsum digunakan untuk membuat cetakan gips pada patah tulang.',
        'Perlu diingat, penggunaan obat harus mengikuti anjuran dokter atau apoteker, dan kandungan ion juga perlu diperhatikan agar tidak berlebihan.',

        // ===== 5 =====
        '5. Dalam Pertanian',
        'Kalium nitrat (KNO₃) dan amonium nitrat (NH₄NO₃): bahan pupuk yang menyediakan unsur nitrogen dan kalium yang dibutuhkan tanaman. Keduanya larut dalam air sehingga ion-ionnya mudah diserap akar.',
        'Amonium sulfat ((NH₄)₂SO₄) dan kalium klorida (KCl): juga digunakan sebagai pupuk.',
        'Kalsium oksida (CaO): dikenal sebagai kapur tohor, digunakan untuk menaikkan pH tanah yang terlalu asam.',
        'Kelarutan dalam air menjadi alasan utama senyawa ionik cocok sebagai pupuk: ion-ion dapat diserap tanaman setelah pupuk larut dalam air tanah.',

        // ===== 6 =====
        '6. Dalam Industri dan Bangunan',
        'Magnesium oksida (MgO): bahan pelapis tahan api (tahan panas) pada tungku karena titik lelehnya sangat tinggi (sekitar 2.852 °C).',
        'Aluminium oksida (Al₂O₃): bahan amplas (abrasif) dan keramik karena sangat keras. Batu permata seperti rubi dan safir pada dasarnya adalah Al₂O₃ dengan sedikit pengotor yang memberi warna.',
        'Kalsium oksida (CaO) dan kalsium karbonat (CaCO₃): bahan penting dalam pembuatan semen dan bahan bangunan.',
        'Natrium klorida (NaCl) dan kalsium klorida (CaCl₂): digunakan di daerah bersalju untuk mencairkan es di jalan, karena garam menurunkan titik beku air.',
        'Natrium klorida juga menjadi bahan baku industri kimia untuk menghasilkan NaOH dan klorin.',

        // ===== 7 =====
        '7. Menghubungkan Sifat dengan Penggunaan',
        'Titik leleh sangat tinggi (MgO) → cocok sebagai pelapis tungku tahan api.',
        'Sangat keras (Al₂O₃) → cocok sebagai amplas dan keramik.',
        'Larut dalam air dan menyediakan ion (KNO₃, NH₄NO₃, NaCl) → cocok sebagai pupuk dan larutan elektrolit tubuh.',
        'Menghantarkan listrik saat larutan atau lelehan → dasar penggunaan elektrolit dalam baterai dan proses industri (elektrolisis).',
        'Bereaksi dengan asam (CaCO₃, Mg(OH)₂, NaHCO₃) → cocok sebagai antasida.',

        // ===== 8 =====
        '8. Keselamatan dan Dampak Lingkungan',
        'Tidak semua senyawa ionik aman untuk dikonsumsi atau disentuh. NaOH bersifat korosif dan dapat melukai kulit. Amonium nitrat memerlukan penanganan khusus. Garam dalam jumlah berlebihan dalam makanan dapat berdampak buruk bagi kesehatan, misalnya pada tekanan darah.',
        'Pupuk yang berlebihan dapat terbawa air hujan ke sungai dan danau, lalu menyebabkan pertumbuhan alga berlebihan sehingga kualitas air menurun. Penggunaan garam jalan secara berlebihan juga dapat merusak tanah dan tumbuhan di sekitarnya.',
        'Jadi, mengetahui sifat senyawa ionik membantu kita menggunakannya dengan tepat dan aman.',

        // ===== 9 =====
        '9. Kesalahan Konsep yang Sering Terjadi',
        'Kesalahan 1: "Garam dan NaCl selalu sama." Garam dapur adalah NaCl, tetapi dalam kimia ada banyak senyawa ionik lain, seperti KNO₃, CaCO₃, dan Na₂SO₄.',
        'Kesalahan 2: "Senyawa ionik hanya ada di laboratorium." Senyawa ionik ada di makanan, tubuh, tanah, dan bahan bangunan di sekitar kita.',
        'Kesalahan 3: "Semua senyawa ionik aman dikonsumsi." Tidak benar. NaOH, misalnya, bersifat korosif.',
        'Kesalahan 4: "Tubuh memerlukan atom Na atau Cl." Tubuh memerlukan ion Na⁺ dan Cl⁻. Logam natrium dan gas klorin sangat berbahaya.',
        'Kesalahan 5: "Semua zat yang berasa asin adalah NaCl." Rasa asin bisa berasal dari berbagai garam lain, misalnya KCl.',

        // ===== 10 =====
        '10. Latihan Singkat dan Pembahasan',
        'Soal 1: Mengapa MgO dipakai sebagai pelapis tungku tahan api?',
        'Pembahasan: MgO memiliki energi kisi yang besar karena muatan ionnya 2+ dan 2−, sehingga titik lelehnya sangat tinggi (sekitar 2.852 °C) dan tidak mudah meleleh pada suhu tinggi.',
        'Soal 2: Mengapa Al₂O₃ cocok untuk amplas?',
        'Pembahasan: Al₂O₃ sangat keras karena ion Al³⁺ dan O²⁻ terikat sangat kuat dalam kisi kristal, sehingga mampu menggores permukaan lain.',
        'Soal 3: Sebutkan ion yang terkandung dalam pupuk KNO₃ dan jelaskan mengapa pupuk ini mudah diserap tanaman.',
        'Pembahasan: KNO₃ mengandung ion K⁺ dan NO₃⁻. KNO₃ larut dalam air sehingga ion-ionnya dapat diserap akar tanaman.',
        'Soal 4: Mengapa penderita diare perlu mengonsumsi oralit?',
        'Pembahasan: diare menyebabkan tubuh kehilangan air dan ion-ion seperti Na⁺, K⁺, dan Cl⁻. Oralit mengandung ion-ion tersebut untuk menggantikan yang hilang dan mencegah dehidrasi.',
        'Soal 5: Mengapa antasida mengandung senyawa seperti CaCO₃ atau Mg(OH)₂?',
        'Pembahasan: senyawa tersebut bersifat basa atau bereaksi dengan asam sehingga dapat menetralkan kelebihan asam lambung.',
        'Soal 6: Tuliskan rumus senyawa ionik pada bahan berikut dan sebutkan ion penyusunnya: (a) soda kue, (b) kapur tohor.',
        'Pembahasan: (a) soda kue adalah NaHCO₃ yang terdiri atas ion Na⁺ dan HCO₃⁻. (b) kapur tohor adalah CaO yang terdiri atas ion Ca²⁺ dan O²⁻.',

        // ===== KESIMPULAN =====
        'Kesimpulan',
        'Senyawa ionik berperan penting dalam rumah tangga (garam dapur, soda kue), tubuh (ion Na⁺, K⁺, Ca²⁺, Mg²⁺, Cl⁻, serta kalsium fosfat pada tulang dan gigi), kesehatan (antasida, oralit), pertanian (pupuk), dan industri (pelapis tahan api, amplas, semen).',
        'Fungsi tiap senyawa berkaitan dengan sifatnya: titik leleh tinggi, kekerasan, kelarutan dalam air, dan kemampuan menyediakan ion. Mengetahui sifat ini membantu kita menggunakan senyawa ionik dengan tepat dan aman.'
      ],
      keyPoints: [
        'Senyawa ionik terdapat di rumah, tubuh, pertanian, dan industri.',
        'NaCl digunakan sebagai bumbu dan pengawet makanan.',
        'NaHCO₃ digunakan sebagai soda kue karena menghasilkan gas CO₂ yang mengembangkan adonan.',
        'Ion Na⁺, K⁺, Ca²⁺, Mg²⁺, dan Cl⁻ berperan penting dalam kerja saraf, otot, dan keseimbangan cairan tubuh.',
        'Kalsium fosfat (hidroksiapatit) adalah komponen utama tulang dan gigi.',
        'CaCO₃ dan Mg(OH)₂ digunakan sebagai antasida untuk menetralkan asam lambung.',
        'KNO₃ dan NH₄NO₃ digunakan sebagai pupuk karena larut dan menyediakan ion bagi tanaman.',
        'MgO dipakai sebagai pelapis tahan api karena titik lelehnya sangat tinggi.',
        'Al₂O₃ dipakai sebagai amplas dan keramik karena sangat keras.',
        'CaO dan CaCO₃ adalah bahan penting dalam pembuatan semen dan bahan bangunan.',
        'Tidak semua senyawa ionik aman; misalnya NaOH bersifat korosif.',
        'Penggunaan senyawa ionik yang berlebihan, seperti pupuk dan garam jalan, dapat berdampak buruk bagi lingkungan.'
      ],
      examples: [
        'NaCl (natrium klorida): garam dapur, pengawet makanan, sumber ion Na⁺ dan Cl⁻ bagi tubuh.',
        'NaHCO₃ (natrium bikarbonat): soda kue pengembang adonan.',
        'CaCO₃ (kalsium karbonat): batu kapur, marmer, cangkang kerang dan telur, bahan antasida.',
        'CaO (kalsium oksida): kapur tohor untuk pertanian dan bahan semen.',
        'MgO (magnesium oksida): pelapis tahan api pada tungku.',
        'Al₂O₃ (aluminium oksida): amplas dan keramik; dasar batu rubi dan safir.',
        'Ca₃(PO₄)₂ / hidroksiapatit: komponen tulang dan gigi.',
        'KNO₃ (kalium nitrat) dan NH₄NO₃ (amonium nitrat): pupuk.',
        'NaOH (natrium hidroksida): bahan pembuatan sabun dan pembersih saluran; bersifat korosif.',
        'Mg(OH)₂ (magnesium hidroksida): antasida penetral asam lambung.'
      ],
      illustrationType: 'lewis'
    }
  ],

  summary: [
    'Atom cenderung mencapai konfigurasi elektron gas mulia (duplet atau oktet); oktet adalah pedoman, bukan aturan mutlak.',
    'Atom logam cenderung melepas elektron valensi menjadi kation, dan atom nonlogam cenderung menerima elektron menjadi anion.',
    'Yang berpindah saat terbentuk ion hanya elektron; jumlah proton tetap sehingga identitas unsur tidak berubah.',
    'Ikatan ionik terbentuk karena tarikan elektrostatik antara kation dan anion setelah terjadi perpindahan elektron.',
    'Kation lebih kecil daripada atom asalnya, sedangkan anion lebih besar daripada atom asalnya.',
    'Struktur Lewis ionik menggambarkan perpindahan elektron; anion ditulis dengan 8 titik dalam kurung siku beserta muatannya.',
    'Rumus senyawa ionik ditentukan dengan silang muatan dan harus netral; penamaannya menyebut kation lebih dulu, lalu anion.',
    'Senyawa ionik tersusun dalam kisi kristal dengan unit rumus tertentu; energi kisi menunjukkan kekuatan ikatan ionik dan makin besar jika muatan ion besar dan ukuran ion kecil.',
    'Senyawa ionik bertitik leleh tinggi, keras tetapi rapuh, banyak yang larut dalam air, dan menghantarkan listrik dalam bentuk lelehan atau larutan, serta berperan penting dalam rumah tangga, tubuh, pertanian, dan industri.'
  ],

  author: 'Farrel Firmansyah Handoko (Ikatan Ionik)'
};

export default modul2Data;
