import { getBlurData } from "@/lib/blur";
import Image from "next/image";

export default async function BgImage({ bgPostar }) {
  const { base64 } = await getBlurData(
    `https://image.tmdb.org/t/p/w500${bgPostar}`
  );
  return (
    <div className="absolute inset-0">
      <Image
        src={`https://image.tmdb.org/t/p/w500${bgPostar}`}
        alt="Smile 2"
        className="w-full h-full object-cover"
        sizes="100vw"
        width={100}
        height={100}
        placeholder="blur"
        blurDataURL={base64}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70"></div>
    </div>
  );
}
