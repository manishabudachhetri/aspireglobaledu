
import { Link } from 'react-router-dom';
import FooterSection from '../components/home/FooterSection';

export default function Contact() {
  const contactInfo = [
    { 
      icon: 'phone',
      title: 'Phone',
      text: '+977-123456789, 01-4106705'
    },
    {
      icon: 'email',
      title: 'Mail Info',
      text: 'info@aspireglobal.education'
    },
    {
      icon: 'location',
      title: 'Address',
      text: 'Kalimati Chowk, Kathmandu, Nepal'
    }
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
            <h1 className="text-4xl font-bold">Contact Us</h1>
            <p className="mt-2">
              <Link to="/" className="hover:text-[#FF8E3C]">Home</Link> / Contact Us
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 w-full">
          <div className="h-2 bg-[#074293]"></div>
          <div className="h-2 bg-[#FF8E3C]"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-[#FF8E3C] text-2xl mb-2">Contact Us</h1>
          <h2 className="text-[#074293] text-3xl font-bold">Happy Serving You</h2>
        </div>

        {/* Contact Details and Map Container */}
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row w-full gap-8 mb-20">
            {/* Contact Details */}
            <div className="w-full md:w-2/5">
              <div className="bg-blue-900 text-white p-8 h-full">
                <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.icon} className="flex items-start">
                      <div className="mr-3 mt-1">
                        {info.icon === 'phone' && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        )}
                        {info.icon === 'email' && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        )}
                        {info.icon === 'location' && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <h4 className="font-bold">{info.title}</h4>
                        <p className="text-white/80">{info.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="w-full md:w-3/5 h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5249021195194!2d85.3190827750899!3d27.701193776202204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb197722f4a6c3%3A0xa94417ef9ebfbc65!2sUNLEIN%20SCHOOL!5e0!3m2!1sen!2snp!4v1686570217730!5m2!1sen!2snp"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Message Form Section */}
        <div className="w-full">
          {/* Talk to Professional Team Section */}
          <div 
            className="w-full bg-blue-900 py-24 relative"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1462536943532-57a629f6cc60?w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-blue-900 bg-opacity-90"></div>
            <div className="text-center text-white relative z-10">
              <h2 className="text-4xl font-bold mb-6">Talk to Our Professional Team Now</h2>
             
            </div>
          </div>

          {/* Send Message Form Section */}
          <div className="container mx-auto px-4">
            <div className="bg-white max-w-4xl mx-auto p-8 shadow-lg -mt-16 relative z-20">
              <h3 className="text-xl font-bold mb-6 text-[#074293]">Send Us A Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name*</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="border border-gray-300 px-4 py-2 w-full focus:outline-none focus:border-[#074293]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone*</label>
                    <input
                      type="tel"
                      placeholder="Your phone"
                      className="border border-gray-300 px-4 py-2 w-full focus:outline-none focus:border-[#074293]"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email*</label>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="border border-gray-300 px-4 py-2 w-full focus:outline-none focus:border-[#074293]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    placeholder="Your message"
                    className="border border-gray-300 px-4 py-2 w-full h-32 focus:outline-none focus:border-[#074293]"
                  ></textarea>
                </div>
                <div className="flex justify-start mt-6">
                  <button className="bg-[#074293] text-white px-8 py-3 hover:bg-[#053172] transition duration-300 flex items-center gap-2">
                    Send Now
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" 
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}










