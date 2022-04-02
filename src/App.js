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
      </main>

      <section>
        <div className="social-links"></div>
      </section>
    </div>
  );
}

export default App;
