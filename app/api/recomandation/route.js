// export async function GET(request) {
//   const TMDB_API_URL = process.env.TMDB_API_BASE_URL;
//   const TMDB_API_KEY = process.env.TMDB_API_KEY;

//   try {
//     const response = await fetch(
//       `${TMDB_API_URL}/movie/movie_id/recommendations?api_key=${TMDB_API_KEY}&language=en-US&page=1`
//     );

//     if (!response.ok) {
//       return new Response(
//         JSON.stringify({
//           error: "Invalid id: The pre-requisite id is invalid or not found.",
//         }),
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
