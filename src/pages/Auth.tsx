import { useState } from "react";
import SignInForm from "../components/Auth/SignInForm";
import SignUpForm from "../components/Auth/SignUpForm";

const Auth = () => {
  let [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  return (
    <div className="mt-5">
      {authMode === "signin" ? (
        <SignInForm changeAuthMode={changeAuthMode} />
      ) : (
        <SignUpForm changeAuthMode={changeAuthMode} />
      )}
    </div>
  );
};

export default Auth;
