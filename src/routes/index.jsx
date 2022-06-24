import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Authentic from "../modules/auth";
import Category from "../modules/category";
import Home from "../modules/home";
import Create from "../modules/create";
import YourBook from "../modules/yourbook";
import UploadChapter from "../modules/yourbook/uploadchapter";
import YourBookList from "../modules/yourbook/yourbooklist";
import ReadingPage from "../modules/bookpage/components/readingpage";
import BookPage from "../modules/bookpage";
import BookManager from "../modules/yourbook/bookmanager";
import ReviewBox from "../modules/bookpage/components/reviewbox";
import Searchbook from "../modules/searchbook";
import MyProfile from "../modules/myprofile";
import ProtectedRoute from "../components/ProtectRoute";
import AdminRoute from "../modules/admin";
import StaffPage from "../modules/staff";
import Library from "../modules/library";

export default function RoutesRoot() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Don't need to Sign in */}
        <Route path="/home" element={<Home />} />
        <Route path="/auth/*" element={<Authentic />} />
        <Route path="/searchbook" element={<Searchbook />} />
        <Route path="/category/*" element={<Category />} />
        <Route path="/reading" element={<ReadingPage />} />
        <Route path="/books/*" element={<BookPage />} />
        <Route path="/review" element={<ReviewBox />} />

        {/* Need to Sign in */}
        <Route
          path="/yourbook/:bookId"
          element={
            <ProtectedRoute>
              <BookManager />
            </ProtectedRoute>
          }
        />
        <Route
          path="/staff/*"
          element={
            <ProtectedRoute>
              <StaffPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminRoute />
            </ProtectedRoute>
          }
        />
        <Route
          path="/myprofile/*"
          element={
            <ProtectedRoute>
              <MyProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create"
          element={
            <ProtectedRoute>
              <Create />
            </ProtectedRoute>
          }
        />
        <Route
          path="/yourbook"
          element={
            <ProtectedRoute>
              <YourBook />
            </ProtectedRoute>
          }
        />
        <Route
          path="/upload"
          element={
            <ProtectedRoute>
              <UploadChapter />
            </ProtectedRoute>
          }
        />
        <Route
          path="/list"
          element={
            <ProtectedRoute>
              <YourBookList />
            </ProtectedRoute>
          }
        />

        <Route path="/*" element={<Navigate to="/home" replace />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminRoute />
            </ProtectedRoute>
          }
        />
        <Route
          path="/library"
          element={
            <ProtectedRoute>
              <Library />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
