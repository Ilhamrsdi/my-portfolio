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
  <div className="hero-content">
    <div className="hero-text">
      <h1 className="animate">
        Hi, I’m <span className="highlight">Ilham</span>
      </h1>
      <p className="animate delay-1">
        Web Developer | Cloud Enthusiast | DevOps Learner
      </p>
    </div>

    {/* Card Foto */}
    <div className="hero-card animate delay-2">
      <img
        src="/images/profile.jpg" // ganti dengan foto kamu
        alt="Profile Ilham"
        className="hero-photo"
      />
    </div>
  </div>
</section>


      {/* About Me */}
      <section id="about" className="about animate delay-2">
        <h2>About Me</h2>
        <p>
         Halo, saya Ilham, seorang fresh graduate dari program studi Teknik Teknologi Rekayasa Perangkat Lunak. Selama masa studi, saya mendalami konsep pemrograman, manajemen basis data, analisis sistem, serta implementasi metodologi pengembangan perangkat lunak. Saya memiliki pengalaman dalam membuat aplikasi berbasis web dan mobile, baik secara individu maupun tim, serta terbiasa menggunakan teknologi seperti Laravel, React, dan PostgreSQL.

Sebagai lulusan baru, saya bersemangat untuk terus belajar dan beradaptasi dengan teknologi terbaru. Saya percaya bahwa kemampuan problem solving, kerja tim, dan keinginan untuk berkembang akan menjadi modal berharga untuk berkontribusi di dunia kerja, khususnya di bidang software engineering
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
