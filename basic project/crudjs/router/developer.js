const express = require('express')

// const app = express()
const router = express.Router() //declare router

const developer = require('../models/models.js')

router.get('/', async (req, res) => {
    console.log("data")

    try {
        const develop = await developer.find()
        res.json(develop)

    } catch (err) {
        res.send("error is " + err)
    }
    // res.send("HEllo ");
    // console.log("get request")

})

router.get('/:id', async (req, res) => {
    console.log("data")

    try {
        const develop = await developer.findById(req.params.id)
        res.json(develop)

    } catch (err) {
        res.send("error is " + err)
    }
    // res.send("HEllo ");
    // console.log("get request")

})

router.post('/', async (req, res) => {
    console.log("post")

    const data = new developer({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub,
    })
    try {
        console.log(data)
        const re_object = await data.save()
        let object={"data":re_object,"Hello":"hello"}
        res.json(object)

    } catch (err) {
        res.send("error is", err)
    }
})
router.put('/:id', async (req, res) => {
    console.log("post")
    const develop = await developer.findById(req.params.id)   
    develop.name=req.body.name
    develop.tech=req.body.tech
    develop.sub=req.body.sub
    try {        
        const re_object = await develop.save()
        let object={"data":re_object,"Status":"Updated"}
        res.json(object)

    } catch (err) {
        res.status(200).send("error is", err)
    }
})
router.delete('/:id', async (req, res) => {
    console.log("post")
    const develop = await developer.findById(req.params.id)   
    try {  
        const success = await develop.delete();
 
    if (success) {
      res.status(204).json(success);
    } else {
      res.status(404).end();
    }

    }catch(err){
        res.status(404).send("error is "+err)
    }
})

module.exports = router