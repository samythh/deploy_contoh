# RUNDOWN P8 — Pegangan Saat Mengajar

Buka di layar kedua saat kelas. Isinya cuma **gerakan** — penjelasan lengkapnya di [P8-Materi-Mentor-Frontend-Auth-Deploy.md](P8-Materi-Mentor-Frontend-Auth-Deploy.md).

> ⚠️ **P8 punya TIGA MOMEN KEJUJURAN.** Ketiganya berbunyi sama: *"yang barusan kalian bikin itu bukan keamanan."* Kalau dilewati, peserta lulus dengan keyakinan yang salah — dan membawanya ke tempat kerja.

---

## Tiga Aturan Hari Ini

**1. Tiga momen kejujuran tidak boleh dipotong.** Kalau kejar waktu, potong **deploy** atau **testing**. Akibat melewati kejujuran tidak terlihat di kelas — terlihatnya di kantor pertama mereka.

**2. Risikonya bukan kehabisan waktu, tapi melompat terlalu cepat.** Sembilan bagian, tidak ada yang butuh 25 menit. Jangan biarkan tidak ada yang menempel.

**3. Ini pertemuan terakhir.** Sisakan waktu untuk pertanyaan Capstone.

---

## Peta 120 Menit

| Menit | Bagian | File |
|:--:|---|---|
| 0–8 | Pembuka & peta akhir program | aplikasi Tugas 3 peserta |
| **8–30** | **Auth + kejujuran XSS** ⚠️ | `auth/AuthContext.jsx` |
| **30–43** | **Protected Route** ⚠️ | `auth/ProtectedRoute.jsx` |
| **43–54** | **Environment Variables** ⚠️ | `.env.example` |
| 54–72 | Build & Deploy ke Vercel | terminal |
| 72–84 | Audit Lighthouse | DevTools |
| 84–96 | Git Collaboration | terminal |
| 96–111 | Wawasan Testing | `contoh-test/` |
| 111–120 | Penutup & kesiapan Capstone | [`../tugas/`](../tugas/) |

---

## 0–8 · Pembuka

**Tunjukkan aplikasi Tugas 3 mereka sendiri.**

> "Delapan minggu lalu kalian bikin `<h1>Halo</h1>` dan nggak yakin bakal muncul apa nggak. Sekarang ini: halaman banyak, data dari server beneran, lima status ditangani, state global.
>
> Hari ini kita bikin dia bisa dibuka orang lain lewat internet, dan kita tutup satu hal terakhir: **login**."

**Lalu peringatan hari ini:**
> "Tapi ada **tiga momen** hari ini di mana saya bakal bilang: *'yang barusan kalian bikin itu bukan keamanan.'* Bukan buat nakut-nakutin — supaya kalian nggak keluar dari kelas ini dengan keyakinan yang salah."

**Cek:** Tugas 3 sudah masuk? Sudah punya akun Vercel/Netlify?

---

## 8–30 · Auth & Kejujuran XSS ⚠️

**Analogi gelang konser:**
> "Beli tiket di loket — itu login. Loket ngasih **gelang** — itu token. Yang **bikin** gelang itu loket. Yang **ngecek** itu satpam. Kalian cuma **makai**.
>
> Frontend itu kalian. Bukan loket, bukan satpam."

**Alur:** login → simpan token → interceptor bawa otomatis → logout hapus.
> "Ingat satpam di pintu dari Pertemuan 6? Ini kegunaannya."

### ⚠️ PERAGAAN 30 DETIK — yang paling berkesan

Console → `localStorage.getItem("token")` → tokennya muncul, teks biasa.

> "Sekarang bayangin baris itu **bukan kalian** yang ngetik. Ada script asing di halaman kalian — dari iklan, dari library pihak ketiga, dari kolom komentar yang nggak disaring.
>
> Dia bisa baca ini, kirim ke server dia, terus **masuk sebagai kalian**. Namanya **XSS**. Dan pengguna nggak akan sadar apa-apa."

**Standar industri:**

| | Kelas | Industri 2026 |
|---|---|---|
| Access token | LocalStorage | Di memori |
| Refresh token | — | Cookie **`HttpOnly`** |
| JS bisa baca? | **Ya** | **Tidak** |

**Kenapa kita tetap pakai LocalStorage — jangan sampai mereka merasa diajari yang salah:**
> "Cara yang bener butuh **kerja sama backend** — server harus ngeset cookie, ngatur CORS, nyediain endpoint refresh. Itu di luar kendali kalian.
>
> Yang saya minta cuma satu: **jangan lupa ini versi kelas.** Pas di kantor nanti, tanya tim backend: **'refresh token-nya di cookie HttpOnly kan?'** Satu pertanyaan itu bakal bikin kalian keliatan tahu apa yang kalian omongin."

---

## 30–43 · Protected Route ⚠️

**Sebut yang sudah mereka punya:** `{ children }` P3 · `<Navigate>` P5 · `loading` P6.

**Dua hal yang pasti jadi bug kalau tidak disebut:**

