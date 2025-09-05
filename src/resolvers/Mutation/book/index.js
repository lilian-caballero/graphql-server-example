const db = require('../../../core/db/_db');
const fs = require('fs');

module.exports = {
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