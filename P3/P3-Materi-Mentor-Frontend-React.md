# PERTEMUAN 3 — Studi Kasus & Latihan Terbimbing
### React.js Fundamentals & Component-Driven Architecture
**Metro Institute Season 2 — Divisi Frontend**
Durasi: 120 menit | Topik: Vite, JSX, Komponen, Props, Conditional & List Rendering, TailwindCSS via build tool

> **CARA PENYAMPAIAN:** materi ini **langsung ke cara modern**. Cara lama disebut sebagai selingan satu-dua kalimat sambil lewat, kalimatnya sudah disiapkan. Lapisan **KENAPA** tetap wajib — hanya disampaikan lewat kalimat, bukan peragaan.

> **CATATAN VERSI — WAJIB DICEK H-1:** setup Vite dan TailwindCSS adalah bagian materi yang **paling cepat basi**. Dokumen ini ditulis untuk **Tailwind v4** (pakai plugin `@tailwindcss/vite`, tanpa `tailwind.config.js`, tanpa PostCSS) dan **React 19**. Sebelum mengajar, jalankan sendiri seluruh langkah Bagian 2 dari nol di folder kosong. Kalau perintahnya berubah, perbaiki dokumen ini dulu — jangan improvisasi di depan kelas.

---

## Cara Membaca Dokumen Ini

| Lapis | Isi |
|---|---|
| **APA** | Faktanya. Ini yang biasanya diajarkan orang. |
| **BANDINGKAN** | Alternatif yang ada, dan apa bedanya. |
| **KENAPA** | Alasan kita memilih satu di antaranya. Ini yang membuat peserta paham, bukan cuma hafal. |

Ditambah blok **CARA SAMPAIKAN** — kalimat dan analogi yang bisa Anda pakai langsung di kelas.

---

## Situasi Khusus P3 Ini: Pertemuan Paling Rawan Tersesat

Dua pertemuan pertama berjalan di satu file HTML yang bisa di-double-click. Hari ini semuanya berubah sekaligus: ada **terminal**, ada **folder `node_modules`**, ada **server yang harus dijalankan**, ada **file `.jsx`** yang isinya campuran HTML dan JavaScript.

Peserta bisa kehilangan pijakan hanya karena `npm run dev` gagal jalan — bukan karena React-nya sulit.

**Konsekuensinya untuk Anda:** setup di Bagian 2 bukan formalitas. Kalau ada lima orang yang project-nya tidak jalan, mereka tidak bisa mengikuti 80 menit sisanya. Sediakan waktu penuh, dan siapkan jalan darurat.

> **CARA SAMPAIKAN di awal kelas:**
> "Hari ini bakal terasa beda banget dari dua pertemuan kemarin. Kita bakal buka terminal, install banyak file, jalanin server. Kelihatannya ribet — dan iya, awalnya emang ribet.
> Tapi ini cuma sekali. Habis setup, kalian nggak bakal sentuh terminal lagi sampai akhir kelas. Yang penting hari ini: **pastikan project kalian jalan.** Kalau macet, bilang. Jangan diem."

---

## Prinsip Besar yang Anda Tanamkan Hari Ini

P3 bukan tentang menghafal sintaks React. P3 adalah tentang satu pergeseran cara berpikir:

> **Berhenti memerintah DOM. Mulai mendeskripsikan tampilan.**

Di P2 mereka menulis: *"ambil elemen ini, isi dengan HTML ini, gambar ulang."* Itu **memerintah** — langkah demi langkah.

Di React mereka menulis: *"kalau datanya begini, tampilannya begini."* Itu **mendeskripsikan** — dan React yang mengurus langkahnya.

Kalimat yang layak Anda ulang hari ini:

> "Kalian nggak lagi nyuruh browser ngapain. Kalian cuma bilang tampilannya harus kayak gimana. Sisanya urusan React."

---

# BAGIAN 0 — Pembuka & Sambungan dari P2 (0–8 menit)

## Yang Anda lakukan

**Buka dengan kode P2 mereka sendiri**, bukan slide.

