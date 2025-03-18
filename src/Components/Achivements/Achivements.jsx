import React from "react";

const achievements = [
  {
    name: "John Doe",
    company: "Google",
    package: "₹12 LPA",
    image: "src/assets/AchiversPics/images.jpg",
  },
  {
    name: "Jane Smith",
    company: "Amazon",
    package: "₹15 LPA",
    image: "src/assets/AchiversPics/images (2).jpg",
  },
  {
    name: "Michael Johnson",
    company: "Microsoft",
    package: "₹18 LPA",
    image: "src/assets/AchiversPics/images (3).jpg",
  },
  {
    name: "Emily Brown",
    company: "Facebook",
    package: "₹14 LPA",
    image: "src/assets/AchiversPics/images (4).jpg",
  },
  {
    name: "David Wilson",
    company: "Apple",
    package: "₹20 LPA",
    image: "src/assets/AchiversPics/images.jpg",
  },
  {
    name: "Sophia Martinez",
    company: "Netflix",
    package: "₹13 LPA",
    image: "src/assets/AchiversPics/images.jpg",
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
