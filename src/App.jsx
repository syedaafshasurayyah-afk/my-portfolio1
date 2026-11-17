
import { useState } from "react";
import "./App.css";

const skills = [
  { name: "HTML5", type: "Frontend" },
  { name: "CSS3", type: "Frontend" },
  { name: "JavaScript ES6+", type: "Frontend" },
  { name: "React", type: "Learning" },
  { name: "Git & GitHub", type: "Tools" },
  { name: "PostgreSQL", type: "Basics" },
  { name: "Microsoft Excel", type: "Other" },
  { name: "Microsoft Word", type: "Other" },
  { name: "PowerPoint", type: "Other" },
];


const projects = [
  {
    number: "01",
    name: "My Portfolio",
    description:
      "A personal portfolio website designed to showcase my skills, projects, education and journey as a Front-End Developer.",
    technologies: ["React", "CSS", "JavaScript"],
  },
  {
    number: "02",
    name: "Career Nest",
    description:
      "A job search platform designed to help users explore job opportunities through a clean and user-friendly interface.",
    technologies: ["React", "CSS", "JavaScript"],
  },
  {
    number: "03",
    name: "E-commerce Website",
    description:
      "An online shopping website featuring product listings and a user-friendly shopping experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [emailPopup, setEmailPopup] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          S.AFSHA
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </header>


      {emailPopup && (
        <div
          className="email-overlay"
          onClick={() => setEmailPopup(false)}
        >
          <div
            className="email-popup"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Contact Afsha by email"
          >
            <button
              className="popup-close"
              onClick={() => setEmailPopup(false)}
              aria-label="Close popup"
            >
              ×
            </button>

            <span className="section-number">LET'S CONNECT</span>

            <h2>Let's Talk<span>.</span></h2>

            <p>You can reach me through email.</p>

            <a
              href="mailto:syedaafshasurayyah@gmail.com"
              className="email-link"
            >
              syedaafshasurayyah@gmail.com ↗
            </a>
          </div>
        </div>
      )}


      {/* HERO */}
      <section className="hero section" id="home">
        <div className="hero-glow"></div>

        <div className="hero-content">
          <p className="eyebrow">
            HELLO, WELCOME TO MY PORTFOLIO
          </p>

          <h1>
            S. Afsha
            <br />
            <span className="highlight">Surayyah.</span>
          </h1>

          <h2>Front-End Developer</h2>

          <p className="hero-description">
            I am passionate about building modern,
            responsive and user-friendly websites.
            Turning ideas into meaningful digital experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              Explore My Work ↗
            </a>

            <button
              className="btn btn-outline"
              onClick={() => setEmailPopup(true)}
            >
              Let's Talk
            </button>
          </div>


        </div>

        <div className="hero-bottom">
          <span>DESIGN · DEVELOPMENT · CREATIVITY</span>
          <a href="#about">SCROLL TO EXPLORE ↓</a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section about-section" id="about">
        <div className="section-heading">
          <span className="section-number">01 / ABOUT</span>
          <h2>Getting to know <span>me.</span></h2>
        </div>

        <div className="about-grid">
          <div className="about-big-text">
            A developer who loves creating things for the web.
          </div>

          <div className="about-details">
            <p>
              I'm S. Afsha Surayyah, a Front-End Developer
              passionate about building modern and responsive
              websites.
            </p>

            <p>
              I enjoy learning web technologies, exploring
              creative designs and improving my development
              skills by building practical projects.
            </p>

            <p>
              My goal is to grow as a Front-End Developer
              and contribute to creating useful digital
              experiences.
            </p>

            <div className="about-location">
              <span>LOCATION</span>
              <strong>Hyderabad, India</strong>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section skills-section" id="skills">
        <div className="section-heading">
          <span className="section-number">02 / SKILLS</span>
          <h2>Tools I work <span>with.</span></h2>
          <p>
            Technologies and tools I use or am currently learning.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={skill.name}>
              <span className="skill-number">
                0{index + 1}
              </span>
              <h3>{skill.name}</h3>
              <span className="skill-type">{skill.type}</span>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section projects-section" id="projects">
        <div className="section-heading">
          <span className="section-number">03 / PROJECTS</span>
          <h2>Things I'm <span>building.</span></h2>
          <p>
            My development projects and practical learning journey.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-top">
                <span>{project.number}</span>
              </div>

              <div className="project-visual">
                <span>PROJECT {project.number}</span>
                <div className="project-visual-mark">✳</div>
              </div>

              <h3>{project.name}</h3>

              <p>{project.description}</p>

              <div className="technology-list">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="project-note">
          Live demos and GitHub links will be added
          as each project is completed.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section className="section experience-section" id="experience">
        <div className="section-heading">
          <span className="section-number">04 / EXPERIENCE</span>
          <h2>My professional <span>journey.</span></h2>
        </div>

        <div className="experience-card">
          <div className="experience-marker"></div>

          <div>
            <span className="experience-label">
              INTERNSHIP · COMPLETED
            </span>

            <h3>Digital Marketing Internship</h3>

            <p>
              Completed a Digital Marketing internship.
              Further details about the organization,
              duration and responsibilities can be added later.
            </p>
          </div>
        </div>
      </section>

      {/* EDUCATION & CERTIFICATIONS */}
      <section className="section education-section" id="education">
        <div className="section-heading">
          <span className="section-number">05 / EDUCATION</span>
          <h2>My learning <span>journey.</span></h2>
        </div>

        <div className="education-grid">
          <div className="education-card">
            <span className="card-label">EDUCATION</span>
            <h3>B.Sc Life Sciences</h3>
            <p>St. Joseph College</p>
          </div>

          <div className="education-card">
            <span className="card-label">CERTIFICATIONS</span>
            <h3>Digital Marketing</h3>
            <p>Certification completed</p>
          </div>

          <div className="education-card">
            <span className="card-label">CERTIFICATIONS</span>
            <h3>Medical Coding</h3>
            <p>Certification completed</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact-section" id="contact">
        <span className="section-number">06 / CONTACT</span>

        <h2>
          Have a project
          <br />
          <span>in mind?</span>
        </h2>

        <p>
          I'm looking forward to exploring Front-End
          Developer opportunities and connecting with
          people who love building for the web.
        </p>

        <a
          href="mailto:syedaafshasurayyah@gmail.com"
          className="btn btn-primary contact-button"
        >
          Email Me ↗
        </a>

        <div className="contact-email">
          <span>EMAIL ADDRESS</span>
          <a href="mailto:syedaafshasurayyah@gmail.com">
            syedaafshasurayyah@gmail.com ↗
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="logo">
          S.AFSHA
        </a>


        <p>Designed & built with care by S. Afsha Surayyah.</p>

        <a href="#home">Back to top ↑</a>

        <span className="copyright">
          © {new Date().getFullYear()} All rights reserved.
        </span>
      </footer>
    </main>
  );
}

export default App;
