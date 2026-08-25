/* ============================================================
   BAGIAN 2 — Variabel Modern: let & const   (30–40 menit)

   Pola penyampaian: tunjukkan CARA LAMA yang menyakitkan dulu,
   baru obatnya. Rasa sakit itu yang bikin fitur baru bermakna.
   ============================================================ */


/* ---------- CARA LAMA — var ---------- */

var kota = "Padang";
var kota = "Jakarta";   // TIDAK error, padahal harusnya mencurigakan

console.log(kota);      // "Jakarta"

/* Di sinilah masalahnya: Anda kira punya satu variabel `kota`,
   ternyata sudah tertimpa di tempat lain — dan JavaScript diam saja.
   Di file 500 baris, bug seperti ini sangat sulit dilacak. */


/* ---------- CARA MODERN — const menolak penimpaan ----------

   JALANKAN BAGIAN INI TERPISAH DARI YANG DI ATAS.

   Kode di bawah sengaja error. Kalau di-paste bersamaan dengan blok
   `var` di atas, seluruh file gagal dijalankan dan peserta tidak
   sempat melihat perilaku `var`-nya.

   Paste per blok, jangan sekaligus. */

// const negara = "Indonesia";
// const negara = "Malaysia";   // SyntaxError — langsung ketahuan


/* ---------- ATURAN PRAKTIS INDUSTRI ---------- */

const namaPeserta = "Mikail";   // default: const untuk semua
let skor = 0;                   // let hanya kalau nilainya memang berubah

skor = skor + 10;               // boleh, karena pakai let
console.log(namaPeserta, skor);

// namaPeserta = "Budi";        // TypeError — const tidak bisa diganti nilainya


/* ---------- JEBAKAN YANG SERING DITANYAKAN ----------

   Pertanyaan yang hampir pasti muncul dari peserta yang jeli:
   "Katanya const nggak bisa diubah, kok isi array-nya bisa nambah?"

   Siapkan jawabannya — ini pertanyaan bagus, bukan pertanyaan iseng. */

const angka = [1, 2, 3];
angka.push(4);           // BOLEH — isinya berubah
console.log(angka);      // [1, 2, 3, 4]

// angka = [9, 9, 9];    // TIDAK BOLEH — kotaknya yang diganti

/* CARA SAMPAIKAN:
   "const itu ngunci KOTAKNYA, bukan ISINYA.

   Bayangin lemari yang dipaku ke tembok. Kalian masih bisa keluar-masukin
   baju — itu isinya. Tapi kalian nggak bisa ganti lemarinya sama lemari
   lain — itu kotaknya.

   Makanya `angka.push(4)` boleh (nambah baju), tapi `angka = [9,9,9]`
   nggak boleh (ganti lemari)."

   CATATAN UNTUK ANDA: jangan sebut istilah "immutability" atau "reference"
   di sini. Cukup analogi lemarinya. Istilah teknisnya baru dibutuhkan di
   P4 saat bicara state React — dan di situ analogi ini bisa dipanggil lagi. */
