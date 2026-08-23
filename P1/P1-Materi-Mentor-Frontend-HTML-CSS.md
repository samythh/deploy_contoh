# PERTEMUAN 1 — HTML5 Semantic & CSS Layout
### Panduan Materi & Cara Penyampaian untuk Mentor
**Metro Institute Season 2 — Divisi Frontend**
Durasi: 120 menit | Topik: Struktur Dokumen, Semantic Tags, CSS Fundamentals, Box Model, Flexbox, Grid, Mobile-First, TailwindCSS

> **CATATAN VERSI:** Sejak revisi 23 Agustus 2026, HTML/CSS naik dari Pertemuan 2 ke Pertemuan 1, bertukar dengan JavaScript. Alasannya: peserta butuh umpan balik visual di pertemuan pertama, saat mereka paling gampang mundur. **TailwindCSS diajarkan di akhir pertemuan ini** (Bagian 6), setelah peserta menulis CSS manual — sebagai "hadiah", bukan jalan pintas. Lihat `docs/Catatan-Perubahan.md` untuk konsekuensi lengkapnya.

---

## Cara Membaca Dokumen Ini

Setiap bagian punya tiga lapis:

| Lapis | Isi |
|---|---|
| **APA** | Faktanya. Ini yang biasanya diajarkan orang. |
| **BANDINGKAN** | Alternatif yang ada, dan apa bedanya. |
| **KENAPA** | Alasan kita memilih satu di antaranya. Ini yang membuat peserta paham, bukan cuma hafal. |

Ditambah blok **CARA SAMPAIKAN** — kalimat dan analogi yang bisa Anda pakai langsung di kelas.

---

## Situasi Khusus P1 Ini: Pertemuan Pertama, Taruhannya Motivasi

Ini pertemuan pertama. Sebagian peserta belum pernah menulis satu baris kode pun, dan sebagian sedang diam-diam bertanya apakah mereka salah masuk kelas.

Keunggulan besar P1 versi HTML/CSS ini: **peserta bisa melihat hasil kerjanya dalam 10 menit pertama.** Ketik `<h1>Halo</h1>`, simpan, refresh — tulisannya muncul. Rasa "saya bisa bikin sesuatu" itu yang menahan mereka bertahan sampai materi sulit di P2 dan P6.

**Manfaatkan itu habis-habisan.** Jangan menunda momen pertama mereka melihat hasil di layar. Bahkan sebelum menjelaskan apa itu HTML, minta mereka mengetik satu baris dan membukanya di browser.

> **CARA SAMPAIKAN — Analogi Rumah:**
> "Bikin website itu kayak bangun rumah, dan ada tiga tukang.
> **HTML** itu tukang rangka — dia yang bikin tembok, pintu, jendela. Kokoh tapi jelek.
> **CSS** itu tukang cat dan interior — dia yang bikin rumahnya enak dilihat.
> **JavaScript** itu tukang listrik — dia yang bikin lampunya bisa nyala, pintunya bisa otomatis.
> Hari ini kita jadi tukang rangka dan tukang cat. Tukang listriknya minggu depan."

Analogi ini akan dipakai ulang di P2 dan P3. Tanam sekarang dengan benar.

---

## Prinsip Besar yang Anda Tanamkan Hari Ini

P1 bukan tentang menghafal daftar tag HTML. P1 adalah tentang menanamkan satu kebiasaan: **memberi nama yang benar pada apa yang kita buat.**

Hampir semua yang diajarkan hari ini bermuara ke sana. `<nav>` bukan `<div>`, karena navigasi punya nama. `.alert-error` bukan `.merah`, karena yang penting fungsinya bukan warnanya. Indentasi rapi, karena itu cermin struktur.

Peserta yang lulus P1 dengan kebiasaan ini akan menulis kode yang bisa dibaca orang lain — dan itu yang dibayar perusahaan.

Kalimat yang layak Anda ulang hari ini:

> "Komputer nggak peduli kalian pakai `div` atau `nav` — dua-duanya jalan. Yang peduli itu manusia: teman setim kalian, screen reader, mesin pencari, dan kalian sendiri tiga bulan lagi."

---

# BAGIAN 0 — Pembuka & Peta Program (0–10 menit)

## Yang Anda lakukan

1. Tunjukkan **hasil akhir program** — web app yang menarik data dari API dan tampil rapi di HP. "Dalam 8 pertemuan, ini yang kalian bangun."
2. Tunjuk bagian-bagian yang kelihatan: navbar, kartu, tombol. "Semua yang kalian lihat ini HTML dan CSS. Itu yang kita mulai hari ini."
3. Jelaskan urutan tiga tukang (rangka → cat → listrik), pakai analogi rumah di atas.

### Ukur kelas Anda

Tiga pertanyaan cepat, catat jawabannya — ini menentukan kecepatan Anda 8 pertemuan ke depan:

- Siapa yang pernah menulis kode apa pun (bahasa apa saja)?
- Siapa yang sudah pernah install VS Code?
- Siapa yang belum pernah lihat kode HTML sama sekali?

### Menit ke-8: kemenangan pertama

Jangan tunggu sampai Bagian 2. Sebelum teori apa pun, minta semua orang:

1. Buka VS Code, buat file `index.html`
2. Ketik satu baris: `<h1>Halo, saya [nama]</h1>`
3. Simpan, klik dua kali file-nya, lihat di browser

