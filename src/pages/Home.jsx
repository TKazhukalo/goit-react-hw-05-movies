import { getTrending } from "components/apiMovies";
import {MoviesList}  from "../components/MoviesList";
//import { listMoviesTrending } from "components/apiMovies";
import { useState } from "react";
import { useEffect } from "react";


export const Home=()=> {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getTrending();
        setMovies(movies);
      } catch (error) {
        console.log(error);
      } finally {
       //console.log('finally');
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      {movies.length !== 0 && <MoviesList movies={movies} />}
    </div>
  );
}
