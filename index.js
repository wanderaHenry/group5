//dependeancies
const express = require('express');
const mongoose = require('mongoose');
const port = 3000;
const app = express();

//require('dotenv').config();

//Instanciation
//imported routes
const blogroute = require("./routes/blogroute");

//use imported routes
app.use('/', blogroute);

//configuration
mongoose.connect(process.env.DATABASE);
mongoose.connection
.once('open',()=>{
  console.log('Mongoose connection open');
})
.on('error',(err)=>{
console.log(`connection error:${err.message}`);
});
//middleware

app.use(express.urlencoded({ extended: true }));
const path = require('path');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'view'));

app.listen(port, ()=> console.log(`Server is running on port ${port}`));
