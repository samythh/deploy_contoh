# Semua Kode Tahap, Pertemuan 8 (video)

Satu file berisi semua kode per segmen, untuk disalin saat merekam. Isinya sama persis dengan file-file di folder `kode-tahap/` dan sudah diuji berurutan (19 November 2026) dari proyek awal `../praktik-p8/warung-minang-awal.zip` sampai proyek jadi.

Cara pakai: cari segmennya, lalu salin setiap blok ke file yang tertulis di judulnya. **Ganti seluruh isi file**, kecuali yang ditandai "tambahkan" atau "ubah sendiri".

| Segmen | Isi | Slide |
|---|---|---|
| 1 | Favorit yang bertahan (localStorage) | 4–8 |
| 2 | Server latihan, AuthContext, halaman masuk dan daftar | 9–16 |
| 3 | Halaman /admin terkunci, token di header, Navbar dan Kartu | 17–23 |
| 4 | Alamat server dari .env.local, vercel.json | 24–28 |

---
---

## SEGMEN 1: DATA YANG BERTAHAN

### `src/FavoritContext.jsx`

Sumber: `kode-tahap/segmen1-FavoritContext.jsx`

```jsx
import { createContext, useContext, useState } from "react";

// Papan bersama untuk daftar favorit. null adalah isi papan kalau Provider lupa dipasang.
const FavoritContext = createContext(null);

// localStorage hanya bisa menyimpan teks. Kalau belum pernah disimpan, hasilnya null.
function bacaFavorit() {
  const teks = localStorage.getItem("favorit");
  if (teks === null) {
    return [];
  }
  // Teks "[1,5]" dikembalikan menjadi array [1, 5].
  return JSON.parse(teks);
}

export function FavoritProvider({ children }) {
  // Yang disimpan hanya id menu, misalnya [1, 5]. Nama dan harga tetap diambil dari server.
  const [daftarFavorit, setDaftarFavorit] = useState(bacaFavorit());

  // Setiap perubahan disimpan ke dua tempat: state dan localStorage.
  function simpanFavorit(daftarBaru) {
    setDaftarFavorit(daftarBaru);
    localStorage.setItem("favorit", JSON.stringify(daftarBaru));
  }

  function ubahFavorit(id) {
    if (daftarFavorit.includes(id)) {
      // Sudah favorit: buang. .filter membuat array baru, tidak mengubah yang lama.
      simpanFavorit(daftarFavorit.filter((idFavorit) => idFavorit !== id));
    } else {
      // Belum favorit: tambahkan. Array baru, sama seperti menambah menu di Pertemuan 6.
      simpanFavorit([...daftarFavorit, id]);
    }
  }

  const nilai = { daftarFavorit: daftarFavorit, ubahFavorit: ubahFavorit };
  return <FavoritContext value={nilai}>{children}</FavoritContext>;
}

// Hook buatan sendiri, supaya komponen lain cukup menulis useFavorit().
export function useFavorit() {
  return useContext(FavoritContext);
}
```

**Cek:** tandai dua menu, tekan F5. Navbar tetap Favorit (2). Tab Application → Local Storage berisi `favorit`: `[1,5]`.

---
---

## SEGMEN 2: DAFTAR DAN MASUK

### Terminal

Matikan dulu `npx json-server --watch db.json --port 3001` (Ctrl+C), lalu:

```
npm install json-server-auth@2.1.0
```

Peringatan `2 vulnerabilities (1 moderate, 1 high)` setelah memasang itu diharapkan.

### `routes.json`

File baru di folder paling luar, sejajar dengan `db.json`.

Sumber: `kode-tahap/routes.json`

```json
{
  "menu": 664,
  "users": 600
}
```

### `db.json` (ubah sendiri)

Tambahkan daftar `users` kosong setelah daftar menu. Jangan lupa koma setelah `]` milik menu.

```json
{
  "menu": [ ... enam menu, tidak berubah ... ],
  "users": []
}
```

### `package.json` (tambahkan satu baris)

Di dalam `"scripts"`:

```json
"server": "json-server-auth db.json --port 3001 --watch -r routes.json"
```

Lalu di terminal kedua:

```
npm run server
```

### `src/AuthContext.jsx`

File baru.

Sumber: `kode-tahap/AuthContext.jsx`

