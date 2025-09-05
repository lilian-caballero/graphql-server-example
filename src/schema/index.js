const fs = require('fs');
const path = require('path');
const { mergeTypeDefs } = require('@graphql-tools/merge');

const typeDefs = fs.readdirSync(__dirname)
    .filter((dir) => dir.indexOf('.') < 0)
    .map((dir) => require(path.join(__dirname, dir)));

module.exports = mergeTypeDefs(typeDefs);