const sum=(req,res)=>{
    const numbers=req.body.numbers;
    const sum = numbers.reduce((total, num) => total + num, 0);
  res.send(`Sum is ${sum}`);

}
module.exports={sum}
