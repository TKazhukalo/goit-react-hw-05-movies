import {  useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { LinkItem, MoviesItem } from "./MoviesList.styled";
export const  MoviesList=({ movies })=> {
    const location = useLocation();
    return (
        <ul>
            {movies.map(({ id, title }) => {
                return (
                    <MoviesItem key={id}>
                        <LinkItem state={{from:location}} to={`/movies/${id}`}>{title}</LinkItem>
                    </MoviesItem>
                )
            })}
        </ul>
    )
}
MoviesList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
};