```jsx
import { createContext, useContext, useState } from "react";

// Papan kedua, sama polanya dengan FavoritContext: siapa yang sedang masuk.
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // Dibaca dari localStorage saat aplikasi dibuka, supaya status masuk tidak hilang setelah refresh.
  // null artinya belum masuk.
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [email, setEmail] = useState(localStorage.getItem("email"));

  function masuk(tokenBaru, emailBaru) {
    // Disimpan di dua tempat: state (supaya tampilan berubah) dan localStorage (supaya bertahan).
    // Catatan: localStorage bisa dibaca JavaScript apa pun di halaman ini, termasuk kode jahat (XSS).
    // Cukup untuk latihan, bukan cara aplikasi sungguhan menyimpan token.
    localStorage.setItem("token", tokenBaru);
    localStorage.setItem("email", emailBaru);
    setToken(tokenBaru);
    setEmail(emailBaru);
  }

  function keluar() {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setToken(null);
    setEmail(null);
  }

  const nilai = { token: token, email: email, masuk: masuk, keluar: keluar };
  return <AuthContext value={nilai}>{children}</AuthContext>;
}

export function useAuth() {
  return useContext(AuthContext);
}
```

### `src/main.jsx`

Sumber: `kode-tahap/main.jsx`

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { AuthProvider } from './AuthContext.jsx'
import { FavoritProvider } from './FavoritContext.jsx'
import './index.css'
import App from './App.jsx'

// BrowserRouter membuat seluruh aplikasi bisa membaca alamat di browser.
// AuthProvider dan FavoritProvider membuat seluruh aplikasi bisa membaca siapa yang masuk dan daftar favorit.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <FavoritProvider>
          <App />
        </FavoritProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
```

### `src/alamat.js`

Versi sementara: alamat masih ditulis langsung. Diganti lagi di segmen 4.

Sumber: `kode-tahap/segmen2-alamat.js`

```js
export const ALAMAT_API = "http://localhost:3001/menu";
export const ALAMAT_MASUK = "http://localhost:3001/login";
export const ALAMAT_DAFTAR = "http://localhost:3001/register";
```

### `src/pages/HalamanMasuk.jsx`

File baru. Setelah berhasil masuk, sementara pindah ke `/` (halaman admin baru dibuat di segmen 3).

Sumber: `kode-tahap/segmen2-HalamanMasuk.jsx`

```jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ALAMAT_MASUK } from "../alamat.js";
import { useAuth } from "../AuthContext.jsx";

function HalamanMasuk() {
  const [email, setEmail] = useState("");
  const [kataSandi, setKataSandi] = useState("");
  const [pesan, setPesan] = useState("");
  const { masuk } = useAuth();
  const navigate = useNavigate();

  async function kirim(e) {
    e.preventDefault();
    setPesan("");
    try {
      // POST, bukan GET: kata sandi dikirim di body, tidak ikut tercatat di alamat.
      const respon = await fetch(ALAMAT_MASUK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: kataSandi }),
      });
      // 400: email tidak terdaftar atau kata sandi salah. Pesannya sengaja tidak membedakan keduanya.
      if (respon.status === 400) {
        setPesan("Email atau kata sandi salah.");
        return;
      }
      if (!respon.ok) {
        throw new Error("Server menjawab " + respon.status);
      }
      const data = await respon.json();
      // Server menjawab dengan accessToken: tanda pengenal yang dibawa di setiap permintaan berikutnya.
      masuk(data.accessToken, email);
      navigate("/");
    } catch {
      setPesan("Server tidak menjawab. Pastikan json-server-auth menyala.");
    }
  }

  // Pesan hanya tampil kalau ada isinya, sama seperti label "Habis" di Kartu.
  let teksPesan = null;
  if (pesan !== "") {
    teksPesan = <p className="text-sm text-red-700">{pesan}</p>;
  }

  return (
    <section className="max-w-sm">
      <h2 className="text-2xl font-bold mb-4">Masuk</h2>
      <form onSubmit={kirim} className="flex flex-col gap-3 p-5 bg-white border border-gray-200 rounded-lg">
        <label className="flex flex-col gap-1 text-sm">
          Email
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-lg" />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          Kata sandi
          {/* type="password": isinya disamarkan di layar, tapi tetap terkirim apa adanya */}
          <input type="password" required value={kataSandi} onChange={(e) => setKataSandi(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-lg" />
        </label>
        <button type="submit" className="px-4 py-2 rounded-lg bg-green-800 text-white">Masuk</button>
        {teksPesan}
      </form>
      <p className="mt-3 text-sm">Belum punya akun? <Link to="/daftar" className="text-green-800 underline">Daftar</Link></p>
    </section>
  );
}

export default HalamanMasuk;
```

### `src/pages/HalamanDaftar.jsx`

File baru.

Sumber: `kode-tahap/segmen2-HalamanDaftar.jsx`

```jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ALAMAT_DAFTAR } from "../alamat.js";
import { useAuth } from "../AuthContext.jsx";

