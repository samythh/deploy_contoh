import { useState } from "react";

/* ============================================================
   CONTROLLED COMPONENTS & VALIDASI — Bagian 4.

   Perhatikan pasangan yang saling mengunci di tiap input:
     value / checked  → membaca dari state
     onChange         → menulis ke state

   State adalah SATU-SATUNYA sumber kebenaran. Input di layar
   cuma cerminannya.

   ------------------------------------------------------------
   CARA SAMPAIKAN — Analogi Papan Tulis:

   "Bayangin ada BUKU CATATAN (itu state) dan PAPAN TULIS (itu
    input di layar).

    Cara biasa: orang nulis langsung di papan tulis. Kalian nggak
    tahu apa yang ditulis sampai kalian jalan ke sana dan baca.

    Cara controlled: papan tulis itu cuma CERMINAN buku catatan.
    Orang ngetik → masuk ke buku dulu → papan nyontek dari buku.

    Ribet? Iya, satu langkah lebih panjang. Tapi sekarang kalian
    SELALU TAHU isinya tanpa perlu ngintip. Mau divalidasi? Baca
    buku. Mau dikosongin? Hapus buku, papan ikut kosong."
   ============================================================ */

function TodoForm({ onTambah }) {
  const [teks, setTeks] = useState("");
  const [prioritas, setPrioritas] = useState("biasa");
  const [penting, setPenting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    /* WAJIB. Tanpa ini, form membuat halaman RELOAD dan semua state
       hilang — aplikasi balik ke awal. Peserta akan bingung kenapa
       aplikasinya "restart sendiri".

       CARA SAMPAIKAN:
       "Form HTML punya kelakuan bawaan dari zaman dulu: begitu
        di-submit, dia kirim ke server terus reload halaman. Zaman
        itu memang begitu caranya. Di React, reload artinya semua
        state hilang. Makanya baris ini wajib." */
    e.preventDefault();

    /* .trim() — spasi doang bukan isi yang sah. */
    if (teks.trim() === "") {
      setError("Todo tidak boleh kosong");
      return;
    }

    onTambah({
      /* crypto.randomUUID() — id unik dan STABIL untuk key.
         Menyambung langsung ke pelajaran key di P3: jangan pakai
         index array. */
      id: crypto.randomUUID(),
      teks: teks.trim(),
      prioritas,
      penting,
      selesai: false,
    });

    /* Kosongkan form dengan mengosongkan STATE-nya, bukan
       menyentuh input di layar. Input ikut kosong sendiri. */
    setTeks("");
    setPenting(false);
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white border rounded-lg mb-4">
      {/* --- TEXT INPUT --- */}
      <input
        value={teks}
        onChange={(e) => setTeks(e.target.value)}
        placeholder="Mau ngerjain apa?"
        className="w-full px-3 py-2 border rounded mb-3"
      />

      <div className="flex flex-wrap items-center gap-4 mb-3">
        {/* --- DROPDOWN --- */}
        <select
          value={prioritas}
          onChange={(e) => setPrioritas(e.target.value)}
          className="px-3 py-2 border rounded text-sm"
        >
          <option value="biasa">Biasa</option>
          <option value="tinggi">Prioritas tinggi</option>
        </select>

        {/* --- CHECKBOX ---
            JEBAKAN YANG PASTI TERJADI: checkbox pakai `checked`,
            BUKAN `value`. Dan dibaca lewat e.target.checked, bukan
            e.target.value. Sebut duluan di kelas. */}
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={penting}
            onChange={(e) => setPenting(e.target.checked)}
          />
          Tandai penting
        </label>
      </div>

      {/* Tombol mati kalau isinya kosong — ini yang gampang dilakukan
          KARENA state jadi sumber kebenaran. Sebut ini sebagai bukti
          kegunaan controlled component. */}
      <button
        type="submit"
        disabled={teks.trim() === ""}
        className="px-4 py-2 bg-blue-600 text-white rounded text-sm disabled:bg-gray-300"
      >
        Tambah
      </button>

      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </form>
  );
}

export default TodoForm;
