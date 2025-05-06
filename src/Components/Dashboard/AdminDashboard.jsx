import React, { useState } from "react";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="logo">EduTrack</h2>
        <ul>
          <li onClick={() => setActiveTab("dashboard")}>📊 Dashboard</li>
          <li onClick={() => setActiveTab("teachers")}>👨‍🏫 Manage Teachers</li>
          <li onClick={() => setActiveTab("students")}>👨‍🎓 Manage Students</li>
          <li onClick={() => setActiveTab("courses")}>📚 Courses</li>
          <li onClick={() => setActiveTab("settings")}>⚙ Settings</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="dashboard-content">
        {activeTab === "dashboard" && (
          <>
            <h2>Welcome, Admin</h2>
            <div className="profile-card">
              <img src="https://via.placeholder.com/100" alt="Admin" />
              <h3>Admin Name</h3>
              <p>System Administrator</p>
            </div>
            <div className="stats-container">
              <div className="stat-box">
                <h3>👨‍🏫 Teachers</h3>
                <p>15</p>
              </div>
              <div className="stat-box">
                <h3>👨‍🎓 Students</h3>
                <p>250</p>
              </div>
              <div className="stat-box">
                <h3>📚 Courses</h3>
                <p>20</p>
              </div>
            </div>
          </>
        )}

        {activeTab === "teachers" && (
          <div className="manage-section">
            <h2>Manage Teachers</h2>
            <p>Here you can add, remove, or update teacher details.</p>
          </div>
        )}

        {activeTab === "students" && (
          <div className="manage-section">
            <h2>Manage Students</h2>
            <p>Here you can add, remove, or update student details.</p>
          </div>
        )}

        {activeTab === "courses" && (
          <div className="manage-section">
            <h2>Manage Courses</h2>
            <p>Here you can add, update, or remove courses.</p>
          </div>
        )}

        {activeTab === "settings" && (
          <div className="manage-section">
            <h2>Settings</h2>
            <p>Change system settings, manage passwords, and more.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
