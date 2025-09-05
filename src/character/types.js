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
    addCharacter(input: AddCharacterInput!): Character,
    editCharacter(id: ID!, input: EditCharacterInput!): Character,
    deleteCharacter(id: ID!): [Character]
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