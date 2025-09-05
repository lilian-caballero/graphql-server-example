const { gql } = require('apollo-server-express');

module.exports = gql`
 input AddCharacterInput {
    name: String!,
    age: Int,
    bookIds: [ID!]!
  }

  input EditCharacterInput {
    name: String,
    age: Int,
    bookIds: [ID!]
  }
`;