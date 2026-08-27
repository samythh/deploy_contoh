# PERTEMUAN 5 — Integrasi Konsep Lanjutan
### Multi-Page Routing & Custom Hooks
**Metro Institute Season 2 — Divisi Frontend**
Durasi: 120 menit | Topik: React Router v8, URL Params, Query Strings, `useNavigate`, Custom Hooks, wawasan SSR

> **CARA PENYAMPAIAN:** materi ini **langsung ke cara modern**. Cara lama disebut sebagai selingan satu-dua kalimat sambil lewat. Lapisan **KENAPA** tetap wajib — disampaikan lewat kalimat, bukan peragaan.

> **CATATAN VERSI — WAJIB DICEK H-1:** materi ini ditulis untuk **React Router v8**, paket **`react-router`** (bukan `react-router-dom`) dalam ***declarative mode***. Nama paket dan cara import berubah sejak v7 — kalau peserta mencari di internet, mereka akan menemukan tutorial `react-router-dom` yang import-nya berbeda. **Sebut ini eksplisit di kelas.**
>
> Sebelum mengajar, pasang sendiri dari nol dan pastikan `npm i react-router` beserta seluruh import di dokumen ini masih berlaku. Kalau berubah, perbaiki dokumen dulu — jangan improvisasi di depan kelas.

---

## Cara Membaca Dokumen Ini

| Lapis | Isi |
|---|---|
| **APA** | Faktanya. Ini yang biasanya diajarkan orang. |
| **BANDINGKAN** | Alternatif yang ada, dan apa bedanya. |
| **KENAPA** | Alasan kita memilih satu di antaranya. Ini yang membuat peserta paham, bukan cuma hafal. |

Ditambah blok **CARA SAMPAIKAN** — kalimat dan analogi siap ucap.

---

## Situasi Khusus P5 Ini: Pertemuan Paling Lega

Setelah P3 (setup yang rawan) dan P4 (immutability yang bikin pusing), P5 relatif ramah. Tidak ada konsep yang gagal diam-diam, tidak ada aturan yang berlawanan dengan intuisi.

**Manfaatkan kelegaan itu untuk dua hal:**

1. **Beri porsi nyata untuk Custom Hooks.** Ini konsep yang sering diajarkan terburu-buru di akhir, padahal Tugas 3 mewajibkannya.
2. **Bantu yang tertinggal.** Peserta yang Tugas 2-nya belum selesai punya kesempatan mengejar hari ini, karena materinya tidak menumpuk seberat P4.

> **CARA SAMPAIKAN di awal:**
> "Dua minggu terakhir lumayan bikin pusing ya. Hari ini lebih santai — nggak ada aturan aneh yang bikin layar diem tanpa error.
>
> Yang kita bikin hari ini: aplikasi kalian bisa punya **banyak halaman**. Dan alamatnya bisa di-share ke orang lain."

---

## Prinsip Besar yang Anda Tanamkan Hari Ini

> **URL itu bukan sekadar alamat. URL itu state yang bisa dibagikan.**

Di P4 mereka menyimpan pilihan pengguna di `useState` — hidup di dalam browser, hilang saat refresh, tidak bisa dikirim ke orang lain.

Hari ini mereka belajar sebagian state justru **lebih baik ditaruh di URL**: halaman mana yang sedang dibuka, item mana yang dilihat, filter apa yang aktif. Karena URL bisa di-bookmark, di-share, dan ditekan tombol Back.

Kalimat yang layak diulang:

> "Kalau kalian kirim link ke temen dan yang dia lihat beda sama yang kalian lihat — berarti ada state yang salah tempat."

---

# BAGIAN 0 — Pembuka & Sambungan dari P4 (0–8 menit)

## Yang Anda lakukan

**Buka dengan Todo/katalog P4 mereka.**

