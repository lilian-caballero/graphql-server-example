const { gql } = require('apollo-server-express');

module.exports = gql`
  type Book {
    id: ID!,
    title: String!,
    numberOfPages: Int,
    author: Author!,
    characters: [Character]
  }

  extend type Query {
    books: [Book],
    book(id: ID!): Book,
  }
`;