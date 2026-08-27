import { TemaProvider, useTema } from "../context/TemaContext";
import { useKeranjang } from "../store/keranjang";

/* ============================================================
   PERAGAAN TERPENTING BAGIAN 2–3 — siapa yang ikut kebangun.

   Ini yang membedakan mengajar Context dengan benar atau tidak.
   Kalau batas Context cuma DISEBUT, peserta akan menaruh keranjang
   belanja di Context, lalu seluruh aplikasi mereka digambar ulang
   tiap klik — dan mereka tidak akan tahu kenapa.

   ------------------------------------------------------------
   CARA MEMAKAI DI KELAS:

   1. Buka React DevTools -> tab Components -> ikon roda gigi
   2. Centang "Highlight updates when components render"
   3. Klik "Ganti Tema"      -> SEMUA kotak Context berkedip,
                                termasuk yang isinya tidak berubah
   4. Klik "Tambah ke Keranjang" -> HANYA kotak Zustand yang
                                    berlangganan bagian itu berkedip

   Perhatikan kotak "Pengamat Diam" di kolom Context: dia tidak
   memakai nilai apa pun yang berubah, tapi tetap ikut berkedip.
   Itu inti masalahnya.

   ------------------------------------------------------------
   CARA SAMPAIKAN — dua analogi berpasangan:

   CONTEXT — Pengeras Suara Gedung:
   "Kalian mau ngasih tahu satu orang di lantai tiga. Tapi yang
    kedengeran SEMUA orang di semua lantai — dan semuanya berhenti
    kerja buat dengerin.

    Buat pengumuman yang jarang — 'gedung tutup jam 5' — nggak
    masalah. Tapi kalau tiap lima detik ada pengumuman, semua
    orang nggak bisa kerja."

   ZUSTAND — Grup WhatsApp per Topik:
   "Kalian cuma masuk grup yang kalian butuh. Ada kabar di grup
    'Keranjang'? Yang kena notif cuma anggota grup itu. Yang di
    grup 'Tema' nggak keganggu sama sekali.

    Bukan soal mana yang lebih canggih — soal SIAPA YANG IKUT
    KEBANGUN tiap ada perubahan."

   ------------------------------------------------------------
   KESIMPULAN YANG HARUS MEREKA BAWA PULANG:

   "Jarang berubah -> Context. Sering berubah -> Zustand.
    Dua-duanya dipakai di industri, sering bareng di aplikasi
    yang sama."
   ============================================================ */

/* ---------- Kolom kiri: semuanya lewat CONTEXT ---------- */

function TombolTema() {
  const { gelap, setGelap } = useTema();
  return (
    <button
      onClick={() => setGelap(!gelap)}
      className="px-3 py-1.5 border rounded bg-white text-sm w-full"
    >
      Ganti Tema (sekarang: {gelap ? "gelap" : "terang"})
    </button>
  );
}

function LabelTema() {
  const { gelap } = useTema();
  return (
    <div className="p-3 border rounded bg-white text-sm">
      Tema: <strong>{gelap ? "Gelap" : "Terang"}</strong>
    </div>
  );
}

/* INI KOTAK YANG PALING PENTING DITUNJUK.

   Komponen ini memanggil useTema() tapi TIDAK MEMAKAI satu pun
   nilainya. Dia tetap ikut berkedip tiap tema berubah.

   "Lihat kotak ini. Dia nggak nampilin apa-apa dari tema. Tapi
    dia tetep ikut kebangun — soalnya dia langganan context-nya." */
function PengamatDiam() {
  useTema();
  return (
    <div className="p-3 border rounded bg-white text-sm text-gray-500">
      Pengamat Diam — tidak memakai nilai apa pun, tapi tetap berkedip
    </div>
  );
}

/* ---------- Kolom kanan: semuanya lewat ZUSTAND ---------- */

function TombolKeranjang() {
  const tambah = useKeranjang((s) => s.tambah);
  return (
    <button
      onClick={() => tambah({ id: Date.now(), nama: "Rendang" })}
      className="px-3 py-1.5 border rounded bg-white text-sm w-full"
    >
      Tambah ke Keranjang
    </button>
  );
}

function JumlahKeranjang() {
  /* SELECTOR — "saya cuma mau angkanya".
     Komponen ini hanya digambar ulang kalau ANGKA ITU berubah. */
  const jumlah = useKeranjang((s) => s.isi.length);
  return (
    <div className="p-3 border rounded bg-white text-sm">
      Isi keranjang: <strong>{jumlah}</strong>
    </div>
  );
}

/* Berlangganan bagian LAIN dari store yang sama.
   Dia TIDAK ikut berkedip saat keranjang bertambah — karena
   yang dia langganani tidak berubah.

   Bandingkan dengan PengamatDiam di kolom Context. */
function PengamatLain() {
  const kosongkan = useKeranjang((s) => s.kosongkan);
  return (
    <button
      onClick={kosongkan}
      className="p-3 border rounded bg-white text-sm text-gray-500 w-full text-left"
    >
      Pengamat Lain — berlangganan bagian berbeda, tidak ikut berkedip
    </button>
  );
}

/* ---------- Susunannya ---------- */

function ContextVsZustand() {
  return (
    <section className="max-w-3xl mx-auto p-6">
      <h2 className="text-xl font-bold mb-1">Context vs Zustand</h2>
      <p className="mb-5 text-sm text-gray-600">
        Aktifkan <strong>Highlight updates</strong> di React DevTools, lalu
        klik kedua tombol bergantian. Perhatikan kotak mana saja yang berkedip.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TemaProvider>
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-sm">
              Context — semua consumer ikut
            </h3>
            <TombolTema />
            <LabelTema />
            <PengamatDiam />
          </div>
        </TemaProvider>

        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-sm">
            Zustand — hanya yang berlangganan
          </h3>
          <TombolKeranjang />
          <JumlahKeranjang />
          <PengamatLain />
        </div>
      </div>

      <p className="mt-6 text-xs text-gray-500">
        Keranjang memakai <code>persist</code> — coba refresh halaman, isinya
        bertahan. Itu syarat Tugas 4.
      </p>
    </section>
  );
}

export default ContextVsZustand;
