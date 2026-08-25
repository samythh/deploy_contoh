# PERTEMUAN 2 — Modern JavaScript, Manipulasi Data & Layout Multi-Kolom
### Panduan Materi & Cara Penyampaian untuk Mentor
**Metro Institute Season 2 — Divisi Frontend**
Durasi: 120 menit | Topik: CSS Grid, Breakpoint Multi-Kolom, ES6+ Fundamentals, Manipulasi Array, Modul & Scope

> **CATATAN VERSI (hasil rapat 25 Agustus 2026):** materi Arsitektur Web & HTTP Methods **dipindah ke P1**; sebagai gantinya **CSS Grid & Mobile-First turun ke sini** dari P1. Pertemuan ditutup dengan praktik mengubah halaman statis P1 menjadi dinamis. Tugas P1 dan P2 kini digabung jadi satu — **Tugas 1: Static Foundation**, dikumpulkan lewat Pull Request sebelum P3. Lihat `docs/Catatan-Perubahan.md`.

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

## Situasi Khusus P2 Ini: Halaman Mereka Masih Diam

Sadari sejak awal: peserta baru saja menyelesaikan P1 dan sudah punya halaman web buatan sendiri — navbar, hero, grid kartu, footer. Halaman itu rapi, responsif, dan **sama sekali tidak bisa diapa-apakan**. Diklik tidak bereaksi, datanya harus diketik manual satu per satu di HTML.

Itu titik masuk Anda hari ini, dan jauh lebih kuat daripada memulai dari nol. Mereka sudah punya rasa sakitnya; JavaScript adalah obatnya.

**Buka kelas dengan menunjukkan halaman P1 mereka sendiri**, lalu tanyakan: "kalau produknya nambah jadi 50, kalian mau nulis 50 kartu satu-satu?" Biarkan mereka merasakan sebentar bahwa jawabannya tidak masuk akal.

> **CARA SAMPAIKAN — Analogi Bodi & Mesin:**
> "Minggu lalu kalian bikin **bodi mobilnya** — dan bagus, kelihatan mengkilap. Tapi coba dorong: nggak jalan. Bodi tanpa mesin cuma pajangan.
> Hari ini kita pasang **mesinnya**. JavaScript itu yang bikin halaman kalian bisa mikir, ngolah data, dan bereaksi.
> Bedanya sama minggu lalu: hari ini nggak ada yang kelihatan cantik di layar. Kita kerja di **console** — nggak ada tampilan, nggak ada tombol, cuma logika dan data. Itu wajar, dan itu memang mesinnya. Mesin mobil juga jelek dilihat."

**Antisipasi penurunan energi.** Setelah P1 yang penuh umpan balik visual, P2 akan terasa mundur — semua kembali ke teks di console. Sebut ini di depan supaya tidak terasa seperti ada yang salah. Selipkan `console.table()` sedini mungkin sebagai satu-satunya kemenangan visual hari ini.

---

## Prinsip Besar yang Anda Tanamkan Hari Ini

P2 bukan tentang menghafal sintaks ES6+. P2 adalah tentang menanamkan **kebiasaan bertanya "kenapa"** — kenapa cara ini dipilih daripada cara lama.

JavaScript modern (ES6+) hampir semuanya adalah **jawaban atas rasa sakit dari cara lama**. Arrow function, destructuring, `.map()` — semuanya lahir karena cara sebelumnya menyusahkan. Kalau peserta hanya hafal sintaks barunya tanpa tahu sakit yang diobatinya, mereka tidak akan tahu kapan memakainya.

Kalimat yang layak Anda ulang hari ini:

> "Fitur modern itu bukan biar keren. Tiap fitur baru itu obat buat masalah lama. Kalau kalian tahu masalahnya, kalian ngerti kenapa fiturnya ada."

---

# BAGIAN 0 — Pembuka & Sambungan dari P1 (0–8 menit)

## Yang Anda lakukan

1. Tunjukkan **hasil akhir program** — web app yang menarik data dari API dan tampil rapi di HP. "Dalam 8 pertemuan, ini yang kalian bangun."
2. Tunjuk bagian yang mengambil & mengolah data. "Nah, yang bikin data ini bisa diambil, disaring, dan ditampilkan — itu JavaScript. Itu yang kita mulai hari ini."
3. Sambungkan ke minggu lalu: "Halaman yang kalian bikin di P1 itu bodinya. Hari ini kita pasang mesinnya." Tanpa logika, HTML/CSS cuma tampilan mati.

