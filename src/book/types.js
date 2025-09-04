const { gql } = require('apollo-server-express');

module.exports = gql`
  type Book {
    id: ID!,
    title: String!,
    numberOfPages: Int,
    author: Author!
  }

  extend type Query {
    books: [Book],
    book(id: ID!): Book
  }
`;