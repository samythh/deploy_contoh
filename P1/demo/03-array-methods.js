/* ============================================================
   BAGIAN 4 — Manipulasi Array   (70–100 menit)

   BAGIAN PALING PENTING DI P1. Beri porsi terbesar.
   Ini jantung frontend modern — data selalu datang sebagai array,
   dan mengolahnya adalah pekerjaan sehari-hari.

   ------------------------------------------------------------
   PERHATIAN SEBELUM PASTE:

   File ini sengaja dibuat mandiri — datanya ikut disertakan di bawah,
   supaya bisa dipakai tanpa membuka file lain.

   TAPI: kalau Anda SUDAH mem-paste 00-data-demo.js di sesi console yang
   sama, LEWATI blok `const produk` di bawah ini. Mendeklarasikan `const`
   yang sama dua kali menghasilkan:

     SyntaxError: Identifier 'produk' has already been declared

   dan seluruh paste gagal — persis di tengah kelas.

   Kalau terlanjur kena: refresh halaman (F5), console-nya bersih lagi.
   Ini juga bisa jadi bahan mengajar dadakan — inilah yang tadi
   dijelaskan di Bagian 2, `const` menolak deklarasi ulang.
   ============================================================ */

const produk = [
  { nama: "Laptop",   harga: 8000000, stok: 5  },
  { nama: "Mouse",    harga: 150000,  stok: 0  },
  { nama: "Keyboard", harga: 300000,  stok: 12 },
];


/* ============================================================
   PERBANDINGAN KUNCI — for loop vs method modern

   Tulis keduanya berdampingan di layar. Ini momen yang menentukan
   apakah peserta paham "kenapa", bukan cuma "gimana".
   ============================================================ */

// TUGAS: ambil semua nama produk.

// CARA LAMA — for loop
const namaLama = [];
for (let i = 0; i < produk.length; i++) {
  namaLama.push(produk[i].nama);
}

// CARA MODERN — .map()
const namaModern = produk.map(p => p.nama);

console.log(namaLama);     // ["Laptop", "Mouse", "Keyboard"]
console.log(namaModern);   // ["Laptop", "Mouse", "Keyboard"] — sama persis

/* CARA SAMPAIKAN:
   "Hasilnya sama. Tapi lihat prosesnya.

   Yang atas: kalian harus urus counter i, urus kondisi berhenti, urus
   push manual. Empat baris buat satu ide sederhana. Dan tiap urusan itu
   satu peluang salah.

   Yang bawah: satu baris yang BERBUNYI SEPERTI KALIMAT — 'dari produk,
   ambil tiap nama.'

   Kode yang bagus itu yang bunyinya kayak niat kalian." */


/* ============================================================
   LIMA METHOD WAJIB
   Ajarkan lewat "kata kerja"-nya — apa yang dia lakukan pada array.
   ============================================================ */


/* ---------- .map() — UBAH tiap item, hasilnya array baru ukuran sama ---------- */

const harga = produk.map(p => p.harga);
console.log(harga);   // [8000000, 150000, 300000] — 3 masuk, 3 keluar

// "map itu tukang ubah. Masuk 3 item, keluar 3 item, tapi tiap item sudah diproses."


/* ---------- .filter() — SARING, hasilnya array yang lebih pendek ---------- */

const tersedia = produk.filter(p => p.stok > 0);
console.log(tersedia);   // Mouse hilang karena stoknya 0

// "filter itu satpam. Tiap item ditanya syaratnya. Lolos → masuk. Nggak lolos → ditolak."


/* ---------- .find() — CARI SATU item pertama yang cocok ---------- */

const laptop = produk.find(p => p.nama === "Laptop");
console.log(laptop);   // { nama: "Laptop", ... } — satu OBJECT, bukan array

// "find itu nyari orang di kerumunan. Ketemu yang pertama cocok → berhenti, kasih orang itu."

/* TUNJUKKAN JUGA KALAU TIDAK KETEMU — peserta pasti kena ini di tugas: */
const tidakAda = produk.find(p => p.nama === "Monitor");
console.log(tidakAda);   // undefined

// "Kalau nggak ketemu, dia kasih `undefined`. Bukan error, bukan array kosong.
//  Ingat ini — nanti kalau kalian dapat error 'cannot read property of undefined',
//  seringnya gara-gara ini."


