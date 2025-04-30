
import { useState } from 'react';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Priya Chhetri",
      image: "https://images.unsplash.com/photo-1618355776464-8666794d2520?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D",
      quote: "Aspire Global Education made my dream of studying in the UK a reality. Their counselors provided exceptional guidance throughout the application process, and their test preparation programs helped me achieve the IELTS score I needed.",
    },
    {
      id: 2,
      name: "David Rai",
      image: "https://images.unsplash.com/photo-1545696968-1a5245650b36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D",
      quote: "The personalized attention and support I received from Aspire Global Education was outstanding. They helped me secure admission to my dream university in Dubai and guided me through every step of the visa process.",
    },
    {
      id: 3,
      name: "Nisha Thapa",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?w=500&auto=format&fit=crop",
      quote: "Thanks to Aspire Global Education's expert counseling, I was able to make an informed decision about my study destination. Their test preparation classes and mock interviews were invaluable in helping me succeed.",
    },
    {
      id: 4,
      name: "Ruhi Karki",
      image: "https://images.unsplash.com/photo-1529470839332-78ad660a6a82?w=500&auto=format&fit=crop",
      quote: "I'm grateful for the dedicated support from the Aspire Global Education team. Their comprehensive guidance, from university selection to visa application, made my journey to studying in Malta smooth and stress-free.",
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
            <span className="text-[#074293]">What Students Say?</span>
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
                        <div key={testimonial.id} className="bg-white shadow-lg p-10">
                          <div className="flex flex-col md:flex-row h-full gap-10">
                            <div className="md:w-2/5 h-[300px] relative p-3">
                              <div className="absolute top-0 left-0 w-[100px] h-[100px] border-l-[15px] border-t-[15px] border-[#074293]" />
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="md:w-3/5">
                              <div className="flex flex-col h-full justify-center">
                                <blockquote className="mb-6">
                                  <p className="text-lg text-gray-600">{testimonial.quote}</p>
                                </blockquote>
                                <div className="flex items-center gap-2">
                                  <span className="w-3 h-[3px] bg-[#074293] font-bold"></span>
                                  <h4 className="text-lg text-[#074293]">{testimonial.name}</h4>
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











































