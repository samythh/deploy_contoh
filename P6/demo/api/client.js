import axios from "axios";

/* ============================================================
   SATU FILE UNTUK SELURUH APLIKASI — Bagian 2.

   Jangan ada axios.get("https://...") bertebaran di banyak
   komponen. Alamat server ditulis SEKALI, di sini.

   ------------------------------------------------------------
   CARA SAMPAIKAN — kenapa baseURL:

   "Bayangin kalian nulis alamat server lengkap di dua puluh
    tempat. Terus perusahaan pindah server.

    Kalian harus cari-ganti dua puluh tempat, dan pasti ada satu
    yang kelupaan — dan yang kelupaan itu baru ketahuan pas udah
    dipakai orang."

   COLOKAN KE P8 / TUGAS 4:
   "Nanti di Pertemuan 8, alamat ini nggak ditulis di kode sama
    sekali — dia dipindah ke environment variable, biar beda
    antara waktu ngoding sama waktu udah live."
   ============================================================ */

export const api = axios.create({
  baseURL: "https://dummyjson.com",

  /* timeout WAJIB ADA. Tanpa ini, kalau server menggantung,
     permintaan kalian menunggu SELAMANYA dan spinner tidak
     pernah berhenti.

     Sebut ini saat membahas "spinner muter terus" di Lampiran A. */
  timeout: 8000,
});

/* ============================================================
   INTERCEPTOR — batasi 3 menit di kelas.

   Ini bagian yang PALING AMAN DIPOTONG kalau waktu mepet;
   kegunaannya baru benar-benar terasa di P8.

   CARA SAMPAIKAN — Analogi Satpam di Pintu:

   "Interceptor itu satpam yang berdiri di pintu. SEMUA permintaan
    yang keluar lewat dia dulu, dan dia bisa nambahin sesuatu.

    Gunanya nanti di Pertemuan 8: tiap permintaan harus bawa token
    login. Daripada kalian nempelin token di dua puluh tempat,
    kalian pasang satpamnya sekali."
   ============================================================ */

api.interceptors.request.use((config) => {
  // Di P8 nanti tokennya diambil dari LocalStorage:
  // const token = localStorage.getItem("token");
  // if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

/* Interceptor pada RESPONSE — berguna untuk menangani error di
   satu tempat, bukan di tiap komponen. Sebut sekilas saja. */
api.interceptors.response.use(
  (res) => res,
  (err) => {
    // Pesan teknis untuk MENTOR/DEVELOPER, bukan untuk pengguna.
    // Yang dilihat pengguna adalah pesan ramah di komponen.
    console.error("[API]", err.message);
    return Promise.reject(err);
  }
);
