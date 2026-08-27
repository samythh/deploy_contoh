# PERTEMUAN 4 — Pengembangan Fitur Dasar
### State Management, Lifecycle Hooks & Controlled Forms
**Metro Institute Season 2 — Divisi Frontend**
Durasi: 120 menit | Topik: `useState`, Immutability, React DevTools, Controlled Components, Lifting State Up, `useEffect`

> **CARA PENYAMPAIAN:** materi ini **langsung ke cara modern**. Cara lama disebut sebagai selingan satu-dua kalimat sambil lewat. Lapisan **KENAPA** tetap wajib — disampaikan lewat kalimat, bukan peragaan.

> **CATATAN STANDAR 2026 — BACA SEBELUM MENGAJAR:** `useEffect` adalah hook yang **paling sering dipakai secara salah**, dan AI coding assistant sering menyarankan pemakaian yang tidak perlu. Materi ini mengajarkannya sebagai **alat sinkronisasi dengan dunia luar**, bukan sebagai "jalankan saat komponen muncul". Lihat Bagian 6 — bagian itu ditulis khusus untuk mencegah kebiasaan salah, bukan sekadar mengajarkan sintaks.

---

## Cara Membaca Dokumen Ini

| Lapis | Isi |
|---|---|
| **APA** | Faktanya. Ini yang biasanya diajarkan orang. |
| **BANDINGKAN** | Alternatif yang ada, dan apa bedanya. |
| **KENAPA** | Alasan kita memilih satu di antaranya. Ini yang membuat peserta paham, bukan cuma hafal. |

Ditambah blok **CARA SAMPAIKAN** — kalimat dan analogi siap ucap.

---

## Situasi Khusus P4 Ini: Satu Konsep Menentukan Segalanya

P4 punya satu konsep yang, kalau tidak nempel, membuat seluruh sisa program terasa seperti sihir yang kadang jalan kadang tidak: **immutability**.

Peserta akan menulis `daftar.push(barang)` — karena itu yang mereka pelajari di P2, dan itu benar di JavaScript biasa. Lalu tidak terjadi apa-apa di layar. Tidak ada error. Tidak ada warning. Layar cuma diam.

Mereka akan mengira React-nya rusak.

**Beri Bagian 2 porsi penuh, dan peragakan kegagalannya** — jangan cuma menyebut aturannya. Ini peragaan terpenting hari ini, setara dengan `key={index}` di P3.

> **CARA SAMPAIKAN di awal kelas:**
> "Hari ini kita bikin halaman kalian **bisa bereaksi**. Diklik, berubah. Diketik, nyimpen.
>
> Tapi ada satu aturan yang bakal bikin kalian bingung setengah mati kalau nggak paham. Dan bingungnya diem-diem — nggak ada error, layarnya cuma nggak berubah.
>
> Jadi kalau nanti ada bagian yang kalian rasa 'kok ribet amat, kenapa nggak langsung diubah aja' — tahan dulu. Saya bakal tunjukkin kenapa."

---

## Prinsip Besar yang Anda Tanamkan Hari Ini

> **State bukan variabel biasa. State adalah permintaan untuk menggambar ulang.**

Di P3 mereka belajar komponen menerima data lewat props — **satu arah, dari atas, tidak boleh diubah**.

Hari ini mereka belajar komponen bisa punya data **miliknya sendiri** yang boleh berubah. Dan setiap kali data itu berubah, React menggambar ulang komponennya.

Kalimat yang layak Anda ulang:

> "Kalian nggak lagi ngubah tampilan. Kalian ngubah **data**, terus React yang ngurus tampilannya."

---

# BAGIAN 0 — Pembuka & Sambungan dari P3 (0–8 menit)

## Yang Anda lakukan

**Buka dengan katalog P3 mereka sendiri.**

> "Minggu lalu kalian bikin ini. Rapi, komponennya kepisah, datanya lewat props.
>
> Tapi coba klik apa aja di situ. **Nggak ada yang terjadi.** Halaman kalian masih cuma pajangan — bagus, tapi mati.
>
> Kenapa? Karena props itu **cuma bisa dibaca**. Data datang dari atas, komponen nggak boleh ngubah. Hari ini kita kasih komponen kalian sesuatu yang **boleh dia ubah sendiri**."

