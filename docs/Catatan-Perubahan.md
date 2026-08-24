# Catatan Perubahan & Temuan

Catatan berjalan untuk repositori materi mentor Frontend — Metro Institute Season 2.

File ini **satu-satunya tempat** mencatat dua hal:

1. **Temuan** — pertentangan antar dokumen, kekosongan materi, atau hal yang butuh keputusan. Dicatat lengkap dengan buktinya, supaya tidak perlu dicari ulang.
2. **Log Perubahan** — apa yang diubah, kapan, dan kenapa.

Alasan dijadikan satu file dan bukan satu folder berisi banyak file: skala repo ini kecil, dan temuan hampir selalu berujung jadi perubahan. Memisahkannya justru memaksa lompat-lompat file untuk membaca satu cerita utuh. Kalau nanti sudah terlalu panjang, baru dipecah.

---

## A. Temuan Terbuka

Hal yang sudah ditemukan tapi **belum diputuskan**. Jangan dihapus saat selesai — pindahkan ke bagian "Temuan Selesai" beserta keputusannya, supaya alasannya terekam.

### T-001 — Silabus dan Timeline berbeda soal jadwal Demo Day

**Ditemukan:** 23 Agustus 2026
**Status:** 🔴 Terbuka — butuh konfirmasi mana dokumen yang terbaru

| Dokumen | Kata dokumen |
|---|---|
| [Silabus.md](Silabus.md) §3 | Demo Day **14–15 Januari**, jadi baris terakhir tabel Roadmap Capstone — langsung setelah Sprint 6 (W2 Jan) |
| [Timeline.md](Timeline.md) Fase 4 | **P15 Demo Day** dan **P16 Penutupan** di **Januari W4** (Sabtu–Minggu), setelah gladi bersih oleh Divisi EO |

**Selisihnya sekitar dua minggu.**

**Kenapa ini bukan sekadar salah ketik.** Kedua dokumen juga berbeda dalam memandang gladi bersih:

- Silabus menyatukannya ke dalam Sprint 6 — *"Final deployment... & gladi Demo Day"*, PIC mentor.
- Timeline memisahkannya jadi aktivitas tersendiri di Jan W4 dengan PIC **Divisi EO**, bukan mentor.

Jadi kemungkinan besar ini bukan angka yang tertukar, melainkan **dua versi rencana yang berbeda**: satu versi memadatkan Demo Day tepat setelah sprint terakhir, versi lain memberi jeda dua minggu untuk persiapan acara.

**Dampak kalau dibiarkan:**

- Peserta bisa salah menyiapkan diri — beda dua minggu itu besar untuk polishing produk.
- Kalau Timeline yang benar, ada **jeda dua minggu tanpa sprint** antara Sprint 6 dan Demo Day. Jeda ini perlu diisi rencana, atau momentum tim hilang menjelang presentasi ke CEO.
- Sprint 6 di Silabus menjanjikan gladi yang menurut Timeline bukan tanggung jawab mentor.

**Yang perlu dipastikan:** dokumen mana yang lebih baru, dan apakah jeda dua minggu itu memang disengaja.

**Tindak lanjut yang disarankan:** tanyakan ke Leader / Divisi Akademik. Setelah ada kepastian, samakan kedua dokumen dan catat keputusannya di bagian B.

---

### T-002 — Nama pertemuan di Silabus tidak lagi cocok dengan Timeline

**Ditemukan:** 23 Agustus 2026
**Status:** 🔴 Terbuka — perlu dibawa ke koordinator
**Penyebab:** akibat langsung dari keputusan menukar urutan P1↔P2 (lihat B-001)

[Timeline.md](Timeline.md) Fase 2 menamai tiap pertemuan, dan penamaan itu **berlaku lintas divisi** — Backend, Android, dan UI/UX memakai kode dan nama yang sama, dengan PIC Leader & Divisi Akademik.

| Kode | Nama di Timeline | Isi Frontend setelah revisi | Cocok? |
|---|---|---|:--:|
| **P1** | Fundamental **Logika** Dasar | HTML5 Semantic & CSS Layout | ❌ |
| **P2** | Praktik **Sintaksis** Dasar | Modern JavaScript (ES6+) | ❌ |

