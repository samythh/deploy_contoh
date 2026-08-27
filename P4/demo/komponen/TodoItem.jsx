/* ============================================================
   Satu baris todo. Tidak punya state — seluruh datanya dari props.

   Ini penerapan Tips nomor 1 (Lampiran C): "state sesedikit
   mungkin". Status selesai/belum itu milik TodoApp, bukan milik
   baris ini. Kalau tiap baris menyimpan status sendiri, TodoApp
   tidak akan pernah tahu berapa yang sudah selesai.

   ------------------------------------------------------------
   PERHATIKAN onClick-nya:

     onClick={() => onToggle(todo.id)}      benar
     onClick={onToggle(todo.id)}            SALAH

   Yang kedua MEMANGGIL fungsinya saat render, bukan saat diklik.
   Akibatnya state berubah saat render, React gambar ulang, state
   berubah lagi — dan muncul error:

     "Too many re-renders"

   Ini kesalahan yang pasti terjadi di kelas. Sebut duluan, dan
   kalau ada yang kena, tunjukkan pesan errornya di Console.
   ============================================================ */

function TodoItem({ todo, onToggle, onHapus }) {
  return (
    <li className="flex items-center gap-3 p-3 bg-white border rounded">
      <input
        type="checkbox"
        checked={todo.selesai}
        onChange={() => onToggle(todo.id)}
      />

      {/* Conditional dari P3 — ternary untuk "yang mana",
          short-circuit && untuk "muncul nggak". */}
      <span
        className={`flex-1 text-sm ${
          todo.selesai ? "line-through text-gray-400" : "text-gray-900"
        }`}
      >
        {todo.teks}
      </span>

      {todo.penting && (
        <span className="px-2 py-0.5 rounded text-xs bg-amber-100 text-amber-700">
          Penting
        </span>
      )}

      {todo.prioritas === "tinggi" && (
        <span className="px-2 py-0.5 rounded text-xs bg-red-100 text-red-700">
          Prioritas
        </span>
      )}

      <button
        onClick={() => onHapus(todo.id)}
        className="px-2 py-1 text-sm text-red-600"
      >
        Hapus
      </button>
    </li>
  );
}

export default TodoItem;
