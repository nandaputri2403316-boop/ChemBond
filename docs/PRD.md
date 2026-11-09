# Product Requirements Document (PRD)
## ChemBond – Media Pembelajaran Interaktif Ikatan Kimia

## 1. Informasi Proyek

| Informasi | Keterangan |
|---|---|
| Nama Proyek | ChemBond |
| Jenis Produk | Website Media Pembelajaran Interaktif Kimia |
| Materi Utama | Ikatan Kimia |
| Sasaran Pengguna | Peserta didik SMA/MA kelas X |
| Platform | Website |
| Teknologi | React, Vite, TypeScript, CSS |
| Bahasa | Indonesia |
| Penyimpanan Awal | Local Storage |
| Status Pengembangan | MVP |

### 1.1 Identitas Produk

ChemBond merupakan website media pembelajaran interaktif yang dirancang untuk membantu peserta didik memahami konsep Ikatan Kimia melalui materi visual, simulasi, latihan soal, dan pemantauan progres belajar.

Nama ChemBond berasal dari istilah Chemical Bond yang menggambarkan hubungan atau ikatan antaratom dalam pembentukan suatu zat.

**Judul utama website:**

"Mengungkap Rahasia Ikatan Antaratom"

Judul tersebut digunakan sebagai pesan utama pada halaman Beranda, sedangkan ChemBond digunakan sebagai nama dan identitas produk.

---

## 2. Latar Belakang

Ikatan Kimia merupakan salah satu materi penting dalam pembelajaran Kimia kelas X. Materi ini membahas bagaimana atom berinteraksi untuk mencapai kestabilan melalui pembentukan ikatan kimia.

Dalam mempelajari materi tersebut, peserta didik perlu memahami konsep elektron valensi, kestabilan atom, perpindahan elektron, pemakaian bersama pasangan elektron, serta karakteristik berbagai jenis ikatan.

Sebagian konsep Ikatan Kimia bersifat abstrak karena melibatkan partikel dan proses yang tidak dapat diamati secara langsung. Penyampaian materi yang hanya mengandalkan penjelasan tertulis berpotensi membuat peserta didik kesulitan membayangkan proses pembentukan ikatan.

Oleh karena itu, diperlukan media pembelajaran yang dapat menghubungkan konsep abstrak dengan fenomena kehidupan sehari-hari melalui visualisasi dan interaksi.

ChemBond dikembangkan sebagai media pembelajaran berbasis website yang menggabungkan:
- Pemantik fenomena kimia sehari-hari.
- Materi pembelajaran yang sistematis.
- Ilustrasi dan visualisasi konsep.
- Simulasi pembentukan ikatan.
- Kuis interaktif beserta pembahasan.
- Pemantauan progres belajar.

Melalui ChemBond, peserta didik diharapkan dapat mempelajari Ikatan Kimia secara lebih menarik, terarah, dan mandiri.

---

## 3. Tujuan Produk

ChemBond dikembangkan untuk:

1. Membantu peserta didik memahami konsep dasar Ikatan Kimia.
2. Menjelaskan kestabilan atom, konfigurasi elektron, dan elektron valensi.
3. Membantu peserta didik membedakan ikatan ion, kovalen, dan logam.
4. Memvisualisasikan proses pembentukan ikatan kimia melalui simulasi.
5. Menghubungkan konsep Ikatan Kimia dengan fenomena kehidupan sehari-hari.
6. Memberikan latihan soal untuk mengukur pemahaman peserta didik.
7. Menyediakan informasi progres belajar berdasarkan aktivitas yang dilakukan.

---

## 4. Target Pengguna

### 4.1 Pengguna Utama

Peserta didik SMA/MA kelas X yang sedang mempelajari materi Ikatan Kimia.

Karakteristik pengguna:
- Memerlukan penjelasan konsep secara bertahap.
- Membutuhkan ilustrasi untuk memahami konsep abstrak.
- Memerlukan contoh yang dekat dengan kehidupan sehari-hari.
- Membutuhkan latihan soal dan umpan balik.
- Menggunakan website melalui laptop, tablet, maupun smartphone.

### 4.2 Pengguna Pendukung

Guru Kimia dapat menggunakan ChemBond sebagai media pendukung pembelajaran.

Pada tahap MVP, ChemBond difokuskan untuk pembelajaran mandiri peserta didik. Fitur pengelolaan kelas dan pemantauan hasil belajar oleh guru direncanakan pada pengembangan berikutnya.

---

## 5. Ruang Lingkup Produk

ChemBond memiliki lima halaman utama:

1. Beranda.
2. Materi.
3. Simulasi.
4. Kuis.
5. Progres.

### 5.1 Beranda

Beranda merupakan halaman pertama yang dilihat pengguna ketika membuka ChemBond.

Halaman ini berfungsi sebagai pengenalan website, pengantar pembelajaran, dan penghubung menuju fitur utama.

#### 1. Navbar

Navbar berisi:
- Logo atau nama ChemBond.
- Menu Beranda.
- Menu Materi.
- Menu Simulasi.
- Menu Kuis.
- Menu Progres.

