import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavDropdown, Row, Col } from "react-bootstrap";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";

interface Props {
  children: JSX.Element;
}

const Layout: React.FC<Props> = ({ children }) => {
  const { curUser, logout } = useAuth();
  return (
    <>
      <Navbar expand="md" bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Course Managment System
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/courses">
                Courses
              </Nav.Link>
            </Nav>
            <Nav>
              {curUser ? (
                <NavDropdown title={`${curUser.role}`} id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/profile">
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={logout}>logout</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link as={Link} to="/auth">
                  login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="mb-4" style={{ minHeight: "87vh", display: "flex" }}>
        <Container>
          <Row>
            <Col>{children}</Col>
          </Row>
        </Container>
      </div>

      <div className=" text-center bg-light text-muted p-3 ">
        made with &hearts; by:
        <a className="ms-2" href="mailto:sabrigharbi99@gmail.com">
          Sabri Gharbi
        </a>
      </div>
    </>
  );
};

export default Layout;