### Cek kesiapan

- Siapa yang project React-nya dari P3 masih jalan? *(minta buka sekarang)*
- Siapa yang sudah mulai mengerjakan bagian Tugas 2 yang bisa dikerjakan setelah P3?

Pertanyaan kedua penting. Yang belum mulai akan mengerjakan dua pertemuan sekaligus dalam semalam.

---

# BAGIAN 1 — `useState`: Data Milik Komponen (8–26 menit)

## APA

```jsx
import { useState } from 'react';

function Penghitung() {
  const [jumlah, setJumlah] = useState(0);

  return (
    <button onClick={() => setJumlah(jumlah + 1)}>
      Diklik {jumlah} kali
    </button>
  );
}
```

Tiga bagian yang harus dikenali:

| Bagian | Artinya |
|---|---|
| `jumlah` | Nilai sekarang — **hanya dibaca** |
| `setJumlah` | Satu-satunya cara mengubahnya |
| `useState(0)` | Nilai awal, dipakai sekali saat komponen pertama muncul |

**Sebut eksplisit:** `const [a, b] = ...` itu **array destructuring dari P2 Bagian 3**. Bukan sintaks React yang aneh — itu JavaScript biasa.

## BANDINGKAN — kenapa tidak pakai variabel biasa saja

Ini pertanyaan yang pasti muncul, jadi dahului.

```jsx
// ❌ Variabel biasa — angkanya berubah, layarnya tidak
function Salah() {
  let jumlah = 0;
  return <button onClick={() => { jumlah++; console.log(jumlah); }}>
    Diklik {jumlah} kali
  </button>;
}
```

**Peragakan ini.** Buka Console — angkanya naik 1, 2, 3. Di layar tetap 0.

> **CARA SAMPAIKAN:**
> "Lihat Console-nya: angkanya naik beneran. Jadi kodenya jalan. Tapi layarnya diem.
>
> Kenapa? Karena React **nggak tahu** ada yang berubah. Nggak ada yang ngasih tahu dia.
>
> Nah, `setJumlah()` itu bukan cuma ngubah angka. Dia sekaligus **ngasih tahu React**: 'ada yang berubah nih, tolong gambar ulang.'
>
> Makanya state itu bukan variabel biasa. **State itu permintaan buat gambar ulang.**"

## KENAPA `useState` dipanggil ulang tiap render, tapi nilainya tidak balik ke awal

Pertanyaan cerdas yang sering muncul: *"kalau komponennya digambar ulang, `useState(0)` kan dijalankan lagi — kenapa nggak balik ke nol?"*

> **CARA SAMPAIKAN:**
> "Pertanyaan bagus. Jawabannya: React **nyimpen** nilai itu di luar komponen kalian.
>
> Bayangin komponen kalian itu pegawai yang tiap hari amnesia — tiap render dia lupa semuanya. Tapi ada **loker** di kantor yang isinya nggak ikut hilang.
>
> `useState(0)` itu artinya: 'buka loker saya. Kalau ini hari pertama, isi nol.' Hari-hari berikutnya dia cuma buka loker, nggak ngisi ulang."

## Praktik: mulai bangun Todo List

Mulai dari bentuk paling sederhana. Todo list ini akan tumbuh sepanjang pertemuan.

```jsx
function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, teks: "Selesaikan Tugas 1", selesai: true },
    { id: 2, teks: "Migrasi ke React", selesai: false },
  ]);

  return (
    <ul>
      {todos.map(t => <li key={t.id}>{t.teks}</li>)}
    </ul>
  );
}
```

`.map()` dan `key` dari P3 — bukan hal baru.

---

# BAGIAN 2 — Immutability (26–46 menit)
> **BAGIAN TERPENTING HARI INI.** Kalau waktu meleset, ambil dari bagian lain, jangan dari sini.

## Peragakan kegagalannya dulu — 2 menit

Tambahkan tombol yang memakai `.push()`:

```jsx
const tambah = () => {
  todos.push({ id: 3, teks: "Todo baru", selesai: false });   // ❌
  setTodos(todos);
};
```

Klik tombolnya. **Tidak terjadi apa-apa.**

Buka React DevTools atau `console.log(todos)` — datanya **bertambah**. Tapi layar diam.

