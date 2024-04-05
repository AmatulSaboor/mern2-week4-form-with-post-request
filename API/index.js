const express = require('express')
const app = express()
const PORT = 4000
const cors = require('cors')
const fs = require("fs")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get('/', (req, res) => {
  res.send('I am response from get request')
})
app.post('/', (req, res) => {
  console.log(req.body)
  fs.appendFile('./users.text', `Name : ${req.body.name} and Age : ${req.body.age} \n`, () => {})
  res.send('I am response from post request')
})

app.listen(PORT, () => {
  console.log(`app is listening at port : ${PORT}`)
})