import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../../../P6/demo/api/client";

/* ============================================================
   ALUR AUTENTIKASI — Bagian 1.

   Memakai Context dari P7, bukan Zustand. Alasannya konsisten
   dengan aturan yang diajarkan di sana: siapa yang login itu
   data yang JARANG BERUBAH — sekali login, sekali logout per
   sesi. Itu persis kriteria Context.

   Sebut ini di kelas. Peserta yang baru kenal Zustand cenderung
   memakainya untuk segalanya.

   ------------------------------------------------------------
   CARA SAMPAIKAN — Analogi Gelang Konser:

   "Kalian beli tiket di loket — itu login. Loket ngasih GELANG —
    itu token. Habis itu kalian nggak perlu nunjukin tiket lagi
    tiap masuk area. Cukup tunjukin gelang.

    Yang BIKIN gelang itu loket. Yang NGECEK gelang itu satpam di
    tiap pintu. Kalian cuma MAKAI.

    Nah frontend itu kalian. Bukan loket, bukan satpam."

   Ini penting untuk membereskan salah paham: peserta sering
   mengira frontend yang "mengizinkan" akses.
   ============================================================ */

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  /* `loading` WAJIB ADA. Tanpa ini, ProtectedRoute akan melempar
     pengguna yang sudah login ke halaman login — karena saat
     pertama dimuat, token belum sempat dibaca.

     Ini lima status antarmuka dari P6, dipakai lagi. */
  const [loading, setLoading] = useState(true);

  /* Baca token yang tersimpan saat aplikasi pertama dibuka.

     useEffect di sini MEMANG BUTUH — LocalStorage itu dunia di
     luar React, persis kriteria P4 Bagian 6. */
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    api
      .get("/auth/me")
      .then((res) => setUser(res.data))
      .catch(() => localStorage.removeItem("token")) // token kedaluwarsa
      .finally(() => setLoading(false)); // selalu, dari P6
  }, []);

  const login = async (username, password) => {
    const res = await api.post("/auth/login", { username, password });

    /* ⚠️ KEJUJURAN PERTAMA — WAJIB DISAMPAIKAN DI SINI.

       Baris ini yang bikin token bisa dibaca script mana pun.

       Peragakan 30 detik: buka Console, ketik
         localStorage.getItem("token")
       Tokennya muncul, teks biasa, bisa disalin.

       "Sekarang bayangin baris itu BUKAN KALIAN yang ngetik.
        Bayangin ada script asing yang jalan di halaman kalian.
        Dia bisa baca ini, kirim ke server dia, terus MASUK
        SEBAGAI KALIAN. Namanya XSS."

       STANDAR INDUSTRI 2026:
         access token  -> di memori (variabel biasa)
         refresh token -> cookie HttpOnly + Secure + SameSite
                          JavaScript TIDAK BISA membacanya sama sekali

       KENAPA KITA TETAP PAKAI INI DI KELAS:
       "Cara yang bener butuh KERJA SAMA BACKEND — server harus
        ngeset cookie-nya, ngatur CORS, nyediain endpoint refresh.
        Itu di luar kendali kalian sebagai frontend.

        Buat kelas ini, LocalStorage bikin kalian fokus ke ALURNYA
        — dan alur itu sama persis di dua cara.

        Yang saya minta cuma satu: jangan lupa ini versi kelas.
        Pas di kantor nanti, tanya tim backend: 'refresh token-nya
        di cookie HttpOnly kan?' Satu pertanyaan itu bakal bikin
        kalian keliatan tahu apa yang kalian omongin." */
    localStorage.setItem("token", res.data.token);
    setUser(res.data);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

/* Dibungkus custom hook — kebiasaan dari P5 dan P7.
   Komponen tidak perlu tahu nama context-nya. */
export const useAuth = () => useContext(AuthContext);

/* ============================================================
   CATATAN: token dibawa otomatis lewat INTERCEPTOR AXIOS dari P6.

     api.interceptors.request.use((config) => {
       const token = localStorage.getItem("token");
       if (token) config.headers.Authorization = `Bearer ${token}`;
       return config;
     });

   "Ingat satpam di pintu yang saya sebut di Pertemuan 6? Ini
    kegunaannya. Kalian nggak perlu nempelin token di dua puluh
    tempat."
   ============================================================ */
