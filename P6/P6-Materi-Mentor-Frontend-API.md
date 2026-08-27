# PERTEMUAN 6 — Studi Kasus Tingkat Menengah
### RESTful API Consumption & Asynchronous UI Handling
**Metro Institute Season 2 — Divisi Frontend**
Durasi: 120 menit | Topik: async/await, Axios, Lima Status Antarmuka, tab Network, Pengantar TypeScript

> **CARA PENYAMPAIAN:** materi ini **langsung ke cara modern**. Cara lama disebut sebagai selingan satu-dua kalimat sambil lewat. Lapisan **KENAPA** tetap wajib.

> ⚠️ **P6 ADALAH TITIK RISIKO.** Ini pertemuan terpadat di seluruh program: async, Axios, lima status antarmuka, tab Network, **dan** pengantar TypeScript 25 menit — semuanya dalam 120 menit. Sekaligus penyumbang bobot terbesar Tugas 3.
>
> Baca **"Kalau Waktu Tidak Cukup"** di [RUNDOWN.md](RUNDOWN.md) **sebelum** mengajar, bukan saat sudah kepepet di menit ke-100.

---

## Cara Membaca Dokumen Ini

| Lapis | Isi |
|---|---|
| **APA** | Faktanya. Ini yang biasanya diajarkan orang. |
| **BANDINGKAN** | Alternatif yang ada, dan apa bedanya. |
| **KENAPA** | Alasan kita memilih satu di antaranya. Ini yang membuat peserta paham, bukan cuma hafal. |

Ditambah blok **CARA SAMPAIKAN** — kalimat dan analogi siap ucap.

---

## Situasi Khusus P6 Ini: Padat, dan Taruhannya Nilai Tugas

Dua hal yang membuat P6 berbeda dari pertemuan lain:

**1. Ini pertemuan terpadat.** Lima blok materi besar dalam 120 menit, dan salah satunya (TypeScript) adalah bahasa baru.

**2. Bobot terbesar Tugas 3 ada di sini.** Kriteria penilaian Tugas 3 menyebut *"kelengkapan penanganan lima status antarmuka (bobot terbesar)"*. Kalau Bagian 3 tidak tuntas, nilai tugas peserta yang jadi korban.

**Konsekuensinya:** kalau harus memotong, potong dari **Axios interceptor** dan **async theory** — jangan dari **lima status antarmuka**.

> **CARA SAMPAIKAN di awal:**
> "Hari ini padat, saya jujur aja. Tapi ada satu bagian yang saya minta kalian perhatiin lebih dari yang lain: **lima status antarmuka.**
>
> Itu bobot terbesar di Tugas 3. Dan lebih dari itu — itu yang bedain aplikasi yang kelihatan profesional sama yang kelihatan tugas kuliah."

---

## Prinsip Besar yang Anda Tanamkan Hari Ini

> **Data dari server itu tidak pasti. Tugas kalian bukan menampilkan data — tugas kalian menangani semua kemungkinan.**

Selama lima pertemuan, data mereka selalu ada, selalu benar, selalu instan — karena datanya ditulis sendiri di `data.js`.

Mulai hari ini datanya datang dari komputer orang lain, lewat internet yang bisa lambat, bisa putus, bisa mengirim yang tidak diduga.

Kalimat yang layak diulang:

> "Kode yang cuma jalan pas semuanya lancar itu belum selesai. Yang bikin kalian dibayar itu **kode yang nggak bikin panik pas ada yang gagal**."

---

# BAGIAN 0 — Pembuka & Sambungan dari P5 (0–8 menit)

## Yang Anda lakukan

**Buka dengan `data.js` mereka sendiri.**

