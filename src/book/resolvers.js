const db = require('../_db');

module.exports = {
    Query: {
        books: () => db.books,
        book: (_, { id }) => db.books.find((book) => id == book.id)
    },
    Book: {
        author: (book) => db.authors.find((author) => author.id == book.authorId),
        characters: (book) => db.characters.filter((character) => character.bookIds.includes(book.id)),
    }
};
