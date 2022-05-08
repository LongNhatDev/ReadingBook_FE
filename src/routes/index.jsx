import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Authentic from "../modules/auth";
import Category from "../modules/category";
<<<<<<< HEAD
import ChaptersToolbar from "../modules/components/chapterstoolbar";
import ReadingPage from "../modules/components/readingpage";
import UserNav from "../modules/components/usernav";
import Home from "../modules/home";
import Profile from "../modules/profile";
import Rank from "../modules/rank";
import Upload from "../modules/upload";
import UploadChapter from "../modules/yourbook/uploadchapter";
import YourBookList from "../modules/yourbook/yourbooklist";
=======
import Home from "../modules/home";
import Profile from "../modules/profile";
import Rank from "../modules/rank";
import Create from "../modules/create";
import YourBook from "../modules/yourbook";
import SignIn from "../modules/auth/signin";
>>>>>>> master-fe

export default function RoutesRoot() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/auth/*" element={<Authentic />} />
        <Route path="/category/*" element={<Category />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/rank/*" element={<Rank />} />
<<<<<<< HEAD
        <Route path="/upload" element={<Upload />} />
        <Route path="/luyn" element={<UploadChapter />} />
        <Route path="/reading" element={<ReadingPage />} />
        <Route path="/tool" element={<ChaptersToolbar />} />
        <Route path="/yourbook" element={<YourBookList />} />
=======
        <Route path="/create" element={<Create />} />
        <Route path="/yourbook" element={<YourBook />} />
>>>>>>> master-fe
      </Routes>
    </BrowserRouter>
  );
}
