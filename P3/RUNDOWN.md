# RUNDOWN P3 — Pegangan Saat Mengajar

Buka di layar kedua saat kelas berlangsung. Isinya cuma **gerakan** — penjelasan lengkapnya di [P3-Materi-Mentor-Frontend-React.md](P3-Materi-Mentor-Frontend-React.md).

---

## Tiga Aturan Hari Ini

**1. Setup bukan formalitas.** Bagian 2 dapat 16 menit penuh. Peserta yang project-nya tidak jalan tidak bisa mengikuti 80 menit sisanya — dan mereka biasanya **diam**, bukan bertanya. Berkeliling, jangan menunggu tangan terangkat.

**2. Tunjukkan sakitnya dulu.** Bagian 1 memperagakan cacat cara P2. Tanpa itu, React terasa cuma sintaks ribet tanpa alasan.

**3. Sambungkan terus ke P1–P2.** Hampir tidak ada hal baru hari ini — `.map()`, destructuring, import/export, prefiks `md:` semuanya sudah mereka punya. Sebut itu berulang kali; itu yang membuat React terasa bisa dijangkau.

---

## Peta 120 Menit

| Menit | Bagian | File |
|:--:|---|---|
| 0–8 | Pembuka & sambungan dari P2 | kode P2 peserta |
| 8–20 | **Kenapa React ada** + Virtual DOM | `01-kenapa-react.html` |
| 20–36 | **Setup Vite + Tailwind** — titik paling rawan | terminal |
| 36–54 | Komponen & JSX | `komponen/Navbar.jsx` |
| 54–74 | **Props** — konsep terpenting | `komponen/ProductCard.jsx` |
| 74–98 | Conditional & List Rendering + `key` | `komponen/KeyJebakan.jsx` |
| 98–114 | Praktik live: katalog utuh | `komponen/App.jsx` |
| 114–120 | Penutup & Tugas 2 | [`../tugas/`](../tugas/) |

---

## 0–8 · Pembuka

1. **Tampilkan kode P2 mereka sendiri** — fungsi `gambarKartu()`. Bukan slide.
   > "Ingat ini? Kalian yang nulis minggu lalu. Jalan, dan jalan dengan baik. Hari ini saya mau kalian lihat dulu **apa yang salah** sama kode ini."
2. Peringatkan bahwa hari ini terasa beda: terminal, install, server.
   > "Kelihatannya ribet, dan iya awalnya emang ribet. Tapi ini cuma sekali."
3. Cek: siapa Tugas 1-nya sudah masuk? siapa sudah punya Node.js? siapa belum pernah buka terminal?

---

## 8–20 · Kenapa React Ada — `01-kenapa-react.html`

1. Buka file-nya. **Ketik di kotak Catatan** salah satu kartu.
2. Klik tombol filter. **Ketikannya hilang.**
3. Tanya: *"menurut kalian kenapa hilang?"* Biarkan menebak.
4. Tunjukkan baris `innerHTML` — seluruh isi dihapus, dibangun ulang.
   > "Bayangin ini kejadian di form checkout, pas orang udah ngisi alamat."
5. **Sebut** dua cacat lain (jangan diperagakan, hemat waktu): tampilan gampang tidak sinkron; tidak ada potongan yang bisa dipakai ulang.

**Virtual DOM — analogi renovasi rumah:**
> "Cara minggu lalu itu: mau ganti warna satu tembok, kalian **bongkar seluruh rumah**. React itu mandor yang bawa **dua denah** — dia bandingin, terus bilang 'yang beda cuma tembok ruang tamu, cat itu aja'. Denah itulah Virtual DOM. Bandingin kertas itu murah, bongkar rumah itu mahal."

⛔ **Berhenti di situ.** Jangan masuk *reconciliation* atau *fiber*.

**Cek sebelum lanjut:** peserta bisa menyebut satu masalah nyata dari cara P2.

---

## 20–36 · Setup Vite + Tailwind ⚠️

> **Titik paling rawan hari ini.** Jalan pelan. Setelah tiap perintah, tunggu mayoritas selesai.

```bash
npm create vite@latest      # React → JavaScript
cd nama-produk
npm install
npm run dev
```

