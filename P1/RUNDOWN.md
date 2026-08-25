# RUNDOWN P1 — Pegangan Saat Mengajar

Buka file ini di layar kedua saat kelas berlangsung. Isinya cuma **gerakan**, bukan penjelasan — penjelasan lengkapnya di [P1-Materi-Mentor-Frontend-HTML-CSS.md](P1-Materi-Mentor-Frontend-HTML-CSS.md).

---

## Tiga Aturan yang Mengatur Seluruh Urutan

**1. Langsung cara modern.** Jangan peragakan float, inline style, atau margin-tambalan. Cara lama cukup jadi **selingan** satu-dua kalimat sambil lewat — kalimatnya sudah disiapkan di bagian terakhir file ini.

**2. Shortcut adalah hadiah.** Emmet baru diberikan di akhir Bagian 1, Tailwind di Bagian 6 — dua-duanya *setelah* peserta mengerjakan manual.

**3. Lihat dulu, paham belakangan.** Untuk yang visual (grid `auto-fit`, Flexbox), peragakan hasilnya sebelum menjelaskan sintaksnya.

---

## Peta 120 Menit

| Menit | Bagian | File |
|:--:|---|---|
| 0–8 | Pembuka & peta program | — |
| 8–20 | Anatomi HTML + **kemenangan pertama** | `01-kerangka.html` |
| 20–33 | **Arsitektur Web** — client-server, HTTP, tab Network | — |
| 33–53 | **HTML5 Semantic & Aksesibilitas** | `02-semantic/` |
| 53–67 | CSS, Box Model & Flow Dokumen | `03-box-model.html` |
| 67–89 | **Flexbox** — porsi terbesar | `04-flexbox.html` |

| 89–102 | TailwindCSS via Play CDN | `05-tailwind.html` |
| 102–120 | Penutup, tugas & **Setup Git + PR** | `../tugas/` |

---

## 0–10 · Pembuka

**Gerakan:**
1. Tunjukkan hasil akhir program (web app yang tarik data API). *"Dalam 8 pertemuan, ini yang kalian bangun."*
2. Tunjuk navbar, kartu, tombol. *"Semua yang kelihatan ini HTML dan CSS."*
3. Analogi rumah: HTML = rangka, CSS = cat, JS = listrik.
4. Ukur kelas: siapa pernah ngoding? siapa sudah install VS Code? siapa belum pernah lihat HTML?

**Menit ke-8 — prioritas nomor satu Anda:**

Semua orang bikin `index.html`, ketik `<h1>Halo, saya [nama]</h1>`, save, double-click, lihat di browser.

> ⛔ **JANGAN LANJUT** sebelum semua berhasil. Peserta yang gagal di sini tertinggal 8 pertemuan. Membantunya lebih penting daripada mengejar materi.

**Kalimat penutup bagian:**
> "Selamat, kalian barusan bikin halaman web. Beneran. Kalau file ini di-upload ke internet, orang sedunia bisa buka."

---

## 10–20 · Anatomi HTML — `01-kerangka.html`

**Gerakan — urutannya: manual → rusak → hadiah**

1. Ketik kerangka HTML **manual** bersama peserta. Melelahkan, itu maksudnya.
2. Jelaskan `<head>` vs `<body>` — analogi amplop surat.
3. **Peragakan:** hapus `<meta charset>`, ketik "Ekonomi Indonesia — 2026" → karakter rusak.
4. **Peragakan:** pindahkan `<h1>` ke dalam `<head>` → teksnya hilang.
5. **Baru kasih Emmet:** *"Sekarang saya kasih hadiah. Ketik `!` lalu Tab."*

**Cek sebelum lanjut:** semua sudah punya file dengan kerangka lengkap.

---

## 20–40 · Semantic — `02-semantic/`

> Ini **satu-satunya** bagian yang masih memakai perbandingan cara lama. Batasi **2 menit**, dan bukan sebagai latihan.

**Gerakan:**