> "Lihat file ini. Dari Pertemuan 2 sampai sekarang, data kalian selalu **kalian tulis sendiri**. Selalu ada, selalu benar, selalu langsung muncul.
>
> Hari ini datanya pindah ke komputer orang lain. Dan begitu pindah ke sana, semuanya jadi **nggak pasti** — bisa lambat, bisa gagal, bisa kosong.
>
> Nah, ngurusin ketidakpastian itu **sembilan puluh persen pekerjaan frontend beneran.**"

Ini juga menyambung ke **arsitektur client-server dari P1**. Sebut: *"ingat analogi restoran di Pertemuan 1? Hari ini kita beneran mesen ke dapurnya."*

### Cek kesiapan

- Siapa yang bagian routing Tugas 3 sudah jalan? *(diminta selesai minggu lalu)*
- Siapa yang project-nya masih jalan?

---

# BAGIAN 1 — Asynchronous Flow (8–24 menit)

## APA — kenapa butuh cara khusus

Mengambil data dari internet butuh **waktu**. JavaScript tidak menunggu — dia lanjut ke baris berikutnya.

```javascript
const data = ambilDariServer();   // ini butuh 2 detik
console.log(data);                // ini jalan SEKARANG, datanya belum ada
```

## BANDINGKAN — tiga generasi, satu yang dipakai

> **SELINGAN — sebut sambil lewat, jangan diperagakan:**
> "Dulu ini ditulis pakai *callback* yang bersarang-sarang sampai orang menyebutnya *callback hell*. Terus muncul `.then()` yang lebih rapi. Sekarang ada `async/await` yang bacanya kayak kode biasa. Kita langsung pakai yang terakhir."

```javascript
// PROMISE — .then()
ambilData().then(data => console.log(data));

// ASYNC/AWAIT — yang kita pakai
const data = await ambilData();
console.log(data);
```

> **CARA SAMPAIKAN — Analogi Nomor Antrean:**
> "Kalian pesan kopi. Kasir nggak langsung ngasih kopinya — dia ngasih **nomor antrean**.
>
> Nomor itu **bukan kopinya**. Itu janji bahwa kopinya bakal datang. Namanya **Promise**.
>
> Nah ada dua cara nunggu.
>
> `.then()` itu: 'saya jalan-jalan dulu, panggil saya kalau udah jadi.'
> `await` itu: 'saya tunggu di sini aja sampai jadi.'
>
> Yang kedua bacanya lebih enak — dari atas ke bawah, kayak kode biasa. Makanya itu yang kita pakai."

## `try...catch` — dan kenapa `await` tanpa ini berbahaya

```javascript
async function ambilProduk() {
  try {
    const res = await axios.get("/products");
    setProduk(res.data);
  } catch (err) {
    setError("Gagal memuat data");     // ← wajib ada
  } finally {
    setLoading(false);                 // ← jalan apa pun hasilnya
  }
}
```

> **CARA SAMPAIKAN:**
> "`await` itu punya satu bahaya: kalau gagal, dia **melempar error** dan kode kalian berhenti di situ. Baris di bawahnya nggak jalan.
>
> Artinya kalau kalian nggak pasang `try/catch`, `setLoading(false)` nggak akan pernah kejadian. Spinner kalian **muter selamanya**, dan pengguna nggak tahu apa yang terjadi.
>
> `finally` itu bagian yang **selalu** dijalankan — berhasil atau gagal. Makanya `setLoading(false)` ditaruh di situ, bukan di bawah `try`."

Itu penjelasan yang langsung menyambung ke Bagian 3. Sebut sambungannya.

---

# BAGIAN 2 — Axios & Tab Network (24–40 menit)

## Pasang & konfigurasi

```bash
npm i axios
```

```javascript
// src/api/client.js
import axios from "axios";

export const api = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 8000,
});
```

Pakainya:

```javascript
const res = await api.get("/products?limit=8");
```

## KENAPA `baseURL`, bukan alamat lengkap tiap kali