> "Aplikasi kalian sekarang udah bisa bereaksi. Diklik berubah, diketik nyimpen. Bagus.
>
> Tapi coba lihat alamatnya di atas — dari tadi **nggak pernah berubah**. Mau kalian klik apa pun, alamatnya tetap `localhost:5173`.
>
> Artinya: kalian nggak bisa ngasih link ke temen buat nunjukin satu produk tertentu. Nggak bisa di-bookmark. Tombol Back di browser juga nggak ngapa-ngapain.
>
> Hari ini kita benerin itu."

### Cek kesiapan

- Siapa yang Tugas 2-nya sudah masuk lewat Pull Request?
- Siapa yang project React-nya masih jalan?

Peserta yang Tugas 2-nya belum selesai perlu dicatat — hari ini kesempatan mereka mengejar.

---

# BAGIAN 1 — Kenapa Routing Dibutuhkan (8–20 menit)

## BANDINGKAN — cara klasik vs SPA

**Cara klasik (yang mereka pakai di P1–P2):** tiap halaman satu file HTML. Klik link → browser mengunduh halaman baru → **seluruh halaman dimuat ulang**.

**SPA:** satu file HTML saja. Klik link → JavaScript **menukar isi layar**, alamat berubah, tapi halaman **tidak** dimuat ulang.

> **CARA SAMPAIKAN — Analogi Pindah Ruangan vs Pindah Rumah:**
> "Cara klasik itu kayak ini: tiap kalian mau ke dapur, kalian keluar rumah, tutup pintu, terus buka rumah baru yang isinya dapur. Lampu mati semua, AC mulai dari awal, barang yang kalian pegang jatuh.
>
> SPA itu kalian **jalan ke ruangan sebelah**. Rumahnya sama, lampunya tetap nyala, barang yang kalian pegang tetap di tangan.
>
> Nah 'barang yang kalian pegang' itu **state**. Di cara klasik, tiap pindah halaman semua state hilang. Di SPA, dia tetap ada."

## KENAPA ini penting untuk aplikasi mereka

Tiga hal yang hilang kalau halaman dimuat ulang:

1. **State** — keranjang belanja kosong lagi, form yang diisi hilang
2. **Kecepatan** — CSS, JavaScript, gambar diunduh ulang semua
3. **Kehalusan** — layar berkedip putih di tiap perpindahan

## Yang tidak boleh hilang: alamat tetap harus berubah

Ini bagian yang sering salah paham. SPA **bukan** berarti alamatnya tetap sama.

> "Kalau alamatnya nggak berubah, kalian kehilangan tiga hal: bookmark, tombol Back, dan kemampuan ngirim link.
>
> Jadi React Router itu tugasnya dua: **ganti isi layar tanpa reload**, sekaligus **tetap ganti alamatnya**. Dua-duanya, bukan salah satu."

---

# BAGIAN 2 — Setup React Router (20–40 menit)

## Pasang

```bash
npm i react-router
```

> ⚠️ **Paketnya `react-router`, BUKAN `react-router-dom`.** Sejak v7 keduanya digabung dan `react-router-dom` ditinggalkan.
>
> **Sebut ini ke kelas secara eksplisit**, karena mayoritas tutorial di internet masih memakai nama lama. Peserta yang mencari sendiri akan menemukan `import { BrowserRouter } from "react-router-dom"` dan bingung kenapa berbeda.

## Struktur dasar

```jsx
// main.jsx
import { BrowserRouter } from "react-router";

<BrowserRouter>
  <App />
</BrowserRouter>
```

```jsx
// App.jsx
import { Routes, Route, Link } from "react-router";

function App() {
  return (
    <>
      <nav className="flex gap-4 p-4 border-b">
        <Link to="/">Beranda</Link>
        <Link to="/tentang">Tentang</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
```

Empat bagian yang harus dikenali:

| Bagian | Tugasnya |
|---|---|
| `<BrowserRouter>` | Membungkus seluruh aplikasi. Dipasang sekali di `main.jsx` |
| `<Routes>` | Memilih **satu** rute yang cocok dengan alamat sekarang |
| `<Route>` | Satu pasangan: alamat → komponen |
| `<Link>` | Pengganti `<a>` yang tidak memuat ulang halaman |

