/* ============================================================
   KUNCI JAWABAN — TUGAS 1
   UNTUK MENTOR SAJA. Jangan dibagikan ke peserta.

   Butuh ../tugas/data.js. Cara cepat menguji: paste data.js dulu
   ke console, lalu paste file ini.
   ============================================================ */


/* ============================================================
   SOAL 1 — Ambil semua nama
   ============================================================ */

// pakai .map() karena jumlah hasilnya harus tetap 10 — kita mengubah
// bentuk tiap item (object → string), bukan membuang sebagian
const semuaNama = mahasiswa.map(m => m.nama);

console.log("Soal 1:", semuaNama);
// ["Aisyah Rahmadani", "Bagus Prakoso", ... ] — 10 nama

/* YANG SERING SALAH:
   - Pakai .forEach() + push manual. Hasilnya benar, tapi itu cara lama
     yang dibungkus method baru. Beri nilai penuh untuk "kode jalan",
     tapi kurangi di "method tepat" — dan jelaskan kenapa saat review.
   - Menulis m => m.nama tanpa return di dalam kurung kurawal:
     m => { m.nama }  →  hasilnya [undefined x10].
     Ini kesalahan paling umum. Kalau muncul, JANGAN langsung dibetulkan —
     tanya dulu "coba lihat hasilnya, menurut kalian kenapa undefined?" */


/* ============================================================
   SOAL 2 — Saring nilai >= 80
   ============================================================ */

// pakai .filter() karena kita MEMBUANG sebagian item berdasarkan syarat,
// bukan mengubah tiap item — yang lolos keluar apa adanya
const nilaiBagus = mahasiswa.filter(m => m.nilai >= 80);

console.log("Soal 2:", nilaiBagus);
// 5 orang: Aisyah (88), Citra (92), Elsa (81), Indah (95), Joko (83)

/* YANG SERING SALAH:
   - Tertukar dengan .map(), hasilnya array 10 item berisi true/false.
     Ini justru momen mengajar yang bagus: "lihat, .map() selalu
     mengembalikan 10 item. Kalian butuh yang lebih pendek — berarti
     bukan .map() alatnya."
   - Menulis > 80 padahal soal minta >= 80. Joko (83) tetap masuk,
     jadi errornya tidak kelihatan di sini — tapi tetap salah baca soal. */


/* ============================================================
   SOAL 3 — DUA PERTANYAAN, DUA BENTUK JAWABAN

   INI SOAL PENENTU. Yang ingin diuji bukan kemampuan memakai .some()
   atau .find() sendiri-sendiri, tapi apakah peserta menyadari bahwa
   "ada nggak?" dan "yang mana?" itu pertanyaan berbeda.
   ============================================================ */

// 3a
// pakai .some() karena pertanyaannya cuma butuh jawaban ya/tidak.
// .some() juga berhenti begitu ketemu satu yang cocok, tidak perlu
// memeriksa sisanya
const adaNilaiRendah = mahasiswa.some(m => m.nilai < 60);

console.log("Soal 3a:", adaNilaiRendah);
// true — ada Dimas (57) dan Hendra (48)

// 3b
// pakai .find() karena sekarang kita butuh ORANGNYA, bukan sekadar
// tahu ada atau tidak. Beda dari 3a: .some() menjawab "ada?",
// .find() menjawab "siapa?"
const siapaNilaiRendah = mahasiswa.find(m => m.nilai < 60);

console.log("Soal 3b:", siapaNilaiRendah);
// { nama: "Dimas Ardiansyah", nilai: 57, ... } — Dimas, bukan Hendra,
// karena .find() berhenti di yang PERTAMA ketemu

/* CATATAN PENILAIAN UNTUK SOAL 3 — baca sebelum menilai:

   Jawaban yang DITERIMA PENUH:
     3a .some()  +  3b .find(), dengan alasan yang menyebut perbedaan
     bentuk hasilnya (true/false vs object).

   Jawaban yang BERNILAI SEBAGIAN — hasilnya benar tapi salah alat:
     3a: mahasiswa.filter(m => m.nilai < 60).length > 0
     3a: mahasiswa.find(m => m.nilai < 60) !== undefined

     Keduanya menghasilkan true. Jangan disalahkan mentah-mentah —
     peserta ini berpikir logis, cuma belum tahu ada alat yang lebih
     pas. Beri nilai penuh di "kode jalan", kurangi di "method tepat".

     Saat review, tanyakan: "hasilnya benar. Tapi coba lihat, kalian
     bikin array baru cuma buat dihitung panjangnya lalu dibuang.
     Ada method yang langsung jawab pertanyaannya — masih ingat?"

   Jawaban yang SALAH — pakai method sama untuk 3a dan 3b:
     Ini persis yang ingin ditangkap soal ini. Kalau muncul, artinya
     perbedaan .some() vs .find() belum nempel. Catat namanya, dan
     tanyakan langsung di breakout room.

   PERANGKAP YANG DISENGAJA:
     Ada DUA orang bernilai di bawah 60 — Dimas (57) dan Hendra (48).
     Peserta yang menjawab "Hendra" berarti mengira .find() mencari
     yang paling ekstrem, bukan yang paling awal. Ini salah paham yang
     umum dan layak dibahas di kelas. */