Ketentuan:
- Navbar konsisten pada seluruh halaman.
- Menu aktif memiliki penanda visual.
- Navigasi lima halaman dikelola menggunakan internal state (`useState`) pada komponen utama (`App.tsx`), tanpa menambahkan dependensi baru seperti React Router DOM.
- Navigasi mudah digunakan dan responsif pada seluruh ukuran layar.
- Setiap menu (Beranda, Materi, Simulasi, Kuis, Progres) mengubah state halaman aktif sehingga kelima halaman dapat diakses secara langsung dan konsisten.

#### 2. Hero Section

Hero section merupakan bagian utama yang memperkenalkan identitas dan tujuan ChemBond.

Konten:
- Nama website/logo: ChemBond.
- Judul utama: "Mengungkap Rahasia Ikatan Antaratom".
- Deskripsi singkat mengenai pembelajaran Ikatan Kimia.
- Tombol "Mulai Belajar".
- Ilustrasi visual atom, elektron, atau molekul.

Contoh deskripsi:

"Setiap zat di sekitar kita terbentuk melalui interaksi antaratom. Yuk, kenali bagaimana atom saling berikatan dan membentuk berbagai senyawa melalui pembelajaran interaktif bersama ChemBond!"

Ketentuan:
- Judul menjadi fokus utama.
- Ilustrasi mendukung konsep Ikatan Kimia.
- Tombol Mulai Belajar mengarahkan pengguna menuju bagian pengantar atau materi.

#### 3. Pemantik Fenomena Kimia

Bagian pemantik digunakan untuk membangkitkan rasa ingin tahu peserta didik sebelum mempelajari materi.

Pemantik ditampilkan dalam bentuk carousel atau kartu fenomena yang dapat dijelajahi pengguna.

Contoh fenomena:

**Fenomena 1 – Air (H₂O)**

Pertanyaan pemantik:
"Mengapa dua atom hidrogen dapat berikatan dengan satu atom oksigen membentuk air?"

**Fenomena 2 – Garam Dapur (NaCl)**

Pertanyaan pemantik:
"Bagaimana natrium dan klorin dapat membentuk garam dapur yang sering kita gunakan?"

**Fenomena 3 – Logam**

Pertanyaan pemantik:
"Mengapa logam dapat menghantarkan listrik dan memiliki karakteristik yang berbeda dari zat lainnya?"

Ketentuan:
- Setiap fenomena memiliki ilustrasi.
- Setiap fenomena dilengkapi pertanyaan pemantik.
- Konten menghubungkan pengalaman sehari-hari dengan konsep Ikatan Kimia.
- Pemantik tidak langsung memberikan seluruh jawaban.
- Fenomena menjadi pengantar menuju pembelajaran.

#### 4. Pengantar Pembelajaran

Bagian ini menjelaskan secara singkat apa yang akan dipelajari pengguna.

Contoh:

"Melalui ChemBond, kamu akan mempelajari bagaimana atom mencapai kestabilan, mengenal berbagai jenis ikatan kimia, serta memahami penerapannya dalam kehidupan sehari-hari."

#### 5. Tujuan Pembelajaran

Menampilkan gambaran kemampuan yang diharapkan setelah peserta didik mempelajari materi.

Tujuan pembelajaran meliputi:
- Menjelaskan konsep dasar ikatan kimia.
- Mengidentifikasi elektron valensi dan kestabilan atom.
- Membedakan jenis-jenis ikatan kimia.
- Menjelaskan proses pembentukan ikatan kimia.
- Menghubungkan ikatan kimia dengan contoh dalam kehidupan sehari-hari.

#### 6. Pratinjau Materi

Menampilkan tiga kartu modul pembelajaran:

1. Pengenalan Ikatan Kimia.
2. Jenis-Jenis Ikatan Kimia.
3. Contoh Penerapan Ikatan Kimia.

Setiap kartu memuat:
- Nomor atau identitas modul.
- Judul modul.
- Deskripsi singkat.
- Ilustrasi.
- Tombol untuk membuka materi.

#### 7. Pengenalan Fitur

Menampilkan fitur utama ChemBond:
- Materi: mempelajari konsep Ikatan Kimia.
- Simulasi: mengamati visualisasi pembentukan ikatan.
- Kuis: menguji pemahaman.
- Progres: melihat perkembangan belajar.

#### 8. Call to Action

Bagian penutup Beranda berisi ajakan untuk memulai pembelajaran.

Contoh:

"Siap mengungkap rahasia ikatan antaratom?"

Tombol:
"Mulai Petualangan Belajar" atau "Mulai Belajar".

Istilah petualangan hanya boleh digunakan sebagai ungkapan ajakan, bukan sebagai sistem Peta Petualangan atau mekanisme pos pembelajaran.

---

### 5.2 Materi

Halaman Materi merupakan bagian utama untuk menyampaikan konten pembelajaran Ikatan Kimia.

Materi dibagi menjadi tiga modul yang disusun secara berurutan.

#### Modul 1 – Pengenalan Ikatan Kimia

Fokus: memahami dasar pembentukan ikatan kimia dan kestabilan atom.

Submateri:

1. Pengertian Ikatan Kimia.
2. Kestabilan Atom.
3. Konfigurasi Elektron.
4. Elektron Valensi.
5. Aturan Duplet dan Oktet.