## `path="*"` — halaman 404

```jsx
<Route path="*" element={<NotFound />} />
```

`*` artinya "cocok dengan apa pun yang tidak tertangkap rute di atasnya". Taruh **paling bawah**.

> "Ini bukan pelengkap. Kalau nggak ada, orang yang salah ketik alamat bakal lihat **layar putih kosong** — dan mereka bakal ngira aplikasi kalian rusak."

## PERAGAAN WAJIB: `<Link>` vs `<a>` — 2 menit

Ini peragaan terpenting di bagian ini, dan memakai apa yang sudah mereka bangun di P4.

1. Pakai halaman yang punya state — misalnya Todo List dari P4, isi beberapa todo
2. Berpindah halaman pakai **`<a href="/tentang">`** → kembali → **todo-nya hilang**, layar sempat berkedip putih
3. Berpindah pakai **`<Link to="/tentang">`** → kembali → **todo-nya masih ada**, tidak ada kedip

> **CARA SAMPAIKAN:**
> "Lihat bedanya. Yang pertama, layar sempat putih terus semua isian kalian hilang — karena browser beneran mulai dari nol.
>
> Yang kedua, mulus dan state-nya utuh. Bedanya cuma satu tag.
>
> Aturannya gampang: **di dalam aplikasi React kalian, jangan pakai `<a>` lagi. Pakai `<Link>`.** `<a>` cuma buat link ke website lain."

---

# BAGIAN 3 — URL Params & Halaman Detail (40–58 menit)

## APA

```jsx
<Route path="/produk/:id" element={<DetailProduk />} />
```

`:id` itu **variabel di dalam alamat**. Alamat `/produk/7` dan `/produk/99` sama-sama cocok dengan rute itu.

```jsx
import { useParams } from "react-router";

function DetailProduk() {
  const { id } = useParams();      // destructuring — dari P2
  const produk = daftar.find(p => p.id === id);   // .find() — dari P2

  if (!produk) return <p>Produk tidak ditemukan.</p>;

  return <h1>{produk.nama}</h1>;
}
```

**Sebut eksplisit:** `useParams()` mengembalikan object, dan `{ id }` itu destructuring dari P2. `.find()` juga dari P2. Bukan hal baru.

## KENAPA URL dipakai sebagai sumber data

> **CARA SAMPAIKAN — Analogi Nomor Kamar Hotel:**
> "Bayangin kalian nginep di hotel. Kalian nggak bilang ke temen 'aku di kamar yang catnya biru sebelah lift'. Kalian bilang **nomor kamarnya**.
>
> Kenapa? Karena nomor kamar itu **bisa dikasih ke orang lain**, dan mereka bisa langsung ke situ tanpa nanya-nanya.
>
> Nah `/produk/7` itu nomor kamar. Alamatnya sendiri yang bawa informasinya. Kalian bisa kirim ke temen, bisa di-bookmark, bisa dibuka lagi besok."

## ⚠️ JEBAKAN YANG PASTI TERJADI: `useParams` selalu mengembalikan string

```jsx
const { id } = useParams();        // id = "7", bukan 7

daftar.find(p => p.id === id);     // ❌ gagal kalau p.id itu angka
daftar.find(p => p.id === Number(id));   // ✅
daftar.find(p => String(p.id) === id);   // ✅ juga
```

**Sebut ini duluan**, sebelum mereka menghabiskan 20 menit debugging.

> "Alamat itu teks. `/produk/7` — angka 7 di situ sebenarnya **huruf** 7, bukan angka.
>
> Jadi kalau data kalian id-nya angka, bandinginnya bakal selalu gagal. Nggak ada error, cuma 'tidak ditemukan' terus. Ubah dulu tipenya."

## Jangan lupa tangani "tidak ditemukan"

Peserta akan lupa ini, lalu aplikasinya *crash* saat orang mengetik `/produk/999`:

```jsx
if (!produk) return <p>Produk tidak ditemukan.</p>;
```

