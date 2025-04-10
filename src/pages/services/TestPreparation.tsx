import React from "react";
import { Link } from "react-router-dom";

export default function TestPreparation() {
  const services = [
    { name: "Career Counseling", path: "/services/career-counseling" },
    { name: "Visa Assistance", path: "/services/visa-assistance" },
    { name: "Test Preparation", path: "/services/test-preparation" },
    { name: "Study Abroad", path: "/services/study-abroad" },
    { name: "Admission Guide", path: "/services/admission-guide" },
    { name: "Insurance", path: "/services/insurance" },
  ];

  const testTypes = [
    { name: "IELTS", description: "International English Language Testing System" },
    { name: "TOEFL", description: "Test of English as a Foreign Language" },
    { name: "PTE", description: "Pearson Test of English" },
    { name: "GRE", description: "Graduate Record Examination" },
    { name: "GMAT", description: "Graduate Management Admission Test" },
    { name: "SAT", description: "Scholastic Assessment Test" },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header Section */}
      <div 
        className="relative w-full h-[300px] sm:h-[400px] bg-cover bg-center mt-20 sm:mt-32"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1462536943532-57a629f6cc60?w=3000&auto=format&fit=crop&q=100&ixlib=rb-4.0.3")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-35 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl sm:text-4xl font-bold">Test Preparation</h1>
            <p className="mt-2 text-sm sm:text-base flex justify-end">
              <Link to="/" className="hover:text-[#FF8E3C] transition-colors duration-300">Home</Link> / 
              <Link to="/services" className="hover:text-[#FF8E3C] transition-colors duration-300"> Services</Link> / 
              Test Preparation
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 w-full">
          <div className="h-2 bg-[#074293]"></div>
          <div className="h-2 bg-[#FF8E3C]"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Right Side - Services Navigation */}
          <div className="md:col-span-1 order-2">
            <div className="flex flex-col gap-2">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className={`text-left px-6 py-4 border  transition-all duration-300 ${
                    service.name === "Test Preparation"
                      ? "bg-[#FF8E3C] text-white"
                      : "bg-[#FFE5D0] text-[#074293] hover:bg-[#074293] hover:text-white"
                  }`}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Left Side - Content */}
          <div className="md:col-span-2 space-y-6 order-1">
            <div>
              <p className="text-[#FF8E3C] text-xl mb-2">Our Services</p>
              <h2 className="text-[#074293] text-3xl font-bold mb-6">Test Preparation</h2>
            </div>
            
            <div className="relative h-[400px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop"
                alt="Test Preparation"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                We offer comprehensive test preparation courses designed to help students achieve their target scores in various standardized tests required for international education.
              </p>

              <h3 className="text-[#074293] text-xl font-semibold mt-8 mb-4">Available Test Preparation Courses:</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {testTypes.map((test, index) => (
                  <div key={index} className="border border-[#074293] p-4">
                    <h4 className="text-[#074293] font-semibold">{test.name}</h4>
                    <p className="text-gray-600 text-sm">{test.description}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-[#074293] text-xl font-semibold mt-8 mb-4">Our Preparation Features:</h3>
              
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Experienced instructors</li>
                <li>Comprehensive study materials</li>
                <li>Practice tests and mock exams</li>
                <li>Small batch sizes</li>
                <li>Personalized attention</li>
                <li>Regular performance tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


