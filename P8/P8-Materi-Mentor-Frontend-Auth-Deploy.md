# PERTEMUAN 8 — Materi Lanjutan & Final Progress
### Authentication Flow, Production Build & Capstone Sync
**Metro Institute Season 2 — Divisi Frontend**
Durasi: 120 menit | Topik: Auth JWT, Protected Route, Environment Variables, Deploy, Lighthouse, Git Collaboration, wawasan Testing

> **CARA PENYAMPAIAN:** materi ini **langsung ke cara modern**. Cara lama disebut sebagai selingan satu-dua kalimat sambil lewat. Lapisan **KENAPA** tetap wajib.

> ⚠️ **P8 PUNYA TIGA MOMEN KEJUJURAN YANG WAJIB DISAMPAIKAN.** Ketiganya berbunyi sama: *"yang barusan kalian bikin itu bukan keamanan."* Kalau ketiganya dilewati, peserta lulus dengan keyakinan yang salah tentang apa yang bisa dilindungi frontend — dan membawanya ke tempat kerja.
>
> Ketiganya ditandai ⚠️ di Bagian 1, 2, dan 3. Baca sebelum menyiapkan.

---

## Cara Membaca Dokumen Ini

| Lapis | Isi |
|---|---|
| **APA** | Faktanya. Ini yang biasanya diajarkan orang. |
| **BANDINGKAN** | Alternatif yang ada, dan apa bedanya. |
| **KENAPA** | Alasan kita memilih satu di antaranya. Ini yang membuat peserta paham, bukan cuma hafal. |

Ditambah blok **CARA SAMPAIKAN** — kalimat dan analogi siap ucap.

---

## Situasi Khusus P8 Ini: Pertemuan Terakhir, dan Taruhannya Kebiasaan

Ini pertemuan terakhir sebelum Capstone. Dua hal yang membuatnya berbeda:

**1. Materinya banyak tapi masing-masing pendek.** Sembilan bagian, tidak ada yang butuh 25 menit. Risikonya bukan kehabisan waktu di satu topik — tapi **melompat terlalu cepat** sehingga tidak ada yang menempel.

**2. Apa yang mereka bawa pulang hari ini akan mereka pakai di tempat kerja.** Bukan sintaksnya — tapi **keyakinannya**. Peserta yang lulus mengira "token di LocalStorage itu aman" atau "protected route itu keamanan" akan membangun sistem yang bocor di kantor pertamanya.

**Konsekuensinya:** kalau harus memotong, potong dari **deploy** dan **testing** — jangan dari tiga momen kejujuran.

---

## Prinsip Besar yang Anda Tanamkan Hari Ini

> **Frontend tidak bisa menyimpan rahasia.**

Ini satu kalimat yang menyatukan tiga bagian pertama hari ini:

- **Token di LocalStorage** bisa dibaca script mana pun yang berjalan di halaman itu
- **Protected Route** cuma menyembunyikan tampilan — datanya tetap bisa diminta langsung
- **Environment variable** di frontend ikut terkirim ke browser dalam bentuk teks biasa

Ketiganya bukan cacat yang bisa diperbaiki. Itu **sifat** dari kode yang berjalan di komputer orang lain.

Kalimat yang layak diulang:

> "Semua yang kalian kirim ke browser bisa dibaca pengguna. Tugas kalian bukan **menyembunyikan** — tapi tahu **apa yang boleh ada di sana** dan apa yang harus tetap di server."

---

# BAGIAN 0 — Pembuka & Peta Akhir Program (0–8 menit)

## Yang Anda lakukan

**Tunjukkan aplikasi mereka sendiri dari Tugas 3.**

> "Delapan minggu lalu kalian bikin `<h1>Halo</h1>` dan nggak yakin bakal muncul apa nggak.
>
> Sekarang ini: halaman banyak, data dari server beneran, lima status ditangani, state global. Ini bukan latihan — ini aplikasi.
>
> Hari ini kita bikin dia **bisa dibuka orang lain lewat internet**, dan kita tutup satu hal terakhir: **login**."

**Lalu sampaikan peringatan hari ini:**

> "Tapi ada tiga momen hari ini di mana saya bakal bilang: **'yang barusan kalian bikin itu bukan keamanan.'**
>
> Bukan buat nakut-nakutin. Justru sebaliknya — supaya kalian nggak keluar dari kelas ini dengan keyakinan yang salah, terus bikin sistem bocor di kantor pertama kalian."

