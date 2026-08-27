# Catatan Perubahan & Temuan

Catatan berjalan untuk repositori materi mentor Frontend — Metro Institute Season 2.

File ini **satu-satunya tempat** mencatat dua hal:

1. **Temuan** — pertentangan antar dokumen, kekosongan materi, atau hal yang butuh keputusan. Dicatat lengkap dengan buktinya, supaya tidak perlu dicari ulang.
2. **Log Perubahan** — apa yang diubah, kapan, dan kenapa.

Alasan dijadikan satu file dan bukan satu folder berisi banyak file: skala repo ini kecil, dan temuan hampir selalu berujung jadi perubahan. Memisahkannya justru memaksa lompat-lompat file untuk membaca satu cerita utuh. Kalau nanti sudah terlalu panjang, baru dipecah.

---

## A. Temuan Terbuka

Hal yang sudah ditemukan tapi **belum diputuskan**. Jangan dihapus saat selesai — pindahkan ke bagian "Temuan Selesai" beserta keputusannya, supaya alasannya terekam.

### T-001 — Silabus dan Timeline berbeda soal jadwal Demo Day

**Ditemukan:** 23 Agustus 2026
**Status:** 🔴 Terbuka — butuh konfirmasi mana dokumen yang terbaru

| Dokumen | Kata dokumen |
|---|---|
| [Silabus.md](Silabus.md) §3 | Demo Day **14–15 Januari**, jadi baris terakhir tabel Roadmap Capstone — langsung setelah Sprint 6 (W2 Jan) |
| [Timeline.md](Timeline.md) Fase 4 | **P15 Demo Day** dan **P16 Penutupan** di **Januari W4** (Sabtu–Minggu), setelah gladi bersih oleh Divisi EO |

**Selisihnya sekitar dua minggu.**

**Kenapa ini bukan sekadar salah ketik.** Kedua dokumen juga berbeda dalam memandang gladi bersih:

- Silabus menyatukannya ke dalam Sprint 6 — *"Final deployment... & gladi Demo Day"*, PIC mentor.
- Timeline memisahkannya jadi aktivitas tersendiri di Jan W4 dengan PIC **Divisi EO**, bukan mentor.

Jadi kemungkinan besar ini bukan angka yang tertukar, melainkan **dua versi rencana yang berbeda**: satu versi memadatkan Demo Day tepat setelah sprint terakhir, versi lain memberi jeda dua minggu untuk persiapan acara.

**Dampak kalau dibiarkan:**

- Peserta bisa salah menyiapkan diri — beda dua minggu itu besar untuk polishing produk.
- Kalau Timeline yang benar, ada **jeda dua minggu tanpa sprint** antara Sprint 6 dan Demo Day. Jeda ini perlu diisi rencana, atau momentum tim hilang menjelang presentasi ke CEO.
- Sprint 6 di Silabus menjanjikan gladi yang menurut Timeline bukan tanggung jawab mentor.

**Yang perlu dipastikan:** dokumen mana yang lebih baru, dan apakah jeda dua minggu itu memang disengaja.

**Tindak lanjut yang disarankan:** tanyakan ke Leader / Divisi Akademik. Setelah ada kepastian, samakan kedua dokumen dan catat keputusannya di bagian B.

---

### T-003 — Silabus baru menyebut "dua pertemuan per minggu", Timeline menjadwalkan satu

**Ditemukan:** 25 Agustus 2026
**Status:** 🔴 Terbuka — perlu konfirmasi ke Leader / Divisi Akademik

| Dokumen | Kata dokumen |
|---|---|
| [Silabus.md](Silabus.md) §3 | *"Kelas berjalan **dua pertemuan per minggu**. Tugas... satu tugas gabungan per minggu yang mencakup materi dua pertemuan sekaligus."* |
| [Timeline.md](Timeline.md) Fase 2 | P1 = Okt W1 · P2 = Okt W2 · P3 = Okt W3 · ... · P8 = Nov W4 — **satu pertemuan per minggu selama 8 minggu** |

**Ini bukan detail kecil.** Seluruh sistem tugas baru dibangun di atas asumsi dua pertemuan per minggu: Tugas 1 mencakup P1 & P2 dan dikumpulkan sebelum P3, Tugas 2 mencakup P3 & P4, dan seterusnya.

Kalau **Timeline** yang benar (satu pertemuan/minggu):

- Program berjalan 8 minggu, bukan 4 — tetap selesai akhir November, jadi tanggalnya masih masuk
- Pengelompokan tugas tetap jalan, tapi jeda antar pengumpulan jadi **dua minggu**, bukan satu
- Kalimat "satu tugas gabungan **per minggu**" di Silabus jadi salah — seharusnya "per dua pertemuan"

Kalau **Silabus** yang benar (dua pertemuan/minggu), Timeline perlu diperbarui — jadwal Okt W1–Nov W4 di sana tidak lagi berlaku.

**Dampak kalau dibiarkan:** peserta salah memperkirakan tenggat. Beda satu minggu vs dua minggu itu besar untuk tugas yang saling menumpuk.

