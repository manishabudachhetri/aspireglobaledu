import { Link } from "react-router-dom";
import FooterSection from '../../components/home/FooterSection';

export default function StudyAbroad() {
  const services = [
    { name: "Career Counseling", path: "/services/career-counseling" },
    { name: "Visa Assistance", path: "/services/visa-assistance" },
    { name: "Test Preparation", path: "/services/test-preparation" },
    { name: "Study Abroad", path: "/services/study-abroad" },
    { name: "Admission Guide", path: "/services/admission-guide" },
    { name: "Insurance", path: "/services/insurance" },
  ];

  const countries = [
    {
      country: "UK",
      features: [
        "Historic institutions",
        "Quality education",
        "International environment",
        "Post-study work visa"
      ]
    },
    {
      country: "Dubai",
      features: [
        "Modern infrastructure",
        "Multicultural environment",
        "Business opportunities",
        "Tax-free income"
      ]
    },
    {
      country: "Malta",
      features: [
        "English-speaking country",
        "Mediterranean lifestyle",
        "Affordable education",
        "EU recognized degrees"
      ]
    },
    {
      country: "Australia",
      features: [
        "World-class universities",
        "Work while studying",
        "High quality of life",
        "Post-study work options"
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
              Study Abroad
            </h1>
            <p className="mt-2 text-sm sm:text-base">
              <Link to="/" className="hover:text-[#FF8E3C] transition-colors duration-300">Home</Link> / 
              <Link to="/services" className="hover:text-[#FF8E3C] transition-colors duration-300"> Services</Link> / 
              Study Abroad
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
                  className={`text-left px-6 py-4 border transition-all duration-300 ${
                    service.name === "Study Abroad"
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
              <h2 className="text-[#074293] text-3xl font-bold mb-6">Study Abroad</h2>
            </div>
            
            <div className="relative h-[400px] overflow-hidden mb-8">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
                alt="Study Abroad"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                Embark on your international education journey with our comprehensive study abroad services. We guide students through every step of the process, from choosing the right country and university to settling into their new academic environment.
              </p>

              <h3 className="text-[#074293] text-xl font-semibold mt-8 mb-4">Popular Study Destinations:</h3>
              
              <div className="grid grid-cols-1 gap-4">
                {countries.map((destination, index) => (
                  <div key={index} className="border border-[#074293] p-6 rounded-lg">
                    <h4 className="text-[#074293] font-semibold">{destination.country}</h4>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      {destination.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-600">{feature}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-[#074293] text-xl font-semibold mb-4">Our Study Abroad Services Include:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>University selection and application assistance</li>
                  <li>Course and program guidance</li>
                  <li>Scholarship application support</li>
                  <li>Visa processing assistance</li>
                  <li>Pre-departure orientation</li>
                  <li>Accommodation guidance</li>
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-[#074293] text-xl font-semibold mb-4">Explore Our Destinations</h3>
                <Link 
                  to="/abroad-study"
                  className="inline-block bg-[#FF8E3C] text-white px-6 py-3 rounded hover:bg-[#e67e35] transition-colors duration-300"
                >
                  View All Destinations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}



