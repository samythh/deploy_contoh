/* Contoh DEFAULT PROPS (Bagian 4).

   Perhatikan `= "Baru"` dan `= "bg-green-100 text-green-700"` di
   parameter. Kalau induk tidak mengirim apa-apa, komponen tetap
   tampil masuk akal — bukan `undefined`.

   CARA SAMPAIKAN:
   "Ini penting buat komponen yang dipakai di banyak tempat. Yang
    nggak ngirim apa-apa tetap dapat tampilan yang wajar." */

function Badge({ teks = "Baru", warna = "bg-green-100 text-green-700" }) {
  return (
    <span className={`px-2 py-1 rounded text-xs font-medium ${warna}`}>
      {teks}
    </span>
  );
}

export default Badge;
