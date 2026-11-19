import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Kartu from "../components/Kartu.jsx";
import FormTambah from "../components/FormTambah.jsx";
import { ALAMAT_API } from "../alamat.js";
import { useAuth } from "../AuthContext.jsx";
import { useFavorit } from "../FavoritContext.jsx";

// Halaman pengelola: menambah dan menghapus menu. Hanya bisa dibuka setelah masuk (lihat App.jsx).
function HalamanAdmin() {
  const [daftarMenu, setDaftarMenu] = useState([]);
  const [status, setStatus] = useState("memuat");
  const { token, keluar } = useAuth();
  const { daftarFavorit, ubahFavorit } = useFavorit();
  const navigate = useNavigate();

  // Membaca menu tidak butuh token: semua orang boleh membaca.
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

  // 401 artinya server tidak menerima token kita: belum ada, salah, atau sudah kedaluwarsa (1 jam).
  // Token yang ditolak tidak ada gunanya disimpan, jadi kita keluar dan minta masuk lagi.
  function tanganiDitolak() {
    alert("Sesi kamu sudah berakhir. Silakan masuk lagi.");
    keluar();
    navigate("/masuk");
  }

  async function tambahMenu(menuBaru) {
    try {
      const respon = await fetch(ALAMAT_API, {
        method: "POST",
        // Authorization membawa token. Tanpa baris ini server menjawab 401.
        headers: { "Content-Type": "application/json", Authorization: "Bearer " + token },
        body: JSON.stringify(menuBaru),
      });
      if (respon.status === 401) {
        tanganiDitolak();
        return false;
      }
      if (!respon.ok) {
        throw new Error("Server menjawab " + respon.status);
      }
      const menuTersimpan = await respon.json();
      setDaftarMenu([...daftarMenu, menuTersimpan]);
      return true;
    } catch {
      alert("Menu gagal ditambahkan. Pastikan server menyala, lalu coba lagi.");
      return false;
    }
  }

  async function hapusMenu(item) {
    if (!confirm("Hapus " + item.nama + "?")) {
      return;
    }
    try {
      const respon = await fetch(ALAMAT_API + "/" + item.id, {
        method: "DELETE",
        headers: { Authorization: "Bearer " + token },
      });
      if (respon.status === 401) {
        tanganiDitolak();
        return;
      }
      if (!respon.ok) {
        throw new Error("Server menjawab " + respon.status);
      }
      setDaftarMenu(daftarMenu.filter((menu) => menu.id !== item.id));
      // Menu yang sudah dihapus tidak boleh tertinggal di daftar favorit.
      if (daftarFavorit.includes(item.id)) {
        ubahFavorit(item.id);
      }
    } catch {
      alert("Menu gagal dihapus. Pastikan server menyala, lalu coba lagi.");
    }
  }

  let isi;
  if (status === "memuat") {
    isi = <p className="text-gray-500">Memuat menu...</p>;
  } else if (status === "gagal") {
    isi = <p className="text-red-700">Menu gagal dimuat. Coba muat ulang halaman.</p>;
  } else if (daftarMenu.length === 0) {
    isi = <p className="text-gray-500">Belum ada menu. Tambahkan lewat form di atas.</p>;
  } else {
    isi = (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {daftarMenu.map((item) => (
          <Kartu key={item.id} item={item} onHapus={() => hapusMenu(item)} />
        ))}
      </div>
    );
  }

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Kelola Menu</h2>
      <FormTambah onTambah={tambahMenu} />
      {isi}
    </section>
  );
}

export default HalamanAdmin;