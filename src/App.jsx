import React, { useRef } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Loginpage from "./Components/Loginpage"; // Import Login Page Component
import Home from "./Components/Home";
import "./App.css";
import "./assets/nav.css";
import StatsBanner from "./Components/Banner";
import Footer from "./Components/Footer";
// import CourseCard from "./Components/CourseCard";
// import Courses from "./Components/Course";
function App() {
  const aboutRef = useRef(null);
  const coursesRef = useRef(null);
  const achievementsRef = useRef(null);
  const contactRef = useRef(null);

  const navigate = useNavigate(); // For navigating to Login page

  // Scroll to a specific section
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="div">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar fixed-top ">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <div className="pt-2">
              <img
                className="imgg"
                src="/Smspro.jpg.webp"
                alt="Logo"
                style={{ height: "50px", width: "auto" }}
              />
              <p>EduTrack</p>
            </div>
          </Link>
                  
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto" id="navbarNav">
              <li className="nav-item">
                <Link className="nav-link" to="#" onClick={() => scrollToSection(aboutRef)}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#" onClick={() => scrollToSection(coursesRef)}>
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#" onClick={() => scrollToSection(achievementsRef)}>
                  Achievements
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#" onClick={() => scrollToSection(contactRef)}>
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                {/* Navigate to Login Page */}
                <button className="nav-link" onClick={() => navigate("/loginpage")}>
                  SignUp
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
       

      {/* Routes for Navigation */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginpage" element={<Loginpage />} />
      </Routes>

      {/* Image with Text on Right Side */}
      <div className="image-text-container">
        <img className="wall" src="src/assets/Images/img1.jpg" alt="Wall" />
        <div className="text-content">
          <h2>Welcome to EduTrack</h2>
          <p><strong>"Education is the most powerful weapon which you can use to change the world."</strong> – Nelson Mandela.</p>
        </div>
      </div>

      {/* Sections */}
      <div className="container mt-5">
        {/* About Section */}
        <div ref={aboutRef} className="section">
          <h2>About Us</h2>
          <p>Welcome to EduTrack, your go-to platform for educational resources.</p>
        </div>

        {/* Courses Section */}
        <div ref={coursesRef} className="section">
          <h2>Our Courses</h2>
          <p>We offer a variety of courses including Web Development, Data Science, and more!</p>
        </div>

        {/* Achievements Section */}
        <div ref={achievementsRef} className="section">
          <h2>Achievements</h2>
          <p>We have trained over 10,000 students worldwide with an excellent success rate.</p>
        </div>

        {/* Contact Section */}
        <div ref={contactRef} className="section">
          
          {/* <h2>Contact Us</h2>
          <p>Email: support@edutrack.com | Phone: +91 9876543210</p> */}
        </div>
      </div>
    <StatsBanner/>
    {/* <CourseCard/> 
   <Courses/> */}
    <Footer/>
  
    </div>
  );
}

export default App;
