import "./App.css";
import Navbar from "./Navbar";
import my_photo from "./images/abhi_photo.png";

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
          <div className="photo">
            <img src={my_photo} alt="abhishek" id="myphoto" />
          </div>
        </div>
      </main>

      <section>
        <div className="social-links">
          <ul>
            <li>
              <a
                target="_blank"
                href="https://github.com/abhishekY2401/"
                className="github"
                rel="noreferrer"
              >
                <i class="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/abhishek-yadav-1a1808205/"
                className="linkedin"
                rel="noreferrer"
              >
                <i class="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://twitter.com/AbhiY2852"
                className="twitter"
                rel="noreferrer"
              >
                <i class="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://abhi2048.hashnode.dev/"
                className="hashnode"
                rel="noreferrer"
              >
                <i class="fa-brands fa-hashnode"></i>
              </a>
            </li>
          </ul>
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
