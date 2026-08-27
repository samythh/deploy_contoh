# Demo Live — Pertemuan 8

File di sini untuk **dipakai mentor saat mengajar**.

---

## Isi & Pemetaan

| File | Yang diajarkan | Bagian |
|---|---|---|
| [komponen/TigaKejujuran.jsx](komponen/TigaKejujuran.jsx) | **Tiga peragaan kejujuran** ⚠️ | 1, 2, 3 |
| [auth/AuthContext.jsx](auth/AuthContext.jsx) | Login, logout, `loading` | Bagian 1 |
| [auth/ProtectedRoute.jsx](auth/ProtectedRoute.jsx) | Protected Route + kenapa `loading` wajib | Bagian 2 |
| [.env.example](.env.example) | Dua aturan Vite + kejujuran ketiga | Bagian 3 |
| [contoh-test/](contoh-test/) | Contoh test — **dilihat, tidak ditulis** | Bagian 7 |

---

## Tiga Peragaan Kejujuran — Total 4 Menit

⛔ **Jangan dilewati.** Akibat melewatinya tidak terlihat di kelas — terlihatnya di tempat kerja mereka.

| # | Peragaan | Caranya | Waktu |
|:--:|---|---|:--:|
| 1 | Token bisa dibaca | Console → `localStorage.getItem("token")` | 30 dtk |
| 2 | Protected Route bukan keamanan | Salin URL API dari Network → buka tab baru tanpa login | 1 mnt |
| 3 | Env var ikut terkirim | `npm run build` → cari nilainya di `dist/assets/*.js` | 2 mnt |

[TigaKejujuran.jsx](komponen/TigaKejujuran.jsx) mengumpulkan ketiganya dalam satu halaman, lengkap dengan kalimat siap-ucap di komentarnya.

---

## Dua Hal yang Pasti Jadi Bug Kalau Tidak Disebut

**1. `loading` wajib dicek duluan di Protected Route.**
Tanpa itu, pengguna yang **sudah login** dilempar ke halaman login tiap refresh — karena token belum sempat dibaca.
> "Mereka refresh, keluar sendiri. Refresh lagi, keluar lagi. Kelihatannya kayak aplikasi kalian rusak."

**2. Environment variable di Vercel paling sering dilupakan.**
Aplikasi berhasil di-deploy, tampilan muncul, **data kosong** — karena `.env.local` tidak ikut ter-push.

---

## Kenapa AuthContext Pakai Context, Bukan Zustand

Konsisten dengan aturan yang diajarkan di P7: **siapa yang login itu data yang jarang berubah** — sekali login, sekali logout per sesi. Itu persis kriteria Context.

Sebut ini di kelas. Peserta yang baru kenal Zustand cenderung memakainya untuk segalanya.

---

## Sebelum Kelas

- [ ] **Deploy satu aplikasi contoh ke Vercel sampai selesai**
- [ ] Latih tiga peragaan kejujuran sampai lancar
- [ ] Uji API auth — `https://dummyjson.com/auth/login`
- [ ] Siapkan repositori latihan dengan **dua cabang bentrok**
- [ ] Jalankan Lighthouse pada aplikasi contoh, catat temuannya

---

## Terkait

- [Materi lengkap](../P8-Materi-Mentor-Frontend-Auth-Deploy.md)
- [RUNDOWN](../RUNDOWN.md)
- [Tugas 4 — Production Ready](../../tugas/)
