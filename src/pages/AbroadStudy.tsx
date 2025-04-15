import React from 'react';
import { Link } from 'react-router-dom';
import FooterSection from '../components/home/FooterSection';

const countries = [
  {
    name: "USA",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    label: "Study in USA",
    path: "/abroad-study/usa"
  },
  {
    name: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    label: "Study in France",
    path: "/abroad-study/france"
  },
  {
    name: "Canada",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    label: "Study in Canada",
    path: "/abroad-study/canada"
  },
  {
    name: "UK",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    label: "Study in UK",
    path: "/abroad-study/uk"
  },
  {
    name: "New Zealand",
    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=2000&auto=format&fit=crop&q=80",
    label: "Study in New Zealand",
    path: "/abroad-study/new zealand"
  },
  {
    name: "Germany",
    image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    label: "Study in Germany",
    path: "/abroad-study/germany"
  },
  {
    name: "Europe",
    image: "https://images.unsplash.com/photo-1541343672885-9be56236302a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    label: "Study in Europe",
    path: "/abroad-study/europe"
  },
  {
    name: "Spain",
    image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    label: "Study in Spain",
    path: "/abroad-study/spain"
  },
  {
    name: "Australia",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    label: "Study in Australia",
    path: "/abroad-study/australia"
  }
];

const AbroadStudy: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <div 
        className="relative w-full h-[300px] sm:h-[400px] bg-cover bg-center mt-20 sm:mt-32"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1462536943532-57a629f6cc60?w=3000&auto=format&fit=crop&q=100&ixlib=rb-4.0.3")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-35 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold">Abroad Study</h1>
            <p className="mt-2">
              <Link to="/" className="hover:text-[#FF8E3C]">Home</Link> / Abroad Study
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 w-full">
          <div className="h-2 bg-[#074293]"></div>
          <div className="h-2 bg-[#FF8E3C]"></div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-[#FF8E3C] text-2xl mb-2">Pick Your Destination</h1>
          <h2 className="text-[#074293] text-3xl font-bold">Select Your Favourite Country</h2>
        </div>
        

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country, index) => (
            <Link key={index} to={country.path} className="group">
              <div className="relative overflow-hidden shadow-lg">
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h2 className="text-xl font-semibold">{country.label}</h2>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default AbroadStudy;









