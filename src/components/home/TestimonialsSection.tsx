
import { useState } from 'react';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Priya Chhetri",
      image: "https://images.unsplash.com/photo-1618355776464-8666794d2520?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D",
      quote: "Aspire Global Education made my dream of studying at LSE possible. Their guidance throughout the application process and test preparation was invaluable.",
    },
    {
      id: 2,
      name: "David Rai",
      image: "https://images.unsplash.com/photo-1545696968-1a5245650b36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D",
      quote: "Their test preparation courses helped me improve my IELTS score from 6.5 to 8.0. The visa assistance team made the intimidating immigration process simple and stress-free.",
    },
    {
      id: 3,
      name: "Nisha Thapa",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=500&auto=format&fit=crop",
      quote: "The career counseling services helped me choose the perfect university program. I'm now pursuing my dream course at Oxford University.",
    },
    {
      id: 4,
      name: "Ruhi Karki",
      image: "https://images.unsplash.com/photo-1529470839332-78ad660a6a82?w=500&auto=format&fit=crop",
      quote: "Outstanding support from start to finish. Their visa assistance made the complex application process smooth and successful.",
    }
  ];

  const totalSlides = Math.ceil(testimonials.length / 2);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-16 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-[#FF8E3C] text-2xl mb-2">Feedback</p>
          <h2 className="text-3xl md:text-3xl font-bold mb-4">
            <span className="text-[#074293]">What Our Students Say</span>
          </h2>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {[...Array(totalSlides)].map((_, slideIndex: number) => (
                <div 
                  key={slideIndex} 
                  className="w-full flex-shrink-0"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {testimonials
                      .slice(slideIndex * 2, (slideIndex * 2) + 2)
                      .map((testimonial) => (
                        <div key={testimonial.id} className="bg-white shadow-lg">
                          <div className="flex flex-col md:flex-row h-full">
                            <div className="md:w-1/3 h-[300px]">
                              <div className="w-full h-full relative">
                                <img
                                  src={testimonial.image}
                                  alt={testimonial.name}
                                  className="absolute inset-0 w-full h-full object-cover"
                                />
                              </div>
                            </div>
                            <div className="md:w-2/3 p-8">
                              <div className="flex flex-col h-full justify-center">
                                <blockquote className="mb-6">
                                  <p className="text-lg italic text-gray-600">"{testimonial.quote}"</p>
                                </blockquote>
                                <div>
                                  <h4 className="font-bold text-lg text-[#074293]">{testimonial.name}</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Navigation */}
          <div className="flex justify-center space-x-2 mt-8">
            {[...Array(totalSlides)].map((_, index: number) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-[#074293] w-6' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;









