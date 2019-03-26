const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const routes = require('./routes')
const app = express()
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

app.use(routes)

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks')

app.listen(PORT, () => {
    console.log(`🌎 API Sever now listening on PORT ${PORT}`)
})