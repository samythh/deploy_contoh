import { Link, useSearchParams } from "react-router";
import { produk } from "./data";
import { useWindowSize } from "../hooks/useWindowSize";

/* ============================================================
   QUERY STRINGS — Bagian 4.

   Filter kategori disimpan di URL, bukan di useState.
   Alamatnya jadi:  /?kategori=Makanan

   ------------------------------------------------------------
   KENAPA DI URL, BUKAN useState:

   Tesnya satu kalimat:
   "Kalau kalian kirim link ini ke temen, dia harus lihat yang
    sama nggak?"

   Filter kategori? IYA. Kalau saya kirim link 'produk kategori
   makanan', temen saya harus lihat makanan juga. Taruh di URL.

   Menu dropdown lagi kebuka? Nggak penting. Taruh di useState.

   ------------------------------------------------------------
   BONUS YANG WAJIB DIPERAGAKAN:

   Setelah mengganti filter beberapa kali, tekan tombol BACK
   browser. Filternya mundur satu per satu.

   "Ini yang bikin tombol Back jalan. Kalau filter kalian di
    useState, pencet Back malah KELUAR dari halaman — bukan balik
    ke filter sebelumnya."

   COLOKAN KE TUGAS 3: fitur pencarian dan pagination yang
   diwajibkan paling baik ditaruh di URL, dengan pola yang sama.
   ============================================================ */

const kategoriTersedia = ["semua", "Makanan", "Minuman"];

function Beranda() {
  const [params, setParams] = useSearchParams();
  const kategori = params.get("kategori") ?? "semua";

  /* Custom hook dipakai di sini — Bagian 5.
     Perhatikan: dipakai persis seperti hook bawaan. */
  const lebar = useWindowSize();

  /* Dihitung langsung saat render — BUKAN state, BUKAN useEffect.
     Aturan dari P4 Bagian 6: kalau bisa dihitung dari data yang
     sudah ada, jangan pakai effect. */
  const terlihat =
    kategori === "semua"
      ? produk
      : produk.filter((p) => p.kategori === kategori);

  return (
    <section className="max-w-4xl mx-auto p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Katalog</h1>
        <span className="text-xs text-gray-400">Lebar layar: {lebar}px</span>
      </div>

      <div className="flex gap-2 mb-6">
        {kategoriTersedia.map((k) => (
          <button
            key={k}
            onClick={() => setParams(k === "semua" ? {} : { kategori: k })}
            className={`px-3 py-1.5 rounded text-sm border ${
              kategori === k
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700"
            }`}
          >
            {k === "semua" ? "Semua" : k}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {terlihat.map((p) => (
          /* Seluruh kartu jadi <Link>. Karena <Link> dirender jadi
             tag <a> beneran, kartu ini bisa diklik-kanan, dibuka di
             tab baru, dan terbaca screen reader.

             Ini menyambung ke aksesibilitas dari P1 dan ke audit
             Lighthouse di P8. Sebut sambungannya. */
          <Link
            key={p.id}
            to={`/produk/${p.id}`}
            className="p-4 bg-white border rounded-lg hover:border-blue-400"
          >
            <h2 className="font-semibold">{p.nama}</h2>
            <p className="text-sm text-gray-500">
              Rp {p.harga.toLocaleString("id-ID")}
            </p>
          </Link>
        ))}
      </div>

      {terlihat.length === 0 && (
        <p className="mt-6 text-sm text-gray-500">
          Tidak ada produk di kategori ini.
        </p>
      )}
    </section>
  );
}

export default Beranda;