> **CARA SAMPAIKAN:**
> "Bayangin kalian nulis alamat server lengkap di dua puluh tempat. Terus perusahaan pindah server.
>
> Kalian harus cari-ganti dua puluh tempat, dan pasti ada satu yang kelupaan — dan yang kelupaan itu baru ketahuan pas udah dipakai orang.
>
> Dengan `baseURL`, alamatnya ditulis **sekali**. Dan nanti di Pertemuan 8, alamat ini nggak ditulis di kode sama sekali — dia dipindah ke *environment variable*, biar beda antara waktu ngoding sama waktu udah live."

Itu colokan langsung ke syarat Tugas 4. Sebut.

## Interceptor — sekilas saja

```javascript
api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
```

> **CARA SAMPAIKAN — Analogi Satpam di Pintu:**
> "Interceptor itu satpam yang berdiri di pintu. **Semua** permintaan yang keluar lewat dia dulu, dan dia bisa nambahin sesuatu.
>
> Gunanya nanti di Pertemuan 8: tiap permintaan harus bawa token login. Daripada kalian nempelin token di dua puluh tempat, kalian pasang satpamnya sekali."

**Batasi 3 menit.** Ini bagian yang paling aman dipotong kalau waktu mepet — kegunaannya baru terasa di P8.

## Tab Network — kompetensi Debugging & Verification

Buka `F12` → **Network** → filter **Fetch/XHR** → refresh.

Empat hal yang ditunjukkan:

| Yang dilihat | Artinya |
|---|---|
| **Status** | 200 berhasil · 404 tidak ada · 500 server bermasalah |
| **Response** | Data mentah yang benar-benar dikirim — **sebelum** kode kalian menyentuhnya |
| **Time** | Berapa lama. Ini yang jadi alasan Loading state harus ada |
| **Headers** | Apa yang dikirim dan diterima |

> **CARA SAMPAIKAN:**
> "Ini alat pemisah paling penting yang bakal kalian punya.
>
> Kalau data nggak muncul, cuma ada dua kemungkinan: **datanya nggak dateng**, atau **datanya dateng tapi kode kalian salah baca.**
>
> Tab ini yang bilang mana dari dua itu. Tanpa ini, kalian nebak-nebak di tempat yang salah selama sejam."

Ini menyambung ke tab Network yang sudah diperkenalkan di **P1 Bagian 2**. Sebut: *"ingat tab ini dari Pertemuan 1? Sekarang dia beneran kepake."*

### Throttling & Offline — siapkan sekarang, dipakai di Bagian 5

Di tab Network ada dropdown **No throttling**:

- Pilih **Slow 3G** → Loading state jadi terlihat, bukan kedip sepersekian detik
- Pilih **Offline** → memaksa error, tanpa perlu mencabut WiFi

> "Ingat ini baik-baik. Di Tugas 3, aplikasi kalian bakal saya uji dengan **koneksi dimatiin**. Dropdown ini yang kalian pakai buat nguji sendiri sebelum ngumpulin."

---

# BAGIAN 3 — Lima Status Antarmuka (40–68 menit)
> **BAGIAN TERPENTING HARI INI.** Bobot terbesar Tugas 3. Kalau waktu meleset, ambil dari bagian lain.

## Masalahnya: pemula cuma memikirkan satu status

Kode pertama yang ditulis semua orang:

```jsx
{produk.map(p => <Kartu key={p.id} {...p} />)}
```

Itu menangani **satu** dari lima kemungkinan. Empat sisanya menghasilkan layar kosong tanpa penjelasan.

## APA — lima status, dan bedanya

