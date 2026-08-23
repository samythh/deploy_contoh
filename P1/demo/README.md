# Demo Live — Pertemuan 1

File-file di sini untuk **dipakai mentor saat mengajar**, bukan dibagikan ke peserta.

Semua file berdiri sendiri — cukup double-click, tidak perlu server atau install apa pun.

---

## Isi & Pemetaan ke Materi

| File | Bagian di materi | Menit |
|---|---|:--:|
| [01-kerangka.html](01-kerangka.html) | Bagian 1 — Anatomi Dokumen HTML | 10–25 |
| [02-semantic/](02-semantic/) | Bagian 2 — HTML5 Semantic | 25–50 |
| [03-box-model.html](03-box-model.html) | Bagian 3 — CSS & Box Model | 50–75 |
| [04-flexbox.html](04-flexbox.html) | Bagian 4 — Flexbox | 75–100 |
| [05-grid-responsif.html](05-grid-responsif.html) | Bagian 5 — Grid & Mobile-First | 100–112 |

---

## Dua Momen Wow — Jangan Dilewatkan

**1. Grid yang menyesuaikan sendiri** ([05-grid-responsif.html](05-grid-responsif.html))
Buka file-nya, lalu **tarik-tarik lebar jendela browser pelan-pelan** di depan kelas. Kolomnya berubah 4 → 3 → 2 → 1 tanpa satu pun media query. Lakukan ini **sebelum** menjelaskan apa pun — lihat dulu, baru paham.

**2. Navbar lima baris** ([04-flexbox.html](04-flexbox.html) bagian 8)
Bangun bersama peserta, jangan ditunjukkan jadi. Lima baris CSS menghasilkan navbar yang di era `float` butuh 20 baris plus tambalan. Sebut perbandingan itu.

---

## Catatan per File

**`01-kerangka.html`** — Ketik ulang dari nol bersama peserta, jangan langsung dibuka. Mengetik manual sekali adalah syarat sebelum Emmet diberikan sebagai hadiah di akhir bagian. File ini memuat dua peragaan: hapus `<meta charset>` lalu lihat karakter `—` rusak, dan pindahkan `<h1>` ke `<head>` lalu lihat teksnya hilang.

**`02-semantic/`** — **Buka `divsoup.html` dan `semantic.html` berdampingan.** Keduanya memakai `style.css` yang sama dan tampilannya identik — itu inti demonstrasinya. Peserta perlu melihat sendiri bahwa `div` tidak salah dan tidak error, supaya argumen semantic tidak terdengar sewenang-wenang.

Sebelum membuka versi semantic, tanyakan ke kelas: *"tanpa scroll ke atas, ada yang bisa bilang `</div>` yang mana menutup navigasi?"* Kesulitan mereka itu justru pesannya.

`semantic.html` juga menandai satu `div` yang **memang tepat** — pembungkus grid. Tunjukkan ini; peserta perlu tahu kapan `div` benar, bukan cuma kapan kurang tepat.

**`03-box-model.html`** — Minta peserta **menebak dulu** sebelum melihat hasil: "yang mana yang kotaknya jadi lebih gemuk, padding atau margin?" Lalu buka DevTools → Computed. Menebak lalu mengecek jauh lebih nempel daripada langsung diberi tahu. File ini juga memperagakan `content-box` vs `border-box` — kenapa `width: 180px` bisa terukur 226px.

**`04-flexbox.html`** — Porsi terbesar hari ini. **Jangan langsung ke Flexbox.** Tunjukkan bagian float dulu, lalu minta peserta membuat tiga kotak berdampingan rata tengah secara tegak dengan cara lama. Biarkan mereka gagal 3 menit — itu 3 menit paling berharga di bagian ini. Baru tunjukkan obatnya.

**`05-grid-responsif.html`** — Kalau waktu menipis, cukup ajarkan contoh 1 (grid `auto-fit`). Itu yang mereka butuhkan untuk tugas. Media query manual bisa disebut sekilas.

---

## Sebelum Kelas

- Perbesar font editor minimal **18pt**, pakai **tema terang** — tema gelap sering tidak terbaca lewat proyektor
- Buka browser dan DevTools berdampingan dengan VS Code
- Uji tarik-jendela di `05-grid-responsif.html` sampai mulus

---

## Terkait

- [Tugas untuk peserta](../tugas/) — yang ini dibagikan
- [Kunci jawaban](../kunci-jawaban/) — mentor saja
