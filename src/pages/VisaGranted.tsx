import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import FooterSection from '../components/home/FooterSection';
import vg1Image from '../assets/images/vg1.jpg';
import vg2Image from '../assets/images/vg2.jpg';
import vg3Image from '../assets/images/vg3.jpg';
import vg4Image from '../assets/images/vg4.jpg';
import vg5Image from '../assets/images/vg5.jpg';
import vg6Image from '../assets/images/vg6.jpg';
import vg7Image from '../assets/images/vg7.jpg';
import vg8Image from '../assets/images/vg8.jpg';
import vg9Image from '../assets/images/vg9.jpg';
import vg10Image from '../assets/images/vg10.jpg';

const VisaGranted: React.FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, []);

  const students = [
    { image: vg1Image },
    { image: vg2Image },
    { image: vg3Image },
    { image: vg4Image },
    { image: vg5Image },
    { image: vg6Image },
    { image: vg7Image },
    { image: vg8Image },
    { image: vg9Image },
    { image: vg10Image }
  ];

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(students.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
     
      window.scrollTo({
        top: 128,
        behavior: 'smooth'
      });
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
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-[#FF8E3C] text-2xl mb-2">Visa Granted</h1>
          <h2 className="text-[#074293] text-3xl font-bold">Success Students</h2>
        </div>

        {/* Grid of Student Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {paginatedStudents.map((student, i) => (
            <div
              key={i}
              className="bg-white shadow-lg border border-gray-200"
            >
              <div className="h-96 overflow-hidden">
                <img
                  src={student.image}
                  alt="Student visa granted"
                  className="w-full h-full object-cover"
                />
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
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
            <button
              key={pageNum}
              className={`p-2 border min-w-[40px] ${
                currentPage === pageNum 
                  ? "bg-[#074293] text-white" 
                  : "bg-white hover:bg-gray-100 transition-colors"
              }`}
              onClick={() => handlePageChange(pageNum)}
            >
              {pageNum}
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



