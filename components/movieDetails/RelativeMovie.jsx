import Image from "next/image";

export default function RelativeMovie() {
  return (
    <div className="md:w-1/3">
      <Image
        src={`https://image.tmdb.org/t/p/original/ht8Uv9QPv9y7K0RvUyJIaXOZTfd.jpg`}
        alt="Smile 2"
        className="w-full rounded-lg shadow-lg"
        height={100}
        width={100}
      />
    </div>
  );
}
