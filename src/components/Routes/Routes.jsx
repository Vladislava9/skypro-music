import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../../Pages/MainPage";
import NotFoundPage from "../../Pages/NotFoundPage";
import MyPlaylist from "../../Pages/MyPlaylist";
import LoginPage from "../../Pages/Login/Login";
import RegistrationPage from "../../Pages/Registration";
import Collection from "../../Pages/Collection";
import { ProtectedRoute } from "../../Hok/ProtectedRoute";

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={<LoginPage />}
        />
        <Route path="/register" element={<RegistrationPage />} />
        <Route element={<ProtectedRoute />}>
          <Route
            path="/"
            element={<MainPage />}
          />
          <Route path="/favorites" element={<MyPlaylist />} />
          <Route path="/category/:id" element={<Collection />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
