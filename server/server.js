const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ConnectDB = require('./config/connectDB');

// middelware

app.use(express.json());

// connect to database(config)

ConnectDB();

// routes
//locahost:5000/api/contacts/add
app.use("/contacts",require('./Routes/contact'));



//run server

const port = process.env.PORT||5000;
app.listen(port , (err)=>{
    if(err) console.error(err);
    else console.log('server is  connected');
});
