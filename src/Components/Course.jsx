import React from "react";
import CourseCard from "./CourseCard";

const courses = [
  {
    title: "Web Development Fundamentals",
    description: "Learn HTML, CSS, and JavaScript from scratch.",
    duration: "12 weeks",
    students: 1234,
    level: "Beginner",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
  },
  {
    title: "Data Science Essentials",
    description: "Master statistics, Python, and machine learning basics.",
    duration: "16 weeks",
    students: 856,
    level: "Intermediate",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
  },
  {
    title: "Mobile App Development",
    description: "Create apps using React Native and Firebase.",
    duration: "14 weeks",
    students: 945,
    level: "Advanced",
    imageUrl: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&q=80"
  },
  {
    title: "UI/UX Design",
    description: "Learn modern design tools and principles.",
    duration: "10 weeks",
    students: 678,
    level: "Intermediate",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80"
  }
];

const Courses = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Available Courses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of courses designed to help you achieve your learning goals and advance your career.
          </p>
        </div>
        
        {/* Apply Flexbox or Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Courses;
