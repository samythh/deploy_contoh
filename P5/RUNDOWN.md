# RUNDOWN P5 — Pegangan Saat Mengajar

Buka di layar kedua saat kelas. Isinya cuma **gerakan** — penjelasan lengkapnya di [P5-Materi-Mentor-Frontend-Routing.md](P5-Materi-Mentor-Frontend-Routing.md).

---

## Tiga Aturan Hari Ini

**1. Sebut nama paketnya berganti — dua kali.** `react-router`, **bukan** `react-router-dom`. Sekali di awal Bagian 2, sekali lagi di penutup. Mayoritas tutorial di internet masih memakai nama lama; ini akan menghemat banyak pertanyaan di grup.

**2. Jaga Custom Hooks tetap 20 menit.** Routing lebih visual dan lebih memuaskan diajarkan, jadi godaannya besar untuk memakan waktunya. Tapi **Custom Hooks diwajibkan di Tugas 3**, sedangkan routing hanya salah satu syarat.

**3. Alamat browser harus terlihat di proyektor.** Hari ini alamat itu **materi**, bukan latar belakang.

---

## Peta 120 Menit

| Menit | Bagian | File |
|:--:|---|---|
| 0–8 | Pembuka & sambungan dari P4 | Todo/katalog P4 peserta |
| 8–20 | Kenapa routing dibutuhkan | — |
| 20–40 | **Setup Router + `<Link>` vs `<a>`** | `App.jsx` · `LinkJebakan.jsx` |
| 40–58 | URL Params & halaman detail | `DetailProduk.jsx` |
| 58–72 | Query Strings & `useNavigate` | `Beranda.jsx` |
| 72–92 | **Custom Hooks** | `hooks/` |
| 92–104 | Wawasan Industri: batas SPA & SSR | View Page Source |
| 104–120 | Penutup & Tugas 3 | [`../tugas/`](../tugas/) |

---

## 0–8 · Pembuka

**Buka dengan Todo/katalog P4 mereka.**

> "Aplikasi kalian udah bisa bereaksi. Tapi coba lihat alamatnya di atas — dari tadi **nggak pernah berubah**.
>
> Artinya kalian nggak bisa ngasih link ke temen buat nunjukin satu produk tertentu. Nggak bisa di-bookmark. Tombol Back juga nggak ngapa-ngapain."

**Cek:** siapa Tugas 2-nya sudah masuk? siapa project-nya masih jalan?

> P5 relatif ringan — ini kesempatan peserta yang tertinggal untuk mengejar. Catat namanya.

---

## 8–20 · Kenapa Routing

**Analogi pindah ruangan vs pindah rumah:**
> "Cara klasik itu: tiap mau ke dapur, kalian **keluar rumah**, tutup pintu, buka rumah baru yang isinya dapur. Lampu mati semua, barang yang kalian pegang jatuh.
>
> SPA itu kalian **jalan ke ruangan sebelah**. Rumahnya sama, barang di tangan tetap di tangan.
>
> Nah 'barang yang kalian pegang' itu **state**."

**Luruskan salah paham:** SPA **bukan** berarti alamat tetap sama.
> "Kalau alamatnya nggak berubah, kalian kehilangan tiga hal: bookmark, tombol Back, dan kemampuan ngirim link. React Router tugasnya **dua**: ganti isi layar tanpa reload, **sekaligus** tetap ganti alamatnya."

---

## 20–40 · Setup Router — `App.jsx` + `LinkJebakan.jsx`

```bash
npm i react-router
```

⚠️ **Sebut sekarang:** paketnya `react-router`, bukan `react-router-dom`. Tutorial lama pakai nama lama.

1. `<BrowserRouter>` di **`main.jsx`**, bukan `App.jsx`
2. `<Routes>` → `<Route path="..." element={...} />`
3. `<Route path="*" />` untuk 404 — **paling bawah**
   > "Kalau nggak ada, orang yang salah ketik alamat lihat layar putih kosong — dan ngira aplikasi kalian rusak."

### PERAGAAN `<a>` vs `<Link>` — 2 menit, jangan dilewati