**Colokan ke P6:** ini pola yang sama dengan *Empty State* — salah satu dari lima status antarmuka yang wajib di Tugas 3. Sebut sambil lewat.

---

# BAGIAN 4 — Query Strings & `useNavigate` (58–72 menit)

## `useSearchParams` — filter yang bisa dibagikan

```jsx
import { useSearchParams } from "react-router";

const [params, setParams] = useSearchParams();
const kategori = params.get("kategori") ?? "semua";

<button onClick={() => setParams({ kategori: "makanan" })}>Makanan</button>
```

Alamatnya jadi `/produk?kategori=makanan`.

## BANDINGKAN — kapan `useState`, kapan `useSearchParams`

Ini keputusan yang sering asal, padahal ada aturannya.

| Simpan di | Untuk |
|---|---|
| `useState` | Hal yang **tidak perlu dibagikan** — dropdown terbuka/tertutup, teks yang sedang diketik |
| `useSearchParams` | Hal yang **orang lain perlu lihat sama** — filter, pencarian, halaman ke berapa |

> **CARA SAMPAIKAN:**
> "Tesnya satu kalimat: **kalau kalian kirim link ini ke temen, dia harus lihat yang sama nggak?**
>
> Filter kategori? Iya — kalau saya kirim link 'produk kategori makanan', temen saya harus lihat makanan juga. Taruh di URL.
>
> Menu dropdown lagi kebuka? Nggak penting. Taruh di `useState`.
>
> Ini juga yang bikin tombol Back di browser jalan. Kalau filter kalian di `useState`, pencet Back malah keluar dari halaman — bukan balik ke filter sebelumnya."

**Colokan ke Tugas 3:** fitur pencarian dan pagination yang diwajibkan di Tugas 3 paling baik ditaruh di URL. Sebut sekarang.

## `useNavigate` — pindah halaman lewat kode

```jsx
import { useNavigate } from "react-router";

const navigate = useNavigate();

const handleSubmit = (e) => {
  e.preventDefault();
  simpanData();
  navigate("/sukses");        // pindah setelah pekerjaan selesai
};
```

## KENAPA tidak semuanya pakai `useNavigate` saja

> **CARA SAMPAIKAN:**
> "Aturannya gampang: **kalau yang mutusin pindah itu MANUSIA, pakai `<Link>`. Kalau yang mutusin itu KODE, pakai `useNavigate`.**
>
> Orang klik menu? Manusia yang mutusin → `<Link>`.
> Form berhasil disimpan terus pindah ke halaman sukses? Kode yang mutusin → `useNavigate`.
>
> Kenapa nggak `<Link>` semua? Karena `<Link>` itu jadi tag `<a>` beneran di HTML — bisa di-klik-kanan, bisa dibuka di tab baru, kelihatan sama screen reader. Tombol yang dibungkus `useNavigate` kehilangan semua itu."

Alasan terakhir menyambung ke **aksesibilitas dari P1** dan ke **audit Lighthouse di P8**. Sebut sambungannya.

---

# BAGIAN 5 — Custom Hooks (72–92 menit)
> Diwajibkan di Tugas 3 — beri porsi nyata, jangan diburu-buru di akhir.

## APA — dan kenapa terdengar lebih rumit daripada kenyataannya

Custom hook adalah **fungsi JavaScript biasa** yang:

1. Namanya diawali `use`
2. Di dalamnya memakai hook lain (`useState`, `useEffect`, dan sebagainya)

Itu saja. Tidak ada sintaks khusus, tidak ada `import` khusus.

```jsx
// hooks/useLocalStorage.js
import { useState, useEffect } from "react";

export function useLocalStorage(kunci, nilaiAwal) {
  const [nilai, setNilai] = useState(() => {
    const tersimpan = localStorage.getItem(kunci);
    return tersimpan ? JSON.parse(tersimpan) : nilaiAwal;
  });

  useEffect(() => {
    localStorage.setItem(kunci, JSON.stringify(nilai));
  }, [kunci, nilai]);

  return [nilai, setNilai];
}
```

