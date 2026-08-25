/* ============================================================
   main.js — file utama yang MEMINJAM dari utils.js

   `import` = mengambil barang dari laci file lain.

   Perhatikan: main.js tidak tahu-menahu bagaimana formatHarga
   dikerjakan. Dia cuma tahu cara memakainya. Itulah gunanya modul.
   ============================================================ */

import { formatHarga, hitungTotal } from "./utils.js";

const produk = [
  { nama: "Laptop",   harga: 8000000, stok: 5  },
  { nama: "Mouse",    harga: 150000,  stok: 0  },
  { nama: "Keyboard", harga: 300000,  stok: 12 },
];

console.log("=== Daftar Harga ===");
produk.forEach(p => {
  console.log(`${p.nama}: ${formatHarga(p.harga)}`);
});

console.log("=== Total ===");
console.log(formatHarga(hitungTotal(produk)));

/* CARA SAMPAIKAN — Analogi Lemari Berlaci:
   "Bayangin lemari baju yang semua isinya ditumpuk jadi satu gunungan.
   Nyari kaus kaki? Bongkar semua.

   Modul itu kayak lemari berlaci: laci kaus kaki, laci baju, laci celana.
   Tiap file punya tugasnya. `export` itu naruh barang di laci biar bisa
   dipinjam. `import` itu ambil dari laci file lain.

   Nanti di React, tiap komponen kalian jadi satu file. Import-export ini
   bakal jadi napas sehari-hari."

   BATASI SAMPAI SINI. Jangan masuk default export vs named export —
   itu overload untuk P2. Cukup idenya. */
