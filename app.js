console.log("app.js is running...")

const { createElement } = React
const { createRoot } = ReactDOM

import { RootCmp } from "./RootCmp.jsx"

const rootElement = document.getElementById("root")

if (!rootElement) {
    console.error("Root element not found! Make sure <div id='root'></div> exists in index.html.")
} else {
    const root = createRoot(rootElement)
    root.render(createElement(RootCmp))
}


