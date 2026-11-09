# AGENT.md
# Panduan Pengembangan Website ChemBond

## 1. Project Identity

Proyek ini merupakan website media pembelajaran interaktif Kimia dengan materi **Ikatan Kimia** untuk peserta didik SMA/MA kelas X.

- Nama website: ChemBond
- Judul utama Beranda: Mengungkap Rahasia Ikatan Antaratom
- Teknologi: React, Vite, dan TypeScript.
- Bahasa: Indonesia.

Pengembangan website bertujuan membantu peserta didik memahami konsep Ikatan Kimia melalui materi, ilustrasi visual, simulasi interaktif, dan latihan soal.

Seluruh pengembangan harus mengikuti dokumen:
- `AGENTS.md` pada root proyek.
- `PRD.md`
- `TEAM.md`
- `USER_FLOW.md`
- `BACKLOG.md`
- `DESAIN_TEKNIS.md`

## 2. Technology Rules

- Gunakan React dan Vite sebagai teknologi utama.
- Pertahankan TypeScript dan TSX sesuai konfigurasi proyek.
- Gunakan CSS untuk mengatur tampilan.
- Gunakan komponen React yang reusable.
- Gunakan data lokal untuk materi dan soal.
- Jangan menambahkan framework atau library baru tanpa kebutuhan yang jelas.
- Jangan mengganti konfigurasi proyek tanpa persetujuan.
- Pertahankan dependensi dan fungsi yang sudah tersedia.

## 3. Project Structure

Pisahkan kode berdasarkan fungsi dan tanggung jawabnya.

Panduan struktur:

- `src/components/`: komponen yang digunakan berulang.
- `src/pages/`: halaman utama jika sesuai dengan struktur proyek.
- `src/data/materi/`: konten materi pembelajaran.
- `src/data/kuis/`: soal, pilihan jawaban, kunci, dan pembahasan.
- `src/assets/`: gambar, ikon, dan ilustrasi.
- `src/styles/`: file CSS jika diperlukan.

Ketentuan:
- Periksa struktur proyek sebelum membuat folder baru.
- Sesuaikan dengan struktur yang sudah tersedia.
- Jangan membuat file atau folder duplikat.
- Pisahkan konten materi, soal, dan komponen tampilan.
- Gunakan penamaan file dan komponen yang jelas.
- Jangan memindahkan file tanpa kebutuhan yang jelas.

## 4. Development Rules

- Setiap halaman memiliki tanggung jawab yang jelas.
- Perubahan satu halaman tidak boleh merusak halaman lainnya.
- Hindari duplikasi kode.
- Pertahankan fungsi yang sudah berjalan.
- Jangan menghapus fitur tanpa persetujuan.
- Gunakan komponen yang dapat digunakan kembali.
- Pastikan setiap tombol dan navigasi memiliki fungsi.
- Kerjakan perubahan secara bertahap.
- Jangan mengimplementasikan fitur di luar permintaan tanpa persetujuan.

## 5. Data Management

- Gunakan data lokal untuk pengembangan awal.
- Pisahkan data materi dan soal dari komponen tampilan.
- Penyimpanan Local Storage dikembangkan pada Pertemuan 3.
- Login dan database dikembangkan pada Pertemuan 4 sesuai kontrak data.
- Jangan menganggap penggunaan Local Storage dilarang untuk seluruh program.
- Jangan mengaktifkan fitur database sebelum tahap yang ditentukan.
- Jangan menyimpan password, token, atau API key dalam repositori.
- Pertahankan struktur dan kontrak data yang telah disepakati.

## 6. UI/UX Design

Gunakan desain yang ceria, modern, menarik, dan ramah untuk peserta didik SMA/MA.

### 6.1 Identitas Warna

Gunakan gradasi pink fuchsia menuju coral dan oranye hangat.

Warna utama:
- Hot pink: `#F72F91`
- Magenta: `#D91D78`
- Coral: `#FF6B79`
- Oranye: `#FF9B52`
- Peach: `#FFC078`

Ketentuan:
- Gunakan gradasi yang menyatu, cerah, dan memiliki kedalaman visual.
- Hindari background putih polos atau pastel kusam yang mendominasi.
- Gunakan panel putih hangat atau peach muda untuk konten.
- Pastikan teks mudah dibaca dan memiliki kontras yang cukup.

### 6.2 Ilustrasi dan Dekorasi