1. **Cek `loading` duluan** — kalau tidak, pengguna yang sudah login dilempar ke login tiap refresh
   > "Mereka refresh, keluar sendiri. Refresh lagi, keluar lagi. Kelihatannya kayak aplikasi kalian rusak."
2. **`replace` di `<Navigate>`** — tanpa itu, tombol Back kejebak muter-muter

### ⚠️ PERAGAAN 1 MENIT

Salin alamat permintaan data dari tab Network → buka di tab baru **tanpa login** → **datanya tetap datang**.

> "Protected Route itu **bukan keamanan**. Itu **kenyamanan**.
>
> Datanya tetep bisa diminta langsung ke server, dan **server** yang harus nolak. Kalau servernya nggak ngecek, aplikasi kalian bocor — mau ada Protected Route atau enggak.
>
> Analoginya: ini kayak naruh **tirai** di depan pintu. Orang nggak lihat isinya. Tapi **tirai bukan kunci**."

**Sambungkan ke Capstone:**
> "Nanti pas Capstone, tanyain ke tim Backend: **'endpoint ini udah dicek token-nya belum?'** Jangan asumsi udah."

---

## 43–54 · Environment Variables ⚠️

**Dua aturan Vite — penyebab error paling sering:**
1. Wajib diawali **`VITE_`**
2. Dibaca lewat **`import.meta.env`**, bukan `process.env`
3. *(Kalau masih `undefined`: restart server dev)*

**`.env` jangan masuk Git. `.env.example` yang di-commit.**

### ⚠️ PERAGAAN 2 MENIT — yang paling mengejutkan

`npm run build` → buka `dist/assets/*.js` → cari nilai `VITE_API_URL` → **ketemu, teks biasa**.

> "`.env` di frontend itu **bukan tempat rahasia.** Pas di-build, isinya **ditempel langsung** ke file JavaScript yang dikirim ke browser pengunjung.
>
> Jadi apa gunanya? **Bukan buat nyembunyiin — tapi buat membedakan.** Alamat server waktu ngoding beda sama waktu udah live. Itu doang.
>
> Yang **nggak boleh** masuk situ: API key berbayar, password, secret apa pun. Sama aja kayak nulis di papan pengumuman."

**Kalau ditanya "terus API key taruh di mana?"** → di server. Frontend memanggil server kalian sendiri.

---

## 54–72 · Build & Deploy

```bash
npm run build      # menghasilkan dist/
npm run preview    # jalankan hasil build-nya, BUKAN versi dev
```

> "`preview` ini sering dilewati. Yang kalian lihat selama ini itu **versi pengembangan**. `preview` nunjukin yang **beneran akan dilihat pengunjung.**"

**Vercel:** push ke GitHub → Add New Project → preset **Vite** → **isi Environment Variables** → Deploy

> ⚠️ **Langkah env var paling sering dilupakan.** Aplikasi ter-deploy, tampilan muncul, **data kosong**. Sebut duluan.

> "Ini yang bikin kalian ngerti kenapa dari Pertemuan 1 saya maksa pakai Git. Sekarang ngumpulin kerjaan sama nge-deploy itu **satu gerakan yang sama**."

**404 saat refresh di `/produk/7`** — yang dijanjikan di P5. Vercel preset Vite biasanya sudah menangani; kalau tidak, `vercel.json` dengan rewrite.

---

## 72–84 · Lighthouse

`F12` → tab **Lighthouse** → mode Navigation → Analyze

> ⚠️ **Jalankan pada URL hasil deploy, bukan `localhost`.**

**Syarat Tugas 4: Accessibility ≥ 90.**

> "Kenapa Accessibility yang dinilai, bukan Performance? Karena Performance banyak dipengaruhi hal di luar kendali kalian. **Accessibility itu murni hasil keputusan yang kalian ambil sendiri** waktu nulis kode.
>
> Dan ini satu-satunya nilai di kelas ini yang **bisa diukur objektif**. Bukan pendapat saya soal rapi atau nggak."

### Lima temuan yang hampir pasti muncul — semuanya materi P1

`lang` di `<html>` · `alt` di gambar · tombol tanpa nama terbaca · kontras warna · urutan heading melompat

> "Perhatiin daftarnya. **Semuanya materi Pertemuan 1.**
>
> Waktu itu sebagian dari kalian mikir 'ngapain sih ribet nulis `lang="id"`, kan nggak keliatan'. Nah, delapan minggu kemudian, itu yang jadi angka di nilai tugas kalian.
>
> Aksesibilitas itu **paling murah dikerjain di awal, paling mahal kalau ditambal belakangan**."

---

## 84–96 · Git Collaboration

**Analogi dapur restoran:**
> "`main` itu **piring yang disajikan ke tamu** — nggak boleh ada yang setengah jadi.
> `dev` itu **meja penyajian** — tempat semua dikumpulin dan dicek.
> `feature/...` itu **wajan masing-masing koki** — ngaduk sesuka hati, nggak ganggu siapa-siapa."

**Peragakan merge conflict sungguhan — 5 menit.** Dua cabang mengubah baris yang sama → merge → selesaikan di VS Code.

