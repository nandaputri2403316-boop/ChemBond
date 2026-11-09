# BACKLOG.md
# Backlog Produk Website ChemBond

Backlog produk merupakan daftar pekerjaan pengembangan website ChemBond yang disusun berdasarkan kebutuhan dalam `PRD.md`, `USER_FLOW.md`, dan `DESAIN_TEKNIS.md`.

Backlog digunakan untuk menentukan prioritas pengembangan, membagi tanggung jawab anggota tim, serta menetapkan kriteria penerimaan dan status pengerjaan agar proses pengembangan berjalan terarah dan terukur.

---

## 1. MVP (Minimum Viable Product)

MVP merupakan versi awal website ChemBond yang memuat fitur utama sebagai media pembelajaran interaktif pada materi Ikatan Kimia untuk peserta didik SMA/MA kelas X.

### MVP-01. Pengembangan Halaman, Modul Pembelajaran, Kuis, dan Progres Belajar

**Alasan belajar:**

Membantu peserta didik memahami konsep ikatan kimia secara bertahap, mulai dari pengenalan ikatan kimia, jenis-jenis ikatan, hingga penerapannya dalam kehidupan sehari-hari. Kuis dan fitur progres belajar digunakan untuk mengevaluasi pemahaman serta memantau perkembangan belajar peserta didik.

**Kriteria penerimaan:**

1. Tersedia lima halaman utama, yaitu Beranda, Materi, Simulasi, Kuis, dan Progres.
2. Halaman Beranda menampilkan identitas ChemBond, pemantik pembelajaran, pengantar, tujuan pembelajaran, dan tombol mulai belajar.
3. Tersedia tiga modul pembelajaran:
   - Modul 1: Pengenalan Ikatan Kimia.
   - Modul 2: Jenis-Jenis Ikatan Kimia.
   - Modul 3: Contoh Penerapan Ikatan Kimia.
4. Modul 1 mencakup konsep dasar ikatan kimia, kestabilan atom, konfigurasi elektron, elektron valensi, serta aturan duplet dan oktet.
5. Modul 2 mencakup ikatan ion, ikatan kovalen, dan ikatan logam.
6. Modul 3 mencakup contoh penerapan ikatan kimia dalam kehidupan sehari-hari serta hubungan jenis ikatan dengan karakteristik zat.
7. Materi dilengkapi penjelasan dan ilustrasi pendukung yang sesuai dengan konsep kimia.
8. Setiap kelompok kuis memiliki minimal lima soal pilihan ganda.
9. Kuis dapat menerima jawaban, melakukan pemeriksaan, menghitung skor, dan menampilkan pembahasan setelah Submit berhasil disimpan.
10. Setiap percobaan kuis memiliki ID unik dan riwayat pengerjaan tidak ditimpa oleh percobaan berikutnya.
11. Skor percobaan terakhir menjadi skor utama yang ditampilkan pada halaman Progres.
12. Status penyelesaian setiap modul dapat dicatat melalui tombol "Tandai Materi Selesai".
13. Membuka atau membaca materi saja tidak otomatis mengubah status menjadi selesai.
14. Progres dan riwayat kuis disimpan menggunakan Local Storage.
15. Pengguna dapat melihat kondisi progres awal apabila belum memiliki aktivitas belajar.
16. Fitur reset progres dilengkapi konfirmasi dan tidak menghapus data apabila pengguna membatalkan.
17. Navigasi antarlima halaman berfungsi dengan baik menggunakan internal state (`useState`) tanpa React Router DOM.
18. Tampilan dapat digunakan pada desktop, tablet, dan perangkat seluler.

**Pelaksana/Reviewer:**

- Nanda Putri Wardaningtyas: Pengembangan halaman Beranda dan Modul 1, termasuk konsep dasar ikatan kimia, kestabilan atom, konfigurasi elektron, dan elektron valensi.
- Farrel Firmansyah Handoko: Pengembangan materi ikatan ion dan konten kuis yang berkaitan dengan bagian tugasnya.
- Sonia Farah Abdila: Pengembangan materi ikatan kovalen, ikatan logam, struktur Lewis, dan contoh penerapan yang menjadi bagian tugasnya.
- Pengembangan Modul 3 dan integrasi halaman dilakukan sesuai pembagian serta koordinasi seluruh anggota tim.
- Reviewer: Seluruh anggota tim.

