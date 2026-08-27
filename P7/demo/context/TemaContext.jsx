import { createContext, useContext, useState } from "react";

/* ============================================================
   CONTEXT API — Bagian 2.

   Tema adalah contoh yang TEPAT untuk Context: dia jarang
   berubah. Peserta klik toggle sekali, mungkin dua kali per
   sesi.

   Bandingkan dengan keranjang belanja di store/keranjang.js —
   yang diklik terus-menerus, dan karena itu lebih cocok Zustand.

   ------------------------------------------------------------
   CARA SAMPAIKAN — Analogi Pipa Air:

   "Props itu kayak ngangkat ember dari lantai satu ke lantai
    tujuh — lewat tiap lantai, satu-satu.

    Context itu kalian PASANG PIPA dari bawah ke atas. Lantai
    mana pun yang butuh air, tinggal buka kerannya. Lantai yang
    nggak butuh nggak usah ikut ngangkat apa-apa."
   ============================================================ */

const TemaContext = createContext();

export function TemaProvider({ children }) {
  const [gelap, setGelap] = useState(false);

  /* { children } itu CHILDREN PROPS dari P3. Bukan hal baru —
     sebut sambungannya. */
  return (
    <TemaContext.Provider value={{ gelap, setGelap }}>
      {children}
    </TemaContext.Provider>
  );
}

/* ============================================================
   Dibungkus custom hook — dari P5.

   KENAPA, dan ini argumen yang nyata:

   "Supaya komponen yang pakai nggak perlu tahu nama context-nya,
    dan nggak perlu import dua hal. Cukup useTema().

    Dan kalau nanti kalian ganti dari Context ke Zustand, yang
    diubah cuma SATU FILE INI — komponennya nggak perlu disentuh
    sama sekali."
   ============================================================ */
export const useTema = () => useContext(TemaContext);
