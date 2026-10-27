1. Beranda
 
Gunakan gradasi pink fuchsia cerah ke coral dan oranye hangat.
Warna dominan: hot pink #F72F91, magenta #D91D78, coral #FF6B79, oranye #FF9B52, dan peach #FFC078.
Buat gradasi organik yang menyatu, cerah, berenergi, dan memiliki kedalaman seperti ilustrasi dunia kimia pada gambar.
Hindari background putih polos, ungu pucat, atau pastel kusam yang mendominasi tampilan sebelumnya.
2. Dekorasi background
Tambahkan ilustrasi dekoratif yang tersebar di sekitar halaman:
Molekul berbentuk bola berwarna-warni yang terhubung dengan ikatan.
Ikon atom dengan orbit elektron.
Rumus kimia seperti H₂O, CO₂, NH₃, CH₄, dan NaCl.
Struktur cincin benzena dan simbol unsur dari tabel periodik.
Peralatan laboratorium seperti labu Erlenmeyer, tabung reaksi, dan gelas kimia.
Kilauan kecil, gelembung, dan partikel bercahaya.
Gunakan SVG, CSS, atau aset lokal. Dekorasi boleh transparan agar tulisan tetap mudah dibaca. Letakkan sebagian ilustrasi di tepi dan sudut halaman sehingga tidak mengganggu konten utama.
3. Hero section
Pertahankan judul utama tentang petualangan menjelajahi dunia atom.
Buat judul besar, tebal, dan menarik, dengan teks putih serta aksen pink tua atau magenta.
Gunakan tombol utama dengan bentuk kapsul, warna putih atau pink muda, teks magenta, dan bayangan lembut.
Tambahkan ilustrasi molekul NaCl yang besar dan berwarna cerah sebagai elemen visual utama.
Gunakan tipografi bulat dan ramah, tetapi tetap jelas dibaca.
4. Navbar dan elemen lainnya
Sesuaikan navbar agar harmonis dengan background pink-oranye.
Gunakan warna teks yang kontras dan mudah dibaca.
Buat kartu materi tetap rapi dengan latar putih hangat atau peach muda agar berbeda dari background.
Pertahankan animasi atom dan efek hover yang sudah ada jika berfungsi.
5. Ketentuan teknis
Terapkan perubahan pada halaman Home terlebih dahulu.
Periksa CSS global, komponen Home, dan style terkait agar warna lama tidak tetap mendominasi.
Pastikan tampilan responsif untuk laptop dan HP.
Jangan menghapus fungsi yang sudah ada atau mengubah isi PRD.md.
Hindari emoji sebagai pengganti semua ilustrasi utama; prioritaskan ilustrasi kimia berbasis SVG atau CSS.
Jalankan dan periksa website setelah perubahan.

# Halaman 2: Peta Petualangan ChemBond

1. Tujuan
Membuat halaman Peta Petualangan yang menjadi pusat navigasi perjalanan belajar Ikatan Kimia untuk siswa kelas X SMA/MA.

2. Konsep Visual
- Tema: Petualangan menjelajahi dunia atom.
- Background gradasi hot pink, magenta, coral, dan oranye.
- Gunakan warna utama #F72F91, #D91D78, #FF6B79, #FF9B52, dan #FFC078.
- Tambahkan dekorasi molekul, atom, orbit elektron, gelembung, dan simbol unsur.
- Gunakan kartu berwarna cerah, sudut membulat, bayangan lembut, dan animasi ringan.
- Pertahankan keterbacaan teks dengan panel putih hangat atau peach muda.

3. Isi Halaman
1. Navbar konsisten dengan halaman Home.
2. Judul: "Peta Petualangan Dunia Atom".
3. Deskripsi: "Pilih misimu dan temukan rahasia ikatan antaratom!"
4. Tampilkan jalur petualangan yang menghubungkan enam pos belajar:
   - Pos 1: Mengenal Atom dan Elektron Valensi.
   - Pos 2: Ikatan Ion.
   - Pos 3: Ikatan Kovalen.
   - Pos 4: Ikatan Logam.
   - Pos 5: Struktur Lewis dan Bentuk Molekul.
   - Pos 6: Kepolaran dan Sifat Senyawa.
5. Setiap pos memiliki nomor, ilustrasi, judul, deskripsi singkat, dan tombol "Mulai Belajar".
6. Berikan efek hover atau animasi ketika pos dipilih.
7. Tambahkan indikator progres belajar, tetapi jangan menampilkan progres palsu. Jika belum ada data, tampilkan "Petualangan baru dimulai!".
8. Sediakan tombol kembali ke Beranda.

4. Interaksi
- Setiap kartu pos dapat diklik.
- Pos 1 membuka bagian materi pengenalan atom.
- Pos 2–6 dapat diarahkan ke bagian materi terkait jika tersedia; jika belum, tampilkan status "Segera hadir" tanpa tautan rusak.
- Navigasi antarhalaman harus berfungsi.

