import Badge from "./Badge";

/* ============================================================
   Komponen inti Bagian 4 & 5. Memuat tiga hal sekaligus:

   1. PROPS         — { nama, harga, stok, diskon } di parameter.
                      Itu DESTRUCTURING dari P2 Bagian 3. Sebut
                      eksplisit: "ingat kan? Ini dia dipakainya."

   2. SHORT-CIRCUIT — {diskon && <Badge ... />}
                      Pertanyaannya "muncul nggak?" → pakai &&

   3. TERNARY       — {stok > 0 ? ... : ...}
                      Pertanyaannya "yang mana?" → pakai ternary

   CARA SAMPAIKAN:
   "Bedanya gampang. Kalau pertanyaannya 'yang mana?' — ternary.
    Kalau 'muncul nggak?' — &&. Persis kayak .find() versus .some()
    minggu lalu. Pertanyaan beda, alat beda."
   ============================================================ */

function ProductCard({ nama, harga, stok, diskon }) {
  return (
    <article className="p-6 bg-white rounded-lg border border-gray-200">
      <div className="flex justify-between items-start gap-2 mb-2">
        <h2 className="font-semibold">{nama}</h2>

        {/* JEBAKAN YANG WAJIB DISEBUT DI KELAS:
            kalau nilainya angka 0, && akan MENAMPILKAN angka nol,
            bukan menyembunyikan. Di sini aman karena `diskon` itu
            boolean — tapi peserta pasti kena di tugas dengan `stok`.

              {stok && <p>Ada</p>}      stok = 0  → muncul tulisan "0"
              {stok > 0 && <p>Ada</p>}  benar

            Sebut duluan. Hemat 20 menit debugging mereka. */}
        {diskon && <Badge teks="Diskon" warna="bg-red-100 text-red-700" />}
      </div>

      <p className="text-gray-500 mb-3">
        Rp {harga.toLocaleString("id-ID")}
      </p>

      {stok > 0 ? (
        <span className="text-sm text-green-600">Tersedia — {stok} item</span>
      ) : (
        <span className="text-sm text-red-600">Stok habis</span>
      )}
    </article>
  );
}

export default ProductCard;