**Pastikan semua orang berhasil sampai sini sebelum lanjut.** Peserta yang gagal di menit ke-8 akan tertinggal sepanjang 8 pertemuan. Kalau ada yang macet, itu prioritas nomor satu Anda — bukan menyelesaikan materi.

> **CARA SAMPAIKAN:**
> "Selamat, kalian barusan bikin halaman web. Beneran. Kalau file ini di-upload ke internet, orang sedunia bisa buka. Sisanya cuma nambahin isi."

---

# BAGIAN 1 — Anatomi Dokumen HTML (10–22 menit)

## APA

Setiap halaman web punya kerangka baku yang selalu sama:

```html
<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Judul di tab browser</title>
  </head>
  <body>
    <!-- semua yang kelihatan ada di sini -->
  </body>
</html>
```

## BANDINGKAN — `<head>` vs `<body>`

Ini pembagian pertama yang harus nempel, karena pemula sering menaruh konten di `<head>` lalu bingung kenapa tidak muncul.

| | `<head>` | `<body>` |
|---|---|---|
| Isinya | Keterangan tentang halaman | Isi halaman |
| Kelihatan? | Tidak | Ya |
| Contoh | judul tab, charset, link CSS | teks, gambar, tombol |

> **CARA SAMPAIKAN — Analogi Amplop Surat:**
> "`<head>` itu bagian luar amplop — nama penerima, alamat, perangko. Penting banget, tapi bukan isi suratnya.
> `<body>` itu surat di dalamnya. Yang dibaca orang.
> Makanya kalau kalian nulis teks di `<head>`, dia nggak muncul. Bukan error — memang bukan tempatnya."

## KENAPA tiga baris di `<head>` itu wajib

Jangan biarkan peserta menyalin ini sebagai mantra. Tiap baris punya alasan yang bisa ditunjukkan:

**`<html lang="id">`** — memberi tahu browser dan screen reader bahwa halaman ini berbahasa Indonesia. Tanpa ini, screen reader akan membaca teks Indonesia dengan pelafalan Inggris.

**`<meta charset="UTF-8">`** — menentukan cara browser membaca huruf. Hapus ini, lalu tulis "Ekonomi Indonesia — 2026" dan tunjukkan hasilnya: tanda `—` berubah jadi karakter aneh. **Tunjukkan, jangan cuma bilang.**

**`<meta name="viewport" ...>`** — tanpa ini, HP akan menampilkan halaman versi desktop yang dikecilkan sampai tidak terbaca. Baris ini yang membuat semua materi responsif nanti berfungsi.

> **CARA SAMPAIKAN untuk viewport:**
> "Baris ini kelihatan nggak penting sampai kalian buka di HP. Tanpa dia, HP mikir kalian bikin website buat layar komputer, terus dia kecilin semuanya sampai tulisannya sebesar semut. Baris ini bilang ke HP: 'pakai lebar layarmu sendiri, jangan dikecilin.'"

## Praktik: Emmet — tapi nanti

Peserta akan menemukan sendiri bahwa mengetik kerangka ini melelahkan. Bagus — biarkan mereka merasakannya dulu.

**Berikan shortcut Emmet (`!` lalu Tab) di akhir Bagian 1, bukan di awal.** Ini prinsip yang berlaku sepanjang program: shortcut diberikan setelah paham manual, sebagai hadiah, bukan sebagai jalan pintas.

> **CARA SAMPAIKAN saat memberi Emmet:**
> "Oke, kalian udah ngetik itu manual sekali. Sekarang saya kasih hadiah. Ketik tanda seru, terus Tab. Lihat.
> Saya kasih ini SETELAH kalian ngetik manual, bukan sebelumnya — soalnya kalau langsung dikasih, kalian nggak bakal tahu itu ngetik apa. Sekarang kalian tahu."

---

# BAGIAN 2 — HTML5 Semantic (22–45 menit)
> Inti pedagogis P1. Beri porsi penuh — ini contoh terbaik dari "kenapa", bukan sekadar "apa".

## APA

HTML5 punya tag yang namanya menjelaskan perannya:

```html
<header>   <!-- kepala halaman -->
<nav>      <!-- navigasi -->
<main>     <!-- konten utama, cuma boleh satu -->
<section>  <!-- kelompok konten yang punya tema -->
<article>  <!-- konten yang berdiri sendiri, misal satu berita -->
<aside>    <!-- konten sampingan -->
<footer>   <!-- kaki halaman -->
```

## BANDINGKAN — Dua halaman yang tampilannya identik

Tulis keduanya berdampingan di layar. Ini perbandingan terpenting hari ini.

```html
<!-- CARA LAMA — div soup -->
<div class="header">
  <div class="nav">
    <div class="nav-item">Beranda</div>
  </div>
</div>
<div class="main">
  <div class="card">...</div>
</div>
<div class="footer">...</div>
```

```html
<!-- SEMANTIC -->
<header>
  <nav>
    <a href="#">Beranda</a>
  </nav>
</header>
<main>
  <article>...</article>
</main>
<footer>...</footer>
```

**Tampilannya sama persis.** Buka keduanya di browser untuk membuktikan — ini penting, karena peserta perlu tahu bahwa `<div>` tidak salah dan tidak error.

## KENAPA semantic menang

Tiga alasan, dan ketiganya bisa Anda tunjukkan langsung:

**1. Screen reader bisa melompat.** Pengguna tunanetra memakai perintah "lompat ke navigasi" atau "lompat ke konten utama". Dengan `<div class="nav">`, perintah itu tidak menemukan apa pun — `class` cuma label untuk CSS, screen reader tidak membacanya sebagai peran.

