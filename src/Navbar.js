import "./Navbar.css";
import { ReactComponent as Logo } from "./Logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <Logo fill="#75ff54" stroke="#fff" id="logo" />
      <nav>
        <ul>
          <li className="work">
            <i class="bi bi-briefcase"></i>
            <a href="/">Work Experience</a>
          </li>
          <li className="projects">
            <i class="bi bi-code-square"></i>
            <a href="/">Projects</a>
          </li>
          <li className="about">
            <i class="bi bi-file-person"></i>
            <a href="/">About Me</a>
          </li>
          <li className="contact">
            <i class="bi bi-envelope"></i>
            <a href="/">Contact Me</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