**Catatan yang meringankan:** dokumen materi ditulis **netral terhadap kadensi** — tidak ada materi yang menyebut "minggu depan" untuk merujuk pertemuan berikutnya. Apa pun keputusannya, materi tidak perlu ditulis ulang; yang perlu diperbaiki hanya kalimat di Silabus §3 dan penyebutan tenggat.

---

### T-005 — Silabus P3 tidak menyebut TailwindCSS, tapi Tugas 2 mensyaratkannya

**Ditemukan:** 26 Agustus 2026
**Status:** 🟢 Terbuka — kemungkinan besar cuma kelalaian penulisan, konfirmasi ringan saja

| Dokumen | Kata dokumen |
|---|---|
| [Silabus.md](Silabus.md) §2 P3 | Empat butir materi: ekosistem React & Vite · anatomi component, JSX, Virtual DOM · props · conditional & list rendering. **Tailwind tidak disebut.** |
| [Silabus.md](Silabus.md) §3 Tugas 2 | *"TailwindCSS dipasang melalui build tool"* — jadi syarat pengumpulan |
| Materi P1 Bagian 6 | *"Pemasangan yang benar lewat Vite ada di P3"* — janji ke peserta |

Tugas 2 mensyaratkan sesuatu yang tidak tercantum sebagai materi di pertemuan mana pun.

**Yang sudah dilakukan:** materi P3 tetap memuatnya di Bagian 2 (setup Vite + Tailwind, 16 menit), karena tanpa itu peserta tidak bisa mengerjakan Tugas 2.

**Yang perlu dikonfirmasi:** apakah butir Tailwind memang sengaja dihilangkan dari daftar materi P3, atau terlewat saat penyusunan. Kalau terlewat, tambahkan satu butir di Silabus supaya materi dan tugas sinkron.

**Kenapa statusnya hijau, bukan merah:** dampaknya kecil dan sudah tertangani. Ini dicatat supaya tidak ditemukan ulang sebagai "temuan baru" di kemudian hari.

---

### T-004 — P1 dan P2 sama-sama padat; bebannya bergeser, tidak berkurang

**Ditemukan:** 25 Agustus 2026 · **Diperbarui:** 25 Agustus 2026 (revisi kedua)
**Status:** 🟡 Terbuka — perlu diawasi saat pelaksanaan, belum tentu perlu diubah

> **Pembaruan revisi kedua:** strategi Mobile-First dipindah dari P2 ke P1. P2 memang jadi sedikit lebih longgar (CSS Grid sekarang hanya *menerapkan* breakpoint, tidak lagi mengajarkan konsepnya dari nol), tapi **P1 jadi sembilan bagian dalam 120 menit** — dan P1 adalah pertemuan pertama, dengan peserta yang belum pernah menulis kode.
>
> Yang meringankan: mobile-first di P1 diajarkan lewat prefiks `md:` `lg:` Tailwind yang baru saja diperkenalkan di bagian sebelumnya, dan diterapkan pada navbar yang sudah jadi — bukan konsep baru dari nol. Alokasinya 9 menit.
>
> Yang perlu diawasi: **Bagian 8 (Setup Git & PR) kebagian 16 menit**, dan Git selalu memakan waktu lebih lama dari perkiraan. Kalau di lapangan Bagian 7 molor, Bagian 8 yang terdesak — padahal Bagian 8 justru yang tidak boleh gagal. Urutan potong sudah ditulis di RUNDOWN: Tailwind dulu yang dikorbankan, bukan Git.

Isi P2 dalam 120 menit: CSS Grid & layout multi-kolom, ES6+ lengkap, lima method array, modul + scope/hoisting, **dan** praktik live mengubah halaman P1 jadi dinamis.

| Bagian | Menit |
|---|:--:|
| CSS Grid & layout multi-kolom | 22 |
| let/const | 8 |
| ES6+ Fundamentals | 20 |
| Manipulasi Array (5 method) | 30 |
| Modul, Scope & Hoisting | 8 |
| Praktik live | 19 |

Yang paling berisiko: **Scope & Hoisting hanya kebagian 8 menit bersama Modul**, padahal itu konsep yang sering membingungkan pemula. Dan `.reduce()` — yang menurut materi P2 sendiri adalah konsep tersulit — harus muat dalam 30 menit bersama empat method lain.

**Mitigasi yang sudah tertulis di materi:** Scope & Hoisting disampaikan lewat perbandingan `var` vs `let/const`, bukan sub-bagian tersendiri. `.reduce()` boleh tidak tuntas di kelas — yang wajib nempel `.map()` dan `.filter()`.

**Kalau P2 benar-benar meleset saat dijalankan**, dua opsi: CSS Grid dikembalikan ke P1, atau `.reduce()` digeser ke P3 sebagai pengulangan.

---

## B. Temuan Selesai

### T-002 — Nama pertemuan Silabus vs Timeline ✅

**Ditemukan:** 23 Agustus 2026 · **Selesai:** 25 Agustus 2026

**Masalahnya dulu:** setelah urutan P1↔P2 ditukar, judul di Silabus diubah jadi "Fundamental Struktur & Tampilan" (P1) dan "Praktik Logika Dasar" (P2), sehingga tidak lagi cocok dengan penamaan lintas divisi di Timeline.