**Status/PR:** BELUM MULAI

### MVP-02. Pengembangan Fitur Penyimpanan Hasil Berbasis Database dan Panel Guru

**Alasan belajar:**

Memungkinkan hasil pembelajaran peserta didik terdokumentasi secara individual sehingga guru dapat memantau perkembangan dan mengevaluasi pemahaman berdasarkan hasil pengerjaan soal.

**Kriteria penerimaan:**

1. Hasil pengerjaan peserta didik dapat disimpan secara individual.
2. Guru dapat melihat hasil pengerjaan peserta didik.
3. Hasil pengerjaan dapat ditampilkan berdasarkan setiap butir soal.
4. Pengguna hanya dapat mengakses data sesuai dengan hak akses yang dimiliki.
5. Sistem autentikasi dan database dapat digunakan untuk menyimpan serta mengelola data pengguna.

**Rencana teknologi:** Firebase Authentication dan Cloud Firestore.

**Pelaksana/Reviewer:** Belum ditentukan.

**Status/PR:** DITUNDA – Di luar cakupan MVP awal.

### MVP-03. Pengembangan Visualisasi Interaktif Ikatan Kimia

**Alasan belajar:**

Membantu peserta didik memahami proses pembentukan ikatan kimia pada tingkat submikroskopik yang sulit diamati secara langsung, khususnya perpindahan elektron pada ikatan ion dan penggunaan bersama pasangan elektron pada ikatan kovalen.

**Kriteria penerimaan:**

1. Tersedia simulasi perpindahan elektron pada proses pembentukan ikatan ion.
2. Simulasi ikatan ion menggambarkan perpindahan satu elektron dari atom Na ke atom Cl sehingga terbentuk ion Na⁺ dan Cl⁻.
3. Tersedia visualisasi penggunaan bersama pasangan elektron pada ikatan kovalen.
4. Visualisasi ikatan kovalen mencakup contoh molekul H₂, H₂O, dan CO₂.
5. Visualisasi sesuai dengan struktur Lewis dan konsep kimia yang benar.
6. Pengguna dapat mengamati proses atau representasi pembentukan ikatan melalui interaksi yang tersedia.
7. Tersedia alternatif berupa ilustrasi statis apabila fitur interaktif tidak dapat digunakan.
8. Visualisasi dilengkapi penjelasan konsep agar pengguna memahami proses yang ditampilkan.

**Pelaksana/Reviewer:**

- Simulasi ikatan ion: Farrel Firmansyah Handoko.
- Visualisasi ikatan kovalen: Sonia Farah Abdila.
- Reviewer: Nanda Putri Wardaningtyas dan anggota tim lainnya.

**Status/PR:** BELUM MULAI

---

## 2. Rincian Fitur Interaktif yang Dipilih

### Fitur 1: Simulasi Pembentukan Ikatan Ion

**Nama fitur:** Simulasi Pembentukan Ikatan Ion.

**Tujuan belajar dan kesulitan peserta didik:**

Membantu peserta didik memahami proses perpindahan elektron serta pembentukan ion positif (kation) dan ion negatif (anion).

**Peserta didik mengubah/mengamati/menjelaskan:**

Peserta didik mengamati perpindahan satu elektron dari atom Na ke atom Cl serta mengidentifikasi pembentukan ion Na⁺ dan Cl⁻.

**Versi minimum dan fitur yang ditunda:**

- Versi minimum berupa visualisasi atau animasi perpindahan satu elektron dari Na ke Cl.
- Simulasi dengan variasi unsur dan interaksi yang lebih kompleks ditunda.

**Jalur lokal/embed/API:**

Dikembangkan secara lokal menggunakan teknologi React, CSS, dan JavaScript/TypeScript sesuai struktur proyek.

**Sumber dan batas model kimia:**

Mengacu pada konsep pembentukan ikatan ion. Visualisasi merupakan model sederhana untuk menggambarkan perpindahan elektron, bukan representasi lintasan elektron yang sebenarnya.

