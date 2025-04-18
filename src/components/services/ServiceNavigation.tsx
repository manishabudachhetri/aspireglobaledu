import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const services = [
  { name: "Career Counseling", path: "/services/career-counseling" },
  { name: "Visa Assistance", path: "/services/visa-assistance" },
  { name: "Test Preparation", path: "/services/test-preparation" },
  { name: "Study Abroad", path: "/services/study-abroad" },
  { name: "Admission Guide", path: "/services/admission-guide" },
  { name: "Insurance", path: "/services/insurance" },
];

const ServiceNavigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleServiceClick = (path: string) => {
    if (location.pathname !== path) {
      window.scrollTo({
        top: 0,
        behavior: 'instant'
      });
      navigate(path);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {services.map((service, index) => (
        <div
          key={index}
          onClick={() => handleServiceClick(service.path)}
          className={`text-left px-6 py-4 border transition-all duration-300 cursor-pointer ${
            location.pathname === service.path
              ? "bg-[#FF8E3C] text-white"
              : "bg-[#FFE5D0] text-[#074293] hover:bg-[#074293] hover:text-white"
          }`}
        >
          {service.name}
        </div>
      ))}
    </div>
  );
};

export default ServiceNavigation;