import { useState } from "react"
import { bookService } from "../services/book.service"

export function BookAdd({ onAddBook }) {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")

    function handleSubmit(ev) {
        ev.preventDefault()
        const newBook = {
            title,
            listPrice: { amount: +price, currencyCode: "USD" },
            thumbnail: "https://via.placeholder.com/150"
        }
        bookService.addBook(newBook).then(addedBook => {
            onAddBook(addedBook) // Update parent state
            setTitle("")
            setPrice("")
        })
    }

    return (
        <section className="book-add">
            <h3>Add a New Book</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Book Title" required />
                <input type="number" value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" required />
                <button type="submit">Add Book</button>
            </form>
        </section>
    )
}
