# Tugas 2 — Manipulasi Data dengan JavaScript Modern

**Pertemuan 2** · Kelas Frontend Web Development — Metro Institute Season 2

---

## Yang Dikumpulkan

File `tugas-2.js` yang sudah terisi. Kirim sesuai instruksi mentor di grup.

---

## Cara Mengerjakan

1. Buka `tugas-2.js` di VS Code
2. Isi setiap bagian bertanda `TODO`
3. Buka `index.html` (cukup double-click), lalu tekan `F12` → tab **Console** untuk melihat hasilnya
4. Simpan file, refresh halaman, cek Console lagi

Tidak perlu install apa pun. Cukup browser dan editor teks.

> Kalau `index.html` bermasalah, cara alternatifnya: buka Console, paste isi `data.js`, tekan Enter, lalu paste isi `tugas-2.js`.

---

## Aturan Penting

**Di tiap jawaban, tulis komentar satu baris berisi alasan** kenapa kalian memilih method itu. Komentar ini bagian dari penilaian dengan bobot 30% — lebih besar daripada bobot "kode jalan".

| Contoh | Penilaian |
|---|---|
| `// pakai map untuk mengambil nama` | ❌ Kurang — ini cuma mengulang apa yang dilakukan kode |
| `// pakai .map() karena jumlah hasilnya harus tetap 10 — kita mengubah tiap item, bukan membuang sebagian` | ✅ Baik — menjelaskan kenapa method ini, bukan yang lain |

---

## Data

Semua soal memakai array `mahasiswa` di file `data.js` — 10 mahasiswa dengan properti `nama`, `jurusan`, `nilai`, dan `semester`. Jangan diubah isinya.

Jalankan `console.table(mahasiswa)` untuk melihatnya sebagai tabel.

---

## Soal

### Soal 1 — Ambil semua nama mahasiswa

Buat array berisi nama seluruh mahasiswa.

**Hasil yang diharapkan:** array berisi 10 nama.

---

### Soal 2 — Saring mahasiswa bernilai 80 ke atas

Buat array berisi mahasiswa yang nilainya 80 atau lebih.

**Hasil yang diharapkan:** array berisi **object mahasiswa** — lengkap dengan jurusan dan semesternya, bukan nama saja.

---

### Soal 3 — Dua pertanyaan tentang hal yang sama

Baca pelan-pelan. Dua pertanyaan berikut terdengar mirip, tapi **menuntut bentuk jawaban yang berbeda**.

**3a.** Ada nggak mahasiswa yang nilainya di bawah 60?
→ Jawabannya cuma "iya" atau "nggak" — hasilnya harus `true` atau `false`.

**3b.** Kalau ada, siapa orang **pertama** yang nilainya di bawah 60?
→ Jawabannya satu object mahasiswa.

> Kalau kalian memakai method yang sama untuk 3a dan 3b, ada yang terlewat. Di komentar 3b, jelaskan juga **kenapa method-nya berbeda dari 3a**.

---

### Soal 4 — Hitung rata-rata nilai

Hitung rata-rata nilai seluruh mahasiswa.

**Petunjuk:** jumlahkan dulu semua nilai, baru bagi dengan jumlah mahasiswa. Ingat analogi amplop nagih kas — amplop mulai kosong, tiap orang menambah isinya.

---

### Soal 5 — Gabungan (chaining)

Ambil **nama** mahasiswa jurusan **Sistem Informasi** yang nilainya **80 ke atas**, dalam **satu rantai method**. Jangan pakai variabel perantara.

**Hasil yang diharapkan:** array berisi nama saja (string), bukan object.

Di komentar, jelaskan juga **kenapa urutan method-nya begitu** — apa yang terjadi kalau dibalik?

---

## Kriteria Penilaian

| Bobot | Aspek |
|:--:|---|
| **40%** | Method yang dipilih tepat sesuai tugasnya |
| **30%** | Kualitas alasan di komentar |
| **20%** | Kode jalan & benar hasilnya |
| **10%** | Kerapian (penamaan variabel, konsistensi) |

Perhatikan: **alasan (30%) bobotnya lebih besar daripada kode jalan (20%).** Ini disengaja.

---

## Soal Boleh Dikerjakan dengan Bantuan AI?

**Boleh** — dengan syarat kalian paham tiap baris yang kalian tulis.

Saat review, mentor akan menunjuk satu baris secara acak dan menanyakan kenapa method itu yang dipakai. Kalau tidak bisa menjawab, itu bukan kode kalian.

AI itu seperti kalkulator: berguna kalau kalian sudah mengerti hitungannya, berbahaya kalau dipakai untuk menghindari paham.

---

## Kalau Macet

Coba dulu 15 menit. Kalau masih buntu, bertanya di grup dengan format ini:

```
1. Yang saya coba      : ...
2. Yang saya harap     : ...
3. Yang malah terjadi  : ... (+ pesan error kalau ada)
4. Yang sudah saya coba: ...
```

Sering kali jawabannya ketemu sendiri saat menulis baris ke-4.
