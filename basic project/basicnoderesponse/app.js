const express=require('express')
const app=express()

app.get('/',function(req,res){
    // let id=req.params.id

    res.send('Hello World',)
})
app.get('/:id',function(req,res){
    let id=req.params.id
    res.send('So the id is '+id)
})
app.get('/check',function(req,res){
    let id=req.query.id
    res.send('So the id is '+id)
})
app.listen(8000,function(req,res){
    console.log("running ..")
})