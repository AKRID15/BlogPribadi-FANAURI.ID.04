const postsData = [
    { id: 1, title: "Harapan di MK Basis Data", img: "img/POST1.png" },
    { id: 2, title: "Apa itu Basis Data", img: "img/POST2.png" },
    { id: 3, title: "Conceptual Database (Model Konseptual)", img: "img/POST3.png" },
    { id: 4, title: "Physical Model (Model Fisik)", img: "img/POST4.png" },
    { id: 5, title: "Instalasi MySQL (DBMS)", img: "img/POST5.png" },
    { id: 6, title: "Attribute, Entitas, dan Relasi dalam ERD", img: "img/POST6.png" },
    { id: 7, title: "Primary Key, Foreign Key, Candidate Key", img: "img/POST7.png" },
    { id: 8, title: "Relational pada ERD & Kenapa Many-to-Many Tidak Baik", img: "img/POST8.png" },
    { id: 9, title: "Mengenal ERD dan Intersection (5 Kasus Praktis)", img: "img/POST9.png" },
    { id: 10, title: "Normalisasi pada ERD", img: "img/POST10.png" }
];

const detailContent = {
    1: `<h2>Harapan di MK Basis Data</h2>
      <p>Saya berharap setelah mengikuti mata kuliah Basis Data saya mampu merancang dan mengimplementasikan struktur data yang rapi untuk aplikasi nyata. 
      Secara spesifik saya ingin dapat membuat ER diagram yang benar, melakukan normalisasi untuk menghindari redundansi, menulis query SQL dasar hingga menengah, serta memahami konsep transaksi dan integritas data agar aplikasi yang saya buat aman dan konsisten.</p>`,

    2: `<h2>Apa itu Basis Data</h2>
      <p><b>Definisi:</b> Basis data adalah kumpulan data yang terorganisir dan saling berhubungan, yang disimpan secara sistematis dalam komputer sehingga dapat diakses, dikelola, dan diperbarui dengan mudah.</p>
      <p><b>Karakteristik:</b></p>
      <ul>
        <li>Tersusun secara terstruktur.</li>
        <li>Memiliki hubungan antar data (relasi).</li>
        <li>Dikelola oleh sistem manajemen basis data (DBMS).</li>
        <li>Mendukung keamanan, integritas, dan konsistensi data.</li>
      </ul>
      <p><b>Fungsi:</b></p>
      <ul>
        <li>Menyimpan data secara efisien.</li>
        <li>Mengelola akses data banyak pengguna sekaligus.</li>
        <li>Memudahkan pencarian, pengeditan, dan penghapusan data.</li>
        <li>Mengurangi redundansi data (pengulangan).</li>
      </ul>
      <p><b>Manfaat:</b></p>
      <ul>
        <li>Meningkatkan kecepatan akses informasi.</li>
        <li>Menjaga kualitas dan konsistensi data.</li>
        <li>Mendukung pengambilan keputusan.</li>
        <li>Menyediakan data yang aman dan terkontrol.</li>
      </ul>
      <p><b>Contoh:</b> Basis data akademik universitas yang menyimpan data mahasiswa, dosen, mata kuliah, serta nilai.</p>`,

    3: `<h2>Conceptual Database (Model Konseptual)</h2>
      <p><b>Definisi:</b> Model konseptual basis data adalah representasi abstrak dari struktur data yang menunjukkan entitas, atribut, dan hubungan antar entitas, biasanya divisualisasikan dengan diagram ER (Entity Relationship).</p>
      <p><b>Karakteristik:</b></p>
      <ul>
        <li>Bersifat abstrak (belum teknis).</li>
        <li>Fokus pada “apa” data yang dibutuhkan, bukan “bagaimana” data disimpan.</li>
        <li>Menggunakan simbol, diagram, dan notasi untuk menggambarkan relasi.</li>
        <li>Tidak tergantung pada perangkat lunak DBMS tertentu.</li>
      </ul>
      <p><b>Fungsi:</b></p>
      <ul>
        <li>Menjadi rancangan awal sebelum implementasi basis data.</li>
        <li>Menggambarkan kebutuhan informasi pengguna.</li>
        <li>Memudahkan komunikasi antara analis sistem, desainer, dan pengguna.</li>
      </ul>
      <p><b>Manfaat:</b></p>
      <ul>
        <li>Mengurangi kesalahan saat implementasi database.</li>
        <li>Mempermudah dokumentasi sistem.</li>
        <li>Memberikan gambaran jelas tentang hubungan antar data.</li>
      </ul>
      <p><b>Contoh:</b> Diagram ER untuk sistem rumah sakit yang menggambarkan entitas Pasien, Dokter, Poli, dan Rekam Medis, serta hubungan antar entitas tersebut.</p>`,

    4: `<h2>Physical Model (Model Fisik)</h2>
      <p><b>Definisi:</b> Model fisik basis data adalah rancangan teknis yang menjelaskan bagaimana data akan disimpan secara nyata dalam DBMS, termasuk struktur tabel, tipe data, indeks, partisi, dan relasi antar tabel.</p>
      <p><b>Karakteristik:</b></p>
      <ul>
        <li>Bersifat teknis dan detail.</li>
        <li>Menentukan tabel, kolom, tipe data, primary key, foreign key.</li>
        <li>Bergantung pada DBMS yang digunakan (misalnya MySQL, Oracle, PostgreSQL).</li>
        <li>Siap diimplementasikan ke dalam sistem database.</li>
      </ul>
      <p><b>Fungsi:</b></p>
      <ul>
        <li>Menentukan struktur penyimpanan data yang optimal.</li>
        <li>Menjamin integritas data dengan aturan (constraint).</li>
        <li>Mendukung efisiensi query dan performa sistem.</li>
      </ul>
      <p><b>Manfaat:</b></p>
      <ul>
        <li>Memastikan sistem database berjalan efektif dan efisien.</li>
        <li>Mempermudah pemeliharaan dan pengembangan database.</li>
        <li>Mengoptimalkan penyimpanan dan akses data.</li>
      </ul>
      <p><b>Contoh:</b> Pada sistem akademik, tabel Mahasiswa dengan atribut:
      <ul>
        <li>NIM (VARCHAR, Primary Key)</li>
        <li>Nama (VARCHAR)</li>
        <li>Tanggal_Lahir (DATE)</li>
        <li>Prodi (VARCHAR)</li>
      </ul>
      serta relasi dengan tabel Mata_Kuliah dan Nilai.</p>`,

    5: `<h2>Instalasi Laragon (DBMS + PHP + phpMyAdmin)</h2>
      <p>Berikut langkah-langkah instalasi <b>Laragon</b> di Windows untuk mengelola database MySQL dan menjalankan PHP:</p>

      <ol>
        <li>Buka website resmi Laragon di sini: 
          <a href="https://share.google/nc3cdTcWb1kCVcsWG" target="_blank" style="color:#8b5cf6; text-decoration:none; font-weight:bold;">
          Download Laragon</a>.
        </li>
        <li>Pilih versi <b>Laragon 6.0.0</b> agar tidak berbayar.</li>
        <li>Jalankan file installer, lalu ikuti langkah <b>Next → Next → Finish</b>.</li>
        <li>Setelah instalasi selesai, buka aplikasi Laragon.</li>
        <li>Klik tombol <b>Start All</b> untuk menyalakan Apache dan MySQL/MariaDB.</li>
        <li>Buka browser dan akses 
          <code>http://localhost</code> untuk memastikan Laragon berjalan.</li>
        <li>Untuk mengelola database, buka:
          <a href="http://localhost/phpmyadmin" target="_blank" style="color:#8b5cf6; text-decoration:none; font-weight:bold;">
          http://localhost/phpmyadmin</a>.
        </li>
        <li>Login ke phpMyAdmin dengan username: <b>root</b> dan password: <i>(kosong/tidak diisi)</i>.</li>
      </ol>

      <p>Jika phpMyAdmin <b>tidak bisa diakses</b>, ikuti langkah berikut:</p>

      <ol>
        <li>Download phpMyAdmin dari situs resmi:
          <a href="https://www.phpmyadmin.net/downloads/" target="_blank" style="color:#8b5cf6; text-decoration:none; font-weight:bold;">
          phpMyAdmin Official</a>.
        </li>
        <li>Ekstrak file hasil download.</li>
        <li>Pindahkan folder hasil ekstrak ke 
          <code>C:\\laragon\\www\\</code> (misalnya menjadi 
          <code>C:\\laragon\\www\\phpmyadmin</code>).</li>
        <li>Restart Laragon.</li>
        <li>Buka kembali di browser:
          <a href="http://localhost/phpmyadmin" target="_blank" style="color:#8b5cf6; text-decoration:none; font-weight:bold;">
          http://localhost/phpmyadmin</a>.
        </li>
      </ol>

      <p>Jika sudah bisa login, berarti instalasi <b>Laragon</b> dan <b>phpMyAdmin</b> berhasil 🎉</p>

      <hr>
      <p>🎬 Butuh panduan visual? Tonton video tutorial lengkapnya di YouTube:</p>
      <p>
        <a href="https://youtu.be/Ib_RLYXaktA?si=1f1C8BuIiNK0Ioh2" 
           target="_blank" 
           style="color:#8b5cf6; font-weight:bold; text-decoration:none;">
           🔗 Lihat Tutorial Instalasi Laragon di YouTube
        </a>
      </p>`,

    6: `<h2>Attribute, Entitas, dan Relasi dalam ERD</h2>
      <p><b>1. Entitas</b><br>
      Entitas adalah objek nyata atau konsep yang ingin kita simpan datanya dalam sistem. Contoh entitas dalam sistem akademik:
      <ul>
        <li><b>Mahasiswa</b> → individu yang terdaftar di universitas</li>
        <li><b>Dosen</b> → pengajar yang mengajar mata kuliah</li>
        <li><b>MataKuliah</b> → mata kuliah yang ditawarkan universitas</li>
      </ul></p>
      <p><b>2. Atribut</b><br>
      Atribut adalah informasi atau properti yang dimiliki oleh entitas. Contoh atribut:
      <ul>
        <li><b>Mahasiswa</b> → NIM (PK), Nama, Prodi, Tanggal Lahir</li>
        <li><b>Dosen</b> → NIP (PK), Nama, Gelar, MataKuliah yang diajar</li>
        <li><b>MataKuliah</b> → KodeMK (PK), NamaMK, SKS</li>
      </ul></p>
      <p><b>3. Relasi</b><br>
      Relasi adalah hubungan antar entitas yang menunjukkan bagaimana entitas tersebut saling berinteraksi. Contoh relasi:
      <ul>
        <li>Mahasiswa <b>mengambil</b> MataKuliah (Many-to-Many)</li>
        <li>Dosen <b>mengajar</b> MataKuliah (One-to-Many)</li>
      </ul></p>`,

    7: `<h2>Primary Key, Foreign Key, Candidate Key</h2>

      <h3>1. Primary Key (PK)</h3>
      <p><b>Pengertian:</b> Primary Key adalah atribut unik yang digunakan untuk mengidentifikasi setiap record secara unik di tabel. Tidak boleh ada nilai duplikat atau NULL.</p>

      <p><b>5 Contoh Primary Key pada ERD:</b></p>
      <ol>
      <li><b>Mahasiswa:</b> NIM (contoh: 24416255201047)</li>
      <li><b>Dosen:</b> NIP (contoh: 1987654321)</li>
      <li><b>MataKuliah:</b> KodeMK (contoh: IF101)</li>
      <li><b>Prodi:</b> KodeProdi (contoh: IF)</li>
      <li><b>Ruangan:</b> KodeRuangan (contoh: R101)</li>
      </ol>

      <p><b>Penerapan di Workbench:</b> Saat membuat tabel di MySQL Workbench</P>
      <img src="img/1.png" alt="Contoh Primary Key Workbench" style="width:100%; border-radius:10px; margin:10px 0;">

      <hr>

      <h3>2. Foreign Key (FK)</h3>
      <p><b>Pengertian:</b> Foreign Key adalah atribut yang menghubungkan satu tabel dengan tabel lain, merujuk ke Primary Key di tabel target.</p>

      <p><b>5 Contoh Foreign Key pada ERD:</b></p>
      <ol>
      <li>Tabel Nilai → NIM (FK) mengacu ke Mahasiswa.NIM</li>
      <li>Tabel Mengajar → NIP (FK) mengacu ke Dosen.NIP</li>
      <li>Tabel Jadwal → KodeMK (FK) mengacu ke MataKuliah.KodeMK</li>
      <li>Tabel MataKuliah → KodeProdi (FK) mengacu ke Prodi.KodeProdi</li>
      <li>Tabel dosen → id_dosen (FK) mengacu ke id_jurusan </li>
      </ol>

      <p><b>Penerapan di Workbench:</b> Saat membuat tabel di MySQL Workbench</P>
      <img src="img/2.png" alt="Contoh Foreign Key Workbench" style="width:100%; border-radius:10px; margin:10px 0;">

      <hr>

      <h3>3. Candidate Key (CK)</h3>
      <p><b>Pengertian:</b> Candidate Key adalah atribut atau kombinasi atribut yang bisa menjadi Primary Key karena bersifat unik. Dari beberapa Candidate Key, dipilih satu sebagai Primary Key.</p>

      <p><b>5 Contoh Candidate Key pada ERD:</b></p>
      <ol>
      <li>Mahasiswa → Email atau NIM</li>
      <li>Dosen → Email atau NIP</li>
      <li>MataKuliah → KodeMK atau NamaMK (jika unik)</li>
      <li>Prodi → KodeProdi atau NamaProdi (jika unik)</li>
      <li>Ruangan → KodeRuangan atau NamaRuangan (jika unik)</li>
      </ol>

      <p><b>Penerapan di Workbench:</b> Saat membuat tabel di MySQL Workbench</P>
      <img src="img/3.png" alt="Contoh Candidate Key Workbench" style="width:100%; border-radius:10px; margin:10px 0;">`,


    8: `<h2>Relational pada ERD & Many-to-Many</h2>

          <h3>1. Pengertian Relasi pada ERD</h3>
          <p><b>Relasi (Relationship)</b> adalah hubungan antar entitas yang menunjukkan bagaimana entitas tersebut berinteraksi. Relasi dapat berupa:</p>
          <ul>
            <li><b>One-to-One (1:1)</b> → Satu record di tabel A berhubungan dengan satu record di tabel B.</li>
            <li><b>One-to-Many (1:N)</b> → Satu record di tabel A berhubungan dengan banyak record di tabel B.</li>
            <li><b>Many-to-Many (M:N)</b> → Banyak record di tabel A berhubungan dengan banyak record di tabel B.</li>
          </ul>

          <p>Contoh relasi:</p>
          <ul>
            <li>Mahasiswa (1:N) Nilai → One-to-Many, setiap Mahasiswa bisa punya banyak nilai.</li>
            <li>Mahasiswa - MataKuliah → Many-to-Many, karena satu Mahasiswa bisa ambil banyak MataKuliah, dan satu MataKuliah diambil banyak Mahasiswa.</li>
          </ul>

          <hr>

          <h3>2. Mengapa Many-to-Many Tidak Disarankan Langsung di ERD</h3>
          <p>Many-to-Many langsung di database tidak praktis, karena:</p>
          <ol>
            <li>Menyulitkan penyimpanan data secara efisien.</li>
            <li>Membuat query lebih kompleks, sulit join antar tabel.</li>
            <li>Bisa terjadi redundansi dan inkonsistensi data.</li>
          </ol>

          <p><b>Solusi:</b> Pecah relasi Many-to-Many menjadi tabel perantara (junction table) agar menjadi dua relasi One-to-Many.</p>

          <h3>3. Contoh Penerapan (Tanpa Gambar)</h3>
          <p>Relasi Mahasiswa - MataKuliah:</p>
          <ul>
            <li>Buat tabel <b>Mahasiswa</b> dengan Primary Key <code>NIM</code></li>
            <li>Buat tabel <b>MataKuliah</b> dengan Primary Key <code>KodeMK</code></li>
            <li>Buat tabel <b>AmbilMK</b> sebagai tabel perantara (junction table) dengan struktur:</li>
          </ul>
          <pre>
          AmbilMK (
            id INT PRIMARY KEY AUTO_INCREMENT,
            NIM VARCHAR(20) NOT NULL,
            KodeMK VARCHAR(10) NOT NULL,
            FOREIGN KEY (NIM) REFERENCES Mahasiswa(NIM),
            FOREIGN KEY (KodeMK) REFERENCES MataKuliah(KodeMK)
          )
          </pre>
          <p>Dengan tabel perantara, Many-to-Many menjadi dua relasi One-to-Many:</p>
          <ul>
            <li>Mahasiswa → AmbilMK (1:N)</li>
            <li>MataKuliah → AmbilMK (1:N)</li>
          </ul>
          `,
    9: `<h2>Mengenal ERD dan Intersection (5 Kasus Praktis)</h2>
      <p><b>Pengertian ERD:</b><br>
      ERD (Entity Relationship Diagram) adalah diagram yang menggambarkan hubungan antar entitas dalam sistem basis data. ERD membantu kita memahami struktur data, hubungan antar tabel, serta menentukan primary key dan foreign key.</p>
      
      <p><b>Pengertian Intersection:</b><br>
      Intersection adalah <i>entitas penghubung</i> yang muncul ketika dua entitas utama memiliki hubungan <b>Many-to-Many (M:N)</b>. Karena relasi M:N tidak bisa langsung diterapkan di database relasional, maka dibuat tabel baru (intersection table) untuk mengubahnya menjadi dua relasi One-to-Many.</p>

      <h3>Contoh Kasus Intersection:</h3>

      <ol>
        <li><b>Mahasiswa</b> × <b>Mata Kuliah</b> → <b>KRS</b><br>
        Mahasiswa bisa mengambil banyak mata kuliah, dan satu mata kuliah bisa diambil banyak mahasiswa. 
        Maka dibuat entitas <b>KRS</b> dengan atribut: NIM, Kode_Matkul, Semester.</li><br>

        <li><b>Dokter</b> × <b>Pasien</b> → <b>Pemeriksaan</b><br>
        Satu dokter bisa memeriksa banyak pasien, dan satu pasien bisa diperiksa oleh banyak dokter. 
        Maka dibuat entitas <b>Pemeriksaan</b> dengan atribut: id_dokter, id_pasien, diagnosa, tindakan.</li><br>

        <li><b>Dosen</b> × <b>Kelas</b> → <b>Pengajaran</b><br>
        Dosen bisa mengajar banyak kelas, dan satu kelas bisa diajar beberapa dosen. 
        Entitas <b>Pengajaran</b> berisi: id_dosen, id_kelas, tahun_ajar.</li><br>

        <li><b>Karyawan</b> × <b>Proyek</b> → <b>Penugasan</b><br>
        Karyawan bisa ikut di banyak proyek, dan satu proyek bisa punya banyak karyawan. 
        Tabel penghubungnya: <b>Penugasan</b> dengan atribut id_karyawan, id_proyek, peran, tanggal_mulai.</li><br>

        <li><b>Pelanggan</b> × <b>Produk</b> → <b>DetailTransaksi</b><br>
        Pelanggan bisa membeli banyak produk, dan satu produk bisa dibeli banyak pelanggan. 
        Maka dibuat <b>DetailTransaksi</b> dengan atribut id_pelanggan, id_produk, jumlah, tanggal_beli.</li>
      </ol>

      <p><b>Kesimpulan:</b> Intersection di ERD digunakan untuk memecah relasi Many-to-Many agar bisa diterapkan di database seperti MySQL.</p>

      <hr>
      <p>🎬 Saya juga sudah membuat video penjelasan tentang 5 kasus intersection ini di YouTube. 
      Tonton videonya di sini untuk lihat penjelasan lengkapnya:</p>

      <p><a href="https://youtu.be/-3T9eE_zEao?si=bCvSBwQzve6ICD1q" target="_blank" style="color:#8b5cf6; font-weight:bold; text-decoration:none;">
      🔗 Lihat Video Penjelasan di YouTube</a></p>`,

    10: `<h2>Normalisasi pada ERD</h2>
      <p><b>Pengertian Normalisasi:</b><br>
      Normalisasi adalah proses penataan struktur tabel dalam database agar data lebih efisien, tidak redundan, dan mudah dikelola. Tujuannya adalah memastikan setiap data disimpan di tempat yang tepat dan tidak terjadi duplikasi yang tidak perlu.</p>

      <h3>Tujuan Normalisasi:</h3>
      <ul>
        <li>Menghilangkan duplikasi data (redundansi).</li>
        <li>Memastikan integritas dan konsistensi data.</li>
        <li>Mempermudah pemeliharaan dan pembaruan data.</li>
        <li>Meningkatkan efisiensi penyimpanan dan query.</li>
      </ul>

      <h3>Tahapan Normalisasi:</h3>

      <h4>1️⃣ First Normal Form (1NF)</h4>
      <p>Suatu tabel dikatakan 1NF jika setiap atribut hanya berisi nilai atomik (tidak ada data yang diulang atau disimpan dalam bentuk daftar).</p>
      <p><b>Contoh:</b> Jika kolom “Hobi” berisi “Membaca, Menulis”, maka itu belum 1NF. Harus dipisah menjadi dua record terpisah.</p>

      <h4>2️⃣ Second Normal Form (2NF)</h4>
      <p>Sudah 1NF dan semua atribut non-key bergantung sepenuhnya pada primary key, bukan hanya sebagian (jika primary key terdiri dari dua kolom).</p>
      <p><b>Contoh:</b> Pada tabel KRS (NIM, KodeMatkul, Nilai), atribut “Nama Mahasiswa” tidak boleh disimpan di sini karena hanya bergantung pada NIM, bukan kombinasi NIM+KodeMatkul.</p>

      <h4>3️⃣ Third Normal Form (3NF)</h4>
      <p>Sudah 2NF dan tidak ada atribut non-key yang bergantung pada atribut non-key lainnya (tidak ada ketergantungan transitif).</p>
      <p><b>Contoh:</b> Jika tabel Mahasiswa memiliki atribut (NIM, Nama, KodeJurusan, NamaJurusan), maka “NamaJurusan” seharusnya dipindah ke tabel Jurusan tersendiri karena tergantung pada KodeJurusan.</p>

      <h4>4️⃣ Boyce-Codd Normal Form (BCNF)</h4>
      <p>Merupakan versi lebih ketat dari 3NF. Semua determinan harus merupakan candidate key. 
      BCNF memastikan tidak ada anomali pada hubungan kompleks antar atribut.</p>

      <h3>Manfaat Normalisasi:</h3>
      <ul>
        <li>Struktur database lebih sederhana dan rapi.</li>
        <li>Mencegah data tidak konsisten.</li>
        <li>Mempercepat proses update dan penghapusan data.</li>
        <li>Mudah dikembangkan untuk sistem yang lebih besar.</li>
      </ul>

      <h3>Kesimpulan:</h3>
      <p>Normalisasi sangat penting dalam perancangan ERD untuk memastikan data tersimpan dengan efisien, bebas anomali, dan mudah diakses. 
      Proses ini menjadi fondasi utama dalam membangun database yang kuat dan berkualitas.</p>`
};