### Ukur kelas Anda

Tiga pertanyaan cepat, catat jawabannya — ini menentukan kecepatan Anda 8 pertemuan ke depan:
- Siapa yang tugas P1-nya sudah selesai dan bisa dibuka sekarang? (ini juga cara halus mengecek siapa yang tertinggal)
- Siapa yang tahu apa itu "variabel"?
- Siapa yang belum pernah buka browser console sama sekali?

Pertanyaan pertama penting: peserta yang belum menyelesaikan P1 akan kesulitan merasakan "sakit"-nya menulis kartu produk manual — dan itu justru motivasi utama materi hari ini.

---

# BAGIAN 1 — CSS Grid & Layout Multi-Kolom (8–30 menit)
> Lanjutan langsung dari Flexbox di P1. Selesaikan sisi tampilan dulu, baru masuk ke logika — supaya peserta punya grid yang siap diisi data di Bagian 6 nanti.
>
> **Mobile-first sudah diajarkan di P1** (Bagian 7), termasuk prefiks `sm:` `md:` `lg:`. Hari ini tinggal **menerapkannya pada layout multi-kolom** — jangan ulangi teorinya dari nol, cukup panggil ulang analogi packing dan langsung praktik.
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

# BAGIAN 2 — Variabel Modern: let & const (30–38 menit)

## APA

```javascript
const nama = "Mikail";   // nilai tetap, tidak bisa diganti
let umur = 20;           // nilai bisa berubah
umur = 21;               // boleh
```

## BANDINGKAN — `var` (lama) vs `let`/`const` (modern)

Tunjukkan cara lama, lalu masalahnya:

```javascript
// CARA LAMA — var
var kota = "Padang";
var kota = "Jakarta";   // ini TIDAK error, padahal harusnya mencurigakan
```

`var` membiarkan Anda mendeklarasikan ulang variabel yang sama tanpa peringatan. Ini sumber bug yang sulit dilacak — Anda kira punya satu variabel, ternyata tertimpa di tempat lain.

```javascript
// CARA MODERN — const menolak penimpaan
const kota = "Padang";
const kota = "Jakarta";   // ERROR — langsung ketahuan
```

## KENAPA `const` jadi pilihan default

Aturan praktis industri: **pakai `const` dulu untuk semuanya. Ganti ke `let` hanya kalau nilainya memang perlu berubah. Jangan pakai `var` sama sekali.**

### KENAPA urutannya begitu

> **CARA SAMPAIKAN:**
> "Ini kebalik dari intuisi ya. Kok malah default-nya yang nggak bisa diubah?
> Justru itu bagusnya. Kalau kalian pakai `const`, kalian sedang bilang ke diri sendiri dan ke pembaca kode: 'nilai ini nggak akan berubah, tenang aja.' Itu bikin kode lebih gampang dipahami.
> Baru kalau kalian *sengaja* butuh nilai berubah — misal skor game yang naik — kalian pakai `let`. Jadi tiap kali lihat `let`, pembaca langsung tahu 'oh, ini bakal berubah, saya perhatikan.'
> `var` itu peninggalan lama. Lupakan aja."

---

# BAGIAN 3 — ES6+ Fundamentals (38–58 menit)
> Inti sintaks modern. Tiap fitur diajarkan lewat pola: tunjukkan cara lama yang menyakitkan → tunjukkan obatnya.

## 3.1 Arrow Function

### BANDINGKAN

```javascript
// CARA LAMA
function tambah(a, b) {
    return a + b;
}

// ARROW FUNCTION
const tambah = (a, b) => a + b;
```

### KENAPA

Lebih ringkas, dan (yang lebih penting nanti di React) menangani konteks `this` dengan lebih terduga. Untuk P2, cukup tekankan keringkasan dan bahwa ini **bentuk yang akan mereka lihat di mana-mana** di kode modern.

> **CARA SAMPAIKAN:**
> "Dua-duanya bikin fungsi yang sama persis. Tapi yang bawah lebih pendek. Di React nanti kalian bakal nulis fungsi kecil-kecil terus-terusan — bayangkan kalau tiap kali harus nulis `function` panjang. Arrow function itu bikin hidup kalian lebih ringkas."

Jangan overload dengan aturan `this` yang rumit di P2. Simpan untuk saat dibutuhkan.

## 3.2 Template Literals

### BANDINGKAN

