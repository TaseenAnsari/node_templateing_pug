const express = require('express')
const app = express();

app.set('view engine','pug')
const style = {
    header:`text-align:center;
        color:red;font-size:20px;
        background-color:cyan;
        padding-top:20px;
        padding-bottom:20px;`
}



app.get('/',(req,res)=>{
    res.render('index',{my:"mypage",message:"Wellcome to my world",center:style.header})
})
app.listen(5500,()=>{
    console.log("successfully created server");
})