const { gql } = require('apollo-server-express');

module.exports = gql`
  type Book {
    title: String!,
    numberOfPages: Int,
    author: Author!
  }

  extend type Query {
    books: [Book],
  }
`;