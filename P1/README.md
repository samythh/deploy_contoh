# Pertemuan 1 — HTML5 Semantic & CSS Layout

**Durasi:** 120 menit · **Jadwal:** Oktober W1 (1–7 Okt 2026)
**Topik:** Struktur Dokumen, Semantic Tags, CSS Fundamentals, Box Model, Flexbox, Grid, Mobile-First

> **Catatan revisi:** Sejak 23 Agustus 2026, HTML/CSS naik dari P2 ke P1, bertukar dengan JavaScript. **TailwindCSS tidak diajarkan di sini** — dipindah ke P3 bersama setup Vite.

---

## Isi Folder

```
P1/
├── P1-Materi-Mentor-Frontend-HTML-CSS.md   # Panduan mengajar — BACA INI DULU
│
├── demo/                        # Kode live untuk di kelas      [mentor]
│   ├── 01-kerangka.html
│   ├── 02-semantic/             # divsoup.html vs semantic.html
│   ├── 03-box-model.html
│   ├── 04-flexbox.html
│   └── 05-grid-responsif.html
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

| Menit | Bagian | File demo |
|:--:|---|---|
| 0–10 | Pembuka, peta program, **kemenangan pertama** | — |
| 10–25 | Anatomi dokumen HTML | `01-kerangka.html` |
| 25–50 | **HTML5 Semantic** — inti pedagogis hari ini | `02-semantic/` |
| 50–75 | CSS: cara menempel, selector, box model | `03-box-model.html` |
| 75–100 | **Flexbox** — porsi terbesar | `04-flexbox.html` |
| 100–112 | Grid & mobile-first | `05-grid-responsif.html` |
| 112–120 | Rangkuman & pembagian tugas | `tugas/` |

---

## Situasi Khusus P1

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
- [ ] Uji tarik-jendela di [05-grid-responsif.html](demo/05-grid-responsif.html) — pastikan mulus (momen wow)
- [ ] Buka [kunci-jawaban/index.html](kunci-jawaban/index.html), pastikan tampil benar
- [ ] Siapkan peragaan `<meta charset>` yang dihapus

**Hari-H**
- [ ] VS Code font minimal 18pt, **tema terang** — tema gelap sering tidak terbaca lewat proyektor
- [ ] Browser + DevTools terbuka berdampingan dengan editor
- [ ] Sediakan 10 menit di awal khusus membantu instalasi yang gagal
- [ ] Siapkan folder `tugas/` untuk dibagikan di menit ke-112
