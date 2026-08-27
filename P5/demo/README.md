# Demo Live — Pertemuan 5

File di sini untuk **dipakai mentor saat mengajar**, bukan dibagikan ke peserta.

Semua butuh project Vite dengan `react-router` terpasang.

```bash
npm i react-router
```

> ⚠️ **Paketnya `react-router`, BUKAN `react-router-dom`.** Sejak v7 keduanya digabung. Seluruh file di sini memakai nama baru — **sebut ini eksplisit di kelas**, karena mayoritas tutorial di internet masih memakai nama lama.

---

## Isi & Pemetaan ke Materi

| File | Yang diajarkan | Bagian | Menit |
|---|---|---|:--:|
| [komponen/App.jsx](komponen/App.jsx) | `Routes`, `Route`, `Link`, 404 | Bagian 2 | 20–40 |
| [komponen/LinkJebakan.jsx](komponen/LinkJebakan.jsx) | **Peragaan `<a>` vs `<Link>`** | Bagian 2 | 20–40 |
| [komponen/DetailProduk.jsx](komponen/DetailProduk.jsx) | `useParams` + jebakan string | Bagian 3 | 40–58 |
| [komponen/Beranda.jsx](komponen/Beranda.jsx) | `useSearchParams` + filter di URL | Bagian 4 | 58–72 |
| [hooks/useLocalStorage.js](hooks/useLocalStorage.js) | **Custom hook** — dari P4 | Bagian 5 | 72–92 |
| [hooks/useWindowSize.js](hooks/useWindowSize.js) | Custom hook + cleanup | Bagian 5 | 72–92 |
| [komponen/NotFound.jsx](komponen/NotFound.jsx) | Rute `path="*"` | Bagian 2 | — |
| [komponen/data.js](komponen/data.js) | Data contoh — `id` sengaja angka | — | — |

Semua file berisi komentar **CARA SAMPAIKAN** siap ucap.

> `<BrowserRouter>` dipasang di `main.jsx`, bukan di `App.jsx`. Alasannya ada di komentar `App.jsx`.

---

## Peragaan Terpenting: `LinkJebakan.jsx`

Ini versi P5 dari peragaan yang selalu menentukan — memakai state yang hilang, sama seperti `MutasiJebakan` di P4.

**Urutan — 2 menit:**

1. Ketik beberapa catatan
2. Klik link **merah** (`<a href>`) → tekan Back → **catatan hilang**, layar sempat **berkedip putih**
3. Ketik lagi
4. Klik link **hijau** (`<Link to>`) → tekan Back → **catatan masih ada**, tanpa kedip

> **Kalau kedipnya tidak terlihat di proyektor:** buka DevTools → Network → centang *Disable cache*, pilih throttling **Slow 3G**. Reload-nya jadi jelas terasa.

---

## Dua Jebakan yang Wajib Disebut Duluan

**1. `useParams` selalu mengembalikan string** ([DetailProduk.jsx](komponen/DetailProduk.jsx))

`data.js` sengaja memakai `id` bertipe **angka**, supaya jebakan ini benar-benar terjadi saat diperagakan.

```jsx
produk.find(p => p.id === id)            // ❌ gagal, "7" !== 7
produk.find(p => String(p.id) === id)    // ✅
```

> "Alamat itu teks. `/produk/7` — angka 7 di situ sebenarnya **huruf** 7. Nggak ada error, cuma 'tidak ditemukan' terus."

**2. Paketnya berganti nama** — `react-router`, bukan `react-router-dom`.

Sebut sekali di awal Bagian 2, dan sebut lagi di penutup. Ini akan menghemat banyak pertanyaan di grup.

---

## Peragaan Bagian 6 — Batas SPA

Buka aplikasi jadi → **klik kanan → View Page Source** (bukan Inspect).

Yang terlihat hampir kosong:

```html
<div id="root"></div>
<script src="/assets/index.js"></script>
```

> "Semua yang kalian bikin — navbar, kartu, tombol — **nggak ada di situ**. Yang dikirim server itu halaman kosong plus satu file JavaScript."

⚠️ **Jangan sampai peserta pulang mengira SPA itu pilihan yang salah.** Tekankan: **Next.js itu React**, dan SPA memang tepat untuk aplikasi di balik login — di situ SEO tidak ada gunanya sama sekali.

---

## Uji Cepat Setelah Routing Jalan

Minta peserta menekan tombol **Back** browser beberapa kali.

> "Kalau Back-nya malah keluar dari aplikasi, berarti ada perpindahan yang kalian bikin tanpa lewat router."

Setelah mengganti filter di [Beranda.jsx](komponen/Beranda.jsx) beberapa kali, Back akan memundurkan filternya satu per satu — bukti bahwa menaruh filter di URL memang bekerja.

---

## Sebelum Kelas

- [ ] **Pasang `react-router` dari nol dan uji seluruh import di file-file ini** — nama paket berubah sejak v7
- [ ] Latih peragaan `LinkJebakan` sampai kedipnya terlihat jelas di proyektor
- [ ] Siapkan **View Page Source** dari aplikasi jadi untuk Bagian 6
- [ ] Jalankan seluruh `komponen/` dan `hooks/` di project Vite
- [ ] Siapkan Todo/katalog P4 peserta untuk pembuka
- [ ] Pastikan **alamat browser terlihat jelas** di proyektor — hari ini alamat adalah materi

---

## Terkait

- [Materi lengkap](../P5-Materi-Mentor-Frontend-Routing.md)
- [RUNDOWN](../RUNDOWN.md) — pegangan saat mengajar
- [Tugas 3 — Multi-Page & Live Data](../../tugas/) — mencakup P5 **dan** P6