**Keputusan rapat 25 Agustus 2026:** nama resmi Timeline **dipertahankan** — P1 tetap "Fundamental Logika Dasar", P2 tetap "Praktik Sintaksis Dasar". Yang diubah adalah **subjudulnya**:

| Kode | Nama resmi (Timeline) | Subjudul Frontend |
|---|---|---|
| P1 | Fundamental Logika Dasar | Arsitektur Web & Struktur Dokumen Responsif |
| P2 | Praktik Sintaksis Dasar | Modern JavaScript (ES6+), Manipulasi Data & Responsive Grid |

**Kenapa ini menyelesaikan masalahnya:** dengan Arsitektur Web & HTTP Methods dipindah ke P1, nama "Fundamental **Logika** Dasar" jadi masuk akal lagi — logika cara kerja web memang diajarkan di sana. Dan dengan CSS Grid turun ke P2, nama "Praktik **Sintaksis** Dasar" mencakup sintaks CSS Grid maupun sintaks JavaScript.

Tidak perlu lagi membawa perubahan nama ke koordinator. Silabus dan Timeline kembali sinkron.


### B-001 — Urutan P1 dan P2 ditukar: HTML/CSS naik ke depan

**Ditemukan & diputuskan:** 23 Agustus 2026
**Status:** ✅ Selesai — sudah dijalankan

**Keputusan:** P1 menjadi HTML5 Semantic & CSS Layout, P2 menjadi Modern JavaScript. TailwindCSS tetap berada di P1, ditaruh di bagian paling akhir (lihat catatan posisi Tailwind di bawah).

**Alasan yang menang:** risiko motivasi di pertemuan pertama. Dengan JavaScript di depan, seluruh praktik P1 terjadi di console — tidak ada yang terlihat di layar, tepat di sesi ketika peserta paling gampang mundur. Dengan HTML/CSS di depan, peserta melihat hasil kerjanya sendiri dalam 10 menit pertama.

**Harga yang disadari dan diterima:** rencana awal sengaja menaruh JavaScript di P1 supaya ada jeda "marinasi" satu minggu selama P2 sebelum JS dipakai berat di React (P3). Penukaran ini menghapus jeda itu — JS di P2 langsung disambung React di P3, padahal JS adalah prasyarat terberat React.

Mitigasi yang disepakati, bukan mengubah urutan lagi:
- P2 harus menutup dengan latihan `.map` dan `.filter` yang benar-benar nempel
- P3 harus membuka dengan pengulangan singkat `.map` sebelum masuk *list rendering*

**Posisi TailwindCSS — direvisi 23 Agustus 2026, setelah sempat salah tempat.**

Awalnya Tailwind dikeluarkan dari P1 dan dipindah ke P3. Itu **salah baca instruksi mentor** dan sudah dikoreksi: Tailwind **tetap di P1**, tapi ditaruh di **bagian paling akhir** (menit 98–112), setelah peserta menulis CSS manual satu jam penuh.

Kenapa posisi akhir, bukan awal: kalau Tailwind diberikan di awal, peserta menulis `flex justify-center` tanpa tahu itu singkatan dari apa, dan tidak punya pegangan saat hasilnya melenceng. Ini prinsip yang sama dengan Emmet di Bagian 1 — shortcut diberikan *setelah* paham manual, sebagai hadiah. Menaruhnya di akhir juga membuat Tailwind terasa sebagai obat, bukan sebagai cara lain yang membingungkan.

Pemasangan di P1 cukup via CDN satu baris, belum perlu Node. Pemasangan yang benar lewat Vite tetap di P3 sebagai lanjutan.

**Konsekuensi yang perlu diawasi:** P1 jadi padat — tujuh bagian dalam 120 menit. Alokasi bagian lain dirapatkan untuk memberi ruang 13 menit. Kalau waktu habis di kelas, Bagian 6 (Tailwind) yang paling aman dipotong; yang wajib nempel tetap HTML semantic dan Flexbox.

**Efek samping yang muncul:** nama pertemuan di Timeline jadi tidak cocok dengan isinya. Dicatat terpisah sebagai T-002.

---

## C. Log Perubahan

Terbaru di atas.

### 26 Agustus 2026

**Materi P3 dibuat — React Fundamentals**

- Struktur mengikuti pola P1: materi lengkap + `RUNDOWN.md` + `demo/`, masing-masing dengan kalimat siap-ucap.
- **Delapan bagian dalam 120 menit.** Alokasi terbesar: Setup Vite (16 menit) dan Props (20 menit).
- *Keputusan alokasi:* Setup diberi porsi besar bukan karena sulit, tapi karena **paling rawan**. P3 adalah pertemuan pertama yang memakai terminal, `node_modules`, dan server — peserta bisa kehilangan pijakan hanya karena `npm run dev` gagal, bukan karena React-nya sulit. Materi mewajibkan mentor berkeliling mengecek layar, karena peserta yang macet cenderung diam.
- **Bagian 1 (Kenapa React Ada) memperagakan cacat cara P2 lebih dulu** lewat `demo/01-kenapa-react.html` — file yang sengaja memakai `innerHTML`, bukan React. Ketik di input, klik filter, ketikan hilang. Tanpa ini React terasa cuma sintaks ribet tanpa alasan.
- **Peragaan `key={index}` dibuatkan komponen khusus** (`demo/komponen/KeyJebakan.jsx`) dengan tombol untuk menukar `index` ↔ `id` secara langsung. Alasannya ditulis eksplisit di materi: kalau `key` cuma diajarkan sebagai "biar tidak ada warning", semua peserta akan memakai `key={index}`, warningnya hilang, dan masalahnya baru meledak di Tugas 2 saat ada penghapusan item.
- **Jebakan `{stok && ...}` yang menampilkan angka nol** disebut eksplisit di materi dan di komentar `ProductCard.jsx` — peserta hampir pasti terkena ini di Tugas 2.
- Materi berulang kali menyambungkan ke P1–P2 (`.map()`, destructuring, import/export, prefiks `md:`). Yang benar-benar baru cuma komponen, props, dan `key`.

