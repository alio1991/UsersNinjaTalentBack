const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});



const ddbbRoutes = require('./routes/user-routes');
dotenv.config();
const uri = process.env.MONGO_URI_PART_1+process.env.DB_NAME+process.env.MONGO_URI_PART_2;

//DB connection
mongoose.connect(uri, {useNewUrlParser: true ,useFindAndModify: false, useUnifiedTopology: true})
  .then(()=> console.log('CONNECTED TO DATABASE: '+process.env.DB_NAME));
mongoose.connection.on("error", err => {console.log('DB connection error:'+err.message)});

//Routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', ddbbRoutes);
app.listen(process.env.PORT, ()=> console.log(`listen ${process.env.PORT} port`));