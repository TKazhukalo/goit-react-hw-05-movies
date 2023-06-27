import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCredits } from "../../api/apiMovies";
import Loader from "../Loader/Loader";
import { CastImg, CastItem, CastList } from "./Cast.styled";
import { Container } from "../App/App.styled";

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true);
                const cast = await getCredits(movieId);
                setCast(cast);
            } catch (error) {
                console.log(error);
            } finally {
                 setLoading(false);
            }
        };
        fetchMovies();
    }, [movieId]);
    return (
        <Container>
      {loading && <Loader />}
        <CastList>
        {cast.map(({ id, original_name,name, character, profile_path }) =>(
                    <CastItem key={id}>
                        <h3>{name}</h3>
                        <CastImg src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : `https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg`
              } alt={original_name} width='180' />
                        <p>Character: </p>
                        <p>{character}</p>
                    </CastItem>
                )
            )
        }
            </CastList>
            </Container>
    )
}
export default Cast;