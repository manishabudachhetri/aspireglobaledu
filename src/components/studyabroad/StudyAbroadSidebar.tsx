import React, { useState } from 'react';

interface Country {
  name: string;
  image: string;
}

interface StudyAbroadSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const countries: Country[] = [
  { 
    name: 'USA', 
    image: 'https://images.unsplash.com/photo-1556146385-97d8a0b5e66b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' 
  },
  { 
    name: 'Dubai', 
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' 
  },
  { 
    name: 'Canada', 
    image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' 
  },
  { 
    name: 'Europe', 
    image: 'https://images.unsplash.com/photo-1541343672885-9be56236302a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' 
  },
  { 
    name: 'UK', 
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' 
  },
  { 
    name: 'New Zealand', 
    image: 'https://images.unsplash.com/photo-1589871973318-9ca1258faa5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' 
  },
  { 
    name: 'Malta', 
    image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' 
  },
  { 
    name: 'Spain', 
    image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' 
  },
];

const StudyAbroadSidebar: React.FC<StudyAbroadSidebarProps> = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  // Update local state when prop changes
  React.useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    onClose();
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={handleClose}
      ></div>

      {/* Sidebar */}
      <div className="fixed inset-0 z-50 flex h-screen font-sans bg-[#eaf0ff] overflow-y-auto overflow-x-hidden shadow-2xl">
        {/* Left Section */}
        <div className="relative w-[30%] bg-[#2c3e94] text-white flex items-center justify-center px-6 py-8 overflow-hidden transition-all duration-300 ease-in-out">
          {/* Overlay group image */}
          <img
            src="https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="group"
            className="absolute inset-0 w-full h-full object-cover opacity-30 transition-transform duration-500 ease-in-out hover:scale-105"
          />
          <div className="z-10 relative text-center">
            <p className="text-sm tracking-widest mb-2 uppercase font-medium text-gray-100">Pick Your Destinations</p>
            <h1 className="text-2xl md:text-3xl font-bold leading-tight tracking-wide">
              Select Your Favourite<br />Country.
            </h1>
          </div>

          {/* Orange & blue diagonal border */}
          <div className="absolute right-0 top-0 h-full w-2 bg-orange-500 z-20 transform transition-all duration-300"></div>
          <div className="absolute right-2 top-0 h-full w-2 bg-[#2c3e94] z-20 transform transition-all duration-300"></div>
        </div>

        {/* Right Section */}
        <div className="w-[70%] p-6 md:p-8 lg:p-10 overflow-y-auto bg-[#eaf0ff] shadow-inner">
          {/* Close button */}
          <div className="flex justify-end mb-6 sticky top-0 z-30 bg-[#eaf0ff]/80 backdrop-blur-sm py-2">
            <button 
              className="flex items-center gap-2 text-black font-semibold group transition-all duration-300 hover:text-[#FF8E3C] cursor-pointer px-4 py-2 rounded-lg hover:bg-gray-50"
            >
              <span className="text-sm sm:text-base tracking-wide">CLOSE</span>
              <span 
                onClick={handleClose}
                className="bg-[#FF8E3C] text-white px-2 py-1 rounded-sm text-xs sm:text-sm md:px-3 md:py-1.5 group-hover:bg-[#e87d2f] transition-colors duration-300 flex items-center justify-center min-w-[24px] min-h-[24px] sm:min-w-[28px] sm:min-h-[28px] cursor-pointer hover:shadow-lg"
              >
                X
              </span>
            </button>
          </div>

          {/* Country Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {countries.map((country) => (
              <div
                key={country.name}
                className="relative h-40 md:h-48 lg:h-52 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer"
                style={{ backgroundImage: `url(${country.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/70 group-hover:from-black/20 group-hover:to-black/80 transition-all duration-300"></div>
                <div className="absolute bottom-2 left-2 text-white z-10 p-3">
                  <h3 className="text-lg md:text-xl font-semibold mb-1 group-hover:transform group-hover:translate-x-1 transition-transform duration-300">{country.name}</h3>
                  <button className="mt-1 px-3 py-1.5 bg-[#FF8E3C] text-white text-sm rounded-md hover:bg-[#e87d2f] transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StudyAbroadSidebar;











