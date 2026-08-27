/* Contoh CHILDREN PROPS (Bagian 4).

   `children` adalah apa pun yang ditaruh DI ANTARA tag buka dan
   tutup komponen ini. Analogi kotak kado: kotaknya sama, isinya
   bebas.

   Dipakai begini di App.jsx:

     <Footer>
       <p>© 2026 TokoKita</p>
     </Footer>

   Kalau tidak diisi, teks cadangan yang muncul. */

function Footer({ children }) {
  return (
    <footer className="p-6 text-center text-sm text-gray-500 border-t bg-white">
      {children ?? "© 2026 TokoKita"}
    </footer>
  );
}

export default Footer;
