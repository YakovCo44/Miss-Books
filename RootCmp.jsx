const { BrowserRouter: Router, Routes, Route, Link } = ReactRouterDOM
import { Home } from "../pages/Home"
import { AboutUs } from "../pages/AboutUs"
import { BookIndex } from "../pages/BookIndex"
import { BookDetails } from "../pages/BookDetails"
import { Dashboard } from "../pages/Dashboard"
import { AppHeader } from "../cmps/AppHeader"

export function RootCmp() {
    console.log("RootCmp is rendering!") 
    return (
        <Router>
            <section className="app">
                <AppHeader />
                <main className="main-layout">
                    <h1 style={{ color: "red" }}>Hello, Miss Books!</h1> 
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/books" element={<BookIndex />} />
                        <Route path="/books/:bookId" element={<BookDetails />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Routes>
                </main>
            </section>
        </Router>
    )
}