5. Ketentuan Teknis
- Gunakan React dan Vite pada project yang sudah ada.
- Gunakan komponen yang dapat dipakai ulang.
- Jangan menghapus atau merusak halaman Home yang sudah selesai.
- Jangan mengganti konfigurasi project atau menghapus kode yang sudah berfungsi.
- Pastikan responsif untuk laptop dan HP.
- Uji semua tombol dan navigasi sebelum menyatakan selesai.

6. Kriteria Keberhasilan
- Peta petualangan tampil utuh dan menarik.
- Enam pos belajar terlihat jelas.
- Tombol dan navigasi berfungsi sesuai status halaman.
- Tidak ada error pada browser.

# PRD — Halaman 3: Materi Ikatan Kimia ChemBond

## 1. Tujuan
Membuat halaman materi interaktif yang membantu siswa kelas X memahami konsep Ikatan Kimia melalui teks singkat, ilustrasi, dan eksplorasi visual.

## 2. Konsep Visual
- Gunakan identitas visual yang sama dengan Home dan Peta Petualangan.
- Background gradasi pink-magenta-oranye dengan dekorasi kimia yang tidak mengganggu teks.
- Gunakan panel materi berwarna putih hangat atau peach muda.
- Judul besar, subjudul jelas, ikon kimia, ilustrasi atom, dan animasi sederhana.
- Pastikan warna teks memiliki kontras yang cukup.

## 3. Struktur Halaman
1. Navbar yang konsisten.
2. Breadcrumb: Beranda > Peta Petualangan > Materi.
3. Judul utama: "Jelajahi Rahasia Ikatan Kimia".
4. Pengantar singkat tentang alasan atom membentuk ikatan.
5. Navigasi materi berbentuk tab atau kartu:
   - Konsep Dasar dan Elektron Valensi.
   - Ikatan Ion.
   - Ikatan Kovalen.
   - Ikatan Logam.
   - Struktur Lewis dan Bentuk Molekul.
   - Kepolaran Ikatan dan Molekul.
6. Area materi utama yang menampilkan judul, penjelasan, ilustrasi, contoh, dan rangkuman.
7. Tombol "Materi Sebelumnya" dan "Materi Berikutnya".
8. Tombol "Kembali ke Peta Petualangan".

## 4. Isi Materi
- **Konsep dasar:** kestabilan elektron valensi dan aturan duplet-oktet.
- **Ikatan ion:** perpindahan elektron, pembentukan kation dan anion, serta contoh NaCl dan MgO.
- **Ikatan kovalen:** pemakaian bersama pasangan elektron, dengan contoh H₂, H₂O, dan CO₂.
- **Ikatan logam:** kation logam dan elektron valensi yang terdelokalisasi.
- **Struktur Lewis dan bentuk molekul:** titik elektron valensi, pasangan elektron ikatan dan bebas, serta pengantar bentuk molekul sederhana.
- **Kepolaran:** perbedaan keelektronegatifan dan pengaruh bentuk molekul, dengan contoh H₂O yang polar dan CO₂ yang nonpolar.

## 5. Interaksi
- Sediakan ilustrasi atom atau molekul yang dapat dieksplorasi.
- Tambahkan simulasi sederhana perpindahan elektron Na ke Cl untuk menjelaskan ikatan ion.
- Tampilkan pasangan elektron bersama untuk contoh ikatan kovalen.
- Sediakan kuis mini 2–3 pertanyaan dengan umpan balik langsung pada materi yang sedang dipelajari.
- Berikan penjelasan jika jawaban salah, bukan hanya tanda benar atau salah.
- Simpan status materi yang sudah dipelajari secara lokal menggunakan localStorage tanpa meminta identitas pribadi.

## 6. Ketentuan Teknis
- Gunakan React dan Vite yang sudah tersedia.
- Pisahkan data materi dari komponen tampilan agar mudah diperbarui.
- Gunakan notasi kimia dengan subskrip dan muatan yang benar, seperti H₂O, CO₂, Na⁺, dan Cl⁻.
- Jangan membuat simulasi yang hanya berupa hiasan; interaksi harus memiliki respons yang jelas.
- Jangan mengubah halaman Home dan Peta Petualangan yang telah dibuat.
- Pastikan semua tombol, tab, dan navigasi berfungsi.
- Uji tampilan di laptop dan HP.

## 7. Kriteria Keberhasilan
- Enam topik materi tersedia melalui navigasi yang jelas.
- Penjelasan mudah dipahami siswa kelas X.
- Simulasi dan kuis memberikan umpan balik yang benar.
- Progres belajar disimpan secara lokal.
- Tidak ada tautan rusak atau error browser.
