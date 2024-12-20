export const getRelatedMovies = async (movie_id) => {
  const TMDB_API_URL = process.env.TMDB_API_BASE_URL;
  const TMDB_API_KEY = process.env.TMDB_API_KEY;

  try {
    const response = await fetch(
      `${TMDB_API_URL}/movie/${movie_id}/recommendations?api_key=${TMDB_API_KEY}&language=en-US&page=1`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }
    const data = await response.json();
    console.log(data);
    return data.results;
  } catch (e) {
    console.error("Error fetching Simillar movies:", e.message);
    return [];
  }
};