**Input/tindakan uji dan hasil acuan:**

Peserta didik menjalankan simulasi pembentukan NaCl. Hasil yang diharapkan adalah atom Na melepaskan satu elektron, sedangkan atom Cl menerima satu elektron sehingga terbentuk Na⁺ dan Cl⁻.

**Alternatif saat fitur interaktif gagal:**

Ilustrasi statis proses pembentukan NaCl yang dilengkapi keterangan perpindahan elektron.

**Pelaksana/Reviewer:**

Farrel Firmansyah Handoko / Nanda Putri Wardaningtyas dan Sonia Farah Abdila.

### Fitur 2: Visualisasi Pembentukan Ikatan Kovalen

**Nama fitur:** Visualisasi Pembentukan Ikatan Kovalen.

**Tujuan belajar dan kesulitan peserta didik:**

Membantu peserta didik memahami penggunaan bersama pasangan elektron serta membedakan pasangan elektron ikatan (PEI) dan pasangan elektron bebas (PEB).

**Peserta didik mengubah/mengamati/menjelaskan:**

Peserta didik mengamati struktur Lewis molekul H₂, H₂O, dan CO₂ serta mengidentifikasi pasangan elektron ikatan dan pasangan elektron bebas.

**Versi minimum dan fitur yang ditunda:**

- Versi minimum berupa visualisasi struktur Lewis sederhana untuk molekul H₂, H₂O, dan CO₂.
- Fitur manipulasi elektron secara interaktif dan variasi molekul yang lebih kompleks ditunda.

**Jalur lokal/embed/API:**

Dikembangkan secara lokal menggunakan teknologi React, CSS, dan JavaScript/TypeScript sesuai struktur proyek.

**Sumber dan batas model kimia:**

Mengacu pada konsep struktur Lewis dan ikatan kovalen. Pasangan elektron yang ditampilkan merupakan representasi simbolik untuk menjelaskan penggunaan bersama elektron.

**Input/tindakan uji dan hasil acuan:**

Peserta didik memilih atau mengamati molekul yang tersedia. Hasil diperiksa berdasarkan jumlah elektron valensi, jumlah PEI dan PEB, serta penerapan aturan duplet dan oktet.

**Alternatif saat fitur interaktif gagal:**

Gambar struktur Lewis setiap molekul yang disertai penjelasan mengenai pasangan elektron.

**Pelaksana/Reviewer:**

Sonia Farah Abdila / Farrel Firmansyah Handoko dan Nanda Putri Wardaningtyas.

### Fitur 3: Kuis Interaktif

**Nama fitur:** Kuis Interaktif.

**Tujuan belajar dan kesulitan peserta didik:**

Mengevaluasi pemahaman peserta didik terhadap konsep ikatan kimia, mulai dari konsep dasar hingga jenis dan penerapan ikatan kimia.

**Peserta didik mengubah/mengamati/menjelaskan:**

Peserta didik memilih jawaban berdasarkan pertanyaan yang diberikan, kemudian memperoleh informasi mengenai ketepatan jawaban, skor, dan pembahasannya.

**Versi minimum dan fitur yang ditunda:**

- Versi minimum berupa kuis pilihan ganda dengan minimal lima soal pada setiap kelompok modul.
- Pengembangan bank soal adaptif dan pengelompokan soal berdasarkan tingkat kesulitan ditunda.

**Jalur lokal/embed/API:**

Dikembangkan secara lokal menggunakan React dan data soal yang dikelola dalam folder `src/data`.

**Sumber dan batas materi:**

Materi dan soal disusun berdasarkan konsep Ikatan Kimia yang tercantum dalam `PRD.md` serta mengacu pada sumber pembelajaran kimia yang relevan.

**Input/tindakan uji dan hasil acuan:**

1. Peserta didik memilih jawaban untuk setiap soal.
2. Peserta didik dapat mengubah jawaban sebelum Submit.
3. Setelah Submit, sistem membuat ID percobaan yang unik.
4. Sistem menyimpan jawaban awal dan identitas percobaan.
5. Setelah penyimpanan berhasil, sistem menghitung skor dan menampilkan hasil serta pembahasan.
6. Percobaan baru menghasilkan ID baru dan tidak menimpa riwayat sebelumnya.
7. Skor percobaan terakhir menjadi skor utama pada halaman Progres.

