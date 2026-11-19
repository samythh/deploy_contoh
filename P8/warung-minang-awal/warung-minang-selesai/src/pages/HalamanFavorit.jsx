import { useState, useEffect } from "react";
import { Link } from "react-router";
import { ALAMAT_API } from "../alamat.js";
import { useFavorit } from "../FavoritContext.jsx";

function HalamanFavorit() {
  // Daftar favorit hanya berisi id. Nama dan harganya diambil dari server.
  const { daftarFavorit, ubahFavorit } = useFavorit();
  const [daftarMenu, setDaftarMenu] = useState([]);
  const [status, setStatus] = useState("memuat");

  useEffect(() => {
    async function ambilMenu() {
      try {
        const respon = await fetch(ALAMAT_API);
        if (!respon.ok) {
          throw new Error("Server menjawab " + respon.status);
        }
        const data = await respon.json();
        setDaftarMenu(data);
        setStatus("berhasil");
      } catch {
        setStatus("gagal");
      }
    }
    ambilMenu();
  }, []);

  // Bukan state: dihitung dari daftarMenu dan daftarFavorit, jadi selalu ikut berubah.
  const menuFavorit = daftarMenu.filter((item) => daftarFavorit.includes(item.id));

  let isi;
  if (status === "memuat") {
    isi = <p className="text-gray-500">Memuat favorit...</p>;
  } else if (status === "gagal") {
    isi = <p className="text-red-700">Favorit gagal dimuat. Coba muat ulang halaman.</p>;
  } else if (menuFavorit.length === 0) {
    isi = (
      <p className="text-gray-500">
        Belum ada menu favorit. <Link to="/" className="text-green-800 underline">Lihat menu</Link>
      </p>
    );
  } else {
    isi = (
      <ul className="flex flex-col gap-2">
        {menuFavorit.map((item) => (
          <li key={item.id} className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
            <div>
              <Link to={"/menu/" + item.id} className="font-semibold hover:underline">{item.nama}</Link>
              <p className="text-sm text-green-800">Rp{item.harga.toLocaleString("id-ID")}</p>
            </div>
            <button onClick={() => ubahFavorit(item.id)} className="text-sm text-red-700 hover:underline">
              Hapus dari Favorit
            </button>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Menu Favorit</h2>
      {isi}
    </section>
  );
}

export default HalamanFavorit;
