import { Link } from "react-router-dom"

export function AppHeader() {
    return (
        <header className="app-header">
            <h1>Miss Books 📚</h1>
            <nav>
                <Link to="/">Home</Link> | 
                <Link to="/books">Books</Link> | 
                <Link to="/about">About</Link>
            </nav>
        </header>
    )
}
