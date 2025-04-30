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

const TopUniPage = () => {
  const navigate = useNavigate();
  const [currentPage] = useState(0);
  const postsPerPage = 3;

  const recommendedPosts: BlogPost[] = [
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
    },
    {
      date: "15th Mar",
      image: "https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Student Visa Guide",
      description: "Complete guide to student visa application process, requirements, and tips for successful approval.",
      path: "/blog/student-visa-guide"
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
            <h1 className="text-4xl font-bold">Top Universities</h1>
            <p className="mt-2">
              <Link to="/" className="hover:text-[#FF8E3C]">Home</Link> /{" "}
              <Link to="/blog" className="hover:text-[#FF8E3C]">Blog</Link> / Top Universities
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
           Top Universities In Australia
          </h1>
          <img 
            src="https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Top Universities" 
            className="w-full max-w-2xl mb-6 shadow" 
          />
        
          <div className="w-full max-w-[95%]">
            <p className="mb-4 text-justify">
              Australia's higher education system is renowned for its academic excellence, innovative research, and exceptional student experience. The country's top universities consistently rank among the world's best institutions, offering a perfect blend of quality education, multicultural environment, and outstanding career opportunities. From prestigious Group of Eight (Go8) universities to leading technological institutes, Australian universities are setting global standards in education.
            </p>

            <h3 className="text-xl font-semibold text-[#074293] mb-3 mt-6">Group of Eight (Go8) Universities</h3>
            <p className="mb-4 text-justify">
              The University of Melbourne, consistently ranked as Australia's top university, is celebrated for its research output, teaching quality, and graduate employability. With its "Melbourne Model" of education, it offers unique, internationally-recognized qualifications that provide both depth and breadth of learning. The university's research initiatives span multiple disciplines, from biotechnology to sustainable development.
            </p>

            <p className="mb-4 text-justify">
              The University of Sydney, Australia's oldest university, combines historic tradition with modern innovation. Known for its iconic architecture and world-class facilities, it offers exceptional programs in medicine, engineering, and business. The university's location in the heart of Sydney provides students with unparalleled access to industry connections and cultural experiences.
            </p>

            {/* Highlight Box */}
            <div className="bg-blue-100 border-l-4 border-[#074293] text-[#333333] p-4 my-6 ml-8">
              <p className="font-semibold text-justify">
                Australian universities are distinguished by their strong focus on research, industry partnerships, and practical learning experiences. These institutions offer state-of-the-art facilities, comprehensive support services, and diverse study options. Many universities maintain strong connections with industry leaders, providing students with valuable internship and employment opportunities. The emphasis on both theoretical knowledge and practical skills ensures graduates are well-prepared for global careers.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-[#074293] mb-3 mt-6">Leading Technological Universities</h3>
            <p className="text-justify">
              The University of New South Wales (UNSW) excels in engineering, technology, and business education. Located in Sydney, UNSW is known for its strong industry connections and innovative teaching methods. The university's research centers and institutes are at the forefront of technological advancement and sustainable solutions.
            </p>

            <p className="mb-4 text-justify">
              Queensland University of Technology (QUT) is renowned for its real-world approach to education and strong focus on digital innovation. Situated in Brisbane, QUT offers cutting-edge facilities and programs that prepare students for the digital age. The university's emphasis on practical skills and industry engagement makes it a popular choice for technology and creative industries studies.
            </p>

            <h3 className="text-xl font-semibold text-[#074293] mb-3 mt-6">Research Excellence</h3>
            <p className="mb-4 text-justify">
              The Australian National University (ANU) is recognized globally for its research intensity and academic excellence. Based in Canberra, ANU has strong connections with government institutions and research organizations. The university's research programs contribute significantly to national and global challenges, from climate change to public policy.
            </p>

            <h3 className="text-xl font-semibold text-[#074293] mb-3 mt-6">Student Life and Support</h3>
            <p className="mb-4 text-justify">
              Australian universities offer comprehensive support services for international students, including orientation programs, academic support, career guidance, and health services. Campus life is vibrant with numerous clubs, societies, and sporting facilities. Many universities also provide dedicated international student support offices to help with accommodation, cultural adjustment, and academic progress.
            </p>

            <h3 className="text-xl font-semibold text-[#074293] mb-3 mt-6">Admission Requirements and Process</h3>
            <p className="mb-4 text-justify">
              Admission to Australian universities requires strong academic performance in previous studies, English language proficiency (IELTS/TOEFL), and sometimes additional requirements specific to certain programs. International students must meet both academic and English language requirements. Many universities offer pathway programs for students who need to enhance their qualifications before beginning their degree programs.
            </p>

            <h3 className="text-xl font-semibold text-[#074293] mb-3 mt-6">Career Opportunities</h3>
            <p className="mb-4 text-justify">
              Graduates from Australian universities are highly sought after by employers worldwide. Many institutions offer career development services, including internship programs, job search assistance, and networking opportunities. International students can also benefit from post-study work rights, allowing them to gain valuable work experience in Australia after completing their studies.
            </p>

            <h3 className="text-xl font-semibold text-[#074293] mb-3 mt-6">Research and Innovation</h3>
            <p className="mb-4 text-justify">
              Australian universities are at the forefront of global research and innovation. They maintain strong partnerships with industry leaders and research institutions worldwide. Students have opportunities to participate in groundbreaking research projects and benefit from the latest developments in their field of study. The focus on innovation and practical application ensures graduates are well-prepared for future challenges in their chosen careers.
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

export default TopUniPage;










