import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../../Pages/MainPage";
import NotFoundPage from "../../Pages/NotFoundPage";
import MyPlaylist from "../../Pages/MyPlaylist";
import LoginPage from "../../Pages/Login/Login";
import RegistrationPage from "../../Pages/Registration";
import Collection from "../../Pages/Collection";
import { ProtectedRoute } from "../../Hok/ProtectedRoute";

function AppRoutes({ onAuthButtonClick, toGoOutButtonClick }) {
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={<LoginPage onAuthButtonClick={onAuthButtonClick} />}
        />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route element={<ProtectedRoute />}>
          <Route
            path="/"
            element={<MainPage toGoOutButtonClick={toGoOutButtonClick} />}
          />
          <Route path="/playlist" element={<MyPlaylist />} />
          <Route path="/collection/:id/*" element={<Collection />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
