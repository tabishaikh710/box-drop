const mongoose =require('mongoose');
const  [Schema]=mongoose;

const productSchema=new schema({
    //title 
    productName:{type:String, required:true},
    productPrice:{type:Number, required:true},
    productDescription:{type:String, required:true},
    mainPhoto:{type:String, required:true}

    
},
{timeS}
);