// Polanya sama dengan HalamanMasuk. Bedanya hanya alamat yang dituju dan pesan saat ditolak.
function HalamanDaftar() {
  const [email, setEmail] = useState("");
  const [kataSandi, setKataSandi] = useState("");
  const [pesan, setPesan] = useState("");
  const { masuk } = useAuth();
  const navigate = useNavigate();

  async function kirim(e) {
    e.preventDefault();
    setPesan("");
    try {
      const respon = await fetch(ALAMAT_DAFTAR, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: kataSandi }),
      });
      // 400: email sudah terdaftar, atau kata sandi terlalu pendek (minimal 4 huruf di server latihan ini).
      if (respon.status === 400) {
        const alasan = await respon.json();
        setPesan("Pendaftaran ditolak server: " + alasan);
        return;
      }
      if (!respon.ok) {
        throw new Error("Server menjawab " + respon.status);
      }
      // Setelah mendaftar, server langsung memberi token, jadi pengguna tidak perlu masuk lagi.
      const data = await respon.json();
      masuk(data.accessToken, email);
      navigate("/");
    } catch {
      setPesan("Server tidak menjawab. Pastikan json-server-auth menyala.");
    }
  }

  let teksPesan = null;
  if (pesan !== "") {
    teksPesan = <p className="text-sm text-red-700">{pesan}</p>;
  }

  return (
    <section className="max-w-sm">
      <h2 className="text-2xl font-bold mb-4">Daftar</h2>
      <form onSubmit={kirim} className="flex flex-col gap-3 p-5 bg-white border border-gray-200 rounded-lg">
        <label className="flex flex-col gap-1 text-sm">
          Email
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-lg" />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          Kata sandi
          <input type="password" required value={kataSandi} onChange={(e) => setKataSandi(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-lg" />
        </label>
        <button type="submit" className="px-4 py-2 rounded-lg bg-green-800 text-white">Daftar</button>
        {teksPesan}
      </form>
      <p className="mt-3 text-sm">Sudah punya akun? <Link to="/masuk" className="text-green-800 underline">Masuk</Link></p>
    </section>
  );
}

export default HalamanDaftar;
```

### `src/App.jsx`

Sumber: `kode-tahap/segmen2-App.jsx`

```jsx
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar.jsx";
import HalamanMenu from "./pages/HalamanMenu.jsx";
import HalamanDetail from "./pages/HalamanDetail.jsx";
import HalamanFavorit from "./pages/HalamanFavorit.jsx";
import HalamanMasuk from "./pages/HalamanMasuk.jsx";
import HalamanDaftar from "./pages/HalamanDaftar.jsx";
import HalamanTidakDitemukan from "./pages/HalamanTidakDitemukan.jsx";

// App sekarang hanya kerangka: Navbar dan footer tampil di semua halaman,
// dan bagian tengahnya berganti mengikuti alamat.
function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header>
        <Navbar />
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10">
        <Routes>
          <Route path="/" element={<HalamanMenu />} />
          {/* :id artinya "bagian ini boleh berisi apa saja", misalnya /menu/1 atau /menu/7 */}
          <Route path="/menu/:id" element={<HalamanDetail />} />
          <Route path="/favorit" element={<HalamanFavorit />} />
          <Route path="/masuk" element={<HalamanMasuk />} />
          <Route path="/daftar" element={<HalamanDaftar />} />
          {/* Tanda * menangkap semua alamat yang tidak cocok dengan baris di atasnya */}
          <Route path="*" element={<HalamanTidakDitemukan />} />
        </Routes>
      </main>

      <footer id="kontak" className="px-6 py-6 text-center text-sm text-gray-500 border-t border-gray-200">
        <p>Jl. Contoh No. 1, Padang</p>
      </footer>
    </div>
  );
}

