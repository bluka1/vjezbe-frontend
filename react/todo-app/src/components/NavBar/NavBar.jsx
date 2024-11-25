import "./NavBar.css";

export const NavBar = () => {
  return (
    <nav className="nav">
      <button className="nav-link nav-link-active">All</button>
      <button className="nav-link">Active</button>
      <button className="nav-link">Completed</button>
    </nav>
  );
};
