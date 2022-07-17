const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'vagrant',
  host: 'localhost',
  database: 'movies',
  password: '123',
  port: 5432
})

module.exports = pool;