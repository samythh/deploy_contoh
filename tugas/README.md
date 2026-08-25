# Sistem Tugas — Progressive Web Project

Kelas Frontend Web Development · Metro Institute Season 2

---

## Aturan Dasar

Kelas berjalan **dua pertemuan per minggu**. Tugas **tidak** diberikan per pertemuan, melainkan **satu tugas gabungan per minggu** yang mencakup materi dua pertemuan sekaligus.

Seluruh tugas adalah **satu produk web yang sama**, dikembangkan terus dari minggu pertama sampai minggu terakhir. Peserta tidak membuat empat proyek terpisah — mereka menumbuhkan satu proyek melalui empat tahap.

Setiap peserta **membuat repositori sendiri dari template kelas** di awal program, lalu mengembangkan produk yang sama di repositori itu sepanjang kelas. Tiap tahap dikerjakan di **branch terpisah** dan diajukan lewat **Pull Request**; **mentor terdaftar sebagai collaborator** untuk melakukan review.

> **Kenapa dari template, bukan clone repo bersama:** dengan template, tiap peserta punya repositori atas namanya sendiri — bisa dipamerkan di CV, riwayat commit-nya utuh miliknya, dan tidak bercampur dengan 30 peserta lain di satu repo. Yang di-clone bersama hanya cocok untuk kerja tim, dan itu baru relevan di fase Capstone.

---

## Empat Tahap

| Tugas | Materi | Dikumpulkan sebelum | Produk jadi apa |
|:--:|:--:|---|---|
| **1** — Static Foundation | P1 & P2 | Pertemuan 3 | Halaman statis responsif → lalu dinamis dengan JavaScript |
| **2** — React Migration | P3 & P4 | Pertemuan 5 | Dibangun ulang dengan React + Vite + Tailwind, **di repositori yang sama** |
| **3** — Multi-Page & Live Data | P5 & P6 | Pertemuan 7 | Multi-halaman, data dari REST API, **+ minimal satu `interface` TypeScript** |
| **4** — Production Ready | P7 & P8 | **1 minggu setelah P8** | Global state, autentikasi, terbit ke internet, **Lighthouse Accessibility ≥ 90** |

---

## Tema Produk — Dipilih Sekali, Dipakai Sampai Akhir

Setiap peserta memilih **satu tema di Pertemuan 1** dan mempertahankannya sampai selesai. Tema bebas, syaratnya satu: **datanya berbentuk daftar item yang punya detail.**

Contoh yang cocok:

| Tema | Item | Detail |
|---|---|---|
| Katalog kuliner daerah | Rendang, Sate Padang | harga, kategori, asal daerah |
| Direktori UMKM | nama usaha | bidang, alamat, kontak |
| Katalog buku perpustakaan | judul buku | penulis, genre, tahun |
| Destinasi wisata | nama tempat | lokasi, kategori, tiket |

**Yang tidak cocok:** blog pribadi satu halaman, kalkulator, portofolio tanpa daftar item. Ketiganya tidak punya data berbentuk daftar, sehingga Tugas 2–4 tidak bisa dikerjakan di atasnya.

> **Kenapa satu tema saja sampai akhir:** supaya peserta mengalami langsung bagaimana sebuah aplikasi **berevolusi** — dari halaman statis, jadi komponen React, lalu narik data server, sampai punya login dan terbit di internet. Pengalaman itu tidak bisa didapat dari empat tugas yang berdiri sendiri.
>
> Bonusnya: di akhir kelas mereka punya **satu produk utuh** untuk ditunjukkan saat ditanya "pernah bikin apa?" — bukan empat potongan latihan.

---

## Konsekuensi yang Harus Disampaikan di Awal

**Keterlambatan menumpuk.** Karena tiap tahap dibangun di atas tahap sebelumnya, peserta yang belum menyelesaikan Tugas 1 tidak punya apa pun untuk dimigrasi ke React di Tugas 2. Ini berbeda dari tugas terpisah, di mana tertinggal satu tidak mempengaruhi yang lain.

Sampaikan ini di Pertemuan 1, jangan menunggu ada yang tertinggal.

---

## Cara Mengumpulkan — Pull Request

Sekali di awal program: **Use this template** di repositori template kelas → bikin repo sendiri → tambahkan mentor sebagai **collaborator**.

Lalu untuk tiap tugas:

```bash
git checkout -b tugas1-nama-anda      # cabang baru, jangan kerja di main
git add .
git commit -m "feat: halaman statis tugas 1"
git push -u origin tugas1-nama-anda
```

Lalu di GitHub: **Compare & pull request** → isi judul → **Create pull request**.

Setup awalnya diajarkan di **Pertemuan 1 Bagian 8**. Strategi branching yang lebih dalam dan penyelesaian *merge conflict* diajarkan di **Pertemuan 8**.

---

## Penilaian

Tugas berbobot **30%** dari nilai akhir. Dua hal yang perlu ditegaskan ke peserta:

**1. Verifikasi lisan adalah penilaian yang sebenarnya.** Mentor akan menunjuk baris kode secara acak saat sesi breakout dan menanyakan alasan di balik keputusan teknisnya. Tugas yang tidak dapat dipertanggungjawabkan penulisnya dinilai **tidak lengkap** — berapa pun rapinya kode itu.

**2. AI boleh dipakai.** Selengkapnya di bawah.

---

## Kebijakan AI Coding Assistant

Penggunaan AI *coding assistant* (GitHub Copilot, Claude, ChatGPT, dan sejenisnya) **diperbolehkan** sepanjang kelas dan fase capstone. Kelas ini menyiapkan peserta untuk kondisi kerja yang sebenarnya, dan di lapangan tool tersebut sudah jadi bagian alur kerja normal.

Konsekuensinya, standar penilaian bergeser: **yang dinilai bukan siapa yang mengetik kode, melainkan apakah peserta memahami dan dapat mempertanggungjawabkannya.**

- Setiap baris kode dalam Pull Request harus dapat dijelaskan peserta apabila ditanya.
- Peserta wajib bisa menjelaskan **mengapa** suatu pendekatan dipilih, bukan hanya cara kerjanya.
- Kode yang tidak dapat dijelaskan penulisnya **dinilai nol** — bukan karena memakai AI, melainkan karena tidak ada pemahaman.
- **Kemampuan menemukan dan memperbaiki kesalahan pada kode hasil AI dinilai sebagai kompetensi positif.**

> **CARA SAMPAIKAN ke kelas:**
> "Saya nggak akan pura-pura AI itu nggak bisa. AI bisa bikin halaman ini dalam 10 detik, lebih cepat dari siapa pun di ruangan ini — saya termasuk.
> Makanya yang saya nilai bukan siapa yang ngetik. Yang saya nilai: **kalian ngerti nggak apa yang kalian kumpulin?**
> Di dunia kerja, bottleneck-nya udah geser. Bukan lagi nulis kode — tapi **meriksa** kode. Dan baca kode itu lebih susah daripada nulisnya. AI itu mindahin kita semua ke pekerjaan yang lebih susah.
> Perusahaan bayar kalian buat **tanggung jawab** kalau ada yang salah. AI nggak bisa dimintai tanggung jawab. Kalian bisa."

---

## Isi Folder

```
tugas/
├── README.md                        # dokumen ini
└── tugas-1-static-foundation/
    ├── soal.md                      # ketentuan + rubrik
    ├── index.html                   # kerangka ber-TODO
    ├── style.css                    # kerangka ber-TODO
    └── kunci-jawaban/               # JANGAN dibagikan  [mentor]
```

Tugas 2–4 ditambahkan menjelang minggu masing-masing.
