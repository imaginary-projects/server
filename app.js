if(process.env.NODE_ENV === 'development')
require('dotenv').config()

const mongoUrl = `mongodb://localhost:27017/imaginary-project`

const mongoose = require('mongoose')
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const routes = require('./routes/index')
const { errorHandler } = require('./middlewares/errorHandling')
const port = process.env.PORT

mongoose.connect(mongoUrl, { useCreateIndex: true,useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true }, function(err) {
  if(err) console.log('failed connect database')
  else console.log('successfully connected connect database')
})

app.use(cors())
app.use(morgan())

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', routes)

app.use(errorHandler)

app.listen(port,function(){
    console.log('listening from port', port)
})
