const express = require ('express');
const rout =express.Router();

rout.get('/test', (req, res)=>{res.json({message:'working'})});


// user routs

rout.post('/login',()=>{});
rout.post('/register',()=>{});



module.exports=rout;