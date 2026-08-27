# Bootcamp Metro — Materi Mentor Frontend

Repositori persiapan materi ajar untuk **Kelas Spesialisasi Frontend Web Development**
Metro Institute Season 2 — PT Metro Indonesian Software

---

## Tentang Repositori Ini

Repo ini menyimpan **materi panduan mentor**, bukan kode peserta.

Isinya dokumen persiapan mengajar: penjelasan konsep beserta alasannya, analogi siap-pakai untuk kelas, alokasi waktu per bagian, antisipasi pertanyaan peserta, dan checklist persiapan. Tujuannya supaya tiap pertemuan bisa disampaikan dengan konsisten — dan bisa diulang oleh mentor lain tanpa kehilangan konteks.

**Prinsip penulisan materi:** *reasoning over facts*. Setiap konsep tidak berhenti di "ini adalah X", tapi selalu menjelaskan masalah apa yang X selesaikan dan kenapa X dipilih dibanding alternatifnya.

---

## Struktur Folder

```
Bootcamp_Metro_S2/
├── CLAUDE.md            # Instruksi penulisan materi (gaya, struktur, prinsip pedagogis)
├── README.md            # Dokumen ini
│
├── docs/                       # Dokumen acuan resmi program
│   ├── Silabus.md              # Kurikulum 8 pertemuan, kompetensi, roadmap Capstone, penilaian
│   ├── Timeline.md             # Jadwal P1–P16, fase program, PIC, SOP rapat sprint
│   ├── Catatan-Perubahan.md    # Temuan terbuka + log perubahan dokumen
│   └── Portofolio.md           # Profil mentor
│
├── tugas/                      # Progressive Web Project
│   ├── README.md               # sistem tugas + tema produk + kebijakan AI
│   └── tugas-1-static-foundation/
│       ├── soal.md             # dibagikan ke peserta
│       ├── index.html
│       ├── style.css
│       └── kunci-jawaban/      # mentor saja
│
└── P1/ ... P8/                 # Materi per pertemuan
    ├── P1-Materi-Mentor-Frontend-HTML-CSS.md
    ├── RUNDOWN.md              # pegangan saat mengajar
    └── demo/                   # kode live untuk mentor
```

---

## Dokumen Acuan

| Dokumen | Fungsi |
|---|---|
| [docs/Silabus.md](docs/Silabus.md) | **Sumber kebenaran isi materi** — apa yang wajib diajarkan di tiap pertemuan |
| [docs/Timeline.md](docs/Timeline.md) | Jadwal dan urutan pelaksanaan, dari rekrutmen sampai Demo Day |
| [docs/Catatan-Perubahan.md](docs/Catatan-Perubahan.md) | Temuan yang belum diputuskan + log perubahan dokumen beserta alasannya |
| [CLAUDE.md](CLAUDE.md) | Aturan cara menulis materi — struktur tiga lapis, gaya bahasa, hal yang dihindari |

Kalau ada pertentangan: **fakta** (tanggal, item materi, bobot nilai) mengikuti `docs/`; **cara menyampaikan** mengikuti `CLAUDE.md`.

> ⚠️ **Temuan terbuka yang menunggu keputusan** — semuanya beserta bukti dan analisisnya di [docs/Catatan-Perubahan.md](docs/Catatan-Perubahan.md):
>
> | Kode | Temuan | Perlu |
> |---|---|---|
> | **T-001** | Silabus vs Timeline berbeda soal jadwal Demo Day (~2 minggu) | Konfirmasi koordinator |
> | **T-003** | Silabus menyebut *dua pertemuan/minggu*, Timeline menjadwalkan *satu* | Konfirmasi koordinator |
> | **T-005** | Silabus P3 tidak menyebut TailwindCSS, tapi Tugas 2 mensyaratkannya | Konfirmasi ringan |
> | **T-006** | Berkas soal Tugas 2–4 belum dibuat | Keputusan mentor |
> | **T-007** | Materi bergantung versi tool yang berubah cepat | Jadwal pemeriksaan |
> | **T-008** | Demo P6 bergantung API pihak ketiga | Pertimbangan |
> | **T-009** | Alokasi waktu belum teruji di kelas sungguhan | Koreksi setelah pelaksanaan |
> | **T-004** | P1 & P2 padat — beban bergeser, tidak berkurang | Awasi saat pelaksanaan |

