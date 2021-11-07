import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';



//Form to add new movie
function AddMovie() {

    const dispatch = useDispatch();
    const history = useHistory();

    //data from redux
    const genres = useSelector(store => store.genres);

    //Create State for newMovie Object
    const [newMovie, setNewMovie] = useState({
        title: '',
        poster: '',
        description: '',
        genre_id: 0
    });
    // let[genre_id, setGenre_id] = useState ('');

    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES' });
    }, []);

    //handle name Change 
    const handleNameChange = (event, property) => {
        console.log(`event happened`);
        setNewMovie({ ...newMovie, [property]: event.target.value })
    }
    //add newMovie - DISPATCH  ADD_MOVIE payload: newMovie
    const addNewMovie = (event) => {
        event.preventDefault();
        dispatch({ type: 'ADD_MOVIE', payload: newMovie });
        console.log(`clicked. added new movie`);
        // dispatch({ type: 'ADD_GENRE', payload: genre_id});
    };
    //cancel and send to home screen 
    const cancelClick = (event) => {
        alert('You are leaving the page and will be brought back to the home screen')
        history.push('/');
    }

    console.log(`genres`, genres);
    return (
        <div>
            <h1> Add Movie </h1>
            <form onSubmit={addNewMovie}>
                <Stack spacing={2}>

                    <TextField
                        variant="filled"
                        placeholder="Movie Title"
                        type="text"
                        value={newMovie.title}
                        onChange={(event) => handleNameChange(event, 'title')} />
                    <TextField
                        variant="filled"
                        placeholder="Poster (Image url)"
                        type="text"
                        value={newMovie.poster}
                        onChange={(event) => handleNameChange(event, 'poster')} />
                    <TextField
                        variant="filled"
                        placeholder="description"
                        type="text"
                        value={newMovie.description}
                        onChange={(event) => handleNameChange(event, 'description')} />

                    {/* Add Genre DropDown */}
                    <Select value={newMovie.genre_id}
                        onChange={(event) => handleNameChange(event, 'genre_id')}>
                        <MenuItem 
                        disabled value='0'>
                            Genres
                        </MenuItem>
                        {genres.map((genre) => {
                            return (
                                <MenuItem key={genre.id} value={genre.id}>
                                    {genre.name}
                                </MenuItem>
                            );
                        })}
                    </Select>

                    <Button
                        variant="contained"
                        type="submit"> Add New Movie </Button>
                </Stack>
            </form >
            <Stack spacing={5}>
                <Button
                    variant="contained"
                    color="error"
                    onClick={cancelClick}
                > Cancel </Button>
            </Stack>

        </div>
    );
}
export default AddMovie;