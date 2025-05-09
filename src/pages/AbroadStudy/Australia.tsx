import  { useState, FormEvent, useEffect } from 'react';
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

const Australia: React.FC = () => {
  const navigate = useNavigate();

  const handleCountryNavigation = (path: string) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState<ContactForm>({
    fullName: '',
    address: '',
    email: '',
    contactNumber: '',
    qualification: '',
    passedOutYear: '',
    preferredCountry: 'Australia',
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
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus({ success: 'Thank you for your inquiry. We will contact you soon!' });
      setFormData({
        ...formData,
        fullName: '',
        address: '',
        email: '',
        contactNumber: '',
        qualification: '',
        passedOutYear: '',
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
            <h1 className="text-4xl font-bold">Study in Australia</h1>
            <p className="mt-2">
              <Link to="/" className="hover:text-[#FF8E3C]">Home</Link> /{" "}
              <Link to="/abroad-study" className="hover:text-[#FF8E3C]">Abroad Study</Link> / Australia
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
              <h2 className="text-4xl font-semibold text-[#074293]">Study In Australia - Build Your Future in a Global Education Hub!</h2>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              alt="Australia overview"
              className="w-full h-[400px] object-cover shadow-md"
            />

            <section>
              <h3 className="text-2xl font-semibold mb-2 text-[#074293]">Country Overview</h3>
              <p className="text-justify mb-4">
                Australia, a continent and country combined, offers world-renowned education with its innovative teaching methodology and cutting-edge research facilities. Known for its high standard of living, multicultural society, and stunning landscapes, Australia provides international students with an unparalleled study abroad experience.
              </p>
              
              <p className="text-justify mb-4">
              Australia is one of the most popular study destinations for Nepali students – offering top-quality education, work opportunities, and pathways to permanent residency. With Aspire Global Education, you can access career-focused programs in Business, Information Technology, and Vocational Courses with strong PR prospects.

              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-2 text-[#074293]">Why Choose Australia for Your Higher Education?</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Globally Recognized Degrees & Qualifications</li>
	<li>	High Employability & Skilled Job Market</li>
	<li>	Pathway to Permanent Residency (PR)</li>
	<li>	20-24 Months Post-Study Work Visa</li>
	<li>	Student-Friendly Environment & Diverse Culture</li>
	<li>	Part-Time Work Allowed During Studies</li>


              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4 text-[#074293]">Popular Programs in Australia</h3>
              <h4 className="text-xl font-semibold mb-3 text-[#074293]">Academic Programs:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <span className="bg-[#FF8E3C] text-white px-4 py-2 text-sm font-medium hover:bg-[#e87d2f] transition-colors duration-200 text-center">
                  Bachelor's & Master's in Business Administration
                </span>
                <span className="bg-[#FF8E3C] text-white px-4 py-2 text-sm font-medium hover:bg-[#e87d2f] transition-colors duration-200 text-center">
                  Bachelor's & Master's in Information Technology
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-3 text-[#074293]">Vocational PR Pathway Programs:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <span className="bg-[#FF8E3C] text-white px-4 py-2 text-sm font-medium hover:bg-[#e87d2f] transition-colors duration-200 text-center">
                  Certificate IV in Automotive Mechanical Diagnosis
                </span>
                <span className="bg-[#FF8E3C] text-white px-4 py-2 text-sm font-medium hover:bg-[#e87d2f] transition-colors duration-200 text-center">
                  Certificate IV in Automotive Management
                </span>
                <span className="bg-[#FF8E3C] text-white px-4 py-2 text-sm font-medium hover:bg-[#e87d2f] transition-colors duration-200 text-center">
                  Certificate III in Light Vehicle Mechanical Technology
                </span>
                <span className="bg-[#FF8E3C] text-white px-4 py-2 text-sm font-medium hover:bg-[#e87d2f] transition-colors duration-200 text-center">
                  Diploma in Automotive Management
                </span>
                <span className="bg-[#FF8E3C] text-white px-4 py-2 text-sm font-medium hover:bg-[#e87d2f] transition-colors duration-200 text-center">
                  Diploma in Leadership and Management
                </span>
                <span className="bg-[#FF8E3C] text-white px-4 py-2 text-sm font-medium hover:bg-[#e87d2f] transition-colors duration-200 text-center">
                  Advanced Diploma of Leadership and Management
                </span>
              </div>
              <h4 className="text-xl font-semibold mb-3 text-[#074293]">Affordable Tuition Fees & Flexible Payment Plans</h4>
              <p className="text-justify mb-4">
              We work with reputed colleges and institutions across Australia offering competitive tuition fees.

              </p>

             
            </section>  

            <section>
              <h3 className="text-2xl font-semibold mb-4 text-[#074293]">Complete Services for Nepali Students</h3>
              <p className="text-justify mb-4">At Aspire Global Education, we offer full support to make your Australian education journey smooth and successful:</p>
              <ul className="list-none pl-6 space-y-2">
                <li className="flex items-center">
                  <span className="text-[#FF8E3C] text-xl mr-2">➜</span>
                  Free Counseling & Course Selection
                </li>
                <li className="flex items-center">
                  <span className="text-[#FF8E3C] text-xl mr-2">➜</span>
                  Institute Admissions & Application Support
                </li>
                <li className="flex items-center">
                  <span className="text-[#FF8E3C] text-xl mr-2">➜</span>
                  Visa Processing Assistance
                </li>
                <li className="flex items-center">
                  <span className="text-[#FF8E3C] text-xl mr-2">➜</span>
                  GTE (Genuine Temporary Entrant) Preparation
                </li>
                <li className="flex items-center">
                  <span className="text-[#FF8E3C] text-xl mr-2">➜</span>
                  Pre-Departure Orientation
                </li>
                <li className="flex items-center">
                  <span className="text-[#FF8E3C] text-xl mr-2">➜</span>
                  Ongoing Support Even After You Land in Australia
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-2xl font-semibold mb-4 text-[#074293]">Turn Your Australian Study Dream into Reality
              </h3>
              <p className="text-justify">
              Whether you’re aiming for a degree in Business or IT, or want to pursue a vocational course with a PR pathway—Australia is the place to be.
              Get in touch with Aspire Global Education today to start your application with expert guidance and trusted support.
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
                      link.name === "Study in Australia"
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
                      <option value="Bachelor's & Master's in Business Administration">Bachelor's & Master's in Business Administration</option>
                      <option value="Bachelor's & Master's in Information Technology">Bachelor's & Master's in Information Technology</option>
                      <option value="Certificate IV in Automotive Mechanical Diagnosis">Certificate IV in Automotive Mechanical Diagnosis</option>
                      <option value="Certificate IV in Automotive Management">Certificate IV in Automotive Management</option>
                      <option value="Certificate III in Light Vehicle Mechanical Technology">Certificate III in Light Vehicle Mechanical Technology</option>
                      <option value="Diploma in Automotive Management">Diploma in Automotive Management</option>
                      <option value="Diploma in Leadership and Management">Diploma in Leadership and Management</option>
                      <option value="Advanced Diploma of Leadership and Management">Advanced Diploma of Leadership and Management</option>
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

export default Australia;









