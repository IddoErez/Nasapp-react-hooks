const express = require('express')
const app = express()
const api = require('./server/routes/api')
const mongoose = require('mongoose')
const path = require('path')
mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost/picturesDB')

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

