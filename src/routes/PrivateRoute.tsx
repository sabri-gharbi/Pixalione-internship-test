import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface PrivateRouteInterface {
  element: JSX.Element;
}

const PrivateRoute = ({ element }: PrivateRouteInterface) => {
  const { curUser } = useAuth();

  return curUser ? element : <Navigate to="/auth" />;
};

export default PrivateRoute;
