import React, { useRef } from "react";
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
import './Components/LoginSelection/LoginSelection.css'
function App() {
  const aboutRef = useRef(null);
  const coursesRef = useRef(null);
  const achievementsRef = useRef(null);
  const contactRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="div">
      {/* Show Navbar only if NOT on Signup/Login/LoginSelection page */}
      {!["/signup", "/login", "/login-selection"].includes(location.pathname) && (
        <nav className="navbar navbar-expand-lg navbar-dark custom-navbar fixed-top">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <div className="pt-2">
                <img className="imgg" src="/Smspro.jpg.webp" alt="Logo" style={{ height: "50px", width: "auto" }} />
                <p>EduTrack</p>
              </div>
            </Link>

            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto" id="navbarNav">
                <li className="nav-item">
                  <Link className="nav-link" to="#" onClick={() => scrollToSection(aboutRef)}>About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#" onClick={() => scrollToSection(coursesRef)}>Courses</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#" onClick={() => scrollToSection(achievementsRef)}>Achievements</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#" onClick={() => scrollToSection(contactRef)}>Contact</Link>
                </li>
                <li className="nav-item">
                  <button className="nav-link" onClick={() => navigate("/login-selection")}>Login</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}

      {/* Routes for Navigation */}
      <Routes>
        <Route path="/login" element={<Login />} />
        
  <Route path="/login-selection" element={<LoginSelection />} />
  <Route path="/signup" element={<Signup />} />


      </Routes>

      {/* Show homepage content only if NOT on Signup/Login/LoginSelection page */}
      {location.pathname === "/" && (
        <>
          <div className="image-text-container">
            <img className="wall" src={img1} alt="Wall" />
            <div className="text-content">
              <h2>Welcome to EduTrack</h2>
              <p><strong>"Education is the most powerful weapon which you can use to change the world."</strong> – Nelson Mandela.</p>
            </div>
          </div>

          <div className="container mt-5">
            <div ref={aboutRef} className="section"><AboutUs /></div>
            <div ref={coursesRef} className="section"><Courses /></div>
            <div ref={achievementsRef} className="section"><Achievements /></div>
            <div ref={contactRef} className="section"></div>
          </div>

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
