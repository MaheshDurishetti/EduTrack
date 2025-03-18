import React from "react";
import "./Footer.css"; // Import CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <h2>EduTrack - Your Learning Companion</h2>
      <p>
        Empowering students with real-time progress tracking and personalized
        learning paths.
      </p>
      <p>Stay ahead with interactive courses, smart analytics, and career guidance.</p>

      {/* Social Media Links */}
      <div className="social-icons">
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">LinkedIn</a>
      </div>

      <p>Contact: support@edutrack.com | Phone: +91 98765 43210</p>
      <p>&copy; 2025 EduTrack. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