### Cek kesiapan

- Siapa yang Tugas 3-nya sudah masuk lengkap dengan lima statusnya?
- Siapa yang sudah punya akun **Vercel** atau **Netlify**? *(harusnya sudah di H-3)*

---

# BAGIAN 1 — Alur Autentikasi & Kejujuran soal LocalStorage (8–30 menit)
> ⚠️ **Momen kejujuran pertama.** Beri porsi penuh.

## APA — alur JWT dari sisi frontend

```
1. Pengguna kirim email + password  →  server
2. Server balas: { token: "eyJhbGc..." }
3. Frontend menyimpan token
4. Tiap permintaan berikutnya bawa token itu di header
5. Logout = hapus tokennya
```

**Frontend tidak membuat token, tidak memeriksa token.** Frontend cuma **menyimpan dan membawa**.

> **CARA SAMPAIKAN — Analogi Gelang Konser:**
> "Kalian beli tiket di loket — itu login. Loket ngasih **gelang** — itu token.
>
> Habis itu kalian nggak perlu nunjukin tiket lagi tiap masuk area. Cukup tunjukin gelang.
>
> Yang **bikin** gelang itu loket. Yang **ngecek** gelang itu satpam di tiap pintu. Kalian cuma **makai**.
>
> Nah frontend itu kalian. Bukan loket, bukan satpam."

Itu penting untuk membereskan salah paham berikutnya: peserta sering mengira frontend yang "mengizinkan" akses.

## Menyimpan token — implementasi kelas

```jsx
// context/AuthContext.jsx
const login = async (email, password) => {
  const res = await api.post("/auth/login", { email, password });
  localStorage.setItem("token", res.data.token);
  setUser(res.data.user);
};

const logout = () => {
  localStorage.removeItem("token");
  setUser(null);
};
```

Token dibawa otomatis lewat **interceptor Axios dari P6**:

```javascript
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
```

> "Ingat satpam di pintu yang saya sebut di Pertemuan 6? Ini kegunaannya. Kalian nggak perlu nempelin token di dua puluh tempat."

## ⚠️ KEJUJURAN PERTAMA: kenapa ini tidak dipakai di produksi

**Peragakan dulu — 30 detik, dan ini sangat berkesan.**

Buka Console browser, ketik:

```javascript
localStorage.getItem("token")
```

Tokennya muncul, **teks biasa**, bisa disalin.

> **CARA SAMPAIKAN:**
> "Lihat. Satu baris, dan token kalian ada di layar.
>
> Sekarang bayangin baris itu **bukan kalian yang ngetik**. Bayangin ada script asing yang jalan di halaman kalian — dari iklan, dari library pihak ketiga, dari kolom komentar yang nggak disaring.
>
> Script itu bisa baca LocalStorage kalian, kirim token itu ke server dia, terus **masuk sebagai kalian**. Namanya serangan **XSS**.
>
> Dan pengguna nggak akan sadar apa-apa. Nggak ada peringatan, nggak ada yang aneh di layar."

## BANDINGKAN — cara industri

| | Yang kita pakai di kelas | Standar industri 2026 |
|---|---|---|
| *Access token* | LocalStorage | **Di memori** (variabel biasa, hilang saat refresh) |
| *Refresh token* | Tidak ada | Cookie **`HttpOnly` + `Secure` + `SameSite`** |
| Bisa dibaca JavaScript? | **Ya** | **Tidak** — `HttpOnly` melarangnya di tingkat browser |

> **CARA SAMPAIKAN:**
> "Kuncinya di kata `HttpOnly`. Itu artinya cookie-nya **cuma boleh dibaca server**, JavaScript nggak bisa nyentuh sama sekali. Bukan disembunyiin — beneran nggak bisa diakses.
>
> Jadi walaupun ada script jahat masuk, dia nggak bisa ngambil token-nya."

## KENAPA kita tetap pakai LocalStorage di kelas

**Jangan biarkan peserta merasa diajari yang salah.**

