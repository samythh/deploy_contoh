# Pertemuan 5 — Integrasi Konsep Lanjutan
### Multi-Page Routing & Custom Hooks

**Durasi:** 120 menit · **Jadwal:** November W1 (1–7 Nov 2026)
**Topik:** React Router v8, URL Params, Query Strings, `useNavigate`, Custom Hooks, wawasan SSR

> ⚠️ **Paketnya `react-router`, BUKAN `react-router-dom`.** Sejak v7 keduanya digabung. Mayoritas tutorial di internet masih memakai nama lama — **sebut ini eksplisit di kelas**, dua kali. Uji seluruh import dari nol di H-1.

---

## Isi Folder

```
P5/
├── P5-Materi-Mentor-Frontend-Routing.md   # Panduan mengajar lengkap
├── RUNDOWN.md                             # Pegangan singkat SAAT mengajar
│
└── demo/                                  # [mentor]
    ├── komponen/
    │   ├── App.jsx                        # Routes, Route, Link, 404
    │   ├── LinkJebakan.jsx                # peragaan <a> vs <Link>
    │   ├── Beranda.jsx                    # useSearchParams + filter di URL
    │   ├── DetailProduk.jsx               # useParams + jebakan string
    │   ├── NotFound.jsx
    │   └── data.js                        # id sengaja bertipe angka
    └── hooks/
        ├── useLocalStorage.js             # dari P4, dipindah jadi hook
        └── useWindowSize.js               # + cleanup wajib
```

**Tugas tidak ada di folder ini.** P5 dan P6 digabung jadi **Tugas 3 — Multi-Page & Live Data**, dikumpulkan sebelum Pertemuan 7. Detailnya di [`../tugas/`](../tugas/).

---

## Alur Mengajar

> Versi lengkap dengan gerakan per bagian dan kalimat siap-ucap: **[RUNDOWN.md](RUNDOWN.md)**

| Menit | Bagian | File demo |
|:--:|---|---|
| 0–8 | Pembuka & sambungan dari P4 | Todo/katalog P4 peserta |
| 8–20 | Kenapa routing dibutuhkan | — |
| 20–40 | **Setup Router + `<Link>` vs `<a>`** | `App.jsx` · `LinkJebakan.jsx` |
| 40–58 | URL Params & halaman detail | `DetailProduk.jsx` |
| 58–72 | Query Strings & `useNavigate` | `Beranda.jsx` |
| 72–92 | **Custom Hooks** | `hooks/` |
| 92–104 | Wawasan Industri: batas SPA & SSR | View Page Source |
| 104–120 | Penutup & Tugas 3 | `../tugas/` |

---

## Situasi Khusus P5

**Ini pertemuan paling lega.** Setelah P3 (setup yang rawan) dan P4 (immutability yang bikin pusing), P5 relatif ramah — tidak ada konsep yang gagal diam-diam, tidak ada aturan yang berlawanan dengan intuisi.

Manfaatkan untuk dua hal:

1. **Beri porsi nyata untuk Custom Hooks** — sering diajarkan terburu-buru di akhir, padahal diwajibkan di Tugas 3
2. **Bantu yang tertinggal** — peserta yang Tugas 2-nya belum selesai punya kesempatan mengejar hari ini

---

## Yang Sudah Mereka Punya

| Yang dipakai hari ini | Sudah dipelajari di |
|---|---|
| `const { id } = useParams()` | P2 (destructuring) |
| `.find()` untuk mencari item | P2 |
| Isi `useLocalStorage` | **P4 Bagian 6** — persis sama, cuma dipindah |
| Cleanup di `useEffect` | P4 Bagian 6 |
| `<Link>` sebagai `<a>` yang aksesibel | P1 (aksesibilitas) |

Yang benar-benar baru: **routing, URL sebagai sumber data, dan custom hooks.**

---

## Tugas 3 — Yang Paling Berat dari Empat

Mencakup **P5 & P6**, dikumpulkan sebelum Pertemuan 7.

| Sudah bisa setelah hari ini | Menunggu P6 |
|---|---|
| Routing 3 halaman + 404 | Axios + base URL |
| `useParams` di halaman detail | `interface` TypeScript |
| Minimal satu custom hook | **Lima status antarmuka** (bobot terbesar) |
| Pencarian & pagination di URL | |

> Sampaikan peringatan ini di menit ke-104: **bagian routing harus selesai minggu ini.** Kalau ditunda, minggu depan mereka mengerjakan routing sambil belajar API sambil belajar TypeScript — dan itu tidak akan selesai.

---

## Checklist Persiapan

**H-3**
- [ ] Ingatkan peserta membawa project React P4 dalam keadaan jalan
- [ ] Tanyakan siapa Tugas 2-nya sudah masuk — catat yang belum, hari ini kesempatan mengejar
- [ ] Baca [materi lengkap](P5-Materi-Mentor-Frontend-Routing.md) sampai Lampiran E

**H-1**
- [ ] **Pasang `react-router` dari nol dan uji seluruh import** — nama paket berubah sejak v7
- [ ] Latih peragaan `LinkJebakan` sampai kedipnya terlihat jelas di proyektor
- [ ] Siapkan **View Page Source** dari aplikasi jadi untuk Bagian 6
- [ ] Jalankan seluruh `demo/` di project Vite
- [ ] Siapkan Todo/katalog P4 peserta untuk pembuka

**Hari-H**
- [ ] Editor + browser + React DevTools berdampingan, font minimal 18pt
- [ ] **Alamat browser terlihat jelas di proyektor** — hari ini alamat adalah materi
- [ ] Sediakan 5 menit awal untuk peserta yang project P4-nya bermasalah
