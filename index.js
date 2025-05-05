const express = require('express')
const app = express()
const port = 3000

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
app.post("/favlink", (req, res) => {
  let name = req.body.name
  let URL = req.body.URL

  let newFavLink = { name, URL }

  favLinks.push(newFavLink)

  if (newFavLink) {
    res.send("success")
  }
  else {
    res.send("Error!")
  }
})

// Read
app.get("/favlinks", (req, res) => {
  res.send(favLinks)
})

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