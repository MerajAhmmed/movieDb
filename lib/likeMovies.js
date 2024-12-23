export const getRelatedMovies = async (id) => {
  try {
    const response = await fetch(
      `${process.env.LOCAL_BASE_URL}/api/movie/${id}`
    );

    const data = await response.json();
    return data;
  } catch (e) {
    console.error("Error fetching Simillar movies:", e.message);
    return [];
  }
};
