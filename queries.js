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

const createFavLink = (req, res) => {
  let { name, URL } = req.body

  pool.query('INSERT INTO favlinks (name, URL) VALUES ($1, $2)', [name, URL], (error, result) => {
    if (error) {
      throw error
    }
    res.status(200).send(`FavLink added`)
  })
}

module.exports = {
  getFavLinks,
  createFavLink
}