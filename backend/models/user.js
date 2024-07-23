const mongoose = require ('mongoose');
const {schema}= mongoose;

const userSchema=new schema({
    name:{type:String , required:true},
    username:{type:String , required:true},
    
    cnicNo:{type:Number, required:true},
    
    
    email:{type:String , required:true},
    password:{type:String , required:true}
 
},{timestamps:true}
);
module.exports=mongoose.model('User', userSchema, 'users' );