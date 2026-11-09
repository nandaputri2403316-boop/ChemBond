# AGENTS.md — Aturan Kerja Proyek Media Kimia

1. Gunakan React/Vite pada proyek yang sudah ada; jangan membuat ulang proyek.
2. Baca PRD, backlog, desain, dan kontrak data yang terkait tugas sebelum mengedit.
3. Kerjakan satu issue dengan perubahan kecil. Jelaskan file yang akan berubah.
4. Materi/soal selalu di src/data. Pertemuan 3 membangun simpan lokal;
   Pertemuan 4 menambahkan login dan simpan/baca hasil pada satu provider.
5. Pertahankan ID modul, versi soal, navigasi, kuis, progres, fitur pilihan, dan reset.
6. Antrean terikat pemilik; percobaan punya ID tetap; simpan jawaban awal
   sebelum pembahasan dan jangan menimpa riwayat saat percobaan ulang.
7. Database menolak akses tamu/siswa lain; hanya satu akun guru berwenang.
   Simpan profil minimum; jangan masukkan password atau hasil siswa ke repo/log.
8. Jangan membaca/menyalin .env.local ke jawaban, log, repo, atau screenshot.
9. Jangan memakai token admin, secret/service-role key, service account,
   atau password database pada frontend.
10. Materi, notasi, satuan, kunci, serta pembahasan diperiksa manusia dengan sumber.
11. Gunakan HTML semantik, label, heading runtut, fokus terlihat,
    dan umpan balik yang tidak hanya memakai warna.
12. Konten eksternal harus memiliki sumber dan penanganan gagal/fallback.
13. Jangan commit, push, merge, menghapus riwayat, atau deploy otomatis
    tanpa instruksi eksplisit dari pelaksana yang berwenang.
14. Setelah mengedit, jelaskan diff, langkah uji, dan keterbatasan yang tersisa.
15. Baca skill desain yang disepakati kelompok dari path yang benar.
    Arah desain mengikuti PRD dan kebutuhan belajar; jangan menambah layanan,
    dependensi, atau mengganti stack hanya untuk mengikuti contoh skill.