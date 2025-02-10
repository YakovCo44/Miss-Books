export const googleBookService = {
    query
}

function query(searchTerm) {
    const url = `https://www.googleapis.com/books/v1/volumes?printType=books&q=${searchTerm}`
    return fetch(url)
        .then(res => res.json())
        .then(data => data.items || [])
}