> **Biarkan mereka bingung sebentar.** Tanyakan: *"datanya nambah, tapi layarnya nggak berubah. Menurut kalian kenapa?"*

## KENAPA — React membandingkan kotak, bukan isi

Ini penjelasan intinya. Sampaikan pelan.

> **CARA SAMPAIKAN — Analogi Satpam & Nomor Seri:**
> "React itu kayak satpam yang tugasnya ngecek 'ada yang berubah nggak?'
>
> Tapi dia satpam yang malas. Dia **nggak buka kotaknya**. Dia cuma lihat **nomor seri di luar kotak**.
>
> Nah, `.push()` itu kalian **buka kotak lama, masukin barang, tutup lagi**. Isinya berubah — tapi nomor serinya sama persis. Satpam lihat, bilang: 'sama kayak tadi', terus nggak ngapa-ngapain.
>
> Yang harus kalian lakuin: bikin **kotak BARU**, isi dengan barang lama plus yang baru. Nomor serinya beda. Satpam langsung tahu ada perubahan.
>
> Kenapa satpamnya malas? Karena kalau tiap kali harus buka dan bandingin semua isi kotak, aplikasi kalian jadi lambat banget. Ngecek nomor seri itu instan."

## APA — tiga pola yang wajib dikuasai

**Tambah item** — `spread` dari P2 Bagian 3:

```jsx
setTodos([...todos, todoBaru]);
```

**Hapus item** — `.filter()` dari P2 Bagian 4:

```jsx
setTodos(todos.filter(t => t.id !== id));
```

**Ubah satu item** — `.map()` dari P2 Bagian 4:

```jsx
setTodos(todos.map(t =>
  t.id === id ? { ...t, selesai: !t.selesai } : t
));
```

> **CARA SAMPAIKAN — sambungkan ke P2:**
> "Perhatikan tiga baris ini. `spread`, `.filter()`, `.map()`. **Nggak ada satu pun yang baru.**
>
> Ingat waktu di P2 kalian mikir 'ngapain sih belajar spread, nggak kepake'? Ini dia kepakenya. Semua yang kalian pelajari minggu lalu bukan latihan — itu alat yang dipakai tiap hari."

## Tabel cepat: yang merusak vs yang benar

| Mau apa | ❌ Merusak (mutasi) | ✅ Benar (salinan baru) |
|---|---|---|
| Tambah | `arr.push(x)` | `[...arr, x]` |
| Hapus | `arr.splice(i, 1)` | `arr.filter(...)` |
| Ubah item | `arr[0].nama = "x"` | `arr.map(...)` |
| Ubah properti object | `obj.nama = "x"` | `{ ...obj, nama: "x" }` |
| Urutkan | `arr.sort()` | `[...arr].sort()` |

> ⚠️ **`.sort()` adalah jebakan tersembunyi.** Dia mengubah array aslinya, tidak seperti `.map()` dan `.filter()`. Peserta yang menambah fitur urutkan di Tugas 2 akan terkena. Sebut sekarang, satu kalimat.

---

# BAGIAN 3 — React DevTools (46–58 menit)
> Kompetensi *Debugging & Verification* — sudah dimulai dengan tab Network di P1, sekarang naik ke state.

## Pasang dulu

Extension **React Developer Tools** untuk Chrome/Edge. Setelah terpasang, `F12` akan punya tab baru: **Components** dan **Profiler**.

> Kirim tautan pemasangannya di grup **H-1**, jangan hari-H. Ini extension, butuh unduh.

## Tiga hal yang diajarkan

**1. Melihat state berubah secara langsung.**

Klik komponen `TodoApp` di tab Components → panel kanan menampilkan `todos`. Klik tombol tambah → **nilainya berubah di depan mata.**

**2. Melihat props mengalir turun.**

Klik `TodoItem` → terlihat props yang diterimanya dari induk. Ini membuat konsep P3 jadi kelihatan, bukan cuma teori.

**3. Melacak penyebab re-render.**

Aktifkan *Highlight updates when components render* di pengaturan. Setiap komponen yang digambar ulang akan berkedip.

