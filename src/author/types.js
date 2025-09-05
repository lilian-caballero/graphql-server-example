const { gql } = require('apollo-server-express');

module.exports = gql`
  type Author {
    id: ID!,
    name: String!,
    books: [Book]
  }

  extend type Query {
    authors: [Author],
    author(id: ID!): Author
  }

  extend type Mutation {
    deleteAuthor(id: ID!): [Author]
  }
`;
