/* ============================================================
   BAGIAN 3 — ES6+ Fundamentals   (40–70 menit)

   Empat fitur, satu pola yang sama untuk semuanya:
   cara lama yang menyakitkan  →  obatnya.
   ============================================================ */


/* ============================================================
   3.1  ARROW FUNCTION
   ============================================================ */

// CARA LAMA
function tambahLama(a, b) {
  return a + b;
}

// ARROW FUNCTION — sama persis hasilnya, jauh lebih pendek
const tambah = (a, b) => a + b;

console.log(tambahLama(2, 3), tambah(2, 3));   // 5 5

/* KENAPA: di React nanti mereka menulis fungsi kecil terus-menerus.
   Bayangkan kalau tiap kali harus menulis `function` panjang.

   JANGAN masuk ke aturan `this` di P2 — itu overload. Simpan sampai
   benar-benar dibutuhkan. */


/* ============================================================
   3.2  TEMPLATE LITERALS
   ============================================================ */

const nama = "Mikail";
const umur = 20;

// CARA LAMA — tanda plus dan petik di mana-mana
const pesanLama = "Halo, " + nama + "! Umurmu " + umur + " tahun.";

// TEMPLATE LITERAL — pakai backtick ` dan ${}
const pesan = `Halo, ${nama}! Umurmu ${umur} tahun.`;

console.log(pesanLama);
console.log(pesan);

/* TUNJUKKAN DI LAYAR: backtick itu ` bukan ' — biasanya di kiri atas
   keyboard, sebaris dengan angka 1. Ini penyebab error nomor satu di
   bagian ini. Minta peserta menemukan tombolnya dulu sebelum lanjut. */

// Bonus yang tidak bisa dilakukan cara lama — multi-baris:
const kartu = `
Nama  : ${nama}
Umur  : ${umur}
Status: ${umur >= 17 ? "Dewasa" : "Belum"}
`;
console.log(kartu);


/* ============================================================
   3.3  DESTRUCTURING
   ============================================================ */

const user = { nama: "Mikail", kota: "Padang", umur: 20 };

// CARA LAMA — kata "user" diulang tiga kali
const namaLama = user.nama;
const kotaLama = user.kota;
const umurLama = user.umur;

// DESTRUCTURING — ambil sekaligus
const { nama: namaUser, kota, umur: umurUser } = user;

console.log(namaUser, kota, umurUser);

/* Versi array — INI YANG DIPAKAI DI REACT HOOKS NANTI.
   Sebut eksplisit: "bentuk ini bakal kalian lihat tiap hari di React." */

const warna = ["merah", "hijau"];
const [pertama, kedua] = warna;

console.log(pertama, kedua);   // merah hijau

// Colokan ke depan — di P4 mereka akan menulis persis bentuk ini:
// const [jumlah, setJumlah] = useState(0);


/* ============================================================
   3.4  SPREAD & REST  —  keduanya pakai ..., tapi kebalikan
   ============================================================ */

// SPREAD — "buka isi" sebuah array/object
const angka = [1, 2, 3];
const angkaBaru = [...angka, 4, 5];
console.log(angkaBaru);        // [1, 2, 3, 4, 5]

const dasar = { nama: "Mikail" };
const lengkap = { ...dasar, kota: "Padang" };
console.log(lengkap);          // { nama: "Mikail", kota: "Padang" }

// REST — "kumpulkan sisa" jadi satu
const [juara, ...lainnya] = [1, 2, 3, 4];
console.log(juara, lainnya);   // 1 [2, 3, 4]

/* PENTING — tunjukkan bahwa yang asli TIDAK berubah.
   Ini pondasi aturan immutability di React (P4). Tanam sekarang,
   panen nanti. */

console.log(angka);            // [1, 2, 3] — masih utuh, tidak ikut berubah
console.log(dasar);            // { nama: "Mikail" } — masih utuh

/* CARA SAMPAIKAN:
   "Perhatikan: `angka` yang asli nggak berubah sama sekali. Yang kita
   bikin itu salinan baru yang sudah ditambah.

   Ingat baik-baik ya. Nanti di React ada aturan: kalau mau ubah data,
   JANGAN diubah langsung — bikin salinan baru yang sudah diubah. Nah,
   titik tiga inilah alat bikin salinannya.

   Sekarang mungkin belum kelihatan gunanya. Percaya saya, ini bakal
   jadi salah satu yang paling sering kalian pakai." */
