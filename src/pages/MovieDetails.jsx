import { getDetails } from "components/apiMovies";
import { Suspense, useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { ContainerDetails } from "./MovieDetails.styled";
import Loader from "components/Loader";

export const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const {movieId} = useParams();
    const location = useLocation();
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const movie = await getDetails(movieId);
                setMovie(movie);
                setLoading(true);
            } catch (error) {
                console.log(error);
            } finally {
         
                setLoading(false);
            }
        }
 
    fetchMovies();
  }, [movieId]);
    if (!movie) {
        return;
    }
   const { 
        genres,
        title, 
        release_date,
        poster_path, 
        overview, 
        vote_average, 
        } = movie;

const genresList = genres?.map(genre => genre.name).join(', ');
    return (
          <main>
            <div>
                  <Link to={location.state?.from ??'/'}>
                <button type="button">
          &larr;Go back 
                    </button>
                </Link> 
                 {loading && <Loader />}
                  <div>
        <img width="250" src={poster_path?`https://image.tmdb.org/t/p/w500${poster_path}`
                : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`} alt={title} />
        <ContainerDetails>
          <h2>{title} ({release_date.slice(0, 4)})</h2>
          <p>User Score: {(vote_average * 10).toFixed()} %</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{genresList}</p>
        </ContainerDetails>
      </div>
      <h3>Additional information</h3>
                <ul>
                    <li>
                        <Link to='cast'>Cast</Link>
                    </li>
                    <li>
                        <Link to='reviews'>Reviews</Link>
                    </li>
                </ul>
                 </div>
                    <Suspense fallback={<div>...Loading</div>}>
                    <Outlet />
                    </Suspense>
     
    </main>
    )
}