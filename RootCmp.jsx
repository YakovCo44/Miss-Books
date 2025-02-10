import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { AboutUs } from "../pages/AboutUs"
import { BookIndex } from "../pages/BookIndex"
import { BookDetails } from "../pages/BookDetails"
import { AppHeader } from "../cmps/AppHeader"

export function RootCmp() {
    return (
        <Router>
            <section className="app">
                <AppHeader />
                <main className="main-layout">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/books" element={<BookIndex />} />
                    </Routes>
                </main>
            </section>
        </Router>
    )
}
