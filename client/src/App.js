import './App.css';
import GenresList from './components/GenresList';
import NewGenre from './components/NewGenre';
import NewMovie from './components/NewMovie';
import MoviesList from './components/MoviesList';

function App() {
  return (
    <div className="App">
      <div className = "add_movie_and_genre">
      <NewMovie />
      <NewGenre />
      </div>
      <MoviesList />
      <GenresList />
    </div>
  );
}

export default App;
