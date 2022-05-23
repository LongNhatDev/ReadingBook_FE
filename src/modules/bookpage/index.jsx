import React from "react";
import { Route, Routes } from "react-router-dom";
import UserNav from "../components/usernav";
import DetailPage from "./detailpage";
import ReadingPage from "./components/readingpage";

const BookPage = () => {
  return (
    <React.Fragment>
      <UserNav />
      <Routes>
        <Route path="/:bookId" element={<DetailPage />} />
        <Route path="/:bookId/:chapterId" element={<ReadingPage />} />
      </Routes>
    </React.Fragment>
  );
};

export default BookPage;
