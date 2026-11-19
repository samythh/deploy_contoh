import { Link } from "react-router";
import { useFavorit } from "../FavoritContext.jsx";
import { useAuth } from "../AuthContext.jsx";

// Navbar dijadikan komponen sendiri supaya App.jsx tetap pendek
// dan kalau navbar bermasalah, kita langsung tahu file mana yang dibuka.
function Navbar() {
  // Navbar tidak menerima props apa pun. Jumlah favorit dan status masuk dibaca langsung dari Context.
  const { daftarFavorit } = useFavorit();
  const { token, email, keluar } = useAuth();

  // Bagian kanan Navbar berbeda untuk pengunjung dan pengelola.
  let bagianAkun = <Link to="/masuk">Masuk</Link>;
  if (token) {
    bagianAkun = (
      <>
        <Link to="/admin">Kelola Menu</Link>
        <span className="text-green-200">{email}</span>
        {/* Keluar cukup menghapus token. Kalau sedang di /admin, penjaganya sendiri yang mengarahkan ke /masuk. */}
        <button onClick={keluar} className="underline">Keluar</button>
      </>
    );
  }

  return (
    <nav className="flex flex-wrap items-center justify-between gap-2 px-6 py-4 bg-green-800 text-white">
      {/* Link, bukan <a href>: pindah halaman tanpa memuat ulang, jadi state tidak hilang */}
      <Link to="/" className="text-xl font-bold">Warung Minang</Link>
      <div className="flex flex-wrap gap-4 text-sm">
        <Link to="/">Menu</Link>
        <Link to="/favorit">Favorit ({daftarFavorit.length})</Link>
        {bagianAkun}
      </div>
    </nav>
  );
}

export default Navbar;