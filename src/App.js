import "./App.css";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <div className="names">
          <div className="about-me-card">
            <h4>
              <p>Hi, there!</p>
              <br />
              I'm Abhishek currently a third year undergraduate, <br />
              aspiring software engineer having and making in <br />
              passion for backend development, always trying to <br /> make the
              server secure, robust and handle any types
              <br /> of request. My aim is to produce good quality apps
              <br />
              and websites. I love building and designing products.
            </h4>
          </div>
        </div>
      </main>

      <section>
        <div className="social-links">
          <a
            target="_blank"
            href="https://github.com/abhishekY2401/"
            className="github"
            rel="noreferrer"
          >
            <i class="bi bi-github"></i>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/abhishek-yadav-1a1808205/"
            className="linkedin"
            rel="noreferrer"
          >
            <i class="bi bi-linkedin"></i>
          </a>
          <a
            target="_blank"
            href="https://twitter.com/AbhiY2852"
            className="twitter"
            rel="noreferrer"
          >
            <i class="bi bi-twitter"></i>
          </a>
          <a
            target="_blank"
            href="https://abhi2048.hashnode.dev/"
            className="hashnode"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="25"
              height="25"
            >
              <path
                fill="#fff"
                d="M35.19 171.1C-11.72 217.1-11.72 294 35.19 340.9L171.1 476.8C217.1 523.7 294 523.7 340.9 476.8L476.8 340.9C523.7 294 523.7 217.1 476.8 171.1L340.9 35.19C294-11.72 217.1-11.72 171.1 35.19L35.19 171.1zM315.5 315.5C282.6 348.3 229.4 348.3 196.6 315.5C163.7 282.6 163.7 229.4 196.6 196.6C229.4 163.7 282.6 163.7 315.5 196.6C348.3 229.4 348.3 282.6 315.5 315.5z"
              />
            </svg>
          </a>
        </div>
      </section>

      <div className="footer">
        <p>
          <span>&#169;</span> 2022 Abhishek Yadav.
        </p>
      </div>
    </div>
  );
}

export default App;
