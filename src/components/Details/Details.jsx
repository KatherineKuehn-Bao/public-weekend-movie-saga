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

    useEffect(() => {
        getGenre();
    }, []);

    const getGenre = () => {
        axios.get(`/api/genre/details?id=${selectedMovie.id}`)
            .then(response => {
                console.log(`response`, response)
                setGenres(response.data);  
            })
            .catch(err => console.log(`error in get`, err));
        console.log(`GET GENRE`, selectedMovie.id);
    }

    // console.log(genres);
    console.log('movies', movies);
    console.log('selected movies', selectedMovie);
    console.log('genres', genres);


    return (
        <section>
            <h1> Selected Movie </h1>
            {
                selectedMovie.title ? (
                    <>
                        <h2> {selectedMovie.title} </h2>

                        <h3> {genres.map(genre => genre.name).join(', ')} </h3>

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