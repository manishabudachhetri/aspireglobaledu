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

const StudentvisaPage = () => {
  const navigate = useNavigate();
  const [currentPage] = useState(0);
  const postsPerPage = 3;

  const recommendedPosts: BlogPost[] = [
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
    },
    {
      date: "21st Dec",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "IELTS Preparation Tips and Tricks",
      description: "Master the IELTS exam with our expert strategies. Get practical tips for all four sections: Reading, Writing, Listening, and Speaking.",
      path: "/blog/ielts-preparation"
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
            <h1 className="text-4xl font-bold">Student Visa</h1>
            <p className="mt-2">
              <Link to="/" className="hover:text-[#FF8E3C]">Home</Link> /{" "}
              <Link to="/blog" className="hover:text-[#FF8E3C]">Blog</Link> / Student Visa
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
           Student Visa Application Guide
          </h1>
          <img 
            src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="Free Online Courses From Top Universities" 
            className="w-full max-w-2xl mb-6 shadow" 
          />
        
          <div className="w-full max-w-[95%]">
            <p className="mb-4 text-justify">
              Obtaining a student visa is a crucial step in pursuing international education. The process requires careful planning, attention to detail, and thorough preparation of documentation. Understanding the requirements and following the correct procedures can significantly improve your chances of a successful visa application.
            </p>
            <p className="mb-4 text-justify">
              The first step in the student visa process is securing admission from an accredited educational institution. Once you receive your acceptance letter, the institution will issue the necessary documentation (such as I-20 for US, CAS for UK) required for your visa application. This document confirms your enrollment and provides important details about your course of study.
            </p>

            {/* Highlight Box */}
            <div className="bg-blue-100 border-l-4 border-[#074293] text-[#333333] p-4 my-6 ml-8">
              <p className="font-semibold text-justify">
                Key requirements for student visa applications typically include proof of acceptance from an educational institution, evidence of sufficient financial resources to cover tuition and living expenses, proof of English language proficiency, valid passport, passport-sized photographs, and completed visa application forms. Additional requirements may include medical examinations, police clearance certificates, and proof of intent to return to your home country after completing your studies.
              </p>
            </div>

            <h3 className="text-xl font-semibold text-[#074293] mb-3 mt-6">Financial Documentation</h3>
            <p className="text-justify">
              One of the most critical aspects of your visa application is demonstrating sufficient financial resources. This typically involves providing bank statements, scholarship letters, or sponsorship documents showing you can cover your tuition fees and living expenses. The required amount varies by country and duration of study.
            </p>

            <h3 className="text-xl font-semibold text-[#074293] mb-3 mt-6">Visa Interview Preparation</h3>
            <p className="mb-4 text-justify">
              Many countries require a visa interview as part of the application process. During the interview, you should be prepared to discuss your study plans, chosen institution, financial arrangements, and post-study intentions. Clear, confident, and honest responses are essential. It's important to demonstrate strong ties to your home country and a genuine intention to return after completing your studies.
            </p>

            <h3 className="text-xl font-semibold text-[#074293] mb-3 mt-6">Common Visa Processing Times</h3>
            <p className="mb-4 text-justify">
              Visa processing times vary by country and season. Generally, it's recommended to begin the visa application process at least 3-4 months before your intended start date. Some countries offer priority processing services for an additional fee. Remember that during peak seasons (especially summer months), processing times may be longer.
            </p>

            <p className="mb-4 text-justify">
              After receiving your visa, familiarize yourself with its conditions, including work restrictions, reporting requirements, and validity period. Understanding and complying with these conditions is crucial for maintaining your legal status as an international student.
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

export default StudentvisaPage;













