const db = require('../../../core/db/_db');
const fs = require('fs');

module.exports = {
    Mutation: {
        addCharacter: (_, addCharacterInput) => {
            let character = {
                id: Math.floor(Math.random() * 10000),
                ...addCharacterInput.input
            };
            let path = __dirname.replace('character', '/_db.js');

            db.characters.push(character);

            fs.writeFileSync(
                path,
                `module.exports = ${JSON.stringify(db, null, 2)};`,
                'utf-8'
            );

            return character;
        },
        editCharacter: (_, editCharacterInput) => {
            let id = updateCharacterInput.id;
            let characters = db.characters.map((character) => {
                if (character.id == id) {
                    return { ...character, ...editCharacterInput.input };
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
        },
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
        }
    }
};