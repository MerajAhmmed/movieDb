"use client";
export default function AddMovieBtn({ handlSlot }) {
  return (
    <button
      className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors"
      onClick={handlSlot}
    >
      Add Movie +
    </button>
  );
}
