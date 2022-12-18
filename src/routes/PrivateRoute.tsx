import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface PrivateRouteInterface {
  element: JSX.Element;
}

const PrivateRoute = ({ element }: PrivateRouteInterface) => {
  const { user } = useAuth();

  return user ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
