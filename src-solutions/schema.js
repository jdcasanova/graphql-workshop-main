import { gql } from "apollo-server";

const typeDefs = gql`
  type Author {
    id: ID!
    name: String!
    books: [Book!]!
    bio: String
  }

  type Book {
    id: ID!
    title: String!
    author: Author!
    publicationDate: String!
    description: String
  }

  type Query {
    book(id: ID!): Book!
    books: [Book!]!
    author(id: ID!): Author!
    authors: [Author!]!
    booksByAuthor(authorId: ID!): [Book!]!
  }

  type Mutation {
    addAuthor(name: String!, bio: String): Author!
    addBook(title: String!, authorId: ID!, description: String): Book!
    editBook(id: ID!, title: String, authorId: ID, description: String): Book!
    deleteBook(id: ID!): ID!
  }
`;

export default typeDefs;