Pakainya persis seperti `useState`:

```jsx
const [todos, setTodos] = useLocalStorage("todos", []);
```

**Sebut:** kode di dalamnya **persis** yang mereka tulis di P4 Bagian 6. Yang berubah cuma dipindah ke fungsi terpisah dan diberi nama.

## KENAPA dipisah jadi hook

> **CARA SAMPAIKAN:**
> "Di P4 kalian nulis kode simpan-ke-LocalStorage di dalam `TodoApp`. Jalan.
>
> Terus minggu ini kalian butuh nyimpen favorit juga. Terus tema gelap juga. Kalian bakal nyalin kode yang sama tiga kali.
>
> Dan pas ada bug di situ? Kalian harus benerin di tiga tempat, dan pasti ada satu yang kelupaan.
>
> Custom hook itu bukan fitur canggih. Ini **cuma mindahin kode berulang ke satu tempat** — hal yang kalian udah lakuin sejak Pertemuan 2 waktu bikin file `utils.js`. Bedanya, yang ini boleh pakai `useState` di dalamnya."

## KENAPA namanya wajib diawali `use`

Bukan aturan gaya. React memakai awalan itu untuk memeriksa apakah aturan hook dipatuhi.

```jsx
function ambilData() { useState(...) }      // ❌ React tidak memeriksanya
function useAmbilData() { useState(...) }   // ✅
```

> "Sama kayak komponen yang wajib huruf besar di Pertemuan 3. React bedain jenis fungsi dari namanya."

## ⚠️ SALAH PAHAM YANG SERING TERJADI: hook berbagi LOGIKA, bukan STATE

Ini penting dan hampir selalu terlewat.

```jsx
function KomponenA() {
  const [nilai, setNilai] = useLocalStorage("a", 0);   // state sendiri
}

function KomponenB() {
  const [nilai, setNilai] = useLocalStorage("b", 0);   // state SENDIRI, terpisah
}
```

> **CARA SAMPAIKAN — Analogi Resep:**
> "Custom hook itu **resep**, bukan masakan.
>
> Dua orang pakai resep rendang yang sama. Tapi rendangnya **masing-masing** — kalau A makan rendangnya, rendang B nggak berkurang.
>
> Jadi kalau dua komponen pakai custom hook yang sama, mereka dapat state masing-masing. **Bukan** state bersama.
>
> Kalau kalian butuh state yang beneran dipakai bareng, itu namanya global state — dan itu Pertemuan 7."

## Contoh kedua: `useWindowSize`

```jsx
export function useWindowSize() {
  const [lebar, setLebar] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setLebar(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);   // cleanup!
  }, []);

  return lebar;
}
```

**Ini contoh `useEffect` yang benar** menurut aturan P4: `window` itu di luar React, jadi memang butuh effect. Dan **cleanup-nya wajib** — tanpa `removeEventListener`, listener menumpuk tiap komponen dipasang ulang.

> "Ingat yang di P4 soal cleanup? Ini contoh nyatanya. Tanpa baris terakhir itu, tiap kali komponen kalian muncul-hilang-muncul, listener-nya numpuk. Sepuluh kali muncul, sepuluh listener jalan bareng."

---

# BAGIAN 6 — Wawasan Industri: Batas SPA & SSR (92–104 menit)
> Bukan praktik. Tujuannya peserta paham **posisi** arsitektur yang mereka pakai, bukan menguasai Next.js.

## Peragakan batasnya dulu — 2 menit

Buka aplikasi mereka → klik kanan → **View Page Source** (bukan Inspect).

Yang terlihat hampir kosong:

```html
<div id="root"></div>
<script src="/assets/index.js"></script>
```

> "Nah. Semua yang kalian bikin — navbar, kartu, tombol — **nggak ada di situ**. Yang dikirim server itu halaman kosong plus satu file JavaScript.
>
> Isinya baru muncul setelah JavaScript-nya diunduh dan dijalankan di browser."

## KENAPA ini jadi masalah

