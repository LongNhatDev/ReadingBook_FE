import React from "react";
import { Route, Routes } from "react-router-dom";
import UserNav from "../components/usernav";
import CateDetail from "./catedetail";
import UserNav from "../components/usernav";

const Category = () => {
  return (
<<<<<<< HEAD
    <React.Fragment>
=======
    <>
>>>>>>> master-fe
      <UserNav />
      <Routes>
        <Route path="/:catename" element={<CateDetail />} />
      </Routes>
<<<<<<< HEAD
    </React.Fragment>
=======
    </>
>>>>>>> master-fe
  );
};

export default Category;
