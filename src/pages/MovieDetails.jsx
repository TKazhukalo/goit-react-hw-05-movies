//import { useParams } from "react-router-dom"

import { Link, Outlet, useParams } from "react-router-dom";

export const MovieDetails = () => {
    const {movieId} = useParams();
    console.log(movieId);
   // const movie = getMovieById(id);
    return (
          <main>
      <div>
        <h2>
          Movie 
        </h2>
                <ul>
                    <li>
                        <Link to='cast'>Cast</Link>
                    </li>
                    <li>
                        <Link to='reviews'>Reviews</Link>
                    </li>
                </ul>
                <Outlet />
      </div>
    </main>
    )
}