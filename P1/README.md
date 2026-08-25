# Pertemuan 1 — Fundamental Logika Dasar
### Arsitektur Web & Struktur Dokumen Responsif

**Durasi:** 120 menit · **Jadwal:** Oktober W1 (1–7 Okt 2026)
**Topik:** Client-Server & HTTP, Struktur Dokumen, Semantic & Aksesibilitas, Box Model, Flexbox, TailwindCSS, Setup Git & Pull Request

> **Catatan revisi (rapat 25 Agustus 2026):** Arsitektur Web & HTTP Methods **masuk ke sini** dari P2. CSS Grid & Mobile-First **pindah ke P2**. Pertemuan ditutup dengan **Setup Workflow Git & Pull Request** — seluruh tugas P1–P8 dikumpulkan lewat PR.

> **CARA PENYAMPAIAN:** materi ini **langsung ke cara modern**. Cara lama (float, inline style, margin-tambalan) tidak diperagakan — cukup disebut sebagai **selingan** satu-dua kalimat sambil lewat. Kalimatnya sudah disiapkan di tiap bagian materi dan di komentar file demo. Satu-satunya pengecualian: perbandingan div soup di Bagian 2, karena di situ perbandingannya *adalah* argumennya.

---

## Isi Folder

```
P1/
├── P1-Materi-Mentor-Frontend-HTML-CSS.md   # Panduan mengajar lengkap — BACA INI DULU
├── RUNDOWN.md                              # Pegangan singkat SAAT mengajar
│
├── demo/                        # Kode live untuk di kelas      [mentor]
│   ├── 01-kerangka.html
│   ├── 02-semantic/             # divsoup.html vs semantic.html
│   ├── 03-box-model.html
│   ├── 04-flexbox.html
│   └── 05-tailwind.html
```

**Tugas tidak lagi ada di folder ini.** P1 dan P2 digabung jadi **Tugas 1 — Static Foundation**, ada di [`../tugas/tugas-1-static-foundation/`](../tugas/tugas-1-static-foundation/).

Semua file berdiri sendiri — cukup double-click, tidak perlu server atau install apa pun.

---

## Siapa Mengakses Apa

| Folder | Untuk | Dibagikan? |
|---|---|:--:|
| `P1/demo/` | Mentor, dipakai live di kelas | ❌ |
| `../tugas/tugas-1-static-foundation/` | Peserta | ✅ |
| `../tugas/tugas-1-static-foundation/kunci-jawaban/` | Mentor | ❌ |

---

## Alur Mengajar

> Versi lengkap dengan gerakan per bagian, kalimat siap-ucap, dan urutan potong kalau waktu habis: **[RUNDOWN.md](RUNDOWN.md)** — buka di layar kedua saat kelas berlangsung.

| Menit | Bagian | File demo |
|:--:|---|---|
| 0–8 | Pembuka & peta program | — |
| 8–20 | Anatomi HTML + **kemenangan pertama** | `01-kerangka.html` |
| 20–33 | **Arsitektur Web** — client-server, HTTP, tab Network | — |
| 33–53 | **HTML5 Semantic & Aksesibilitas** | `02-semantic/` |
| 53–67 | CSS, Box Model & Flow Dokumen | `03-box-model.html` |
| 67–89 | **Flexbox** — porsi terbesar | `04-flexbox.html` |
| 89–102 | **TailwindCSS** via Play CDN — sebagai hadiah | `05-tailwind.html` |
| 102–120 | Penutup, tugas & **Setup Git + Pull Request** | `../tugas/` |

---

## Situasi Khusus P1

**Padat — delapan bagian dalam 120 menit.** Kalau waktu habis, **Bagian 6 (Tailwind) yang dipotong — bukan Bagian 7.** Seluruh tugas dikumpulkan lewat Pull Request, jadi kalau setup Git gagal, peserta tidak bisa mengumpulkan apa pun. Yang wajib nempel hari ini: HTML semantic, Flexbox, dan Git/PR.

**Ini pertemuan pertama, dan taruhannya motivasi.** Sebagian peserta belum pernah menulis satu baris kode, dan sebagian sedang diam-diam bertanya apakah mereka salah masuk kelas.

Keunggulan besar P1 versi HTML/CSS: peserta bisa **melihat hasil kerjanya dalam 10 menit pertama**. Rasa "saya bisa bikin sesuatu" itu yang menahan mereka bertahan sampai materi sulit di P2 dan P6.

**Menit ke-8 adalah prioritas nomor satu Anda.** Sebelum teori apa pun, pastikan semua orang berhasil mengetik `<h1>Halo</h1>`, menyimpan, dan melihatnya di browser. Peserta yang gagal di sini akan tertinggal sepanjang 8 pertemuan — membantunya lebih penting daripada menyelesaikan materi.

---

## Yang Perlu Peserta Siapkan

**VS Code** dan **browser Chrome/Edge terbaru**. Tidak perlu Node.js, tidak perlu install apa pun lagi.

Karena ini pertemuan pertama, kirim panduan instalasi **H-3** lengkap dengan tautan unduh dan tangkapan layar. Minta mereka balas "sudah" di grup supaya Anda tahu siapa yang perlu dibantu di hari-H.

---

## Tugas 1

**Deliverable:** `index.html` + `style.css` berisi landing page responsif — navbar, hero, grid minimal 6 kartu, footer. Dengan **komentar alasan**: minimal 2 di HTML, minimal 4 di CSS.

Ada **bonus opsional +10 poin**: konversi satu kartu saja ke Tailwind, disertai komentar pemetaan CSS → class Tailwind.

| Bobot | Aspek |
|:--:|---|
| 35% | Ketepatan pemilihan tag semantic & alasannya |
| 30% | Kualitas alasan di komentar |
| 20% | Layout berfungsi & responsif di HP |
| 15% | Kerapian (indentasi, penamaan class) |

Tampilan cantik sengaja cuma 20%. Detailnya di [soal.md](../tugas/tugas-1-static-foundation/soal.md).

---

## Checklist Persiapan

**H-3**
- [ ] Kirim panduan instalasi VS Code + browser ke grup, lengkap dengan tautan dan tangkapan layar
- [ ] Minta peserta balas "sudah" — catat siapa yang belum
- [ ] Baca [dokumen materi](P1-Materi-Mentor-Frontend-HTML-CSS.md) sampai Lampiran E

**H-1**
- [ ] Latih demo navbar Flexbox sampai lancar tanpa catatan
- [ ] Hafalkan tiga kalimat **selingan** cara lama (Bagian 3, 4, dan `gap`) — cukup sekali sebut, jangan sampai malah jadi bahasan panjang
- [ ] Uji `demo/05-tailwind.html` — pastikan CDN Tailwind termuat (butuh internet di ruang kelas)
- [ ] Siapkan repositori starter kelas di GitHub, uji `clone` dari komputer lain
- [ ] Buka [kunci jawaban Tugas 1](../tugas/tugas-1-static-foundation/kunci-jawaban/index.html), pastikan tampil benar
- [ ] Siapkan peragaan `<meta charset>` yang dihapus

**Hari-H**
- [ ] VS Code font minimal 18pt, **tema terang** — tema gelap sering tidak terbaca lewat proyektor
- [ ] Browser + DevTools terbuka berdampingan dengan editor
- [ ] Sediakan 10 menit di awal khusus membantu instalasi yang gagal
- [ ] Siapkan tautan repositori kelas + folder tugas untuk dibagikan di menit ke-105
- [ ] Pastikan semua peserta sudah punya akun GitHub (cek di grup H-1)
