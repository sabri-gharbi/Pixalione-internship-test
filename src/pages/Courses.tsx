import { useAuth } from "../hooks/useAuth";

const Courses = () => {
  const { user, login, logout } = useAuth();

  return (
    <div>
      <h5
        onClick={() => {
          login({ userName: "sabri", password: "hahah123" });
        }}
      >
        login
      </h5>
      <h5
        onClick={() => {
          logout();
        }}
      >
        logout
      </h5>

      {user ? user.role : "guest"}
    </div>
  );
};

export default Courses;
