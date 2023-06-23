import axios from "axios";
const baseURL  = 'https://api.themoviedb.org/3/';
const api_key = '2161664d4314fc48afed48c009adafff';
const linkLib = axios.create({
  baseURL ,
  params: { api_key },
});

export const listMoviesTrending = async () => {
  const { data } = await linkLib.get('trending/movie/day');
  return data.results;
};