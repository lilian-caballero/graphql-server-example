const db = require('../_db');

module.exports = {
    Query: {
        characters: () => db.characters,
        character: (_, { id }) => db.characters.find((character) => id == character.id)
    },
    Character: {
        books: (character) => db.books.filter((book) => character.bookIds.includes(book.id))
    }
};
