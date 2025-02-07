export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  try {
    const response = await fetch(
      `${process.env.TMDB_API_BASE_URL}/search/movie?query=${encodeURIComponent(
        query
      )}&api_key=${
        process.env.TMDB_API_KEY
      }&include_adult=false&language=en-US&page=1`
    );

    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (e) {
    console.error("Error fetching search movies:", e.message);
  }
}
