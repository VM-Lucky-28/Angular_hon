const express= require("express");
const cors=require('cors')
const app=express();
app.use(cors())

const {mongoose} = require('./db/connect')
const {articleList} = require('./db/model/articleModel')

app.get('/articles',(req,res)=>{
    articleList.find().then((articles)=>{ 
        res.json(articles)
    })
})

app.listen(3000,()=>console.log("Server started at port 3000"))