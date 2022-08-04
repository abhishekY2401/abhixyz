import "./Navbar.css";
import Sunlight from "../images/Sunlight";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div id="logo">
        <h1 id="my-logo">
          <span>-</span>a<span>-</span>
        </h1>
      </div>
      <nav>
        <ul>
          <li className="projects">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="blog">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="contact">
            <Link to="/contact-me">Contact me</Link>
          </li>
          <li>
            <a href="/">
              <Sunlight class="sun" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
