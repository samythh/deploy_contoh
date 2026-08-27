# Pertemuan 7 — Advanced Framework
### Global State Management & Performance Optimization

**Durasi:** 120 menit · **Jadwal:** November W3 (15–21 Nov 2026)
**Topik:** Context API, Zustand, React Compiler, Code Splitting, wawasan TanStack Query

> ⚠️ **BAGIAN 4 ADALAH MATERI YANG PALING GAMPANG SALAH DIAJARKAN DI SELURUH PROGRAM.**
>
> Sejak React 19, `useMemo` / `useCallback` / `React.memo` adalah **pengecualian, bukan kebiasaan**. Hampir semua tutorial, semua jawaban Stack Overflow, dan hampir semua saran AI masih mengajarkan cara lama. Baca [Bagian 4](P7-Materi-Mentor-Frontend-GlobalState.md) sepenuhnya sebelum menyiapkan.

---

## Isi Folder

```
P7/
├── P7-Materi-Mentor-Frontend-GlobalState.md   # Panduan mengajar lengkap
├── RUNDOWN.md                                 # Pegangan + urutan potong
│
└── demo/                                      # [mentor]
    ├── context/TemaContext.jsx                # Context + custom hook pembungkus
    ├── store/keranjang.js                     # Zustand + persist
    └── komponen/ContextVsZustand.jsx          # peragaan siapa yang re-render ⚠️
```

**Tugas tidak ada di folder ini.** P7 dan P8 digabung jadi **Tugas 4 — Production Ready**, dikumpulkan paling lambat satu minggu setelah P8. Detailnya di [`../tugas/`](../tugas/).

---

## Alur Mengajar

> Versi lengkap dengan gerakan per bagian, kalimat siap-ucap, dan urutan potong: **[RUNDOWN.md](RUNDOWN.md)**

| Menit | Bagian | File demo |
|:--:|---|---|
| 0–8 | Pembuka — props drilling di kode mereka | Tugas 3 peserta |
| 8–24 | Kapan butuh global state | — |
| 24–48 | **Context API** + batasnya | `ContextVsZustand.jsx` |
| 48–68 | **Zustand** + `persist` | `store/keranjang.js` |
| **68–88** | **React Compiler & Optimasi** ⚠️ | Profiler |
| 88–98 | Code Splitting & Lazy | — |
| 98–113 | Wawasan TanStack Query + race condition | Slow 3G |
| 113–120 | Penutup & Tugas 4 | `../tugas/` |

---

## Situasi Khusus P7: Dua Godaan Berlawanan

**Godaan pertama: memindahkan semua state ke global.** Begitu peserta kenal Context atau Zustand, mereka cenderung memindahkan semuanya ke sana — termasuk yang cuma dipakai satu komponen.

**Godaan kedua: mengoptimasi tanpa mengukur.** Begitu kata "performa" muncul, peserta akan menaburkan `useMemo` di mana-mana — pola yang sudah ditinggalkan.

**Keduanya diselesaikan dengan satu kalimat yang sama:**

> "Jangan pakai alat sebelum kalian bisa nunjukin masalahnya."

---

## Yang Sudah Mereka Punya

| Yang dipakai hari ini | Sudah dipelajari di |
|---|---|
| `{ children }` di Provider | P3 (children props) |
| Immutability di Zustand `set()` | P4 Bagian 2 |
| Custom hook pembungkus context | P5 Bagian 5 |
| State URL vs state lokal | P5 Bagian 4 |
| `persist` menggantikan `useLocalStorage` buatan sendiri | P5 Bagian 5 |
| `fallback` di Suspense = Loading state | P6 Bagian 3 |
| React DevTools | P4 Bagian 3 |

Yang benar-benar baru: **Context, Zustand, React Compiler, dan `lazy`.**

---

## Tiga Peragaan yang Menentukan

| Peragaan | Kenapa wajib |
|---|---|
| **Highlight updates** Context vs Zustand | Tanpa ini peserta menaruh keranjang di Context dan tidak tahu kenapa aplikasinya berat |
| **Profiler** sebelum optimasi | Prinsip "ukur dulu" — yang paling berharga dari seluruh pertemuan |
| **Race condition** dengan Slow 3G | Konsep yang sulit dijelaskan tapi mudah ditunjukkan |

---

## Tugas 4 — Setengahnya Bisa Malam Ini

Dikumpulkan **paling lambat satu minggu setelah P8**, sebelum fase Capstone.

| Sudah bisa setelah hari ini | Menunggu P8 |
|---|---|
| Global state (Context atau Zustand) | Autentikasi & protected route |
| Bertahan lewat LocalStorage (`persist`) | Environment variable |
| | Deploy + Lighthouse ≥ 90 |

---

## Checklist Persiapan

**H-3**
- [ ] Ingatkan Tugas 3 dikumpulkan sebelum hari ini
- [ ] Ingatkan peserta membawa project dalam keadaan jalan
- [ ] Baca [materi lengkap](P7-Materi-Mentor-Frontend-GlobalState.md), **terutama Bagian 4**

**H-1**
- [ ] **Pasang React Compiler dari nol di Vite** — paling cepat basi. Kalau berbeda, perbaiki dokumen dulu.
- [ ] Pasang `zustand`, jalankan seluruh `demo/`
- [ ] **Latih Highlight updates** sampai bedanya terlihat jelas di proyektor
- [ ] **Latih race condition** dengan Slow 3G — paling sulit diulang kalau belum dicoba
- [ ] Cari contoh props drilling di kode Tugas 3 peserta untuk pembuka

**Hari-H**
- [ ] React DevTools **Components dan Profiler** dua-duanya siap
- [ ] *Highlight updates* sudah aktif sebelum kelas mulai
- [ ] Throttling **Slow 3G** siap untuk race condition
