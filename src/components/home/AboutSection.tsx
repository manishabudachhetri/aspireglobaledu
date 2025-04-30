
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const AboutSection = () => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
    navigate('/aboutus'); // Changed from '/about' to '/aboutus' to match the route in App.tsx
  };

  return (
    <section className="pt-0 pb-2" id="about">
      {/* About Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 p-4 md:p-8 items-start">
        {/* Left Content */}
        <div className="mt-16 md:mt-16">
          <p className="text-2xl text-orange-500 font-medium mb-1">About Aspire Global Education</p>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2 text-justify">
            Grow your career with Aspire Global Education Consultancy
          </h2>
          <p className="text-black-700 mb-4 text-justify">
            Aspire Global Education Consultancy Pvt. Ltd. is a professional educational consultancy dedicated to providing high-quality, affordable, and reliable test preparation and study abroad guidance. We specialize in assisting students who aspire to pursue higher education in Dubai, the UK, Malta, and other global destinations. Our commitment to continuous improvement ensures excellence in our services. We offer authentic, up-to-date information on universities, and our experienced team streamlines the application process, making it efficient and hassle-free for students.
          </p>
          
          <button 
            onClick={handleReadMore}
            className="flex items-center space-x-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded transition-colors duration-300"
          >
            <span>Read More</span>
            <BsArrowRight />
          </button>
        </div>

        {/* Right Image */}
        <div className="relative aspect-square w-full max-w-[450px] mx-auto overflow-hidden px-4">
          <img
            src="https://images.unsplash.com/photo-1526781480235-d79b4866aa9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGdyYWR1YXRpb258ZW58MHx8MHx8fDA%3D"
            className="w-full h-full object-cover"
            alt="Aspire Global Education"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;



























