import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <h1 id="my-logo">Abhi. Y</h1>
      </div>
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
          <li className="blog">
            <i class="bi bi-file-earmark"></i>
            <a href="/">Blogs</a>
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
