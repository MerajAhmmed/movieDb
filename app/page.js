import HeroSection from "@/components/indexPage/HeroSection";
import PopularMovies from "@/components/indexPage/PopularMovies";
import TopRatedMovies from "@/components/indexPage/TopRatedMovies";
import TrendingMovies from "@/components/indexPage/TrendingMovies";
import {
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
} from "@/lib/movies";

export default async function Home() {
  const popularMovies = await getPopularMovies();
  const trendingMovies = await getTrendingMovies();
  const topRatedMovies = await getTopRatedMovies();

  return (
    <div>
      <HeroSection />
      <div className="container mx-auto px-4 py-8">
        <TrendingMovies trendingMovies={trendingMovies} />
        <PopularMovies popularMovies={popularMovies} />
        <TopRatedMovies topRatedMovies={topRatedMovies} />
      </div>
    </div>
  );
}
