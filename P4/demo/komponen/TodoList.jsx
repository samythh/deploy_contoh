import TodoItem from "./TodoItem";

/* ============================================================
   Komponen perantara. TIDAK punya state — dia cuma menerima
   daftar dan meneruskan ke bawah.

   Perhatikan `key={t.id}` — BUKAN key={index}. Pelajaran P3
   Bagian 5 tetap berlaku, dan di sini taruhannya lebih tinggi:
   daftar ini bisa ditambah, dihapus, dan disaring. Persis kondisi
   yang membuat key={index} rusak.

   `onToggle` dan `onHapus` cuma DILEWATKAN dari TodoApp ke
   TodoItem. Ini contoh kecil PROPS DRILLING dari P3 — masih
   nyaman untuk tiga lapis. Obatnya (Context/Zustand) ada di P7.
   Sebut sambil lewat, jangan dibahas panjang.
   ============================================================ */

function TodoList({ todos, onToggle, onHapus }) {
  return (
    <ul className="flex flex-col gap-2">
      {todos.map((t) => (
        <TodoItem key={t.id} todo={t} onToggle={onToggle} onHapus={onHapus} />
      ))}
    </ul>
  );
}

export default TodoList;