**1. SEO.** Sebagian crawler mesin pencari dan **hampir semua pratinjau media sosial** membaca HTML mentah tanpa menjalankan JavaScript. Yang mereka lihat: halaman kosong.

> "Coba kalian share link aplikasi kalian ke WhatsApp. Biasanya muncul pratinjau judul dan gambar kan? Kalau SPA, seringnya kosong — karena yang baca pratinjau itu nggak jalanin JavaScript."

**2. Waktu muat pertama.** Pengunjung harus menunggu: unduh HTML kosong → unduh JavaScript → jalankan → baru lihat isi. Di jaringan lambat, itu beberapa detik layar putih.

## APA — bagaimana SSR menjawabnya

Framework seperti **Next.js** menjalankan React **di server** lebih dulu, mengirim HTML yang **sudah berisi**, baru JavaScript mengambil alih.

| | SPA (yang kalian pakai) | SSR (Next.js) |
|---|---|---|
| Yang dikirim server | HTML kosong + JS | HTML sudah berisi |
| Terlihat crawler? | Sering tidak | Ya |
| Muat pertama | Lebih lambat | Lebih cepat |
| Butuh server Node | Tidak — cukup hosting statis | Ya |
| Rumitnya | Sederhana | Lebih rumit |

## KENAPA kita tetap belajar SPA, bukan langsung Next.js

**Jangan biarkan peserta pulang mengira mereka belajar yang salah.**

> **CARA SAMPAIKAN:**
> "Ada yang mikir 'lho, kalau Next.js lebih bagus, kenapa kita belajar yang ini?'
>
> Dua alasan.
>
> Pertama, **Next.js itu React**. Semua yang kalian pelajari — komponen, props, state, hooks — kepake persis sama di situ. Next.js nambahin lapisan di atasnya. Kalau kalian belum kuat React, belajar Next.js itu belajar dua hal sekaligus.
>
> Kedua, dan ini yang sering nggak disebut: **SPA itu bukan pilihan yang salah.** Buat aplikasi di balik login — dashboard admin, sistem internal kantor — SEO nggak ada gunanya sama sekali. Nggak ada crawler yang bisa masuk. SPA justru lebih sederhana dan lebih murah.
>
> Yang butuh SSR itu konten **publik**: toko online, blog, berita. Yang perlu ditemukan orang lewat Google.
>
> Jadi jawabannya bukan 'mana yang lebih bagus'. Jawabannya **'aplikasi kalian jenis yang mana?'**"

**Colokan ke P8:** audit Lighthouse akan memperlihatkan skor Performance yang dipengaruhi hal ini. Sebut sambil lewat.

---

# BAGIAN 7 — Penutup & Tugas 3 (104–120 menit)

## Rangkuman: satu benang merah

> "Temanya hari ini: **URL itu bukan sekadar alamat — dia state yang bisa dibagikan.**
>
> Halaman mana yang dibuka, item mana yang dilihat, filter apa yang aktif — semua itu lebih baik di URL daripada di `useState`. Karena URL bisa di-bookmark, di-share, dan Back-nya jalan.
>
> Tesnya satu kalimat: **kalau kalian kirim link ke temen dan yang dia lihat beda — ada state yang salah tempat.**"

## Tugas 3 — mencakup P5 & P6

Dikumpulkan **sebelum Pertemuan 7**. Sampaikan pembagiannya eksplisit:

**Sudah bisa dikerjakan malam ini:**

| Syarat Tugas 3 | Diajarkan hari ini |
|---|---|
| Routing 3 halaman: `/`, `/item/:id`, 404 | Bagian 2 |
| Halaman detail pakai `useParams` | Bagian 3 |
| Minimal satu **custom hook** | Bagian 5 |
| Pencarian & pagination di URL | Bagian 4 |

**Menunggu P6:** Axios, `interface` TypeScript, lima status antarmuka.

