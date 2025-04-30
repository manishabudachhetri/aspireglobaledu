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

const IeltsprepPage = () => {
  const navigate = useNavigate();
  const [currentPage] = useState(0);
  const postsPerPage = 3;

  const recommendedPosts: BlogPost[] = [
    {
      date: "15th Mar",
      image: "https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Scholarship Opportunities in Dubai",
      description: "Explore lucrative scholarship opportunities in Dubai's top universities. Learn about eligibility criteria and application processes.",
      path: "/blog/scholarship-dubai"
    },
    {
      date: "3rd Apr",
      image: "https://images.pexels.com/photos/2422278/pexels-photo-2422278.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Student Life in the UK",
      description: "Experience the vibrant student life in the UK: from campus activities to city exploration. Get insights on accommodation and social life.",
      path: "/blog/student-life-uk"
    },
    {
      date: "21st Dec",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Top Universities in the Australia",
      description: "Discover the world's leading universities, their rankings, specializations, and what makes them stand out in global education.",
      path: "/blog/top-universities-australia"
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
            <h1 className="text-4xl font-bold">IELTS Preparation</h1>
            <p className="mt-2">
              <Link to="/" className="hover:text-[#FF8E3C]">Home</Link> /{" "}
              <Link to="/blog" className="hover:text-[#FF8E3C]">Blog</Link> / IELTS Preparation
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
            IELTS Preparation Tips and Tricks
          </h1>
          <img 
            src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="IELTS Preparation Tips and Tricks" 
            className="w-full max-w-2xl mb-6 shadow" 
          />
        
          <div className="w-full max-w-[95%]">
            <p className="mb-4 text-justify">
              The International English Language Testing System (IELTS) is a crucial gateway for international education and global opportunities. As one of the world's most recognized English proficiency tests, IELTS evaluates your ability to listen, read, write, and speak in English. Whether you're planning to study abroad, migrate, or advance your career, achieving a good IELTS score is often a key requirement.
            </p>
            <p className="mb-4 text-justify">
              Success in IELTS requires a strategic approach and thorough preparation. The test consists of four modules: Listening (40 minutes), Reading (60 minutes), Writing (60 minutes), and Speaking (11-14 minutes). Each module requires specific skills and techniques, and understanding the test format and requirements is crucial for achieving your target band score.
            </p>

            {/* Highlight Box */}
            <div className="bg-blue-100 border-l-4 border-[#074293] text-[#333333] p-4 my-6 ml-8">
              <p className="font-semibold text-justify">
                Essential IELTS preparation strategies include regular practice with authentic test materials, developing strong time management skills, and understanding the scoring criteria for each module. Focus on expanding your vocabulary, improving your grammar, and enhancing your listening skills through regular exposure to English media. For the Speaking and Writing modules, practicing with structured responses and receiving expert feedback is crucial for improvement.
              </p>
            </div>

            <p className="text-justify">
              For the Listening module, practice with different accents and note-taking techniques. In Reading, develop skimming and scanning skills to manage time effectively. The Writing module requires familiarity with various task types and the ability to structure coherent responses. Speaking success depends on fluency, pronunciation, and the ability to express ideas clearly and confidently.
            </p>

            <p className="mb-4 text-justify">
              Common mistakes to avoid include spending too much time on difficult questions, using memorized responses in Speaking and Writing tasks, and neglecting to read questions carefully. Regular mock tests under timed conditions, combined with targeted practice in weaker areas, can significantly improve your performance. Remember, IELTS evaluates your practical English skills, so immerse yourself in English through daily activities like reading news, watching documentaries, and engaging in conversations.
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

export default IeltsprepPage;










