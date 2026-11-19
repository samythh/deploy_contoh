import { Link } from "react-router";

// Tampil untuk semua alamat yang tidak dikenal, misalnya /menuu atau /asal.
// Tanpa halaman ini, pengunjung yang salah ketik hanya melihat halaman kosong.
function HalamanTidakDitemukan() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-2">Halaman tidak ditemukan</h2>
      <p className="text-gray-500 mb-4">Alamat yang kamu buka tidak ada di Warung Minang.</p>
      <Link to="/" className="text-green-800 underline">Kembali ke menu</Link>
    </section>
  );
}

export default HalamanTidakDitemukan;
