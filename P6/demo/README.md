# Demo Live — Pertemuan 6

File di sini untuk **dipakai mentor saat mengajar**, bukan dibagikan ke peserta.

```bash
npm i axios
npm i -D @types/react @types/react-dom   # hanya kalau editor mengeluh soal tipe
```

---

## Isi & Pemetaan ke Materi

| File | Yang diajarkan | Bagian | Menit |
|---|---|---|:--:|
| [api/client.js](api/client.js) | Axios `baseURL`, `timeout`, interceptor | Bagian 2 | 24–40 |
| [komponen/LimaStatus.jsx](komponen/LimaStatus.jsx) | **Lima status antarmuka** ⚠️ | Bagian 3 | 40–68 |
| [types.ts](types.ts) | `interface` untuk data API | Bagian 4 | 68–93 |
| [komponen/DaftarProduk.tsx](komponen/DaftarProduk.tsx) | Semuanya digabung + simulasi gagal | Bagian 5 | 93–112 |

Semua file berisi komentar **CARA SAMPAIKAN** siap ucap.

---

## Peragaan Terpenting: `LimaStatus.jsx`

⛔ **Bobot terbesar Tugas 3 ada di sini.** Kalau waktu meleset, ambil dari bagian lain.

File ini punya **tombol untuk memaksa tiap status**, supaya Anda bisa menunjukkan kelimanya tanpa menunggu kondisi jaringan yang pas.

**Yang paling sering tertukar: Empty vs Error.** Keduanya membuat layar kosong, tapi penyebabnya berbeda total:

| | Permintaan sampai server? | Server menjawab? |
|---|:--:|:--:|
| **Empty** | ✅ | ✅ — jawabannya "tidak ada" |
| **Error** | ❌ atau ✅ gagal | ❌ |

> "Empty itu pesanan kalian **berhasil** nyampe dapur, dapurnya **jawab**. Jawabannya aja yang 'nggak ada'. Error itu kalian **nggak dapet jawaban sama sekali**."

---

## Tiga Simulasi Gagal — Bagian 5

Ini yang diminta silabus, dan **persis yang diuji saat menilai Tugas 3**.

| Simulasi | Caranya | Yang harus terlihat |
|---|---|---|
| Koneksi lambat | Network → **Slow 3G** | Skeleton beberapa detik |
| Koneksi mati | Network → **Offline** → Coba Lagi | Error state + tombol berfungsi |
| Hasil kosong | Cari `zzzz` | Empty state, **bukan** error |

> Catatan di soal Tugas 3: *"aplikasi akan diuji dengan mematikan koneksi internet. Tampilan yang menghasilkan layar kosong tanpa penjelasan dinilai belum memenuhi ketentuan."*

---

## TypeScript — Tiga Hal yang Wajib Disampaikan

**1. Pasangnya cukup ubah nama file.** `.jsx` → `.tsx`. Vite sudah mendukung TypeScript, tidak perlu konfigurasi.

**2. Vite tidak memeriksa tipe saat build.** Dia cuma membuang anotasinya; pemeriksaannya terjadi di **editor**.
> "Kalau kalian abaikan garis merahnya, aplikasinya tetap jalan. TypeScript itu **asisten, bukan satpam**."

**3. ⚠️ `interface` tidak memeriksa data sungguhan — JANGAN DILEWATI.**
> "`interface` itu janji yang **kalian tulis sendiri**. Kalau kalian nulis `harga: number` tapi server ngirim teks `"35000"`, TypeScript **diem aja** — dia udah nggak ada pas kode kalian jalan."

Tanpa kalimat ketiga, peserta pulang dengan **rasa aman palsu**.

---

## Catatan tentang API yang Dipakai

Demo memakai **`https://dummyjson.com`** — publik, tanpa kunci, dan mendukung pencarian serta pagination yang dibutuhkan Tugas 3.

> ⚠️ **Uji dari nol di H-1.** Kalau API-nya mati, siapkan cadangan: `https://jsonplaceholder.typicode.com`.

**Detail yang justru berguna:** response `dummyjson` **bukan** langsung array, melainkan `{ products, total, skip, limit }`. Peserta yang menulis `res.data.map(...)` akan gagal — dan yang memberi tahu bentuk aslinya adalah **tab Network**, bukan tebakan. Manfaatkan ini sebagai contoh nyata.

---

## Sebelum Kelas

- [ ] **Uji API dari nol** — pastikan `dummyjson.com` masih hidup
- [ ] Jalankan seluruh `demo/` di project Vite, termasuk versi `.tsx`
- [ ] Latih tiga simulasi: Slow 3G · Offline · pencarian kosong
- [ ] Pastikan **tab Network terlihat jelas** di proyektor — hari ini Network adalah materi
- [ ] Aktifkan filter **Fetch/XHR** sebelum kelas mulai
- [ ] Siapkan `data.js` peserta untuk ditampilkan di pembuka
- [ ] **Pasang alarm di menit ke-40** — kalau Bagian 1–2 belum selesai, potong interceptor

---

## Terkait

- [Materi lengkap](../P6-Materi-Mentor-Frontend-API.md)
- [RUNDOWN](../RUNDOWN.md) — termasuk urutan potong kalau waktu tidak cukup
- [Tugas 3 — Multi-Page & Live Data](../../tugas/) — mencakup P5 **dan** P6
