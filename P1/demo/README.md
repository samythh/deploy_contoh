# Demo Live — Pertemuan 1

File-file di sini untuk **dipakai mentor saat mengajar**, bukan dibagikan ke peserta.

Semua file berdiri sendiri — cukup double-click, tidak perlu server atau install apa pun.

> **CARA PENYAMPAIAN:** file-file di sini **langsung memakai cara modern**. Cara lama tidak diperagakan — kalimat selingannya sudah disiapkan di komentar tiap file, cukup sebut sambil lewat. Pengecualian: `02-semantic/` tetap memakai perbandingan, karena di situ perbandingannya *adalah* argumennya (maksimal 2 menit).

---

## Isi & Pemetaan ke Materi

| File | Bagian di materi | Menit |
|---|---|:--:|
| [01-kerangka.html](01-kerangka.html) | Bagian 1 — Anatomi Dokumen HTML | 10–20 |
| [02-semantic/](02-semantic/) | Bagian 2 — HTML5 Semantic | 20–40 |
| [03-box-model.html](03-box-model.html) | Bagian 3 — CSS & Box Model | 40–58 |
| [04-flexbox.html](04-flexbox.html) | Bagian 4 — Flexbox | 58–85 |
| [05-grid-responsif.html](05-grid-responsif.html) | Bagian 5 — Grid & Mobile-First | 85–98 |
| [06-tailwind.html](06-tailwind.html) | Bagian 6 — TailwindCSS | 98–112 |

---

## Dua Momen Wow — Jangan Dilewatkan

**1. Grid yang menyesuaikan sendiri** ([05-grid-responsif.html](05-grid-responsif.html))
Buka file-nya, lalu **tarik-tarik lebar jendela browser pelan-pelan** di depan kelas. Kolomnya berubah 4 → 3 → 2 → 1 tanpa satu pun media query. Lakukan ini **sebelum** menjelaskan apa pun — lihat dulu, baru paham.

**2. Navbar lima baris** ([04-flexbox.html](04-flexbox.html) contoh 7)
Bangun bersama peserta, jangan ditunjukkan jadi. Lima baris CSS menghasilkan navbar utuh — boleh disebut sambil lewat bahwa dulu ini butuh 20 baris plus tambalan, tapi cukup satu kalimat.

---

## Catatan per File

**`01-kerangka.html`** — Ketik ulang dari nol bersama peserta, jangan langsung dibuka. Mengetik manual sekali adalah syarat sebelum Emmet diberikan sebagai hadiah di akhir bagian. File ini memuat dua peragaan: hapus `<meta charset>` lalu lihat karakter `—` rusak, dan pindahkan `<h1>` ke `<head>` lalu lihat teksnya hilang.

**`02-semantic/`** — **Buka `divsoup.html` dan `semantic.html` berdampingan.** Keduanya memakai `style.css` yang sama dan tampilannya identik — itu inti demonstrasinya. Peserta perlu melihat sendiri bahwa `div` tidak salah dan tidak error, supaya argumen semantic tidak terdengar sewenang-wenang.

Sebelum membuka versi semantic, tanyakan ke kelas: *"tanpa scroll ke atas, ada yang bisa bilang `</div>` yang mana menutup navigasi?"* Kesulitan mereka itu justru pesannya.

`semantic.html` juga menandai satu `div` yang **memang tepat** — pembungkus grid. Tunjukkan ini; peserta perlu tahu kapan `div` benar, bukan cuma kapan kurang tepat.

**`03-box-model.html`** — Minta peserta **menebak dulu** sebelum melihat hasil: "yang mana yang kotaknya jadi lebih gemuk, padding atau margin?" Lalu buka DevTools → Computed. Menebak lalu mengecek jauh lebih nempel daripada langsung diberi tahu. File ini juga memperagakan `content-box` vs `border-box` — kenapa `width: 180px` bisa terukur 226px.

**`04-flexbox.html`** — Porsi terbesar hari ini. **Langsung mulai dari contoh 1 (Flexbox dasar).** Float sudah dihapus dari file ini; jangan memperagakannya dan jangan menyuruh peserta mencobanya.

Cara lama cukup disebut sebagai selingan satu kalimat di contoh 5, saat pusat sempurna tercapai — kalimatnya sudah ditulis di komentar file. Selingan kedua ada di contoh 6 untuk `gap` vs margin.

Tujuh contoh berurutan, dari satu baris CSS sampai navbar utuh. Bangun bersama peserta, jangan ditunjukkan jadi.

**`05-grid-responsif.html`** — Kalau waktu menipis, cukup ajarkan contoh 1 (grid `auto-fit`). Itu yang mereka butuhkan untuk tugas. Media query manual bisa disebut sekilas.

**`06-tailwind.html`** — **Posisinya paling akhir, dan itu disengaja.** Peserta baru menulis CSS manual satu jam penuh; sekarang mereka punya rasa sakit yang bisa diobati. Kalau Tailwind diberikan di awal, mereka akan menulis `flex justify-center` tanpa tahu itu singkatan dari apa — sama seperti Emmet, shortcut diberikan *setelah* paham manual.

Yang paling penting di file ini: **petakan tabel CSS → Tailwind satu per satu di layar.** Peserta harus melihat bahwa tidak ada konsep baru, cuma nama pendek.

Jangan lewati contoh nomor 4 (class yang panjangnya sebelas). Kelemahan Tailwind harus Anda sebut duluan — peserta akan melihatnya sendiri dalam 5 menit, dan kalau Anda diam, kredibilitas Anda yang turun.

**Ini bagian yang paling aman dipotong** kalau waktu habis.

---

## Sebelum Kelas

- Perbesar font editor minimal **18pt**, pakai **tema terang** — tema gelap sering tidak terbaca lewat proyektor
- Buka browser dan DevTools berdampingan dengan VS Code
- Uji tarik-jendela di `05-grid-responsif.html` sampai mulus

---

## Terkait

- [Tugas untuk peserta](../tugas/) — yang ini dibagikan
- [Kunci jawaban](../kunci-jawaban/) — mentor saja
