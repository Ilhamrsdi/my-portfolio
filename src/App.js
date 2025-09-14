// src/App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">MyPortfolio</h2>

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#hero" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>

        {/* Hamburger Icon */}
        <div
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <h1 className="animate">
          Hi, I’m <span className="highlight">Ilham</span>
        </h1>
        <p className="animate delay-1">
          Web Developer | Cloud Enthusiast | DevOps Learner
        </p>
      </section>

      {/* About Me */}
      <section id="about" className="about animate delay-2">
        <h2>About Me</h2>
        <p>
          Saya seorang developer yang suka membuat aplikasi modern dengan fokus
          pada clean code, user experience, dan cloud technology.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="projects animate delay-2">
        <h2>My Projects</h2>
        <div className="project-grid">
          <div className="project-card animate">
            <h3>Project 1</h3>
            <p>Sistem Penerimaan Mahasiswa Baru berbasis cloud.</p>
          </div>
          <div className="project-card animate delay-1">
            <h3>Project 2</h3>
            <p>Aplikasi CBT (Computer Based Test) dengan Laravel.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact animate delay-2">
        <h2>Contact Me</h2>
        <p>Email: ilham@example.com</p>
        <p>LinkedIn: linkedin.com/in/ilham</p>
      </section>

      {/* Footer */}
      <footer className="footer animate delay-2">
        <p>© 2025 Ilham Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
