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