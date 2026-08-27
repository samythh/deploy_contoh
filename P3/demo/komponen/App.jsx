import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import Footer from "./Footer";
import { produk } from "./data";

/* ============================================================
   Perekat semuanya — hasil akhir Bagian 6.

   CARA SAMPAIKAN saat semuanya tersambung:

   "Coba lihat file ini sekarang. Kalian bisa baca kayak baca
    daftar isi: ada navbar, ada judul, ada grid kartu, ada footer.
    STRUKTUR HALAMANNYA KELIHATAN DARI KODENYA.

    Bandingin sama file P2 kalian yang isinya string HTML numpuk
    di dalam .map(). Itu bedanya."
   ============================================================ */

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-5xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Katalog Produk</h1>

        {/* Grid responsif — prefiks md: dan lg: ini persis yang
            dipelajari di P1 Bagian 7. Bukan hal baru. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* .map() yang SAMA PERSIS dengan P2. Yang baru cuma
              isinya JSX, bukan string. Sebut ini eksplisit.

              key={p.id} — BUKAN key={index}. Alasannya diperagakan
              di KeyJebakan.jsx. */}
          {produk.map((p) => (
            <ProductCard
              key={p.id}
              nama={p.nama}
              harga={p.harga}
              stok={p.stok}
              diskon={p.diskon}
            />
          ))}
        </div>
      </main>

      <Footer>
        <p>© 2026 TokoKita — dibangun di Pertemuan 3</p>
      </Footer>
    </div>
  );
}

export default App;
