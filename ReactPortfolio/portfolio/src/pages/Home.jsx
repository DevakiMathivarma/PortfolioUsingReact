// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  // helper for skill bar animation props
  const barTransition = { duration: 1.1, ease: "easeOut" };
  const eduTransition = { duration: 0.6, ease: "easeOut" };

  return (
    <section>
      {/* ABOUT */}
      <div className="about-title" id="about">
        <h1 className="background-text">ABOUT ME</h1>
        <h2 className="main-heading">
          Know Me More
          <span className="underline" />
        </h2>
      </div>

      <div className="about-content">
        <div className="about-left">
          <h3>
            I'm <span className="highlight">Devaki Mathivarma</span>, a Python Full Stack Developer
          </h3>
            <p>
            I build production-ready, responsive web applications using modern front-end and back-end
            tools. My work focuses on creating smooth user experiences, clean code and maintainable
            architecture.Have a strong knowledge on HTML,CSS,Javascript,ReactJs,Django,Pyhton,SQL,Flask. I now work regularly with <strong>Django</strong> and <strong>Flask</strong> on
            the backend and <strong>React</strong> on the frontend. 
          </p>
          <p>
  I have built and deployed multiple real-world projects, a few highlights:
  <br />
  - An <strong>intuitive</strong>{" "}
  <a
    href="https://devakimathivarma.github.io/Event-planner/index.html"
    target="_blank"
    rel="noreferrer"
  >
    Event Planner Website
  </a>
  .
  <br />
  - A <strong>robust</strong>{" "}
  <a
    href="https://devakimathivarma.github.io/Grocery-Website/"
    target="_blank"
    rel="noreferrer"
  >
    Grocery E-commerce Platform
  </a>
  .
  <br />
  - A <strong>scalable</strong>{" "}
  <a
    href="https://vts-designers-14.onrender.com/"
    target="_blank"
    rel="noreferrer"
  >
    VTs Designers Portfolio
  </a>
  .
  <br />
  - A <strong>dynamic</strong>{" "}
  <a
    href="https://bakery-website-0wxi.onrender.com/"
    target="_blank"
    rel="noreferrer"
  >
    Bakery Website
  </a>
  .
  <br />
  - An <strong>elegant</strong>{" "}
  <a
    href="https://jewellery-website-1.onrender.com/"
    target="_blank"
    rel="noreferrer"
  >
    Jewellery Storefront
  </a>
  .
  <br />
  - A <strong>feature-rich</strong>{" "}
  <a
    href="https://bike-website-73qw.onrender.com/"
    target="_blank"
    rel="noreferrer"
  >
    Secondhand Bike Marketplace
  </a>
  .
  <br />
  - A <strong>modern</strong>{" "}
  <a
    href="https://shoe-e-commerce-website-frontend.vercel.app/"
    target="_blank"
    rel="noreferrer"
  >
    Shoe E-commerce Website
  </a>
  .
  <br />
  - A <strong>lightweight</strong>{" "}
  <a
    href="https://stationary-website-pc7c.onrender.com/"
    target="_blank"
    rel="noreferrer"
  >
    Stationary Site
  </a>
  .
</p>

        </div>

        <div className="about-right">
          <ul>
            <li>
              <strong>Name:</strong> Devaki
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:devakimathivarma@gmail.com">devakimathivarma@gmail.com</a>
            </li>
            <li>
              <strong>Age:</strong> 26
            </li>
            <li>
              <strong>From:</strong> Lakshmipuram, Theni
            </li>
          </ul>
        </div>
      </div>

      {/* RESUME */}
      <div className="about-title" id="resume">
        <h1 className="background-text">RESUME</h1>
        <h2 className="main-heading">
          Resume <span className="underline" />
        </h2>
      </div>

      <section className="education-section">
        <div className="section-header">
          <h2>My Education</h2>
        </div>

        <div className="education-list">
          {/* Education item 1 */}
          <motion.div
            className="education-item"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={eduTransition}
          >
            <span className="year-range">2016-2020</span>
            <h3>Bachelor Of Electrical and Electronics Enginerring CGPA-7.1%</h3>
            <h4>Thiagarajar College Of Engineering Madurai</h4>
            <p>Done Inplant Training in UNIQ Technology Coimbatore</p>
          </motion.div>

          {/* Education item 2 */}
          <motion.div
            className="education-item"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ ...eduTransition, delay: 0.12 }}
          >
            <span className="year-range">2015-2016</span>
            <h3>Senior Secondary(12th)</h3>
            <h4>Velammal Matric Higher Secondary School</h4>
            <p>Percentage: 94%</p>
          </motion.div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="skills-section" id="skills" aria-labelledby="skills">
        <h2 className="section-title" id="skills-title">
          My Skills
        </h2>

        <div className="skills-container">
          {/* Skill: HTML */}
          <div className="skill-item">
            <div className="skill-label">
              <span>HTML</span>
              <span>95%</span>
            </div>
            <div className="progress-bar">
              <motion.div
                className="progress"
                initial={{ width: "0%" }}
                whileInView={{ width: "95%" }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ ...barTransition, delay: 0.05 }}
                aria-valuenow={95}
                role="progressbar"
                aria-label="HTML skill level"
              />
            </div>
          </div>

          {/* Skill: CSS */}
          <div className="skill-item">
            <div className="skill-label">
              <span>CSS</span>
              <span>90%</span>
            </div>
            <div className="progress-bar">
              <motion.div
                className="progress"
                initial={{ width: "0%" }}
                whileInView={{ width: "90%" }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ ...barTransition, delay: 0.08 }}
                aria-valuenow={90}
                role="progressbar"
                aria-label="CSS skill level"
              />
            </div>
          </div>

          {/* Skill: JavaScript */}
          <div className="skill-item">
            <div className="skill-label">
              <span>JavaScript</span>
              <span>75%</span>
            </div>
            <div className="progress-bar">
              <motion.div
                className="progress"
                initial={{ width: "0%" }}
                whileInView={{ width: "75%" }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ ...barTransition, delay: 0.12 }}
                aria-valuenow={75}
                role="progressbar"
                aria-label="JavaScript skill level"
              />
            </div>
          </div>

          {/* Skill: Python */}
          <div className="skill-item">
            <div className="skill-label">
              <span>Python</span>
              <span>80%</span>
            </div>
            <div className="progress-bar">
              <motion.div
                className="progress"
                initial={{ width: "0%" }}
                whileInView={{ width: "80%" }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ ...barTransition, delay: 0.14 }}
                aria-valuenow={80}
                role="progressbar"
                aria-label="Python skill level"
              />
            </div>
          </div>

          {/* Skill: SQL */}
          <div className="skill-item">
            <div className="skill-label">
              <span>SQL</span>
              <span>80%</span>
            </div>
            <div className="progress-bar">
              <motion.div
                className="progress"
                initial={{ width: "0%" }}
                whileInView={{ width: "80%" }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ ...barTransition, delay: 0.16 }}
                aria-valuenow={80}
                role="progressbar"
                aria-label="SQL skill level"
              />
            </div>
          </div>

          {/* Skill: Bootstrap */}
          <div className="skill-item">
            <div className="skill-label">
              <span>Bootstrap</span>
              <span>99%</span>
            </div>
            <div className="progress-bar">
              <motion.div
                className="progress"
                initial={{ width: "0%" }}
                whileInView={{ width: "99%" }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ ...barTransition, delay: 0.18 }}
                aria-valuenow={99}
                role="progressbar"
                aria-label="Bootstrap skill level"
              />
            </div>
          </div>
           <div className="skill-item">
            <div className="skill-label">
              <span>React Js</span>
              <span>90%</span>
            </div>
            <div className="progress-bar">
              <motion.div
                className="progress"
                initial={{ width: "0%" }}
                whileInView={{ width: "90%" }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ ...barTransition, delay: 0.18 }}
                aria-valuenow={90}
                role="progressbar"
                aria-label="Bootstrap skill level"
              />
            </div>
          </div>
           <div className="skill-item">
            <div className="skill-label">
              <span>Django</span>
              <span>90%</span>
            </div>
            <div className="progress-bar">
              <motion.div
                className="progress"
                initial={{ width: "0%" }}
                whileInView={{ width: "90%" }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ ...barTransition, delay: 0.18 }}
                aria-valuenow={90}
                role="progressbar"
                aria-label="Bootstrap skill level"
              />
            </div>
          </div>
           <div className="skill-item">
            <div className="skill-label">
              <span>Flask</span>
              <span>90%</span>
            </div>
            <div className="progress-bar">
              <motion.div
                className="progress"
                initial={{ width: "0%" }}
                whileInView={{ width: "90%" }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ ...barTransition, delay: 0.18 }}
                aria-valuenow={90}
                role="progressbar"
                aria-label="Bootstrap skill level"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
