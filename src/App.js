import "./App.css";
import Navbar from "./components/Navbar";
import Social from "./components/Social";
import developer from "./images/developer_building.webp";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>

      <main>
        <div className="names">
          <div className="about-me-card">
            <h4>
              <p>Hi, there!</p>
              <br />
              I'm Abhishek currently a third year undergraduate, <br />
              aspiring software engineer having and making in <br />
              passion for backend development. My aim is always <br />
              to improve and produce good quality apps and <br />
              websites using different technolgies out there.
              <br /> I love building and designing products.
            </h4>
          </div>
          <div className="photo">
            <p id="headline">Always building & developing</p>
            <img src={developer} alt="developer" id="my-photo" />
          </div>
        </div>
      </main>

      <section>
        <Social />
      </section>

      <Footer />
    </div>
  );
}

export default App;
