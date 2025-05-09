
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const AboutSection = () => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
    navigate('/aboutus'); 
  };

  return (
    <section className="pt-0 pb-2" id="about">
      {/* About Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 p-4 md:p-8 items-center max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="mt-4 md:mt-16 space-y-4"> 
          <p className="text-lg md:text-xl text-orange-500 font-medium">About Aspire Global Education</p>
          <h2 className="text-2xl md:text-4xl font-bold text-blue-900 leading-tight">
            Grow your career with Aspire Global Education Consultancy
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            Aspire Global Education Consultancy Pvt. Ltd. is a professional educational consultancy dedicated to providing high-quality, affordable, and reliable test preparation and study abroad guidance. We specialize in assisting students who aspire to pursue higher education in Dubai, the UK, Malta, and other global destinations. Our commitment to continuous improvement ensures excellence in our services. We offer authentic, up-to-date information on universities, and our experienced team streamlines the application process, making it efficient and hassle-free for students.
          </p>
          
          <button 
            onClick={handleReadMore}
            className="inline-flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 text-sm md:text-base transition-colors duration-300"
          >
            <span>Read More</span>
            <BsArrowRight className="text-lg" />
          </button>
        </div>

        {/* Right Image */}
        <div className="relative w-full aspect-[4/3] md:aspect-square mt-8 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1526781480235-d79b4866aa9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGdyYWR1YXRpb258ZW58MHx8MHx8fDA%3D"
            alt="Aspire Global Education"
            className="w-full h-full object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

































