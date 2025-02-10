import { Link } from "react-router-dom"

export function BookPreview({ book }) {
    return (
        <article className="book-preview">
            <Link to={`/books/${book.id}`}>
                <img src={book.thumbnail} alt={book.title} />
                <h3>{book.title}</h3>
                <p>💰 {book.listPrice.amount} {book.listPrice.currencyCode}</p>
            </Link>
        </article>
    )
}

