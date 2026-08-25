# Demo Live — Pertemuan 2

File-file di sini untuk **dipakai mentor saat mengajar**, bukan dibagikan ke peserta.

Urutan file mengikuti urutan bagian di [dokumen materi](../P2-Materi-Mentor-Frontend-JS.md).

---

## Isi & Pemetaan ke Materi

| File | Bagian di materi | Menit |
|---|---|:--:|
| [01-grid-responsif.html](01-grid-responsif.html) | Bagian 1 — CSS Grid & Mobile-First | 8–30 |
| [00-data-demo.js](00-data-demo.js) | Data + momen wow `console.table()` | — |
| [02-var-let-const.js](02-var-let-const.js) | Bagian 2 — Variabel Modern | 30–40 |
| [03-es6-fundamentals.js](03-es6-fundamentals.js) | Bagian 3 — ES6+ Fundamentals | 40–70 |
| [04-array-methods.js](04-array-methods.js) | Bagian 4 — Manipulasi Array | 70–100 |
| [05-modul/](05-modul/) | Bagian 5 — Import & Export | 100–110 |

---

## Cara Pakai di Kelas

Buka Console (`F12`), lalu **paste per blok** — jangan seluruh file sekaligus.

Alasannya bukan sekadar kerapian: beberapa blok memang sengaja dibuat error (misalnya deklarasi ulang `const`). Kalau di-paste bersamaan dengan blok sebelumnya, seluruh paste gagal dan peserta tidak sempat melihat perilaku yang mau ditunjukkan.

> Perbesar font console minimal 18pt sebelum kelas mulai — `Ctrl` + `+` di dalam DevTools.

### ⚠️ Jangan paste `00` lalu `03` mentah-mentah

Keduanya mendeklarasikan `const produk` — `03` sengaja dibuat mandiri supaya bisa dipakai tanpa membuka file lain. Kalau di-paste berurutan dalam satu sesi console:

```
SyntaxError: Identifier 'produk' has already been declared
```

dan seluruh paste gagal, persis di tengah kelas. **Lewati blok `const produk` di awal `03`** kalau `00` sudah di-paste.

Kalau terlanjur kena: tekan `F5`, console bersih lagi. Bisa juga dijadikan bahan mengajar dadakan — inilah yang barusan dijelaskan di Bagian 2, `const` menolak deklarasi ulang.

---

## Catatan per File

**`00-data-demo.js`** — Jangan tambah atau ubah isi array `produk`. Angka-angka di dokumen materi (`[8000000, 150000, 300000]`, "Mouse hilang karena stok 0", total 8.450.000) mengacu persis ke tiga item ini. Kalau datanya berubah, contoh di materi tidak lagi cocok dengan yang muncul di layar peserta.

**`02-var-let-const.js`** — Blok `const` yang error sengaja dikomentari. Buka komentarnya saat mau ditunjukkan, jalankan terpisah dari blok `var` di atasnya. File ini juga memuat jebakan `const` pada array — pertanyaan yang hampir pasti muncul dari peserta yang jeli, lengkap dengan analogi lemari yang dipaku.

**`04-array-methods.js`** — File terpenting, porsi waktu terbesar. Memuat versi `.reduce()` yang mencetak isi amplop tiap putaran; jalankan itu kalau ada yang bingung. Jangan memaksakan `reduce` sampai semua paham — lihat Lampiran D di dokumen materi.

**`05-modul/`** — Satu-satunya bagian yang butuh setup. ES module tidak jalan lewat `file://`, harus pakai **Live Server** di VS Code. Kalau tidak sempat menyiapkan, lewati saja dan sampaikan konsepnya lewat analogi lemari berlaci — materi P2 memang hanya menuntut idenya, bukan praktiknya.

---

## Terkait

- [Tugas 1 — Static Foundation](../../tugas/tugas-1-static-foundation/) — mencakup P1 **dan** P2
- [Sistem tugas & kebijakan AI](../../tugas/README.md)
