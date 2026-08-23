# Pertemuan 2 — Modern JavaScript (ES6+) & Arsitektur Web

**Durasi:** 120 menit · **Jadwal:** Oktober W2 (8–14 Okt 2026)
**Topik:** Client-Server, HTTP Methods, ES6+ Fundamentals, Manipulasi Array, Modul

---

## Isi Folder

```
P2/
├── P2-Materi-Mentor-Frontend-JS.md   # Panduan mengajar lengkap — BACA INI DULU
│
├── demo/                             # Kode live untuk di kelas    [mentor]
│   ├── 00-data-demo.js
│   ├── 01-var-let-const.js
│   ├── 02-es6-fundamentals.js
│   ├── 03-array-methods.js
│   └── 04-modul/                     # butuh Live Server
│
├── tugas/                            # Dibagikan ke peserta        [peserta]
│   ├── soal.md                       # soal + rubrik + aturan AI
│   ├── data.js                       # 10 mahasiswa
│   ├── tugas-2.js                    # kerangka jawaban ber-TODO
│   └── index.html                    # cangkang, cukup double-click
│
└── kunci-jawaban/                    # JANGAN dibagikan            [mentor]
    └── tugas-2-kunci.js              # jawaban + catatan penilaian
```

---

## Siapa Mengakses Apa

| Folder | Untuk | Dibagikan? |
|---|---|:--:|
| `demo/` | Mentor, dipakai live di kelas | ❌ |
| `tugas/` | Peserta | ✅ |
| `kunci-jawaban/` | Mentor | ❌ |

Saat membagikan tugas, kirim **isi folder `tugas/` saja** — keempat filenya sekaligus, karena `index.html` memanggil `data.js` dan `tugas-2.js`.

---

## Alur Mengajar

| Menit | Bagian | File demo |
|:--:|---|---|
| 0–10 | Pembuka & peta program | — |
| 10–30 | Arsitektur Client-Server & HTTP Methods | — |
| 30–40 | Variabel Modern (`let`/`const`) | `01-var-let-const.js` |
| 40–70 | ES6+ Fundamentals | `02-es6-fundamentals.js` |
| 70–100 | **Manipulasi Array** (porsi terbesar) | `03-array-methods.js` |
| 100–110 | Modul Import/Export | `04-modul/` |
| 110–120 | Rangkuman & pembagian tugas | `tugas/` |

Bagian 0 dan 1 murni penjelasan — tidak ada kode. Mulai `00-data-demo.js` di awal Bagian 4 untuk momen `console.table()`.

---

## Situasi Khusus P2

Peserta datang membawa **halaman web buatan sendiri dari P1** — navbar, hero, grid kartu, footer. Rapi, responsif, dan sama sekali tidak bisa diapa-apakan. Itu titik masuk terkuat Anda hari ini: mereka sudah punya rasa sakitnya, JavaScript adalah obatnya.

**Antisipasi penurunan energi.** Setelah P1 yang penuh umpan balik visual, hari ini terasa mundur — semua kembali ke teks di console. Sebut ini di depan supaya tidak terasa seperti ada yang salah. Antisipasi lengkapnya ada di dokumen materi (analogi bodi & mesin di Bagian 0), dan `console.table()` disiapkan sebagai satu-satunya "kemenangan visual" hari ini.

---

## Yang Perlu Peserta Siapkan

Cukup **browser (Chrome/Edge terbaru)** dan **editor teks**. Belum perlu Node.js, belum perlu install apa pun.

Hanya demo modul (`04-modul/`) yang butuh **Live Server** — dan itu untuk mentor, bukan peserta.

---

## Tugas 2

**Deliverable:** file `tugas-2.js` yang sudah terisi, dengan **komentar alasan di tiap jawaban**.

| Bobot | Aspek |
|:--:|---|
| 40% | Method yang dipilih tepat sesuai tugasnya |
| 30% | Kualitas alasan di komentar |
| 20% | Kode jalan & benar hasilnya |
| 10% | Kerapian |

Alasan (30%) sengaja diberi bobot lebih besar daripada kode jalan (20%). Boleh pakai AI, tapi verifikasi lisan acak di breakout room yang jadi penentu — detailnya di [soal.md](tugas/soal.md).

---

## Checklist Persiapan

**H-3**
- [ ] Kirim panduan ke grup: cukup browser + editor teks
- [ ] Baca ulang [dokumen materi](P2-Materi-Mentor-Frontend-JS.md) sampai Lampiran E

**H-1**
- [ ] Latih demo chaining `.filter().map()` di console sampai lancar
- [ ] Coba `console.table()` — pastikan tampil rapi (momen wow)
- [ ] Uji [kunci jawaban](kunci-jawaban/tugas-2-kunci.js), pastikan semua hasilnya cocok
- [ ] Kalau mau memakai demo modul: pasang Live Server, uji `04-modul/index.html`

**Hari-H**
- [ ] Console terbuka besar di layar, font minimal 18pt
- [ ] Ajak peserta buka console mereka di menit-menit awal — jangan ada yang cuma menonton
- [ ] Siapkan folder `tugas/` untuk dibagikan di menit ke-110