export default App;
```

**Cek:** daftar dengan kata sandi `abc` → "Password is too short". Dengan `rendang123` → pindah ke `/`, tab Application berisi `token`. Lalu tambah menu di halaman utama → alert "Menu gagal ditambahkan", Network: `menu` **401**. Itu yang diperbaiki di segmen 3.

---
---

## SEGMEN 3: HALAMAN TERKUNCI

### `src/components/RuteTerlindungi.jsx`

File baru.

Sumber: `kode-tahap/RuteTerlindungi.jsx`

```jsx
import { Navigate } from "react-router";
import { useAuth } from "../AuthContext.jsx";

// Penjaga pintu: halaman di dalamnya hanya tampil kalau sudah masuk.
// Ini mengatur tampilan, bukan keamanan. Yang benar-benar menolak adalah server (jawaban 401).
function RuteTerlindungi({ children }) {
  const { token } = useAuth();
  if (!token) {
    // replace: halaman yang ditolak tidak masuk riwayat, jadi tombol Back tidak memutar ke sini lagi.
    return <Navigate to="/masuk" replace />;
  }
  return children;
}

export default RuteTerlindungi;
```

### `src/pages/HalamanAdmin.jsx`

File baru.

Sumber: `kode-tahap/HalamanAdmin.jsx`

```jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Kartu from "../components/Kartu.jsx";
import FormTambah from "../components/FormTambah.jsx";
import { ALAMAT_API } from "../alamat.js";
import { useAuth } from "../AuthContext.jsx";
import { useFavorit } from "../FavoritContext.jsx";

// Halaman pengelola: menambah dan menghapus menu. Hanya bisa dibuka setelah masuk (lihat App.jsx).
function HalamanAdmin() {
  const [daftarMenu, setDaftarMenu] = useState([]);
  const [status, setStatus] = useState("memuat");
  const { token, keluar } = useAuth();
  const { daftarFavorit, ubahFavorit } = useFavorit();
  const navigate = useNavigate();

  // Membaca menu tidak butuh token: semua orang boleh membaca.
  useEffect(() => {
    async function ambilMenu() {
      try {
        const respon = await fetch(ALAMAT_API);
        if (!respon.ok) {
          throw new Error("Server menjawab " + respon.status);
        }
        const data = await respon.json();
        setDaftarMenu(data);
        setStatus("berhasil");
      } catch {
        setStatus("gagal");
      }
    }
    ambilMenu();
  }, []);

  // 401 artinya server tidak menerima token kita: belum ada, salah, atau sudah kedaluwarsa (1 jam).
  // Token yang ditolak tidak ada gunanya disimpan, jadi kita keluar dan minta masuk lagi.
  function tanganiDitolak() {
    alert("Sesi kamu sudah berakhir. Silakan masuk lagi.");
    keluar();
    navigate("/masuk");
  }

  async function tambahMenu(menuBaru) {
    try {
      const respon = await fetch(ALAMAT_API, {
        method: "POST",
        // Authorization membawa token. Tanpa baris ini server menjawab 401.
        headers: { "Content-Type": "application/json", Authorization: "Bearer " + token },
        body: JSON.stringify(menuBaru),
      });
      if (respon.status === 401) {
        tanganiDitolak();
        return false;
      }
      if (!respon.ok) {
        throw new Error("Server menjawab " + respon.status);
      }
      const menuTersimpan = await respon.json();
      setDaftarMenu([...daftarMenu, menuTersimpan]);
      return true;
    } catch {
      alert("Menu gagal ditambahkan. Pastikan server menyala, lalu coba lagi.");
      return false;
    }
  }

  async function hapusMenu(item) {
    if (!confirm("Hapus " + item.nama + "?")) {
      return;
    }
    try {
      const respon = await fetch(ALAMAT_API + "/" + item.id, {
        method: "DELETE",
        headers: { Authorization: "Bearer " + token },
      });
      if (respon.status === 401) {
        tanganiDitolak();
        return;
      }
      if (!respon.ok) {
        throw new Error("Server menjawab " + respon.status);
      }
      setDaftarMenu(daftarMenu.filter((menu) => menu.id !== item.id));
      // Menu yang sudah dihapus tidak boleh tertinggal di daftar favorit.
      if (daftarFavorit.includes(item.id)) {
        ubahFavorit(item.id);
      }
    } catch {
      alert("Menu gagal dihapus. Pastikan server menyala, lalu coba lagi.");
    }
  }

  let isi;
  if (status === "memuat") {
    isi = <p className="text-gray-500">Memuat menu...</p>;
  } else if (status === "gagal") {
    isi = <p className="text-red-700">Menu gagal dimuat. Coba muat ulang halaman.</p>;
  } else if (daftarMenu.length === 0) {
    isi = <p className="text-gray-500">Belum ada menu. Tambahkan lewat form di atas.</p>;
  } else {
    isi = (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {daftarMenu.map((item) => (
          <Kartu key={item.id} item={item} onHapus={() => hapusMenu(item)} />
        ))}
      </div>
    );
  }

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Kelola Menu</h2>
      <FormTambah onTambah={tambahMenu} />
      {isi}
    </section>
  );
}

