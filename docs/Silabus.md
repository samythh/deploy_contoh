# SILABUS & BLUEPRINT PEMBELAJARAN MENTOR

### Kelas Spesialisasi: Frontend Web Development

**Metro Institute Season 2 — PT Metro Indonesian Software**

> **Versi hasil rapat, 25 Agustus 2026.** Perubahan utama: sistem tugas menjadi satu produk berkelanjutan (4 tugas gabungan, bukan 8 tugas terpisah), pengumpulan lewat Pull Request, penambahan kompetensi Debugging & AI-Assisted Development, dan penggeseran materi antar P1–P2. Riwayat lengkapnya di [Catatan-Perubahan.md](Catatan-Perubahan.md).

---

## Ringkasan Program

| Aspek | Keterangan |
|---|---|
| **Jalur Spesialisasi** | Frontend Web Development Track |
| **Target Peserta** | Mahasiswa / Talenta Pemula hingga Menengah |
| **Durasi Kelas Teori & Praktik** | 8 Sesi Pertemuan Intensif (Oktober – November 2026) |
| **Fase Proyek Lanjutan** | 6 Sprint Bimbingan Capstone (Desember – Januari) + 24-Hour Hackathon |
| **Tech Stack & Tools Utama** | HTML5/CSS3, JavaScript (ES6+), React.js, Vite, TailwindCSS, Axios, Git/GitHub, Vercel, Chrome DevTools & React DevTools |
| **Output Utama** | Aplikasi Web Responsif Terintegrasi API, Web Capstone Production, & MVP Web Hackathon |

---

## Daftar Isi

