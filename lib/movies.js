export const getPopularMovies = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=9977347164299eac338c435c55131216&language=en-US&page=1`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const data = await response.json();
    return data.results;
  } catch (e) {
    console.error("Error fetching popular movies:", e.message);
    return [];
  }
};
export const getTrendingMovies = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=9977347164299eac338c435c55131216&language=en-US&page=1`
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
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=9977347164299eac338c435c55131216&language=en-US&page=1`
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
