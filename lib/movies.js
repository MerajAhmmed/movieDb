export const getPopularMovies = async () => {
  try {
    const response = await fetch(`${process.env.LOCAL_BASE_URL}/api/popular`);

    const data = await response.json();
    return data.results;
  } catch (e) {
    console.error("Error fetching popular movies:", e.message);
    return [];
  }
};
export const getTrendingMovies = async () => {
  try {
    const response = await fetch(`${process.env.LOCAL_BASE_URL}/api/trending`);

    const data = await response.json();
    return data.results;
  } catch (e) {
    console.error("Error fetching Trending movies:", e.message);
  }
};
export const getTopRatedMovies = async () => {
  try {
    const response = await fetch(
      `${process.env.LOCAL_BASE_URL}/api/topRatedMovies`
    );

    const data = await response.json();
    return data.results;
  } catch (e) {
    console.error("Error fetching TopRated movies:", e.message);
  }
};
