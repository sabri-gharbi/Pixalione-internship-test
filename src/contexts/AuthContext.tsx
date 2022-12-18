import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginPayload, User } from "../types";
import { useState } from "react";
import jwtDecode from "jwt-decode";
import useLocalStorage from "../hooks/useLocalStorage";

interface AuthContextInterface {
  user: User | null;
  login: (payload: LoginPayload) => void;
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

  const login = ({ userName, password }: LoginPayload) => {
    const newToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZmlyc3ROYW1lIjoiU2FicmkiLCJsYXN0TmFtZSI6IkdoYXJiaSIsImdlbmRlciI6Im1hbGUiLCJiaXJ0aERheSI6IjExLTEyLTE5OTkiLCJyb2xlIjoiaW5zdHJ1Y3RvciIsImlhdCI6MTUxNjIzOTAyMn0.Mczotd2gsnXWgVDNpn9sbTeXdveO25SWEMYvUV7NpzI";

    setToken(newToken);
    setUser(jwtDecode<User>(newToken));
    navigate("/");
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