1. Buka `divsoup.html` **duluan**.
2. Tanya kelas: *"tanpa scroll ke atas, ada yang bisa bilang `</div>` mana yang nutup navigasi?"* Biarkan mereka mencoba sebentar — kesulitan itu **adalah** pesannya.
3. Buka `semantic.html` berdampingan. **Tampilannya identik.**
4. Tiga alasan semantic menang: screen reader bisa melompat · Google paham struktur · programmer lain langsung mengerti.
5. **Tutup dengan kapan `div` justru benar** — tunjukkan pembungkus grid di `semantic.html`.

> ⚠️ Jangan sampai peserta pulang mengira `div` haram. Mereka akan memakainya tiap hari di React.

**Cek sebelum lanjut:** peserta bisa menyebut minimal satu alasan kenapa `<nav>` lebih baik dari `<div class="nav">`.

---

## 40–58 · CSS & Box Model — `03-box-model.html`

**Gerakan:**

1. Langsung ajarkan `<link rel="stylesheet">`. **Jangan** peragakan tiga cara.
   → *selingan #1* (lihat daftar di bawah)
2. Selector: `p` · `.class` · `#id` · `nav a`. Tekankan `class` lebih sering dipakai.
3. **Penamaan class = fungsi, bukan tampilan.** `.alert-error` bukan `.merah`.
   Pancing dengan: *"tiga bulan lagi bos minta warnanya oranye. Class `.merah` itu namanya jadi apa?"*
4. Box model — **minta menebak dulu:** *"yang mana yang bikin kotaknya lebih gemuk, padding atau margin?"*
5. Buka DevTools → **Computed** → cek tebakan mereka.
6. Contoh 4–5: `content-box` vs `border-box` — kenapa `width: 180px` terukur 226px.

**Cek sebelum lanjut:** semua sudah bisa buka DevTools dan menemukan panel Computed.

---

## 58–85 · Flexbox — `04-flexbox.html`

> Porsi terbesar. Bangun bersama peserta, jangan ditunjukkan jadi.

**Gerakan — tujuh contoh berurutan:**

| Contoh | Yang ditunjukkan |
|:--:|---|
| 1 | `display: flex` — satu baris |
| 2 | `justify-content: center` — geser kiri-kanan |
| 3 | `justify-content: space-between` — dorong ke dua ujung |
| 4 | `align-items: center` — geser atas-bawah |
| 5 | Keduanya — pusat sempurna → **selingan #2** |
| 6 | `gap` vs margin → **selingan #3** |
| 7 | **Navbar lima baris** — penutup yang kuat |

**Analogi rak buku** (ulang beberapa kali):
> "`justify-content` geser kiri-kanan, `align-items` geser atas-bawah. Dua-duanya ditulis di **RAK**-nya, bukan di bukunya."

**Kesalahan nomor satu peserta:** lupa `display: flex` di induknya, lalu bingung kenapa `align-items` tidak ngaruh. Sebut ini duluan.

**Cek sebelum lanjut:** peserta bisa bikin navbar logo-kiri menu-kanan sendiri.

---

## 85–98 · Grid & Mobile-First — `05-grid-responsif.html`

**Gerakan — lihat dulu, jelaskan belakangan:**

1. Buka contoh 1, **langsung tarik-tarik lebar jendela** pelan-pelan di depan kelas. Kolom berubah 4→3→2→1 tanpa satu pun media query.
2. **Setelah mereka bereaksi**, baru jelaskan `repeat(auto-fit, minmax(250px, 1fr))`.
3. Flexbox vs Grid: *"Flexbox buat satu barisan — kayak orang antre. Grid buat kotak-kotak — kayak rak sepatu bersusun."*
4. Contoh 2: mobile-first. Analogi packing — mulai dari tas kecil, bukan koper besar.

**Cek sebelum lanjut:** peserta bisa jelaskan kenapa mulai dari HP, bukan desktop.

---

## 98–112 · TailwindCSS — `06-tailwind.html`

**Buka dengan mengakui keribetan tadi:**
> "Satu jam terakhir kalian nulis CSS manual dan mikir 'kok ribet banget'. Bagus — itu memang ribet. Sekarang saya kasih obatnya. Tapi saya kasih SETELAH kalian ngerasain sakitnya."

**Gerakan:**

