const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Mutation {
    addAuthor(input: AddAuthorInput!): Author,
    editAuthor(id: ID!, input: EditAuthorInput!): Author,
    deleteAuthor(id: ID!): [Author]
  }
`