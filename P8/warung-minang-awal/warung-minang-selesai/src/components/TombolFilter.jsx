// Tombol tidak menyimpan kategori sendiri. Ia hanya menerima:
// teks (tulisan tombol), aktif (true/false), dan onPilih (fungsi untuk melapor ke App).
// Karena aktif dihitung dari state yang sama dengan kartu, warnanya tidak mungkin salah.
function TombolFilter({ teks, aktif, onPilih }) {
  let warna = "bg-white border border-gray-300";
  if (aktif) {
    warna = "bg-green-800 text-white";
  }

  return (
    <button onClick={onPilih} className={`px-4 py-2 rounded-lg ${warna}`}>
      {teks}
    </button>
  );
}

export default TombolFilter;