**2. Mesin pencari paham strukturnya.** Google membedakan konten utama dari menu dan footer. Halaman div soup memaksanya menebak.

**3. Programmer lain langsung mengerti.** Buka file 500 baris berisi `</div>` bertumpuk — tidak ada yang tahu `</div>` mana menutup apa. Dengan `</nav>` dan `</footer>`, strukturnya terbaca tanpa menghitung.

> **CARA SAMPAIKAN — Analogi Kardus Pindahan:**
> "Bayangin kalian pindah rumah, semua barang masuk kardus. Semua kardusnya polos, nggak ada tulisan apa-apa. Sampai rumah baru, kalian harus buka satu-satu buat nyari sendok.
> Nah `<div>` itu kardus polos. Dia berfungsi — barangnya aman kok. Tapi nggak ada yang tahu isinya apa tanpa dibuka.
> `<nav>`, `<header>`, `<footer>` itu kardus yang ada tulisannya: DAPUR, KAMAR, BUKU. Barangnya sama, kardusnya sama. Bedanya cuma satu: yang kedua bisa dibaca."

## KAPAN `<div>` tetap benar

**Ini wajib disampaikan.** Jangan sampai peserta merasa `<div>` itu haram — mereka akan memakainya setiap hari di React.

`<div>` adalah pilihan yang **benar** ketika elemen itu memang tidak punya makna, dan cuma ada untuk keperluan tata letak:

```html
<!-- BENAR — div di sini memang cuma pembungkus untuk layout -->
<main>
  <div class="grid-wrapper">
    <article>...</article>
    <article>...</article>
  </div>
</main>
```

> **CARA SAMPAIKAN:**
> "`div` itu bukan tag jelek. Dia tag **netral** — dan kadang netral itu justru yang benar.
> Aturannya gampang: kalau benda itu punya nama, pakai namanya. Kalau memang cuma kotak pembungkus buat ngatur posisi, `div` itu jawaban yang tepat.
> Yang salah bukan pakai div. Yang salah itu pakai div buat sesuatu yang jelas-jelas punya nama."

## Aturan `<main>` cuma satu

Satu halaman hanya boleh punya satu `<main>` — itu penanda "ini isi utamanya". Kalau ada dua, penandanya jadi tidak berarti.

---

# BAGIAN 3 — CSS: Menempelkan Gaya (45–65 menit)

## BANDINGKAN — Tiga cara menempelkan CSS

Tunjukkan ketiganya berurutan, dari yang paling menyakitkan.

```html
<!-- 1. INLINE — nempel di elemennya -->
<p style="color: red;">Halo</p>
```

```html
<!-- 2. INTERNAL — dikumpulkan di <head> -->
<head>
  <style>
    p { color: red; }
  </style>
</head>
```

```html
<!-- 3. EXTERNAL — file terpisah -->
<head>
  <link rel="stylesheet" href="style.css" />
</head>
```

## KENAPA external yang dipakai di industri

Peragakan masalahnya, jangan cuma ceritakan: **buat tiga paragraf dengan `style="color: red"`, lalu minta peserta mengubah semuanya jadi biru.** Mereka harus mengedit tiga tempat. Sekarang tambahkan: "bayangkan 50 halaman."

> **CARA SAMPAIKAN — Analogi Seragam Sekolah:**
> "Inline style itu kayak nulis aturan seragam di baju tiap murid satu-satu pakai spidol. Mau ganti warna dasi? Kalian harus datangi 500 murid.
> External CSS itu kayan nempel satu pengumuman di papan sekolah: 'dasi warnanya biru'. Ganti satu tempat, semua ikut berubah.
> Makanya CSS namanya *Cascading Style Sheet* — aturannya mengalir turun ke semua yang mendengarkan."

## APA — Selector: cara CSS menunjuk elemen

```css
p          { }   /* semua tag <p> */
.kartu     { }   /* semua elemen dengan class="kartu" */
#judul     { }   /* elemen dengan id="judul" — cuma boleh satu */
nav a      { }   /* semua <a> yang ada DI DALAM <nav> */
```

## KENAPA `class` lebih sering dipakai daripada `id`

`id` harus unik — satu halaman satu `id` dengan nama itu. `class` boleh dipakai berulang. Karena kebanyakan gaya diterapkan ke banyak elemen sekaligus (semua kartu, semua tombol), `class` yang menang.

## Penamaan class: fungsi, bukan tampilan

**Ini kebiasaan yang wajib ditanam hari ini**, dan akan diperiksa di penilaian tugas.

```css
/* BURUK — nama menjelaskan tampilan */
.merah      { color: red; }
.kotak-kiri { float: left; }

/* BAIK — nama menjelaskan fungsi */
.alert-error  { color: red; }
.sidebar      { float: left; }
```

> **CARA SAMPAIKAN:**
> "Kenapa `.merah` itu jebakan? Karena tiga bulan lagi bos kalian bilang 'error-nya jangan merah, oranye aja'.
> Kalau nama class-nya `.merah`, kalian punya dua pilihan jelek: ganti nama class di 30 file, atau biarin ada class namanya `.merah` tapi warnanya oranye. Dua-duanya bikin orang berikutnya bingung.
> Kalau namanya `.alert-error`, kalian tinggal ganti satu baris warna. Namanya masih benar.
> Aturannya: **kasih nama sesuai PERANNYA, bukan sesuai RUPANYA.**"

## APA — Box Model

Setiap elemen HTML itu kotak berlapis:

```
┌─────────────────────────────┐
│         margin              │  jarak ke elemen LAIN
│  ┌───────────────────────┐  │
│  │       border          │  │  garis tepi
│  │  ┌─────────────────┐  │  │
│  │  │     padding     │  │  │  jarak isi ke tepi DALAM
│  │  │  ┌───────────┐  │  │  │
│  │  │  │  content  │  │  │  │
│  │  │  └───────────┘  │  │  │
│  │  └─────────────────┘  │  │
│  └───────────────────────┘  │
└─────────────────────────────┘
```

> **CARA SAMPAIKAN — Analogi Bingkai Foto:**
> "Bayangin foto yang dibingkai.
> **Content** itu fotonya. **Padding** itu paspartu — kertas putih antara foto dan bingkai. **Border** itu bingkainya. **Margin** itu jarak dari bingkai ini ke bingkai sebelahnya di tembok.
> Yang paling sering ketuker: padding itu ke DALAM, margin itu ke LUAR."

## Praktik wajib: DevTools

Buka `F12` → pilih elemen → panel **Computed**. Di situ box model tampil sebagai diagram berwarna. Klik elemen berbeda, tunjukkan angkanya berubah.

**Ajarkan ini sekarang, jangan nanti.** DevTools adalah alat debugging CSS utama mereka selama 8 pertemuan.

---

# BAGIAN 4 — Flexbox (65–90 menit)
> **PORSI TERBESAR HARI INI.** Ini alat tata letak yang mereka pakai setiap hari, termasuk nanti di React.

## BANDINGKAN — Cara lama menata elemen berdampingan

Tunjukkan penderitaannya dulu. Ini penting supaya Flexbox terasa seperti obat, bukan sekadar fitur baru.

```css
/* CARA LAMA — float */
.kartu {
  float: left;
  width: 33.33%;
}
.pembungkus::after {
  content: "";
  display: table;
  clear: both;    /* baris misterius yang harus ditulis, kalau tidak layout-nya rusak */
}
```

Sebelum menunjukkan solusinya, minta peserta membuat tiga kotak berdampingan **rata tengah secara vertikal** dengan cara lama. Biarkan mereka gagal 3 menit. Itu 3 menit paling berharga di bagian ini.

```css
/* FLEXBOX */
.pembungkus {
  display: flex;
  justify-content: center;   /* rata tengah arah mendatar */
  align-items: center;       /* rata tengah arah tegak */
  gap: 1rem;                 /* jarak antar-anak, tanpa margin */
}
```

## APA — Dua sumbu, satu aturan

Ini satu-satunya hal yang harus benar-benar nempel dari Flexbox:

| Property | Mengatur | Default |
|---|---|---|
| `justify-content` | sumbu **utama** (mendatar) | kiri |
| `align-items` | sumbu **silang** (tegak) | rentang penuh |
| `flex-direction` | menukar arah kedua sumbu | `row` |
| `gap` | jarak antar-anak | 0 |
| `flex-wrap` | boleh turun baris atau tidak | `nowrap` |

> **CARA SAMPAIKAN — Analogi Rak Buku:**
> "Flexbox itu kayak rak buku. Ada **raknya** (elemen induk) dan ada **bukunya** (elemen anak).
> `display: flex` itu artinya kalian bilang ke rak: 'mulai sekarang kamu ngatur buku-buku di dalammu.'
> `justify-content` itu ngatur buku mau dirapatin ke kiri, ke kanan, atau ke tengah — geser kanan-kiri.
> `align-items` itu ngatur buku mau naik ke atas rak, turun ke bawah, atau di tengah — geser atas-bawah.
> Yang sering bikin bingung: dua-duanya ditulis di **RAK**-nya, bukan di bukunya. Kalian nggak nyuruh buku pindah — kalian nyuruh rak ngatur bukunya."

## KENAPA `gap` lebih baik daripada `margin`

```css
/* CARA LAMA — margin, lalu bermasalah di ujung */
.kartu { margin-right: 1rem; }
.kartu:last-child { margin-right: 0; }   /* baris tambalan */

/* GAP — jarak cuma DI ANTARA, ujungnya bersih */
.pembungkus { display: flex; gap: 1rem; }
```

> **CARA SAMPAIKAN:**
> "Margin itu ngasih jarak ke semua anak, termasuk yang paling ujung — jadi ada ruang nganggur di pinggir. Makanya orang dulu harus nulis baris tambalan buat anak terakhir.
> `gap` itu ngasih jarak cuma DI ANTARA. Kayak jarak antar-orang yang lagi antre — nggak ada jarak sebelum orang pertama."

## Praktik terpandu: navbar dalam 5 baris

Ini momen "wow" Bagian 4. Bangun bersama peserta, jangan ditunjukkan jadi:

```css
nav {
  display: flex;
  justify-content: space-between;   /* logo kiri, menu kanan */
  align-items: center;
  padding: 1rem 2rem;
}
```

Lima baris menghasilkan navbar yang di era `float` butuh 20 baris plus tambalan. Sebut itu.

---

# BAGIAN 5 — Grid & Mobile-First (90–102 menit)
> Singkat dan fokus. Tujuannya cukup satu: peserta bisa membuat grid kartu yang responsif.

## BANDINGKAN — Kapan Flexbox, kapan Grid

Ini pertanyaan yang pasti muncul, jadi jawab duluan:

| | Flexbox | Grid |
|---|---|---|
| Arah | satu arah (baris **atau** kolom) | dua arah sekaligus |
| Cocok untuk | navbar, deretan tombol, isi kartu | galeri, dashboard, tata letak halaman |