Ketentuan penyajian:
- Menjelaskan pengertian ikatan kimia.
- Menjelaskan alasan atom membentuk ikatan.
- Menampilkan konfigurasi elektron unsur sederhana.
- Menunjukkan hubungan elektron valensi dengan kestabilan atom.
- Menjelaskan aturan duplet dan oktet beserta contohnya.

Penanggung jawab: Nanda Putri Wardaningtyas.

#### Modul 2 – Jenis-Jenis Ikatan Kimia

Fokus: mengenal karakteristik dan proses pembentukan berbagai jenis ikatan kimia.

Submateri:

1. Pengantar Jenis-Jenis Ikatan Kimia.
2. Ikatan Ion.
3. Ikatan Kovalen.
4. Ikatan Logam.
5. Perbandingan Karakteristik Ikatan Kimia.

**A. Ikatan Ion**

Materi meliputi:
- Pengertian ikatan ion.
- Proses perpindahan elektron.
- Pembentukan kation dan anion.
- Gaya tarik elektrostatik.
- Contoh senyawa ion, seperti NaCl.

**B. Ikatan Kovalen**

Materi meliputi:
- Pengertian ikatan kovalen.
- Pemakaian bersama pasangan elektron.
- Ikatan kovalen tunggal, rangkap dua, dan rangkap tiga.
- Contoh molekul sederhana, seperti H₂, H₂O, dan CO₂.

**C. Ikatan Logam**

Materi meliputi:
- Pengertian ikatan logam.
- Model elektron terdelokalisasi.
- Hubungan ikatan logam dengan sifat logam.
- Contoh penerapan dalam kehidupan sehari-hari.

Penanggung jawab:
- Farrel Firmansyah Handoko: ikatan ion.
- Sonia Farah Abdila: ikatan kovalen dan ikatan logam.

#### Modul 3 – Contoh Penerapan Ikatan Kimia

Fokus: menghubungkan konsep ikatan kimia dengan senyawa dan fenomena kehidupan sehari-hari.

Submateri:
1. Penerapan Ikatan Ion.
2. Penerapan Ikatan Kovalen.
3. Penerapan Ikatan Logam.
4. Struktur Lewis.
5. Contoh Molekul dalam Kehidupan Sehari-hari.

Contoh pembahasan:
- NaCl sebagai contoh senyawa ion.
- H₂O sebagai contoh molekul dengan ikatan kovalen.
- CO₂ sebagai contoh molekul dengan ikatan kovalen.
- Logam tembaga sebagai contoh bahan dengan ikatan logam.
- Struktur Lewis untuk menggambarkan elektron valensi dan ikatan pada molekul sederhana.

Ketentuan:
- Gunakan contoh yang relevan.
- Sertakan struktur atau ilustrasi molekul.
- Jelaskan hubungan struktur dengan jenis ikatan.
- Gunakan notasi dan representasi kimia yang benar.

Penanggung jawab utama konten penerapan dan visual: Sonia Farah Abdila, dengan dukungan anggota tim sesuai pembagian tugas.

#### Ketentuan Umum Halaman Materi

Setiap modul harus memiliki:
- Judul dan pengantar.
- Tujuan pembelajaran.
- Penjelasan konsep.
- Ilustrasi atau visual pendukung.
- Contoh soal atau contoh penerapan.
- Rangkuman materi.
- Tombol "Tandai Materi Selesai".
- Minimal lima soal pilihan ganda pada kelompok materi terkait.

Ketentuan penyelesaian materi:
- Materi dinyatakan selesai ketika pengguna menekan tombol "Tandai Materi Selesai".
- Membuka atau membaca halaman saja tidak otomatis menandai materi selesai.
- Status penyelesaian harus disimpan secara lokal dan ditampilkan pada halaman Progres.

Materi disajikan dengan bahasa yang mudah dipahami, tidak terlalu padat, dan memiliki susunan yang konsisten.

---

### 5.3 Simulasi

Halaman Simulasi menyediakan visualisasi interaktif untuk membantu peserta didik memahami proses pembentukan ikatan kimia.

Fitur simulasi pada MVP difokuskan pada ikatan ion dan ikatan kovalen.

#### 1. Simulasi Ikatan Ion

Contoh: pembentukan NaCl.

Alur visual:
1. Menampilkan atom natrium (Na) dan klorin (Cl).
2. Menampilkan elektron valensi masing-masing atom.
3. Menunjukkan perpindahan satu elektron dari Na ke Cl.
4. Menampilkan pembentukan ion Na⁺ dan Cl⁻.
5. Menjelaskan gaya tarik elektrostatik antara kedua ion.

Interaksi:
- Tombol mulai simulasi.
- Tombol ulangi simulasi.
- Animasi perpindahan elektron.
- Penjelasan singkat pada setiap tahap.

Penanggung jawab: Farrel Firmansyah Handoko.

#### 2. Visualisasi Ikatan Kovalen

Contoh molekul:
- H₂.
- H₂O.
- CO₂.

Alur visual:
1. Menampilkan atom penyusun molekul.
2. Menampilkan elektron valensi.
3. Menunjukkan pasangan elektron yang digunakan bersama.
4. Menampilkan hasil pembentukan ikatan.
5. Menjelaskan struktur Lewis sederhana.

