import './App.css';
import GenresList from './components/GenresList';
import NewGenre from './components/NewGenre';
import NewMovie from './components/NewMovie';
import MoviesList from './components/MoviesList';

function App() {
  return (
    <div className="App">
      <div className = "add_movie_and_genre">
      <NewMovie movies={movies} genres={genres} setMovies={setMovies}/>
      <NewGenre genres={genres} setGenres={setGenres}/>
      </div>
      <MoviesList movies={movies} setMovies={setMovies}/>
      <GenresList genres={genres} setGenres={setGenres}/>
    </div>
  );
}

export default App;
