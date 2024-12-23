import MoviesCard from "./MoviesCard";

export default function SimilarMovies({ relatedMovies }) {
  return (
    <div className="flex space-x-4 overflow-x-auto pb-4">
      {relatedMovies?.map((movie) => (
        <MoviesCard key={movie?.id} movie={movie} />
      ))}
    </div>
  );
}