⛔ **BERHENTI.** Pastikan semua melihat `localhost:5173` sebelum lanjut.

```bash
npm install tailwindcss @tailwindcss/vite
```

Lalu tambahkan `tailwindcss()` ke plugins di `vite.config.js`, dan ganti seluruh isi `src/index.css` dengan `@import "tailwindcss";`

**Uji:** `<h1 className="text-3xl font-bold text-blue-600">Halo</h1>` → besar dan biru.

**Kenapa tidak pakai CDN seperti P1:**
> "Yang di P1 ngirim **seluruh** Tailwind ke pengunjung, padahal kalian cuma pakai dua puluh class. Yang sekarang baca kode kalian, cuma ambil yang dipakai. Pola ini bakal kalian lihat terus: cara gampang buat belajar, cara benar buat produksi."

| Masalah | Solusi |
|---|---|
| `npm: command not found` | Node belum terpasang — harusnya selesai H-3 |
| `npm install` lama | **Salin `node_modules` dari flashdisk** |
| Port dipakai | `npm run dev -- --port 5174` |
| Tailwind tak berefek | plugin masuk? `index.css` benar? server di-restart? |

> **JALAN DARURAT:** siapkan **project jadi** di flashdisk. Yang buntu tinggal menyalin dan ikut praktik. Tujuan hari ini bukan menguasai npm.

**Cek sebelum lanjut:** semua layar menampilkan halaman Vite dengan Tailwind aktif.

---

## 36–54 · Komponen & JSX — `komponen/Navbar.jsx`

1. Komponen = **fungsi yang mengembalikan tampilan**. Itu saja.
2. Empat beda JSX vs HTML: `className` · tag wajib ditutup · `onClick` camelCase · **wajib satu pembungkus**.
3. Kurung kurawal `{}` = pintu ke JavaScript.
   > "JSX itu kayak undangan yang udah dicetak, dan `{}` itu bagian kosong buat diisi nama tamu."
4. **Huruf besar wajib** — ini bukan gaya, ini menentukan jalan atau tidak.
   > "React bedain komponen kalian sama tag HTML cuma dari huruf pertamanya. Kalau komponen nggak muncul dan nggak ada error, cek huruf pertamanya dulu."
5. Bangun `Navbar.jsx` bersama, pakai di `App.jsx`.

**Sebut:** `import`/`export` ini persis P2 Bagian 5. Bukan hal baru.

---

## 54–74 · Props — `komponen/ProductCard.jsx`

1. Induk kirim, anak terima: `<ProductCard nama="Rendang" harga={35000} />`
2. **Sebut eksplisit:** `{ nama, harga }` di parameter itu **destructuring dari P2**.
   > "Ingat kan? Yang minggu lalu kalian pikir buat apa. Ini dia."
3. **Props tidak boleh diubah anak — analogi surat tugas:**
   > "Props itu surat tugas dari atasan. Kalian baca dan kerjakan — nggak boleh coret-coret suratnya terus ngaku itu yang dikasih. Data mengalir ke bawah, satu arah."
4. Tiga bentuk: **props drilling** (sebut, obatnya di P7) · **children** (`Footer.jsx`) · **default props** (`Badge.jsx`)

**Colokan ke P4:** *"kalau anak butuh ngasih tahu induknya sesuatu, caranya beda — minggu depan."* Sebut, jangan dijelaskan.

**Cek sebelum lanjut:** peserta bisa bikin satu komponen yang menerima props sendiri.

---

## 74–98 · Conditional & List Rendering — `komponen/KeyJebakan.jsx`

**Conditional — dua bentuk:**
> "Kalau pertanyaannya **'yang mana?'** — ternary. Kalau **'muncul nggak?'** — `&&`. Persis kayak `.find()` versus `.some()` minggu lalu."

⚠️ **Sebut jebakannya duluan:** `{stok && ...}` dengan `stok = 0` akan **menampilkan angka nol**. Harus `{stok > 0 && ...}`. Peserta pasti kena ini di tugas.

**List rendering:** `.map()` yang **sama persis** dengan P2. Yang baru cuma isinya JSX, bukan string.

