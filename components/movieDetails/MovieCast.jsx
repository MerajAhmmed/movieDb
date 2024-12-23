import Image from "next/image";

export default function MovieCast({ logo, name }) {
  return (
    <div className="text-center">
      <Image
        src={`https://image.tmdb.org/t/p/w500${logo}`}
        alt="Naomi Scott"
        className="w-24 h-24 rounded-full object-cover mb-2"
        width={100}
        height={100}
      />
      <p className="text-sm">{name}</p>
    </div>
  );
}
