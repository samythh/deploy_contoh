/* ============================================================
   PENGANTAR TYPESCRIPT — Bagian 4, 25 menit.

   Bentuk data dari https://dummyjson.com/products

   PERHATIKAN: response-nya BUKAN langsung array. Dia object
   berisi { products, total, skip, limit }. Ini justru contoh
   bagus — peserta yang menulis `res.data.map(...)` akan gagal,
   dan tab Network yang memberi tahu bentuk aslinya.

   ------------------------------------------------------------
   CARA SAMPAIKAN — Analogi Kontrak Tertulis:

   "Data dari backend itu JANJI LISAN. Temen kalian di tim Backend
    bilang 'nanti ada field harga ya'. Kalian percaya, kalian tulis
    produk.harga.

    Dua minggu kemudian dia ganti jadi price — dan DIA LUPA NGASIH
    TAHU KALIAN.

    Aplikasi kalian nggak error. Dia cuma nampilin undefined di
    semua kartu, dan kalian baru tahu pas ada yang komplain.

    interface itu KONTRAK TERTULIS."

   ------------------------------------------------------------
   KEJUJURAN YANG WAJIB DISAMPAIKAN — jangan dilewati:

   "interface itu janji yang KALIAN TULIS SENDIRI. Dia NGGAK ngecek
    apa yang beneran dikirim server.

    Kalau kalian nulis harga: number tapi server ngirim teks
    '35000', TypeScript DIEM AJA — soalnya dia udah nggak ada pas
    kode kalian jalan. Dia cuma hidup di editor.

    Buat mastiin data yang beneran dateng itu bener, ada alat lain
    namanya runtime validation — Zod salah satunya. Itu di luar
    kelas ini, tapi kalian perlu tahu itu ada."

   Tanpa kalimat ini, peserta pulang dengan rasa aman palsu.
   ============================================================ */

export interface Produk {
  id: number;
  title: string;
  price: number;
  category: string;

  /* Tanda tanya = boleh tidak ada.
     Pakai ini untuk field yang belum tentu dikirim server.

     "Kalau kalian nggak kasih tanda tanya tapi datanya kadang
      nggak ada, editor kalian bakal protes di tempat yang salah." */
  thumbnail?: string;
  description?: string;
}

/* Bentuk response utuh dari dummyjson.
   Dipakai begini:

     const res = await api.get<ResponseProduk>("/products?limit=8");
     setProduk(res.data.products);   // <- bukan res.data */
export interface ResponseProduk {
  products: Produk[];
  total: number;
  skip: number;
  limit: number;
}
