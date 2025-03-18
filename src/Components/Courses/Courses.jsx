import React from "react";
import "./Courses.css"; // Import CSS file

const courses = [
  {
    name: "Java",
    image: "src/assets/CoursesImg/javapic.png",
  },
  {
    name: "Python",
    image: "src/assets/CoursesImg/pythonpic.jpg",
  },
  {
    name: "MERN Stack",
    image: "src/assets/CoursesImg/Mern.jpg",
  },
  {
    name: "React.js",
    image: "src/assets/CoursesImg/react.jpg",
  },
  {
    name: "JavaScript",
    image: "src/assets/CoursesImg/download (1).png",
  },
  {
    name: "HTML & CSS",
    image: "src/assets/CoursesImg/HtmlCSS.jpg",
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
