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
  const [genres, setGenres] = useState([]);
 

  useEffect(() => {
    axios.get('http://localhost:8001/movies')
      .then(function(res) {
        setMovies([...res.data])
      })
  }, [genres])

  useEffect(() => {
    axios.get('http://localhost:8001/genres')
    .then(function(res) {
      setGenres([...res.data])
    })
  }, [])


  return (
    <div className="App">
      <div className = "add_movie_and_genre">
      <NewMovie movies = {movies} genres = {genres} setMovies={setMovies}/>
      <NewGenre genres = {genres} setGenres={setGenres}/>
      </div>
      <MoviesList movies = {movies} setMovies={setMovies}/>
      <GenresList genres = {genres} setGenres={setGenres}/>
    </div>
  );
}

export default App;
