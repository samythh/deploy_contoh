# RUNDOWN P6 — Pegangan Saat Mengajar

Buka di layar kedua saat kelas. Isinya cuma **gerakan** — penjelasan lengkapnya di [P6-Materi-Mentor-Frontend-API.md](P6-Materi-Mentor-Frontend-API.md).

> ⚠️ **P6 adalah pertemuan terpadat di seluruh program.** Baca bagian **"Kalau Waktu Tidak Cukup"** di bawah **sebelum** mengajar, bukan saat sudah kepepet di menit ke-100.

---

## Tiga Aturan Hari Ini

**1. Lima status antarmuka adalah prioritas mutlak.** Itu **bobot terbesar Tugas 3**. Kalau harus memotong, potong dari teori async dan interceptor — jangan dari Bagian 3.

**2. TypeScript diajarkan sebagai alat, bukan bahasa.** Dalam 25 menit peserta cukup bisa **satu hal**: menulis `interface` untuk data API. Generics, union, utility types — jangan disentuh.

**3. Tab Network dibuka sebelum membaca kode.** Aturan yang ditanam hari ini: kalau data tidak muncul, jangan tebak-tebak di kode. Buka Network dulu.

---

## Peta 120 Menit

| Menit | Bagian | File |
|:--:|---|---|
| 0–8 | Pembuka & sambungan dari P5 | `data.js` peserta |
| 8–24 | Async: Promise → `async/await` → `try/catch` | — |
| 24–40 | Axios + **tab Network** | `api/client.js` |
| **40–68** | **LIMA STATUS ANTARMUKA** ⚠️ | `LimaStatus.jsx` |
| 68–93 | **Pengantar TypeScript** | `types.ts` |
| 93–112 | Praktik live + **simulasi gagal** | `DaftarProduk.tsx` |
| 112–120 | Penutup & Tugas 3 | [`../tugas/`](../tugas/) |

> ⏰ **Pasang alarm di menit ke-40.** Kalau Bagian 1–2 belum selesai, potong interceptor dan langsung ke lima status.

---

## 0–8 · Pembuka

**Buka dengan `data.js` mereka sendiri.**

> "Dari Pertemuan 2 sampai sekarang, data kalian selalu **kalian tulis sendiri**. Selalu ada, selalu bener, selalu langsung muncul.
>
> Hari ini datanya pindah ke komputer orang lain. Dan begitu pindah, semuanya jadi **nggak pasti**.
>
> Ngurusin ketidakpastian itu **sembilan puluh persen pekerjaan frontend beneran.**"

Sambungkan ke P1: *"ingat analogi restoran di Pertemuan 1? Hari ini kita beneran mesen ke dapurnya."*

**Sampaikan prioritas hari ini:**
> "Hari ini padat, saya jujur aja. Tapi ada satu bagian yang saya minta kalian perhatiin lebih: **lima status antarmuka.** Itu bobot terbesar di Tugas 3."

---

## 8–24 · Async

**Selingan cara lama — satu kalimat:**
> "Dulu ini ditulis pakai *callback* bersarang sampai orang menyebutnya *callback hell*. Terus `.then()`. Sekarang `async/await` yang bacanya kayak kode biasa. Kita langsung ke yang terakhir."

**Analogi nomor antrean:**
> "Kalian pesan kopi. Kasir ngasih **nomor antrean** — itu bukan kopinya, itu **janji** bahwa kopinya bakal datang. Namanya **Promise**.
>
> `.then()` = 'saya jalan-jalan dulu, panggil saya kalau udah jadi.'
> `await` = 'saya tunggu di sini aja sampai jadi.'"

**`try/catch/finally` — dan kenapa `finally` penting:**
> "`await` punya satu bahaya: kalau gagal, dia **melempar error** dan kode kalian berhenti di situ. Artinya `setLoading(false)` nggak akan pernah kejadian — **spinner kalian muter selamanya.**
>
> `finally` itu bagian yang **selalu** dijalankan, berhasil atau gagal."

Ini menyambung langsung ke Bagian 3. Sebut.

---

## 24–40 · Axios & Tab Network — `api/client.js`

```bash
npm i axios
```

1. `axios.create({ baseURL, timeout })` — satu file untuk seluruh aplikasi
   > "Bayangin nulis alamat server di dua puluh tempat, terus perusahaan pindah server."
   **Colokan:** di P8 alamat ini pindah ke *environment variable* — syarat Tugas 4.
2. **`timeout` wajib** — tanpa ini, server yang menggantung bikin spinner tak berhenti
3. **Interceptor — 3 menit saja**, analogi satpam di pintu. Kegunaannya baru terasa di P8.

