import { useSelector } from 'react-redux';
import './MovieList.css';
import MovieItem from './MovieItem';

//display list of all the movies
function MovieList() {

    //use data from redux 
    const movies = useSelector(store => store.movies);

    // useEffect(() => {
    //     dispatch({ type: 'FETCH_MOVIES' });
    // }, []);

    return (
        <main>
            <div className="cards">
                <h1>MovieList</h1>
                <section className="movies">
                    {movies.map(movie => (
                        <MovieItem 
                        className="item"
                        key={movie.id}
                        movie={movie} />
                    ))}
                </section>
            </div>
        </main>

    );
}

export default MovieList;