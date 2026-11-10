import type { QuizQuestion } from './types';

export const modul1Quiz: QuizQuestion[] = [
  {
    id: 'm1-q1',
    questionVersion: 'v1',
    konsep: 'dasar-pembentukan-ikatan',
    pertanyaan:
      'Unsur natrium (Na) memiliki nomor atom 11, sedangkan klorin (Cl) memiliki nomor atom 17. Ketika kedua unsur tersebut bereaksi, terbentuk senyawa natrium klorida (NaCl). Berdasarkan konfigurasi elektronnya, natrium memiliki susunan elektron 2, 8, 1, sedangkan klorin 2, 8, 7.\n\nSeorang peserta didik menyatakan bahwa pembentukan NaCl terjadi karena kedua atom menggunakan elektron secara bersama-sama. Berdasarkan informasi tersebut, analisis yang paling tepat untuk memperbaiki pernyataan peserta didik adalah ....',
    opsi: [
      { id: 'A', teks: 'Atom natrium menerima satu elektron dari klorin sehingga keduanya mencapai kestabilan.' },
      { id: 'B', teks: 'Atom klorin melepaskan satu elektron kepada natrium sehingga terbentuk ion positif dan negatif.' },
      { id: 'C', teks: 'Atom natrium melepaskan satu elektron kepada klorin sehingga terbentuk Na⁺ dan Cl⁻ yang mencapai konfigurasi elektron stabil.' },
      { id: 'D', teks: 'Atom natrium dan klorin menggunakan satu pasang elektron secara bersama-sama sehingga terbentuk ikatan kovalen.' },
      { id: 'E', teks: 'Atom natrium dan klorin melepaskan seluruh elektron valensinya untuk mencapai konfigurasi elektron gas mulia.' },
    ],
    jawabanBenar: 'C',
    pembahasan:
      'Natrium memiliki satu elektron valensi sehingga cenderung melepaskan satu elektron dan membentuk Na⁺. Klorin menerima elektron tersebut dan membentuk Cl⁻. Gaya tarik elektrostatik antara kedua ion menghasilkan ikatan ion.',
  },
  {
    id: 'm1-q2',
    questionVersion: 'v1',
    konsep: 'dasar-pembentukan-ikatan',
    pertanyaan:
      'Unsur magnesium (Mg) memiliki konfigurasi elektron 2, 8, 2, sedangkan oksigen (O) memiliki konfigurasi elektron 2, 6. Kedua unsur tersebut dapat bereaksi membentuk magnesium oksida (MgO).\n\nBerdasarkan konfigurasi elektron kedua unsur, seorang peserta didik membuat dua dugaan berikut:\n\n1. Magnesium cenderung melepaskan dua elektron.\n2. Oksigen cenderung menerima dua elektron.\n\nAnalisis yang tepat mengenai hubungan kedua dugaan tersebut dengan kestabilan atom adalah ....',
    opsi: [
      { id: 'A', teks: 'Magnesium menerima dua elektron dari oksigen sehingga keduanya mencapai konfigurasi elektron duplet.' },
      { id: 'B', teks: 'Oksigen melepaskan dua elektron kepada magnesium sehingga terbentuk Mg²⁻ dan O²⁺.' },
      { id: 'C', teks: 'Magnesium dan oksigen menggunakan dua pasang elektron secara bersama-sama untuk mencapai kestabilan.' },
      { id: 'D', teks: 'Magnesium melepaskan dua elektron kepada oksigen sehingga terbentuk Mg²⁺ dan O²⁻ dengan konfigurasi elektron stabil.' },
      { id: 'E', teks: 'Magnesium dan oksigen masing-masing melepaskan dua elektron sehingga keduanya memiliki konfigurasi elektron yang sama.' },
    ],
    jawabanBenar: 'D',
    pembahasan:
      'Magnesium melepaskan dua elektron menjadi Mg²⁺, sedangkan oksigen menerima dua elektron menjadi O²⁻. Keduanya memperoleh konfigurasi elektron yang stabil seperti gas mulia.',
  },
  {
    id: 'm1-q3',
    questionVersion: 'v1',
    konsep: 'jenis-jenis-ikatan-kimia',
    pertanyaan:
      'Perhatikan karakteristik tiga zat berikut.\n\nP: Memiliki titik leleh tinggi, tidak menghantarkan listrik dalam keadaan padat, tetapi dapat menghantarkan listrik ketika dilelehkan.\n\nQ: Tersusun atas molekul-molekul, memiliki titik leleh relatif rendah, dan umumnya tidak menghantarkan listrik.\n\nR: Dapat menghantarkan listrik dalam keadaan padat, dapat ditempa, dan memiliki permukaan mengilap.\n\nBerdasarkan karakteristik tersebut, analisis hubungan antara jenis ikatan kimia dan sifat ketiga zat yang paling tepat adalah ....',
    opsi: [
      { id: 'A', teks: 'P memiliki ikatan kovalen, Q memiliki ikatan ion, dan R memiliki ikatan logam.' },
      { id: 'B', teks: 'P memiliki ikatan ion, Q memiliki ikatan kovalen molekuler, dan R memiliki ikatan logam.' },
      { id: 'C', teks: 'P memiliki ikatan logam, Q memiliki ikatan kovalen, dan R memiliki ikatan ion.' },
      { id: 'D', teks: 'P memiliki ikatan ion, Q memiliki ikatan logam, dan R memiliki ikatan kovalen.' },
      { id: 'E', teks: 'P memiliki ikatan kovalen jaringan, Q memiliki ikatan logam, dan R memiliki ikatan ion.' },
    ],
    jawabanBenar: 'B',
    pembahasan:
      'Zat P menunjukkan karakteristik senyawa ion karena ion-ionnya dapat bergerak ketika dilelehkan. Zat Q menunjukkan karakteristik senyawa kovalen molekuler, sedangkan zat R menunjukkan karakteristik logam karena memiliki elektron terdelokalisasi.',
  },
  {
    id: 'm1-q4',
    questionVersion: 'v1',
    konsep: 'jenis-jenis-ikatan-kimia',
    pertanyaan:
      'Dua zat, yaitu zat X dan zat Y, diuji menggunakan alat penguji daya hantar listrik. Hasil pengujian menunjukkan bahwa zat X dalam keadaan padat tidak dapat menghantarkan listrik, tetapi larutannya dapat menghantarkan listrik. Sementara itu, zat Y dapat menghantarkan listrik baik dalam keadaan padat maupun setelah dilelehkan.\n\nBerdasarkan hasil pengujian tersebut, analisis yang paling tepat mengenai jenis ikatan pada kedua zat adalah ....',
    opsi: [
      { id: 'A', teks: 'X memiliki ikatan kovalen nonpolar, sedangkan Y memiliki ikatan kovalen polar.' },
      { id: 'B', teks: 'X memiliki ikatan logam, sedangkan Y memiliki ikatan ion.' },
      { id: 'C', teks: 'X memiliki ikatan kovalen, sedangkan Y memiliki ikatan ion.' },
      { id: 'D', teks: 'X memiliki ikatan ion, sedangkan Y memiliki ikatan logam.' },
      { id: 'E', teks: 'X dan Y sama-sama memiliki ikatan kovalen karena keduanya dapat menghantarkan listrik pada kondisi tertentu.' },
    ],
    jawabanBenar: 'D',
    pembahasan:
      'Zat X menunjukkan karakteristik senyawa ion. Dalam keadaan padat, ion-ionnya tidak bebas bergerak, tetapi dalam larutan dapat bergerak dan menghantarkan listrik. Zat Y menunjukkan karakteristik logam karena memiliki elektron terdelokalisasi yang dapat bergerak dalam keadaan padat maupun cair.',
  },
  {
    id: 'm1-q5',
    questionVersion: 'v1',
    konsep: 'penerapan-ikatan-kimia',
    pertanyaan:
      'Perhatikan dua bahan yang sering ditemukan dalam kehidupan sehari-hari berikut.\n\nBahan P: Tembaga digunakan sebagai bahan kabel listrik karena mampu menghantarkan listrik dengan baik dan dapat ditarik menjadi kawat.\n\nBahan Q: Plastik digunakan sebagai pelapis kabel listrik karena umumnya tidak mudah menghantarkan listrik.\n\nSeorang peserta didik menyimpulkan bahwa kedua bahan tersebut memiliki sifat yang berbeda karena jenis ikatan kimianya berbeda.\n\nAnalisis yang paling tepat untuk menjelaskan perbedaan sifat kedua bahan tersebut adalah ....',
    opsi: [
      { id: 'A', teks: 'Tembaga memiliki ikatan ion yang memungkinkan ion-ionnya bergerak bebas, sedangkan plastik memiliki ikatan logam yang menghambat aliran listrik.' },
      { id: 'B', teks: 'Tembaga memiliki ikatan logam dengan elektron terdelokalisasi yang dapat bergerak, sedangkan plastik umumnya memiliki struktur kovalen tanpa pembawa muatan bebas yang mudah bergerak.' },
      { id: 'C', teks: 'Tembaga memiliki ikatan kovalen yang menghasilkan elektron bebas, sedangkan plastik memiliki ikatan ion yang menyebabkan elektron sulit bergerak.' },
      { id: 'D', teks: 'Tembaga dan plastik sama-sama memiliki ikatan kovalen, tetapi tembaga lebih mudah menghantarkan listrik karena memiliki massa jenis lebih tinggi.' },
      { id: 'E', teks: 'Tembaga dan plastik memiliki ikatan logam, tetapi plastik tidak dapat menghantarkan listrik karena tidak memiliki permukaan mengilap.' },
    ],
    jawabanBenar: 'B',
    pembahasan:
      'Tembaga memiliki ikatan logam dengan elektron terdelokalisasi yang memungkinkan terjadinya aliran listrik. Sementara itu, plastik umumnya merupakan bahan kovalen yang tidak memiliki pembawa muatan bebas yang mudah bergerak sehingga bersifat isolator.',
  },
  {
    id: 'm1-q6',
    questionVersion: 'v1',
    konsep: 'penerapan-ikatan-kimia',
    pertanyaan:
      'Seorang perajin menggunakan dua jenis bahan karbon untuk membuat produk yang berbeda. Bahan pertama berupa berlian yang dimanfaatkan sebagai alat pemotong karena memiliki kekerasan tinggi. Bahan kedua berupa grafit yang digunakan sebagai elektroda karena dapat menghantarkan listrik.\n\nKedua bahan tersebut tersusun atas unsur karbon, tetapi memiliki sifat fisik yang berbeda. Berdasarkan struktur dan jenis ikatan kimianya, analisis yang paling tepat untuk menjelaskan fenomena tersebut adalah ....',
    opsi: [
      { id: 'A', teks: 'Berlian memiliki ikatan ion yang kuat, sedangkan grafit memiliki ikatan logam yang menghasilkan elektron bebas.' },
      { id: 'B', teks: 'Berlian dan grafit memiliki struktur serta susunan ikatan yang sama, tetapi penggunaannya berbeda karena bentuk fisiknya.' },
      { id: 'C', teks: 'Berlian memiliki struktur kovalen tiga dimensi yang kuat, sedangkan grafit memiliki struktur berlapis dengan elektron terdelokalisasi yang dapat bergerak sepanjang lapisan.' },
      { id: 'D', teks: 'Berlian memiliki ikatan kovalen antarmolekul yang lemah, sedangkan grafit memiliki ikatan ion yang kuat pada seluruh strukturnya.' },
      { id: 'E', teks: 'Berlian memiliki elektron bebas yang bergerak dalam seluruh struktur, sedangkan grafit memiliki elektron yang terikat kuat pada setiap atom karbon.' },
    ],
    jawabanBenar: 'C',
    pembahasan:
      'Berlian memiliki struktur kovalen jaringan tiga dimensi yang kuat sehingga sangat keras. Grafit memiliki struktur berlapis dengan elektron terdelokalisasi yang dapat bergerak sepanjang lapisan sehingga dapat menghantarkan listrik.',
  },
];