> "Terus kenapa kita nggak langsung pakai yang bener?
>
> Karena cara yang bener itu **butuh kerja sama backend.** Server harus ngeset cookie-nya, harus ngatur CORS, harus nyediain endpoint refresh. Itu di luar kendali kalian sebagai frontend.
>
> Buat kelas ini, LocalStorage bikin kalian bisa fokus ke **alurnya** — login, simpan, bawa, logout. Alur itu sama persis di dua cara.
>
> Yang saya minta cuma satu: **jangan lupa bahwa ini versi kelas.** Pas di kantor nanti, tanya tim backend kalian: 'refresh token-nya di cookie HttpOnly kan?' Satu pertanyaan itu bakal bikin kalian keliatan tahu apa yang kalian omongin."

Kalimat terakhir memberi mereka sesuatu yang bisa langsung dipakai. Sebut.

---

# BAGIAN 2 — Protected Route (30–43 menit)
> ⚠️ **Momen kejujuran kedua.**

## APA

```jsx
// komponen/ProtectedRoute.jsx
import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) return <Skeleton />;              // jangan lompat sebelum siap
  if (!user) return <Navigate to="/login" replace />;

  return children;
}
```

Dipakai membungkus rute:

```jsx
<Route path="/dashboard" element={
  <ProtectedRoute><Dashboard /></ProtectedRoute>
} />
```

**Sebut tiga hal yang sudah mereka punya:** `{ children }` dari P3 · `<Navigate>` dari React Router P5 · state `loading` dari P6.

## KENAPA `loading` wajib dicek duluan

Ini kesalahan yang pasti terjadi.

> "Kalau kalian nggak cek `loading`, ini yang kejadian: pas halaman baru dimuat, aplikasi belum sempat baca token dari LocalStorage. Jadi `user` masih kosong — dan pengguna yang **sudah login** langsung dilempar ke halaman login.
>
> Mereka refresh, keluar sendiri. Refresh lagi, keluar lagi. Kelihatannya kayak aplikasi kalian rusak."

## KENAPA `replace` dipakai di `<Navigate>`

> "Tanpa `replace`, halaman dashboard tetap masuk riwayat browser. Pengguna pencet Back, balik ke dashboard, dilempar lagi ke login, pencet Back lagi — **kejebak muter-muter**.
>
> `replace` artinya 'ganti langkah terakhir, jangan nambah'."

## ⚠️ KEJUJURAN KEDUA: ini bukan keamanan

**Peragakan — 1 menit.**

Buka tab Network, salin alamat permintaan data dashboard, tempel di tab browser baru **tanpa login**. Datanya tetap datang.

> **CARA SAMPAIKAN:**
> "Protected Route itu **bukan keamanan**. Itu **kenyamanan**.
>
> Yang dia lakuin cuma: nggak nampilin halaman yang nggak berguna buat orang yang belum login. Itu doang.
>
> Datanya sendiri? Tetep bisa diminta langsung ke server, dan server yang harus nolak. **Kalau servernya nggak ngecek, aplikasi kalian bocor** — mau ada Protected Route atau enggak.
>
> Analoginya: Protected Route itu kayak **naruh tirai di depan pintu**. Orang nggak lihat isinya. Tapi tirai bukan kunci."

**Sambungkan ke Capstone:**

> "Nanti pas Capstone, ini yang harus kalian tanyain ke tim Backend: **'endpoint ini udah dicek token-nya belum?'** Jangan asumsi udah."

---

# BAGIAN 3 — Environment Variables (43–54 menit)
> ⚠️ **Momen kejujuran ketiga.**

## APA — dan aturan khusus Vite

```bash
# .env.local — untuk di komputer sendiri
VITE_API_URL=http://localhost:3000

# .env.production — untuk hasil deploy
VITE_API_URL=https://api.produk-saya.com
```

```javascript
// api/client.js
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
```

**Dua aturan Vite yang wajib disebut:**

1. **Wajib diawali `VITE_`.** Tanpa awalan itu, Vite mengabaikannya — dan peserta akan bingung kenapa nilainya `undefined`.
2. **Ditulis `import.meta.env`**, bukan `process.env`. Yang kedua itu untuk Node; tutorial lama banyak memakainya.

> "Dua ini penyebab error paling sering di bagian ini. Sebut sekarang, hemat waktu kalian."

## `.env` jangan masuk Git

```bash
# .gitignore
.env
.env.local
```

Yang **di-commit** adalah `.env.example` — daftar nama variabelnya saja, tanpa isinya:

```bash
# .env.example
VITE_API_URL=
```

> "Ini kebiasaan tim: orang baru yang clone repo kalian langsung tahu variabel apa saja yang harus diisi, tanpa kalian bocorin nilainya."

