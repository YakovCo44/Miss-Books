import { storageService } from "./storage.service"
import { utilService } from "./util.service"

export const bookService = {
    query,
    getById,
    addBook,
    updateBook,
    deleteBook,
    addReview,
    deleteReview
}

const BOOKS_KEY = 'books_db'
let books = storageService.loadFromStorage(BOOKS_KEY) || _createBooks()

function query() {
    return Promise.resolve(books)
}

function getById(bookId) {
    return Promise.resolve(books.find(book => book.id === bookId))
}

function addBook(book) {
    book.id = utilService.makeId()
    books.push(book)
    storageService.saveToStorage(BOOKS_KEY, books)
    return Promise.resolve(book)
}

function updateBook(updatedBook) {
    const idx = books.findIndex(book => book.id === updatedBook.id)
    if (idx === -1) return Promise.reject('Book not found')
    books[idx] = updatedBook
    storageService.saveToStorage(BOOKS_KEY, books)
    return Promise.resolve(updatedBook)
}

function deleteBook(bookId) {
    books = books.filter(book => book.id !== bookId)
    storageService.saveToStorage(BOOKS_KEY, books)
    return Promise.resolve()
}

function _createBooks() {
    const sampleBooks = [
        { id: utilService.makeId(), title: "The Hobbit", listPrice: { amount: 20, currencyCode: "USD" }, thumbnail: "https://via.placeholder.com/150" },
        { id: utilService.makeId(), title: "Harry Potter", listPrice: { amount: 25, currencyCode: "USD" }, thumbnail: "https://via.placeholder.com/150" }
    ]
    storageService.saveToStorage(BOOKS_KEY, sampleBooks)
    return sampleBooks
}

function addReview(bookId, review) {
    return getById(bookId).then(book => {
        if (!book.reviews) book.reviews = []
        book.reviews.push(review)
        updateBook(book)
        return Promise.resolve(review)
    })
}

function deleteReview(bookId, reviewIdx) {
    return getById(bookId).then(book => {
        book.reviews.splice(reviewIdx, 1)
        updateBook(book)
        return Promise.resolve()
    })
}

