import './App.css';
import GenresList from './components/GenresList';
import NewGenre from './components/NewGenre';
import NewMovie from './components/NewMovie';
import MoviesList from './components/MoviesList';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [movies, setMovies] = useState([]);
  console.log(movies)
 

  useEffect(() => {
    axios.get('http://localhost:8001/movies')
      .then(function(res) {
        setMovies([...res.data])
      })
  }, [])


  return (
    <div className="App">
      <div className = "add_movie_and_genre">
      <NewMovie />
      <NewGenre />
      </div>
      <MoviesList movies = {movies} />
      <GenresList />
    </div>
  );
}

export default App;
