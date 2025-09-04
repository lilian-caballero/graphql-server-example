const { gql } = require('apollo-server-express');

module.exports = gql`
  type Author {
    id: Int!,
    name: String!,
    books: [Book!]
  }

  extend type Query {
    authors: [Author]
  }
`;