> **CARA SAMPAIKAN — Analogi Restoran (lanjutan dari P1):**
> "Ingat analogi restoran di Pertemuan 1? Kita pakai lagi, sekarang lebih dalam.
>
> **Initial** — kalian baru duduk, belum mesan apa-apa. Layar belum minta apa-apa ke server.
>
> **Loading** — pesanan udah masuk, lagi dimasak. Kalian tahu ada yang lagi dikerjain.
>
> **Success** — makanan dateng. Ini yang semua orang mikirin.
>
> **Empty** — pelayan balik dan bilang '**maaf, menunya habis**'. Perhatiin: pesanan kalian **berhasil** nyampe dapur, dapurnya **jawab**. Jawabannya aja yang 'nggak ada'.
>
> **Error** — pelayannya **nggak balik-balik**, atau dapurnya kebakaran. Kalian nggak dapet jawaban sama sekali.
>
> Nah yang paling sering ketuker itu **Empty** sama **Error**. Dua-duanya bikin layar kosong, tapi penyebabnya beda total — dan yang harus kalian tulis ke pengguna juga beda total."

## Tabel yang wajib ditulis di layar

| Status | Kapan | Yang ditampilkan |
|---|---|---|
| **Initial** | Belum ada permintaan | Ajakan: "Cari produk untuk mulai" |
| **Loading** | Permintaan sedang jalan | Skeleton (lebih baik) atau spinner |
| **Success** | Berhasil, ada isinya | Datanya |
| **Empty** | **Berhasil**, tapi kosong | "Tidak ada hasil untuk pencarian ini" |
| **Error** | **Gagal** | Pesan + **tombol Coba Lagi** |

## KENAPA Skeleton lebih baik daripada Spinner

> **CARA SAMPAIKAN:**
> "Spinner itu bilang 'tunggu'. Skeleton itu bilang '**tunggu, dan nanti bentuknya bakal kayak gini**'.
>
> Bedanya kelihatan sepele, tapi efeknya nyata: pas datanya dateng, layarnya nggak lompat-lompat — soalnya tempatnya udah disiapin. Dan orang ngerasa lebih cepet, walaupun waktunya sama persis."

## KENAPA Error wajib punya tombol Coba Lagi

> "Kalau kalian cuma nulis 'Terjadi kesalahan', satu-satunya pilihan pengguna itu **refresh seluruh halaman** — dan itu ngilangin semua yang udah dia kerjain.
>
> Satu tombol 'Coba Lagi' ngubah pengalaman dari 'aplikasinya rusak' jadi 'ada gangguan sebentar'."

## Bentuk kodenya

```jsx
if (loading) return <Skeleton />;
if (error)   return <Error pesan={error} onCoba={muat} />;
if (produk.length === 0) return <Kosong />;
return <Daftar produk={produk} />;
```

**Urutannya penting.** Cek `loading` duluan — kalau tidak, saat pertama memuat, `produk.length === 0` akan benar dan pengguna melihat "tidak ada hasil" sebelum datanya sempat datang.

> "Ini kesalahan yang halus banget: aplikasi kalian bakal ngedip 'tidak ada hasil' setengah detik tiap kali loading. Nggak error, cuma kelihatan murahan."

## PERAGAAN WAJIB — tunjukkan kelimanya

Pakai `demo/komponen/LimaStatus.jsx` yang punya tombol untuk memaksa tiap status.

Lalu **peragakan yang nyata**:
1. Network → **Slow 3G** → refresh → skeleton terlihat beberapa detik
2. Network → **Offline** → klik Coba Lagi → error state muncul
3. Cari kata yang tidak ada → empty state muncul

> "Ini persis yang bakal saya lakuin pas ngoreksi Tugas 3 kalian."

---

# BAGIAN 4 — Pengantar TypeScript (68–93 menit)
> 25 menit sesuai silabus. **Langsung dipakai di praktik**, bukan wawasan penutup.

## Peragakan masalahnya dulu — 2 menit

Di file JavaScript, ketik:

```javascript
console.log(produk.nmaa);      // typo
```

Tidak ada garis merah. Tidak ada peringatan. Jalankan → `undefined` → layar kosong, dan Anda menghabiskan 20 menit mencari.

> "Angkat tangan yang pernah kejadian gini minggu lalu."

Biasanya banyak yang mengangkat tangan. Itu pembukaan yang Anda butuhkan.

