import { Link, useLocation } from "react-router-dom";

export default function MoviesList({ movies }) {
    const location = useLocation();
    return (
        <ul>
            {movies.map(({ id, title }) => {
                return (
                    <li key={id}>
                        <Link state={{from:location}} to={`/movies/${id}`}>{title}</Link>
                    </li>
                )
            })}
        </ul>
    )
}