Tampilkan fungsi `gambarKartu()` yang mereka tulis minggu lalu:

```javascript
const gambarKartu = (daftar) => {
  wadah.innerHTML = daftar.map(p => `<article class="kartu">...</article>`).join("");
};
```

> "Ingat ini? Kalian yang nulis minggu lalu. Jalan, dan jalan dengan baik.
>
> Hari ini kita bikin ini jadi jauh lebih rapi. Tapi sebelum itu — saya mau kalian lihat dulu **apa yang salah** sama kode ini. Karena kalau kalian nggak lihat masalahnya, React bakal terasa kayak ribet doang tanpa alasan."

### Cek kesiapan kelas

- Siapa yang Tugas 1-nya sudah masuk lewat Pull Request?
- Siapa yang sudah punya Node.js di laptopnya? *(harusnya sudah dicek H-3)*
- Siapa yang belum pernah buka terminal sama sekali?

Pertanyaan ketiga penting. Peserta yang belum pernah menyentuh terminal butuh perhatian ekstra di Bagian 2.

---

# BAGIAN 1 — Kenapa React Ada (8–20 menit)
> Ini fondasi seluruh pertemuan. Jangan dilewati demi mengejar praktik — peserta yang tidak paham masalahnya akan menganggap React cuma sintaks aneh.

## APA — masalah dengan cara P2

Cara P2 bekerja, tapi punya tiga cacat yang baru terasa saat aplikasi membesar.

**1. Setiap perubahan membongkar semuanya.**

```javascript
wadah.innerHTML = "...";   // seluruh isi wadah dihapus, lalu dibangun ulang
```

Ganti satu harga, seluruh 50 kartu dibongkar dan dibuat ulang. Boros, dan ada efek sampingnya: kalau ada input yang sedang diketik di dalamnya, isinya hilang. Kalau pengguna sedang scroll, posisinya lompat.

**2. Tampilan dan data gampang tidak sinkron.**

Anda harus ingat memanggil `gambarKartu()` setiap kali data berubah. Lupa sekali, tampilan menampilkan data lama — dan tidak ada yang memberi tahu Anda.

**3. Tidak ada potongan yang bisa dipakai ulang.**

Kartu produk itu string di dalam `.map()`. Mau dipakai di halaman lain? Salin-tempel.

> **PERAGAKAN CACAT NOMOR 1.** Ini 60 detik dan sangat berkesan:
> tambahkan satu `<input>` di dalam wadah kartu, ketik sesuatu di situ, lalu jalankan filter. Ketikannya hilang.
> *"Nah. Ini yang bikin aplikasi beneran nggak bisa pakai cara ini."*

## KENAPA React menyelesaikannya

React memakai **Virtual DOM** — salinan struktur halaman dalam bentuk objek JavaScript biasa.

Saat data berubah, React membuat salinan baru, **membandingkannya** dengan yang lama, lalu **hanya mengubah bagian yang benar-benar berbeda** di halaman asli.

> **CARA SAMPAIKAN — Analogi Renovasi Rumah:**
> "Cara minggu lalu itu kayak ini: kalian mau ganti warna satu tembok, terus kalian **bongkar seluruh rumah** dan bangun ulang dari nol. Hasilnya benar — temboknya jadi warna baru. Tapi caranya gila.
>
> React itu kayak mandor yang bawa **dua denah**: denah rumah sekarang, dan denah rumah yang kalian mau. Dia bandingin dua-duanya, terus bilang ke tukang: 'yang beda cuma tembok ruang tamu. Cat itu aja, sisanya jangan disentuh.'
>
> Nah, **denah** itulah Virtual DOM. Dia bukan rumahnya — dia cuma kertas buat dibandingin. Bandingin kertas itu murah. Bongkar rumah itu mahal."

**Batasi sampai sini.** Jangan masuk ke algoritma *reconciliation* atau *fiber*. Peserta cukup tahu: ada perbandingan dulu, baru perubahan minimal.

## BANDINGKAN — memerintah vs mendeskripsikan

Tulis berdampingan di layar. Ini inti pergeseran cara berpikirnya.

