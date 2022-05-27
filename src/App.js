import "./App.css";
import Navbar from "./Navbar";
import Projects from "./Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <div className="names">
          <div className="about-me-card">
            <h1>💻 About me</h1>
            <div className="dash"></div>
            <h4>
              Hey, there 👋 <br />
              I'm Abhishek Yadav - Aspiring Software and Product Engineer
              <br />
              Currently, I am in second year of my university, <br /> pursuing
              Bachelors of Engineering in IT.
              <br />I have experience in building websites using different
              technologies <br />
              with Python and JavaScript libraries and MySQL database, having{" "}
              <br />a main interest in backend development.
            </h4>
          </div>
          <div className="view-work">
            <h1>View my work</h1>
            <br />
            <a href="/">
              <i class="bi bi-arrow-down-circle"></i>
            </a>
          </div>
        </div>
      </main>

      <section>
        <div className="social-links">
          <a href="https://github.com/abhishekY2401/" className="github">
            <i class="bi bi-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-yadav-1a1808205/"
            className="linkedin"
          >
            <i class="bi bi-linkedin"></i>
          </a>
          <a href="https://twitter.com/AbhiY2852" className="twitter">
            <i class="bi bi-twitter"></i>
          </a>
          <a href="/" className="arrow">
            <i class="bi bi-arrow-right"></i>
          </a>
        </div>
      </section>

      <Projects />
    </div>
  );
}

export default App;
