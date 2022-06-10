// * Modules
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

// * Bodyparser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// * Cors
app.use(cors())

// * Routes
const formRoutes = require('./routes/submission.routes.js')

app.use(formRoutes)

const start = async () => {
  try{
    await mongoose.connect(process.env.MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    app.listen(3000, () => {
      console.log(`App has been started on the port 3000...`)
    })
  } catch(err){
    console.log('Server Error!', err.message)
    process.exit(1)
  }
}

start()

