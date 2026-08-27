import { Routes, Route, Link, NavLink } from "react-router";
import Beranda from "./Beranda";
import DetailProduk from "./DetailProduk";
import NotFound from "./NotFound";
import LinkJebakan from "./LinkJebakan";

/* ============================================================
   Kerangka routing — hasil Bagian 2.

   PERHATIKAN IMPORT-NYA: dari "react-router", BUKAN
   "react-router-dom". Sejak v7 keduanya digabung.

   SEBUT INI KE KELAS SECARA EKSPLISIT. Mayoritas tutorial di
   internet masih memakai nama lama, dan peserta yang mencari
   sendiri akan bingung kenapa berbeda.

   ------------------------------------------------------------
   <BrowserRouter> dipasang di main.jsx, BUKAN di sini:

     import { BrowserRouter } from "react-router";

     createRoot(document.getElementById("root")).render(
       <BrowserRouter>
         <App />
       </BrowserRouter>
     );

   Alasannya: dia membungkus SELURUH aplikasi, dan cuma dipasang
   sekali. Kalau ditaruh di App, komponen di luar App tidak
   kebagian router.
   ============================================================ */

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="flex gap-4 p-4 bg-white border-b">
        {/* NavLink = Link yang tahu dirinya sedang aktif.
            Berguna untuk menandai menu yang sedang dibuka.
            Sebut sambil lewat — bukan materi wajib. */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "font-semibold text-blue-600" : "text-gray-600"
          }
        >
          Beranda
        </NavLink>

        <Link to="/peragaan" className="text-gray-600">
          Peragaan Link
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Beranda />} />

        {/* :id adalah VARIABEL di dalam alamat.
            /produk/7 dan /produk/99 sama-sama cocok ke sini. */}
        <Route path="/produk/:id" element={<DetailProduk />} />

        <Route path="/peragaan" element={<LinkJebakan />} />

        {/* path="*" = cocok dengan apa pun yang tidak tertangkap
            rute di atasnya. WAJIB PALING BAWAH.

            "Ini bukan pelengkap. Kalau nggak ada, orang yang salah
             ketik alamat bakal lihat layar putih kosong — dan
             mereka bakal ngira aplikasi kalian rusak." */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
