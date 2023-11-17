import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../../Pages/MainPage";
import NotFoundPage from "../../Pages/NotFoundPage";
import MyPlaylist from "../../Pages/MyPlaylist";
import LoginPage from "../../Pages/Login/Login";
import RegistrationPage from "../../Pages/Registration";
import Collection from "../../Pages/Collection";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";


function AppRoutes() {
  const [user, setUser] = useState(localStorage.getItem("user"))

  const handleSignIn = () => {
    localStorage.setItem("user", "Vlada");
    setUser(localStorage.getItem("user"))
  };
  const handleLogOut = () => {
    localStorage.removeItem("user");
    setUser(false)
  };
  
  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={<LoginPage handleSignIn={handleSignIn}/>}
        />
        <Route path="/register" element={<RegistrationPage />} />
        <Route element={<ProtectedRoute user={user}/>}>
          <Route
            path="/"
            element={<MainPage handleLogOut={handleLogOut}/>}
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
