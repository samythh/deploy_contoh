# Kunci Jawaban — Pertemuan 1

> ⚠️ **UNTUK MENTOR SAJA.** Jangan bagikan folder ini ke peserta.
> Saat membagikan tugas, kirim isi folder [`../tugas/`](../tugas/) saja.

---

## Isi

| File | Keterangan |
|---|---|
| [index.html](index.html) | Contoh jawaban lengkap — tema kedai kopi |
| [style.css](style.css) | CSS lengkap + **catatan menilai** di bagian bawah |

Double-click `index.html` untuk melihat hasil jadinya. Bisa juga ditunjukkan ke peserta sebagai acuan "kira-kira seperti ini hasilnya" — asal file CSS-nya tidak ikut dibagikan.

---

## Ini Bukan Satu-Satunya Jawaban Benar

Selama tag semantic-nya masuk akal dan alasannya nyambung, jawaban yang berbeda tetap benar. Yang dinilai penalarannya, bukan kecocokan dengan kunci.

**Variasi yang tetap diterima:**

| Jawaban peserta | Sikap |
|---|---|
| `<section class="kartu">` alih-alih `<article>` | ✅ Terima — kartu produk memang kelompok konten bertema |
| `<div class="navbar">` berisi `<nav>` di dalamnya | ✅ Terima — kurang ideal, tapi `<nav>`-nya sudah benar |
| Flexbox + `flex-wrap` alih-alih Grid | ⚠️ Kurangi sedikit di "ketepatan alat", tapi kalau alasannya menyebut sadar memilih satu arah + wrap, itu justru menunjukkan paham |

---

## Dua Perangkap yang Sengaja Dipasang

**1. Pembungkus `.daftar-kartu` memang seharusnya tetap `div`.**

Elemen itu tidak punya makna — dia cuma kotak tempat Grid menempel. Peserta yang mengganti **semua** `div` jadi tag semantic, termasuk pembungkus ini, belum menangkap bahwa `div` punya tempatnya sendiri.

Bahas di kelas, jangan cuma dicoret. Ini persis kesalahan mentor baru nomor 3 di Lampiran D: membuat `div` terdengar haram.

**2. `.tombol` butuh `display: inline-block`.**

`<a>` itu elemen inline, dan elemen inline mengabaikan padding atas-bawah. Peserta akan menulis padding lalu bingung kenapa tombolnya tetap gepeng.

Ini kesempatan bagus mengajarkan DevTools → panel **Computed**: tunjukkan bahwa padding-nya memang tertulis, tapi tidak berefek.

---

## Yang Dikurangi Nilainya

| Temuan | Kurangi di |
|---|---|
| Semua pakai `<div>` walau class-nya rapi | Ketepatan semantic (35%) — ini inti materi hari ini |
| Nama class menjelaskan tampilan (`.merah`, `.kotak-kiri`) | Kerapian (15%) |
| Komentar cuma mengulang kode (`/* bikin flex */`) | Kualitas alasan (30%) — jangan diabaikan, bobotnya besar |
| Lebih dari satu `<h1>` atau `<main>` | Ketepatan semantic |

### Pertanyaan review untuk penamaan class

> "Kalau tiga bulan lagi bosnya minta warnanya diganti oranye, class `.merah` itu jadi namanya apa?"

Biarkan mereka menjawab sendiri. Pertanyaan ini lebih efektif daripada koreksi tertulis.

---

## Ingat Bobotnya

Alasan di komentar (**30%**) lebih besar daripada layout berfungsi (**20%**). Jawaban yang tampilannya rapi tapi tanpa penalaran nilainya lebih rendah daripada jawaban yang sedikit meleset tapi alasannya jelas.

Ini sejalan dengan prinsip di [CLAUDE.md](../../CLAUDE.md): tugas menulis itu pintu masuk, **tanya-jawab lisan di breakout room yang jadi kuncinya.**
