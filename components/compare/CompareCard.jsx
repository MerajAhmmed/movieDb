"use client";

import Link from "next/link";

export default function CompareCard({ index, onDelet, handleModal }) {
  return (
    <div className="bg-zinc-900 rounded-lg p-4 flex flex-col min-h-[400px]">
      <div className="flex justify-end mb-4">
        <button
          className="text-gray-400 hover:text-white"
          onClick={() => onDelet(index)}
        >
          ✕
        </button>
      </div>
      <div className="flex-grow flex flex-col items-center justify-center">
        <Link
          href="#"
          className="bg-zinc-800 text-white px-6 py-3 rounded hover:bg-zinc-700 transition-colors cursor-pointer"
          onClick={(e) => handleModal(true)}
        >
          Select Movie
        </Link>
      </div>
    </div>
  );
}
