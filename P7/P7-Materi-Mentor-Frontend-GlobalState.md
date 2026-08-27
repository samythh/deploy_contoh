# PERTEMUAN 7 — Advanced Framework
### Global State Management & Performance Optimization
**Metro Institute Season 2 — Divisi Frontend**
Durasi: 120 menit | Topik: Context API, Zustand, React Compiler, Code Splitting, wawasan TanStack Query

> **CARA PENYAMPAIAN:** materi ini **langsung ke cara modern**. Cara lama disebut sebagai selingan satu-dua kalimat sambil lewat. Lapisan **KENAPA** tetap wajib.

> ⚠️ **BAGIAN 4 ADALAH MATERI YANG PALING GAMPANG SALAH DIAJARKAN DI SELURUH PROGRAM.**
>
> Sejak React 19, **`useMemo` / `useCallback` / `React.memo` adalah pengecualian, bukan kebiasaan.** Hampir semua tutorial, semua jawaban Stack Overflow, dan hampir semua saran AI masih mengajarkannya sebagai kebiasaan.
>
> Kalau Anda mengajarkan memoization manual sebagai default, peserta akan membawa pola yang sudah ditinggalkan ke tempat kerja. Baca Bagian 4 sepenuhnya sebelum menyiapkan.

> **CATATAN VERSI — WAJIB DICEK H-1:** React Compiler dan cara memasangnya di Vite berubah cukup cepat. Pasang sendiri dari nol sebelum mengajar. Kalau perintahnya berbeda dari dokumen ini, **perbaiki dokumennya dulu** — jangan improvisasi di depan kelas.

---

## Cara Membaca Dokumen Ini

| Lapis | Isi |
|---|---|
| **APA** | Faktanya. Ini yang biasanya diajarkan orang. |
| **BANDINGKAN** | Alternatif yang ada, dan apa bedanya. |
| **KENAPA** | Alasan kita memilih satu di antaranya. Ini yang membuat peserta paham, bukan cuma hafal. |

Ditambah blok **CARA SAMPAIKAN** — kalimat dan analogi siap ucap.

---

## Situasi Khusus P7 Ini: Dua Godaan Berlawanan

P7 punya dua bahaya yang tarikannya berlawanan, dan Anda harus melewati keduanya.

**Godaan pertama: memindahkan semua state ke global.** Begitu peserta kenal Context atau Zustand, mereka cenderung memindahkan semuanya ke sana — termasuk yang cuma dipakai satu komponen. Hasilnya aplikasi yang lebih sulit dilacak daripada sebelumnya.

**Godaan kedua: mengoptimasi tanpa mengukur.** Begitu kata "performa" muncul, peserta akan menaburkan `useMemo` di mana-mana — pola yang sudah ditinggalkan, dan yang justru membuat kode lebih berisik tanpa manfaat terukur.

**Keduanya diselesaikan dengan satu kalimat yang sama:**

> "Jangan pakai alat sebelum kalian bisa nunjukin masalahnya."

---

## Prinsip Besar yang Anda Tanamkan Hari Ini

> **Alat canggih dipakai setelah masalahnya terbukti ada — bukan sebelumnya.**

Global state menyelesaikan props drilling. Kalau tidak ada props drilling, dia cuma menambah kerumitan.
Memoization menyelesaikan render yang lambat. Kalau tidak ada yang lambat, dia cuma menambah kebisingan.

Kalimat yang layak diulang:

> "Tiap alat itu obat. Dan obat yang diminum pas nggak sakit itu namanya bukan sehat — itu namanya efek samping."

---

# BAGIAN 0 — Pembuka & Sambungan dari P6 (0–8 menit)

## Yang Anda lakukan

**Buka dengan props drilling di kode mereka sendiri.**

Cari komponen yang menerima props lalu meneruskannya tanpa memakainya — hampir pasti ada di Tugas 3 mereka.