**Catatan versi yang perlu diawasi:** setup Vite & Tailwind adalah bagian materi yang paling cepat basi. Dokumen ditulis untuk **Tailwind v4** (plugin `@tailwindcss/vite`, tanpa `tailwind.config.js`, tanpa PostCSS) dan **React 19**. Checklist H-1 mewajibkan mentor menjalankan seluruh langkah setup dari nol sebelum mengajar, dan memperbaiki dokumen kalau perintahnya berubah — bukan improvisasi di depan kelas.

**Kekosongan silabus yang perlu dilaporkan:** daftar materi P3 di `docs/Silabus.md` **tidak menyebut TailwindCSS**, padahal Tugas 2 mensyaratkan "TailwindCSS dipasang melalui build tool" dan materi P1 menjanjikan "pemasangan yang benar lewat Vite ada di P3". Materi P3 tetap memuatnya (Bagian 2). Lihat T-005.

---



**KOREKSI FAKTA — peragaan `<head>` vs `<body>` di P1 salah**

- *Ditemukan oleh mentor* saat menguji sendiri: materi menyatakan bahwa `<h1>` yang ditaruh di dalam `<head>` akan membuat tulisannya **hilang**. Itu **tidak benar** — tulisannya tetap muncul.
- *Yang sebenarnya terjadi:* parser HTML tahu `<h1>` tidak sah di `<head>`, lalu diam-diam menutup `<head>`, membuka `<body>`, dan memindahkan `<h1>` ke sana. Di DOM, `<h1>` itu anak `<body>`.
- *Kenapa ini berbahaya kalau dibiarkan:* peserta yang iseng mencoba akan langsung menemukan mentornya salah, di pertemuan pertama — tepat saat kredibilitas sedang dibangun.
- **Peragaan diganti, bukan dihapus.** Versi barunya justru lebih berharga: buka `F12` → tab **Elements**, tunjukkan `<h1>` duduk di `<body>` padahal ditulis di `<head>`. Pelajarannya: **yang ditulis di file bukan yang dibaca browser** — HTML gagal tanpa suara, dan tab Elements adalah pengganti pesan error di HTML. Ini menanamkan kompetensi *Debugging & Verification* di menit ke-13, bukan menunggu P6.
- Ditambahkan juga demo head-vs-body yang jujur kalau tetap ingin menunjukkan "isi `<head>` tidak tampil": pakai `<title>` — teksnya cuma muncul di tab browser, dan `<title>` memang elemen `<head>` yang sah sehingga tidak dipindahkan parser.
- Diperbaiki di empat berkas: materi P1 Bagian 1, `P1/RUNDOWN.md`, `P1/demo/README.md`, `P1/demo/01-kerangka.html` — ketiganya kini memuat peringatan eksplisit **jangan** mengatakan tulisannya hilang.

---

### 25 Agustus 2026 — Revisi Kedua

**PEMUTAKHIRAN SILABUS KE STANDAR 2026**

*Sumber:* silabus versi rapat kedua yang diserahkan mentor. Fokusnya bukan menambah materi, tapi **memutakhirkan materi yang sudah ada agar tidak mengajarkan pola yang sudah ditinggalkan industri.**

**1. TypeScript naik kelas — dari wawasan penutup jadi materi terapan**
- Sebelumnya: pengantar 15 menit di P8, sekadar wawasan.
- Sekarang: **25 menit di P6**, langsung dipakai di praktik live, dan **diwajibkan minimal satu `interface` di Tugas 3**.
- Kompetensi lulusan baru: **Type-Safe API Consumption** (kompetensi ke-2 dari sembilan).
- *Alasannya masuk akal:* TypeScript paling terasa gunanya saat berhadapan dengan data API yang bentuknya tidak pasti — dan itu tepat materi P6. Di P8 dia cuma jadi tempelan penutup.

**2. React Compiler menggantikan memoization manual di P7**
- `useMemo`, `useCallback`, `React.memo` kini **pengecualian, bukan kebiasaan** — dipakai hanya untuk kasus yang tidak tertangani compiler (`try/catch`, library yang bergantung pada *referential equality*).
- Prinsip yang ditekankan: **ukur dengan React DevTools Profiler sebelum mengoptimasi.**
- *Kenapa ini penting dicatat:* ini pembalikan kebiasaan. Materi yang ditulis dari ingatan hampir pasti akan mengajarkan memoization manual sebagai default — itu sudah bukan standar untuk project baru sejak React 19.

