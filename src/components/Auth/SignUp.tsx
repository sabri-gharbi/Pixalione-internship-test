export type SignUpProps = {
  changeAuthMode: () => void;
};

const SignUp: React.FC<SignUpProps> = ({ changeAuthMode }) => {
  return (
    <div className="d-flex h-100 align-items-center justify-content-center">
      <form
        className="pt-4 shadow border border-white rounded-2"
        style={{ width: "26rem" }}
      >
        <div className="px-5">
          <h3 className="text-center mb-1 fw-bold ">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
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

export default SignUp;
