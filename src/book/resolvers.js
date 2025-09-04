const authors = require('../author/_db');

module.exports = {
    Query: {
        books: (_, __, { dataSources }) => dataSources.books
    },
    Book: {
        author: (book) => authors.find((_) => _.id == book.authorId)
    }
};
