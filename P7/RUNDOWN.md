# RUNDOWN P7 — Pegangan Saat Mengajar

Buka di layar kedua saat kelas. Isinya cuma **gerakan** — penjelasan lengkapnya di [P7-Materi-Mentor-Frontend-GlobalState.md](P7-Materi-Mentor-Frontend-GlobalState.md).

> ⚠️ **Baca Bagian 4 di materi lengkap sebelum mengajar.** React Compiler adalah materi yang paling gampang salah diajarkan di seluruh program.

---

## Tiga Aturan Hari Ini

**1. Dua godaan berlawanan, satu obat yang sama.** Peserta akan tergoda memindahkan semua state ke global, **dan** menaburkan `useMemo` di mana-mana. Jawabannya sama untuk keduanya:
> "Jangan pakai alat sebelum kalian bisa nunjukin masalahnya."

**2. Peragakan, jangan sebut.** Batas Context dan race condition adalah dua hal yang **tidak akan dipercaya** kalau cuma diceritakan. Highlight updates dan Slow 3G ada untuk itu.

**3. Jangan biarkan peserta merasa P6 salah.** Sama seperti SSR di P5 — TanStack Query mengurus jenis state yang **berbeda**, bukan menggantikan yang mereka pelajari.

---

## Peta 120 Menit

| Menit | Bagian | File |
|:--:|---|---|
| 0–8 | Pembuka — props drilling di kode mereka | Tugas 3 peserta |
| 8–24 | Kapan butuh global state | — |
| 24–48 | **Context API** + batasnya | `TemaContext.jsx` · `ContextVsZustand.jsx` |
| 48–68 | **Zustand** + `persist` | `store/keranjang.js` |
| **68–88** | **React Compiler & Optimasi** ⚠️ | Profiler |
| 88–98 | Code Splitting & Lazy | — |
| 98–113 | Wawasan: TanStack Query + race condition | Slow 3G |
| 113–120 | Penutup & Tugas 4 | [`../tugas/`](../tugas/) |

---

## 0–8 · Pembuka

**Cari props drilling di kode Tugas 3 mereka sendiri** — hampir pasti ada.

> "Lihat baris ini. `TodoList` nerima `onHapus`, terus dia oper ke `TodoItem`. Dia sendiri nggak pakai — cuma jadi **tukang pos**.
>
> Bayangin ada tujuh lapis kayak gini. Namanya **props drilling**. Saya udah sebut ini di Pertemuan 3 dan bilang obatnya di Pertemuan 7. Ini Pertemuan 7."

**Cek:** siapa Tugas 3-nya sudah masuk? siapa lima status antarmukanya lengkap?

---

## 8–24 · Kapan Butuh Global State

**Tiga jenis state, bukan dua** — tulis di layar:

| Jenis | Contoh | Simpan di |
|---|---|---|
| Lokal | input diketik, dropdown | `useState` |
| **URL** | filter, halaman ke berapa | `useSearchParams` — **P5** |
| Global | keranjang, tema, user login | Context / Zustand |

> "Baris tengah itu yang **sering ketuker** jadi global state. Filter kategori itu **bukan** global — dia state URL, soalnya orang harus bisa nge-share link-nya."

**Peringatan sebelum mengajarkan alatnya — analogi papan pengumuman:**
> "Kalau tiap orang nempelin catatan pribadinya di papan pengumuman lobi, dalam seminggu papan itu penuh dan nggak ada yang bisa nemuin apa-apa. Dan lebih parah: kalau ada yang salah, kalian nggak tahu **siapa** yang nempel."

**Aturan — angkat ke global hanya kalau KEDUANYA terpenuhi:**
1. Dipakai beberapa komponen **berjauhan**
2. Props drilling sudah **lebih dari 2–3 lapis**

---

## 24–48 · Context API — `TemaContext.jsx`

1. `createContext` → `<Provider value>` → `useContext`
2. **Sebut:** `{ children }` itu children props dari P3
3. **Bungkus dengan custom hook** `useTema()` — dari P5
   > "Kalau nanti ganti dari Context ke Zustand, yang diubah cuma **satu file ini**."

### ⚠️ PERAGAKAN BATASNYA — jangan cuma disebut

