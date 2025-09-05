const { gql } = require('apollo-server-express');

module.exports = gql`
   extend type Query {
    books: [Book],
    book(id: ID!): Book,
  }
`