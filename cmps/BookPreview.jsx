export function BookPreview({ book }) {
    return (
        <article className="book-preview">
            <img src={book.thumbnail} alt={book.title} />
            <h3>{book.title}</h3>
            <p>💰 {book.listPrice.amount} {book.listPrice.currencyCode}</p>
        </article>
    )
}
