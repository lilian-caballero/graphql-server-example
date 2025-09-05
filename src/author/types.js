const { gql } = require('apollo-server-express');

module.exports = gql`
  type Author {
    id: ID!,
    name: String!,
    books: [Book]
  }

  extend type Query {
    authors: [Author],
    author(id: ID!): Author
  }

  extend type Mutation {
    addAuthor(input: AddAuthorInput!): Author,
    editAuthor(id: ID!, input: EditAuthorInput!): Author,
    deleteAuthor(id: ID!): [Author]
  }

  input AddAuthorInput {
    name: String!
  }

  input EditAuthorInput {
    name: String
  }
`;
