import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";

export type LayoutProps = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutProps) => {
  const { user, logout } = useAuth();
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
              {user ? (
                <NavDropdown
                  title={`${user.firstName} ${user.lastName}`}
                  id="basic-nav-dropdown"
                >
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

      <div className="container" style={{ height: "90vh" }}>
        {children}
      </div>

      <footer className="text-center bg-light text-muted">
        <div className="p-3">
          made with &hearts; by:
          <a className="ms-2" href="mailto:sabrigharbi99@gmail.com">
            Sabri Gharbi
          </a>
        </div>
      </footer>
    </>
  );
};

export default Layout;