## APA — `interface` mendeskripsikan bentuk data

```typescript
// src/types.ts
export interface Produk {
  id: number;
  title: string;
  price: number;
  category: string;
  thumbnail?: string;      // tanda tanya = boleh tidak ada
}
```

Pakainya:

```tsx
const [produk, setProduk] = useState<Produk[]>([]);

const res = await api.get<{ products: Produk[] }>("/products");
setProduk(res.data.products);
```

Sekarang ketik `produk[0].nmaa` → **garis merah langsung di editor**, sebelum disimpan, sebelum dijalankan.

## Cara memasangnya — 2 menit, tanpa konfigurasi

Vite sudah mendukung TypeScript. Cukup **ubah nama file** `.jsx` → `.tsx`, lalu tambahkan tipe.

```bash
# hanya kalau editor mengeluh soal tipe React
npm i -D @types/react @types/react-dom
```

> ⚠️ **Vite tidak memeriksa tipe saat build** — dia cuma membuang anotasinya. Pemeriksaannya terjadi di **editor**.
>
> Sampaikan ini apa adanya: *"jadi kalau kalian abaikan garis merahnya, aplikasinya tetap jalan. TypeScript itu asisten, bukan satpam."*

## KENAPA ini penting justru untuk data API

> **CARA SAMPAIKAN — Analogi Kontrak Tertulis:**
> "Data dari backend itu **janji lisan**. Temen kalian di tim Backend bilang 'nanti ada field harga ya'. Kalian percaya, kalian tulis `produk.harga`.
>
> Dua minggu kemudian dia ganti jadi `price` — dan **dia lupa ngasih tahu kalian**.
>
> Aplikasi kalian nggak error. Dia cuma nampilin `undefined` di semua kartu, dan kalian baru tahu pas ada yang komplain.
>
> `interface` itu **kontrak tertulis**. Kalian tulis sekali di satu file, dan editor kalian langsung protes tiap kali ada yang nggak cocok — sambil kalian ngetik, bukan pas udah dipakai orang."

## ⚠️ KEJUJURAN YANG WAJIB DISAMPAIKAN

Ini penting supaya peserta tidak mendapat rasa aman palsu.

> "Tapi ada satu hal yang harus kalian tahu, dan ini sering nggak disebut.
>
> `interface` itu **janji yang kalian tulis sendiri**. Dia **nggak** ngecek apa yang beneran dikirim server.
>
> Kalau kalian nulis `harga: number` tapi server ngirim teks `"35000"`, TypeScript **diem aja** — soalnya dia udah nggak ada pas kode kalian jalan. Dia cuma hidup di editor.
>
> Jadi `interface` itu bikin **kalian dan tim kalian** sepakat soal bentuk datanya. Bukan jaminan dari server.
>
> Buat mastiin data yang beneran dateng itu bener, ada alat lain namanya *runtime validation* — Zod salah satunya. Itu di luar kelas ini, tapi kalian perlu tahu itu ada."

Itu mencegah kesalahpahaman yang umum, dan menunjukkan Anda tidak menjual berlebihan.

## Manfaat yang langsung terasa: autocomplete

Ketik `produk[0].` dan **berhenti di situ**. Editor menampilkan seluruh daftar field yang tersedia.

> "Nah ini yang bikin ketagihan. Kalian nggak perlu bolak-balik buka dokumentasi API atau nebak-nebak nama field. Editor kalian udah tahu."

## Yang **tidak** diajarkan hari ini

Sebut eksplisit supaya peserta tidak merasa tertinggal:

> "Kita nggak bahas generics, union types, utility types, semua yang bikin TypeScript kelihatan serem. Buat kelas ini kalian cukup bisa satu hal: **nulis `interface` buat data dari API.** Itu udah 80% manfaatnya."

**Syarat Tugas 3:** minimal **satu** `interface`. Sebut sekarang.

---

