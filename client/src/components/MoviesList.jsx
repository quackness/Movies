export default function MoviesList () {
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
              <th>Imbd</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            <td>Forrest</td>
            <td>1994</td>
            <td>Drama</td>
            <td>http://www.etc.com</td>
            <td>Edit</td>
            <td>Delete </td>
          </tbody>
        </table>
    </>
  )
}