import { authors, books } from "./data.js";

const resolvers = {
  // Relaciones entre tipos de datos
  Book: {
    author: (parent) => {
      const { authorId } = parent;
      return authors.find((author) => author.id === authorId);
    },
  },
  Author: {
    books: (parent) => {
      const { id } = parent;
      return books.filter((book) => book.authorId === id);
    },
  },
  Query: {
    authors: () => getAuthors(),
    author: (parent, { id }) => getAuthorById(id),
    books: () => getBooks(),
    booksByAuthor: (parent, { authorId }) => getBooksByAuthor(authorId),
    book: (parent, { id }) => getBookById(id),
  },
  Mutation: {
    addAuthor: (parent, { name, bio }) => addAuthor(name, bio),
    addBook: (parent, { title, authorId, description }) =>
      addBook(title, authorId, description),
    editBook: (parent, { id, title, authorId, description }) =>
      editBook({ id, title, authorId, description }),
    deleteBook: (parent, { id }) => deleteBook(id),
  },
};

const getAuthors = () => authors;

const getAuthorById = (id) => {
  if (!id) throw new Error("Id is required");
  const author = authors.find((author) => author.id === id);
  if (!author) throw new Error("Author not found");
  return author;
};

const getBooks = () => {
  return books;
};

const getBookById = (id) => {
  if (!id) throw new Error("Id is required");
  const book = books.find((book) => book.id === id);
  if (!book) throw new Error("Book not found");
  return book;
};

const getBooksByAuthor = (authorId) => {
  const booksByAuthor = books.filter((book) => book.authorId === authorId);
  if (!booksByAuthor || booksByAuthor.length < 1)
    throw new Error("Books not found for this author");
  return booksByAuthor;
};

const addBook = (title, authorId, description = "") => {
  books.push({
    id: (books.length + 1).toString(),
    title,
    authorId: getAuthorById(authorId).id,
    publicationDate: new Date().toISOString(),
    description,
  });
  return books[books.length - 1];
};

const addAuthor = (name, bio) => {
  authors.push({
    id: (authors.length + 1).toString(),
    name,
    bio,
  });
  return authors[authors.length - 1];
};

const editBook = ({ id, title, authorId, description }) => {
  const bookToEdit = getBookById(id);
  const editedFields = { title, authorId, description };
  Object.keys(editedFields).forEach(
    (k) => !editedFields[k] && delete editedFields[k]
  );
  const index = books.findIndex((book) => book.id === id);
  books[index] = { ...bookToEdit, ...editedFields };

  return books[index];
};

const deleteBook = (id) => {
  const index = books.findIndex((book) => book.id === id);
  books.splice(index, 1);
  return id;
};
export default resolvers;
