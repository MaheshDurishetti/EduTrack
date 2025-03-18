import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSelection.css";

const LoginSelection = () => {
  const navigate = useNavigate();
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true); // Add fade-in animation on mount
  }, []);

  const handleLoginClick = (role) => {
    navigate(`/signup?role=${role}`);
  };

  return (
    <div className={`login-selection-container ${fadeIn ? "fade-in" : ""}`}>
      <h2 className="login-selection-title">Choose Your Login Type</h2>
      <div className="login-options">
        <div className="login-card student" onClick={() => handleLoginClick("student")}>
          <i className="fas fa-user-graduate"></i>
          <h3>Student Login</h3>
          <p>Access courses, track progress, and learn effectively.</p>
        </div>
        <div className="login-card teacher" onClick={() => handleLoginClick("teacher")}>
          <i className="fas fa-chalkboard-teacher"></i>
          <h3>Teacher Login</h3>
          <p>Manage students, upload courses, and track performance.</p>
        </div>
        <div className="login-card admin" onClick={() => handleLoginClick("admin")}>
          <i className="fas fa-user-shield"></i>
          <h3>Admin Login</h3>
          <p>Control platform settings and manage users effectively.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSelection;
