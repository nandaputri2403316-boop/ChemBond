# DESAIN_TEKNIS.md

## 1. Struktur Berkas dan Komponen

ChemBond dikembangkan menggunakan React dan Vite. Struktur teknis mengikuti struktur proyek yang sudah tersedia. Pengembangan dilakukan dengan memanfaatkan komponen dan berkas yang sudah ada tanpa membuat ulang proyek dari awal.

### Komponen utama

- **Komponen beranda:** Menampilkan identitas ChemBond, hook atau pemantik pembelajaran, pengantar materi Ikatan Kimia, tujuan pembelajaran, dan navigasi menuju halaman pembelajaran.
- **Komponen materi/detail:** Menampilkan tiga modul pembelajaran, yaitu Pengenalan Ikatan Kimia, Jenis-Jenis Ikatan Kimia, dan Contoh Penerapan Ikatan Kimia. Setiap modul memuat materi, ilustrasi, dan visualisasi pendukung.
- **Komponen simulasi:** Menampilkan simulasi perpindahan elektron pada ikatan ion serta visualisasi penggunaan bersama pasangan elektron pada ikatan kovalen.
- **Komponen kuis/pembahasan:** Menangani penyajian soal, pemilihan jawaban, pengiriman jawaban, pemeriksaan hasil, perhitungan skor, dan penampilan pembahasan.
- **Komponen progres:** Menampilkan status penyelesaian setiap modul, skor kuis terbaru, dan riwayat percobaan kuis.
- **Data lokal:** Data materi, soal, pilihan jawaban, kunci jawaban, dan pembahasan dikelola secara terpisah di dalam folder `src/data`.
- **Layanan penyimpanan lokal:** Mengelola penyimpanan dan pembacaan progres belajar serta riwayat percobaan kuis menggunakan Local Storage.
- **Layanan autentikasi dan database:** Belum termasuk dalam implementasi MVP. Integrasi Firebase Authentication dan Cloud Firestore direncanakan sebagai pengembangan lanjutan sesuai kebutuhan proyek.
- **Gaya/CSS:** Mengatur tampilan, tata letak, warna, tipografi, animasi, dan responsivitas website sesuai identitas visual ChemBond.

### Prinsip pengelolaan berkas

1. Data materi dan soal dipisahkan dari komponen tampilan.
2. Setiap komponen memiliki tanggung jawab yang jelas.
3. Perubahan dilakukan dengan mempertahankan struktur dan fungsi proyek yang sudah berjalan.
4. Penamaan berkas dan komponen mengikuti konvensi yang sudah digunakan dalam proyek.
5. Struktur berkas aktual harus tetap disesuaikan dengan kondisi repository, bukan membuat struktur baru yang tidak diperlukan.

---

## 2. Navigasi

### Model navigasi

ChemBond menggunakan navigasi berbasis internal state (`useState`) pada komponen utama `App.tsx`.

Navigasi tidak menggunakan React Router DOM atau library routing eksternal karena proyek telah menerapkan mekanisme perpindahan halaman menggunakan state.

### Struktur halaman

ChemBond memiliki lima halaman utama:

1. **Beranda (`beranda`):** Menampilkan hook atau pemantik pembelajaran, pengantar Ikatan Kimia, tujuan pembelajaran, dan tombol untuk memulai pembelajaran.
2. **Materi (`materi`):** Menampilkan tiga modul pembelajaran, yaitu Pengenalan Ikatan Kimia, Jenis-Jenis Ikatan Kimia, dan Contoh Penerapan Ikatan Kimia.
3. **Simulasi (`simulasi`):** Menyediakan simulasi atau visualisasi pembentukan ikatan ion dan ikatan kovalen.
4. **Kuis (`kuis`):** Menyediakan soal latihan, pemilihan jawaban, pengiriman jawaban, skor, dan pembahasan.
5. **Progres (`progres`):** Menampilkan status penyelesaian materi, skor kuis terbaru, dan riwayat percobaan kuis.

### ID halaman

- `beranda`: Halaman Beranda.
- `materi`: Halaman Materi.
- `simulasi`: Halaman Simulasi.
- `kuis`: Halaman Kuis.
- `progres`: Halaman Progres.

