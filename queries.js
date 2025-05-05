require('dotenv').config()

const Pool = require('pg').Pool

const pool = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
})

const getFavLinks = (req, res) => {
  pool.query('SELECT * FROM favlinks', (error, result) => {
    if (error) {
      throw error
    }
    else {
      console.log(result)
      res.status(200).json(result.rows)
    }
  })
}

module.exports = {
  getFavLinks
}