**3. Kejujuran soal penyimpanan token di P8**
- Token tetap disimpan di LocalStorage **untuk kesederhanaan kelas**, tapi sekarang wajib disertai penjelasan eksplisit bahwa pola ini **rentan XSS dan tidak dipakai di produksi**.
- Standar industri 2026 (*access token* di memori + *refresh token* di cookie `HttpOnly`/`Secure`/`SameSite`) diperkenalkan sebagai wawasan.
- *Alasannya:* mengajarkan pola tanpa menyebut risikonya berarti melepas lulusan yang membawa kebiasaan salah ke tempat kerja. Kompetensi ke-6 diubah dari "penyimpanan sesi" menjadi "**trade-off keamanan antar metode penyimpanan token**".

**4. React Router v8**
- Dari `react-router-dom` v6+ menjadi paket **`react-router` v8 dalam declarative mode**.

**5. Mobile-First kembali ke P1**
- Sebelumnya ikut CSS Grid turun ke P2. Sekarang **tetap di P1** (Bagian 7 baru, menit 95–104), diterapkan langsung pada navbar & hero yang baru dibangun.
- Diajarkan lewat prefiks `md:` `lg:` Tailwind yang baru diperkenalkan di bagian sebelumnya — tidak perlu satu pun `@media` manual.
- P2 kini hanya **menerapkan** breakpoint pada layout multi-kolom; judulnya berubah dari "Responsive Grid" jadi "**Layout Multi-Kolom**".
- Konsekuensinya P1 jadi sembilan bagian — lihat pembaruan T-004.

**6. Tiga wawasan industri baru**
- **P5 (10 menit):** keterbatasan SPA dari sisi SEO & waktu muat pertama, dan bagaimana Next.js menjawabnya lewat SSR.
- **P8 (15 menit):** Vitest & React Testing Library — kenapa tim produksi mensyaratkan test sebelum PR digabung. Peserta cukup **melihat** satu contoh, tidak diminta menulis.
- Menggantikan slot pengantar TypeScript di P8 yang sudah pindah ke P6.

**7. Audit Lighthouse jadi kriteria terukur**
- P8 praktik live ditambah **audit Lighthouse** (Performance, Accessibility, Best Practices).
- Tugas 4 mensyaratkan **skor Accessibility minimal 90** pada halaman utama.
- *Kenapa ini bagus:* ini satu-satunya kriteria penilaian di seluruh silabus yang **terukur objektif**, bukan penilaian subjektif mentor. Sekaligus membuat materi aksesibilitas di P1 punya konsekuensi nyata di akhir.

**8. Repositori dari template, bukan clone bersama**
- Tiap peserta bikin repo **sendiri** lewat tombol *Use this template*, lalu menambahkan **mentor sebagai collaborator**.
- Tiap tahap dikerjakan di branch terpisah dan diajukan lewat PR.
- Tugas 2 ditegaskan dikerjakan **di repositori yang sama**, bukan bikin baru.
- *Keuntungannya:* riwayat commit utuh milik peserta sendiri, bisa dipamerkan di CV, dan tidak bercampur dengan puluhan peserta lain di satu repo.

**9. Penyelarasan kontrak data API digeser ke Capstone**
- Dari P8 ke **Sprint 1 Capstone** — tempat yang lebih tepat, karena di situlah tim multidisiplin benar-benar terbentuk.

**10. Berkas yang menyesuaikan**
- `docs/Silabus.md` — kompetensi jadi sembilan, seluruh perubahan P1/P2/P5/P6/P7/P8, §3, Tugas 2/3/4, Capstone Sprint 1
- Materi P1 — **Bagian 7 (Mobile-First) baru**, penutup jadi Bagian 8, alokasi menit seluruh bagian dirapatkan
- Materi P2 — judul & Bagian 1 disesuaikan (mobile-first tidak diulang dari nol)
- `P1/RUNDOWN.md`, `P1/README.md`, `P1/demo/README.md` — alur baru sembilan bagian
- `tugas/README.md` & `tugas/tugas-1-static-foundation/soal.md` — alur template repo & collaborator
- `CLAUDE.md` — ringkasan kurikulum, tiga kompetensi yang diselipkan, dan **daftar tiga hal yang gampang salah kalau ditulis dari ingatan** (React Compiler, LocalStorage/XSS, React Router v8)
- `README.md` — tabel progres & tech stack

**Temuan yang diperbarui:** T-004 — beban bergeser dari P2 ke P1, tidak berkurang. P1 kini sembilan bagian, dan Bagian 8 (Setup Git) yang paling berisiko terdesak.

---

### 25 Agustus 2026 — Revisi Pertama

**REVISI SILABUS HASIL RAPAT — perubahan struktural**

*Sumber:* silabus versi rapat yang diserahkan mentor. Ini bukan penambahan materi, melainkan perubahan susunan dan sistem penilaian.