> **CARA SAMPAIKAN:**
> "Flexbox itu buat **satu barisan** — kayak orang antre. Grid itu buat **kotak-kotak** — kayak papan catur atau rak sepatu bersusun.
> Aturan praktisnya: kalau kalian cuma mikirin kiri-kanan ATAU atas-bawah, pakai Flexbox. Kalau mikirin dua-duanya barengan, pakai Grid.
> Dan nggak apa-apa dipakai barengan — Grid buat nyusun kartunya, Flexbox buat nyusun isi di dalam tiap kartu."

## APA — Grid kartu responsif dalam tiga baris

```css
.daftar-kartu {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}
```

Jelaskan `auto-fit` + `minmax` pelan-pelan — ini terlihat rumit tapi hasilnya paling memuaskan:

> **CARA SAMPAIKAN:**
> "Baris tengah itu artinya: 'muat sebanyak mungkin kolom, tapi tiap kolom minimal 250px, dan kalau ada sisa ruang bagi rata.'
> Efeknya: di laptop muncul 4 kolom, di tablet jadi 2, di HP jadi 1 — **tanpa kalian nulis aturan HP satu pun.** Coba tarik-tarik jendela browsernya sekarang."

Peragakan dengan menarik-narik lebar jendela. Ini momen wow kedua hari ini.

## APA — Mobile-First

```css
/* DEFAULT = tampilan HP. Ditulis paling atas, tanpa media query. */
.kartu { width: 100%; }

/* Baru naik ke layar lebih besar */
@media (min-width: 768px) {
  .kartu { width: 48%; }
}
```

## KENAPA mulai dari HP, bukan dari desktop

Dua alasan, dan yang kedua yang sebenarnya:

**1. Mayoritas pengunjung memakai HP.** Masuk akal mendahulukan yang terbanyak.

**2. Menambah lebih mudah daripada mengurangi.** Desain HP itu satu kolom, sederhana. Menambahkan kolom saat layar melebar itu gampang. Sebaliknya, membongkar desain desktop tiga kolom agar muat di HP jauh lebih menyakitkan.

> **CARA SAMPAIKAN:**
> "Ini kayak packing buat traveling. Kalau kalian mulai dari koper besar terus dipaksa pindah ke tas kecil, kalian bakal pusing milih apa yang dibuang.
> Tapi kalau mulai dari tas kecil — cuma yang penting — terus dapat koper besar, kalian tinggal nambahin. Jauh lebih enak.
> Mobile-first itu mulai dari tas kecilnya."

---

# BAGIAN 6 — TailwindCSS (102–115 menit)
> **Posisi bagian ini disengaja: paling akhir.** Peserta baru saja menulis CSS manual selama satu jam penuh. Sekarang mereka punya rasa sakit yang bisa diobati — dan itu satu-satunya cara Tailwind terasa masuk akal, bukan sekadar cara lain yang membingungkan.

## Kenapa Tailwind Ditaruh di Sini, Bukan di Awal

Ini keputusan yang perlu Anda pahami sebelum mengajarkannya.

Kalau Tailwind diberikan di awal pertemuan, peserta akan menulis `flex justify-center` tanpa tahu itu singkatan dari apa. Saat hasilnya melenceng, mereka tidak punya apa pun untuk dijadikan pegangan — karena yang mereka hafal cuma mantra.

Ini prinsip yang sama dengan Emmet di Bagian 1: **shortcut diberikan setelah paham manual, sebagai hadiah.**

> **CARA SAMPAIKAN saat membuka bagian ini:**
> "Satu jam terakhir kalian nulis CSS manual, dan sebagian dari kalian mikir 'kok ribet banget'. Bagus — itu memang ribet. Sekarang saya kasih obatnya.
> Tapi ingat: saya kasih obatnya SETELAH kalian ngerasain sakitnya. Kalau saya kasih dari tadi, kalian nggak bakal ngerti obatnya buat apa."

## APA

TailwindCSS adalah kumpulan class siap pakai yang tiap class-nya mewakili **satu** aturan CSS.

```html
<!-- Tailwind: gaya ditulis langsung di HTML lewat class -->
<div class="flex justify-center items-center gap-4 p-6 bg-white rounded-lg">
  ...
</div>
```

Cara memasangnya di P1 cukup satu baris di `<head>` — belum perlu Node atau build:

```html
<script src="https://cdn.tailwindcss.com"></script>
```

> **CATATAN UNTUK ANDA:** cara CDN ini **hanya untuk belajar**, tidak untuk produksi. Sebut itu sekali, jangan dijadikan bahasan panjang. Di P3 mereka akan memasangnya dengan benar lewat Vite, dan di situ perbedaannya baru relevan.

## BANDINGKAN — Kartu yang sama, dua cara

Tulis keduanya berdampingan. Pakai kartu yang **sudah mereka buat sendiri** di Bagian 5, jangan contoh baru.

```html
<!-- CSS MANUAL — yang mereka tulis satu jam terakhir -->
<article class="kartu">...</article>
```
```css
.kartu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}
```

```html
<!-- TAILWIND — tanpa file CSS sama sekali -->
<article class="flex justify-between items-center p-6 bg-white rounded-lg border border-gray-200">
  ...
</article>
```

**Petakan satu per satu di layar.** Ini bagian terpenting: peserta harus melihat bahwa Tailwind bukan sistem baru, cuma nama pendek untuk yang sudah mereka kuasai.

