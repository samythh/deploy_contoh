# Pertemuan 3 — Studi Kasus & Latihan Terbimbing
### React.js Fundamentals & Component-Driven Architecture

**Durasi:** 120 menit · **Jadwal:** Oktober W3 (15–21 Okt 2026)
**Topik:** Vite, JSX, Komponen, Props, Conditional & List Rendering, TailwindCSS via build tool

> ⚠️ **WAJIB DICEK H-1:** setup Vite & Tailwind adalah bagian materi yang **paling cepat basi**. Dokumen ini ditulis untuk **Tailwind v4** (plugin `@tailwindcss/vite`, tanpa `tailwind.config.js`) dan **React 19**. Jalankan sendiri seluruh langkah Bagian 2 dari nol sebelum mengajar.

---

## Isi Folder

```
P3/
├── P3-Materi-Mentor-Frontend-React.md   # Panduan mengajar lengkap
├── RUNDOWN.md                           # Pegangan singkat SAAT mengajar
│
└── demo/                                # [mentor]
    ├── 01-kenapa-react.html             # berdiri sendiri, double-click
    └── komponen/                        # salin ke src/ project Vite
        ├── data.js
        ├── Navbar.jsx
        ├── ProductCard.jsx
        ├── Badge.jsx
        ├── Footer.jsx
        ├── App.jsx
        └── KeyJebakan.jsx               # peragaan key={index} yang rusak
```

**Tugas tidak ada di folder ini.** P3 dan P4 digabung jadi **Tugas 2 — React Migration**, dikumpulkan sebelum Pertemuan 5. Detailnya di [`../tugas/`](../tugas/).

---

## Alur Mengajar

> Versi lengkap dengan gerakan per bagian dan kalimat siap-ucap: **[RUNDOWN.md](RUNDOWN.md)** — buka di layar kedua saat kelas.

| Menit | Bagian | File demo |
|:--:|---|---|
| 0–8 | Pembuka & sambungan dari P2 | kode P2 peserta |
| 8–20 | **Kenapa React ada** + Virtual DOM | `01-kenapa-react.html` |
| 20–36 | **Setup Vite + Tailwind** ⚠️ | terminal |
| 36–54 | Komponen & JSX | `komponen/Navbar.jsx` |
| 54–74 | **Props** — konsep terpenting | `komponen/ProductCard.jsx` |
| 74–98 | Conditional & List Rendering + `key` | `komponen/KeyJebakan.jsx` |
| 98–114 | Praktik live: katalog utuh | `komponen/App.jsx` |
| 114–120 | Penutup & Tugas 2 | `../tugas/` |

---

## Situasi Khusus P3

**Ini pertemuan paling rawan tersesat.** Dua pertemuan pertama berjalan di satu file HTML yang bisa di-double-click. Hari ini semuanya berubah sekaligus: terminal, `node_modules`, server yang harus dijalankan, file `.jsx`.

Peserta bisa kehilangan pijakan hanya karena `npm run dev` gagal — **bukan karena React-nya sulit.**

**Konsekuensinya:** Bagian 2 dapat 16 menit penuh, dan Anda harus **berkeliling mengecek layar**. Peserta yang project-nya tidak jalan biasanya diam, bukan bertanya.

---

## Hampir Tidak Ada Hal Baru Hari Ini

Ini yang membuat P3 terasa bisa dijangkau. Sebut sambungannya berulang kali:

| Yang dipakai hari ini | Sudah dipelajari di |
|---|---|
| `.map()` untuk merender daftar | P2 Bagian 4 |
| Destructuring di parameter props | P2 Bagian 3 |
| `import` / `export` antar file | P2 Bagian 5 |
| Prefiks `md:` `lg:` Tailwind | P1 Bagian 7 |
| Tag semantic di dalam JSX | P1 Bagian 3 |

Yang benar-benar baru cuma: **komponen, props, dan `key`.**

---

## Yang Perlu Peserta Siapkan

**Node.js LTS** — dicek di **H-3**, bukan hari-H. Minta mereka menjalankan `node -v` dan membalas hasilnya di grup.

Project React dibuat **di dalam repositori Tugas 1 mereka**, bukan repositori baru. Tegaskan ini sejak H-3; peserta yang terlanjur bikin repo baru harus memindahkan pekerjaannya.

---

## Tugas 2 — React Migration

Mencakup **P3 & P4**, dikumpulkan sebelum Pertemuan 5.

**Bisa dikerjakan setelah hari ini:** setup Vite + Tailwind di repo yang sama · pecah UI jadi minimal 4 komponen · props · `.map()` dengan `key` stabil.

**Menunggu P4:** `useState`, form terkendali, immutability.

Sampaikan pembagian ini eksplisit di menit ke-114 — supaya peserta tidak menunda separuh tugas sampai semalam sebelum tenggat.

---

## Checklist Persiapan

**H-3**
- [ ] Kirim panduan instalasi **Node.js LTS** + cara cek (`node -v`)
- [ ] Minta peserta balas hasil `node -v` di grup — catat yang belum
- [ ] Tegaskan: project React di **repositori Tugas 1**, bukan repo baru
- [ ] Baca [materi lengkap](P3-Materi-Mentor-Frontend-React.md) sampai Lampiran E

**H-1**
- [ ] **Jalankan seluruh Bagian 2 dari nol di folder kosong** — kalau perintahnya berubah, perbaiki dokumen dulu
- [ ] Siapkan **project jadi** di flashdisk/ZIP sebagai jalan darurat
- [ ] Siapkan `node_modules` di flashdisk untuk WiFi lemah
- [ ] Latih peragaan `KeyJebakan` sampai lancar
- [ ] Siapkan kode P2 peserta untuk ditampilkan di pembuka

**Hari-H**
- [ ] Terminal + editor berdampingan, font minimal 18pt, tema terang
- [ ] Browser + Console terbuka
- [ ] Sediakan 5 menit di awal untuk masalah Node.js yang tersisa
- [ ] **Berkeliling saat Bagian 2** — jangan menunggu tangan terangkat
