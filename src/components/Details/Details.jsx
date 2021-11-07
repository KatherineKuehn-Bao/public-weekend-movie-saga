import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from 'react';
//NEED MORE INFORMATION FROM THE DATABASE..... 
// import { useEffect } from "react";

//Show the selected movie data from Redux
function Details() {
    //data from redux
    const movies = useSelector((store) => store.movies);
    const selectedMovie = useSelector(store => store.selectedMovie);
    const [genres, setGenres] = useState([]);

    //on page load run getGenre function
    useEffect(() => {
        getGenre();
    }, []);

    // axios GET for details id of selectedMovie 
    const getGenre = () => {
        axios.get(`/api/genre/details?id=${selectedMovie.id}`)
            .then(response => {
                console.log(`response`, response)
                //update Genres 
                setGenres(response.data);
            })
            .catch(err => console.log(`error in get`, err));
        //Log selectedMovie.id
        console.log(`GET GENRE`, selectedMovie.id);
    }

    // console.log(genres);
    console.log('movies', movies);
    console.log('selected movies', selectedMovie);
    console.log('genres', genres);

    return (<>
        <section>
            {
                // if there is a selected movie, display HTML
                selectedMovie.title ? (
                    <>
                        <h1> {selectedMovie.title} </h1>
                        <img src={selectedMovie.poster} alt={selectedMovie.title} />
                        <p> {selectedMovie.description} </p>
                        {/* list each genre for selectedMovie */}
                        <h3> Genres: {genres.map(genre => genre.name).join(', ')} </h3>

                    </>
                ) : (
                    <p> No Movie Selected </p>
                )
            }
        </section>
        //Add button to return to list page? 
    </>
    );
}

export default Details;