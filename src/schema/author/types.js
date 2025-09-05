const { gql } = require('apollo-server-express');

module.exports = gql`
  type Author {
    id: ID!,
    name: String!,
    books: [Book]
  }
`