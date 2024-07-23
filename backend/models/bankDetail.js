const mongoose =require('mongoose');
const { schema } = require('./store');
const { Schema } = mongoose;

const bankDetailSchema=new schema({
    ownerName:{type:mongoose.SchemaTypes.ObjectId , required: true , ref:'user' },
    accountHolder:{type:String, required: true},
    bankName: {type:String, required:true}, 
    ibnNo:{type:String, required:true}
    
}

);

module.exports=mongoose.model('bankDetail',bankDetailSchema,'bankDetails');