# BAGIAN 5 — Praktik Live & Simulasi Gagal (93–112 menit)

## Rangkai semuanya

```tsx
function DaftarProduk() {
  const [produk, setProduk] = useState<Produk[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const muat = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await api.get<{ products: Produk[] }>("/products?limit=8");
      setProduk(res.data.products);
    } catch {
      setError("Gagal memuat produk. Cek koneksi kamu.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { muat(); }, []);

  if (loading) return <Skeleton />;
  if (error) return <ErrorState pesan={error} onCoba={muat} />;
  if (produk.length === 0) return <EmptyState />;
  return <Grid produk={produk} />;
}
```

**Sebut:** `useEffect` di sini **memang butuh** — mengambil data dari server itu berurusan dengan dunia di luar React, persis kriteria dari P4 Bagian 6.

## Simulasi gagal — bagian yang paling sering dilewati

Ini yang diminta silabus, dan ini yang akan diuji di Tugas 3.

**Tiga simulasi, masing-masing 1 menit:**

| Simulasi | Caranya | Yang harus terlihat |
|---|---|---|
| Koneksi lambat | Network → **Slow 3G** | Skeleton beberapa detik |
| Koneksi mati | Network → **Offline** → Coba Lagi | Error state + tombol berfungsi |
| Hasil kosong | Cari kata acak seperti `zzzz` | Empty state, bukan error |

> **CARA SAMPAIKAN:**
> "Ini bukan latihan tambahan. Ini **persis** yang saya lakuin pas ngoreksi Tugas 3.
>
> Dan catatan di soal tugas kalian bunyinya: *'aplikasi akan diuji dengan mematikan koneksi internet. Tampilan yang menghasilkan layar kosong tanpa penjelasan dinilai belum memenuhi ketentuan.'*
>
> Jadi sebelum ngumpulin, **uji sendiri pakai tiga cara ini.**"

---

# BAGIAN 6 — Penutup & Tugas 3 (112–120 menit)

## Rangkuman: satu benang merah

> "Temanya hari ini: **data dari server itu nggak pasti.**
>
> Selama lima pertemuan, data kalian selalu ada dan selalu bener — soalnya kalian yang nulis. Mulai hari ini, dia dateng dari komputer orang lain lewat internet yang bisa lambat, bisa putus, bisa ngirim yang aneh.
>
> Kode yang cuma jalan pas semuanya lancar itu belum selesai."

## Tugas 3 — sekarang lengkap

Dikumpulkan **sebelum Pertemuan 7**.

| Syarat | Diajarkan di |
|---|---|
| Routing 3 halaman + 404 | P5 Bagian 2 |
| `useParams` di halaman detail | P5 Bagian 3 |
| Minimal satu custom hook | P5 Bagian 5 |
| Pencarian & pagination | P5 Bagian 4 + hari ini |
| Axios dengan base URL | **Bagian 2** |
| Minimal satu `interface` TypeScript | **Bagian 4** |
| **Lima status antarmuka** — bobot terbesar | **Bagian 3** |

> **CARA SAMPAIKAN:**
> "Tugas 3 ini yang paling berat dari empat. Tapi perhatiin bobotnya: yang paling gede itu **lima status antarmuka** — bukan fitur, bukan tampilan.
>
> Aplikasi yang fiturnya sederhana tapi lima statusnya lengkap, nilainya lebih tinggi daripada yang fiturnya banyak tapi layarnya kosong pas internet mati."

---

# LAMPIRAN A — Pertanyaan yang Pasti Muncul

**"Kenapa nggak pakai `fetch` aja? Kan bawaan browser, nggak usah install."**
> Bisa, dan `fetch` nggak salah. Tapi Axios ngasih tiga hal yang bikin hidup lebih gampang: `baseURL` biar alamat ditulis sekali, otomatis ubah JSON tanpa `.json()` dua kali, dan interceptor buat nempelin token nanti di P8. Dengan `fetch` kalian bikin sendiri semua itu.

