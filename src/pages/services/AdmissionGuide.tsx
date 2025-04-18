import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FooterSection from '../../components/home/FooterSection';
import ServiceNavigation from '../../components/services/ServiceNavigation';

export default function AdmissionGuide() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, []);

  const admissionServices = [
    { title: "University Selection", features: ["Profile evaluation", "Course matching", "University shortlisting"] },
    { title: "Application Process", features: ["Document preparation", "Application submission", "Follow-up support"] },
    { title: "Scholarship Guidance", features: ["Scholarship identification", "Application assistance", "Documentation support"] },
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
            <h1 className="text-3xl sm:text-4xl font-bold">Admission Guide</h1>
            <p className="mt-2 text-sm sm:text-base flex justify-end">
              <Link to="/" className="hover:text-[#FF8E3C] transition-colors duration-300">Home</Link> / 
              <Link to="/services" className="hover:text-[#FF8E3C] transition-colors duration-300"> Services</Link> / 
              Admission Guide
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
            <ServiceNavigation />
          </div>

          {/* Left Side - Content */}
          <div className="md:col-span-2 space-y-6 order-1">
            <div>
              <p className="text-[#FF8E3C] text-xl mb-2">Our Services</p>
              <h2 className="text-[#074293] text-3xl font-bold mb-6">Admission Guide</h2>
            </div>
            
            <div className="relative h-[400px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
                alt="Admission Guide"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                Our admission guidance service provides comprehensive support throughout the university application process. We help students make informed decisions about their education and assist them in securing admissions to their desired institutions.
              </p>

              {admissionServices.map((service, index) => (
                <div key={index} className="mt-8">
                  <h3 className="text-[#074293] text-xl font-semibold mb-4">{service.title}</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}





