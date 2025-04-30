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

const SOPPage = () => {
  const navigate = useNavigate();
  const [currentPage] = useState(0);
  const postsPerPage = 3;

  const recommendedPosts: BlogPost[] = [
    {
      date: "12th May",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Career Opportunities Abroad",
      description: "Explore exciting career prospects and job opportunities for international students in global markets.",
      path: "/blog/career-opportunities"
    },
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
            <h1 className="text-4xl font-bold">SOP</h1>
            <p className="mt-2">
              <Link to="/" className="hover:text-[#FF8E3C]">Home</Link> /{" "}
              <Link to="/blog" className="hover:text-[#FF8E3C]">Blog</Link> / SOP
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
            How to Write a Winning SOP
          </h1>
          <img 
            src="https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="How to Write a Winning SOP" 
            className="w-full max-w-2xl mb-6 shadow" 
          />
        
          <div className="w-full max-w-[95%]">
            <p className="mb-4 text-justify">
              A Statement of Purpose (SOP) is more than just an application requirement – it's your opportunity to tell your unique story and convince admissions committees of your potential. This crucial document should effectively communicate your academic background, career goals, and motivation for pursuing your chosen program. A well-crafted SOP can significantly influence your admission chances at top universities.
            </p>
            <p className="mb-4 text-justify">
              The key elements of a strong SOP include your academic journey, relevant experiences, career aspirations, and specific reasons for choosing the program and institution. Your statement should demonstrate clear progression in your academic and professional development, highlighting how your past experiences have prepared you for this next step. It's essential to show how the program aligns with your future goals.
            </p>

            {/* Highlight Box */}
            <div className="bg-blue-100 border-l-4 border-[#074293] text-[#333333] p-4 my-6 ml-8">
              <p className="font-semibold text-justify">
                When writing your SOP, focus on being specific, authentic, and engaging. Start with a compelling introduction that captures attention, develop your narrative with concrete examples and achievements, and conclude by connecting your goals with what the program offers. Avoid generic statements and clichés. Instead, provide specific instances that demonstrate your skills, experiences, and determination. Remember to tailor each SOP to the specific program and institution you're applying to.
              </p>
            </div>

            <p className="text-justify">
              Common mistakes to avoid include writing an overly emotional story, focusing too much on childhood experiences, or simply listing achievements without context. Your SOP should maintain a professional tone while showing personality and passion. Be honest in your statement – admissions committees can often detect exaggerated or false claims.
            </p>

            <p className="mb-4 text-justify">
              Research is crucial when writing your SOP. Understand the program's curriculum, faculty expertise, research opportunities, and unique features. Demonstrate how these align with your interests and goals. If you have specific professors you'd like to work with or research areas you're interested in, mention these, showing you've done your homework.
            </p>

            <p className="mb-4 text-justify">
              The writing process should include multiple drafts and revisions. Start early to allow time for reflection and refinement. Have others review your statement – professors, professionals in your field, or career counselors can provide valuable feedback. Pay attention to technical aspects like word limit, formatting requirements, and proper grammar and punctuation. A polished, well-written SOP reflects your professionalism and attention to detail.
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

export default SOPPage;











