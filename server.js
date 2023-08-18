import express from 'express'

//import function for sending prompt to open api

const app = express()
const port = 3000

app.use(express.static('public'))

// create a route for the sending prompt to open api

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})