/* ---------- .some() — TANYA "ada nggak?", hasilnya true/false ---------- */

const adaYangHabis = produk.some(p => p.stok === 0);
console.log(adaYangHabis);   // true — karena Mouse stoknya 0

// BANDINGKAN — cara memutar yang biasa dipakai pemula:
const adaYangHabisMemutar = produk.filter(p => p.stok === 0).length > 0;
console.log(adaYangHabisMemutar);   // true juga, tapi...

/* KENAPA .some() lebih baik — dua alasan, yang kedua lebih penting:

   1. EFISIENSI. .filter() memeriksa seluruh array sampai habis lalu
      membuat array baru — array yang langsung dibuang setelah dihitung
      panjangnya. .some() berhenti begitu menemukan satu yang cocok.

   2. KEJELASAN NIAT. `.filter(...).length > 0` memaksa pembaca
      menerjemahkan dua langkah untuk sampai pada satu pertanyaan
      sederhana. `.some(...)` menyatakan pertanyaannya secara langsung.

   CARA SAMPAIKAN — Analogi Absen Kelas:
   "Saya masuk kelas, terus nanya: 'ada nggak yang belum ngumpulin tugas?'
   Saya nggak butuh daftar lengkap siapa aja. Begitu nemu satu orang,
   jawabannya sudah ADA — saya berhenti nyari.

   Nah itu .some(). Sedangkan .filter() itu kalau saya bilang 'sebutkan
   SEMUA yang belum ngumpulin' — beda pertanyaan, beda alat.

   Aturan gampangnya: kalau pertanyaan kalian bisa dijawab 'iya' atau
   'nggak', pakai .some(). Kalau butuh daftarnya, baru .filter()."

   COLOK KE DEPAN: di React nanti .some() sering jadi penentu apakah
   sesuatu ditampilkan — misalnya banner "Ada barang habis stok" yang
   cuma muncul kalau .some() bernilai true. */


/* ---------- .reduce() — RINGKAS jadi satu nilai ---------- */

const totalHarga = produk.reduce((total, p) => total + p.harga, 0);
console.log(totalHarga);   // 8450000

/* AKUI BAHWA INI SULIT. Jangan pura-pura gampang.

   Jelaskan pelan, dua kata kunci saja:
   - `total` = "keranjang" yang isinya bertambah tiap putaran
   - `0`     = isi awal keranjang

   CARA SAMPAIKAN — Analogi Amplop Kas:
   "Ini yang paling bikin pusing, wajar.

   Bayangin kalian keliling nagih uang kas. Kalian bawa amplop — itu
   `total`. Awalnya kosong — itu angka `0` di ujung. Tiap orang kalian
   datangi, uangnya kalian masukin amplop. Selesai keliling, amplop
   isinya total semua.

   Nah `reduce` itu keliling + amplopnya."

   Kalau kelas mulai frustrasi, BERHENTI. Lihat LAMPIRAN D di dokumen
   materi — memaksakan reduce sampai semua paham itu kesalahan mentor
   baru nomor tiga. Prioritaskan .map dan .filter nempel sempurna. */

// Bantu peserta melihat isinya per putaran — jalankan ini kalau ada yang bingung:
produk.reduce((total, p) => {
  console.log(`amplop sebelum: ${total}, ketemu ${p.nama} (${p.harga})`);
  return total + p.harga;
}, 0);


/* ============================================================
   PUNCAK BAGIAN 4 — CHAINING (menyambung method)

   Ini kekuatan sesungguhnya. Tunjukkan sebagai penutup.
   ============================================================ */

const namaTersedia = produk
  .filter(p => p.stok > 0)   // saring dulu yang ada stok
  .map(p => p.nama);         // lalu ambil namanya

console.log(namaTersedia);   // ["Laptop", "Keyboard"]

/* CARA SAMPAIKAN:
   "Ini kayak jalur produksi pabrik. Data masuk, lewat mesin filter
   (buang yang jelek), lanjut ke mesin map (kemas), keluar jadi hasil
   akhir. Tiap mesin satu tugas.

   Kalau ini kalian tulis pakai for loop, jadi belasan baris yang susah
   dibaca."

   TEKANKAN DI PENUTUP: .map() dan .filter() ini PERSIS yang mereka pakai
   di React untuk menampilkan daftar. Ini bukan latihan sia-sia — ini
   alat harian mereka mulai P3. */
