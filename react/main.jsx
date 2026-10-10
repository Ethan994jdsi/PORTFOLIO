////////////////****************************************NAV SECTION */
function Navbar() {
  return (
    <ul>
      <li>
        <a href="#home-content">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#projects">Projects</a>
      </li>
      <li>
        <a href="#skills">Skills</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>
  );
}
ReactDOM.createRoot(document.getElementById("Navbar")).render(<Navbar />);

////////////////****************************************HERO SECTION */

function HeroSection() {
  return (
    <div id="home-content" class="hero-content">
      <p class="hero-label">Computer Science</p>
      <p class="hero-name">Ethan Andrew P. Kiocho</p>
      <p class="hero-about">Software engineer</p>
      <p class="hero-description">
        Passionate about creating innovative solutions through code.
      </p>
      <div class="button-group">
        <a href="#projects" class="btn-primary">
          View My Projects
        </a>
      </div>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("home")).render(<HeroSection />);

/********************PROJECT SECTION */

function SkillSection() {
  return (
    <div class="skills">
      <h3>Technologies</h3>
      <h2>Skills</h2>
      <p class="programming-header">Programming Languages</p>
      <div class="programming-skills">
        <ul>
          <li>C language</li>
          <li>Python</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </div>
      <p class="tools-header">Tools</p>
      <div class="tools-skills">
        <ul>
          <li>VS Code</li>
          <li>Git</li>
          <li>Github</li>
        </ul>
      </div>
      <p class="certification-header">Certification</p>
      <div class="certification-achievement">
        <ul>
          <li>NC II - CSS</li>
        </ul>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("skills")).render(<SkillSection />);

function EducationSection() {
  return (
    <section className="education-section">
      <h1>EDUCATION</h1>
      <h2>My Academic Journey</h2>
      <div className="timeline">
        <div className="timeline-item">
          <span className="timeline-dot-current"></span>
          <p className="current">CURRENT</p>
          <h3 className="current-header">
            Bachelor of Science in Computer Science
          </h3>
          <p className="current-school">Our Lady Of Fatima University</p>
          <p className="current-description">
            Pursuing a degree in Computer Science, building a strong foundation
            in programming, web development, and problem-solving through
            hands-on projects.
          </p>
        </div>
        <div className="shs">
          <span className="timeline-dot-shs"></span>
          <p className="senior-high">SENIOR HIGH SCHOOL</p>
          <p className="senior-high-header">CSS Strand</p>
          <p className="senior-high-school">
            Caloocan City Business Highschool
          </p>
          <p className="senior-high-description">
            Completed Senior High School under Computer System Servicing (CSS)
            strand
          </p>
        </div>
        <div className="jhs">
          <span className="timeline-dot-jhs"></span>
          <p className="junior-high">JUNIOR HIGH SCHOOL</p>
          <p className="junior-high-header">Basic Education</p>
          <p className="junior-high-school">
            St. Joseph College of Novaliches, Inc.
          </p>
          <p className="junior-high-description">
            Completed elementary and junior high school education.
          </p>
        </div>
      </div>
    </section>
  );
}

ReactDOM.createRoot(document.getElementById("education")).render(
  <EducationSection />,
);

function ContactsSection() {
  return (
    <>
      <h2>GET IN TOUCH</h2>
      <h1>Contact Me</h1>
      <p>
        Have a project in mind or just want to connect? Feel free to reach out.
      </p>
      <div className="contacts">
        <div className="email">
          <h1>EMAIL</h1>
          <p className="email-section">ekiocho03@gmail.com</p>
        </div>
        <div className="github">
          <h1>GITHUB</h1>
          <p className="github-section">github.com/Ethan994jdsi</p>
        </div>
        <div className="linkedin">
          <h1>LINKEDIN</h1>
          <p className="linkedin-section">Ethan Kiocho</p>
        </div>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("contact")).render(
  <ContactsSection />,
);
