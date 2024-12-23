import { getBlurData } from "@/lib/blur";
import Image from "next/image";
import Link from "next/link";

export default async function MoviesCard({ movie }) {
  const { base64 } = await getBlurData(
    `https://image.tmdb.org/t/p/w500${movie?.poster_path}`
  );
  return (
    <div className="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
      <Link href="#">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          alt="The Good German"
          className="w-full rounded-lg"
          width={100}
          height={100}
          placeholder="blur"
          blurDataURL={base64}
        />
      </Link>
    </div>
  );
}
