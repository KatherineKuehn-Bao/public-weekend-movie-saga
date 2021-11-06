import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

//display a single movie 
function MovieItem ({ movie }){
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSelectMovie = (movie) => {
        //store selected movie object in redux 
        dispatch ({ type: "SET_SELECTED_MOVIE", payload: movie });
        // history.push('/details');
    };


    return (
        <li> movies go here </li>
    );
}

export default MovieItem;