import { useEffect, useState } from "react"
import { bookService } from "../services/book.service"

export function Dashboard() {
    const [categories, setCategories] = useState({})

    useEffect(() => {
        bookService.getBooksByCategory().then(setCategories)
    }, [])

    return (
        <section className="dashboard">
            <h2>Book Categories</h2>
            <ul>
                {Object.entries(categories).map(([category, count]) => (
                    <li key={category}>
                        {category}: {count} books
                    </li>
                ))}
            </ul>
        </section>
    )
}
