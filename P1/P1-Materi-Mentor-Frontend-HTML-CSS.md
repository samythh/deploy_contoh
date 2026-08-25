# PERTEMUAN 1 — Arsitektur Web & Struktur Dokumen Responsif
### Panduan Materi & Cara Penyampaian untuk Mentor
**Metro Institute Season 2 — Divisi Frontend**
Durasi: 120 menit | Topik: Client-Server & HTTP, Struktur Dokumen, Semantic & Aksesibilitas, Box Model, Flexbox, TailwindCSS, Mobile-First, Setup Git & Pull Request

> **CATATAN VERSI (hasil rapat 25 Agustus 2026):** **Arsitektur Web & HTTP Methods masuk ke sini** dari P2. **CSS Grid pindah ke P2**, tapi **Mobile-First & breakpoint tetap di sini** (Bagian 7) dan diterapkan langsung pada navbar & hero yang baru dibangun. Pertemuan ditutup dengan **Setup Workflow Git & Pull Request** — seluruh tugas P1–P8 dikumpulkan lewat PR, jadi bagian ini tidak boleh gagal. TailwindCSS tetap di Bagian 6, via Play CDN, setelah CSS manual. Lihat `docs/Catatan-Perubahan.md`.

> **CARA PENYAMPAIAN — BACA INI SEBELUM MENGAJAR:** materi ini **langsung ke cara modern**. Cara lama (float, inline style, margin-tambalan) **tidak diperagakan** — cukup disebut sebagai selingan satu-dua kalimat sambil lewat, dan kalimatnya sudah disiapkan di tiap bagian. Alasannya waktu: 120 menit untuk sembilan bagian tidak cukup untuk mendemonstrasikan dua cara.
>
> Yang tetap wajib: lapisan **KENAPA**. Peserta harus tahu alasan tiap pilihan, hanya saja alasannya disampaikan lewat kalimat, bukan lewat peragaan.

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

# BAGIAN 0 — Pembuka & Peta Program (0–8 menit)

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

# BAGIAN 1 — Anatomi Dokumen HTML (8–20 menit)

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

# BAGIAN 2 — Arsitektur Web: Client & Server (20–31 menit)
> Jembatan dari yang barusan mereka lakukan. Mereka baru saja membuka file dari komputer sendiri — sekarang: bagaimana kalau file-nya ada di komputer orang lain?

## APA

Setiap kali membuka website, ada dua pihak yang bicara:

```
   CLIENT                          SERVER
(browser kamu)                (komputer penyedia)
     │                              │
     │  ──── "minta halaman" ────>  │
     │       (request)              │
     │                              │
     │  <─── "ini datanya" ───────  │
     │       (response)             │
     ▼                              ▼
```

- **Client** = browser di HP/laptop pengunjung. Yang meminta.
- **Server** = komputer yang menyimpan data & file, selalu menyala. Yang memberi.
- Keduanya bicara lewat **HTTP** — semacam bahasa/protokol yang keduanya sepakati.

## KENAPA ini penting diajarkan lebih dulu

Karena seluruh 8 pertemuan berujung pada satu hal: **frontend (client) mengambil data dari backend (server)**. Kalau peta ini tidak jelas di P1, materi API di P6 nanti akan terasa seperti sihir.

### CARA SAMPAIKAN — Analogi Restoran

> "Bayangkan restoran. Kalian (client) itu pelanggan. Dapur (server) itu yang masak.
> Kalian nggak masuk ke dapur ambil makanan sendiri. Kalian kasih **pesanan** ke pelayan (request), dapur masak, terus makanan **diantar** ke meja kalian (response).
> Kalian nggak perlu tahu dapurnya gimana masaknya. Kalian cukup tahu cara mesan yang benar. Itu tugas frontend: tahu cara mesan data yang benar ke server."

## APA — HTTP Methods (GET, POST, PUT, DELETE)

Saat client meminta ke server, ada **jenis permintaan** yang berbeda:

| Method | Artinya | Analogi restoran |
|---|---|---|
| `GET` | Ambil/baca data | "Tolong lihatkan menu" |
| `POST` | Kirim/buat data baru | "Saya mau pesan makanan baru" |
| `PUT` | Ubah data yang ada | "Ganti pesanan saya jadi yang ini" |
| `DELETE` | Hapus data | "Batalkan pesanan saya" |

## BANDINGKAN — Kenapa Dibedakan? Kenapa Tidak Satu Saja?

Pemula bertanya: kalau semua cuma "ngobrol sama server", kenapa harus ada 4 jenis?

### KENAPA