```javascript
// P2 — MEMERINTAH: langkah demi langkah
wadah.innerHTML = "";
daftar.forEach(p => {
  const el = document.createElement("article");
  el.textContent = p.nama;
  wadah.appendChild(el);
});
```

```jsx
// React — MENDESKRIPSIKAN: seperti apa hasilnya
{daftar.map(p => <article key={p.id}>{p.nama}</article>)}
```

> **CARA SAMPAIKAN:**
> "Yang atas itu **resep**: ambil ini, taruh sini, ulangi. Yang bawah itu **foto hasil jadinya**.
> Kalian nggak lagi ngasih tahu caranya. Kalian cuma bilang hasilnya harus kayak apa."

---

# BAGIAN 2 — Setup Vite + TailwindCSS (20–36 menit)
> **Titik paling rawan hari ini.** Sediakan waktunya penuh. Yang tidak berhasil di sini tidak bisa mengikuti sisa pertemuan.

## Langkah, kerjakan bersama peserta

Jalan pelan. Setelah tiap perintah, tunggu sampai mayoritas selesai.

```bash
# 1. Bikin project React di dalam repositori tugas mereka
npm create vite@latest
#    → Project name: nama-produk-kalian
#    → Framework: React
#    → Variant: JavaScript

cd nama-produk-kalian
npm install
npm run dev
```

**Berhenti di sini.** Pastikan semua orang melihat halaman Vite di `localhost:5173` sebelum lanjut.

```bash
# 2. Pasang TailwindCSS (v4 — lewat plugin Vite)
npm install tailwindcss @tailwindcss/vite
```

