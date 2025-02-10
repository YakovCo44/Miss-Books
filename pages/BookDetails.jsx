import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { bookService } from "../services/book.service"

export function BookDetails() {
    const { bookId } = useParams()
    const navigate = useNavigate()
    const [book, setBook] = useState(null)

    useEffect(() => {
        bookService.getById(bookId).then(setBook)
    }, [bookId])

    if (!book) return <h3>Loading...</h3>

    function getReadingCategory(pageCount) {
        if (pageCount > 500) return "📖 Serious Reading"
        if (pageCount > 200) return "📚 Decent Reading"
        return "📜 Light Reading"
    }

    function getPublishedStatus(publishedDate) {
        const currentYear = new Date().getFullYear()
        if (currentYear - publishedDate > 10) return "📅 Vintage"
        if (currentYear - publishedDate < 1) return "🆕 New"
        return ""
    }

    function getPriceClass(amount) {
        if (amount > 150) return "expensive"
        if (amount < 20) return "cheap"
        return ""
    }

    return (
        <section className="book-details">
            <h2>{book.title}</h2>
            <img src={book.thumbnail} alt={book.title} />
            <p className={`price ${getPriceClass(book.listPrice.amount)}`}>
                💰 {book.listPrice.amount} {book.listPrice.currencyCode}
            </p>
            {book.listPrice.isOnSale && <p className="on-sale">🔥 On Sale!</p>}
            <p>{book.description}</p>
            <p>{getReadingCategory(book.pageCount)}</p>
            <p>{getPublishedStatus(book.publishedDate)}</p>
            <button onClick={() => navigate("/books")}>Back to Books</button>
        </section>
    )
}
