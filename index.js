const express=require('express');
const router=require('./s2w4/src/router/user')
const app=express();
app.use(express.json())
app.use('/',router)
app.get('/hello',(req,res)=>{
    const data= req.body;
    console.log(data)
    res.send("data recived");
})
app.listen(9000,()=>{
    console.log("server is runnig")
    
});