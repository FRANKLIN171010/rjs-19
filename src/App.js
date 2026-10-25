import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <h2>Student Profile</h2>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
