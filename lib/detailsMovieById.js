export const getMoviesById = async (movieId) => {
  const TMDB_API_URL = process.env.TMDB_API_BASE_URL;
  const TMDB_API_KEY = process.env.TMDB_API_KEY;

  try {
    const response = await fetch(
      `${TMDB_API_URL}/movie/${movieId}?api_key=${TMDB_API_KEY}&language=en-US`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }
    const data = await response.json();

    return data;
  } catch (e) {
    console.error("Error fetching Single movies:", e.message);
    return [];
  }
};
