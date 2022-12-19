import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { SignInPayload } from "../../types/SignInPayload";
import { Form, Button } from "react-bootstrap";

interface Props {
  changeAuthMode: () => void;
}

const SignInForm: React.FC<Props> = ({ changeAuthMode }) => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { handleSubmit, register } = useForm<SignInPayload>();

  const onSubmit = async (data: SignInPayload) => {
    try {
      await login(data);
      navigate("/courses");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 shadow border border-white rounded-3"
    >
      <h3 className="text-center mb-1 fw-bold ">Sign In</h3>
      <div className="text-center">
        Not registered yet?{" "}
        <span className="link-primary" onClick={changeAuthMode}>
          Sign Up
        </span>
      </div>
      <Form.Group controlId="formUsername" className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          {...register("userName")}
          required
        />
      </Form.Group>
      <Form.Group controlId="formPassword" className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          {...register("password")}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="mb-3">
        Login
      </Button>
    </Form>
  );
};

export default SignInForm;
