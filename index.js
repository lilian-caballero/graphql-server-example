const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { gql } = require('apollo-server-express');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');
const authorTypes = require('./src/author/types');
const bookTypes = require('./src/book/types');
const characterTypes = require('./src/character/types');
const authorResolvers = require('./src/author/resolvers');
const bookResolvers = require('./src/book/resolvers');
const characterResolvers = require('./src/character/resolvers');

const rootType = gql`
    type Query,
    type Mutation
`;
const typeDefs = mergeTypeDefs([
    rootType,
    authorTypes,
    bookTypes,
    characterTypes
]);
const resolvers = mergeResolvers([
    authorResolvers,
    bookResolvers,
    characterResolvers
]);

async function startServer() {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
    });

    console.log(`🚀  Server ready at: ${url}`);
}

startServer();