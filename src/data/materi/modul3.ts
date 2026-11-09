
import type { ModuleData } from '../types';

export const modul3Data: ModuleData = {
    id: 'materi-3',
    order: 3,
    title: 'Penerapan Ikatan Kimia',
    subtitle: 'Mengenal hubungan ikatan kimia dengan kehidupan sehari-hari',
    description:
        'Mempelajari bagaimana jenis ikatan kimia dan struktur zat memengaruhi sifat serta pemanfaatan berbagai bahan dalam kehidupan sehari-hari.',

    learningObjectives: [
        'Mengidentifikasi penerapan senyawa ion, kovalen, dan logam dalam kehidupan sehari-hari.',
        'Menghubungkan jenis ikatan kimia dengan sifat fisik suatu bahan.',
        'Menganalisis hubungan struktur zat dengan kegunaannya.',
        'Menjelaskan pentingnya pemahaman ikatan kimia dalam memilih dan menggunakan bahan.',
    ],

    submodules: [
        {
            id: 'sub-3-1',
            title: 'Ikatan Kimia di Sekitar Kita',
            illustrationType: 'molecule',
            content: [
                'Ikatan kimia tidak hanya dipelajari melalui rumus dan gambar struktur molekul, tetapi juga dapat ditemukan dalam berbagai benda di sekitar kita. Garam dapur, air, peralatan logam, dan bahan plastik merupakan contoh material yang berkaitan dengan ikatan kimia.',
                'Setiap zat memiliki susunan partikel dan jenis ikatan yang berbeda. Perbedaan tersebut memengaruhi sifat zat, seperti kekerasan, titik leleh, kelarutan, dan kemampuan menghantarkan listrik.',
                'Dengan memahami ikatan kimia, kita dapat menjelaskan mengapa suatu bahan cocok digunakan untuk tujuan tertentu.',
            ],
            keyPoints: [
                'Ikatan kimia berkaitan dengan susunan dan interaksi antarpartikel.',
                'Jenis ikatan dan struktur zat memengaruhi sifat suatu bahan.',
                'Banyak benda sehari-hari tersusun atas zat dengan ikatan ion, kovalen, atau logam.',
            ],
            examples: [
                'Garam dapur (NaCl) digunakan sebagai penyedap dan pengawet makanan.',
                'Air (H₂O) merupakan zat penting bagi kehidupan.',
                'Kawat tembaga digunakan sebagai penghantar listrik.',
            ],
        },
        {
            id: 'sub-3-2',
            title: 'Penerapan Ikatan Ion dan Kovalen',
            illustrationType: 'crystal',
            content: [
                'Senyawa ion banyak dimanfaatkan dalam kehidupan sehari-hari. Contohnya adalah natrium klorida (NaCl) sebagai garam dapur dan kalsium karbonat (CaCO₃) yang terdapat dalam batu kapur serta cangkang hewan.',
                'Senyawa ion umumnya memiliki titik leleh relatif tinggi karena terdapat gaya tarik elektrostatik yang kuat antara ion positif dan ion negatif dalam kisi kristalnya. Senyawa ion dapat menghantarkan listrik ketika berada dalam keadaan cair atau terlarut dalam air apabila menghasilkan ion-ion yang dapat bergerak bebas.',
                'Senyawa kovalen juga memiliki banyak penerapan. Air digunakan sebagai pelarut, karbon dioksida (CO₂) dimanfaatkan dalam minuman berkarbonasi, sedangkan metana (CH₄) merupakan salah satu komponen utama gas alam.',
                'Sifat senyawa kovalen bergantung pada struktur zatnya. Senyawa kovalen molekuler umumnya memiliki titik leleh dan titik didih relatif rendah, sedangkan struktur kovalen jaringan seperti intan memiliki struktur yang sangat kuat dan keras.',
            ],
            keyPoints: [
                'NaCl merupakan contoh senyawa ion.',
                'Air, karbon dioksida, dan metana merupakan contoh senyawa kovalen molekuler.',
                'Sifat senyawa kovalen molekuler berbeda dari kovalen jaringan.',
                'Kegunaan suatu senyawa berkaitan dengan sifat fisik dan kimianya.',
            ],
            examples: [
                'NaCl digunakan sebagai garam dapur.',
                'CaCO₃ terdapat dalam batu kapur dan bahan bangunan.',
                'CO₂ digunakan untuk menghasilkan gelembung pada minuman berkarbonasi.',
                'Intan dimanfaatkan sebagai perhiasan dan bahan pemotong karena kekerasannya.',
            ],
        },
        {
            id: 'sub-3-3',
            title: 'Penerapan Ikatan Logam',
            illustrationType: 'crystal',
            content: [
                'Ikatan logam menyebabkan atom-atom logam tersusun dalam struktur teratur dengan elektron valensi yang terdelokalisasi. Elektron-elektron tersebut dapat bergerak di antara pusat-pusat ion positif dalam struktur logam.',
                'Keberadaan elektron yang dapat bergerak membantu menjelaskan kemampuan logam dalam menghantarkan listrik dan panas.',
                'Ikatan logam juga berkaitan dengan sifat logam yang dapat ditempa dan ditarik menjadi kawat. Lapisan atom logam dapat bergeser tanpa langsung merusak keseluruhan struktur ikatannya.',
                'Perbedaan sifat setiap logam dipengaruhi oleh susunan kristal, ukuran atom, dan struktur elektronnya.',
            ],
            keyPoints: [
                'Elektron valensi pada logam terdelokalisasi.',
                'Logam umumnya dapat menghantarkan listrik dan panas.',
                'Logam umumnya dapat ditempa dan ditarik menjadi kawat.',
                'Sifat logam mendukung penggunaannya dalam berbagai bidang.',
            ],
            examples: [
                'Tembaga digunakan pada kabel listrik karena daya hantar listriknya baik.',
                'Aluminium digunakan untuk peralatan rumah tangga dan berbagai komponen karena ringan dan mudah dibentuk.',
                'Besi dan baja digunakan sebagai bahan konstruksi bangunan.',
            ],
        },
        {
            id: 'sub-3-4',
            title: 'Hubungan Struktur, Sifat, dan Kegunaan Bahan',
            illustrationType: 'molecule',
            content: [
                'Jenis ikatan dan struktur partikel suatu zat berperan dalam menentukan sifat bahan. Oleh karena itu, pemilihan bahan untuk suatu keperluan perlu mempertimbangkan sifat yang dimilikinya.',
                'Tembaga digunakan sebagai penghantar listrik karena memiliki elektron yang dapat bergerak dalam struktur logam. Sebaliknya, plastik umumnya digunakan sebagai pelapis kabel karena sebagian besar plastik tidak mudah menghantarkan listrik.',
                'Intan memiliki struktur kovalen jaringan tiga dimensi yang kuat sehingga sangat keras. Grafit juga tersusun atas atom karbon dengan ikatan kovalen, tetapi memiliki struktur berlapis. Elektron tertentu pada grafit dapat bergerak sehingga grafit dapat menghantarkan listrik.',
                'Contoh tersebut menunjukkan bahwa bahan yang tersusun dari unsur yang sama belum tentu memiliki sifat yang sama. Susunan atom dan jenis ikatan dalam strukturnya turut menentukan sifat bahan.',
                'Dengan demikian, pemahaman ikatan kimia membantu kita menjelaskan alasan suatu bahan dipilih untuk kebutuhan tertentu.',
            ],
            keyPoints: [
                'Struktur partikel berpengaruh terhadap sifat bahan.',
                'Sifat bahan menentukan kesesuaian penggunaannya.',
                'Tembaga merupakan penghantar listrik, sedangkan plastik umumnya bersifat isolator.',
                'Intan dan grafit sama-sama tersusun dari karbon, tetapi memiliki struktur dan sifat berbeda.',
            ],
            examples: [
                'Tembaga digunakan sebagai inti kabel listrik.',
                'Plastik digunakan sebagai isolator atau pelapis kabel.',
                'Intan digunakan sebagai bahan pemotong.',
                'Grafit digunakan sebagai elektroda dan bahan isi pensil.',
            ],
        },
    ],

    summary: [
        'Ikatan kimia dapat ditemukan dalam berbagai material di kehidupan sehari-hari.',
        'Senyawa ion, kovalen, dan logam memiliki karakteristik yang berbeda.',
        'Jenis ikatan dan struktur zat memengaruhi sifat fisik serta pemanfaatan bahan.',
        'Pemahaman hubungan struktur dan sifat zat membantu menentukan penggunaan bahan yang tepat.',
    ],

    author: 'Sonia Maharani Fitria',
};
