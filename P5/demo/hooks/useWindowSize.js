import { useState, useEffect } from "react";

/* ============================================================
   CUSTOM HOOK #2 — Bagian 5.

   Ini contoh useEffect yang BENAR menurut aturan P4 Bagian 6:
   `window` itu di luar React, jadi memang butuh effect untuk
   menyinkronkannya.

   ------------------------------------------------------------
   CLEANUP-NYA WAJIB. Perhatikan baris `return () => ...`.

   Tanpa removeEventListener, tiap kali komponen muncul-hilang-
   muncul, listener-nya MENUMPUK. Sepuluh kali muncul, sepuluh
   listener jalan bareng.

   "Ingat yang di P4 soal cleanup? Ini contoh nyatanya."

   Ini juga tempat yang bagus untuk mengingatkan StrictMode:
   di mode pengembangan, React sengaja memasang-melepas-memasang
   ulang effect untuk menguji apakah cleanup kalian benar.
   ============================================================ */

export function useWindowSize() {
  const [lebar, setLebar] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setLebar(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return lebar;
}
