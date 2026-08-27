# RUNDOWN P4 — Pegangan Saat Mengajar

Buka di layar kedua saat kelas. Isinya cuma **gerakan** — penjelasan lengkapnya di [P4-Materi-Mentor-Frontend-State.md](P4-Materi-Mentor-Frontend-State.md).

---

## Tiga Aturan Hari Ini

**1. Immutability adalah taruhannya.** Kalau tidak nempel, seluruh sisa program terasa seperti sihir yang kadang jalan kadang tidak. Bagian 2 dapat 20 menit, dan **kegagalannya wajib diperagakan** — bukan cuma disebut aturannya.

**2. `useEffect` diajarkan sebagai sinkronisasi dengan dunia luar**, bukan "kode yang jalan saat komponen muncul". Definisi kedua terdengar benar, mudah diingat, dan menghasilkan peserta yang membungkus semuanya dengan effect.

**3. Sambungkan terus ke P2.** `spread`, `.filter()`, `.map()` yang dipakai hari ini semuanya sudah mereka punya. Sebut berulang kali — itu yang membuat immutability terasa masuk akal, bukan aturan sewenang-wenang.

---

## Peta 120 Menit

| Menit | Bagian | File |
|:--:|---|---|
| 0–8 | Pembuka & sambungan dari P3 | katalog P3 peserta |
| 8–26 | **`useState`** — data milik komponen | — |
| 26–46 | **Immutability** ⚠️ paling penting | `MutasiJebakan.jsx` |
| 46–58 | React DevTools | extension |
| 58–80 | **Controlled Components & validasi** | `TodoForm.jsx` |
| 80–92 | Lifting State Up | `FilterBar.jsx` |
| 92–110 | **`useEffect`** ⚠️ paling gampang salah | `TodoApp.jsx` |
| 110–120 | Penutup & Tugas 2 | [`../tugas/`](../tugas/) |

---

## 0–8 · Pembuka

**Buka dengan katalog P3 mereka sendiri.**

> "Minggu lalu kalian bikin ini. Rapi, komponennya kepisah. Tapi coba klik apa aja di situ — **nggak ada yang terjadi.** Halaman kalian masih pajangan.
>
> Kenapa? Karena props itu cuma bisa dibaca. Hari ini kita kasih komponen kalian sesuatu yang **boleh dia ubah sendiri**."

Peringatkan sejak awal:
> "Ada satu aturan hari ini yang bakal bikin kalian bingung setengah mati kalau nggak paham. Dan bingungnya diem-diem — nggak ada error, layarnya cuma nggak berubah."

**Cek:** siapa project P3-nya masih jalan? siapa sudah mulai bagian Tugas 2 dari P3?

---

## 8–26 · `useState`

1. Tiga bagian: `jumlah` (baca) · `setJumlah` (ubah) · `useState(0)` (nilai awal)
2. **Sebut:** `const [a, b] = ...` itu array destructuring dari P2. Bukan sintaks React yang aneh.
3. **Peragakan variabel biasa yang gagal** — Console angkanya naik, layar diam.
   > "Kodenya jalan. Tapi React nggak tahu ada yang berubah. `setJumlah()` bukan cuma ngubah angka — dia sekaligus ngasih tahu React 'tolong gambar ulang'. **State itu permintaan buat gambar ulang.**"
4. Kalau ditanya *"kenapa `useState(0)` nggak balik ke nol tiap render?"* — **analogi loker**:
   > "Komponen kalian itu pegawai yang tiap hari amnesia. Tapi ada **loker** yang isinya nggak ikut hilang. `useState(0)` artinya: 'buka loker saya. Kalau ini hari pertama, isi nol.'"
5. Mulai bangun Todo List bentuk paling sederhana.

---

## 26–46 · Immutability ⚠️ — `MutasiJebakan.jsx`

> **Bagian terpenting hari ini.** Kalau waktu meleset, ambil dari bagian lain — jangan dari sini.

**Peragaan, urut:**

