import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { LoginPayload } from "../../types";

export type SignInProps = {
  changeAuthMode: () => void;
};

const SignIn: React.FC<SignInProps> = ({ changeAuthMode }) => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm<LoginPayload>();

  const onSubmit = async (data: LoginPayload) => {
    try {
      await login(data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="d-flex h-100 align-items-center justify-content-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="pt-4 shadow border border-white rounded-2"
        style={{ width: "26rem" }}
      >
        <div className="px-5">
          <h3 className="text-center mb-1 fw-bold ">Sign In</h3>
          <div className="text-center">
            Not registered yet?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign Up
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              {...register("userName", { required: true })}
              type="text"
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              {...register("password", { required: true })}
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 my-4">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
