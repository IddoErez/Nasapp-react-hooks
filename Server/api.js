const express = require("express")
const router = express.Router()
const Picture = require("./Models/Pictures")

router.post('/image', async (req, res) => {
    let pictureDoc = new Picture({...req.body})
    await pictureDoc.save()
   
 })
 router.get('/images', async (req, res) => {
    let pictures = await Picture.find({})
    res.send(pictures)
})
router.get('/images/:id', async (req, res) => {
    let {id}= req.params
    let picture = await Picture.findById({_id: id})
    res.send(picture)
})

router.delete('/image/:id', async (req, res) => {
    let {id}= req.params
    await Picture.findByIdAndDelete({_id: id})
    let pictures = await Picture.find({})
    res.send(pictures)
})
 

module.exports=router