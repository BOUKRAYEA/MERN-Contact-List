const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const contactSchema = new Schema({

    name:{Type:String},
    email:{Type:String},
    phone:{Type:String}

});

module.exports=Contact=mongoose.model('contact',contactSchema);