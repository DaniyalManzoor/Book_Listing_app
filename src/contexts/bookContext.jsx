import React, { createContext, useState } from "react";
export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([
    { id: 1, title: "name of the wind", author: "patrick rothfuss" },
    { id: 2, title: "the final empire", author: "brandon sanderson" },
  ]);

  const addBooks = (title, author) => {
    setBooks([
      ...books,
      { id: Math.floor(Math.random() * 100000000), title, author },
    ]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBooks, removeBook }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
