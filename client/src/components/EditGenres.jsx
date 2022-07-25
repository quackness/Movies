import axios from 'axios';
import { useState } from 'react';
import MoviesList from './MoviesList';

export default function EditGenres (props) {
  const { genres, genre, setGenres } = props;

  const [genre_title, setGenreTitle] = useState(genre.genre_title)

 

  const editGenre = async (e) => {
    e.preventDefault()
    try {
      const body = {genre_title}
      const response = await fetch(`http://localhost:8001/genres/${genre.genre_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      })
        //   axios.get(`http://localhost:8001/genres`)
        // .then( function (res) {
        //   console.log("res.data", res.data)
        //   setGenres([...res.data])
        // })
        const editedGenre = {...body, genre_id: genre.genre_id}
        const updatedGenres = genres.map((genre) => {
          if (genre.genre_id !== editedGenre.genre_id) {
            return genre
          } else {
            return {...genre, ...editedGenre}
          }
        })
        setGenres(updatedGenres)

    } catch (err) {
      console.error(err.message)
    }
  }

  


  return (
<div>
 
 {/* <!-- Button trigger modal --> */}
 <button type="button"
   className="button_edit" data-toggle="modal" data-target={`#editgenremoval${genre.genre_id}`}>Edit
 </button>

 {/* <!-- Modal --> */}
 <div className="modal fade" id={`editgenremoval${genre.genre_id}`} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <div className="modal-dialog" role="document">
     <div className="modal-content">
       <div className="modal-header">
         <h5 className="modal-title" id="exampleModalLabel">Edit genre</h5>
         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
           <span aria-hidden="true">&times;</span>
         </button>
       </div>

       <div className="modal-body">

         <label className="add_movie_title" htmlFor="title">Genre title</label>
         <input
         className="form-control"
         type="text"
         name="title"
         value={genre_title}
         onChange={e => setGenreTitle(e.target.value)}
         
         />
        <p></p>

       </div>

       <div className="modal-footer">

                       <button type="button" className="button_close" data-dismiss="modal">Close</button>
         <button
           className="button_submit"
           type="Submit"
           data-dismiss="modal"
           onClick={e => editGenre(e)}
         >Edit</button>
       </div>
     </div>
   </div>
 </div>
</div>
  )
}