export default HalamanAdmin;
```

### `src/pages/HalamanMenu.jsx`

Sekarang hanya membaca: tanpa form tambah dan tanpa hapus.

Sumber: `kode-tahap/segmen3-HalamanMenu.jsx`

```jsx
import { useState, useEffect } from "react";
import Kartu from "../components/Kartu.jsx";
import TombolFilter from "../components/TombolFilter.jsx";
import { ALAMAT_API } from "../alamat.js";

// Halaman untuk pengunjung: hanya membaca. Menambah dan menghapus pindah ke halaman admin.
function HalamanMenu() {
  // Data datang dari server, jadi disimpan di state (awalnya kosong).
  const [daftarMenu, setDaftarMenu] = useState([]);
  // Tiga keadaan pengambilan data: "memuat", "berhasil", atau "gagal".
  const [status, setStatus] = useState("memuat");
  const [kategori, setKategori] = useState("Semua");
  // Isi kotak pencarian juga state, supaya daftar ikut berubah setiap huruf diketik.
  const [kataKunci, setKataKunci] = useState("");

  // [] di akhir: jalankan sekali saja saat halaman ini pertama kali tampil, bukan setiap digambar ulang.
  useEffect(() => {
    async function ambilMenu() {
      try {
        const respon = await fetch(ALAMAT_API);
        if (!respon.ok) {
          throw new Error("Server menjawab " + respon.status);
        }
        const data = await respon.json();
        setDaftarMenu(data);
        setStatus("berhasil");
      } catch {
        setStatus("gagal");
      }
    }
    ambilMenu();
  }, []);

  // daftarTampil tetap bukan state: dihitung dari daftarMenu, kategori, dan kataKunci.
  let daftarTampil = daftarMenu;
  if (kategori !== "Semua") {
    daftarTampil = daftarTampil.filter((item) => item.kategori === kategori);
  }
  if (kataKunci !== "") {
    // toLowerCase di dua sisi supaya "rendang" tetap menemukan "Rendang"
    daftarTampil = daftarTampil.filter((item) =>
      item.nama.toLowerCase().includes(kataKunci.toLowerCase())
    );
  }

  // Teks jumlah baru masuk akal setelah data sampai; sebelum itu tidak ditampilkan (null)
  let teksJumlah = null;
  if (status === "berhasil") {
    teksJumlah = (
      <p className="text-sm text-gray-500 mb-2">
        Menampilkan {daftarTampil.length} dari {daftarMenu.length} menu
      </p>
    );
  }

  // Satu tempat yang memutuskan apa yang tampil di bawah tombol
  let isi;
  if (status === "memuat") {
    isi = <p className="text-gray-500">Memuat menu...</p>;
  } else if (status === "gagal") {
    isi = <p className="text-red-700">Menu gagal dimuat. Coba muat ulang halaman.</p>;
  } else if (daftarTampil.length === 0) {
    isi = <p className="text-gray-500">Tidak ada menu yang cocok.</p>;
  } else {
    isi = (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {daftarTampil.map((item) => (
          // Tanpa onHapus: pengunjung tidak melihat tombol Hapus.
          <Kartu key={item.id} item={item} />
        ))}
      </div>
    );
  }

  return (
    <section id="menu">
      <h2 className="text-2xl font-bold mb-4">Menu Kami</h2>

      <input
        type="text"
        value={kataKunci}
        onChange={(e) => setKataKunci(e.target.value)}
        placeholder="Cari menu..."
        className="w-full md:w-80 mb-4 px-4 py-2 border border-gray-300 rounded-lg"
      />

      <div className="flex gap-2 mb-4">
        <TombolFilter teks="Semua" aktif={kategori === "Semua"} onPilih={() => setKategori("Semua")} />
        <TombolFilter teks="Makanan" aktif={kategori === "Makanan"} onPilih={() => setKategori("Makanan")} />
        <TombolFilter teks="Minuman" aktif={kategori === "Minuman"} onPilih={() => setKategori("Minuman")} />
      </div>

      {teksJumlah}
      {isi}
    </section>
  );
}

