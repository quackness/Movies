app.put("/movies/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      movie_title, movie_year, movie_genre_id, movie_imdb } = req.body
      const editMovie = await pool.query('UPDATE movies SET movie_title = $1, movie_year = $2, movie_genre_id = $3, movie_imdb = $4 WHERE movie_id = $5', [movie_title, movie_year, movie_genre_id, movie_imdb, id])
      res.json("Movie was updated")
  } catch (err) {
    console.error(err.message)
  }
})