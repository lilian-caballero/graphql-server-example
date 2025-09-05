const { gql } = require('apollo-server-express');

module.exports = gql`
  type Character {
    id: ID!,
    name: String!,
    age: Int,
    books: [Book!]!
  }
`