Interaksi:
- Memilih molekul.
- Menampilkan perubahan visual pembentukan ikatan.
- Tombol mulai dan ulangi.
- Penjelasan konsep.

Penanggung jawab: Sonia Farah Abdila.

#### Ketentuan Simulasi

- Simulasi harus sesuai dengan konsep kimia.
- Visualisasi dibuat sederhana dan mudah dipahami.
- Setiap simulasi dilengkapi penjelasan.
- Animasi tidak boleh mengaburkan konsep yang dijelaskan.
- Sediakan tampilan statis jika animasi atau interaksi tidak tersedia.
- Model visual merupakan penyederhanaan untuk tujuan pembelajaran.
- Simulasi ikatan logam belum menjadi prioritas MVP.

---

### 5.4 Kuis

Halaman Kuis digunakan untuk mengukur pemahaman peserta didik setelah mempelajari materi.

#### 1. Struktur Kuis

Kuis dikelompokkan berdasarkan tiga modul:

1. Kuis Modul 1 – Pengenalan Ikatan Kimia.
2. Kuis Modul 2 – Jenis-Jenis Ikatan Kimia.
3. Kuis Modul 3 – Contoh Penerapan Ikatan Kimia.

Setiap kelompok materi memiliki minimal lima soal pilihan ganda.

#### 2. Tampilan Soal

Setiap soal menampilkan:
- Nomor soal.
- Pertanyaan.
- Pilihan jawaban.
- Penanda jawaban yang dipilih.
- Tombol lanjut atau navigasi soal.

#### 3. Sistem Penilaian dan Riwayat Percobaan

Sistem menghitung jumlah jawaban benar dan jumlah soal yang dikerjakan.

Skor dihitung menggunakan rumus:

Skor = (Jumlah Jawaban Benar / Jumlah Seluruh Soal) × 100

Ketentuan penilaian dan riwayat:
- Semua percobaan kuis harus disimpan sebagai riwayat terpisah.
- Skor percobaan terakhir menjadi skor utama yang ditampilkan pada ringkasan hasil dan halaman Progres.
- Percobaan baru tidak boleh menimpa riwayat percobaan sebelumnya.

#### 4. Pembahasan dan Umpan Balik Kuis

Alur penyerahan dan pembahasan kuis:
1. Pengguna menjawab seluruh soal kuis terlebih dahulu.
2. Pengguna menekan tombol "Submit" atau "Kirim Jawaban".
3. Sistem menyimpan jawaban awal dan identitas percobaan kuis (attempt ID tetap) secara lokal.
4. Setelah proses penyimpanan berhasil, sistem menampilkan hasil kuis, kunci jawaban, dan pembahasan setiap butir soal.

Ketentuan:
- Kunci jawaban dan pembahasan baru diberikan setelah pengguna menyelesaikan penyerahan (submit) dan jawaban awal tersimpan.
- Sistem harus menangani kondisi jika ada butir soal yang belum dipilih sebelum proses submit dilakukan.
- Umpan balik menggunakan bahasa yang mendukung proses belajar.

#### 5. Hasil Kuis

Hasil kuis menampilkan:
- Skor akhir percobaan terkait (dengan skor percobaan terakhir sebagai nilai acuan utama).
- Jumlah jawaban benar.
- Jumlah jawaban salah.
- Ringkasan hasil pengerjaan.
- Tombol mengulang kuis.
- Tombol kembali ke materi atau menuju progres.

#### 6. Pengulangan Kuis

Siswa dapat mengulang kuis untuk memperbaiki pemahaman.

Ketentuan:
- Jika pengguna mengulang kuis, sistem membuat rekaman percobaan baru dengan identitas percobaan tersendiri.
- Percobaan baru tidak boleh menimpa riwayat percobaan sebelumnya.
- Kunci jawaban dan pembahasan harus tersedia pada setiap hasil percobaan.
- Perhitungan skor harus akurat.
- Soal dan pembahasan disimpan dalam data terpisah.

---

### 5.5 Progres

Halaman Progres menampilkan perkembangan aktivitas belajar peserta didik.

Pada tahap MVP, data progres disimpan secara lokal menggunakan Local Storage.

#### 1. Informasi Progres

Halaman ini menampilkan:
- Modul yang telah dipelajari beserta status penyelesaiannya.
- Kuis yang telah dikerjakan.
- Skor kuis, dengan skor percobaan terakhir sebagai skor utama yang ditampilkan.
- Riwayat seluruh percobaan kuis yang tersimpan secara terpisah.

#### 2. Status Pembelajaran

Status pembelajaran setiap modul dibedakan menjadi:
- Belum dipelajari.
- Sedang dipelajari.
- Telah dipelajari.

Ketentuan status:
- Status "Telah dipelajari" tercapai ketika pengguna menekan tombol "Tandai Materi Selesai" pada modul terkait.
- Membuka atau membaca halaman saja tidak otomatis menandai materi selesai.
- Status harus didasarkan pada aktivitas nyata pengguna, bukan data contoh palsu.

#### 3. Penyimpanan Data

