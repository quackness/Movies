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