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

## B. Temuan Selesai

*(belum ada)*

---

## C. Log Perubahan

Terbaru di atas.

### 23 Agustus 2026

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

**[P1-Materi-Mentor-Frontend-JS.md](../P1/P1-Materi-Mentor-Frontend-JS.md) — menambah `.some()`**
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
