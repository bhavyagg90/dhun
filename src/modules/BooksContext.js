import React, { useContext, useReducer, useState } from "react";

// array of book objects
const bookList = [
  // ...
];

// saved books reducer function
const savedBooksReducer = (state, action) => {
  // ...
};

export const BooksContext = createContext();

export const BooksProvider = (props) => {
  const [books, setBooks] = useState(bookList);
  const [savedBooks, setSavedBooks] = useReducer(savedBooksReducer, []);
  return <BooksContext.Provider> {props.children} </BooksContext.Provider>;
};
