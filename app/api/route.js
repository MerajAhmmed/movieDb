import axios from "axios";

export default async function handler(req, res) {
  const { endpoint } = req.query;

  if (!endpoint) {
    return res.status(400).json({ error: "Endpoint is required" });
  }

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/${endpoint}`,
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
          ...req.query,
        },
      }
    );
    console.log(response);
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to fetch data from TMDB" });
  }
}