## ⚠️ KEJUJURAN KETIGA: env var di frontend bukan rahasia

**Peragakan — 2 menit, dan ini yang paling mengejutkan peserta.**

1. `npm run build`
2. Buka folder `dist/assets/`, cari file `.js`
3. Cari nilai `VITE_API_URL` di dalamnya

**Ketemu, teks biasa.**

> **CARA SAMPAIKAN:**
> "Nah ini yang harus kalian ingat baik-baik.
>
> `.env` di frontend itu **bukan tempat rahasia.** Pas di-build, semua isinya **ditempel langsung ke dalam file JavaScript** yang dikirim ke browser pengunjung. Siapa pun bisa buka dan baca.
>
> Jadi apa gunanya? **Bukan buat nyembunyiin — tapi buat membedakan.** Alamat server waktu ngoding beda sama waktu udah live. Itu doang.
>
> Yang **nggak boleh** masuk situ: API key berbayar, password database, secret apa pun. Kalau kalian taruh di situ, itu sama aja kayak nulis di papan pengumuman."

> **Kalau ada yang bertanya "terus API key taruh di mana?"** — jawabannya: **di server.** Frontend memanggil server kalian sendiri, server yang memanggil layanan berbayar dengan key-nya. Itu materi backend, tapi jawab supaya mereka tahu ada jawabannya.

---

# BAGIAN 4 — Production Build & Deploy (54–72 menit)

## Build dulu, uji lokal

```bash
npm run build      # menghasilkan folder dist/
npm run preview    # menjalankan hasil build-nya, bukan versi pengembangan
```

> "`npm run preview` ini sering dilewati, padahal penting. Yang kalian lihat selama ini itu **versi pengembangan** — ada hot reload, ada pesan error yang ramah, StrictMode nyala.
>
> `preview` nunjukin **yang beneran akan dilihat pengunjung.** Kadang ada yang jalan di dev tapi rusak di build. Lebih baik ketahuan sekarang daripada pas udah live."

## Deploy ke Vercel

1. Push ke GitHub *(sudah rutin sejak P1)*
2. vercel.com → **Add New Project** → pilih repositori
3. Framework preset: **Vite** — biasanya terdeteksi otomatis
4. **Environment Variables** → isi `VITE_API_URL` versi produksi
5. Deploy

> ⚠️ **Langkah 4 paling sering dilupakan.** Aplikasi berhasil di-deploy, tampilannya muncul, tapi datanya kosong — karena `VITE_API_URL` tidak ada di sana. Sebut duluan.

**Setelah terhubung, tiap `git push` ke `main` otomatis men-deploy ulang.**

> "Ini yang bikin kalian ngerti kenapa dari Pertemuan 1 saya maksa kalian pakai Git. Sekarang ngumpulin kerjaan sama nge-deploy itu **satu gerakan yang sama**."

## Masalah refresh di halaman dalam — yang dijanjikan di P5

Buka `/produk/7` langsung, atau refresh di situ. Kalau muncul **404**, penyebabnya: server mengira `/produk/7` itu file yang tidak ada.

Vercel dengan preset Vite biasanya sudah menanganinya. Kalau tidak, tambahkan `vercel.json`:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

> "Ini yang saya janjiin di Pertemuan 5 bakal muncul pas deploy. Sekarang kalian tahu penyebabnya: server nyari file, padahal alamat itu diurus React Router di browser."

---

# BAGIAN 5 — Audit Lighthouse (72–84 menit)
> Syarat Tugas 4: **skor Accessibility minimal 90.**

## Cara menjalankan

`F12` → tab **Lighthouse** → mode **Navigation** → **Analyze page load**

> ⚠️ **Jalankan pada URL hasil deploy, bukan `localhost`.** Versi pengembangan jauh lebih lambat dan skornya tidak mencerminkan yang sebenarnya.

## Empat kategori, satu yang dinilai

| Kategori | Yang diukur | Dinilai di Tugas 4? |
|---|---|:--:|
| Performance | Kecepatan muat | Tidak |
| **Accessibility** | Bisa dipakai semua orang | **Ya, ≥ 90** |
| Best Practices | Kebiasaan umum | Tidak |
| SEO | Bisa ditemukan mesin pencari | Tidak |

## KENAPA Accessibility yang dijadikan syarat