> "Lihat baris ini. `TodoList` nerima `onHapus`, terus dia oper ke `TodoItem`. Dia sendiri nggak pakai sama sekali — cuma jadi tukang pos.
>
> Sekarang bayangin ada tujuh lapis kayak gini. Dan kalian mau nambah satu data lagi — kalian harus edit tujuh file, padahal yang butuh cuma yang paling bawah.
>
> Namanya **props drilling**. Saya udah sebut ini di Pertemuan 3 dan bilang obatnya di Pertemuan 7. Ini Pertemuan 7."

### Cek kesiapan

- Siapa yang Tugas 3-nya sudah masuk?
- Siapa yang lima status antarmukanya lengkap? *(ini bobot terbesarnya)*

---

# BAGIAN 1 — Kapan Butuh Global State (8–24 menit)

## APA — tiga jenis state, bukan dua

Peserta baru mengenal dua: lokal dan global. Sebenarnya ada tiga, dan yang ketiga inilah yang paling sering salah tempat.

| Jenis | Contoh | Simpan di |
|---|---|---|
| **State lokal** | input yang sedang diketik, dropdown terbuka | `useState` di komponennya |
| **State URL** | filter, halaman ke berapa, item mana | `useSearchParams` — **dari P5** |
| **State global** | keranjang, tema, pengguna yang login | Context / Zustand |

> **CARA SAMPAIKAN:**
> "Perhatiin baris tengah. Itu yang kalian pelajari minggu lalu, dan itu **sering ketuker** jadi global state.
>
> Filter kategori itu **bukan** global state. Dia state URL — soalnya orang harus bisa nge-share link-nya.
>
> Jadi sebelum kalian mikir 'ini global apa nggak', tanya dulu: **ini perlu di-share nggak?** Kalau iya, dia ke URL, bukan ke Zustand."

## KENAPA jangan semuanya dijadikan global

Ini peringatan yang harus disampaikan **sebelum** mengajarkan alatnya.

> **CARA SAMPAIKAN — Analogi Papan Pengumuman Kantor:**
> "Bayangin kantor punya satu papan pengumuman besar di lobi.
>
> Kalau yang ditempel cuma hal penting — jadwal libur, nomor darurat — papan itu berguna.
>
> Tapi kalau tiap orang nempelin catatan pribadinya di situ, dalam seminggu papan itu penuh dan nggak ada yang bisa nemuin apa-apa. Dan lebih parah: kalau ada yang salah, kalian nggak tahu **siapa** yang nempel.
>
> Nah state lokal itu catatan di meja sendiri. Kalau salah, kalian tahu persis di mana nyarinya."

## Aturan praktis — tulis di layar

Angkat ke global **hanya kalau kedua syarat ini terpenuhi:**

1. Dipakai oleh **beberapa komponen yang berjauhan** — bukan cuma induk-anak
2. Props drilling-nya sudah **lebih dari dua-tiga lapis**

> "Kalau cuma dua lapis, props biasa masih lebih gampang dibaca. Kalian bisa lihat data itu datang dari mana cuma dengan lihat ke atas."

---

# BAGIAN 2 — Context API (24–48 menit)

## APA — bawaan React, tanpa install

```jsx
// context/TemaContext.jsx
import { createContext, useContext, useState } from "react";

const TemaContext = createContext();

export function TemaProvider({ children }) {
  const [gelap, setGelap] = useState(false);
  return (
    <TemaContext.Provider value={{ gelap, setGelap }}>
      {children}
    </TemaContext.Provider>
  );
}

export const useTema = () => useContext(TemaContext);
```

Tiga bagian:

| Bagian | Tugasnya |
|---|---|
| `createContext()` | Membuat "salurannya" |
| `<Provider value={...}>` | Mengisi salurannya, dipasang di atas |
| `useContext()` | Mengambil isinya dari komponen mana pun di bawah |

**Sebut:** `{ children }` itu **children props dari P3**. Bukan hal baru.

> **CARA SAMPAIKAN — Analogi Pipa Air:**
> "Props itu kayak ngangkat ember dari lantai satu ke lantai tujuh — lewat tiap lantai, satu-satu.
>
> Context itu kalian **pasang pipa** dari bawah ke atas. Lantai mana pun yang butuh air, tinggal buka kerannya. Lantai yang nggak butuh nggak usah ikut ngangkat apa-apa."

