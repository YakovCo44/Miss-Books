import { useState } from "react"
import { bookService } from "../services/book.service"

export function AddReview({ bookId, onReviewAdded }) {
    const [review, setReview] = useState({ fullname: "", rating: 3, readAt: "" })

    function handleChange({ target }) {
        const { name, value } = target
        setReview(prevReview => ({ ...prevReview, [name]: value }))
    }

    function handleSubmit(ev) {
        ev.preventDefault()
        bookService.addReview(bookId, review).then(() => {
            onReviewAdded()
            setReview({ fullname: "", rating: 3, readAt: "" })
        })
    }

    return (
        <section className="add-review">
            <h3>Add a Review</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="fullname" value={review.fullname} onChange={handleChange} placeholder="Your Name" required />
                <select name="rating" value={review.rating} onChange={handleChange}>
                    {[1, 2, 3, 4, 5].map(num => <option key={num} value={num}>{num} Stars</option>)}
                </select>
                <input type="date" name="readAt" value={review.readAt} onChange={handleChange} required />
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}
