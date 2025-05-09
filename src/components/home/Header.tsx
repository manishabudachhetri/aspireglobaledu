import { useState, useEffect } from 'react';
import { RiMenu2Line } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import logoImage from '../../assets/images/aspirelogo.jpeg';
import StudyAbroadSidebar from '../studyabroad/StudyAbroadSidebar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  
  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  };

 
  useEffect(() => {
    const handlePopState = () => {
      window.location.reload();
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  const contactInfo = {
    location: {
      text: "Kalimati Chowk, Kathmandu, Nepal",
      link: "https://maps.google.com/?q=Kalimati+Chowk,+Kathmandu,+Nepal"
    },
    email: {
      text: "info@aspireglobal.education",
      link: "mailto:info@aspireglobal.education"
    },
    phone: {
      text: "+977-9802374773",
      link: "tel:+9779802374773"
    }
  };

  return (
    <header className="fixed w-full z-50">
      <StudyAbroadSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      {/* Top Info Bar */}
      <div className="bg-[#25499C] text-white py-2">
        <div className="container mx-auto px-4 md:px-6 flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-6">
            {/* Location */}
            <a 
              href={contactInfo.location.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm hover:text-[#FF8E3C] transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{contactInfo.location.text}</span>
            </a>

            {/* Email */}
            <a 
              href={contactInfo.email.link}
              className="hidden md:flex items-center text-sm hover:text-[#FF8E3C] transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>{contactInfo.email.text}</span>
            </a>

            {/* Phone Number */}
            <a 
              href={contactInfo.phone.link}
              className="flex items-center text-sm hover:text-[#FF8E3C] transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{contactInfo.phone.text}</span>
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="bg-[#25499C] text-white rounded px-4 py-1 text-sm hover:bg-[#1e3b7e] transition duration-300 flex items-center gap-2"
            >
              <span>Study Abroad</span>
              <RiMenu2Line className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white py-2 shadow-sm">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <button onClick={() => handleNavigation("/")} className="flex items-center">
              <img src={logoImage} alt="Aspire Global Education" className="h-24 w-auto" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={() => handleNavigation("/")} className="text-gray-800 hover:text-[#074293] font-bold">Home</button>
            <button onClick={() => handleNavigation("/aboutus")} className="text-gray-800 hover:text-[#074293] font-bold">About Us</button>
            <button onClick={() => handleNavigation("/services")} className="text-gray-800 hover:text-[#074293] font-bold">Services</button>
            <button onClick={() => handleNavigation("/preparation class")} className="text-gray-800 hover:text-[#074293] font-bold">Preparation Class</button>
            <button onClick={() => handleNavigation("/blog")} className="text-gray-800 hover:text-[#074293] font-bold">Blog</button>
            <button onClick={() => handleNavigation("/gallery")} className="text-gray-800 hover:text-[#074293] font-bold">Gallery</button>
            <button onClick={() => handleNavigation("/visagranted")} className="text-gray-800 hover:text-[#074293] font-bold">Visa Granted</button>
            <button onClick={() => handleNavigation("/contact")} className="text-gray-800 hover:text-[#074293] font-bold">Contact</button>
            <div className="bg-[#FF8E3C] p-2 rounded cursor-pointer hover:bg-[#e87d2f] transition duration-300">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 text-white" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-800 hover:text-[#074293]"
          >
            <RiMenu2Line className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute w-full shadow-md">
            <nav className="flex flex-col p-4">
              <button onClick={() => { handleNavigation("/"); setIsMenuOpen(false); }} className="py-2 text-left text-gray-800 hover:text-[#074293] font-bold">Home</button>
              <button onClick={() => { handleNavigation("/aboutus"); setIsMenuOpen(false); }} className="py-2 text-left text-gray-800 hover:text-[#074293] font-bold">About Us</button>
              <button onClick={() => { handleNavigation("/services"); setIsMenuOpen(false); }} className="py-2 text-left text-gray-800 hover:text-[#074293] font-bold">Services</button>
              <button onClick={() => { handleNavigation("/preparation class"); setIsMenuOpen(false); }} className="py-2 text-left text-gray-800 hover:text-[#074293] font-bold">Preparation Class</button>
              <button onClick={() => { handleNavigation("/blog"); setIsMenuOpen(false); }} className="py-2 text-left text-gray-800 hover:text-[#074293] font-bold">Blog</button>
              <button onClick={() => { handleNavigation("/gallery"); setIsMenuOpen(false); }} className="py-2 text-left text-gray-800 hover:text-[#074293] font-bold">Gallery</button>
              <button onClick={() => { handleNavigation("/visagranted"); setIsMenuOpen(false); }} className="py-2 text-left text-gray-800 hover:text-[#074293] font-bold">Visa Granted</button>
              <button onClick={() => { handleNavigation("/contact"); setIsMenuOpen(false); }} className="py-2 text-left text-gray-800 hover:text-[#074293] font-bold">Contact</button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;














