import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { ALAMAT_API } from "../alamat.js";
import { useFavorit } from "../FavoritContext.jsx";

function HalamanDetail() {
  // Bagian :id dari alamat. Untuk /menu/3, isinya "3" (teks, bukan angka).
  const { id } = useParams();
  const [menu, setMenu] = useState(null);
  // Empat keadaan: "memuat", "berhasil", "tidak-ada" (server menjawab 404), atau "gagal".
  const [status, setStatus] = useState("memuat");
  const { daftarFavorit, ubahFavorit } = useFavorit();

  // [id] di akhir: jalankan saat halaman pertama tampil, dan jalankan lagi kalau id di alamat berubah.
  useEffect(() => {
    async function ambilSatuMenu() {
      try {
        // Hanya satu menu yang diminta, bukan semuanya: GET /menu/3
        const respon = await fetch(ALAMAT_API + "/" + id);
        // 404 bukan kerusakan. Artinya nomor itu memang tidak ada, jadi pesannya dibedakan.
        if (respon.status === 404) {
          setStatus("tidak-ada");
          return;
        }
        if (!respon.ok) {
          throw new Error("Server menjawab " + respon.status);
        }
        const data = await respon.json();
        setMenu(data);
        setStatus("berhasil");
      } catch {
        setStatus("gagal");
      }
    }
    ambilSatuMenu();
  }, [id]);

  let isi;
  if (status === "memuat") {
    isi = <p className="text-gray-500">Memuat menu...</p>;
  } else if (status === "gagal") {
    isi = <p className="text-red-700">Menu gagal dimuat. Coba muat ulang halaman.</p>;
  } else if (status === "tidak-ada") {
    isi = <p className="text-gray-500">Menu nomor {id} tidak ditemukan.</p>;
  } else {
    let ketersediaan = "Tersedia";
    if (menu.tersedia === false) {
      ketersediaan = "Habis";
    }

    // Menu yang ditambah lewat form belum punya deskripsi, jadi disiapkan teks pengganti.
    let deskripsi = "Belum ada deskripsi untuk menu ini.";
    if (menu.deskripsi) {
      deskripsi = menu.deskripsi;
    }

    // menu.id dipakai, bukan id dari alamat, karena menu.id angka dan daftar favorit berisi angka.
    let teksTombol = "Tambah ke Favorit";
    if (daftarFavorit.includes(menu.id)) {
      teksTombol = "Hapus dari Favorit";
    }

    isi = (
      <article className="p-6 bg-white border border-gray-200 rounded-lg">
        <p className="text-sm text-gray-500">{menu.kategori} · {ketersediaan}</p>
        <h2 className="text-3xl font-bold mt-1">{menu.nama}</h2>
        <p className="mt-2 text-xl font-bold text-green-800">Rp{menu.harga.toLocaleString("id-ID")}</p>
        <p className="mt-4 text-gray-700">{deskripsi}</p>
        <button
          onClick={() => ubahFavorit(menu.id)}
          className="mt-6 px-4 py-2 rounded-lg bg-green-800 text-white"
        >
          {teksTombol}
        </button>
      </article>
    );
  }

  return (
    <section>
      <Link to="/" className="inline-block mb-4 text-sm text-green-800 hover:underline">
        ← Kembali ke menu
      </Link>
      {isi}
    </section>
  );
}

export default HalamanDetail;
