import type { ModuleData } from '../types';

/**
 * ChemBond — Modul 1: Pengenalan Ikatan Kimia
 * Materi lengkap BAB 1–6 (53 subbab).
 * Tabel, diagram, dan persamaan disajikan sebagai teks terstruktur
 * agar kompatibel dengan MateriPage.tsx yang merender content sebagai paragraf.
 */

export const modul1Data: ModuleData = {
  id: 'materi-1',
  order: 1,
  title: 'Pengenalan Ikatan Kimia',
  subtitle: 'Konfigurasi Elektron, Elektron Valensi, Kestabilan Atom, Aturan Duplet-Oktet, dan Pembentukan Ikatan Kimia',
  description: 'Mempelajari dasar pembentukan ikatan kimia melalui struktur elektron atom, konfigurasi elektron, elektron valensi, kestabilan, serta ikatan ion dan kovalen.',

  learningObjectives: [
    'Menjelaskan hakikat ikatan kimia dan hubungannya dengan perubahan energi sistem.',
    'Menuliskan konfigurasi elektron berdasarkan kulit, subkulit, dan orbital.',
    'Menentukan elektron valensi serta menggambarkan simbol titik Lewis.',
    'Menjelaskan konfigurasi elektron gas mulia sebagai model sederhana kestabilan atom.',
    'Menganalisis aturan duplet dan oktet beserta pengecualiannya.',
    'Menjelaskan pembentukan ion, ikatan ion, dan ikatan kovalen berdasarkan interaksi elektron dan perubahan energi.'
  ],

  submodules: [
    {
      id: 'sub-1-1',
      title: 'Bab 1 · Hakikat dan Pengertian Ikatan Kimia',
      content: [
        'Materi tersusun atas atom-atom yang dapat berinteraksi satu sama lain. Dari interaksi atom terbentuk berbagai zat, mulai dari molekul sederhana seperti H₂O dan O₂, senyawa ion seperti NaCl, hingga molekul biologis kompleks seperti DNA.',
        'Ikatan kimia adalah interaksi yang mempertahankan atom atau ion dalam suatu susunan kimia. Ikatan terutama berkaitan dengan gaya elektrostatik antara inti atom dan elektron, serta interaksi tolak-menolak antara inti-inti dan elektron-elektron.',
        'Suatu ikatan dapat terbentuk apabila interaksi antarpartikel menghasilkan keadaan dengan energi total lebih rendah dibandingkan keadaan partikel-partikel yang terpisah. Susunan elektron dalam ikatan dapat melibatkan perpindahan elektron, penggunaan pasangan elektron bersama, atau elektron yang terdelokalisasi pada logam.',
        'Secara sederhana, prosesnya dapat digambarkan sebagai: A + B (terpisah) → interaksi antaratom → A—B (berikatan, energi lebih rendah). Gas mulia umumnya berupa atom tunggal, tetapi gas mulia yang lebih berat seperti xenon dan kripton juga dapat membentuk senyawa pada kondisi tertentu.'
      ],
      keyPoints: [
        'Ikatan kimia merupakan interaksi, bukan tali fisik yang menghubungkan atom.',
        'Pembentukan ikatan berkaitan dengan penurunan energi sistem.',
        'Ikatan ion, kovalen, dan logam mempunyai cara interaksi elektron yang berbeda.'
      ],
      illustrationType: 'molecule'
    },

    // Submodul berikutnya menyusul
  ],

  summary: [
    'Modul ini membahas konfigurasi elektron, elektron valensi, kestabilan atom, aturan duplet dan oktet, serta pembentukan ikatan kimia.'
  ],

  author: 'Tim ChemBond'
};