> **CARA SAMPAIKAN:**
> "Kenapa yang ini yang saya nilai, bukan Performance?
>
> Karena Performance itu banyak dipengaruhi hal di luar kendali kalian — server, gambar, koneksi. Sedangkan **Accessibility itu murni hasil keputusan yang kalian ambil sendiri** waktu nulis kode.
>
> Dan lebih dari itu: Accessibility itu satu-satunya nilai di kelas ini yang **bisa diukur objektif**. Bukan pendapat saya soal rapi atau nggak rapi. Angkanya kelihatan."

## Lima temuan yang hampir pasti muncul — semuanya sudah diajarkan

Ini bagian yang membuat P1 terasa berbuah.

| Temuan Lighthouse | Diajarkan di |
|---|---|
| `<html>` tidak punya `lang` | **P1 Bagian 1** |
| Gambar tanpa `alt` | P1 Bagian 3 |
| Tombol/input tanpa nama yang terbaca | P1 Bagian 3 |
| Kontras warna kurang | P1 Bagian 4 |
| Urutan heading melompat (`h1` → `h3`) | P1 Bagian 3 |

> **CARA SAMPAIKAN:**
> "Perhatiin daftarnya. **Semuanya materi Pertemuan 1.**
>
> Waktu itu sebagian dari kalian mikir 'ngapain sih ribet-ribet nulis `lang="id"`, kan nggak keliatan'. Nah, delapan minggu kemudian, itu yang jadi angka di nilai tugas kalian.
>
> Ini bukan kebetulan. Aksesibilitas itu **paling murah dikerjain di awal, paling mahal kalau ditambal belakangan.**"

**Peragakan:** jalankan Lighthouse pada aplikasi contoh, buka satu temuan, klik untuk melihat elemen mana yang bermasalah, perbaiki, jalankan ulang.

---

# BAGIAN 6 — Git Collaboration Workflow (84–96 menit)

## Dari solo ke tim

Sejak P1 mereka memakai Git sendirian: satu cabang, satu orang, tidak pernah bentrok. Di Capstone mereka satu repositori dengan Backend, UI/UX, dan Android.

## Strategi branching

```
main      ← selalu bisa jalan. Ini yang di-deploy.
 └─ dev   ← tempat menggabung pekerjaan tim
     └─ feature/login    ← satu orang, satu fitur
     └─ feature/keranjang
```

> **CARA SAMPAIKAN — Analogi Dapur Restoran:**
> "`main` itu **piring yang disajikan ke tamu**. Nggak boleh ada yang setengah jadi di situ.
>
> `dev` itu **meja penyajian** — tempat semua masakan dikumpulin dan dicek sebelum keluar.
>
> `feature/...` itu **wajan masing-masing koki.** Kalian ngaduk sesuka hati di situ, nggak ganggu siapa-siapa."

## Merge conflict — peragakan, jangan cuma jelaskan

**Buat konflik sungguhan di depan kelas — 5 menit:**

1. Dua cabang mengubah baris yang sama di file yang sama
2. Merge → Git menandai konfliknya
3. Buka di VS Code — ada tombol **Accept Current / Incoming / Both**
4. Pilih, hapus penandanya, commit

> **CARA SAMPAIKAN:**
> "Merge conflict itu **bukan error**. Itu Git yang jujur: 'dua orang ngubah baris yang sama, dan saya nggak tahu mana yang bener. Kalian yang mutusin.'
>
> Yang sering kejadian: orang panik, hapus semua kerjaannya, mulai dari nol. **Jangan.**
>
> Dan ini penting buat Capstone: kalau kalian nggak yakin mana yang bener, **tanya orang yang nulis baris satunya.** Konflik itu masalah komunikasi, bukan masalah teknis."

## Budaya code review

> "Pull Request itu bukan formalitas. Itu tempat orang lain **baca kode kalian sebelum masuk**.
>
> Dan ingat prinsip yang kita pegang sejak awal: kalian dinilai dari apakah kode kalian **bisa dipertanggungjawabkan**. Code review itu latihannya.
>
> Waktu ngasih komentar ke PR temen, tanya '**kenapa**', jangan cuma bilang 'ini salah'. Sering kali dia punya alasan yang kalian belum tahu."

---

# BAGIAN 7 — Wawasan Testing (96–111 menit)
> 15 menit sesuai silabus. **Peserta melihat, tidak diminta menulis.**

## Mulai dari masalah yang sudah mereka alami

