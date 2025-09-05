const { gql } = require('apollo-server-express');

module.exports = gql`
   extend type Query {
    characters: [Character],
    character(id: ID!): Character
  }
`