```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

```css
/* src/index.css — hapus semua isinya, ganti dengan satu baris ini */
@import "tailwindcss";
```

**Uji:** ganti isi `App.jsx` dengan `<h1 className="text-3xl font-bold text-blue-600">Halo</h1>`. Kalau tulisannya besar dan biru, Tailwind sudah jalan.

## KENAPA sekarang pakai build tool, padahal di P1 cukup satu baris CDN

> **CARA SAMPAIKAN:**
> "Di Pertemuan 1, Tailwind kita pasang pakai satu baris `<script>`. Gampang banget. Kenapa sekarang ribet?
>
> Karena yang di P1 itu **ngirim seluruh Tailwind** ke browser pengunjung — semua class yang ada di dunia, padahal kalian cuma pakai dua puluh. Buat belajar nggak apa-apa. Buat website beneran, itu bikin lemot.
>
> Yang sekarang: pas kalian build, dia **baca kode kalian**, terus cuma ambil class yang beneran kalian pakai. Sisanya dibuang.
>
> Ini pola yang bakal kalian lihat terus: cara gampang buat belajar, cara benar buat produksi. Dua-duanya sah — asal kalian tahu bedanya."

## Jalan darurat — siapkan sebelum kelas

| Masalah | Solusi cepat |
|---|---|
| `npm: command not found` | Node.js belum terpasang. Harusnya selesai H-3 — inilah kenapa dicek jauh hari. |
| `npm install` lama sekali | Wajar di WiFi lemah. **Siapkan folder `node_modules` di flashdisk** untuk disalin. |
| Port 5173 dipakai | `npm run dev -- --port 5174` |
| Tailwind tidak berefek | Cek tiga hal berurutan: plugin sudah masuk `vite.config.js`? `index.css` sudah berisi `@import "tailwindcss"`? server sudah di-restart? |

> **JALAN DARURAT TERAKHIR:** siapkan **satu project yang sudah jadi** di flashdisk atau tautan ZIP. Peserta yang benar-benar buntu tinggal menyalinnya dan ikut praktik. Setup-nya dibereskan di luar jam.
>
> Tujuan hari ini bukan menguasai npm. Tujuannya paham komponen dan props.

---

# BAGIAN 3 — Komponen & JSX (36–54 menit)

## APA — komponen itu fungsi yang mengembalikan tampilan

```jsx
function Sapaan() {
  return <h1>Halo, Metro Institute</h1>;
}
```

Itu saja. Fungsi JavaScript biasa, yang mengembalikan sesuatu yang mirip HTML.

## BANDINGKAN — JSX vs HTML

JSX **bukan** HTML. Ada empat perbedaan yang akan langsung mereka tabrak:

| HTML | JSX | Kenapa |
|---|---|---|
| `class="kartu"` | `className="kartu"` | `class` sudah dipakai JavaScript untuk hal lain |
| `<br>` | `<br />` | Tiap tag wajib ditutup |
| `onclick="..."` | `onClick={...}` | Ditulis *camelCase*, isinya fungsi bukan string |
| Boleh banyak elemen sejajar | Wajib **satu** pembungkus | Fungsi cuma bisa mengembalikan satu nilai |

**Kurung kurawal `{}` adalah pintu ke JavaScript:**

```jsx
const nama = "Mikail";
return <h1>Halo, {nama}</h1>;          // isi variabel
return <p>Total: {2 + 3}</p>;          // ekspresi
return <p>{produk.harga.toLocaleString("id-ID")}</p>;
```

> **CARA SAMPAIKAN — Analogi Template Undangan:**
> "JSX itu kayak undangan yang sudah dicetak. Tulisannya udah jadi semua, tapi ada bagian kosong buat diisi nama tamu.
>
> Nah, kurung kurawal `{}` itu **bagian kosongnya**. Di luar kurawal — itu tulisan cetak. Di dalam kurawal — itu JavaScript, dia bakal diisi pas dijalankan."

## KENAPA nama komponen wajib huruf besar

Ini bukan aturan gaya. Ini menentukan jalan atau tidak.

```jsx
function kartu() { ... }     // ❌ React kira ini tag HTML <kartu>
function Kartu() { ... }     // ✅ React tahu ini komponen buatan kalian
```

> **CARA SAMPAIKAN:**
> "React bedain komponen kalian sama tag HTML biasa cuma dari **huruf pertamanya**. Huruf kecil = dia kira tag HTML. Huruf besar = dia tahu itu buatan kalian.
>
> Jadi kalau komponen kalian nggak muncul dan nggak ada error, cek huruf pertamanya dulu. Ini kesalahan nomor satu pemula, dan gagalnya diam-diam."

## Praktik: pecah `App.jsx` jadi komponen pertama

Buat `src/components/Navbar.jsx`:

```jsx
function Navbar() {
  return (
    <header className="flex justify-between items-center p-6 bg-white border-b">
      <span className="font-bold text-xl">TokoKita</span>
      <nav className="flex gap-6">
        <a href="#">Beranda</a>
        <a href="#">Produk</a>
      </nav>
    </header>
  );
}

export default Navbar;
```

Pakai di `App.jsx`:

```jsx
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
}
```

**Sebut sambil lewat:** `import`/`export` ini persis yang mereka pelajari di P2 Bagian 5. Bukan hal baru — sekarang cuma dipakai sungguhan.

---

# BAGIAN 4 — Props (54–74 menit)
> Konsep terpenting hari ini. Beri porsi penuh.

## APA

Props adalah cara komponen induk mengirim data ke komponen anak.

```jsx
// Induk mengirim
<ProductCard nama="Rendang" harga={35000} />

// Anak menerima
function ProductCard({ nama, harga }) {
  return (
    <article className="p-6 bg-white rounded-lg border">
      <h2 className="font-semibold">{nama}</h2>
      <p className="text-gray-500">Rp {harga.toLocaleString("id-ID")}</p>
    </article>
  );
}
```

**Perhatikan `{ nama, harga }` di parameter** — itu destructuring dari P2 Bagian 3. Sebut eksplisit: *"ingat kan? Yang minggu lalu kalian pikir buat apa. Ini dia."*

## KENAPA props hanya boleh mengalir ke bawah, dan tidak boleh diubah anak

```jsx
function ProductCard({ nama }) {
  nama = "Diubah";     // ❌ jangan pernah
}
```

> **CARA SAMPAIKAN — Analogi Surat Tugas:**
> "Props itu kayak surat tugas dari atasan. Isinya kalian **baca dan kerjakan** — kalian nggak boleh coret-coret suratnya terus ngaku itu yang dikasih.
>
> Kenapa? Karena kalau tiap anak buah boleh ngubah surat tugasnya sendiri, atasannya nggak akan pernah tahu keadaan sebenarnya. Bakal kacau nyari siapa yang ngubah apa.
>
> Aturannya: **data mengalir ke bawah, satu arah.** Kalau anak butuh ngasih tahu induknya sesuatu, caranya beda — dan itu kita pelajari minggu depan."

Itu **colokan ke P4**. Sebut, jangan dijelaskan sekarang.

## Tiga bentuk props yang disebut silabus

**1. Props drilling** — data dioper turun melewati komponen yang sebenarnya tidak butuh.

```jsx
<Halaman produk={produk} />
  └─ <DaftarProduk produk={produk} />
       └─ <ProductCard nama={...} />   ← baru di sini dipakai