Gunakan elemen visual kimia, seperti:
- Molekul dengan atom berbentuk bola.
- Ilustrasi atom dan orbit elektron.
- Rumus H₂O, CO₂, NH₃, CH₄, dan NaCl.
- Struktur cincin benzena.
- Simbol unsur dari tabel periodik.
- Peralatan laboratorium.
- Gelembung, partikel, dan kilauan kecil.

Gunakan SVG, CSS, atau aset lokal.

Jangan menggunakan emoji sebagai pengganti seluruh ilustrasi utama.

### 6.3 Komponen Antarmuka

- Kartu dengan sudut membulat.
- Bayangan lembut.
- Tipografi yang ramah dan mudah dibaca.
- Tombol dengan desain konsisten.
- Animasi dan efek hover yang mendukung pembelajaran.
- Navigasi konsisten pada seluruh halaman.

### 6.4 Responsivitas

Website harus responsif pada:
- Laptop dan desktop.
- Tablet.
- Smartphone.

Sesuaikan ukuran teks, ilustrasi, tata letak, dan navigasi dengan ukuran layar.

## 7. Educational Content

- Materi harus sesuai dengan konsep ilmiah Kimia.
- Gunakan bahasa Indonesia yang mudah dipahami siswa kelas X.
- Sajikan materi secara sistematis.
- Gunakan ilustrasi dan contoh kehidupan sehari-hari.
- Gunakan notasi kimia dengan benar.
- Soal harus sesuai dengan materi yang dipelajari.
- Setiap soal memiliki kunci jawaban dan pembahasan.
- Berikan umpan balik terhadap jawaban siswa.
- Hindari miskonsepsi dalam penjelasan materi.
- Periksa ketepatan konsep kimia sebelum dipublikasikan.

## 8. Website Structure and Navigation

ChemBond memiliki lima halaman utama:

1. Beranda
2. Materi
3. Simulasi
4. Kuis
5. Progres

Ketentuan:
- Tidak menggunakan konsep Peta Petualangan.
- Tidak menggunakan enam pos belajar dari rancangan lama.
- ChemBond tetap menjadi nama website atau logo.
- Judul utama Beranda adalah "Mengungkap Rahasia Ikatan Antaratom".
- Materi dibagi menjadi tiga modul.
- Simulasi, Kuis, dan Progres menjadi halaman tersendiri.
- Navigasi lima halaman menggunakan internal state berbasis `useState` pada komponen utama `App.tsx`.
- Tidak menambahkan React Router DOM atau library routing eksternal.
- Navigasi mengikuti `PRD.md`, `USER_FLOW.md`, dan `DESAIN_TEKNIS.md`.

### 8.1 Beranda

Beranda merupakan halaman utama untuk memperkenalkan ChemBond.

Komponen:
- Navbar.
- Hero section.
- Judul utama "Mengungkap Rahasia Ikatan Antaratom".
- Deskripsi singkat pembelajaran.
- Tombol Mulai Belajar.
- Bagian pemantik fenomena kimia sehari-hari.
- Pengantar pembelajaran.
- Tujuan pembelajaran.
- Pratinjau tiga modul.
- Pengenalan fitur website.

Bagian pemantik dapat menampilkan fenomena:
- Air (H₂O).
- Garam dapur (NaCl).
- Logam.

Setiap fenomena dilengkapi pertanyaan pemantik yang menghubungkan kehidupan sehari-hari dengan konsep ikatan kimia.

Beranda menjadi acuan desain untuk seluruh halaman.

### 8.2 Materi

Materi terdiri atas tiga modul:

**Modul 1 – Pengenalan Ikatan Kimia**
- Pengertian ikatan kimia.
- Kestabilan atom.
- Konfigurasi elektron.
- Elektron valensi.
- Aturan duplet dan oktet.

Penanggung jawab: Nanda Putri Wardaningtyas.

**Modul 2 – Jenis-Jenis Ikatan Kimia**
- Pengertian jenis ikatan kimia.
- Ikatan ion.
- Ikatan kovalen.
- Ikatan logam.
- Karakteristik dan contoh setiap jenis ikatan.

Penanggung jawab materi ikatan ion: Farrel Firmansyah Handoko.

Penanggung jawab materi ikatan kovalen dan logam: Sonia Farah Abdila.

**Modul 3 – Contoh Penerapan Ikatan Kimia**
- Penerapan ikatan kimia dalam kehidupan sehari-hari.
- Contoh senyawa dan zat berdasarkan jenis ikatannya.
- Struktur Lewis.
- Contoh penerapan konsep pada molekul sederhana.