> "Angkat tangan yang pernah benerin satu hal, terus ada hal lain yang tadinya jalan jadi rusak — dan kalian baru sadar dua hari kemudian."

Biasanya banyak yang mengangkat tangan.

> "Nah, itu yang diselesaikan testing. Bukan buktiin kode kalian bener — tapi **mastiin yang tadinya jalan nggak ikut rusak** pas kalian ubah sesuatu."

## Contoh test — tunjukkan, jangan minta ditulis

```jsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TombolKeranjang from "./TombolKeranjang";

test("menambah jumlah saat diklik", async () => {
  render(<TombolKeranjang />);

  expect(screen.getByText("0 item")).toBeInTheDocument();

  await userEvent.click(screen.getByRole("button", { name: /tambah/i }));

  expect(screen.getByText("1 item")).toBeInTheDocument();
});
```

Bacakan sebagai kalimat: *"tampilkan komponennya · pastikan tulisannya 0 item · klik tombol Tambah · pastikan sekarang 1 item."*

> "Perhatiin: test-nya nggak nyebut satu pun nama variabel atau nama fungsi di dalam komponen. Dia cuma ngecek **yang dilihat dan dilakukan pengguna.**
>
> Makanya namanya *Testing Library* — filosofinya: uji kayak pengguna, bukan kayak programmer. Kalau kalian ganti nama variabel di dalam, test-nya tetep lewat. Kalau kalian rusak tampilannya, test-nya gagal."

## KENAPA tim produksi mensyaratkannya sebelum PR digabung

> **CARA SAMPAIKAN — Analogi Rem Tangan:**
> "Bayangin kalian benerin satu fitur di aplikasi yang punya dua ratus halaman. Gimana cara mastiin nggak ada yang rusak? Buka dua ratus halaman satu-satu?
>
> Test itu yang ngecek otomatis tiap kali ada yang mau digabung. Kalau ada yang rusak, PR-nya ditolak sebelum sampai ke pengguna.
>
> Bukan buat ngelambatin — justru bikin tim berani ngubah kode. Tanpa test, orang takut nyentuh kode lama, dan aplikasi jadi beku."

## Yang tidak diminta hari ini

> "Kalian **nggak** saya suruh nulis test di Tugas 4. Ini wawasan — supaya pas kalian masuk tim yang pakai test, kalian nggak bingung itu apa.
>
> Dan `screen.getByRole("button")` yang tadi — itu **cuma bisa nemuin tombol kalau HTML kalian bener.** Jadi kebiasaan semantic dari Pertemuan 1 itu kepake lagi di sini. Semuanya nyambung."

---

# BAGIAN 8 — Penutup & Kesiapan Capstone (111–120 menit)

## Rangkuman: benang merah delapan pertemuan

> "Hari ini temanya: **frontend nggak bisa nyimpen rahasia.** Token bisa dibaca, protected route cuma tirai, env var ikut kekirim. Itu bukan cacat — itu sifat kode yang jalan di komputer orang lain.
>
> Tapi kalau saya boleh nyebut satu hal dari delapan minggu ini, bukan itu.
>
> Delapan minggu lalu saya bilang: kalian nggak dibayar buat **ngetik kode**. Kalian dibayar buat **bertanggung jawab** atas kode.
>
> Semua yang kita pelajarin muaranya ke situ. `<nav>` bukan `<div>` — biar orang lain bisa baca. Alasan di komentar — biar orang lain paham. Lima status antarmuka — biar pengguna nggak bingung. Ukur sebelum optimasi — biar kalian nggak nebak.
>
> AI bisa nulis semua ini lebih cepet dari kalian. Yang nggak bisa dia lakuin: **berdiri di depan tim dan mempertanggungjawabkannya.**"

## Tugas 4 — sekarang lengkap

Dikumpulkan **paling lambat satu minggu setelah hari ini**, sebelum Capstone.

| Syarat | Diajarkan di |
|---|---|
| Global state + `persist` LocalStorage | P7 |
| Alur autentikasi lengkap | **Bagian 1** |
| Protected Route | **Bagian 2** |
| Alamat API lewat environment variable | **Bagian 3** |
| Berhasil di-deploy ke Vercel/Netlify | **Bagian 4** |
| **Lighthouse Accessibility ≥ 90** | **Bagian 5** |

**Yang dikumpulkan:** URL aplikasi yang bisa diakses publik · tautan repositori dengan riwayat commit rapi · `README` berisi deskripsi produk dan cara menjalankannya.