1. [Profil Kompetensi Lulusan Frontend](#1-profil-kompetensi-lulusan-frontend)
2. [Breakdown 8 Pertemuan Kelas Intensif](#2-breakdown-8-pertemuan-kelas-intensif-oktober--november-2026)
3. [Sistem Tugas: Progressive Web Project](#3-sistem-tugas-progressive-web-project)
4. [Roadmap Bimbingan Capstone Project](#4-roadmap-bimbingan-capstone-project-desember-2026--januari-2027)
5. [Sistem Penilaian & Kelulusan](#5-sistem-penilaian--kelulusan-kelas-frontend)
6. [Kebijakan Penggunaan AI Coding Assistant](#6-kebijakan-penggunaan-ai-coding-assistant)

---

## 1. Profil Kompetensi Lulusan Frontend

Setelah menyelesaikan 8 pertemuan kelas dan rangkaian proyek, peserta ditargetkan mampu:

| # | Kompetensi | Deskripsi |
|:--:|---|---|
| 1 | **Modern JavaScript Mastery** | Menguasai JavaScript modern (ES6+) dan paradigma *asynchronous programming* (Promises, Async/Await). |
| 2 | **Responsive Component-Driven UI** | Menerjemahkan desain Figma menjadi antarmuka web yang rapi, responsif (*mobile-first*), dan modular menggunakan React.js & TailwindCSS. |
| 3 | **Robust State & Route Management** | Menguasai pengelolaan *state* (lokal & global) dan navigasi multi-halaman (React Router DOM). |
| 4 | **Seamless API Integration** | Mengonsumsi dan mengintegrasikan RESTful API dari tim Backend secara efisien dengan penanganan status *loading* dan *error* yang baik. |
| 5 | **Client-Side Security & Auth** | Memahami alur autentikasi berbasis token (JWT), penyimpanan sesi (session/local storage), dan rute terproteksi (*Protected Routes*). |
| 6 | **Deployment & Git Collaboration** | Menguasai alur kerja Git *branch*, integrasi *pull request*, dan proses *deployment* web ke server cloud. |
| 7 | **Debugging & Verification Skill** | Membaca pesan error di console, menelusuri *request/response* lewat tab Network, dan menginspeksi state komponen lewat React DevTools untuk menemukan akar masalah secara mandiri. |
| 8 | **Responsible AI-Assisted Development** | Memanfaatkan AI *coding assistant* secara produktif sekaligus memverifikasi, menjelaskan, dan mempertanggungjawabkan setiap baris kode yang dihasilkan. |

---

## 2. Breakdown 8 Pertemuan Kelas Intensif (Oktober – November 2026)

### Pertemuan 1 — Fundamental Logika Dasar

**Arsitektur Web & Struktur Dokumen Responsif** · `1 Oktober 2026`

> **Fokus Pembelajaran:** Cara Kerja Web, Struktur Dokumen, & Logika Tata Letak.

**Materi**

- Konsep dasar Client-Server, HTTP Methods (`GET`, `POST`, `PUT`, `DELETE`), dan perjalanan sebuah halaman web dari server sampai tampil di layar.
- **HTML5 Semantic Tags & Aksesibilitas Web:** memilih tag berdasarkan makna, bukan tampilan.
- **Box Model & Flow Dokumen** sebagai dasar seluruh perilaku layout CSS.
- **Deep-dive Flexbox:** Main Axis vs Cross Axis, Alignment, Justify, dan Wrapping.
- Pengenalan **TailwindCSS** (via Play CDN) dan pemetaan *utility class* terhadap properti CSS aslinya.

**Praktik Live**

- Membangun halaman statis dari wireframe — Navbar, Hero Section, dan Footer — dengan penekanan pada alasan di balik pemilihan tag dan teknik layout.

**Setup Workflow (15 menit terakhir)**

- Konfigurasi Git, *clone* repositori starter kelas, *branch*, *commit*, *push*, dan Pull Request pertama.
- Seluruh tugas Pertemuan 1–8 dikumpulkan melalui Pull Request.

---

### Pertemuan 2 — Praktik Sintaksis Dasar

**Modern JavaScript (ES6+), Manipulasi Data & Responsive Grid**

> **Fokus Pembelajaran:** Sintaks JavaScript Modern, Transformasi Data, & Layout Multi-Kolom.

**Materi**

- **CSS Grid** (Template Columns/Rows, Gap) dan strategi *Mobile-First* dengan breakpoint responsif (`sm`, `md`, `lg`, `xl`).
- **ES6+ Fundamentals:** Arrow Functions, Template Literals, Destructuring Object/Array, Spread & Rest Operators.
- **Manipulasi Array Esensial:** `.map()`, `.filter()`, `.find()`, `.some()`, dan `.reduce()`.
- Konsep dasar modul JavaScript (Import/Export) dan Scope/Hoisting.

**Praktik Live**

- Mengubah halaman statis dari Pertemuan 1 menjadi dinamis — Cards Grid dirender dari *array of objects* menggunakan `.map()`, lalu difilter secara interaktif.
- Alur **data → transformasi → tampilan** diperkenalkan sebagai fondasi mental menuju React.

---

### Pertemuan 3 — Studi Kasus & Latihan Terbimbing

**React.js Fundamentals & Component-Driven Architecture**

> **Fokus Pembelajaran:** Inisialisasi Project, JSX Syntax, & Pemisahan Komponen Modular.

**Materi**

- Pengenalan ekosistem React.js & inisialisasi project kilat menggunakan Vite.
- Anatomi Component, sintaks JSX, dan Virtual DOM.
- Komunikasi data antar-komponen via Props (*props drilling*, *children props*, *default props*).
- *Conditional Rendering* (ternary operator, short-circuit `&&`) dan *List Rendering* menggunakan `.map()` dengan `key`.

**Praktik Live**

- Membangun katalog produk dinamis yang memisahkan komponen `Navbar`, `ProductCard`, `Badge`, dan `Footer`.

---

### Pertemuan 4 — Pengembangan Fitur Dasar

**State Management, Lifecycle Hooks & Controlled Forms**

> **Fokus Pembelajaran:** Reaktivitas Antarmuka, Input Form, & Siklus Hidup Komponen.

**Materi**

- Mengelola *Local State* dengan `useState` (prinsip *Immutability* pada primitive, array, & object).
- Menangani efek samping dan siklus komponen dengan `useEffect` (Mounting, Updating, Unmounting, Dependency Array).
- *Controlled Components* untuk input form (text input, dropdown, checkbox, radio).
- Validasi form sederhana dan *Lifting State Up* antar-komponen bersaudara.
- **Debugging state menggunakan React DevTools** — inspeksi props & state, melacak penyebab *re-render*.

**Praktik Live**

- Membangun aplikasi Todo List / Form Registrasi interaktif lengkap dengan fitur Tambah, Hapus, dan Filter.

---

### Pertemuan 5 — Integrasi Konsep Lanjutan

**Multi-Page Routing & Custom Hooks**

> **Fokus Pembelajaran:** Navigasi Halaman SPA, URL Parameters, & Reusable Logic.

**Materi**

- *Single Page Application* (SPA) Routing menggunakan React Router DOM v6+ (`BrowserRouter`, `Routes`, `Route`, `Link`).
- Dinamisasi URL: URL Params (`useParams`) dan Query Strings (`useSearchParams`).
- *Programmatic Navigation* menggunakan `useNavigate`.
- Pembuatan *Custom Hooks* untuk enkapsulasi logika bisnis berulang (`useLocalStorage`, `useWindowSize`).

**Praktik Live**

- Membuat navigasi multi-halaman: Beranda (`/`), Detail Item (`/product/:id`), dan Halaman 404.

---

### Pertemuan 6 — Studi Kasus Tingkat Menengah

**RESTful API Consumption & Asynchronous UI Handling**

> **Fokus Pembelajaran:** Integrasi Data Server, HTTP Client, & State Loading/Error.

**Materi**

- *Asynchronous flow*: Promises, `async/await`, dan `try...catch` error handling.
- Integrasi HTTP Client menggunakan Axios (Base URL, Request Headers, Response Interceptors).
- Menangani status antarmuka: Initial, Loading Skeleton/Spinner, Success Data, Empty State, dan Error Alert.
- **Membaca alur request/response melalui tab Network di DevTools** — status code, payload, response time.

**Praktik Live**

- Menghubungkan aplikasi React dengan REST API publik, dengan penekanan pada penanganan **lima status antarmuka** secara lengkap (Initial, Loading, Success, Empty, Error) dan **simulasi kondisi gagal** untuk menguji error handling.

---

### Pertemuan 7 — Advanced Framework

**Global State Management & Performance Optimization**

> **Fokus Pembelajaran:** Penyimpanan Data Global Lintas Komponen & Performa Web.

**Materi**

- Kapan membutuhkan *Global State* vs *Local State*.
- Implementasi Global State modern: React Context API vs Zustand (ringan dan mudah digunakan).
- Optimasi performa: `useMemo`, `useCallback`, dan `React.memo` untuk mencegah *re-render* berlebihan.
- *Code Splitting* & *Lazy Loading* komponen menggunakan `React.lazy()` dan `Suspense`.

**Wawasan Industri (15 menit)**

- Pengenalan konsep **TanStack Query (React Query)** sebagai standar *data-fetching* di tim produksi — caching, deduplikasi request, dan penanganan *race condition*.
- Peserta memahami posisi pola `useEffect` + Axios yang dipelajari di Pertemuan 6 dalam ekosistem yang lebih luas.

**Praktik Live**

- Membangun fitur Shopping Cart / Dark Mode Toggle global menggunakan Zustand / Context API.

---

### Pertemuan 8 — Materi Lanjutan & Final Progress

**Authentication Flow, Production Build & Capstone Sync**

> **Fokus Pembelajaran:** Autentikasi JWT, Build Optimasi, Cloud Deployment, & Kesiapan Capstone.

**Materi**

- Alur Autentikasi Client-Side: Login, Register, simpan JWT Token di LocalStorage/Cookie, & Logout.
- Membangun *Protected Route Component* — mencegah akses halaman dashboard jika belum login.
- Manajemen Environment Variables (`.env.local` vs `.env.production`).
- *Production Build* (`npm run build`), analisis *bundle size*, dan deployment ke platform cloud (Vercel / Netlify).
- **Git Collaboration Workflow:** strategi branching (`main` / `dev` / `feature`), penyelesaian *merge conflict*, dan budaya *code review* lewat Pull Request — melanjutkan praktik yang dijalankan sejak Pertemuan 1.

**Pengantar TypeScript (15 menit)**

- Mengapa tim dengan backend membutuhkan tipe data eksplisit; contoh `interface` untuk kontrak data API sebagai bekal menghadapi standar industri.

**Praktik Live**

- Deploy aplikasi ke Vercel dan uji coba integrasi alur login-logout terlindungi.

---

## 3. Sistem Tugas: Progressive Web Project

Kelas berjalan **dua pertemuan per minggu**. Tugas tidak diberikan per pertemuan, melainkan **satu tugas gabungan per minggu** yang mencakup materi dua pertemuan sekaligus.

Seluruh tugas merupakan **satu produk web yang sama** dan terus dikembangkan dari minggu pertama hingga minggu terakhir. Peserta tidak membuat empat proyek terpisah, melainkan menumbuhkan satu proyek melalui empat tahap. Pendekatan ini dipilih agar peserta mengalami langsung bagaimana sebuah aplikasi berevolusi dari halaman statis menjadi aplikasi produksi — pengalaman yang tidak bisa didapat dari tugas-tugas yang berdiri sendiri.

Seluruh tugas dikumpulkan melalui **Pull Request** ke repositori kelas.

### Tema Produk

Setiap peserta memilih **satu tema produk di awal kelas** dan mempertahankannya sampai akhir. Contoh: katalog kuliner daerah, direktori UMKM, katalog buku perpustakaan, daftar destinasi wisata. Tema bebas selama memiliki **data berbentuk daftar item dengan detail**.

---

### Tugas 1 — Static Foundation

**Materi Pertemuan 1 & 2** · Dikumpulkan sebelum Pertemuan 3

Membangun halaman utama produk dalam bentuk web statis yang responsif, kemudian membuatnya dinamis dengan JavaScript.

**Ketentuan**

- Struktur HTML semantik (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), tanpa *div-soup*.
- Layout menggunakan **Flexbox** untuk navigasi dan **CSS Grid** untuk daftar item.
- Responsif dengan pendekatan *mobile-first*, minimal dua breakpoint.
- Data item disimpan dalam *array of objects* di file JavaScript terpisah, bukan ditulis manual di HTML.
- Daftar item dirender ke DOM menggunakan `.map()`.
- Minimal satu fitur **filter interaktif** (berdasarkan kategori, harga, atau atribut lain).

**Kriteria penilaian:** ketepatan pemilihan tag semantik, kerapian layout responsif, dan kebenaran alur *data → transformasi → tampilan*.

---

### Tugas 2 — React Migration

**Materi Pertemuan 3 & 4** · Dikumpulkan sebelum Pertemuan 5

Membangun ulang produk Tugas 1 menggunakan React + Vite + TailwindCSS, lalu menambahkan interaktivitas berbasis state.

**Ketentuan**

- Project diinisialisasi dengan Vite; **TailwindCSS dipasang melalui build tool** (tidak lagi memakai Play CDN).
- UI dipecah menjadi **minimal empat komponen** terpisah dengan tanggung jawab yang jelas.
- Data dikirim antar komponen melalui props; daftar dirender dengan `.map()` disertai `key` yang **unik dan stabil** (bukan index array).
- Minimal satu fitur interaktif menggunakan `useState` (pencarian, filter, atau favorit).
- Minimal satu **form terkendali** (*controlled component*) disertai validasi sederhana.
- Perubahan state dilakukan secara **immutable**.

**Kriteria penilaian:** kejelasan pemisahan komponen, ketepatan penggunaan props vs state, dan kepatuhan pada prinsip immutability.

---

### Tugas 3 — Multi-Page & Live Data

**Materi Pertemuan 5 & 6** · Dikumpulkan sebelum Pertemuan 7

Mengubah produk menjadi aplikasi multi-halaman yang datanya berasal dari REST API.

**Ketentuan**

- Routing minimal tiga halaman: Beranda (`/`), Detail Item (`/item/:id`), dan halaman 404.
- Halaman detail mengambil parameter melalui `useParams`.
- Minimal satu **custom hook** untuk logika yang berulang.
- Data diambil dari REST API publik atau mock API menggunakan Axios dengan konfigurasi base URL.
- **Wajib:** kelima status antarmuka ditangani lengkap — Initial, Loading, Success, Empty, dan Error, masing-masing dengan tampilan yang berbeda.
- Fitur pencarian dan pagination diimplementasikan secara mandiri berdasarkan *starter code* dan panduan mentor.

**Kriteria penilaian:** kelengkapan penanganan lima status antarmuka (bobot terbesar), kebenaran routing dinamis, dan kualitas custom hook.

> **Catatan:** aplikasi akan diuji dengan **mematikan koneksi internet**. Tampilan yang menghasilkan layar kosong tanpa penjelasan dinilai belum memenuhi ketentuan.

---

### Tugas 4 — Production Ready

**Materi Pertemuan 7 & 8** · Dikumpulkan sebelum Demo Day

Menyelesaikan produk dengan state global, autentikasi, dan menerbitkannya ke internet.

**Ketentuan**

- Implementasi **global state** (Context API atau Zustand) untuk data lintas komponen — keranjang, favorit, atau tema.
- State global **dipertahankan setelah halaman dimuat ulang** melalui Local Storage.
- Alur autentikasi lengkap: login, penyimpanan token, logout.
- **Protected Route** yang mencegah akses halaman dashboard tanpa autentikasi.
- Alamat API dikelola melalui **environment variable**, tidak ditulis langsung di dalam kode.
- Aplikasi berhasil di-*build* dan di-*deploy* ke Vercel atau Netlify.

**Yang dikumpulkan:** URL aplikasi yang dapat diakses publik, tautan repositori GitHub dengan riwayat commit yang rapi, dan `README` berisi deskripsi produk beserta cara menjalankannya secara lokal.

**Kriteria penilaian:** aplikasi berjalan tanpa error di lingkungan produksi, alur autentikasi berfungsi utuh, dan kerapian repositori.

---

## 4. Roadmap Bimbingan Capstone Project (Desember 2026 – Januari 2027)

Setelah menyelesaikan 8 pertemuan kelas, peserta Frontend berkolaborasi dalam **tim multidisiplin**:
`1 Frontend` + `1 UI/UX` + `1 Backend` + `1 Android Native`

| Sprint / Minggu | Agenda Bimbingan Mentor & Tim Capstone | Target Output Frontend |
|---|---|---|
| **Sprint 1**<br>*(W1 Des)* | Analisis User Flow & inisialisasi repo GitHub, setup Vite + TailwindCSS + Router. | Struktur Folder & Setup Project Siap |
| **Sprint 2**<br>*(W2 Des)* | Slicing layout dasar dari Wireframe/Design System UI/UX & menyusun komponen UI inti. | Komponen Atom & Halaman Statis Siap |
| **Sprint 3**<br>*(W3 Des)* | Integrasi halaman utama dengan REST API autentikasi & data master dari tim Backend. | Integrasi Login & Read Data API |
| **Sprint 4**<br>*(W4 Des)* | Penyelesaian seluruh fitur CRUD web, form transaksi, dan implementasi Global State. | Fitur Utama Berfungsi Penuh |
| **Sprint 5**<br>*(W1 Jan)* | Bug fixing, penanganan edge cases (validasi input, error handling), & optimasi UI. | Web Stabil & Bebas Error Console |
| **Sprint 6**<br>*(W2 Jan)* | Final deployment ke Vercel/Netlify dengan custom domain/subdomain & gladi Demo Day. | URL Web Production Live & Siap Demo |
| **Demo Day**<br>*(14–15 Jan)* | Demo langsung fungsionalitas web di hadapan CEO PT MIS & Dewan Juri. | Showcase Presentasi Sukses |

---

## 5. Sistem Penilaian & Kelulusan Kelas Frontend

| Bobot | Komponen | Kriteria Penilaian |
|:--:|---|---|
| **20%** | Kehadiran 8 Sesi Kelas Intensif | Minimal kehadiran 80% (maksimal 1× izin resmi). |
| **30%** | Tugas & Praktik Mingguan | Kelengkapan, kebersihan kode (*clean code*), dan ketepatan pengumpulan **empat tugas gabungan** melalui Pull Request. |
| **30%** | Kualitas Produk Capstone | Kerapian slicing sesuai desain Figma, kestabilan integrasi API backend, responsivitas layout, dan bebas *error runtime*. |
| **20%** | Kontribusi Hackathon & Demo Day | Kecepatan pembangunan antarmuka MVP saat hackathon dan kelancaran *live demo* saat pitching. |
| **100%** | **Total** | — |

**Dua catatan penting pada komponen Tugas (30%):**

1. Karena tugas berbentuk **satu produk yang berkelanjutan**, keterlambatan pada satu tahap akan berdampak pada tahap berikutnya.
2. Penilaian mencakup **verifikasi pemahaman secara lisan** — mentor dapat menanyakan alasan di balik keputusan teknis pada kode yang dikumpulkan saat sesi breakout. Tugas yang tidak dapat dipertanggungjawabkan penulisnya dinilai **tidak lengkap**.

---

## 6. Kebijakan Penggunaan AI Coding Assistant

Penggunaan AI *coding assistant* (GitHub Copilot, Claude, ChatGPT, dan sejenisnya) **diperbolehkan** sepanjang kelas dan fase capstone. Kelas ini menyiapkan peserta untuk kondisi kerja yang sebenarnya, dan di lapangan tool tersebut sudah menjadi bagian dari alur kerja normal.

Konsekuensinya, standar penilaian bergeser: **yang dinilai bukan siapa yang mengetik kode, melainkan apakah peserta memahami dan dapat mempertanggungjawabkan kode yang dikumpulkannya.**

**Ketentuan**

- Setiap baris kode dalam Pull Request harus dapat dijelaskan oleh peserta apabila ditanya mentor.
- Peserta wajib mampu menjelaskan **mengapa** suatu pendekatan dipilih, bukan hanya cara kerjanya.
- Kode yang tidak dapat dijelaskan penulisnya **dinilai nol** — bukan karena penggunaan AI, melainkan karena tidak adanya pemahaman.
- Kemampuan **menemukan dan memperbaiki kesalahan** pada kode hasil AI dinilai sebagai kompetensi positif.