Karena **niat** tiap permintaan beda, dan server perlu tahu niatnya untuk merespons dengan benar dan aman.

> **CARA SAMPAIKAN:**
> "Coba bayangkan kalau semua permintaan sama. Server nggak bisa bedain kalian mau **lihat** data atau mau **hapus** data. Bahaya kan?
> `GET` itu cuma ngintip — aman, nggak ngubah apa-apa. `DELETE` itu menghancurkan. Dua hal ini nggak boleh dianggap sama. Method itu cara kalian bilang ke server 'niat saya apa'."

Tekankan satu aturan yang akan berguna seumur hidup mereka:
> "`GET` nggak boleh mengubah data. Dia cuma baca. Kalau kalian bikin tombol yang ngubah data pakai GET, itu salah kaprah dan bisa jadi celah keamanan."

---

## Praktik: buka tab Network — sekalian kenalan dengan DevTools

Tekan `F12` → tab **Network** → refresh halaman apa pun. Tunjukkan daftar request yang muncul, lalu klik salah satu: ada **Status Code**, ada **Response**.

> **CARA SAMPAIKAN:**
> "Nah ini bukti obrolan tadi beneran terjadi. Tiap baris di sini itu satu permintaan ke server. Angka 200 artinya 'oke, ini barangnya'. Angka 404 artinya 'nggak nemu'.
> Ingat tab ini. Di Pertemuan 6 nanti, waktu data kalian nggak muncul dan kalian bingung salahnya di mana, tab inilah yang bakal ngasih tahu."

Ini juga menanamkan kompetensi **Debugging & Verification** sejak pertemuan pertama — salah satu dari delapan profil lulusan.

---

# BAGIAN 3 — HTML5 Semantic & Aksesibilitas (31–50 menit)
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

> **PENGECUALIAN YANG DISENGAJA:** ini satu-satunya tempat di P1 yang tetap memakai perbandingan cara lama, dan itu bukan kelalaian. Di sini perbandingannya **adalah argumennya** — tanpa melihat div soup, "pakai `<nav>`" cuma terdengar seperti aturan sewenang-wenang.
>
> Tapi batasi **maksimal 2 menit**: buka dua file berdampingan, ajukan satu pertanyaan, lanjut. Bukan latihan, cuma perbandingan.

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

# BAGIAN 4 — CSS, Box Model & Flow Dokumen (50–63 menit)

## APA — Cara menempelkan CSS: file terpisah

Langsung ajarkan yang dipakai di industri. Jangan peragakan tiga cara.

```html
<head>
  <link rel="stylesheet" href="style.css" />
</head>
```

Satu file CSS, dipanggil dari semua halaman. Itu saja yang mereka butuhkan hari ini.

## KENAPA file terpisah

> **SELINGAN — sebut sambil lewat, jangan diperagakan:**
> "Sebenarnya ada cara lain: gaya bisa ditulis nempel langsung di tiap elemen. Cuma masalahnya, kalau kalian mau ganti satu warna, kalian harus edit 50 tempat satu-satu. Makanya orang naruh semuanya di satu file — ganti sekali, semua ikut."

Cukup segitu, lalu lanjut ke selector. Kalau ada yang penasaran dan bertanya, baru tunjukkan contoh `style="..."` di DevTools — 30 detik, tidak perlu buka file baru.

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

# BAGIAN 5 — Flexbox (63–83 menit)
> **PORSI TERBESAR HARI INI.** Ini alat tata letak yang mereka pakai setiap hari, termasuk nanti di React.

## APA — Satu baris yang mengatur semuanya

Langsung ke Flexbox. **Jangan memperagakan float, dan jangan menyuruh peserta mencobanya** — itu memakan 5 menit yang tidak kita punya.

