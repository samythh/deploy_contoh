import { createContext, useContext, useState } from "react";

// Papan kedua, sama polanya dengan FavoritContext: siapa yang sedang masuk.
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  // Dibaca dari localStorage saat aplikasi dibuka, supaya status masuk tidak hilang setelah refresh.
  // null artinya belum masuk.
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [email, setEmail] = useState(localStorage.getItem("email"));

  function masuk(tokenBaru, emailBaru) {
    // Disimpan di dua tempat: state (supaya tampilan berubah) dan localStorage (supaya bertahan).
    // Catatan: localStorage bisa dibaca JavaScript apa pun di halaman ini, termasuk kode jahat (XSS).
    // Cukup untuk latihan, bukan cara aplikasi sungguhan menyimpan token.
    localStorage.setItem("token", tokenBaru);
    localStorage.setItem("email", emailBaru);
    setToken(tokenBaru);
    setEmail(emailBaru);
  }

  function keluar() {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setToken(null);
    setEmail(null);
  }

  const nilai = { token: token, email: email, masuk: masuk, keluar: keluar };
  return <AuthContext value={nilai}>{children}</AuthContext>;
}

export function useAuth() {
  return useContext(AuthContext);
}