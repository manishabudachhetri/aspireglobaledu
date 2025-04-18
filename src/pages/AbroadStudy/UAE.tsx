import React, { useState, FormEvent, ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FooterSection from '../../components/home/FooterSection';

interface FormData {
  fullName: string;
  address: string;
  email: string;
  contactNumber: string;
  qualification: string;
  passedOutYear: string;
  preferredCountry: string;
  preferredDegree: string;
  course: string;
  specificCourse: string;
  enquiry: string;
}

const UAE = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    address: '',
    email: '',
    contactNumber: '',
    qualification: '',
    passedOutYear: '',
    preferredCountry: 'UAE',
    preferredDegree: '',
    course: '',
    specificCourse: '',
    enquiry: ''
  });
  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFormData({
        fullName: '',
        address: '',
        email: '',
        contactNumber: '',
        qualification: '',
        passedOutYear: '',
        preferredCountry: 'UAE',
        preferredDegree: '',
        course: '',
        specificCourse: '',
        enquiry: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCountryNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  };

  const countryLinks = [
    { name: 'Study in Malta', path: '/abroad-study/malta' },
    { name: 'Study in UAE', path: '/abroad-study/uae' },
    { name: 'Study in UK', path: '/abroad-study/uk' },
    { name: 'Study in Australia', path: '/abroad-study/australia' }
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
            <h1 className="text-4xl font-bold">Study in UAE</h1>
            <p className="mt-2">
              <Link to="/" className="hover:text-[#FF8E3C]">Home</Link> /{" "}
              <Link to="/abroad-study" className="hover:text-[#FF8E3C]">Abroad Study</Link> / UAE
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
              <h2 className="text-4xl font-semibold text-[#074293]">Study in Dubai - Unlock Global Opportunities in the Heart of the UAE
              !</h2>
            </div>
            
            <img 
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=2000&auto=format&fit=crop&q=80" 
              alt="Dubai University" 
              className="w-full h-[400px] object-cover shadow-md"
            />

            <section>
              <h3 className="text-2xl font-semibold mb-2 text-[#074293]">Country Overview</h3>
              <p className="text-justify">
              Dubai is rapidly becoming a top choice for Nepali students seeking international education, affordable tuition, and work experience in a global city. With Aspire Global Education, you can study at reputed universities and colleges in Dubai while enjoying flexible tuition plans, full-time work opportunities, and a direct path to global careers.


              </p>
              <p className="text-justify mt-4">
                Looking to study in one of the most dynamic and innovative education systems? The UAE offers internationally accredited programs, state-of-the-art facilities, and a vibrant multicultural environment perfect for Nepali students aiming for global success.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-2 text-[#074293]">Why Choose the UAE for Your Higher Studies?</h3>
              <ul className="list-disc pl-6 space-y-1">
              <li>20+ Colleges & Universities with International Recognition</li>
	<li>Affordable Tuition Fees with Payment After Visa</li>

	<li>	100% Visa Guarantee with Expert Support</li>
	<li>	Full-Time Work & Part-Time Study Options</li>
	<li>	Credit Transfer to UK, USA, Canada, Europe & Australia</li>
	<li>	Vibrant Multicultural Lifestyle & Safe Environment</li>
	<li>	Job Placement Opportunities in Dubai & Europe</li>


              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4 text-[#074293]">Popular Courses We Offer in Dubai</h3>
              <h4 className="text-xl font-semibold mb-3 text-[#074293]">Academic Programs:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <span className="bg-[#FF8E3C] text-white px-4 py-2 text-sm font-medium hover:bg-[#e87d2f] transition-colors duration-200 text-center">
                  Bachelor's & Master's in Business Administration
                </span>
                <span className="bg-[#FF8E3C] text-white px-4 py-2 text-sm font-medium hover:bg-[#e87d2f] transition-colors duration-200 text-center">
                  Bachelor's & Master's in Information Technology
                </span>
                <span className="bg-[#FF8E3C] text-white px-4 py-2 text-sm font-medium hover:bg-[#e87d2f] transition-colors duration-200 text-center">
                  Healthcare & Nursing Programs
                </span>
                <span className="bg-[#FF8E3C] text-white px-4 py-2 text-sm font-medium hover:bg-[#e87d2f] transition-colors duration-200 text-center">
                  Hospitality & Tourism Management
                </span>
                <span className="bg-[#FF8E3C] text-white px-4 py-2 text-sm font-medium hover:bg-[#e87d2f] transition-colors duration-200 text-center">
                  Engineering & Architecture
                </span>
              </div>

              <h4 className="text-xl font-semibold mb-3 text-[#074293]">Vocational & Career-Focused Courses:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <span className="bg-[#FF8E3C] text-white px-4 py-2 text-sm font-medium hover:bg-[#e87d2f] transition-colors duration-200 text-center">
                  Digital Marketing
                </span>
                <span className="bg-[#FF8E3C] text-white px-4 py-2 text-sm font-medium hover:bg-[#e87d2f] transition-colors duration-200 text-center">
                  Culinary Arts & Hotel Management
                </span>
                <span className="bg-[#FF8E3C] text-white px-4 py-2 text-sm font-medium hover:bg-[#e87d2f] transition-colors duration-200 text-center">
                  Logistics & Supply Chain
                </span>
                <span className="bg-[#FF8E3C] text-white px-4 py-2 text-sm font-medium hover:bg-[#e87d2f] transition-colors duration-200 text-center">
                  Graphic Design & Media
                </span>
                <span className="bg-[#FF8E3C] text-white px-4 py-2 text-sm font-medium hover:bg-[#e87d2f] transition-colors duration-200 text-center">
                  Aviation & Travel Management
                </span>
              </div>
              <p className="text-justify mt-4">
                These programs are designed to provide practical skills, strong employability, and global career pathways.
              </p>

              <h4 className="text-xl font-semibold mb-3 mt-8 text-[#074293]">Affordable Tuition Fees & Easy Payment Plans</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>No need to pay the full fee upfront – pay tuition after your visa is approved.</li>
                <li>We partner with affordable institutions offering international quality education.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4 text-[#074293]">Full Services for Nepali Students</h3>
              <p className="text-justify mb-4">
                With Aspire Global Education, your dream of studying in Dubai is fully supported from start to finish:
              </p>
              <ul className="space-y-1">
                <li className="flex items-start gap-3">
                  <span className="text-[#FF8E3C] text-xl">➜</span>
                  <span>Free Counseling & Course Selection</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF8E3C] text-xl">➜</span>
                  <span>Fast-Track Admission Process</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF8E3C] text-xl">➜</span>
                  <span>Visa Processing & Documentation Support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF8E3C] text-xl">➜</span>
                  <span>Hostel & Accommodation Arrangement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF8E3C] text-xl">➜</span>
                  <span>Airport Pickup & Welcome Assistance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF8E3C] text-xl">➜</span>
                  <span>Job Placement Support in Dubai</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FF8E3C] text-xl">➜</span>
                  <span>Ongoing Assistance After Arrival</span>
                </li>
              </ul>
              <p className="text-justify mt-6">
                As a Dubai-based consultancy, we're always close to help you succeed.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8 text-[#074293]">Start Your Dubai Study Journey Today</h3>
              <p className="text-justify">
                Whether you're planning to study business, IT, hospitality, or vocational courses, Dubai opens the door to global education, job opportunities, and international experience.
              </p>
              <p className="text-justify mt-4">
                Contact Aspire Global Education today to get started – and build your future in Dubai with confidence.
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
                      link.name === "Study in UAE"
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
            <div className="bg-[#f5f5f5] shadow-md overflow-hidden">
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
                      required
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
                      required
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
                      required
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
                      required
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
                      required
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
                      <option value="Business Administration">Business Administration</option>
                      <option value="Information Technology">Information Technology</option>
                      <option value="Healthcare & Nursing">Healthcare & Nursing</option>
                      <option value="Hospitality & Tourism Management">Hospitality & Tourism Management</option>
                      <option value="Engineering & Architecture">Engineering & Architecture</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Culinary Arts & Hotel Management">Culinary Arts & Hotel Management</option>
                      <option value="Logistics & Supply Chain">Logistics & Supply Chain</option>
                      <option value="Graphic Design & Media">Graphic Design & Media</option>
                      <option value="Aviation & Travel Management">Aviation & Travel Management</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-1 font-medium">Any Specific Course you want to enquiry about?</label>
                    <input
                      type="text"
                      name="specificCourse"
                      value={formData.specificCourse}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border text-sm"
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
                      required
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

export default UAE;










