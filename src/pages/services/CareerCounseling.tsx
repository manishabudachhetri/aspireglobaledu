import { Link } from "react-router-dom";

export default function CareerCounseling() {
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
            <div className="space-y-4 text-justify text-gray-700">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
              </p>
              
            </div>
          </div>

          {/* Right Side - Services Navigation */}
          <div className="md:col-span-1 order-1 md:order-2">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 gap-2">
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className={`text-left px-4 sm:px-6 py-3 sm:py-4 border  transition-all duration-300 ${
                    service.name === "Career Counseling"
                      ? "bg-[#FF8E3C] text-white"
                      : "bg-[#FFE5D0] text-[#074293] hover:bg-[#074293] hover:text-white"
                  } text-sm sm:text-base`}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}





