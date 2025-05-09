import React, { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FooterSection from '../../components/home/FooterSection';

interface ContactForm {
  phone: any;
  message: any;
  name: any;
  email: any;
  fullName: string;
  address: string;
  contactNumber: string;
  qualification: string;
  passedOutYear: string;
  preferredCountry: string;
  preferredDegree: string;
  course: string;
  specificCourse: string;
  enquiry: string;
}

const countryLinks = [
  { name: 'Study in Malta', path: '/abroad-study/malta' },
  { name: 'Study in Dubai', path: '/abroad-study/dubai' },
  { name: 'Study in UK', path: '/abroad-study/uk' },
  { name: 'Study in Australia', path: '/abroad-study/australia' }
];

const Malta: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    fullName: '',
    address: '',
    contactNumber: '',
    qualification: '',
    passedOutYear: '',
    preferredCountry: 'Malta', 
    preferredDegree: '',
    course: '',
    specificCourse: '',
    enquiry: '',
    name: '',
    phone: '',
    message: '',
    email: ''
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [, setSubmitStatus] = useState<{
    success?: string;
    error?: string;
  }>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({});

    try {
      if (!formData.name || !formData.email || !formData.phone || !formData.message) {
        throw new Error('Please fill in all fields');
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      const phoneRegex = /^\+?[\d\s-]{10,}$/;
      if (!phoneRegex.test(formData.phone)) {
        throw new Error('Please enter a valid phone number');
      }

      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus({ success: 'Thank you for your inquiry. We will contact you soon!' });
      setFormData({
        fullName: '',
        address: '',
        contactNumber: '',
        qualification: '',
        passedOutYear: '',
        preferredCountry: 'Malta',
        preferredDegree: '',
        course: '',
        specificCourse: '',
        enquiry: '',
        name: '',
        phone: '',
        message: '',
        email: ''
      });
    } catch (error) {
      setSubmitStatus({ error: error instanceof Error ? error.message : 'An error occurred' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const navigate = useNavigate();

  const handleCountryNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
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
            <h1 className="text-4xl font-bold">Study in Malta</h1>
            <p className="mt-2">
              <Link to="/" className="hover:text-[#FF8E3C]">Home</Link> /{" "}
              <Link to="/abroad-study" className="hover:text-[#FF8E3C]">Abroad Study</Link> / Malta
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
              <p className="text-[#FF8E3C] text-xl">Pick Your Destinations</p>
              <h2 className="text-4xl font-semibold text-[#074293]">Study In Malta - Your Gateway To Europe!</h2>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1602087594298-706ccc894bfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              alt="Malta overview"
              className="w-full h-[400px] object-cover shadow-md"
            />

            <section>
              <h3 className="text-2xl font-semibold mb-2 text-[#074293]">Country Overview</h3>
              <p className="text-justify mb-4">
               Malta is a small island nation located in the Mediterranean Sea, south of Italy. Known for its rich history, stunning coastlines, and sunny weather, it boasts ancient temples, medieval cities, and crystal-clear waters. With English as an official language and a strong economy driven by tourism, finance, and tech. Malta is both a cultural gem and a modern hub in Europe.
              </p>
              
              <p className="text-justify mb-4">
               Looking for affordable, quality education in Europe? Malta could be your perfect destination. With tuition fees starting from just €5,000, you can study at top-ranked colleges and universities in a safe, English-speaking country while experiencing Europeon culture. 
              </p>

            

             
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-2 text-[#074293]">Why Choose Malta for Your Higher Education?</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Affordable Tuition Fees - Starts from €5,000 per year</li>
                <li>English as the Medium of Instruction</li>
                <li>Pathway to Europe - Schengen visa access with travel opportunities</li>
                <li>Part-Time Work Allowed for International Students</li>
                <li>Post-Study Opportunities & PR Options</li>
                <li>Multicultural Environment & Safe Community</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4 text-[#074293]">Programs We Offer in Malta</h3>
              <p className="text-justify mb-6">
               We work with a wide range of colleges and universities in Malta that offer:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <span className="bg-[#FF8E3C] text-white px-4 py-2 text-sm font-medium hover:bg-[#e87d2f] transition-colors duration-200 text-center">
                  Business & Management
                </span>
                <span className="bg-[#FF8E3C] text-white px-4 py-2 text-sm font-medium hover:bg-[#e87d2f] transition-colors duration-200 text-center">
                  Hospitality & Tourism
                </span>
                <span className="bg-[#FF8E3C] text-white px-4 py-2 text-sm font-medium hover:bg-[#e87d2f] transition-colors duration-200 text-center">
                  Information Technology
                </span>
                <span className="bg-[#FF8E3C] text-white px-4 py-2 text-sm font-medium hover:bg-[#e87d2f] transition-colors duration-200">
                  Health & Social Care
                </span>
                <span className="bg-[#FF8E3C] text-white px-4 py-2 text-sm font-medium hover:bg-[#e87d2f] transition-colors duration-200">
                  Accounting & Finance
                </span>
                <span className="bg-[#FF8E3C] text-white px-4 py-2 text-sm font-medium hover:bg-[#e87d2f] transition-colors duration-200">
                  And Many More...
                </span>
              </div>
              <p className="text-justify mt-6">
                Whether you're looking for bachelor's, master's, or diploma programs, we'll help you find the right fit based on your academic background and career goals.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4 text-[#074293]">Easy Admission Process for Nepali Students</h3>
              <ul className="space-y-1">
                <li className="flex items-start gap-3">
                  <span className="text-[#FF8E3C] text-xl">➜</span>
                  <span>Course & College Selection</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF8E3C] text-xl">➜</span>
                  <span>Documentation & Application</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF8E3C] text-xl">➜</span>
                  <span>Visa Guidance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF8E3C] text-xl">➜</span>
                  <span>Pre-Departure Briefing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF8E3C] text-xl">➜</span>
                  <span>Accommodation Assistance in Malta</span>
                </li>
              </ul>
              <p className="text-justify mt-6">
                With a student-friendly visa process and options to pay tuition after visa approval (available with select institutions), Malta is an ideal destinatin for aspiring Nepali Students.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4 text-[#074293]">Start Your Journey To Europe Today</h3>
              <p className="text-justify">
                Apply now and take the first step toward building your global career from the heart of the Mediterranean.
                Contact Aspire Global Education today and let us help you study in Malta with affordable tuition and expert guidance.
              </p>
            </section>

          </div>
           

          {/* Right Section - Navigation and Contact Form */}
          <div className="space-y-16">
            {/* Navigation */}
            <div className="md:col-span-1 order-1 md:order-2">
              <div className="flex flex-col gap-2">
                {countryLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => handleCountryNavigation(link.path)}
                    className={`text-left px-6 py-4 border transition-all duration-300 ${
                      link.name === "Study in Malta"
                        ? "bg-[#FF8E3C] text-white"
                        : "bg-[#FFE5D0] text-[#074293] hover:bg-[#074293] hover:text-white"
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Form Section */}
            <div className="bg-[#f5f5f5] shadow-md overflow-hidden mt-16">
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
                    <label className="block text-sm mb-1 font-medium">Full Name*</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1 font-medium">Address*</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1 font-medium">Email*</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1 font-medium">Contact Number*</label>
                    <input
                      type="tel"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1 font-medium">Qualification*</label>
                    <select
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border text-sm bg-white"
                      required
                    >
                      <option value="">Select Your Qualification</option>
                      <option value="+2">+2</option>
                      <option value="Bachelor">Bachelor</option>
                      <option value="Master">Master</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-1 font-medium">Passed Out Year*</label>
                    <input
                      type="text"
                      name="passedOutYear"
                      value={formData.passedOutYear}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1 font-medium">Preferred Country*</label>
                    <input
                      type="text"
                      name="preferredCountry"
                      value={formData.preferredCountry}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border text-sm"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1 font-medium">Preferred Degree*</label>
                    <select
                      name="preferredDegree"
                      value={formData.preferredDegree}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border text-sm bg-white"
                      required
                    >
                      <option value="">Select Preferred Degree</option>
                      <option value="Bachelor">Bachelor</option>
                      <option value="Master">Master</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-1 font-medium">Course*</label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border text-sm bg-white"
                      required
                    >
                      <option value="">Select Course</option>
                      <option value="Business & Management">Business & Management</option>
                      <option value="Hospitality & Tourism">Hospitality & Tourism</option>
                      <option value="Information Technology">Information Technology</option>
                      <option value="Health & Social Care">Health & Social Care</option>
                      <option value="Accounting & Finance">Accounting & Finance</option>
                      <option value="Engineering">Engineering</option>
                      <option value="Arts & Design">Arts & Design</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-1 font-medium">Any Specific Course you want to enquiry about?</label>
                    <input
                      type="text"
                      name="specificCourse"
                      value={formData.specificCourse}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border text-sm bg-white"
                     
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1 font-medium">Write Your Enquiry Here*</label>
                    <textarea
                      name="enquiry"
                      value={formData.enquiry}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 border text-sm"
                     
                    ></textarea>
                  </div>
                  <div className="flex justify-start">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 bg-[#074293] text-white py-2 hover:bg-[#052e68] transition-colors duration-300"
                    >
                      {isSubmitting ? 'Submitting...' : 'Apply Now →'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default Malta;