## KENAPA `useTema` dibuat, bukan langsung `useContext`

Perhatikan baris terakhir: `export const useTema = () => useContext(TemaContext);`

> "Ini custom hook — dari Pertemuan 5. Kenapa dibikin?
>
> Supaya komponen yang pakai nggak perlu tahu nama context-nya, dan nggak perlu import dua hal. Cukup `useTema()`.
>
> Dan kalau nanti kalian ganti dari Context ke Zustand, yang diubah cuma **satu file ini** — komponennya nggak perlu disentuh sama sekali."

Itu argumen yang bagus dan nyata. Sebut.

## ⚠️ BATAS CONTEXT YANG WAJIB DIPERAGAKAN

Ini bagian yang membedakan mengajar Context dengan benar atau tidak.

**Masalahnya:** setiap kali `value` di Provider berubah, **semua** komponen yang memakai context itu digambar ulang — termasuk yang cuma memakai bagian yang tidak berubah.

**Peragakan:** aktifkan **Highlight updates** di React DevTools, lalu ubah satu nilai di context. Terlihat **seluruh** consumer berkedip.

> **CARA SAMPAIKAN — Analogi Pengeras Suara Gedung:**
> "Context itu kayak **pengumuman lewat pengeras suara satu gedung.**
>
> Kalian mau ngasih tahu satu orang di lantai tiga. Tapi yang kedengeran **semua orang di semua lantai** — dan semuanya berhenti kerja buat dengerin.
>
> Buat pengumuman yang jarang — 'gedung tutup jam 5' — itu nggak masalah. Tapi kalau tiap lima detik ada pengumuman, semua orang nggak bisa kerja."

**Kesimpulannya, dan ini yang harus mereka bawa pulang:**

> "Context itu **bagus buat data yang jarang berubah** — tema, siapa yang login, bahasa.
>
> Buat data yang sering berubah — keranjang belanja yang diklik terus — dia bikin seluruh aplikasi kalian gambar ulang tiap klik."

Itu jembatan alami ke Bagian 3.

---

# BAGIAN 3 — Zustand (48–68 menit)

## Pasang

```bash
npm i zustand
```

```javascript
// store/keranjang.js
import { create } from "zustand";

export const useKeranjang = create((set) => ({
  isi: [],

  tambah: (barang) =>
    set((state) => ({ isi: [...state.isi, barang] })),   // immutable — dari P4

  hapus: (id) =>
    set((state) => ({ isi: state.isi.filter((b) => b.id !== id) })),
}));
```

Pakainya — **tanpa Provider, tanpa membungkus apa pun:**

```jsx
function TombolKeranjang() {
  const jumlah = useKeranjang((s) => s.isi.length);
  return <span>{jumlah}</span>;
}
```

**Sebut dua hal:**
1. `[...state.isi, barang]` dan `.filter()` itu **immutability dari P4**. Aturannya sama persis.
2. Tidak ada `<Provider>` yang membungkus. Store-nya hidup di luar pohon komponen.

## KENAPA Zustand tidak membuat semua komponen re-render

Ini keunggulan utamanya, dan bisa diperagakan.

```jsx
const jumlah = useKeranjang((s) => s.isi.length);   // ← "saya cuma mau ini"
```

Fungsi `(s) => s.isi.length` itu namanya **selector**. Komponen ini hanya digambar ulang kalau **angka itu** berubah.

**Peragakan dengan Highlight updates aktif:** ubah sesuatu di store → hanya komponen yang berlangganan bagian itu yang berkedip.

> **CARA SAMPAIKAN — Analogi Grup WhatsApp per Topik:**
> "Kalau Context itu pengeras suara satu gedung, Zustand itu **grup WhatsApp per topik.**
>
> Kalian cuma masuk grup yang kalian butuh. Ada kabar di grup 'Keranjang'? Yang kena notif cuma anggota grup itu. Yang di grup 'Tema' nggak keganggu sama sekali.
>
> Itu bedanya. Bukan soal mana yang lebih canggih — soal **siapa yang ikut kebangun** tiap ada perubahan."