> **CARA SAMPAIKAN:**
> "Nah ini yang bikin React berhenti terasa kayak sihir.
>
> Selama ini kalian cuma lihat hasilnya. Sekarang kalian bisa lihat **isi kepalanya** — data apa yang dia pegang, dan siapa yang gambar ulang pas kalian klik.
>
> Kalau nanti ada yang aneh dan kalian nggak tahu kenapa, jangan nebak. **Buka tab ini, lihat datanya.** Nebak itu buang waktu."

## Peragaan yang menyatukan Bagian 2 dan 3

Ulangi peragaan `.push()` yang gagal tadi — tapi sekarang sambil **membuka tab Components**.

Terlihat: array `todos` di panel **memang bertambah**, tapi komponennya tidak berkedip. Tidak ada re-render.

> "Lihat. Datanya nambah — kelihatan di sini. Tapi komponennya nggak berkedip, artinya React nggak gambar ulang. Dia nggak sadar ada yang berubah. **Inilah yang tadi saya maksud.**"

---

# BAGIAN 4 — Controlled Components & Validasi (58–80 menit)

## APA

Input yang nilainya dikendalikan state, bukan oleh browser.

```jsx
const [teks, setTeks] = useState("");

<input
  value={teks}
  onChange={(e) => setTeks(e.target.value)}
/>
```

Dua bagian yang saling mengunci: `value` membaca dari state, `onChange` menulis ke state.

## KENAPA repot begini, padahal input biasa juga bisa diketik

> **CARA SAMPAIKAN — Analogi Papan Tulis:**
> "Bayangin ada **buku catatan** (itu state) dan **papan tulis** (itu input di layar).
>
> Cara biasa: orang nulis langsung di papan tulis. Kalian nggak tahu apa yang ditulis sampai kalian jalan ke sana dan baca.
>
> Cara controlled: papan tulis itu cuma **cerminan buku catatan**. Orang ngetik → masuk ke buku dulu → papan tulis nyontek dari buku.
>
> Ribet? Iya, satu langkah lebih panjang. Tapi sekarang kalian **selalu tahu isinya**, tanpa perlu ngintip papan tulis. Mau divalidasi? Baca buku. Mau dikosongin? Hapus buku, papan ikut kosong. Mau tombol Simpan mati kalau kosong? Cek buku."

## Empat jenis input yang disebut silabus

```jsx
{/* Text */}
<input value={teks} onChange={e => setTeks(e.target.value)} />

{/* Dropdown */}
<select value={kategori} onChange={e => setKategori(e.target.value)}>
  <option value="pribadi">Pribadi</option>
  <option value="kerja">Kerja</option>
</select>

{/* Checkbox — pakai `checked`, bukan `value` */}
<input type="checkbox" checked={setuju} onChange={e => setSetuju(e.target.checked)} />

{/* Radio — sekelompok, dibedakan `value` */}
<input type="radio" value="tinggi" checked={prioritas === "tinggi"}
       onChange={e => setPrioritas(e.target.value)} />
```

> ⚠️ **Checkbox pakai `checked` dan `e.target.checked`, bukan `value`.** Ini kesalahan yang pasti terjadi. Sebut duluan.

## Validasi sederhana

```jsx
const [teks, setTeks] = useState("");
const [error, setError] = useState("");

const submit = (e) => {
  e.preventDefault();                       // cegah halaman reload

  if (teks.trim() === "") {
    setError("Todo tidak boleh kosong");
    return;
  }

  setTodos([...todos, { id: crypto.randomUUID(), teks, selesai: false }]);
  setTeks("");
  setError("");
};
```

**Tiga hal yang wajib disebut:**

1. **`e.preventDefault()`** — tanpa ini, form membuat halaman reload dan semua state hilang. Peserta akan bingung kenapa aplikasinya "restart sendiri".
2. **`.trim()`** — spasi doang bukan isi yang sah.
3. **`crypto.randomUUID()`** — id unik dan stabil untuk `key`. Menyambung langsung ke pelajaran `key` di P3.

> **CARA SAMPAIKAN untuk `preventDefault`:**
> "Form HTML itu punya kelakuan bawaan dari zaman dulu: begitu di-submit, dia kirim data ke server terus **reload halaman**. Zaman itu memang begitu caranya.
>
> Di aplikasi React, reload artinya semua state hilang — aplikasi kalian balik ke awal. Makanya baris ini wajib: 'jangan, saya urus sendiri.'"

---