```

> "Ini jalan, dan buat aplikasi kecil nggak masalah. Tapi kalau sudah tujuh lapis, capek. Namanya *props drilling* — kayak ngebor lewatin banyak lapisan tanah cuma buat nyampe ke bawah. Obatnya ada di Pertemuan 7."

**2. Children props** — mengirim JSX, bukan sekadar teks.

```jsx
function Kotak({ children }) {
  return <div className="p-6 border rounded-lg">{children}</div>;
}

<Kotak>
  <h2>Apa saja boleh di sini</h2>
  <p>Termasuk komponen lain.</p>
</Kotak>
```

> "`children` itu isi yang kalian taruh di antara tag buka dan tutup. Kayak kotak kado — kotaknya sama, isinya bebas."

**3. Default props** — nilai cadangan kalau tidak dikirim.

```jsx
function Badge({ teks = "Baru", warna = "bg-green-100" }) {
  return <span className={`px-2 py-1 rounded ${warna}`}>{teks}</span>;
}
```

> "Ini penting buat komponen yang dipakai di banyak tempat. Yang nggak ngirim apa-apa tetap dapat tampilan yang masuk akal, bukan `undefined`."

---

# BAGIAN 5 — Conditional & List Rendering (74–98 menit)

## Conditional Rendering — dua bentuk, dua kegunaan

**Ternary — kalau ada dua kemungkinan tampilan:**

```jsx
{produk.stok > 0
  ? <span className="text-green-600">Tersedia</span>
  : <span className="text-red-600">Habis</span>}
