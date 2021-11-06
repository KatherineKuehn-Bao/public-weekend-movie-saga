import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

//display a single movie 
function MovieItem({ movie }) {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSelectMovie = (movie) => {
        //store selected movie object in redux 
        dispatch({ type: "SET_SELECTED_MOVIE", payload: movie });
        // history.push('/details');
    };


    return (
        <div>
            <div key={movie.id} onClick={() => handleSelectMovie(movie)} >
                <h3>{movie.title}</h3>
                <img src={movie.poster} alt={movie.title} />
            </div>
        </div>
    );
}

export default MovieItem;