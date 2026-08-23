/* ============================================================
   utils.js — "laci" berisi fungsi yang bisa dipinjam file lain

   `export` = menaruh barang di laci supaya bisa dipinjam.
   ============================================================ */

export const formatHarga = (angka) => `Rp ${angka.toLocaleString("id-ID")}`;

export const hitungTotal = (daftar) =>
  daftar.reduce((total, item) => total + item.harga, 0);
