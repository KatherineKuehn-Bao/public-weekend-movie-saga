import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

//Form to add new movie
function AddMovie() {

    const dispatch = useDispatch();
    const history = useHistory();

    //data from redux
    // const movies = useSelector(store => store.movies);

    //local state for form inputs
    let [title, setTitle] = useState('');
    let [poster, setPoster] = useState('');
    let [description, setDescription] = useState('');

    //handle submit
    const handleClick = (event) => {
        event.preventDefault();
        console.log('new movie', title, poster, description, genre_id);
        dispatch({ type: 'ADD_MOVIE', payload: { title, poster, description } });
    };

    //cancel and send to home screen 
    const cancelClick = (event) => {
        alert('You are leaving the page and will be brought back to the home screen')
        history.push('/');
    }

    return (
        <div>
            <h1> Add Movie </h1>
            <form onSubmit={handleClick}>
                <input
                    type="text"
                    placeholder="movie title"
                    value={title}
                    onChange={(evt) => setTitle(evt.target.value)} />

                <input
                    type="text"
                    placeholder="image url"
                    value={poster}
                    onChange={(evt) => setPoster(evt.target.value)} />

                <input
                    type="text"
                    placeholder="description"
                    value={description}
                    onChange={(evt) => setDescription(evt.target.value)} />

            //Add Genre DropDown
                <label for="genre"> Choose a genre: </label>
                <select name="genre">
                    <option value="Adventure">Adventure</option>
                    <option value="Animated">Animated</option>
                    <option value="Biographical">Biographical</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Disaster">Disaster</option>
                    <option value="Drama">Drama</option>
                    <option value="Epic">Epic</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Musical">Musical</option>
                    <option value="Romantic">Romantic</option>
                    <option value="Science Fiction">Science Fiction</option>
                    <option value="Space-Opera">Space-Opera</option>
                    <option value="Superhero">Superhero</option>

                </select>

                <button type="submit"> Save </button>
            </form >

            <button onClick={cancelClick}> Cancel </button>

        </div>
    );

}
export default AddMovie;