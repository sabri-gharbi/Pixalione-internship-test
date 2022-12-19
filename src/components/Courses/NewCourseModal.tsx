import * as React from "react";
import { Modal, Form, Button, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Course } from "../../types/Course";

interface Props {
  show: boolean;
  onHide: () => void;
  onSubmit: (data: Course) => void;
}

const NewCourseModal: React.FC<Props> = ({ show, onHide, onSubmit }) => {
  const { register, handleSubmit, reset } = useForm<Course>({
    shouldUnregister: true,
  });

  return (
    <Modal show={show} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Create New Course</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Row className="mb-2">
            <Form.Group as={Col}>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" {...register("name")} required />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Student Number</Form.Label>
              <Form.Control
                type="number"
                {...register("numStudents")}
                required
              />
            </Form.Group>
          </Row>

          <Row className="mb-2">
            <Form.Group as={Col}>
              <Form.Label>Category</Form.Label>
              <Form.Control type="text" {...register("category")} required />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" {...register("subject")} required />
            </Form.Group>
          </Row>

          <Row className="mb-2">
            <Form.Group as={Col}>
              <Form.Label>Start Time</Form.Label>
              <Form.Control type="time" {...register("startTime")} required />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>End Time</Form.Label>
              <Form.Control type="time" {...register("endTime")} required />
            </Form.Group>
          </Row>

          <Form.Group className="mb-2">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} {...register("description")} />
          </Form.Group>

          <div className="d-flex justify-content-end">
            <Button
              variant="secondary"
              onClick={() => {
                reset();
                onHide();
              }}
            >
              Cancel
            </Button>
            <Button variant="primary" type="submit" className="ms-2">
              Create
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default NewCourseModal;
