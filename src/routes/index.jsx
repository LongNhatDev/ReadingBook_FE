import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Authentic from "../modules/auth";
import Category from "../modules/category";
import Home from "../modules/home";
import Profile from "../modules/profile";
import SignIn from "../modules/auth/signin";
import Create from "../modules/create";
import YourBook from "../modules/yourbook";
import UploadChapter from "../modules/yourbook/uploadchapter";
import YourBookList from "../modules/yourbook/yourbooklist";
import ReadingPage from "../modules/bookpage/components/readingpage";
import BookPage from "../modules/bookpage";
import BookManager from "../modules/yourbook/bookmanager";
import ReviewBox from "../modules/bookpage/components/reviewbox";
import Searchbook from "../modules/searchbook";

export default function RoutesRoot() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/auth/*" element={<Authentic />} />
        <Route path="/category/*" element={<Category />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<Create />} />
        <Route path="/yourbook" element={<YourBook />} />
        <Route path="/yourbook/:bookId" element={<BookManager />} />
        <Route path="/upload" element={<UploadChapter />} />
        <Route path="/list" element={<YourBookList />} />
        <Route path="/reading" element={<ReadingPage />} />
        <Route path="/books/*" element={<BookPage />} />
        <Route path="/review" element={<ReviewBox />} />
        <Route path="/searchbook" element={<Searchbook />} />
      </Routes>
    </BrowserRouter>
  );
}
