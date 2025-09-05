const db = require('../_db');
const fs = require('fs');

module.exports = {
    Query: {
        characters: () => db.characters,
        character: (_, { id }) => db.characters.find((character) => id == character.id)
    },
    Character: {
        books: (character) => db.books.filter((book) => character.bookIds.includes(book.id))
    },
    Mutation: {
        deleteCharacter: (_, { id }) => {
            let characters = db.characters.filter((character) => character.id != id);
            let path = __dirname.replace('character', '/_db.js');

            db.characters = characters;

            fs.writeFileSync(
                path,
                `module.exports = ${JSON.stringify(db, null, 2)};`,
                'utf-8'
            );

            return characters;
        },
        addCharacter: (_, addCharacterInput) => {
            let character = {
                id: Math.floor(Math.random() * 10000),
                ...addCharacterInput.input
            }
            let path = __dirname.replace('character', '/_db.js');

            db.characters.push(character);

            fs.writeFileSync(
                path,
                `module.exports = ${JSON.stringify(db, null, 2)};`,
                'utf-8'
            );

            return character;
        },
        updateCharacter: (_, updateCharacterInput) => {
            let id = updateCharacterInput.id;
            let characters = db.characters.map((character) => {
                if (character.id == id) {
                    return { ...character, ...updateCharacterInput.input };
                }

                return character;
            });
            let path = __dirname.replace('character', '/_db.js');

            db.characters = characters;

            fs.writeFileSync(
                path,
                `module.exports = ${JSON.stringify(db, null, 2)}`,
                'utf-8'
            );

            return characters.find((character) => character.id == id);
        }
    }
};
