import React from "react";

function Home() {
  return (
    <div className="home-container">
      <img
        src={`${process.env.PUBLIC_URL}/student.jpg`}
        alt="Student profile"
        className="student-image"
      />

      <h1>Antony Franklin</h1>

      <p className="intro">
        Hello! I am a student passionate about technology,
        programming, and web development. I enjoy learning
        new skills and building creative projects using React.
      </p>
    </div>
  );
}

export default Home;
