import { Form, Button } from "react-bootstrap";
import {
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form/dist/types";
import { User } from "../../types/User";

export type ProfileFormProps = {
  onSubmit: (data: User) => void;
  register: UseFormRegister<User>;
  handleSubmit: UseFormHandleSubmit<User>;
  disabled?: boolean;
};

const ProfileForm: React.FC<ProfileFormProps> = ({
  onSubmit,
  register,
  handleSubmit,

  disabled = false,
}) => {
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <fieldset disabled={disabled}>
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" {...register("firstName")} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" {...register("lastName")} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Nick Name</Form.Label>
          <Form.Control type="text" {...register("nickName")} />
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
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Birthday</Form.Label>
          <Form.Control type="date" {...register("birthDay")} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update
        </Button>
      </fieldset>
    </Form>
  );
};

export default ProfileForm;
