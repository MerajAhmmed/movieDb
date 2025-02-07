export default function MovieInfo({ singleMovieDetails }) {
  return (
    <>
      {" "}
      <h1 className="text-4xl font-bold mb-4">{singleMovieDetails?.title}</h1>
      <div className="flex items-center mb-4 space-x-4">
        <span className="text-green-500">
          {" "}
          {singleMovieDetails?.release_date}{" "}
        </span>
        <span>| </span>
        <span>{singleMovieDetails?.runtime} min</span>
      </div>
      <p className="text-lg mb-6">{singleMovieDetails?.overview}</p>
      <div className="mb-6">
        <h3 className="text-gray-400 mb-2">Genres</h3>

        <div className="flex flex-wrap gap-2">
          {singleMovieDetails?.genres?.map((genre) => (
            <span
              className="px-3 py-1 bg-gray-800 rounded-full text-sm"
              key={genre?.id}
            >
              {genre?.name}{" "}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
