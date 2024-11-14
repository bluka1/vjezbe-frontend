import { NavLink, Routes, Route, Link, Navigate } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import NotFound from "./NotFound";
import Homepage from "./Homepage";

function App() {
  return (
    <div>
      <nav>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "navlink active" : "navlink"
          }
        >
          ABOUT
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "navlink active" : "navlink"
          }
        >
          CONTACT
        </NavLink>
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive ? "navlink active" : "navlink"
          }
        >
          PORTFOLIO
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/about" Component={About} />
        <Route path="/contact" Component={Contact} />
        <Route path="/portfolio" Component={Portfolio} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </div>
  );
}

export default App;
