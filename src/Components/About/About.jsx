import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About <span className="highlight">EduTrack</span></h2>
      <p className="about-description">
        <strong>EduTrack</strong> is an innovative learning platform that helps students 
        track their learning progress, gain real-time insights, and enhance their 
        skills through personalized courses. Our mission is to make education 
        accessible, interactive, and effective!
      </p>

      {/* Image Section */}
      <div className="about-image">
        <img src="https://via.placeholder.com/600x300?text=EduTrack+Learning" alt="EduTrack Learning" />
      </div>

      <h3 className="about-subtitle">Why Choose EduTrack?</h3>
      <ul className="about-list">
        <li>🎯 Personalized Learning Paths</li>
        <li>📊 Real-Time Progress Tracking</li>
        <li>👩‍🏫 Expert Mentorship & Career Guidance</li>
        <li>📚 Latest Tech Courses (Java, Python, MERN, React.js, etc.)</li>
        <li>🏆 Industry-Recognized Certifications</li>
      </ul>

      <h3 className="about-subtitle">Our Mission</h3>
      <p className="about-mission">
        We aim to revolutionize the way students learn by combining 
        <span className="highlight"> technology, AI-driven insights, and expert mentorship</span>.  
        With EduTrack, learning becomes more engaging, career-focused, and efficient.
      </p>
    </div>
  );
};

export default About;
