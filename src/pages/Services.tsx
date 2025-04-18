import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FooterSection from '../components/home/FooterSection';

const Services = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, []);

  const handleServiceClick = (link: string) => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
    navigate(link);
  };

  const services = [
    {
      title: "Career Counseling",
      desc: "Expert guidance to choose the right career path based on skills, interests, and future goals.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
      link: "/services/career-counseling"
    },
    {
      title: "Visa Assistance",
      desc: "Consultative support for visa applications, documentation, and navigating immigration protocols.",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop",
      link: "/services/visa-assistance"
    },
    {
      title: "Test Preparation",
      desc: "Coaching for IELTS, TOEFL, and PTE to help students achieve high scores for university admissions.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
      link: "/services/test-preparation"
    },
    {
      title: "Study Abroad",
      desc: "Assistance in studying in Dubai, the UK, and Malta with personalized course paths and university details.",
      image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      link: "/services/study-abroad"
    },
    {
      title: "Admission Guide",
      desc: "Support in university selection, application preparation, and scholarship information.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
      link: "/services/admission-guide"
    },
    {
      title: "Insurance",
      desc: "Help in obtaining health and travel insurance for student safety and visa compliance.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop",
      link: "/services/insurance"
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
            <h1 className="text-3xl sm:text-4xl font-bold">Our Services</h1>
            <p className="mt-2 text-sm sm:text-base">
              <Link to="/" className="hover:text-[#FF8E3C] transition-colors duration-300">Home</Link> / Services
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
          <h1 className="text-[#FF8E3C] text-2xl mb-2">Our Solution</h1>
          <h2 className="text-[#074293] text-3xl font-bold">We Provide High Quality Educational Service</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => handleServiceClick(service.link)}
              className="bg-white overflow-hidden shadow-md hover:-translate-y-1 transition-all duration-300 group border border-[#074293] cursor-pointer"
            >
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"/>
                <div className="absolute bottom-0 w-full h-4">
                  <div className="h-2 bg-[#074293]"></div>
                  <div className="h-2 bg-[#FF8E3C]"></div>
                </div>
              </div>
              <div className="p-4 sm:p-6 bg-white text-center">
                <h3 className="text-[#074293] mb-2 sm:mb-4 text-lg sm:text-xl font-semibold">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8 sm:mt-12 space-x-2">
          {[1, 2, 3, 4].map((num) => (
            <button 
              key={num} 
              className="w-8 h-8 sm:w-10 sm:h-10 border border-[#074293] text-[#074293] rounded-md hover:bg-[#074293] hover:text-white transition-colors duration-300 text-sm sm:text-base"
            >
              {num}
            </button>
          ))}
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default Services;