- Gunakan Local Storage sesuai tahap pengembangan.
- Data dapat dibaca kembali ketika pengguna membuka website.
- Perubahan data harus tercatat dengan benar.
- Jika belum ada aktivitas, tampilkan kondisi awal yang informatif.
- Jika data tidak dapat dibaca, tampilkan kondisi yang sesuai.

#### 4. Reset Progres

Sediakan fitur untuk mengatur ulang progres belajar.

Ketentuan:
- Reset harus menggunakan konfirmasi.
- Jika pengguna membatalkan, data tetap dipertahankan.
- Jika pengguna menyetujui, data progres yang ditentukan akan diatur ulang.
- Jangan menghapus data lain yang tidak berkaitan dengan progres.

---

## 6. Alur Penggunaan Website (User Flow)

Alur utama penggunaan ChemBond:

1. Pengguna membuka website ChemBond.
2. Pengguna melihat Beranda dan identitas website.
3. Pengguna menjelajahi pemantik fenomena kimia.
4. Pengguna membaca pengantar dan tujuan pembelajaran.
5. Pengguna memilih Mulai Belajar.
6. Pengguna membuka Modul 1 dan dapat menekan tombol "Tandai Materi Selesai" setelah menyelesaikan materi.
7. Pengguna melanjutkan ke Modul 2 dan menekan tombol "Tandai Materi Selesai".
8. Pengguna melanjutkan ke Modul 3 dan menekan tombol "Tandai Materi Selesai".
9. Pengguna membuka Simulasi untuk mengamati pembentukan ikatan.
10. Pengguna mengerjakan Kuis dengan menjawab seluruh soal, kemudian menekan tombol Submit.
11. Sistem menyimpan jawaban awal dan identitas percobaan kuis, lalu menampilkan skor, kunci jawaban, dan pembahasan.
12. Pengguna membuka halaman Progres.
13. Sistem menampilkan status penyelesaian modul, skor percobaan terakhir, dan riwayat pengerjaan kuis.
14. Pengguna dapat mengulang kuis (menghasilkan riwayat percobaan baru tanpa menimpa yang lama) atau mempelajari kembali materi.

Alur ini menjadi acuan navigasi dan perilaku antarmuka website.

---

## 7. Kebutuhan Fungsional

| Kode | Fitur | Kebutuhan |
|---|---|---|
| FR-01 | Beranda | Menampilkan identitas, pengantar, pemantik, tujuan, dan navigasi. |
| FR-02 | Pemantik | Menampilkan fenomena kimia sehari-hari beserta pertanyaan pemantik. |
| FR-03 | Materi | Menampilkan tiga modul pembelajaran serta tombol penanda materi selesai. |
| FR-04 | Navigasi Materi | Memungkinkan pengguna membuka dan berpindah antarmodul. |
| FR-05 | Simulasi Ion | Menampilkan proses perpindahan elektron Na ke Cl. |
| FR-06 | Simulasi Kovalen | Menampilkan proses pemakaian bersama elektron. |
| FR-07 | Kuis | Menampilkan soal pilihan ganda berdasarkan kelompok materi. |
| FR-08 | Penilaian | Menghitung skor kuis dan menampilkan nilai percobaan terakhir sebagai skor utama. |
| FR-09 | Pembahasan | Menyimpan jawaban awal dan identitas percobaan saat submit sebelum menampilkan kunci dan pembahasan. |
| FR-10 | Pengulangan | Memungkinkan pengulangan kuis dengan membuat riwayat percobaan baru tanpa menimpa data lama. |
| FR-11 | Progres | Menampilkan status penyelesaian materi dan riwayat hasil belajar yang tersimpan. |
| FR-12 | Penyimpanan | Menyimpan progres menggunakan Local Storage pada tahap yang ditentukan. |
| FR-13 | Reset | Menyediakan pengaturan ulang progres dengan konfirmasi. |
| FR-14 | Responsivitas | Menyesuaikan tampilan dengan berbagai ukuran layar. |

---

## 8. Kebutuhan Nonfungsional

### 8.1 Kemudahan Penggunaan

- Antarmuka mudah dipahami.
- Navigasi jelas.
- Bahasa sederhana dan komunikatif.
- Informasi disajikan secara terstruktur.

### 8.2 Responsivitas

Website dapat digunakan melalui:
- Desktop.
- Laptop.
- Tablet.
- Smartphone.

### 8.3 Konsistensi Desain

- Seluruh halaman menggunakan identitas visual ChemBond.
- Komponen antarmuka memiliki gaya yang konsisten.
- Warna, tipografi, tombol, kartu, dan navigasi digunakan secara seragam.

### 8.4 Kinerja

- Website dapat dibuka dengan baik.
- Animasi tidak mengganggu penggunaan.
- Komponen tidak melakukan proses berlebihan.
- Aset visual dioptimalkan agar tidak membebani halaman.

### 8.5 Aksesibilitas

- Teks mudah dibaca.
- Kontras warna memadai.
- Tombol dan navigasi mudah dikenali.
- Interaksi dapat digunakan dengan keyboard jika memungkinkan.
- Informasi penting tidak hanya disampaikan melalui warna.

### 8.6 Keakuratan Ilmiah