**"Data saya udah dateng — kelihatan di tab Network — tapi layarnya kosong."**
> Berarti masalahnya di kode kalian, bukan di server. Biasanya bentuk datanya beda dari yang kalian kira: `res.data` itu object berisi `{ products: [...] }`, bukan langsung array. **Buka tab Network, klik Response, lihat bentuk aslinya.**

**"Spinner saya muter terus, nggak berhenti."**
> `setLoading(false)` nggak pernah kejadian. Biasanya karena ditaruh di dalam `try` **setelah** baris yang error, jadi nggak kelewatan. Taruh di `finally` — itu bagian yang selalu jalan, berhasil atau gagal.

**"Kok data saya kepanggil dua kali?"**
> **StrictMode**, sama seperti yang dibahas di P4. React sengaja jalanin effect dua kali di mode pengembangan. Di build produksi nggak terjadi. Boleh diabaikan untuk kelas ini.

**"CORS error. Ini apa?"**
> Server yang menolak diakses dari alamat lain. Ini urusan **server**, bukan kode kalian — kalian nggak bisa memperbaikinya dari sisi frontend. Kalau muncul, ganti API. Di Capstone nanti, tim Backend yang mengaturnya.

**"TypeScript-nya bikin error merah terus. Boleh nggak dipakai?"**
> Garis merah itu bukan error yang menghentikan aplikasi — Vite tetap menjalankan kode kalian. Itu editor yang lagi ngasih tahu ada yang nggak cocok. Tapi kalau garisnya banyak, jangan diabaikan: itu tandanya bentuk data yang kalian tulis di `interface` beda dari yang beneran dikirim server. **Buka Response di tab Network, cocokkan.**

**"Kalau `interface` nggak ngecek data beneran, ngapain dipakai?"**
> Karena yang dia cegah itu kesalahan **kalian**, bukan kesalahan server — dan itu justru yang paling sering terjadi. Salah ketik nama field, lupa field yang mana, salah kira tipenya. Ditambah autocomplete yang bikin kalian nggak perlu bolak-balik buka dokumentasi.

**"Boleh pakai AI buat Tugas 3?"**
> Boleh, dan untuk API AI memang membantu. Tapi ada satu hal yang **hampir selalu** AI lewatkan: **Empty state.** AI biasanya ngasih loading, success, dan error — tiga dari lima. Yang keempat dan kelima harus kalian tambahin sendiri.
>
> Dan itu justru bobot terbesar tugas kalian. **Nemuin yang kurang dari kode AI itu nambah nilai.**

---

# LAMPIRAN B — Praktik Langsung: Tab Network

| Yang dilakukan | Gunanya |
|---|---|
| Filter **Fetch/XHR** | Sembunyikan gambar & CSS, sisakan permintaan data |
| Klik permintaan → **Response** | Lihat data mentah **sebelum** kode kalian menyentuhnya |
| Kolom **Status** | 200 · 404 · 500 |
| Kolom **Time** | Alasan Loading state harus ada |
| Dropdown → **Slow 3G** | Bikin Loading state terlihat |
| Dropdown → **Offline** | Paksa error tanpa mencabut WiFi |

> **Aturan yang ditanam hari ini:**
> "Kalau data nggak muncul, **jangan langsung baca kode.** Buka Network dulu.
>
> Cuma ada dua kemungkinan: datanya nggak dateng, atau datanya dateng tapi kode kalian salah baca. Tab ini bilang mana dari dua itu — dan itu nentuin kalian nyari di mana."

## Membaca error jaringan

| Yang terlihat | Artinya |
|---|---|
| Status 404 | Alamatnya salah. Cek `baseURL` dan path-nya |
| Status 500 | Server bermasalah. Bukan salah kalian |
| Status 401 / 403 | Butuh login. Materi P8 |
| `ERR_NETWORK` / merah tanpa status | Tidak sampai ke server — internet mati atau CORS |
| Status 200 tapi layar kosong | Data sampai, **kode kalian salah baca bentuknya** |

