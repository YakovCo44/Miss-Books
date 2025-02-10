import { useState } from "react"
import { bookService } from "../services/book.service"
import { googleBookService } from "../services/googleBookService"

export function BookAdd({ onAddBook }) {
    const [title, setTitle] = useState("")
    const [results, setResults] = useState([])

    function handleChange({ target }) {
        setTitle(target.value)
    }

    function handleSearch(ev) {
        ev.preventDefault()
        if (!title.trim()) return
        googleBookService.query(title).then(setResults)
    }

    function handleAddGoogleBook(googleBook) {
        bookService.addGoogleBook(googleBook).then(onAddBook)
    }

    return (
        <section className="book-add">
            <h3>Search for Books</h3>
            <form onSubmit={handleSearch}>
                <input type="text" value={title} onChange={handleChange} placeholder="Enter book title..." />
                <button type="submit">Search</button>
            </form>

            <ul className="google-results">
                {results.map(book => (
                    <li key={book.id}>
                        <span>{book.volumeInfo.title}</span>
                        <button onClick={() => handleAddGoogleBook(book)}>+</button>
                    </li>
                ))}
            </ul>
        </section>
    )
}

