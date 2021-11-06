import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Form to add new movie
function AddMovie() {

    const dispatch = useDispatch();

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

    return (
        <div>
            <h1> Add Movie </h1>
            <form onSubmit={handleClick}>
                <input
                    type="text"
                    value={title}
                    onChange={(evt) => setTitle(evt.target.value)} />

                <input
                    type="text"
                    placeholder="image"
                    value={poster}
                    onChange={(evt) => setPoster(evt.target.value)} />

                <input
                    type="text"
                    placeholder="description"
                    value={description}
                    onChange={(evt) => setDescription(evt.target.value)} />


                <button type="submit"> Add Movie! </button>
            </form >

        </div>
    );

}
export default AddMovie;