- Materi sesuai dengan konsep Kimia.
- Notasi unsur dan senyawa ditulis dengan benar.
- Ilustrasi tidak menimbulkan miskonsepsi.
- Soal dan pembahasan sesuai dengan materi.

---

## 9. Identitas Visual dan Design System

ChemBond menggunakan gaya visual ceria, modern, dinamis, dan edukatif.

### 9.1 Palet Warna

Warna utama:

| Nama Warna | Kode |
|---|---|
| Hot Pink | #F72F91 |
| Magenta | #D91D78 |
| Coral | #FF6B79 |
| Orange | #FF9B52 |
| Peach | #FFC078 |

### 9.2 Penggunaan Warna

- Gradasi pink fuchsia menuju coral dan oranye digunakan sebagai identitas visual utama.
- Hot pink dan magenta digunakan untuk elemen utama dan penekanan.
- Coral dan oranye digunakan sebagai aksen.
- Peach digunakan untuk panel atau latar pendukung.
- Gunakan warna terang secara seimbang agar konten tetap mudah dibaca.

Hindari:
- Background putih polos yang mendominasi.
- Warna pastel kusam sebagai identitas utama.
- Penggunaan terlalu banyak warna tanpa hierarki.
- Teks dengan kontras rendah.

### 9.3 Ilustrasi

Gunakan elemen visual bertema kimia, seperti:
- Atom dan orbit elektron.
- Molekul dan struktur kimia.
- Bola atom berwarna.
- Rumus H₂O, CO₂, NH₃, CH₄, dan NaCl.
- Struktur benzena.
- Simbol unsur.
- Peralatan laboratorium.
- Partikel, gelembung, dan kilauan dekoratif.

### 9.4 Komponen UI

Gunakan:
- Kartu dengan sudut membulat.
- Bayangan lembut.
- Tombol dengan bentuk konsisten.
- Tipografi yang jelas.
- Ikon sederhana.
- Animasi ringan.
- Efek hover yang informatif.

### 9.5 Konsistensi Antarhalaman

Beranda menjadi acuan utama desain.

Halaman Materi, Simulasi, Kuis, dan Progres harus menggunakan identitas visual yang sama tanpa harus memiliki susunan konten yang identik.

---

## 10. Teknologi dan Arsitektur

### 10.1 Teknologi Utama

- React: membangun antarmuka berbasis komponen dan mengelola navigasi halaman via internal state (`useState`).
- Vite: menjalankan proses pengembangan dan build.
- TypeScript: membantu pengelolaan tipe data.
- CSS: mengatur desain dan responsivitas.
- Local Storage: menyimpan progres belajar pada tahap yang ditentukan.

### 10.2 Struktur Pengembangan

Pengembangan mengikuti struktur proyek yang sudah tersedia.

Panduan pemisahan:
- Komponen antarmuka.
- Halaman website.
- Data materi.
- Data kuis.
- Aset visual.
- File styling.
- Pengelolaan progres.

Konten materi dan soal harus dipisahkan dari komponen tampilan agar mudah dikelola dan dikembangkan bersama.

### 10.3 Ketentuan Implementasi

- Pertahankan konfigurasi proyek yang sudah berjalan.
- Jangan membuat ulang proyek dari awal.
- Jangan mengganti teknologi utama tanpa persetujuan.
- Gunakan mekanisme navigasi berbasis state internal (`useState`) yang sudah diterapkan pada proyek tanpa menambah library perutean eksternal (seperti React Router DOM).
- Gunakan komponen reusable.
- Hindari duplikasi kode.
- Jangan menambahkan dependensi baru tanpa kebutuhan yang jelas.
- Ikuti aturan pada AGENTS.md root.

---

## 11. Pengelolaan Data

### 11.1 Tahap Awal

Data materi dan kuis disimpan dalam file lokal proyek.

Data progres menggunakan Local Storage pada tahap pengembangan yang ditentukan.

### 11.2 Data Materi

Setiap modul memiliki data:
- Identitas modul.
- Judul.
- Deskripsi.
- Tujuan pembelajaran.
- Submateri.
- Konten penjelasan.
- Ilustrasi atau aset pendukung.

### 11.3 Data Kuis

Setiap soal memiliki:
- Identitas soal.
- Kelompok materi.
- Pertanyaan.
- Pilihan jawaban.
- Kunci jawaban.
- Pembahasan.

### 11.4 Data Progres

Data progres memuat:
- Status penyelesaian modul (berdasarkan aksi tombol "Tandai Materi Selesai").
- Skor kuis percobaan terakhir untuk setiap kelompok materi.
- Riwayat pengerjaan kuis terpisah dengan identitas percobaan (attempt ID tetap), rekaman jawaban awal, skor, dan waktu pengerjaan.

Ketentuan:
- Percobaan baru tidak boleh menimpa data percobaan kuis sebelumnya.
- Struktur data harus konsisten dan tidak boleh berubah sembarangan karena dapat memengaruhi fitur lain.

### 11.5 Pengembangan Penyimpanan

- Pertemuan 3: pengembangan penyimpanan progres menggunakan Local Storage.
- Pertemuan 4: pengembangan login dan database sesuai kontrak data proyek.

Jadwal tersebut mengikuti aturan proyek dan tidak berarti semua fitur penyimpanan harus dibuat sekaligus.

