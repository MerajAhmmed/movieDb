import Image from "next/image";
import Link from "next/link";

export default function TrendingMovies({ trendingMovies }) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Trending Now</h2>
      <div id="trendingMovies" className="flex space-x-4 overflow-x-auto pb-4">
        {trendingMovies?.map((movie) => (
          <div
            className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform"
            key={movie?.id}
          >
            <Link href={`/movie/${movie?.id}`}>
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                alt="Smile 2"
                className="w-full rounded-lg"
                width={100}
                height={100}
              />
              <div className="mt-2">
                <h3 className="text-light text-sm font-bold truncate">
                  {movie?.title}
                </h3>
                <p className="text-primary text-xs">{movie?.release_date}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
