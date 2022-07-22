const express = require('express');
const app = express();
const PORT = 8001;
const morgan = require('morgan');
const cors = require('cors');
const pool = require('./db');

app.use(cors());
app.use(express.json()); //req.body
app.use(morgan('dev'));

app.listen(PORT, () => {
  console.log(`Movies app running on port ${PORT}`);
})

app.get("/movies", async (req, res) => {
  try {
    console.log(req);
    const getAllMovies = await pool.query(
      `SELECT movie_id, movie_title, movie_year, movie_genre_id, movie_imbd, genre_title
      FROM movies JOIN genres ON genres.genre_id = movies.movie_genre_id
      ORDER BY movie_id DESC`
    );
    res.json(getAllMovies.rows);
  } catch (err) {
    console.error(err.message);
  }
})

app.get("/genres", async (req,res) => {
  try {
    const getAllGenres = await pool.query(
      `SELECT genre_title
      FROM genres`
    );
    res.json(getAllGenres.rows);
    } catch (err) {
      console.error(err.message);
  }
})

//delete a movie
app.delete("/delete/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    console.log("deleted movie id", id)
    const deleteStep = await pool.query(
      "DELETE FROM movies WHERE movie_id = $1 RETURNING *", [id]
    )
    res.json("The has been deleted")
  } catch (err) {
    console.error(err.message)
  }
});