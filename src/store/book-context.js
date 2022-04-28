import React, { useEffect, useState } from "react";

const BookContext = React.createContext({
  BooksData: [],
});

export default BookContext;

export const BookContextProvider = (props) => {
  
  useEffect(() => {
    getData();
  }, []);

  return (
    <BookContext.Provider value={{ BooksData: books }}>
      {props.children}
    </BookContext.Provider>
  );
};
