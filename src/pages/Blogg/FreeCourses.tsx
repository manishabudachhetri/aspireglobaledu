import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FooterSection from '../../components/home/FooterSection';

interface BlogPost {
  date: string;
  image: string;
  title: string;
  description: string;
  path: string;
}

const FreeCoursesPage = () => {
  const navigate = useNavigate();
  const [currentPage] = useState(0);
  const postsPerPage = 3;

  const handlePostClick = (path: string) => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
    navigate(path);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, []);


  const recommendedPosts: BlogPost[] = [
    {
      date: "12th Feb",
      image: "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Guide to Study in Australia 2024",
      description: "Everything you need to know about studying in Australia: university options, admission requirements, visa processes, and living costs.",
      path: "/blog/guide-to-australia"
    },
    {
      date: "21th Dec",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "IELTS Preparation Tips and Tricks",
      description: "Master the IELTS exam with our expert strategies. Get practical tips for all four sections: Reading, Writing, Listening, and Speaking.",
      path: "/blog/ielts-preparation"
    },
    {
      date: "15th Mar",
      image: "https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Scholarship Opportunities in Dubai",
      description: "Explore lucrative scholarship opportunities in Dubai's top universities. Learn about eligibility criteria and application processes.",
      path: "/blog/scholarship-dubai"
    }
  ];

  
  const getCurrentPosts = () => {
    const startIndex = currentPage * postsPerPage;
    return recommendedPosts.slice(startIndex, startIndex + postsPerPage);
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
            <h1 className="text-4xl font-bold">Free Online Courses</h1>
            <p className="mt-2">
              <Link to="/" className="hover:text-[#FF8E3C]">Home</Link> /{" "}
              <Link to="/blog" className="hover:text-[#FF8E3C]">Blog</Link> / Free Courses
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
            Free Online Courses From Top Universities
          </h1>
          <img 
            src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Free Online Courses From Top Universities" 
            className="w-full max-w-2xl mb-6 shadow" 
          />
        
          <div className="w-full max-w-[95%]">
            <p className="mb-4 text-justify">
              In today's digital age, access to quality education shouldn't be limited by financial constraints. Leading universities worldwide are increasingly offering free online courses, making world-class education accessible to everyone. These courses, often called MOOCs (Massive Open Online Courses), cover a wide range of subjects from computer science and business to arts and humanities, allowing learners to acquire new skills and knowledge at their own pace.
            </p>
            <p className="mb-4 text-justify">
              These online courses are designed and taught by experienced professors from prestigious institutions, ensuring high-quality educational content. Students can access video lectures, reading materials, assignments, and interactive discussions, creating a comprehensive learning experience. Many courses also offer certificates of completion, which can be valuable additions to your resume and professional portfolio.
            </p>

            {/* Highlight Box */}
            <div className="bg-blue-100 border-l-4 border-[#074293] text-[#333333] p-4 my-6 ml-8">
              <p className="font-semibold text-justify">
                Key benefits of free online courses include flexible learning schedules, self-paced study options, and the ability to learn from anywhere in the world. Whether you're a student looking to supplement your education, a professional seeking to upgrade your skills, or someone pursuing personal development, these courses provide an excellent opportunity to expand your knowledge without financial burden. Many courses also offer peer interaction and discussion forums, creating a global learning community.
              </p>
            </div>

            <p className="text-justify">
              Popular platforms offering free courses include Coursera, edX, and FutureLearn, which partner with universities like Harvard, MIT, Stanford, and other leading institutions. These platforms regularly update their course offerings to reflect current industry trends and demands. While the courses are free to audit, some platforms offer optional paid certificates upon completion, which can be valuable for professional development.
            </p>
            <p className="mb-4 text-justify">
              For international students, these courses can be particularly beneficial in preparing for university studies abroad. They provide exposure to different teaching styles, help improve English language skills, and offer insights into specific academic disciplines. Additionally, completing relevant online courses demonstrates initiative and commitment to learning, which can strengthen university applications and scholarship opportunities.
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

export default FreeCoursesPage;



















