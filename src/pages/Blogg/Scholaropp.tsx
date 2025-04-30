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

const ScholaroppPage = () => {
  const navigate = useNavigate();
  const [currentPage] = useState(0);
  const postsPerPage = 3;

  const recommendedPosts: BlogPost[] = [
    {
      date: "3rd Apr",
      image: "https://images.pexels.com/photos/2422278/pexels-photo-2422278.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Student Life in the UK",
      description: "Experience the vibrant student life in the UK: from campus activities to city exploration. Get insights on accommodation and social life.",
      path: "/blog/student-life-uk"
    },
    {
      date: "5th Apr",
      image: "https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Top Universities in Australia",
      description: "Discover Australia's leading universities, their rankings, specializations, and what makes them stand out in global education.",
      path: "/blog/top-universities-australia"
    },
    {
      date: "7th Jun",
      image: "https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "How to Write a Winning SOP",
      description: "Learn the essential tips and strategies for crafting a compelling Statement of Purpose that stands out in your university applications.",
      path: "/blog/how-to-write-sop"
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
            <h1 className="text-4xl font-bold">Scholarship Opportunities</h1>
            <p className="mt-2">
              <Link to="/" className="hover:text-[#FF8E3C]">Home</Link> /{" "}
              <Link to="/blog" className="hover:text-[#FF8E3C]">Blog</Link> / Scholarship Opportunities
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
            Scholarship Opportunities in Dubai
          </h1>
          <img 
            src="https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Scholarship Opportunities" 
            className="w-full max-w-2xl mb-6 shadow" 
          />
        
          <div className="w-full max-w-[95%]">
            <p className="mb-4 text-justify">
              Scholarships represent invaluable opportunities for students to pursue their academic dreams without the burden of financial constraints. From merit-based awards to need-based grants, various scholarship programs are available worldwide, offering partial to full funding for international education. Understanding these opportunities and their requirements is crucial for successful applications.
            </p>
            <p className="mb-4 text-justify">
              Major scholarship categories include government scholarships, university-specific awards, organization-sponsored programs, and country-specific opportunities. These can cover tuition fees, living expenses, travel costs, and sometimes even provide additional allowances. Notable programs include the Fulbright Scholarships, Commonwealth Scholarships, Erasmus Mundus, and various country-specific government scholarships.
            </p>

            {/* Highlight Box */}
            <div className="bg-blue-100 border-l-4 border-[#074293] text-[#333333] p-4 my-6 ml-8">
              <p className="font-semibold text-justify">
                Key factors in successful scholarship applications include strong academic performance, leadership potential, extracurricular activities, and clear career goals. A compelling personal statement, strong letters of recommendation, and a well-researched study plan are essential components. Start your application process early, as many prestigious scholarships have deadlines 6-12 months before the academic year begins. Pay careful attention to eligibility criteria and required documentation.
              </p>
            </div>

            <p className="text-justify">
              Research-based scholarships often require a detailed research proposal and academic references. For undergraduate scholarships, emphasis is typically placed on academic excellence and extracurricular achievements. Graduate scholarships might focus more on research potential, work experience, and specific skill sets relevant to the chosen field of study.
            </p>

            <p className="mb-4 text-justify">
              Beyond traditional academic scholarships, opportunities exist in specialized fields like sports, arts, and community service. Many organizations also offer scholarships targeting specific demographics or regions. Additionally, some universities provide teaching or research assistantships that can significantly reduce education costs while providing valuable experience.
            </p>

            <p className="mb-4 text-justify">
              To maximize your chances of securing a scholarship, maintain a strong academic record, engage in meaningful extracurricular activities, and develop leadership skills. Stay informed about application deadlines, requirements, and new opportunities through educational websites, university portals, and scholarship databases. Consider applying to multiple scholarships to increase your chances of success.
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

export default ScholaroppPage;










