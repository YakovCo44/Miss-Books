import { useState } from "react"

export function BookFilter({ onSetFilter }) {
    const [filterBy, setFilterBy] = useState({ title: "", maxPrice: 1000 })

    function handleChange({ target }) {
        const { name, value } = target
        setFilterBy(prevFilter => ({
            ...prevFilter,
            [name]: name === "maxPrice" ? +value : value
        }))
    }

    function onFilterSubmit(ev) {
        ev.preventDefault()
        onSetFilter(filterBy)
    }

    return (
        <section className="book-filter">
            <h3>Filter Books</h3>
            <form onSubmit={onFilterSubmit}>
                <label>
                    Title:
                    <input type="text" name="title" value={filterBy.title} onChange={handleChange} />
                </label>
                <label>
                    Max Price:
                    <input type="range" name="maxPrice" min="0" max="500" value={filterBy.maxPrice} onChange={handleChange} />
                    <span>${filterBy.maxPrice}</span>
                </label>
                <button type="submit">Apply</button>
            </form>
        </section>
    )
}
