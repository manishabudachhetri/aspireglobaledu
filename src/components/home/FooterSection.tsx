
import { useNavigate } from 'react-router-dom';
import logoImage from '../../assets/images/aspirelogo.jpeg';

const FooterSection = () => {
  const navigate = useNavigate();

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
    { name: 'Malta', url: '/abroad-study/malta' },  
    { name: 'Dubai', url: '/abroad-study/dubai' },
    { name: 'UK', url: '/abroad-study/uk' },
    { name: 'Australia', url: '/abroad-study/australia' },
  ];

  const handleQuickLinkClick = (url: string) => {
    navigate(url);
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  };

  const handleStudyAbroadClick = (url: string) => {
    navigate(url);
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  };

  const contactInfo = [
    { 
      icon: 'location', 
      text: 'Kalimati Chowk, Kathmandu, Nepal',
      link: 'https://maps.google.com/?q=Kalimati+chowk,+Kathmandu,+Nepal',
      type: 'map'
    },
    { 
      icon: 'email', 
      text: 'info@aspireglobal.education',
      link: 'mailto:info@aspireglobal.education',
      type: 'email'
    },
    { 
      icon: 'phone', 
      text: '+977-9802374773',
      link: 'tel:+9779802374773',
      type: 'phone'
    },
    { 
      icon: null, 
      text: '+977-9802374774',
      link: 'tel:+9779802374774',
      type: 'phone'
      
    },
    { 
      icon: null, 
      text: '+977-9802374775',
      link: 'tel:+9779802374775',
      type: 'phone'
      
    }
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
            Aspire Global Education Consultancy Pvt. Ltd. is a professional educational consultancy dedicated to providing high-quality, affordable, and reliable test preparation and study abroad guidance. 
            </p>
            
            <button 
              onClick={() => handleQuickLinkClick('/about')}
              className="bg-[#0a3b7c] text-white px-8 py-3 border-2 border-[#0a3b7c] hover:bg-[#074293] hover:border-[#074293] transition-all font-semibold inline-block"
            >
              About Us →
            </button>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-32 after:bg-white">
              Important Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => handleQuickLinkClick(link.url)}
                    className="text-white/80 hover:text-white transition duration-300 flex items-center group w-full text-left"
                  >
                    <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                      {link.name}
                    </span>
                  </button>
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
                  <button 
                    onClick={() => handleStudyAbroadClick(service.url)}
                    className="text-white/80 hover:text-white transition duration-300 flex items-center group w-full text-left"
                  >
                    <span className="transform group-hover:translate-x-2 transition-transform duration-300">
                      {service.name}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-32 after:bg-white">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((info) => (
                <li key={info.text} className="flex items-start">
                  {info.icon && (
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
                  )}
                  {!info.icon && <div className="mr-3 mt-1 w-5"></div>}
                  <a 
                    href={info.link}
                    target={info.type === 'map' ? '_blank' : '_self'}
                    rel={info.type === 'map' ? 'noopener noreferrer' : ''}
                    className={`text-white/80 hover:text-white transition-colors duration-300`}
                  >
                    {info.text}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <h3 className="text-xl font-bold mb-6 mt-8 relative after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-32 after:bg-white">
              Social Links
            </h3>
            <div className="flex space-x-2">
              <a href="https://www.facebook.com/share/16GUiAKNkp/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
                <img 
                  src="https://img.icons8.com/?size=48&id=118497&format=png" 
                  alt="Facebook"
                  className="w-8 h-8"
                />
              </a>
              <a href="https://www.instagram.com/aspire_glob_education/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
                <img 
                  src="https://img.icons8.com/?size=48&id=Xy10Jcu1L2Su&format=png" 
                  alt="Instagram"
                  className="w-8 h-8"
                />
              </a>
              <a href="https://www.tiktok.com/@aspire.global.edu?_t=ZS-8vaItyZsae7&_r=1" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
                <img 
                  src="https://img.icons8.com/?size=80&id=3veRWJpxPPDH&format=png" 
                  alt="TikTok"
                  className="w-8 h-8"
                />
              </a>
              <a href="https://wa.me/+9779802374773" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
                <img 
                  src="https://img.icons8.com/?size=48&id=16713&format=png" 
                  alt="WhatsApp"
                  className="w-8 h-8"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="bg-[#FF8E3C] py-4">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-white">
            © {new Date().getFullYear()} Aspire Global. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;









































