import { Fragment } from "react";
import {Link,Outlet} from "react-router-dom"
const Layout = () => {
  return (
    <Fragment>
    <nav className="navbar navbar-expand navbar-light bg-light">
      <ul className="nav navbar-nav">
        <li className="nav-item">
        <Link to="/" className="nav-link">List</Link>
        </li>
        <li className="nav-item">
        <Link to="/todos/create" className="nav-link">Create</Link>
         </li>
      </ul>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Layout;
