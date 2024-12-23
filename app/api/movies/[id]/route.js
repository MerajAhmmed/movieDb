export async function GET(request, { params }) {
  const { id } = params;

  const TMDB_API_URL = process.env.TMDB_API_BASE_URL;
  const TMDB_API_KEY = process.env.TMDB_API_KEY;

  try {
    const response = await fetch(
      `${TMDB_API_URL}/movie/${id}?api_key=${TMDB_API_KEY}&language=en-US`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const data = await response.json();

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (e) {
    console.error("Error fetching Single movie:", e.message);

    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
}
