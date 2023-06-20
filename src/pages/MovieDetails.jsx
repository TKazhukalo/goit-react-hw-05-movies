//import { useParams } from "react-router-dom"

import { useParams } from "react-router-dom";

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
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
          sunt excepturi nesciunt iusto dignissimos assumenda ab quae cupiditate
          a, sed reprehenderit? Deleniti optio quasi, amet natus reiciendis
          atque fuga dolore? Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Impedit suscipit quisquam incidunt commodi fugiat aliquam
          praesentium ipsum quos unde voluptatum?
        </p>
      </div>
    </main>
    )
}