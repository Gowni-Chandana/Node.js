const login=(req,res)=>{
    const data=req.body;
    console.log(data);
    res.send("login sucess fully");
}
module.exports={login}
