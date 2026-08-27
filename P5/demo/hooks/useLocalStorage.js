import { useState, useEffect } from "react";

/* ============================================================
   CUSTOM HOOK #1 — Bagian 5. Diwajibkan di Tugas 3.

   PERHATIKAN: isi fungsi ini PERSIS yang peserta tulis di P4
   Bagian 6, di dalam TodoApp. Yang berubah cuma dipindah ke file
   terpisah dan diberi nama.

   Sebut itu eksplisit — custom hook bukan fitur canggih, ini cuma
   memindahkan kode berulang ke satu tempat. Hal yang sudah mereka
   lakukan sejak P2 waktu membuat utils.js. Bedanya, yang ini
   boleh memakai useState di dalamnya.

   ------------------------------------------------------------
   CARA SAMPAIKAN — kenapa dipisah:

   "Di P4 kalian nulis kode simpan-ke-LocalStorage di dalam
    TodoApp. Jalan.

    Terus minggu ini kalian butuh nyimpen favorit juga. Terus tema
    gelap juga. Kalian bakal nyalin kode yang sama tiga kali.

    Dan pas ada bug di situ? Kalian harus benerin di tiga tempat,
    dan pasti ada satu yang kelupaan."

   ------------------------------------------------------------
   KENAPA NAMANYA WAJIB DIAWALI `use`:

   Bukan aturan gaya. React memakai awalan itu untuk memeriksa
   apakah aturan hook dipatuhi.

     function ambilData()    { useState(...) }   React tidak memeriksa
     function useAmbilData() { useState(...) }   diperiksa

   "Sama kayak komponen yang wajib huruf besar di Pertemuan 3.
    React bedain jenis fungsi dari namanya."

   ------------------------------------------------------------
   SALAH PAHAM YANG SERING TERJADI — WAJIB DILURUSKAN:

   Custom hook berbagi LOGIKA, bukan STATE.

     KomponenA: useLocalStorage("a", 0)   state sendiri
     KomponenB: useLocalStorage("b", 0)   state SENDIRI, terpisah

   ANALOGI RESEP:
   "Custom hook itu RESEP, bukan MASAKAN. Dua orang pakai resep
    rendang yang sama, tapi rendangnya masing-masing — kalau A
    makan rendangnya, rendang B nggak berkurang.

    Kalau kalian butuh state yang beneran dipakai bareng, itu
    namanya global state — dan itu Pertemuan 7."
   ============================================================ */

export function useLocalStorage(kunci, nilaiAwal) {
  /* Nilai awal dibaca lewat FUNGSI (lazy initializer), bukan nilai
     langsung. Bentuk ini membuat localStorage cuma dibaca sekali
     saat komponen pertama muncul, bukan tiap render. */
  const [nilai, setNilai] = useState(() => {
    try {
      const tersimpan = localStorage.getItem(kunci);
      return tersimpan ? JSON.parse(tersimpan) : nilaiAwal;
    } catch {
      /* Bisa gagal kalau isinya bukan JSON yang sah — misalnya
         data lama dari versi aplikasi sebelumnya. Jangan sampai
         seluruh aplikasi mati cuma gara-gara ini. */
      return nilaiAwal;
    }
  });

  useEffect(() => {
    localStorage.setItem(kunci, JSON.stringify(nilai));
  }, [kunci, nilai]);

  /* Mengembalikan bentuk yang SAMA dengan useState: [nilai, setter].
     Ini disengaja — peserta jadi bisa memakainya tanpa belajar
     bentuk baru:

       const [todos, setTodos] = useLocalStorage("todos", []);

     Kebiasaan yang bagus untuk ditanamkan: custom hook sebaiknya
     meniru bentuk hook bawaan yang sudah dikenal. */
  return [nilai, setNilai];
}
