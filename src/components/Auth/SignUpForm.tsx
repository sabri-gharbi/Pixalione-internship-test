import { Form, Button, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { SignUpPayload } from "../../types/SignUPPayload";

interface Props {
  changeAuthMode: () => void;
}

const SignUpForm: React.FC<Props> = ({ changeAuthMode }) => {
  const { handleSubmit, register } = useForm<SignUpPayload>();

  const onSubmit = async (data: SignUpPayload) => {
    console.log(data);
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 shadow border border-white rounded-3"
    >
      <Row className="mb-3">
        <h3 className="text-center mb-1 fw-bold ">Sign Up</h3>
        <div className="text-center">
          Already registered?{" "}
          <span className="link-primary" onClick={changeAuthMode}>
            Sign In
          </span>
          <br />
          <span className="text-danger">
            Registration does not work. Please login with one of the users
            specified in the readme file.
          </span>
        </div>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" {...register("username")} />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" {...register("password")} />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" {...register("firstName")} />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" {...register("lastName")} />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Label>Nickname</Form.Label>
        <Form.Control type="text" {...register("nickname")} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Birthday</Form.Label>
        <Form.Control type="date" {...register("birthday")} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Gender</Form.Label>
        <Form.Control as="select" {...register("gender")}>
          <option value="">Select a gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit" disabled>
        Sign Up
      </Button>
    </Form>
  );
};

export default SignUpForm;