## BANDINGKAN — kapan pakai yang mana

| | Context | Zustand |
|---|---|---|
| Perlu install | Tidak | Ya (kecil) |
| Butuh `<Provider>` | Ya | Tidak |
| Yang re-render | **Semua** consumer | Hanya yang berlangganan |
| Cocok untuk | Data jarang berubah: tema, user login | Data sering berubah: keranjang, filter kompleks |

> **CARA SAMPAIKAN:**
> "Ini bukan 'yang satu bagus yang satu jelek'. Dua-duanya dipakai di industri, sering **bareng di aplikasi yang sama.**
>
> Aturan gampangnya: **jarang berubah → Context. Sering berubah → Zustand.**"

## Menyimpan ke LocalStorage — syarat Tugas 4

```javascript
import { persist } from "zustand/middleware";

export const useKeranjang = create(
  persist(
    (set) => ({ isi: [], tambah: (b) => set(s => ({ isi: [...s.isi, b] })) }),
    { name: "keranjang" }
  )
);
```

Satu pembungkus, dan isinya bertahan setelah refresh.

> "Ingat `useLocalStorage` yang kalian bikin di Pertemuan 5? Ini versi jadinya. Kalian udah paham cara kerjanya — sekarang kalian boleh pakai yang siap pakai."

**Ini syarat Tugas 4:** *"state global dipertahankan setelah halaman dimuat ulang melalui Local Storage."* Sebut sekarang.

---

# BAGIAN 4 — React Compiler & Optimasi (68–88 menit)
> ⚠️ **Materi yang paling gampang salah diajarkan di seluruh program.** Baca sepenuhnya sebelum menyiapkan.

## Kenapa bagian ini ditulis khusus

Sampai React 18, memoization manual adalah **kebiasaan**: taburkan `useMemo`, `useCallback`, dan `React.memo` di mana-mana, karena render ulang dianggap mahal.

**Sejak React 19 dan React Compiler, itu sudah bukan default lagi.**

Masalahnya: **hampir semua tutorial, semua jawaban Stack Overflow, dan hampir semua saran AI masih mengajarkan cara lama.** Peserta yang mencari sendiri akan menemukan cara lama dan mengira itu yang benar.

## APA — React Compiler

React Compiler bekerja **saat build**. Dia membaca kode Anda, menentukan sendiri bagian mana yang tidak perlu dihitung ulang, dan memasang memoization-nya otomatis.

Anda menulis kode biasa. Dia yang mengurus.

```jsx
// Yang kalian tulis — bersih, tanpa memoization
function Daftar({ produk, filter }) {
  const terlihat = produk.filter(p => p.kategori === filter);
  return <Grid data={terlihat} />;
}
```

Tanpa compiler, "cara lama" menuntut ini:

```jsx
// CARA LAMA — dan ini yang masih diajarkan di mana-mana
const terlihat = useMemo(
  () => produk.filter(p => p.kategori === filter),
  [produk, filter]
);
```

> **CARA SAMPAIKAN — Analogi Dapur:**
> "Bayangin dapur restoran. Tiap ada pesanan, dia masak ulang **semuanya** dari nol — termasuk sambal yang sebenernya masih sama.
>
> Cara lama: **kalian sendiri** yang harus nempelin catatan di tiap panci — 'ini jangan dimasak ulang kalau bahannya sama'. Capek, dan sering salah nempel.
>
> React Compiler itu **kepala dapur yang otomatis tahu** mana yang bahannya belum berubah. Kalian tinggal masak, dia yang ngatur."

## Cara memasang di Vite

```bash
npm i -D babel-plugin-react-compiler
```

```javascript
// vite.config.js
export default defineConfig({
  plugins: [
    react({ babel: { plugins: ["babel-plugin-react-compiler"] } }),
    tailwindcss(),
  ],
});
```

> ⚠️ **Uji sendiri di H-1.** Nama paket dan cara pasangnya masih berubah cukup cepat. Kalau berbeda, perbaiki dokumen ini dulu.

