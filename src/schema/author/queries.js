const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Query {
    authors: [Author],
    author(id: ID!): Author
  }
`