### Pemetaan ID materi

- `materi-1`: Pengenalan Ikatan Kimia.
- `materi-2`: Jenis-Jenis Ikatan Kimia.
- `materi-3`: Contoh Penerapan Ikatan Kimia.

Setiap ID materi terhubung dengan data dan konten pembelajaran yang sesuai.

### Alur navigasi

1. Pengguna membuka halaman Beranda.
2. Pengguna memilih tombol mulai belajar untuk menuju halaman Materi.
3. Pengguna memilih salah satu dari tiga modul pembelajaran.
4. Pengguna dapat membuka halaman Simulasi untuk mengeksplorasi pembentukan ikatan ion dan kovalen.
5. Pengguna membuka halaman Kuis untuk mengerjakan soal.
6. Pengguna membuka halaman Progres untuk melihat perkembangan belajar.
7. Pengguna dapat berpindah halaman melalui navbar tanpa kehilangan data yang sudah tersimpan.

### Kebutuhan konfigurasi hosting

Karena navigasi menggunakan internal state dan bukan history routing, konfigurasi rewrite URL khusus untuk React Router tidak diperlukan pada tahap MVP.

---

## 3. Alur Data

### 3.1 Konten dan soal

- Data materi, soal, pilihan jawaban, kunci jawaban, dan pembahasan disimpan secara terpisah di folder `src/data`.
- Komponen mengambil data sesuai modul atau kelompok kuis yang dipilih pengguna.
- Struktur data dibuat konsisten agar mudah digunakan oleh komponen materi dan kuis.
- Identitas soal dan versi data perlu dipertahankan apabila riwayat pengerjaan kuis disimpan dalam jangka panjang.
- Perubahan pada data soal tidak boleh menyebabkan riwayat percobaan lama kehilangan keterkaitan dengan soal yang dikerjakan.

### 3.2 Jawaban pengguna

- Jawaban yang dipilih pengguna dikelola melalui state pada komponen kuis.
- Pengguna dapat mengubah pilihan jawaban sebelum melakukan Submit.
- Setelah Submit, sistem membuat identitas percobaan baru yang unik.
- Sistem menyimpan jawaban awal pengguna beserta identitas percobaan.
- Kunci jawaban dan pembahasan hanya dapat ditampilkan setelah penyimpanan jawaban awal berhasil.
- Setiap percobaan baru disimpan sebagai data terpisah dan tidak menimpa percobaan sebelumnya.

### 3.3 Hasil pengerjaan

Setelah jawaban berhasil disimpan, sistem:

1. Memeriksa jawaban pengguna.
2. Menghitung jumlah jawaban benar.
3. Menghitung skor berdasarkan jumlah jawaban benar dibandingkan jumlah seluruh soal.
4. Menampilkan hasil pengerjaan.
5. Menampilkan kunci jawaban dan pembahasan.
6. Menyimpan hasil percobaan ke dalam riwayat kuis.

Skor dari percobaan terakhir menjadi skor utama yang ditampilkan pada halaman Progres. Seluruh riwayat percobaan sebelumnya tetap dipertahankan.

### 3.4 Penyimpanan progres materi

- Status setiap modul dikelola secara terpisah.
- Status awal setiap modul adalah "Belum Selesai".
- Modul hanya berubah menjadi "Selesai" setelah pengguna menekan tombol "Tandai Materi Selesai".
- Membuka atau membaca materi tidak otomatis mengubah status penyelesaian.
- Status penyelesaian disimpan menggunakan Local Storage agar tetap tersedia ketika pengguna berpindah halaman atau memuat ulang website.

### 3.5 Namespace penyimpanan

Penyimpanan lokal perlu memiliki identitas yang konsisten, meliputi:

- Identitas aplikasi ChemBond.
- Versi struktur data atau skema penyimpanan.
- Identitas aktivitas pembelajaran.
- Status penyelesaian setiap modul.
- Data hasil dan riwayat percobaan kuis.

