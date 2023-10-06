import React from "react";
import AppRoutes from "./components/Routes/Routes";

function App(props) {

  const handleSignIn = () => {
    localStorage.setItem("user", "true");
  };

  const handleSignUp = () => {
    localStorage.removeItem("user");
  };

  return <AppRoutes  onAuthButtonClick={handleSignIn} toGoOutButtonClick={handleSignUp}/>;
}

export default App;