| CSS manual | Tailwind |
|---|---|
| `display: flex` | `flex` |
| `justify-content: space-between` | `justify-between` |
| `align-items: center` | `items-center` |
| `padding: 1.5rem` | `p-6` |
| `background: #fff` | `bg-white` |
| `border-radius: 8px` | `rounded-lg` |

> **CARA SAMPAIKAN:**
> "Lihat tabel ini baik-baik. Nggak ada satu pun konsep baru di kolom kanan. Semuanya kolom kiri yang dipendekin.
> `justify-between` itu ya `justify-content: space-between`. Sama persis. Cuma lebih pendek.
> Makanya tadi kita belajar yang kiri dulu. Kalau kalian ngerti kolom kiri, kolom kanan cuma soal hafalan nama — dan hafalan itu gampang, tinggal buka dokumentasi."

## KENAPA orang memakai Tailwind

Dua alasan yang bisa Anda tunjukkan, bukan cuma diceritakan.

**1. Tidak perlu memikirkan nama class.**

Ini masalah yang mereka baru saja alami di tugas: memikirkan nama yang benar itu melelahkan. Dengan Tailwind, pertanyaan "ini class-nya dinamain apa ya?" hilang sama sekali.

**2. Tidak ada CSS yang menumpuk tanpa dipakai.**

Di project besar, file CSS terus bertambah dan tidak ada yang berani menghapus — takut ada yang masih memakai. Dengan Tailwind, gaya nempel di elemennya; hapus elemennya, gayanya ikut hilang.

> **CARA SAMPAIKAN — Analogi Lemari vs Ransel:**
> "CSS manual itu kayak lemari baju di rumah. Rapi, tiap laci ada namanya. Tapi lama-lama isinya numpuk, dan ada baju yang kalian nggak tahu masih dipakai atau enggak — nggak berani dibuang.
> Tailwind itu kayak ransel. Semua yang kalian butuh nempel di badan. Nggak ada gudang yang numpuk. Tapi kalian keliatan lebih berantakan."

## BANDINGKAN — Kelemahannya, sebutkan dengan jujur

**Jangan menjual Tailwind sebagai selalu lebih baik.** Peserta akan melihat sendiri kelemahannya dalam 5 menit, dan kalau Anda tidak menyebutnya duluan, kredibilitas Anda yang turun.

```html
<!-- HTML-nya jadi panjang dan penuh -->
<article class="flex flex-col justify-between items-start gap-3 p-6 bg-white rounded-lg border border-gray-200 hover:shadow-md transition">
```

> **CARA SAMPAIKAN:**
> "Jujur ya, ini jelek dilihat. Satu baris bisa isinya 15 class. Ada yang bilang ini 'nggak beda sama inline style yang tadi kita bilang buruk'.
> Sebagian benar. Bedanya: inline style itu bebas nulis apa aja, Tailwind itu terbatas pada pilihan yang sudah disediakan — jadi seluruh tim otomatis konsisten. Tapi soal panjangnya? Iya, memang panjang.
> Dua-duanya dipakai di industri. Yang penting kalian tahu keduanya dan bisa milih, bukan cuma bisa satu."

## Praktik: konversi satu komponen

Dalam sisa waktu, minta peserta **mengubah SATU kartu** dari CSS manual jadi Tailwind. Satu saja, jangan seluruh halaman.

Tujuannya bukan menguasai Tailwind hari ini — tapi merasakan pemetaannya sendiri, supaya di P3 mereka tinggal melanjutkan.

> **KALAU WAKTU HABIS:** bagian ini yang paling aman dipotong. Cukup tunjukkan tabel pemetaan dan satu contoh kartu, lalu sampaikan bahwa praktik penuhnya di P3 saat setup Vite. Yang wajib nempel hari ini tetap HTML semantic dan Flexbox — bukan Tailwind.

---

# BAGIAN 7 — Penutup & Tugas (115–120 menit)

## Rangkuman: Satu Benang Merah

> "Semua yang kita pelajari hari ini punya satu tema: **kasih nama yang benar.**
> `<nav>` menang dari `<div>` karena namanya benar. `.alert-error` menang dari `.merah` karena namanya benar. Indentasi rapi itu supaya struktur kelihatan.
> Komputer nggak peduli — dua-duanya jalan. Yang peduli itu manusia. Dan kalian dibayar buat nulis kode yang bisa dibaca manusia."

## Tugas 1 (sesuai silabus): Landing Page Responsif

Peserta membuat satu halaman berisi empat bagian:

1. **Navbar** — logo di kiri, menu di kanan (Flexbox)
2. **Hero section** — judul besar, deskripsi, satu tombol
3. **Cards grid** — minimal 6 kartu, responsif (Grid)
4. **Footer** — teks hak cipta rata tengah

**Syarat wajib:**
- Memakai tag semantic, bukan `div` untuk semuanya
- Nama class menjelaskan fungsi, bukan tampilan
- Rapi di layar HP maupun laptop

**Deliverable pembeda (gaya reasoning kita):**

Di file CSS, tulis komentar berisi **alasan** untuk minimal 4 keputusan. Contoh:

```css
/* pakai Grid, bukan Flexbox, karena kartu perlu tersusun dua arah —
   ke samping DAN turun baris otomatis saat layar menyempit */
.daftar-produk {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

Dan di HTML, tulis komentar alasan untuk minimal 2 pilihan tag:

```html
<!-- pakai <nav> bukan <div class="nav"> supaya screen reader
     bisa melompat langsung ke navigasi -->
