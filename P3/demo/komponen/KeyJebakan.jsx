import { useState } from "react";

/* ============================================================
   PERAGAAN key={index} — Bagian 5, 90 detik.

   Ini peragaan paling berkesan hari ini. JANGAN dilewati, dan
   jangan diganti dengan sekadar menyebut aturannya.

   Kalau `key` cuma diajarkan sebagai "biar nggak ada warning",
   semua peserta akan pakai key={index}, warningnya hilang, dan
   masalahnya baru meledak di Tugas 2 saat ada penghapusan item.

   ------------------------------------------------------------
   CARA MEMAKAI DI KELAS:

   1. Tempel komponen ini ke src/, panggil dari App.jsx
   2. Biarkan tombol di posisi "key = index"
   3. Ketik sesuatu di kotak baris KEDUA
   4. Klik "Hapus" di baris PERTAMA
   5. Ketikan sekarang nempel di barang yang SALAH
   6. Klik tombol untuk beralih ke "key = id", ulangi langkah 3-4
   7. Sekarang benar

   ------------------------------------------------------------
   CARA SAMPAIKAN — Analogi Nomor Punggung:

   "Bayangin kalian pelatih, dan kalian kenalin pemain dari URUTAN
    BERDIRINYA: 'pemain nomor 1 itu yang paling kiri.'

    Terus pemain paling kiri pulang. Yang tadinya nomor 2 jadi
    nomor 1, nomor 3 jadi nomor 2. SEMUA ORANG BERUBAH IDENTITAS
    cuma gara-gara satu orang pergi.

    Nah key={index} itu persis begitu.

    Yang bener: pakai NOMOR PUNGGUNG. Nomor punggung nempel di
    orangnya, nggak peduli dia berdiri di mana. Itu key={p.id}."

   Lalu setelah peragaan:

   "Lihat. Datanya bener, tapi yang diketik pindah ke barang lain.
    Bug kayak gini yang bikin orang begadang, dan penyebabnya cuma
    satu huruf: i."

   CATATAN: useState dipakai di sini hanya sebagai alat peraga.
   JANGAN dijelaskan — itu materi P4. Cukup bilang "ini buat
   nyimpen daftar, minggu depan kita bahas".
   ============================================================ */

const awal = [
  { id: "a", nama: "Rendang" },
  { id: "b", nama: "Sate Padang" },
  { id: "c", nama: "Es Tebak" },
];

function KeyJebakan() {
  const [daftar, setDaftar] = useState(awal);
  const [pakaiIndex, setPakaiIndex] = useState(true);

  const hapus = (id) => setDaftar(daftar.filter((d) => d.id !== id));
  const ulangi = () => setDaftar(awal);

  return (
    <section className="max-w-lg mx-auto p-6">
      <h2 className="text-xl font-bold mb-1">
        Peragaan: key = index vs key = id
      </h2>

      <p className="mb-4 text-sm text-gray-600">
        Ketik di kotak baris <strong>kedua</strong>, lalu hapus baris{" "}
        <strong>pertama</strong>. Perhatikan ke mana ketikannya pindah.
      </p>

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setPakaiIndex(!pakaiIndex)}
          className="px-3 py-1.5 border rounded bg-white text-sm"
        >
          Sekarang: key = {pakaiIndex ? "index (salah)" : "id (benar)"} — klik
          untuk tukar
        </button>

        <button
          onClick={ulangi}
          className="px-3 py-1.5 border rounded bg-white text-sm"
        >
          Ulangi
        </button>
      </div>

      <ul className="flex flex-col gap-2">
        {daftar.map((item, i) => (
          <li
            key={pakaiIndex ? i : item.id}
            className="flex items-center gap-3 p-3 bg-white border rounded"
          >
            <span className="w-32 shrink-0">{item.nama}</span>

            {/* Input ini SENGAJA tidak terhubung ke state. Isinya
                dipegang browser dan menempel pada elemen DOM-nya.
                Kalau React salah mencocokkan elemen, isinya ikut
                salah tempat — dan itulah yang mau ditunjukkan. */}
            <input
              placeholder="ketik di sini..."
              className="flex-1 px-2 py-1 border rounded text-sm"
            />

            <button
              onClick={() => hapus(item.id)}
              className="px-2 py-1 text-sm text-red-600"
            >
              Hapus
            </button>
          </li>
        ))}
      </ul>

      {daftar.length === 0 && (
        <p className="mt-4 text-sm text-gray-500">
          Habis. Klik Ulangi untuk mengulang peragaan.
        </p>
      )}
    </section>
  );
}

export default KeyJebakan;
