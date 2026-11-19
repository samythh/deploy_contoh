import { useState } from "react";

// Isi form hanya dipakai form ini, jadi state-nya disimpan di sini, bukan di App.
function FormTambah({ onTambah }) {
  const [namaBaru, setNamaBaru] = useState("");
  const [kategoriBaru, setKategoriBaru] = useState("Makanan");
  const [hargaBaru, setHargaBaru] = useState("");

  async function kirim(e) {
    // Tanpa ini, browser memuat ulang halaman saat form dikirim, dan semua state hilang.
    e.preventDefault();
    const berhasil = await onTambah({
      nama: namaBaru,
      kategori: kategoriBaru,
      // Isi kotak input selalu berupa teks, padahal harga harus angka.
      harga: Number(hargaBaru),
      tersedia: true,
    });
    // Form dikosongkan hanya kalau server sudah menyimpan, supaya isian tidak hilang saat gagal.
    if (berhasil) {
      setNamaBaru("");
      setHargaBaru("");
    }
  }

  return (
    <form onSubmit={kirim} className="flex flex-col md:flex-row gap-2 mb-6 p-4 bg-white border border-gray-200 rounded-lg">
      <input
        type="text"
        value={namaBaru}
        onChange={(e) => setNamaBaru(e.target.value)}
        placeholder="Nama menu"
        required
        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
      />
      <select
        value={kategoriBaru}
        onChange={(e) => setKategoriBaru(e.target.value)}
        className="px-3 py-2 border border-gray-300 rounded-lg"
      >
        <option value="Makanan">Makanan</option>
        <option value="Minuman">Minuman</option>
      </select>
      <input
        type="number"
        value={hargaBaru}
        onChange={(e) => setHargaBaru(e.target.value)}
        placeholder="Harga"
        required
        min="0"
        className="md:w-36 px-3 py-2 border border-gray-300 rounded-lg"
      />
      <button type="submit" className="px-4 py-2 rounded-lg bg-green-800 text-white">
        Tambah Menu
      </button>
    </form>
  );
}

export default FormTambah;
