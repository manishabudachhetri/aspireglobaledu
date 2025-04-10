import React from "react";

const blogPosts = [
  {
    date: "1th Jan",
    image:
      "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Free Online Courses From Top Universities.",
    description:
      "Lorem Ipsum Dolor Sit Amet Consectetur. A Morbi Facilisi Volputate Pellentesque Sit Amet Consectetur. A Morbi Facilisi Volputate Pellentesque",
  },
  {
    date: "12th Feb",
    image:
      "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Free Online Courses From Top Universities.",
    description:
      "Lorem Ipsum Dolor Sit Amet Consectetur. A Morbi Facilisi Volputate Pellentesque Sit Amet Consectetur. A Morbi Facilisi Volputate Pellentesque",
  },
  {
    date: "21th Dec",
    image:
      "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Free Online Courses From Top Universities.",
    description:
      "Lorem Ipsum Dolor Sit Amet Consectetur. A Morbi Facilisi Volputate Pellentesque Sit Amet Consectetur. A Morbi Facilisi Volputate Pellentesque",
  },
];

const Blog = () => {
  return (
    <section className="pt-32 pb-16 px-4 text-center bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm text-orange-500 font-semibold mb-1">Latest Blog</p>
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Have a Look Our Blog</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mb-4">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden shadow-md text-left relative h-[380px] max-w-[350px] mx-auto w-full"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt="Blog" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute top-40 right-4 bg-[#074293] text-white w-16 h-16 rounded-full flex items-center justify-center text-sm font-medium">
                {post.date}
              </div>
              <div className="p-3">
                <h3 className="text-[#074293] font-semibold text-lg mb-1">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {post.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button className="bg-[#074293] text-white px-8 py-3 hover:bg-blue-800 transition-all">
          Read More →
        </button>
      </div>
    </section>
  );
};

export default Blog;

