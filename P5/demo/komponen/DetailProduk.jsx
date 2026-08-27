import { useParams, useNavigate, Link } from "react-router";
import { produk } from "./data";

/* ============================================================
   URL PARAMS — Bagian 3.

   ------------------------------------------------------------
   JEBAKAN YANG PASTI TERJADI, SEBUT DULUAN:

   useParams() SELALU mengembalikan string.

     const { id } = useParams();     // id = "7", bukan 7

     produk.find(p => p.id === id)          gagal kalau p.id angka
     produk.find(p => p.id === Number(id))  benar
     produk.find(p => String(p.id) === id)  benar juga

   "Alamat itu teks. /produk/7 — angka 7 di situ sebenarnya HURUF
    7, bukan angka. Jadi kalau data kalian id-nya angka,
    bandinginnya bakal selalu gagal. Nggak ada error, cuma 'tidak
    ditemukan' terus."

   Sebut ini sebelum mereka menghabiskan 20 menit debugging.

   ------------------------------------------------------------
   CARA SAMPAIKAN — Analogi Nomor Kamar Hotel:

   "Bayangin kalian nginep di hotel. Kalian nggak bilang ke temen
    'aku di kamar yang catnya biru sebelah lift'. Kalian bilang
    NOMOR KAMARNYA.

    Kenapa? Karena nomor kamar itu BISA DIKASIH KE ORANG LAIN, dan
    mereka bisa langsung ke situ tanpa nanya-nanya.

    Nah /produk/7 itu nomor kamar. Alamatnya sendiri yang bawa
    informasinya."
   ============================================================ */

function DetailProduk() {
  const { id } = useParams(); // destructuring — dari P2
  const navigate = useNavigate();

  // String(p.id) === id  → aman apa pun tipe id di data
  const item = produk.find((p) => String(p.id) === id); // .find() — dari P2

  /* Peserta akan LUPA baris ini, lalu aplikasinya crash saat orang
     mengetik /produk/999.

     COLOKAN KE P6: ini pola yang sama dengan Empty State — salah
     satu dari lima status antarmuka yang wajib di Tugas 3. */
  if (!item) {
    return (
      <section className="max-w-lg mx-auto p-6">
        <p className="mb-4 text-gray-600">
          Produk dengan id <strong>{id}</strong> tidak ditemukan.
        </p>
        <Link to="/" className="text-blue-600 text-sm">
          &larr; Kembali ke beranda
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-lg mx-auto p-6">
      <Link to="/" className="text-blue-600 text-sm">
        &larr; Kembali
      </Link>

      <h1 className="text-2xl font-bold mt-3 mb-1">{item.nama}</h1>
      <p className="text-gray-500 mb-1">
        Rp {item.harga.toLocaleString("id-ID")}
      </p>
      <p className="text-sm text-gray-500 mb-6">Kategori: {item.kategori}</p>

      {/* useNavigate — Bagian 4.

          ATURANNYA: kalau yang mutusin pindah itu MANUSIA, pakai
          <Link>. Kalau yang mutusin itu KODE, pakai useNavigate.

          navigate(-1) artinya "mundur satu langkah di riwayat" —
          sama persis dengan tombol Back browser. Ini contoh yang
          memang tidak bisa dilakukan <Link>, karena tujuannya
          bergantung pada riwayat, bukan alamat tetap. */}
      <button
        onClick={() => navigate(-1)}
        className="px-3 py-2 border rounded bg-white text-sm"
      >
        Kembali ke halaman sebelumnya
      </button>
    </section>
  );
}

export default DetailProduk;
