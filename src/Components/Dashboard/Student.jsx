// Student.jsx
import React, { useState } from "react";
import "./StudentDashboard.css";

const StudentDashboard = () => {
  const [file, setFile] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      setUploadedFiles([...uploadedFiles, file.name]);
      setFile(null);
      alert("File uploaded successfully!");
    }
  };

  return (
    <div className="student-dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="logo">EduTrack</h2>
        <ul>
          <li>📊 Dashboard</li>
          <li>📁 Upload Work</li>
          <li>📅 Attendance</li>
          <li>⚙ Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="dashboard-content">
        <h2>Welcome, John Doe</h2>

        {/* Student Profile */}
        <div className="profile-card">
          <img src="AchiversPics/images (1).jpg" alt="Student" />
          <h3>John Doe</h3>
          <p>Grade 10 - Section A</p>
        </div>

        {/* Upload Work */}
        <div className="upload-section">
          <h3>Upload Your Work</h3>
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleUpload}>Upload</button>

          {uploadedFiles.length > 0 && (
            <div className="uploaded-files">
              <h4>Uploaded Files:</h4>
              <ul>
                {uploadedFiles.map((fileName, index) => (
                  <li key={index}>📎 {fileName}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Attendance Section */}
        <div className="attendance-section">
          <h3>Your Attendance</h3>
          <p>📆 Total Days: <strong>120</strong></p>
          <p>✅ Days Present: <strong>108</strong></p>
          <p>📉 Attendance Percentage: <strong>90%</strong></p>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
