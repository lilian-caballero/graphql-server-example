const db = require('../../../core/db/_db');

module.exports = {
    Query: {
        authors: () => db.authors,
        author: (_, { id }) => db.authors.find((author) => id == author.id)
    }
}