Baris terakhir yang paling sering. Ajarkan mengecek **Response** dulu.

---

# LAMPIRAN C — Tips & Kebiasaan untuk Ditanamkan

**1. Tulis kelima status sebelum menulis tampilan suksesnya.**
Kalau Success ditulis duluan, empat sisanya akan "dikerjakan nanti" — dan nanti tidak pernah datang.

**2. `setLoading(false)` selalu di `finally`.**

**3. Pesan error untuk manusia, bukan untuk programmer.**
`"Gagal memuat produk. Cek koneksi kamu."` bukan `"AxiosError: Network Error"`. Pesan teknisnya taruh di `console.error` untuk Anda sendiri.

**4. Uji dengan Offline sebelum mengumpulkan.**
Ini akan diuji saat penilaian. Uji sendiri dulu.

**5. Satu file `api/client.js` untuk seluruh aplikasi.**
Jangan `axios.get("https://...")` bertebaran di banyak komponen.

**6. Buka Network sebelum membaca kode.**

---

# LAMPIRAN D — Tiga Kesalahan Mentor Baru di P6

**1. Menghabiskan waktu di teori async, lalu lima status diburu-buru.**
Promise dan `async/await` menarik dijelaskan dan terasa "berisi". Tapi **lima status antarmuka yang jadi bobot terbesar Tugas 3.** Kalau harus memilih, potong teori async — peserta cukup bisa memakai `async/await`, tidak perlu paham event loop.

**2. Mengajarkan TypeScript sebagai bahasa, bukan sebagai alat.**
Godaannya besar untuk menjelaskan generics, union, dan seterusnya. Jangan. Dalam 25 menit, peserta cukup bisa **satu hal**: menulis `interface` untuk data API. Selebihnya akan membuat mereka merasa kewalahan dan menyerah pada TypeScript sama sekali.

**3. Tidak menyebut bahwa `interface` tidak memeriksa data sungguhan.**
Kalau ini dilewati, peserta pulang dengan rasa aman palsu — mengira TypeScript melindungi mereka dari data server yang aneh. Padahal tipe itu hilang saat kode dijalankan. Sebut apa adanya; itu justru membuat penjelasan Anda lebih dipercaya.

---

# LAMPIRAN E — Checklist Persiapan Anda

**H-3 sebelum kelas:**
- [ ] Ingatkan bagian routing Tugas 3 harus sudah jalan — hari ini menumpuk di atasnya
- [ ] Ingatkan peserta membawa project P5 dalam keadaan jalan
- [ ] Baca [materi ini](P6-Materi-Mentor-Frontend-API.md) sampai Lampiran E

**H-1:**
- [ ] **Uji API yang akan dipakai dari nol.** Materi ini memakai `https://dummyjson.com/products` — pastikan masih hidup dan tidak butuh kunci. Siapkan cadangan (JSONPlaceholder) kalau mati.
- [ ] Uji seluruh `demo/` di project Vite, termasuk versi `.tsx`
- [ ] Latih tiga simulasi: Slow 3G · Offline · pencarian kosong
- [ ] Pastikan **tab Network terlihat jelas** di proyektor — hari ini Network adalah materi
- [ ] Siapkan `data.js` peserta untuk ditampilkan di pembuka

**Hari-H:**
- [ ] Editor + browser + tab Network berdampingan, font minimal 18pt
- [ ] Filter **Fetch/XHR** sudah aktif di Network sebelum kelas mulai
- [ ] **Pasang alarm di menit ke-40.** Kalau Bagian 1–2 belum selesai, potong interceptor dan langsung ke lima status.

---

*Dokumen ini disiapkan untuk Pertemuan 6 — Metro Institute Season 2, Divisi Frontend.*
