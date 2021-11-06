import { useEffect } from "react";
import { useSelector } from "react-redux";
//NEED MORE INFORMATION FROM THE DATABASE..... 
// import { useEffect } from "react";

//Show the selected movie data from Redux
function Details() {
    //data from redux
    // const genres = useSelector(store => store.genres);
    const movies = useSelector((store) => store.movies);
    const selectedMovie = useSelector(store => store.selectedId)

    // let selectedMovie = movies.filter(movie => movie.id === selectedId)
    // selectedMovie = selectedMovie[0]; NOT WORKING 

    // useEffect(() => {
    // })

    // console.log('selectedID', selectedId);
    // console.log(genres);
    console.log('movies', movies);
    console.log('selected movies', selectedMovie);


    return (
        <section>
            <h1> Selected Movie </h1>
            {
                selectedMovie.title ? (
                    <>
                        <h2> {selectedMovie.title} </h2>
                     {/* {genres.map(genre => genre.name).join(', ')} */}

                        <img src={selectedMovie.poster} alt={selectedMovie.title} />
                        <p> {selectedMovie.description} </p>
                    </>
                ) : (
                    <p> No Movie Selected </p>
                )
            }
        </section>
    );
}

export default Details;