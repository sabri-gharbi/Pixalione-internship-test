import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface PrivateRouteInterface {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: PrivateRouteInterface) => {
  const { user } = useAuth();

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
