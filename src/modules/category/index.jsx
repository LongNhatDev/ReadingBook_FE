import React from "react";
import { Route, Routes } from "react-router-dom";
import UserNav from "../components/usernav";
import CateDetail from "./catedetail";

const Category = () => {
  return (
    <>
      <UserNav />
      <Routes>
        <Route path="/:catename" element={<CateDetail />} />
      </Routes>
    </>
  );
};

export default Category;
