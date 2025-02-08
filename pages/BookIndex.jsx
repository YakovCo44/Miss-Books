import { useEffect, useState } from "react"
import { bookService } from "../services/book.service"
import { BookList } from "../cmps/BookList"

export function BookIndex() {
    const [books, setBooks] = useState([]) // State to store books
    const [isLoading, setIsLoading] = useState(true) // Loading state

    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        bookService.query()
            .then(books => {
                setBooks(books)
                setIsLoading(false)
            })
            .catch(err => {
                console.error("Error loading books:", err)
                setIsLoading(false)
            })
    }

    return (
        <section className="book-index">
            <h1>📚 Our Book Collection</h1>
            {isLoading ? <p>Loading books...</p> : <BookList books={books} />}
        </section>
    )
}
