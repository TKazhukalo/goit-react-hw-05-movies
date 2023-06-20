import { Link } from "react-router-dom";

export const Movies = () => {
 // const movies = getMovies();
  return (
  
          <div>Колекція фільмів
              {['movie-1', 'movie-2', 'movie-3', 'movie-4', 'movie-5'].map(movie => {
              return (
          <Link key={movie} to={`${movie}`}>{movie} </Link>
              )
              })}
              </div>

  );
};
