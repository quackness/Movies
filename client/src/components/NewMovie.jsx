import { useState, useEffect } from "react";
import axios from "axios";


export default function NewMovie (props) {

  const { movies, genres, setMovies } = props; 

  const[title, setTitle] = useState("")
  const[year, setYear] = useState(19)
  const[genreId, setGenreId] = useState("")
  const[imbd, setImbd] = useState("")

 
  useEffect (() => {
    const foundGenre = genres.find((genre) => {
      return genre.genre_id === genreId
      // return genre.level_id === movie_genre
    })
    if (!foundGenre && genres.length) {
      setGenreId(genres[0].genre_id)
    }
  }, [genres, genreId])



    function onSubmitForm(e) {
      e.preventDefault();
      const movie = {
        title,
        year,
        genreId,
        imbd
      }
      addMovie(movie);
      resetForm()
    }

    function addMovie(movie) {
      console.log("movie added", movie)

      return axios.post(`http://localhost:8001/movie`, movie)
       .then((response) => {
         const newMovie = response.data;
         const movieGenre = genres.find((genre) => {
           return genre.genre_id === newMovie.movie_genre_id
         })
         console.log("movie", newMovie)
         console.log("movieGenre", movieGenre)
         newMovie.genre_title = movieGenre.genre_title;
         setMovies([newMovie, ...movies]) 
    })
  }

  function resetForm() {
    setTitle("");
    // setYear("");
    setImbd("");
  }


  return (
    <div>
      <button type="button"
       className="button_add" data-toggle="modal" data-target={`#newmoviemodal${movies.movie_id}`}>Add movie
     </button>
 
     {/* <!-- Modal --> */}
     <div className="modal fade" id={`newmoviemodal${movies.movie_id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div className="modal-dialog" role="document">
         <div className="modal-content">
           <div className="modal-header">
             <h5 className="modal-title" id="exampleModalLabel">Add new movie</h5>
             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true">&times;</span>
             </button>
           </div>
          
           <div className="modal-body">
 
             <label className="add_movie_title" htmlFor="title">Title</label>
             <input 
             className="form-control" 
             type="text" 
             name="title" 
             value={title}
             onChange={ e => setTitle(e.target.value)}
             />
             <p></p>
 
             <label className="add_movie_title" htmlFor="title">Year</label>
             <input 
             className="form-control" 
             type="text" 
             name="title" 
             value={year}
             onChange={ e => setYear(e.target.value)}
             />
             <p></p>
 
             <div className="level_input">
               <label className="add_movie_title" htmlFor="title">Genre</label>
               <select className="form-control"
               value={genreId}
               onChange={e => setGenreId(e.target.value)}
               >
                {genres.map(genre =>
                  <option
                  key={genre.genre_id}
                  value={genre.genre_id}>
                    {genre.genre_title}
                  </option>
                )}
              
               </select>
             </div>
 
             <label className="add_movie_title" htmlFor="title">Imdb</label>
             <input 
             className="form-control" 
             type="text" 
             name="title"
             value={imbd}
             onChange={e => setImbd(e.target.value)}
             />
             <p></p>
 
           </div>
 
           <div className="modal-footer">
             <button type="button" className="button_close" data-dismiss="modal">Close</button>
             <button
               className="button_submit"
               type="Submit"
               onClick={onSubmitForm}
               data-dismiss="modal"
             >Add movie</button>
           </div>
         </div>
       </div>
     </div>
 
    </div>
  )
}