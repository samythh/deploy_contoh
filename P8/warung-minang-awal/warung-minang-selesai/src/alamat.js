// Alamat server dibaca dari file .env.local, bukan ditulis langsung di sini.
// Saat aplikasi diterbitkan, alamatnya cukup diganti di pengaturan, tanpa mengubah kode.
const ALAMAT_SERVER = import.meta.env.VITE_ALAMAT_SERVER;

export const ALAMAT_API = ALAMAT_SERVER + "/menu";
export const ALAMAT_MASUK = ALAMAT_SERVER + "/login";
export const ALAMAT_DAFTAR = ALAMAT_SERVER + "/register";