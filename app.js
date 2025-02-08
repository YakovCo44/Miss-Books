import { App } from './RootCmp.jsx'
import { Home } from "./pages/Home"
import { AboutUs } from "./pages/AboutUs"
import { BookIndex } from "./pages/BookIndex"

const elContainer = document.getElementById('root')
const root = ReactDOM.createRoot(elContainer)
root.render(<App />)


export function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
            </Routes>
        </Router>
    )
}