## Kesiapan Capstone

Sebut tiga hal yang berubah:

1. **Kalian tidak lagi sendirian di repositori.** Bagian 6 hari ini adalah persiapannya.
2. **Data tidak lagi dari API publik** — dari tim Backend, dan bentuknya harus disepakati bersama di Sprint 1.
3. **Desain tidak lagi bebas** — dari tim UI/UX lewat Figma.

> "Yang paling sering bikin tim Capstone macet itu bukan kodenya. Tapi **frontend dan backend yang beda asumsi soal bentuk data**, dan baru ketahuan tiga minggu kemudian.
>
> Makanya Sprint 1 itu ada penyelarasan kontrak data. Datang, dan bawa pertanyaan."

---

# LAMPIRAN A — Pertanyaan yang Pasti Muncul

**"Kalau LocalStorage nggak aman, kenapa banyak aplikasi pakai?"**
> Karena banyak aplikasi memilih kesederhanaan dan menerima risikonya — terutama aplikasi internal yang tidak menampilkan konten dari pihak luar. Yang salah bukan memakainya, tapi **memakainya tanpa tahu risikonya**. Kalau kalian tahu dan sadar memilih, itu keputusan teknik. Kalau tidak tahu, itu kecelakaan menunggu waktu.

**"Kalau Protected Route bukan keamanan, ngapain dibikin?"**
> Untuk pengalaman pengguna. Orang yang belum login tidak perlu melihat halaman dashboard kosong yang error di mana-mana — mereka diarahkan ke login. Itu berguna. Yang keliru cuma kalau kalian mengira itu **melindungi datanya**.

**"Env var saya `undefined`."**
> Dua penyebab, cek berurutan: (1) namanya tidak diawali `VITE_`, (2) memakai `process.env` bukan `import.meta.env`. Kalau keduanya sudah benar, **restart server dev** — Vite membaca `.env` hanya saat mulai.

**"Aplikasi saya berhasil di-deploy tapi datanya kosong."**
> Environment variable belum diisi di Vercel. Deploy tidak membaca `.env.local` kalian — file itu tidak ikut ter-push. Isi di Settings → Environment Variables, lalu deploy ulang.

**"Refresh di `/produk/7` jadi 404 setelah deploy."**
> Server mengira itu file. Vercel dengan preset Vite biasanya sudah menanganinya; kalau tidak, tambahkan `vercel.json` dengan aturan rewrite. Ini yang saya sebut akan muncul waktu di Pertemuan 5.

**"Skor Lighthouse saya rendah, gimana naikinnya?"**
> Jangan menebak — **klik temuannya**. Lighthouse menunjukkan persis elemen mana yang bermasalah dan apa yang harus diperbaiki. Yang paling sering: `lang` di `<html>`, `alt` di gambar, dan kontras warna. Ketiganya materi Pertemuan 1.

**"Merge conflict saya banyak banget, mending saya hapus branch-nya aja ya?"**
> Jangan. Konflik banyak biasanya tandanya cabang kalian terlalu lama tidak diperbarui dari `dev`. Kebiasaan yang benar: tarik dari `dev` **sering**, jangan menunggu selesai baru menggabung.

**"Boleh pakai AI buat Tugas 4?"**
> Boleh. Tapi ada satu hal yang **hampir selalu** AI lakukan di topik auth: **memberi kalian pola LocalStorage tanpa menyebut risikonya sama sekali.**
>
> Kalau kalian menerima itu tanpa sadar, kalian mengumpulkan kode yang sama dengan hari ini — tapi tanpa paham kenapa. Dan waktu saya tanya di review, kalian tidak bisa menjawab.
>
> **Menyebut sendiri bahwa "ini versi kelas, produksinya pakai HttpOnly cookie" itu nilai penuh.** Itu persis yang membedakan orang yang paham dari orang yang menyalin.

---

# LAMPIRAN B — Praktik Langsung

## Tiga peragaan kejujuran — jangan dilewati

| Peragaan | Caranya | Waktu |
|---|---|:--:|
| Token bisa dibaca | Console → `localStorage.getItem("token")` | 30 detik |
| Protected Route bukan keamanan | Salin URL API dari Network, buka di tab baru tanpa login | 1 menit |
| Env var ikut terkirim | `npm run build` → cari nilainya di `dist/assets/*.js` | 2 menit |

## Lighthouse

