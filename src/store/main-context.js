import React, { useState, useEffect } from "react";

const MainContext = React.createContext({
  categories: [],
  books: [],
});

const createUrl = (name) => {
  let returnValue = "/category/";
  for (let i = 0; i < name.length; i++) {
    if (name.charAt(i) !== " ") {
      returnValue += name.charAt(i);
    }
  }
  return returnValue.toLowerCase();
};

const createTag = (name) => {
  let returnValue = "";
  for (let i = 0; i < name.length; i++) {
    if (name.charAt(i) !== " ") {
      returnValue += name.charAt(i);
    }
  }
  return returnValue.toLowerCase();
};

export const MainContextProvider = (props) => {
  const [categories, setCategories] = useState([]);
  const [books, setBooks] = useState([]);

  async function getData() {
    const categoriesData = [
      {
        cateId: "all",
        cateContent: "All",
        cateLink: "/category/all",
      },
    ];
    const response = await fetch(
      "https://reading-book-api.herokuapp.com/api/categories"
    );
    const data = await response.json();
    data.forEach((element) => {
      categoriesData.push({
        cateId: element._id,
        cateContent: element.categoryName,
        cateLink: createUrl(element.categoryName),
      });
    });
    setCategories(categoriesData);
  }

  async function getBooksData() {
    const booksData = [];
    const response = await fetch(
      "https://reading-book-api.herokuapp.com/api/books"
    );

    const data = await response.json();
    data.books.forEach((element) => {
      booksData.push({
        bookId: element._id,
        bookimg: element.coverImageURL,
        booktag: createTag(element.category.categoryName),
        bookname: element.bookName,
        bookdes: element.description,
        bookrate: "5",
        bookchapter: element.viewNumber,
      });
    });
    setBooks(booksData);
  }

  useEffect(() => {
    getData();
    getBooksData();
    console.log("Effect run in main-context");
  }, []);

  return (
    <MainContext.Provider value={{ categories: categories, books: books }}>
      {props.children}
    </MainContext.Provider>
  );
};

export default MainContext;
