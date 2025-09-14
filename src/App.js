// src/App.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">MyPortfolio</h2>

        {/* Toggle Button */}
        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>

        <ul className={isOpen ? "nav-links active" : "nav-links"}>
          <li><a href="#hero" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hi, I’m <span className="highlight">Ilham</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Web Developer | Cloud Enthusiast | DevOps Learner
        </motion.p>
      </section>

      {/* About Me */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          Saya seorang developer yang suka membuat aplikasi modern dengan fokus
          pada clean code, user experience, dan cloud technology.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="projects">
        <h2>My Projects</h2>
        <div className="project-grid">
          <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
            <h3>Project 1</h3>
            <p>Sistem Penerimaan Mahasiswa Baru berbasis cloud.</p>
          </motion.div>
          <motion.div className="project-card" whileHover={{ scale: 1.05 }}>
            <h3>Project 2</h3>
            <p>Aplikasi CBT (Computer Based Test) dengan Laravel.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <p>Email: ilham@example.com</p>
        <p>LinkedIn: linkedin.com/in/ilham</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Ilham Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
