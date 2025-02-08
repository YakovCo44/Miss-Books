export const bookService = {
    query,
    getById
}

const books = [
    {
        id: "OXeMG8wNskc",
        title: "Metus Hendrerit",
        thumbnail: "http://ca.org/books-photos/20.jpg",
        listPrice: { amount: 109, currencyCode: "EUR", isOnSale: false }
    },
    {
        id: "JYOJa2NpSCq",
        title: "Morbi Suscipit",
        thumbnail: "http://ca.org/books-photos/2.jpg",
        listPrice: { amount: 95, currencyCode: "USD", isOnSale: true }
    },
    {
        id: "1y0Oqts35DQ",
        title: "Ultricies Eros",
        thumbnail: "http://ca.org/books-photos/3.jpg",
        listPrice: { amount: 50, currencyCode: "GBP", isOnSale: false }
    }
]

function query() {
    return Promise.resolve(books)
}

function getById(bookId) {
    return Promise.resolve(books.find(book => book.id === bookId))
}
