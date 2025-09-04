const authors = require('./_db');
const books = require('../book/_db');

module.exports = {
    Query: {
        authors: () => authors
    },
    Author: {
        books: (author) => books.filter((_) => _.authorId == author.id)
    }
};