import React, { useRef, useState } from "react";
import { Link, Route, Routes, useNavigate, useLocation } from "react-router-dom";

import Achievements from "./Components/Achivements/Achivements";
import "./Components/Achivements/Achivements.css";

import "./App.css";
import "./assets/nav.css";

import "./Components/Footer/Footer.css";
import img1 from "./assets/Images/img1.jpg";
import Footer from "./Components/Footer/Footer";

import Courses from "./Components/Courses/Courses";
import "./Components/Courses/Courses.css";

import AboutUs from "./Components/About/About";
import "./Components/About/About.css";

import Signup from "./Registration/Signup";
import "./Registration/Signup.css";

import Login from "./Registration/Login";
import "./Registration/Login.css";

import LoginSelection from "./Components/LoginSelection/LoginSelection";
import "./Components/LoginSelection/LoginSelection.css";

import Error from "./Components/Error/Error";
import "./Components/Error/Error.css";

import TeacherDashboard from "./Components/Dashboard/Teacher";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import StudentDashboard from "./Components/Dashboard/Student";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const aboutRef = useRef(null);
  const coursesRef = useRef(null);
  const achievementsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsNavbarOpen(false); // collapse after click
    }
  };

  const hideNavbar = ["/signup", "/login", "/login-selection", "/error"].includes(location.pathname);

  return (
    <div className="div">
      {!hideNavbar && (
        <nav className="navbar navbar-expand-lg navbar-dark custom-navbar fixed-top">
          <div className="container">
            <Link className="navbar-brand d-flex align-items-center" to="/">
              <img
                className="imgg"
                src="/Smspro.jpg.webp"
                alt="Logo"
                style={{ height: "50px", width: "auto" }}
              />
              <span className="ms-2">EduTrack</span>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setIsNavbarOpen(!isNavbarOpen)}
              aria-controls="navbarNav"
              aria-expanded={isNavbarOpen}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`collapse navbar-collapse ${isNavbarOpen ? "show" : ""}`} id="navbarNav">
              <ul className="navbar-nav ms-auto text-center">
                <li className="nav-item">
                  <button className="nav-link btn btn-link" onClick={() => scrollToSection(aboutRef)}>About</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn btn-link" onClick={() => scrollToSection(coursesRef)}>Courses</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn btn-link" onClick={() => scrollToSection(achievementsRef)}>Achievements</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn btn-link" onClick={() => scrollToSection(contactRef)}>Contact</button>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn btn-link" onClick={() => {
                    setIsNavbarOpen(false);
                    navigate("/login-selection");
                  }}>Login</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="image-text-container">
                <img className="wall img-fluid" id='wp' src={img1} alt="Wall" />
                <div className="text-content text-center p-3">
                  <h2>Welcome to EduTrack</h2>
                  <p><strong>"Education is the most powerful weapon which you can use to change the world."</strong> – Nelson Mandela.</p>
                </div>
              </div>

              <div className="container mt-5">
                <div ref={aboutRef} className="section"><AboutUs /></div>
                <div ref={coursesRef} className="section"><Courses /></div>
                <div ref={achievementsRef} className="section"><Achievements /></div>
                <div ref={contactRef} className="section"><Footer /></div>
              </div>
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/login-selection" element={<LoginSelection />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Error />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
