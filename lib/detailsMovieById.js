export const getMoviesById = async (movieId) => {
  try {
    const response = await fetch(
      `${process.env.LOCAL_BASE_URL}/api/movies/${movieId}`
    );

    const data = await response.json();

    return data;
  } catch (e) {
    console.error("Error fetching Single movies:", e.message);
    return [];
  }
};