**1. Sistem tugas berubah total — Progressive Web Project**
- Dari 8 tugas terpisah menjadi **4 tugas gabungan**, masing-masing mencakup dua pertemuan
- Seluruh tugas adalah **satu produk yang sama**, tumbuh dari halaman statis sampai aplikasi produksi
- Pengumpulan lewat **Pull Request**, bukan kirim berkas
- Peserta memilih **satu tema produk di P1** dan mempertahankannya sampai akhir
- *Alasan yang dicatat silabus:* peserta perlu mengalami bagaimana aplikasi berevolusi — pengalaman yang tidak didapat dari tugas yang berdiri sendiri
- Folder baru `tugas/` di root; `P1/tugas/` dan `P2/tugas/` dibubarkan, isinya dilebur ke `tugas/tugas-1-static-foundation/`

**2. Materi digeser antara P1 dan P2**
- **Arsitektur Web & HTTP Methods: P2 → P1.** Ini sekaligus menyelesaikan T-002 — nama "Fundamental Logika Dasar" cocok kembali dengan isinya.
- **CSS Grid & Mobile-First: P1 → P2.** Menjaga P1 tidak pecah setelah kemasukan arsitektur web dan setup Git.
- P1 ditutup dengan **Setup Workflow Git & Pull Request** (15 menit terakhir). Kalau bagian ini gagal, peserta tidak bisa mengumpulkan apa pun — jadi diberi catatan tegas: potong Tailwind, jangan potong ini.
- P2 ditutup dengan **praktik live mengubah halaman P1 jadi dinamis**; alur *data → transformasi → tampilan* ditanamkan sebagai fondasi mental menuju React.

**3. Dua kompetensi lulusan baru (6 → 8)**
- **Debugging & Verification Skill** — dijalankan dengan menyisipkan DevTools sejak P1 (tab Network di Bagian 2), React DevTools di P4, tab Network untuk API di P6
- **Responsible AI-Assisted Development** — didukung kebijakan AI resmi di §6

**4. Kebijakan AI Coding Assistant jadi bagian resmi silabus**
- AI diperbolehkan; yang dinilai bukan siapa mengetik, melainkan apakah bisa dipertanggungjawabkan
- Kode yang tidak bisa dijelaskan penulisnya dinilai **nol**
- Kemampuan menemukan & memperbaiki kesalahan kode AI dinilai **positif**
- Memperkuat pendekatan yang sudah dipegang sejak awal: tugas tertulis = pintu masuk, verifikasi lisan = kuncinya

**5. Penambahan di pertemuan lain**
- P4: debugging state dengan React DevTools
- P6: membaca request/response di tab Network; praktik diperluas dengan **simulasi kondisi gagal**
- P7: wawasan industri 15 menit — **TanStack Query**, memposisikan pola `useEffect` + Axios dari P6
- P8: **Git Collaboration Workflow** (branching, merge conflict, code review) + pengantar **TypeScript** 15 menit
- Tech stack resmi bertambah: Chrome DevTools & React DevTools

**6. Berkas yang menyesuaikan**
- `docs/Silabus.md` ditulis ulang mengikuti versi rapat
- Materi P1: 8 bagian, alokasi menit disusun ulang, Bagian 2 (Arsitektur Web) dan Bagian 7 (Git/PR) baru
- Materi P2: 8 bagian, Bagian 1 (CSS Grid) dan Bagian 6 (praktik live) baru
- File demo dinomori ulang; `05-grid-responsif.html` pindah dari `P1/demo/` ke `P2/demo/01-grid-responsif.html`
- `tugas/README.md` dan `tugas/tugas-1-static-foundation/soal.md` ditulis baru
- `CLAUDE.md` dan `README.md` disesuaikan

**Temuan yang muncul dari revisi ini:** T-003 (kadensi dua pertemuan/minggu vs Timeline) dan T-004 (P2 kemungkinan kelebihan muatan). T-002 ditutup.

---

### 23 Agustus 2026

**Penyampaian P1 dipangkas — langsung ke cara modern**
- *Alasan:* keputusan mentor. P1 padat (tujuh bagian / 120 menit), dan memperagakan dua cara untuk tiap konsep memakan waktu yang tidak ada. Cara lama sekarang cukup disebut sebagai **selingan satu-dua kalimat sambil lewat**, dengan kalimat siap-ucap yang sudah disiapkan di tiap bagian.
- *Yang tetap dipertahankan:* lapisan **KENAPA**. Peserta tetap harus tahu alasan tiap pilihan — hanya penyampaiannya lewat kalimat, bukan lewat peragaan. Dokumen materi tetap memuat perbandingan lengkapnya supaya mentor bisa menjawab kalau ditanya.
- `demo/04-flexbox.html`: contoh float dan CSS-nya dihapus seluruhnya, termasuk latihan "biarkan mereka gagal 3 menit". Delapan contoh jadi tujuh, ditambah dua blok komentar SELINGAN siap-ucap.
- Materi Bagian 3: peragaan tiga cara menempelkan CSS (inline → internal → external) diganti langsung ke file terpisah, dengan satu selingan.
- Materi Bagian 4: blok BANDINGKAN float dihapus, langsung APA — Flexbox. `gap` vs margin diringkas jadi satu selingan.
- **Pengecualian yang sengaja dipertahankan:** perbandingan div soup vs semantic di Bagian 2. Di situ perbandingannya *adalah* argumennya — tanpa melihat div soup, aturan "pakai `<nav>`" cuma terdengar sewenang-wenang. Dibatasi maksimal 2 menit, dan bukan sebagai latihan.
- Alokasi menit dihitung ulang; sekitar 10 menit yang hemat dialihkan ke praktik Flexbox (jadi 27 menit) dan penutup (jadi 8 menit, sebelumnya 5).
- `CLAUDE.md`: Prinsip Inti diamandemen — dibedakan antara dokumen (perbandingan tetap lengkap) dan alokasi waktu kelas (langsung cara modern). Ini perubahan pada aturan yang sebelumnya berbunyi "selalu tunjukkan cara lama DULU", jadi dicatat eksplisit di sini.

