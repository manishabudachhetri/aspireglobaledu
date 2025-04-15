import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import FooterSection from '../components/home/FooterSection';

const VisaGranted: React.FC = () => {
  const students = [
    {
      name: "Student 1",
      destination: "United Kingdom",
      university: "University of Manchester",
      course: "MSc Computer Science",
      image: "https://images.unsplash.com/photo-1544168190-79c17527004f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      name: "Student 2",
      destination: "Dubai",
      university: "Dubai Business School",
      course: "MBA International Business",
      image: "https://images.unsplash.com/photo-1525748822304-6807cb1348ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      name: "Student 3",
      destination: "Malta",
      university: "University of Malta",
      course: "BSc Digital Marketing",
      image: "https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    }
  ].concat(Array.from({ length: 21 }, (_, i) => ({
    name: `Student ${i + 4}`,
    destination: ["USA", "UK", "Canada", "Australia", "Germany"][i % 5],
    university: [
      "Harvard University",
      "Oxford University",
      "University of British Columbia",
      "University of Melbourne",
      "Technical University of Munich"
    ][i % 5],
    course: [
      "Master of Business Administration",
      "Bachelor of Computer Science",
      "Master of Engineering",
      "Bachelor of Arts",
      "Master of Science"
    ][i % 5],
    image: [
      "https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    ][i % 5]
  })));

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(students.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const paginatedStudents = students.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col w-full">
      {/* Header Section */}
      <div 
        className="relative w-full h-[400px] bg-cover bg-center mt-32"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1462536943532-57a629f6cc60?w=3000&auto=format&fit=crop&q=100&ixlib=rb-4.0.3")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-35 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold">Visa Granted </h1>
            <p className="mt-2">
              <Link to="/" className="hover:text-[#FF8E3C]">Home</Link> / Visa Granted
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 w-full">
          <div className="h-2 bg-[#074293]"></div>
          <div className="h-2 bg-[#FF8E3C]"></div>
        </div>
      </div>

     {/* Services Section */}
     <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-[#FF8E3C] text-2xl mb-2">Visa Granted</h1>
          <h2 className="text-[#074293] text-3xl font-bold">Success Students</h2>
        </div>


        {/* Grid of Student Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {paginatedStudents.map((student, i) => (
            <div
              key={i}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200"
            >
              <div className="h-72 overflow-hidden">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#074293] mb-3">{student.name}</h3>
                <div className="space-y-2 text-gray-600">
                  <p><span className="font-medium text-[#074293]">Destination:</span> {student.destination}</p>
                  <p><span className="font-medium text-[#074293]">University:</span> {student.university}</p>
                  <p><span className="font-medium text-[#074293]">Course:</span> {student.course}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-end items-center space-x-2 mt-12">
          <button
            className="border p-2 disabled:opacity-50 hover:bg-gray-100 transition-colors"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              className={`p-2 border min-w-[40px] ${
                currentPage === i + 1 
                  ? "bg-[#074293] text-white" 
                  : "bg-white hover:bg-gray-100 transition-colors"
              }`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="border p-2 disabled:opacity-50 hover:bg-gray-100 transition-colors"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default VisaGranted;









