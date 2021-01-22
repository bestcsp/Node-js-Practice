const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/chander' //Setting url for  mongodb
const app = express()

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on('open', () => { //arrow function
    console.log("Connected")
})

app.use(express.json())  //accept json response 

const develop = require('./router/developer')
console.log('data1')

app.use('/developer', develop)

app.listen(8000, function () { //simple function
    console.log("Server started")
})

