import HeroSection from "@/components/indexPage/HeroSection";
import PopularMovies from "@/components/indexPage/PopularMovies";
import TopRatedMovies from "@/components/indexPage/TopRatedMovies";
import TrendingMovies from "@/components/indexPage/TrendingMovies";
import SearchPage from "@/components/search/SearchPage";
import {
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
} from "@/lib/movies";
import { getSearch } from "@/lib/search";

export default async function Home({ searchParams: { query } }) {
  const popularMovies = await getPopularMovies();
  const trendingMovies = await getTrendingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const searchResult = await getSearch(query);

  return (
    <div>
      {query ? (
        <main className="container mx-auto px-4 pt-24 pb-8">
          <SearchPage searchResult={searchResult} query={query} />
        </main>
      ) : (
        <>
          <HeroSection />
          <div className="container mx-auto px-4 py-8">
            <TrendingMovies trendingMovies={trendingMovies} />
            <PopularMovies popularMovies={popularMovies} />
            <TopRatedMovies topRatedMovies={topRatedMovies} />
          </div>
        </>
      )}
    </div>
  );
}
