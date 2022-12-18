import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginPayload, User } from "../types";
import { useState } from "react";
import jwtDecode from "jwt-decode";
import useLocalStorage from "../hooks/useLocalStorage";
import delay from "../Utils/delay";
import { users } from "../constants/users";

interface AuthContextInterface {
  user: User | null;
  login: ({ userName, password }: LoginPayload) => Promise<void>;
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
  const [user, setUser] = useState<User | null>(() =>
    token ? jwtDecode<User>(token) : null
  );

  const navigate = useNavigate();

  const login = async ({ userName, password }: LoginPayload) => {
    // I am writing nonsense here because the API is not ready yet

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
    setUser(jwtDecode<User>(newToken));
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