Penanggung jawab utama konten penerapan dan visual: Sonia Farah Abdila, dengan dukungan anggota tim sesuai kesepakatan.

Ketentuan:
- Setiap modul memiliki tujuan pembelajaran.
- Penjelasan materi harus sistematis.
- Gunakan ilustrasi dan contoh yang relevan.
- Materi dan soal dipisahkan dari komponen tampilan.
- Penyelesaian materi menggunakan tombol manual "Tandai Materi Selesai"; membuka atau membaca halaman saja tidak otomatis menandai materi selesai.
- Pembagian kerja mengikuti TEAM.md.

### 8.3 Simulasi

Simulasi digunakan untuk membantu siswa memahami proses pembentukan ikatan kimia.

Fitur utama:

**Simulasi Ikatan Ion**
- Visualisasi perpindahan elektron dari Na ke Cl.
- Menunjukkan pembentukan Na⁺ dan Cl⁻.
- Menjelaskan gaya tarik-menarik elektrostatik.

Penanggung jawab: Farrel Firmansyah Handoko.

**Visualisasi Ikatan Kovalen**
- Visualisasi pemakaian bersama pasangan elektron.
- Contoh molekul H₂, H₂O, dan CO₂.
- Menampilkan pasangan elektron ikatan dan pasangan elektron bebas jika relevan.

Penanggung jawab: Sonia Farah Abdila.

Ketentuan:
- Interaksi harus memberikan respons visual.
- Simulasi harus memiliki penjelasan konsep.
- Visualisasi harus benar secara ilmiah.
- Sediakan ilustrasi statis sebagai alternatif.
- Model elektron merupakan penyederhanaan untuk pembelajaran.

### 8.4 Kuis

Kuis digunakan untuk menguji pemahaman siswa.

Ketentuan:
- Setiap kelompok materi memiliki minimal lima soal pilihan ganda.
- Setiap soal memiliki pilihan jawaban.
- Alur kuis: pengguna menjawab seluruh butir soal terlebih dahulu, kemudian menekan tombol Submit.
- Sistem menyimpan jawaban awal dan membuat ID percobaan yang unik secara lokal sebelum menampilkan pembahasan.
- Setelah penyimpanan jawaban awal berhasil, sistem menghitung skor serta menampilkan kunci jawaban dan pembahasan setiap butir soal.
- Setiap percobaan ulang memiliki ID baru dan riwayat percobaan sebelumnya tidak ditimpa.
- Skor percobaan terakhir menjadi skor utama yang ditampilkan pada ringkasan kuis dan halaman Progres.
- Data soal dipisahkan dari komponen tampilan di dalam folder `src/data`.

### 8.5 Progres

Halaman Progres digunakan untuk menampilkan perkembangan belajar siswa.

Informasi yang ditampilkan:
- Modul yang telah dipelajari beserta status penyelesaiannya.
- Aktivitas kuis yang telah diselesaikan.
- Skor hasil pengerjaan (skor percobaan terakhir sebagai nilai acuan utama).
- Riwayat seluruh percobaan kuis yang tersimpan secara terpisah.

Ketentuan:
- Gunakan Local Storage pada tahap pengembangan yang sesuai (Pertemuan 3).
- Status penyelesaian modul didasarkan pada penekanan tombol manual "Tandai Materi Selesai".
- Progres harus berasal dari data aktual, bukan data contoh palsu.
- Sediakan fitur reset dengan konfirmasi yang tidak menghapus data jika pengguna membatalkan.
- Jika data belum tersedia, tampilkan kondisi awal yang informatif.
- Tangani kondisi data lokal tidak tersedia atau rusak tanpa menyebabkan aplikasi error.

## 9. Team Development Rules

Pembagian tugas mengikuti `TEAM.md`.

### Nanda Putri Wardaningtyas
- Koordinator desain.
- Pengembang Beranda.
- Acuan identitas visual website.
- Pengembang Modul 1.
- Penyusun ilustrasi, soal, kunci jawaban, dan pembahasan Modul 1.

### Farrel Firmansyah Handoko
- Pengembang bagian ikatan ion pada Modul 2.
- Pengembang simulasi perpindahan elektron ikatan ion.
- Penyusun ilustrasi, soal, kunci jawaban, dan pembahasan materi ikatan ion.

### Sonia Farah Abdila
- Pengembang bagian ikatan kovalen dan ikatan logam pada Modul 2.
- Pengembang struktur Lewis dan visualisasi pembentukan ikatan kovalen.
- Penanggung jawab Modul 3: Contoh Penerapan Ikatan Kimia.
- Penyusun ilustrasi, soal, kunci jawaban, dan pembahasan bagian materi yang menjadi tanggung jawabnya.

