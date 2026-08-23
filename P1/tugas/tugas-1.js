/* ============================================================
   TUGAS 1 — Manipulasi Data dengan JavaScript Modern
   Pertemuan 1 · Kelas Frontend Web Development

   Nama    : ______________________
   Jurusan : ______________________

   ------------------------------------------------------------
   CARA MENGERJAKAN

   1. Isi bagian yang bertanda TODO. Jangan hapus soal atau komentarnya.
   2. Di TIAP jawaban, tulis komentar 1 baris: KENAPA memilih method itu.
      Komentar ini bagian dari penilaian, bukan pelengkap.
   3. Buka index.html di browser, lalu buka Console (F12) untuk melihat
      hasilnya. Atau paste seluruh file ini ke Console.

   Baca soal.md kalau butuh penjelasan lengkap tiap soal.
   ============================================================ */


/* ============================================================
   CONTOH — dikerjakan bersama di kelas, bukan bagian penilaian.

   Perhatikan bentuk komentar alasannya. Yang seperti inilah yang
   diharapkan di jawaban kalian.
   ============================================================ */

// pakai .filter() karena kita MEMBUANG sebagian item berdasarkan syarat,
// bukan mengubah tiap item
const semesterTiga = mahasiswa.filter(m => m.semester === 3);
console.log("CONTOH — mahasiswa semester 3:", semesterTiga);


/* ============================================================
   SOAL 1  ·  Ambil semua nama mahasiswa
   Hasil yang diharapkan: array berisi 10 nama.
   ============================================================ */

// TODO: alasan kenapa pakai method ini —
const semuaNama = null;   // TODO: ganti null dengan jawaban kalian

console.log("Soal 1 — semua nama:", semuaNama);


/* ============================================================
   SOAL 2  ·  Saring mahasiswa yang nilainya 80 ke atas
   Hasil yang diharapkan: array berisi object mahasiswa (bukan nama saja).
   ============================================================ */

// TODO: alasan kenapa pakai method ini —
const nilaiBagus = null;   // TODO

console.log("Soal 2 — nilai >= 80:", nilaiBagus);


/* ============================================================
   SOAL 3  ·  DUA PERTANYAAN TENTANG HAL YANG SAMA

   Baca pelan-pelan. Dua pertanyaan ini terdengar mirip, tapi
   MENUNTUT BENTUK JAWABAN YANG BERBEDA. Kalau kalian memakai
   method yang sama untuk keduanya, ada yang terlewat.

   3a. Ada nggak mahasiswa yang nilainya di bawah 60?
       → jawabannya cuma "iya" atau "nggak" (true / false)

   3b. Kalau ada, siapa orang PERTAMA yang nilainya di bawah 60?
       → jawabannya satu object mahasiswa
   ============================================================ */

// TODO: alasan kenapa pakai method ini —
const adaNilaiRendah = null;   // TODO — hasilnya harus true/false

console.log("Soal 3a — ada yang di bawah 60?:", adaNilaiRendah);

// TODO: alasan kenapa pakai method ini, DAN kenapa berbeda dari 3a —
const siapaNilaiRendah = null;   // TODO — hasilnya harus satu object

console.log("Soal 3b — siapa orangnya:", siapaNilaiRendah);


/* ============================================================
   SOAL 4  ·  Hitung rata-rata nilai seluruh mahasiswa

   Petunjuk: jumlahkan dulu semua nilai, baru bagi dengan jumlah
   mahasiswa. Ingat analogi amplop nagih kas.
   ============================================================ */

// TODO: alasan kenapa pakai method ini —
const totalNilai = null;   // TODO

const rataRata = null;     // TODO — bagi totalNilai dengan jumlah mahasiswa

console.log("Soal 4 — rata-rata nilai:", rataRata);


/* ============================================================
   SOAL 5  ·  GABUNGAN (chaining)

   Ambil NAMA mahasiswa Sistem Informasi yang nilainya 80 ke atas,
   dalam SATU rantai method. Jangan pakai variabel perantara.

   Hasil yang diharapkan: array berisi nama saja (string), bukan object.
   ============================================================ */

// TODO: alasan kenapa urutannya begitu, kenapa bukan sebaliknya —
const siBerprestasi = null;   // TODO

console.log("Soal 5 — SI dengan nilai >= 80:", siBerprestasi);


/* ============================================================
   SELESAI.

   Sebelum mengumpulkan, cek sekali lagi:
   [ ] Semua console.log jalan tanpa error
   [ ] Tiap jawaban punya komentar alasan
   [ ] Alasannya menjelaskan KENAPA method itu, bukan mengulang APA
       yang dilakukan kode

   Contoh alasan yang KURANG: "pakai map untuk mengambil nama"
       (itu cuma mengulang kodenya)
   Contoh alasan yang BAIK:   "pakai .map() karena jumlah hasilnya harus
       tetap 10 — kita mengubah tiap item, bukan membuang sebagian"
   ============================================================ */
