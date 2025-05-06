import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSignup = async (role) => {
    setError(""); // Reset error message on submit

    const { username, email, password } = formData;

    // Check if all fields are filled
    if (username && email && password) {
      try {
        // Send a POST request with the signup data
        const res = await axios.post(`http://localhost:8081/api/auth/signup/${role}`, {
          name: username,
          email,
          password,
        });

        // Alert user about successful signup and navigate to the respective dashboard
        alert(`${role.charAt(0).toUpperCase() + role.slice(1)} signup successful!`);
        navigate(`/${role}-dashboard`); // Redirect to respective dashboard

      } catch (err) {
        console.log("Signup failed:", err);
        
        // Check if error response is available and provide detailed feedback
        if (err.response && err.response.data) {
          setError(err.response.data.message || "Signup failed. Please try again.");
        } else {
          setError("Signup failed. Please try again.");
        }
      }
    } else {
      setError("All fields are required."); // Error if any field is missing
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>

        {/* Error Message Display */}
        {error && <p className="error-message">{error}</p>}

        {/* Form Submission */}
        <form>
          <div className="input-group">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Role-based Signup Buttons */}
          <button type="button" onClick={() => handleSignup("student")} className="signup-button">
            Sign Up as Student
          </button>
          <button type="button" onClick={() => handleSignup("teacher")} className="signup-button">
            Sign Up as Teacher
          </button>
          <button type="button" onClick={() => handleSignup("admin")} className="signup-button">
            Sign Up as Admin
          </button>
        </form>

        {/* Login Link */}
        <p className="login-link">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
