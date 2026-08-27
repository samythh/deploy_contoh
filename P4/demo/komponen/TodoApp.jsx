import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import FilterBar from "./FilterBar";
import TodoList from "./TodoList";

/* ============================================================
   PEREKAT SEMUANYA — hasil akhir P4.

   Komponen ini memegang SEMUA state, lalu membagikannya ke bawah
   lewat props. FilterBar dan TodoList bersaudara — mereka tidak
   bisa saling bicara, jadi state-nya diangkat ke sini.

   CARA SAMPAIKAN — Analogi Dua Adik & Satu Remote:

   "Bayangin dua anak rebutan ganti channel TV. Mereka nggak bisa
    saling nyuruh — mereka setara. Solusinya: REMOTE-NYA DIPEGANG
    IBU. Adik bilang ke ibu, ibu yang mencet, kakak lihat TV-nya
    berubah.

    State itu remote-nya. Kalau dua komponen bersaudara butuh data
    yang sama, angkat state-nya ke induk mereka.

    Dan ini yang penting: props nggak cuma buat ngirim data.
    FUNGSI JUGA BISA DIKIRIM lewat props. Itu cara anak 'ngomong'
    ke atas — dia nggak ngubah data induknya, dia cuma manggil
    fungsi yang dikasih induknya."
   ============================================================ */

function TodoApp() {
  /* Nilai awal dibaca dari LocalStorage lewat FUNGSI, bukan nilai
     langsung. Bentuk ini (lazy initializer) membuat localStorage
     cuma dibaca sekali, bukan tiap render. */
  const [todos, setTodos] = useState(() => {
    const tersimpan = localStorage.getItem("todos");
    return tersimpan ? JSON.parse(tersimpan) : [];
  });

  const [filter, setFilter] = useState("semua");

  /* ============================================================
     useEffect yang BENAR — menyinkronkan dengan dunia di luar
     React. LocalStorage bukan bagian React, jadi butuh effect.

     Baca sebagai: "setiap kali `todos` berubah, sinkronkan ke
     LocalStorage."

     PERAGAKAN: tambah beberapa todo, lalu REFRESH halaman.
     Datanya masih ada.

     "Ini momen yang bikin aplikasi kalian berasa beneran. Data
      kalian nggak hilang lagi tiap refresh."

     COLOKAN KE DEPAN: ini persis yang diminta Tugas 4 — "state
     global dipertahankan setelah halaman dimuat ulang melalui
     Local Storage". Sebut itu.
     ============================================================ */
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  /* --- Tiga pola immutable dari Bagian 2 --- */

  // TAMBAH — spread (P2 Bagian 3)
  const tambah = (todoBaru) => setTodos([...todos, todoBaru]);

  // HAPUS — .filter() (P2 Bagian 4)
  const hapus = (id) => setTodos(todos.filter((t) => t.id !== id));

  // UBAH SATU ITEM — .map() (P2 Bagian 4)
  const toggle = (id) =>
    setTodos(todos.map((t) => (t.id === id ? { ...t, selesai: !t.selesai } : t)));

  /* ============================================================
     PERHATIKAN: `terlihat` BUKAN state, dan TIDAK pakai useEffect.

     Dia dihitung langsung saat render dari data yang sudah ada.

     Ini contoh nyata dari tabel di Bagian 6:
       "Saring daftar berdasarkan filter" → TIDAK butuh useEffect.

     Kalau ini dijadikan state + effect, ada dua sumber kebenaran
     yang bisa tidak sinkron. Sebut ini di kelas — AI sering
     menyarankan versi yang salah.
     ============================================================ */
  const terlihat =
    filter === "semua"
      ? todos
      : filter === "selesai"
      ? todos.filter((t) => t.selesai)
      : todos.filter((t) => !t.selesai);

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>

      <TodoForm onTambah={tambah} />

      <FilterBar
        filter={filter}
        onGanti={setFilter}
        jumlahAktif={todos.filter((t) => !t.selesai).length}
      />

      <TodoList todos={terlihat} onToggle={toggle} onHapus={hapus} />

      {todos.length === 0 && (
        <p className="mt-4 text-sm text-gray-500 text-center">
          Belum ada todo. Tambahkan lewat form di atas.
        </p>
      )}
    </div>
  );
}

export default TodoApp;
