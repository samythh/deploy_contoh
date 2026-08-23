/* ============================================================
   DATA DEMO — Pertemuan 1
   Dipakai di seluruh file demo dan sepanjang penjelasan di kelas.

   PENTING: jangan tambah atau ubah isinya.
   Angka-angka di dokumen materi (hasil .map, .reduce, "Mouse hilang
   karena stok 0") mengacu persis ke tiga item ini. Kalau datanya
   diubah, contoh di materi tidak lagi cocok dengan yang di layar.
   ============================================================ */

const produk = [
  { nama: "Laptop",   harga: 8000000, stok: 5  },
  { nama: "Mouse",    harga: 150000,  stok: 0  },
  { nama: "Keyboard", harga: 300000,  stok: 12 },
];

/* ------------------------------------------------------------
   MOMEN WOW — tunjukkan ini sebelum masuk method array.

   console.table() menampilkan array of objects sebagai tabel rapi,
   bukan teks berantakan. Peserta biasanya bereaksi di sini.

   Ini juga "kemenangan visual kecil" yang penting untuk P1: peserta
   belum punya halaman web, jadi ini satu-satunya momen di mana data
   terlihat cantik di layar.
   ------------------------------------------------------------ */

console.table(produk);

// Bandingkan dengan console.log biasa — jauh lebih susah dibaca:
// console.log(produk);