# BAGIAN 5 — Lifting State Up (80–92 menit)

## Masalahnya

Filter todo ada di komponen `FilterBar`. Daftar todo ada di komponen `TodoList`. Keduanya **bersaudara** — tidak ada yang jadi induk yang lain.

Bagaimana `FilterBar` memberi tahu `TodoList` bahwa filternya berubah?

**Jawabannya: tidak bisa langsung.** Data di React mengalir ke bawah, bukan ke samping.

## APA — angkat state ke induk terdekat

```jsx
function TodoApp() {
  const [filter, setFilter] = useState("semua");     // state ANGKAT ke sini

  return (
    <>
      <FilterBar filter={filter} onGanti={setFilter} />
      <TodoList todos={todos} filter={filter} />
    </>
  );
}

function FilterBar({ filter, onGanti }) {
  return <button onClick={() => onGanti("selesai")}>Selesai</button>;
}
```

Induk memegang state, lalu mengirim **dua hal**: nilainya, dan **fungsi untuk mengubahnya**.

> **CARA SAMPAIKAN — Analogi Dua Adik & Satu Remote:**
> "Bayangin dua anak rebutan mau ganti channel TV. Mereka nggak bisa saling nyuruh — mereka setara.
>
> Solusinya: **remote-nya dipegang ibu.** Kalau adik mau ganti channel, dia bilang ke ibu. Ibu yang mencet. Kakak lihat TV-nya berubah.
>
> Nah, state itu remote-nya. Kalau dua komponen bersaudara butuh data yang sama, **angkat state-nya ke induk mereka.**
>
> Terus ini yang penting: props itu nggak cuma buat ngirim data. **Fungsi juga bisa dikirim lewat props.** Itu cara anak 'ngomong' ke atas — dia nggak ngubah data induknya, dia cuma manggil fungsi yang dikasih induknya."

Ini menjawab pertanyaan yang digantung di P3: *"kalau anak butuh ngasih tahu induknya sesuatu, caranya beda — minggu depan."* Sebut bahwa ini jawabannya.

## Kapan **jangan** mengangkat state

> "Jangan angkat semua state ke atas cuma karena bisa. Kalau cuma satu komponen yang butuh, biarin di situ.
>
> Angkat cuma kalau ada **dua atau lebih** yang butuh data yang sama. Aturannya: taruh state di **induk terdekat bersama**, jangan lebih tinggi dari itu."

Kalau nanti state harus diangkat terlalu tinggi dan dioper lewat banyak lapisan — itu *props drilling* dari P3, dan obatnya di P7. Sebut sambil lewat.

---

# BAGIAN 6 — `useEffect` (92–110 menit)
> ⚠️ **Bagian yang paling gampang salah diajarkan.** Baca catatan di bawah sebelum menyiapkan.

## Kenapa bagian ini ditulis khusus

`useEffect` adalah hook yang paling sering dipakai secara **tidak perlu**. Kalau diajarkan sebagai *"kode yang jalan saat komponen muncul"*, peserta akan memakainya untuk hal-hal yang tidak butuh effect sama sekali — dan itu sumber bug yang sulit dilacak.

**AI coding assistant juga sering menyarankan `useEffect` yang tidak perlu.** Peserta yang tidak tahu bedanya akan mengumpulkan pola yang salah di Tugas 2.

## APA — definisi yang benar

> `useEffect` adalah alat untuk **menyinkronkan komponen dengan sesuatu di luar React.**

Di luar React artinya: LocalStorage, server, `setInterval`, `addEventListener` pada `window`, judul tab browser.

```jsx
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);
```

Baca sebagai: *"setiap kali `todos` berubah, sinkronkan ke LocalStorage."*

## BANDINGKAN — yang BUTUH effect vs yang TIDAK

Ini tabel terpenting di bagian ini. Tulis di layar.

| Kebutuhan | Butuh `useEffect`? |
|---|:--:|
| Simpan data ke LocalStorage | ✅ Ya — LocalStorage di luar React |
| Ambil data dari API | ✅ Ya *(cara yang lebih baik di P7)* |
| Pasang `setInterval` / event listener | ✅ Ya |
| **Hitung total dari daftar** | ❌ **Tidak** — hitung saja langsung |
| **Saring daftar berdasarkan filter** | ❌ **Tidak** — hitung saja langsung |
| **Update state saat tombol diklik** | ❌ **Tidak** — taruh di `onClick` |

