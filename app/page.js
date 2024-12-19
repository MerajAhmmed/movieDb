import HeroSection from "@/components/indexPage/HeroSection";
import PopularMovies from "@/components/indexPage/PopularMovies";
import TopRatedMovies from "@/components/indexPage/TopRatedMovies";
import TrendingMovies from "@/components/indexPage/TrendingMovies";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="container mx-auto px-4 py-8">
        <TrendingMovies />
        <PopularMovies />
        <TopRatedMovies />
      </div>
    </div>
  );
}