export default HalamanMenu;
```

### `src/components/Kartu.jsx`

Sumber: `kode-tahap/Kartu.jsx`

```jsx
import { Link } from "react-router";

// Satu object menu -> satu kartu (sama seperti buatKartu di Pertemuan 3).
// item diterima lewat props, jadi satu komponen ini bisa menampilkan menu apa pun.
// onHapus juga props: Kartu tidak menghapus sendiri, ia hanya melapor ke halaman yang memakainya.
function Kartu({ item, onHapus }) {
  // null artinya "tidak menampilkan apa-apa", dipakai untuk menu yang masih tersedia
  let label = null;
  if (item.tersedia === false) {
    label = <span className="text-xs font-semibold text-red-700">Habis</span>;
  }

  // Tombol Hapus hanya muncul kalau halaman memberi onHapus.
  // Halaman menu untuk pengunjung tidak memberinya; halaman admin memberinya.
  let tombolHapus = null;
  if (onHapus) {
    tombolHapus = (
      <button onClick={onHapus} className="self-start mt-2 text-sm text-red-700 hover:underline">
        Hapus
      </button>
    );
  }

  return (
    <article className="flex flex-col gap-1 p-5 bg-white border border-gray-200 rounded-lg">
      <h3 className="text-lg font-semibold">
        {/* Alamat detail dibuat dari id, karena id unik dan tidak pernah berubah */}
        <Link to={"/menu/" + item.id} className="hover:underline">{item.nama}</Link>
      </h3>
      <p className="text-sm text-gray-500">{item.kategori}</p>
      <p className="mt-2 font-bold text-green-800">Rp{item.harga.toLocaleString("id-ID")}</p>
      {label}
      {tombolHapus}
    </article>
  );
}

export default Kartu;
```

### `src/components/Navbar.jsx`

Sumber: `kode-tahap/Navbar.jsx`

```jsx
import { Link } from "react-router";
import { useFavorit } from "../FavoritContext.jsx";
import { useAuth } from "../AuthContext.jsx";

// Navbar dijadikan komponen sendiri supaya App.jsx tetap pendek
// dan kalau navbar bermasalah, kita langsung tahu file mana yang dibuka.
function Navbar() {
  // Navbar tidak menerima props apa pun. Jumlah favorit dan status masuk dibaca langsung dari Context.
  const { daftarFavorit } = useFavorit();
  const { token, email, keluar } = useAuth();

  // Bagian kanan Navbar berbeda untuk pengunjung dan pengelola.
  let bagianAkun = <Link to="/masuk">Masuk</Link>;
  if (token) {
    bagianAkun = (
      <>
        <Link to="/admin">Kelola Menu</Link>
        <span className="text-green-200">{email}</span>
        {/* Keluar cukup menghapus token. Kalau sedang di /admin, penjaganya sendiri yang mengarahkan ke /masuk. */}
        <button onClick={keluar} className="underline">Keluar</button>
      </>
    );
  }

  return (
    <nav className="flex flex-wrap items-center justify-between gap-2 px-6 py-4 bg-green-800 text-white">
      {/* Link, bukan <a href>: pindah halaman tanpa memuat ulang, jadi state tidak hilang */}
      <Link to="/" className="text-xl font-bold">Warung Minang</Link>
      <div className="flex flex-wrap gap-4 text-sm">
        <Link to="/">Menu</Link>
        <Link to="/favorit">Favorit ({daftarFavorit.length})</Link>
        {bagianAkun}
      </div>
    </nav>
  );
}

