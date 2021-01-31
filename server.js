const express = require('express')
const app = express()
const api = require('./server/Routes/api')
const mongoose = require('mongoose')
const path = require('path')
mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost/picturesDB')

// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
//     next()
// })
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', api)

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3200
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})

