export const getPopularMovies = async () => {
  const LOCAL_BASE_URL = process.env.LOCAL_BASE_URL;

  try {
    const response = await fetch(`${LOCAL_BASE_URL}/api/popular`);
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
  const LOCAL_BASE_URL = process.env.LOCAL_BASE_URL;

  try {
    const response = await fetch(`${LOCAL_BASE_URL}/api/trending`);
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
  const LOCAL_BASE_URL = process.env.LOCAL_BASE_URL;

  try {
    const response = await fetch(`${LOCAL_BASE_URL}/api/topRatedMovies`);
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