```jsx
// ❌ SALAH — bikin state baru + effect untuk sesuatu yang bisa dihitung
const [terlihat, setTerlihat] = useState([]);
useEffect(() => {
  setTerlihat(todos.filter(t => !t.selesai));
}, [todos]);

// ✅ BENAR — hitung langsung saat render
const terlihat = todos.filter(t => !t.selesai);
```

> **CARA SAMPAIKAN:**
> "Aturan gampangnya: **kalau bisa dihitung dari data yang sudah ada, jangan pakai effect.** Hitung aja langsung.
>
> `useEffect` itu buat ngomong sama dunia **di luar** React — LocalStorage, server, timer. Kalau kalian pakai effect buat ngurus data yang sudah ada di dalam, kalian bikin dua sumber kebenaran yang bisa nggak sinkron.
>
> Dan ini penting: **AI sering nyaranin `useEffect` yang nggak perlu.** Kalau kalian nggak tahu bedanya, kalian bakal ngumpulin pola yang salah."

## Dependency array — tiga bentuk

```jsx
useEffect(() => { ... });              // tiap render — hampir selalu keliru
useEffect(() => { ... }, []);          // sekali, saat komponen muncul
useEffect(() => { ... }, [todos]);     // tiap kali `todos` berubah
```

> **CARA SAMPAIKAN:**
> "Kurung siku itu **daftar hal yang diawasi**. Kosong artinya 'nggak ngawasin apa-apa, jalan sekali doang'. Diisi `todos` artinya 'awasin todos, jalan tiap dia berubah'."

## Cleanup — dan kenapa effect kalian jalan dua kali

```jsx
useEffect(() => {
  const timer = setInterval(() => console.log("tik"), 1000);
  return () => clearInterval(timer);     // ← dijalankan saat komponen hilang
}, []);
```

> ⚠️ **PASTI DITANYAKAN:** *"kenapa `console.log` saya muncul dua kali?"*
>
> Jawabannya: **React StrictMode** sengaja memasang-melepas-memasang ulang tiap effect saat mode pengembangan, untuk menguji apakah cleanup Anda benar. Ini **tidak terjadi** di hasil build produksi.
>
> Kalau efek dobel itu bikin masalah di aplikasi peserta, itu bukan bug StrictMode — itu tanda cleanup-nya kurang.

## Praktik: simpan todo ke LocalStorage

```jsx
const [todos, setTodos] = useState(() => {
  const tersimpan = localStorage.getItem("todos");
  return tersimpan ? JSON.parse(tersimpan) : [];
});

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos]);
```

**Peragakan:** tambah beberapa todo → refresh halaman → **datanya masih ada**.

> "Ini momen yang bikin aplikasi kalian berasa beneran. Data kalian nggak hilang lagi tiap refresh."

**Colokan ke depan:** ini persis yang diminta Tugas 4 — *"state global dipertahankan setelah halaman dimuat ulang melalui Local Storage"*. Sebut itu.

---

# BAGIAN 7 — Penutup & Tugas 2 (110–120 menit)

## Rangkuman: satu benang merah

> "Temanya hari ini satu: **ubah datanya, jangan ubah tampilannya.**
>
> Mau nambah item? Bikin daftar baru. Mau ngosongin form? Kosongin state-nya. Mau nyembunyiin sesuatu? Ubah datanya, tampilan ngikut.
>
> Dan sekali lagi — `spread`, `.filter()`, `.map()` yang kalian pakai hari ini itu punya kalian dari Pertemuan 2. Kalian nggak belajar sebanyak yang kalian kira."

## Tugas 2 — sekarang lengkap

Mencakup **P3 dan P4**, dikumpulkan **sebelum Pertemuan 5**.

Setelah hari ini, **seluruh** syarat Tugas 2 sudah bisa dikerjakan:

| Syarat | Diajarkan di |
|---|---|
| Vite + Tailwind di repo yang sama | P3 Bagian 2 |
| Minimal 4 komponen | P3 Bagian 3–4 |
| Props + `.map()` dengan `key` stabil | P3 Bagian 4–5 |
| **Minimal satu fitur `useState`** | P4 Bagian 1 |
| **Form terkendali + validasi** | P4 Bagian 4 |
| **Perubahan state immutable** | P4 Bagian 2 |

