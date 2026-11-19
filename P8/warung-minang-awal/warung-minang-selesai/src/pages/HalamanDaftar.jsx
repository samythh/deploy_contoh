import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ALAMAT_DAFTAR } from "../alamat.js";
import { useAuth } from "../AuthContext.jsx";

// Polanya sama dengan HalamanMasuk. Bedanya hanya alamat yang dituju dan pesan saat ditolak.
function HalamanDaftar() {
  const [email, setEmail] = useState("");
  const [kataSandi, setKataSandi] = useState("");
  const [pesan, setPesan] = useState("");
  const { masuk } = useAuth();
  const navigate = useNavigate();

  async function kirim(e) {
    e.preventDefault();
    setPesan("");
    try {
      const respon = await fetch(ALAMAT_DAFTAR, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: kataSandi }),
      });
      // 400: email sudah terdaftar, atau kata sandi terlalu pendek (minimal 4 huruf di server latihan ini).
      if (respon.status === 400) {
        const alasan = await respon.json();
        setPesan("Pendaftaran ditolak server: " + alasan);
        return;
      }
      if (!respon.ok) {
        throw new Error("Server menjawab " + respon.status);
      }
      // Setelah mendaftar, server langsung memberi token, jadi pengguna tidak perlu masuk lagi.
      const data = await respon.json();
      masuk(data.accessToken, email);
      navigate("/admin");
    } catch {
      setPesan("Server tidak menjawab. Pastikan json-server-auth menyala.");
    }
  }

  let teksPesan = null;
  if (pesan !== "") {
    teksPesan = <p className="text-sm text-red-700">{pesan}</p>;
  }

  return (
    <section className="max-w-sm">
      <h2 className="text-2xl font-bold mb-4">Daftar</h2>
      <form onSubmit={kirim} className="flex flex-col gap-3 p-5 bg-white border border-gray-200 rounded-lg">
        <label className="flex flex-col gap-1 text-sm">
          Email
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-lg" />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          Kata sandi
          <input type="password" required value={kataSandi} onChange={(e) => setKataSandi(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-lg" />
        </label>
        <button type="submit" className="px-4 py-2 rounded-lg bg-green-800 text-white">Daftar</button>
        {teksPesan}
      </form>
      <p className="mt-3 text-sm">Sudah punya akun? <Link to="/masuk" className="text-green-800 underline">Masuk</Link></p>
    </section>
  );
}

export default HalamanDaftar;