const db = require('../../../core/db/_db');

module.exports = {
    Book: {
        author: (book) => db.authors.find((author) => author.id == book.authorId),
        characters: (book) => db.characters.filter((character) => character.bookIds.includes(book.id)),
    },
};