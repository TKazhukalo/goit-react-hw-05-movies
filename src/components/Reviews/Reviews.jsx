import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getReviews } from "../api/apiMovies";
import Loader from "../Loader/Loader";
import { ReviewsList } from "./Reviews.styled";

    const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {

        const fetchMovies = async () => {
            setLoading(true);
            try {
                const fetchedReviews = await getReviews(movieId);
                setReviews(fetchedReviews);
            } catch (error) {
                console.log(error);
            } finally {
                  setLoading(false);
            }
        }
        fetchMovies();
    }, [movieId]);
 
    return (

        <ReviewsList>
          {loading && <Loader />}
            {reviews.length === 0 ? (
                <p>We don't have any reviews for this movie</p>               
            ) : (
                    reviews.map(({ id, author, content }) => {
                        return (
                            <li key={id}>
                                <h3>Author : {author}</h3>
                                <p>{content}</p>
                         </li>
                     )
                 })   
)}
            </ReviewsList>
           
    )
}
export default Reviews;