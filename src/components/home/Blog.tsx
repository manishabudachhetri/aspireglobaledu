
import { useNavigate } from 'react-router-dom';

const blogPosts = [
  {
    date: "1th Jan",
    image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Free Online Courses From Top Universities",
    description: "Discover world-class education at your fingertips with free courses from leading universities. ",
    path: "/blog/free-courses"
  },
  {
    date: "12th Feb",
    image: "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Guide to Study in Australia",
    description: "Everything you need to know about studying in Australia: university options, admission requirements, visa processes, and living costs.",
    path: "/blog/guide-to-australia"
  },
  {
    date: "21th Dec",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "IELTS Preparation",
    description: "Master the IELTS exam with our expert strategies. Get practical tips for all four sections: Reading, Writing, Listening, and Speaking.",
    path: "/blog/ielts-preparation"
  }
];

const Blog = () => {
  const navigate = useNavigate();

  const handlePostClick = (path: string) => {
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
    navigate(path);
  };

  return (
    <>
      <section className="pt-32 pb-12 px-4 text-center bg-white"> 
        <div className="container mx-auto max-w-7xl">
          <p className="text-sm text-orange-500 font-semibold mb-1">Latest Blog</p>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Have a Look Our Blog</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white overflow-hidden shadow-md text-left relative h-[380px] max-w-[350px] mx-auto w-full cursor-pointer hover:shadow-xl transition-all duration-300"
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
        </div>
      </section>
      <div className="h-4 bg-white"></div> 
    </>
  );
};

export default Blog;











