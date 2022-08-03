import "./App.css";
import Navbar from "./components/Navbar";
import Social from "./components/Social";
import my_photo from "./images/abhi_photo.png";
import Footer from "./components/Footer";

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
              passion for backend development. My aim is always <br />
              to improve and produce good quality apps and <br />
              websites using different technolgies out there.
              <br /> I love building and designing products.
            </h4>
          </div>
          <div className="photo">
            <img src={my_photo} alt="abhishek" id="myphoto" />
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
