import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from "lucide-react";
import FooterSection from '../components/home/FooterSection';

const blogPosts = [
  {
    date: "1th Jan",
    image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Free Online Courses From Top Universities",
    description: "Lorem Ipsum Dolor Sit Amet Consectetur. A Morbi Facilisi Volputate Pellentesque",
    path: "/blog/free-courses"
  },
  {
    date: "12th Feb",
    image: "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Guide to Study in Australia 2024",
    description: "Lorem Ipsum Dolor Sit Amet Consectetur. A Morbi Facilisi Volputate Pellentesque",
    path: "/blog/guide-to-australia"
  },
  {
    date: "21th Dec",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "IELTS Preparation Tips and Tricks",
    description: "Lorem Ipsum Dolor Sit Amet Consectetur. A Morbi Facilisi Volputate Pellentesque",
    path: "/blog/ielts-preparation"
  },
  {
    date: "15th Mar",
    image: "https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Scholarship Opportunities in Canada",
    description: "Lorem Ipsum Dolor Sit Amet Consectetur. A Morbi Facilisi Volputate Pellentesque",
    path: "/blog/scholarship-canada"
  },
  {
    date: "3rd Apr",
    image: "https://images.pexels.com/photos/2422278/pexels-photo-2422278.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Student Life in the United Kingdom",
    description: "Lorem Ipsum Dolor Sit Amet Consectetur. A Morbi Facilisi Volputate Pellentesque",
    path: "/blog/student-life-uk"
  },
  {
    date: "18th May",
    image: "https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Top Universities in the USA",
    description: "Lorem Ipsum Dolor Sit Amet Consectetur. A Morbi Facilisi Volputate Pellentesque",
    path: "/blog/top-universities-usa"
  },
  {
    date: "7th Jun",
    image: "https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "How to Write a Winning SOP",
    description: "Lorem Ipsum Dolor Sit Amet Consectetur. A Morbi Facilisi Volputate Pellentesque",
    path: "/blog/how-to-write-sop"
  },
  {
    date: "22nd Jul",
    image: "https://images.pexels.com/photos/2422283/pexels-photo-2422283.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Career Opportunities After Study Abroad",
    description: "Lorem Ipsum Dolor Sit Amet Consectetur. A Morbi Facilisi Volputate Pellentesque",
    path: "/blog/career-opportunities"
  },
  {
    date: "9th Aug",
    image: "https://images.pexels.com/photos/2422284/pexels-photo-2422284.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Student Visa Application Guide",
    description: "Lorem Ipsum Dolor Sit Amet Consectetur. A Morbi Facilisi Volputate Pellentesque",
    path: "/blog/student-visa-guide"
  },
  // Adding 6 more blog posts
  {
    date: "14th Sep",
    image: "https://images.pexels.com/photos/2422285/pexels-photo-2422285.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Preparing for University Interviews",
    description: "Lorem Ipsum Dolor Sit Amet Consectetur. A Morbi Facilisi Volputate Pellentesque",
    path: "/blog/university-interviews"
  },
  {
    date: "25th Oct",
    image: "https://images.pexels.com/photos/2422286/pexels-photo-2422286.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Financial Planning for International Students",
    description: "Lorem Ipsum Dolor Sit Amet Consectetur. A Morbi Facilisi Volputate Pellentesque",
    path: "/blog/financial-planning"
  },
  {
    date: "30th Nov",
    image: "https://images.pexels.com/photos/2422287/pexels-photo-2422287.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Cultural Adaptation Tips",
    description: "Lorem Ipsum Dolor Sit Amet Consectetur. A Morbi Facilisi Volputate Pellentesque",
    path: "/blog/cultural-adaptation"
  },
  {
    date: "5th Dec",
    image: "https://images.pexels.com/photos/2422288/pexels-photo-2422288.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Part-time Work Opportunities Abroad",
    description: "Lorem Ipsum Dolor Sit Amet Consectetur. A Morbi Facilisi Volputate Pellentesque",
    path: "/blog/part-time-work"
  },
  {
    date: "19th Dec",
    image: "https://images.pexels.com/photos/2422289/pexels-photo-2422289.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Choosing the Right Study Program",
    description: "Lorem Ipsum Dolor Sit Amet Consectetur. A Morbi Facilisi Volputate Pellentesque",
    path: "/blog/choosing-study-program"
  },
  {
    date: "28th Dec",
    image: "https://images.pexels.com/photos/2422291/pexels-photo-2422291.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Student Housing Guide",
    description: "Lorem Ipsum Dolor Sit Amet Consectetur. A Morbi Facilisi Volputate Pellentesque",
    path: "/blog/student-housing"
  }
];

const Blogg = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePostClick = (path: string) => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
    navigate(path);
  };

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
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
            <h1 className="text-4xl font-bold">Our Blog</h1>
            <p className="mt-2">
              <Link to="/" className="hover:text-[#FF8E3C]">Home</Link> / Blog
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 w-full">
          <div className="h-2 bg-[#074293]"></div>
          <div className="h-2 bg-[#FF8E3C]"></div>
        </div>
      </div>

      {/* Blog Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm text-orange-500 font-semibold mb-1">Latest Blog</p>
            <h2 className="text-3xl font-bold text-blue-900">Have a Look Our Blog</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white overflow-hidden shadow-md text-left relative h-[380px] max-w-[350px] mx-auto w-full cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() => handlePostClick(post.path)}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute top-40 right-4 bg-[#074293] text-white w-16 h-16 rounded-full flex items-center justify-center text-sm font-medium">
                  {post.date}
                </div>
                <div className="p-6">
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

          {/* Pagination */}
          <div className="flex justify-end items-center space-x-2 mt-12">
            <button
              className="border p-2 disabled:opacity-50 hover:bg-gray-100 transition-colors"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                className={`p-2 border min-w-[40px] ${
                  currentPage === i + 1 
                    ? "bg-[#074293] text-white" 
                    : "bg-white hover:bg-gray-100 transition-colors"
                }`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className="border p-2 disabled:opacity-50 hover:bg-gray-100 transition-colors"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
      <FooterSection />
    </div>
  );
};

export default Blogg;
