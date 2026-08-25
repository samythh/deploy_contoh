# RUNDOWN P1 — Pegangan Saat Mengajar

Buka file ini di layar kedua saat kelas berlangsung. Isinya cuma **gerakan**, bukan penjelasan — penjelasan lengkapnya di [P1-Materi-Mentor-Frontend-HTML-CSS.md](P1-Materi-Mentor-Frontend-HTML-CSS.md).

---

## Tiga Aturan yang Mengatur Seluruh Urutan

**1. Langsung cara modern.** Jangan peragakan float, inline style, atau margin-tambalan. Cara lama cukup jadi **selingan** satu-dua kalimat sambil lewat — kalimatnya sudah disiapkan di bagian terakhir file ini.

**2. Shortcut adalah hadiah.** Emmet di akhir Bagian 1, Tailwind di Bagian 6 — dua-duanya *setelah* peserta mengerjakan manual.

**3. Lihat dulu, paham belakangan.** Untuk yang visual (Flexbox, tab Network), peragakan hasilnya sebelum menjelaskan.

---

## Peta 120 Menit

| Menit | Bagian | File |
|:--:|---|---|
| 0–8 | Pembuka & peta program | — |
| 8–20 | Anatomi HTML + **kemenangan pertama** | `01-kerangka.html` |
| 20–33 | **Arsitektur Web** — client-server, HTTP, tab Network | — |
| 33–53 | **HTML5 Semantic & Aksesibilitas** | `02-semantic/` |
| 53–67 | CSS, Box Model & Flow Dokumen | `03-box-model.html` |
| 67–89 | **Flexbox** — porsi terbesar | `04-flexbox.html` |
| 89–102 | TailwindCSS via Play CDN | `05-tailwind.html` |
| 102–120 | Penutup, tugas & **Setup Git + PR** | [`../tugas/`](../tugas/) |

> **CSS Grid & Mobile-First sekarang di P2**, bukan di sini. Jangan mengajarkannya hari ini — peserta akan memakainya untuk grid kartu di pertemuan berikutnya.

---

## 0–8 · Pembuka

1. Tunjukkan hasil akhir program (web app yang tarik data API). *"Dalam 8 pertemuan, ini yang kalian bangun."*
2. Tunjuk navbar, kartu, tombol. *"Semua yang kelihatan ini HTML dan CSS."*
3. Analogi rumah: HTML = rangka, CSS = cat, JS = listrik.
4. Ukur kelas: siapa pernah ngoding? siapa sudah install VS Code? siapa belum pernah lihat HTML?

---

## 8–20 · Anatomi HTML — `01-kerangka.html`

**Menit ke-12 adalah prioritas nomor satu Anda.** Sebelum teori apa pun:

> Semua orang bikin `index.html`, ketik `<h1>Halo, saya [nama]</h1>`, save, double-click, lihat di browser.

⛔ **JANGAN LANJUT** sebelum semua berhasil. Peserta yang gagal di sini tertinggal 8 pertemuan. Membantunya lebih penting daripada mengejar materi.

> "Selamat, kalian barusan bikin halaman web. Beneran. Kalau file ini di-upload ke internet, orang sedunia bisa buka."

**Lalu — urutannya manual → rusak → hadiah:**

1. Ketik kerangka HTML **manual** bersama peserta. Melelahkan, itu maksudnya.
2. `<head>` vs `<body>` — analogi amplop surat.
3. **Peragakan:** hapus `<meta charset>`, ketik "Ekonomi Indonesia — 2026" → karakter rusak.
4. **Peragakan:** pindahkan `<h1>` ke `<head>` → teksnya hilang.
5. **Baru kasih Emmet:** *"Sekarang saya kasih hadiah. Ketik `!` lalu Tab."*

**Cek sebelum lanjut:** semua punya file dengan kerangka lengkap.

---

## 20–33 · Arsitektur Web

**Jembatannya dari yang barusan mereka lakukan:**
> "Kalian barusan buka file dari komputer sendiri. Sekarang — gimana kalau file-nya ada di komputer orang lain, di negara lain?"

1. Diagram client-server. **Analogi restoran:** kalian pelanggan, dapur itu server, pelayan bawa pesanan (request) dan mengantar makanan (response).
2. Empat HTTP methods lewat analogi yang sama: `GET` lihat menu · `POST` pesan baru · `PUT` ganti pesanan · `DELETE` batalkan.
3. Aturan yang berguna seumur hidup: *"`GET` nggak boleh mengubah data. Kalau bikin tombol hapus pakai GET, itu celah keamanan."*

**Praktik — tab Network:**

`F12` → tab **Network** → refresh halaman apa pun. Klik salah satu baris: ada Status Code, ada Response.

> "Ini bukti obrolan tadi beneran terjadi. 200 artinya 'oke, ini barangnya'. 404 artinya 'nggak nemu'. Ingat tab ini — di Pertemuan 6 waktu data kalian nggak muncul, tab inilah yang ngasih tahu."

Ini menanamkan kompetensi **Debugging & Verification** sejak pertemuan pertama.

---