export default Navbar;
```

### `src/App.jsx`

Sumber: `kode-tahap/segmen3-App.jsx`

```jsx
import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar.jsx";
import RuteTerlindungi from "./components/RuteTerlindungi.jsx";
import HalamanMenu from "./pages/HalamanMenu.jsx";
import HalamanDetail from "./pages/HalamanDetail.jsx";
import HalamanFavorit from "./pages/HalamanFavorit.jsx";
import HalamanMasuk from "./pages/HalamanMasuk.jsx";
import HalamanDaftar from "./pages/HalamanDaftar.jsx";
import HalamanAdmin from "./pages/HalamanAdmin.jsx";
import HalamanTidakDitemukan from "./pages/HalamanTidakDitemukan.jsx";

// App sekarang hanya kerangka: Navbar dan footer tampil di semua halaman,
// dan bagian tengahnya berganti mengikuti alamat.
function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header>
        <Navbar />
      </header>

      <main className="max-w-5xl mx-auto px-6 py-10">
        <Routes>
          <Route path="/" element={<HalamanMenu />} />
          {/* :id artinya "bagian ini boleh berisi apa saja", misalnya /menu/1 atau /menu/7 */}
          <Route path="/menu/:id" element={<HalamanDetail />} />
          <Route path="/favorit" element={<HalamanFavorit />} />
          <Route path="/masuk" element={<HalamanMasuk />} />
          <Route path="/daftar" element={<HalamanDaftar />} />
          {/* HalamanAdmin dibungkus penjaga: belum masuk, diarahkan ke /masuk */}
          <Route path="/admin" element={<RuteTerlindungi><HalamanAdmin /></RuteTerlindungi>} />
          {/* Tanda * menangkap semua alamat yang tidak cocok dengan baris di atasnya */}
          <Route path="*" element={<HalamanTidakDitemukan />} />
        </Routes>
      </main>

      <footer id="kontak" className="px-6 py-6 text-center text-sm text-gray-500 border-t border-gray-200">
        <p>Jl. Contoh No. 1, Padang</p>
      </footer>
    </div>
  );
}

export default App;
```

### `src/pages/HalamanMasuk.jsx`

Satu baris berubah dari segmen 2: `navigate("/admin")`.

Sumber: `kode-tahap/segmen3-HalamanMasuk.jsx`

```jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ALAMAT_MASUK } from "../alamat.js";
import { useAuth } from "../AuthContext.jsx";

function HalamanMasuk() {
  const [email, setEmail] = useState("");
  const [kataSandi, setKataSandi] = useState("");
  const [pesan, setPesan] = useState("");
  const { masuk } = useAuth();
  const navigate = useNavigate();

  async function kirim(e) {
    e.preventDefault();
    setPesan("");
    try {
      // POST, bukan GET: kata sandi dikirim di body, tidak ikut tercatat di alamat.
      const respon = await fetch(ALAMAT_MASUK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: kataSandi }),
      });
      // 400: email tidak terdaftar atau kata sandi salah. Pesannya sengaja tidak membedakan keduanya.
      if (respon.status === 400) {
        setPesan("Email atau kata sandi salah.");
        return;
      }
      if (!respon.ok) {
        throw new Error("Server menjawab " + respon.status);
      }
      const data = await respon.json();
      // Server menjawab dengan accessToken: tanda pengenal yang dibawa di setiap permintaan berikutnya.
      masuk(data.accessToken, email);
      navigate("/admin");
    } catch {
      setPesan("Server tidak menjawab. Pastikan json-server-auth menyala.");
    }
  }

  // Pesan hanya tampil kalau ada isinya, sama seperti label "Habis" di Kartu.
  let teksPesan = null;
  if (pesan !== "") {
    teksPesan = <p className="text-sm text-red-700">{pesan}</p>;
  }

  return (
    <section className="max-w-sm">
      <h2 className="text-2xl font-bold mb-4">Masuk</h2>
      <form onSubmit={kirim} className="flex flex-col gap-3 p-5 bg-white border border-gray-200 rounded-lg">
        <label className="flex flex-col gap-1 text-sm">
          Email
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-lg" />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          Kata sandi
          {/* type="password": isinya disamarkan di layar, tapi tetap terkirim apa adanya */}
          <input type="password" required value={kataSandi} onChange={(e) => setKataSandi(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-lg" />
        </label>
        <button type="submit" className="px-4 py-2 rounded-lg bg-green-800 text-white">Masuk</button>
        {teksPesan}
      </form>
      <p className="mt-3 text-sm">Belum punya akun? <Link to="/daftar" className="text-green-800 underline">Daftar</Link></p>
    </section>
  );
}

export default HalamanMasuk;
```

### `src/pages/HalamanDaftar.jsx`

Satu baris berubah dari segmen 2: `navigate("/admin")`.

Sumber: `kode-tahap/segmen3-HalamanDaftar.jsx`

```jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ALAMAT_DAFTAR } from "../alamat.js";
import { useAuth } from "../AuthContext.jsx";

