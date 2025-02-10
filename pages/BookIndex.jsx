import { useEffect, useState } from "react"
import { bookService } from "../services/book.service"
import { BookList } from "../cmps/BookList"
import { BookAdd } from "../cmps/BookAdd"
import { useNavigate } from "react-router-dom"

export function BookIndex() {
    const [books, setBooks] = useState([])
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

    return (
        <section className="book-index">
            <h2>Books List</h2>
            <BookAdd onAddBook={handleAdd} />
            <BookList books={books} onDelete={handleDelete} onEdit={book => navigate(`/books/edit/${book.id}`)} />
        </section>
    )
}
