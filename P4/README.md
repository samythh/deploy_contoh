# Pertemuan 4 — Pengembangan Fitur Dasar
### State Management, Lifecycle Hooks & Controlled Forms

**Durasi:** 120 menit · **Jadwal:** Oktober W4 (22–31 Okt 2026)
**Topik:** `useState`, Immutability, React DevTools, Controlled Components, Lifting State Up, `useEffect`

> ⚠️ **`useEffect` adalah hook yang paling sering dipakai secara salah**, dan AI coding assistant sering menyarankan pemakaian yang tidak perlu. Materi ini mengajarkannya sebagai **alat sinkronisasi dengan dunia luar**, bukan "kode yang jalan saat komponen muncul". Lihat Bagian 6.

---

## Isi Folder

```
P4/
├── P4-Materi-Mentor-Frontend-State.md   # Panduan mengajar lengkap
├── RUNDOWN.md                           # Pegangan singkat SAAT mengajar
│
└── demo/                                # [mentor]
    └── komponen/                        # salin ke src/ project Vite
        ├── MutasiJebakan.jsx            # peragaan .push() yang gagal
        ├── TodoApp.jsx                  # perekat + useEffect LocalStorage
        ├── TodoForm.jsx                 # controlled components + validasi
        ├── FilterBar.jsx                # lifting state up
        ├── TodoList.jsx
        └── TodoItem.jsx
```

**Tugas tidak ada di folder ini.** P3 dan P4 digabung jadi **Tugas 2 — React Migration**, dikumpulkan sebelum Pertemuan 5. Detailnya di [`../tugas/`](../tugas/).

---

## Alur Mengajar

> Versi lengkap dengan gerakan per bagian dan kalimat siap-ucap: **[RUNDOWN.md](RUNDOWN.md)**

| Menit | Bagian | File demo |
|:--:|---|---|
| 0–8 | Pembuka & sambungan dari P3 | katalog P3 peserta |
| 8–26 | **`useState`** — data milik komponen | — |
| 26–46 | **Immutability** ⚠️ | `MutasiJebakan.jsx` |
| 46–58 | React DevTools | extension |
| 58–80 | **Controlled Components & validasi** | `TodoForm.jsx` |
| 80–92 | Lifting State Up | `FilterBar.jsx` |
| 92–110 | **`useEffect`** ⚠️ | `TodoApp.jsx` |
| 110–120 | Penutup & Tugas 2 | `../tugas/` |

---

## Situasi Khusus P4

**Satu konsep menentukan segalanya: immutability.**

Peserta akan menulis `daftar.push(barang)` — karena itu yang mereka pelajari di P2, dan itu benar di JavaScript biasa. Lalu tidak terjadi apa-apa di layar. **Tidak ada error. Tidak ada warning. Layar cuma diam.**

Mereka akan mengira React-nya rusak.

Kalau konsep ini tidak nempel, seluruh sisa program terasa seperti sihir yang kadang jalan kadang tidak. Karena itu Bagian 2 dapat 20 menit, dan **kegagalannya wajib diperagakan** — bukan cuma disebut aturannya.

---

## Hampir Semua Alatnya Sudah Mereka Punya

Sebut sambungan ini berulang kali — itu yang membuat immutability terasa masuk akal, bukan aturan sewenang-wenang:

| Yang dipakai hari ini | Sudah dipelajari di |
|---|---|
| `[...todos, x]` untuk menambah | P2 Bagian 3 (spread) |
| `todos.filter(...)` untuk menghapus | P2 Bagian 4 |
| `todos.map(...)` untuk mengubah satu item | P2 Bagian 4 |
| `const [a, b] = ...` di `useState` | P2 Bagian 3 (destructuring) |
| `key={t.id}` di daftar | P3 Bagian 5 |
| Ternary & `&&` untuk conditional | P3 Bagian 5 |

Yang benar-benar baru: **`useState`, immutability sebagai aturan, dan `useEffect`.**

---

## Yang Perlu Peserta Siapkan

**React Developer Tools** — extension Chrome/Edge. Kirim tautan pemasangannya **H-1**, jangan hari-H; ini butuh unduh dan restart browser.

Project React dari P3 harus dalam keadaan **jalan**. Peserta yang project-nya bermasalah tidak bisa mengikuti praktik hari ini.

---

## Tugas 2 — Lengkap Setelah Hari Ini

Mencakup **P3 & P4**, dikumpulkan sebelum Pertemuan 5.

| Syarat | Diajarkan di |
|---|---|
| Vite + Tailwind di repo yang sama | P3 Bagian 2 |
| Minimal 4 komponen | P3 Bagian 3–4 |
| Props + `.map()` dengan `key` stabil | P3 Bagian 4–5 |
| **Minimal satu fitur `useState`** | P4 Bagian 1 |
| **Form terkendali + validasi** | P4 Bagian 4 |
| **Perubahan state immutable** | P4 Bagian 2 |

Sampaikan di menit ke-110 bahwa **tidak ada lagi yang perlu ditunggu** — seluruh syarat sudah mereka pegang.

---

## Checklist Persiapan

**H-3**
- [ ] Ingatkan peserta membawa project React P3 dalam keadaan jalan
- [ ] Tanyakan siapa yang sudah mulai bagian Tugas 2 dari P3 — catat yang belum
- [ ] Baca [materi lengkap](P4-Materi-Mentor-Frontend-State.md) sampai Lampiran E

**H-1**
- [ ] **Kirim tautan pemasangan React Developer Tools** — extension, butuh unduh
- [ ] Latih peragaan `MutasiJebakan` sampai lancar — ini peragaan terpenting hari ini
- [ ] Uji LocalStorage: tambah todo → refresh → data bertahan
- [ ] Jalankan seluruh `demo/komponen/` di project Vite
- [ ] Siapkan katalog P3 peserta untuk ditampilkan di pembuka

**Hari-H**
- [ ] Editor + browser + React DevTools berdampingan, font minimal 18pt
- [ ] Aktifkan *Highlight updates* di React DevTools sebelum kelas mulai
- [ ] Sediakan 5 menit awal untuk peserta yang project P3-nya bermasalah
