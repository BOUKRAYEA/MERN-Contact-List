const express = require('express');
const router=express.Router();

const Contact=require('../Models/Contact');

// @api : localhost
// description : add

router.post('/add',(request,response)=>{
    const {name , email , phone}=request.body;
    console.log(request.body);
    const newContact = new Contact({name,email,phone});
    newContact.save()
        .then(contacts=>response.send(contacts))
        .catch(err=>console.error(err));
});

module.exports=router;


