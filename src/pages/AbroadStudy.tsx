import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FooterSection from '../components/home/FooterSection';

const countries = [
  {
    name: "Malta",
    image: "https://images.unsplash.com/photo-1602087594298-706ccc894bfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    label: "Study in Malta",
    path: "/abroad-study/malta"
  },
  {
    name: "UAE",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    label: "Study in UAE",
    path: "/abroad-study/uae"
  },
  {
    name: "UK",
    image: "https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=2000&auto=format&fit=crop&q=80",
    label: "Study in UK",
    path: "/abroad-study/uk"
  },
  {
    name: "Australia",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    label: "Study in Australia",
    path: "/abroad-study/australia"
  }
];

const AbroadStudy: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, []);

  const handleCountryClick = (path: string) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      <div 
        className="relative w-full h-[300px] sm:h-[400px] bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1462536943532-57a629f6cc60?w=3000&auto=format&fit=crop&q=100&ixlib=rb-4.0.3")',
          marginTop: '80px'
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

      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-[#FF8E3C] text-2xl mb-2">Pick Your Destination</h1>
          <h2 className="text-[#074293] text-3xl font-bold">Select Your Favourite Country</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {countries.map((country, index) => (
            <button
              key={index}
              onClick={() => handleCountryClick(country.path)}
              className="group w-full text-left focus:outline-none"
            >
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
            </button>
          ))}
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default AbroadStudy;