<nav>...</nav>
```

**Kriteria penilaian (umumkan di awal):**

| Bobot | Aspek |
|---|---|
| 35% | Ketepatan pemilihan tag semantic & alasannya |
| 30% | Kualitas alasan di komentar |
| 20% | Layout berfungsi & responsif di HP |
| 15% | Kerapian (indentasi, penamaan class) |

> **CARA SAMPAIKAN:**
> "Perhatikan bobotnya. Tampilan cantik itu cuma 20%. Yang paling besar itu **kenapa kalian milih tag itu** dan **kenapa kalian milih cara itu**.
> Boleh pakai AI buat bantu — tapi di breakout room saya bakal tunjuk satu baris dan tanya kenapa. Kalau kalian nggak bisa jawab, berarti itu bukan kode kalian."

---

# LAMPIRAN A — Pertanyaan yang Pasti Muncul

**"Kenapa nggak pakai div semua aja? Kan hasilnya sama."**
> Hasil di layar memang sama. Yang beda itu siapa yang bisa membacanya: screen reader, Google, dan teman setim kalian. `div` nggak salah — dia netral. Yang salah itu memakai div untuk sesuatu yang jelas punya nama. Kalau benda itu punya nama, pakai namanya.

**"Bedanya padding sama margin apa sih? Bingung terus."**
> Padding ke dalam, margin ke luar. Bingung itu wajar — bahkan yang sudah kerja masih sesekali ketuker. Makanya jangan menghafal: buka DevTools, klik elemennya, lihat diagram warnanya. Biasakan mengecek, bukan menebak.

**"Kok saya kasih `align-items: center` nggak ngaruh?"**
> Cek apakah induknya sudah `display: flex`. Tanpa itu, semua property Flexbox diabaikan diam-diam — nggak ada error, cuma nggak terjadi apa-apa. Ini kesalahan nomor satu di Flexbox.

**"Kenapa nggak langsung pakai Tailwind aja? Kan lebih cepat."**
> Nanti di Pertemuan 3, dan memang lebih cepat. Tapi Tailwind itu cuma nama pendek untuk CSS yang barusan kalian pelajari — `flex justify-center` itu ya `display: flex; justify-content: center`. Kalau kalian belum tahu apa yang dipendekkan, kalian nggak akan bisa memperbaikinya saat hasilnya melenceng. Kami kasih singkatannya setelah kalian tahu panjangnya.

**"Kapan kita bikin yang bisa diklik?"**
> Pertemuan 2 dan 3. Hari ini rangka dan cat, minggu depan listriknya. Halaman yang kalian bikin hari ini bakal kalian pakai lagi nanti — nggak dibuang.

**"Boleh pakai AI buat ngerjain tugas?"**
> Boleh, dengan syarat kalian paham tiap baris. AI itu kayak kalkulator — berguna kalau kalian sudah ngerti hitungannya, bahaya kalau dipakai buat menghindari paham.
>
> Dan ini yang perlu kalian tahu: AI memang bisa bikin landing page ini dalam 10 detik, lebih cepat dari siapa pun di ruangan ini. Saya nggak akan pura-pura enggak. Tapi pekerjaan kalian nanti bukan **mengetik** kode — itu memang sudah kalah cepat. Pekerjaan kalian adalah **memeriksa** kode, dan membaca kode itu lebih sulit daripada menulisnya. Perusahaan bayar kalian buat bertanggung jawab kalau ada yang salah. AI nggak bisa dimintai tanggung jawab.

---

# LAMPIRAN B — Praktik Langsung: Editor & DevTools

## Emmet — berikan sebagai hadiah, bukan pembuka

| Ketik | Tab → jadi |
|---|---|
| `!` | seluruh kerangka HTML5 |
| `nav>ul>li*3>a` | nav berisi ul dengan 3 li berisi link |
| `.kartu*6` | 6 `<div class="kartu">` |
| `header+main+footer` | tiga tag bersebelahan |

**Berikan tabel ini di akhir Bagian 1 dan Bagian 2**, setelah mereka mengetik manual. Kalau diberikan di awal, mereka tidak akan tahu Emmet menghasilkan apa.

## Shortcut VS Code yang langsung berguna

| Shortcut | Fungsi |
|---|---|
| `Alt + Shift + F` | rapikan indentasi otomatis |
| `Ctrl + /` | jadikan komentar |
| `Alt + ↑ / ↓` | pindahkan baris naik/turun |
| `Ctrl + D` | pilih kata yang sama berikutnya |

Ajarkan `Alt + Shift + F` di awal. Indentasi berantakan adalah penyebab utama peserta tidak bisa melihat struktur dokumennya sendiri.

## DevTools — alat debugging utama mereka

| Cara | Gunanya |
|---|---|
| `F12` → **Elements** | lihat HTML yang benar-benar dirender |
| Klik elemen → **Styles** | lihat CSS yang mengenainya, coret yang kalah |
| Klik elemen → **Computed** | diagram box model berwarna |
| Ikon HP (`Ctrl+Shift+M`) | uji tampilan di berbagai ukuran layar |

**Ajarkan mengedit CSS langsung di DevTools.** Peserta bisa coba-coba nilai tanpa bolak-balik save-refresh, lalu menyalin yang berhasil ke file.

> **CARA SAMPAIKAN:**
> "DevTools ini lab mini kalian. Nggak usah takut ngerusak — apa pun yang kalian ubah di sini hilang begitu di-refresh. File kalian aman.
> Programmer beneran pun ngoprek di DevTools dulu sebelum nulis di file. Biasakan."

---

# LAMPIRAN C — Tips & Kebiasaan untuk Ditanamkan Sejak P1

**1. Save dan refresh sesering mungkin.**
Tulis 2–3 baris, save, lihat. Jangan menulis 50 baris lalu bingung mana yang salah. Siklus pendek ini berlaku sepanjang 8 pertemuan.

**2. Indentasi adalah cermin struktur.**
Tag yang berada di dalam tag lain harus menjorok. Ini bukan soal kerapian estetis — indentasi yang benar membuat pohon dokumen terlihat, dan tag yang lupa ditutup langsung ketahuan.

**3. Beri nama sesuai fungsi, bukan tampilan.**
`.alert-error`, bukan `.merah`. `.sidebar`, bukan `.kotak-kiri`. Ini akan dinilai di tugas.

**4. Komentar untuk "kenapa", bukan "apa".**
```css
/* buruk — mengulang yang sudah terbaca */
.kartu { display: flex; }   /* bikin flex */

