
import { Link } from 'react-router-dom';
import logoImage from '../../assets/images/aspirelogo.jpeg';

const FooterSection = () => {
  const quickLinks = [
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' },
    { name: 'Services', url: '/services' },  
    { name: 'Contact', url: '/contact' },
    { name: 'Preparation Class', url: '/preparation class' },
    { name: 'Visa Granted', url: '/visagranted' },
    { name: 'Gallery', url: '/gallery' },
    { name: 'Blog', url: '/blog' },
  ];

  const services = [
    { name: 'USA', url: '/abroad-study/usa' },
    { name: 'Australia', url: '/abroad-study/australia' },
    { name: 'Canada', url: '/abroad-study/canada' },
    { name: 'UK', url: '/abroad-study/uk' },
    { name: 'New Zealand', url: '/abroad-study/new zealand' },
    { name: 'France', url: '/abroad-study/france' },
    { name: 'Germany', url: '/abroad-study/germany' },
    { name: 'Spain', url: '/abroad-study/spain' },
    { name: 'Europe', url: '/abroad-study/europe' }
  ];

  const contactInfo = [
    { icon: 'location', text: 'Maitidevi, Setopool, Kathmandu Nepal' },
    { icon: 'email', text: 'company@info.com' },
    { icon: 'phone', text: '+977-123456789' }
  ];

  return (
    <footer className="bg-[#074293] text-white pt-16">
      <div className="container mx-auto px-4 md:px-6 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img 
                src={logoImage}
                alt="Aspire Global Education"
                className="h-24 w-auto mb-6 bg-white p-2"
              />
            </div>
            <p className="text-white/80 text-justify mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
            </p>
            
            <Link 
              to="/about"
              className="bg-[#0a3b7c] text-white px-8 py-3 border-2 border-[#0a3b7c] hover:bg-[#074293] hover:border-[#074293] transition-all font-semibold inline-block"
            >
              About Us →
            </Link>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-32 after:bg-white">
              Important Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.url} 
                    className="text-white/80 hover:text-white transition duration-300 flex items-center group"
                  >
                    <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Study Abroad */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-32 after:bg-white">
              Study Abroad
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    to={service.url} 
                    className="text-white/80 hover:text-white transition duration-300 flex items-center group"
                  >
                    <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                      {service.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-32 after:bg-white">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((info) => (
                <li key={info.icon} className="flex items-start">
                  <div className="mr-3 mt-1">
                    {info.icon === 'location' && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                    {info.icon === 'email' && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )}
                    {info.icon === 'phone' && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    )}
                  </div>
                  <span className="text-white/80">{info.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright - Full width orange section */}
      <div className="bg-[#FF8E3C] py-4">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white">
            © {new Date().getFullYear()} Aspire Global. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
              Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
              Instagram
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
              Youtube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;























