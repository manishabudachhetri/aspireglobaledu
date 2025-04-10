import { Link } from "react-router-dom";

export default function VisaAssistance() {
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
        className="relative w-full h-[300px] sm:h-[400px] bg-cover bg-center mt-20 sm:mt-32"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1462536943532-57a629f6cc60?w=3000&auto=format&fit=crop&q=100&ixlib=rb-4.0.3")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-35 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-3xl sm:text-4xl font-bold">Visa Assistance</h1>
            <p className="mt-2 text-sm sm:text-base flex justify-end">
              <Link to="/" className="hover:text-[#FF8E3C] transition-colors duration-300">Home</Link> / 
              <Link to="/services" className="hover:text-[#FF8E3C] transition-colors duration-300"> Services</Link> / 
              Visa Assistance
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
                    service.name === "Visa Assistance"
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
              <h2 className="text-[#074293] text-3xl font-bold mb-6">Visa Assistance</h2>
            </div>
            
            <div className="relative h-[400px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
                alt="Visa Assistance"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                Our comprehensive visa assistance service helps students navigate the complex visa application process for their study abroad journey. We provide expert guidance and support throughout the entire visa application procedure.
              </p>

              <h3 className="text-[#074293] text-xl font-semibold mt-8 mb-4">Our Visa Assistance Services Include:</h3>
              
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Document preparation and verification</li>
                <li>Visa application form filling assistance</li>
                <li>Interview preparation guidance</li>
                <li>Financial documentation support</li>
                <li>Application status tracking</li>
                <li>Embassy appointment scheduling</li>
              </ul>

              <h3 className="text-[#074293] text-xl font-semibold mt-8 mb-4">Why Choose Our Visa Services?</h3>
              
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Experienced visa counselors</li>
                <li>High success rate</li>
                <li>Personalized attention</li>
                <li>Updated knowledge of visa requirements</li>
                <li>Complete documentation support</li>
                <li>Post-visa guidance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