### Tab Network — `F12` → filter **Fetch/XHR**

| Kolom | Artinya |
|---|---|
| Status | 200 · 404 · 500 |
| Response | Data mentah **sebelum** kode kalian menyentuhnya |
| Time | Alasan Loading state harus ada |

> "Kalau data nggak muncul, cuma ada **dua** kemungkinan: datanya nggak dateng, atau datanya dateng tapi kode kalian salah baca. Tab ini bilang mana dari dua itu."

Sambungkan ke P1: *"ingat tab ini dari Pertemuan 1? Sekarang dia beneran kepake."*

**Siapkan sekarang, dipakai di Bagian 5:** dropdown **No throttling** → **Slow 3G** dan **Offline**.
> "Di Tugas 3, aplikasi kalian bakal saya uji dengan koneksi dimatiin. Dropdown ini yang kalian pakai buat nguji sendiri."

---

## 40–68 · LIMA STATUS ANTARMUKA ⚠️ — `LimaStatus.jsx`

> **Bagian terpenting hari ini.** Bobot terbesar Tugas 3.

**Mulai dari masalahnya:**
> "Kode pertama yang ditulis semua orang cuma `produk.map(...)`. Itu nangani **satu** dari lima kemungkinan. Empat sisanya bikin layar kosong tanpa penjelasan."

**Analogi restoran — lanjutan P1:**

| Status | Di restoran |
|---|---|
| **Initial** | Baru duduk, belum mesan |
| **Loading** | Pesanan masuk, lagi dimasak |
| **Success** | Makanan dateng |
| **Empty** | Pelayan balik: *"maaf, menunya habis"* |
| **Error** | Pelayannya **nggak balik-balik** |

> "Yang paling sering ketuker itu **Empty** sama **Error**. Dua-duanya bikin layar kosong, tapi penyebabnya beda total.
>
> **Empty** itu pesanan kalian **berhasil** nyampe dapur, dapurnya **jawab** — jawabannya aja 'nggak ada'.
> **Error** itu kalian **nggak dapet jawaban sama sekali**."

**Klik kelima tombol di `LimaStatus.jsx`** dan bahas satu per satu.

**Dua alasan yang wajib disebut:**

*Skeleton > Spinner:*
> "Spinner bilang 'tunggu'. Skeleton bilang 'tunggu, **dan nanti bentuknya kayak gini**'. Pas datanya dateng, layarnya nggak lompat-lompat."

*Error wajib punya tombol Coba Lagi:*
> "Kalau cuma 'Terjadi kesalahan', satu-satunya pilihan pengguna itu **refresh seluruh halaman** — dan itu ngilangin semua kerjaannya. Satu tombol ngubah 'aplikasinya rusak' jadi 'ada gangguan sebentar'."

**⚠️ Urutan pengecekan — `loading` DULUAN:**
```jsx
if (loading) ... ; if (error) ... ; if (kosong) ... ; return <Daftar/>;
```
> "Kalau `length === 0` dicek duluan, aplikasi kalian ngedip 'tidak ada hasil' setengah detik tiap loading. Nggak error, cuma kelihatan murahan."

**Cek sebelum lanjut:** peserta bisa menjelaskan beda Empty dan Error.

---

## 68–93 · Pengantar TypeScript — `types.ts`

**Peragakan masalahnya dulu — 2 menit:**

Ketik `produk.nmaa` di file `.jsx` → **tidak ada garis merah**. Jalankan → `undefined` → layar kosong.

> "Angkat tangan yang pernah kejadian gini minggu lalu."

**Lalu:**

1. `interface Produk { id: number; title: string; ... }` — tanda tanya `?` untuk field opsional
2. `useState<Produk[]>([])` dan `api.get<ResponseProduk>(...)`
3. Ketik `produk[0].nmaa` di `.tsx` → **garis merah langsung**, sebelum disimpan
4. **Pasang:** cukup ubah nama file `.jsx` → `.tsx`. Tidak perlu konfigurasi.

⚠️ **Sebut:** Vite **tidak** memeriksa tipe saat build — pemeriksaannya di **editor**.
> "Jadi kalau kalian abaikan garis merahnya, aplikasinya tetap jalan. TypeScript itu **asisten, bukan satpam**."

**Analogi kontrak tertulis:**
> "Data dari backend itu **janji lisan**. Temen kalian bilang 'nanti ada field harga ya'. Dua minggu kemudian dia ganti jadi `price` — dan **lupa ngasih tahu kalian**. Aplikasi kalian nggak error, cuma nampilin `undefined` di semua kartu."

### ⚠️ KEJUJURAN YANG WAJIB — jangan dilewati

