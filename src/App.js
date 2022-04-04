import "./App.css";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <div className="names">
          <p id="name">Abhishek Yadav</p>
          <h4>
            Hey, there👋 I'm Abhishek Yadav - Aspiring Software and Product
            Engineer
            <br />
            Currently, I am in second year of my university, pursuing Bachelors
            of Engineering in IT.
            <br />I have experience in building websites using different
            technologies with Python and <br />
            JavaScript libraries and MySQL database, having a main interest in
            backend development.
          </h4>
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
          <a href="/">
            <i class="bi bi-arrow-right"></i>
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
