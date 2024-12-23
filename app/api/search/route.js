export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  const TMDB_API_URL = process.env.TMDB_API_BASE_URL;
  const TMDB_API_KEY = process.env.TMDB_API_KEY;

  try {
    const response = await fetch(
      `${TMDB_API_URL}/search/movie?query=${encodeURIComponent(
        query
      )}&api_key=${TMDB_API_KEY}&include_adult=false&language=en-US&page=1`
    );

    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (e) {
    console.error("Error fetching search movies:", e.message);
  }
}
