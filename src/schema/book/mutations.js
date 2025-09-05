const { gql } = require('apollo-server-express');

module.exports = gql`
 extend type Mutation {
    addBook(input: AddBookInput!): Book,
    editBook(id: ID!, input: EditBookInput!): Book,
    deleteBook(id: ID!): [Book],
  }
`