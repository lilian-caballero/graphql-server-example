const db = require('../_db');
const fs = require('fs');

module.exports = {
    Query: {
        authors: () => db.authors,
        author: (_, { id }) => db.authors.find((author) => id == author.id)
    },
    Author: {
        books: (author) => db.books.filter((book) => book.authorId == author.id)
    },
    Mutation: {
        deleteAuthor: (_, { id }) => {
            let authors = db.authors.filter((author) => author.id != id);
            let path = __dirname.replace('author', '/_db.js');

            db.authors = authors;

            fs.writeFileSync(
                path,
                `module.exports = ${JSON.stringify(db, null, 2)};`,
                'utf-8'
            );

            return authors;
        }
    }
};