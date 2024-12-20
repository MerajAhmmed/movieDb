export const getPopularMovies = async () => {
  const TMDB_API_URL = process.env.TMDB_API_BASE_URL;
  const TMDB_API_KEY = process.env.TMDB_API_KEY;

  try {
    const response = await fetch(
      `${TMDB_API_URL}/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    const data = await response.json();
    return data.results;
  } catch (e) {
    console.error("Error fetching popular movies:", e.message);
    return [];
  }
};
export const getTrendingMovies = async () => {
  const TMDB_API_URL = process.env.TMDB_API_BASE_URL;
  const TMDB_API_KEY = process.env.TMDB_API_KEY;

  try {
    const response = await fetch(
      `${TMDB_API_URL}/trending/movie/day?api_key=${TMDB_API_KEY}&language=en-US&page=1`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const data = await response.json();
    return data.results;
  } catch (e) {
    console.error("Error fetching Trending movies:", e.message);
    return [];
  }
};
export const getTopRatedMovies = async () => {
  const TMDB_API_URL = process.env.TMDB_API_BASE_URL;
  const TMDB_API_KEY = process.env.TMDB_API_KEY;

  try {
    const response = await fetch(
      `${TMDB_API_URL}/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const data = await response.json();
    return data.results;
  } catch (e) {
    console.error("Error fetching TopRated movies:", e.message);
    return [];
  }
};