1. Ketik beberapa catatan di `LinkJebakan`
2. Klik link **merah** (`<a>`) → Back → **catatan hilang**, layar **berkedip putih**
3. Ketik lagi
4. Klik link **hijau** (`<Link>`) → Back → **catatan utuh**, tanpa kedip

> "Bedanya cuma satu tag. Aturannya: **di dalam aplikasi React, jangan pakai `<a>` lagi.** `<a>` cuma buat link ke website lain."

> Kedip tidak terlihat di proyektor? DevTools → Network → *Disable cache* + throttling **Slow 3G**.

**Cek sebelum lanjut:** semua bisa berpindah halaman tanpa reload.

---

## 40–58 · URL Params — `DetailProduk.jsx`

1. `<Route path="/produk/:id" />` — `:id` itu **variabel di dalam alamat**
2. `const { id } = useParams()` — destructuring dari P2
3. `.find()` untuk mencari datanya — juga dari P2

**Analogi nomor kamar hotel:**
> "Kalian nggak bilang 'aku di kamar yang catnya biru sebelah lift'. Kalian bilang **nomor kamarnya** — karena itu bisa dikasih ke orang lain."

⚠️ **SEBUT DULUAN — `useParams` selalu mengembalikan string:**
```jsx
produk.find(p => p.id === id)            // ❌ "7" !== 7
produk.find(p => String(p.id) === id)    // ✅
```
> "Alamat itu teks. Nggak ada error, cuma 'tidak ditemukan' terus."

**Jangan lupa** tangani kasus tidak ditemukan — colokan ke *Empty State* di P6.

---

## 58–72 · Query Strings & `useNavigate` — `Beranda.jsx`

**`useSearchParams` — filter yang bisa dibagikan.**

**Tesnya satu kalimat:**
> "Kalau kalian kirim link ini ke temen, dia harus lihat yang sama nggak?
> Filter kategori? **Iya** → taruh di URL.
> Menu dropdown lagi kebuka? **Nggak penting** → `useState`."

**Peragakan Back:** ganti filter beberapa kali → tekan Back → filternya mundur satu per satu.
> "Kalau filter kalian di `useState`, pencet Back malah **keluar** dari halaman."

**Colokan ke Tugas 3:** pencarian & pagination paling baik di URL.

**`useNavigate` — aturannya:**
> "Kalau yang mutusin pindah itu **manusia** → `<Link>`. Kalau yang mutusin itu **kode** → `useNavigate`.
>
> Kenapa nggak `<Link>` semua? Karena `<Link>` jadi tag `<a>` beneran — bisa klik-kanan, buka di tab baru, kebaca screen reader. Tombol `useNavigate` kehilangan semua itu."

Sambungkan ke aksesibilitas P1 dan Lighthouse P8.

---

## 72–92 · Custom Hooks — `hooks/`

> Diwajibkan di Tugas 3. **Jaga tetap 20 menit.**

1. Custom hook = **fungsi biasa** yang (a) namanya diawali `use`, (b) memakai hook lain di dalamnya. Itu saja.
2. Buka `useLocalStorage.js` — **isinya persis yang mereka tulis di P4 Bagian 6.**
   > "Yang berubah cuma dipindah ke file terpisah dan dikasih nama."
3. **Kenapa dipisah:**
   > "Minggu ini kalian butuh nyimpen favorit juga. Terus tema gelap juga. Kalian bakal nyalin kode yang sama tiga kali. Pas ada bug? Benerin di tiga tempat, dan pasti ada yang kelupaan."
4. **Kenapa wajib diawali `use`:** React memakai awalan itu untuk memeriksa aturan hook. Sama seperti komponen wajib huruf besar di P3.

### ⚠️ Luruskan salah paham: hook berbagi LOGIKA, bukan STATE

**Analogi resep:**
> "Custom hook itu **resep**, bukan **masakan**. Dua orang pakai resep rendang yang sama, tapi rendangnya masing-masing — kalau A makan rendangnya, rendang B nggak berkurang.
>
> Kalau butuh state yang beneran dipakai bareng, itu global state — Pertemuan 7."

5. `useWindowSize.js` — contoh `useEffect` yang **benar** menurut aturan P4, dan **cleanup-nya wajib**.
   > "Tanpa `removeEventListener`, tiap komponen muncul-hilang-muncul listener-nya numpuk."