1. Klik tombol **merah** (`.push()`) beberapa kali → **layar diam**, tanpa error
2. Buka React DevTools → array `todos` **ternyata bertambah**
3. Biarkan bingung. Tanya: *"datanya nambah, layarnya nggak. Kenapa?"*
4. Klik tombol **hijau** (spread) → langsung muncul
5. Klik **"Paksa gambar ulang"** → semua yang tadi "hilang" **muncul sekaligus**

**Analogi satpam & nomor seri:**
> "React itu satpam yang malas. Dia **nggak buka kotaknya** — dia cuma lihat **nomor seri** di luar.
> `.push()` itu kalian buka kotak lama, masukin barang, tutup lagi. Isinya berubah, nomor serinya sama. Satpam bilang 'sama kayak tadi'.
> Yang bener: bikin **kotak baru**. Nomor serinya beda, satpam langsung tahu.
> Kenapa satpamnya malas? Kalau tiap kali harus buka dan bandingin semua isi, aplikasi kalian lambat banget."

**Tiga pola — sambungkan ke P2:**

| Mau apa | Pakai | Dari |
|---|---|---|
| Tambah | `[...todos, x]` | P2 spread |
| Hapus | `todos.filter(...)` | P2 `.filter()` |
| Ubah satu | `todos.map(...)` | P2 `.map()` |

> "Nggak ada satu pun yang baru. Ingat waktu kalian mikir 'ngapain sih belajar spread'? Ini dia kepakenya."

⚠️ **Sebut `.sort()`** — dia mengubah array aslinya, tidak seperti `.map()`/`.filter()`. Peserta yang menambah fitur urutkan di Tugas 2 akan terkena.

**Cek sebelum lanjut:** peserta bisa menjelaskan kenapa `.push()` gagal.

---

## 46–58 · React DevTools

1. Tab **Components** → klik `TodoApp` → lihat `todos` berubah saat tombol diklik
2. Klik `TodoItem` → lihat props mengalir turun (konsep P3 jadi kelihatan)
3. ⚙️ → **Highlight updates** → komponen yang re-render berkedip

**Peragaan penyatu:** ulangi `.push()` yang gagal sambil tab Components terbuka.
> "Datanya nambah — kelihatan di sini. Tapi komponennya nggak berkedip. React nggak sadar. **Inilah yang tadi saya maksud.**"

> "Mulai hari ini aturan baru: **jangan nebak, buka DevTools.**"

---

## 58–80 · Controlled Components — `TodoForm.jsx`

1. `value` + `onChange` yang saling mengunci
2. **Analogi papan tulis:**
   > "Ada **buku catatan** (state) dan **papan tulis** (input di layar). Papan tulis itu cuma **cerminan buku**. Orang ngetik → masuk buku dulu → papan nyontek dari buku.
   > Ribet? Iya. Tapi sekarang kalian **selalu tahu isinya** tanpa ngintip papan."
3. Empat jenis input: text · select · **checkbox** · radio
   ⚠️ **Checkbox pakai `checked` dan `e.target.checked`**, bukan `value`. Sebut duluan.
4. Validasi: `e.preventDefault()` · `.trim()` · `crypto.randomUUID()`

**`preventDefault` — kenapa wajib:**
> "Form HTML punya kelakuan bawaan dari zaman dulu: submit → kirim ke server → **reload halaman**. Di React, reload artinya semua state hilang."

**Tunjukkan tombol yang mati kalau kosong** — bukti kegunaan controlled component.

---

## 80–92 · Lifting State Up — `FilterBar.jsx`

**Masalahnya:** `FilterBar` dan `TodoList` bersaudara. Data mengalir ke bawah, bukan ke samping.

**Analogi dua adik & satu remote:**
> "Dua anak rebutan ganti channel. Mereka nggak bisa saling nyuruh — setara. Solusinya: **remote-nya dipegang ibu.** Adik bilang ke ibu, ibu yang mencet, kakak lihat TV-nya berubah.
> Dan ini yang penting: **fungsi juga bisa dikirim lewat props.** Itu cara anak 'ngomong' ke atas — dia nggak ngubah data induknya, dia cuma manggil fungsi yang dikasih induknya."

