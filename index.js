const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const {mongoose} = require('./config/db.js')
var User = require('./controller/userController')

//create express
var app = express()

//validate json using bodyParser
app.use(bodyParser.json())  
//cross origin 
app.use(cors("*"));

app.get("/", (req,res)=>{
    res.send("Server Started")
});

app.listen(3000, () => console.log('Server Started at port 3000'))

//server using user
app.use('/user',User);