| Yang dilakukan | Catatan |
|---|---|
| Jalankan di **URL hasil deploy** | Bukan `localhost` — hasilnya berbeda jauh |
| Mode **Navigation** | Yang mengukur muat halaman |
| Klik tiap temuan | Menunjukkan elemen persisnya |
| Jalankan ulang setelah perbaikan | Lihat angkanya naik |

## Git

| Perintah | Gunanya |
|---|---|
| `git checkout -b feature/nama` | Cabang baru untuk satu fitur |
| `git pull origin dev` | Tarik pekerjaan tim — **lakukan sering** |
| `git merge dev` | Gabungkan ke cabang kalian |
| `git status` | Saat bingung, ini yang pertama dibuka |

---

# LAMPIRAN C — Tips & Kebiasaan untuk Ditanamkan

**1. Uji hasil build sebelum deploy.** `npm run preview` — yang jalan di dev belum tentu jalan di produksi.

**2. `.env` tidak pernah masuk Git. `.env.example` selalu masuk.**

**3. Tarik dari `dev` sering, jangan menunggu selesai.** Konflik kecil yang sering jauh lebih mudah daripada konflik besar sekali.

**4. Jalankan Lighthouse sebelum mengumpulkan, bukan setelah dinilai.**

**5. Saat menerima kode auth dari AI, tanyakan sendiri: token disimpan di mana, dan apa risikonya.**

**6. Di Capstone, tanyakan bentuk data ke Backend sebelum menulis komponen.** Bukan sesudah.

---

# LAMPIRAN D — Tiga Kesalahan Mentor Baru di P8

**1. Melewati tiga momen kejujuran karena kejar waktu.**
Ini kesalahan paling mahal di seluruh program, karena akibatnya tidak terlihat di kelas — terlihatnya di tempat kerja mereka nanti. Peserta yang lulus mengira Protected Route itu keamanan akan membangun sistem yang bocor. Kalau harus memotong, potong deploy atau testing.

**2. Mengajarkan LocalStorage tanpa menyebut alternatifnya, atau sebaliknya — membuat LocalStorage terdengar seperti kesalahan.**
Keduanya keliru. Yang benar: ini **versi kelas yang sadar**, dipilih karena cara yang benar butuh kerja sama backend. Beri mereka kalimat yang bisa dipakai di kantor: *"refresh token-nya di cookie HttpOnly kan?"*

**3. Menjadikan Lighthouse sekadar syarat administratif.**
Kalau cuma disampaikan sebagai "kejar angka 90", peserta akan menambal seadanya. Tunjukkan bahwa **lima temuan yang paling sering muncul semuanya materi Pertemuan 1** — itu yang membuat mereka mengerti kenapa aksesibilitas diajarkan sejak awal.

---

# LAMPIRAN E — Checklist Persiapan Anda

**H-3 sebelum kelas:**
- [ ] **Minta peserta membuat akun Vercel atau Netlify** dan menghubungkannya ke GitHub — jangan sampai dikerjakan hari-H
- [ ] Ingatkan Tugas 3 sudah dikumpulkan
- [ ] Siapkan **API auth** yang bisa dipakai kelas. Kalau tidak ada backend, `https://dummyjson.com/auth/login` menyediakan login contoh — uji dari nol
- [ ] Baca [materi ini](P8-Materi-Mentor-Frontend-Auth-Deploy.md), **terutama tiga momen kejujuran**

**H-1:**
- [ ] **Deploy satu aplikasi contoh ke Vercel sampai selesai** — supaya Anda tahu persis langkah dan kendalanya
- [ ] Latih tiga peragaan kejujuran sampai lancar
- [ ] Jalankan Lighthouse pada aplikasi contoh, catat temuannya untuk dibahas
- [ ] **Siapkan repositori latihan dengan dua cabang yang bentrok** untuk peragaan merge conflict
- [ ] Siapkan aplikasi Tugas 3 peserta untuk ditampilkan di pembuka

**Hari-H:**
- [ ] Editor + browser + DevTools (Console, Network, Lighthouse) siap
- [ ] Akun Vercel Anda sudah login di browser yang dipakai mengajar
- [ ] Sediakan waktu di akhir untuk pertanyaan Capstone — ini pertemuan terakhir mereka bersama Anda sebelum sprint

---

*Dokumen ini disiapkan untuk Pertemuan 8 — Metro Institute Season 2, Divisi Frontend.*