## KENAPA `useMemo` masih ada kalau ada compiler

Jangan sampai peserta mengira memoization manual **dihapus**. Dia masih ada, tapi statusnya berubah dari **kebiasaan** jadi **pengecualian**.

**Dua kasus yang tidak tertangani compiler:**

1. **Kode di dalam `try/catch`** — compiler tidak bisa menganalisisnya dengan aman, jadi dia melewatinya
2. **Library yang bergantung pada *referential equality*** — beberapa library luar butuh object/fungsi yang alamatnya benar-benar tidak berubah

> **CARA SAMPAIKAN:**
> "Jadi `useMemo` itu bukan dihapus. Dia turun pangkat.
>
> Dulu: **kebiasaan** — dipakai di mana-mana buat jaga-jaga.
> Sekarang: **pengecualian** — dipakai cuma kalau kalian bisa nunjukin compiler-nya nggak nangani, dan kalian bisa nunjukin ada yang beneran lambat.
>
> Dan ini penting: **kalau kalian nyari di internet atau nanya AI, kalian bakal dikasih cara lama.** Bukan karena mereka bohong — karena tulisan yang mereka pelajari kebanyakan dari sebelum React 19."

Itu langsung menyambung ke kebijakan AI di silabus. Sebut.

## Prinsip yang paling penting: ukur dulu

**Ini yang harus mereka bawa pulang dari Bagian 4**, lebih dari sintaks apa pun.

**Peragakan React DevTools → Profiler:**
1. Buka tab **Profiler**
2. Klik rekam → lakukan sesuatu di aplikasi → berhenti
3. Terlihat komponen mana yang dirender dan **berapa milidetik**

> **CARA SAMPAIKAN:**
> "Nah ini yang saya minta kalian ingat seumur hidup.
>
> Sebelum kalian nulis satu baris optimasi, **kalian harus bisa nunjukin angkanya.** Komponen mana, berapa milidetik.
>
> Kenapa? Karena optimasi tanpa ukuran itu kayak **minum obat tanpa tahu sakitnya apa.** Paling bagus nggak ngaruh. Paling jelek, kalian nambah kerumitan buat masalah yang nggak ada — dan kode kalian jadi lebih susah dibaca tanpa jadi lebih cepet.
>
> Dan jujur aja: di aplikasi sebesar tugas kalian, hampir pasti **nggak ada** yang perlu dioptimasi. Itu jawaban yang benar, bukan jawaban yang malas."

---

# BAGIAN 5 — Code Splitting & Lazy Loading (88–98 menit)

## Masalahnya

Saat `npm run build`, seluruh aplikasi jadi **satu file JavaScript**. Pengunjung yang cuma membuka beranda tetap mengunduh kode halaman admin, halaman detail, semuanya.

## APA

```jsx
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("./pages/Dashboard"));

<Suspense fallback={<Skeleton />}>
  <Route path="/dashboard" element={<Dashboard />} />
</Suspense>
```

`lazy()` menunda pengunduhan sampai komponennya benar-benar dibutuhkan. `Suspense` menyediakan tampilan sementara selama menunggu.

> **CARA SAMPAIKAN — Analogi Buku Menu:**
> "Bayangin restoran ngasih kalian **seluruh buku resep** pas kalian baru duduk — padahal kalian cuma mau pesen satu.
>
> Code splitting itu: kalian dikasih menu dulu. Resepnya diambil **pas dipesan**."

**Sebut:** `fallback` itu **Loading state dari P6**. Konsepnya sama — cuma yang ditunggu bukan data, tapi kodenya.

## KENAPA jangan semua halaman di-`lazy`

> "Jangan `lazy` semuanya. Tiap `lazy` itu satu unduhan tambahan pas dibuka — jadi halaman yang **sering** dibuka justru jadi terasa lebih lambat.
>
> Aturannya: `lazy` untuk halaman yang **jarang** dibuka atau **berat** — dashboard admin, halaman laporan. Beranda jangan."

---

# BAGIAN 6 — Wawasan Industri: TanStack Query (98–113 menit)
> 15 menit sesuai silabus. Bukan praktik — tujuannya peserta paham posisi pola P6 mereka.

