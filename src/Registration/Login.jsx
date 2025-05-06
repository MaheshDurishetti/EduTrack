import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // This will apply the styling you provided

const Login = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (role) => {
    setError("");

    try {
      const url = `http://localhost:8081/api/auth/login/${role}`;
      const res = await axios.post(url, formData);
      const user = res.data;

      // Navigate based on user role
      if (user.role === "STUDENT") {
        navigate("/student-dashboard");
      } else if (user.role === "TEACHER") {
        navigate("/teacher-dashboard");
      } else if (user.role === "ADMIN") {
        navigate("/admin-dashboard");
      } else {
        setError("Unknown user role.");
      }
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}

        {/* Form Submission */}
        <form>
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
          
          {/* Role-based Login Buttons */}
          <button type="button" onClick={() => handleLogin("student")} className="login-button">
            Login as Student
          </button>
          <button type="button" onClick={() => handleLogin("teacher")} className="login-button">
            Login as Teacher
          </button>
          <button type="button" onClick={() => handleLogin("admin")} className="login-button">
            Login as Admin
          </button>
        </form>

        <p className="signup-link">
          Don’t have an account?{" "}
          <span onClick={() => navigate("/signup")}>Sign up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
