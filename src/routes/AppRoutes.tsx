import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import { AuthContextProvider } from "../contexts/AuthContext";
import Courses from "../pages/Courses";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Porfile from "../pages/Porfile";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
  return (
    <AuthContextProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/courses"
            element={<PrivateRoute element={<Courses />} />}
          />
          <Route
            path="/profile"
            element={<PrivateRoute element={<Porfile />} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </AuthContextProvider>
  );
};

export default AppRoutes;
