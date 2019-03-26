import Axios from 'axios'

export default {
    getBookTitle: searchQuery => {
        return Axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`)
    },
    getBooks: () => {
        return Axios.get('/api/books')
    },
    deleteBook: id => {
        return Axios.delete(`/api/books/${id}`)
    },
    saveBook: bookData => {
        return Axios.post('/api/books', bookData)
    }
}