## Mulai dari masalah yang mereka punya sekarang

Pola `useEffect` + Axios dari P6 **benar**, dan tetap fondasinya. Tapi dia punya empat lubang yang belum terlihat di aplikasi sekecil tugas.

**1. Tidak ada cache.** Pindah halaman lalu kembali → mengambil ulang data yang sama.

**2. Permintaan ganda.** Dua komponen butuh data yang sama → dua permintaan ke server.

**3. Race condition.** Ini yang paling berbahaya, dan **wajib diperagakan.**

**4. Tidak tahu kapan data basi.** Data yang diambil 10 menit lalu ditampilkan seolah baru.

## PERAGAKAN race condition — 3 menit

Ini konsep yang sulit dijelaskan tapi mudah ditunjukkan.

1. Buka pencarian dari P6, aktifkan **Slow 3G**
2. Ketik `a` — permintaan pertama berangkat
3. Cepat ketik `ab` — permintaan kedua berangkat
4. Kalau permintaan **pertama** sampai belakangan, hasil untuk `a` menimpa hasil `ab`

**Layarnya sekarang bohong:** kotak pencarian bertulis `ab`, hasilnya untuk `a`.

> **CARA SAMPAIKAN:**
> "Perhatiin baik-baik. Kotak pencariannya nulis 'ab', tapi hasilnya buat 'a'.
>
> Nggak ada error. Nggak ada yang crash. Aplikasi kalian cuma **nampilin yang salah dengan penuh percaya diri.**
>
> Ini yang paling serem dari bug jaringan: dia nggak keliatan rusak."

## APA — bagaimana TanStack Query menjawabnya

```jsx
const { data, isLoading, isError } = useQuery({
  queryKey: ["produk", cari],
  queryFn: () => api.get(`/products/search?q=${cari}`),
});
```

Cache, deduplikasi, pembatalan permintaan lama, dan penandaan data basi — semuanya sudah termasuk.

| Masalah | Solusi bawaan |
|---|---|
| Tidak ada cache | Otomatis, per `queryKey` |
| Permintaan ganda | Digabung jadi satu |
| Race condition | Hasil lama dibuang |
| Data basi | Diambil ulang otomatis saat tab difokuskan |

## KENAPA kita tetap mengajarkan `useEffect` + Axios lebih dulu

**Jangan biarkan peserta merasa baru saja belajar yang salah.**

> **CARA SAMPAIKAN:**
> "Ada yang mikir 'lho, kenapa nggak dari awal aja pakai ini?'
>
> Karena kalau kalian langsung pakai TanStack Query tanpa pernah ngerasain masalahnya, kalian nggak akan tahu **apa yang dia selesaikan.** Pas ada yang aneh, kalian nggak punya pegangan.
>
> Dan ini beda dari 'server state'. Perhatiin — data dari server itu sebenernya **bukan punya kalian.** Dia salinan dari yang di server, dan bisa basi kapan aja. `useState` itu buat data yang **beneran punya kalian**.
>
> TanStack Query itu ngurus jenis yang pertama. Yang kalian pelajari di P6 tetap fondasinya — dan `useState`, `useEffect` yang kalian pelajari tetap kepake tiap hari."

**Tidak diwajibkan di Tugas 3 atau 4.** Sebut eksplisit supaya tidak ada yang panik.

---

# BAGIAN 7 — Penutup & Tugas 4 (113–120 menit)

## Rangkuman: satu benang merah

> "Temanya hari ini: **alat canggih dipakai setelah masalahnya terbukti ada.**
>
> Global state ngobatin props drilling. Nggak ada props drilling? Dia cuma nambah ribet.
> Memoization ngobatin render yang lambat. Nggak ada yang lambat? Dia cuma nambah berisik.
>
> Tiap alat itu obat. Dan obat yang diminum pas nggak sakit itu bukan sehat — itu efek samping."

## Tugas 4 — mencakup P7 & P8

Dikumpulkan **paling lambat satu minggu setelah Pertemuan 8**, sebelum fase Capstone.