// Polanya sama dengan HalamanMasuk. Bedanya hanya alamat yang dituju dan pesan saat ditolak.
function HalamanDaftar() {
  const [email, setEmail] = useState("");
  const [kataSandi, setKataSandi] = useState("");
  const [pesan, setPesan] = useState("");
  const { masuk } = useAuth();
  const navigate = useNavigate();

  async function kirim(e) {
    e.preventDefault();
    setPesan("");
    try {
      const respon = await fetch(ALAMAT_DAFTAR, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: kataSandi }),
      });
      // 400: email sudah terdaftar, atau kata sandi terlalu pendek (minimal 4 huruf di server latihan ini).
      if (respon.status === 400) {
        const alasan = await respon.json();
        setPesan("Pendaftaran ditolak server: " + alasan);
        return;
      }
      if (!respon.ok) {
        throw new Error("Server menjawab " + respon.status);
      }
      // Setelah mendaftar, server langsung memberi token, jadi pengguna tidak perlu masuk lagi.
      const data = await respon.json();
      masuk(data.accessToken, email);
      navigate("/admin");
    } catch {
      setPesan("Server tidak menjawab. Pastikan json-server-auth menyala.");
    }
  }

  let teksPesan = null;
  if (pesan !== "") {
    teksPesan = <p className="text-sm text-red-700">{pesan}</p>;
  }

  return (
    <section className="max-w-sm">
      <h2 className="text-2xl font-bold mb-4">Daftar</h2>
      <form onSubmit={kirim} className="flex flex-col gap-3 p-5 bg-white border border-gray-200 rounded-lg">
        <label className="flex flex-col gap-1 text-sm">
          Email
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-lg" />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          Kata sandi
          <input type="password" required value={kataSandi} onChange={(e) => setKataSandi(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-lg" />
        </label>
        <button type="submit" className="px-4 py-2 rounded-lg bg-green-800 text-white">Daftar</button>
        {teksPesan}
      </form>
      <p className="mt-3 text-sm">Sudah punya akun? <Link to="/masuk" className="text-green-800 underline">Masuk</Link></p>
    </section>
  );
}

export default HalamanDaftar;
```

**Cek:** sebelum masuk, `/admin` pindah ke `/masuk`. Setelah masuk, tambah menu → 201, Network → Request Headers berisi `Authorization: Bearer eyJ...`. Di Console `localStorage.setItem("token", "abc")`, refresh, tambah menu → "Sesi kamu sudah berakhir", pindah ke `/masuk`.

---
---

## SEGMEN 4: SIAP TERBIT

### `.env.example dan .env.local`

Dua file baru di folder paling luar, isinya sama. `.env.example` di-commit, `.env.local` tidak. Setelah membuatnya, matikan lalu jalankan lagi `npm run dev`.

Sumber: `kode-tahap/env.example`

```ini
# Salin file ini menjadi .env.local, lalu sesuaikan alamatnya.
# Nama variabel wajib diawali VITE_ supaya bisa dibaca kode di browser.
VITE_ALAMAT_SERVER=http://localhost:3001
```

### `src/alamat.js`

Sumber: `kode-tahap/segmen4-alamat.js`

```js
// Alamat server dibaca dari file .env.local, bukan ditulis langsung di sini.
// Saat aplikasi diterbitkan, alamatnya cukup diganti di pengaturan, tanpa mengubah kode.
const ALAMAT_SERVER = import.meta.env.VITE_ALAMAT_SERVER;

export const ALAMAT_API = ALAMAT_SERVER + "/menu";
export const ALAMAT_MASUK = ALAMAT_SERVER + "/login";
export const ALAMAT_DAFTAR = ALAMAT_SERVER + "/register";
```

### `vercel.json`

File baru di folder paling luar.

Sumber: `kode-tahap/vercel.json`

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Terminal

```
npm run build
npm run preview
```

**Cek:** build berakhir dengan `built in ...`. Di `localhost:4173/menu/3`, halaman detail terbuka langsung dan Network menampilkan permintaan `3` hanya sekali.
