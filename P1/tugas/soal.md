# Tugas 1 — Landing Page Responsif

**Pertemuan 1** · Kelas Frontend Web Development — Metro Institute Season 2

---

## Yang Dikumpulkan

Dua file: `index.html` dan `style.css` yang sudah terisi. Kirim sesuai instruksi mentor di grup.

---

## Cara Mengerjakan

1. Buka `index.html` dan `style.css` di VS Code
2. Isi setiap bagian bertanda `TODO`
3. Simpan, lalu double-click `index.html` untuk melihat hasilnya
4. Uji di HP: `F12` → `Ctrl+Shift+M` → pilih iPhone atau Galaxy

Tidak perlu install apa pun selain VS Code dan browser.

---

## Yang Harus Dibuat

Satu halaman berisi empat bagian:

| # | Bagian | Isi | Alat |
|:--:|---|---|---|
| 1 | **Navbar** | Logo di kiri, menu di kanan | Flexbox |
| 2 | **Hero** | Judul besar, deskripsi, satu tombol | — |
| 3 | **Cards Grid** | Minimal **6 kartu**, responsif | CSS Grid |
| 4 | **Footer** | Teks hak cipta rata tengah | — |

Temanya bebas — toko, portofolio, komunitas, kafe, apa pun. Yang dinilai strukturnya, bukan idenya.

---

## Tiga Syarat Wajib

**1. Pakai tag semantic, bukan `div` untuk semuanya.**

Navbar, konten utama, kartu, dan footer harus memakai tag yang namanya menjelaskan perannya.

> Tapi ingat: `div` **tidak haram**. Pembungkus grid yang memang cuma kotak untuk menempelkan CSS itu justru tepat memakai `div`. Yang salah adalah memakai `div` untuk sesuatu yang jelas punya nama.

**2. Nama class menjelaskan fungsi, bukan tampilan.**

| Buruk | Baik |
|---|---|
| `.merah` | `.alert-error` |
| `.kotak-kiri` | `.sidebar` |
| `.tulisan-besar` | `.hero-judul` |

**3. Rapi di HP maupun laptop.**

Tidak ada teks yang terpotong, tidak ada elemen yang keluar layar, tidak perlu scroll ke samping.

---

## Deliverable Pembeda — Komentar Alasan

Ini yang membedakan tugas ini dari sekadar "bikin halaman".

**Di `style.css`** — tulis alasan untuk minimal **4 keputusan**:

```css
/* pakai Grid, bukan Flexbox, karena kartu perlu tersusun dua arah —
   ke samping DAN turun baris otomatis saat layar menyempit */
.daftar-kartu {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

**Di `index.html`** — tulis alasan untuk minimal **2 pilihan tag**:

```html
<!-- pakai <nav> bukan <div class="nav"> supaya screen reader
     bisa melompat langsung ke navigasi -->
<nav>...</nav>
```

### Komentar yang bagus vs yang kurang

| Contoh | Penilaian |
|---|---|
| `/* bikin flex */` | ❌ Cuma mengulang yang sudah terbaca dari kodenya |
| `/* flex supaya judul dan harga sejajar tengah walaupun panjang judulnya beda-beda */` | ✅ Menjelaskan keputusannya |

---

## Bonus (Opsional) — Konversi Satu Kartu ke Tailwind

Setelah bagian wajib selesai, **ubah SATU kartu saja** dari CSS manual jadi TailwindCSS. Satu, bukan seluruh halaman.

Tambahkan baris ini di `<head>`:

```html
<script src="https://cdn.tailwindcss.com"></script>
```

Lalu tulis komentar berisi **pemetaannya** — CSS mana jadi class Tailwind apa:

```html
<!-- konversi Tailwind:
     display: flex                  -> flex
     justify-content: space-between -> justify-between
     padding: 1.5rem                -> p-6
     border-radius: 8px             -> rounded-lg -->
<article class="flex justify-between items-center p-6 bg-white rounded-lg">
```

**Kenapa cuma satu kartu:** tujuannya bukan menguasai Tailwind sekarang, tapi membuktikan ke diri sendiri bahwa Tailwind cuma nama pendek untuk CSS yang sudah kalian tulis. Di Pertemuan 3 kalian memakainya dengan serius.

Bonus ini menambah nilai maksimal **10 poin**, dan hanya dihitung kalau bagian wajibnya sudah lengkap.

---

## Kriteria Penilaian

| Bobot | Aspek |
|:--:|---|
| **35%** | Ketepatan pemilihan tag semantic & alasannya |
| **30%** | Kualitas alasan di komentar |
| **20%** | Layout berfungsi & responsif di HP |
| **15%** | Kerapian (indentasi, penamaan class) |

Perhatikan: **tampilan cantik cuma 20%.** Yang paling besar adalah *kenapa* kalian memilih tag itu dan *kenapa* kalian memilih cara itu. Ini disengaja.

---

## Boleh Pakai AI?

**Boleh** — dengan syarat kalian paham tiap baris yang kalian tulis.

Jujur saja: AI bisa membuat halaman ini dalam 10 detik, lebih cepat dari siapa pun. Mentor tidak akan pura-pura sebaliknya.

Tapi pekerjaan kalian nanti bukan **mengetik** kode — itu memang sudah kalah cepat. Pekerjaan kalian adalah **memeriksa** kode, dan membaca kode itu lebih sulit daripada menulisnya. Perusahaan membayar kalian untuk bertanggung jawab kalau ada yang salah. AI tidak bisa dimintai tanggung jawab.

Saat review, mentor akan menunjuk satu baris secara acak dan menanyakan kenapa. Kalau tidak bisa menjawab, itu bukan kode kalian.

---

## Kalau Macet

Coba dulu 15 menit. Kalau masih buntu, bertanya di grup dengan format ini:

```
1. Yang saya coba      : ...
2. Yang saya harap     : ...
3. Yang malah terjadi  : ...
4. Yang sudah saya coba: ...
```

Sering kali jawabannya ketemu sendiri saat menulis baris ke-4.

### Tiga masalah yang paling sering muncul

**"`align-items: center` saya nggak ngaruh."**
Cek apakah induknya sudah `display: flex`. Tanpa itu, semua property Flexbox diabaikan diam-diam — tidak ada error, cuma tidak terjadi apa-apa.

**"Tombolnya nggak mau dikasih padding atas-bawah."**
`<a>` itu elemen *inline*. Padding tegaknya tidak berfungsi normal sampai `display`-nya diubah jadi `inline-block`.

**"Halamannya bisa di-scroll ke samping di HP."**
Biasanya ada elemen dengan lebar tetap dalam `px` yang lebih besar dari layar. Cari lewat DevTools → Elements, klik satu per satu sampai ketemu yang menonjol keluar.
