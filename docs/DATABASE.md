# DATABASE.md

## Hasil Belajar ChemBond

### 1. Lingkup dan Pengelola

- **Nama produk:** ChemBond – Media Pembelajaran Ikatan Kimia.
- **Fokus penyimpanan:** Progres belajar, jawaban kuis, skor, dan riwayat pengerjaan peserta didik.
- **Sumber data materi dan soal:** `src/data` sebagai penyimpanan data materi, aktivitas, soal, kunci jawaban, dan pembahasan.
- **Penyimpanan MVP:** LocalStorage untuk menyimpan progres belajar dan riwayat pengerjaan kuis pada perangkat pengguna.
- **Pengembangan berikutnya:** Firebase Auth/Firestore sebagai pilihan utama atau Supabase sebagai alternatif. Provider final belum ditentukan dan harus disepakati oleh tim sebelum implementasi.
- **Nama project dan pengelola layanan:** Menggunakan identitas ChemBond. ID project dan pengelola ditentukan ketika layanan database dibuat.
- **Akun guru:** Direncanakan menggunakan satu akun guru dengan identitas yang ditetapkan melalui konfigurasi terlindungi.
- **Daftar siswa:** Direncanakan menggunakan daftar ID siswa yang dikelola melalui dashboard guru. Sistem tidak memerlukan administrasi banyak kelas.

### 2. Sumber dan Struktur Data

#### A. Data Materi dan Soal

Materi pembelajaran disimpan pada `src/data` dan dibagi menjadi tiga modul:

1. Modul 1 – Pengenalan Ikatan Kimia.
2. Modul 2 – Jenis-Jenis Ikatan Kimia.
3. Modul 3 – Contoh Penerapan Ikatan Kimia.

Setiap modul dapat memiliki data tujuan pembelajaran, materi, contoh, ilustrasi, aktivitas, soal, kunci jawaban, dan pembahasan.

Setiap soal perlu memiliki identitas unik agar jawaban dan hasil pengerjaan dapat dicocokkan dengan soal yang digunakan.

#### B. Data Progres Belajar

Progres belajar MVP disimpan secara lokal menggunakan LocalStorage.

Data progres mencakup:
- ID modul.
- Status penyelesaian modul.
- Waktu penyelesaian apabila tersedia.

Status penyelesaian modul ditentukan berdasarkan tindakan pengguna melalui fitur penandaan materi selesai.

#### C. Data Percobaan Kuis

Setiap percobaan kuis disimpan sebagai riwayat tersendiri dan tidak menimpa percobaan sebelumnya.

Struktur data yang direncanakan:

- `id`: ID unik percobaan.
- `ownerId`: Identitas pemilik data atau identitas tamu.
- `moduleId`: ID modul.
- `activityId`: ID aktivitas atau kuis.
- `questionVersion`: Versi bank soal.
- `answers`: Peta ID soal ke pilihan jawaban pengguna.
- `score`: Nilai hasil pengerjaan.
- `completedAt`: Waktu penyelesaian.

Riwayat percobaan digunakan untuk menampilkan skor terbaru dan riwayat pengerjaan sebelumnya.

Skor percobaan terbaru menjadi skor utama yang ditampilkan pada halaman Progres, sedangkan percobaan sebelumnya tetap disimpan.

Setiap percobaan ulang harus memiliki ID unik agar tidak menimpa hasil sebelumnya.

#### D. Versi Bank Soal

Setiap perubahan bank soal perlu memiliki identitas versi agar hasil pengerjaan sebelumnya tetap dapat dicocokkan dengan soal yang digunakan saat itu.

Kunci jawaban dan pembahasan hanya ditampilkan setelah pengguna mengirimkan jawaban kuis sesuai alur yang ditetapkan dalam PRD.

### 3. Tahapan Penyimpanan

#### A. Tahap MVP

- Materi dan soal berasal dari `src/data`.
- Progres belajar disimpan menggunakan LocalStorage.
- Jawaban dan hasil kuis disimpan secara lokal.
- Setiap percobaan kuis memiliki ID unik.
- Riwayat pengerjaan sebelumnya tetap dipertahankan.
- Pengguna dapat melihat skor terbaru dan riwayat percobaan.
- Tidak memerlukan login atau database cloud pada tahap ini.

#### B. Pengembangan Berikutnya

- Integrasi autentikasi pengguna.
- Penyimpanan hasil belajar ke database cloud.
- Pengelolaan daftar ID siswa.
- Dashboard guru untuk melihat hasil belajar.
- Sinkronisasi hasil belajar dari perangkat pengguna.
- Pengelolaan akun dan hak akses berdasarkan peran.

Provider dan mekanisme integrasi ditentukan melalui kesepakatan tim serta mengikuti ketentuan pengembangan dari dosen.

### 4. Akses dan Aturan Keamanan

Untuk pengembangan database cloud berikutnya, aturan akses direncanakan sebagai berikut:

- **Tamu:** Dapat menggunakan materi dan fitur pembelajaran lokal, tetapi tidak memiliki akses untuk membaca atau menulis hasil belajar ke database cloud.
- **Siswa terdaftar:** Dapat mengirim hasil pengerjaan miliknya sendiri dan membaca riwayat hasil belajar miliknya.
- **Guru:** Dapat membaca hasil belajar siswa dalam lingkup produk ChemBond, termasuk jawaban setiap butir dan ringkasan hasil.
- **Pengelola dashboard:** Bertanggung jawab menetapkan akun guru, mengelola daftar ID siswa, serta menentukan prosedur penghapusan data.

