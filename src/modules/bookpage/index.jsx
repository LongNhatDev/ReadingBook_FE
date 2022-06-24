import React from "react";
import { Route, Routes } from "react-router-dom";
import UserNav from "../components/usernav";
import DetailPage from "./detailpage";
import ReadingPage from "./components/readingpage";
import { useContext } from "react";
import { authentication } from "../../authProvider";
import StaffNav from "../staff/components/staffnav";

const BookPage = () => {
  const auth = useContext(authentication);

  return (
    <React.Fragment>
      {auth.roles === 1 && <UserNav />}
      {auth.roles !== 1 && <StaffNav />}
      <Routes>
        <Route path="/:bookId" element={<DetailPage />} />
        <Route path="/:bookId/:chapterId" element={<ReadingPage />} />
      </Routes>
    </React.Fragment>
  );
};

export default BookPage;
