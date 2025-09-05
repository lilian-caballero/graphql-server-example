const { gql } = require('apollo-server-express');

module.exports = gql`
  input AddAuthorInput {
    name: String!
  }

  input EditAuthorInput {
    name: String
  }
`;