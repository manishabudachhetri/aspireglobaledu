import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import FooterSection from "../../components/home/FooterSection";

interface BlogPost {
  date: string;
  image: string;
  title: string;
  description: string;
  path: string;
}

const CareeroppPage = () => {
  const navigate = useNavigate();
  const [currentPage] = useState(0);
  const postsPerPage = 3;

  const recommendedPosts: BlogPost[] = [
    {
      date: "15th Mar",
      image: "https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Student Visa Guide",
      description: "Complete guide to student visa application process, requirements, and tips for successful approval.",
      path: "/blog/student-visa-guide"
    },
    {
      date: "10th Apr",
      image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Free Online Courses",
      description: "Discover valuable free online courses to enhance your skills and knowledge in various fields.",
      path: "/blog/free-courses"
    },
    {
      date: "12th Feb",
      image: "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Guide to Study in Australia 2024",
      description: "Everything you need to know about studying in Australia: university options, admission requirements, and more.",
      path: "/blog/guide-to-australia"
    }
  ];

  const handlePostClick = (path: string) => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
    navigate(path);
  };

  const getCurrentPosts = () => {
    const startIndex = currentPage * postsPerPage;
    return recommendedPosts.slice(startIndex, startIndex + postsPerPage);
  };

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
            <h1 className="text-4xl font-bold">Career Opportunities</h1>
            <p className="mt-2">
              <Link to="/" className="hover:text-[#FF8E3C]">Home</Link> /{" "}
              <Link to="/blog" className="hover:text-[#FF8E3C]">Blog</Link> / Career Opportunities
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 w-full">
          <div className="h-2 bg-[#074293]"></div>
          <div className="h-2 bg-[#FF8E3C]"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full py-12">
        <div className="pl-16 pr-8">
          <p className="text-sm text-[#FF8E3C] font-semibold mb-2">Our Initiative</p>
          <h1 className="text-3xl font-bold text-[#074293] mb-6">
            Career Opportunities After Study Abroad
          </h1>
          <img 
            src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Free Online Courses From Top Universities" 
            className="w-full max-w-2xl mb-6 shadow" 
          />
        
          <div className="w-full max-w-[95%]">
            <p className="mb-4 text-justify">
              Studying abroad opens up a world of career opportunities that extend far beyond just earning a degree. International education equips students with a unique set of skills and experiences that are highly valued in today's globalized job market. From developing cross-cultural communication abilities to gaining exposure to diverse working environments, the benefits of studying abroad can significantly enhance your career prospects.
            </p>
            <p className="mb-4 text-justify">
              One of the primary advantages of international education is the opportunity to build a global professional network. During your studies, you'll connect with peers, professors, and industry professionals from various countries, creating valuable relationships that can lead to future career opportunities. Many universities also offer internship programs and industry partnerships, allowing students to gain practical experience in their field while studying.
            </p>

            {/* Highlight Box */}
            <div className="bg-blue-100 border-l-4 border-[#074293] text-[#333333] p-4 my-6 ml-8">
              <p className="font-semibold text-justify">
                According to recent studies, graduates with international education experience are 30% more likely to secure employment within 6 months of graduation compared to their peers. Additionally, they often command higher starting salaries and have faster career progression due to their global perspective and enhanced skill set. Many multinational companies specifically seek candidates with international exposure for their ability to navigate diverse business environments.
              </p>
            </div>

            <p className="text-justify">
              The career paths available after studying abroad are diverse and promising. Many graduates find opportunities in multinational corporations, international organizations, or start their own global ventures. Some popular career trajectories include international business development, global consulting, cross-cultural management, diplomatic services, and international education administration. The experience of studying abroad also develops essential soft skills like adaptability, problem-solving, and independent thinking - qualities that employers consistently rank as highly desirable.
            </p>
            <p className="mb-4 text-justify">
              Moreover, studying abroad often provides access to post-study work opportunities in the host country. Many countries offer special work visas or pathways to permanent residency for international graduates, creating additional career possibilities. Whether you choose to work in your host country, return home, or explore opportunities in other parts of the world, an international education serves as a powerful catalyst for global career success.
            </p>
          </div>
        </div>
      </div>

      {/* Recommended Section */}
      <section className="py-16 px-4 text-center bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm text-orange-500 font-semibold mb-1">Related Blog</p>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">You May Also Like</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            {getCurrentPosts().map((post, index) => (
              <div
                key={index}
                className="bg-white overflow-hidden shadow-md text-left relative h-[420px] max-w-[350px] mx-auto w-full cursor-pointer hover:shadow-xl transition-all duration-300"
                onClick={() => handlePostClick(post.path)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handlePostClick(post.path);
                  }
                }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute top-36 right-4 bg-[#074293] text-white w-16 h-16 rounded-full flex items-center justify-center text-sm font-medium">
                  {post.date}
                </div>
                <div className="p-6 pt-8">
                  <h3 className="text-[#074293] font-semibold text-lg mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {post.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <FooterSection />
    </div>
  );
};

export default CareeroppPage;













