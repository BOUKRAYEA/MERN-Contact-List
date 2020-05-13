const mongoose = require('mongoose');
const config = require('config');

const connectDB=()=>{

mongoose.connect(config.get("MongoURI"),{ useUnifiedTopology: true , useNewUrlParser: true } )
    .then(()=>console.log("mongoose is connected"))
    .catch(err=>console.error(err));

};

module.exports=connectDB;