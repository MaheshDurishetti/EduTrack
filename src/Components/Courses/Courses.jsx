import React from "react";
import "./Courses.css"; // Import CSS file

const courses = [
  {
    name: "Java",
    image: "/images/java.jpg",
  },
  {
    name: "Python",
    image: "/images/python.jpg",
  },
  {
    name: "MERN Stack",
    image: "/images/mern.jpg",
  },
  {
    name: "React.js",
    image: "/images/reactjs.jpg",
  },
  {
    name: "JavaScript",
    image: "/images/javascript.jpg",
  },
  {
    name: "HTML & CSS",
    image: "/images/html-css.jpg",
  }
];

const Courses = () => {
  return (
    <div className="courses-container">
      <h2 className="courses-title">
        Explore Our <span className="highlight">Top Courses</span> 🚀
      </h2>
      <p className="courses-description">
        Upgrade your skills with industry-relevant courses. Learn from experts and 
        boost your career today! 📚✨
      </p>
      <div className="courses-grid">
        {courses.map((course, index) => (
          <div key={index} className="course-card">
            <img src={course.image} alt={course.name} className="course-image" />
            <h3 className="course-name">{course.name}</h3>
            <button className="enroll-button">Enroll Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
