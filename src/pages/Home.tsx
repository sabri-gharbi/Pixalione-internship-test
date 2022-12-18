import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={10} lg={8}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center mb-4">
                Welcome to the Course Management System
              </Card.Title>
              <Card.Text className="text-center mb-4">
                This is the home page of the Course Management System. You can
                use this system to view, add, and edit courses.
              </Card.Text>
              <Row className="justify-content-center mx-5">
                <Button variant="primary" onClick={() => navigate("/courses")}>
                  View Courses
                </Button>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