/* baik — menjelaskan keputusan */
/* flex supaya gambar dan teks di dalam kartu sejajar tengah
   walaupun tinggi teksnya beda-beda */
.kartu { display: flex; align-items: center; }
```

**5. Baca pesan error — walaupun HTML jarang memberi error.**
Justru itu bahayanya: HTML gagal diam-diam. Tag lupa ditutup tidak menghasilkan error, cuma tampilan yang aneh. Karena itu **DevTools → Elements** adalah pengganti pesan error di P1 — di situ terlihat struktur yang benar-benar dibaca browser.

**6. Kalau macet 15 menit, bertanya dengan format 4 baris:**
```
1. Yang saya coba      : ...
2. Yang saya harap     : ...
3. Yang malah terjadi  : ...
4. Yang sudah saya coba: ...
```
Sering kali jawabannya ketemu sendiri saat menulis baris ke-4. Ini teknik nyata bernama *rubber duck debugging*.

**7. Selesai dulu, cantik belakangan.**
Bangun strukturnya sampai benar, baru warnai. Peserta yang mengatur warna sebelum tata letaknya beres akan mengulang pekerjaannya.

---

# LAMPIRAN D — Tiga Kesalahan Mentor Baru di P1

**1. Terlalu cepat lewat karena "HTML kan gampang".**
HTML memang sederhana bagi Anda. Bagi peserta yang belum pernah menulis kode, tanda `<` dan `>` saja sudah asing, dan mengetik `<h1>Halo</h1>` tanpa typo itu pencapaian nyata. Kalau Anda terburu-buru di Bagian 0–1, peserta yang tertinggal tidak akan pernah menyusul. **Prioritas nomor satu Anda di 15 menit pertama bukan menyelesaikan materi — tapi memastikan semua orang berhasil melihat tulisannya sendiri di browser.**

**2. Memberi Emmet dan shortcut terlalu awal.**
Godaannya besar: Emmet membuat demo Anda terlihat gesit. Tapi peserta yang belum pernah mengetik kerangka HTML manual tidak akan tahu `!` + Tab itu menghasilkan apa, dan mereka jadi bergantung pada mantra yang tidak mereka pahami. Berikan setelah mereka mengetik manual sekali — sebagai hadiah, bukan jalan pintas.

**3. Membuat `<div>` terdengar haram.**
Karena Bagian 2 sangat menekankan semantic, mudah terpeleset jadi "jangan pakai div". Akibatnya peserta jadi takut memakai `div` bahkan saat itu pilihan yang benar — dan mereka akan memakainya terus-menerus di React nanti. Selalu tutup penjelasan semantic dengan **kapan `div` justru tepat**.

---

# LAMPIRAN E — Checklist Persiapan Anda

**H-3 sebelum kelas:**
- [ ] Kirim panduan instalasi ke grup: VS Code + browser Chrome/Edge terbaru
- [ ] Sertakan tautan unduh dan tangkapan layar langkah instalasi — ini pertemuan pertama, jangan asumsikan semua bisa
- [ ] Minta peserta install duluan dan balas "sudah" di grup, supaya Anda tahu siapa yang perlu dibantu di hari-H
- [ ] Siapkan file contoh "div soup vs semantic" yang tampilannya identik

**H-1:**
- [ ] Latih demo navbar Flexbox sampai lancar tanpa melihat catatan
- [ ] Uji `demo/06-tailwind.html` — pastikan CDN Tailwind termuat (perlu internet di ruang kelas!). Kalau koneksi meragukan, siapkan tangkapan layar cadangan.
- [ ] Uji demo grid `auto-fit` — pastikan efek tarik-jendelanya mulus (momen wow)
- [ ] Siapkan halaman contoh tanpa `<meta charset>` untuk peragaan karakter rusak
- [ ] Siapkan berkas tugas + contoh hasil jadi sebagai acuan peserta

**Hari-H:**
- [ ] VS Code dengan font diperbesar (min 18pt), tema terang — tema gelap sering tidak terbaca lewat proyektor
- [ ] Browser dan DevTools terbuka berdampingan dengan editor
- [ ] Sediakan 10 menit di awal khusus membantu instalasi yang gagal
- [ ] Siapkan folder `tugas/` untuk dibagikan di menit ke-115

---

*Dokumen ini disiapkan untuk Pertemuan 1 (versi revisi — HTML/CSS) — Metro Institute Season 2, Divisi Frontend.*
