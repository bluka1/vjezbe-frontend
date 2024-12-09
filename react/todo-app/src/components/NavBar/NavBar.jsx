import { NavLink } from "react-router";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <nav className="nav">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-link nav-link-active" : "nav-link"
        }
      >
        All
      </NavLink>
      <NavLink
        to="/active"
        className={({ isActive }) =>
          isActive ? "nav-link nav-link-active" : "nav-link"
        }
      >
        Active
      </NavLink>
      <NavLink
        to="/completed"
        className={({ isActive }) =>
          isActive ? "nav-link nav-link-active" : "nav-link"
        }
      >
        Completed
      </NavLink>
    </nav>
  );
};