```css
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

## KENAPA memakai `gap` untuk jarak antar-anak

```css
.pembungkus { display: flex; gap: 1rem; }
```

> **SELINGAN — satu kalimat, lalu lanjut:**
> "`gap` itu ngasih jarak cuma DI ANTARA — kayak jarak antar-orang yang lagi antre, nggak ada jarak sebelum orang pertama. Dulu orang pakai margin buat ini, terus harus nulis baris tambahan khusus buat anak terakhir biar nggak ada ruang nganggur di pinggir. Sekarang nggak perlu."

Contoh 6 di file demo memperlihatkan ruang nganggur itu kalau ada yang ingin melihatnya — tapi tidak perlu dibuka kecuali ditanya.

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

# BAGIAN 6 — TailwindCSS via Play CDN (83–95 menit)
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

# BAGIAN 7 — Mobile-First & Breakpoint (95–104 menit)
> Ditaruh **setelah** Tailwind, dan itu disengaja: breakpoint paling murah diajarkan lewat prefiks `sm:` `md:` `lg:` yang barusan mereka lihat. Tidak perlu menulis satu pun `@media` manual hari ini.

## APA

```html
<!-- default = tampilan HP. Prefiks dipakai saat layar MELEBAR. -->
<nav class="flex flex-col md:flex-row md:justify-between">
```

| Prefiks | Aktif mulai lebar |
|---|---|
| *(tanpa prefiks)* | semua ukuran — ini tampilan HP |
| `sm:` | 640px |
| `md:` | 768px |
| `lg:` | 1024px |

## KENAPA mulai dari HP, bukan dari desktop

Dua alasan, dan yang kedua yang sebenarnya.

**1. Mayoritas pengunjung memakai HP.** Masuk akal mendahulukan yang terbanyak.

**2. Menambah lebih mudah daripada mengurangi.** Desain HP itu satu kolom, sederhana. Menambahkan kolom saat layar melebar itu gampang. Sebaliknya, membongkar desain desktop tiga kolom agar muat di HP jauh lebih menyakitkan.

> **CARA SAMPAIKAN — Analogi Packing:**
> "Ini kayak packing buat traveling. Kalau kalian mulai dari koper besar terus dipaksa pindah ke tas kecil, kalian bakal pusing milih apa yang dibuang.
> Tapi kalau mulai dari tas kecil — cuma yang penting — terus dapat koper besar, kalian tinggal nambahin. Jauh lebih enak.
> Mobile-first itu mulai dari tas kecilnya. Makanya class tanpa prefiks itu buat HP, dan prefiks `md:` baru nyala pas layarnya melebar."

## Praktik: terapkan pada navbar & hero yang sudah jadi

**Jangan bikin contoh baru.** Pakai navbar dan hero yang mereka bangun sendiri di Bagian 5 — itu yang membuat materi ini terasa nyambung, bukan tempelan.

Satu perubahan saja sudah cukup untuk memperlihatkan idenya:

```html
<!-- HP: menu menumpuk ke bawah. Tablet ke atas: berjajar dan terpisah -->
<nav class="flex flex-col gap-2 md:flex-row md:justify-between md:items-center">
```

**Lalu peragakan:** `F12` → `Ctrl+Shift+M` → geser lebar layar pelan-pelan di depan kelas. Navbar-nya berubah sendiri di 768px.

> Ini **momen wow kedua** hari ini. Lakukan peragaannya sebelum menjelaskan angkanya — lihat dulu, paham belakangan.

## Cek sebelum lanjut

Peserta bisa menjawab: *"kenapa class tanpa prefiks itu buat HP, bukan buat desktop?"* Kalau belum bisa, ulangi analogi packing — jangan lanjut ke Git dengan konsep ini masih menggantung, karena Tugas 1 mensyaratkan minimal dua breakpoint.

## Colokan ke depan

Sebut eksplisit: prefiks `md:` dan `lg:` ini **persis** yang mereka pakai di P3 saat Tailwind dipasang lewat Vite, dan di P2 saat menyusun grid kartu multi-kolom. Bukan materi sekali pakai.

---

# BAGIAN 8 — Penutup, Tugas & Setup Workflow Git (104–120 menit)

## Rangkuman: Satu Benang Merah (104–106)

> "Semua yang kita pelajari hari ini punya satu tema: **kasih nama yang benar.**
> `<nav>` menang dari `<div>` karena namanya benar. `.alert-error` menang dari `.merah` karena namanya benar. Indentasi rapi itu supaya struktur kelihatan.
> Komputer nggak peduli — dua-duanya jalan. Yang peduli itu manusia. Dan kalian dibayar buat nulis kode yang bisa dibaca manusia."

---

## Sistem Tugas: satu produk, empat tahap (106–109)

**Ini beda dari kelas kebanyakan, jadi jelaskan dengan benar sekali di awal.** Peserta tidak akan mengerjakan delapan tugas terpisah yang dibuang setelah dinilai. Mereka membangun **satu produk** yang tumbuh dari minggu ke minggu.

| Tugas | Materi | Produk jadi apa |
|:--:|---|---|
| 1 | P1 & P2 | Halaman statis responsif → lalu dinamis dengan JavaScript |
| 2 | P3 & P4 | Dibangun ulang dengan React + Vite + Tailwind |
| 3 | P5 & P6 | Multi-halaman, datanya dari REST API |
| 4 | P7 & P8 | Global state, autentikasi, terbit ke internet |

**Minta mereka memilih tema hari ini juga** — katalog kuliner daerah, direktori UMKM, katalog buku, destinasi wisata, apa saja asal datanya berbentuk **daftar item dengan detail**. Tema ini dipakai sampai akhir kelas dan tidak boleh berganti.

> **CARA SAMPAIKAN:**
> "Tugas kalian bukan delapan PR yang dibuang setelah dinilai. Ini **satu produk** yang kalian besarkan pelan-pelan.
> Minggu ini dia cuma halaman statis. Minggu depan dia bisa nyari dan nyaring data. Bulan depan dia narik data beneran dari server. Terakhir, dia punya login dan bisa dibuka orang sedunia lewat internet.
> Jadi pilih temanya yang kalian beneran suka — kalian bakal hidup sama dia dua bulan. Dan ini yang nanti kalian tunjukkan pas ditanya 'pernah bikin apa?'"

**Tugas 1 dikumpulkan sebelum Pertemuan 3**, mencakup materi P1 **dan** P2. Detail lengkapnya di `tugas/tugas-1-static-foundation/`.

---

## Setup Workflow Git & Pull Request (109–120)

> Ini **bukan** materi tempelan. Seluruh tugas P1–P8 dikumpulkan lewat Pull Request, jadi kalau bagian ini gagal, peserta tidak bisa mengumpulkan apa pun.
>
> **Sisakan waktunya betul-betul.** Kalau Bagian 6 (Tailwind) molor, potong Tailwind — jangan potong bagian ini.

### Yang dilakukan bersama, langkah demi langkah

```bash
# 1. Perkenalkan diri ke Git (sekali seumur hidup per komputer)
git config --global user.name "Nama Lengkap"
git config --global user.email "email@github.com"

