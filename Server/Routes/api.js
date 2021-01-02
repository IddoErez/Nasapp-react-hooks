const express = require("express")
const router = express.Router()
const Picture = require("../Models/Pictures")

router.post('/image', async (req, res) => {
    console.log(req.body)
    let pictureDoc = new Picture({...req.body})
    await pictureDoc.save()
   
 })
 router.get('/images', async (req, res) => {
    let pictures = await Picture.find({})
    res.send(pictures)
})
router.delete('/image/:id', async (req, res) => {
    console.log("16", req.params)
    let {id}= req.params
    await Picture.findByIdAndDelete({_id: id})
    let pictures = await Picture.find({})
    console.log("20", pictures)
    res.send(pictures)
})
 

module.exports=router