Pengelolaan versi skema diperlukan agar perubahan struktur penyimpanan pada pengembangan berikutnya tidak langsung merusak data yang sudah tersedia.

### 3.6 Penyimpanan lokal dan pengembangan lanjutan

Pada tahap MVP:
- Local Storage digunakan untuk menyimpan progres materi dan riwayat kuis.
- Pengguna dapat mengakses kembali data pada perangkat dan browser yang sama.
- Data belum disinkronkan ke perangkat lain.
- Login dan autentikasi belum diterapkan.

Pada pengembangan lanjutan:
- Firebase Authentication digunakan untuk autentikasi pengguna.
- Cloud Firestore digunakan untuk penyimpanan data terpusat.
- Sinkronisasi progres dan hasil kuis dapat dikembangkan sesuai kebutuhan.
- Pengelolaan data pengguna dan panel guru mengikuti rancangan serta kontrak data yang ditetapkan.

---

## 4. Perilaku yang Harus Dijaga

### 4.1 Aturan penyelesaian materi

- Setiap modul memiliki status penyelesaian sendiri.
- Status awal adalah "Belum Selesai".
- Pengguna harus menekan tombol "Tandai Materi Selesai" untuk mengubah status menjadi "Selesai".
- Status penyelesaian tidak berubah hanya karena pengguna membuka atau membaca materi.
- Status tetap tersimpan setelah pengguna berpindah halaman atau memuat ulang website.

### 4.2 Aturan pengerjaan dan skor kuis

- Skor dihitung berdasarkan jumlah jawaban benar dibandingkan jumlah seluruh soal.
- Kuis dinyatakan selesai setelah pengguna melakukan Submit dan sistem berhasil menyimpan jawaban awal beserta identitas percobaan.
- Kunci jawaban dan pembahasan tidak boleh ditampilkan sebelum penyimpanan berhasil.
- Setiap pengerjaan baru menghasilkan ID percobaan yang unik.
- Percobaan baru tidak boleh menimpa riwayat percobaan sebelumnya.
- Skor percobaan terakhir menjadi skor utama pada halaman Progres.

### 4.3 Pembacaan progres

- Sistem membaca data progres dari Local Storage ketika aplikasi dimuat.
- Data yang tersedia ditampilkan sesuai status penyelesaian modul dan hasil kuis.
- Jika pengguna belum memiliki aktivitas belajar, sistem menampilkan kondisi progres awal.
- Data yang tidak valid atau tidak sesuai struktur harus ditangani agar tidak menyebabkan aplikasi gagal dimuat.

### 4.4 Reset dan batal reset

- Reset progres harus disertai konfirmasi pengguna.
- Sistem harus memberikan informasi mengenai data yang akan dihapus.
- Jika pengguna mengonfirmasi, sistem menghapus data sesuai cakupan reset yang telah ditentukan.
- Jika pengguna membatalkan, seluruh data tetap dipertahankan.
- Sistem tidak boleh menghapus data sebelum konfirmasi diterima.

### 4.5 Loading, kosong, gagal, dan fallback

Sistem harus menyediakan penanganan untuk kondisi berikut:

- **Loading:** Memberikan informasi ketika data sedang diproses.
- **Kosong:** Menampilkan pesan ketika pengguna belum memiliki progres atau riwayat kuis.
- **Gagal:** Menampilkan pemberitahuan apabila proses penyimpanan atau pembacaan data mengalami kendala.
- **Fallback:** Menyediakan visualisasi statis apabila simulasi interaktif tidak dapat dijalankan.

Kegagalan penyimpanan tidak boleh ditampilkan sebagai keberhasilan. Khusus kuis, pembahasan hanya boleh dibuka setelah penyimpanan jawaban awal berhasil.

### 4.6 Aksesibilitas

- Navigasi dan komponen interaktif harus dapat digunakan melalui keyboard.
- Tombol memiliki label yang jelas.
- Struktur heading disusun secara berurutan.
- Warna teks dan latar memiliki kontras yang memadai.
- Informasi penting tidak hanya disampaikan melalui warna atau animasi.
- Tampilan harus tetap dapat digunakan pada desktop, tablet, dan perangkat seluler.

