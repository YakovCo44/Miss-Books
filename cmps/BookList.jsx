import { BookPreview } from "./BookPreview"

export function BookList({ books, onDelete, onEdit }) {
    return (
        <ul className="book-list">
            {books.map(book => (
                <li key={book.id} className="book-item">
                    <BookPreview book={book} />
                    <div className="book-actions">
                        <button onClick={() => onEdit(book)}>Edit</button>
                        <button onClick={() => onDelete(book.id)}>Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    )
}