### Kesepakatan Tim

- Semua anggota mengikuti sistem desain yang telah disepakati.
- Perubahan pada komponen bersama harus dikomunikasikan.
- Setiap modul diuji sebelum digabungkan.
- Keputusan besar harus disepakati bersama.
- Jangan mengubah pekerjaan anggota lain tanpa koordinasi.

## 10. Instructions Before Coding

Sebelum mengubah kode:

1. Baca AGENTS.md pada root proyek.
2. Baca PRD.md.
3. Baca TEAM.md.
4. Baca USER_FLOW.md.
5. Baca BACKLOG.md.
6. Baca DESAIN_TEKNIS.md.
7. Periksa struktur proyek yang sudah tersedia.
8. Identifikasi file yang berkaitan dengan perubahan.
9. Tentukan bagian yang perlu diubah.
10. Pertahankan desain dan fitur lain yang tidak diminta.

Ketentuan:
- Jangan langsung mengubah banyak halaman sekaligus.
- Kerjakan secara bertahap.
- Jangan membuat file duplikat.
- Jangan menghapus kode yang sudah berfungsi.
- Jika terdapat ketidaksesuaian dokumen, laporkan dan minta keputusan pengguna.
- Jangan mengarang keputusan yang belum disepakati.
- Tunggu persetujuan pengguna sebelum melakukan perubahan besar.

## 11. Testing and Validation

Setelah melakukan perubahan:

- Jalankan website dengan konfigurasi proyek yang tersedia.
- Periksa tampilan laptop dan HP.
- Uji navigasi ant halaman.
- Uji seluruh tombol dan interaksi yang terdampak.
- Periksa simulasi.
- Periksa perhitungan skor dan pembahasan kuis.
- Periksa penyimpanan dan pembacaan progres.
- Periksa error browser dan terminal.
- Pastikan perubahan tidak merusak halaman lain.
- Periksa kembali kebenaran materi kimia.

Jangan menyatakan pekerjaan selesai sebelum pengujian dilakukan.

## 12. Development Priority

Prioritas pengembangan mengikuti `BACKLOG.md`.

**MVP:**
1. Beranda dan pengantar pembelajaran.
2. Tiga modul materi.
3. Kuis dan pembahasan.
4. Penyimpanan progres lokal.
5. Simulasi ikatan ion.
6. Visualisasi ikatan kovalen.
7. Navigasi lima halaman.

**Pengembangan berikutnya:**
- Login dan autentikasi.
- Database cloud.
- Dashboard guru.
- Pengelolaan akun siswa.
- Sinkronisasi hasil belajar.
- Bank soal berdasarkan tingkat kesulitan.
- Simulasi lanjutan.
- Fitur tambahan lainnya.

Fitur lanjutan harus mengikuti tahapan pengembangan dan kontrak data proyek.

## 13. Security and Data Protection

- Jangan menyimpan password, token, API key, atau kredensial rahasia dalam repositori.
- Jangan menampilkan informasi rahasia dalam dokumentasi.
- Gunakan environment variable untuk konfigurasi rahasia jika fitur sudah diterapkan.
- Batasi akses data berdasarkan hak pengguna.
- Jangan menghapus riwayat hasil belajar tanpa persetujuan.
- Ikuti kontrak data dan aturan keamanan proyek.
- Jangan mengklaim fitur keamanan telah diterapkan jika belum diuji.

## 14. Reporting and Change Documentation

Setelah menyelesaikan pekerjaan, jelaskan:
1. Tujuan perubahan.
2. File yang dibuat.
3. File yang diubah.
4. Fitur yang ditambahkan atau diperbaiki.
5. Pengujian yang dilakukan.
6. Hasil pengujian.
7. Kendala atau fitur yang belum selesai.

Jangan melakukan commit, push, deployment, atau penghapusan data secara otomatis tanpa persetujuan pengguna.

## 15. Final Development Principles

Utamakan kode yang:
- Rapi dan modular.
- Mudah dipelihara.
- Mudah dikembangkan bersama anggota kelompok.
- Konsisten dengan desain ChemBond.
- Akurat secara ilmiah.
- Responsif dan mudah digunakan.
- Sesuai kebutuhan peserta didik.

**Prinsip utama: Ikuti dokumen proyek, pertahankan fungsi yang sudah berjalan, kerjakan perubahan secara bertahap, dan konfirmasikan keputusan yang belum disepakati.**