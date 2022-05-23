import React from "react";
import { Route, Routes } from "react-router-dom";
import UserNav from "../components/usernav";
import BookManager from "./bookmanager";
import YourBookList from "./yourbooklist";

const YourBook = () => {
  return (
    <React.Fragment>
      <UserNav />
      <YourBookList />
    </React.Fragment>
  );
};

export default YourBook;
