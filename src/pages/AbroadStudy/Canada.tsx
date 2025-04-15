import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import FooterSection from '../../components/home/FooterSection';

interface FAQ {
  q: string;
  a: string;
}

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Canada: React.FC = () => {
  // State for form data
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // State for form submission
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [, setSubmitStatus] = useState<{
    success?: string;
    error?: string;
  }>({});

  // FAQ data
  const faqs: FAQ[] = [
    { 
      q: 'How much will it cost to study in Canada?',  
      a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'  
    },
    { 
      q: 'What is the education system like in Canada?',  
      a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
    },
    { 
      q: 'What are the scholarship opportunities in Canada?',  
      a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'  
    },
    {  
      q: 'What are the job opportunities in Canada for international students?',  
      a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
    }
  ];

  // Handle form input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({});

    try {
      // Validate form data
      if (!formData.name || !formData.email || !formData.phone || !formData.message) {
        throw new Error('Please fill in all fields');
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      // Phone validation
      const phoneRegex = /^\+?[\d\s-]{10,}$/;
      if (!phoneRegex.test(formData.phone)) {
        throw new Error('Please enter a valid phone number');
      }

      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus({ success: 'Thank you for your inquiry. We will contact you soon!' });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setSubmitStatus({ error: error instanceof Error ? error.message : 'An error occurred' });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <h1 className="text-4xl font-bold">Study in Canada</h1>
            <p className="mt-2">
              <Link to="/" className="hover:text-[#FF8E3C]">Home</Link> /{" "}
              <Link to="/abroad-study" className="hover:text-[#FF8E3C]">Abroad Study</Link> / Canada
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 w-full">
          <div className="h-2 bg-[#074293]"></div>
          <div className="h-2 bg-[#FF8E3C]"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-1">
              <p className="text-[#FF8E3C] text-xl">Pick Your Destination</p>
              <h2 className="text-2xl font-semibold text-[#074293]">Study In Canada</h2>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1517935706615-2717063c2225?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
              alt="Toronto Skyline" 
             className="w-full h-[400px] object-cover shadow-md"
            />

            <section>
              <h3 className="text-xl font-semibold mb-2 text-[#074293]">Country Overview</h3>
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold mb-2 text-[#074293]">Why Study in Canada?</h3>
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </section>

            <section>
        
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <details key={idx} className="border">
                    <summary className="cursor-pointer font-medium text-[#074293] p-4 bg-[#e3f2fd]">
                      {faq.q}
                    </summary>
                    <p className="mt-2 text-sm text-gray-700 p-3 bg-white">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          </div>

          {/* Right Section - Navigation and Contact Form */}
          <div className="space-y-8">
            {/* Navigation */}
            <div className="md:col-span-1 order-1 md:order-2">
              <div className="flex flex-col gap-2">
                {[
                  'Study in USA',
                  'Study in France',
                  'Study in Canada',
                  'Study in UK',
                  'Study in New Zealand',
                  'Study in Germany',
                  'Study in Europe',
                  'Study in Spain',
                  'Study in Australia'
                ].map((study, index) => (
                  <Link
                    key={index}
                    to={`/abroad-study/${study.toLowerCase().replace('study in ', '')}`}
                    replace={true}
                    className={`text-left px-6 py-4 border transition-all duration-300 ${
                      study === "Study in Canada"
                        ? "bg-[#FF8E3C] text-white"
                        : "bg-[#FFE5D0] text-[#074293] hover:bg-[#074293] hover:text-white"
                    }`}
                  >
                    {study}
                  </Link>
                ))}
              </div>
            </div>

             {/* Form Section */}
             <div className="bg-[#f5f5f5] shadow-md overflow-hidden mt-6">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522083165195-3424ed129620?w=500&auto=format&fit=crop&q=60" 
                  alt="Enquiry Now" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">Enquiry Now</h3>
                </div>
              </div>
              <div className="px-6 py-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm mb-1 font-medium">Name*</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1 font-medium">Phone*</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                      placeholder="Your phone"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1 font-medium">Email*</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1 font-medium">Preparation Class</label>
                    <select className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white">
                    <option>Study in Canada</option> 
                      <option>Study in France</option> 
                      <option>Study in USA</option> 
                      <option>Study in UK</option> 
                      <option>Study in New Zealand</option> 
                      <option>Study in Germany</option>
                      <option>Study in Europe</option>
                      <option>Study in Spain</option>
                      <option>Study in Australia</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-1 font-medium">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                      placeholder="Write your message..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1a237e] text-white py-2 flex items-center justify-center gap-2 hover:bg-[#0d154c]"
                  >
                    <span>{isSubmitting ? 'Sending...' : 'Send Now'}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </form>
              </div>
            </div> </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default Canada;