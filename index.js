const express = require('express')
const app = express()
const port = 8000

const db = require('./queries')

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Node / Express server is operational!")
})

app.get("/something/different", (req, res) => {
  res.send("Hey hey you found the easter egg")
})

let favLinks = [

]

// CRUD

// Create
app.post("/favlink", db.createFavLink)

// Read
app.get("/favlinks", db.getFavLinks)

// Update
app.put("favlink", (req, res) => {
  res.send("Updating something!")
})

// Delete
app.delete("/favlink", (req, res) => {
  let name = req.body.name
  favLinks = favLinks.filter(favlink => favlink.name !== name)
  res.send(favLinks)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})