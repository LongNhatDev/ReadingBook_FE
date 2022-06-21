import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Authentic from "../modules/auth";
import Category from "../modules/category";
import Home from "../modules/home";
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
import MyProfile from "../modules/myprofile";
import ProtectedRoute from "../components/ProtectRoute";
import AdminRoute from "../modules/admin";
import StaffPage from "../staff_modules";

export default function RoutesRoot() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/auth/*" element={<Authentic />} />
        <Route path="/yourbook/:bookId" element={<BookManager />} />
        <Route path="/searchbook" element={<Searchbook />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/category/*"
          element={
            <ProtectedRoute>
              <Category />
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
        <Route
          path="/reading"
          element={
            <ProtectedRoute>
              <ReadingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/review"
          element={
            <ProtectedRoute>
              <ReviewBox />
            </ProtectedRoute>
          }
        />
        <Route
          path="/books/*"
          element={
            <ProtectedRoute>
              <BookPage />
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

        <Route path="/*" element={<Navigate to="/home" replace />} />
        <Route path="/*/*" element={<Navigate to="/home" replace />} />
        <Route path="/admin" element={
          <ProtectedRoute>
            <AdminRoute />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}
