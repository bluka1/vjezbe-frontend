import { Layout } from "../Layout/Layout";
import "./Header.css";

export const Header = () => {
  return (
    <Layout background="dark">
      <header className="header">
        <h1>
          About<span>Me.</span>
        </h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Service</a>
          <a href="#">Portfolio</a>
          <a href="#">Resume</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </nav>
      </header>
    </Layout>
  );
};
