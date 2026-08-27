# Pertemuan 6 — Studi Kasus Tingkat Menengah
### RESTful API Consumption & Asynchronous UI Handling

**Durasi:** 120 menit · **Jadwal:** November W2 (8–14 Nov 2026)
**Topik:** async/await, Axios, Lima Status Antarmuka, tab Network, Pengantar TypeScript

> ⚠️ **P6 ADALAH TITIK RISIKO.** Pertemuan terpadat di seluruh program — lima blok materi besar, salah satunya bahasa baru. Sekaligus penyumbang **bobot terbesar Tugas 3**.
>
> Baca **"Kalau Waktu Tidak Cukup"** di [RUNDOWN.md](RUNDOWN.md) **sebelum** mengajar.

---

## Isi Folder

```
P6/
├── P6-Materi-Mentor-Frontend-API.md   # Panduan mengajar lengkap
├── RUNDOWN.md                         # Pegangan + urutan potong
│
└── demo/                              # [mentor]
    ├── api/client.js                  # Axios: baseURL, timeout, interceptor
    ├── types.ts                       # interface untuk data API
    └── komponen/
        ├── LimaStatus.jsx             # peragaan 5 status ⚠️
        └── DaftarProduk.tsx           # semuanya digabung
```

**Tugas tidak ada di folder ini.** P5 dan P6 digabung jadi **Tugas 3 — Multi-Page & Live Data**, dikumpulkan sebelum Pertemuan 7. Detailnya di [`../tugas/`](../tugas/).

---

## Alur Mengajar

> Versi lengkap dengan gerakan per bagian, kalimat siap-ucap, dan urutan potong: **[RUNDOWN.md](RUNDOWN.md)**

| Menit | Bagian | File demo |
|:--:|---|---|
| 0–8 | Pembuka & sambungan dari P5 | `data.js` peserta |
| 8–24 | Async: Promise → `async/await` → `try/catch` | — |
| 24–40 | Axios + **tab Network** | `api/client.js` |
| **40–68** | **LIMA STATUS ANTARMUKA** ⚠️ | `LimaStatus.jsx` |
| 68–93 | **Pengantar TypeScript** (25 menit) | `types.ts` |
| 93–112 | Praktik live + **simulasi gagal** | `DaftarProduk.tsx` |
| 112–120 | Penutup & Tugas 3 | `../tugas/` |

> ⏰ **Pasang alarm di menit ke-40.** Kalau Bagian 1–2 belum selesai, potong interceptor dan langsung ke lima status.

---

## Situasi Khusus P6

**Dua hal membuat P6 berbeda:**

**1. Ini pertemuan terpadat.** Lima blok materi besar dalam 120 menit, dan salah satunya (TypeScript) adalah bahasa baru.

**2. Bobot terbesar Tugas 3 ada di sini.** Kriteria penilaian menyebut *"kelengkapan penanganan lima status antarmuka (bobot terbesar)"*. Kalau Bagian 3 tidak tuntas, **nilai tugas peserta yang jadi korban.**

**Konsekuensinya:** kalau harus memotong, potong dari **interceptor** dan **teori async** — jangan dari **lima status antarmuka**.

---

## Yang Sudah Mereka Punya

| Yang dipakai hari ini | Sudah dipelajari di |
|---|---|
| Analogi restoran untuk client-server | **P1 Bagian 2** |
| Tab Network di DevTools | **P1 Bagian 2** |
| `e.preventDefault()` di form | P4 Bagian 4 |
| `useEffect` untuk dunia di luar React | P4 Bagian 6 |
| Kriteria "kapan butuh effect" | P4 Bagian 6 |
| Filter & pencarian di URL | P5 Bagian 4 |

Yang benar-benar baru: **async/await, Axios, lima status, dan TypeScript.**

---

## Tugas 3 — Lengkap Setelah Hari Ini

Dikumpulkan **sebelum Pertemuan 7**.

| Syarat | Diajarkan di |
|---|---|
| Routing 3 halaman + 404 | P5 |
| `useParams`, custom hook, pencarian di URL | P5 |
| Axios dengan base URL | **P6 Bagian 2** |
| Minimal satu `interface` TypeScript | **P6 Bagian 4** |
| **Lima status antarmuka** — bobot terbesar | **P6 Bagian 3** |

> Sampaikan di penutup: *"aplikasi yang fiturnya sederhana tapi lima statusnya lengkap, nilainya **lebih tinggi** daripada yang fiturnya banyak tapi layarnya kosong pas internet mati."*

---

## Checklist Persiapan

**H-3**
- [ ] Ingatkan bagian routing Tugas 3 harus sudah jalan — hari ini menumpuk di atasnya
- [ ] Ingatkan peserta membawa project P5 dalam keadaan jalan
- [ ] Baca [materi lengkap](P6-Materi-Mentor-Frontend-API.md) sampai Lampiran E

**H-1**
- [ ] **Uji API dari nol** — demo memakai `dummyjson.com`. Siapkan cadangan (JSONPlaceholder) kalau mati.
- [ ] Jalankan seluruh `demo/` di project Vite, termasuk versi `.tsx`
- [ ] Latih tiga simulasi: Slow 3G · Offline · pencarian kosong
- [ ] Baca **"Kalau Waktu Tidak Cukup"** di RUNDOWN — jangan tunggu kepepet

**Hari-H**
- [ ] Editor + browser + tab Network berdampingan, font minimal 18pt
- [ ] Filter **Fetch/XHR** sudah aktif sebelum kelas mulai
- [ ] **Alarm di menit ke-40**
