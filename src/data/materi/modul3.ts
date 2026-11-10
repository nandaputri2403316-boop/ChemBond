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
                'Setiap zat memiliki susunan partikel dan jenis ikatan yang berbeda. Perbedaan tersebut memengaruhi sifat zat, seperti kekerasan, titik leleh, kelarutan, serta kemampuan menghantarkan listrik dan panas.',
                'Sebagai contoh, garam dapur tersusun atas ion natrium dan ion klorida yang saling tarik-menarik. Air tersusun atas molekul dengan ikatan kovalen, sedangkan tembaga tersusun atas atom-atom logam dengan elektron yang dapat bergerak di dalam strukturnya.',
                'Plastik juga berkaitan dengan ikatan kimia karena sebagian besar plastik tersusun atas rantai panjang molekul yang disebut polimer. Struktur tersebut menyebabkan plastik umumnya tidak mudah menghantarkan listrik.',
                'Dengan memahami ikatan kimia, kita dapat menjelaskan mengapa suatu bahan memiliki sifat tertentu dan cocok digunakan untuk tujuan tertentu.',
            ],
            keyPoints: [
                'Ikatan kimia berkaitan dengan susunan dan interaksi antarpartikel.',
                'Jenis ikatan dan struktur zat memengaruhi sifat suatu bahan.',
                'Garam dapur merupakan contoh zat dengan ikatan ion.',
                'Air dan sebagian besar plastik merupakan contoh bahan yang tersusun atas zat kovalen.',
                'Tembaga merupakan contoh logam yang dapat menghantarkan listrik.',
            ],
            examples: [
                'Garam dapur (NaCl) digunakan sebagai penyedap makanan dan dalam konsentrasi tinggi dapat membantu mengawetkan makanan.',
                'Air (H₂O) digunakan sebagai pelarut berbagai zat karena molekulnya bersifat polar.',
                'Kawat tembaga digunakan sebagai penghantar listrik karena memiliki elektron yang dapat bergerak dalam struktur logam.',
                'Plastik digunakan sebagai pelapis kabel karena umumnya tidak mudah menghantarkan listrik.',
            ],
        },

        {
            id: 'sub-3-2',
            title: 'Penerapan Ikatan Ion',
            illustrationType: 'crystal',
            content: [
                'Senyawa ion banyak ditemukan dalam kehidupan sehari-hari. Senyawa ini tersusun atas ion positif (kation) dan ion negatif (anion) yang saling tarik-menarik karena gaya elektrostatik. Salah satu contohnya adalah natrium klorida (NaCl) atau garam dapur.',
                'NaCl dimanfaatkan sebagai penyedap makanan. Selain itu, garam juga digunakan dalam proses pengawetan makanan, seperti ikan asin. Garam dalam konsentrasi tinggi dapat mengurangi ketersediaan air bagi mikroorganisme sehingga menghambat pertumbuhannya.',
                'Senyawa ion umumnya memiliki titik leleh relatif tinggi karena gaya tarik elektrostatik antara ion positif dan ion negatif dalam susunan kristalnya cukup kuat. Dalam keadaan padat, ion-ion tersebut tidak dapat bergerak bebas sehingga tidak dapat menghantarkan listrik. Namun, ketika dilelehkan atau dilarutkan dalam air, ion-ionnya dapat bergerak sehingga larutannya atau lelehannya dapat menghantarkan listrik.',
                'Contoh lainnya adalah kalsium karbonat (CaCO₃) yang terdapat dalam batu kapur, marmer, dan cangkang hewan. CaCO₃ memiliki interaksi ion antara ion kalsium (Ca²⁺) dan ion karbonat (CO₃²⁻). Di dalam ion karbonat sendiri terdapat ikatan kovalen antara atom karbon dan oksigen.',
                'Kalsium karbonat dimanfaatkan sebagai salah satu bahan baku dalam pembuatan semen dan kapur. Batu kapur juga digunakan dalam berbagai kegiatan industri dan konstruksi.',
            ],
            keyPoints: [
                'Senyawa ion tersusun atas kation dan anion yang saling tarik-menarik.',
                'Senyawa ion umumnya memiliki titik leleh relatif tinggi.',
                'Senyawa ion dalam bentuk padat tidak dapat menghantarkan listrik karena ion-ionnya tidak bebas bergerak.',
                'Senyawa ion dapat menghantarkan listrik ketika berada dalam keadaan cair atau larutan yang mengandung ion bergerak bebas.',
                'NaCl dan CaCO₃ merupakan contoh senyawa ion yang banyak dimanfaatkan dalam kehidupan.',
            ],
            examples: [
                'Natrium klorida (NaCl) digunakan sebagai garam dapur untuk penyedap dan pengawet makanan.',
                'Kalsium karbonat (CaCO₃) terdapat dalam batu kapur dan marmer serta dimanfaatkan sebagai bahan baku pembuatan semen.',
                'Kalsium klorida (CaCl₂) digunakan sebagai bahan pengering karena dapat menyerap uap air dari lingkungan.',
                'Natrium bikarbonat (NaHCO₃) atau soda kue digunakan sebagai bahan pengembang dalam pembuatan kue.',
            ],
        },

        {
            id: 'sub-3-3',
            title: 'Penerapan Ikatan Kovalen',
            illustrationType: 'molecule',
            content: [
                'Ikatan kovalen banyak ditemukan dalam berbagai zat yang digunakan dalam kehidupan sehari-hari. Ikatan ini terbentuk ketika dua atom atau lebih menggunakan pasangan elektron secara bersama-sama. Zat yang memiliki ikatan kovalen dapat berupa molekul sederhana maupun struktur kovalen jaringan.',
                'Salah satu contohnya adalah air (H₂O). Molekul air terbentuk melalui ikatan kovalen antara atom hidrogen dan oksigen. Air memiliki sifat polar sehingga dapat melarutkan banyak zat ionik dan zat polar. Oleh karena itu, air banyak digunakan sebagai pelarut dalam kehidupan sehari-hari dan kegiatan laboratorium.',
                'Contoh lainnya adalah karbon dioksida (CO₂), yang merupakan senyawa kovalen molekuler. Gas ini dimanfaatkan untuk menghasilkan gelembung pada minuman berkarbonasi dan digunakan dalam beberapa jenis alat pemadam api.',
                'Metana (CH₄) merupakan salah satu komponen utama gas alam. Senyawa ini dimanfaatkan sebagai bahan bakar untuk memasak dan menghasilkan energi. Ketika dibakar dengan oksigen yang cukup, metana menghasilkan karbon dioksida, air, dan energi.',
                'Sifat senyawa kovalen molekuler umumnya memiliki titik leleh dan titik didih relatif rendah karena gaya tarik antarmolekulnya relatif lemah. Namun, sifat setiap zat tidak selalu sama. Air, misalnya, memiliki titik didih relatif tinggi karena antarmolekul air terdapat ikatan hidrogen.',
                'Selain senyawa kovalen molekuler, terdapat struktur kovalen jaringan seperti intan. Dalam intan, atom-atom karbon saling terikat kuat dalam susunan tiga dimensi. Struktur tersebut menyebabkan intan sangat keras sehingga dapat dimanfaatkan sebagai bahan pemotong dan penggosok.',
                'Grafit juga tersusun atas atom karbon dengan ikatan kovalen, tetapi memiliki struktur berlapis. Ikatan antaratom karbon dalam satu lapisan sangat kuat, sedangkan gaya tarik antarlapisannya relatif lemah. Lapisan grafit dapat bergeser sehingga grafit digunakan sebagai bahan isi pensil. Elektron tertentu pada grafit juga dapat bergerak sehingga grafit mampu menghantarkan listrik.',
            ],
            keyPoints: [
                'Ikatan kovalen terbentuk melalui penggunaan pasangan elektron secara bersama-sama.',
                'Air, karbon dioksida, dan metana merupakan contoh senyawa kovalen molekuler.',
                'Air bersifat polar sehingga dapat melarutkan banyak zat polar dan ionik.',
                'Sifat senyawa kovalen molekuler dipengaruhi oleh gaya tarik antarmolekulnya.',
                'Intan dan grafit merupakan bentuk alotrop karbon yang memiliki struktur berbeda.',
                'Struktur kovalen jaringan pada intan menyebabkan bahan ini sangat keras.',
                'Grafit dapat menghantarkan listrik karena memiliki elektron yang dapat bergerak.',
            ],
            examples: [
                'Air (H₂O) digunakan sebagai pelarut dalam kehidupan sehari-hari dan kegiatan laboratorium.',
                'Karbon dioksida (CO₂) digunakan untuk menghasilkan gelembung pada minuman berkarbonasi dan sebagai bahan dalam beberapa alat pemadam api.',
                'Metana (CH₄) dalam gas alam digunakan sebagai bahan bakar untuk memasak.',
                'Intan dimanfaatkan sebagai perhiasan serta bahan pemotong dan penggosok karena memiliki tingkat kekerasan yang tinggi.',
                'Grafit digunakan sebagai bahan isi pensil karena lapisan-lapisan karbonnya mudah bergeser dan meninggalkan bekas pada kertas.',
                'Grafit juga digunakan sebagai elektroda karena dapat menghantarkan listrik.',
            ],
        },

        {
            id: 'sub-3-4',
            title: 'Penerapan Ikatan Logam',
            illustrationType: 'crystal',
            content: [
                'Ikatan logam menyebabkan atom-atom logam tersusun dalam struktur teratur dengan elektron valensi yang terdelokalisasi. Artinya, elektron valensi tidak hanya terikat pada satu atom tertentu, tetapi dapat bergerak di antara pusat-pusat ion positif dalam struktur logam.',
                'Keberadaan elektron yang dapat bergerak membantu menjelaskan kemampuan logam dalam menghantarkan listrik. Ketika logam dihubungkan dengan sumber listrik, elektron dapat bergerak sehingga arus listrik dapat mengalir. Logam juga umumnya dapat menghantarkan panas dengan baik karena energi panas dapat diteruskan melalui struktur logam.',
                'Ikatan logam juga berkaitan dengan sifat logam yang dapat ditempa dan ditarik menjadi kawat. Ketika logam diberi tekanan, lapisan-lapisan atomnya dapat bergeser tanpa langsung merusak keseluruhan struktur ikatan logam. Sifat ini menyebabkan logam dapat dibentuk menjadi berbagai benda.',
                'Tembaga merupakan contoh logam yang banyak digunakan sebagai penghantar listrik karena memiliki daya hantar listrik yang baik. Aluminium juga digunakan dalam berbagai peralatan karena memiliki massa jenis yang relatif rendah, cukup mudah dibentuk, dan dapat membentuk lapisan oksida pelindung pada permukaannya.',
                'Besi digunakan sebagai bahan dasar dalam pembuatan baja. Baja merupakan paduan yang terutama tersusun atas besi dan karbon serta dapat mengandung unsur lain. Baja banyak digunakan dalam konstruksi karena memiliki kekuatan yang sesuai untuk berbagai kebutuhan bangunan.',
                'Perbedaan sifat setiap logam dipengaruhi oleh susunan kristal, ukuran atom, struktur elektron, dan komposisi bahan. Oleh karena itu, pemilihan logam perlu disesuaikan dengan tujuan penggunaannya.',
            ],
            keyPoints: [
                'Elektron valensi pada logam terdelokalisasi dan dapat bergerak dalam struktur logam.',
                'Logam umumnya dapat menghantarkan listrik dan panas dengan baik.',
                'Logam umumnya dapat ditempa dan ditarik menjadi kawat karena lapisan atomnya dapat bergeser.',
                'Tembaga digunakan sebagai penghantar listrik karena daya hantar listriknya baik.',
                'Aluminium banyak digunakan karena relatif ringan dan mudah dibentuk.',
                'Baja merupakan paduan berbasis besi yang banyak digunakan sebagai bahan konstruksi.',
            ],
            examples: [
                'Tembaga digunakan sebagai bahan inti kabel listrik karena memiliki daya hantar listrik yang baik.',
                'Aluminium digunakan untuk membuat peralatan rumah tangga, seperti panci dan wajan, karena relatif ringan dan dapat menghantarkan panas.',
                'Aluminium digunakan pada beberapa bagian kendaraan dan pesawat karena massa jenisnya relatif rendah.',
                'Baja digunakan sebagai bahan konstruksi gedung, jembatan, dan rangka bangunan karena memiliki kekuatan yang baik.',
                'Kuningan, yaitu paduan tembaga dan seng, digunakan untuk membuat gagang pintu, komponen alat musik, dan berbagai perlengkapan rumah tangga.',
            ],
        },

        {
            id: 'sub-3-5',
            title: 'Hubungan Struktur, Sifat, dan Kegunaan Bahan',
            illustrationType: 'molecule',
            content: [
                'Jenis ikatan dan struktur partikel suatu zat berperan dalam menentukan sifat bahan. Oleh karena itu, pemilihan bahan untuk suatu keperluan perlu mempertimbangkan sifat yang dimilikinya.',
                'Tembaga digunakan sebagai penghantar listrik karena memiliki elektron yang dapat bergerak dalam struktur logam. Sebaliknya, plastik umumnya digunakan sebagai pelapis kabel karena tidak memiliki banyak partikel bermuatan yang dapat bergerak bebas untuk menghantarkan listrik.',
                'Air (H₂O) memiliki molekul yang bersifat polar sehingga dapat melarutkan banyak zat ionik dan zat polar. Sifat ini menyebabkan air banyak digunakan sebagai pelarut dalam kehidupan sehari-hari. Namun, air tidak dapat melarutkan semua jenis zat, misalnya minyak yang bersifat nonpolar.',
                'Intan memiliki struktur kovalen jaringan tiga dimensi yang kuat sehingga sangat keras. Grafit juga tersusun atas atom karbon dengan ikatan kovalen, tetapi memiliki struktur berlapis. Ikatan antaratom karbon dalam satu lapisan sangat kuat, sedangkan gaya tarik antarlapisannya relatif lemah. Elektron tertentu pada grafit dapat bergerak sehingga grafit dapat menghantarkan listrik.',
                'Contoh tersebut menunjukkan bahwa bahan yang tersusun dari unsur yang sama belum tentu memiliki sifat yang sama. Intan dan grafit sama-sama tersusun atas karbon, tetapi susunan atom dan strukturnya berbeda sehingga sifat serta kegunaannya juga berbeda.',
                'Pemilihan bahan dalam kehidupan sehari-hari didasarkan pada kesesuaian sifatnya dengan kebutuhan. Kabel listrik membutuhkan bahan penghantar listrik seperti tembaga, sedangkan bagian pelapisnya membutuhkan bahan isolator seperti plastik. Dengan demikian, pemahaman ikatan kimia membantu kita menjelaskan alasan suatu bahan dipilih untuk kebutuhan tertentu.',
            ],
            keyPoints: [
                'Struktur partikel dan jenis ikatan berpengaruh terhadap sifat suatu bahan.',
                'Sifat bahan menentukan kesesuaian penggunaannya dalam kehidupan sehari-hari.',
                'Tembaga merupakan penghantar listrik, sedangkan plastik umumnya bersifat isolator.',
                'Air bersifat polar sehingga dapat melarutkan banyak zat ionik dan zat polar.',
                'Intan dan grafit sama-sama tersusun atas karbon, tetapi memiliki struktur dan sifat berbeda.',
                'Pemilihan bahan perlu mempertimbangkan sifat fisik dan kimianya.',
            ],
            examples: [
                'Tembaga digunakan sebagai inti kabel listrik karena mampu menghantarkan listrik dengan baik.',
                'Plastik digunakan sebagai isolator atau pelapis kabel untuk melindungi pengguna dari kontak langsung dengan penghantar listrik.',
                'Air digunakan untuk melarutkan garam dan gula karena sifat molekulnya yang polar.',
                'Intan digunakan sebagai bahan pemotong dan penggosok karena memiliki struktur yang sangat keras.',
                'Grafit digunakan sebagai bahan isi pensil karena lapisan-lapisan karbonnya mudah bergeser dan meninggalkan bekas pada kertas.',
                'Grafit juga digunakan sebagai elektroda karena dapat menghantarkan listrik.',
            ],
        },
    ],

    summary: [
        'Ikatan kimia dapat ditemukan dalam berbagai material di kehidupan sehari-hari, seperti garam, air, plastik, dan peralatan logam.',
        'Senyawa ion umumnya memiliki titik leleh relatif tinggi dan dapat menghantarkan listrik ketika ion-ionnya dapat bergerak bebas.',
        'Senyawa kovalen memiliki sifat yang beragam, bergantung pada struktur zatnya, baik berupa molekul maupun jaringan kovalen.',
        'Ikatan logam berkaitan dengan kemampuan logam dalam menghantarkan listrik dan panas serta sifatnya yang dapat ditempa dan ditarik menjadi kawat.',
        'Jenis ikatan dan struktur zat memengaruhi sifat fisik serta pemanfaatan suatu bahan.',
        'Pemahaman hubungan struktur, sifat, dan kegunaan zat membantu menentukan bahan yang tepat untuk berbagai kebutuhan.',
    ],

    author: 'Sonia Farah Abdila',
};
