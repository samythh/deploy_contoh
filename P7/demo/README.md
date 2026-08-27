# Demo Live — Pertemuan 7

File di sini untuk **dipakai mentor saat mengajar**, bukan dibagikan ke peserta.

```bash
npm i zustand
npm i -D babel-plugin-react-compiler
```

> ⚠️ **Uji pemasangan React Compiler dari nol di H-1.** Ini bagian materi yang paling cepat basi — nama paket dan cara konfigurasinya masih berubah. Kalau berbeda, **perbaiki dokumen materinya dulu**, jangan improvisasi di depan kelas.

---

## Isi & Pemetaan ke Materi

| File | Yang diajarkan | Bagian | Menit |
|---|---|---|:--:|
| [context/TemaContext.jsx](context/TemaContext.jsx) | Context API + custom hook pembungkus | Bagian 2 | 24–48 |
| [store/keranjang.js](store/keranjang.js) | Zustand + `persist` ke LocalStorage | Bagian 3 | 48–68 |
| [komponen/ContextVsZustand.jsx](komponen/ContextVsZustand.jsx) | **Peragaan siapa yang ikut re-render** ⚠️ | Bagian 2–3 | 24–68 |

Semua file berisi komentar **CARA SAMPAIKAN** siap ucap.

---

## Peragaan Terpenting: `ContextVsZustand.jsx`

⛔ **Jangan diganti dengan sekadar menyebut bahwa "Context bikin semua re-render".**

Kalau batas Context cuma disebut, peserta akan menaruh keranjang belanja di Context, lalu seluruh aplikasi mereka digambar ulang tiap klik — **dan mereka tidak akan tahu kenapa.**

**Urutan — 3 menit:**

1. React DevTools → tab **Components** → ⚙️ → centang **Highlight updates when components render**
2. Klik **"Ganti Tema"** → **semua** kotak di kolom Context berkedip
3. Klik **"Tambah ke Keranjang"** → **hanya** kotak Zustand yang berlangganan bagian itu

**Tunjuk kotak "Pengamat Diam"** di kolom Context. Komponen itu memanggil `useTema()` tapi **tidak memakai satu pun nilainya** — dan tetap ikut berkedip.

> "Lihat kotak ini. Dia nggak nampilin apa-apa dari tema. Tapi dia tetep ikut kebangun — soalnya dia langganan context-nya."

Bandingkan dengan **"Pengamat Lain"** di kolom Zustand: berlangganan bagian berbeda dari store yang sama, dan **tidak** ikut berkedip.

---

## Dua Analogi Berpasangan

**Context — Pengeras Suara Gedung**
> "Kalian mau ngasih tahu satu orang di lantai tiga. Tapi yang kedengeran **semua orang di semua lantai** — dan semuanya berhenti kerja buat dengerin."

**Zustand — Grup WhatsApp per Topik**
> "Kalian cuma masuk grup yang kalian butuh. Ada kabar di grup 'Keranjang'? Yang kena notif cuma anggota grup itu."

**Kesimpulan yang harus mereka bawa pulang:**
> "Jarang berubah → Context. Sering berubah → Zustand. Dua-duanya dipakai di industri, sering bareng di aplikasi yang sama."

---

## ⚠️ Bagian 4 — Baca Sebelum Mengajar

**React Compiler adalah materi yang paling gampang salah diajarkan di seluruh program.**

Sejak React 19, `useMemo` / `useCallback` / `React.memo` adalah **pengecualian, bukan kebiasaan**. Masalahnya: hampir semua tutorial, semua jawaban Stack Overflow, dan **hampir semua saran AI** masih mengajarkan cara lama.

| | Sebelum React 19 | Sekarang |
|---|---|---|
| Memoization manual | **Kebiasaan** | **Pengecualian** |
| Yang mengurus | Programmer | Compiler, saat build |
| Kapan manual dipakai | Di mana-mana | Kode di `try/catch`, library yang butuh *referential equality* |

**Prinsip yang paling penting untuk dibawa pulang** — lebih dari sintaks apa pun:

> "Sebelum kalian nulis satu baris optimasi, **kalian harus bisa nunjukin angkanya.** Komponen mana, berapa milidetik.
>
> Optimasi tanpa ukuran itu kayak **minum obat tanpa tahu sakitnya apa.**"

Peragakan **React DevTools → Profiler**: rekam → beraksi → berhenti → lihat grafik batangnya.

---

## Peragaan Race Condition — Bagian 6

Ini konsep yang sulit dijelaskan tapi mudah ditunjukkan. **3 menit.**

1. Buka pencarian dari P6, aktifkan **Slow 3G**
2. Ketik `a` — permintaan pertama berangkat
3. Cepat ketik `ab` — permintaan kedua berangkat
4. Kalau yang **pertama** sampai belakangan, hasil `a` menimpa hasil `ab`

> "Kotak pencariannya nulis 'ab', tapi hasilnya buat 'a'. Nggak ada error, nggak ada yang crash. Aplikasi kalian cuma **nampilin yang salah dengan penuh percaya diri**.
>
> Ini yang paling serem dari bug jaringan: dia nggak keliatan rusak."

⚠️ **Jangan sampai peserta merasa P6 itu salah.** Sama seperti SSR di P5 — tekankan bahwa `useEffect` + Axios adalah fondasinya, dan TanStack Query mengurus **jenis state yang berbeda**: server state, bukan client state.

**Tidak diwajibkan di Tugas 3 atau 4.** Sebut eksplisit supaya tidak ada yang panik.

---

## Sebelum Kelas

- [ ] **Pasang React Compiler dari nol di Vite** — kalau perintahnya berbeda, perbaiki dokumen dulu
- [ ] Pasang `zustand`, jalankan seluruh `demo/`
- [ ] **Latih peragaan Highlight updates** sampai bedanya terlihat jelas di proyektor
- [ ] **Latih peragaan race condition** dengan Slow 3G — paling sulit diulang kalau belum dicoba
- [ ] Cari contoh **props drilling di kode Tugas 3 peserta** untuk dipakai di pembuka
- [ ] React DevTools **Components dan Profiler** dua-duanya siap

---

## Terkait

- [Materi lengkap](../P7-Materi-Mentor-Frontend-GlobalState.md)
- [RUNDOWN](../RUNDOWN.md) — pegangan saat mengajar
- [Tugas 4 — Production Ready](../../tugas/) — mencakup P7 **dan** P8
