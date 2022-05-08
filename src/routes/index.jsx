import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Authentic from "../modules/auth";
import Category from "../modules/category";
import Home from "../modules/home";
import Profile from "../modules/profile";
import Rank from "../modules/rank";
import SignIn from "../modules/auth/signin";
import Create from "../modules/create";
import YourBook from "../modules/yourbook";

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
        <Route path="/create" element={<Create />} />
        <Route path="/yourbook" element={<YourBook />} />
      </Routes>
    </BrowserRouter>
  );
}
