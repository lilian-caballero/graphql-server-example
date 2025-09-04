const typeDefs = require('./types');
const db = require('./_db');
const resolvers = require('./resolvers');

module.exports = [typeDefs, db, resolvers]




