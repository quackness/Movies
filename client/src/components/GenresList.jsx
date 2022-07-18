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
          </tr>
          <tbody>
            {genres.map(genre => 
              <tr key = {genre.genre_id}>
              <td> {genre.genre_title} </td>
              </tr>
            )}
          </tbody>
        </thead>

      </table>
    </>
  )
}