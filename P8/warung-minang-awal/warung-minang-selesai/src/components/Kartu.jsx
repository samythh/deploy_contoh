import { Link } from "react-router";

// Satu object menu -> satu kartu (sama seperti buatKartu di Pertemuan 3).
// item diterima lewat props, jadi satu komponen ini bisa menampilkan menu apa pun.
// onHapus juga props: Kartu tidak menghapus sendiri, ia hanya melapor ke halaman yang memakainya.
function Kartu({ item, onHapus }) {
  // null artinya "tidak menampilkan apa-apa", dipakai untuk menu yang masih tersedia
  let label = null;
  if (item.tersedia === false) {
    label = <span className="text-xs font-semibold text-red-700">Habis</span>;
  }

  // Tombol Hapus hanya muncul kalau halaman memberi onHapus.
  // Halaman menu untuk pengunjung tidak memberinya; halaman admin memberinya.
  let tombolHapus = null;
  if (onHapus) {
    tombolHapus = (
      <button onClick={onHapus} className="self-start mt-2 text-sm text-red-700 hover:underline">
        Hapus
      </button>
    );
  }

  return (
    <article className="flex flex-col gap-1 p-5 bg-white border border-gray-200 rounded-lg">
      <h3 className="text-lg font-semibold">
        {/* Alamat detail dibuat dari id, karena id unik dan tidak pernah berubah */}
        <Link to={"/menu/" + item.id} className="hover:underline">{item.nama}</Link>
      </h3>
      <p className="text-sm text-gray-500">{item.kategori}</p>
      <p className="mt-2 font-bold text-green-800">Rp{item.harga.toLocaleString("id-ID")}</p>
      {label}
      {tombolHapus}
    </article>
  );
}

export default Kartu;