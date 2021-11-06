import { useEffect } from "react";
import { useSelector } from "react-redux";
//NEED MORE INFORMATION FROM THE DATABASE..... 
// import { useEffect } from "react";

//Show the selected movie data from Redux
function Details() {
    //data from redux
    const genres = useSelector(store => store.genres);
    const movies = useSelector((store) => store.movie);
    const selectedId = useSelector(store => store.selectedId)
    // const selectedMovie = useSelector((store) => store.)

    // let selectedMovie = movies.filter(movie => movie.id === selectedId)

    // useEffect(() => {
    // })

    // console.log(selectedMovie);
    // console.log(genres);
    // console.log(movies);

    // return (
    //     <div>
    //         {genres.map(genre => genre.name).join(', ')}
    //     </div>
    // );



    return (
        <section>
            <h1> Selected Movie </h1>
            {
                selectedMovie.title ? (
                    <>
                        <h2> {selectedMovie.title} </h2>
                        <img src={movies.poster} alt={movies.title} />
                    </>
                ) : (
                    <p> No Movie Selected </p>
                )
            }
        </section>
    );
}

export default Details;