**Sudah bisa dikerjakan malam ini:**

| Syarat Tugas 4 | Diajarkan hari ini |
|---|---|
| Global state (Context atau Zustand) | Bagian 2–3 |
| State global bertahan lewat LocalStorage | Bagian 3 — `persist` |

**Menunggu P8:** autentikasi, protected route, environment variable, deploy, Lighthouse.

> "Setengah Tugas 4 bisa kalian kerjain malam ini. Dan ini tugas terakhir — yang jadi produk yang kalian tunjukin pas ditanya 'pernah bikin apa?'"

---

# LAMPIRAN A — Pertanyaan yang Pasti Muncul

**"Mending Context apa Zustand?"**
> Bukan pilihan salah satu — dua-duanya dipakai di industri, sering bareng di aplikasi yang sama. Aturannya: **data yang jarang berubah** (tema, user login) → Context, karena tidak perlu install. **Data yang sering berubah** (keranjang) → Zustand, karena hanya komponen yang berlangganan yang ikut re-render.

**"Kenapa nggak semua state ditaruh di global aja biar gampang?"**
> Karena kalau semua di global, kalian kehilangan kemampuan melacak. Kalau ada nilai yang salah, kalian harus mencari di seluruh aplikasi siapa yang mengubahnya. State lokal itu catatan di meja sendiri — kalau salah, kalian tahu persis di mana mencarinya.

**"Filter kategori saya taruh di Zustand aja ya?"**
> Sebaiknya tidak. Filter itu **state URL** — orang harus bisa membagikan link-nya, dan tombol Back harus berfungsi. Itu materi P5. Kalau dipindah ke Zustand, dua-duanya hilang.

**"Tutorial yang saya baca pakai `useMemo` di mana-mana. Salah?"**
> Tidak salah untuk zamannya — itu memang cara yang benar sampai React 18. Sejak React 19 dan React Compiler, memoization otomatis di tingkat build, jadi manual itu jadi pengecualian. Tutorial yang kalian temukan kebanyakan ditulis sebelum itu.

**"Kalau ada compiler, `useMemo` dihapus dong?"**
> Tidak dihapus — **turun pangkat**. Dari kebiasaan jadi pengecualian. Masih dipakai untuk kode di dalam `try/catch` yang tidak bisa dianalisis compiler, dan untuk library yang butuh *referential equality*.

**"Aplikasi saya lambat, saya pasang `useMemo` di semua tempat, tapi tetap lambat."**
> Karena kalian belum tahu **apa** yang lambat. Buka **Profiler**, rekam, lihat komponen mana yang makan waktu paling banyak. Sembilan dari sepuluh kali, masalahnya bukan render — biasanya gambar yang terlalu besar atau permintaan jaringan yang berlebihan.

**"Kenapa kita nggak pakai TanStack Query dari awal?"**
> Karena kalau kalian langsung pakai tanpa pernah merasakan masalahnya, kalian tidak akan tahu apa yang dia selesaikan — dan saat ada yang aneh, kalian tidak punya pegangan. Yang kalian pelajari di P6 tetap fondasinya.

**"Boleh pakai AI buat Tugas 4?"**
> Boleh, tapi hari ini ada satu jebakan khusus: **AI hampir pasti menyarankan `useMemo` dan `useCallback` di mana-mana**, karena data latihannya penuh tulisan dari sebelum React 19.
>
> Kalau kalian menerima itu mentah-mentah, kalian mengumpulkan pola yang sudah ditinggalkan. **Menemukan dan menghapusnya justru menambah nilai kalian** — sesuai kebijakan AI di silabus.

---

# LAMPIRAN B — Praktik Langsung: React DevTools Profiler

Tab **Profiler** — pelengkap tab **Components** yang sudah dipakai sejak P4.

| Yang dilakukan | Gunanya |
|---|---|
| Klik rekam → beraksi → berhenti | Lihat render yang terjadi |
| Grafik batang | Komponen mana, berapa milidetik |
| ⚙️ → *Record why each component rendered* | Alasan tiap render |

