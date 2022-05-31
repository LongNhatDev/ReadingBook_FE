import React, { useState, useEffect } from "react";
import { BaseURL } from "../modules/AxiosInstance";

const MainContext = React.createContext({
  categories: [],
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

export const MainContextProvider = (props) => {
  const [categories, setCategories] = useState([]);

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

  useEffect(() => {
    getData();
    console.log("Effect run in main-context", Date.now());
  }, []);

  return (
    <MainContext.Provider value={{ categories: categories }}>
      {props.children}
    </MainContext.Provider>
  );
};

export default MainContext;