Nama slotnya terbalik dengan isinya: "logika" sekarang berisi tampilan, "sintaksis" berisi logika.

**Yang sudah dilakukan:** [Silabus.md](Silabus.md) — dokumen milik Divisi Frontend — judulnya disesuaikan jadi "Fundamental Struktur & Tampilan" (P1) dan "Praktik Logika Dasar" (P2), supaya nama dan isinya konsisten.

**Yang sengaja TIDAK dilakukan:** [Timeline.md](Timeline.md) tidak disentuh. Itu dokumen program lintas divisi, bukan milik Frontend — mengubahnya sepihak akan membuat kode pertemuan tidak sinkron dengan divisi lain.

**Konsekuensinya:** Silabus Frontend dan Timeline sekarang berbeda nama untuk P1 dan P2. Ini disengaja dan terdokumentasi, bukan kelalaian — tapi perlu diselesaikan.

**Tindak lanjut yang disarankan:** sampaikan ke Leader / Divisi Akademik dengan nada analisis, bukan permintaan. Isi yang layak disampaikan:

> Divisi Frontend menukar urutan materi P1 dan P2 karena risiko motivasi di pertemuan pertama — dengan JavaScript di depan, peserta tidak punya hasil yang terlihat di sesi paling rawan mereka mundur. Akibatnya nama pertemuan di Timeline ("Fundamental Logika Dasar" untuk P1) tidak lagi menggambarkan isi materi Frontend.
>
> Dua opsi yang bisa dipertimbangkan: (a) nama pertemuan di Timeline dibuat lebih netral supaya muat untuk semua divisi, misalnya "Fundamental 1" dan "Fundamental 2"; atau (b) tiap divisi boleh punya subjudul sendiri di bawah nama pertemuan bersama. Keputusan sepenuhnya di Leader.

**Perlu dicek juga:** apakah divisi lain memakai urutan yang sama. Kalau Backend juga menaruh logika di P1, opsi (a) mungkin merugikan mereka.

---

## B. Temuan Selesai

### B-001 — Urutan P1 dan P2 ditukar: HTML/CSS naik ke depan

**Ditemukan & diputuskan:** 23 Agustus 2026
**Status:** ✅ Selesai — sudah dijalankan

**Keputusan:** P1 menjadi HTML5 Semantic & CSS Layout, P2 menjadi Modern JavaScript. TailwindCSS tetap berada di P1, ditaruh di bagian paling akhir (lihat catatan posisi Tailwind di bawah).

**Alasan yang menang:** risiko motivasi di pertemuan pertama. Dengan JavaScript di depan, seluruh praktik P1 terjadi di console — tidak ada yang terlihat di layar, tepat di sesi ketika peserta paling gampang mundur. Dengan HTML/CSS di depan, peserta melihat hasil kerjanya sendiri dalam 10 menit pertama.

**Harga yang disadari dan diterima:** rencana awal sengaja menaruh JavaScript di P1 supaya ada jeda "marinasi" satu minggu selama P2 sebelum JS dipakai berat di React (P3). Penukaran ini menghapus jeda itu — JS di P2 langsung disambung React di P3, padahal JS adalah prasyarat terberat React.

Mitigasi yang disepakati, bukan mengubah urutan lagi:
- P2 harus menutup dengan latihan `.map` dan `.filter` yang benar-benar nempel
- P3 harus membuka dengan pengulangan singkat `.map` sebelum masuk *list rendering*

**Posisi TailwindCSS — direvisi 23 Agustus 2026, setelah sempat salah tempat.**

Awalnya Tailwind dikeluarkan dari P1 dan dipindah ke P3. Itu **salah baca instruksi mentor** dan sudah dikoreksi: Tailwind **tetap di P1**, tapi ditaruh di **bagian paling akhir** (menit 98–112), setelah peserta menulis CSS manual satu jam penuh.

Kenapa posisi akhir, bukan awal: kalau Tailwind diberikan di awal, peserta menulis `flex justify-center` tanpa tahu itu singkatan dari apa, dan tidak punya pegangan saat hasilnya melenceng. Ini prinsip yang sama dengan Emmet di Bagian 1 — shortcut diberikan *setelah* paham manual, sebagai hadiah. Menaruhnya di akhir juga membuat Tailwind terasa sebagai obat, bukan sebagai cara lain yang membingungkan.

