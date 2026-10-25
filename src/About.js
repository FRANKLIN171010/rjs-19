import React from "react";

function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>

      <section className="about-card">
        <h2>1. Academic Background</h2>
        <p>
          I am pursuing my undergraduate studies and learning
          programming, computer science, and web development.
        </p>
      </section>

      <section className="about-card">
        <h2>2. Projects</h2>
        <ul>
          <li>React Shopping Cart Application</li>
          <li>Calculator using React Hooks</li>
          <li>Student Profile Website using React Router</li>
        </ul>
      </section>

      <section className="about-card">
        <h2>3. Family Background</h2>
        <p>
          I come from a supportive family that encourages
          education, personal growth, and achieving my goals.
        </p>
      </section>

      <section className="about-card">
        <h2>4. Interests</h2>
        <ul>
          <li>Programming and web development</li>
          <li>Learning new technologies</li>
          <li>Listening to music</li>
          <li>Exploring creative ideas</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
