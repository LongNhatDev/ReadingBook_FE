import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import BooksCensored from "./BooksCensored";
import BooksPending from "./BooksPending";
import CreateCategory from "./CreateCategory";

const StaffPage = () => {
  return (
    <Routes>
      <Route path="/bookscensored" element={<BooksCensored />} />
      <Route path="/bookspending" element={<BooksPending />} />
      <Route path="/createcategory" element={<CreateCategory />} />

      <Route
        path="/*"
        element={<Navigate to="/bookscensored" replace={true} />}
      />
    </Routes>
  );
};

export default StaffPage;
