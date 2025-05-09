
import  { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CTASection from '../components/home/CTASection.tsx';
import WorkingProcess from '../components/home/WorkingProcess.tsx';
import PartnersSection from '../components/home/PartnersSection';
import FooterSection from '../components/home/FooterSection';
import sishanImage from '../assets/images/sishan.jpg';
import sapanaImage from '../assets/images/sapana.jpg';
import mdImage from '../assets/images/md.jpg';
import ceoImage from '../assets/images/ceo.jpg';

const Aboutus = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, []);

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
            <h1 className="text-4xl font-bold">About us</h1>
            <p className="mt-2">
              <Link to="/" className="hover:text-[#FF8E3C]">Home</Link> / About Us
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 w-full">
          <div className="h-2 bg-[#074293]"></div>
          <div className="h-2 bg-[#FF8E3C]"></div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="max-w-3xl">
          <p className="text-sm text-[#FF8E3C] font-semibold mb-2">
            About Aspire Global Education
          </p>
          <h2 className="text-3xl font-bold text-[#074293] mb-6">
            Grow your career with Aspire Global Education Consultancy
          </h2>
        </div>
        
        {/* First Grid Section */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
         
          <div className="space-y-6 text-black text-justify">
            <p>
              Aspire Global Education Consultancy Pvt. Ltd. is a trusted and professional education consultancy. We assist students in pursuing higher education in Dubai, the UK, Malta, and other global destinations.
            </p>
            <p>
            With over 500+ successful placements and a global reach, our qualified and passionate team is committed to delivering genuine, realistic solutions tailored to the unique aspirations of each student. We pride ourselves on our core values of conviction, reliability, and unwavering commitment, ensuring that students gain invaluable experiences while studying abroad. 
            At Aspire Global Education, we believe in empowering the next generation of leaders and innovators to achieve their educational goals.
            </p>
           
          </div>
          
          {/* Images Container */}
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] w-full overflow-hidden shadow-lg">
              <img 
                src="https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80" 
                alt="Student Consultation"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="aspect-[3/4] w-full overflow-hidden shadow-lg mt-16">
              <img 
                src="https://images.pexels.com/photos/6147276/pexels-photo-6147276.jpeg?auto=compress&cs=tinysrgb&w=1200&q=80" 
                alt="Campus Life"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* CEO and MD Section */}
        <div className="mt-16">
          {/* CEO Section */}
          <div className="grid md:grid-cols-5 gap-0">
            <div className="md:col-span-2 bg-white shadow-lg overflow-hidden">
              <div className="h-[800px] md:h-[800px] w-full relative">
                <div className="absolute inset-0 flex items-center justify-center bg-[#f8faff] p-4">
                  <div className="w-full md:w-[500px] h-[700px] overflow-hidden">
                    <img 
                      src={ceoImage}
                      alt="CEO"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-3 bg-[#edf4ff] shadow-lg overflow-hidden">
              <div className="px-4 md:px-16 pt-4 pb-8 flex flex-col justify-between h-auto md:h-[800px]">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#074293] mb-3">Message from CEO</h3>
                  <div className="space-y-2 text-black text-justify">
                    <p className="text-base md:text-lg leading-relaxed">
                      As the founder and CEO of Aspire Global Education, I would like to take a moment to share our vision and commitment to empowering students as they embark on their journeys toward higher education. What began as a vision to provide expert guidance for students seeking to study abroad has grown into a global initiative built on trust, personalized support, and a commitment to long-term success.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      However, the complex processes of admissions, financial planning, and visa applications can be overwhelming. That's why our mission is to make these pathways smoother by offering tailored guidance that empowers students to make informed decisions about their futures.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      We believe that every student deserves genuine and realistic solutions tailored to their unique aspirations. By focusing on personalized experiences, we pave the way for our students to gain invaluable knowledge and cultural experiences that will shape their futures.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      Together, let us inspire and empower these aspiring individuals to achieve their educational goals and unlock endless opportunities.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed mb-4">
                      Warm regards,
                    </p>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <p className="font-bold text-[#074293] text-lg md:text-xl">Chapendra Baral</p>
                  <p className="text-sm md:text-base font-bold text-black">Chief Executive Officer</p>
                  <p className="text-sm md:text-base text-black">Aspire Global Education</p>
                </div>
              </div>
            </div>
          </div>

        
          <div className="my-8 md:my-12"></div>

          {/* MD Section */}
          <div className="grid md:grid-cols-5 gap-0">
            <div className="md:col-span-3 bg-[#edf4ff] shadow-lg overflow-hidden">
              <div className="px-4 md:px-16 pt-4 pb-8 flex flex-col h-auto md:h-[600px]">
                <div className="mt-8 md:mt-16">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#074293] mb-3">Message from MD</h3>
                  <div className="space-y-2 text-black text-justify">
                    <p className="text-base md:text-lg leading-relaxed">
                      At Aspire Global Education, our mission is simple - to empower students with the guidance and support they need to achieve their dreams of studying abroad. As Managing Director, I take pride in leading a team that prioritizes trust, personalized advice, and long-term student success.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      We understand that the journey to international education can be complex. That's why we offer tailored solutions, helping students make informed decisions with confidence and clarity.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed">
                      Together, we're not just shaping academic paths, we're helping build brighter futures.
                    </p>
                    <div className="space-y-1 mt-4 md:mt-8">
                      <p className="text-base md:text-lg leading-relaxed mb-2">Warm regards,</p>
                      <p className="font-bold text-[#074293] text-lg md:text-xl">Bishal Chapagain</p>
                      <p className="text-sm md:text-base font-bold text-black">Managing Director</p>
                      <p className="text-sm md:text-base text-black">Aspire Global Education</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 bg-white shadow-lg overflow-hidden">
              <div className="h-[600px] w-full relative">
                <div className="absolute inset-0 flex items-center justify-center bg-[#f8faff] p-4">
                  <div className="w-full md:w-[500px] h-[500px] overflow-hidden">
                    <img 
                      src={mdImage}
                      alt="MD"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          
            <div className="space-y-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="h-[400px] overflow-hidden border-4 border-[#FF8E3C]">
                  <img 
                    src={sishanImage} 
                    alt="Team Member 1"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-[#074293]">Sishan Adhikari</h3>
                <p className="text-[#FF8E3C] font-medium">Sr.Counselor</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="h-[400px] overflow-hidden border-4 border-[#FF8E3C]">
                  <img 
                    src={sapanaImage} 
                    alt="Team Member 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-[#074293]">Sapana Gadal</h3>
                <p className="text-[#FF8E3C] font-medium">Jr.Counselor</p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="mb-20">
          <CTASection />
        </div>

       
        <div className="mb-20">
          <WorkingProcess />
        </div>

     
        <div className="mb-10">
          <PartnersSection />
        </div>

        {/* Form Section */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#f5f5f5] shadow-md overflow-hidden mt-16">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFwfGVufDB8fDB8fHww"
                alt="Study Abroad" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">Interested in studying abroad with ASPIRE?</h3>
              </div>
            </div>
            <div className="px-6 py-8">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm mb-1 font-medium">Full Name*</label>
                  <input
                    type="text"
                    name="fullName"
                    className="w-full px-3 py-2 border text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 font-medium">Address*</label>
                  <input
                    type="text"
                    name="address"
                    className="w-full px-3 py-2 border text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 font-medium">Email*</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-3 py-2 border text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 font-medium">Contact Number*</label>
                  <input
                    type="tel"
                    name="contactNumber"
                    className="w-full px-3 py-2 border text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1 font-medium">Preferred Country*</label>
                  <select
                    name="preferredCountry"
                    className="w-full px-3 py-2 border text-sm"
                    required
                  >
                    <option value="">Select Country</option>
                    <option value="UK">UK</option>
                    <option value="Australia">Australia</option>
                    <option value="Malta">Malta</option>
                    <option value="Dubai">Dubai</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-1 font-medium">Course*</label>
                  <select
                    name="course"
                    className="w-full px-3 py-2 border text-sm"
                    required
                  >
                    <option value="">Select Course</option>
                    <option value="Business & Management">Business & Management</option>
                    <option value="IT & Computing">IT & Computing</option>
                    <option value="Information Technology">Information Technology</option>
                    <option value="Nursing & Healthcare">Nursing & Healthcare</option>
                    <option value="Health & Social Care">Health & Social Care</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Hospitality & Tourism">Hospitality & Tourism</option>
                    <option value="Accounting & Finance">Accounting & Finance</option>
                    <option value="Social Sciences">Social Sciences</option>
                    <option value="Arts & Design">Arts & Design</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-1 font-medium">Message*</label>
                  <textarea
                    name="message"
                    rows={3}
                    className="w-full px-3 py-2 border text-sm"
                    required
                  ></textarea>
                </div>
                <div className="flex justify-start">
                  <button
                    type="submit"
                    className="px-6 bg-[#074293] text-white py-2 hover:bg-[#052e68] transition-colors duration-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

   
      <div className="w-full">
        <FooterSection />
      </div>
    </div>
  );
};

export default Aboutus;

























































