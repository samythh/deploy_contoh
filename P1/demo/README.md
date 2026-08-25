# Demo Live — Pertemuan 1

File-file di sini untuk **dipakai mentor saat mengajar**, bukan dibagikan ke peserta.

Semua file berdiri sendiri — cukup double-click, tidak perlu server atau install apa pun.

> **CARA PENYAMPAIAN:** file-file di sini **langsung memakai cara modern**. Cara lama tidak diperagakan — kalimat selingannya sudah disiapkan di komentar tiap file, cukup sebut sambil lewat. Pengecualian: `02-semantic/` tetap memakai perbandingan, karena di situ perbandingannya *adalah* argumennya (maksimal 2 menit).

---

## Isi & Pemetaan ke Materi

| File | Bagian di materi | Menit |
|---|---|:--:|
| [01-kerangka.html](01-kerangka.html) | Bagian 1 — Anatomi Dokumen HTML | 8–20 |
| [02-semantic/](02-semantic/) | Bagian 3 — HTML5 Semantic & Aksesibilitas | 33–53 |
| [03-box-model.html](03-box-model.html) | Bagian 4 — CSS, Box Model & Flow | 53–67 |
| [04-flexbox.html](04-flexbox.html) | Bagian 5 — Flexbox | 67–89 |

| [05-tailwind.html](05-tailwind.html) | Bagian 6 — TailwindCSS via Play CDN | 89–102 |

---

## Momen Wow — Jangan Dilewatkan

**Navbar lima baris** ([04-flexbox.html](04-flexbox.html) contoh 7)
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

Yang paling penting di file ini: **petakan tabel CSS → Tailwind satu per satu di layar.** Peserta harus melihat bahwa tidak ada konsep baru, cuma nama pendek.

Jangan lewati contoh nomor 4 (class yang panjangnya sebelas). Kelemahan Tailwind harus Anda sebut duluan — peserta akan melihatnya sendiri dalam 5 menit, dan kalau Anda diam, kredibilitas Anda yang turun.

**Ini bagian yang paling aman dipotong** kalau waktu habis.

---

## Sebelum Kelas

- Perbesar font editor minimal **18pt**, pakai **tema terang** — tema gelap sering tidak terbaca lewat proyektor
- Buka browser dan DevTools berdampingan dengan VS Code
- Uji `05-tailwind.html` — CDN Tailwind butuh internet
- Siapkan repositori starter kelas di GitHub, uji `clone` dari komputer lain

---

## Terkait

- [Tugas 1 — Static Foundation](../../tugas/tugas-1-static-foundation/) — mencakup P1 **dan** P2
- [Sistem tugas & kebijakan AI](../../tugas/README.md)
