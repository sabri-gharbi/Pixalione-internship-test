import { Link } from "react-router-dom";

export type LayoutProps = {
  children: JSX.Element;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Course Mangment System</span>
        </div>
        <ul>
          <li>
            <Link to="/login">Home</Link>
          </li>
        </ul>
      </nav>

      <div className="container">{children}</div>
    </>
  );
};

export default Layout;
