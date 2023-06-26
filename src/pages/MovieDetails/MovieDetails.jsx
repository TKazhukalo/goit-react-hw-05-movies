import { getDetails } from "api/apiMovies";
import { Suspense, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import {  Button, ContainerDetails } from "./MovieDetails.styled";
import Loader from "components/Loader/Loader";

    const MovieDetails = () => {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const {movieId} = useParams();
        const location = useLocation(); 
    const BackLink=useRef(location.state?.from ?? '/');    
    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            try {
                const movie = await getDetails(movieId);
                setMovie(movie); 
            } catch (error) {
                console.log(error);
                setMovie([]);
                const errorMessage = "Фільм не знайдено";
                return <p>{errorMessage }</p>
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
                <Link to={BackLink.current}>
                    <Button type="button">
                &larr; Go back 
                    </Button>
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
          <p>
            <span>{genresList}</span>
          </p>
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
export default MovieDetails;