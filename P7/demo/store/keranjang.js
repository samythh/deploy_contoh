import { create } from "zustand";
import { persist } from "zustand/middleware";

/* ============================================================
   ZUSTAND — Bagian 3.

   Keranjang adalah contoh yang TEPAT untuk Zustand: dia sering
   berubah. Tiap klik "tambah" mengubah isinya.

   Kalau ini ditaruh di Context, SELURUH aplikasi digambar ulang
   tiap klik — dan peserta tidak akan tahu kenapa aplikasinya
   terasa berat.

   ------------------------------------------------------------
   PERHATIKAN: tidak ada <Provider> yang membungkus apa pun.
   Store-nya hidup di luar pohon komponen.

   ------------------------------------------------------------
   IMMUTABILITY DARI P4 TETAP BERLAKU:
     [...state.isi, barang]        spread, P2 Bagian 3
     state.isi.filter(...)          P2 Bagian 4

   Aturannya sama persis. Sebut ini — peserta sering mengira
   library baru berarti aturan baru.
   ============================================================ */

export const useKeranjang = create(
  /* ============================================================
     persist() — SYARAT TUGAS 4.

     "state global dipertahankan setelah halaman dimuat ulang
      melalui Local Storage."

     Satu pembungkus, dan isinya bertahan setelah refresh.

     "Ingat useLocalStorage yang kalian bikin di Pertemuan 5? Ini
      versi jadinya. Kalian udah paham cara kerjanya — sekarang
      kalian boleh pakai yang siap pakai."
     ============================================================ */
  persist(
    (set) => ({
      isi: [],

      tambah: (barang) =>
        set((state) => ({ isi: [...state.isi, barang] })),

      hapus: (id) =>
        set((state) => ({ isi: state.isi.filter((b) => b.id !== id) })),

      kosongkan: () => set({ isi: [] }),
    }),
    { name: "keranjang" } // kunci di LocalStorage
  )
);
