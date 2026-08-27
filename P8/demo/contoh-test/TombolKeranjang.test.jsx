import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TombolKeranjang from "./TombolKeranjang";

/* ============================================================
   WAWASAN TESTING — Bagian 7, 15 menit.

   ⚠️ PESERTA MELIHAT, TIDAK DIMINTA MENULIS.
   Tidak diwajibkan di Tugas 4. Sebut eksplisit supaya tidak ada
   yang panik.

   ------------------------------------------------------------
   MULAI DARI MASALAH YANG SUDAH MEREKA ALAMI:

   "Angkat tangan yang pernah benerin satu hal, terus ada hal lain
    yang tadinya jalan jadi rusak — dan kalian baru sadar dua hari
    kemudian."

   Biasanya banyak yang mengangkat tangan.

   "Nah, itu yang diselesaikan testing. Bukan buktiin kode kalian
    bener — tapi MASTIIN YANG TADINYA JALAN NGGAK IKUT RUSAK pas
    kalian ubah sesuatu."

   ------------------------------------------------------------
   BACAKAN TEST INI SEBAGAI KALIMAT:

   "tampilkan komponennya - pastikan tulisannya 0 item - klik
    tombol Tambah - pastikan sekarang 1 item."

   Lalu tunjuk yang penting:

   "Perhatiin: test-nya nggak nyebut satu pun nama variabel atau
    nama fungsi di dalam komponen. Dia cuma ngecek YANG DILIHAT DAN
    DILAKUKAN PENGGUNA.

    Makanya namanya Testing Library — filosofinya: uji kayak
    pengguna, bukan kayak programmer. Kalau kalian ganti nama
    variabel di dalam, test-nya tetep lewat. Kalau kalian rusak
    tampilannya, test-nya gagal."

   ------------------------------------------------------------
   KENAPA TIM PRODUKSI MENSYARATKANNYA — Analogi Rem Tangan:

   "Bayangin kalian benerin satu fitur di aplikasi yang punya dua
    ratus halaman. Gimana cara mastiin nggak ada yang rusak? Buka
    dua ratus halaman satu-satu?

    Test itu yang ngecek otomatis tiap kali ada yang mau digabung.
    Kalau ada yang rusak, PR-nya ditolak sebelum sampai ke pengguna.

    Bukan buat ngelambatin — justru bikin tim BERANI ngubah kode.
    Tanpa test, orang takut nyentuh kode lama, dan aplikasi jadi
    beku."

   ------------------------------------------------------------
   SAMBUNGAN KE P1 — sebut ini di akhir:

   "screen.getByRole('button') itu CUMA BISA NEMUIN TOMBOL KALAU
    HTML KALIAN BENER. Jadi kebiasaan semantic dari Pertemuan 1 itu
    kepake lagi di sini. Semuanya nyambung."
   ============================================================ */

test("menambah jumlah saat diklik", async () => {
  render(<TombolKeranjang />);

  expect(screen.getByText("0 item")).toBeInTheDocument();

  await userEvent.click(screen.getByRole("button", { name: /tambah/i }));

  expect(screen.getByText("1 item")).toBeInTheDocument();
});