---

## 5. Keputusan dan Risiko Teknis

### 5.1 Keputusan teknis

1. Website dikembangkan menggunakan React dan Vite.
2. Navigasi lima halaman menggunakan internal state (`useState`) tanpa menambahkan React Router DOM.
3. Materi pembelajaran dibagi menjadi tiga modul.
4. Data materi dan soal dikelola secara terpisah melalui folder `src/data`.
5. Simulasi interaktif difokuskan pada pembentukan ikatan ion dan visualisasi ikatan kovalen.
6. Kuis menyediakan minimal lima soal pilihan ganda untuk setiap kelompok modul sesuai PRD.
7. Penyelesaian materi dilakukan secara manual melalui tombol "Tandai Materi Selesai".
8. Local Storage digunakan untuk menyimpan status materi dan riwayat percobaan kuis pada tahap MVP.
9. Setiap percobaan kuis memiliki ID unik dan riwayatnya dipertahankan.
10. Skor percobaan terakhir ditampilkan sebagai skor utama.
11. Firebase Authentication dan Cloud Firestore merupakan rencana pengembangan lanjutan, bukan persyaratan implementasi MVP.

### 5.2 Risiko teknis

Beberapa risiko yang perlu diperhatikan:

- **Data Local Storage hilang:** Data dapat hilang apabila pengguna menghapus data browser atau menggunakan perangkat lain.
- **Perubahan struktur data:** Perubahan skema penyimpanan dapat menyebabkan data lama tidak terbaca jika tidak ditangani.
- **Penyimpanan gagal:** Sistem harus mencegah hasil kuis ditampilkan sebagai hasil tersimpan apabila proses penyimpanan gagal.
- **Perubahan bank soal:** Perubahan soal dapat memengaruhi keterkaitan riwayat percobaan lama dengan soal yang dikerjakan.
- **Simulasi tidak berjalan:** Sistem perlu menyediakan visualisasi statis sebagai alternatif.
- **Perbedaan ukuran layar:** Komponen harus diuji agar tetap responsif dan mudah digunakan.

### 5.3 Pengujian

Pengujian dilakukan untuk memastikan:

1. Kelima halaman dapat diakses melalui navbar.
2. Navigasi berbasis state berjalan tanpa kehilangan data tersimpan.
3. Ketiga modul materi menampilkan konten yang sesuai.
4. Status penyelesaian materi hanya berubah setelah tombol penyelesaian ditekan.
5. Simulasi ikatan ion dan visualisasi ikatan kovalen dapat ditampilkan.
6. Kuis dapat menerima dan mengelola pilihan jawaban.
7. Jawaban awal dan ID percobaan tersimpan sebelum pembahasan ditampilkan.
8. Setiap percobaan baru menghasilkan ID unik.
9. Riwayat percobaan lama tetap tersedia.
10. Skor terbaru ditampilkan dengan benar pada halaman Progres.
11. Reset dan pembatalan reset berjalan sesuai fungsinya.
12. Kondisi kosong, gagal, dan fallback ditangani dengan baik.
13. Tampilan dapat digunakan pada desktop dan perangkat seluler.

---

## 6. Batasan Implementasi

### Fitur MVP

- Lima halaman utama ChemBond.
- Tiga modul materi Ikatan Kimia.
- Penyelesaian materi secara manual.
- Simulasi ikatan ion.
- Visualisasi ikatan kovalen.
- Kuis pilihan ganda beserta skor dan pembahasan.
- Penyimpanan progres menggunakan Local Storage.
- Riwayat percobaan kuis.
- Halaman Progres.
- Reset progres dengan konfirmasi.

### Fitur pengembangan lanjutan

- Login dan autentikasi pengguna.
- Integrasi Firebase Authentication.
- Integrasi Cloud Firestore.
- Sinkronisasi progres lintas perangkat.
- Pengelolaan akun dan kelas.
- Panel guru.
- Pengelolaan bank soal terpusat.
- Pengembangan simulasi ikatan logam.

Pengembangan fitur lanjutan tidak boleh mengganggu fungsi MVP yang telah berjalan.