## 33–53 · Semantic — `02-semantic/`

> Ini **satu-satunya** bagian yang masih memakai perbandingan cara lama. Batasi **2 menit**, bukan latihan.

1. Buka `divsoup.html` **duluan**.
2. Tanya: *"tanpa scroll ke atas, ada yang bisa bilang `</div>` mana yang nutup navigasi?"* Kesulitan mereka **adalah** pesannya.
3. Buka `semantic.html` berdampingan. **Tampilannya identik.**
4. Tiga alasan semantic menang: screen reader bisa melompat · Google paham struktur · programmer lain langsung mengerti.
5. **Tutup dengan kapan `div` justru benar** — tunjukkan pembungkus grid di `semantic.html`.

⚠️ Jangan sampai peserta pulang mengira `div` haram. Mereka akan memakainya tiap hari di React.

**Cek sebelum lanjut:** peserta bisa menyebut satu alasan kenapa `<nav>` lebih baik dari `<div class="nav">`.

---

## 53–67 · CSS, Box Model & Flow — `03-box-model.html`

1. Langsung ajarkan `<link rel="stylesheet">`. **Jangan** peragakan tiga cara. → *selingan #1*
2. Selector: `p` · `.class` · `#id` · `nav a`. Tekankan `class` lebih sering dipakai.
3. **Penamaan class = fungsi, bukan tampilan.** Pancing dengan: *"tiga bulan lagi bos minta warnanya oranye. Class `.merah` itu namanya jadi apa?"*
4. Box model — **minta menebak dulu:** *"yang mana yang bikin kotaknya lebih gemuk, padding atau margin?"*
5. Buka DevTools → **Computed** → cek tebakan mereka.
6. Contoh 4–5: `content-box` vs `border-box` — kenapa `width: 180px` terukur 226px.

**Cek sebelum lanjut:** semua bisa buka DevTools dan menemukan panel Computed.

---

## 67–89 · Flexbox — `04-flexbox.html`

> Porsi terbesar. Bangun bersama peserta, jangan ditunjukkan jadi.

| Contoh | Yang ditunjukkan |
|:--:|---|
| 1 | `display: flex` — satu baris |
| 2 | `justify-content: center` |
| 3 | `justify-content: space-between` |
| 4 | `align-items: center` |
| 5 | Keduanya — pusat sempurna → **selingan #2** |
| 6 | `gap` vs margin → **selingan #3** |
| 7 | **Navbar lima baris** — penutup yang kuat |

**Analogi rak buku** (ulang beberapa kali):
> "`justify-content` geser kiri-kanan, `align-items` geser atas-bawah. Dua-duanya ditulis di **RAK**-nya, bukan di bukunya."

**Kesalahan nomor satu peserta:** lupa `display: flex` di induknya, lalu bingung kenapa `align-items` tidak ngaruh. Sebut duluan.

**Cek sebelum lanjut:** peserta bisa bikin navbar logo-kiri menu-kanan sendiri.

---

## 89–102 · TailwindCSS — `05-tailwind.html`

**Buka dengan mengakui keribetan tadi:**
> "Satu jam terakhir kalian nulis CSS manual dan mikir 'kok ribet banget'. Bagus — itu memang ribet. Sekarang saya kasih obatnya. Tapi saya kasih SETELAH kalian ngerasain sakitnya."

1. Contoh 1 dan 2 berdampingan — kartu yang sama, hasil identik.
2. **Petakan tabelnya satu per satu di layar.** Ini yang terpenting: `display: flex` → `flex` · `justify-content: space-between` → `justify-between` · `padding: 1.5rem` → `p-6`
   > "Nggak ada satu pun konsep baru. Semuanya CSS tadi, cuma dipendekin."
3. **Contoh 4 — jangan dilewati.** Sebelas class dalam satu elemen. Sebut kelemahannya **duluan**.
4. Sebut sekali: Play CDN cuma untuk belajar, pemasangan benar di P3. Jangan jadi bahasan panjang.

---

## 102–120 · Penutup, Tugas & Setup Git

### 102–105 · Benang merah
> "Semua hari ini temanya satu — **kasih nama yang benar.** `<nav>` menang karena namanya benar. `.alert-error` menang karena namanya benar."

### 105–108 · Sistem tugas & pilih tema

Jelaskan sekali dengan benar: **bukan 8 tugas terpisah, tapi satu produk yang tumbuh lewat 4 tahap.**

> "Tugas kalian bukan PR yang dibuang setelah dinilai. Ini **satu produk** yang kalian besarkan pelan-pelan. Minggu ini halaman statis. Nanti dia narik data dari server. Terakhir dia punya login dan bisa dibuka orang sedunia.
> Jadi pilih tema yang kalian beneran suka — kalian bakal hidup sama dia dua bulan."

**Minta mereka pilih tema hari ini juga.** Syarat: datanya berbentuk **daftar item dengan detail**.

### 108–120 · Setup Git & Pull Request

⛔ **Kalau waktu mepet, potong Tailwind — jangan potong bagian ini.** Semua tugas dikumpulkan lewat PR; kalau ini gagal, peserta tidak bisa mengumpulkan apa pun.