> "`interface` itu janji yang **kalian tulis sendiri**. Dia **nggak** ngecek apa yang beneran dikirim server.
>
> Kalau kalian nulis `harga: number` tapi server ngirim teks `"35000"`, TypeScript **diem aja** — dia udah nggak ada pas kode kalian jalan. Dia cuma hidup di editor.
>
> Buat mastiin data yang beneran dateng itu bener, ada alat lain namanya *runtime validation* — Zod salah satunya. Di luar kelas ini, tapi kalian perlu tahu itu ada."

**Tunjukkan autocomplete:** ketik `produk[0].` dan berhenti.
> "Nah ini yang bikin ketagihan."

**Sebut yang TIDAK diajarkan:**
> "Kita nggak bahas generics, union types, semua yang bikin TypeScript kelihatan serem. Kalian cukup bisa satu hal: **nulis `interface` buat data API.** Itu udah 80% manfaatnya."

**Syarat Tugas 3:** minimal **satu** `interface`.

---

## 93–112 · Praktik Live & Simulasi Gagal — `DaftarProduk.tsx`

Rangkai semuanya. **Sebut:** `useEffect` di sini **memang butuh** — mengambil data dari server itu dunia di luar React, persis kriteria P4.

### Tiga simulasi, masing-masing 1 menit

| Simulasi | Caranya | Yang harus terlihat |
|---|---|---|
| Koneksi lambat | Network → **Slow 3G** | Skeleton beberapa detik |
| Koneksi mati | Network → **Offline** → Coba Lagi | Error state + tombol berfungsi |
| Hasil kosong | Cari `zzzz` | Empty state, **bukan** error |

> "Ini bukan latihan tambahan. Ini **persis** yang saya lakuin pas ngoreksi Tugas 3. Catatan di soal tugas kalian bunyinya: *'aplikasi akan diuji dengan mematikan koneksi internet.'*
>
> Jadi sebelum ngumpulin, **uji sendiri pakai tiga cara ini.**"

---

## 112–120 · Penutup & Tugas 3

**Benang merah:**
> "**Data dari server itu nggak pasti.** Kode yang cuma jalan pas semuanya lancar itu belum selesai."

**Tugas 3 sekarang lengkap:**

| Dari P5 | Dari hari ini |
|---|---|
| Routing 3 halaman + 404 | Axios + base URL |
| `useParams` | Minimal satu `interface` |
| Custom hook | **Lima status antarmuka** ← bobot terbesar |

> "Perhatiin bobotnya: yang paling gede itu **lima status antarmuka** — bukan fitur, bukan tampilan.
>
> Aplikasi yang fiturnya sederhana tapi lima statusnya lengkap, nilainya **lebih tinggi** daripada yang fiturnya banyak tapi layarnya kosong pas internet mati."

---

## Kalau Waktu Tidak Cukup

> **Baca ini sebelum mengajar, bukan saat kepepet.**

| Urutan potong | Yang dipotong | Ganti dengan |
|:--:|---|---|
| 1 | **Interceptor** (Bagian 2) | Sebut ada, contohnya di `api/client.js`. Kegunaannya baru di P8 |
| 2 | **Teori Promise & `.then()`** (Bagian 1) | Langsung `async/await` + `try/catch/finally` |
| 3 | Fitur pencarian di praktik live | Cukup muat daftar + tiga simulasi |
| 4 | Autocomplete & field opsional (Bagian 4) | Cukup satu `interface` + satu peragaan garis merah |

> ⛔ **JANGAN PERNAH DIPOTONG:**
> - **Lima status antarmuka (Bagian 3)** — bobot terbesar Tugas 3
> - **Tiga simulasi gagal** — persis yang diuji saat penilaian
> - **Kejujuran soal `interface` tidak memeriksa data sungguhan** — tanpa ini peserta pulang dengan rasa aman palsu

---

## Tiga Kesalahan yang Paling Gampang Terjadi

**1. Menghabiskan waktu di teori async, lalu lima status diburu-buru.**
Promise dan event loop menarik dijelaskan dan terasa "berisi". Tapi lima status yang jadi bobot terbesar Tugas 3. Peserta cukup **bisa memakai** `async/await`, tidak perlu paham event loop.

**2. Mengajarkan TypeScript sebagai bahasa, bukan alat.**
Dalam 25 menit, generics dan union types akan membuat peserta merasa kewalahan dan menyerah pada TypeScript sama sekali. Satu hal saja: `interface` untuk data API.

**3. Tidak menyebut bahwa `interface` tidak memeriksa data sungguhan.**
Peserta pulang mengira TypeScript melindungi mereka dari data server yang aneh. Sebut apa adanya — itu justru membuat penjelasan Anda lebih dipercaya.
