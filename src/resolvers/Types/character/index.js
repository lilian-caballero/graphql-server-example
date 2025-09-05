const db = require('../../../core/db/_db');

module.exports = {
    Character: {
        books: (character) => db.books.filter((book) => character.bookIds.includes(book.id))
    },
};