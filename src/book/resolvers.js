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
        addBook: (_, addBookInput) => {
            let book = {
                id: Math.floor(Math.random() * 10000),
                ...addBookInput.input
            };
            let path = __dirname.replace('book', '/_db.js');

            db.books.push(book);

            fs.writeFileSync(
                path,
                `module.exports = ${JSON.stringify(db, null, 2)};`,
                'utf-8'
            );

            return book;
        },
        editBook: (_, editBookInput) => {
            db.books = db.books.map((book) => {
                if (book.id == editBookInput.id) {
                    return { ...book, ...editBookInput.input }
                }

                return book;
            });
            let path = __dirname.replace('book', '/_db.js');

            fs.writeFileSync(
                path,
                `module.exports = ${JSON.stringify(db, null, 2)};`,
                'utf-8'
            );

            return db.books.find((book) => book.id == editBookInput.id);
        },
        deleteBook: (_, { id }) => {
            db.books = db.books.filter((book) => book.id != id);
            let path = __dirname.replace('book', '/_db.js');

            fs.writeFileSync(
                path,
                `module.exports = ${JSON.stringify(db, null, 2)};`,
                'utf-8'
            );

            return db.books;
        }
    }
};
