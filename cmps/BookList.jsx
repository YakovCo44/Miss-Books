import { BookPreview } from "./BookPreview"

export function BookList({ books, onDelete, onEdit }) {
    function confirmDelete(bookId) {
        const isConfirmed = window.confirm("Are you sure you want to delete this book?")
        if (isConfirmed) onDelete(bookId)
    }

    return (
        <ul className="book-list">
            {books.map(book => (
                <li key={book.id} className="book-item">
                    <BookPreview book={book} />
                    <div className="book-actions">
                        <button onClick={() => onEdit(book)}>Edit</button>
                        <button onClick={() => confirmDelete(book.id)}>Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

