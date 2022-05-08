import React from "react";
import { Route, Routes } from "react-router-dom";
import CateDetail from "./catedetail";
import UserNav from "../components/usernav";

const Category = () => {
  return (
    <React.Fragment>
      <UserNav />
      <Routes>
        <Route path="/:catename" element={<CateDetail />} />
      </Routes>
    </React.Fragment>
  );
};

export default Category;
