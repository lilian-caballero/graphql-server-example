const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const { gql } = require('apollo-server-express');
const { mergeTypeDefs } = require('@graphql-tools/merge');
const types = require('./schema');
const resolvers = require('./resolvers');

const rootType = gql`
    type Query,
    type Mutation
`;
console.dir(resolvers, { depth: null })
const typeDefs = mergeTypeDefs([rootType, types]);

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