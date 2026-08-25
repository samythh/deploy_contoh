# Tugas 1 — Static Foundation

**Materi Pertemuan 1 & 2** · Dikumpulkan **sebelum Pertemuan 3** lewat Pull Request

---

## Yang Dibangun

Halaman utama produk kalian dalam bentuk **web statis yang responsif**, lalu dibuat **dinamis dengan JavaScript**.

Ini tahap pertama dari empat. Produk yang kalian mulai di sini akan terus tumbuh sampai akhir kelas — di Tugas 2 dibangun ulang dengan React, di Tugas 3 datanya dari server, di Tugas 4 punya login dan terbit di internet.

> **Pilih tema kalian sekarang dan jangan berganti.** Syaratnya satu: datanya berbentuk **daftar item yang punya detail**. Contoh: katalog kuliner daerah, direktori UMKM, katalog buku, destinasi wisata.

---

## Ketentuan

### Dari Pertemuan 1 — Struktur & Tampilan

**1. Struktur HTML semantik, tanpa div-soup.**

Gunakan `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` sesuai maknanya.

> `div` **tidak haram**. Pembungkus yang memang cuma kotak untuk menempelkan CSS justru tepat memakai `div`. Yang salah adalah memakai `div` untuk sesuatu yang jelas punya nama.

**2. Layout: Flexbox untuk navigasi, CSS Grid untuk daftar item.**

Dua alat berbeda untuk dua pekerjaan berbeda. Kalau tertukar, jelaskan alasannya di komentar.

**3. Responsif dengan pendekatan mobile-first, minimal dua breakpoint.**

Tulis tampilan HP lebih dulu, baru naik ke layar lebih besar. Kalau memakai Tailwind: class tanpa prefiks untuk HP, `md:` dan `lg:` untuk layar yang lebih lebar.

### Dari Pertemuan 2 — Data & Logika

**4. Data item disimpan dalam *array of objects* di file JavaScript terpisah.**

Bukan diketik manual satu per satu di HTML.

```javascript
// data.js
const produk = [
  { nama: "Rendang", kategori: "Makanan", harga: 35000 },
  // minimal 6 item
];
```

**5. Daftar item dirender ke DOM menggunakan `.map()`.**

HTML kalian hanya berisi wadah kosong. Kartunya dibuat oleh JavaScript.

**6. Minimal satu fitur filter interaktif.**

Berdasarkan kategori, rentang harga, atau atribut lain — bebas.

---

## Nama Class: Fungsi, Bukan Tampilan

| Buruk | Baik |
|---|---|
| `.merah` | `.alert-error` |
| `.kotak-kiri` | `.sidebar` |
| `.tulisan-besar` | `.hero-judul` |

> Kalau tiga bulan lagi warnanya diminta jadi oranye, class bernama `.merah` jadi salah nama. Class bernama `.alert-error` tetap benar.

---

## Deliverable Pembeda — Komentar Alasan

Ini yang membedakan tugas ini dari sekadar "bikin halaman".

**Di `style.css`** — alasan untuk minimal **4 keputusan**:

```css
/* pakai Grid, bukan Flexbox, karena kartu perlu tersusun dua arah —
   ke samping DAN turun baris otomatis saat layar menyempit */
.daftar-kartu {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

**Di `index.html`** — alasan untuk minimal **2 pilihan tag**:

```html
<!-- pakai <nav> bukan <div class="nav"> supaya screen reader
     bisa melompat langsung ke navigasi -->
<nav>...</nav>
```

**Di `script.js`** — alasan untuk minimal **2 pilihan method**:

```javascript
// pakai .filter() karena kita MEMBUANG sebagian item berdasarkan syarat,
// bukan mengubah tiap item
const hasil = produk.filter(p => p.kategori === pilihan);
```

| Contoh komentar | Penilaian |
|---|---|
| `/* bikin flex */` | ❌ Cuma mengulang yang sudah terbaca dari kodenya |
| `/* flex supaya judul dan harga sejajar tengah walaupun panjang judulnya beda */` | ✅ Menjelaskan keputusannya |

---

## Cara Mengumpulkan — Pull Request

Kalau belum punya repositori sendiri: buka repositori template kelas → tombol **Use this template** → **Create a new repository** → tambahkan mentor sebagai **collaborator** di Settings → Collaborators.

Lalu:

```bash
git checkout -b tugas1-nama-anda
git add .
git commit -m "feat: halaman statis tugas 1"
git push -u origin tugas1-nama-anda
```

Lalu di GitHub: **Compare & pull request** → isi judul → **Create pull request**.

> Repositori ini dipakai sampai akhir kelas. Tugas 2 nanti dikerjakan di **repositori yang sama**, bukan bikin repo baru.

> Macet di Git? Boleh pakai **GitHub Desktop** dulu. Yang penting tugasnya masuk — perintah CLI-nya diperdalam di Pertemuan 8.

---

## Kriteria Penilaian

| Bobot | Aspek |
|:--:|---|
| **30%** | Ketepatan pemilihan tag semantik & alasannya |
| **25%** | Kebenaran alur *data → transformasi → tampilan* |
| **25%** | Kualitas alasan di komentar |
| **20%** | Kerapian layout responsif di HP maupun laptop |

Perhatikan: **alasan (25%) berbobot sama dengan kebenaran alur data.** Ini disengaja.

---

## Boleh Pakai AI?

**Boleh** — dengan syarat kalian paham tiap baris yang dikumpulkan.

Jujur saja: AI bisa membuat halaman ini dalam 10 detik, lebih cepat dari siapa pun. Mentor tidak akan pura-pura sebaliknya.

Tapi pekerjaan kalian nanti bukan **mengetik** kode — itu memang sudah kalah cepat. Pekerjaan kalian adalah **memeriksa** kode, dan membaca kode lebih sulit daripada menulisnya. Perusahaan membayar kalian untuk bertanggung jawab kalau ada yang salah; AI tidak bisa dimintai tanggung jawab.

**Saat review, mentor menunjuk satu baris secara acak dan menanyakan kenapa.** Kode yang tidak dapat dijelaskan penulisnya dinilai nol — bukan karena memakai AI, melainkan karena tidak ada pemahaman.

Menemukan dan memperbaiki kesalahan pada kode hasil AI justru **menambah nilai**.

---

## Kalau Macet

Coba dulu 15 menit. Kalau masih buntu, bertanya di grup dengan format ini:

```
1. Yang saya coba      : ...
2. Yang saya harap     : ...
3. Yang malah terjadi  : ... (+ pesan error kalau ada)
4. Yang sudah saya coba: ...
```

Sering kali jawabannya ketemu sendiri saat menulis baris ke-4.

### Empat masalah yang paling sering muncul

**"`align-items: center` saya nggak ngaruh."**
Cek apakah induknya sudah `display: flex`. Tanpa itu, semua property Flexbox diabaikan diam-diam — tidak ada error, cuma tidak terjadi apa-apa.

**"Tombolnya nggak mau dikasih padding atas-bawah."**
`<a>` itu elemen *inline*. Padding tegaknya tidak berfungsi normal sampai `display`-nya jadi `inline-block`.

**"Kartunya nggak muncul sama sekali."**
Buka Console (`F12`). Biasanya salah satu dari tiga: nama class di `querySelector` tidak cocok, `<script>` dipanggil sebelum elemennya ada di HTML, atau lupa `.join("")` setelah `.map()` sehingga muncul koma di antara kartu.

**"Halamannya bisa di-scroll ke samping di HP."**
Biasanya ada elemen dengan lebar tetap dalam `px` yang lebih besar dari layar. Cari lewat DevTools → Elements.