1. React DevTools → Components → ⚙️ → **Highlight updates**
2. Klik **Ganti Tema** → **semua** kotak kolom Context berkedip
3. **Tunjuk "Pengamat Diam"** — memanggil `useTema()` tapi tidak memakai nilainya, tetap berkedip

**Analogi pengeras suara gedung:**
> "Kalian mau ngasih tahu satu orang di lantai tiga. Tapi yang kedengeran **semua orang di semua lantai** — dan semuanya berhenti kerja buat dengerin.
>
> Buat pengumuman yang jarang, nggak masalah. Tapi kalau tiap lima detik ada pengumuman, semua orang nggak bisa kerja."

**Kesimpulan:**
> "Context bagus buat data yang **jarang berubah** — tema, siapa yang login. Buat keranjang yang diklik terus, dia bikin seluruh aplikasi gambar ulang tiap klik."

---

## 48–68 · Zustand — `store/keranjang.js`

```bash
npm i zustand
```

1. `create((set) => ({ ... }))` — **tanpa Provider**, store hidup di luar pohon komponen
2. **Sebut:** `[...state.isi, x]` dan `.filter()` itu **immutability dari P4**. Aturannya sama persis.
3. **Selector:** `useKeranjang(s => s.isi.length)` — "saya cuma mau ini"

### Peragakan bedanya

Klik **Tambah ke Keranjang** dengan Highlight updates aktif → **hanya** yang berlangganan bagian itu berkedip. **"Pengamat Lain"** berlangganan bagian berbeda, tidak ikut.

**Analogi grup WhatsApp per topik:**
> "Kalian cuma masuk grup yang kalian butuh. Ada kabar di grup 'Keranjang'? Yang kena notif cuma anggota grup itu.
>
> Bukan soal mana yang lebih canggih — soal **siapa yang ikut kebangun**."

**`persist` — syarat Tugas 4:**
> "Ingat `useLocalStorage` yang kalian bikin di Pertemuan 5? Ini versi jadinya."

Refresh halaman → isinya bertahan.

---

## 68–88 · React Compiler & Optimasi ⚠️

> **Materi paling gampang salah diajarkan di seluruh program.**

**Mulai dari status barunya:**

| | Sebelum React 19 | Sekarang |
|---|---|---|
| Memoization manual | **Kebiasaan** | **Pengecualian** |
| Yang mengurus | Programmer | Compiler, saat build |

**Analogi dapur:**
> "Cara lama: **kalian sendiri** yang nempelin catatan di tiap panci — 'ini jangan dimasak ulang kalau bahannya sama'. Capek, dan sering salah nempel.
>
> React Compiler itu **kepala dapur yang otomatis tahu** mana yang bahannya belum berubah."

**Pasang:**
```bash
npm i -D babel-plugin-react-compiler
```
```javascript
react({ babel: { plugins: ["babel-plugin-react-compiler"] } })
```

**`useMemo` tidak dihapus — turun pangkat.** Dua kasus yang tidak tertangani:
- Kode di dalam `try/catch`
- Library yang butuh *referential equality*

> "Dan ini penting: **kalau kalian nyari di internet atau nanya AI, kalian bakal dikasih cara lama.** Bukan karena mereka bohong — karena tulisan yang mereka pelajari kebanyakan dari sebelum React 19."

### Prinsip yang paling penting — ini yang dibawa pulang

**Peragakan Profiler:** rekam → beraksi → berhenti → grafik batang.

> "Sebelum kalian nulis satu baris optimasi, **kalian harus bisa nunjukin angkanya.** Komponen mana, berapa milidetik.
>
> Optimasi tanpa ukuran itu kayak **minum obat tanpa tahu sakitnya apa.** Paling bagus nggak ngaruh. Paling jelek, kalian nambah kerumitan buat masalah yang nggak ada.
>
> Dan jujur aja: di aplikasi sebesar tugas kalian, hampir pasti **nggak ada** yang perlu dioptimasi. Itu jawaban yang benar, bukan jawaban yang malas."

---

## 88–98 · Code Splitting & Lazy

```jsx
const Dashboard = lazy(() => import("./pages/Dashboard"));
<Suspense fallback={<Skeleton />}>...</Suspense>
```

**Analogi buku menu:**
> "Bayangin restoran ngasih kalian **seluruh buku resep** pas baru duduk — padahal kalian cuma mau pesen satu. Code splitting itu: dikasih menu dulu, resepnya diambil pas dipesan."