Pemasangan di P1 cukup via CDN satu baris, belum perlu Node. Pemasangan yang benar lewat Vite tetap di P3 sebagai lanjutan.

**Konsekuensi yang perlu diawasi:** P1 jadi padat — tujuh bagian dalam 120 menit. Alokasi bagian lain dirapatkan untuk memberi ruang 13 menit. Kalau waktu habis di kelas, Bagian 6 (Tailwind) yang paling aman dipotong; yang wajib nempel tetap HTML semantic dan Flexbox.

**Efek samping yang muncul:** nama pertemuan di Timeline jadi tidak cocok dengan isinya. Dicatat terpisah sebagai T-002.

---

## C. Log Perubahan

Terbaru di atas.

### 23 Agustus 2026

**Penyampaian P1 dipangkas — langsung ke cara modern**
- *Alasan:* keputusan mentor. P1 padat (tujuh bagian / 120 menit), dan memperagakan dua cara untuk tiap konsep memakan waktu yang tidak ada. Cara lama sekarang cukup disebut sebagai **selingan satu-dua kalimat sambil lewat**, dengan kalimat siap-ucap yang sudah disiapkan di tiap bagian.
- *Yang tetap dipertahankan:* lapisan **KENAPA**. Peserta tetap harus tahu alasan tiap pilihan — hanya penyampaiannya lewat kalimat, bukan lewat peragaan. Dokumen materi tetap memuat perbandingan lengkapnya supaya mentor bisa menjawab kalau ditanya.
- `demo/04-flexbox.html`: contoh float dan CSS-nya dihapus seluruhnya, termasuk latihan "biarkan mereka gagal 3 menit". Delapan contoh jadi tujuh, ditambah dua blok komentar SELINGAN siap-ucap.
- Materi Bagian 3: peragaan tiga cara menempelkan CSS (inline → internal → external) diganti langsung ke file terpisah, dengan satu selingan.
- Materi Bagian 4: blok BANDINGKAN float dihapus, langsung APA — Flexbox. `gap` vs margin diringkas jadi satu selingan.
- **Pengecualian yang sengaja dipertahankan:** perbandingan div soup vs semantic di Bagian 2. Di situ perbandingannya *adalah* argumennya — tanpa melihat div soup, aturan "pakai `<nav>`" cuma terdengar sewenang-wenang. Dibatasi maksimal 2 menit, dan bukan sebagai latihan.
- Alokasi menit dihitung ulang; sekitar 10 menit yang hemat dialihkan ke praktik Flexbox (jadi 27 menit) dan penutup (jadi 8 menit, sebelumnya 5).
- `CLAUDE.md`: Prinsip Inti diamandemen — dibedakan antara dokumen (perbandingan tetap lengkap) dan alokasi waktu kelas (langsung cara modern). Ini perubahan pada aturan yang sebelumnya berbunyi "selalu tunjukkan cara lama DULU", jadi dicatat eksplisit di sini.

**Koreksi posisi TailwindCSS — dikembalikan ke P1**
- *Penyebab:* salah membaca instruksi mentor "html css tetap dipertama, karena langsung tailwind saja belajarnya". Dibaca sebagai alasan mengeluarkan Tailwind dari P1, padahal maksudnya sebaliknya — Tailwind memang dipelajari langsung di P1.
- Ditambahkan **Bagian 6 — TailwindCSS** (menit 102–115) di materi P1, beserta `demo/06-tailwind.html` yang memuat kartu sama dalam dua versi bersebelahan dan tabel pemetaan CSS → class Tailwind
- Alokasi menit bagian lain dirapatkan untuk memberi ruang 13 menit; Penutup jadi Bagian 7
- Tugas 1 mendapat **bonus opsional +10 poin**: konversi satu kartu ke Tailwind disertai komentar pemetaannya. Sengaja cuma satu kartu — tujuannya membuktikan bahwa Tailwind cuma nama pendek untuk CSS yang sudah ditulis, bukan menguasainya hari itu.
- `docs/Silabus.md`: Tailwind kembali ke daftar materi P1; entri P3 diubah jadi "pemasangan yang benar lewat Vite, lanjutan dari pengenalan via CDN di P1"
- `CLAUDE.md` dan `README.md` disesuaikan

