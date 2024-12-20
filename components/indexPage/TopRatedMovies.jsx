import Image from "next/image";
import Link from "next/link";

export default function TopRatedMovies({ topRatedMovies }) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Top Rated</h2>
      <div id="topRatedMovies" className="flex space-x-4 overflow-x-auto pb-4">
        {topRatedMovies.map((movie) => (
          <div
            className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform"
            key="movie?.id"
          >
            <Link href={`/movie/${movie?.id}`}>
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                alt="The Shawshank Redemption"
                className="w-full rounded-lg"
                width={100}
                height={100}
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
