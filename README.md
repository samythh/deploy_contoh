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
├── docs/                # Dokumen acuan resmi program
│   ├── Silabus.md       # Kurikulum 8 pertemuan, kompetensi, roadmap Capstone, penilaian
│   ├── Timeline.md      # Jadwal P1–P16, fase program, PIC, SOP rapat sprint
│   └── Portofolio.md    # Profil mentor
│
└── P1/ ... P8/          # Materi per pertemuan
    └── P1-Materi-Mentor-Frontend-JS.md
```

---

## Dokumen Acuan

| Dokumen | Fungsi |
|---|---|
| [docs/Silabus.md](docs/Silabus.md) | **Sumber kebenaran isi materi** — apa yang wajib diajarkan di tiap pertemuan |
| [docs/Timeline.md](docs/Timeline.md) | Jadwal dan urutan pelaksanaan, dari rekrutmen sampai Demo Day |
| [CLAUDE.md](CLAUDE.md) | Aturan cara menulis materi — struktur tiga lapis, gaya bahasa, hal yang dihindari |

Kalau ada pertentangan: **fakta** (tanggal, item materi, bobot nilai) mengikuti `docs/`; **cara menyampaikan** mengikuti `CLAUDE.md`.

---

## Progres Materi

| Kode | Pertemuan | Topik | Status |
|:--:|---|---|:--:|
| **P1** | Fundamental Logika Dasar | Modern JavaScript (ES6+) & Web Architecture | ✅ Selesai |
| **P2** | Praktik Sintaksis Dasar | HTML5 Semantic, CSS Layout, TailwindCSS, Responsif | ⬜ Belum |
| **P3** | Studi Kasus & Latihan Terbimbing | React.js Fundamentals & Component Architecture | ⬜ Belum |
| **P4** | Pengembangan Fitur Dasar | State, Lifecycle Hooks & Controlled Forms | ⬜ Belum |
| **P5** | Integrasi Konsep Lanjutan | Routing & Custom Hooks | ⬜ Belum |
| **P6** | Studi Kasus Tingkat Menengah | REST API Consumption & Async UI | ⬜ Belum |
| **P7** | Advanced Framework | Global State & Performance Optimization | ⬜ Belum |
| **P8** | Materi Lanjutan & Final Progress | Auth (JWT), Production Build & Deployment | ⬜ Belum |

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

Contoh: `P1/P1-Materi-Mentor-Frontend-JS.md`

---

## Tech Stack Program

`HTML5/CSS3` · `JavaScript ES6+` · `React.js` · `Vite` · `TailwindCSS` · `Axios` · `Git/GitHub` · `Vercel`

---

*Metro Institute Season 2 — Divisi Frontend*
