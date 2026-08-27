import { useState } from "react";
import { Link } from "react-router";

/* ============================================================
   PERAGAAN WAJIB BAGIAN 2 — <Link> vs <a>, 2 menit.

   Ini peragaan terpenting di bagian routing, dan memakai apa
   yang sudah peserta bangun di P4: state yang hilang.

   ------------------------------------------------------------
   CARA MEMAKAI DI KELAS:

   1. Ketik beberapa item di kotak "Catatan sementara"
   2. Klik link MERAH (<a href>) → ke halaman lain → tekan Back
      → catatannya HILANG, dan layar sempat BERKEDIP PUTIH
   3. Ketik lagi
   4. Klik link HIJAU (<Link to>) → ke halaman lain → tekan Back
      → catatannya MASIH ADA, tidak ada kedip

   Pastikan proyektor bisa menampilkan kedipnya. Kalau tidak
   terlihat, buka DevTools -> Network -> centang "Disable cache"
   dan pilih throttling "Slow 3G" supaya reload-nya jelas terasa.

   ------------------------------------------------------------
   CARA SAMPAIKAN setelah peragaan:

   "Lihat bedanya. Yang pertama, layar sempat putih terus semua
    isian kalian hilang — karena browser beneran mulai dari nol.
    Unduh ulang HTML, CSS, JavaScript, semuanya.

    Yang kedua mulus, dan state-nya utuh. Bedanya cuma satu tag.

    Aturannya gampang: DI DALAM APLIKASI REACT KALIAN, JANGAN
    PAKAI <a> LAGI. Pakai <Link>. <a> cuma buat link ke website
    lain — ke Instagram, ke dokumentasi, ke luar."

   ------------------------------------------------------------
   ANALOGI (Bagian 1, boleh diulang di sini):

   "Cara <a> itu kayak tiap mau ke dapur kalian keluar rumah,
    tutup pintu, buka rumah baru yang isinya dapur. Lampu mati
    semua, barang yang kalian pegang jatuh.

    <Link> itu kalian jalan ke ruangan sebelah. Rumahnya sama,
    barang di tangan tetap di tangan.

    Nah 'barang yang kalian pegang' itu STATE."
   ============================================================ */

function LinkJebakan() {
  const [catatan, setCatatan] = useState([]);
  const [teks, setTeks] = useState("");

  const tambah = (e) => {
    e.preventDefault();
    if (teks.trim() === "") return;
    setCatatan([...catatan, teks.trim()]); // immutable — dari P4
    setTeks("");
  };

  return (
    <section className="max-w-lg mx-auto p-6">
      <h2 className="text-xl font-bold mb-1">Peragaan: &lt;a&gt; vs &lt;Link&gt;</h2>

      <p className="mb-4 text-sm text-gray-600">
        Isi beberapa catatan di bawah, lalu coba dua link itu bergantian.
        Setelah pindah, tekan tombol <strong>Back</strong> browser.
      </p>

      <form onSubmit={tambah} className="flex gap-2 mb-3">
        <input
          value={teks}
          onChange={(e) => setTeks(e.target.value)}
          placeholder="Catatan sementara..."
          className="flex-1 px-3 py-2 border rounded text-sm"
        />
        <button className="px-3 py-2 bg-blue-600 text-white rounded text-sm">
          Tambah
        </button>
      </form>

      <ul className="mb-5 flex flex-col gap-1">
        {catatan.map((c, i) => (
          <li key={i} className="px-3 py-2 bg-white border rounded text-sm">
            {c}
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-3">
        {/* ❌ Memuat ulang SELURUH aplikasi. State hilang, layar berkedip. */}
        <a
          href="/tentang"
          className="px-3 py-2 rounded text-sm bg-red-100 text-red-700 border border-red-200 text-center"
        >
          Pindah pakai &lt;a href&gt; — state hilang
        </a>

        {/* ✅ Menukar isi layar di tempat. State utuh, tanpa kedip. */}
        <Link
          to="/tentang"
          className="px-3 py-2 rounded text-sm bg-green-100 text-green-700 border border-green-200 text-center"
        >
          Pindah pakai &lt;Link to&gt; — state utuh
        </Link>
      </div>

      <p className="mt-5 text-xs text-gray-500">
        Catatan di atas sengaja tidak disimpan ke LocalStorage — supaya
        hilangnya kelihatan.
      </p>
    </section>
  );
}

export default LinkJebakan;