**REVISI BESAR — urutan P1 dan P2 ditukar**
- *Keputusan & alasan lengkap:* lihat B-001 di bagian B.
- Seluruh materi JavaScript dipindah `P1/` → `P2/` memakai `git mv` supaya riwayat filenya tetap terlacak
- `tugas-1.js` → `tugas-2.js`, `tugas-1-kunci.js` → `tugas-2-kunci.js`, dan seluruh rujukan "P1"/"Tugas 1" di dalamnya diperbarui
- **Framing materi JS ditulis ulang, bukan sekadar diganti nomornya.** Seluruh pembukaan materi lama dibangun di atas asumsi "peserta belum punya halaman web" — asumsi itu sudah tidak berlaku. Yang diubah: bagian "Situasi Khusus" (sekarang bertumpu pada halaman P1 mereka yang masih diam), analogi mesin & mobil (dibalik jadi bodi & mesin), pertanyaan pembuka kelas, dan dua entri di Lampiran A yang kini menjawab "kok balik ke teks doang?" alih-alih "kok belum bikin website?"
- Ditambahkan antisipasi **penurunan energi** di P2 — setelah P1 yang penuh umpan balik visual, kembali ke console akan terasa mundur. Perlu disebut di depan supaya tidak terasa seperti ada yang salah.
- Materi P1 baru (HTML/CSS) ditulis dari nol: 6 bagian, alokasi 120 menit, Lampiran A–E lengkap, 5 file demo, tugas landing page, dan kunci jawaban bertema kedai kopi
- `docs/Silabus.md`: isi P1 dan P2 ditukar, judul pertemuan disesuaikan, TailwindCSS dipindah ke daftar materi P3
- `CLAUDE.md`: bagian Pengetahuan Kurikulum diperbarui — termasuk mengganti catatan lama yang melarang menukar P1↔P2, sekarang berisi keputusan penukaran beserta mitigasi yang wajib dijalankan di P2 dan P3
- `README.md`: tabel progres diperbarui, P2 kini berstatus selesai
- Temuan baru: T-002 (nama pertemuan Timeline tidak lagi cocok)

**P1 — menambah file demo, tugas, dan kunci jawaban**
> Catatan: entri di bawah ini ditulis sebelum revisi urutan. Materi yang dimaksud sekarang berada di `P2/`.
- *Alasan:* checklist H-3 dan H-1 di dokumen materi menyuruh menyiapkan file data demo, contoh "cara lama vs cara modern", serta 5 soal beserta kuncinya — tapi filenya belum ada. Yang tersedia baru dokumen panduan mengajarnya.
- Struktur baru: `P1/demo/` (mentor), `P1/tugas/` (dibagikan ke peserta), `P1/kunci-jawaban/` (mentor), masing-masing dengan README sendiri
- Tetap tanpa Node/build sesuai batasan P1. Peserta cukup double-click `tugas/index.html`; satu-satunya yang butuh Live Server adalah demo modul, dan itu bagian opsional untuk mentor
- Data tugas memakai **mahasiswa** (10 item), berbeda dari data demo yang memakai **produk** (3 item). Disengaja supaya jawaban tugas tidak bisa disalin langsung dari contoh di kelas
- Tiga perangkap sengaja dipasang di soal: dua orang bernilai di bawah 60 (menguji apakah `.find()` dipahami sebagai "yang pertama", bukan "yang paling ekstrem"), dua syarat di soal 5, dan urutan chaining yang menghasilkan array kosong kalau dibalik
- Seluruh kunci jawaban diverifikasi dengan Node: 10 nama · 5 orang bernilai ≥80 · `true` · Dimas Ardiansyah · 76.2 · 4 nama

**Perbaikan tabrakan `const produk`**
- *Masalah:* `demo/00-data-demo.js` dan `demo/03-array-methods.js` sama-sama mendeklarasikan `const produk`. Kalau mentor mem-paste keduanya di sesi console yang sama, muncul `SyntaxError: Identifier 'produk' has already been declared` dan seluruh paste gagal — tepat di tengah kelas.
- *Kenapa tidak disatukan saja:* `03` sengaja dibuat mandiri supaya bisa dipakai tanpa membuka file lain. Menghapus datanya justru memindahkan kegagalan ke arah sebaliknya (`produk is not defined`).
- *Solusi:* peringatan eksplisit di header `03` dan di `demo/README.md`, lengkap dengan cara pulihnya (tekan F5). Ditambah saran menjadikannya bahan mengajar dadakan — kejadian ini persis mendemonstrasikan Bagian 2 tentang `const` yang menolak deklarasi ulang.