**Koreksi posisi TailwindCSS — dikembalikan ke P1**
- *Penyebab:* salah membaca instruksi mentor "html css tetap dipertama, karena langsung tailwind saja belajarnya". Dibaca sebagai alasan mengeluarkan Tailwind dari P1, padahal maksudnya sebaliknya — Tailwind memang dipelajari langsung di P1.
- Ditambahkan **Bagian 6 — TailwindCSS** (menit 102–115) di materi P1, beserta `demo/06-tailwind.html` yang memuat kartu sama dalam dua versi bersebelahan dan tabel pemetaan CSS → class Tailwind
- Alokasi menit bagian lain dirapatkan untuk memberi ruang 13 menit; Penutup jadi Bagian 7
- Tugas 1 mendapat **bonus opsional +10 poin**: konversi satu kartu ke Tailwind disertai komentar pemetaannya. Sengaja cuma satu kartu — tujuannya membuktikan bahwa Tailwind cuma nama pendek untuk CSS yang sudah ditulis, bukan menguasainya hari itu.
- `docs/Silabus.md`: Tailwind kembali ke daftar materi P1; entri P3 diubah jadi "pemasangan yang benar lewat Vite, lanjutan dari pengenalan via CDN di P1"
- `CLAUDE.md` dan `README.md` disesuaikan

**REVISI BESAR — urutan P1 dan P2 ditukar**
- *Keputusan & alasan lengkap:* lihat B-001 di bagian B.
- Seluruh materi JavaScript dipindah `P1/` → `P2/` memakai `git mv` supaya riwayat filenya tetap terlacak
- `tugas-1.js` → `tugas-2.js`, `tugas-1-kunci.js` → `tugas-2-kunci.js`, dan seluruh rujukan "P1"/"Tugas 1" di dalamnya diperbarui
- **Framing materi JS ditulis ulang, bukan sekadar diganti nomornya.** Seluruh pembukaan materi lama dibangun di atas asumsi "peserta belum punya halaman web" — asumsi itu sudah tidak berlaku. Yang diubah: bagian "Situasi Khusus" (sekarang bertumpu pada halaman P1 mereka yang masih diam), analogi mesin & mobil (dibalik jadi bodi & mesin), pertanyaan pembuka kelas, dan dua entri di Lampiran A yang kini menjawab "kok balik ke teks doang?" alih-alih "kok belum bikin website?"
- Ditambahkan antisipasi **penurunan energi** di P2 — setelah P1 yang penuh umpan balik visual, kembali ke console akan terasa mundur. Perlu disebut di depan supaya tidak terasa seperti ada yang salah.
- Materi P1 baru (HTML/CSS) ditulis dari nol: 6 bagian, alokasi 120 menit, Lampiran A–E lengkap, 5 file demo, tugas landing page, dan kunci jawaban bertema kedai kopi
- `docs/Silabus.md`: isi P1 dan P2 ditukar, judul pertemuan disesuaikan, TailwindCSS dipindah ke daftar materi P3
- `CLAUDE.md`: bagian Pengetahuan Kurikulum diperbarui — termasuk mengganti catatan lama yang melarang menukar P1↔P2, sekarang berisi keputusan penukaran beserta mitigasi yang wajib dijalankan di P2 dan P3
- `README.md`: tabel progres diperbarui, P2 kini berstatus selesai
- Temuan baru: T-002 (nama pertemuan Timeline tidak lagi cocok)

**P1 — menambah file demo, tugas, dan kunci jawaban**
> Catatan: entri di bawah ini ditulis sebelum revisi urutan. Materi yang dimaksud sekarang berada di `P2/`.
- *Alasan:* checklist H-3 dan H-1 di dokumen materi menyuruh menyiapkan file data demo, contoh "cara lama vs cara modern", serta 5 soal beserta kuncinya — tapi filenya belum ada. Yang tersedia baru dokumen panduan mengajarnya.
- Struktur baru: `P1/demo/` (mentor), `P1/tugas/` (dibagikan ke peserta), `P1/kunci-jawaban/` (mentor), masing-masing dengan README sendiri
- Tetap tanpa Node/build sesuai batasan P1. Peserta cukup double-click `tugas/index.html`; satu-satunya yang butuh Live Server adalah demo modul, dan itu bagian opsional untuk mentor
- Data tugas memakai **mahasiswa** (10 item), berbeda dari data demo yang memakai **produk** (3 item). Disengaja supaya jawaban tugas tidak bisa disalin langsung dari contoh di kelas
- Tiga perangkap sengaja dipasang di soal: dua orang bernilai di bawah 60 (menguji apakah `.find()` dipahami sebagai "yang pertama", bukan "yang paling ekstrem"), dua syarat di soal 5, dan urutan chaining yang menghasilkan array kosong kalau dibalik
- Seluruh kunci jawaban diverifikasi dengan Node: 10 nama · 5 orang bernilai ≥80 · `true` · Dimas Ardiansyah · 76.2 · 4 nama

