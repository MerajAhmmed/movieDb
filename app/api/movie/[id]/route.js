export async function GET(request, { params }) {
  const { id } = params;

  try {
    const response = await fetch(
      `${process.env.TMDB_API_BASE_URL}/movie/${id}/similar?api_key=${process.env.TMDB_API_KEY}&language=en-US`
    );

    const data = await response.json();

    return new Response(JSON.stringify(data.results), { status: 200 });
  } catch (e) {
    console.error("Error fetching similar movies:", e.message);
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
}
