import React from "react";
import { NavLink } from "react-router-dom";

const RegistrationPage = () => {
  return (
    <div>
      <p style={{ color: "black" }}>Registration</p>
      <NavLink to="/login">Login in</NavLink>
    </div>
  );
};

export default RegistrationPage;
