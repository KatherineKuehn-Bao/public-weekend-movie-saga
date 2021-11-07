import { HashRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import MovieItem from '../MovieList/MovieItem';
import Details from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie';
//add dispatch and use effect
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

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
        <nav className="nav">
          <Link to="/"> Home Page </Link>
          <br/ >
          <Link to="/addMovie"> Add a New Movie </Link>

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
