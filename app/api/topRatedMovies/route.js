export async function GET(request) {
  try {
    const response = await fetch(
      `${process.env.TMDB_API_BASE_URL}/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
    );
    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
