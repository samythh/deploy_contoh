# SILABUS & BLUEPRINT PEMBELAJARAN MENTOR

### Kelas Spesialisasi: Frontend Web Development

**Metro Institute Season 2 — PT Metro Indonesian Software**

---

## Ringkasan Program

| Aspek | Keterangan |
|---|---|
| **Jalur Spesialisasi** | Frontend Web Development Track |
| **Target Peserta** | Mahasiswa / Talenta Pemula hingga Menengah |
| **Durasi Kelas Teori & Praktik** | 8 Sesi Pertemuan Intensif (Oktober – November 2026) |
| **Fase Proyek Lanjutan** | 6 Sprint Bimbingan Capstone (Desember – Januari) + 24-Hour Hackathon |
| **Tech Stack & Tools Utama** | HTML5/CSS3, JavaScript (ES6+), React.js, Vite, TailwindCSS, Axios, Git/GitHub, Vercel |
| **Output Utama** | Aplikasi Web Responsif Terintegrasi API, Web Capstone Production, & MVP Web Hackathon |

---

## Daftar Isi

1. [Profil Kompetensi Lulusan Frontend](#1-profil-kompetensi-lulusan-frontend)
2. [Breakdown 8 Pertemuan Kelas Intensif](#2-breakdown-8-pertemuan-kelas-intensif-oktober--november-2026)
3. [Roadmap Bimbingan Capstone Project](#3-roadmap-bimbingan-capstone-project-desember-2026--januari-2027)
4. [Sistem Penilaian & Kelulusan Kelas Frontend](#4-sistem-penilaian--kelulusan-kelas-frontend)

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

---

## 2. Breakdown 8 Pertemuan Kelas Intensif (Oktober – November 2026)

### Pertemuan 1 — Fundamental Struktur & Tampilan

**HTML5 Semantic & CSS Layout** · `1 Oktober 2026`

> **Fokus Pembelajaran:** Struktur Dokumen, Tata Letak Fleksibel, & Sistem Grid.

**Materi**

- Anatomi dokumen HTML5, peran `<head>` vs `<body>`, dan tiga meta tag wajib.
- HTML5 Semantic Tags & Aksesibilitas Web — termasuk kapan `<div>` justru pilihan yang tepat.
- CSS Fundamentals: cara menempelkan gaya, selector, penamaan class berbasis fungsi, dan Box Model.
- **Deep-dive CSS Layouting:** Flexbox (Axis, Alignment, Gap) & CSS Grid (Template Columns, `auto-fit`).
- Strategi *Mobile-First Design* & breakpoints responsif.

**Praktik Live**

- Membangun halaman *Landing Page* responsif dari nol menggunakan CSS murni, plus praktik DevTools & Emmet.

> **Output / Tugas 1** — Satu halaman web responsif dengan Navbar, Hero Section, Cards Grid, dan Footer rapi, disertai komentar alasan pemilihan tag dan layout.

---

### Pertemuan 2 — Praktik Logika Dasar

**Modern JavaScript (ES6+) & Web Architecture**

> **Fokus Pembelajaran:** Arsitektur Web Client-Server & Fitur Modern JavaScript.

**Materi**

- Konsep dasar Client-Server, HTTP Methods (`GET`, `POST`, `PUT`, `DELETE`), dan struktur web modern.
- **ES6+ Fundamentals:** Arrow Functions, Template Literals, Destructuring Object/Array, Spread & Rest Operators.
- **Manipulasi Array Esensial:** `.map()`, `.filter()`, `.reduce()`, `.find()`, dan `.some()`.
- Konsep dasar modul JavaScript (Import/Export) dan Scope/Hoisting.

**Praktik Live**

- Latihan algoritma manipulasi *array of objects* dan pembuatan fungsi *utility* modern di browser console.

> **Output / Tugas 2** — Menyelesaikan 5 studi kasus logika manipulasi data JavaScript modern.

---

### Pertemuan 3 — Studi Kasus & Latihan Terbimbing

**React.js Fundamentals & Component-Driven Architecture**

> **Fokus Pembelajaran:** Inisialisasi Project, JSX Syntax, & Pemisahan Komponen Modular.

**Materi**

- Pengenalan ekosistem React.js & inisialisasi project kilat menggunakan Vite.
- Penerapan *Utility-First CSS* menggunakan **TailwindCSS** (instalasi via Vite, Custom Theme, Utility Classes, breakpoints `sm`/`md`/`lg`/`xl`).
- Anatomi Component, sintaks JSX, dan Virtual DOM.
- Komunikasi data antar-komponen via Props (*props drilling*, *children props*, *default props*).
- *Conditional Rendering* (ternary operator, short-circuit `&&`) dan *List Rendering* menggunakan `.map()` dengan `key`.

**Praktik Live**

- Membangun katalog produk dinamis yang memisahkan komponen `Navbar`, `ProductCard`, `Badge`, dan `Footer`.

> **Output / Tugas 3** — Mini-app katalog data statis modular berbasis komponen React.js.

---

### Pertemuan 4 — Pengembangan Fitur Dasar

**State Management, Lifecycle Hooks & Controlled Forms**

> **Fokus Pembelajaran:** Reaktivitas Antarmuka, Input Form, & Siklus Hidup Komponen.

**Materi**

- Mengelola *local state* dengan `useState` (prinsip *immutability* pada primitive, array, & object).
- Menangani efek samping dan siklus komponen dengan `useEffect` (Mounting, Updating, Unmounting, Dependency Array).
- *Controlled Components* untuk input form (text input, dropdown, checkbox, radio).
- Validasi form sederhana dan *Lifting State Up* antar-komponen bersaudara.

**Praktik Live**

- Membangun aplikasi Todo List / Form Registrasi interaktif lengkap dengan fitur Tambah, Hapus, dan Filter.

> **Output / Tugas 4** — Aplikasi interaktif berbasis form dengan validasi dan state reaktif.

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

> **Output / Tugas 5** — Web multi-halaman interaktif dengan routing dinamis dan 1 custom hook.

---

### Pertemuan 6 — Studi Kasus Tingkat Menengah

**RESTful API Consumption & Asynchronous UI Handling**

> **Fokus Pembelajaran:** Integrasi Data Server, HTTP Client, & State Loading/Error.

**Materi**

- *Asynchronous flow*: Promises, `async/await`, dan `try...catch` error handling.
- Integrasi HTTP Client menggunakan Axios (Base URL, Request Headers, Response Interceptors).
- Menangani status antarmuka: Initial, Loading Skeleton/Spinner, Success Data, Empty State, dan Error Alert.
- Fitur interaktif lanjutan: *Live Search Filtering*, *Pagination*, dan *Sorting Data* dari API.

**Praktik Live**

- Menghubungkan aplikasi React dengan Mock API untuk menampilkan data real-time, pencarian, dan error handling.

> **Output / Tugas 6** — Aplikasi dashboard data terhubung langsung ke REST API publik dengan tampilan state lengkap.

---

### Pertemuan 7 — Advanced Framework

**Global State Management & Performance Optimization**

> **Fokus Pembelajaran:** Penyimpanan Data Global Lintas Komponen & Performa Web.

**Materi**

- Kapan membutuhkan *Global State* vs *Local State*.
- Implementasi Global State modern: React Context API vs Zustand (ringan dan mudah digunakan).
- Optimasi performa: `useMemo`, `useCallback`, dan `React.memo` untuk mencegah *re-render* berlebihan.
- *Code Splitting* & *Lazy Loading* komponen menggunakan `React.lazy()` dan `Suspense`.

**Praktik Live**

- Membangun fitur Shopping Cart / Dark Mode Toggle global menggunakan Zustand / Context API.

> **Output / Tugas 7** — Aplikasi dengan integrasi Global State yang tersimpan di Local Storage.

---

### Pertemuan 8 — Materi Lanjutan & Final Progress

**Authentication Flow, Production Build & Capstone Sync**

> **Fokus Pembelajaran:** Autentikasi JWT, Build Optimasi, Cloud Deployment, & Kesiapan Capstone.

**Materi**

- Alur Autentikasi Client-Side: Login, Register, simpan JWT Token di LocalStorage/Cookie, & Logout.
- Membangun *Protected Route Component* — mencegah akses halaman dashboard jika belum login.
- Manajemen Environment Variables (`.env.local` vs `.env.production`).
- *Production Build* (`npm run build`), analisis *bundle size*, dan deployment ke platform cloud (Vercel / Netlify).
- Penyelarasan format kontrak data API bersama tim Backend dan komponen UI dari tim UI/UX.

**Praktik Live**

- Deploy aplikasi ke Vercel dan uji coba integrasi alur login-logout terlindungi.

> **Output / Tugas 8** — Link URL web live hasil deployment di Vercel/Netlify dan repositori GitHub yang rapi.

---

## 3. Roadmap Bimbingan Capstone Project (Desember 2026 – Januari 2027)

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

## 4. Sistem Penilaian & Kelulusan Kelas Frontend

| Bobot | Komponen | Kriteria Penilaian |
|:--:|---|---|
| **20%** | Kehadiran 8 Sesi Kelas Intensif | Minimal kehadiran 80% (maksimal 1× izin resmi). |
| **30%** | Tugas & Praktik Mingguan | Kelengkapan, kebersihan kode (*clean code*), dan ketepatan pengumpulan tugas Pertemuan 1 s.d. 8. |
| **30%** | Kualitas Produk Capstone | Kerapian slicing sesuai desain Figma, kestabilan integrasi API backend, responsivitas layout, dan bebas *error runtime*. |
| **20%** | Kontribusi Hackathon & Demo Day | Kecepatan pembangunan antarmuka MVP saat hackathon dan kelancaran *live demo* saat pitching. |
| **100%** | **Total** | — |
