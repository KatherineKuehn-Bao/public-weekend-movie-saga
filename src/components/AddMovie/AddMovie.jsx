import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

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
        genre_id: ''
    });
    useEffect(() => {
        dispatch({type: 'FETCH_GENRES' });
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
    };
    //cancel and send to home screen 
    const cancelClick = (event) => {
        alert('You are leaving the page and will be brought back to the home screen')
        history.push('/');
    }

    return (
        <div>
            <h1> Add Movie </h1>
            <form onSubmit={addNewMovie}>
                <input
                    placeholder="movie title"
                    type="text"
                    value={newMovie.title}
                    onChange={(event) => handleNameChange(event, 'title')} />
                <input
                    placeholder="image url"
                    type="text"
                    value={newMovie.poster}
                    onChange={(event) => handleNameChange(event, 'poster')} />
                <input
                    placeholder="description"
                    type="text"
                    value={newMovie.description}
                    onChange={(event) => handleNameChange(event, 'description')} />
                {/* Add Genre DropDown */}
                <select value={genre_id}
                    onChange={(evt) => setOwner_id(evt.target.value)}>

                    <option disabled value='0'>
                        Pick One!
                    </option>
                    {genres.map((genre) => {
                        return (
                            <option key={genre.id} value={genre.id}>
                                {genre.name}
                            </option>
                        );
                    })}
                </select>
                {/* <label for="genre"> Choose a genre: </label>
                <select name="genre">
                    ADD VALUE OF ID
                    <option value={genre_id}>Adventure</option>
                    <option value="2">Animated</option>
                    <option value="3">Biographical</option>
                    <option value="4">Comedy</option>
                    <option value="5">Disaster</option>
                    <option value="6">Drama</option>
                    <option value="7">Epic</option>
                    <option value="8">Fantasy</option>
                    <option value="9">Musical</option>
                    <option value="10">Romantic</option>
                    <option value="11">Science Fiction</option>
                    <option value="12">Space-Opera</option>
                    <option value="13">Superhero</option>
                </select> */}

                <button type="submit"> Save </button>
            </form >

            <button onClick={cancelClick}> Cancel </button>

        </div>
    );
}
export default AddMovie;