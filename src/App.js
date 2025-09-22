// src/App.js
import React, { useState } from "react";
import "./App.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import "./Contact.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Ilham Portfolio</h2>

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
        {/* Teks atas */}
        <h1 className="animate">
          Hi, I’m <span className="highlight">Ilham</span>
        </h1>

        {/* Foto di tengah */}
        <div className="hero-card animate delay-1">
          <img
            src="/images/profile.jpg"
            alt="Profile Ilham"
            className="hero-photo"
          />
        </div>

        {/* Teks bawah */}
        <p className="animate delay-2">
          Web Developer | Cloud Enthusiast | DevOps Learner
        </p>
      </div>
    </section>

      {/* About Me */}
      <section id="about" className="about animate delay-2">
        <h2>About Me</h2>
        <p>
         Halo, saya Ilham, Lulusan D-4 Teknologi Rekayasa Perangkat Lunak dari Politeknik Negeri
Banyuwangi dengan pengalaman di bidang pengembangan aplikasi
berbasis web dan mobile. Terbiasa bekerja sama dengan tim maupun
individu dalam pengembangan perangkat lunak modern serta memiliki
pengalaman dalam membangun sistem berbasis Laravel, React, dan
RESTful API. Saya memiliki motivasi tinggi untuk terus belajar teknologi baru
dan berkontribusi dalam pengembangan solusi digital yang efektif.
        </p>
      </section>

      {/* Projects */}
    <div className="projects-grid">
  <div className="project-card animate">
    <img 
      src="/images/project/pmb.png" 
      alt="Sistem PMB Cloud" 
      className="project-image" 
    />
    <div className="project-content">
      <h3>PMB</h3>
      <p><strong>Sistem Penerimaan Mahasiswa Baru</strong> berbasis cloud, 
      mempermudah proses pendaftaran, verifikasi, dan pengelolaan data 
      calon mahasiswa secara online.</p>
    </div>
  </div>

  <div className="project-card animate">
    <img 
      src="/images/project/rsudblambangan.png" 
      alt="To Do List App" 
      className="project-image" 
    />
    <div className="project-content">
      <h3>Portal RSUD Blambangan</h3>
      <p><strong>Web Portal RSUD Blambangan</strong> dengan CRUD di Laravel, 
      dirancang untuk mempermudah pengelolaan aktivitas dan informasi  harian 
      dengan UI yang sederhana.</p>
    </div>
  </div>
  </div>

      {/* Contact */}
       <section id="contact" className="contact animate delay-2">
      <h2>Contact Me</h2>

      <div className="contact-item">
        <MdEmail className="contact-icon" />
        <a href="mailto:muhamadilhamrosidi0707@gmail.com">
          muhamadilhamrosidi0707@gmail.com
        </a>
      </div>

      <div className="contact-item">
        <FaLinkedin className="contact-icon" />
        <a
          href="https://www.linkedin.com/in/muhamad-ilham-rosidi-216880232/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn Profile
        </a>
      </div>
    </section>
      {/* Footer */}
      <footer className="footer animate delay-2">
        <p>© 2025 Ilham Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
