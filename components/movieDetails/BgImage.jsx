import Image from "next/image";

export default function BgImage() {
  return (
    <div className="absolute inset-0">
      <Image
        src={`https://image.tmdb.org/t/p/original/iR79ciqhtaZ9BE7YFA1HpCHQgX4.jpg`}
        alt="Smile 2"
        className="w-full h-full object-cover"
        height={100}
        width={100}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70"></div>
    </div>
  );
}
