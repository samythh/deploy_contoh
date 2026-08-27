/* Data contoh untuk demo P5.
   Di kelas, peserta memakai data dari produk mereka sendiri.

   PERHATIKAN: `id` di sini sengaja ANGKA, bukan string.
   Itu supaya jebakan useParams (yang selalu mengembalikan
   string) benar-benar terjadi saat diperagakan. */

export const produk = [
  { id: 1, nama: "Rendang",        kategori: "Makanan", harga: 35000 },
  { id: 2, nama: "Sate Padang",    kategori: "Makanan", harga: 28000 },
  { id: 3, nama: "Es Tebak",       kategori: "Minuman", harga: 12000 },
  { id: 4, nama: "Teh Talua",      kategori: "Minuman", harga: 15000 },
  { id: 5, nama: "Dendeng Balado", kategori: "Makanan", harga: 45000 },
  { id: 6, nama: "Es Durian",      kategori: "Minuman", harga: 20000 },
];
