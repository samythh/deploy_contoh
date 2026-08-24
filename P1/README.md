# Pertemuan 1 — HTML5 Semantic & CSS Layout

**Durasi:** 120 menit · **Jadwal:** Oktober W1 (1–7 Okt 2026)
**Topik:** Struktur Dokumen, Semantic Tags, CSS Fundamentals, Box Model, Flexbox, Grid, Mobile-First, TailwindCSS

> **Catatan revisi:** Sejak 23 Agustus 2026, HTML/CSS naik dari P2 ke P1, bertukar dengan JavaScript. **TailwindCSS diajarkan di Bagian 6** — paling akhir, setelah CSS manual dikuasai.

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
│   ├── 05-grid-responsif.html
│   └── 06-tailwind.html
│
├── tugas/                       # Dibagikan ke peserta          [peserta]
│   ├── soal.md                  # soal + rubrik + aturan AI
│   ├── index.html               # kerangka ber-TODO
│   └── style.css                # kerangka ber-TODO
│
└── kunci-jawaban/               # JANGAN dibagikan              [mentor]
    ├── index.html
    └── style.css                # + catatan menilai
```

Semua file berdiri sendiri — cukup double-click, tidak perlu server atau install apa pun.

---

## Siapa Mengakses Apa

| Folder | Untuk | Dibagikan? |
|---|---|:--:|
| `demo/` | Mentor, dipakai live di kelas | ❌ |
| `tugas/` | Peserta | ✅ |
| `kunci-jawaban/` | Mentor | ❌ |

Saat membagikan tugas, kirim **isi folder `tugas/` saja** — ketiga filenya sekaligus, karena `index.html` memanggil `style.css`.

---

## Alur Mengajar

> Versi lengkap dengan gerakan per bagian, kalimat siap-ucap, dan urutan potong kalau waktu habis: **[RUNDOWN.md](RUNDOWN.md)** — buka di layar kedua saat kelas berlangsung.

| Menit | Bagian | File demo |
|:--:|---|---|
| 0–10 | Pembuka, peta program, **kemenangan pertama** | — |
| 10–20 | Anatomi dokumen HTML | `01-kerangka.html` |
| 20–40 | **HTML5 Semantic** — inti pedagogis hari ini | `02-semantic/` |
| 40–58 | CSS: cara menempel, selector, box model | `03-box-model.html` |
| 58–85 | **Flexbox** — porsi terbesar | `04-flexbox.html` |
| 85–98 | Grid & mobile-first | `05-grid-responsif.html` |
| 98–112 | **TailwindCSS** — diberikan paling akhir, sebagai hadiah | `06-tailwind.html` |
| 112–120 | Rangkuman & pembagian tugas | `tugas/` |

---

## Situasi Khusus P1

**Padat — tujuh bagian dalam 120 menit.** Kalau waktu habis, **Bagian 6 (Tailwind) yang paling aman dipotong**; cukup tunjukkan tabel pemetaannya dan sampaikan praktik penuhnya di P3. Yang wajib nempel hari ini tetap HTML semantic dan Flexbox.

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

Tampilan cantik sengaja cuma 20%. Detailnya di [soal.md](tugas/soal.md).

---

## Checklist Persiapan

**H-3**
- [ ] Kirim panduan instalasi VS Code + browser ke grup, lengkap dengan tautan dan tangkapan layar
- [ ] Minta peserta balas "sudah" — catat siapa yang belum
- [ ] Baca [dokumen materi](P1-Materi-Mentor-Frontend-HTML-CSS.md) sampai Lampiran E

**H-1**
- [ ] Latih demo navbar Flexbox sampai lancar tanpa catatan
- [ ] Hafalkan tiga kalimat **selingan** cara lama (Bagian 3, 4, dan `gap`) — cukup sekali sebut, jangan sampai malah jadi bahasan panjang
- [ ] Uji tarik-jendela di [05-grid-responsif.html](demo/05-grid-responsif.html) — pastikan mulus (momen wow)
- [ ] Buka [kunci-jawaban/index.html](kunci-jawaban/index.html), pastikan tampil benar
- [ ] Siapkan peragaan `<meta charset>` yang dihapus

**Hari-H**
- [ ] VS Code font minimal 18pt, **tema terang** — tema gelap sering tidak terbaca lewat proyektor
- [ ] Browser + DevTools terbuka berdampingan dengan editor
- [ ] Sediakan 10 menit di awal khusus membantu instalasi yang gagal
- [ ] Siapkan folder `tugas/` untuk dibagikan di menit ke-112
