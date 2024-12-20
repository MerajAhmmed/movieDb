import Image from "next/image";
import Link from "next/link";

export default function SimilarMovies() {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">More Like This</h2>
      <div className="flex space-x-4 overflow-x-auto pb-4">
        <div className="flex w-48 h-[288px] rounded-lg cursor-pointer hover:scale-105 transition-transform">
          <div className="w-48 h-[288px] rounded-lg bg-zinc-800 relative">
            <div className="absolute inset-0 w-full h-full rounded-lg overflow-hidden">
              <div className=" w-full h-full bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 bg-[length:200%_100%] animate-[shimmer_.5s_infinite]"></div>
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
          <Link href="details.html">
            <Image
              src={`https://image.tmdb.org/t/p/original/3LjHC2CWDkzoiPehf3GViujws0.jpg`}
              alt="The Good German"
              className="w-full rounded-lg"
              width={100}
              height={100}
            />
          </Link>
        </div>
      </div>
    </>
  );
}
