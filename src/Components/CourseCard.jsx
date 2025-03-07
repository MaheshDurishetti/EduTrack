import React from 'react';



import { Clock, Users, Trophy } from 'lucide-react';

const CourseCard = ({ title, description, duration, students, level, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 w-60 ok">
      {/* Small Image Size */}
      <div className="h-5 w-full overflow-hidden">
        <img src={imageUrl} alt={title} className="cc" />
      </div>

      <div className="p-3">
        <h3 className="text-md font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{description}</p>

        <div className="flex flex-wrap text-xs text-gray-700 mb-3">
          <div className="flex items-center w-1/2 mb-1">
            <Clock className="w-3 h-3 mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center w-1/2 mb-1">
            <Users className="w-3 h-3 mr-1" />
            <span>{students} students</span>
          </div>
          <div className="flex items-center w-full">
            <Trophy className="w-3 h-3 mr-1" />
            <span>{level}</span>
          </div>
        </div>

        <button className="w-full bg-blue-600 text-white text-xs py-2 rounded-md hover:bg-blue-700 transition duration-300">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
