const { gql } = require('apollo-server-express');

module.exports = gql`
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