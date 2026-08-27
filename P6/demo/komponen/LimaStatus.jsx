import { useState } from "react";

/* ============================================================
   PERAGAAN BAGIAN 3 — Lima Status Antarmuka.

   BOBOT TERBESAR TUGAS 3 ADA DI SINI. Kalau waktu meleset, ambil
   dari bagian lain — jangan dari sini.

   File ini punya tombol untuk MEMAKSA tiap status, supaya mentor
   bisa menunjukkan kelimanya tanpa menunggu kondisi jaringan yang
   pas. Peragaan yang nyata (Slow 3G / Offline) dilakukan setelah
   ini, di Bagian 5.

   ------------------------------------------------------------
   CARA SAMPAIKAN — Analogi Restoran, lanjutan dari P1:

   "Ingat analogi restoran di Pertemuan 1? Kita pakai lagi.

    INITIAL — kalian baru duduk, belum mesan apa-apa.
    LOADING — pesanan udah masuk, lagi dimasak.
    SUCCESS — makanan dateng. Ini yang semua orang mikirin.
    EMPTY   — pelayan balik dan bilang 'maaf, menunya habis'.
              Perhatiin: pesanan kalian BERHASIL nyampe dapur,
              dapurnya JAWAB. Jawabannya aja yang 'nggak ada'.
    ERROR   — pelayannya NGGAK BALIK-BALIK, atau dapurnya kebakaran.
              Kalian nggak dapet jawaban sama sekali.

    Yang paling sering ketuker itu EMPTY sama ERROR. Dua-duanya
    bikin layar kosong, tapi penyebabnya beda total — dan yang
    harus kalian tulis ke pengguna juga beda total."
   ============================================================ */

const contohProduk = [
  { id: 1, title: "Rendang", price: 35000 },
  { id: 2, title: "Sate Padang", price: 28000 },
  { id: 3, title: "Es Tebak", price: 12000 },
];

function LimaStatus() {
  const [status, setStatus] = useState("initial");

  const tombol = [
    ["initial", "Initial"],
    ["loading", "Loading"],
    ["success", "Success"],
    ["empty", "Empty"],
    ["error", "Error"],
  ];

  return (
    <section className="max-w-2xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-1">Lima Status Antarmuka</h2>
      <p className="mb-4 text-sm text-gray-600">
        Klik tiap tombol dan perhatikan bedanya — terutama Empty vs Error.
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tombol.map(([nilai, label]) => (
          <button
            key={nilai}
            onClick={() => setStatus(nilai)}
            className={`px-3 py-1.5 rounded text-sm border ${
              status === nilai
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="p-4 bg-white border rounded-lg min-h-48">
        {/* ============================================================
            URUTAN PENGECEKANNYA PENTING — cek loading DULUAN.

            Kalau tidak, saat pertama memuat, produk.length === 0 akan
            benar dan pengguna melihat "tidak ada hasil" sebelum
            datanya sempat datang.

            "Ini kesalahan yang halus banget: aplikasi kalian bakal
             ngedip 'tidak ada hasil' setengah detik tiap kali loading.
             Nggak error, cuma kelihatan murahan."
            ============================================================ */}

        {/* 1. INITIAL — belum ada permintaan sama sekali */}
        {status === "initial" && (
          <div className="text-center py-10">
            <p className="text-gray-500 mb-3">
              Cari produk untuk mulai menampilkan hasil.
            </p>
            <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm">
              Muat Produk
            </button>
          </div>
        )}

        {/* 2. LOADING — SKELETON, bukan spinner.

            "Spinner itu bilang 'tunggu'. Skeleton itu bilang 'tunggu,
             dan nanti bentuknya bakal kayak gini'.

             Pas datanya dateng, layarnya nggak lompat-lompat — soalnya
             tempatnya udah disiapin. Dan orang ngerasa lebih cepet,
             walaupun waktunya sama persis." */}
        {status === "loading" && (
          <div className="flex flex-col gap-3 animate-pulse">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-3">
                <div className="h-12 w-12 bg-gray-200 rounded" />
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded w-1/3 mb-2" />
                  <div className="h-3 bg-gray-200 rounded w-1/4" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 3. SUCCESS — yang semua orang mikirin */}
        {status === "success" && (
          <ul className="flex flex-col gap-2">
            {contohProduk.map((p) => (
              <li
                key={p.id}
                className="flex justify-between p-3 border rounded text-sm"
              >
                <span>{p.title}</span>
                <span className="text-gray-500">
                  Rp {p.price.toLocaleString("id-ID")}
                </span>
              </li>
            ))}
          </ul>
        )}

        {/* 4. EMPTY — permintaan BERHASIL, isinya saja yang kosong.

            Perhatikan nadanya: netral, membantu, menawarkan jalan
            keluar. Bukan pesan kesalahan. */}
        {status === "empty" && (
          <div className="text-center py-10">
            <p className="font-medium mb-1">Tidak ada hasil</p>
            <p className="text-sm text-gray-500 mb-3">
              Coba kata kunci lain atau ubah filternya.
            </p>
            <button className="px-3 py-1.5 border rounded text-sm">
              Hapus filter
            </button>
          </div>
        )}

        {/* 5. ERROR — permintaan GAGAL. Tidak dapat jawaban sama sekali.

            TOMBOL COBA LAGI WAJIB ADA:
            "Kalau kalian cuma nulis 'Terjadi kesalahan', satu-satunya
             pilihan pengguna itu REFRESH SELURUH HALAMAN — dan itu
             ngilangin semua yang udah dia kerjain.

             Satu tombol 'Coba Lagi' ngubah pengalaman dari 'aplikasinya
             rusak' jadi 'ada gangguan sebentar'."

            Perhatikan juga pesannya: untuk MANUSIA, bukan untuk
            programmer. "AxiosError: Network Error" ditaruh di
            console.error, bukan di layar. */}
        {status === "error" && (
          <div className="text-center py-10">
            <p className="font-medium text-red-700 mb-1">
              Gagal memuat produk
            </p>
            <p className="text-sm text-gray-500 mb-3">
              Periksa koneksi internetmu, lalu coba lagi.
            </p>
            <button className="px-4 py-2 bg-red-600 text-white rounded text-sm">
              Coba Lagi
            </button>
          </div>
        )}
      </div>

      {/* ============================================================
          SETELAH MEMPERAGAKAN KELIMANYA — lanjut ke Bagian 5 dengan
          simulasi yang NYATA:

            Slow 3G   → skeleton terlihat beberapa detik
            Offline   → error state muncul, uji tombol Coba Lagi
            Cari "zzzz" → empty state, BUKAN error

          "Ini persis yang bakal saya lakuin pas ngoreksi Tugas 3."
          ============================================================ */}
    </section>
  );
}

export default LimaStatus;
