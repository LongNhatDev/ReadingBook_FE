import React, { useState, useEffect } from "react";
import { BaseURL } from "../modules/AxiosInstance";

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

// const createTag = (name) => {
//   let returnValue = "";
//   for (let i = 0; i < name.length; i++) {
//     if (name.charAt(i) !== " ") {
//       returnValue += name.charAt(i);
//     }
//   }
//   return returnValue.toLowerCase();
// };

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
    const response = await BaseURL.get("api/categories");
    const data = response.data;
    data.forEach((element) => {
      categoriesData.push({
        cateId: element._id,
        cateContent: element.categoryName,
        cateLink: createUrl(element.categoryName),
      });
    });
    setCategories(categoriesData);
  }

  // async function getBooksData() {
  //   console.log("this is run again");
  //   const booksData = [];
  //   const response = await BaseURL.get("/api/books");

  //   const data = response.data;
  //   data.books.forEach((element) => {
  //     booksData.push({
  //       _id: element._id,
  //       coverImageURL: element.coverImageURL,
  //       booktag: createTag(element.category.categoryName),
  //       bookName: element.bookName,
  //       description: element.description,
  //       bookrate: "5",
  //       viewNumber: element.viewNumber,
  //       author: element.author,
  //       category: element.category,
  //       chapters: element.chapters,
  //       price: element.price,
  //     });
  //   });
  //   setBooks(booksData);
  // }

  useEffect(() => {
    getData();
    // getBooksData();
    console.log("Effect run in main-context", Date.now());
  }, []);

  return (
    <MainContext.Provider value={{ categories: categories, books: books }}>
      {props.children}
    </MainContext.Provider>
  );
};

export default MainContext;