---

## Sistem Tugas — Progressive Web Project

Bukan 8 tugas terpisah, melainkan **4 tugas gabungan** yang membangun **satu produk yang sama** dari halaman statis sampai aplikasi produksi. Dikumpulkan lewat **Pull Request**.

| Tugas | Materi | Produk jadi apa |
|:--:|:--:|---|
| 1 | P1 & P2 | Halaman statis responsif → dinamis dengan JavaScript |
| 2 | P3 & P4 | Dibangun ulang dengan React + Vite + Tailwind |
| 3 | P5 & P6 | Multi-halaman, data dari REST API, + `interface` TypeScript |
| 4 | P7 & P8 | Global state, autentikasi, terbit ke internet, Lighthouse A11y ≥ 90 |

Detailnya di [tugas/README.md](tugas/README.md).

---

## Progres Materi

| Kode | Pertemuan | Topik | Status |
|:--:|---|---|:--:|
| **P1** | Fundamental Logika Dasar | Arsitektur Web, HTML5 Semantic, Box Model, Flexbox, Tailwind CDN, Mobile-First, Setup Git & PR | ✅ Selesai |
| **P2** | Praktik Sintaksis Dasar | CSS Grid & Layout Multi-Kolom, JavaScript ES6+, Manipulasi Data | ✅ Selesai |
| **P3** | Studi Kasus & Latihan Terbimbing | React.js Fundamentals, Component Architecture, Tailwind via Vite | ✅ Selesai |
| **P4** | Pengembangan Fitur Dasar | useState, Immutability, React DevTools, Controlled Forms, useEffect | ✅ Selesai |
| **P5** | Integrasi Konsep Lanjutan | React Router v8, URL Params, Custom Hooks, wawasan SSR | ✅ Selesai |
| **P6** | Studi Kasus Tingkat Menengah | Axios, Lima Status Antarmuka, tab Network, pengantar TypeScript | ✅ Selesai |
| **P7** | Advanced Framework | Context, Zustand, React Compiler, wawasan TanStack Query | ✅ Selesai |
| **P8** | Materi Lanjutan & Final Progress | Auth JWT, Protected Route, Env Var, Deploy, Lighthouse, Git Collab | ✅ Selesai |

---

## Struktur Standar Dokumen Materi

Tiap file materi pertemuan mengikuti kerangka yang sama:

**Bagian utama**
1. Header — judul, durasi, topik, catatan versi
2. Cara membaca dokumen (penjelasan tiga lapis)
3. Prinsip besar yang ditanamkan di pertemuan itu
4. Breakdown per bagian dengan alokasi menit (asumsi 120 menit)
5. Rangkuman & tugas dengan kriteria penilaian

**Tiap konsep dijelaskan dalam tiga lapis:**

| Lapis | Isi |
|---|---|
| **APA** | Faktanya. Definisi ringkas. |
| **BANDINGKAN** | Alternatif yang ada dan bedanya — biasanya cara lama vs cara modern. |
| **KENAPA** | Alasan memilih satu di antaranya. Ini inti pemahaman. |

Ditambah blok **CARA SAMPAIKAN** — kalimat dan analogi yang bisa langsung diucapkan di kelas.

**Lampiran wajib**
- Pertanyaan yang pasti muncul + jawabannya (termasuk pertanyaan soal AI)
- Praktik langsung (console, DevTools, shortcut editor)
- Tips & kebiasaan programmer untuk ditanamkan
- Tiga kesalahan mentor baru di pertemuan itu
- Checklist persiapan H-3, H-1, dan Hari-H

---

## Konvensi Penamaan File

```
P{n}/P{n}-Materi-Mentor-Frontend-{Topik}.md
```

Contoh: `P1/P1-Materi-Mentor-Frontend-HTML-CSS.md`, `P2/P2-Materi-Mentor-Frontend-JS.md`

---

## Tech Stack Program

`HTML5/CSS3` · `JavaScript ES6+` · `TypeScript` · `React.js` · `Vite` · `TailwindCSS` · `Axios` · `Git/GitHub` · `Vercel` · `Chrome DevTools` · `React DevTools`

---

*Metro Institute Season 2 — Divisi Frontend*
