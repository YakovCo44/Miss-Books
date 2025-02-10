import { useEffect, useState } from "react"
import { bookService } from "../services/book.service"
import { BookList } from "../cmps/BookList"
import { BookFilter } from "../cmps/BookFilter"
import { BookAdd } from "../cmps/BookAdd"
import { useNavigate } from "react-router-dom"

export function BookIndex() {
    const [books, setBooks] = useState([])
    const [filterBy, setFilterBy] = useState({ title: "", maxPrice: 1000 })
    const navigate = useNavigate()

    useEffect(() => {
        bookService.query().then(setBooks)
    }, [])

    function handleDelete(bookId) {
        bookService.deleteBook(bookId).then(() => {
            setBooks(prevBooks => prevBooks.filter(book => book.id !== bookId))
        })
    }

    function handleAdd(newBook) {
        setBooks(prevBooks => [...prevBooks, newBook])
    }

    function getFilteredBooks() {
        return books.filter(book =>
            book.title.toLowerCase().includes(filterBy.title.toLowerCase()) &&
            book.listPrice.amount <= filterBy.maxPrice
        )
    }

    return (
        <section className="book-index">
            <h2>Books List</h2>
            <BookFilter onSetFilter={setFilterBy} />
            <BookAdd onAddBook={handleAdd} />
            <BookList books={getFilteredBooks()} onDelete={handleDelete} onEdit={book => navigate(`/books/edit/${book.id}`)} />
        </section>
    )
}
