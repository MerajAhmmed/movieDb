import BgImage from "./BgImage";
import AddedListBtn from "./button/AddedListBtn";
import WatchListBtn from "./button/WatchListBtn";
import MovieCast from "./MovieCast";
import MovieInfo from "./MovieInfo";
import RelativeMovie from "./RelativeMovie";
import SocialShareBtn from "./SocialShareBtn";

{
  /* <Image
src={`https://image.tmdb.org/t/p/original/iR79ciqhtaZ9BE7YFA1HpCHQgX4.jpg`}
alt="Smile 2"
classNameName="w-full h-full object-cover"
width={100}
height={100}
/> */
}
export default function MovieDetails() {
  return (
    <div id="movieDetails" className="min-h-screen pt-20 mb-8">
      <div className="relative h-screen">
        <BgImage />

        <div className="relative container mx-auto px-4 pt-32">
          <div className="flex flex-col md:flex-row gap-8">
            <RelativeMovie />

            <div className="md:w-2/3">
              <MovieInfo />
              <div className="mb-6">
                <h3 className="text-gray-400 mb-2">Cast</h3>
                <div className="flex flex-wrap gap-4">
                  <MovieCast />
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