---

## 12. Pembagian Tugas Tim

Pengembangan dilakukan secara kolaboratif dengan pembagian tanggung jawab sebagai berikut.

### 12.1 Nanda Putri Wardaningtyas

Tanggung jawab:
- Koordinator desain.
- Pengembangan Beranda.
- Menentukan acuan visual utama.
- Mengembangkan Modul 1: Pengenalan Ikatan Kimia.
- Menyusun ilustrasi dan konten Modul 1.
- Menyusun soal, kunci jawaban, dan pembahasan Modul 1.
- Membantu menjaga konsistensi desain seluruh halaman.

### 12.2 Farrel Firmansyah Handoko

Tanggung jawab:
- Mengembangkan materi ikatan ion.
- Menyusun visualisasi ikatan ion.
- Mengembangkan simulasi perpindahan elektron.
- Menyusun soal, kunci jawaban, dan pembahasan bagian materi yang menjadi tanggung jawabnya.

### 12.3 Sonia Farah Abdila

Tanggung jawab:
- Mengembangkan materi ikatan kovalen.
- Mengembangkan materi ikatan logam.
- Mengembangkan struktur Lewis dan contoh penerapan.
- Mengembangkan visualisasi ikatan kovalen.
- Menyusun soal, kunci jawaban, dan pembahasan bagian materi yang menjadi tanggung jawabnya.

### 12.4 Kesepakatan Tim

- Setiap anggota bertanggung jawab terhadap kualitas materi bagiannya.
- Semua anggota mengikuti acuan desain Beranda.
- Perubahan komponen bersama harus dikomunikasikan.
- Pekerjaan setiap anggota diuji sebelum digabungkan.
- Keputusan besar harus disepakati bersama.
- Pembagian tugas lebih lanjut mengikuti TEAM.md.

---

## 13. Ruang Lingkup MVP

MVP merupakan versi awal ChemBond yang berfokus pada fungsi pembelajaran utama.

### 13.1 Fitur yang Termasuk MVP

1. Beranda dengan identitas ChemBond.
2. Pemantik fenomena kimia sehari-hari.
3. Tujuan pembelajaran.
4. Tiga modul materi.
5. Simulasi ikatan ion.
6. Visualisasi ikatan kovalen.
7. Kuis pilihan ganda.
8. Skor dan pembahasan.
9. Pengulangan kuis.
10. Penyimpanan progres lokal.
11. Halaman Progres.
12. Navigasi lima halaman.
13. Tampilan responsif.

### 13.2 Fitur yang Tidak Menjadi Prioritas MVP

- Login dan registrasi pengguna.
- Sinkronisasi database cloud.
- Dashboard guru.
- Pengelolaan kelas.
- Bank soal adaptif.
- Simulasi ikatan logam.
- Analitik pembelajaran tingkat lanjut.
- Sistem rekomendasi materi otomatis.

Fitur tersebut dapat dikembangkan setelah MVP berjalan dengan baik dan sesuai tahapan proyek.

---

## 14. Ruang Lingkup Fitur Lanjutan

Fitur lanjutan merupakan rencana pengembangan ChemBond setelah fitur utama MVP selesai.

### 14.1 Evaluasi Akhir dan Bank Soal

Rencana fitur:
- Menyediakan evaluasi akhir seluruh materi.
- Mengembangkan bank soal berdasarkan kelompok materi.
- Mengelompokkan soal berdasarkan tingkat kesulitan.
- Menampilkan hasil evaluasi.
- Menyimpan riwayat pengerjaan siswa.

Tujuan:
Memberikan evaluasi yang lebih menyeluruh terhadap pemahaman peserta didik.

### 14.2 Autentikasi Guru dan Siswa

Rencana fitur:
- Login pengguna.
- Pengelolaan identitas siswa dan guru.
- Pembagian hak akses berdasarkan peran.
- Pengaitan hasil belajar dengan akun pengguna.

Ketentuan:
- Dikembangkan pada tahap yang ditentukan proyek.
- Mengikuti kontrak data.
- Tidak mengganggu akses pembelajaran yang sudah tersedia pada tahap awal.

### 14.3 Sinkronisasi Basis Data

Rencana fitur:
- Penyimpanan data hasil belajar di cloud.
- Sinkronisasi progres antarperangkat.
- Penyimpanan riwayat kuis.
- Pengelolaan data kelas jika diperlukan.
- Integrasi dengan dashboard guru.

Teknologi database ditentukan berdasarkan kebutuhan proyek dan kesepakatan tim.

### 14.4 Dashboard Guru

Rencana fitur:
- Melihat daftar siswa.
- Melihat hasil kuis.
- Memantau progres belajar.
- Melihat ringkasan hasil pembelajaran.

Dashboard guru belum termasuk fitur MVP.

### 14.5 Pengembangan Simulasi

Rencana fitur:
- Simulasi ikatan logam.
- Penambahan variasi molekul.
- Interaksi visual yang lebih beragam.
- Pengembangan visualisasi struktur molekul.

### 14.6 Ketentuan Fitur Lanjutan

- Tidak wajib diterapkan pada MVP.
- Harus mengikuti tahapan pengembangan.
- Harus disepakati oleh tim.
- Harus sesuai dengan aturan root AGENTS.md.
- Tidak boleh merusak fitur yang sudah berjalan.

