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

const StudentLifePage = () => {
  const navigate = useNavigate();
  const [currentPage] = useState(0);
  const postsPerPage = 3;

  const recommendedPosts: BlogPost[] = [
    {
      date: "5th Apr",
      image: "https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Top Universities in the Australia",
      description: "Discover the prestigious universities in the USA, their unique offerings, and what makes them global education leaders.",
      path: "/blog/top-universities-australia"
    },
    {
      date: "7th Jun",
      image: "https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "How to Write a Winning SOP",
      description: "Learn the essential tips and strategies for crafting a compelling Statement of Purpose that stands out in your university applications.",
      path: "/blog/how-to-write-sop"
    },
    {
      date: "12th May",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Career Opportunities Abroad",
      description: "Explore exciting career prospects and job opportunities for international students in global markets.",
      path: "/blog/career-opportunities"
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
            <h1 className="text-4xl font-bold">Student Life In The UK</h1>
            <p className="mt-2">
              <Link to="/" className="hover:text-[#FF8E3C]">Home</Link> /{" "}
              <Link to="/blog" className="hover:text-[#FF8E3C]">Blog</Link> / Student Life In The UK
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
            Student Life In The United Kingdom
          </h1>
          <img 
            src="https://images.pexels.com/photos/2422278/pexels-photo-2422278.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Student Life" 
            className="w-full max-w-2xl mb-6 shadow" 
          />
        
          <div className="w-full max-w-[95%]">
            <p className="mb-4 text-justify">
              Student life in the United Kingdom offers a unique blend of academic excellence, cultural diversity, and personal growth opportunities. From historic universities to modern institutions, the UK education system provides students with world-class facilities, expert guidance, and a supportive learning environment that fosters both academic and personal development.
            </p>
            <p className="mb-4 text-justify">
              Accommodation options in the UK vary from university halls of residence to private housing. First-year students often choose university accommodation, which helps them integrate into campus life and build lasting friendships. These residences typically offer various room types, from shared facilities to en-suite rooms, catering to different preferences and budgets. Private housing becomes a popular choice in subsequent years, offering greater independence and often more affordable options.
            </p>

            {/* Highlight Box */}
            <div className="bg-blue-100 border-l-4 border-[#074293] text-[#333333] p-4 my-6 ml-8">
              <p className="font-semibold text-justify">
                The UK academic system emphasizes independent learning and critical thinking. Students typically attend lectures, seminars, and tutorials, with considerable time dedicated to self-study and research. The assessment methods include essays, presentations, group projects, and examinations. Time management and organizational skills are crucial for balancing academic responsibilities with social activities and possibly part-time work.
              </p>
            </div>

            <p className="text-justify">
              Student societies and clubs form an integral part of UK university life. These organizations cover diverse interests from academic and professional development to sports, arts, and cultural activities. Participating in these extracurricular activities not only enriches the university experience but also helps develop valuable soft skills and expand social networks.
            </p>

            <p className="mb-4 text-justify">
              Part-time work opportunities are available for international students (up to 20 hours per week during term time), helping with living expenses while gaining valuable work experience. Many universities have career services that assist with job searches, CV preparation, and interview skills. The UK's multicultural environment also provides excellent networking opportunities and exposure to diverse perspectives.
            </p>

            <p className="mb-4 text-justify">
              Healthcare in the UK is accessible through the National Health Service (NHS), with international students paying an Immigration Health Surcharge as part of their visa application. Universities also provide additional support services, including counseling, academic guidance, and international student support offices to help with various aspects of student life.
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

export default StudentLifePage;