> **CARA SAMPAIKAN:**
> "Nggak ada lagi yang perlu ditunggu. Semua syarat Tugas 2 udah kalian pegang.
>
> Dan satu peringatan: saya bakal ngecek **immutability**-nya. Kalau saya nemu `.push()` di kode kalian dan kalian nggak bisa jelasin kenapa itu masalah — itu tanda kalian nyalin tanpa paham."

---

# LAMPIRAN A — Pertanyaan yang Pasti Muncul

**"Kenapa nggak boleh langsung `todos.push()`? Kan lebih simpel."**
> Karena React ngecek perubahan dengan cara ngebandingin **alamat kotaknya**, bukan isinya. `.push()` ngisi kotak lama — alamatnya sama, React nggak sadar. Bikin kotak baru pakai `[...todos, x]`, alamatnya beda, React langsung tahu. Kenapa React begitu? Karena ngebandingin isi tiap kotak tiap saat itu lambat banget.

**"State saya udah di-set tapi pas di-`console.log` masih nilai lama."**
> Wajar, dan ini bukan bug. `setTodos()` itu **mengantre** perubahan, bukan langsung mengubah. Nilai barunya baru ada di render berikutnya. Kalau butuh nilai terbaru untuk perhitungan, pakai bentuk fungsi: `setJumlah(lama => lama + 1)`.

**"`console.log` di dalam `useEffect` saya muncul dua kali."**
> Itu **StrictMode**, dan itu disengaja. React sengaja pasang-lepas-pasang lagi effect kalian saat mode pengembangan, untuk menguji apakah cleanup-nya benar. Di hasil build produksi nggak terjadi. Kalau dobelnya bikin masalah, itu tanda cleanup kalian kurang.

**"Form saya bikin halaman reload sendiri."**
> Lupa `e.preventDefault()`. Form HTML dari zaman dulu memang kelakuannya begitu — submit, kirim ke server, reload. Di React itu bikin semua state hilang.

**"Checkbox saya nggak bisa dicentang."**
> Checkbox pakai `checked`, bukan `value`. Dan bacanya `e.target.checked`, bukan `e.target.value`.

**"Kapan pakai `useState`, kapan `useEffect`?"**
> `useState` buat data yang **dipegang** komponen. `useEffect` buat **ngomong sama dunia di luar** React — LocalStorage, server, timer. Kalau datanya bisa dihitung dari yang sudah ada, jangan pakai dua-duanya; hitung aja langsung.

**"Boleh pakai AI buat Tugas 2?"**
> Boleh, tapi hati-hati di dua tempat. Pertama, AI sering ngasih `useEffect` yang nggak perlu — buat nyaring daftar, buat ngitung total. Kedua, AI kadang ngasih kode yang mutasi state langsung.
>
> **Kemampuan nemuin dua kesalahan itu justru nambah nilai kalian.** Kalau kalian bisa bilang "AI ngasih saya `useEffect` di sini, tapi ini bisa dihitung langsung jadi saya hapus" — itu nilai penuh.

---

# LAMPIRAN B — Praktik Langsung: React DevTools

Pasang **React Developer Tools** (Chrome/Edge). Kirim tautannya di grup **H-1**.

| Yang dilakukan | Gunanya |
|---|---|
| Tab **Components** → klik komponen | Lihat state & props-nya sekarang |
| Panel kanan → klik nilai state | **Ubah langsung** untuk uji coba, tanpa mengedit kode |
| ⚙️ → *Highlight updates when components render* | Lihat komponen mana yang digambar ulang |
| Tab **Profiler** | Ukur render yang lambat *(dipakai serius di P7)* |

> **CARA SAMPAIKAN:**
> "Sebelum ini, kalau ada yang aneh kalian cuma bisa nebak. Sekarang kalian bisa **lihat isi kepalanya React**.
>
> Aturan baru mulai hari ini: **jangan nebak, buka DevTools.** Nebak itu buang waktu."

## Membaca error state

