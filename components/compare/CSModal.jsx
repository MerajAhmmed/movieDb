"use client";

import Image from "next/image";

export default function CSModal({ handleModal }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center ">
      <div className="bg-zinc-900 p-6 rounded-lg w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Search Movie</h2>
          <button
            className="text-gray-400 hover:text-white"
            onClick={(e) => handleModal(false)}
          >
            ✕
          </button>
        </div>
        <input
          type="text"
          placeholder="Type movie name..."
          className="w-full bg-zinc-800 text-white px-4 py-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <div className="max-h-96 overflow-y-auto">
          <div className="flex items-center gap-4 p-2 hover:bg-zinc-800 cursor-pointer rounded">
            <Image
              src={`https://image.tmdb.org/t/p/original/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg`}
              alt="The Social Network"
              className="w-16 h-24 object-cover rounded"
              height={100}
              width={100}
            />
            <div>
              <h3 className="font-bold">The Social Network</h3>
              <p className="text-sm text-gray-400">2010</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
