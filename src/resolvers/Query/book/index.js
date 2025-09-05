const db = require('../../../core/db/_db');

module.exports = {
    Query: {
        books: () => db.books,
        book: (_, { id }) => db.books.find((book) => id == book.id)
    },
}