> **CARA SAMPAIKAN — dan ini penting:**
> "Tugas 3 itu **yang paling berat** dari empat tugas. Bobot terbesarnya di penanganan lima status antarmuka — itu materi minggu depan.
>
> Jadi tolong, bagian routing-nya **selesaikan minggu ini**. Kalau kalian nunggu, minggu depan kalian ngerjain routing sambil belajar API sambil belajar TypeScript. Itu nggak akan selesai."

Peringatan ini nyata: Tugas 3 punya syarat terbanyak dari keempat tugas.

---

# LAMPIRAN A — Pertanyaan yang Pasti Muncul

**"Tutorial di YouTube pakai `react-router-dom`, kok kita `react-router`?"**
> Sejak versi 7, dua paket itu digabung jadi satu bernama `react-router`. `react-router-dom` masih jalan tapi sudah ditinggalkan. Isi dan cara pakainya sama — cuma nama paket dan barisan `import`-nya yang beda. Kalau kalian ikut tutorial lama, ganti saja `from "react-router-dom"` jadi `from "react-router"`.

**"Kenapa halaman saya jadi putih setelah pindah pakai `<a>`?"**
> Karena `<a>` bikin browser memuat ulang seluruh aplikasi dari nol. Di dalam aplikasi React, selalu pakai `<Link>`. `<a>` cuma untuk link ke website lain.

**"`useParams` saya dapat id-nya, tapi produknya nggak ketemu."**
> Hampir pasti karena `useParams` selalu mengembalikan **string**. Alamat itu teks — `/produk/7` itu huruf 7, bukan angka 7. Kalau id di data kalian angka, pakai `Number(id)` atau bandingkan dengan `String(p.id)`.

**"Refresh di halaman `/produk/7` malah 404 pas di-deploy."**
> Ini muncul nanti di P8 saat deploy. Server hosting mengira `/produk/7` itu file yang tidak ada. Solusinya satu file konfigurasi kecil yang menyuruh server selalu mengirim `index.html`. Vercel biasanya sudah otomatis. **Sebut sekarang supaya tidak panik nanti.**

**"Bedanya custom hook sama fungsi biasa apa?"**
> Custom hook boleh memakai hook lain di dalamnya — `useState`, `useEffect`. Fungsi biasa tidak boleh. Itu satu-satunya beda, dan itulah kenapa namanya wajib diawali `use`: supaya React tahu harus memeriksanya.

**"Kalau dua komponen pakai custom hook yang sama, state-nya nyambung nggak?"**
> **Tidak.** Custom hook itu resep, bukan masakan. Dua komponen pakai resep yang sama, tapi masakannya masing-masing. Kalau butuh state yang beneran dipakai bareng, itu global state — Pertemuan 7.

**"Kalau Next.js lebih bagus, kenapa kita belajar SPA?"**
> Next.js **itu** React — semua yang kalian pelajari kepake persis sama di situ. Dan SPA bukan pilihan yang salah: untuk aplikasi di balik login, SEO tidak ada gunanya sama sekali. Yang butuh SSR itu konten publik yang perlu ditemukan lewat Google.

**"Boleh pakai AI buat Tugas 3?"**
> Boleh, tapi hati-hati satu hal: **AI hampir pasti ngasih kalian `react-router-dom`**, karena data latihannya penuh tutorial lama. Kalau kalian nggak sadar, `import`-nya bakal salah. Menemukan dan memperbaiki itu justru **nambah nilai** kalian.

---

# LAMPIRAN B — Praktik Langsung

## Membaca alamat sebagai data

| Bentuk | Contoh | Diambil dengan |
|---|---|---|
| Path param | `/produk/7` | `useParams()` |
| Query string | `/produk?kategori=makanan&hal=2` | `useSearchParams()` |

> **CARA SAMPAIKAN:**
> "Bedanya gampang. **Path param** itu buat nunjuk **barang mana** — dia bagian dari identitas halaman. **Query string** itu buat **cara nampilin** — filter, urutan, halaman ke berapa. Nggak ngubah barangnya, cuma ngubah tampilannya."

## React DevTools masih dipakai

