import Image from "next/image";
import Link from "next/link";

export default function SearchPage({ searchResult, query }) {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Search Results for {query}</h1>
        <p className="text-gray-400">Found {searchResult.length} results</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {searchResult?.map((movie) => (
          <Link
            href={`/movie/${movie?.id}`}
            className="bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 transition-transform"
            key={movie?.id}
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
              alt={movie?.title}
              className="w-full aspect-[2/3] object-cover"
              height={100}
              width={100}
            />
            <div className="p-4">
              <h3 className="font-bold mb-2">{movie?.title}</h3>
              <div className="flex justify-between text-sm text-gray-400">
                <span>{movie?.release_date}</span>
                <span>⭐ {movie?.vote_average}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