```javascript
const nama = "Mikail";

// CARA LAMA — tanda plus di mana-mana
const pesan = "Halo, " + nama + "! Umurmu " + umur + " tahun.";

// TEMPLATE LITERAL — pakai backtick ` dan ${}
const pesan = `Halo, ${nama}! Umurmu ${umur} tahun.`;
```

### KENAPA

> **CARA SAMPAIKAN:**
> "Yang atas itu penuh tanda tambah dan tanda kutip yang gampang salah. Satu kutip kelupaan, error.
> Yang bawah, kalian tulis kalimat normal, terus sisipkan variabel pakai `${}`. Kayak isi formulir. Jauh lebih enak dibaca dan lebih jarang salah. Perhatikan tanda petiknya beda ya — ini backtick, biasanya di kiri atas keyboard, bukan petik biasa."

## 3.3 Destructuring

### BANDINGKAN

```javascript
const user = { nama: "Mikail", kota: "Padang", umur: 20 };

// CARA LAMA — ambil satu-satu, ulang kata "user"
const nama = user.nama;
const kota = user.kota;
const umur = user.umur;

// DESTRUCTURING — ambil sekaligus
const { nama, kota, umur } = user;
```

### KENAPA

> **CARA SAMPAIKAN:**
> "Yang atas, kalian nulis 'user' tiga kali. Kalau ada 10 properti, sepuluh kali.
> Destructuring itu kayak bilang: 'dari kotak user ini, tolong keluarin nama, kota, sama umur.' Sekali tulis. Ini bakal kalian pakai TERUS di React nanti — makanya penting nempel sekarang."

Tunjukkan juga versi array (akan dipakai di React hooks nanti):
```javascript
const warna = ["merah", "hijau"];
const [pertama, kedua] = warna;   // pertama="merah", kedua="hijau"
```

## 3.4 Spread & Rest Operator

Keduanya pakai `...`, tapi kebalikan.

### BANDINGKAN

```javascript
// SPREAD — "buka isi" sebuah array/object
const angka = [1, 2, 3];
const angkaBaru = [...angka, 4, 5];   // [1, 2, 3, 4, 5]

// Menggabung object
const dasar = { nama: "Mikail" };
const lengkap = { ...dasar, kota: "Padang" };  // { nama, kota }
```

```javascript
// REST — "kumpulkan sisa" jadi satu
const [juara, ...lainnya] = [1, 2, 3, 4];
// juara = 1, lainnya = [2, 3, 4]
```

### KENAPA spread penting (colok ke depan)

> **CARA SAMPAIKAN:**
> "Ingat baik-baik yang namanya spread ini. Di React nanti ada aturan: kalau mau ubah data, jangan diubah langsung — bikin salinan baru yang sudah diubah. Nah, `...` inilah alat bikin salinannya. Sekarang mungkin belum kelihatan gunanya, tapi ini bakal jadi salah satu yang paling sering kalian pakai."

---

# BAGIAN 4 — Manipulasi Array (58–88 menit)
> **PALING PENTING di P2.** Beri porsi terbesar. Ini jantung frontend modern — data selalu datang sebagai array, dan mengolahnya adalah pekerjaan sehari-hari.

## Konteks: Kenapa Ini Sepenting Itu

Data dari server hampir selalu berbentuk **array of objects**:

```javascript
const produk = [
    { nama: "Laptop", harga: 8000000, stok: 5 },
    { nama: "Mouse",  harga: 150000,  stok: 0 },
    { nama: "Keyboard", harga: 300000, stok: 12 },
];
```

Pekerjaan frontend: menyaring (yang stoknya ada), mengubah (format harga), menghitung (total). Semua pakai method array. Kuasai ini, dan setengah pekerjaan frontend selesai.

## BANDINGKAN — Cara Lama (`for` loop) vs Method Modern

Ini perbandingan kunci P2. Tulis keduanya berdampingan.

**Tugas: ambil semua nama produk.**

```javascript
// CARA LAMA — for loop
const namaProduk = [];
for (let i = 0; i < produk.length; i++) {
    namaProduk.push(produk[i].nama);
}