Aturan keamanan database cloud harus memvalidasi:
1. Identitas dan pemilik data.
2. Kesesuaian identitas siswa dengan daftar anggota terdaftar.
3. Kelengkapan dan tipe data.
4. Kesesuaian ID modul, aktivitas, dan versi soal.
5. Waktu penerimaan hasil.
6. Hak akses sesuai peran pengguna.

ID percobaan dibuat tetap agar pengiriman ulang tidak menghasilkan data duplikat. Hasil yang telah diterima tidak boleh ditimpa oleh pengiriman berikutnya.

Password, kredensial admin, dan hasil belajar siswa tidak boleh disimpan dalam repository proyek.

### 5. Sinkronisasi Data Cloud

Bagian ini berlaku untuk pengembangan berikutnya setelah database cloud diimplementasikan.

- **Hasil tamu:** Pengguna diberi pilihan sebelum hasil lokal dikaitkan dengan akun terdaftar.
- **Antrean pengiriman:** Data yang belum terkirim dapat masuk antrean dan dikirim ketika koneksi tersedia serta pengguna telah terautentikasi.
- **Pemilik data:** Data antrean harus tetap terikat pada pemilik asal agar tidak terkirim ke akun berbeda ketika pengguna berganti akun.

Status sinkronisasi:

- **Lokal:** Data hanya tersimpan pada perangkat.
- **Menunggu kirim:** Data sudah masuk antrean dan belum dikonfirmasi server.
- **Terkirim:** Server telah menerima dan mengonfirmasi penyimpanan data.
- **Gagal:** Pengiriman belum berhasil dan memerlukan penanganan atau percobaan ulang.

Penanganan kondisi khusus:
- Refresh halaman tidak boleh menghilangkan data lokal yang tersimpan.
- Logout harus memisahkan data pengguna.
- Kegagalan penyimpanan perlu menampilkan pemberitahuan.
- Reset lokal tidak otomatis menghapus data cloud.
- Penghapusan data cloud memerlukan prosedur dan konfirmasi tersendiri.

### 6. Konfigurasi dan Hasil Uji

Informasi konfigurasi hanya dicatat setelah provider database ditentukan dan layanan benar-benar dibuat.

- Nama variabel konfigurasi dicatat tanpa menuliskan nilai rahasia atau kredensial.
- Domain login dan redirect lokal maupun produksi dicatat setelah konfigurasi autentikasi tersedia.
- Identitas aturan keamanan database dicatat setelah aturan diterapkan dan dipublikasikan.
- Jika belum diterapkan, tuliskan **Belum diterapkan**.

Pengujian MVP:

| Lingkungan/commit/penguji | Skenario | Aktual/bukti | Status/issue |
|---|---|---|---|
| [Diisi setelah pengujian] | Progres modul tersimpan setelah halaman dimuat ulang | [Bukti hasil pengujian] | BELUM DIUJI |
| [Diisi setelah pengujian] | Jawaban dan skor kuis tersimpan secara lokal | [Bukti hasil pengujian] | BELUM DIUJI |
| [Diisi setelah pengujian] | Percobaan ulang menghasilkan riwayat baru | [Bukti hasil pengujian] | BELUM DIUJI |
| [Diisi setelah pengujian] | Skor terbaru ditampilkan pada halaman Progres | [Bukti hasil pengujian] | BELUM DIUJI |
| [Diisi setelah pengujian] | Reset progres memerlukan konfirmasi | [Bukti hasil pengujian] | BELUM DIUJI |

Pengujian database cloud berikutnya:

| Lingkungan/commit/penguji | Skenario | Aktual/bukti | Status/issue |
|---|---|---|---|
| [Diisi setelah implementasi] | Siswa A mengirim dan membaca hasil sendiri | [Bukti hasil pengujian] | BELUM DIUJI |
| [Diisi setelah implementasi] | Siswa A mencoba mengakses hasil siswa B | [Bukti hasil pengujian] | BELUM DIUJI |
| [Diisi setelah implementasi] | Guru membaca jawaban per butir dan ringkasan hasil | [Bukti hasil pengujian] | BELUM DIUJI |
| [Diisi setelah implementasi] | Tamu atau akun di luar daftar mencoba mengakses database | [Bukti hasil pengujian] | BELUM DIUJI |
| [Diisi setelah implementasi] | Koneksi terputus dan data dikirim ulang setelah koneksi pulih | [Bukti hasil pengujian] | BELUM DIUJI |

### 7. Batas dan Tindak Lanjut

- Skor yang dihitung pada sisi client berpotensi diperiksa atau diubah. Pada pengembangan cloud, guru perlu dapat mencocokkan jawaban siswa dengan kunci dan versi bank soal yang digunakan.
- Validasi tambahan di sisi server dapat dipertimbangkan untuk meningkatkan keandalan hasil.
- Pembukaan pertama secara offline, sinkronisasi draf lintas perangkat, dan pelaksanaan ujian khusus menjadi pengembangan lanjutan.
- Penggunaan perangkat bersama memerlukan mekanisme pemisahan akun dan data agar hasil belajar tidak tercampur.
- Jangka waktu penyimpanan riwayat hasil belajar perlu ditentukan sesuai kebutuhan pembelajaran dan kebijakan pengelolaan data.
- Prosedur penghapusan data perlu menentukan pihak yang berwenang, mekanisme permintaan, serta konfirmasi sebelum data dihapus.