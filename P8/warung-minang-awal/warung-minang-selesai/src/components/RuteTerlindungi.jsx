import { Navigate } from "react-router";
import { useAuth } from "../AuthContext.jsx";

// Penjaga pintu: halaman di dalamnya hanya tampil kalau sudah masuk.
// Ini mengatur tampilan, bukan keamanan. Yang benar-benar menolak adalah server (jawaban 401).
function RuteTerlindungi({ children }) {
  const { token } = useAuth();
  if (!token) {
    // replace: halaman yang ditolak tidak masuk riwayat, jadi tombol Back tidak memutar ke sini lagi.
    return <Navigate to="/masuk" replace />;
  }
  return children;
}

export default RuteTerlindungi;