**Inisiasi repositori**
- `git init` pada branch `main`, remote `origin` → `github.com/samythh/Bootcamp_Metro`
- Commit awal `1345dc7` — 14 file
- Menambah [README.md](../README.md): struktur folder, tabel dokumen acuan, tabel progres P1–P8, konvensi penamaan file
- Menambah `.gitignore` dan `.gitkeep` di P2–P8 agar struktur folder kosong tetap terlacak

**[Silabus.md](Silabus.md) — ditulis ulang formatnya**
- Isi tidak diubah sama sekali, hanya penyajiannya
- Metadata program → tabel Ringkasan Program
- 6 kompetensi lulusan → tabel bernomor
- Tiap pertemuan → heading tersendiri dengan blok Fokus / Materi / Praktik Live / Output
- Roadmap sprint dan sistem penilaian → tabel
- Ditambah Daftar Isi ber-anchor

**P1-Materi-Mentor-Frontend-JS.md — menambah `.some()`** *(file ini kini [P2-Materi-Mentor-Frontend-JS.md](../P2/P2-Materi-Mentor-Frontend-JS.md))*
- *Alasan:* silabus P1 menyebut lima method array (`.map`, `.filter`, `.reduce`, `.find`, `.some`), materi hanya memuat empat. `.some()` tidak ada sama sekali.
- Bagian 4: heading "Empat Method Wajib" → **"Lima Method Wajib"**
- Menambah sub-bagian `.some()` di antara `.find()` dan `.reduce()` — lengkap dengan BANDINGKAN (`.filter(...).length > 0` vs `.some(...)`), KENAPA (efisiensi + kejelasan niat), analogi absen kelas, dan colokan ke depan ke *conditional rendering* React
- Tugas 1: soal 3 diubah jadi **berpasangan** — (a) "ada nggak yang nilainya di bawah 60?" (`.some()`), (b) "kalau ada, siapa orang pertamanya?" (`.find()`). Dibuat berpasangan supaya perbedaan "ada nggak?" vs "yang mana?" yang justru teruji, sekaligus menjaga jumlah soal tetap 5 sesuai silabus.

**[CLAUDE.md](../CLAUDE.md) — menambah aturan baca docs**
- Section baru **"ATURAN WAJIB: Baca `docs/` Dulu"**, ditaruh sebelum Prinsip Inti
- Isinya: tabel fungsi tiap file di `docs/`, kapan wajib dibaca, aturan resolusi konflik (fakta → `docs/` menang, pedagogi → `CLAUDE.md` menang), dan kewajiban cross-check silabus setelah membuat materi
- Section "Pengetahuan Kurikulum" diberi catatan bahwa ringkasannya bukan sumber kebenaran

**Temuan tercatat**
- T-001 — Silabus dan Timeline berbeda soal jadwal Demo Day (lihat bagian A)

---

## Cara Memakai File Ini

**Saat menemukan pertentangan atau kekosongan:** tambahkan entri baru di bagian A dengan nomor urut berikutnya (T-002, T-003, ...). Tulis buktinya — dokumen mana, bagian mana, kata dokumen itu apa. Temuan tanpa bukti akan sulit ditindaklanjuti berminggu-minggu kemudian.

**Saat temuan diputuskan:** pindahkan entrinya ke bagian B, ubah status jadi ✅, dan tambahkan baris **Keputusan** berisi apa yang dipilih dan alasannya. Jangan dihapus — alasan sebuah keputusan lebih sering dibutuhkan daripada keputusannya sendiri.

**Saat mengubah dokumen:** tambahkan entri di bagian C di bawah tanggal hari ini. Sebutkan **kenapa**, bukan cuma apa. "Menambah `.some()`" kurang berguna; "menambah `.some()` karena silabus menyebutnya tapi materi belum memuatnya" berguna.
