# Pertemuan 8 — Materi Lanjutan & Final Progress
### Authentication Flow, Production Build & Capstone Sync

**Durasi:** 120 menit · **Jadwal:** November W4 (22–30 Nov 2026)
**Topik:** Auth JWT, Protected Route, Environment Variables, Deploy, Lighthouse, Git Collaboration, wawasan Testing

> ⚠️ **P8 PUNYA TIGA MOMEN KEJUJURAN YANG WAJIB DISAMPAIKAN.** Ketiganya berbunyi sama: *"yang barusan kalian bikin itu bukan keamanan."*
>
> Kalau ketiganya dilewati, peserta lulus dengan keyakinan yang salah tentang apa yang bisa dilindungi frontend — dan membawanya ke tempat kerja. Akibatnya **tidak terlihat di kelas**.

---

## Isi Folder

```
P8/
├── P8-Materi-Mentor-Frontend-Auth-Deploy.md   # Panduan mengajar lengkap
├── RUNDOWN.md                                 # Pegangan + urutan potong
│
└── demo/                                      # [mentor]
    ├── .env.example                           # + dua aturan Vite
    ├── auth/
    │   ├── AuthContext.jsx                    # login, logout, loading
    │   └── ProtectedRoute.jsx                 # + kenapa loading wajib
    ├── komponen/TigaKejujuran.jsx             # tiga peragaan dalam satu halaman ⚠️
    └── contoh-test/                           # dilihat, tidak ditulis
```

**Tugas tidak ada di folder ini.** P7 dan P8 digabung jadi **Tugas 4 — Production Ready**. Detailnya di [`../tugas/`](../tugas/).

---

## Alur Mengajar

> Versi lengkap dengan gerakan per bagian dan urutan potong: **[RUNDOWN.md](RUNDOWN.md)**

| Menit | Bagian | File demo |
|:--:|---|---|
| 0–8 | Pembuka & peta akhir program | aplikasi Tugas 3 peserta |
| **8–30** | **Auth + kejujuran XSS** ⚠️ | `auth/AuthContext.jsx` |
| **30–43** | **Protected Route** ⚠️ | `auth/ProtectedRoute.jsx` |
| **43–54** | **Environment Variables** ⚠️ | `.env.example` |
| 54–72 | Build & Deploy ke Vercel | terminal |
| 72–84 | Audit Lighthouse | DevTools |
| 84–96 | Git Collaboration | terminal |
| 96–111 | Wawasan Testing | `contoh-test/` |
| 111–120 | Penutup & kesiapan Capstone | `../tugas/` |

---

## Prinsip Besar: Frontend Tidak Bisa Menyimpan Rahasia

Satu kalimat yang menyatukan tiga bagian pertama:

| Yang dibuat | Kenapa bukan keamanan |
|---|---|
| Token di LocalStorage | Bisa dibaca script mana pun di halaman itu |
| Protected Route | Cuma menyembunyikan tampilan — data tetap bisa diminta |
| Environment variable | Ikut terkirim ke browser dalam teks biasa |

Ketiganya **bukan cacat yang bisa diperbaiki** — itu sifat kode yang berjalan di komputer orang lain.

> "Semua yang kalian kirim ke browser bisa dibaca pengguna. Tugas kalian bukan **menyembunyikan** — tapi tahu **apa yang boleh ada di sana** dan apa yang harus tetap di server."

---

## Situasi Khusus P8

**Risikonya bukan kehabisan waktu, tapi melompat terlalu cepat.** Sembilan bagian, tidak ada yang butuh 25 menit.

**Apa yang mereka bawa pulang hari ini akan mereka pakai di tempat kerja** — bukan sintaksnya, tapi keyakinannya.

Kalau harus memotong: potong **deploy** atau **testing**, jangan tiga momen kejujuran.

---

## Lighthouse Menutup Lingkaran dari P1

Syarat Tugas 4: **Accessibility ≥ 90.** Lima temuan yang hampir pasti muncul semuanya materi Pertemuan 1:

| Temuan | Diajarkan di |
|---|---|
| `<html>` tanpa `lang` | P1 Bagian 1 |
| Gambar tanpa `alt` | P1 Bagian 3 |
| Tombol tanpa nama terbaca | P1 Bagian 3 |
| Kontras warna kurang | P1 Bagian 4 |
| Urutan heading melompat | P1 Bagian 3 |

> "Waktu itu sebagian dari kalian mikir 'ngapain sih ribet nulis `lang="id"`'. Delapan minggu kemudian, itu yang jadi angka di nilai tugas kalian."

---

## Tugas 4 — Lengkap Setelah Hari Ini

Dikumpulkan **paling lambat satu minggu setelah P8**, sebelum Capstone.

| Syarat | Diajarkan di |
|---|---|
| Global state + `persist` | P7 |
| Alur autentikasi lengkap | P8 Bagian 1 |
| Protected Route | P8 Bagian 2 |
| API lewat environment variable | P8 Bagian 3 |
| Deploy ke Vercel/Netlify | P8 Bagian 4 |
| **Lighthouse Accessibility ≥ 90** | P8 Bagian 5 |

---

## Checklist Persiapan

**H-3**
- [ ] **Minta peserta membuat akun Vercel/Netlify** dan menghubungkannya ke GitHub — jangan sampai dikerjakan hari-H
- [ ] Siapkan **API auth** untuk kelas — `https://dummyjson.com/auth/login` bisa dipakai, uji dari nol
- [ ] Baca [materi lengkap](P8-Materi-Mentor-Frontend-Auth-Deploy.md), **terutama tiga momen kejujuran**

**H-1**
- [ ] **Deploy satu aplikasi contoh ke Vercel sampai selesai** — supaya tahu persis langkah dan kendalanya
- [ ] Latih tiga peragaan kejujuran sampai lancar
- [ ] Jalankan Lighthouse pada aplikasi contoh, catat temuannya
- [ ] **Siapkan repositori latihan dengan dua cabang bentrok** untuk peragaan merge conflict

**Hari-H**
- [ ] DevTools siap: Console, Network, Lighthouse
- [ ] Akun Vercel sudah login di browser yang dipakai mengajar
- [ ] **Sisakan waktu untuk pertanyaan Capstone** — ini pertemuan terakhir mereka bersama Anda