// ====== Render Posts ======
function renderPosts(containerId, posts) {
    const container = document.getElementById(containerId);
    container.innerHTML = posts.map(post => `
    <div class="post glass" onclick="showDetail(${post.id}, '${post.img}')">
      <img src="${post.img}" alt="${post.title}">
      <h2>${post.title}</h2>
    </div>
  `).join("");
}

// ====== Show Post Detail ======
function showDetail(id, imgUrl) {
    const detail = document.getElementById("detail");
    detail.style.display = "block";
    detail.style.animation = "fadeIn 0.8s ease";
    detail.innerHTML = `
    <a class="back-btn" onclick="goBack()">← Kembali</a>
    <img src="${imgUrl}" alt="Gambar Post">
    ${detailContent[id]}
  `;
    document.getElementById("home").style.display = "none";
    document.getElementById("profilePosts").style.display = "none";
}

// ====== Navigation ======
let lastSection = "home";

function goBack() {
    showSection(lastSection);
}

function showSection(section) {
    document.getElementById("home").style.display = section === "home" ? "block" : "none";
    document.getElementById("profilePosts").style.display = section === "profilePosts" ? "block" : "none";
    document.getElementById("detail").style.display = "none";
    lastSection = section;

    // Animasi transisi halus
    document.querySelector(".container").style.opacity = "0";
    setTimeout(() => {
        document.querySelector(".container").style.opacity = "1";
    }, 150);
}

