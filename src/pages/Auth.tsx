import { useState } from "react";
import SignIn from "../components/Auth/SignIn";
import SignUp from "../components/Auth/SignUp";

const Auth = () => {
  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  if (authMode === "signin") {
    return <SignIn changeAuthMode={changeAuthMode} />;
  }

  return <SignUp changeAuthMode={changeAuthMode} />;
};

export default Auth;
