import  { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FooterSection from '../../components/home/FooterSection';

export default function CareerCounseling() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, []);

  const handleServiceClick = (path: string) => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
    navigate(path);
  };

  const services = [
    { name: "Career Counseling", path: "/services/career-counseling" },
    { name: "Visa Assistance", path: "/services/visa-assistance" },
    { name: "Test Preparation", path: "/services/test-preparation" },
    { name: "Study Abroad", path: "/services/study-abroad" },
    { name: "Admission Guide", path: "/services/admission-guide" },
    { name: "Insurance", path: "/services/insurance" },
  ];

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
            <h1 className="text-4xl font-bold">Career Counseling</h1>
            <p className="mt-2">
              <Link to="/" className="hover:text-[#FF8E3C]">Home</Link> /{" "}
              <Link to="/services" className="hover:text-[#FF8E3C]">Services</Link> / Career Counseling
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
          {/* Left Side - Image and Content */}
          <div className="md:col-span-2 space-y-6 order-2 md:order-1">
            <div>
              <p className="text-[#FF8E3C] text-xl mb-2">Our Services</p>
              <h2 className="text-[#074293] text-3xl font-bold mb-6">Career Counseling</h2>
            </div>
            
            <div className="relative h-[400px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
                alt="Career Counseling"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description */}
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                At Aspire Global Education, our career counseling service is designed to help students and professionals make informed decisions about their academic and professional futures. Our experienced counselors provide personalized guidance, taking into account your unique skills, interests, and aspirations to chart the most suitable career path.
              </p>

              <h3 className="text-[#074293] text-xl font-semibold mt-8 mb-4">Our Career Counseling Services Include:</h3>
              
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Personality and aptitude assessment</li>
                <li>Career path planning and guidance</li>
                <li>Academic course selection</li>
                <li>University and program recommendations</li>
                <li>Professional development planning</li>
                <li>Industry insights and trends analysis</li>
              </ul>

              <h3 className="text-[#074293] text-xl font-semibold mt-8 mb-4">Why Choose Our Career Counseling Services?</h3>
              
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Experienced career counselors</li>
                <li>Personalized attention and guidance</li>
                <li>Comprehensive assessment tools</li>
                <li>Updated industry knowledge</li>
                <li>Proven success record</li>
                <li>Long-term career support</li>
              </ul>
            </div>
          </div>

          {/* Right Side - Services Navigation */}
          <div className="md:col-span-1 order-1 md:order-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-2">
              {services.map((service, index) => (
                <div
                  key={index}
                  onClick={() => handleServiceClick(service.path)}
                  className={`text-left px-4 sm:px-6 py-3 sm:py-4 border transition-all duration-300 cursor-pointer ${
                    service.name === "Career Counseling"
                      ? "bg-[#FF8E3C] text-white"
                      : "bg-[#FFE5D0] text-[#074293] hover:bg-[#074293] hover:text-white"
                  } text-sm sm:text-base`}
                >
                  {service.name}
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





