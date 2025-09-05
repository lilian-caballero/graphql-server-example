const { gql } = require('apollo-server-express');

module.exports = gql`
  extend type Mutation {
    addCharacter(input: AddCharacterInput!): Character,
    editCharacter(id: ID!, input: EditCharacterInput!): Character,
    deleteCharacter(id: ID!): [Character]
  }
`