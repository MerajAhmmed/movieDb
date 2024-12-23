import { getPlaiceholder } from "plaiceholder";
const BASE_URL = "https://image.tmdb.org/t/p/";
export async function getBlurData(src) {
  const fullUrl = `${BASE_URL}${src}`;
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );

  const data = await getPlaiceholder(buffer);
  return data;
}