> "Merge conflict itu **bukan error**. Itu Git yang jujur: 'dua orang ngubah baris yang sama, saya nggak tahu mana yang bener.'
>
> Yang sering kejadian: orang panik, hapus semua kerjaannya, mulai dari nol. **Jangan.**
>
> Dan kalau kalian nggak yakin mana yang bener, **tanya orang yang nulis baris satunya.** Konflik itu masalah komunikasi, bukan masalah teknis."

**Code review:** tanya **"kenapa"**, jangan cuma bilang "ini salah".

---

## 96–111 · Wawasan Testing

**Mulai dari pengalaman mereka:**
> "Angkat tangan yang pernah benerin satu hal, terus ada hal lain yang tadinya jalan jadi rusak — dan baru sadar dua hari kemudian."

> "Nah, itu yang diselesaikan testing. Bukan buktiin kode kalian bener — tapi **mastiin yang tadinya jalan nggak ikut rusak**."

**Bacakan contoh test sebagai kalimat:** *"tampilkan komponennya · pastikan tulisannya 0 item · klik tombol Tambah · pastikan sekarang 1 item."*

> "Perhatiin: test-nya nggak nyebut satu pun nama variabel di dalam komponen. Dia cuma ngecek **yang dilihat dan dilakukan pengguna**."

**Analogi rem tangan:**
> "Bayangin benerin satu fitur di aplikasi dua ratus halaman. Gimana cara mastiin nggak ada yang rusak? Buka dua ratus halaman satu-satu?
>
> Bukan buat ngelambatin — justru bikin tim **berani ngubah kode**. Tanpa test, orang takut nyentuh kode lama, dan aplikasi jadi beku."

**Sambungan ke P1:**
> "`getByRole('button')` itu **cuma bisa nemuin tombol kalau HTML kalian bener.** Kebiasaan semantic dari Pertemuan 1 kepake lagi. Semuanya nyambung."

**Tidak diwajibkan di Tugas 4.** Sebut eksplisit.

---

## 111–120 · Penutup & Capstone

**Benang merah hari ini:**
> "**Frontend nggak bisa nyimpen rahasia.** Token bisa dibaca, protected route cuma tirai, env var ikut kekirim. Itu bukan cacat — itu sifat kode yang jalan di komputer orang lain."

**Benang merah delapan minggu — sampaikan pelan:**
> "Delapan minggu lalu saya bilang: kalian nggak dibayar buat **ngetik kode**. Kalian dibayar buat **bertanggung jawab** atas kode.
>
> Semua yang kita pelajarin muaranya ke situ. `<nav>` bukan `<div>` — biar orang lain bisa baca. Alasan di komentar — biar orang lain paham. Lima status antarmuka — biar pengguna nggak bingung. Ukur sebelum optimasi — biar kalian nggak nebak.
>
> AI bisa nulis semua ini lebih cepet dari kalian. Yang nggak bisa dia lakuin: **berdiri di depan tim dan mempertanggungjawabkannya.**"

**Kesiapan Capstone — tiga hal yang berubah:**
1. Tidak lagi sendirian di repositori
2. Data dari tim Backend, bentuknya disepakati di Sprint 1
3. Desain dari tim UI/UX lewat Figma

> "Yang paling sering bikin tim Capstone macet itu bukan kodenya. Tapi **frontend dan backend yang beda asumsi soal bentuk data**, dan baru ketahuan tiga minggu kemudian."

---

## Kalau Waktu Tidak Cukup

| Urutan potong | Yang dipotong | Ganti dengan |
|:--:|---|---|
| 1 | Wawasan Testing (Bagian 7) | Tunjukkan contoh test 2 menit, tanpa penjelasan |
| 2 | Peragaan merge conflict | Jelaskan lisan, contohnya di materi |
| 3 | Detail deploy (Bagian 4) | Tunjukkan hasil jadi, langkahnya di materi |

> ⛔ **JANGAN PERNAH DIPOTONG:**
> - **Tiga momen kejujuran** — akibatnya tidak terlihat di kelas, terlihatnya di tempat kerja mereka
> - **Cek `loading` di Protected Route** — akan jadi bug yang mereka tidak bisa lacak
> - **Peringatan env var di Vercel** — aplikasi ter-deploy tapi data kosong

---

## Tiga Kesalahan yang Paling Gampang Terjadi

**1. Melewati tiga momen kejujuran karena kejar waktu.**
Paling mahal di seluruh program. Peserta yang lulus mengira Protected Route itu keamanan akan membangun sistem yang bocor.

**2. Mengajarkan LocalStorage tanpa alternatifnya — atau sebaliknya, membuatnya terdengar seperti kesalahan.**
Yang benar: ini **versi kelas yang sadar**, dipilih karena cara yang benar butuh kerja sama backend.

**3. Menjadikan Lighthouse sekadar syarat administratif.**
Tunjukkan bahwa lima temuan tersering semuanya materi P1 — itu yang membuat mereka mengerti kenapa aksesibilitas diajarkan sejak awal.