Tab **Components** → klik komponen halaman → terlihat props dari router. Kebiasaan dari P4 tetap berlaku: **jangan menebak, buka DevTools.**

## Uji tombol Back

Setelah routing jalan, minta peserta menekan tombol **Back** browser beberapa kali. Ini uji paling cepat untuk memastikan routing-nya benar.

> "Kalau Back-nya malah keluar dari aplikasi, berarti ada perpindahan yang kalian bikin tanpa lewat router."

---

# LAMPIRAN C — Tips & Kebiasaan untuk Ditanamkan

**1. Satu halaman satu file, di folder `pages/`.**
```
src/
├── components/     ← potongan yang dipakai ulang
├── pages/          ← satu file per rute
└── hooks/          ← custom hooks
```
Ini melanjutkan kebiasaan "satu komponen satu file" dari P3.

**2. `<Link>` di dalam aplikasi, `<a>` cuma ke luar.**

**3. Rute 404 selalu ada, dan selalu paling bawah.**

**4. Tanyakan "perlu dibagikan nggak?" sebelum memilih `useState` atau URL.**

**5. Custom hook dibuat saat kode diulang kedua kalinya, bukan pertama.**
Jangan membuat abstraksi untuk sesuatu yang baru dipakai sekali — belum tentu bentuknya sudah benar.

**6. Cleanup di custom hook yang memasang listener.**
Setiap `addEventListener` harus punya `removeEventListener` di `return`.

---

# LAMPIRAN D — Tiga Kesalahan Mentor Baru di P5

**1. Tidak menyebut bahwa paketnya berganti nama.**
Peserta akan mencari sendiri di internet, menemukan `react-router-dom`, dan bingung kenapa berbeda dengan yang di kelas. Sebut sekali di awal Bagian 2, dan sebut lagi di penutup — ini akan menghemat banyak pertanyaan di grup.

**2. Menghabiskan waktu di routing, lalu Custom Hooks diburu-buru.**
Godaannya besar karena routing lebih visual dan lebih memuaskan diajarkan. Tapi **Custom Hooks diwajibkan di Tugas 3**, sedangkan routing hanya salah satu syarat. Jaga Bagian 5 tetap dapat 20 menit.

**3. Membuat SPA terdengar seperti pilihan yang salah saat membahas SSR.**
Kalau wawasan industri disampaikan sebagai "sebenarnya Next.js lebih bagus", peserta pulang merasa baru saja belajar teknologi usang. Tekankan: **Next.js itu React**, dan SPA memang pilihan yang tepat untuk aplikasi di balik login.

---

# LAMPIRAN E — Checklist Persiapan Anda

**H-3 sebelum kelas:**
- [ ] Ingatkan peserta membawa project React P4 dalam keadaan jalan
- [ ] Tanyakan siapa yang Tugas 2-nya sudah masuk — catat yang belum, hari ini kesempatan mengejar
- [ ] Baca [materi ini](P5-Materi-Mentor-Frontend-Routing.md) sampai Lampiran E

**H-1:**
- [ ] **Pasang `react-router` dari nol dan uji seluruh import di dokumen ini.** Nama paket berubah sejak v7 — kalau ada yang berbeda, perbaiki dokumen dulu.
- [ ] Latih peragaan `<a>` vs `<Link>` dengan state yang hilang — pastikan kedipnya terlihat jelas
- [ ] Siapkan **View Page Source** dari aplikasi jadi untuk peragaan Bagian 6
- [ ] Jalankan seluruh `demo/` di project Vite
- [ ] Siapkan Todo/katalog P4 peserta untuk ditampilkan di pembuka

**Hari-H:**
- [ ] Editor + browser + React DevTools berdampingan, font minimal 18pt
- [ ] Alamat browser **terlihat jelas** di proyektor — hari ini alamat adalah materi
- [ ] Sediakan 5 menit awal untuk peserta yang project P4-nya bermasalah

---

*Dokumen ini disiapkan untuk Pertemuan 5 — Metro Institute Season 2, Divisi Frontend.*
