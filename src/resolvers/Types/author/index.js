const db = require('../../../core/db/_db');

module.exports = {
    Author: {
        books: (author) => db.books.filter((book) => book.authorId == author.id)
    }
};