import { Suspense } from "react";
import BgImage from "./BgImage";
import AddedListBtn from "./button/AddedListBtn";
import WatchListBtn from "./button/WatchListBtn";
import LoadingSkeleton from "./LoadingSkeleton";
import MovieCast from "./MovieCast";
import MovieInfo from "./MovieInfo";
import RelativeMovie from "./RelativeMovie";
import SocialShareBtn from "./SocialShareBtn";

export default function MovieDetails({ singleMovieDetails }) {
  const bgPostar = singleMovieDetails?.poster_path;

  return (
    <div id="movieDetails" className="min-h-screen pt-20 mb-8">
      <div className="relative h-screen">
        <Suspense fallback={<LoadingSkeleton />}>
          <BgImage bgPostar={bgPostar} />
        </Suspense>
        <div className="relative container mx-auto px-4 pt-32">
          <div className="flex flex-col md:flex-row gap-8">
            <Suspense fallback={<LoadingSkeleton />}>
              <RelativeMovie bgPostar={bgPostar} />
            </Suspense>
            <div className="md:w-2/3">
              <MovieInfo singleMovieDetails={singleMovieDetails} />
              <div className="mb-6 ">
                <h3 className="text-gray-400 mb-2">Cast</h3>
                <div className="flex flex-wrap gap-4 ">
                  {singleMovieDetails?.production_companies?.map((cast) => (
                    <MovieCast
                      key={cast?.id}
                      logo={cast?.logo_path}
                      name={cast?.name}
                    />
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-4">
                  <div className="text-center">
                    <WatchListBtn />
                  </div>

                  <div className="text-center">
                    <AddedListBtn />
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-gray-400 mb-2">Share on social media</h3>
                <div className="flex flex-wrap gap-4">
                  <SocialShareBtn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