// ====== Mobile Menu ======
function toggleMenu() {
    const menu = document.getElementById("mobileMenu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

// 🌙 Toggle dark/light mode dengan animasi dan ikon berganti
const toggle = document.getElementById("toggleMode");
const toggleMobile = document.getElementById("toggleModeMobile");

function switchTheme(button) {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");

    const icon = button.querySelector("i");
    icon.classList.remove("fa-sun", "fa-moon");
    icon.classList.add("rotate-glow"); // Tambah efek rotasi

    setTimeout(() => {
        icon.classList.remove("rotate-glow");
        icon.classList.add(isDark ? "fa-moon" : "fa-sun");
    }, 350);
}

// Desktop toggle
toggle.onclick = () => switchTheme(toggle);
// Mobile toggle
toggleMobile.onclick = () => switchTheme(toggleMobile);


renderPosts("homePosts", postsData);

// ==========================================================
// 🌌 Efek Partikel Campuran (Bintang + Garis Cahaya)
// ==========================================================
const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

let particlesArray;
let linesArray;
let hue = 250; // warna dasar ungu

function initParticles() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particlesArray = [];
    linesArray = [];

    // Bintang kecil
    for (let i = 0; i < 80; i++) {
        particlesArray.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
        });
    }

    // Garis cahaya
    for (let i = 0; i < 15; i++) {
        linesArray.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            length: Math.random() * 120 + 80,
            speed: Math.random() * 3 + 2,
            angle: Math.random() * 2 * Math.PI,
        });
    }
}

