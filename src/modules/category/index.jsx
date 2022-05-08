import React from "react";
import { Route, Routes } from "react-router-dom";
import CateDetail from "./catedetail";

const Category = () => {
  return (
    <Routes>
      <Route path="/:catename" element={<CateDetail />} />
    </Routes>
  );
};

export default Category;
