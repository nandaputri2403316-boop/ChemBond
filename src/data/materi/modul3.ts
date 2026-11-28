import type { ModuleData } from '../types';

export const modul3Data: ModuleData = {
    id: 'materi-3',
    order: 3,
    title: 'Penerapan Ikatan Kimia',
    subtitle: 'Mengenal hubungan ikatan kimia dengan benda-benda di sekitar kita.',
    description:
        'Mempelajari bagaimana jenis ikatan kimia dan struktur zat memengaruhi sifat serta pemanfaatan berbagai bahan dalam kehidupan sehari-hari.',

    learningObjectives: [
        'Mengidentifikasi penerapan senyawa ion, kovalen, dan logam dalam kehidupan sehari-hari.',
        'Menghubungkan jenis ikatan kimia dengan sifat fisik suatu bahan.',
        'Menganalisis hubungan struktur zat dengan kegunaannya.',
        'Menjelaskan pentingnya pemahaman ikatan kimia dalam memilih dan menggunakan bahan.',
    ],

    submodules: [
        // =========================================================================
        // PENGANTAR — IKATAN KIMIA DI SEKITAR KITA
        // =========================================================================
        {
            id: 'sub-3-1',
            title: 'Ikatan Kimia di Sekitar Kita',
            illustrationType: 'molecule',
            content: [
                'Pernahkah kamu memperhatikan garam dapur, air minum, kabel listrik, atau peralatan memasak? Benda-benda tersebut ternyata memiliki susunan partikel dan jenis ikatan kimia yang berbeda.',
                'Garam dapur tersusun atas ion natrium dan klorida. Air tersusun atas molekul dengan ikatan kovalen. Sementara itu, tembaga pada kabel listrik memiliki ikatan logam yang berkaitan dengan kemampuan menghantarkan listrik.',
                'Plastik juga memiliki kaitan dengan ikatan kovalen karena sebagian besar tersusun atas rantai panjang molekul yang disebut polimer.',
                'Perbedaan susunan partikel membuat setiap bahan memiliki sifat yang berbeda. Yuk, telusuri bagaimana ikatan kimia menjelaskan kegunaan berbagai bahan tersebut!',
            ],
            keyPoints: [
                'Garam dapur tersusun atas ion natrium dan klorida (ikatan ion).',
                'Air dan plastik tersusun atas molekul dengan pasangan elektron bersama (ikatan kovalen).',
                'Tembaga pada kabel listrik memiliki elektron bebas bergerak (ikatan logam).',
            ],
            examples: [
                'Garam dapur (NaCl) — Kristal ionik.',
                'Air (H₂O) — Molekul kovalen polar.',
                'Kabel tembaga (Cu) — Penghantar listrik berikatan logam.',
                'Plastik pelapis kabel — Polimer kovalen isolator.',
            ],
        },

        // =========================================================================
        // MODUL 1 — PENERAPAN IKATAN ION
        // =========================================================================
        {
            id: 'sub-3-2',
            title: 'Penerapan Ikatan Ion',
            illustrationType: 'crystal',
            content: [
                '1. Mengapa Garam Dapat Menghantarkan Listrik Saat Dilarutkan, tetapi Tidak Saat Berbentuk Kristal?',
                'Pernahkah kamu memperhatikan garam dapur yang digunakan ketika memasak? Garam terlihat seperti butiran kristal kecil berwarna putih. Meskipun terlihat sederhana, di dalamnya terdapat susunan partikel berupa ion-ion yang tersusun secara teratur.',
                'Garam dapur atau natrium klorida (NaCl) merupakan salah satu contoh senyawa ion. Menariknya, garam dalam keadaan padat tidak dapat menghantarkan listrik, tetapi larutannya dapat menghantarkan listrik. Perbedaan ini berkaitan dengan kemampuan ion-ionnya untuk bergerak. Untuk memahaminya, mari kita pelajari susunan dan sifat senyawa ion.',
                '2. Mengenal Senyawa Ion',
                'Senyawa ion merupakan senyawa yang tersusun atas ion positif (kation) dan ion negatif (anion) yang saling tarik-menarik melalui gaya elektrostatik. Ikatan ion umumnya terbentuk melalui perpindahan elektron dari atom logam kepada atom nonlogam. Atom yang melepaskan elektron akan membentuk kation, sedangkan atom yang menerima elektron akan membentuk anion.',
                'Sebagai contoh, pembentukan natrium klorida melibatkan atom natrium (Na) dan klorin (Cl). Atom natrium melepaskan satu elektron dan membentuk ion Na⁺. Sementara itu, atom klorin menerima satu elektron dan membentuk ion Cl⁻. Kedua ion tersebut kemudian saling tarik-menarik karena memiliki muatan yang berlawanan. Dalam bentuk padat, ion-ion tersebut tidak tersusun sebagai molekul NaCl yang berdiri sendiri, melainkan membentuk struktur kristal tiga dimensi yang teratur.',
                '3. Penerapan Senyawa Ion dalam Kehidupan Sehari-hari',
                'Senyawa ion tidak hanya ditemukan pada garam dapur. Berbagai senyawa ion dimanfaatkan dalam industri, makanan, maupun kebutuhan rumah tangga.',
                '4. Mengapa Senyawa Ion Memiliki Sifat Berbeda?',
                'Sifat senyawa ion berkaitan erat dengan susunan ion-ion di dalam kristalnya. Pada keadaan padat, ion-ion terikat pada posisi tertentu dalam struktur kristal sehingga tidak bebas bergerak dan tidak menghantarkan listrik. Pada keadaan lelehan, ion dapat bergerak lebih bebas sehingga menghantarkan listrik. Pada keadaan larutan, ion terpisah dan dapat bergerak dalam pelarut sehingga menghantarkan listrik jika mengandung ion bergerak bebas.',
            ],
            keyPoints: [
                'Padat: Ion berada pada posisi teratur dan tidak bebas bergerak → Tidak menghantarkan listrik.',
                'Lelehan: Ion dapat bergerak lebih bebas → Menghantarkan listrik.',
                'Larutan: Ion terpisah dan dapat bergerak dalam pelarut → Menghantarkan listrik jika mengandung ion bergerak bebas.',
                'Kesimpulan Modul 1: Senyawa ion terbentuk melalui gaya tarik elektrostatik antara kation dan anion. Susunan ion yang teratur menyebabkan senyawa ion umumnya memiliki titik leleh tinggi. Kemampuan ion untuk bergerak juga menentukan apakah senyawa tersebut dapat menghantarkan listrik.',
            ],
            examples: [
                'A. Natrium klorida (NaCl) — Garam dapur: NaCl dimanfaatkan sebagai penyedap makanan dan juga dalam proses pengawetan, misalnya pembuatan ikan asin. Dalam konsentrasi tinggi, garam dapat mengurangi ketersediaan air bagi mikroorganisme sehingga pertumbuhannya terhambat. NaCl memiliki struktur kristal dengan gaya tarik elektrostatik yang kuat antara ion Na⁺ dan Cl⁻, sehingga titik lelehnya relatif tinggi.',
                'B. Kalsium karbonat (CaCO₃) — Batu kapur dan marmer: CaCO₃ tersusun atas ion Ca²⁺ dan ion karbonat CO₃²⁻ (di dalam ion karbonat terdapat ikatan kovalen antara atom karbon dan oksigen). Kalsium karbonat dimanfaatkan sebagai bahan baku pembuatan semen, kapur, serta berbagai produk industri konstruksi.',
                'C. Kalsium klorida (CaCl₂) — Bahan pengering: Kalsium klorida dapat digunakan sebagai bahan pengering karena mampu menyerap uap air dari lingkungan. Senyawa ini bersifat higroskopis, bahkan dapat menyerap cukup banyak air hingga membentuk larutan, sehingga dimanfaatkan dalam produk penyerap kelembapan.',
                'D. Natrium bikarbonat (NaHCO₃) — Soda kue: Ketika bereaksi dengan bahan yang bersifat asam atau mengalami pemanasan, NaHCO₃ dapat menghasilkan gas karbon dioksida (CO₂). Gas tersebut membentuk gelembung yang membantu adonan mengembang.',
            ],
        },

        // =========================================================================
        // MODUL 2 — PENERAPAN IKATAN KOVALEN
        // =========================================================================
        {
            id: 'sub-3-3',
            title: 'Penerapan Ikatan Kovalen',
            illustrationType: 'molecule',
            content: [
                '1. Mengapa Zat yang Sama-sama Memiliki Ikatan Kovalen Dapat Memiliki Sifat Berbeda?',
                'Pernahkah kamu memperhatikan air, gas dalam minuman berkarbonasi, isi pensil, dan perhiasan intan? Bahan-bahan tersebut berkaitan dengan ikatan kovalen. Namun, sifatnya sangat berbeda. Air berbentuk cair, karbon dioksida dapat ditemukan sebagai gas, intan sangat keras, sedangkan grafit mudah meninggalkan bekas pada kertas. Perbedaan tersebut terjadi karena ikatan kovalen dapat membentuk molekul sederhana maupun struktur jaringan yang sangat luas.',
                '2. Mengenal Ikatan Kovalen',
                'Ikatan kovalen merupakan ikatan kimia yang terbentuk ketika dua atom atau lebih menggunakan pasangan elektron secara bersama-sama untuk mencapai kestabilan. Ikatan ini umumnya terbentuk antara atom-atom nonlogam. Berbeda dengan ikatan ion yang melibatkan perpindahan elektron, ikatan kovalen melibatkan penggunaan bersama pasangan elektron. Ikatan kovalen dapat ditemukan dalam senyawa molekuler seperti H₂O, CO₂, dan CH₄, serta struktur kovalen jaringan seperti intan dan grafit.',
                '3. Penerapan Senyawa Kovalen dalam Kehidupan Sehari-hari',
                'Senyawa kovalen berperan besar dalam kehidupan sehari-hari, mulai dari air sebagai pelarut polar, karbon dioksida pada minuman berkarbonasi dan alat pemadam api, hingga metana sebagai bahan bakar gas alam.',
                '4. Senyawa Kovalen Molekuler dan Kovalen Jaringan',
                'A. Kovalen molekuler: Tersusun atas molekul-molekul yang memiliki jumlah atom tertentu. Gaya tarik antarmolekul memengaruhi sifat fisiknya. Contoh: air (H₂O), karbon dioksida (CO₂), dan metana (CH₄). Senyawa kovalen molekuler umumnya memiliki titik leleh dan titik didih relatif rendah, namun terdapat pengecualian seperti air yang bertitik didih relatif tinggi karena adanya ikatan hidrogen antarmolekul.',
                'B. Kovalen jaringan: Atom-atom saling terhubung melalui ikatan kovalen dalam susunan jaringan yang luas. Contoh: intan dan grafit. Struktur jaringan ini menghasilkan sifat berbeda, seperti kekerasan sangat tinggi pada intan dan kemampuan menghantarkan listrik pada grafit.',
                '5. Mengapa Intan dan Grafit Berbeda?',
                'Intan dan grafit sama-sama tersusun atas unsur karbon, tetapi susunan atomnya berbeda. Pada intan, ikatan kovalen membentuk jaringan tiga dimensi yang kuat (setiap atom karbon mengikat empat atom karbon lainnya) sehingga sangat keras dan digunakan sebagai perhiasan serta bahan pemotong atau penggosok. Sementara itu, pada grafit, atom karbon membentuk lapisan-lapisan yang dapat bergeser satu sama lain (setiap atom karbon mengikat tiga atom karbon lainnya dalam satu lapisan) dan memiliki elektron terdelokalisasi penghantar listrik, sehingga digunakan sebagai isi pensil dan elektroda.',
            ],
            keyPoints: [
                'INTAN: Struktur jaringan tiga dimensi; setiap atom karbon berikatan kovalen dengan empat atom karbon lainnya; kekerasan sangat tinggi; digunakan sebagai perhiasan dan bahan pemotong atau penggosok.',
                'GRAFIT: Struktur berlapis; setiap atom karbon berikatan dengan tiga atom karbon lainnya dalam satu lapisan; lapisan dapat bergeser; memiliki elektron terdelokalisasi penghantar listrik; digunakan sebagai isi pensil dan elektroda.',
                'Kesimpulan Modul 2: Ikatan kovalen terbentuk melalui penggunaan bersama pasangan elektron. Zat kovalen dapat berupa molekul sederhana maupun jaringan kovalen. Perbedaan susunan atom dan gaya tarik antarmolekul menyebabkan setiap bahan memiliki sifat dan kegunaan yang berbeda.',
            ],
            examples: [
                'A. Air (H₂O) — Pelarut dalam kehidupan sehari-hari: Molekul air berbentuk bengkok dan bersifat polar karena distribusi muatan listrik tidak merata. Sifat polar membuat air dapat melarutkan banyak zat polar dan senyawa ion (seperti garam dan gula), tetapi tidak melarutkan minyak yang bersifat nonpolar.',
                'B. Karbon dioksida (CO₂) — Minuman berkarbonasi dan alat pemadam api: Tersusun atas satu atom karbon dan dua atom oksigen; menghasilkan gelembung pada minuman berkarbonasi serta mengurangi konsentrasi oksigen di sekitar sumber api pada alat pemadam api.',
                'C. Metana (CH₄) — Komponen gas alam: Tersusun atas satu atom karbon dan empat atom hidrogen; digunakan sebagai bahan bakar memasak dan menghasilkan karbon dioksida, air, serta energi saat dibakar sempurna.',
                'D. Intan — Struktur jaringan 3D sangat keras untuk perhiasan dan alat pemotong.',
                'E. Grafit — Struktur berlapis yang licin dan menghantarkan listrik untuk isi pensil dan elektroda.',
            ],
        },

        // =========================================================================
        // MODUL 3 — PENERAPAN IKATAN LOGAM
        // =========================================================================
        {
            id: 'sub-3-4',
            title: 'Penerapan Ikatan Logam',
            illustrationType: 'crystal',
            content: [
                '1. Mengapa Kabel Listrik Menggunakan Tembaga, sedangkan Panci Banyak Dibuat dari Aluminium?',
                'Pernahkah kamu memperhatikan kabel listrik yang terbuat dari tembaga atau panci yang banyak menggunakan aluminium? Keduanya merupakan logam, tetapi memiliki kegunaan yang berbeda. Tembaga banyak digunakan sebagai penghantar listrik, sedangkan aluminium dimanfaatkan untuk membuat peralatan memasak karena relatif ringan dan mampu menghantarkan panas. Perbedaan pemanfaatan tersebut berkaitan dengan sifat logam dan struktur ikatan yang dimilikinya.',
                '2. Mengenal Ikatan Logam',
                'Ikatan logam merupakan gaya tarik-menarik antara pusat-pusat ion positif logam dengan elektron valensi yang terdelokalisasi. Dalam struktur logam, elektron valensi tidak hanya terikat pada satu atom tertentu, tetapi dapat bergerak di antara pusat-pusat ion positif. Keadaan ini dikenal sebagai model lautan elektron.',
                'Pembentukan struktur ikatan logam: (1) Atom-atom logam menyumbangkan elektron valensinya ke dalam sistem elektron terdelokalisasi. (2) Pusat-pusat ion positif tersusun secara teratur. (3) Elektron valensi dapat bergerak di antara pusat-pusat ion positif. (4) Gaya tarik elektrostatik antara keduanya mempertahankan struktur logam.',
                '3. Mengapa Logam Memiliki Sifat Khas?',
                'A. Menghantarkan listrik: Elektron terdelokalisasi dapat bergerak secara terarah ketika dihubungkan dengan sumber listrik sehingga menghasilkan arus listrik (contoh: kabel tembaga).',
                'B. Menghantarkan panas: Energi panas diteruskan dengan baik melalui pergerakan elektron dan getaran partikel dalam struktur logam (contoh: panci dan wajan aluminium).',
                'C. Dapat ditempa (Maleabilitas): Lapisan partikel dalam struktur logam dapat bergeser ketika diberi tekanan tanpa langsung merusak keseluruhan ikatan logam sehingga dapat dibentuk menjadi lembaran.',
                'D. Dapat ditarik menjadi kawat (Duktilitas): Logam tertentu dapat ditarik menjadi kawat tanpa mudah patah sehingga dimanfaatkan dalam pembuatan kabel listrik.',
                '4. Eksplorasi Logam dalam Kehidupan Sehari-hari & 5. Hubungan Struktur Ikatan Logam dengan Kegunaannya',
                'Struktur lautan elektron menentukan pemanfaatan berbagai logam: elektron bebas bergerak menjadikan tembaga sebagai kabel listrik; hantaran panas dan massa jenis rendah menjadikan aluminium sebagai peralatan masak dan komponen kendaraan; kekuatan paduan besi-karbon menjadikan baja sebagai rangka konstruksi; serta kelenturan dan warna keemasan paduan tembaga-seng menjadikan kuningan sebagai gagang pintu dan alat musik.',
            ],
            keyPoints: [
                'Menghantarkan listrik → Elektron terdelokalisasi dapat bergerak (Contoh: Kabel tembaga).',
                'Menghantarkan panas → Energi diteruskan melalui elektron dan getaran partikel (Contoh: Panci aluminium).',
                'Dapat ditempa (Maleabilitas) → Lapisan partikel dapat bergeser (Contoh: Lembaran logam).',
                'Dapat ditarik menjadi kawat (Duktilitas) → Struktur logam dapat mengalami perubahan bentuk (Contoh: Kabel logam).',
                'Kesimpulan Modul 3: Ikatan logam terbentuk karena gaya tarik antara pusat-pusat ion positif dan elektron valensi yang terdelokalisasi. Struktur ini berkaitan dengan kemampuan logam menghantarkan listrik dan panas, serta sifatnya yang dapat ditempa dan ditarik menjadi kawat.',
            ],
            examples: [
                'A. Tembaga (Cu) — Penghantar listrik: Memiliki daya hantar listrik yang baik dan mudah ditarik menjadi kawat sehingga banyak digunakan sebagai bahan inti kabel listrik.',
                'B. Aluminium (Al) — Peralatan rumah tangga dan kendaraan: Memiliki massa jenis relatif rendah, cukup mudah dibentuk, dan dapat menghantarkan panas sehingga cocok untuk panci, wajan, bagian kendaraan, dan komponen pesawat.',
                'C. Baja — Bahan konstruksi: Paduan besi dan karbon yang memiliki kekuatan baik sehingga banyak digunakan dalam konstruksi gedung, jembatan, dan rangka bangunan.',
                'D. Kuningan (Cu dan Zn) — Perlengkapan rumah tangga dan alat musik: Paduan tembaga dan seng berwarna kuning keemasan yang dapat dibentuk menjadi gagang pintu, komponen alat musik, dan perlengkapan rumah tangga.',
            ],
        },

        // =========================================================================
        // PENGUATAN — HUBUNGAN STRUKTUR, SIFAT, DAN KEGUNAAN BAHAN
        // =========================================================================
        {
            id: 'sub-3-5',
            title: 'Mengapa Setiap Bahan Memiliki Kegunaan Berbeda?',
            illustrationType: 'molecule',
            content: [
                'Ternyata, kegunaan suatu bahan bukanlah kebetulan. Susunan partikel dan jenis ikatan kimia berperan dalam membentuk sifat yang membuat bahan tersebut cocok untuk berbagai kebutuhan.',
            ],
            keyPoints: [
                '1. TEMBAGA VS PLASTIK — Tembaga menghantarkan listrik karena memiliki elektron bebas bergerak dalam struktur logam, sedangkan plastik bersifat isolator sehingga digunakan sebagai pelapis kabel.',
                '2. INTAN VS GRAFIT — Sama-sama tersusun atas karbon, tetapi struktur berbeda menyebabkan intan sangat keras (jaringan 3D), sedangkan grafit memiliki lapisan yang mudah bergeser dan dapat menghantarkan listrik.',
                '3. ALUMINIUM VS BAJA — Aluminium memiliki massa jenis relatif rendah untuk peralatan dan kendaraan, sedangkan baja memiliki kekuatan tinggi untuk konstruksi bangunan.',
            ],
            examples: [
                'Kesimpulan Alur: STRUKTUR DAN JENIS IKATAN → SIFAT BAHAN → KEGUNAAN BAHAN',
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