| Pesan | Artinya |
|---|---|
| `Too many re-renders` | Anda memanggil `set...()` langsung saat render, bukan di dalam handler. Cek `onClick={setX(1)}` — harusnya `onClick={() => setX(1)}` |
| `Cannot update a component while rendering a different component` | `set...()` dipanggil di tempat yang salah |
| `A component is changing an uncontrolled input to be controlled` | `useState("")` nilai awalnya `undefined`, bukan string kosong |
| Layar tidak berubah, tanpa error | **Hampir selalu mutasi.** Cek `.push`, `.splice`, `.sort`, atau `obj.x = y` |

Baris terakhir itu yang paling sering. Ajarkan mereka mencurigai mutasi lebih dulu.

---

# LAMPIRAN C — Tips & Kebiasaan untuk Ditanamkan

**1. State sesedikit mungkin.**
Kalau sesuatu bisa dihitung dari state lain, jangan dijadikan state. Jumlah todo selesai itu `todos.filter(t => t.selesai).length`, bukan state tersendiri yang harus diperbarui manual.

**2. Taruh state di induk terdekat bersama, tidak lebih tinggi.**
Mengangkat terlalu tinggi bikin props drilling yang tidak perlu.

**3. Curigai mutasi setiap kali layar tidak berubah.**
Tidak ada error + layar diam = hampir selalu `.push`, `.splice`, `.sort`, atau `obj.x = y`.

**4. Nama fungsi handler diawali `handle`, props-nya diawali `on`.**
`onClick={handleHapus}`. Ini konvensi yang dipakai seluruh ekosistem React — dan meneruskan kebiasaan penamaan dari P1: nama menjelaskan peran.

**5. Buka React DevTools sebelum menebak.**

**6. Kalau macet 15 menit, format 4 baris.**
Sama seperti P1–P3.

---

# LAMPIRAN D — Tiga Kesalahan Mentor Baru di P4

**1. Menyebut aturan immutability tanpa memperagakan kegagalannya.**
Kalau cuma bilang "jangan pakai `.push()`, pakai spread", peserta akan menurut tanpa paham — lalu terkena di kasus yang sedikit berbeda (`.sort()`, mutasi object) dan tidak bisa mengenali polanya. **Peragakan `.push()` yang gagal.** Dua menit, dan itu peragaan terpenting hari ini.

**2. Mengajarkan `useEffect` sebagai "kode yang jalan saat komponen muncul".**
Definisi itu terdengar benar dan mudah diingat — tapi menghasilkan peserta yang membungkus semuanya dengan effect. Ajarkan sebagai **sinkronisasi dengan dunia luar**, dan tampilkan tabel "butuh vs tidak butuh".

**3. Melewati React DevTools karena dianggap tambahan.**
Ini materi resmi di silabus, dan salah satu dari sembilan kompetensi lulusan. Lebih dari itu: peserta yang bisa melihat state-nya akan menyelesaikan masalahnya sendiri di Tugas 2, dan tidak menghabiskan jam konsultasi Anda.

---

# LAMPIRAN E — Checklist Persiapan Anda

**H-3 sebelum kelas:**
- [ ] Ingatkan peserta membawa project React P3 mereka dalam keadaan jalan
- [ ] Tanyakan di grup siapa yang sudah mulai bagian Tugas 2 dari P3 — catat yang belum
- [ ] Baca [materi ini](P4-Materi-Mentor-Frontend-State.md) sampai Lampiran E

**H-1:**
- [ ] **Kirim tautan pemasangan React Developer Tools** ke grup — ini extension, butuh unduh, jangan sampai dipasang di hari-H
- [ ] Latih peragaan `.push()` yang gagal sampai lancar — ini peragaan terpenting hari ini
- [ ] Uji peragaan LocalStorage: tambah todo → refresh → data bertahan
- [ ] Siapkan katalog P3 peserta untuk ditampilkan di pembuka
- [ ] Jalankan demo `komponen/` di project Vite untuk memastikan semuanya berjalan

**Hari-H:**
- [ ] Editor + browser + React DevTools terbuka berdampingan, font minimal 18pt
- [ ] Aktifkan *Highlight updates* di React DevTools sebelum kelas mulai
- [ ] Sediakan 5 menit awal untuk peserta yang project P3-nya bermasalah

---

*Dokumen ini disiapkan untuk Pertemuan 4 — Metro Institute Season 2, Divisi Frontend.*
