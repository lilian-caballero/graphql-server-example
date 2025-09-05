const db = require('../../../core/db/_db');

module.exports = {
    Query: {
        characters: () => db.characters,
        character: (_, { id }) => db.characters.find((character) => id == character.id)
    },
}