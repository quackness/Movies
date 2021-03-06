import axios from "axios";
import EditMovies from "./EditMovies";


export default function MoviesList (props) {
  console.log("props", props)
 const { 
   movies, setMovies, genres
  } = props;

  function deleteMovie(id) {
    return axios.delete(`http://localhost:8001/delete/${id}`)
      .then(res => {
        setMovies(movies.filter(movie => movie.movie_id !== id))
        console.log("Movie delete id:", id)
      })
  }

  return (
    <>
      <div className="tabletitle">
        List of movies
      </div>
        <table className="movielist_table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Genre</th>
              <th>imdb</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {movies.map(movie =>
              <tr key={movie.movie_id}>
                <td>{movie.movie_title}</td>
                <td>{movie.movie_year}</td>
                <td>{movie.genre_title}</td>
                <td>{movie.movie_imdb}</td>
                <td>< EditMovies movie={movie} genres={genres} setMovies={setMovies} movies={movies}/></td>
                <td>
                  <button 
                  className="button_delete"
                  onClick={() => deleteMovie(movie.movie_id)} >
                  Delete</button></td>
            </tr>)}
          </tbody>
        </table>
    </>
  )
}