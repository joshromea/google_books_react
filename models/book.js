const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: { type: String, require: true },
    author: { type: String, require: true },
    synopsis: String,
    image: String,
    link: String
})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book