**Sebut:** `fallback` itu **Loading state dari P6** — yang ditunggu bukan data, tapi kodenya.

**Jangan `lazy` semuanya:**
> "Tiap `lazy` itu satu unduhan tambahan pas dibuka. Halaman yang **sering** dibuka justru jadi terasa lebih lambat. Pakai buat yang jarang atau berat — dashboard admin, halaman laporan. Beranda jangan."

---

## 98–113 · Wawasan: TanStack Query

**Empat lubang di pola P6** — sebut cepat: tidak ada cache · permintaan ganda · **race condition** · data basi.

### PERAGAKAN RACE CONDITION — 3 menit

1. Pencarian dari P6, aktifkan **Slow 3G**
2. Ketik `a` → cepat ketik `ab`
3. Kalau permintaan **pertama** sampai belakangan, hasil `a` menimpa hasil `ab`

> "Kotak pencariannya nulis 'ab', tapi hasilnya buat 'a'. Nggak ada error, nggak ada yang crash. Aplikasi kalian cuma **nampilin yang salah dengan penuh percaya diri**.
>
> Ini yang paling serem dari bug jaringan: **dia nggak keliatan rusak.**"

**TanStack Query menjawabnya** — cache, deduplikasi, pembatalan permintaan lama, penandaan data basi.

### ⛔ Jangan biarkan peserta merasa P6 salah

> "Kalau kalian langsung pakai TanStack Query tanpa pernah ngerasain masalahnya, kalian nggak akan tahu **apa yang dia selesaikan.**
>
> Dan perhatiin bedanya: data dari server itu sebenernya **bukan punya kalian** — dia salinan yang bisa basi kapan aja. `useState` itu buat data yang **beneran punya kalian**. TanStack Query ngurus jenis yang pertama."

**Tidak diwajibkan di Tugas 3 atau 4.** Sebut eksplisit.

---

## 113–120 · Penutup & Tugas 4

**Benang merah:**
> "**Alat canggih dipakai setelah masalahnya terbukti ada.**
>
> Global state ngobatin props drilling. Nggak ada props drilling? Dia cuma nambah ribet.
> Memoization ngobatin render lambat. Nggak ada yang lambat? Dia cuma nambah berisik.
>
> Tiap alat itu obat. Dan obat yang diminum pas nggak sakit itu bukan sehat — itu **efek samping**."

**Tugas 4 — bisa dikerjakan malam ini:** global state + `persist` ke LocalStorage.
**Menunggu P8:** autentikasi, protected route, environment variable, deploy, Lighthouse.

> "Ini tugas terakhir — yang jadi produk yang kalian tunjukin pas ditanya 'pernah bikin apa?'"

---

## Kalau Waktu Tidak Cukup

| Urutan potong | Yang dipotong | Ganti dengan |
|:--:|---|---|
| 1 | Code Splitting (Bagian 5) | Sebut ada, contohnya di materi |
| 2 | Detail Context (Bagian 2) | Cukup peragaan Highlight updates + kesimpulannya |
| 3 | Race condition (Bagian 6) | Sebut ada, tanpa peragaan |

> ⛔ **JANGAN PERNAH DIPOTONG:**
> - **Peragaan Highlight updates** Context vs Zustand — tanpa ini peserta menaruh keranjang di Context dan tidak tahu kenapa aplikasinya berat
> - **Prinsip "ukur dulu" di Bagian 4** — ini yang paling berharga dari seluruh pertemuan
> - **Peringatan bahwa AI menyarankan cara lama** untuk memoization

---

## Tiga Kesalahan yang Paling Gampang Terjadi

**1. Mengajarkan memoization manual sebagai kebiasaan.**
Paling mahal, dan paling mudah terjadi — karena itu yang tertulis di hampir semua sumber. Ajarkan compiler sebagai default, manual sebagai pengecualian yang harus dibuktikan.

**2. Mengajarkan Context tanpa memperagakan batasnya.**
Peserta akan menaruh keranjang di Context, seluruh aplikasi digambar ulang tiap klik, dan mereka tidak akan tahu kenapa.

**3. Membuat TanStack Query terdengar seperti "yang seharusnya dipakai dari awal".**
Sama seperti SSR di P5. Peserta pulang merasa baru belajar teknologi usang.