// CARA MODERN — .map()
const namaProduk = produk.map(p => p.nama);
```

### KENAPA method modern menang

> **CARA SAMPAIKAN:**
> "Yang atas: kalian harus urus counter `i`, urus kondisi berhenti, urus push manual. Empat baris buat satu ide sederhana.
> Yang bawah: satu baris yang **berbunyi seperti kalimat** — 'dari produk, ambil tiap nama.' Kode yang bagus itu yang bunyinya kayak niat kalian."

## Lima Method Wajib

Ajarkan lewat "kata kerja"-nya — apa yang dia lakukan pada array.

### `.map()` — UBAH tiap item, hasilnya array baru ukuran sama

```javascript
const harga = produk.map(p => p.harga);
// [8000000, 150000, 300000] — jumlah item sama, isinya diubah
```
> "map itu tukang ubah. Masuk 3 item, keluar 3 item, tapi tiap item sudah diproses."

### `.filter()` — SARING, hasilnya array yang lebih pendek

```javascript
const tersedia = produk.filter(p => p.stok > 0);
// hanya produk yang stoknya > 0 — Mouse hilang karena stok 0
```
> "filter itu satpam. Tiap item ditanya syaratnya. Lolos → masuk. Nggak lolos → ditolak."

### `.find()` — CARI SATU item pertama yang cocok

```javascript
const laptop = produk.find(p => p.nama === "Laptop");
// mengembalikan { nama: "Laptop", ... } — satu object, bukan array
```
> "find itu nyari orang di kerumunan. Ketemu yang pertama cocok → berhenti, kasih orang itu."

### `.some()` — TANYA "ada nggak yang cocok?", hasilnya `true` / `false`

```javascript
const adaYangHabis = produk.some(p => p.stok === 0);
// true — karena Mouse stoknya 0
```

Berbeda dari tiga method sebelumnya, `.some()` tidak mengembalikan data. Dia mengembalikan **jawaban ya/tidak**.

#### BANDINGKAN — kenapa tidak pakai `.filter()` saja?

Pemula biasanya menyelesaikan pertanyaan ini dengan alat yang sudah dikenal:

```javascript
// CARA MEMUTAR — bikin array baru, lalu cuma dilihat panjangnya
const adaYangHabis = produk.filter(p => p.stok === 0).length > 0;

// CARA LANGSUNG — .some() memang dibuat untuk pertanyaan ini
const adaYangHabis = produk.some(p => p.stok === 0);
```

#### KENAPA

Dua alasan, dan yang kedua lebih penting.

Pertama, **efisiensi**: `.filter()` memeriksa seluruh array sampai habis lalu membuat array baru — array yang langsung dibuang setelah dihitung panjangnya. `.some()` berhenti begitu menemukan satu yang cocok.

Kedua, **kejelasan niat**: `.filter(...).length > 0` memaksa pembaca menerjemahkan dua langkah untuk sampai pada satu pertanyaan sederhana. `.some(...)` menyatakan pertanyaannya secara langsung. Ini kembali ke prinsip Bagian 4: kode yang baik berbunyi seperti niatnya.

> **CARA SAMPAIKAN — Analogi Absen Kelas:**
> "Saya masuk kelas, terus nanya: 'ada nggak yang belum ngumpulin tugas?'
> Saya nggak butuh daftar lengkap siapa aja yang belum. Begitu nemu satu orang, jawabannya sudah **ada** — saya berhenti nyari.
> Nah itu `.some()`. Sedangkan `.filter()` itu kalau saya bilang 'sebutkan semua yang belum ngumpulin' — beda pertanyaan, beda alat.
> Aturan gampangnya: kalau pertanyaan kalian bisa dijawab **'iya' atau 'nggak'**, pakai `.some()`. Kalau butuh **daftarnya**, baru `.filter()`."

**Colok ke depan:** di React nanti, `.some()` sering jadi penentu apakah sesuatu ditampilkan atau tidak — misalnya banner peringatan "Ada barang yang habis stok" yang hanya muncul kalau `.some()` bernilai `true`. Sebutkan ini supaya mereka tahu method ini bukan pelengkap.

### `.reduce()` — RINGKAS jadi satu nilai

```javascript
const totalHarga = produk.reduce((total, p) => total + p.harga, 0);
// menjumlahkan semua harga jadi satu angka
```
`reduce` paling sulit — akui itu. Jelaskan pelan: `total` adalah "keranjang" yang isinya bertambah tiap putaran, `0` adalah isi awal keranjang.

> **CARA SAMPAIKAN untuk reduce:**
> "Ini yang paling bikin pusing, wajar. Bayangin kalian keliling nagih uang kas. Kalian bawa amplop (total), awalnya kosong (0). Tiap orang kalian datangi, uangnya kalian masukin amplop. Selesai keliling, amplop isinya total semua. Nah `reduce` itu keliling + amplopnya."

## BANDINGKAN — Method Rantai (Chaining)

Kekuatan sesungguhnya: menyambung method. Tunjukkan ini sebagai puncak Bagian 4.

```javascript
// Ambil nama produk yang stoknya ada, dalam satu alur
const namaTersedia = produk
    .filter(p => p.stok > 0)   // saring dulu yang ada stok
    .map(p => p.nama);         // lalu ambil namanya

