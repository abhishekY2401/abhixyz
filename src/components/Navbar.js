import "./Navbar.css";
import Sunlight from "../images/Sunlight";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
            <a href="/" id="pro">
              Projects
            </a>
          </li>
          <li className="blog">
            <a href="https://abhi2048.hashnode.dev/" id="blogs">
              Blogs
            </a>
          </li>
          <li className="contact">
            <a href="/" id="me">
              Contact Me
            </a>
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