/* ============================================================
   SOAL 4 — Rata-rata nilai
   ============================================================ */

// pakai .reduce() karena kita meringkas BANYAK nilai jadi SATU angka.
// .map() dan .filter() selalu mengembalikan array — di sini kita butuh
// satu angka saja
const totalNilai = mahasiswa.reduce((total, m) => total + m.nilai, 0);

const rataRata = totalNilai / mahasiswa.length;

console.log("Soal 4:", rataRata);
// total 762, dibagi 10 = 76.2

/* YANG SERING SALAH:
   - Lupa nilai awal 0. Tanpa itu, .reduce() memakai item PERTAMA sebagai
     nilai awal — yang berupa object, bukan angka. Hasilnya jadi string
     aneh seperti "[object Object]88". Kalau muncul, tunjukkan bahwa
     amplopnya lupa dikosongkan dulu.
   - Membagi dengan angka 10 yang diketik langsung, bukan mahasiswa.length.
     Jalan, tapi rapuh — kalau datanya bertambah, hasilnya salah diam-diam.
     Sebut ini saat review; ini kebiasaan yang layak dibetulkan sejak awal.

   KALAU KELAS BANYAK YANG GAGAL DI SINI: itu normal, dan sudah
   diantisipasi di LAMPIRAN D dokumen materi. Jangan memaksakan reduce
   sampai semua paham. Yang wajib nempel di P1 adalah .map dan .filter. */


/* ============================================================
   SOAL 5 — Chaining
   ============================================================ */

// filter dulu baru map, karena kita menyaring berdasarkan properti
// (jurusan & nilai) yang HILANG setelah di-map jadi nama saja.
// Kalau dibalik, datanya sudah jadi array string — tidak ada lagi
// .jurusan atau .nilai yang bisa disaring
const siBerprestasi = mahasiswa
  .filter(m => m.jurusan === "Sistem Informasi" && m.nilai >= 80)
  .map(m => m.nama);

console.log("Soal 5:", siBerprestasi);
// ["Aisyah Rahmadani", "Citra Maharani", "Elsa Nurfadhilah", "Indah Permatasari"]
// Gita (79) tidak masuk — SI tapi nilainya kurang
// Joko (83) tidak masuk — nilainya cukup tapi jurusannya TI

/* INI INTI SOAL 5. Tunjukkan versi terbaliknya di kelas — biarkan
   mereka melihat errornya sendiri: */

// mahasiswa
//   .map(m => m.nama)                          // sekarang tinggal array string
//   .filter(m => m.jurusan === "Sistem Informasi")   // m.jurusan → undefined
//                                                    // hasilnya array kosong []

/* CARA SAMPAIKAN:
   "Perhatikan kenapa filter harus duluan. Begitu kalian .map() jadi nama,
   datanya cuma tinggal teks — jurusan sama nilainya HILANG. Nggak ada lagi
   yang bisa disaring.

   Ini kayak jalur produksi: kalau barangnya sudah dibungkus rapat, kalian
   nggak bisa lagi nyortir berdasarkan isinya. Sortir dulu, baru bungkus."

   Perangkap ganda di soal ini: Gita nilainya kurang, Joko jurusannya beda.
   Peserta yang cuma menyaring satu syarat akan langsung ketahuan. */


/* ============================================================
   REKAP JAWABAN — untuk mengoreksi cepat

   Soal 1  10 nama
   Soal 2  5 orang — Aisyah, Citra, Elsa, Indah, Joko
   Soal 3a true
   Soal 3b Dimas Ardiansyah (57) — BUKAN Hendra
   Soal 4  76.2
   Soal 5  Aisyah, Citra, Elsa, Indah
   ============================================================ */