1. Contoh 1 dan 2 berdampingan — kartu yang sama, hasil identik.
2. **Petakan tabel satu per satu di layar.** Ini bagian terpenting:
   `display: flex` → `flex` · `justify-content: space-between` → `justify-between` · `padding: 1.5rem` → `p-6`
   > "Nggak ada satu pun konsep baru. Semuanya CSS tadi, cuma dipendekin."
3. Contoh 3: grid responsif versi Tailwind.
4. **Contoh 4 — jangan dilewati.** Sebelas class dalam satu elemen. Sebut kelemahannya **duluan**, sebelum peserta menemukannya sendiri.
5. Sebut sekali: CDN ini cuma untuk belajar. Pemasangan benar di P3. Jangan jadi bahasan panjang.

---

## 112–120 · Penutup & Tugas

1. **Benang merah:** *"Semua hari ini temanya satu — kasih nama yang benar. `<nav>` menang karena namanya benar. `.alert-error` menang karena namanya benar."*
2. Bagikan isi folder `tugas/` (tiga file sekaligus).
3. **Umumkan bobotnya dan tekankan yang ini:**

   | Bobot | Aspek |
   |:--:|---|
   | 35% | Ketepatan tag semantic |
   | 30% | Kualitas alasan di komentar |
   | 20% | Layout berfungsi & responsif |
   | 15% | Kerapian |

4. **Kalimat soal AI** — jangan dilewatkan:
   > "Boleh pakai AI. Tapi di breakout room saya bakal tunjuk satu baris dan tanya kenapa. Kalau nggak bisa jawab, berarti itu bukan kode kalian."

---

## Kalimat Selingan Cara Lama — Siap Ucap

Sebut sambil lewat, **jangan buka file, jangan suruh mencoba.**

**#1 — Bagian 3, setelah `<link rel="stylesheet">`:**
> "Sebenarnya ada cara lain: gaya bisa ditulis nempel langsung di tiap elemen. Cuma masalahnya, kalau mau ganti satu warna, kalian harus edit 50 tempat satu-satu. Makanya orang naruh semuanya di satu file — ganti sekali, semua ikut."

**#2 — Bagian 4 contoh 5, saat pusat sempurna tercapai:**
> "Dua baris ini kelihatannya sepele ya. Buat info aja: sebelum ada Flexbox, naruh sesuatu pas di tengah secara tegak itu masalah legendaris — orang nulis belasan baris akal-akalan buat ini, dan sering nggak berhasil. Sekarang dua baris. Kalian lahir di waktu yang tepat."

**#3 — Bagian 4 contoh 6, soal `gap`:**
> "`gap` ngasih jarak cuma DI ANTARA — kayak jarak antar-orang yang lagi antre, nggak ada jarak sebelum orang pertama. Dulu orang pakai margin, terus harus nulis baris tambahan khusus buat anak terakhir. Sekarang nggak perlu."

---

## Kalau Waktu Tidak Cukup

Potong dari **belakang**, urutannya:

| Urutan potong | Yang dipotong | Ganti dengan |
|:--:|---|---|
| 1 | **Bagian 6 (Tailwind)** | Tunjukkan contoh 1–2 saja, bilang praktik penuhnya di P3 |
| 2 | Bagian 5 contoh 2 (media query manual) | Contoh 1 sudah cukup untuk tugas |
| 3 | Bagian 3 contoh 4–5 (`content-box`/`border-box`) | Simpan jadi bahan P2 |

> ⛔ **JANGAN PERNAH DIPOTONG:** Bagian 2 (semantic) dan Bagian 4 (Flexbox). Dua ini yang wajib nempel — semua pertemuan berikutnya bergantung padanya.

---

## Tiga Kesalahan yang Paling Gampang Terjadi

**1. Terburu-buru di 20 menit pertama karena "HTML kan gampang".**
Bagi peserta yang belum pernah ngoding, mengetik `<h1>Halo</h1>` tanpa typo itu pencapaian nyata. Yang tertinggal di sini tidak akan menyusul.

**2. Memberi Emmet atau Tailwind terlalu awal.**
Peserta jadi hafal mantra tanpa tahu isinya, dan tidak punya pegangan saat hasilnya melenceng.

**3. Membuat `<div>` terdengar haram.**
Selalu tutup Bagian 2 dengan kapan `div` justru tepat.