**Alternatif saat penyimpanan gagal:**

Sistem menampilkan pemberitahuan kegagalan penyimpanan. Kunci jawaban dan pembahasan tidak ditampilkan sebelum jawaban awal berhasil disimpan.

**Pelaksana/Reviewer:**

Seluruh anggota tim sesuai pembagian materi dan kelompok soal masing-masing.

---

## 3. Jika Waktu Cukup

Fitur berikut dapat dikembangkan apabila seluruh kebutuhan utama MVP telah terpenuhi:

1. Pengembangan dekorasi kimia yang lebih variatif pada halaman Beranda untuk memperkuat identitas visual ChemBond.
2. Penyempurnaan indikator progres belajar agar perkembangan peserta didik lebih mudah dipahami.
3. Penyempurnaan navigasi antarmodul untuk mempermudah perpindahan materi.
4. Penambahan variasi soal dan pembahasan untuk memperkaya kegiatan evaluasi pembelajaran.
5. Penyempurnaan animasi dan visualisasi pada simulasi ikatan kimia.
6. Penyempurnaan tampilan responsif agar website dapat digunakan dengan baik melalui berbagai perangkat.

---

## 4. Pekerjaan Lanjutan

Pekerjaan lanjutan merupakan pengembangan fitur yang belum menjadi prioritas dalam rilis awal website ChemBond, tetapi berpotensi dikembangkan pada tahap berikutnya.

1. Pengembangan sistem login dan autentikasi pengguna.
2. Pengembangan sistem penyimpanan hasil belajar menggunakan basis data.
3. Integrasi Firebase Authentication dan Cloud Firestore.
4. Pengembangan sinkronisasi progres belajar lintas perangkat.
5. Pengembangan panel guru untuk memantau hasil belajar peserta didik.
6. Pengembangan bank soal berdasarkan tingkat kesulitan.
7. Pengembangan simulasi interaktif pada materi ikatan logam.
8. Pengembangan pengelolaan akun dan kelas.

Pekerjaan tersebut dapat dipertimbangkan setelah seluruh kebutuhan utama MVP terpenuhi dan berdasarkan hasil evaluasi pengembangan website.

---

## 5. Temuan Uji

Temuan uji digunakan untuk mencatat permasalahan yang ditemukan selama proses pengembangan dan pengujian website.

Pencatatan bertujuan memastikan setiap fitur berfungsi sesuai kebutuhan dan kriteria penerimaan yang telah ditentukan.

**Format urutan pencatatan:**

- Issue.
- Prioritas: P0 / P1 / P2.
- Pemilik.
- Permasalahan.
- Tindakan perbaikan.
- Hasil uji ulang.
- Status.

**Aspek pengujian meliputi:**

1. Ketepatan konsep kimia.
2. Fungsi navigasi lima halaman.
3. Tampilan dan responsivitas website.
4. Fungsi modul pembelajaran.
5. Status penyelesaian materi.
6. Visualisasi dan simulasi interaktif.
7. Fungsi pengerjaan dan penilaian kuis.
8. Penyimpanan jawaban awal dan ID percobaan.
9. Penyimpanan serta pembacaan progres belajar.
10. Riwayat percobaan dan skor terbaru.
11. Reset progres dan penanganan kondisi gagal.

---

## 6. Riwayat Keputusan

Riwayat keputusan digunakan untuk mendokumentasikan perubahan ruang lingkup pengembangan (scope), pembagian tugas, dan prioritas pekerjaan selama proses pengembangan website ChemBond.

**Format urutan pencatatan:**

- Tanggal.
- Perubahan scope.
- Alasan.
- Persetujuan anggota.

Setiap perubahan penting dalam pengembangan website harus dikomunikasikan dan disepakati oleh seluruh anggota tim sebelum diterapkan. Hal ini dilakukan agar setiap anggota memiliki pemahaman yang sama terhadap arah dan prioritas pengembangan produk.