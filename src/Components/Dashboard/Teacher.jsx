// TeacherDashboard.jsx
import React, { useState } from "react";
import "./TeacherDashboard.css";

const TeacherDashboard = () => {
  const [assignment, setAssignment] = useState("");
  const [assignmentsList, setAssignmentsList] = useState([]);
  const [announcement, setAnnouncement] = useState("");
  const [announcementsList, setAnnouncementsList] = useState([]);

  const handleAssignmentSubmit = () => {
    if (assignment.trim()) {
      setAssignmentsList([...assignmentsList, assignment]);
      setAssignment("");
    }
  };

  const handleAnnouncementSubmit = () => {
    if (announcement.trim()) {
      setAnnouncementsList([...announcementsList, announcement]);
      setAnnouncement("");
    }
  };

  return (
    <div className="teacher-dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="logo">EduTrack</h2>
        <ul>
          <li>📊 Dashboard</li>
          <li>📝 Assign Work</li>
          <li>📁 Submissions</li>
          <li>📅 Attendance</li>
          <li>📢 Announcements</li>
          <li>⚙ Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="dashboard-content">
        <h2>Welcome, Mr. Smith</h2>

        {/* Profile */}
        <div className="profile-card">
          <img src="src/assets/AchiversPics/images (1).jpg" alt="Teacher" />
          <h3>Mr. Smith</h3>
          <p>Mathematics Teacher</p>
        </div>

        {/* Assign Work */}
        <div className="assign-work">
          <h3>Assign Work to Students</h3>
          <input
            type="text"
            placeholder="Enter assignment title or description"
            value={assignment}
            onChange={(e) => setAssignment(e.target.value)}
          />
          <button onClick={handleAssignmentSubmit}>Assign</button>

          {assignmentsList.length > 0 && (
            <ul className="assigned-list">
              {assignmentsList.map((item, index) => (
                <li key={index}>📝 {item}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Announcements */}
        <div className="announcement-section">
          <h3>Post Announcement</h3>
          <input
            type="text"
            placeholder="Type your announcement here"
            value={announcement}
            onChange={(e) => setAnnouncement(e.target.value)}
          />
          <button onClick={handleAnnouncementSubmit}>Post</button>

          {announcementsList.length > 0 && (
            <ul className="announcement-list">
              {announcementsList.map((msg, index) => (
                <li key={index}>📢 {msg}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Attendance Overview */}
        <div className="class-performance">
          <h3>Class Overview</h3>
          <div className="performance-box">
            <p>👨‍🎓 Total Students: <strong>30</strong></p>
            <p>✅ Avg Attendance: <strong>85%</strong></p>
            <p>📈 Avg Score: <strong>78%</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
