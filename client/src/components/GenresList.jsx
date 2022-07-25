import axios from "axios";
import EditGenres from "./EditGenres";

export default function GenresList (props) {
  const { genres, setGenres } = props;

  function deleteGenre(id) {
    return axios.delete(`http://localhost:8001/genres/delete/${id}`)
    .then(res => {
      setGenres(genres.filter(genre => genre.genre_id !== id))
      console.log("Genre deleted id:", id)
    })
  }

  return (
    <>
      <div className="tabletitle">
        Genres List
      </div>

      <table classname="genrelist_table">
        <thead>
          <tr>
            <th>Title</th> 
            <th>Edit</th> 
            <th>Delete</th> 
          </tr>
          </thead>
          <tbody>
            {genres.map(genre => 
              <tr key = {genre.genre_id}>
              <td> {genre.genre_title} | {genre.genre_id}</td>
              <td> <EditGenres genres={genres} genre={genre} setGenres={setGenres}/> </td>
              <td><button 
              className="button_delete"
              onClick={() => deleteGenre(genre.genre_id)}
              >Delete
              </button> 
              </td>
              </tr>
            )}
          </tbody>
         </table>
    </>
  )
}