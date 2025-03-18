import React from "react";

const achievements = [
  {
    name: "John Doe",
    company: "Google",
    package: "₹12 LPA",
    image: "https://via.placeholder.com/150?text=John+Doe",
  },
  {
    name: "Jane Smith",
    company: "Amazon",
    package: "₹15 LPA",
    image: "https://via.placeholder.com/150?text=Jane+Smith",
  },
  {
    name: "Michael Johnson",
    company: "Microsoft",
    package: "₹18 LPA",
    image: "https://via.placeholder.com/150?text=Michael",
  },
  {
    name: "Emily Brown",
    company: "Facebook",
    package: "₹14 LPA",
    image: "https://via.placeholder.com/150?text=Emily",
  },
  {
    name: "David Wilson",
    company: "Apple",
    package: "₹20 LPA",
    image: "https://via.placeholder.com/150?text=David",
  },
  {
    name: "Sophia Martinez",
    company: "Netflix",
    package: "₹13 LPA",
    image: "https://via.placeholder.com/150?text=Sophia",
  },
];

const Achievements = () => {
  return (
    <div className="achievements-container">
      <h2 className="achievements-title">
        <span className="highlight">Our Students' Achievements</span> 🎉
      </h2>
      <p className="achievements-description">
        We are proud to share the success stories of our students who have been placed 
        in top companies with outstanding salary packages! 🚀
      </p>
      <div className="achievements-grid">
        {achievements.map((student, index) => (
          <div key={index} className="achievement-card">
            <img src={student.image} alt={student.name} className="student-image" />
            <h3 className="student-name">{student.name}</h3>
            <p className="student-company">🏢 <strong>{student.company}</strong></p>
            <p className="student-package">💰 <strong>{student.package}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
