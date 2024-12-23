import { getBlurData } from "@/lib/blur";
import Image from "next/image";

export default async function RelativeMovie({ bgPostar }) {
  const { base64 } = await getBlurData(
    `https://image.tmdb.org/t/p/w500${bgPostar}`
  );
  return (
    <div className="md:w-1/3">
      <Image
        src={`https://image.tmdb.org/t/p/w500${bgPostar}`}
        alt="Smile 2"
        className="w-full rounded-lg shadow-lg"
        placeholder="blur"
        blurDataURL={base64}
        height={100}
        width={100}
      />
    </div>
  );
}
