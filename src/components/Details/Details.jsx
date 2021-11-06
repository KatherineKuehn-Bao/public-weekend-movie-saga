import { useSelector } from "react-redux";
import { useEffect } from "react";

//Show the selected movie data from Redux
function MovieDetail() {
    //data from redux
    const selectedMovie = useSelector((store) => store.selectedMovie);

    
}