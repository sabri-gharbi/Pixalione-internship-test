import { Form, Button, Row, Col } from "react-bootstrap";
import {
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form/dist/types";
import { User } from "../../types/User";

interface Props {
  onSubmit: (data: User) => void;
  register: UseFormRegister<User>;
  handleSubmit: UseFormHandleSubmit<User>;
  disabled?: boolean;
}

const ProfileForm: React.FC<Props> = ({
  onSubmit,
  register,
  handleSubmit,
  disabled = false,
}) => {
  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 shadow border border-white rounded-3"
    >
      <fieldset disabled={disabled}>
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
          <Form.Label>Nick Name</Form.Label>
          <Form.Control type="text" {...register("nickname")} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Gender</Form.Label>
          <Form.Check
            type="radio"
            label="Male"
            value="male"
            {...register("gender")}
          />
          <Form.Check
            type="radio"
            label="Female"
            value="female"
            {...register("gender")}
          />
          <Form.Check
            type="radio"
            label="Other"
            value="other"
            {...register("gender")}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Birthday</Form.Label>
          <Form.Control type="date" {...register("birthday")} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update
        </Button>
      </fieldset>
    </Form>
  );
};

export default ProfileForm;
