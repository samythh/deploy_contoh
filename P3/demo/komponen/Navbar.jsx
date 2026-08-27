/* Komponen pertama yang dibuat di kelas (Bagian 3).
   Sengaja paling sederhana: belum ada props, belum ada logika.
   Tujuannya cuma satu — peserta melihat bahwa komponen itu
   FUNGSI BIASA yang mengembalikan tampilan. */

function Navbar() {
  return (
    <header className="flex justify-between items-center p-6 bg-white border-b">
      <span className="font-bold text-xl">TokoKita</span>

      {/* <nav> dipakai karena ini memang navigasi — kebiasaan semantic
          dari Pertemuan 1 tetap berlaku di React. Sebut ini di kelas. */}
      <nav className="flex gap-6">
        <a href="#" className="text-gray-600 hover:text-gray-900">Beranda</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">Produk</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">Kontak</a>
      </nav>
    </header>
  );
}

export default Navbar;
