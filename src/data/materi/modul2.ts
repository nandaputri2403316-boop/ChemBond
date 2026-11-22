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
    'Materi ini membahas ikatan ionik secara lengkap: mulai dari pengertian ion, alasan atom melepas atau menerima elektron, proses pembentukan kation dan anion, cara menggambar struktur Lewis, cara menulis rumus dan memberi nama senyawa ionik, struktur kisi kristal, energi kisi, hingga sifat fisik senyawa ionik dan penerapannya dalam kehidupan sehari-hari.',

  learningObjectives: [
    'Menjelaskan pengertian ikatan ionik, ion, kation, dan anion.',
    'Menjelaskan alasan atom melepas atau menerima elektron berdasarkan kecenderungan mencapai konfigurasi elektron yang stabil.',
    'Menuliskan konfigurasi elektron atom dan ion serta proses pembentukan kation dan anion.',
    'Menggambarkan pembentukan ikatan ionik menggunakan struktur Lewis.',
    'Menentukan rumus senyawa ionik dengan metode silang muatan dan memastikan senyawa netral.',
    'Memberi nama senyawa ionik sederhana, senyawa dengan ion poliatomik, dan senyawa logam bermuatan ganda.',
    'Menjelaskan struktur kisi kristal ionik, unit rumus, dan energi kisi.',
    'Menganalisis hubungan ikatan ionik dengan sifat fisik senyawa ionik (titik leleh, kekerasan, kerapuhan, kelarutan, dan daya hantar listrik).',
    'Menyebutkan contoh penerapan senyawa ionik dalam kehidupan sehari-hari.'
  ],

  submodules: [
    {
      // Penanggung jawab: Farrel Firmansyah Handoko
      id: 'sub-2-1',
      title: 'Ikatan Ionik',
      content: [
        // ===== PENDAHULUAN =====
        'Pernahkah kamu memperhatikan garam dapur? Butirannya berbentuk kubus kecil yang keras, tidak mudah meleleh, dan mudah larut dalam air. Sifat-sifat itu bukan kebetulan. Semuanya berasal dari cara partikel penyusun garam saling terikat, yaitu melalui ikatan ionik.',
        'Ikatan ionik adalah ikatan kimia yang terbentuk karena adanya gaya tarik-menarik elektrostatik antara ion bermuatan positif (kation) dan ion bermuatan negatif (anion). Ikatan ini juga disebut ikatan ion atau ikatan elektrovalen.',
        'Cara mudah membayangkannya: seperti dua magnet dengan kutub berbeda yang saling menempel. Ion positif dan ion negatif saling tarik karena muatannya berlawanan.',
        'Dalam pembelajaran dasar, ikatan ionik dijelaskan sebagai perpindahan elektron dari atom logam ke atom nonlogam. Atom logam cenderung melepaskan elektron, sedangkan atom nonlogam cenderung menerima elektron. Setelah elektron berpindah, kedua atom berubah menjadi ion dan saling tarik sehingga terbentuk senyawa ionik.',

        // ===== 1. ION =====
        '1. Pengertian Ion',
        'Ion adalah atom atau kelompok atom yang bermuatan listrik. Muatan itu muncul karena jumlah proton dan jumlah elektron tidak lagi sama.',
        'Atom netral memiliki jumlah proton yang sama dengan jumlah elektron. Proton bermuatan positif dan elektron bermuatan negatif, sehingga muatannya saling meniadakan dan atom bersifat netral.',
        'Ingat baik-baik: yang berpindah saat terbentuk ion hanyalah elektron. Jumlah proton di inti atom tidak berubah. Itulah sebabnya identitas unsur tetap sama, hanya muatannya yang berubah.',
        'Kation adalah ion bermuatan positif. Kation terbentuk ketika atom kehilangan satu atau lebih elektron, sehingga jumlah proton menjadi lebih banyak daripada jumlah elektron. Contoh: Na⁺, K⁺, Mg²⁺, Ca²⁺, Al³⁺.',
        'Anion adalah ion bermuatan negatif. Anion terbentuk ketika atom menerima satu atau lebih elektron, sehingga jumlah elektron menjadi lebih banyak daripada jumlah proton. Contoh: F⁻, Cl⁻, Br⁻, O²⁻, S²⁻.',
        'Tips mengingat: kation = kehilangan elektron (bermuatan positif, seperti huruf "t" pada kation yang mirip tanda plus). Anion = menambah elektron (bermuatan negatif).',
        'Contoh menghitung partikel pada ion:',
        'Na memiliki nomor atom 11, artinya 11 proton. Atom Na netral memiliki 11 elektron. Pada ion Na⁺, protonnya tetap 11 tetapi elektronnya tinggal 10.',
        'Cl memiliki nomor atom 17, artinya 17 proton. Atom Cl netral memiliki 17 elektron. Pada ion Cl⁻, protonnya tetap 17 tetapi elektronnya menjadi 18.',
        'Ion monoatomik adalah ion yang terdiri atas satu atom, misalnya Na⁺ dan Cl⁻. Ion poliatomik adalah ion yang terdiri atas beberapa atom yang terikat dan bermuatan secara keseluruhan, misalnya NH₄⁺ dan SO₄²⁻ (dibahas pada bagian 14).',

        // ===== 2. MENGAPA TERBENTUK =====
        '2. Mengapa Ikatan Ionik Terbentuk?',
        'Atom-atom cenderung berikatan agar memiliki susunan elektron yang lebih stabil. Susunan elektron paling stabil dimiliki oleh gas mulia (He, Ne, Ar, Kr, dan seterusnya) yang jarang sekali bereaksi dengan unsur lain.',
        'Elektron valensi adalah elektron yang berada pada kulit terluar atom. Elektron inilah yang terlibat dalam pembentukan ikatan. Untuk unsur golongan utama, jumlah elektron valensi dapat dilihat dari golongannya (golongan IA = 1, IIA = 2, IIIA = 3, VIA = 6, VIIA = 7).',
        'Aturan oktet menyatakan bahwa banyak atom cenderung memiliki 8 elektron pada kulit terluarnya agar stabil. Untuk atom kecil seperti hidrogen dan litium, kestabilannya mengikuti He yang hanya memiliki 2 elektron (aturan duplet). Aturan oktet cocok untuk banyak unsur periode 2 dan 3, tetapi bukan aturan mutlak untuk semua unsur.',
        'Logam, misalnya Na, Mg, dan Al, memiliki energi ionisasi yang relatif rendah. Energi ionisasi adalah energi yang diperlukan untuk melepaskan elektron dari atom. Karena energinya kecil, logam relatif mudah melepaskan elektron valensinya dan membentuk kation.',
        'Nonlogam, misalnya F, Cl, O, dan S, memiliki afinitas elektron yang relatif besar dan keelektronegatifan yang tinggi. Artinya, nonlogam kuat menarik elektron sehingga mudah menerima elektron dan membentuk anion.',
        'Gabungan keduanya menghasilkan ikatan ionik: logam yang "mau melepas" bertemu nonlogam yang "mau menerima". Elektron berpindah, terbentuk kation dan anion, lalu keduanya saling tarik.',
        'Sebagai perkiraan kasar, ikatan ionik umumnya terbentuk jika perbedaan keelektronegatifan kedua atom sangat besar (kira-kira lebih dari 1,7 sampai 2,0). Ini hanya pedoman, bukan batas yang pasti.',
        'Ada satu hal penting: perpindahan elektron saja sebenarnya memerlukan energi. Yang membuat pembentukan senyawa ionik menguntungkan secara energi adalah pelepasan energi yang sangat besar ketika ion-ion positif dan negatif saling tarik dan tersusun dalam kisi kristal (energi kisi, bagian 12).',

        // ===== 3. KATION =====
        '3. Pembentukan Kation',
        'Kation terbentuk ketika atom kehilangan satu atau lebih elektron valensi. Jumlah proton tidak berubah, tetapi elektron berkurang sehingga muatan menjadi positif.',
        'Contoh: pembentukan ion natrium (Na⁺)',
        'Na → Na⁺ + e⁻',
        'Natrium bernomor atom 11 dengan konfigurasi elektron 2, 8, 1. Natrium memiliki 1 elektron valensi. Setelah melepaskan 1 elektron, konfigurasinya menjadi 2, 8 yang sama dengan neon (Ne).',
        'Contoh: pembentukan ion magnesium (Mg²⁺)',
        'Mg → Mg²⁺ + 2e⁻',
        'Magnesium bernomor atom 12 dengan konfigurasi elektron 2, 8, 2. Magnesium melepaskan 2 elektron valensi sehingga menjadi Mg²⁺ dengan konfigurasi 2, 8 (sama dengan Ne).',
        'Contoh: pembentukan ion aluminium (Al³⁺)',
        'Al → Al³⁺ + 3e⁻',
        'Aluminium bernomor atom 13 dengan konfigurasi elektron 2, 8, 3. Aluminium melepaskan 3 elektron valensi sehingga menjadi Al³⁺ dengan konfigurasi 2, 8 (sama dengan Ne).',
        'Contoh: pembentukan ion kalium (K⁺) dan kalsium (Ca²⁺)',
        'K (2, 8, 8, 1) → K⁺ (2, 8, 8) + e⁻. Konfigurasi K⁺ sama dengan argon (Ar).',
        'Ca (2, 8, 8, 2) → Ca²⁺ (2, 8, 8) + 2e⁻. Konfigurasi Ca²⁺ sama dengan argon (Ar).',
        'Pola yang bisa kamu hafal: logam golongan IA membentuk kation 1+, golongan IIA membentuk kation 2+, dan aluminium (golongan IIIA) membentuk kation 3+. Muatan kation sama dengan jumlah elektron valensi yang dilepas.',
        'Perhatikan bahwa ukuran kation selalu lebih kecil daripada atom asalnya. Penyebabnya, kulit terluar hilang atau elektron berkurang sementara jumlah proton tetap, sehingga inti menarik elektron yang tersisa lebih kuat.',

        // ===== 4. ANION =====
        '4. Pembentukan Anion',
        'Anion terbentuk ketika atom menerima satu atau lebih elektron. Jumlah proton tetap, tetapi elektron bertambah sehingga muatan menjadi negatif. Nama anion dari unsur biasanya berakhiran "-ida".',
        'Contoh: pembentukan ion fluorida (F⁻)',
        'F + e⁻ → F⁻',
        'Fluor bernomor atom 9 dengan konfigurasi elektron 2, 7. Setelah menerima 1 elektron, konfigurasinya menjadi 2, 8 (sama dengan Ne).',
        'Contoh: pembentukan ion klorida (Cl⁻)',
        'Cl + e⁻ → Cl⁻',
        'Klorin bernomor atom 17 dengan konfigurasi elektron 2, 8, 7. Setelah menerima 1 elektron, konfigurasinya menjadi 2, 8, 8 (sama dengan Ar).',
        'Contoh: pembentukan ion oksida (O²⁻)',
        'O + 2e⁻ → O²⁻',
        'Oksigen bernomor atom 8 dengan konfigurasi elektron 2, 6. Setelah menerima 2 elektron, konfigurasinya menjadi 2, 8 (sama dengan Ne).',
        'Contoh: pembentukan ion sulfida (S²⁻)',
        'S + 2e⁻ → S²⁻',
        'Sulfur bernomor atom 16 dengan konfigurasi elektron 2, 8, 6. Setelah menerima 2 elektron, konfigurasinya menjadi 2, 8, 8 (sama dengan Ar).',
        'Pola yang bisa kamu hafal: golongan VIIA membentuk anion 1− (F⁻, Cl⁻, Br⁻, I⁻) dan golongan VIA membentuk anion 2− (O²⁻, S²⁻). Muatan anion sama dengan 8 dikurangi jumlah elektron valensi.',
        'Ukuran anion selalu lebih besar daripada atom asalnya. Penyebabnya, elektron bertambah sementara jumlah proton tetap, sehingga tolakan antarelektron meningkat dan awan elektron mengembang.',
        'Tabel ringkas ion monoatomik yang sering muncul:',
        'Golongan IA: Li⁺, Na⁺, K⁺ (muatan +1).',
        'Golongan IIA: Mg²⁺, Ca²⁺, Sr²⁺, Ba²⁺ (muatan +2).',
        'Golongan IIIA: Al³⁺ (muatan +3).',
        'Golongan VIA: O²⁻, S²⁻ (muatan −2).',
        'Golongan VIIA: F⁻, Cl⁻, Br⁻, I⁻ (muatan −1).',

        // ===== 5. TAHAPAN =====
        '5. Tahapan Pembentukan Ikatan Ionik',
        'Pembentukan ikatan ionik dapat dipahami melalui empat tahap berikut.',
        'Tahap 1: Atom logam melepaskan elektron valensinya dan membentuk kation.',
        'Tahap 2: Atom nonlogam menerima elektron tersebut dan membentuk anion.',
        'Tahap 3: Kation (positif) dan anion (negatif) saling tarik secara elektrostatik.',
        'Tahap 4: Ion-ion yang saling tarik tersusun teratur membentuk kisi kristal senyawa ionik.',
        'Secara umum dapat dituliskan sebagai berikut:',
        'M → Mⁿ⁺ + ne⁻',
        'X + ne⁻ → Xⁿ⁻',
        'Mⁿ⁺ + Xⁿ⁻ → senyawa ionik',
        'M adalah atom logam, X adalah atom nonlogam, dan n adalah jumlah elektron yang berpindah. Jumlah elektron yang dilepas logam harus sama dengan jumlah elektron yang diterima nonlogam, karena elektron tidak hilang begitu saja.',

        // ===== 6. NaCl =====
        '6. Pembentukan Natrium Klorida (NaCl)',
        'NaCl adalah garam dapur dan merupakan contoh paling klasik senyawa ionik. Natrium berkonfigurasi 2, 8, 1 (1 elektron valensi), sedangkan klorin berkonfigurasi 2, 8, 7 (7 elektron valensi).',
        'Langkah 1, natrium melepas 1 elektron:',
        'Na → Na⁺ + e⁻',
        'Langkah 2, klorin menerima 1 elektron:',
        'Cl + e⁻ → Cl⁻',
        'Langkah 3, kedua ion saling tarik:',
        'Na⁺ + Cl⁻ → NaCl',
        'Perbandingan Na⁺ : Cl⁻ adalah 1 : 1. Senyawa bersifat netral karena muatan totalnya (+1) + (−1) = 0.',
        'Hal penting: dalam kristal NaCl tidak ada "molekul NaCl" yang berdiri sendiri. Yang ada adalah kisi raksasa berisi ion Na⁺ dan Cl⁻ dengan perbandingan 1 : 1. Karena itu, NaCl disebut memiliki "unit rumus", bukan molekul.',

        // ===== 7. MgCl2 =====
        '7. Pembentukan Magnesium Klorida (MgCl₂)',
        'Magnesium berkonfigurasi 2, 8, 2 (2 elektron valensi), sedangkan klorin berkonfigurasi 2, 8, 7 (7 elektron valensi).',
        'Magnesium melepas 2 elektron:',
        'Mg → Mg²⁺ + 2e⁻',
        'Setiap atom klorin hanya mampu menerima 1 elektron:',
        'Cl + e⁻ → Cl⁻',
        'Cl + e⁻ → Cl⁻',
        'Karena Mg melepas 2 elektron dan tiap Cl hanya menerima 1 elektron, diperlukan 2 atom Cl untuk menampung semua elektron dari 1 atom Mg.',
        'Mg²⁺ + 2Cl⁻ → MgCl₂',
        'Muatan total MgCl₂ netral karena (+2) + 2 × (−1) = 0.',

        // ===== 8. Al2O3 =====
        '8. Pembentukan Aluminium Oksida (Al₂O₃)',
        'Aluminium berkonfigurasi 2, 8, 3 (3 elektron valensi), sedangkan oksigen berkonfigurasi 2, 6 (6 elektron valensi).',
        'Aluminium melepas 3 elektron: Al → Al³⁺ + 3e⁻',
        'Oksigen menerima 2 elektron: O + 2e⁻ → O²⁻',
        'Agar elektron yang dilepas sama dengan elektron yang diterima, kita cari kelipatan persekutuan terkecil dari 3 dan 2, yaitu 6. Jadi diperlukan 2 atom Al (melepas 6 elektron) dan 3 atom O (menerima 6 elektron).',
        '2Al → 2Al³⁺ + 6e⁻',
        '3O + 6e⁻ → 3O²⁻',
        '2Al³⁺ + 3O²⁻ → Al₂O₃',
        'Muatan total Al₂O₃ netral karena 2 × (+3) + 3 × (−2) = +6 − 6 = 0.',

        // ===== 9. LEWIS =====
        '9. Struktur Lewis pada Ikatan Ionik',
        'Struktur Lewis adalah cara menggambarkan elektron valensi menggunakan titik di sekitar lambang unsur. Setiap titik mewakili 1 elektron valensi. Titik biasanya diletakkan di empat sisi (atas, bawah, kiri, kanan) dan baru dipasangkan setelah setiap sisi terisi satu titik.',
        'Struktur Lewis beberapa atom:',
        'Na memiliki 1 titik (1 elektron valensi).',
        'Mg memiliki 2 titik (2 elektron valensi).',
        'Al memiliki 3 titik (3 elektron valensi).',
        'O memiliki 6 titik (2 pasang dan 2 titik tunggal).',
        'Cl memiliki 7 titik (3 pasang dan 1 titik tunggal).',
        'Pada senyawa ionik, struktur Lewis menunjukkan elektron berpindah dari logam ke nonlogam. Setelah berpindah, kation ditulis tanpa titik elektron valensi (karena kulit valensinya hilang), sedangkan anion ditulis dengan 8 titik (4 pasang) di dalam tanda kurung siku disertai muatannya.',
        'Contoh NaCl:',
        'Sebelum reaksi: Na· dan ·Cl dengan 7 titik (Na punya 1 elektron valensi, Cl punya 7).',
        'Elektron milik Na berpindah ke Cl.',
        'Sesudah reaksi: Na⁺ dan [ :Cl: ]⁻, di mana Cl⁻ memiliki 8 elektron valensi (4 pasang).',
        'Contoh MgCl₂:',
        'Mg memberikan 1 elektron kepada Cl pertama dan 1 elektron kepada Cl kedua.',
        'Hasilnya: Mg²⁺ dan 2 buah [ :Cl: ]⁻, masing-masing dengan 8 elektron valensi.',
        'Contoh Na₂O:',
        'Dua atom Na masing-masing memberikan 1 elektron kepada 1 atom O.',
        'Hasilnya: 2 Na⁺ dan [ :O: ]²⁻, di mana O²⁻ memiliki 8 elektron valensi.',
        'Catatan penting: tanda panah atau garis ikatan tidak digunakan pada ikatan ionik, karena tidak ada pasangan elektron yang dipakai bersama. Yang digambarkan adalah perpindahan elektron dan ion-ion yang dihasilkan.',

        // ===== 10. GAYA ELEKTROSTATIK =====
        '10. Gaya Elektrostatik',
        'Gaya elektrostatik adalah gaya tarik-menarik (antara muatan berlawanan) atau tolak-menolak (antara muatan sejenis) antarpartikel bermuatan. Gaya inilah yang menjadi "perekat" ikatan ionik.',
        'Besarnya gaya tarik ini mengikuti hukum Coulomb: semakin besar muatan ion, semakin kuat tariknya; semakin kecil jarak antarion, semakin kuat tariknya.',
        'Contoh perbandingan: ikatan pada MgO (Mg²⁺ dan O²⁻) lebih kuat daripada NaCl (Na⁺ dan Cl⁻), karena muatan ion pada MgO lebih besar (2+ dan 2− dibanding 1+ dan 1−). Itulah sebabnya titik leleh MgO jauh lebih tinggi daripada NaCl.',
        'Gaya elektrostatik bekerja ke segala arah, bukan hanya antara dua ion tertentu. Satu ion positif menarik semua ion negatif di sekitarnya, dan sebaliknya. Inilah alasan senyawa ionik membentuk kisi kristal, bukan molekul tunggal.',

        // ===== 11. KISI KRISTAL =====
        '11. Struktur Kristal Ionik',
        'Dalam keadaan padat, kation dan anion tersusun teratur dalam pola tiga dimensi yang berulang. Susunan ini disebut kisi kristal atau kisi ionik.',
        'Dalam kisi kristal, setiap kation dikelilingi oleh beberapa anion dan setiap anion dikelilingi oleh beberapa kation. Pola ini membuat tarikan antarion maksimal sekaligus tolakan antarion sejenis minimal.',
        'Pada kristal NaCl, setiap ion Na⁺ dikelilingi 6 ion Cl⁻, dan setiap ion Cl⁻ dikelilingi 6 ion Na⁺. Susunan ini membentuk kristal berbentuk kubus, sesuai dengan bentuk butiran garam dapur yang kamu lihat.',
        'Unit rumus adalah perbandingan ion terkecil dalam senyawa ionik yang membuat senyawa netral secara listrik. Karena senyawa ionik tidak berupa molekul, kita menggunakan istilah unit rumus, bukan molekul.',
        'Contoh unit rumus: NaCl (1 Na⁺ : 1 Cl⁻), MgCl₂ (1 Mg²⁺ : 2 Cl⁻), Al₂O₃ (2 Al³⁺ : 3 O²⁻), CaCO₃ (1 Ca²⁺ : 1 CO₃²⁻).',

        // ===== 12. ENERGI KISI =====
        '12. Energi Kisi',
        'Energi kisi adalah energi yang diperlukan untuk memisahkan 1 mol senyawa ionik padat menjadi ion-ion gasnya yang saling berjauhan. Sebaliknya, energi yang sama dilepaskan ketika ion-ion gas bergabung membentuk kristal.',
        'Energi kisi menjadi ukuran kekuatan ikatan ionik dalam kristal. Semakin besar energi kisi, semakin kuat tarikan antarion, semakin sulit kristal dihancurkan, dan semakin tinggi titik lelehnya.',
        'Energi kisi dipengaruhi oleh dua hal utama: besar muatan ion dan jarak antarion (yang bergantung pada ukuran ion). Muatan lebih besar dan ion lebih kecil menghasilkan energi kisi lebih besar.',
        'Contoh 1, perbandingan muatan: MgO memiliki energi kisi lebih besar daripada NaCl karena muatannya 2+ dan 2− (dibanding 1+ dan 1−).',
        'Contoh 2, perbandingan ukuran: NaF memiliki energi kisi lebih besar daripada NaI (muatan sama) karena F⁻ jauh lebih kecil daripada I⁻, sehingga jarak antarion di NaF lebih pendek dan tarikannya lebih kuat.',

        // ===== 13. SIFAT =====
        '13. Sifat Senyawa Ionik',
        'Semua sifat senyawa ionik dapat dijelaskan dari dua hal: adanya ion bermuatan, dan tarikan elektrostatik yang kuat di antara ion-ion dalam kisi kristal.',
        'a. Berwujud padat kristal pada suhu kamar.',
        'Tarikan antarion yang kuat membuat ion-ion tersusun rapat dan teratur, sehingga senyawa ionik umumnya berupa padatan keras berbentuk kristal.',
        'b. Titik leleh dan titik didih tinggi.',
        'Untuk melelehkan atau mendidihkan senyawa ionik, kita harus memutus tarikan antarion yang sangat kuat sehingga diperlukan energi besar. Contoh: NaCl meleleh pada sekitar 801 °C, sedangkan MgO meleleh pada sekitar 2.852 °C.',
        'c. Keras tetapi rapuh.',
        'Senyawa ionik keras karena ion-ion terikat kuat. Namun, ketika dipukul, satu lapisan ion bergeser sedikit sehingga ion sejenis (positif dengan positif, negatif dengan negatif) berhadapan. Terjadi tolakan kuat dan kristal retak atau pecah. Inilah mengapa kristal garam mudah pecah jika dipukul, tidak melengkung seperti logam.',
        'd. Banyak yang larut dalam air.',
        'Molekul air bersifat polar, memiliki ujung bermuatan parsial positif dan negatif. Ujung negatif air menarik kation, ujung positif air menarik anion, sehingga ion-ion terlepas dari kisi dan dikelilingi molekul air. Proses ini disebut hidrasi. Perlu diingat, tidak semua senyawa ionik larut dalam air. Contoh yang sukar larut: CaCO₃ (batu kapur) dan AgCl.',
        'e. Menghantarkan listrik dalam bentuk lelehan dan larutan, tetapi tidak dalam bentuk padat.',
        'Daya hantar listrik memerlukan partikel bermuatan yang bebas bergerak.',
        'Padatan: ion-ion terkunci pada posisi tetap dalam kisi, tidak dapat bergerak, sehingga tidak menghantarkan listrik.',
        'Lelehan: kisi runtuh sehingga ion-ion bebas bergerak, sehingga menghantarkan listrik.',
        'Larutan: ion-ion terpisah dan bebas bergerak dalam air, sehingga menghantarkan listrik.',
        'Proses terpisahnya ion saat larut disebut disosiasi. Contoh disosiasi NaCl dalam air:',
        'NaCl(s) → Na⁺(aq) + Cl⁻(aq)',
        'Contoh disosiasi MgCl₂ dalam air:',
        'MgCl₂(s) → Mg²⁺(aq) + 2Cl⁻(aq)',
        'Senyawa yang larutannya dapat menghantarkan listrik karena mengandung ion disebut elektrolit. Banyak senyawa ionik yang larut adalah elektrolit kuat.',
        'Ringkasan perbedaan wujud pada NaCl: padat tidak menghantarkan listrik (ion terkunci), lelehan dan larutan menghantarkan listrik (ion bebas bergerak).',

        // ===== 14. ION POLIATOMIK =====
        '14. Ion Poliatomik',
        'Ion poliatomik adalah kelompok dua atom atau lebih yang terikat dan bermuatan secara keseluruhan, serta berperilaku seperti satu ion. Atom-atom di dalam ion poliatomik terikat satu sama lain dengan ikatan yang sangat kuat (ikatan kovalen), sedangkan ion poliatomik tersebut berikatan ionik dengan ion lawannya.',
        'Contoh ion poliatomik yang perlu kamu hafal:',
        'NH₄⁺ : ion amonium (muatan +1).',
        'OH⁻ : ion hidroksida (muatan −1).',
        'NO₃⁻ : ion nitrat (muatan −1).',
        'CN⁻ : ion sianida (muatan −1).',
        'HCO₃⁻ : ion bikarbonat atau hidrogen karbonat (muatan −1).',
        'SO₄²⁻ : ion sulfat (muatan −2).',
        'CO₃²⁻ : ion karbonat (muatan −2).',
        'PO₄³⁻ : ion fosfat (muatan −3).',
        'Contoh senyawa ionik yang mengandung ion poliatomik:',
        'Ca²⁺ + CO₃²⁻ → CaCO₃ (kalsium karbonat)',
        '2Na⁺ + SO₄²⁻ → Na₂SO₄ (natrium sulfat)',
        '3Ca²⁺ + 2PO₄³⁻ → Ca₃(PO₄)₂ (kalsium fosfat)',
        'Na⁺ + OH⁻ → NaOH (natrium hidroksida)',
        'NH₄⁺ + Cl⁻ → NH₄Cl (amonium klorida)',
        'Perhatikan bahwa pada NH₄Cl tidak ada atom logam, tetapi tetap membentuk senyawa ionik karena NH₄⁺ bertindak sebagai kation. Jadi pernyataan "ikatan ionik selalu antara logam dan nonlogam" adalah penyederhanaan untuk tingkat dasar.',
        'Saat ion poliatomik jumlahnya lebih dari satu dalam rumus, tulis dalam tanda kurung. Contoh: Ca₃(PO₄)₂ dan Al₂(SO₄)₃. Tanda kurung menunjukkan bahwa indeks berlaku untuk seluruh ion poliatomik.',

        // ===== 15. RUMUS =====
        '15. Cara Menentukan Rumus Senyawa Ionik',
        'Prinsip utamanya: senyawa ionik harus netral secara listrik, artinya jumlah muatan positif sama dengan jumlah muatan negatif.',
        'Metode silang muatan:',
        'Langkah 1: Tulis kation dan muatannya.',
        'Langkah 2: Tulis anion dan muatannya.',
        'Langkah 3: Silangkan angka muatan. Angka muatan kation menjadi indeks anion, dan angka muatan anion menjadi indeks kation (tanda plus/minus dihilangkan).',
        'Langkah 4: Sederhanakan jika perbandingan indeks bisa disederhanakan, lalu hilangkan angka 1.',
        'Langkah 5: Cek kenetralan: muatan total harus nol.',
        'Contoh 1: natrium oksida. Na⁺ dan O²⁻. Silang muatan: Na mendapat indeks 2 dan O mendapat indeks 1. Rumusnya Na₂O. Cek: 2(+1) + 1(−2) = 0.',
        'Contoh 2: kalsium klorida. Ca²⁺ dan Cl⁻. Silang muatan: Ca mendapat indeks 1 dan Cl mendapat indeks 2. Rumusnya CaCl₂. Cek: (+2) + 2(−1) = 0.',
        'Contoh 3: aluminium klorida. Al³⁺ dan Cl⁻. Silang muatan: Al mendapat indeks 1 dan Cl mendapat indeks 3. Rumusnya AlCl₃. Cek: (+3) + 3(−1) = 0.',
        'Contoh 4: aluminium oksida. Al³⁺ dan O²⁻. Silang muatan: Al mendapat indeks 2 dan O mendapat indeks 3. Rumusnya Al₂O₃. Cek: 2(+3) + 3(−2) = 0.',
        'Contoh 5: magnesium oksida. Mg²⁺ dan O²⁻. Silang muatan menghasilkan Mg₂O₂, lalu disederhanakan menjadi MgO. Cek: (+2) + (−2) = 0.',
        'Contoh 6 (ion poliatomik): aluminium sulfat. Al³⁺ dan SO₄²⁻. Silang muatan: Al mendapat indeks 2 dan SO₄ mendapat indeks 3. Karena SO₄ adalah ion poliatomik, tulis dalam kurung: Al₂(SO₄)₃. Cek: 2(+3) + 3(−2) = 0.',
        'Contoh 7 (ion poliatomik): amonium fosfat. NH₄⁺ dan PO₄³⁻. Silang muatan: NH₄ mendapat indeks 3 dan PO₄ mendapat indeks 1. Rumusnya (NH₄)₃PO₄. Cek: 3(+1) + (−3) = 0.',
        'Kesalahan umum yang sering terjadi: (1) lupa menyederhanakan seperti menulis Mg₂O₂ bukannya MgO, (2) mengubah indeks di dalam ion poliatomik, padahal indeks di dalam ion tidak boleh diubah, dan (3) lupa tanda kurung pada ion poliatomik yang jumlahnya lebih dari satu.',

        // ===== 16. TATA NAMA =====
        '16. Tata Nama Senyawa Ionik',
        'Aturan dasar: sebutkan nama kation terlebih dahulu, lalu nama anion. Angka indeks tidak disebutkan dalam nama senyawa ionik.',
        'Untuk anion monoatomik, nama unsur diberi akhiran "-ida". Contoh: klorin menjadi klorida, oksigen menjadi oksida, sulfur menjadi sulfida, fluor menjadi fluorida, bromin menjadi bromida.',
        'Contoh penamaan senyawa ionik biner (dua jenis unsur):',
        'NaCl : natrium klorida.',
        'KBr : kalium bromida.',
        'MgO : magnesium oksida.',
        'CaF₂ : kalsium fluorida.',
        'Al₂O₃ : aluminium oksida.',
        'Na₂S : natrium sulfida.',
        'Contoh penamaan senyawa dengan ion poliatomik (nama ion poliatomik dipakai apa adanya):',
        'Na₂SO₄ : natrium sulfat.',
        'CaCO₃ : kalsium karbonat.',
        'NH₄Cl : amonium klorida.',
        'KNO₃ : kalium nitrat.',
        'NaOH : natrium hidroksida.',
        'Ca₃(PO₄)₂ : kalsium fosfat.',
        'Beberapa logam, terutama logam transisi, dapat membentuk lebih dari satu jenis kation. Pada kasus ini, muatan kation ditulis dengan angka Romawi dalam kurung setelah nama logam.',
        'FeCl₂ : besi(II) klorida (ion Fe²⁺).',
        'FeCl₃ : besi(III) klorida (ion Fe³⁺).',
        'Cu₂O : tembaga(I) oksida (ion Cu⁺).',
        'CuO : tembaga(II) oksida (ion Cu²⁺).',
        'Catatan: ion logam transisi, seperti Fe²⁺, Fe³⁺, dan Cu²⁺, tidak selalu memiliki konfigurasi elektron seperti gas mulia. Jadi, kecenderungan mencapai konfigurasi gas mulia berlaku baik untuk logam golongan utama, tetapi tidak selalu untuk logam transisi.',
        'Cara menentukan muatan logam dari rumus: gunakan prinsip kenetralan. Misalnya pada FeCl₃, ada 3 ion Cl⁻ (total −3), sehingga satu ion Fe harus bermuatan +3 supaya netral. Maka namanya besi(III) klorida.',

        // ===== 17. FAKTOR =====
        '17. Faktor yang Memengaruhi Kekuatan Ikatan Ionik',
        'Kekuatan ikatan ionik menentukan seberapa keras, seberapa tinggi titik leleh, dan seberapa stabil suatu senyawa ionik. Faktor yang memengaruhinya adalah sebagai berikut.',
        'Besar muatan ion: semakin besar muatan kation dan anion, semakin kuat tarikan elektrostatik. Contoh: MgO (2+, 2−) lebih kuat daripada NaCl (1+, 1−).',
        'Jarak antarion: semakin pendek jarak antara kation dan anion, semakin kuat tariknya.',
        'Ukuran ion: ion yang lebih kecil menghasilkan jarak antarion yang lebih pendek sehingga tarikan lebih kuat. Contoh: LiF memiliki ikatan lebih kuat daripada CsI.',
        'Energi kisi: nilai energi kisi yang besar menandakan ikatan ionik yang kuat dan biasanya sejalan dengan titik leleh yang tinggi.',
        'Perbandingan titik leleh sebagai contoh: NaCl sekitar 801 °C, MgO sekitar 2.852 °C. Perbedaan besar ini terutama disebabkan oleh muatan ion pada MgO yang dua kali lipat.',

        // ===== 18. PENERAPAN =====
        '18. Penerapan Ikatan Ionik dalam Kehidupan',
        'Senyawa ionik ada di sekitar kita setiap hari.',
        'Natrium klorida (NaCl): garam dapur untuk bumbu masakan dan pengawet makanan. Dalam tubuh, ion Na⁺ dan Cl⁻ berperan menjaga keseimbangan cairan.',
        'Kalsium karbonat (CaCO₃): penyusun batu kapur, kapur tulis, marmer, dan cangkang kerang atau telur.',
        'Kalsium oksida (CaO): dikenal sebagai kapur tohor, digunakan dalam industri semen dan pertanian.',
        'Magnesium oksida (MgO): bahan pelapis tahan api (tahan panas) karena titik lelehnya sangat tinggi.',
        'Aluminium oksida (Al₂O₃): bahan amplas (abrasif) dan keramik karena sangat keras.',
        'Natrium bikarbonat (NaHCO₃): soda kue untuk pengembang adonan.',
        'Kalsium fosfat (Ca₃(PO₄)₂): komponen utama tulang dan gigi.',
        'Kalium nitrat (KNO₃) dan amonium nitrat (NH₄NO₃): bahan pupuk untuk menyuburkan tanaman.',
        'Natrium hidroksida (NaOH): bahan pembuatan sabun dan pembersih saluran.',
        'Ion Na⁺, K⁺, Ca²⁺, dan Mg²⁺ juga berperan penting dalam kerja saraf, kontraksi otot, dan fungsi sel dalam tubuh kita.',

        // ===== 19. KESALAHAN UMUM =====
        '19. Kesalahan Konsep yang Sering Terjadi',
        'Kesalahan 1: "Satu molekul NaCl." Senyawa ionik tidak membentuk molekul tunggal. NaCl adalah kisi raksasa ion Na⁺ dan Cl⁻, sehingga istilah yang tepat adalah unit rumus.',
        'Kesalahan 2: "Proton ikut berpindah saat terbentuk ion." Yang berpindah hanya elektron. Jumlah proton tetap.',
        'Kesalahan 3: "Senyawa ionik padat bisa menghantarkan listrik." Tidak bisa, karena ion terkunci pada kisi. Baru bisa menghantarkan listrik setelah melebur atau larut.',
        'Kesalahan 4: "Semua senyawa ionik larut dalam air." Tidak benar. CaCO₃ dan AgCl sukar larut.',
        'Kesalahan 5: "Senyawa ionik keras berarti tidak mudah pecah." Senyawa ionik keras tetapi rapuh, sehingga mudah pecah ketika dipukul.',
        'Kesalahan 6: "Atom yang menerima elektron akan menjadi lebih kecil." Justru anion lebih besar daripada atom asalnya, sedangkan kation lebih kecil.',

        // ===== 20. LATIHAN =====
        '20. Latihan Singkat dan Pembahasan',
        'Soal 1: Tuliskan proses pembentukan ion dari atom K (nomor atom 19) dan Br (nomor atom 35, golongan VIIA), lalu tentukan rumus senyawanya.',
        'Pembahasan: K berkonfigurasi 2, 8, 8, 1 sehingga melepas 1 elektron menjadi K⁺. Br berada pada golongan VIIA (7 elektron valensi) sehingga menerima 1 elektron menjadi Br⁻. Perbandingan 1 : 1, rumusnya KBr (kalium bromida).',
        'Soal 2: Tentukan rumus dan nama senyawa ionik yang terbentuk antara Ca²⁺ dan Cl⁻.',
        'Pembahasan: Silang muatan menghasilkan CaCl₂. Cek: (+2) + 2(−1) = 0. Namanya kalsium klorida.',
        'Soal 3: Mengapa lelehan NaCl dapat menghantarkan listrik, sedangkan padatan NaCl tidak?',
        'Pembahasan: Pada padatan, ion Na⁺ dan Cl⁻ terkunci pada kisi kristal sehingga tidak bebas bergerak. Pada lelehan, kisi runtuh sehingga ion-ion bebas bergerak dan dapat membawa muatan listrik.',
        'Soal 4: Mana yang titik lelehnya lebih tinggi, NaCl atau MgO? Jelaskan.',
        'Pembahasan: MgO. Muatan ion pada MgO (2+ dan 2−) lebih besar daripada pada NaCl (1+ dan 1−), sehingga tarikan elektrostatik dan energi kisinya lebih besar, dan diperlukan energi lebih banyak untuk melelehkannya.',
        'Soal 5: Tentukan rumus aluminium sulfat dan jumlah ion yang terdapat dalam satu unit rumusnya.',
        'Pembahasan: Al³⁺ dan SO₄²⁻, silang muatan menghasilkan Al₂(SO₄)₃. Satu unit rumus mengandung 2 ion Al³⁺ dan 3 ion SO₄²⁻, jadi 5 ion seluruhnya.',
        'Soal 6: Mengapa kristal garam pecah ketika dipukul, sedangkan kawat logam hanya melengkung?',
        'Pembahasan: Pada kristal ionik, pukulan menggeser lapisan ion sehingga ion sejenis saling berhadapan dan tolak-menolak, akibatnya kristal pecah. Itulah sifat rapuh senyawa ionik.',

        // ===== KESIMPULAN =====
        'Kesimpulan',
        'Ikatan ionik adalah ikatan yang terbentuk karena tarikan elektrostatik antara kation dan anion. Dalam model dasar, kation terbentuk dari atom logam yang melepaskan elektron, sedangkan anion terbentuk dari atom nonlogam yang menerima elektron, sehingga keduanya cenderung mencapai konfigurasi elektron yang stabil.',
        'Senyawa ionik tersusun dalam kisi kristal dan dinyatakan dengan unit rumus yang netral secara listrik. Karena tarikan antarionnya kuat, senyawa ionik umumnya berupa padatan kristal, bertitik leleh dan titik didih tinggi, keras tetapi rapuh, banyak yang larut dalam air, serta menghantarkan listrik dalam bentuk lelehan atau larutan, tetapi tidak dalam bentuk padat.'
      ],
      keyPoints: [
        'Ikatan ionik adalah tarikan elektrostatik antara kation (bermuatan positif) dan anion (bermuatan negatif).',
        'Dalam model dasar, ikatan ionik terbentuk melalui perpindahan elektron dari atom logam ke atom nonlogam.',
        'Atom logam melepaskan elektron dan membentuk kation; atom nonlogam menerima elektron dan membentuk anion.',
        'Yang berpindah hanya elektron, jumlah proton tidak berubah.',
        'Kation lebih kecil daripada atom asalnya, sedangkan anion lebih besar daripada atom asalnya.',
        'Pembentukan ion berkaitan dengan kecenderungan atom mencapai konfigurasi elektron yang stabil seperti gas mulia (aturan oktet dan duplet).',
        'Logam memiliki energi ionisasi rendah, sedangkan nonlogam memiliki afinitas elektron dan keelektronegatifan tinggi.',
        'Struktur Lewis ikatan ionik menggambarkan perpindahan elektron; anion ditulis dalam kurung siku dengan muatannya.',
        'Rumus senyawa ionik harus netral: jumlah muatan positif sama dengan jumlah muatan negatif (metode silang muatan).',
        'Penamaan senyawa ionik: nama kation diikuti nama anion; logam bermuatan ganda diberi angka Romawi.',
        'Senyawa ionik tersusun dalam kisi kristal dan memakai istilah unit rumus, bukan molekul.',
        'Energi kisi menunjukkan kekuatan ikatan ionik dalam kristal; makin besar muatan dan makin kecil ukuran ion, makin besar energi kisi.',
        'Senyawa ionik bertitik leleh dan titik didih tinggi, keras tetapi rapuh, dan banyak yang larut dalam air.',
        'Senyawa ionik menghantarkan listrik dalam bentuk lelehan dan larutan karena ion bebas bergerak, tetapi tidak dalam bentuk padat.',
        'Ion poliatomik (NH₄⁺, OH⁻, NO₃⁻, SO₄²⁻, CO₃²⁻, PO₄³⁻) berperilaku sebagai satu ion dalam senyawa ionik.'
      ],
      examples: [
        'NaCl (natrium klorida): terbentuk dari Na⁺ dan Cl⁻ melalui perpindahan 1 elektron dari natrium ke klorin; perbandingan ion 1 : 1.',
        'KBr (kalium bromida): terbentuk dari K⁺ dan Br⁻; perbandingan ion 1 : 1.',
        'MgCl₂ (magnesium klorida): terbentuk dari 1 ion Mg²⁺ dan 2 ion Cl⁻.',
        'CaF₂ (kalsium fluorida): terbentuk dari 1 ion Ca²⁺ dan 2 ion F⁻.',
        'Na₂O (natrium oksida): terbentuk dari 2 ion Na⁺ dan 1 ion O²⁻.',
        'MgO (magnesium oksida): terbentuk dari 1 ion Mg²⁺ dan 1 ion O²⁻; titik leleh sangat tinggi (sekitar 2.852 °C).',
        'CaO (kalsium oksida): terbentuk dari 1 ion Ca²⁺ dan 1 ion O²⁻.',
        'Al₂O₃ (aluminium oksida): terbentuk dari 2 ion Al³⁺ dan 3 ion O²⁻.',
        'AlCl₃ (aluminium klorida): terbentuk dari 1 ion Al³⁺ dan 3 ion Cl⁻.',
        'CaCO₃ (kalsium karbonat): terbentuk dari 1 ion Ca²⁺ dan 1 ion karbonat CO₃²⁻.',
        'Na₂SO₄ (natrium sulfat): terbentuk dari 2 ion Na⁺ dan 1 ion sulfat SO₄²⁻.',
        'NH₄Cl (amonium klorida): terbentuk dari ion NH₄⁺ dan Cl⁻ (contoh senyawa ionik tanpa atom logam).',
        'Al₂(SO₄)₃ (aluminium sulfat): terbentuk dari 2 ion Al³⁺ dan 3 ion SO₄²⁻.',
        'Ca₃(PO₄)₂ (kalsium fosfat): terbentuk dari 3 ion Ca²⁺ dan 2 ion fosfat PO₄³⁻.',
        'FeCl₃ (besi(III) klorida): terbentuk dari 1 ion Fe³⁺ dan 3 ion Cl⁻.'
      ],
      illustrationType: 'lewis'
    }
  ],

  summary: [
    'Ikatan ionik terbentuk karena tarikan elektrostatik antara kation dan anion.',
    'Dalam model dasar, atom logam melepaskan elektron menjadi kation dan atom nonlogam menerima elektron menjadi anion, sehingga keduanya cenderung mencapai konfigurasi elektron yang stabil.',
    'Muatan kation sama dengan jumlah elektron yang dilepas, dan muatan anion sama dengan jumlah elektron yang diterima.',
    'Rumus senyawa ionik ditentukan dengan silang muatan dan harus netral secara listrik; penamaannya menyebut kation lebih dulu, lalu anion.',
    'Senyawa ionik tersusun dalam kisi kristal dengan perbandingan ion tertentu yang disebut unit rumus.',
    'Energi kisi menunjukkan kekuatan ikatan ionik dan bertambah besar jika muatan ion besar dan ukuran ion kecil.',
    'Senyawa ionik bertitik leleh tinggi, keras tetapi rapuh, banyak yang larut dalam air, dan menghantarkan listrik dalam bentuk lelehan atau larutan.',
    'Ion poliatomik seperti NH₄⁺, SO₄²⁻, dan PO₄³⁻ dapat membentuk senyawa ionik dan ditulis dalam kurung bila jumlahnya lebih dari satu.'
  ],

  author: 'Farrel Firmansyah Handoko (Ikatan Ionik)'
};

export default modul2Data;
