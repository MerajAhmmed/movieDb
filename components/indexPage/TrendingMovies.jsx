import Image from "next/image";
import Link from "next/link";

export default function TrendingMovies() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Trending Now</h2>
      <div id="trendingMovies" className="flex space-x-4 overflow-x-auto pb-4">
        <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
          <Link href="details.html">
            <Image
              src={`https://image.tmdb.org/t/p/original/ht8Uv9QPv9y7K0RvUyJIaXOZTfd.jpg`}
              alt="Smile 2"
              className="w-full rounded-lg"
              width={100}
              height={100}
            />
            <div className="mt-2">
              <h3 className="text-light text-sm font-bold truncate">Smile 2</h3>
              <p className="text-primary text-xs">2023</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
