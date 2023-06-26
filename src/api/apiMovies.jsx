import axios from "axios";
const baseURL  = 'https://api.themoviedb.org/3/';
const api_key = '2161664d4314fc48afed48c009adafff';
const linkLib = axios.create({
  baseURL ,
  params: { api_key },
});

export const getTrending = async () => {
  const { data } = await linkLib.get('trending/movie/day');
  return data.results;
};
export const getDetails = async (id) => {
  const { data } = await linkLib.get(`movie/${id}`);
  return data;
};

export const getCredits = async id => {
  const { data } = await linkLib.get(`movie/${id}/credits`);
  return data.cast;
}
export const getReviews = async (id) => {
  const { data } = await linkLib.get(`movie/${id}/reviews`);
  return data.results;
}
export const searchMovie = async (query) => {
  const { data } = await linkLib.get(`search/movie`, {
    params: {
      query,
    }
  });
  return data.results;
}