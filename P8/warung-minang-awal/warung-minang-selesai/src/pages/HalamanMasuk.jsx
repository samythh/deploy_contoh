import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ALAMAT_MASUK } from "../alamat.js";
import { useAuth } from "../AuthContext.jsx";

function HalamanMasuk() {
  const [email, setEmail] = useState("");
  const [kataSandi, setKataSandi] = useState("");
  const [pesan, setPesan] = useState("");
  const { masuk } = useAuth();
  const navigate = useNavigate();

  async function kirim(e) {
    e.preventDefault();
    setPesan("");
    try {
      // POST, bukan GET: kata sandi dikirim di body, tidak ikut tercatat di alamat.
      const respon = await fetch(ALAMAT_MASUK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: kataSandi }),
      });
      // 400: email tidak terdaftar atau kata sandi salah. Pesannya sengaja tidak membedakan keduanya.
      if (respon.status === 400) {
        setPesan("Email atau kata sandi salah.");
        return;
      }
      if (!respon.ok) {
        throw new Error("Server menjawab " + respon.status);
      }
      const data = await respon.json();
      // Server menjawab dengan accessToken: tanda pengenal yang dibawa di setiap permintaan berikutnya.
      masuk(data.accessToken, email);
      navigate("/");
    } catch {
      setPesan("Server tidak menjawab. Pastikan json-server-auth menyala.");
    }
  }

  // Pesan hanya tampil kalau ada isinya, sama seperti label "Habis" di Kartu.
  let teksPesan = null;
  if (pesan !== "") {
    teksPesan = <p className="text-sm text-red-700">{pesan}</p>;
  }

  return (
    <section className="max-w-sm">
      <h2 className="text-2xl font-bold mb-4">Masuk</h2>
      <form onSubmit={kirim} className="flex flex-col gap-3 p-5 bg-white border border-gray-200 rounded-lg">
        <label className="flex flex-col gap-1 text-sm">
          Email
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-lg" />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          Kata sandi
          {/* type="password": isinya disamarkan di layar, tapi tetap terkirim apa adanya */}
          <input type="password" required value={kataSandi} onChange={(e) => setKataSandi(e.target.value)} className="px-3 py-2 border border-gray-300 rounded-lg" />
        </label>
        <button type="submit" className="px-4 py-2 rounded-lg bg-green-800 text-white">Masuk</button>
        {teksPesan}
      </form>
      <p className="mt-3 text-sm">Belum punya akun? <Link to="/daftar" className="text-green-800 underline">Daftar</Link></p>
    </section>
  );
}

export default HalamanMasuk;