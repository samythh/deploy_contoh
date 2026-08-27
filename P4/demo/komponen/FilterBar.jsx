/* ============================================================
   LIFTING STATE UP — Bagian 5.

   Komponen ini TIDAK punya state sendiri. Dia menerima dua hal
   dari induk:

     filter   — nilainya sekarang (data mengalir ke bawah)
     onGanti  — FUNGSI untuk mengubahnya (cara "ngomong" ke atas)

   Inilah jawaban pertanyaan yang digantung di P3:
   "kalau anak butuh ngasih tahu induknya sesuatu, caranya beda —
    minggu depan." Ini dia caranya.

   Perhatikan: anak TIDAK mengubah data induknya. Dia cuma
   memanggil fungsi yang dikasih induknya. Induk yang memutuskan
   apa yang terjadi.

   KONVENSI PENAMAAN (Lampiran C):
     props yang berisi fungsi  → diawali `on`   (onGanti)
     fungsi handler di induk   → diawali `handle`
   Ini konvensi seluruh ekosistem React, dan meneruskan kebiasaan
   penamaan dari P1: nama menjelaskan peran.
   ============================================================ */

const pilihan = [
  { nilai: "semua", label: "Semua" },
  { nilai: "aktif", label: "Belum selesai" },
  { nilai: "selesai", label: "Selesai" },
];

function FilterBar({ filter, onGanti, jumlahAktif }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
      <div className="flex gap-2">
        {pilihan.map((p) => (
          <button
            key={p.nilai}
            onClick={() => onGanti(p.nilai)}
            className={`px-3 py-1.5 rounded text-sm border ${
              filter === p.nilai
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* `jumlahAktif` dihitung di induk dari data yang sudah ada —
          bukan state tersendiri. Ini penerapan Tips nomor 1:
          "state sesedikit mungkin". */}
      <span className="text-sm text-gray-500">{jumlahAktif} belum selesai</span>
    </div>
  );
}

export default FilterBar;