function drawParticles() {
    particlesArray.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsl(${hue}, 80%, 70%)`;
        ctx.fill();
    });
}

function moveParticles() {
    particlesArray.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
    });
}

function drawLines() {
    linesArray.forEach(l => {
        const endX = l.x + Math.cos(l.angle) * l.length;
        const endY = l.y + Math.sin(l.angle) * l.length;

        const gradient = ctx.createLinearGradient(l.x, l.y, endX, endY);
        gradient.addColorStop(0, `hsla(${hue}, 100%, 80%, 0.3)`);
        gradient.addColorStop(1, `hsla(${hue + 60}, 100%, 70%, 0)`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(l.x, l.y);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        l.x += Math.cos(l.angle) * l.speed;
        l.y += Math.sin(l.angle) * l.speed;

        // reset posisi garis
        if (l.x < -200 || l.x > canvas.width + 200 || l.y < -200 || l.y > canvas.height + 200) {
            l.x = Math.random() * canvas.width;
            l.y = Math.random() * canvas.height;
            l.angle = Math.random() * 2 * Math.PI;
        }
    });
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hue += 0.3;
    drawParticles();
    drawLines();
    moveParticles();
    requestAnimationFrame(animateParticles);
}

window.addEventListener("resize", initParticles);
initParticles();
animateParticles();