export default function GenresList (props) {
  const { genres } = props;
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
              <td> {genre.genre_title} </td>
              <td> edit </td>
              <td> delete </td>
              </tr>
            )}
          </tbody>
         </table>
    </>
  )
}