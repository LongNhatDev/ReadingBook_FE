import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Authentic from "../modules/auth";
import Category from "../modules/category";
import ReadingPage from "../modules/components/readingpage";
import UserNav from "../modules/components/usernav";
import Home from "../modules/home";
import Profile from "../modules/profile";
import Rank from "../modules/rank";
import Upload from "../modules/upload";

export default function RoutesRoot() {
  return (
    <BrowserRouter>
      <UserNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/*" element={<Authentic />} />
        <Route path="/category/*" element={<Category />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/rank/*" element={<Rank />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/reading" element={<ReadingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