**Perbaikan tabrakan `const produk`**
- *Masalah:* `demo/00-data-demo.js` dan `demo/03-array-methods.js` sama-sama mendeklarasikan `const produk`. Kalau mentor mem-paste keduanya di sesi console yang sama, muncul `SyntaxError: Identifier 'produk' has already been declared` dan seluruh paste gagal — tepat di tengah kelas.
- *Kenapa tidak disatukan saja:* `03` sengaja dibuat mandiri supaya bisa dipakai tanpa membuka file lain. Menghapus datanya justru memindahkan kegagalan ke arah sebaliknya (`produk is not defined`).
- *Solusi:* peringatan eksplisit di header `03` dan di `demo/README.md`, lengkap dengan cara pulihnya (tekan F5). Ditambah saran menjadikannya bahan mengajar dadakan — kejadian ini persis mendemonstrasikan Bagian 2 tentang `const` yang menolak deklarasi ulang.

**Inisiasi repositori**
- `git init` pada branch `main`, remote `origin` → `github.com/samythh/Bootcamp_Metro`
- Commit awal `1345dc7` — 14 file
- Menambah [README.md](../README.md): struktur folder, tabel dokumen acuan, tabel progres P1–P8, konvensi penamaan file
- Menambah `.gitignore` dan `.gitkeep` di P2–P8 agar struktur folder kosong tetap terlacak

**[Silabus.md](Silabus.md) — ditulis ulang formatnya**
- Isi tidak diubah sama sekali, hanya penyajiannya
- Metadata program → tabel Ringkasan Program
- 6 kompetensi lulusan → tabel bernomor
- Tiap pertemuan → heading tersendiri dengan blok Fokus / Materi / Praktik Live / Output
- Roadmap sprint dan sistem penilaian → tabel
- Ditambah Daftar Isi ber-anchor

**P1-Materi-Mentor-Frontend-JS.md — menambah `.some()`** *(file ini kini [P2-Materi-Mentor-Frontend-JS.md](../P2/P2-Materi-Mentor-Frontend-JS.md))*
- *Alasan:* silabus P1 menyebut lima method array (`.map`, `.filter`, `.reduce`, `.find`, `.some`), materi hanya memuat empat. `.some()` tidak ada sama sekali.
- Bagian 4: heading "Empat Method Wajib" → **"Lima Method Wajib"**
- Menambah sub-bagian `.some()` di antara `.find()` dan `.reduce()` — lengkap dengan BANDINGKAN (`.filter(...).length > 0` vs `.some(...)`), KENAPA (efisiensi + kejelasan niat), analogi absen kelas, dan colokan ke depan ke *conditional rendering* React
- Tugas 1: soal 3 diubah jadi **berpasangan** — (a) "ada nggak yang nilainya di bawah 60?" (`.some()`), (b) "kalau ada, siapa orang pertamanya?" (`.find()`). Dibuat berpasangan supaya perbedaan "ada nggak?" vs "yang mana?" yang justru teruji, sekaligus menjaga jumlah soal tetap 5 sesuai silabus.

**[CLAUDE.md](../CLAUDE.md) — menambah aturan baca docs**
- Section baru **"ATURAN WAJIB: Baca `docs/` Dulu"**, ditaruh sebelum Prinsip Inti
- Isinya: tabel fungsi tiap file di `docs/`, kapan wajib dibaca, aturan resolusi konflik (fakta → `docs/` menang, pedagogi → `CLAUDE.md` menang), dan kewajiban cross-check silabus setelah membuat materi
- Section "Pengetahuan Kurikulum" diberi catatan bahwa ringkasannya bukan sumber kebenaran

**Temuan tercatat**
- T-001 — Silabus dan Timeline berbeda soal jadwal Demo Day (lihat bagian A)

---

## Cara Memakai File Ini

**Saat menemukan pertentangan atau kekosongan:** tambahkan entri baru di bagian A dengan nomor urut berikutnya (T-002, T-003, ...). Tulis buktinya — dokumen mana, bagian mana, kata dokumen itu apa. Temuan tanpa bukti akan sulit ditindaklanjuti berminggu-minggu kemudian.

**Saat temuan diputuskan:** pindahkan entrinya ke bagian B, ubah status jadi ✅, dan tambahkan baris **Keputusan** berisi apa yang dipilih dan alasannya. Jangan dihapus — alasan sebuah keputusan lebih sering dibutuhkan daripada keputusannya sendiri.

**Saat mengubah dokumen:** tambahkan entri di bagian C di bawah tanggal hari ini. Sebutkan **kenapa**, bukan cuma apa. "Menambah `.some()`" kurang berguna; "menambah `.some()` karena silabus menyebutnya tapi materi belum memuatnya" berguna.
