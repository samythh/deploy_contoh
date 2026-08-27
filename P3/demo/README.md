# Demo Live — Pertemuan 3

File di sini untuk **dipakai mentor saat mengajar**, bukan dibagikan ke peserta.

Berbeda dari P1 dan P2, sebagian besar demo hari ini **tidak bisa di-double-click** — butuh project Vite yang jalan.

---

## Isi & Pemetaan ke Materi

| File | Cara pakai | Bagian | Menit |
|---|---|---|:--:|
| [01-kenapa-react.html](01-kenapa-react.html) | Double-click | Bagian 1 — Kenapa React Ada | 8–20 |
| [komponen/](komponen/) | Salin ke `src/` project Vite | Bagian 3–6 | 36–114 |

---

## `01-kenapa-react.html` — satu-satunya yang berdiri sendiri

Sengaja memakai cara P2 (`innerHTML`), **bukan** React. Tujuannya memperlihatkan cacatnya sebelum obatnya diperkenalkan.

**Peragaan 60 detik:** ketik sesuatu di kotak "Catatan" salah satu kartu → klik tombol filter → **ketikannya hilang**.

Lalu tanya kelas: *"menurut kalian kenapa ketikannya hilang?"* Biarkan menebak sebentar sebelum menunjukkan baris `innerHTML`.

> Ini peragaan pembuka yang menentukan. Peserta yang tidak melihat masalahnya akan menganggap React cuma sintaks ribet tanpa alasan.

---

## `komponen/` — bahan Bagian 3 sampai 6

| File | Yang diajarkan |
|---|---|
| `data.js` | Array of objects — **perhatikan `id`**, dipakai sebagai `key` |
| `Navbar.jsx` | Komponen pertama. Sengaja paling sederhana: belum ada props |
| `ProductCard.jsx` | **Props** + ternary + short-circuit `&&` |
| `Badge.jsx` | **Default props** |
| `Footer.jsx` | **Children props** |
| `App.jsx` | Perekat semuanya — list rendering + `key` |
| `KeyJebakan.jsx` | **Peragaan `key={index}` yang rusak** |

**Cara pakai:** ini **jaring pengaman**, bukan bahan salin-tempel. Bangun komponen bersama peserta di kelas; file-file ini untuk dibuka kalau live coding tersendat, atau untuk peserta yang tertinggal.

Semua file sudah berisi komentar **CARA SAMPAIKAN** siap ucap.

---

## Dua Momen yang Menentukan

**1. Peragaan `key={index}`** ([komponen/KeyJebakan.jsx](komponen/KeyJebakan.jsx))

Ketik di baris kedua → hapus baris pertama → ketikannya pindah ke barang yang salah. Lalu tukar ke `key={item.id}` dan ulangi — sekarang benar.

> ⛔ **Jangan diganti dengan sekadar menyebut aturannya.** Kalau `key` cuma diajarkan sebagai "biar nggak ada warning", semua peserta akan pakai `key={index}`, warningnya hilang, dan masalahnya baru meledak di Tugas 2 saat ada penghapusan item.

**2. Hot Module Replacement**

Ubah warna di `ProductCard.jsx`, simpan, **jangan refresh**. Tampilan berubah seketika.

> "Nggak usah refresh, nggak usah pencet F5. Kalian simpan, dia langsung berubah."

---

## Sebelum Kelas — Wajib

- [ ] **Jalankan seluruh setup Bagian 2 dari nol di folder kosong.** Perintah Vite & Tailwind berubah cukup sering; kalau ada yang berbeda, perbaiki dokumen materi dulu, jangan improvisasi di depan kelas.
- [ ] Siapkan **project jadi** di flashdisk/ZIP sebagai jalan darurat
- [ ] Siapkan `node_modules` di flashdisk — untuk peserta dengan WiFi lemah
- [ ] Latih peragaan `KeyJebakan` sampai lancar
- [ ] Siapkan kode P2 peserta untuk ditampilkan di pembuka
- [ ] Terminal + editor + browser Console terbuka berdampingan, font minimal 18pt

---

## Terkait

- [Materi lengkap](../P3-Materi-Mentor-Frontend-React.md)
- [RUNDOWN](../RUNDOWN.md) — pegangan saat mengajar
- [Tugas 2 — React Migration](../../tugas/) — mencakup P3 **dan** P4
