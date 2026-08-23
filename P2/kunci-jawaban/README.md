# Kunci Jawaban — Pertemuan 2

> ⚠️ **UNTUK MENTOR SAJA.** Jangan bagikan folder ini ke peserta.
> Saat membagikan tugas, kirim isi folder [`../tugas/`](../tugas/) saja.

---

## Isi

| File | Keterangan |
|---|---|
| [tugas-2-kunci.js](tugas-2-kunci.js) | Jawaban lengkap + catatan penilaian per soal |

---

## Cara Menguji

Paste `../tugas/data.js` ke Console lebih dulu, baru paste `tugas-2-kunci.js`.

---

## Rekap Jawaban

| Soal | Method | Jawaban |
|:--:|---|---|
| 1 | `.map()` | 10 nama |
| 2 | `.filter()` | 5 orang — Aisyah, Citra, Elsa, Indah, Joko |
| 3a | `.some()` | `true` |
| 3b | `.find()` | Dimas Ardiansyah (57) — **bukan** Hendra |
| 4 | `.reduce()` | 76.2 |
| 5 | `.filter().map()` | Aisyah, Citra, Elsa, Indah |

---

## Tiga Perangkap yang Sengaja Dipasang

**1. Soal 3b — ada dua orang bernilai di bawah 60.**
Dimas (57) dan Hendra (48). Peserta yang menjawab **Hendra** mengira `.find()` mencari yang paling ekstrem, padahal `.find()` berhenti di yang **paling awal**. Salah paham ini umum dan layak dibahas di kelas.

**2. Soal 5 — dua syarat, dua cara gagal.**
Gita jurusannya benar tapi nilainya kurang (79). Joko nilainya cukup (83) tapi jurusannya TI. Peserta yang cuma menyaring satu syarat akan langsung ketahuan dari jumlah hasilnya.

**3. Soal 5 — urutan chaining.**
Kalau `.map()` ditaruh duluan, data sudah jadi array string dan `.jurusan` hilang — hasilnya array kosong. Tunjukkan versi terbaliknya di kelas, biarkan mereka melihat sendiri kenapa gagal.

---

## Catatan Menilai

**Jangan salahkan mentah-mentah jawaban yang "benar tapi memutar."**

Contoh yang paling sering muncul di soal 3a:

```javascript
mahasiswa.filter(m => m.nilai < 60).length > 0   // hasilnya true — benar
```

Peserta ini berpikir logis, cuma belum tahu ada alat yang lebih pas. Beri nilai penuh untuk "kode jalan" (20%), kurangi di "method tepat" (40%), lalu tanyakan saat review:

> "Hasilnya benar. Tapi coba lihat — kalian bikin array baru cuma buat dihitung panjangnya, terus dibuang. Ada method yang langsung jawab pertanyaannya. Masih ingat yang mana?"

Ini sejalan dengan prinsip di [CLAUDE.md](../../CLAUDE.md): jangan buat peserta merasa cara lama itu "haram" — jelaskan kenapa ada yang lebih pas.

**Ingat bobotnya:** alasan di komentar (30%) lebih besar daripada kode jalan (20%). Jawaban benar tanpa alasan yang masuk akal nilainya lebih rendah daripada jawaban yang sedikit meleset tapi penalarannya jelas.
