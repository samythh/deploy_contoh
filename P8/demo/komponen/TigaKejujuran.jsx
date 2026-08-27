import { useState } from "react";

/* ============================================================
   TIGA MOMEN KEJUJURAN P8 — dikumpulkan jadi satu halaman.

   Ketiganya berbunyi sama: "yang barusan kalian bikin itu BUKAN
   KEAMANAN." Kalau ketiganya dilewati, peserta lulus dengan
   keyakinan yang salah tentang apa yang bisa dilindungi frontend
   — dan membawanya ke tempat kerja.

   Ini kesalahan mentor baru nomor satu di P8, karena akibatnya
   TIDAK TERLIHAT DI KELAS. Terlihatnya di kantor pertama mereka.

   ------------------------------------------------------------
   PRINSIP BESAR YANG MENYATUKAN KETIGANYA:

   "Frontend nggak bisa nyimpen rahasia.

    Semua yang kalian kirim ke browser bisa dibaca pengguna.
    Tugas kalian bukan MENYEMBUNYIKAN — tapi tahu APA YANG BOLEH
    ADA DI SANA dan apa yang harus tetap di server."
   ============================================================ */

function TigaKejujuran() {
  const [tokenTerbaca, setTokenTerbaca] = useState("");

  const simpanTokenPalsu = () => {
    localStorage.setItem(
      "token",
      "eyJhbGciOiJIUzI1NiJ9.contoh-token-palsu.tanda-tangan"
    );
    setTokenTerbaca("");
  };

  /* Ini persis yang bisa dilakukan script asing mana pun yang
     berjalan di halaman kalian. Satu baris. */
  const bacaSepertiPenyerang = () => {
    setTokenTerbaca(localStorage.getItem("token") ?? "(belum ada token)");
  };

  return (
    <section className="max-w-2xl mx-auto p-6 flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold mb-1">Tiga Momen Kejujuran</h2>
        <p className="text-sm text-gray-600">
          Ketiganya wajib diperagakan. Total sekitar 4 menit.
        </p>
      </div>

      {/* ============================================================
          KEJUJURAN 1 — Token di LocalStorage bisa dibaca siapa saja.

          PERAGAAN 30 DETIK, DAN INI YANG PALING BERKESAN:
          Buka Console, ketik  localStorage.getItem("token")
          Tokennya muncul, teks biasa, bisa disalin.

          CARA SAMPAIKAN:
          "Sekarang bayangin baris itu BUKAN KALIAN yang ngetik.
           Bayangin ada script asing yang jalan di halaman kalian —
           dari iklan, dari library pihak ketiga, dari kolom komentar
           yang nggak disaring.

           Script itu bisa baca LocalStorage kalian, kirim token ke
           server dia, terus MASUK SEBAGAI KALIAN. Namanya XSS.

           Dan pengguna nggak akan sadar apa-apa."
          ============================================================ */}
      <div className="p-4 border rounded-lg bg-white">
        <h3 className="font-semibold mb-1">
          1. Token di LocalStorage bisa dibaca script mana pun
        </h3>
        <p className="text-sm text-gray-600 mb-3">
          Simpan token, lalu baca dengan satu baris — persis yang bisa
          dilakukan script asing.
        </p>

        <div className="flex flex-wrap gap-2 mb-3">
          <button
            onClick={simpanTokenPalsu}
            className="px-3 py-1.5 border rounded bg-white text-sm"
          >
            Simpan token (seolah baru login)
          </button>
          <button
            onClick={bacaSepertiPenyerang}
            className="px-3 py-1.5 rounded text-sm bg-red-100 text-red-700 border border-red-200"
          >
            Baca seperti penyerang
          </button>
        </div>

        {tokenTerbaca && (
          <pre className="p-3 bg-gray-900 text-green-300 rounded text-xs overflow-x-auto">
            {tokenTerbaca}
          </pre>
        )}

        <p className="mt-3 text-xs text-gray-500">
          Standar industri 2026: <em>access token</em> di memori +{" "}
          <em>refresh token</em> di cookie <code>HttpOnly</code> — yang
          JavaScript <strong>tidak bisa</strong> baca sama sekali.
        </p>
      </div>

      {/* ============================================================
          KEJUJURAN 2 — Protected Route bukan keamanan.

          PERAGAAN 1 MENIT:
          Buka tab Network, salin alamat permintaan data dashboard,
          tempel di tab browser baru TANPA login. Datanya tetap datang.

          CARA SAMPAIKAN:
          "Protected Route itu BUKAN keamanan. Itu KENYAMANAN.

           Yang dia lakuin cuma: nggak nampilin halaman yang nggak
           berguna buat orang yang belum login. Itu doang.

           Datanya sendiri? Tetep bisa diminta langsung ke server, dan
           SERVER yang harus nolak. Kalau servernya nggak ngecek,
           aplikasi kalian bocor — mau ada Protected Route atau enggak.

           Analoginya: Protected Route itu kayak naruh TIRAI di depan
           pintu. Orang nggak lihat isinya. Tapi tirai bukan kunci."

          SAMBUNGKAN KE CAPSTONE:
          "Nanti pas Capstone, ini yang harus kalian tanyain ke tim
           Backend: 'endpoint ini udah dicek token-nya belum?'
           Jangan asumsi udah."
          ============================================================ */}
      <div className="p-4 border rounded-lg bg-white">
        <h3 className="font-semibold mb-1">
          2. Protected Route menyembunyikan tampilan, bukan data
        </h3>
        <p className="text-sm text-gray-600 mb-2">
          Peragakan langsung: buka tab <strong>Network</strong>, salin alamat
          permintaan data dashboard, tempel di tab baru <strong>tanpa login</strong>.
        </p>
        <p className="text-sm text-gray-600">
          Datanya tetap datang. Yang harus menolak adalah <strong>server</strong>.
        </p>
        <p className="mt-3 text-xs text-gray-500">
          Protected Route itu tirai di depan pintu. Orang tidak melihat isinya —
          tapi tirai bukan kunci.
        </p>
      </div>

      {/* ============================================================
          KEJUJURAN 3 — Env var di frontend bukan rahasia.

          PERAGAAN 2 MENIT, DAN INI YANG PALING MENGEJUTKAN:
          1. npm run build
          2. Buka dist/assets/*.js
          3. Cari nilai VITE_API_URL di dalamnya
          Ketemu, teks biasa.

          CARA SAMPAIKAN:
          ".env di frontend itu BUKAN tempat rahasia. Pas di-build,
           semua isinya DITEMPEL LANGSUNG ke dalam file JavaScript yang
           dikirim ke browser pengunjung. Siapa pun bisa buka dan baca.

           Jadi apa gunanya? BUKAN buat nyembunyiin — tapi buat
           MEMBEDAKAN. Alamat server waktu ngoding beda sama waktu udah
           live. Itu doang.

           Yang NGGAK BOLEH masuk situ: API key berbayar, password
           database, secret apa pun. Kalau kalian taruh di situ, itu
           sama aja kayak nulis di papan pengumuman."

          KALAU DITANYA "terus API key taruh di mana?":
          Di server. Frontend memanggil server kalian sendiri, server
          yang memanggil layanan berbayar dengan key-nya.
          ============================================================ */}
      <div className="p-4 border rounded-lg bg-white">
        <h3 className="font-semibold mb-1">
          3. Environment variable ikut terkirim ke browser
        </h3>
        <p className="text-sm text-gray-600 mb-2">
          Peragakan: <code>npm run build</code>, lalu cari nilai{" "}
          <code>VITE_API_URL</code> di dalam <code>dist/assets/*.js</code>.
        </p>
        <p className="text-sm text-gray-600">
          Ketemu, teks biasa. <code>.env</code> di frontend gunanya{" "}
          <strong>membedakan</strong> lingkungan, bukan menyembunyikan.
        </p>
        <p className="mt-3 text-xs text-gray-500">
          Nilai sekarang:{" "}
          <code>{import.meta.env.VITE_API_URL ?? "(belum diisi)"}</code>
        </p>
      </div>

      <div className="p-4 border-l-4 border-gray-800 bg-gray-50">
        <p className="text-sm">
          <strong>Benang merahnya:</strong> frontend tidak bisa menyimpan
          rahasia. Semua yang dikirim ke browser bisa dibaca pengguna. Tugas
          kalian bukan menyembunyikan — tapi tahu apa yang boleh ada di sana,
          dan apa yang harus tetap di server.
        </p>
      </div>
    </section>
  );
}

export default TigaKejujuran;
