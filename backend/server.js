const express=require('express');
const dbConnected=require('./DataBase/index');
const router= require('./routes/index')
const {PORT}=require("./config/index");
const app=express();






app.get('/',(req, res)=>{

    res.json({msg:'Hello world'});
})
app.use(express.json());
app.use(router);

dbConnected();

app.listen(PORT,()=>{
    console.log(`server is listening on port ${PORT}`);
})