// ["Laptop", "Keyboard"]
```

> **CARA SAMPAIKAN:**
> "Ini kayak jalur produksi pabrik. Data masuk, lewat mesin filter (buang yang jelek), lanjut ke mesin map (kemas), keluar jadi hasil akhir. Tiap mesin satu tugas. Kalau ini kalian tulis pakai for loop, jadi belasan baris yang susah dibaca."

Tekankan bahwa `.map()` dan `.filter()` ini **persis** yang akan mereka pakai di React untuk menampilkan daftar. Ini bukan latihan sia-sia — ini alat harian mereka.

---

# BAGIAN 5 — Modul, Scope & Hoisting (88–96 menit)
> Singkat. Konsep saja — mereka belum punya project multi-file, jadi cukup pahami idenya.

## APA

Kode tidak ditumpuk dalam satu file raksasa. Dipecah jadi file-file kecil yang saling meminjam.

```javascript
// file: utils.js
export const formatHarga = (n) => `Rp ${n.toLocaleString()}`;

// file: main.js
import { formatHarga } from './utils.js';
```

## BANDINGKAN — Satu File Raksasa vs Banyak File Kecil

### KENAPA dipecah

> **CARA SAMPAIKAN:**
> "Bayangin lemari baju yang semua isinya ditumpuk jadi satu gunungan. Nyari kaus kaki? Bongkar semua.
> Modul itu kayak lemari berlaci: laci kaus kaki, laci baju, laci celana. Tiap file punya tugasnya. `export` itu naruh barang di laci biar bisa dipinjam. `import` itu ambil dari laci file lain.
> Nanti di React, tiap komponen kalian jadi satu file. Import-export ini bakal jadi napas sehari-hari."

Untuk P2 cukup sampai sini. Jangan masuk default export vs named export secara detail — itu overload sekarang.

---

# BAGIAN 6 — Praktik Live: Halaman P1 Jadi Hidup (96–115 menit)
> **Puncak P2, dan jembatan mental ke React.** Semua yang diajarkan hari ini bermuara ke sini.

## Kenapa bagian ini yang terpenting

Sampai Bagian 5, peserta baru punya potongan-potongan: Grid, `.map()`, `.filter()`. Di bagian ini potongan itu disatukan menjadi satu alur yang akan mereka pakai **setiap hari** mulai P3:

```
DATA  →  TRANSFORMASI  →  TAMPILAN
array of objects   .filter() / .map()   HTML di layar
```

Tanamkan alur tiga kata ini secara eksplisit. Di React nanti, alurnya persis sama — hanya bahasanya yang berubah.

## Langkah, dikerjakan bersama peserta

**1. Pindahkan data keluar dari HTML.** Kartu yang di P1 ditulis manual satu per satu, sekarang jadi array di file terpisah.

```javascript
// data.js
const produk = [
  { nama: "Rendang",   kategori: "Makanan",  harga: 35000 },
  { nama: "Es Tebak",  kategori: "Minuman",  harga: 12000 },
  { nama: "Sate Padang", kategori: "Makanan", harga: 28000 },
];
```

**2. Render kartu dari array pakai `.map()`.**

```javascript
const wadah = document.querySelector(".daftar-kartu");

const gambarKartu = (daftar) => {
  wadah.innerHTML = daftar
    .map(p => `
      <article class="kartu">
        <h2 class="kartu-judul">${p.nama}</h2>
        <p class="kartu-harga">Rp ${p.harga.toLocaleString("id-ID")}</p>
      </article>
    `)
    .join("");
};

