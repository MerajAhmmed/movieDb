import LoadingSkeleton from "@/components/movieDetails/LoadingSkeleton";
import MovieDetails from "@/components/movieDetails/MovieDetails";
import SimilarMovies from "@/components/movieDetails/SimilarMovies";
import { getMoviesById } from "@/lib/detailsMovieById";
import { getRelatedMovies } from "@/lib/likeMovies";
import { Suspense } from "react";

export default async function page({ params }) {
  const relatedMovies = await getRelatedMovies(params?.id);
  const detailsMovieById = await getMoviesById(params?.id);

  return (
    <>
      <div id="movieDetails" className="min-h-screen pt-20 mb-8">
        <MovieDetails singleMovieDetails={detailsMovieById || {}} />
      </div>
      <div className="container mx-auto px-4 py-8 mt-56">
        <h2 className="text-2xl font-bold mb-4">More Like This</h2>
        <Suspense key={params?.id} fallback={<LoadingSkeleton />}>
          <SimilarMovies relatedMovies={relatedMovies} />
        </Suspense>
      </div>
    </>
  );
}