---

## 15. Kriteria Keberhasilan Produk

ChemBond dinyatakan memenuhi target MVP apabila:

1. Website dapat dijalankan dengan baik.
2. Lima halaman utama dapat diakses.
3. Beranda menampilkan identitas dan pemantik pembelajaran.
4. Tiga modul materi dapat dibuka, dipelajari, dan ditandai selesai melalui tombol "Tandai Materi Selesai".
5. Materi disajikan dengan benar secara ilmiah.
6. Simulasi ikatan ion dapat digunakan.
7. Visualisasi ikatan kovalen dapat digunakan.
8. Kuis dapat dikerjakan dengan alur menjawab seluruh soal sebelum menekan tombol Submit.
9. Sistem dapat menghitung skor dengan benar dan menampilkan skor percobaan terakhir sebagai nilai acuan utama.
10. Kunci jawaban dan pembahasan ditampilkan setelah jawaban awal dan identitas percobaan tersimpan.
11. Pengguna dapat mengulang kuis dengan riwayat percobaan tersimpan terpisah tanpa menimpa data lama.
12. Progres dan status penyelesaian tersimpan di Local Storage serta dapat ditampilkan pada halaman Progres.
13. Fitur reset progres berjalan dengan konfirmasi.
14. Website dapat digunakan pada laptop dan smartphone.
15. Tidak terdapat kesalahan yang mengganggu fungsi utama.

---

## 16. Batasan dan Asumsi

### 16.1 Batasan

- Materi dibatasi pada topik Ikatan Kimia untuk kelas X.
- Konten awal menggunakan bahasa Indonesia.
- Data materi dan soal dikelola secara lokal.
- Penyimpanan progres mengikuti tahapan pengembangan.
- Simulasi MVP difokuskan pada ikatan ion dan kovalen.
- Fitur autentikasi dan database cloud belum menjadi bagian MVP.

### 16.2 Asumsi

- Pengguna memiliki perangkat yang dapat mengakses website.
- Pengguna dapat menggunakan browser modern.
- Materi disusun berdasarkan konsep Kimia yang benar.
- Pengembangan dilakukan secara bertahap oleh anggota tim.
- Dokumen proyek menjadi acuan bersama dalam implementasi.

---

## 17. Risiko dan Penanganan

| Risiko | Penanganan |
|---|---|
| Konsep kimia sulit divisualisasikan | Gunakan ilustrasi sederhana dan penjelasan bertahap. |
| Simulasi tidak berjalan | Sediakan tampilan statis sebagai alternatif. |
| Desain antarhalaman tidak konsisten | Gunakan Beranda sebagai acuan visual. |
| Data materi dan soal tercampur | Pisahkan data dari komponen tampilan. |
| Perubahan kode merusak fitur lain | Lakukan perubahan bertahap dan pengujian. |
| Progres tidak tersimpan | Periksa proses penyimpanan dan pembacaan Local Storage. |
| Pembagian kerja tumpang tindih | Ikuti TEAM.md dan komunikasikan perubahan. |
| Fitur lanjutan menghambat MVP | Prioritaskan penyelesaian fitur utama terlebih dahulu. |

---

## 18. Dokumentasi dan Pemeliharaan

Setiap perubahan proyek harus didokumentasikan.

Dokumentasi mencakup:
- Fitur yang dikembangkan.
- File yang dibuat atau diubah.
- Perubahan struktur data.
- Pengujian yang dilakukan.
- Kendala yang ditemukan.
- Fitur yang belum selesai.

Dokumen proyek yang menjadi acuan:
- `AGENTS.md` pada root proyek.
- `docs/AGENT.md`.
- `docs/TEAM.md`.
- `docs/USER_FLOW.md`.
- `docs/BACKLOG.md`.
- `docs/DESAIN_TEKNIS.md`.
- `docs/PRD.md`.

Jika terjadi ketidaksesuaian antar dokumen, aturan root AGENTS.md dan ketentuan pengembangan dari dosen harus diprioritaskan. Perbedaan spesifikasi perlu dikomunikasikan sebelum implementasi.

---

## 19. Prinsip Pengembangan ChemBond

Pengembangan ChemBond berpedoman pada prinsip berikut:

1. Mengutamakan kebutuhan belajar peserta didik.
2. Menyajikan konsep Kimia secara benar dan mudah dipahami.
3. Menghubungkan materi dengan fenomena kehidupan sehari-hari.
4. Menggunakan visualisasi untuk membantu memahami konsep abstrak.
5. Menyediakan interaksi yang mendukung pembelajaran.
6. Menjaga konsistensi desain dan pengalaman pengguna.
7. Memisahkan data, tampilan, dan logika program.
8. Mengembangkan fitur secara bertahap.
9. Mempertahankan fitur yang telah berjalan.
10. Mengutamakan penyelesaian MVP sebelum fitur lanjutan.

**ChemBond dikembangkan sebagai media pembelajaran Ikatan Kimia yang interaktif, visual, sistematis, dan mudah digunakan untuk mendukung pembelajaran mandiri peserta didik SMA/MA kelas X.**

