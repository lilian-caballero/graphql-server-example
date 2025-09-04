const books = require('./_db');
const authors = require('../author/_db');

module.exports = {
    Query: {
        books: () => books
    },
    Book: {
        author: (book) => authors.find((_) => _.id == book.authorId)
    }
};
