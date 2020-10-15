const express = require('express');
const bodyParser = require('body-parser');
const cors =require('cors'); 
const mongoose = require('mongoose');


const eventRouter = require('./routes/event');
//const adminRouter = require('../backend/routes/admin');
//const eventRouter = require('./routes/event');


require('dotenv').config(); 

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use('/routes/event',require('./routes/event'));
//app.use('/routes/admin',require('../backend/routes/admin'));
const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser: true, useCreateIndex: true });

const connection =mongoose.connection;
connection.once('open',() => {
    console.log("MongoDB database connection establish successfully");

});


// CORS Headers => Required for cross-origin/ cross-server communication
app.listen(port, () => {
    console.log(`server is running on port : ${port}`);
});