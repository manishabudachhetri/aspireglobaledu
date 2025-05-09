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

const GuidetoAusPage = () => {
  const navigate = useNavigate();
  const [currentPage] = useState(0);
  const postsPerPage = 3;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, []);

  const recommendedPosts: BlogPost[] = [
    {
      date: "21st Dec",
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
    },
    {
      date: "3rd Apr",
      image: "https://images.pexels.com/photos/2422278/pexels-photo-2422278.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Student Life in the UK",
      description: "Experience the vibrant student life in the UK: from campus activities to city exploration. Get insights on accommodation and social life.",
      path: "/blog/student-life-uk"
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
            <h1 className="text-4xl font-bold">Guide To Study In Australia</h1>
            <p className="mt-2">
              <Link to="/" className="hover:text-[#FF8E3C]">Home</Link> /{" "}
              <Link to="/blog" className="hover:text-[#FF8E3C]">Blog</Link> / Guide To Study In Australia
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
            Guide To Study In Australia
          </h1>
          <img 
            src="https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Guide to Study in Australia 2024" 
            className="w-full max-w-2xl mb-6 shadow" 
          />
        
          <div className="w-full max-w-[95%]">
            <p className="mb-4 text-justify">
              Australia has emerged as a premier destination for international students, offering world-class education, multicultural experiences, and excellent career opportunities. With its high-ranking universities, supportive student environment, and post-study work opportunities, Australia provides an ideal setting for academic and personal growth. This comprehensive guide will help you understand everything you need to know about studying in Australia.
            </p>
            <p className="mb-4 text-justify">
              The Australian education system is renowned for its practical approach to learning, innovative research opportunities, and strong industry connections. Universities in Australia offer a wide range of courses across various disciplines, with particular strengths in fields such as Engineering, Information Technology, Business, Health Sciences, and Environmental Studies. The country's education framework is strictly regulated by the Australian government, ensuring high-quality standards across all institutions.
            </p>

            {/* Highlight Box */}
            <div className="bg-blue-100 border-l-4 border-[#074293] text-[#333333] p-4 my-6 ml-8">
              <p className="font-semibold text-justify">
                Key advantages of studying in Australia include the opportunity to work part-time (up to 48 hours per fortnight) during your studies, access to post-study work visas ranging from 2-4 years, and potential pathways to permanent residency. The country's strong economy and skills shortage in various sectors create excellent employment prospects for international graduates. Additionally, Australian universities are known for their substantial research funding and state-of-the-art facilities, providing students with hands-on experience in their chosen fields.
              </p>
            </div>

            <p className="text-justify">
              When planning to study in Australia, it's essential to understand the admission requirements and visa process. Most universities require proof of English proficiency through tests like IELTS or PTE, academic transcripts, and sometimes additional requirements specific to your chosen course. The student visa (subclass 500) process involves demonstrating financial capacity, health insurance coverage, and genuine temporary entrant (GTE) requirements. It's recommended to start the application process at least 6-8 months before your intended course start date.
            </p>

            <p className="mb-4 text-justify">
              Living in Australia offers a unique blend of cultural experiences and lifestyle benefits. Major student cities like Melbourne, Sydney, and Brisbane provide excellent public transportation, diverse accommodation options, and vibrant cultural scenes. The cost of living varies by location, but students should budget approximately AUD 21,000 per year for living expenses. Many universities offer scholarship opportunities and financial aid to international students based on academic merit and other criteria.
            </p>

            <p className="mb-4 text-justify">
              For a successful study experience in Australia, it's crucial to plan your finances, understand your rights as an international student, and familiarize yourself with the support services available. Australian institutions provide comprehensive support including orientation programs, academic assistance, career guidance, and health services. The country's multicultural environment, combined with its safe and welcoming atmosphere, makes it easier for international students to adapt and thrive in their new surroundings.
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

export default GuidetoAusPage;









