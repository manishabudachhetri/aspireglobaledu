
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faFileLines, faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';
import { BsHourglassSplit } from "react-icons/bs";
import FooterSection from '../../components/home/FooterSection';

const SATPage = () => {
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
            <h1 className="text-4xl font-bold">Scholastic Assessment Test (SAT)</h1>
            <p className="mt-2">
              <Link to="/" className="hover:text-[#FF8E3C]">Home</Link> /{" "}
              <Link to="/preparation" className="hover:text-[#FF8E3C]">Test Preparation</Link> / SAT
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Side - Content */}
          <div className="md:col-span-2 space-y-6 order-2 md:order-1">
            <div>
              <p className="text-[#FF8E3C] text-xl mb-2">Our Test Preparation Class</p>
              <h2 className="text-[#074293] text-3xl font-bold mb-6">SAT Preparation Course</h2>
            </div>
            
            <div className="relative h-[400px] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=2070&auto=format&fit=crop"
                alt="SAT Test"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-[#074293] text-2xl font-bold mb-2">SAT Course Overview</h3>
              <p className="text-gray-700 text-justify">
                The Scholastic Assessment Test (SAT) is a standardized test widely used for college admissions in the United States. Our SAT preparation course is meticulously designed to help students achieve their target scores through comprehensive training and practice. With our experienced instructors and proven teaching methodology, we focus on developing all the necessary skills and strategies required to excel in each section of the SAT exam.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="bg-[#e3f2fd] p-5 flex items-center gap-4">
                  <BsHourglassSplit className="text-[#e91e63] text-4xl flex-shrink-0" />
                  <div>
                    <p className="text-[#e91e63] text-lg mb-1">Duration</p>
                    <p className="text-[#074293] font-semibold text-sm">12 Weeks</p>
                  </div>
                </div>
                <div className="bg-[#e3f2fd] p-5 flex items-center gap-4">
                  <FontAwesomeIcon icon={faUsers} className="text-[#e91e63] text-4xl flex-shrink-0" />
                  <div>
                    <p className="text-[#e91e63] text-lg mb-1">Class Time</p>
                    <p className="text-[#074293] font-semibold text-sm">23 Classes</p>
                  </div>
                </div>
                <div className="bg-[#e3f2fd] p-5 flex items-center gap-4">
                  <FontAwesomeIcon icon={faFileLines} className="text-[#e91e63] text-4xl flex-shrink-0" />
                  <div>
                    <p className="text-[#e91e63] text-lg mb-1">Certificates</p>
                    <p className="text-[#074293] font-semibold text-sm">Course Completion</p>
                  </div>
                </div>
                <div className="bg-[#e3f2fd] p-5 flex items-center gap-4">
                  <FontAwesomeIcon icon={faMoneyCheckDollar} className="text-[#e91e63] text-4xl flex-shrink-0" />
                  <div>
                    <p className="text-[#e91e63] text-lg mb-1">Cost</p>
                    <p className="text-[#074293] font-semibold text-sm">NRP:21,500</p>
                  </div>
                </div>
              </div>

              <h3 className="text-[#074293] text-2xl font-bold mb-2">Course Curriculum</h3>
              <p className="text-gray-700 text-justify">
                Our SAT course curriculum covers all key components of the exam. The program includes intensive practice sessions, mock tests, and personalized feedback. Students will learn essential strategies for each section, including:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                <li><strong>Math:</strong> Heart of Algebra, Problem Solving and Data Analysis, Passport to Advanced Math, Additional Topics in Math</li>
                <li><strong>Evidence-Based Reading:</strong> Command of Evidence, Words in Context, Analysis in History/Social Studies and Science</li>
                <li><strong>Writing and Language:</strong> Expression of Ideas, Standard English Conventions, Command of Evidence</li>
                <li><strong>Test-Taking Strategies:</strong> Time management, scoring criteria understanding, common pitfalls to avoid</li>
                <li><strong>Practice Materials:</strong> Access to extensive online resources, practice tests, and sample questions</li>
              </ul>
            </div>
          </div>

          {/* Right Side - Test Preparation Navigation */}
          <div className="md:col-span-1 order-1 md:order-2">
            <div className="flex flex-col gap-2">
              {['PTE', 'TOEFL', 'IELTS', 'GRE', 'SAT', 'GMAT'].map((test, index) => (
                <Link
                  key={index}
                  to={`/preparation/${test.toLowerCase()}`}
                  replace={true}
                  className={`text-left px-6 py-4 border transition-all duration-300 ${
                    test === "SAT"
                      ? "bg-[#FF8E3C] text-white"
                      : "bg-[#FFE5D0] text-[#074293] hover:bg-[#074293] hover:text-white"
                  }`}
                >
                  {test}
                </Link>
              ))}
            </div>

            {/* Form Section */}
            <div className="bg-[#f5f5f5] shadow-md overflow-hidden mt-6">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=500&auto=format&fit=crop" 
                  alt="Enroll Now" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold">Enroll Now</h3>
                </div>
              </div>
              <div className="px-6 py-8">
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm mb-1 font-medium">Name*</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1 font-medium">Phone*</label>
                    <input
                      type="tel"
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                      placeholder="Your phone"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1 font-medium">Email*</label>
                    <input
                      type="email"
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-1 font-medium">Preparation Class</label>
                    <select 
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                      defaultValue="SAT"
                    >
                      <option>SAT</option>
                      <option>GRE</option>
                      <option>TOEFL</option>
                      <option>IELTS</option>
                      <option>PTE</option>
                      <option>GMAT</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-1 font-medium">Message</label>
                    <textarea
                      rows={3}
                      className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
                      placeholder="Write your message..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#1a237e] text-white py-2 rounded flex items-center justify-center gap-2 hover:bg-[#0d154c]"
                  >
                    <span>Book Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
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

export default SATPage;





