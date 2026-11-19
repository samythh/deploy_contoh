import { createContext, useContext, useState } from "react";

// Context: tempat menaruh data yang dipakai komponen di halaman yang berbeda,
// supaya tidak perlu dioper lewat props dari satu komponen ke komponen lain.
const FavoritContext = createContext(null);

function bacaFavorit() {
  const teks = localStorage.getItem("favorit");
  if (teks === null) {
    return [];
  }
  return JSON.parse(teks);
}

// Komponen pembungkus. Semua komponen di dalamnya (children) bisa membaca daftar favorit.
export function FavoritProvider({ children }) {
  // Yang disimpan cukup id-nya. Nama dan harga tetap diambil dari server,
  // supaya data menu hanya punya satu sumber.
  const [daftarFavorit, setDaftarFavorit] = useState(bacaFavorit());

  function simpanFavorit(daftarBaru) {
    setDaftarFavorit(daftarBaru);
    localStorage.setItem("favorit", JSON.stringify(daftarBaru));
  }

  function ubahFavorit(id) {
    if (daftarFavorit.includes(id)) {
      // Sudah favorit: buat array baru tanpa id itu.
      simpanFavorit(daftarFavorit.filter((idFavorit) => idFavorit !== id));
    } else {
      // Belum favorit: buat array baru berisi yang lama, ditambah id itu.
      simpanFavorit([...daftarFavorit, id]);
    }
  }

  // Yang dibagikan: datanya, dan satu-satunya fungsi yang boleh mengubahnya.
  const nilai = { daftarFavorit: daftarFavorit, ubahFavorit: ubahFavorit };

  return <FavoritContext value={nilai}>{children}</FavoritContext>;
}

// Hook buatan sendiri, supaya komponen lain cukup menulis useFavorit().
export function useFavorit() {
  return useContext(FavoritContext);
}
