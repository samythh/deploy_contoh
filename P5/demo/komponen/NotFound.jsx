import { Link } from "react-router";

/* Halaman 404 — dipasang lewat <Route path="*" /> paling bawah.

   "Ini bukan pelengkap. Kalau nggak ada, orang yang salah ketik
    alamat bakal lihat LAYAR PUTIH KOSONG — dan mereka bakal ngira
    aplikasi kalian rusak."

   Diwajibkan di Tugas 3. */

function NotFound() {
  return (
    <section className="max-w-lg mx-auto p-6 text-center">
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <p className="mb-6 text-gray-600">
        Halaman yang kamu cari tidak ada.
      </p>
      <Link to="/" className="px-4 py-2 bg-blue-600 text-white rounded text-sm">
        Kembali ke beranda
      </Link>
    </section>
  );
}

export default NotFound;