```bash
git config --global user.name "Nama Lengkap"
git config --global user.email "email@github.com"
git clone <repo-starter>
git checkout -b tugas1-nama-anda
git add . && git commit -m "feat: halaman statis tugas 1"
git push -u origin tugas1-nama-anda
```

Lalu GitHub → **Compare & pull request** → **Create pull request**.

**Kenapa repot begini?**
> "Kalau kerja sendirian, kirim ZIP memang lebih gampang. Tapi di kantor kalian nggak pernah sendirian. Bayangin satu dokumen dikerjain lima orang — kalau tiap orang ngirim salinannya sendiri lewat WhatsApp, dalam dua hari nggak ada yang tahu mana versi yang benar.
> **Branch** itu salinan buat dicoret-coret sendiri. **Pull Request** itu ngangkat tangan: 'saya udah selesai, tolong dicek.'
> Dan ini bukan latihan pura-pura. Pas Capstone kalian satu repo bareng anak Backend."

**Tiga hal yang pasti bikin macet:**

| Masalah | Solusi |
|---|---|
| `git: command not found` | Git belum terpasang — harusnya selesai di H-3 |
| Diminta username & password saat `push` | GitHub tidak menerima password sejak 2021 → Personal Access Token, atau GitHub Desktop |
| Bingung ada di branch mana | `git branch`, yang aktif ditandai `*` |

> **JALAN DARURAT:** kalau ada yang benar-benar buntu di CLI, izinkan **GitHub Desktop**. Tujuan hari ini bukan menguasai Git — tapi memastikan semua bisa mengumpulkan tugas. CLI diperdalam di P8.

**Cek sebelum kelas bubar:**
- [ ] Semua punya akun GitHub
- [ ] Semua berhasil `clone` repositori kelas
- [ ] Minimal setengah kelas berhasil bikin PR percobaan
- [ ] Yang belum berhasil sudah dicatat namanya

**Kalimat soal AI — jangan dilewatkan:**
> "Boleh pakai AI. Tapi di breakout room saya bakal tunjuk satu baris dan tanya kenapa. Kalau nggak bisa jawab, berarti itu bukan kode kalian."

---

## Kalimat Selingan Cara Lama — Siap Ucap

Sebut sambil lewat, **jangan buka file, jangan suruh mencoba.**

**#1 — setelah `<link rel="stylesheet">`:**
> "Sebenarnya ada cara lain: gaya bisa ditulis nempel langsung di tiap elemen. Cuma masalahnya, kalau mau ganti satu warna, kalian harus edit 50 tempat satu-satu. Makanya orang naruh semuanya di satu file — ganti sekali, semua ikut."

**#2 — Flexbox contoh 5, saat pusat sempurna tercapai:**
> "Dua baris ini kelihatannya sepele ya. Buat info aja: sebelum ada Flexbox, naruh sesuatu pas di tengah secara tegak itu masalah legendaris — orang nulis belasan baris akal-akalan buat ini, dan sering nggak berhasil. Sekarang dua baris. Kalian lahir di waktu yang tepat."

**#3 — Flexbox contoh 6, soal `gap`:**
> "`gap` ngasih jarak cuma DI ANTARA — kayak jarak antar-orang yang lagi antre. Dulu orang pakai margin, terus harus nulis baris tambahan khusus buat anak terakhir. Sekarang nggak perlu."

---

## Kalau Waktu Tidak Cukup

Potong dalam urutan ini:

| Urutan | Yang dipotong | Ganti dengan |
|:--:|---|---|
| 1 | **Bagian 6 (Tailwind)** | Tunjukkan contoh 1–2 saja, bilang praktik penuhnya di P3 |
| 2 | Box model contoh 4–5 (`content-box`/`border-box`) | Simpan jadi bahan P2 |
| 3 | Tab Network di Bagian 2 | Cukup diagram client-server; Network dibuka lagi di P6 |

> ⛔ **JANGAN PERNAH DIPOTONG:**
> - **Bagian 3 (Semantic)** dan **Bagian 5 (Flexbox)** — semua pertemuan berikutnya bergantung padanya
> - **Bagian 7 (Setup Git & PR)** — tanpa ini peserta tidak bisa mengumpulkan tugas sama sekali

---

## Tiga Kesalahan yang Paling Gampang Terjadi

**1. Terburu-buru di 20 menit pertama karena "HTML kan gampang".**
Bagi peserta yang belum pernah ngoding, mengetik `<h1>Halo</h1>` tanpa typo itu pencapaian nyata. Yang tertinggal di sini tidak akan menyusul.

**2. Memberi Emmet atau Tailwind terlalu awal.**
Peserta jadi hafal mantra tanpa tahu isinya, dan tidak punya pegangan saat hasilnya melenceng.

**3. Menyisakan Setup Git kurang dari 12 menit.**
Ini kesalahan baru yang khas P1 versi revisi. Git selalu memakan waktu lebih lama dari perkiraan — selalu ada yang belum punya akun, belum install, atau kena masalah token. Pasang alarm di menit 102.