### Peragaan `key` — 90 detik, jangan dilewati

1. Buka `KeyJebakan.jsx`, biarkan di posisi **key = index**
2. Ketik di kotak baris **kedua**
3. Hapus baris **pertama**
4. Ketikan pindah ke barang yang **salah**
5. Tukar ke **key = id**, ulangi → sekarang benar

**Analogi nomor punggung:**
> "Bayangin kalian kenalin pemain dari **urutan berdirinya**. Terus yang paling kiri pulang — semua orang berubah identitas cuma gara-gara satu orang pergi.
> Yang bener: **nomor punggung**. Nempel di orangnya, nggak peduli dia berdiri di mana."

Setelah peragaan:
> "Datanya bener, tapi yang diketik pindah ke barang lain. Bug kayak gini yang bikin orang begadang, dan penyebabnya cuma satu huruf: `i`."

**Kalau data peserta belum punya `id`:** minta mereka menambahkannya. Itu jawaban yang benar.

---

## 98–114 · Praktik Live: Katalog Utuh — `komponen/App.jsx`

Rangkai semua: `Navbar` · grid `ProductCard` · `Footer`. Bangun bersama, jangan ditunjukkan jadi.

> "Coba lihat `App.jsx` sekarang. Kalian bisa baca kayak daftar isi: ada navbar, ada judul, ada grid kartu, ada footer. **Struktur halamannya kelihatan dari kodenya.** Bandingin sama file P2 kalian yang isinya string HTML numpuk di dalam `.map()`."

**Momen wow — Hot Module Replacement:** ubah warna, simpan, **jangan refresh**. Berubah seketika.

---

## 114–120 · Penutup & Tugas 2

**Benang merah:**
> "Temanya satu: **berhenti nyuruh, mulai mendeskripsikan.** Dan kalian nggak belajar banyak hal baru hari ini — `.map()`, destructuring, import-export itu punya kalian dari minggu lalu. Yang baru cuma wadahnya."

**Yang sudah bisa dikerjakan malam ini** — sebutkan eksplisit:
- Inisialisasi Vite + Tailwind **di repo yang sama**
- Pecah UI jadi minimal 4 komponen
- Props + `.map()` dengan `key` stabil

**Yang menunggu P4:** `useState`, form terkendali, immutability.

> "Setengah Tugas 2 udah bisa dikerjain malam ini. Kalau nunggu Pertemuan 4, kalian bakal ngerjain dua pertemuan sekaligus dalam semalam.
> Dan ingat: **project React-nya di repo yang sama.** Jangan bikin repo baru."

---

## Kalau Waktu Tidak Cukup

| Urutan potong | Yang dipotong | Ganti dengan |
|:--:|---|---|
| 1 | Children props & default props (Bagian 4) | Sebut ada, tunjukkan `Badge.jsx` sekilas |
| 2 | Praktik live Bagian 6 | Buka `komponen/App.jsx` yang sudah jadi, bahas strukturnya |
| 3 | Virtual DOM (Bagian 1) | Cukup peragaan `01-kenapa-react.html` tanpa penjelasan denah |

> ⛔ **JANGAN PERNAH DIPOTONG:**
> - **Bagian 2 (Setup)** — tanpa project jalan, sisanya mustahil
> - **Props (Bagian 4)** — seluruh Tugas 2 bergantung padanya
> - **Peragaan `key`** — kalau dilewati, bug-nya muncul di Tugas 2 dan mereka tidak akan tahu penyebabnya

---

## Tiga Kesalahan yang Paling Gampang Terjadi

**1. Menganggap setup formalitas dan buru-buru melewatinya.**
Peserta yang project-nya tidak jalan diam saja, bukan bertanya. Berkeliling cek layar satu per satu.

**2. Menjelaskan Virtual DOM terlalu dalam.**
Topiknya menarik, godaannya besar. Tapi peserta yang baru kenal komponen tidak butuh *reconciliation*. Cukup: ada denah, dibandingkan, cuma yang beda yang diubah.

**3. Mengajarkan `key` sekadar "biar nggak ada warning".**
Semua akan pakai `key={index}`, warning hilang, masalah meledak di Tugas 2. Peragakan akibatnya.