**Peragaan Highlight updates — dua kali, ini yang membedakan Context dan Zustand:**

1. Aktifkan *Highlight updates* di tab Components
2. Ubah nilai di **Context** → **semua** consumer berkedip
3. Ubah nilai di **Zustand** → hanya yang berlangganan yang berkedip

> "Ini bukan teori. Kalian lihat sendiri siapa yang ikut kebangun."

**Aturan yang ditanam hari ini:**
> "Sebelum nulis satu baris optimasi, buka Profiler. Kalau kalian nggak bisa nunjukin angkanya, kalian nggak tahu ada masalah."

---

# LAMPIRAN C — Tips & Kebiasaan untuk Ditanamkan

**1. Tanya tiga pertanyaan sebelum menaruh state:**
Cuma satu komponen yang butuh? → `useState`.
Perlu bisa di-share lewat link? → URL (P5).
Dipakai banyak komponen berjauhan? → global.

**2. Bungkus context dengan custom hook.**
`useTema()` bukan `useContext(TemaContext)`. Kalau nanti ganti library, cuma satu file yang diubah.

**3. Jangan menulis optimasi tanpa angka dari Profiler.**

**4. `lazy` untuk halaman jarang/berat, bukan untuk semuanya.**

**5. Aturan immutability tetap berlaku di Zustand.**
`set(s => ({ isi: [...s.isi, x] }))` — sama persis dengan P4.

**6. Curigai saran AI di topik optimasi.**
Data latihannya penuh tulisan sebelum React 19.

---

# LAMPIRAN D — Tiga Kesalahan Mentor Baru di P7

**1. Mengajarkan memoization manual sebagai kebiasaan.**
Ini kesalahan paling mahal di P7, dan paling mudah terjadi — karena itu yang tertulis di hampir semua sumber. Peserta yang belajar begitu akan membawa pola yang sudah ditinggalkan ke tempat kerja. Ajarkan compiler sebagai default, manual sebagai pengecualian yang harus dibuktikan.

**2. Mengajarkan Context tanpa memperagakan batasnya.**
Kalau `Highlight updates` tidak dijalankan, peserta akan menaruh keranjang belanja di Context, lalu seluruh aplikasi mereka digambar ulang tiap klik — dan mereka tidak akan tahu kenapa. Peragakan, jangan cuma sebut.

**3. Membuat TanStack Query terdengar seperti "yang seharusnya dipakai dari awal".**
Sama seperti SSR di P5: kalau disampaikan begitu, peserta pulang merasa baru saja belajar teknologi usang. Tekankan bahwa `useEffect` + Axios adalah fondasinya, dan bahwa TanStack Query mengurus **jenis state yang berbeda** — server state, bukan client state.

---

# LAMPIRAN E — Checklist Persiapan Anda

**H-3 sebelum kelas:**
- [ ] Ingatkan Tugas 3 dikumpulkan sebelum hari ini
- [ ] Ingatkan peserta membawa project dalam keadaan jalan
- [ ] Baca [materi ini](P7-Materi-Mentor-Frontend-GlobalState.md), **terutama Bagian 4**

**H-1:**
- [ ] **Pasang React Compiler dari nol di Vite.** Ini bagian yang paling cepat basi — kalau perintahnya berbeda, perbaiki dokumen dulu.
- [ ] Pasang `zustand` dan uji seluruh `demo/`
- [ ] **Latih peragaan Highlight updates** untuk Context vs Zustand sampai bedanya terlihat jelas di proyektor
- [ ] **Latih peragaan race condition** dengan Slow 3G — ini yang paling sulit diulang kalau belum dicoba
- [ ] Cari contoh props drilling di kode Tugas 3 peserta untuk dipakai di pembuka

**Hari-H:**
- [ ] Editor + browser + React DevTools (**Components dan Profiler**) berdampingan
- [ ] *Highlight updates* sudah aktif sebelum kelas mulai
- [ ] Throttling **Slow 3G** siap untuk peragaan race condition

---

*Dokumen ini disiapkan untuk Pertemuan 7 — Metro Institute Season 2, Divisi Frontend.*
