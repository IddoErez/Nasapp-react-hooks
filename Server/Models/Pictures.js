 const mongoose = require("mongoose")
 const Schema = mongoose.Schema
 const pictureSchema = new Schema({
    title: String,
    url: String,
    description: String,
 })
 const Picture = mongoose.model("picture", pictureSchema)

module.exports = Picture



