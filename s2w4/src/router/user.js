const express=require('express');
const {login}=require('../controller/user')
const {sum}=require('../controller/sum')
const{profile}=require('../controller/profile')
const router=express.Router();
router.get('/greet/:firstname/:lastname',(req,res)=>{
    const data =req.params.firstname;
    res.send(`good morning ${data}`);
})
router.get('/sqare/:number',(req,res)=>{
    const data =req.params.number;
    console.log(data);
    res.send(`sqare of ${data} is 25`);

})
router.get('/info/:city/:country',(req,res)=>{
    const data=req.params.city;
    const data2=req.params.country;
    console.log(data2);
    res.send(`you are viewing information about ${data},located in ${data2}`)
})
router.get('/welcome',()=>{
    console.log("welcome to express server");
})
router.get('/fullnmae',(req,res)=>{
    const{firstname,lastname}=req.query;
    if(!firstname||!lastname){
        return res.status(400).send(`missing firstname or lastname`);

    }
    res.send(`full name is ${firstnmae} ${lastname}`);
})



router.get('/multiply/:num1/:num2',(req,res)=>{
    const data=req.params.num1;
    const data2=req.params.num2;
    console.log(data)
    console.log(data2)
    res.send(`product of ${data} and ${data2} is 12`)
})
router.get('/age/:year',(req,res)=>{
    const data=req.params.age;
    const data2=req.params.year;
    res.send(`your age is 25`)
})
router.get('/reversed/:word',(req,res)=>{
    const data=req.params.word;
    const word=data.split('').reverse().join('');
    res.send(`the reversed word is ${word}`);
})
router.get('/whether/:city',(req,res)=>{
    const data=req.params.city;
    res.send(`weather in ${data} is sunny`);
})
router.get('/addition',(req,res)=>{
    const num1=req.query.num1;
    const num2 =req.query.num2;
    let sum = num1+num2;
    res.send(`sum is ${sum}` );
})
router.get('/bmi',(req,res)=>{
    const height=req.query.height;
    const weight=req.query.weight;
    console.log(height);
    console.log(weight);
    const bmi=weight/(height*height)
    res.send(`the BMI is${bmi}`)
})
router.get('/captalize/:word',(req,res)=>{
    const word=req.params.word;
    const cap = word.charAt(0).toUpperCase() + word.slice(1);
  res.send(cap);
  
})
router.get('/divide/:num1/:num2',(req,res)=>{
    const num1=req.params.num1;
    const num2 =req.params.num2;
    const divide=num1/num2;
    res.send(`the result is ${divide}` )
})
router.get('/even-odd/:number',(req,res)=>{
    const num=req.params.number;
    if(num%2==0)
        res.status(400).send(`num is even`);
    else 
    res.send(`num is odd`)
})
router.get('/welcome-user',(req,res)=>{
    const data=req.query.name;
    res.send(`wlcome ${data}`)
})
router.get('/area/rectangle',(req,res)=>{
    const data=req.query.length;
    const data2=req.query.breadth;
    const area=data*data2;
    res.send(`area is  ${area}`);
})
router.get('/area/circle/:radius',(req,res)=>{
    const data=req.params.radius;
    const area=(3.14*(data*data))
    res.send(`the area is ${area}`)
})
router.get('/random',(req,res)=>{
    const data = Math.floor(Math.random() * 100) + 1;
    console.log(data);
    res.send(data);
})
router.get('/uppercase/:text',(req,res)=>{
    const data=req.params.text;
    const uppercase=data.toUpperCase();
    res.send(uppercase)
    
})
router.get('/length/:text',(req,res)=>{
    const data=req.params.text;
    console.log(data.length);
    res.send(`the length is${data.length}`)

})
router.get('/concat',(req,res)=>{
    const data=req.query.first;
    const data2=req.query.second;
    const data3=data+''+data2;
    res.send(`the concated word is ${data} ${data2}`)
})
router.get('/table/:number',(req,res)=>{
    let i=req.params.number;
    for(i=5;i<=5;i++){
        for(let j=0;j<=10;j++){
            const res=i*j;
            console.log(res);
        }
    }
    res.send(`the result isb ${res}`)
})
router.get('/min/:num1/:num2',(req,res)=>{
    const num1=req.params.num1;
    const num2=req.params.num2;
    const min =Math.min(num1,num2);
    res.send(`smaller number is ${min}`);
})
router.get('/max/:num1/:num2',(req,res)=>{
    const num1=req.params.num1;
    const num2=req.params.num2;
    const max =Math.max(num1,num2);
    res.send(`smaller number is ${max}`);
})
router.get('/palindrome/:word',(req,res)=>{
    const word=req.params.word;
    const reversed = word.split('').reverse().join('');
    if(reversed==word){
        res.status(200).send('yes')
    }
    else{
        res.send(`no`)
    }
})
router.get('/sort',(req,res)=>{
    const numbers=req.query.numbers;
    const sorted = numbers.split(',').map(Number).sort((a,b)=>
        a-b)
    


    res.send(` sorted numbers:[${sorted.join(',')}]`);
});
router.get('/greet-time/:name',(req,res)=>{
    const name=req.params.name;
    const time=new Date().getHours();
    console.log(time);
    let greeting;
    if(time>=5&&time<12){
        greeting='good morning'
    }
    else if(time>=12&&time<5){
        greeting='good afternoon'
    }
    else if(time>=5&&time<9){
        greeting='good evening'
    }
    else if(time>=9&&time<=5){
        greeting='good night'
    }
    res.send(`${greeting},${name}`)
})
router.post('/sum',sum)
router.post('/login',login)
router.post('/profile',profile)
module.exports=router;