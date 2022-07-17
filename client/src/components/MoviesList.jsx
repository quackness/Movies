export default function MoviesList ({movies}) {
  // const { movies } = props;
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
            {movies.map(movie =>
              <tr key={movie.movie_id}>
                <td>{movie.movie_title}</td>
                <td>{movie.movie_year}</td>
                <td>{movie.genre_title}</td>
                <td>{movie.movie_imbd}</td>
                <td>Edit button</td>
                <td>Delete button</td>
            </tr>)}
          </tbody>
        </table>
    </>
  )
}