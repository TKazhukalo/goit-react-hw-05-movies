import { MoviesList } from "components/MoviesList";
import { searchMovie } from "components/apiMovies";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";


export const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const query = searchParams.get('query');

    useEffect(() => {
    if (!query) return;
    const fetchMovies = async () => {
      try {
        const movies = await searchMovie(query);
        setMovies(movies);
        } catch (error) {
        console.log(error);
      } finally {
      }
    };
    fetchMovies();
    }, [query]);
    const handleSubmit = e => {
        e.preventDefault();
        setSearchParams({ query: e.target.elements.query.value });
        e.target.reset();
    }
  return (
  
      <div>
     <h2>Find movie by name</h2>
          <form onSubmit={handleSubmit}>
              <input type="text"
                  name='query' />
              <button>Search</button>
          </form>
         { movies.length>0 &&<MoviesList movies={movies} />}
        </div>

  );
};
