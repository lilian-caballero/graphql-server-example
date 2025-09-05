const db = require('../_db');
const fs = require('fs');

module.exports = {
    Query: {
        books: () => db.books,
        book: (_, { id }) => db.books.find((book) => id == book.id)
    },
    Book: {
        author: (book) => db.authors.find((author) => author.id == book.authorId),
        characters: (book) => db.characters.filter((character) => character.bookIds.includes(book.id)),
    },
    Mutation: {
        deleteBook: (_, { id }) => {
            let books = db.books.filter((book) => book.id != id);
            let path = __dirname.replace('book', '/_db.js');

            db.books = books;

            fs.writeFileSync(
                path,
                `module.exports = ${JSON.stringify(db, null, 2)};`,
                'utf-8'
            );

            return books;
        }
    }
};