gambarKartu(produk);
```

> **CARA SAMPAIKAN — momen yang harus Anda tunggu:**
> "Perhatikan HTML kalian sekarang. Kartunya **hilang** dari file HTML — tinggal satu wadah kosong. Tapi di browser, kartunya tetap muncul.
> Sekarang coba tambah satu item di array. Refresh. Muncul sendiri.
> **Itu** bedanya halaman mati sama halaman hidup. Minggu lalu, nambah satu produk artinya kalian nyalin 8 baris HTML. Sekarang cukup nambah satu baris data."

**3. Tambahkan filter interaktif.**

```javascript
document.querySelector("#filter").addEventListener("change", (e) => {
  const pilihan = e.target.value;
  const hasil = pilihan === "Semua"
    ? produk
    : produk.filter(p => p.kategori === pilihan);
  gambarKartu(hasil);   // data disaring, lalu digambar ulang
});
```

> **CARA SAMPAIKAN:**
> "Lihat pola yang barusan terjadi: **data berubah → tampilan digambar ulang.** Kita nggak nyentuh HTML-nya satu per satu, kita cuma ganti datanya terus suruh gambar ulang.
> Ingat baik-baik pola ini. Di React nanti kalian bahkan nggak perlu manggil `gambarKartu()` — React yang otomatis gambar ulang tiap datanya berubah. Tapi cara berpikirnya persis yang barusan kalian tulis."

## Colokan ke depan — sebut eksplisit

Tulis di papan atau slide, dan tinggalkan sampai kelas selesai:

| Yang kalian tulis hari ini | Namanya di React (P3–P4) |
|---|---|
| `array.map()` menghasilkan HTML | *List rendering* |
| `gambarKartu(hasil)` dipanggil manual | *Re-render* otomatis |
| Variabel `produk` yang berubah | `state` |

> "Kalian bukan lagi belajar hal baru minggu depan. Kalian cuma belajar **nama yang lebih pendek** buat yang barusan kalian kerjain sendiri."

## Kalau waktu tidak cukup

Langkah 1 dan 2 (`.map()` untuk render) **wajib selesai di kelas** — itu inti Tugas 1. Langkah 3 (filter) boleh jadi pekerjaan rumah, karena polanya sudah terlihat dari langkah 2.

---

# BAGIAN 7 — Penutup & Tugas (115–120 menit)

## Rangkuman: Satu Benang Merah

> "Semua yang kita pelajari hari ini punya satu tema: **cara modern lahir buat ngobatin sakitnya cara lama.** `const` ngobatin bug `var`. Arrow ngobatin fungsi yang kepanjangan. `.map/.filter` ngobatin for loop yang ribet. Kalau kalian ingat sakitnya, kalian ngerti kenapa obatnya ada."

## Tugas 2 (sesuai silabus): 5 Studi Kasus Manipulasi Data

Beri satu array of objects (misal data mahasiswa atau produk), lalu 5 soal:

1. Ambil semua nama (→ `.map()`)
2. Saring yang memenuhi syarat tertentu, misal nilai ≥ 80 (→ `.filter()`)
3. **Dua pertanyaan berurutan tentang hal yang sama:**
   a. Ada nggak mahasiswa yang nilainya di bawah 60? (→ `.some()`)
   b. Kalau ada, siapa orang pertamanya? (→ `.find()`)
4. Hitung total/rata-rata (→ `.reduce()`)
5. Gabungan: saring lalu ambil nama, dalam satu rantai (→ `.filter().map()`)

**Kenapa soal 3 dibuat berpasangan, bukan dipisah jadi dua soal:** karena justru
perbedaan keduanya yang ingin diuji. Dua pertanyaan ini terdengar mirip, tapi
menuntut jawaban dengan bentuk berbeda — `.some()` menjawab **"ada nggak?"**
(hasilnya `true`/`false`), `.find()` menjawab **"yang mana?"** (hasilnya satu
object). Peserta yang memakai `.find()` untuk kedua-duanya belum menangkap
bedanya. Menaruhnya bersebelahan memaksa mereka menyadari itu sendiri.

Cara ini juga menjaga jumlah soal tetap **5** sesuai silabus.

> **CARA SAMPAIKAN untuk soal 3:**
> "Perhatikan baik-baik: dua pertanyaan ini beda. Yang pertama cuma minta jawaban
> **iya atau nggak** — kayak saya nanya 'ada yang belum ngumpulin?'. Yang kedua minta
> **orangnya** — 'siapa?'. Pertanyaan beda, alat beda. Jangan pakai satu alat buat dua
> pertanyaan cuma karena kebetulan hasilnya kelihatan benar."

**Deliverable pembeda (gaya reasoning kita):**
Di tiap jawaban, tulis komentar 1 baris: **kenapa** memilih method itu.

```javascript
// pakai .filter() karena kita membuang sebagian item berdasarkan syarat,
// bukan mengubah tiap item
const lulus = mahasiswa.filter(m => m.nilai >= 80);
```

**Kriteria penilaian (umumkan di awal):**

| Bobot | Aspek |
|---|---|
| 40% | Method yang dipilih tepat sesuai tugasnya |
| 30% | Kualitas alasan di komentar |
| 20% | Kode jalan & benar hasilnya |
| 10% | Kerapian (penamaan variabel, konsistensi) |

> **CARA SAMPAIKAN:**
> "Yang saya nilai bukan cuma jalan atau nggak. Tapi apakah kalian bisa jelasin kenapa pakai `.filter()` di sini dan `.map()` di sana. Boleh pakai AI buat bantu — tapi di breakout room saya bakal tunjuk satu baris dan tanya kenapa. Kalau kalian nggak bisa jawab, berarti itu bukan kode kalian."

---

# LAMPIRAN A — Pertanyaan yang Pasti Muncul

**"Minggu lalu kita bikin tampilan, kok sekarang balik ke teks doang di console?"**
> Pertanyaan yang wajar, dan jujur saja: hari ini memang mundur soal tampilan. Minggu lalu kalian bikin bodi mobilnya. Hari ini mesinnya — dan mesin itu memang jelek dilihat. Tapi tanpa dia, bodinya cuma pajangan. Mulai Pertemuan 3, mesin ini yang bikin tampilan kalian hidup.

**"Kapan JavaScript-nya nyambung ke halaman HTML saya?"**
> Pertemuan 3, pakai React. Sengaja belum hari ini — kalau logika dan tampilan diajarkan barengan, saat error kalian nggak akan tahu yang salah logikanya atau HTML-nya. Kuasai mesinnya dulu di console, baru kita pasang ke bodi.

**"Kenapa nggak pakai for loop aja? Kan sama hasilnya."**
> Hasil bisa sama, tapi `.map/.filter` lebih pendek, lebih terbaca, dan lebih jarang salah. Yang lebih penting: React — yang kita pakai nanti — memang menuntut cara berpikir `.map/.filter` untuk menampilkan data. Jadi ini bukan pilihan gaya, ini persiapan.

**"var, let, const bedanya ribet. Bingung kapan pakai yang mana."**
> Aturannya simpel: `const` untuk semua. Ganti `let` cuma kalau nilainya harus berubah. `var` jangan dipakai sama sekali. Sudah, tiga aturan itu saja.

**"reduce susah banget, nggak ngerti."**
> Wajar, ini yang tersulit. Ingat amplop nagih kas: amplop mulai kosong, tiap orang nambahin isinya, akhirnya jadi total. Kalau belum klik hari ini, nggak apa — yang penting `.map` dan `.filter` dulu nempel. reduce menyusul dengan latihan.

**"Boleh pakai AI buat ngerjain tugas?"**
> Boleh, dengan syarat kalian paham tiap baris. AI itu kayak kalkulator — berguna kalau kalian sudah ngerti hitungannya, bahaya kalau dipakai buat menghindari paham. Di review saya tanya acak, jadi pastikan kalian ngerti, bukan cuma nyalin.

**"HTTP method itu nanti dipakai di mana?"**
> Di Pertemuan 6, saat kita ambil data dari server beneran. Hari ini kalian cukup paham konsepnya: GET baca, POST bikin, PUT ubah, DELETE hapus. Nanti kalian tinggal pakai.

---

# LAMPIRAN B — Praktik Langsung: Browser Console

Berbeda dari P1 yang memakai editor dan file, seluruh praktik hari ini di **console browser**. Ini disengaja: console memberi umpan balik seketika tanpa perlu save-refresh, jadi peserta bisa mencoba puluhan ide dalam semenit. Ajarkan cara membukanya di awal supaya semua bisa ikut mengetik, bukan cuma menonton.

**Buka console:**
- Chrome/Edge: `F12` → tab **Console**, atau `Ctrl + Shift + J`
- Ketik kode, tekan Enter, hasil langsung muncul

**Cara pakai untuk latihan:**
```javascript
const angka = [1, 2, 3, 4, 5];
angka.filter(n => n > 2);        // langsung lihat hasilnya: [3, 4, 5]
```

**`console.log()` untuk melihat isi:**
```javascript
const hasil = produk.map(p => p.nama);
console.log(hasil);              // cetak ke console biar kelihatan
```

**Tips console yang berguna:**
- `console.table(produk)` → tampilkan array of objects sebagai **tabel rapi**. Efek "wow" untuk data. Tunjukkan ini.
- Panah atas ↑ → ulang perintah sebelumnya, hemat ketik ulang
- `clear()` → bersihkan console kalau sudah penuh

> **CARA SAMPAIKAN:**
> "Console ini lab mini kalian. Nggak perlu setup ribet, nggak perlu file. Punya ide? Ketik, Enter, langsung lihat jalan atau enggak. Programmer beneran pun sering coba-coba di console dulu sebelum nulis di file. Biasakan."

---

# LAMPIRAN C — Tips & Kebiasaan untuk Ditanamkan Sejak P2

**1. Coba di console dulu sebelum yakin.**
Ragu `.filter()` jalan atau tidak? Jangan menebak — ketik di console, lihat hasilnya. Membangun kebiasaan menguji, bukan mengasumsi.

**2. Baca pesan error, jangan panik.**
JavaScript error itu cerewet tapi informatif. `undefined is not a function` biasanya berarti salah ketik nama method. `Cannot read property 'x' of undefined` berarti mengakses sesuatu yang belum ada. Ajarkan: error itu petunjuk, bukan vonis.

**3. Beri nama variabel yang menjelaskan diri.**
```javascript
const x = produk.filter(p => p.stok > 0);   // buruk: x itu apa?
const produkTersedia = produk.filter(p => p.stok > 0);   // baik
```
Nama yang baik membuat kode terbaca tanpa komentar.

**4. Satu baris, satu ide — lalu cek.**
Lanjutan prinsip yang berlaku sepanjang program: tulis sedikit, jalankan, lihat, lanjut. Jangan tulis 20 baris lalu bingung mana yang salah.

**5. Kalau macet 15 menit, bertanya dengan format:**
```
1. Yang saya coba: ...
2. Yang saya harap terjadi: ...
3. Yang malah terjadi (+ pesan error): ...
4. Yang sudah saya coba: ...
```
70% masalah ketemu jawabannya saat menulis baris ke-4. Ini teknik nyata bernama *rubber duck debugging*.

---

# LAMPIRAN D — Tiga Kesalahan Mentor Baru di P2 (versi JS)

**1. Menganggap "cuma logika" itu membosankan lalu buru-buru.**
Godaan mempercepat bagian JS karena "belum ada yang kelihatan" itu jebakan. Justru fondasi inilah yang menentukan apakah mereka survive di P3-P4. Pelan dan mantap.

**2. Mengajarkan sintaks tanpa masalah yang diobatinya.**
Kalau Anda cuma bilang "ini arrow function, ini cara nulisnya", peserta hafal tapi tak paham kapan pakai. **Selalu tunjukkan cara lama yang menyakitkan dulu**, baru obatnya. Rasa sakit itu yang bikin fitur baru bermakna.

**3. Menjejalkan reduce sampai semua orang paham.**
`reduce` itu sulit dan tidak apa-apa kalau belum semua paham di P2. Memaksakannya sampai kelas frustrasi lebih merugikan daripada membiarkannya matang dengan latihan. Prioritaskan `.map` dan `.filter` nempel sempurna; reduce menyusul.

---

# LAMPIRAN E — Checklist Persiapan Anda

**H-3 sebelum kelas:**
- [ ] Kirim panduan ke grup: cukup browser (Chrome/Edge terbaru) + editor teks. Belum perlu Node/project untuk P2.
- [ ] Siapkan file berisi array of objects untuk demo & tugas (data produk/mahasiswa)
- [ ] Siapkan contoh "cara lama vs cara modern" tiap fitur, siap di-paste

**H-1:**
- [ ] Latih demo chaining `.filter().map()` di console sampai lancar
- [ ] Coba `console.table()` — pastikan tampil rapi (momen wow)
- [ ] Siapkan 5 soal tugas + kunci jawabannya

**Hari-H:**
- [ ] Console terbuka besar di layar, font diperbesar (min 18pt)
- [ ] Ajak peserta buka console mereka di menit-menit awal — pastikan semua bisa, jangan ada yang cuma nonton

---

*Dokumen ini disiapkan untuk Pertemuan 2 (versi silabus baru — JavaScript) — Metro Institute Season 2, Divisi Frontend.*
