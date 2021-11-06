import { HashRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieItem from '../MovieList/MovieItem';
import Details from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie';
//add dispatch and use effect
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function App() {
  //intialize dispatch 
  const dispatch = useDispatch();

  //moved use effect to APP file
  //get data from server 
  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);


  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>
        <nav>
          <Link to="/addMovie"> Add Movie </Link>
        </nav>

        <Route path="/" exact>
          <MovieList />
        </Route>

        {/* add details page & router */}
        <Route path="/details">
          <Details />
        </Route>

        {/* //add movie item page and route */}
        <Route path="/movieItem">
          <MovieItem />
        </Route>

        <Route path="/addMovie">
          <AddMovie />
        </Route>

      </Router>
    </div>
  );
}


export default App;
