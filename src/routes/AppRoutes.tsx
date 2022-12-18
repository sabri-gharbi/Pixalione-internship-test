import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import { AuthContextProvider } from "../contexts/AuthContext";
import Courses from "../pages/Courses";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
  return (
    <AuthContextProvider>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Courses />
              </PrivateRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </AuthContextProvider>
  );
};

export default AppRoutes;
