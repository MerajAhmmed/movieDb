import Image from "next/image";

export default function MovieCast() {
  return (
    <div className="text-center">
      <Image
        src={`https://image.tmdb.org/t/p/original/6OLe7TskbEvYpo36eITfX91VoCP.jpg`}
        alt="Naomi Scott"
        className="w-24 h-24 rounded-full object-cover mb-2"
        width={100}
        height={100}
      />
      <p className="text-sm">Naomi Scott</p>
    </div>
  );
}
