import Loader from "components/Loader/Loader";
import { MoviesList } from "components/MoviesList/MoviesList";
import { searchMovie } from "api/apiMovies";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ButtonSearch, SearchQuery } from "./Movies.styled";


    const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);  
    const query = searchParams.get('query');

    useEffect(() => {
        if (!query) {
            setMovies([])
            return;
        }
        const fetchMovies = async () => {
            try {
                setLoading(true);
            const movies = await searchMovie(query);
            if (movies.length === 0) {
                return `Введіть назву фільма`;
            }
        setMovies(movies);
        } catch (error) {
        console.log(error);
        } finally {
             setLoading(false);
      }
    };
    fetchMovies();
    }, [query]);
        
    const handleSubmit = e => {
        e.preventDefault();
        if (e.target.elements.query === '') {
            setSearchParams({});
            setMovies([]);
            return;
        }
        const { value } = e.target.elements.query;
        setSearchParams({ query: value.trim() });
        e.target.reset();
    }
  return (
  
      <div>
     <h2>Find movie by name</h2>
          <form onSubmit={handleSubmit}>
              <SearchQuery type="text"
                  name='query' />
              <ButtonSearch>Search</ButtonSearch>
          </form>
          {loading && <Loader />}
         { movies.length > 0 && <MoviesList movies={movies} />}
        </div>

  );
};
export default Movies;