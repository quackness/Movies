DROP TABLE IF EXISTS movies CASCADE;
DROP TABLE IF EXISTS genres CASCADE;

CREATE TABLE genres (
  genre_id SERIAL PRIMARY KEY NOT NULL,
  genre_title VARCHAR(255) NOT NULL
);

CREATE TABLE movies (
  movie_id SERIAL PRIMARY KEY NOT NULL,
  movie_title VARCHAR(255) NOT NULL,
  movie_year INTEGER,
  movie_genre_id INTEGER REFERENCES genres(genre_id) ON DELETE CASCADE,
  movie_imdb VARCHAR(255)
);

