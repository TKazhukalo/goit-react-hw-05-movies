import { getTrending } from "components/api/apiMovies";
import {MoviesList}  from "../../components/MoviesList/MoviesList";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "components/Loader/Loader";

 const Home=()=> {
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
      }
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      {movies.length !== 0 && <MoviesList movies={movies} />}
   {loading && <Loader />}
    </div>
  );
}
export default Home;