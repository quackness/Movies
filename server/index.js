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
      `SELECT movie_id, movie_title, movie_year, movie_genre_id, movie_imdb, genre_title
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
      `SELECT genre_id, genre_title
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

//delete a genre

app.delete("/genres/delete/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    console.log("Deleted genre id:", id);
    const deleteGenre = await pool.query(
      "DELETE FROM genres WHERE genre_id = $1 RETURNING *", [id]
    )
    res.json("The genre was deleted")
  } catch (err) {
    console.error(err.message)
  }
})

//add a movie
app.post("/movies", async (req, res) => {
  try {
    console.log("req.body >>", req.body)
    // const {movie_title, movie_year, movie_genre_id, movie_imdb} = req.body;
    // console.log(req.body)
    const newMovie =  await pool.query(
      `INSERT INTO movies (movie_title, movie_year, movie_genre_id, movie_imdb)
      VALUES ($1, $2, $3, $4) RETURNING *`, [req.body.title, req.body.year, req.body.genreId, req.body.imdb])
      res.json(newMovie.rows[0])
    // const newMovieGenre =  await pool.query(
    //     `Select genre_title FROM genres 
    //     WHERE genre_id = $1`, [req.body.genreId])
    //     console.log("newMovieGenre", newMovieGenre)
    //     const genre = newMovieGenre.rows[0].genre_title
      // res.json({...newMovie.rows[0], genre_title: genre});
      
  } catch (err) {
    console.error(err.message)
  }
})

// add a genre
app.post("/genres", async (req, res) => {
  try {
    const {genre_title} = req.body;
    console.log("req.body>>", req.body)
    const newGenre = await pool.query(
      `INSERT INTO genres (genre_title) VALUES ($1) RETURNING *`, [genre_title])
      res.json(newGenre.rows[0])
    } catch (err) {
      console.error(err.message)
    }
})

//edit a movie
app.put("/movies/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { movie_title, movie_year, movie_genre_id, movie_imdb } = req.body
    const editMovie = await pool.query(
      `UPDATE movies SET movie_title=$1, movie_year=$2, movie_genre_id=$3, movie_imdb=$4 WHERE movie_id=$5`, [movie_title, movie_year, movie_genre_id, movie_imdb, id])
    res.json("Movie was updated")
  } catch (err) {
    console.error(err.message)
  }
})

//edit a genre
app.put("/genres/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { genre_title } = req.body;
    console.log("req.body", req.body)
    const editGenre = await pool.query(
      `Update genres SET genre_title=$1 WHERE genre_id = $2`, [genre_title, id])
    res.json("Genre updated")
  } catch (err) {
    console.error(err.message)
  }
})

// app.put("/genres/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const {
//       genre_title } = req.body
//       const editGenre = await pool.query(
//         'UPDATE genres SET genre_title = $1 WHERE genre_id = $2', [genre_title, id])
//       res.json("Genre was updated")
//   } catch (err) {
//     console.error(err.message)
//   }
// })