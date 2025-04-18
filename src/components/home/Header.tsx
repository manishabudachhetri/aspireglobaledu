import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu2Line } from 'react-icons/ri';
import logoImage from '../../assets/images/aspirelogo.jpeg';
import StudyAbroadSidebar from '../studyabroad/StudyAbroadSidebar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="fixed w-full z-50">
      <StudyAbroadSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      {/* Top Info Bar */}
      <div className="bg-[#25499C] text-white py-2">
        <div className="container mx-auto px-4 md:px-6 flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-6">
            {/* Location */}
            <div className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Maitidevi, Kathmandu</span>
            </div>

            {/* Email */}
            <div className="hidden md:flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>companyinfo.com</span>
            </div>

            {/* Phone Number */}
            <div className="flex items-center text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+977-123456789</span>
            </div>
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
            <Link to="/" className="flex items-center">
              <img src={logoImage} alt="Aspire Global Education" className="h-24 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-800 hover:text-[#074293] font-bold">Home</Link>
            <Link to="/about" className="text-gray-800 hover:text-[#074293] font-bold">About Us</Link>
            <Link to="/services" className="text-gray-800 hover:text-[#074293] font-bold">Services</Link>
            <Link to="/preparation class" className="text-gray-800 hover:text-[#074293] font-bold">Preparation Class</Link>
            <Link to="/blog" className="text-gray-800 hover:text-[#074293] font-bold">Blog</Link>
            <Link to="/gallery" className="text-gray-800 hover:text-[#074293] font-bold">Gallery</Link>
            <Link to="/visagranted" className="text-gray-800 hover:text-[#074293] font-bold">Visa Granted</Link>
            <Link to="/contact" className="text-gray-800 hover:text-[#074293] font-bold">Contact</Link>
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
            <div className="px-4 py-3 space-y-3">
              <Link to="/" className="block text-gray-800 hover:text-[#074293] font-bold">Home</Link>
              <Link to="/about" className="block text-gray-800 hover:text-[#074293] font-bold">About Us</Link>
              <Link to="/services" className="block text-gray-800 hover:text-[#074293] font-bold">Services</Link>
              <Link to="/preparation class" className="block text-gray-800 hover:text-[#074293] font-bold">Preparation Class</Link>
              <Link to="/blog" className="block text-gray-800 hover:text-[#074293] font-bold">Blog</Link>
              <Link to="/gallery" className="block text-gray-800 hover:text-[#074293] font-bold">Gallery</Link>
              <Link to="/visagranted" className="block text-gray-800 hover:text-[#074293] font-bold">Visa Granted</Link>
              <Link to="/contact" className="block text-gray-800 hover:text-[#074293] font-bold">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;







