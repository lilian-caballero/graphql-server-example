const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { gql } = require('apollo-server-express');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');
const authorTypes = require('./src/author/types');
const bookTypes = require('./src/book/types');
const authorResolvers = require('./src/author/resolvers');
const bookResolvers = require('./src/book/resolvers');

const rootType = gql`
    type Query
`;
const typeDefs = mergeTypeDefs([
    rootType,
    authorTypes,
    bookTypes
]);
const resolvers = mergeResolvers([
    authorResolvers,
    bookResolvers
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