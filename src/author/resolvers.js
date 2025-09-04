const books = require('../book/_db');

module.exports = {
    Query: {
        authors: (_, __, { dataSources }) => dataSources.authors
    },
    Author: {
        books: (author) => books.filter((_) => _.authorId == author.id)
    }
};