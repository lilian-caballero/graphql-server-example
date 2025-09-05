const { gql } = require('apollo-server-express');

module.exports = gql`
  type Character {
    id: ID!,
    name: String!,
    age: Int,
    books: [Book!]!
  }

  extend type Query {
    characters: [Character],
    character(id: ID!): Character
  }

  extend type Mutation {
    deleteCharacter(id: ID!): [Character]
    addCharacter(input: AddCharacterInput!): Character,
    updateCharacter(id: ID!, input: EditCharacterInput!): Character
  }

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