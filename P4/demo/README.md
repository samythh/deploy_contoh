# Demo Live — Pertemuan 4

File di sini untuk **dipakai mentor saat mengajar**, bukan dibagikan ke peserta.

Semua butuh project Vite yang jalan — salin ke `src/`, lalu panggil dari `App.jsx`.

---

## Isi & Pemetaan ke Materi

| File | Yang diajarkan | Bagian | Menit |
|---|---|---|:--:|
| [MutasiJebakan.jsx](komponen/MutasiJebakan.jsx) | **Peragaan `.push()` yang gagal** | Bagian 2 | 26–46 |
| [TodoForm.jsx](komponen/TodoForm.jsx) | Controlled components + validasi | Bagian 4 | 58–80 |
| [FilterBar.jsx](komponen/FilterBar.jsx) | **Lifting state up** | Bagian 5 | 80–92 |
| [TodoApp.jsx](komponen/TodoApp.jsx) | Perekat + `useEffect` LocalStorage | Bagian 1–6 | — |
| [TodoList.jsx](komponen/TodoList.jsx) | Komponen perantara, `key` stabil | Bagian 1 | — |
| [TodoItem.jsx](komponen/TodoItem.jsx) | Handler `onClick` yang benar | Bagian 1 | — |

Semua file berisi komentar **CARA SAMPAIKAN** siap ucap.

---

## Peragaan Terpenting: `MutasiJebakan.jsx`

⛔ **Jangan dilewati, dan jangan diganti dengan sekadar menyebut aturannya.**

Kalau immutability cuma disampaikan sebagai aturan ("jangan `.push()`, pakai spread"), peserta akan menurut tanpa paham — lalu terkena di kasus yang sedikit berbeda (`.sort()`, mutasi object) dan tidak bisa mengenali polanya.

**Urutan peragaan — 2 menit:**

1. Klik tombol **merah** beberapa kali → layar **diam**, tanpa error
2. Buka React DevTools → Components → array `todos` **ternyata bertambah**
3. Biarkan bingung. Tanya: *"datanya nambah, tapi layarnya nggak berubah. Kenapa?"*
4. Klik tombol **hijau** → langsung muncul
5. Klik **"Paksa gambar ulang"** → semua item yang tadi "hilang" **muncul sekaligus**

Langkah 5 adalah bukti paling kuat: datanya memang selalu ada, React cuma tidak pernah diberi tahu.

**Analogi satpam & nomor seri** ada lengkap di komentar file-nya.

---

## Dua Momen Lain

**LocalStorage bertahan setelah refresh** ([TodoApp.jsx](komponen/TodoApp.jsx))
Tambah beberapa todo → refresh halaman → data masih ada.
> "Ini momen yang bikin aplikasi kalian berasa beneran."

**Highlight updates di React DevTools** (Bagian 3)
Aktifkan *Highlight updates when components render* di ⚙️. Komponen yang digambar ulang berkedip. Ulangi peragaan `.push()` sambil ini aktif — terlihat jelas bahwa **tidak ada** yang berkedip.

---

## `useEffect` — Baca Sebelum Mengajar

`TodoApp.jsx` sengaja memuat **dua contoh berlawanan** di file yang sama:

| Kode | Butuh effect? |
|---|:--:|
| `useEffect(() => localStorage.setItem(...), [todos])` | ✅ LocalStorage di luar React |
| `const terlihat = todos.filter(...)` | ❌ Dihitung langsung saat render |

Yang kedua **sengaja tidak** dibungkus effect, dan komentarnya menjelaskan kenapa.

> Ini bagian yang paling gampang salah diajarkan. Kalau `useEffect` disampaikan sebagai *"kode yang jalan saat komponen muncul"*, peserta akan membungkus semuanya dengan effect. Ajarkan sebagai **sinkronisasi dengan dunia luar**.
>
> AI coding assistant juga sering menyarankan `useEffect` yang tidak perlu — sebut ini ke peserta.

---

## Sebelum Kelas

- [ ] **Kirim tautan pemasangan React Developer Tools di H-1** — ini extension, butuh unduh
- [ ] Latih peragaan `MutasiJebakan` sampai lancar
- [ ] Uji LocalStorage: tambah todo → refresh → data bertahan
- [ ] Aktifkan *Highlight updates* sebelum kelas mulai
- [ ] Jalankan seluruh `komponen/` di project Vite untuk memastikan berjalan
- [ ] Siapkan katalog P3 peserta untuk ditampilkan di pembuka

---

## Terkait

- [Materi lengkap](../P4-Materi-Mentor-Frontend-State.md)
- [RUNDOWN](../RUNDOWN.md) — pegangan saat mengajar
- [Tugas 2 — React Migration](../../tugas/) — mencakup P3 **dan** P4