---

## 92–104 · Wawasan Industri: Batas SPA

**Peragakan dulu — 2 menit.** Klik kanan → **View Page Source** (bukan Inspect).

> "Semua yang kalian bikin — navbar, kartu, tombol — **nggak ada di situ**. Yang dikirim server itu halaman kosong plus satu file JavaScript."

**Dua akibatnya:**
1. **SEO** — crawler dan pratinjau media sosial sering tidak menjalankan JavaScript
   > "Coba share link aplikasi kalian ke WhatsApp. Pratinjaunya biasanya kosong."
2. **Waktu muat pertama** — unduh HTML kosong → unduh JS → jalankan → baru terlihat

**Next.js menjawabnya** dengan merender di server lebih dulu.

### ⛔ Jangan sampai peserta pulang merasa belajar yang salah

> "Ada yang mikir 'lho, kalau Next.js lebih bagus, kenapa kita belajar ini?'
>
> Pertama, **Next.js itu React.** Semua yang kalian pelajari kepake persis sama. Next.js nambahin lapisan di atasnya.
>
> Kedua — dan ini sering nggak disebut — **SPA itu bukan pilihan yang salah.** Buat aplikasi di balik login, dashboard admin, sistem internal kantor: SEO **nggak ada gunanya sama sekali**. Nggak ada crawler yang bisa masuk.
>
> Yang butuh SSR itu konten **publik** — toko, blog, berita. Jadi jawabannya bukan 'mana yang lebih bagus', tapi **'aplikasi kalian jenis yang mana?'**"

---

## 104–120 · Penutup & Tugas 3

**Benang merah:**
> "**URL itu bukan sekadar alamat — dia state yang bisa dibagikan.**
> Tesnya: kalau kalian kirim link ke temen dan yang dia lihat beda — ada state yang salah tempat."

**Tugas 3 — bagi dua dengan jelas:**

| Sudah bisa malam ini | Menunggu P6 |
|---|---|
| Routing 3 halaman + 404 | Axios |
| `useParams` di halaman detail | `interface` TypeScript |
| Minimal satu custom hook | Lima status antarmuka |
| Pencarian & pagination di URL | |

> **Peringatan yang nyata — sampaikan:**
> "Tugas 3 itu **yang paling berat** dari empat tugas. Bobot terbesarnya di penanganan lima status antarmuka — itu materi minggu depan.
>
> Jadi bagian routing-nya **selesaikan minggu ini**. Kalau kalian nunggu, minggu depan kalian ngerjain routing sambil belajar API sambil belajar TypeScript. Itu nggak akan selesai."

---

## Kalau Waktu Tidak Cukup

| Urutan potong | Yang dipotong | Ganti dengan |
|:--:|---|---|
| 1 | `useNavigate` (Bagian 4) | Sebut aturannya, contohnya ada di `DetailProduk.jsx` |
| 2 | `useWindowSize` (Bagian 5) | Cukup `useLocalStorage` — itu yang relevan ke Tugas 3 |
| 3 | Wawasan SSR (Bagian 6) | Cukup peragaan View Page Source + satu kalimat |

> ⛔ **JANGAN PERNAH DIPOTONG:**
> - **Peragaan `<a>` vs `<Link>`** — tanpa ini peserta akan memakai `<a>` di Tugas 3 dan bingung kenapa state-nya hilang
> - **Custom Hooks** — diwajibkan di Tugas 3
> - **Jebakan `useParams` string** — akan memakan berjam-jam waktu debugging mereka

---

## Tiga Kesalahan yang Paling Gampang Terjadi

**1. Tidak menyebut bahwa paketnya berganti nama.**
Peserta mencari sendiri, menemukan `react-router-dom`, lalu bingung. Sebut dua kali.

**2. Menghabiskan waktu di routing, lalu Custom Hooks diburu-buru.**
Routing lebih visual dan lebih memuaskan diajarkan — tapi Custom Hooks yang diwajibkan di Tugas 3.

**3. Membuat SPA terdengar seperti pilihan yang salah saat membahas SSR.**
Peserta pulang merasa baru belajar teknologi usang. Tekankan: Next.js **itu** React, dan SPA tepat untuk aplikasi di balik login.
