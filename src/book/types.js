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

  extend type Mutation {
    addBook(input: AddBookInput!): Book,
    editBook(id: ID!, input: EditBookInput!): Book,
    deleteBook(id: ID!): [Book],
  }

  input AddBookInput {
    title: String!,
    numberOfPages: Int,
    authorId: ID!
  }

  input EditBookInput {
    title: String,
    numberOfPages: Int,
    authorId: ID
  }
`;