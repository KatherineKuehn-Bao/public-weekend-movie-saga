import { useSelector } from "react-redux";
//NEED MORE INFORMATION FROM THE DATABASE..... 
// import { useEffect } from "react";

//Show the selected movie data from Redux
function Details() {
    //data from redux
    const selectedMovie = useSelector((store) => store.selectedMovie);
    const movie = useSelector((store) => store.movie);

    return (
        <section>
            <h1> Selected Movie </h1>
            {
                selectedMovie.title ? (
                    <>
                    <h2> {selectedMovie.title} </h2>
                    <img src={movie.poster} alt={movie.title} />
                    </>
                ) : (
                    <p> No Movie Selected </p>
                )
            }
        </section>
    );
}

export default Details;