import { useState } from "react";

/* ============================================================
   PERAGAAN TERPENTING HARI INI — Bagian 2, 2 menit.

   Kalau immutability cuma DISEBUT sebagai aturan ("jangan pakai
   .push(), pakai spread"), peserta akan menurut tanpa paham —
   lalu terkena di kasus yang sedikit berbeda (.sort(), mutasi
   object) dan tidak bisa mengenali polanya.

   JANGAN dilewati. Peragakan kegagalannya.

   ------------------------------------------------------------
   CARA MEMAKAI DI KELAS:

   1. Klik tombol MERAH ("Tambah dengan .push()") beberapa kali.
      → Layar DIAM. Tidak ada error. Tidak ada warning.

   2. Buka React DevTools → tab Components → klik MutasiJebakan.
      → Array `todos` di panel kanan TERNYATA BERTAMBAH.

   3. Biarkan mereka bingung sebentar. Tanyakan:
      "Datanya nambah, tapi layarnya nggak berubah.
       Menurut kalian kenapa?"

   4. Baru klik tombol HIJAU ("Tambah dengan spread").
      → Langsung muncul.

   5. Klik "Paksa gambar ulang" setelah beberapa kali .push()
      → Semua item yang 'hilang' tadi TIBA-TIBA MUNCUL SEMUA.
      Ini bukti paling kuat: datanya memang selalu ada, React
      cuma tidak pernah diberi tahu.

   ------------------------------------------------------------
   CARA SAMPAIKAN — Analogi Satpam & Nomor Seri:

   "React itu kayak satpam yang tugasnya ngecek 'ada yang berubah
    nggak?'. Tapi dia satpam yang malas — dia NGGAK BUKA KOTAKNYA.
    Dia cuma lihat NOMOR SERI di luar kotak.

    Nah, .push() itu kalian buka kotak lama, masukin barang, tutup
    lagi. Isinya berubah — tapi nomor serinya sama persis. Satpam
    lihat, bilang 'sama kayak tadi', terus nggak ngapa-ngapain.

    Yang harus kalian lakuin: bikin KOTAK BARU, isi dengan barang
    lama plus yang baru. Nomor serinya beda. Satpam langsung tahu.

    Kenapa satpamnya malas? Karena kalau tiap kali harus buka dan
    bandingin semua isi kotak, aplikasi kalian jadi lambat banget.
    Ngecek nomor seri itu instan."
   ============================================================ */

function MutasiJebakan() {
  const [todos, setTodos] = useState([{ id: 1, teks: "Todo awal" }]);
  const [paksa, setPaksa] = useState(0);

  /* ❌ MERUSAK — mengisi kotak lama.
     Alamat array-nya tidak berubah, jadi React tidak sadar. */
  const tambahSalah = () => {
    todos.push({ id: Date.now(), teks: "Ditambah pakai .push()" });
    setTodos(todos); // array yang SAMA — React membandingkan, hasilnya "tidak berubah"
  };

  /* ✅ BENAR — membuat kotak baru.
     Spread dari P2 Bagian 3. Bukan sintaks React, JavaScript biasa. */
  const tambahBenar = () => {
    setTodos([...todos, { id: Date.now(), teks: "Ditambah pakai spread" }]);
  };

  return (
    <section className="max-w-lg mx-auto p-6">
      <h2 className="text-xl font-bold mb-1">Peragaan: kenapa .push() gagal</h2>

      <p className="mb-4 text-sm text-gray-600">
        Klik tombol merah beberapa kali. Perhatikan layar — lalu buka React
        DevTools dan perhatikan datanya.
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={tambahSalah}
          className="px-3 py-1.5 rounded text-sm bg-red-100 text-red-700 border border-red-200"
        >
          Tambah dengan .push() — layar diam
        </button>

        <button
          onClick={tambahBenar}
          className="px-3 py-1.5 rounded text-sm bg-green-100 text-green-700 border border-green-200"
        >
          Tambah dengan spread — langsung muncul
        </button>

        <button
          onClick={() => setPaksa(paksa + 1)}
          className="px-3 py-1.5 rounded text-sm bg-white border"
        >
          Paksa gambar ulang
        </button>
      </div>

      <p className="mb-2 text-sm text-gray-500">
        Jumlah item di layar: <strong>{todos.length}</strong>
      </p>

      <ul className="flex flex-col gap-2">
        {todos.map((t) => (
          <li key={t.id} className="p-3 bg-white border rounded text-sm">
            {t.teks}
          </li>
        ))}
      </ul>

      {/* ============================================================
          SETELAH PERAGAAN — kalimat penutup:

          "Lihat pas saya pencet 'Paksa gambar ulang'. Semua item yang
           tadi kayak hilang, TIBA-TIBA MUNCUL SEMUA.

           Artinya datanya dari tadi memang ada. React-nya aja yang
           nggak pernah dikasih tahu.

           Nah, bug kayak gini yang paling nyebelin — nggak ada error,
           nggak ada petunjuk, layar cuma diem. Mulai sekarang: kalau
           layar nggak berubah dan nggak ada error, CURIGAI MUTASI
           duluan. Cek .push, .splice, .sort, atau obj.x = y."
          ============================================================ */}
    </section>
  );
}

export default MutasiJebakan;
