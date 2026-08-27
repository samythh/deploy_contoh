import { useState, useEffect } from "react";
import { api } from "../api/client";
import type { Produk, ResponseProduk } from "../types";

/* ============================================================
   HASIL AKHIR P6 — Bagian 5. Semuanya digabung di sini.

   File ini sengaja ber-ekstensi .tsx, bukan .jsx.

   CARA MEMASANGNYA — 2 menit, tanpa konfigurasi:
   Vite sudah mendukung TypeScript. Cukup UBAH NAMA FILE dari
   .jsx jadi .tsx, lalu tambahkan tipe. Tidak perlu tsconfig,
   tidak perlu setup apa pun.

     npm i -D @types/react @types/react-dom
     (hanya kalau editor mengeluh soal tipe React)

   ⚠️ VITE TIDAK MEMERIKSA TIPE SAAT BUILD — dia cuma membuang
   anotasinya. Pemeriksaannya terjadi di EDITOR.

   "Jadi kalau kalian abaikan garis merahnya, aplikasinya tetap
    jalan. TypeScript itu asisten, bukan satpam."
   ============================================================ */

function DaftarProduk() {
  /* useState<Produk[]> — sekarang editor tahu isi array ini apa.
     Coba ketik produk[0]. dan berhenti — daftar field-nya muncul.

     "Nah ini yang bikin ketagihan. Kalian nggak perlu bolak-balik
      buka dokumentasi API atau nebak-nebak nama field." */
  const [produk, setProduk] = useState<Produk[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [cari, setCari] = useState("");

  const muat = async (kataKunci = "") => {
    setLoading(true);
    setError(""); // WAJIB: bersihkan error lama sebelum coba lagi

    try {
      const path = kataKunci
        ? `/products/search?q=${encodeURIComponent(kataKunci)}`
        : "/products?limit=8";

      /* Perhatikan <ResponseProduk> — response dummyjson BUKAN
         langsung array, tapi object berisi { products, total, ... }.

         Peserta yang menulis res.data.map(...) akan gagal. Dan yang
         memberi tahu bentuk aslinya adalah TAB NETWORK, bukan
         tebakan. Sebut ini. */
      const res = await api.get<ResponseProduk>(path);
      setProduk(res.data.products);
    } catch {
      /* Pesan untuk MANUSIA, bukan untuk programmer.
         Pesan teknisnya sudah di-console.error oleh interceptor. */
      setError("Gagal memuat produk. Periksa koneksi internetmu.");
    } finally {
      /* SELALU di finally, bukan di bawah try.

         "Kalau ditaruh di dalam try setelah baris yang error, dia
          nggak kelewatan — dan spinner kalian muter SELAMANYA." */
      setLoading(false);
    }
  };

  /* useEffect di sini MEMANG BUTUH — mengambil data dari server itu
     berurusan dengan dunia di luar React, persis kriteria P4
     Bagian 6. Sebut sambungannya. */
  useEffect(() => {
    muat();
  }, []);

  /* ============================================================
     URUTAN PENGECEKAN — loading DULUAN.

     Kalau tidak, saat pertama memuat, produk.length === 0 akan
     benar dan pengguna melihat "tidak ada hasil" sebelum datanya
     sempat datang.
     ============================================================ */

  return (
    <section className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Katalog Produk</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault(); // dari P4 — tanpa ini halaman reload
          muat(cari);
        }}
        className="flex gap-2 mb-6"
      >
        <input
          value={cari}
          onChange={(e) => setCari(e.target.value)}
          placeholder="Cari produk..."
          className="flex-1 px-3 py-2 border rounded text-sm"
        />
        <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm">
          Cari
        </button>
      </form>

      {/* 2. LOADING — skeleton, dicek paling dulu */}
      {loading && (
        <div className="flex flex-col gap-3 animate-pulse">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-16 bg-gray-200 rounded" />
          ))}
        </div>
      )}

      {/* 5. ERROR — dengan tombol Coba Lagi yang berfungsi */}
      {!loading && error && (
        <div className="text-center py-10 border rounded bg-white">
          <p className="font-medium text-red-700 mb-1">{error}</p>
          <button
            onClick={() => muat(cari)}
            className="mt-2 px-4 py-2 bg-red-600 text-white rounded text-sm"
          >
            Coba Lagi
          </button>
        </div>
      )}

      {/* 4. EMPTY — berhasil, isinya saja yang kosong.
             Nadanya netral dan menawarkan jalan keluar. */}
      {!loading && !error && produk.length === 0 && (
        <div className="text-center py-10 border rounded bg-white">
          <p className="font-medium mb-1">Tidak ada hasil</p>
          <p className="text-sm text-gray-500 mb-3">
            Coba kata kunci lain.
          </p>
          <button
            onClick={() => {
              setCari("");
              muat();
            }}
            className="px-3 py-1.5 border rounded text-sm"
          >
            Tampilkan semua
          </button>
        </div>
      )}

      {/* 3. SUCCESS */}
      {!loading && !error && produk.length > 0 && (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {produk.map((p) => (
            <li key={p.id} className="p-4 bg-white border rounded">
              <h2 className="font-semibold">{p.title}</h2>
              <p className="text-sm text-gray-500">
                {p.category} — ${p.price}
              </p>
            </li>
          ))}
        </ul>
      )}

      {/* ============================================================
          SIMULASI GAGAL — Bagian 5, tiga simulasi @1 menit:

            Network -> Slow 3G     : skeleton terlihat beberapa detik
            Network -> Offline     : error state + uji tombol Coba Lagi
            Cari "zzzz"            : empty state, BUKAN error

          "Ini bukan latihan tambahan. Ini PERSIS yang saya lakuin
           pas ngoreksi Tugas 3. Catatan di soal tugas kalian bunyinya:
           'aplikasi akan diuji dengan mematikan koneksi internet.'

           Jadi sebelum ngumpulin, uji sendiri pakai tiga cara ini."

          CATATAN: status INITIAL tidak dipakai di sini karena data
          langsung dimuat saat komponen muncul. Kelima status yang
          terpisah ada di LimaStatus.jsx. Sebut bedanya — Initial
          relevan untuk halaman yang menunggu aksi pengguna dulu,
          misalnya halaman pencarian murni.
          ============================================================ */}
    </section>
  );
}

export default DaftarProduk;
