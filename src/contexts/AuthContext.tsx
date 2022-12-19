import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { SignInPayload } from "../types/SignInPayload";
import { useState } from "react";
import jwtDecode from "jwt-decode";
import useLocalStorage from "../hooks/useLocalStorage";
import delay from "../Utils/delay";
import { users } from "../constants/users";

export interface CurrentUser {
  sub: number;
  name: string;
  role: "student" | "instructor";
}

export interface AuthContextInterface {
  curUser: CurrentUser | null;
  login: ({ userName, password }: SignInPayload) => Promise<void>;
  logout: () => void;
}
const AuthContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface
);

interface AuthProviderInterface {
  children: JSX.Element;
}

export const AuthContextProvider = ({ children }: AuthProviderInterface) => {
  const [token, setToken] = useLocalStorage<string | null>("token", null);
  const [curUser, setCurUser] = useState<CurrentUser | null>(() =>
    token ? jwtDecode<CurrentUser>(token) : null
  );

  const navigate = useNavigate();

  const login = async ({ userName, password }: SignInPayload) => {
    // I am writing nonsense here because i use mockAPI and it can't generate tokens

    await delay(1000); //wait 1 seconds

    if (
      (userName !== "student" && userName !== "instructor") ||
      password !== "test1234"
    ) {
      const error = new Error(
        "the username and password do not correspond to any user"
      );
      throw error;
    }

    let newToken = "";
    userName === "student"
      ? (newToken = users.student.token)
      : (newToken = users.instructor.token);

    setToken(newToken);
    setCurUser(jwtDecode<CurrentUser>(newToken));
  };

  const logout = () => {
    setToken(null);
    setCurUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ curUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
