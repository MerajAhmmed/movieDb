import MovieDetails from "@/components/movieDetails/MovieDetails";
import SimilarMovies from "@/components/movieDetails/SimilarMovies";
import { getRelatedMovies } from "@/lib/likeMovies";

export default async function page({ params }) {
  const relatedMovies = await getRelatedMovies({
    params: { movie_id: 1061474 },
  });
  console.log(relatedMovies);
  return (
    <>
      <div id="movieDetails" className="min-h-screen pt-20 mb-8">
        <MovieDetails />
      </div>
      <div className="container mx-auto px-4 py-8">
        <SimilarMovies />
      </div>
    </>
  );
}
