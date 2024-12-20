// export async function GET(request) {
//   const TMDB_API_URL = process.env.TMDB_API_BASE_URL;
//   const TMDB_API_KEY = process.env.TMDB_API_KEY;

//   try {
//     const response = await fetch(
//       `${TMDB_API_URL}/movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=1`
//     );

//     if (!response.ok) {
//       return new Response(
//         JSON.stringify({ error: "Failed to fetch popular movies" }),
//         {
//           status: 500,
//         }
//       );
//     }

//     const data = await response.json();
//     return new Response(JSON.stringify(data), { status: 200 });
//   } catch (error) {
//     return new Response(JSON.stringify({ error: error.message }), {
//       status: 500,
//     });
//   }
// }
