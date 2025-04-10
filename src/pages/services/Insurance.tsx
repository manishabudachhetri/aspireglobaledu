import React from "react";
import { Link } from "react-router-dom";

export default function Insurance() {
  const services = [
    { name: "Career Counseling", path: "/services/career-counseling" },
    { name: "Visa Assistance", path: "/services/visa-assistance" },
    { name: "Test Preparation", path: "/services/test-preparation" },
    { name: "Study Abroad", path: "/services/study-abroad" },
    { name: "Admission Guide", path: "/services/admission-guide" },
    { name: "Insurance", path: "/services/insurance" },
  ];

  const insuranceTypes = [
    {
      type: "Health Insurance",
      benefits: [
        "Comprehensive medical coverage",
        "Emergency medical services",
        "Prescription drug coverage",
        "Mental health support"
      ]
    },
    {
      type: "Travel Insurance",
      benefits: [
        "Trip cancellation coverage",
        "Lost baggage protection",
        "Emergency evacuation",
        "24/7 travel assistance"
      ]
    },
    {
      type: "Student Insurance",
      benefits: [
        "Academic fee protection",
        "Personal liability coverage",
        "Study interruption coverage",
        "Personal belongings protection"
      ]
    }
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
            <h1 className="text-3xl sm:text-4xl font-bold">
              Insurance
            </h1>
            <p className="mt-2 text-sm sm:text-base">
              <Link to="/" className="hover:text-[#FF8E3C] transition-colors duration-300">Home</Link> / 
              <Link to="/services" className="hover:text-[#FF8E3C] transition-colors duration-300"> Services</Link> / 
              Insurance
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
          <div className="col-span-1 order-2">
            <div className="flex flex-col gap-2">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className={`text-left px-6 py-4 border  transition-all duration-300 ${
                    service.name === "Insurance"
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
          <div className="col-span-2 space-y-6 order-1">
            <div>
              <p className="text-[#FF8E3C] text-xl mb-2">Our Services</p>
              <h2 className="text-[#074293] text-3xl font-bold mb-6">Insurance</h2>
            </div>
            
            <div className="relative h-[400px] overflow-hidden  mb-8">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
                alt="Insurance"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 w-full">
               
              </div>
            </div>

            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                We understand the importance of having proper insurance coverage while studying abroad. Our insurance services ensure that students have comprehensive protection throughout their educational journey, meeting both visa requirements and personal needs.
              </p>

              <h3 className="text-[#074293] text-xl font-semibold mt-8 mb-4">Insurance Coverage Options:</h3>
              
              <div className="grid grid-cols-1 gap-4">
                {insuranceTypes.map((insurance: { type: string; benefits: string[] }, index: number) => (
                  <div key={index} className="border border-[#074293] p-6 rounded-lg">
                    <h4 className="text-[#074293] font-semibold">{insurance.type}</h4>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      {insurance.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-gray-600">{benefit}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