```

**Short-circuit `&&` — kalau cuma "tampil atau tidak sama sekali":**

```jsx
{produk.diskon && <Badge teks="Diskon!" />}
```

> **CARA SAMPAIKAN:**
> "Bedanya gampang. Kalau pertanyaannya **'yang mana?'** — pakai ternary. Kalau pertanyaannya **'muncul nggak?'** — pakai `&&`.
>
> Ini persis kayak `.find()` versus `.some()` yang kalian pelajari minggu lalu. Pertanyaan beda, alat beda."

> ⚠️ **JEBAKAN yang wajib disebut:** kalau nilainya angka `0`, `&&` akan **menampilkan angka nol** di layar, bukan menyembunyikan.
> ```jsx
> {produk.stok && <p>Ada stok</p>}    // stok = 0 → muncul tulisan "0"
> {produk.stok > 0 && <p>Ada stok</p>}  // ✅ benar
> ```
> Peserta pasti kena ini di tugas. Sebut duluan, hemat 20 menit debugging mereka.

## List Rendering — `.map()` yang sudah mereka kuasai

```jsx
{produk.map(p => (
  <ProductCard key={p.id} nama={p.nama} harga={p.harga} />
))}
```

**Sebut eksplisit:** ini `.map()` yang sama persis dengan P2. Bukan hal baru. Yang baru cuma isinya JSX, bukan string.

## KENAPA `key` wajib, dan kenapa index array itu jebakan

Ini bagian yang paling sering diajarkan setengah-setengah. Jangan.

```jsx
{produk.map((p, i) => <ProductCard key={i} ... />)}   // ❌ jebakan
{produk.map(p => <ProductCard key={p.id} ... />)}     // ✅ benar
```

> **CARA SAMPAIKAN — Analogi Nomor Punggung:**
> "Bayangin kalian pelatih, dan kalian kenalin pemain dari **urutan berdirinya**: 'pemain nomor 1 itu yang paling kiri.'
>
> Terus pemain paling kiri pulang. Sekarang yang tadinya nomor 2 jadi nomor 1. Nomor 3 jadi nomor 2. **Semua orang berubah identitas** cuma gara-gara satu orang pergi.
>
> Nah `key={i}` itu persis begitu — kalian ngasih identitas berdasarkan urutan.
>
> Yang bener: pakai **nomor punggung**. Nomor punggungnya nempel di orangnya, nggak peduli dia berdiri di mana. Itu `key={p.id}`."

**Peragakan akibatnya** — ini 90 detik dan mengubah pemahaman:

1. Buat daftar dengan `key={i}`, tiap kartu berisi `<input>`
2. Ketik sesuatu di input kartu **kedua**
3. Hapus kartu **pertama**
4. Ketikannya sekarang nempel di kartu yang salah

> "Lihat. Datanya bener, tapi yang diketik pindah ke barang lain. Bug kayak gini yang bikin orang begadang, dan penyebabnya cuma satu huruf: `i`."

**Kalau data tidak punya `id`:** minta mereka menambahkannya di `data.js`. Itu jawaban yang benar — bukan mencari cara lain.

---

# BAGIAN 6 — Praktik Live: Katalog Produk (98–114 menit)
> Semua yang diajarkan hari ini disatukan. Bangun bersama peserta, jangan ditunjukkan jadi.

## Struktur akhir yang dituju

```
src/
├── components/
│   ├── Navbar.jsx        ← sudah dibuat di Bagian 3
│   ├── ProductCard.jsx   ← props
│   ├── Badge.jsx         ← default props + conditional
│   └── Footer.jsx
├── data.js               ← array of objects, dari Tugas 1 mereka
└── App.jsx               ← merangkai semuanya
```

## `App.jsx` sebagai perekat

```jsx
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import { produk } from './data';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-5xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Katalog Produk</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {produk.map(p => (
            <ProductCard
              key={p.id}
              nama={p.nama}
              harga={p.harga}
              stok={p.stok}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
```

> **CARA SAMPAIKAN saat semuanya tersambung:**
> "Coba lihat `App.jsx` sekarang. Kalian bisa baca ini kayak baca daftar isi: ada navbar, ada judul, ada grid kartu, ada footer. **Struktur halamannya kelihatan dari kodenya.**
>
> Bandingin sama file P2 kalian yang isinya string HTML numpuk di dalam `.map()`. Itu bedanya."

## Momen wow: Hot Module Replacement

Ubah warna di `ProductCard.jsx`, simpan, **jangan refresh**. Tampilannya berubah sendiri seketika.

> "Nggak usah refresh. Nggak usah save-terus-pencet-F5. Kalian simpan, dia langsung berubah. Namanya *hot reload* — dan ini yang bikin kerja pakai Vite jauh lebih enak daripada dua minggu kemarin."

---

# BAGIAN 7 — Penutup & Tugas 2 (114–120 menit)

## Rangkuman: satu benang merah

> "Semua hari ini temanya satu: **berhenti nyuruh, mulai mendeskripsikan.**
>
> Minggu lalu kalian bilang ke browser: 'ambil elemen ini, isi ini, gambar ulang.' Hari ini kalian cuma bilang: 'kalau datanya begini, tampilannya begini.'
>
> Dan satu lagi — kalian nggak belajar banyak hal baru hari ini. `.map()` itu punya kalian dari minggu lalu. Destructuring juga. Import-export juga. Yang baru cuma **wadahnya**."

## Tugas 2 — React Migration

Mencakup **P3 dan P4**, dikumpulkan **sebelum Pertemuan 5**.

**Yang bisa dikerjakan setelah hari ini** — sebutkan ini eksplisit supaya mereka tidak menunggu:

- Inisialisasi Vite + Tailwind **di repositori yang sama**, bukan repo baru
- Pecah UI jadi minimal empat komponen
- Kirim data lewat props
- Render daftar dengan `.map()` + `key` yang stabil

**Yang menunggu P4:** `useState`, form terkendali, immutability.

> **CARA SAMPAIKAN:**
> "Setengah Tugas 2 udah bisa kalian kerjain malam ini. Jangan tunggu Pertemuan 4 — kalau nunggu, kalian bakal ngerjain dua pertemuan sekaligus dalam semalam.
>
> Dan ingat: **project React-nya di repo yang sama.** Jangan bikin repo baru. Produk kalian itu satu, dari awal sampai akhir."

---

# LAMPIRAN A — Pertanyaan yang Pasti Muncul

**"Kenapa nggak pakai cara minggu lalu aja? Kan lebih simpel."**
> Buat halaman sekecil kemarin, memang lebih simpel — jujur saja. Tapi begitu ada tombol, form, dan data yang berubah-ubah, cara kemarin bikin kalian harus ingat manggil ulang fungsi gambar tiap kali. Lupa sekali, tampilan kalian bohong. React yang ngurus itu.

**"`node_modules` isinya ribuan file. Itu semua kepake?"**
> Nggak. Itu bahan mentah buat dipakai saat kalian ngoding. Pas kalian `npm run build` nanti, yang dikirim ke pengunjung cuma beberapa file kecil. Dan folder itu nggak ikut masuk Git — makanya ada `.gitignore`.

**"JSX itu HTML atau JavaScript?"**
> JavaScript. Dia cuma **kelihatan** kayak HTML biar enak dibaca. Sebelum jalan, dia diterjemahkan dulu jadi JavaScript biasa. Makanya `class` jadi `className` — karena `class` itu kata yang sudah dipakai JavaScript.

**"Komponen saya nggak muncul, tapi nggak ada error."**
> Cek tiga hal berurutan: huruf pertama nama komponennya kapital? sudah di-`export default`? nama di `import` sudah cocok? Kalau ketiganya benar dan masih tidak muncul, buka Console — biasanya ada peringatan kuning yang terlewat.

**"Boleh pakai AI buat ngerjain Tugas 2?"**
> Boleh, dan untuk React ini AI memang sangat bantu. Tapi hati-hati: AI sering ngasih kode React gaya lama — `class component`, atau `key={index}`, atau `useEffect` yang nggak perlu. Kalau kalian nggak tahu bedanya, kalian bakal ngumpulin pola yang udah ditinggalin.
>
> Dan di breakout room saya bakal tunjuk satu baris dan tanya kenapa. **Kemampuan nemuin kesalahan kode AI itu justru nambah nilai kalian.**

---

# LAMPIRAN B — Praktik Langsung

## Terminal — perintah yang dipakai hari ini

| Perintah | Gunanya |
|---|---|
| `npm create vite@latest` | Bikin project baru |
| `npm install` | Ambil semua bahan yang dibutuhkan |
| `npm run dev` | Nyalakan server pengembangan |
| `Ctrl + C` | Matikan server |

**Ajarkan `Ctrl + C`.** Peserta yang tidak tahu ini akan menutup terminal, lalu bingung kenapa port-nya "dipakai".

## Membaca error React

Error React itu panjang, tapi **baris pertama biasanya sudah menjawab**. Ajarkan membaca dari atas, bukan panik melihat panjangnya.

| Pesan | Artinya |
|---|---|
| `Objects are not valid as a React child` | Anda menaruh object langsung di JSX. Ambil propertinya. |
| `Each child in a list should have a unique "key" prop` | Lupa `key` di `.map()` |
| `X is not defined` | Lupa `import`, atau salah ketik nama |
| Layar putih kosong | **Buka Console.** Selalu ada errornya di sana. |

> **CARA SAMPAIKAN:**
> "Layar putih itu bukan misteri. Itu artinya React nyerah pas nge-render, dan alasannya **selalu** ada di Console. Jangan tebak-tebak — buka F12 dulu."

## Struktur folder — kebiasaan yang ditanam sekarang

```
src/components/    ← satu file per komponen, nama file = nama komponen
src/data.js
```

Satu komponen satu file. Kelihatan berlebihan untuk empat komponen, tapi di Capstone nanti mereka akan punya tiga puluh.

---

# LAMPIRAN C — Tips & Kebiasaan untuk Ditanamkan

**1. Bikin komponen kecil dulu, baru dirangkai.**
Jangan menulis `App.jsx` sepanjang 200 baris lalu dipecah. Bikin `ProductCard` sampai benar, baru pakai.

**2. Satu komponen, satu tanggung jawab.**
`ProductCard` menampilkan satu produk. Titik. Dia tidak mengurus filter, tidak mengurus judul halaman.

**3. Nama komponen menjelaskan perannya, bukan tampilannya.**
`ProductCard`, bukan `KotakPutih`. Ini kebiasaan yang sama dengan penamaan class di P1 — sebut sambungannya.

**4. Simpan sesering mungkin — hot reload bikin ini gratis.**
Tulis dua baris, simpan, lihat. Tidak ada alasan menulis 50 baris sebelum mengecek.

**5. Baca Console setiap kali ada yang aneh.**
React memberi peringatan yang sangat jelas, tapi peringatan itu tidak muncul di halaman — hanya di Console.

**6. Kalau macet 15 menit, format 4 baris.**
Sama seperti P1 dan P2: coba apa / harap apa / malah apa + error / sudah coba apa.

---

# LAMPIRAN D — Tiga Kesalahan Mentor Baru di P3

**1. Menganggap setup itu formalitas dan buru-buru melewatinya.**
Ini kesalahan paling mahal di P3. Peserta yang project-nya tidak jalan tidak bisa mengikuti 80 menit sisanya — dan mereka biasanya diam, bukan bertanya. Sediakan 16 menit penuh untuk Bagian 2, dan berkeliling mengecek layar satu per satu.

**2. Menjelaskan Virtual DOM terlalu dalam.**
Godaannya besar karena topiknya menarik. Tapi peserta yang baru kenal komponen tidak butuh tahu soal *reconciliation* atau *fiber*. Cukup: ada denah, dibandingkan, cuma yang beda yang diubah. Berhenti di situ.

**3. Mengajarkan `key` sekadar "biar nggak ada warning".**
Kalau disampaikan begitu, semua peserta akan pakai `key={index}` dan warningnya hilang — masalahnya baru meledak di Tugas 2 saat ada penghapusan item. Peragakan akibatnya, jangan cuma sebut aturannya.

---

# LAMPIRAN E — Checklist Persiapan Anda

**H-3 sebelum kelas:**
- [ ] Kirim panduan instalasi **Node.js LTS** ke grup, lengkap dengan tautan & cara mengecek (`node -v`)
- [ ] Minta peserta balas hasil `node -v` di grup — catat siapa yang belum
- [ ] Ingatkan bahwa project React dibuat **di repositori Tugas 1 mereka**, bukan repo baru

**H-1:**
- [ ] **Jalankan seluruh Bagian 2 dari nol di folder kosong.** Ini wajib — perintah Vite & Tailwind berubah cukup sering. Kalau ada yang berbeda, perbaiki dokumen ini dulu.
- [ ] Siapkan **project jadi** di flashdisk/ZIP sebagai jalan darurat
- [ ] Siapkan `node_modules` di flashdisk untuk WiFi lemah
- [ ] Latih peragaan `key={index}` yang rusak sampai lancar — ini momen paling berkesan hari ini
- [ ] Siapkan kode P2 peserta untuk ditampilkan di pembuka

**Hari-H:**
- [ ] Terminal dan editor terbuka berdampingan, font minimal 18pt
- [ ] Browser + Console terbuka
- [ ] Sediakan 5 menit di awal untuk masalah Node.js yang tersisa
- [ ] **Berkeliling saat Bagian 2** — jangan menunggu peserta angkat tangan

---

*Dokumen ini disiapkan untuk Pertemuan 3 — Metro Institute Season 2, Divisi Frontend.*
