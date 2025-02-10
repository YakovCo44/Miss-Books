import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { bookService } from "../services/book.service"
import { AddReview } from "../cmps/AddReview"

export function BookDetails() {
    const { bookId } = useParams()
    const navigate = useNavigate()
    const [book, setBook] = useState(null)

    useEffect(() => {
        bookService.getById(bookId).then(setBook)
    }, [bookId])

    function handleReviewAdded() {
        bookService.getById(bookId).then(setBook)
    }

    function handleDeleteReview(reviewIdx) {
        bookService.deleteReview(bookId, reviewIdx).then(() => {
            bookService.getById(bookId).then(setBook)
        })
    }

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

    function goToNextBook() {
        bookService.query().then(books => {
            const idx = books.findIndex(b => b.id === bookId)
            if (idx < books.length - 1) navigate(`/books/${books[idx + 1].id}`)
        })
    }

    function goToPrevBook() {
        bookService.query().then(books => {
            const idx = books.findIndex(b => b.id === bookId)
            if (idx > 0) navigate(`/books/${books[idx - 1].id}`)
        })
    }

    if (!book) return <h3>Loading...</h3>

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

            <div className="book-navigation">
                <button onClick={goToPrevBook}>⬅ Previous Book</button>
                <button onClick={goToNextBook}>Next Book ➡</button>
            </div>

            <button onClick={() => navigate("/books")}>Back to Books</button>

            <section className="reviews">
                <h3>Reviews</h3>
                <AddReview bookId={bookId} onReviewAdded={handleReviewAdded} />
                <ul>
                    {book.reviews && book.reviews.map((review, idx) => (
                        <li key={idx}>
                            <p><strong>{review.fullname}</strong> - {review.rating} ⭐</p>
                            <p>Read on: {review.readAt}</p>
                            <button onClick={() => handleDeleteReview(idx)}>❌ Delete</button>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    )
}