**Sebut:** ini jawaban pertanyaan yang digantung di P3.

**Kapan jangan mengangkat:** kalau cuma satu komponen yang butuh, biarkan di situ. Angkat ke **induk terdekat bersama**, jangan lebih tinggi.

---

## 92–110 · `useEffect` ⚠️ — `TodoApp.jsx`

**Definisi yang benar — tulis di layar:**
> `useEffect` = alat untuk **menyinkronkan komponen dengan sesuatu di luar React.**

**Tabel butuh vs tidak butuh — ini yang terpenting:**

| Kebutuhan | Effect? |
|---|:--:|
| Simpan ke LocalStorage | ✅ |
| Ambil data dari API | ✅ |
| `setInterval` / event listener | ✅ |
| Hitung total dari daftar | ❌ |
| Saring daftar | ❌ |
| Update state saat diklik | ❌ |

> "Aturan gampangnya: **kalau bisa dihitung dari data yang sudah ada, jangan pakai effect.**
> Dan ini penting — **AI sering nyaranin `useEffect` yang nggak perlu.** Kalau kalian nggak tahu bedanya, kalian bakal ngumpulin pola yang salah."

**Dependency array:** kosong = sekali · diisi = tiap yang diawasi berubah

⚠️ **PASTI DITANYA:** *"kenapa `console.log` saya muncul dua kali?"*
> "Itu **StrictMode**, dan disengaja. React sengaja pasang-lepas-pasang lagi effect kalian di mode pengembangan, buat nguji cleanup kalian bener apa nggak. Di build produksi nggak terjadi."

**Peragakan LocalStorage:** tambah todo → **refresh** → data masih ada.
> "Ini momen yang bikin aplikasi kalian berasa beneran."

**Colokan:** ini persis syarat Tugas 4.

---

## 110–120 · Penutup & Tugas 2

**Benang merah:**
> "Temanya satu: **ubah datanya, jangan ubah tampilannya.** Mau nambah item? Bikin daftar baru. Mau ngosongin form? Kosongin state-nya."

**Tugas 2 sekarang lengkap** — tidak ada lagi yang perlu ditunggu:

| Syarat | Dari |
|---|---|
| Vite + Tailwind, 4 komponen, props, `key` | P3 |
| `useState`, form terkendali, immutability | **P4** |

> "Saya bakal ngecek **immutability**-nya. Kalau saya nemu `.push()` di kode kalian dan kalian nggak bisa jelasin kenapa itu masalah — itu tanda kalian nyalin tanpa paham."

---

## Kalau Waktu Tidak Cukup

| Urutan potong | Yang dipotong | Ganti dengan |
|:--:|---|---|
| 1 | Radio & dropdown (Bagian 4) | Cukup text input + checkbox |
| 2 | Cleanup `useEffect` (Bagian 6) | Sebut ada, contohnya di file demo |
| 3 | Lifting State Up (Bagian 5) | Tunjukkan `FilterBar.jsx` jadi, bahas 3 menit |

> ⛔ **JANGAN PERNAH DIPOTONG:**
> - **Bagian 2 (Immutability)** beserta peragaannya — tanpa ini seluruh sisa program jadi tebak-tebakan
> - **Tabel "butuh vs tidak butuh effect"** — tanpa ini peserta mengumpulkan pola yang salah di Tugas 2

---

## Tiga Kesalahan yang Paling Gampang Terjadi

**1. Menyebut aturan immutability tanpa memperagakan kegagalannya.**
Peserta akan menurut tanpa paham, lalu terkena di `.sort()` atau mutasi object dan tidak bisa mengenali polanya.

**2. Mengajarkan `useEffect` sebagai "kode yang jalan saat komponen muncul".**
Terdengar benar, mudah diingat, dan menghasilkan peserta yang membungkus semuanya dengan effect.

**3. Melewati React DevTools karena dianggap tambahan.**
Ini materi resmi silabus dan salah satu dari sembilan kompetensi lulusan. Peserta yang bisa melihat state-nya akan menyelesaikan masalahnya sendiri di Tugas 2 — dan tidak menghabiskan jam konsultasi Anda.
