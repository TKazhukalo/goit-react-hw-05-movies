import { getTrending } from "components/api/apiMovies";
import {MoviesList}  from "../../components/MoviesList/MoviesList";
//import { listMoviesTrending } from "components/apiMovies";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "components/Loader/Loader";


export const Home=()=> {
  const [movies, setMovies] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getTrending();
        setMovies(movies);
        setloading(true);
      } catch (error) {
        console.log(error);
      } finally {
 setloading(false);
       //console.log('finally');
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      {movies.length !== 0 && <MoviesList movies={movies} />}
   {loading &&<Loader />}
    </div>
  );
}
