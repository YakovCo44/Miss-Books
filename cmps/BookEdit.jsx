import { useState, useEffect } from "react"
import { bookService } from "../services/book.service"
import { useNavigate, useParams } from "react-router-dom"

export function BookEdit() {
    const { bookId } = useParams()
    const navigate = useNavigate()
    const [book, setBook] = useState({ title: "", listPrice: { amount: "", currencyCode: "USD" } })

    useEffect(() => {
        if (bookId) {
            bookService.getById(bookId).then(setBook)
        }
    }, [bookId])

    function handleChange({ target }) {
        const { name, value } = target
        setBook(prevBook => ({ ...prevBook, [name]: value }))
    }

    function handleSubmit(ev) {
        ev.preventDefault()
        if (bookId) {
            bookService.updateBook(book).then(() => navigate("/books"))
        } else {
            bookService.addBook(book).then(() => navigate("/books"))
        }
    }

    return (
        <section className="book-edit">
            <h3>{bookId ? "Edit Book" : "Add Book"}</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={book.title} onChange={handleChange} placeholder="Book Title" required />
                <input type="number" name="amount" value={book.listPrice.amount} onChange={handleChange} placeholder="Price" required />
                <button type="submit">Save</button>
            </form>
        </section>
    )
}