# 2. Ambil repositori kelas
git clone https://github.com/<org-kelas>/<repo-starter>.git
cd <repo-starter>

# 3. Bikin cabang sendiri — JANGAN kerja di main
git checkout -b tugas1-nama-anda

# 4. Setelah mengerjakan
git add .
git commit -m "feat: halaman statis tugas 1"
git push -u origin tugas1-nama-anda
```

Lalu buka GitHub → tombol **Compare & pull request** → isi judul → **Create pull request**.

### KENAPA repot begini? Kenapa tidak kirim ZIP saja?

Pertanyaan ini pasti muncul. Jawabannya bukan "karena aturan".

> **CARA SAMPAIKAN — Analogi Ruang Kerja Bersama:**
> "Kalau kalian kerja sendirian, kirim ZIP memang lebih gampang. Tapi di kantor kalian nggak pernah sendirian.
> Bayangin satu dokumen dikerjain lima orang barengan. Kalau tiap orang ngirim salinannya sendiri lewat WhatsApp, dalam dua hari nggak ada yang tahu mana versi yang benar.
> **Branch** itu kayak kalian ngambil salinan buat dicoret-coret sendiri, tanpa ganggu punya orang lain. **Pull Request** itu kalian ngangkat tangan: 'saya udah selesai, tolong dicek sebelum digabung.'
> Dan ini bukan latihan pura-pura. Nanti pas Capstone, kalian satu repo bareng anak Backend. Yang nggak bisa Git bakal jadi orang yang ngerusak kerjaan tim."

### Tiga hal yang pasti bikin macet — antisipasi

| Masalah | Penyebab & solusi |
|---|---|
| `git: command not found` | Git belum terpasang. Ini harusnya sudah selesai di H-3 — makanya panduan instalasi dikirim jauh hari. |
| Diminta *username & password* saat `push` | GitHub sudah tidak menerima password sejak 2021. Arahkan pakai **Personal Access Token**, atau install **GitHub Desktop** sebagai jalan pintas. |
| Bingung sudah di branch mana | `git branch` menampilkan daftar, yang aktif ditandai `*`. Ajarkan ini sekarang; mereka akan sering tersesat. |

> **JALAN DARURAT:** kalau ada peserta yang benar-benar buntu di CLI, izinkan pakai **GitHub Desktop** untuk sementara. Tujuan hari ini bukan menguasai Git — tapi memastikan **semua orang bisa mengumpulkan tugas**. Perintah CLI-nya diperdalam lagi di P8.

### Cek sebelum kelas bubar

- [ ] Semua peserta punya akun GitHub
- [ ] Semua sudah berhasil `clone` repositori kelas
- [ ] Minimal setengah kelas sudah berhasil membuat PR percobaan
- [ ] Yang belum berhasil sudah dicatat namanya untuk dibantu di luar jam

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
