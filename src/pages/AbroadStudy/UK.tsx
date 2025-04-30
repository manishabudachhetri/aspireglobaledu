import React, { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FooterSection from '../../components/home/FooterSection';

interface ContactForm {
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

const countryLinks = [
  { name: 'Study in Malta', path: '/abroad-study/malta' },
  { name: 'Study in Dubai', path: '/abroad-study/dubai' },
  { name: 'Study in UK', path: '/abroad-study/uk' },
  { name: 'Study in Australia', path: '/abroad-study/australia' }
];

const UK: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    fullName: '',
    address: '',
    email: '',
    contactNumber: '',
    qualification: '',
    passedOutYear: '',
    preferredCountry: 'UK', // Default to current country
    preferredDegree: '',
    course: '',
    specificCourse: '',
    enquiry: ''
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
      // Form validation
      if (!formData.fullName || !formData.email || !formData.contactNumber || !formData.enquiry) {
        throw new Error('Please fill in all required fields');
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      const phoneRegex = /^\+?[\d\s-]{10,}$/;
      if (!phoneRegex.test(formData.contactNumber)) {
        throw new Error('Please enter a valid phone number');
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus({ success: 'Thank you for your inquiry. We will contact you soon!' });
      setFormData({
        fullName: '',
        address: '',
        email: '',
        contactNumber: '',
        qualification: '',
        passedOutYear: '',
        preferredCountry: 'UK',
        preferredDegree: '',
        course: '',
        specificCourse: '',
        enquiry: ''
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
            <h1 className="text-4xl font-bold">Study in UK</h1>
            <p className="mt-2">
              <Link to="/" className="hover:text-[#FF8E3C]">Home</Link> /{" "}
              <Link to="/abroad-study" className="hover:text-[#FF8E3C]">Abroad Study</Link> / UK
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
              <h2 className="text-4xl font-semibold text-[#074293]">Study in the UK from Nepal – A World-Class Education Awaits!
              </h2>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=2000&auto=format&fit=crop&q=80" 
              alt="London University" 
              className="w-full h-[400px] object-cover shadow-md"
            />
            <section>
              <h3 className="text-2xl font-semibold mb-2 text-[#074293]">Country Overview</h3>
              <p className="text-justify">
                The United Kingdom, comprising England, Scotland, Wales, and Northern Ireland, stands as a global leader in higher education. Home to some of the world's oldest and most prestigious universities, including Oxford and Cambridge, the UK offers a rich blend of historical heritage and cutting-edge innovation. With its multicultural society, vibrant cities, and strong economy, the UK provides international students with an exceptional educational experience.
              </p>
              <p className="text-justify mt-4">
              Dreaming of studying in one of the world’s most prestigious education systems? The United Kingdom offers globally recognized degrees, top-ranked universities, and a multicultural environment perfect for Nepali students aiming for international success.

              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-2 text-[#074293]">Why Choose the UK for Your Higher Studies?</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>World-Renowned Universities & Colleges</li>
                <li>Up to 2 Years Post-Study Work Visa (Graduate Route)</li>
                <li>Part-Time Work Opportunities for Students</li>
                <li>Scholarships & Tuition Discounts Available</li>
                <li>Gateway to Global Career Opportunities</li>
                <li>Fast & Transparent Visa Process</li>
              </ul>

              <section className="mt-12">
                <h3 className="text-2xl font-semibold mb-4 text-[#074293]">Popular Courses in UK</h3>
                <p className="text-justify mb-6">
                  We work with leading universities and colleges across the UK that offer:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <span className="bg-[#FF8E3C] text-white px-4 py-2 text-sm font-medium hover:bg-[#e87d2f] transition-colors duration-200 text-center">
                    Business & Management
                  </span>
                  <span className="bg-[#FF8E3C] text-white px-4 py-2 text-sm font-medium hover:bg-[#e87d2f] transition-colors duration-200 text-center">
                    IT & Computing
                  </span>
                  <span className="bg-[#FF8E3C] text-white px-4 py-2 text-sm font-medium hover:bg-[#e87d2f] transition-colors duration-200 text-center">
                    Nursing & Healthcare
                  </span>
                  <span className="bg-[#FF8E3C] text-white px-4 py-2 text-sm font-medium hover:bg-[#e87d2f] transition-colors duration-200">
                    Engineering
                  </span>
                  <span className="bg-[#FF8E3C] text-white px-4 py-2 text-sm font-medium hover:bg-[#e87d2f] transition-colors duration-200">
                    Hospitality & Tourism
                  </span>
                  <span className="bg-[#FF8E3C] text-white px-4 py-2 text-sm font-medium hover:bg-[#e87d2f] transition-colors duration-200">
                    Accounting & Finance
                  </span>
                  <span className="bg-[#FF8E3C] text-white px-4 py-2 text-sm font-medium hover:bg-[#e87d2f] transition-colors duration-200">
                    Social Sciences
                  </span>
                </div>
                <p className="text-justify mt-6">
                  We help you choose the right program based on your qualifications, budget, and career plans.
                </p>

                <h4 className="text-xl font-semibold mb-3 mt-8 text-[#074293]">Affordable Tuition Fees & Flexible Payment Plans</h4>
                <p className="text-justify">
                Tuition Fees Starting from £6,000.
                We collaborate with a wide range of UK institutions offering affordable options. Whether you're looking for foundation, undergraduate, or postgraduate programs, we can guide you to the best course with tuition fees starting as low as £9000 per year
                </p>
              
                

                <h3 className="text-2xl font-semibold mb-4 mt-8 text-[#074293]">Complete Support for Nepali Students</h3>
                <p className="text-justify mb-4">At Aspire Global Education, we provide end-to-end support:</p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF8E3C] text-xl">➜</span>
                    <span>Career Counseling & Course Selection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF8E3C] text-xl">➜</span>
                    <span>University Admission Processing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF8E3C] text-xl">➜</span>
                    <span>Visa Documentation & Guidance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF8E3C] text-xl">➜</span>
                    <span>IELTS Preparation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#FF8E3C] text-xl">➜</span>
                    <span>Pre-Departure Assistance</span>
                  </li>
                </ul>
                <p className="text-justify mt-6">
                  With options like tuition payment after visa approval at select universities, studying in the UK is now easier and more accessible than ever.
                </p>

                <h3 className="text-2xl font-semibold mb-4 mt-8 text-[#074293]">Take the First Step Toward a UK Degree</h3>
                <p className="text-justify">
                  Ready to study in the UK? Let Aspire Global Education help you achieve your academic dreams in one of the world's top study destinations.
                  Contact us today for a free consultation and personalized admission support.
                </p>
              </section>
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
                      link.name === "Study in UK"
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
                      <option value="Business & Management">Business & Management</option>
                      <option value="IT & Computing">IT & Computing</option>
                      <option value="Nursing & Healthcare">Nursing & Healthcare</option>
                      <option value="Engineering">Engineering</option>
                      <option value="Hospitality & Tourism">Hospitality & Tourism</option>
                      <option value="Accounting & Finance">Accounting & Finance</option>
                      <option value="Social Sciences">Social Sciences</option>
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

export default UK;





















