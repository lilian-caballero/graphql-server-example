const db = require('../_db');

module.exports = {
    Query: {
        authors: () => db.authors,
        author: (_, { id }) => db.authors.find((author) => id == author.id)
    },
    Author: {
        books: (author) => db.books.filter((book) => book.authorId == author.id)
    }
};