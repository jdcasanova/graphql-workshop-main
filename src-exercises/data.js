const authors = [
  {
    id: "1",
    name: "J. R. R. Tolkien",
    bio: "author 1",
  },
  {
    id: "2",
    name: "J. K. Rowling",
    bio: "author 2",
  },
];

const books = [
  {
    id: "1",
    authorId: "1",
    title: "The Lord of the rings",
    publicationDate: "2022-03-28T12:00:00Z",
    description: "This is the first book",
  },
  {
    id: "2",
    authorId: "1",
    title: "The Hobbit",
    publicationDate: "2022-03-28T12:00:00Z",
    description: "This is the second book",
  },
  {
    id: "3",
    authorId: "2",
    title: "Harry Potter and the Philosopher Stone",
    publicationDate: "2022-03-28T12:00:00Z",
    description: "This is the third book",
  },
];

export { authors, books };
