export const getSearch = async (query) => {
  try {
    const response = await fetch(
      `${process.env.LOCAL_BASE_URL}/api/search?query=${encodeURIComponent(
        query
      )}`
    );

    const data = await response.json();

    return data?.results;
  } catch (e) {
    console.error("Error fetching search movies:", e.message);
    return [];
  }
};
