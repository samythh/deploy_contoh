import { Navigate } from "react-router";
import { useAuth } from "./AuthContext";

/* ============================================================
   PROTECTED ROUTE — Bagian 2.

   Tiga hal yang sudah mereka punya, sebut sambungannya:
     { children }   dari P3 (children props)
     <Navigate>     dari P5 (React Router)
     state loading  dari P6 (lima status antarmuka)

   ------------------------------------------------------------
   KENAPA `loading` WAJIB DICEK DULUAN — ini kesalahan yang PASTI
   terjadi kalau tidak disebut:

   "Kalau kalian nggak cek loading, ini yang kejadian: pas halaman
    baru dimuat, aplikasi belum sempat baca token dari LocalStorage.
    Jadi user masih kosong — dan pengguna yang SUDAH LOGIN langsung
    dilempar ke halaman login.

    Mereka refresh, keluar sendiri. Refresh lagi, keluar lagi.
    Kelihatannya kayak aplikasi kalian rusak."

   ------------------------------------------------------------
   KENAPA `replace`:

   "Tanpa replace, halaman dashboard tetap masuk riwayat browser.
    Pengguna pencet Back, balik ke dashboard, dilempar lagi ke
    login, pencet Back lagi — KEJEBAK MUTER-MUTER.

    replace artinya 'ganti langkah terakhir, jangan nambah'."

   ------------------------------------------------------------
   ⚠️ KEJUJURAN KEDUA — WAJIB DISAMPAIKAN:

   "Protected Route itu BUKAN keamanan. Itu KENYAMANAN.

    Datanya tetep bisa diminta langsung ke server, dan SERVER yang
    harus nolak. Kalau servernya nggak ngecek, aplikasi kalian
    bocor — mau ada Protected Route atau enggak.

    Protected Route itu kayak naruh TIRAI di depan pintu. Orang
    nggak lihat isinya. Tapi tirai bukan kunci."

   Peragakan: salin alamat permintaan data dari tab Network, buka
   di tab baru tanpa login. Datanya tetap datang.
   ============================================================ */

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  // Jangan melompat sebelum tahu jawabannya
  if (loading) {
    return (
      <div className="max-w-lg mx-auto p-6">
        <div className="h-24 bg-gray-200 rounded animate-pulse" />
      </div>
    );
  }

  if (!user) return <Navigate to="/login" replace />;

  return children;
}

export default ProtectedRoute;
