import "./App.css";
import profile from "./assets/profile.png";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <nav className="navbar">
        <div>
          <a href="#photoNdetail">Portfolio</a>
        </div>
        <div className="nav_buttons">
          <a href="#about_me"> about me</a>
          <a href="#skills"> my skills</a>
          <a href="#contact"> contact me</a>
        </div>
      </nav>
      <section id="photoNdetail">
        <nav className="infobox_detail">
          <h1>Hello, </h1>
          <h1>
            I'm <span style={{ color: "blueviolet" }}>Shubham</span>
          </h1>
          <h1>Full Stack Developer</h1>
        </nav>
        <nav className="infobox_Photo">
          <img className="profile_img" src={profile} />
        </nav>
      </section>
      <section id="about_me">
        <div>
          <h1 className="headings">About me</h1>
          <About />
        </div>
      </section>
      <section id="skills">
        <div>
          <h1 className="headings">Skills</h1>
          <Skills />
        </div>
      </section>
      <section id="contact">
        <div>
          <h1 className="headings">Contact</h1>
          <Contact />
        </div>
      </section>
    </>
  );
}

export default App;
