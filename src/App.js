import "./App.css";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <div className="short-intro">
          <p>Abhishek</p>
        </div>
        <div className="circles circles-1"></div>
        <div className="circles circles-2"></div>
        <div className="circles circles-3"></div>
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
